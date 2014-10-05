(ns ewen.wreak)

(defmacro ^:no-doc with-this
  [& body]
  `(cljs.core/this-as ~'this
                      (cljs.core/binding [*component* ~'this] ~@body)))
