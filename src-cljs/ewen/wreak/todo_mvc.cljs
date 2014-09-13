(ns ewen.wreak.todo-mvc
  (:require [ewen.wreak :refer [component *component* render]]))

(def my-component
  (component "my-component"
             {:render (fn [props state statics]
                        (let [comp *component*] ;*component* is bound to the React component
                          (.div js/React.DOM nil "Hello")))
              :getInitialState (fn [props statics]
                                 {:demo-val "This for demonstration purpose"})
              :componentDidMount (fn [props state statics]
                                   ;Initialize your component here
                                   )
              :componentWillUnmount (fn [props state statics]
                                      ;Cleanup actions here
                                      )}))

(let [props {}
      statics {}]
  (render (my-component props statics)
          (.getElementById js/document "root-node")))

