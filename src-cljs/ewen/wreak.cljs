(ns ewen.wreak
  "A React.js wrapper for clojurescript."
  (:require [cljs.core.async :as async]
            [datascript :as ds])
  (:require-macros [ewen.wreak :refer [with-this]]
                   [cljs.core.async.macros :refer [go go-loop]] ))

(def ^:dynamic *db* nil)
(def ^:dynamic *tx-mult*)
(def ^:dynamic *dirty-state-components*)

(def ^:dynamic *component*)

(defn keyword->string
  "Convert a keyword to a string like the cljs.core/name function but also handles
namespaced keywords."
  [arg]
  (let [namespace (namespace arg)]
    (if namespace (str namespace "/" (name arg))
                  (name arg))))

(defn get-state
  "Return the state of the component."
  [comp]
  (aget comp (keyword->string ::state)))

(defn replace-state!
  "Replace the state of the component."
  [comp next-state]
  (.replaceState comp (js-obj (keyword->string ::state) next-state)))

(defn get-props
  "Return the props of the component."
  [comp]
  (-> comp .-props (aget (keyword->string ::props))))

(defn get-statics
  "Return the statics associated with the component."
  [comp]
  (-> comp .-props (aget (keyword->string ::statics))))


(defn bind-lifecycle-method-args [[method-key method]]
  (cond (= :getInitialState method-key)
        {:getInitialState (fn [] (with-this
                                   (let [init-state (method
                                                      (get-props *component*)
                                                      *db*)]
                                     (reset! (get-state *component*) init-state))))}
        (= :getDefaultProps method-key)
        {:getDefaultProps (fn [] (with-this (method)))}
        (= :componentWillMount method-key)
        {:componentWillMount (fn []
                               (with-this
                                 (method
                                   (get-props *component*)
                                   (get-state *component*)
                                   (get-statics *component*))))}
        (= :componentDidMount method-key)
        {:componentDidMount (fn []
                              (with-this
                                (method
                                  (get-props *component*)
                                  (get-state *component*)
                                  (get-statics *component*))))}
        (= :componentWillUpdate method-key)
        {:componentWillUpdate (fn [next-props next-state]
                                (with-this
                                  (method
                                    (get-props *component*)
                                    (aget next-props (keyword->string ::props))
                                    (.-state *component*)
                                    next-state
                                    (get-statics *component*))))}
        (= :componentDidUpdate method-key)
        {:componentDidUpdate (fn [prev-props prev-state]
                               (with-this
                                 (method
                                   (aget prev-props (keyword->string ::props))
                                   (get-props *component*)
                                   prev-state
                                   (.-state *component*)
                                   (get-statics *component*))))}
        (= :componentWillUnmount method-key)
        {:componentWillUnmount (fn []
                                 (with-this (method
                                              (get-props *component*)
                                              (get-state *component*)
                                              (get-statics *component*))))}
        (= :componentWillReceiveProps method-key)
        {:componentWillReceiveProps (fn [next-props]
                                      (with-this (method
                                                   next-props
                                                   (get-props *component*)
                                                   (get-state *component*)
                                                   (get-statics *component*))))}
        :else {method-key method}))

(def ^:dynamic comp-tree-param (atom {:ancestor :root :children [] :depth 0}))

(defn bind-other-method-args [[method-key method]]
  (cond (= :shouldComponentUpdate method-key)
        {:shouldComponentUpdate method}
        (= :render method-key)
        {:render (fn []
                   (with-this
                     (let [depth (.-depth this)]
                       (binding [comp-tree-param (atom (assoc @comp-tree-param :ancestor this
                                                                               :children []
                                                                               :depth (inc depth)))]
                         (let [r (method
                                   (get-props *component*)
                                   (.-state *component*))]
                           (aset this "children" (:children @comp-tree-param))
                           r)))))}
        :else {method-key method}))

(defn bind-methods-args-comp [methods-args]
  (->> (map bind-lifecycle-method-args methods-args)
       (apply merge)
       (map bind-other-method-args)
       (apply merge)))

(defn bind-methods-args-mixin [methods-args]
  (->> (map bind-lifecycle-method-args methods-args)
       (apply merge)))

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
                                                   (.-dirty this))))
                         :displayName name}
        methods-map (merge default-methods methods-map)
        methods-map (bind-methods-args-comp methods-map)
        react-component (.createClass js/React (clj->js methods-map))]
    (fn [props]
      (let [react-key (select-keys props [:key])
            props (dissoc props :key)
            state (atom nil)
            comp (react-component (->> (merge {::props props} react-key)
                                        map->js-obj))]
        (add-watch state ::state-watch (fn [_ _ _ new]
                                         (let [dirty-state-components (aget comp "dirty-state-components")]
                                           (aset comp "state" new)
                                           (aset comp "render-pending" true)
                                           (swap! dirty-state-components conj comp))))
        (aset comp (keyword->string ::state) state)
        (aset comp "dirty-state-components" *dirty-state-components*)
        (aset comp "render-pending" false)
        (aset comp "tx-mult" *tx-mult*)
        (aset comp "ancestor" (:ancestor @comp-tree-param))
        (aset comp "depth" (:depth @comp-tree-param))
        (swap! comp-tree-param assoc :children (conj (:children @comp-tree-param) comp))
        comp))))

(defn mixin
  "Return a react.js mixin."
  [methods-map]
  (let [methods-map (bind-methods-args-mixin methods-map)]
    (map->js-obj methods-map)))

(extend-type cljs.core.async.impl.channels/ManyToManyChannel
  ds/IPublish
  (publish [this report]
    (go (async/>! this report))))

(def roots (atom {}))

(defn detach-root
  "Given a DOM target remove its render loop if one exists."
  [node]
  (when-let [f (get @roots node)]
    (f)))


(defn depth-comparator [comp1 comp2]
  (let [result (compare (.-depth comp1) (.-depth comp2))]
    (if (not= 0 result)
      (- result)
      (if (= comp1 comp2) 0 1))))

(defn lowest-common-ancestor [components]
  (loop [s (-> (partial sorted-set-by depth-comparator)
                      (apply components))]
    (if (<= (count s) 1)
      (first s)
      (let [component (first s)
            ancestor (.-ancestor component)]
        (recur (-> s
                   (disj component)
                   (conj ancestor)))))))

(defn render
  [component props node db conn]
  (detach-root node)
  (let [tx-mult (async/mult (async/chan))
        tx-listener (async/chan)
        dirty-state-components (atom #{})
        render-pending-roots (atom #{})]
    (binding [*db* db
              *tx-mult* tx-mult
              *dirty-state-components* dirty-state-components]
      (.renderComponent js/React (component props) node))
    (go-loop []
             (when-let [tx (async/<! tx-listener)]
               (async/>! (async/muxch* tx-mult) tx)

               (.log js/console (str @dirty-state-components))
               (reset! dirty-state-components #{})
               (recur))
             (ds/unlisten! conn tx-listener))
    (ds/listen! conn tx-listener)
    ;; store fn to remove previous root render loop
    (swap! roots assoc node
           (fn []
             (ds/unlisten! conn tx-listener)
             (async/close! tx-listener)
             (async/close! (async/muxch* tx-mult))
             (swap! roots dissoc node)
             (js/React.unmountComponentAtNode node)))))
