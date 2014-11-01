(ns ewen.wreak
  "A React.js wrapper for clojurescript."
  (:require [datascript :as ds])
  (:require-macros [ewen.wreak :refer [with-this]]))


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

(defn get-in-props [component k]
  (-> component .-props (aget (keyword->string k))))

(defn get-conn [component]
  (get-in-props component ::conn))

(defn get-db [component]
  (get-in-props component ::db))

(defn update-component [comp]
  (when (and (.shouldComponentUpdate comp (get-props comp) (.-state comp)))
    (aset comp "props" (keyword->string ::db) *db*)
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
                                     (get-in-props *component* ::db))))}
        (= :getDefaultProps method-key)
        {:getDefaultProps (fn [] (with-this (method)))}
        (= :componentWillMount method-key)
        {:componentWillMount (fn []
                               (method
                                 (get-props *component*)
                                 (.-state *component*)
                                 (get-in-props *component* ::db)))}        ;componentWillMount is wrapped by with-this in
                                                                           ;hook-methods
        (= :componentDidMount method-key)
        {:componentDidMount (fn []
                              (with-this
                                (method
                                  (get-props *component*)
                                  (.-state *component*)
                                  (get-in-props *component* ::db))))}
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
                            (let [dirty-state-components (get-in-props *component* ::dirty-state-components)
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


(defn bind-other-method-args [[method-key method]]
  (cond (= :shouldComponentUpdate method-key)
        {:shouldComponentUpdate method}
        (= :render method-key)
        {:render (fn []
                   (with-this
                     (method
                       (get-props *component*)
                       (.-state *component*))))}
        :else {method-key method}))

(defn bind-methods-args-comp [methods-args]
  (->> (map bind-lifecycle-method-args methods-args)
       (apply merge)
       (map bind-other-method-args)
       (apply merge)))


(defn before-will-mount []
  (when-let [dbDidUpdate (.-dbDidUpdate *component*)]
    (swap! (get-in-props *component* ::tx-callbacks) conj *component*)))

(defn before-will-unmount []
  (when-let [dbDidUpdate (.-dbDidUpdate *component*)]
    (swap! (get-in-props *component* ::tx-callbacks) disj *component*)))


(defn hook-methods [methods-args]
  (-> methods-args
      (assoc :componentWillMount (fn [] (with-this (before-will-mount)
                                                   ((:componentWillMount methods-args (fn []))))))
      (assoc :componentWillUnmount (fn [] (with-this  (before-will-unmount)
                                                      ((:componentWillUnmount methods-args (fn []))))))))


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
            ancestor (or *component* #js {:props (map->js-obj {::depth -1 ::conn *conn* ::db *db* ::dirty-state-components *dirty-state-components* ::tx-callbacks *tx-callbacks*})})
            comp (react-component (->> (merge {::props props}
                                              react-key
                                              {::ancestor ancestor}
                                              {::depth (inc (get-in-props ancestor ::depth))}
                                              {::conn (get-in-props ancestor ::conn)}
                                              {::db (get-in-props ancestor ::db)}
                                              {::dirty-state-components (get-in-props ancestor ::dirty-state-components)}
                                              {::tx-callbacks (get-in-props ancestor ::tx-callbacks)})
                                       map->js-obj))]
        comp))))





(def roots (atom {}))

(defn detach-root
  "Given a DOM target remove its render loop if one exists."
  [node]
  (when-let [f (get @roots node)]
    (f)))


(defn depth-comparator [comp1 comp2]
  (let [result (compare (get-in-props comp1 ::depth)
                        (get-in-props comp2 ::depth))]
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
            ancestor (get-in-props component ::ancestor)]
        (recur (conj render-pending-components component)
               (-> s
                   (disj component)
                   (conj ancestor)))))))

(defn same-branch? [comp1 comp2]
  (let [sorted-comps (sort (comp - depth-comparator) [comp1 comp2])
        lowest-comp (first sorted-comps)
        highest-comp (second sorted-comps)]
    (loop [comp lowest-comp]
      (if (= (get-in-props comp ::depth)
             (get-in-props highest-comp ::depth))
        (= comp highest-comp)
        (recur (get-in-props comp ::ancestor))))))

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
             :tree-roots (-> tree-roots
                             (disj root)
                             (conj (:ancestor tree)))
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
                              (some #(= node (first %)) @roots))
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
                                  (let [id (-> (ds/transact! (get-conn *component*) [{:db/id -1
                                                                                              ::name name}])
                                               :tempids
                                               (get -1))]
                                    (aset *component* ::id id)))}
           retract-on-unmount
           (assoc :componentWillUnmount (fn [_ _]
                                          (ds/transact! (get-conn *component*) [[:db.fn/retractEntity
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

(defn merge-renders [& fns]
  (let [mixins-render (filter #(-> (meta %) :mixin-render) fns)
        component-render (filter #(-> (meta %) :mixin-render not) fns)]
    (when (> (count component-render) 1)
      (throw (js/Error. "A mixin cannot have more than one component render function.")))
    (cond
      (= 0 (count mixins-render)) component-render
      (= 0 (count component-render)) (vector mixins-render)
      :else (fn [props state]
              (apply (partial (first component-render) props state)
                     (map #(% props state) mixins-render))))))

(defn mixin [& maps]
  (if (= 1 (count maps))
    (first maps)
    (let [render-map {:render (apply merge-renders (->> maps
                                                  (filter :render)
                                                  (map :render)
                                                  flatten))}
           react-lifecycle-map (->> (map #(select-keys % react-lifecycle-methods) maps)
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
             render-map
             react-lifecycle-map
             db-did-update-map
             state-will-update-map
             get-initial-state-map))))

(defn clone-with-props [component props-updater]
  (let [component-props (-> (.-props component) js->clj)]
    (.cloneWithProps js/React.addons component (-> (props-updater component-props) clj->js))))