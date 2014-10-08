(ns ewen.wreak
  "A React.js wrapper for clojurescript."
  (:require [datascript :as ds])
  (:require-macros [ewen.wreak :refer [with-this]] ))


(def ^:dynamic *conn* nil)
(def ^:dynamic *db* nil)
(def ^:dynamic *tx-callbacks*)
(def ^:dynamic *dirty-state-components*)
(def ^:dynamic *dirty-components-render*)

(def ^:dynamic *component*)



(defn keyword->string
  "Convert a keyword to a string like the cljs.core/name function but also handles
namespaced keywords."
  [arg]
  (let [namespace (namespace arg)]
    (if namespace (str namespace "/" (name arg))
                  (name arg))))


(defn get-props
  "Return the props of the component."
  [comp]
  (-> comp .-props (aget (keyword->string ::props))))

(defn update-component [comp]
  (when (and (.shouldComponentUpdate comp (get-props comp) (.-state comp)))
    (.log js/console (.isMounted comp))
    (.forceUpdate comp)))

(def tx-meta-filters #{:mouse-event})

(defn call-db-did-update? [tx-meta
                           f-meta
                           tx-meta-filters]
  (if-let [filters (->> (:tx-meta-filters tx-meta)
                        (clojure.set/intersection tx-meta-filters))]
    (let [f-filters (-> f-meta :tx-meta-filters)]
      (when (empty? (clojure.set/difference filters f-filters))
        true))
    true))



(defn bind-lifecycle-method-args [[method-key method]]
  (cond (= :getInitialState method-key)
        {:getInitialState (fn [] (with-this
                                   (method
                                     (get-props *component*)
                                     *db*)))}
        (= :getDefaultProps method-key)
        {:getDefaultProps (fn [] (with-this (method)))}
        (= :componentWillMount method-key)
        {:componentWillMount (fn []
                               (method
                                 (get-props *component*)
                                 (.-state *component*)))}        ;componentWillMount is wrapped by with-this in
                                                                 ;hook-methods
        (= :componentDidMount method-key)
        {:componentDidMount (fn []
                              (with-this
                                (method
                                  (get-props *component*)
                                  (.-state *component*)
                                  *db*)))}
        (= :componentWillUpdate method-key)
        {:componentWillUpdate (fn [next-props next-state]
                                (with-this
                                  (method
                                    (get-props *component*)
                                    (aget next-props (keyword->string ::props))
                                    (.-state *component*)
                                    next-state)))}
        (= :componentDidUpdate method-key)
        {:componentDidUpdate (fn [prev-props prev-state]
                               (with-this
                                 (method
                                   (aget prev-props (keyword->string ::props))
                                   (get-props *component*)
                                   prev-state
                                   (.-state *component*))))}
        (= :dbDidUpdate method-key)
        {:dbDidUpdate (fn [tx-report]
                        (with-this
                          (when (call-db-did-update? (:tx-meta tx-report)
                                                     (meta method)
                                                     tx-meta-filters)
                            (let [dirty-state-components (aget *component* "dirty-state-components")
                                  state-listener (aget *component* "stateWillUpdate")
                                  old-state (.-state *component*)
                                  new-state (method
                                              (get-props *component*)
                                              old-state
                                              tx-report)
                                  new-state (if (and (not= old-state new-state)
                                                     state-listener)
                                              (.stateWillUpdate *component* (:db-after tx-report) old-state new-state)
                                              new-state)]
                              (when (not= old-state new-state)
                                (aset *component* "state" new-state)
                                (swap! dirty-state-components conj *component*))))))}
        (= :stateWillUpdate method-key)
        {:stateWillUpdate (fn [db old-state new-state]
                           (with-this
                             (method (get-props *component*)
                                     db
                                     old-state
                                     new-state)))}
        (= :componentWillUnmount method-key)
        {:componentWillUnmount (fn []
                                 (method
                                   (get-props *component*)
                                   (.-state *component*)))}   ;componentWillUnmount is wrapped by with-this in
                                                              ;hook-methods
        (= :componentWillReceiveProps method-key)
        {:componentWillReceiveProps (fn [next-props]
                                      (with-this (method
                                                   next-props
                                                   (get-props *component*)
                                                   (.-state *component*))))}
        :else {method-key method}))

(def ^:dynamic *comp-tree-param* (atom {:ancestor :root :children [] :depth 0}))

(defn bind-other-method-args [[method-key method]]
  (cond (= :shouldComponentUpdate method-key)
        {:shouldComponentUpdate method}
        (= :render method-key)
        {:render (fn []
                   (with-this
                     (let [depth (.-depth this)]
                       (binding [*comp-tree-param* (atom (assoc @*comp-tree-param* :ancestor this
                                                                               :children []
                                                                               :depth (inc depth)))]
                         (let [r (method
                                   (get-props *component*)
                                   (.-state *component*))]
                           (aset this "children" (:children @*comp-tree-param*))
                           r)))))}
        :else {method-key method}))

(defn bind-methods-args-comp [methods-args]
  (->> (map bind-lifecycle-method-args methods-args)
       (apply merge)
       (map bind-other-method-args)
       (apply merge)))

(defn before-will-mount []
  (aset *component* "conn" *conn*)
  (aset *component* "dirty-state-components" *dirty-state-components*)
  (aset *component* "tx-callbacks" *tx-callbacks*)
  (aset *component* "ancestor" (:ancestor @*comp-tree-param*))
  (aset *component* "depth" (:depth @*comp-tree-param*))
  (swap! *comp-tree-param* assoc :children (conj (:children @*comp-tree-param*) *component*))
  (when-let [dbDidUpdate (.-dbDidUpdate *component*)]
    (swap! (aget *component* "tx-callbacks") conj *component*)))

(defn after-will-unmount []
  (when-let [dbDidUpdate (.-dbDidUpdate *component*)]
    (swap! (aget *component* "tx-callbacks") disj *component*)))

(defn hook-methods [methods-args]
  (-> methods-args
      (assoc :componentWillMount (fn [] (with-this (before-will-mount) ((:componentWillMount methods-args (fn []))))))
      (assoc :componentWillUnmount (fn [] (with-this ((:componentWillUnmount methods-args (fn [])))
                                                     (after-will-unmount))))))


(defn map->js-obj [in-map]
  (apply js-obj (mapcat (fn [[k v]] [(keyword->string k) v]) in-map)))


(defn component
  "Given a name and a map of keyword to lifecycle methods,
return a react component as if created with React.createClass.

TODO Add a schema for methods-map.

Any entry of methods-map which is not a react.js lifecycle method
will be merged into the returned javascript object.

By default, the shouldComponentUpdate is set to take advantage
of clojurescript persistent datastructures.
By default, displayName is set to the provided name."
  [name methods-map]
  (let [default-methods {:shouldComponentUpdate
                                      (fn [next-props next-state]
                                        (this-as this
                                                 (or (not= next-props (get-props this))
                                                     (some #(= this) *dirty-components-render*))))
                         :displayName name}
        methods-map (merge default-methods methods-map)
        methods-map (bind-methods-args-comp methods-map)
        methods-map (hook-methods methods-map)
        react-component (.createClass js/React (clj->js methods-map))]
    (fn [props]
      (let [react-key (select-keys props [:key])
            props (dissoc props :key)
            comp (react-component (->> (merge {::props props} react-key)
                                        map->js-obj))]
        comp))))

#_(defn mixin
  "Return a react.js mixin."
  [methods-map]
  (let [methods-map (bind-methods-args-mixin methods-map)]
    (map->js-obj methods-map)))




(def roots (atom {}))

(defn detach-root
  "Given a DOM target remove its render loop if one exists."
  [node]
  (when-let [f (get @roots node)]
    (f)))


(defn depth-comparator [comp1 comp2]
  (let [result (compare (.-depth comp1) (.-depth comp2))]
    (if (not= 0 result)
      result
      (if (= comp1 comp2) 0 1))))

(defn lowest-common-ancestor [components]
  (loop [render-pending-components #{}
         s (-> (partial sorted-set-by (comp - depth-comparator))
               (apply components))]
    (if (<= (count s) 1)
      {:ancestor (first s) :components (conj render-pending-components (first s))}
      (let [component (first s)
            ancestor (.-ancestor component)]
        (recur (conj render-pending-components component)
               (-> s
                   (disj component)
                   (conj ancestor)))))))

(defn same-branch? [comp1 comp2]
  (let [sorted-comps (sort (comp - depth-comparator) [comp1 comp2])
        lowest-comp (first sorted-comps)
        highest-comp (second sorted-comps)]
    (loop [comp lowest-comp]
      (if (= (.-depth comp) (.-depth highest-comp))
        (= comp highest-comp)
        (recur (.-ancestor comp))))))

(defn update-render-pending [{:keys [tree-roots dirty-components]}
                             db
                             {:keys [ancestor components]}]
  (loop [roots-iterator tree-roots]
    (if (empty? roots-iterator)
      {:db db
       :tree-roots (conj tree-roots ancestor)
       :dirty-components (clojure.set/union dirty-components components)}
      (let [root (first roots-iterator)]
        (if (same-branch? root ancestor)
          (let [tree (lowest-common-ancestor #{root ancestor})]
            {:db db
             :tree-roots       (:ancestor tree)
             :dirty-components (clojure.set/union dirty-components components (:components tree))})
          (recur (rest roots-iterator)))))))


(defn render
  [component props node db conn]
  (detach-root node)
  (let [tx-callbacks (atom #{})
        dirty-state-components (atom #{})
        render-pending (atom {:db nil :tree-roots #{} :dirty-components #{}})
        tx-listener (fn [tx-report]
                      (doseq [tx-callback @tx-callbacks]
                        (.dbDidUpdate tx-callback tx-report))
                      (when (not-empty @dirty-state-components)
                        (swap! render-pending update-render-pending
                               (:db-after tx-report)
                               (lowest-common-ancestor @dirty-state-components))
                        (reset! dirty-state-components #{})))]
    (binding [*conn* conn
              *db* db
              *tx-callbacks* tx-callbacks
              *dirty-state-components* dirty-state-components]
      (.renderComponent js/React (component props) node))
    (add-watch render-pending :perform-render
               (fn [_ _ _ _]
                 (let [{:keys [db tree-roots dirty-components] :as render-data} @render-pending]
                   (when (and (not-empty tree-roots)
                              (some #(= node %) @roots))
                     (compare-and-set! render-pending render-data {:db nil :tree-roots #{} :dirty-components #{}})
                     (binding [*dirty-components-render* dirty-components
                               *conn* conn
                               *db* db
                               *tx-callbacks* tx-callbacks
                               *dirty-state-components* dirty-state-components]
                       (doseq [tree-root tree-roots]
                         (update-component tree-root)))))))
    (ds/listen! conn tx-listener)
    ;; store fn to remove previous root render loop
    (swap! roots assoc node
           (fn []
             (ds/unlisten! conn tx-listener)
             (swap! roots dissoc node)
             (js/React.unmountComponentAtNode node)))))


;Mixins

(defn component-id-mixin
  ([name] (component-id-mixin name true))
  ([name retract-on-unmount]
   (cond-> {:componentWillMount (fn [_ _]
                                  (let [id (-> (ds/transact! (.-conn *component*) [{:db/id -1
                                                                                              ::name name}])
                                               :tempids
                                               (get -1))]
                                    (aset *component* ::id id)))}
           retract-on-unmount
           (assoc :componentWillUnmount (fn [_ _]
                                          (ds/transact! (.-conn *component*) [[:db.fn/retractEntity
                                                                                         (aget *component* ::id)]]))))))




(def react-lifecycle-methods #{:componentWillMount :componentDidMount :componentWillUpdate :componentDidUpdate
                               :componentWillUnmount :componentWillReceiveProps #_:dbDidUpdate #_:stateWillUpdate})

(defn make-partial-db-did-update [db-did-update props tx-report]
  (fn [state]
    (db-did-update props state tx-report)))

(defn make-partial-get-initial-state [get-initial-state props db]
  (fn [state]
    (get-initial-state props db state)))

(defn make-partial-state-will-update [state-will-update props old-state]
  (fn [state]
    (state-will-update props old-state state)))

(defn merge-db-did-update [f1 f2]
  (fn [props state tx-report]
    (let [call-f1? (call-db-did-update? (:tx-meta tx-report)
                                        (meta f1)
                                        tx-meta-filters)
          call-f2? (call-db-did-update? (:tx-meta tx-report)
                                        (meta f2)
                                        tx-meta-filters)
          f1-res (if call-f1?
                   (f1 props state tx-report)
                   state)]
      (if call-f2?
        (f2 props f1-res tx-report)
        state))))

(defn merge-state-will-update [f1 f2]
  (fn [props db old-state new-state]
    (f2 props db old-state (f1 props db old-state new-state))))

(defn merge-get-initial-state-1 [f1 f2]
  (fn [props db]
    (f2 props db (f1 props db))))

(defn merge-get-initial-state-2 [f1 f2]
  (fn [props db state]
    (f2 props db (f1 props db state))))

(defn mixin [& maps]
  (let [react-lifecycle-map (->> (map #(select-keys % react-lifecycle-methods) maps)
                             (apply (partial merge-with juxt)))
        db-did-update-map (->> (map #(select-keys % [:dbDidUpdate]) maps)
                               (apply (partial merge-with merge-db-did-update)))
        state-will-update-map (->> (map #(select-keys % [:stateWillUpdate]) maps)
                               (apply (partial merge-with merge-state-will-update)))

        get-initial-state-map-1 (select-keys (first maps) [:getInitialState])
        get-initial-state-map-2 (->> (map #(select-keys % [:getInitialState]) (rest maps))
                                     (apply (partial merge-with merge-get-initial-state-2)))
        get-initial-state-map (merge-with merge-get-initial-state-1
                                          get-initial-state-map-1
                                          get-initial-state-map-2) ;TODO What is get-initial-state-map-1 is empty ??
        other-methods (apply (partial merge-with (fn [val1 val2] val1)) maps)]
    (merge other-methods
           react-lifecycle-map
           db-did-update-map
           state-will-update-map
           get-initial-state-map)))