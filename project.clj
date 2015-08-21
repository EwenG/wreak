(defproject ewen/wreak "0.2.0-SNAPSHOT"
            :description "React.js wrapper for clojurescript"
            :url "https://github.com/EwenG/wreak"
            :license {:name "Eclipse Public License"
                      :url "http://www.eclipse.org/legal/epl-v10.html"}
            :min-lein-version "2.0.0"
            :source-paths ["src-cljs"]
            :test-paths ["test"]
            :resource-paths ["resources/main"]
            :dependencies [[org.clojure/clojure "1.7.0"]
                           [org.clojure/clojurescript "0.0-3308"]
                           [datascript "0.11.5"]]
            :jvm-opts ["-Xss1G"]                                         ;Avoid stackoverflow when compiling clojurescript (for example, large go-loop macros)
            )
