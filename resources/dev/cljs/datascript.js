// Compiled by ClojureScript 0.0-2311
goog.provide('datascript');
goog.require('cljs.core');
goog.require('datascript.analyze');
goog.require('clojure.set');
goog.require('datascript.query');
goog.require('datascript.btset');
goog.require('datascript.analyze');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.set');
goog.require('datascript.btset');
goog.require('datascript.query');
goog.require('clojure.data');
datascript.q = datascript.query.q;
datascript.analyze_q = datascript.analyze.analyze_q;
datascript.entity = (function entity(db,eid){var temp__4126__auto__ = cljs.core.not_empty.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [eid], null)));if(cljs.core.truth_(temp__4126__auto__))
{var datoms = temp__4126__auto__;return cljs.core.reduce.call(null,((function (datoms,temp__4126__auto__){
return (function (entity__$1,datom){var a = datom.a;var v = datom.v;if(datascript.core.multival_QMARK_.call(null,db,datom.a))
{return cljs.core.update_in.call(null,entity__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [a], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),v);
} else
{return cljs.core.assoc.call(null,entity__$1,a,v);
}
});})(datoms,temp__4126__auto__))
,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("db","id","db/id",-1388397098),eid], null),datoms);
} else
{return null;
}
});
datascript.tx0 = (536870912);
/**
* @param {...*} var_args
*/
datascript.empty_db = (function() { 
var empty_db__delegate = function (p__35179){var vec__35181 = p__35179;var schema = cljs.core.nth.call(null,vec__35181,(0),null);return (new datascript.core.DB(schema,datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_eavt),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_aevt),datascript.btset.btset_by.call(null,datascript.core.cmp_datoms_avet),(0),datascript.tx0));
};
var empty_db = function (var_args){
var p__35179 = null;if (arguments.length > 0) {
  p__35179 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return empty_db__delegate.call(this,p__35179);};
empty_db.cljs$lang$maxFixedArity = 0;
empty_db.cljs$lang$applyTo = (function (arglist__35182){
var p__35179 = cljs.core.seq(arglist__35182);
return empty_db__delegate(p__35179);
});
empty_db.cljs$core$IFn$_invoke$arity$variadic = empty_db__delegate;
return empty_db;
})()
;
/**
* @param {...*} var_args
*/
datascript.create_conn = (function() { 
var create_conn__delegate = function (p__35183){var vec__35185 = p__35183;var schema = cljs.core.nth.call(null,vec__35185,(0),null);return cljs.core.atom.call(null,datascript.empty_db.call(null,schema),new cljs.core.Keyword(null,"meta","meta",1499536964),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"listeners","listeners",394544445),cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY)], null));
};
var create_conn = function (var_args){
var p__35183 = null;if (arguments.length > 0) {
  p__35183 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return create_conn__delegate.call(this,p__35183);};
create_conn.cljs$lang$maxFixedArity = 0;
create_conn.cljs$lang$applyTo = (function (arglist__35186){
var p__35183 = cljs.core.seq(arglist__35186);
return create_conn__delegate(p__35183);
});
create_conn.cljs$core$IFn$_invoke$arity$variadic = create_conn__delegate;
return create_conn;
})()
;
datascript.transact = (function transact(db,entities){return datascript.core.transact_entities.call(null,(new datascript.core.TxReport(db,db,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),entities);
});
datascript.with$ = (function with$(db,entities){return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(datascript.transact.call(null,db,entities));
});
datascript._transact_BANG_ = (function _transact_BANG_(conn,entities){var report = cljs.core.atom.call(null,null);cljs.core.swap_BANG_.call(null,conn,((function (report){
return (function (db){var r = datascript.transact.call(null,db,entities);cljs.core.reset_BANG_.call(null,report,r);
return new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(r);
});})(report))
);
return cljs.core.deref.call(null,report);
});
datascript.IPublish = (function (){var obj35188 = {};return obj35188;
})();
datascript.publish = (function publish(this$,report){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IPublish$publish$arity$2;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IPublish$publish$arity$2(this$,report);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.publish[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.publish["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IPublish.publish",this$);
}
}
})().call(null,this$,report);
}
});
(datascript.IPublish["function"] = true);
(datascript.publish["function"] = (function (this$,report){return this$.call(null,report);
}));
datascript.pattern__GT_index_keys = (function pattern__GT_index_keys(p__35189){var vec__35191 = p__35189;var e = cljs.core.nth.call(null,vec__35191,(0),null);var a = cljs.core.nth.call(null,vec__35191,(1),null);var v = cljs.core.nth.call(null,vec__35191,(2),null);var tx = cljs.core.nth.call(null,vec__35191,(3),null);var added = cljs.core.nth.call(null,vec__35191,(4),null);var pattern = vec__35191;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a,v], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a,v], null);
}
} else
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a], null);
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e], null);
}
} else
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e], null);
}
}
}
} else
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a,v], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a,v], null);
}
} else
{if(cljs.core.truth_(tx))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a], null);
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.PersistentVector.EMPTY;
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.PersistentVector.EMPTY;
} else
{return cljs.core.PersistentVector.EMPTY;
}
}
}
}
});
datascript.datom__GT_index_keys = (function datom__GT_index_keys(p__35192){var map__35194 = p__35192;var map__35194__$1 = ((cljs.core.seq_QMARK_.call(null,map__35194))?cljs.core.apply.call(null,cljs.core.hash_map,map__35194):map__35194);var added = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"added","added",2057651688));var t = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"t","t",-1397832519));var v = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"v","v",21465059));var a = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"a","a",-2123407586));var e = cljs.core.get.call(null,map__35194__$1,new cljs.core.Keyword(null,"e","e",1381269198));return cljs.core.PersistentHashSet.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a,v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032),a,v], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073),e,a], null)], true);
});
datascript.IndexKeys = (function (){var obj35196 = {};return obj35196;
})();
datascript.get_index_keys = (function() {
var get_index_keys = null;
var get_index_keys__1 = (function (this$){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$1;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$1(this$);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$);
}
});
var get_index_keys__2 = (function (this$,a){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$2;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$2(this$,a);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a);
}
});
var get_index_keys__3 = (function (this$,a,b){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$3;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$3(this$,a,b);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b);
}
});
var get_index_keys__4 = (function (this$,a,b,c){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$4;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$4(this$,a,b,c);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var get_index_keys__5 = (function (this$,a,b,c,d){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$5;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$5(this$,a,b,c,d);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var get_index_keys__6 = (function (this$,a,b,c,d,e){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$6;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$6(this$,a,b,c,d,e);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var get_index_keys__7 = (function (this$,a,b,c,d,e,f){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$7;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$7(this$,a,b,c,d,e,f);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var get_index_keys__8 = (function (this$,a,b,c,d,e,f,g){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$8;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$8(this$,a,b,c,d,e,f,g);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var get_index_keys__9 = (function (this$,a,b,c,d,e,f,g,h){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$9;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$9(this$,a,b,c,d,e,f,g,h);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var get_index_keys__10 = (function (this$,a,b,c,d,e,f,g,h,i){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$10;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$10(this$,a,b,c,d,e,f,g,h,i);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var get_index_keys__11 = (function (this$,a,b,c,d,e,f,g,h,i,j){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$11;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$11(this$,a,b,c,d,e,f,g,h,i,j);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var get_index_keys__12 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$12;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$12(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var get_index_keys__13 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$13;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$13(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var get_index_keys__14 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$14;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$14(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var get_index_keys__15 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$15;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$15(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var get_index_keys__16 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$16;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$16(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var get_index_keys__17 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$17;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$17(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var get_index_keys__18 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$18;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$18(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var get_index_keys__19 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$19;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$19(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var get_index_keys__20 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$20;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$20(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var get_index_keys__21 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){if((function (){var and__3567__auto__ = this$;if(and__3567__auto__)
{return this$.datascript$IndexKeys$get_index_keys$arity$21;
} else
{return and__3567__auto__;
}
})())
{return this$.datascript$IndexKeys$get_index_keys$arity$21(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{var x__4206__auto__ = (((this$ == null))?null:this$);return (function (){var or__3579__auto__ = (datascript.get_index_keys[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.get_index_keys["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"IndexKeys.get-index-keys",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
});
get_index_keys = function(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
switch(arguments.length){
case 1:
return get_index_keys__1.call(this,this$);
case 2:
return get_index_keys__2.call(this,this$,a);
case 3:
return get_index_keys__3.call(this,this$,a,b);
case 4:
return get_index_keys__4.call(this,this$,a,b,c);
case 5:
return get_index_keys__5.call(this,this$,a,b,c,d);
case 6:
return get_index_keys__6.call(this,this$,a,b,c,d,e);
case 7:
return get_index_keys__7.call(this,this$,a,b,c,d,e,f);
case 8:
return get_index_keys__8.call(this,this$,a,b,c,d,e,f,g);
case 9:
return get_index_keys__9.call(this,this$,a,b,c,d,e,f,g,h);
case 10:
return get_index_keys__10.call(this,this$,a,b,c,d,e,f,g,h,i);
case 11:
return get_index_keys__11.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case 12:
return get_index_keys__12.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return get_index_keys__13.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return get_index_keys__14.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return get_index_keys__15.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return get_index_keys__16.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return get_index_keys__17.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return get_index_keys__18.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return get_index_keys__19.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case 20:
return get_index_keys__20.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case 21:
return get_index_keys__21.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_index_keys.cljs$core$IFn$_invoke$arity$1 = get_index_keys__1;
get_index_keys.cljs$core$IFn$_invoke$arity$2 = get_index_keys__2;
get_index_keys.cljs$core$IFn$_invoke$arity$3 = get_index_keys__3;
get_index_keys.cljs$core$IFn$_invoke$arity$4 = get_index_keys__4;
get_index_keys.cljs$core$IFn$_invoke$arity$5 = get_index_keys__5;
get_index_keys.cljs$core$IFn$_invoke$arity$6 = get_index_keys__6;
get_index_keys.cljs$core$IFn$_invoke$arity$7 = get_index_keys__7;
get_index_keys.cljs$core$IFn$_invoke$arity$8 = get_index_keys__8;
get_index_keys.cljs$core$IFn$_invoke$arity$9 = get_index_keys__9;
get_index_keys.cljs$core$IFn$_invoke$arity$10 = get_index_keys__10;
get_index_keys.cljs$core$IFn$_invoke$arity$11 = get_index_keys__11;
get_index_keys.cljs$core$IFn$_invoke$arity$12 = get_index_keys__12;
get_index_keys.cljs$core$IFn$_invoke$arity$13 = get_index_keys__13;
get_index_keys.cljs$core$IFn$_invoke$arity$14 = get_index_keys__14;
get_index_keys.cljs$core$IFn$_invoke$arity$15 = get_index_keys__15;
get_index_keys.cljs$core$IFn$_invoke$arity$16 = get_index_keys__16;
get_index_keys.cljs$core$IFn$_invoke$arity$17 = get_index_keys__17;
get_index_keys.cljs$core$IFn$_invoke$arity$18 = get_index_keys__18;
get_index_keys.cljs$core$IFn$_invoke$arity$19 = get_index_keys__19;
get_index_keys.cljs$core$IFn$_invoke$arity$20 = get_index_keys__20;
get_index_keys.cljs$core$IFn$_invoke$arity$21 = get_index_keys__21;
return get_index_keys;
})()
;
datascript.wrap_query = (function wrap_query(query,wrap_fn){if(typeof datascript.t35201 !== 'undefined')
{} else
{
/**
* @constructor
*/
datascript.t35201 = (function (wrap_fn,query,wrap_query,meta35202){
this.wrap_fn = wrap_fn;
this.query = query;
this.wrap_query = wrap_query;
this.meta35202 = meta35202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
datascript.t35201.cljs$lang$type = true;
datascript.t35201.cljs$lang$ctorStr = "datascript/t35201";
datascript.t35201.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"datascript/t35201");
});
datascript.t35201.prototype.datascript$IndexKeys$ = true;
datascript.t35201.prototype.datascript$IndexKeys$get_index_keys$arity$2 = (function (this$,conn){var self__ = this;
var this$__$1 = this;return datascript.get_index_keys.call(null,self__.query,conn);
});
datascript.t35201.prototype.call = (function (self__,data){var self__ = this;
var self____$1 = this;var this$ = self____$1;return self__.wrap_fn.call(null,self__.query.call(null,data));
});
datascript.t35201.prototype.apply = (function (self__,args35204){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35204)));
});
datascript.t35201.prototype.cljs$core$IFn$_invoke$arity$1 = (function (data){var self__ = this;
var this$ = this;return self__.wrap_fn.call(null,self__.query.call(null,data));
});
datascript.t35201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35203){var self__ = this;
var _35203__$1 = this;return self__.meta35202;
});
datascript.t35201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35203,meta35202__$1){var self__ = this;
var _35203__$1 = this;return (new datascript.t35201(self__.wrap_fn,self__.query,self__.wrap_query,meta35202__$1));
});
datascript.__GT_t35201 = (function __GT_t35201(wrap_fn__$1,query__$1,wrap_query__$1,meta35202){return (new datascript.t35201(wrap_fn__$1,query__$1,wrap_query__$1,meta35202));
});
}
return (new datascript.t35201(wrap_fn,query,wrap_query,null));
});
datascript.analyze_calls__GT_index_keys = (function analyze_calls__GT_index_keys(p__35205){var map__35219 = p__35205;var map__35219__$1 = ((cljs.core.seq_QMARK_.call(null,map__35219))?cljs.core.apply.call(null,cljs.core.hash_map,map__35219):map__35219);var calls = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"calls","calls",-433802344));var index_keys = cljs.core.get.call(null,map__35219__$1,new cljs.core.Keyword(null,"index-keys","index-keys",-43183086));var calls_index_keys = (function (){var iter__4304__auto__ = ((function (map__35219,map__35219__$1,calls,index_keys){
return (function iter__35220(s__35221){return (new cljs.core.LazySeq(null,((function (map__35219,map__35219__$1,calls,index_keys){
return (function (){var s__35221__$1 = s__35221;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__35221__$1);if(temp__4126__auto__)
{var s__35221__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__35221__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__35221__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__35223 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__35222 = (0);while(true){
if((i__35222 < size__4303__auto__))
{var vec__35228 = cljs.core._nth.call(null,c__4302__auto__,i__35222);var fct = cljs.core.nth.call(null,vec__35228,(0),null);var params = cljs.core.nthnext.call(null,vec__35228,(1));cljs.core.chunk_append.call(null,b__35223,(((function (){var G__35229 = fct;if(G__35229)
{var bit__4222__auto__ = null;if(cljs.core.truth_((function (){var or__3579__auto__ = bit__4222__auto__;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return G__35229.datascript$IndexKeys$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?cljs.core.apply.call(null,datascript.get_index_keys,fct,params):null));
{
var G__35232 = (i__35222 + (1));
i__35222 = G__35232;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35223),iter__35220.call(null,cljs.core.chunk_rest.call(null,s__35221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__35223),null);
}
} else
{var vec__35230 = cljs.core.first.call(null,s__35221__$2);var fct = cljs.core.nth.call(null,vec__35230,(0),null);var params = cljs.core.nthnext.call(null,vec__35230,(1));return cljs.core.cons.call(null,(((function (){var G__35231 = fct;if(G__35231)
{var bit__4222__auto__ = null;if(cljs.core.truth_((function (){var or__3579__auto__ = bit__4222__auto__;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return G__35231.datascript$IndexKeys$;
}
})()))
{return true;
} else
{return false;
}
} else
{return false;
}
})())?cljs.core.apply.call(null,datascript.get_index_keys,fct,params):null),iter__35220.call(null,cljs.core.rest.call(null,s__35221__$2)));
}
} else
{return null;
}
break;
}
});})(map__35219,map__35219__$1,calls,index_keys))
,null,null));
});})(map__35219,map__35219__$1,calls,index_keys))
;return iter__4304__auto__.call(null,calls);
})();return cljs.core.apply.call(null,clojure.set.union,cljs.core.conj.call(null,calls_index_keys,index_keys));
});
datascript.transact_BANG_ = (function transact_BANG_(conn,entities){var report = datascript._transact_BANG_.call(null,conn,entities);var listeners_35249 = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn));if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners_35249)))))
{var tx_index_keys_35250 = cljs.core.reduce.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.call(null,datascript.datom__GT_index_keys,new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(report)));var all_index_keys_callbacks_35251 = new cljs.core.Keyword(null,"all-index-keys","all-index-keys",-533899923).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners_35249)));var all_callbacks_35252 = cljs.core.atom.call(null,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,all_index_keys_callbacks_35251));var seq__35241_35253 = cljs.core.seq.call(null,tx_index_keys_35250);var chunk__35242_35254 = null;var count__35243_35255 = (0);var i__35244_35256 = (0);while(true){
if((i__35244_35256 < count__35243_35255))
{var single_index_keys_35257 = cljs.core._nth.call(null,chunk__35242_35254,i__35244_35256);var temp__4126__auto___35258 = cljs.core.get.call(null,new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners_35249)),single_index_keys_35257);if(cljs.core.truth_(temp__4126__auto___35258))
{var callbacks_35259 = temp__4126__auto___35258;cljs.core.swap_BANG_.call(null,all_callbacks_35252,cljs.core.into,callbacks_35259);
} else
{}
{
var G__35260 = seq__35241_35253;
var G__35261 = chunk__35242_35254;
var G__35262 = count__35243_35255;
var G__35263 = (i__35244_35256 + (1));
seq__35241_35253 = G__35260;
chunk__35242_35254 = G__35261;
count__35243_35255 = G__35262;
i__35244_35256 = G__35263;
continue;
}
} else
{var temp__4126__auto___35264 = cljs.core.seq.call(null,seq__35241_35253);if(temp__4126__auto___35264)
{var seq__35241_35265__$1 = temp__4126__auto___35264;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35241_35265__$1))
{var c__4335__auto___35266 = cljs.core.chunk_first.call(null,seq__35241_35265__$1);{
var G__35267 = cljs.core.chunk_rest.call(null,seq__35241_35265__$1);
var G__35268 = c__4335__auto___35266;
var G__35269 = cljs.core.count.call(null,c__4335__auto___35266);
var G__35270 = (0);
seq__35241_35253 = G__35267;
chunk__35242_35254 = G__35268;
count__35243_35255 = G__35269;
i__35244_35256 = G__35270;
continue;
}
} else
{var single_index_keys_35271 = cljs.core.first.call(null,seq__35241_35265__$1);var temp__4126__auto___35272__$1 = cljs.core.get.call(null,new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners_35249)),single_index_keys_35271);if(cljs.core.truth_(temp__4126__auto___35272__$1))
{var callbacks_35273 = temp__4126__auto___35272__$1;cljs.core.swap_BANG_.call(null,all_callbacks_35252,cljs.core.into,callbacks_35273);
} else
{}
{
var G__35274 = cljs.core.next.call(null,seq__35241_35265__$1);
var G__35275 = null;
var G__35276 = (0);
var G__35277 = (0);
seq__35241_35253 = G__35274;
chunk__35242_35254 = G__35275;
count__35243_35255 = G__35276;
i__35244_35256 = G__35277;
continue;
}
}
} else
{}
}
break;
}
var seq__35245_35278 = cljs.core.seq.call(null,cljs.core.deref.call(null,all_callbacks_35252));var chunk__35246_35279 = null;var count__35247_35280 = (0);var i__35248_35281 = (0);while(true){
if((i__35248_35281 < count__35247_35280))
{var callback_35282 = cljs.core._nth.call(null,chunk__35246_35279,i__35248_35281);datascript.publish.call(null,callback_35282,report);
{
var G__35283 = seq__35245_35278;
var G__35284 = chunk__35246_35279;
var G__35285 = count__35247_35280;
var G__35286 = (i__35248_35281 + (1));
seq__35245_35278 = G__35283;
chunk__35246_35279 = G__35284;
count__35247_35280 = G__35285;
i__35248_35281 = G__35286;
continue;
}
} else
{var temp__4126__auto___35287 = cljs.core.seq.call(null,seq__35245_35278);if(temp__4126__auto___35287)
{var seq__35245_35288__$1 = temp__4126__auto___35287;if(cljs.core.chunked_seq_QMARK_.call(null,seq__35245_35288__$1))
{var c__4335__auto___35289 = cljs.core.chunk_first.call(null,seq__35245_35288__$1);{
var G__35290 = cljs.core.chunk_rest.call(null,seq__35245_35288__$1);
var G__35291 = c__4335__auto___35289;
var G__35292 = cljs.core.count.call(null,c__4335__auto___35289);
var G__35293 = (0);
seq__35245_35278 = G__35290;
chunk__35246_35279 = G__35291;
count__35247_35280 = G__35292;
i__35248_35281 = G__35293;
continue;
}
} else
{var callback_35294 = cljs.core.first.call(null,seq__35245_35288__$1);datascript.publish.call(null,callback_35294,report);
{
var G__35295 = cljs.core.next.call(null,seq__35245_35288__$1);
var G__35296 = null;
var G__35297 = (0);
var G__35298 = (0);
seq__35245_35278 = G__35295;
chunk__35246_35279 = G__35296;
count__35247_35280 = G__35297;
i__35248_35281 = G__35298;
continue;
}
}
} else
{}
}
break;
}
} else
{}
return report;
});
datascript.clean_index_key__GT_callback = (function clean_index_key__GT_callback(listeners,index_key){if(cljs.core.empty_QMARK_.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452).cljs$core$IFn$_invoke$arity$1(listeners),index_key)))
{return cljs.core.update_in.call(null,listeners,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452)], null),cljs.core.dissoc,index_key);
} else
{return listeners;
}
});
datascript.rem_index_key__GT_callback = (function rem_index_key__GT_callback(listeners,index_key,callback){return datascript.clean_index_key__GT_callback.call(null,cljs.core.update_in.call(null,listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452),index_key], null),cljs.core.disj,callback),index_key);
});
datascript.add_index_key__GT_callback = (function add_index_key__GT_callback(listeners,index_key,callback){return cljs.core.update_in.call(null,listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-keys->callbacks","index-keys->callbacks",-287996452),index_key], null),cljs.core.comp.call(null,cljs.core.set,cljs.core.conj),callback);
});
datascript.rem_index_keys__GT_callback = (function rem_index_keys__GT_callback(listeners,index_keys,callback){return cljs.core.reduce.call(null,(function (p1__35299_SHARP_,p2__35300_SHARP_){return datascript.rem_index_key__GT_callback.call(null,p1__35299_SHARP_,p2__35300_SHARP_,callback);
}),listeners,index_keys);
});
datascript.add_index_keys__GT_callback = (function add_index_keys__GT_callback(listeners,index_keys,callback){return cljs.core.reduce.call(null,(function (p1__35301_SHARP_,p2__35302_SHARP_){return datascript.add_index_key__GT_callback.call(null,p1__35301_SHARP_,p2__35302_SHARP_,callback);
}),listeners,index_keys);
});
datascript.add_callback__GT_index_keys = (function add_callback__GT_index_keys(listeners,index_keys,callback){return cljs.core.assoc_in.call(null,listeners,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370),callback], null),index_keys);
});
datascript.rem_callback__GT_index_keys = (function rem_callback__GT_index_keys(listeners,callback){return cljs.core.update_in.call(null,listeners,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370)], null),cljs.core.dissoc,callback);
});
datascript.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (conn,callback){var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn));var index_keys = cljs.core.get.call(null,new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners)),callback);var rem_index_keys__GT_callback_fn = (cljs.core.truth_((function (){var and__3567__auto__ = index_keys;if(cljs.core.truth_(and__3567__auto__))
{return cljs.core.not_EQ_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-index-keys","all-index-keys",-533899923),null], null), null),index_keys);
} else
{return and__3567__auto__;
}
})())?((function (listeners,index_keys){
return (function (p1__35303_SHARP_){return datascript.rem_index_keys__GT_callback.call(null,p1__35303_SHARP_,index_keys,callback);
});})(listeners,index_keys))
:cljs.core.identity);var add_index_keys__GT_callback_fn = ((function (listeners,index_keys,rem_index_keys__GT_callback_fn){
return (function (p1__35304_SHARP_){return datascript.add_index_keys__GT_callback.call(null,p1__35304_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-index-keys","all-index-keys",-533899923),null], null), null),callback);
});})(listeners,index_keys,rem_index_keys__GT_callback_fn))
;var add_callback__GT_index_keys = ((function (listeners,index_keys,rem_index_keys__GT_callback_fn,add_index_keys__GT_callback_fn){
return (function (p1__35305_SHARP_){return datascript.add_callback__GT_index_keys.call(null,p1__35305_SHARP_,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-index-keys","all-index-keys",-533899923),null], null), null),callback);
});})(listeners,index_keys,rem_index_keys__GT_callback_fn,add_index_keys__GT_callback_fn))
;return cljs.core.swap_BANG_.call(null,listeners,cljs.core.comp.call(null,add_callback__GT_index_keys,add_index_keys__GT_callback_fn,rem_index_keys__GT_callback_fn));
});
var listen_BANG___3 = (function (conn,callback,index_keys){var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn));var index_keys__$1 = cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.comp.call(null,cljs.core.vec,cljs.core.rest),cljs.core.filter.call(null,((function (listeners){
return (function (p1__35306_SHARP_){return cljs.core._EQ_.call(null,conn,cljs.core.first.call(null,p1__35306_SHARP_));
});})(listeners))
,index_keys)));var old_index_keys = cljs.core.get.call(null,new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners)),callback);var diff_index_keys = clojure.data.diff.call(null,old_index_keys,index_keys__$1);var rem_index_keys = cljs.core.first.call(null,diff_index_keys);var add_index_keys = cljs.core.second.call(null,diff_index_keys);var rem_index_keys__GT_callback_fn = ((function (listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys){
return (function (p1__35307_SHARP_){return datascript.rem_index_keys__GT_callback.call(null,p1__35307_SHARP_,rem_index_keys,callback);
});})(listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys))
;var add_index_keys__GT_callback_fn = ((function (listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys,rem_index_keys__GT_callback_fn){
return (function (p1__35308_SHARP_){return datascript.add_index_keys__GT_callback.call(null,p1__35308_SHARP_,add_index_keys,callback);
});})(listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys,rem_index_keys__GT_callback_fn))
;var add_callback__GT_index_keys = ((function (listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys,rem_index_keys__GT_callback_fn,add_index_keys__GT_callback_fn){
return (function (p1__35309_SHARP_){return datascript.add_callback__GT_index_keys.call(null,p1__35309_SHARP_,index_keys__$1,callback);
});})(listeners,index_keys__$1,old_index_keys,diff_index_keys,rem_index_keys,add_index_keys,rem_index_keys__GT_callback_fn,add_index_keys__GT_callback_fn))
;return cljs.core.swap_BANG_.call(null,listeners,cljs.core.comp.call(null,add_callback__GT_index_keys,add_index_keys__GT_callback_fn,rem_index_keys__GT_callback_fn));
});
listen_BANG_ = function(conn,callback,index_keys){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,conn,callback);
case 3:
return listen_BANG___3.call(this,conn,callback,index_keys);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
datascript.unlisten_BANG_ = (function unlisten_BANG_(conn,callback){var listeners = new cljs.core.Keyword(null,"listeners","listeners",394544445).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,conn));var old_index_keys = cljs.core.get.call(null,new cljs.core.Keyword(null,"callbacks->index-keys","callbacks->index-keys",1094686370).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,listeners)),callback);var rem_index_keys__GT_callback_fn = ((function (listeners,old_index_keys){
return (function (p1__35310_SHARP_){return datascript.rem_index_keys__GT_callback.call(null,p1__35310_SHARP_,old_index_keys,callback);
});})(listeners,old_index_keys))
;var rem_callback__GT_index_keys = ((function (listeners,old_index_keys,rem_index_keys__GT_callback_fn){
return (function (p1__35311_SHARP_){return datascript.rem_callback__GT_index_keys.call(null,p1__35311_SHARP_,callback);
});})(listeners,old_index_keys,rem_index_keys__GT_callback_fn))
;return cljs.core.swap_BANG_.call(null,listeners,cljs.core.comp.call(null,rem_callback__GT_index_keys,rem_index_keys__GT_callback_fn));
});
datascript.components__GT_pattern = (function components__GT_pattern(index,p__35312){var vec__35315 = p__35312;var c0 = cljs.core.nth.call(null,vec__35315,(0),null);var c1 = cljs.core.nth.call(null,vec__35315,(1),null);var c2 = cljs.core.nth.call(null,vec__35315,(2),null);var c3 = cljs.core.nth.call(null,vec__35315,(3),null);var G__35316 = (((index instanceof cljs.core.Keyword))?index.fqn:null);switch (G__35316) {
case "avet":
return (new datascript.core.Datom(c2,c0,c1,c3,null));

break;
case "aevt":
return (new datascript.core.Datom(c1,c0,c2,c3,null));

break;
case "eavt":
return (new datascript.core.Datom(c0,c1,c2,c3,null));

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index))));

}
});
/**
* @param {...*} var_args
*/
datascript.datoms = (function() { 
var datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs));
};
var datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return datoms__delegate.call(this,db,index,cs);};
datoms.cljs$lang$maxFixedArity = 2;
datoms.cljs$lang$applyTo = (function (arglist__35318){
var db = cljs.core.first(arglist__35318);
arglist__35318 = cljs.core.next(arglist__35318);
var index = cljs.core.first(arglist__35318);
var cs = cljs.core.rest(arglist__35318);
return datoms__delegate(db,index,cs);
});
datoms.cljs$core$IFn$_invoke$arity$variadic = datoms__delegate;
return datoms;
})()
;
/**
* @param {...*} var_args
*/
datascript.seek_datoms = (function() { 
var seek_datoms__delegate = function (db,index,cs){return datascript.btset.slice.call(null,cljs.core.get.call(null,db,index),datascript.components__GT_pattern.call(null,index,cs),(new datascript.core.Datom(null,null,null,null,null)));
};
var seek_datoms = function (db,index,var_args){
var cs = null;if (arguments.length > 2) {
  cs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return seek_datoms__delegate.call(this,db,index,cs);};
seek_datoms.cljs$lang$maxFixedArity = 2;
seek_datoms.cljs$lang$applyTo = (function (arglist__35319){
var db = cljs.core.first(arglist__35319);
arglist__35319 = cljs.core.next(arglist__35319);
var index = cljs.core.first(arglist__35319);
var cs = cljs.core.rest(arglist__35319);
return seek_datoms__delegate(db,index,cs);
});
seek_datoms.cljs$core$IFn$_invoke$arity$variadic = seek_datoms__delegate;
return seek_datoms;
})()
;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (d,w,opts){var d__$1 = this;return cljs.core.pr_sequential_writer.call(null,w,cljs.core.pr_writer,"#datascript/Datom ["," ","]",opts,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v,d__$1.tx,d__$1.added], null));
});
datascript.datom_from_reader = (function datom_from_reader(p__35320){var vec__35322 = p__35320;var e = cljs.core.nth.call(null,vec__35322,(0),null);var a = cljs.core.nth.call(null,vec__35322,(1),null);var v = cljs.core.nth.call(null,vec__35322,(2),null);var tx = cljs.core.nth.call(null,vec__35322,(3),null);var added = cljs.core.nth.call(null,vec__35322,(4),null);return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$ = true;
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (db,w,opts){var db__$1 = this;cljs.core._write.call(null,w,"#datascript/DB {");
cljs.core._write.call(null,w,":schema ");
cljs.core.pr_writer.call(null,db__$1.schema,w,opts);
cljs.core._write.call(null,w,", :datoms ");
cljs.core.pr_sequential_writer.call(null,w,((function (db__$1){
return (function (d,w__$1,opts__$1){return cljs.core.pr_sequential_writer.call(null,w__$1,cljs.core.pr_writer,"["," ","]",opts__$1,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [d.e,d.a,d.v,d.tx], null));
});})(db__$1))
,"["," ","]",opts,db__$1.eavt);
return cljs.core._write.call(null,w,"}");
});
datascript.db_from_reader = (function db_from_reader(p__35323){var map__35327 = p__35323;var map__35327__$1 = ((cljs.core.seq_QMARK_.call(null,map__35327))?cljs.core.apply.call(null,cljs.core.hash_map,map__35327):map__35327);var datoms = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"datoms","datoms",-290874434));var schema = cljs.core.get.call(null,map__35327__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));var datoms__$1 = cljs.core.map.call(null,((function (map__35327,map__35327__$1,datoms,schema){
return (function (p__35328){var vec__35329 = p__35328;var e = cljs.core.nth.call(null,vec__35329,(0),null);var a = cljs.core.nth.call(null,vec__35329,(1),null);var v = cljs.core.nth.call(null,vec__35329,(2),null);var tx = cljs.core.nth.call(null,vec__35329,(3),null);return (new datascript.core.Datom(e,a,v,tx,true));
});})(map__35327,map__35327__$1,datoms,schema))
,datoms);return (new datascript.core.DB(schema,cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_eavt,datoms__$1),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_aevt,datoms__$1),cljs.core.apply.call(null,datascript.btset.btset_by,datascript.core.cmp_datoms_avet,datoms__$1),cljs.core.reduce.call(null,cljs.core.max,(0),cljs.core.map.call(null,new cljs.core.Keyword(null,"e","e",1381269198),datoms__$1)),cljs.core.reduce.call(null,cljs.core.max,datascript.tx0,cljs.core.map.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),datoms__$1))));
});

//# sourceMappingURL=datascript.js.map