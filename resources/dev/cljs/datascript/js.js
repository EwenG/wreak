// Compiled by ClojureScript 0.0-2311
goog.provide('datascript.js');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('datascript');
goog.require('datascript');
datascript.js.keywordize = (function keywordize(s){if((typeof s === 'string') && (cljs.core._EQ_.call(null,cljs.core.subs.call(null,s,(0),(1)),":")))
{return cljs.core.keyword.call(null,cljs.core.subs.call(null,s,(1)));
} else
{return s;
}
});
datascript.js.schema__GT_clj = (function schema__GT_clj(schema){return clojure.walk.postwalk.call(null,datascript.js.keywordize,cljs.core.js__GT_clj.call(null,schema));
});
datascript.js.entity__GT_clj = (function entity__GT_clj(e){if(cljs.core.map_QMARK_.call(null,e))
{return cljs.core.assoc.call(null,cljs.core.dissoc.call(null,e,":db/id"),new cljs.core.Keyword("db","id","db/id",-1388397098),e.call(null,":db/id"));
} else
{if(cljs.core._EQ_.call(null,cljs.core.first.call(null,e),":db.fn/call"))
{var vec__29258 = e;var _ = cljs.core.nth.call(null,vec__29258,(0),null);var f = cljs.core.nth.call(null,vec__29258,(1),null);var args = cljs.core.nthnext.call(null,vec__29258,(2));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418),((function (vec__29258,_,f,args){
return (function() { 
var G__29260__delegate = function (args__$1){return datascript.js.entities__GT_clj.call(null,cljs.core.apply.call(null,f,args__$1));
};
var G__29260 = function (var_args){
var args__$1 = null;if (arguments.length > 0) {
  args__$1 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__29260__delegate.call(this,args__$1);};
G__29260.cljs$lang$maxFixedArity = 0;
G__29260.cljs$lang$applyTo = (function (arglist__29261){
var args__$1 = cljs.core.seq(arglist__29261);
return G__29260__delegate(args__$1);
});
G__29260.cljs$core$IFn$_invoke$arity$variadic = G__29260__delegate;
return G__29260;
})()
;})(vec__29258,_,f,args))
], null),args);
} else
{if(cljs.core.sequential_QMARK_.call(null,e))
{var vec__29259 = e;var op = cljs.core.nth.call(null,vec__29259,(0),null);var entity = cljs.core.nthnext.call(null,vec__29259,(1));return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [datascript.js.keywordize.call(null,op)], null),entity);
} else
{return null;
}
}
}
});
datascript.js.entities__GT_clj = (function entities__GT_clj(entities){return cljs.core.map.call(null,datascript.js.entity__GT_clj,cljs.core.js__GT_clj.call(null,entities));
});
datascript.js.datom__GT_js = (function datom__GT_js(d){return {"added": d.added, "tx": d.tx, "v": d.v, "a": d.a, "e": d.e};
});
datascript.js.tx_report__GT_js = (function tx_report__GT_js(report){return {"tempids": cljs.core.clj__GT_js.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(report)), "tx_data": cljs.core.into_array.call(null,cljs.core.map.call(null,datascript.js.datom__GT_js,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(report))), "db_after": new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report), "db_before": new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(report)};
});
datascript.js.entity__GT_js = (function entity__GT_js(e){return cljs.core.clj__GT_js.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,e,new cljs.core.Keyword("db","id","db/id",-1388397098)),":db/id",new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(e)));
});
/**
* @param {...*} var_args
*/
datascript.js.empty_db = (function() { 
var empty_db__delegate = function (p__29262){var vec__29264 = p__29262;var schema = cljs.core.nth.call(null,vec__29264,(0),null);return datascript.empty_db.call(null,datascript.js.schema__GT_clj.call(null,schema));
};
var empty_db = function (var_args){
var p__29262 = null;if (arguments.length > 0) {
  p__29262 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__29262);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__29265){
var p__29262 = cljs.core.seq(arglist__29265);
return empty_db__delegate(p__29262);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
goog.exportSymbol('datascript.js.empty_db', datascript.js.empty_db);
/**
* @param {...*} var_args
*/
datascript.js.q = (function() { 
var q__delegate = function (query,sources){var query__$1 = cljs.reader.read_string.call(null,query);var results = cljs.core.apply.call(null,datascript.q,query__$1,sources);return cljs.core.into_array.call(null,(function (){var iter__4304__auto__ = ((function (query__$1,results){
return (function iter__29270(s__29271){return (new cljs.core.LazySeq(null,((function (query__$1,results){
return (function (){var s__29271__$1 = s__29271;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29271__$1);if(temp__4126__auto__)
{var s__29271__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29271__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29271__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29273 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29272 = (0);while(true){
if((i__29272 < size__4303__auto__))
{var tuple = cljs.core._nth.call(null,c__4302__auto__,i__29272);cljs.core.chunk_append.call(null,b__29273,cljs.core.into_array.call(null,tuple));
{
var G__29274 = (i__29272 + (1));
i__29272 = G__29274;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29273),iter__29270.call(null,cljs.core.chunk_rest.call(null,s__29271__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29273),null);
}
} else
{var tuple = cljs.core.first.call(null,s__29271__$2);return cljs.core.cons.call(null,cljs.core.into_array.call(null,tuple),iter__29270.call(null,cljs.core.rest.call(null,s__29271__$2)));
}
} else
{return null;
}
break;
}
});})(query__$1,results))
,null,null));
});})(query__$1,results))
;return iter__4304__auto__.call(null,results);
})());
};
var q = function (query,var_args){
var sources = null;if (arguments.length > 1) {
  sources = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,query,sources);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__29275){
var query = cljs.core.first(arglist__29275);
var sources = cljs.core.rest(arglist__29275);
return q__delegate(query,sources);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;
goog.exportSymbol('datascript.js.q', datascript.js.q);
datascript.js.with_datoms = (function with_datoms(db,entities){return datascript.with$.call(null,db,datascript.js.entities__GT_clj.call(null,entities));
});
goog.exportSymbol('datascript.js.with_datoms', datascript.js.with_datoms);
datascript.js.entity = (function entity(db,eid){return datascript.js.entity__GT_js.call(null,datascript.entity.call(null,db,eid));
});
goog.exportSymbol('datascript.js.entity', datascript.js.entity);
/**
* @param {...*} var_args
*/
datascript.js.create_conn = (function() { 
var create_conn__delegate = function (p__29276){var vec__29278 = p__29276;var schema = cljs.core.nth.call(null,vec__29278,(0),null);return datascript.create_conn.call(null,datascript.js.schema__GT_clj.call(null,schema));
};
var create_conn = function (var_args){
var p__29276 = null;if (arguments.length > 0) {
  p__29276 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__29276);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__29279){
var p__29276 = cljs.core.seq(arglist__29279);
return create_conn__delegate(p__29276);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
goog.exportSymbol('datascript.js.create_conn', datascript.js.create_conn);
datascript.js.db = (function db(conn){return cljs.core.deref.call(null,conn);
});
goog.exportSymbol('datascript.js.db', datascript.js.db);
datascript.js.transact = (function transact(conn,entities){var entities__$1 = datascript.js.entities__GT_clj.call(null,entities);var report = datascript.js.tx_report__GT_js.call(null,datascript._transact_BANG_.call(null,conn,entities__$1));var seq__29286_29292 = cljs.core.seq.call(null,cljs.core.deref.call(null,new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn))));var chunk__29287_29293 = null;var count__29288_29294 = (0);var i__29289_29295 = (0);while(true){
if((i__29289_29295 < count__29288_29294))
{var vec__29290_29296 = cljs.core._nth.call(null,chunk__29287_29293,i__29289_29295);var __29297 = cljs.core.nth.call(null,vec__29290_29296,(0),null);var callback_29298 = cljs.core.nth.call(null,vec__29290_29296,(1),null);callback_29298.call(null,report);
{
var G__29299 = seq__29286_29292;
var G__29300 = chunk__29287_29293;
var G__29301 = count__29288_29294;
var G__29302 = (i__29289_29295 + (1));
seq__29286_29292 = G__29299;
chunk__29287_29293 = G__29300;
count__29288_29294 = G__29301;
i__29289_29295 = G__29302;
continue;
}
} else
{var temp__4126__auto___29303 = cljs.core.seq.call(null,seq__29286_29292);if(temp__4126__auto___29303)
{var seq__29286_29304__$1 = temp__4126__auto___29303;if(cljs.core.chunked_seq_QMARK_.call(null,seq__29286_29304__$1))
{var c__4335__auto___29305 = cljs.core.chunk_first.call(null,seq__29286_29304__$1);{
var G__29306 = cljs.core.chunk_rest.call(null,seq__29286_29304__$1);
var G__29307 = c__4335__auto___29305;
var G__29308 = cljs.core.count.call(null,c__4335__auto___29305);
var G__29309 = (0);
seq__29286_29292 = G__29306;
chunk__29287_29293 = G__29307;
count__29288_29294 = G__29308;
i__29289_29295 = G__29309;
continue;
}
} else
{var vec__29291_29310 = cljs.core.first.call(null,seq__29286_29304__$1);var __29311 = cljs.core.nth.call(null,vec__29291_29310,(0),null);var callback_29312 = cljs.core.nth.call(null,vec__29291_29310,(1),null);callback_29312.call(null,report);
{
var G__29313 = cljs.core.next.call(null,seq__29286_29304__$1);
var G__29314 = null;
var G__29315 = (0);
var G__29316 = (0);
seq__29286_29292 = G__29313;
chunk__29287_29293 = G__29314;
count__29288_29294 = G__29315;
i__29289_29295 = G__29316;
continue;
}
}
} else
{}
}
break;
}
return report;
});
goog.exportSymbol('datascript.js.transact', datascript.js.transact);
datascript.js.listen = datascript.listen_BANG_;
goog.exportSymbol('datascript.js.listen', datascript.js.listen);
datascript.js.unlisten = datascript.unlisten_BANG_;
goog.exportSymbol('datascript.js.unlisten', datascript.js.unlisten);
/**
* @param {...*} var_args
*/
datascript.js.datoms = (function() { 
var datoms__delegate = function (db,index,components){return cljs.core.into_array.call(null,cljs.core.map.call(null,datascript.js.datom__GT_js,cljs.core.apply.call(null,datascript.datoms,db,datascript.js.keywordize.call(null,index),components)));
};
var datoms = function (db,index,var_args){
var components = null;if (arguments.length > 2) {
  components = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,components);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__29317){
var db = cljs.core.first(arglist__29317);
arglist__29317 = cljs.core.next(arglist__29317);
var index = cljs.core.first(arglist__29317);
var components = cljs.core.rest(arglist__29317);
return datoms__delegate(db,index,components);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
goog.exportSymbol('datascript.js.datoms', datascript.js.datoms);
/**
* @param {...*} var_args
*/
datascript.js.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,components){return cljs.core.into_array.call(null,cljs.core.map.call(null,datascript.js.datom__GT_js,cljs.core.apply.call(null,datascript.seek_datoms,db,datascript.js.keywordize.call(null,index),components)));
};
var seek_datoms = function (db,index,var_args){
var components = null;if (arguments.length > 2) {
  components = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,components);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__29318){
var db = cljs.core.first(arglist__29318);
arglist__29318 = cljs.core.next(arglist__29318);
var index = cljs.core.first(arglist__29318);
var components = cljs.core.rest(arglist__29318);
return seek_datoms__delegate(db,index,components);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
goog.exportSymbol('datascript.js.seek_datoms', datascript.js.seek_datoms);

//# sourceMappingURL=js.js.map