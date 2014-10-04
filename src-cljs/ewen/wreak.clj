(ns ewen.wreak)

(defmacro ^:no-doc with-this
  [& body]
  `(cljs.core/this-as ~'this
                      (if (nil? *component*)
                        (cljs.core/binding [*component* ~'this] ~@body)
                        ~@body)))
