// Compiled by ClojureScript 0.0-2311
goog.provide('datascript.analyze');
goog.require('cljs.core');
goog.require('datascript.query');
goog.require('datascript.query');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');
datascript.analyze.pattern__GT_index_keys = (function pattern__GT_index_keys(p__29462){var vec__29464 = p__29462;var e = cljs.core.nth.call(null,vec__29464,(0),null);var a = cljs.core.nth.call(null,vec__29464,(1),null);var v = cljs.core.nth.call(null,vec__29464,(2),null);var tx = cljs.core.nth.call(null,vec__29464,(3),null);var added = cljs.core.nth.call(null,vec__29464,(4),null);var pattern = vec__29464;if(cljs.core.truth_(e))
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
datascript.analyze.parse_where = (function parse_where(where){var source = cljs.core.first.call(null,where);if(((source instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,source)))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,where),cljs.core.next.call(null,where)], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),where], null);
}
});
datascript.analyze.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29465_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__29465_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return cljs.core.map.call(null,((function (rel,temp__4126__auto__){
return (function (p1__29466_SHARP_){return (p1__29466_SHARP_[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
});})(rel,temp__4126__auto__))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel));
} else
{return null;
}
});
datascript.analyze.bind_symbol = (function bind_symbol(sym,context){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),sym))
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
} else
{if((sym instanceof cljs.core.Symbol))
{var or__3579__auto__ = datascript.analyze.context_resolve_val.call(null,context,sym);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [null], null);
}
} else
{return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym], null);

}
}
});
datascript.analyze.cart = (function cart(colls){if(cljs.core.empty_QMARK_.call(null,colls))
{return cljs.core.list(cljs.core.List.EMPTY);
} else
{var iter__4304__auto__ = (function iter__29473(s__29474){return (new cljs.core.LazySeq(null,(function (){var s__29474__$1 = s__29474;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29474__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__4300__auto__ = ((function (s__29474__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__29475(s__29476){return (new cljs.core.LazySeq(null,((function (s__29474__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__29476__$1 = s__29476;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29476__$1);if(temp__4126__auto____$1)
{var s__29476__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29476__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29476__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29478 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29477 = (0);while(true){
if((i__29477 < size__4303__auto__))
{var more = cljs.core._nth.call(null,c__4302__auto__,i__29477);cljs.core.chunk_append.call(null,b__29478,cljs.core.cons.call(null,x,more));
{
var G__29479 = (i__29477 + (1));
i__29477 = G__29479;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29478),iter__29475.call(null,cljs.core.chunk_rest.call(null,s__29476__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29478),null);
}
} else
{var more = cljs.core.first.call(null,s__29476__$2);return cljs.core.cons.call(null,cljs.core.cons.call(null,x,more),iter__29475.call(null,cljs.core.rest.call(null,s__29476__$2)));
}
} else
{return null;
}
break;
}
});})(s__29474__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__29474__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__4301__auto__ = cljs.core.seq.call(null,iterys__4300__auto__.call(null,cart.call(null,cljs.core.rest.call(null,colls))));if(fs__4301__auto__)
{return cljs.core.concat.call(null,fs__4301__auto__,iter__29473.call(null,cljs.core.rest.call(null,s__29474__$1)));
} else
{{
var G__29480 = cljs.core.rest.call(null,s__29474__$1);
s__29474__$1 = G__29480;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,cljs.core.first.call(null,colls));
}
});
datascript.analyze.bind_symbols = (function bind_symbols(form,context){var bound_symbols = cljs.core.map.call(null,(function (p1__29481_SHARP_){return datascript.analyze.bind_symbol.call(null,p1__29481_SHARP_,context);
}),form);return datascript.analyze.cart.call(null,bound_symbols);
});
datascript.analyze.analyze_call = (function analyze_call(p__29483,context){var vec__29485 = p__29483;var f = cljs.core.nth.call(null,vec__29485,(0),null);var args = cljs.core.nthnext.call(null,vec__29485,(1));var bound_args = datascript.analyze.bind_symbols.call(null,args,context);var f__$1 = (function (){var or__3579__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();return cljs.core.set.call(null,cljs.core.map.call(null,((function (bound_args,f__$1,vec__29485,f,args){
return (function (p1__29482_SHARP_){return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [f__$1], null),p1__29482_SHARP_);
});})(bound_args,f__$1,vec__29485,f,args))
,bound_args));
});
datascript.analyze.index_keys = (function index_keys(source,where,context){var index_keys__$1 = cljs.core.map.call(null,datascript.analyze.pattern__GT_index_keys,datascript.analyze.bind_symbols.call(null,where,context));var keys = cljs.core.map.call(null,((function (index_keys__$1){
return (function (p1__29486_SHARP_){return cljs.core.vec.call(null,cljs.core.cons.call(null,source,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),p1__29486_SHARP_)));
});})(index_keys__$1))
,index_keys__$1);var keys__$1 = cljs.core.filter.call(null,cljs.core.not_empty,keys);return cljs.core.set.call(null,keys__$1);
});
datascript.analyze._resolve_clause = (function _resolve_clause(context,clause){var pred__29491 = datascript.query.looks_like_QMARK_;var expr__29492 = clause;if(cljs.core.truth_(pred__29491.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__29492)))
{return datascript.query.filter_by_pred.call(null,context,clause);
} else
{if(cljs.core.truth_(pred__29491.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__29492)))
{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"calls","calls",-433802344)], null),clojure.set.union,datascript.analyze.analyze_call.call(null,cljs.core.first.call(null,clause),context));
} else
{if(cljs.core.truth_(pred__29491.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__29492)))
{var vec__29494 = datascript.analyze.parse_where.call(null,clause);var source = cljs.core.nth.call(null,vec__29494,(0),null);var where = cljs.core.nth.call(null,vec__29494,(1),null);var found = datascript.analyze.index_keys.call(null,source,where,context);return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-keys","index-keys",-43183086)], null),clojure.set.union,found);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29492))));
}
}
}
});
datascript.analyze.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.call(null,datascript.analyze._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__29495_SHARP_){return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__29495_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));var index_keys = cljs.core.PersistentHashSet.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__29506 = cljs.core.split_with.call(null,((function (stack,rel,index_keys,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29496_SHARP_){return !(datascript.query.rule_QMARK_.call(null,context,p1__29496_SHARP_));
});})(stack,rel,index_keys,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.call(null,vec__29506,(0),null);var vec__29507 = cljs.core.nth.call(null,vec__29506,(1),null);var rule_clause = cljs.core.nth.call(null,vec__29507,(0),null);var next_clauses = cljs.core.nthnext.call(null,vec__29507,(1));if((rule_clause == null))
{var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = datascript.query._collect.call(null,context__$1,final_attrs);var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__29514 = cljs.core.next.call(null,stack);
var G__29515 = datascript.query.sum_rel.call(null,rel,new_rel);
var G__29516 = clojure.set.union.call(null,index_keys,new cljs.core.Keyword(null,"index-keys","index-keys",-43183086).cljs$core$IFn$_invoke$arity$1(context__$1));
stack = G__29514;
rel = G__29515;
index_keys = G__29516;
continue;
}
} else
{var vec__29508 = rule_clause;var rule = cljs.core.nth.call(null,vec__29508,(0),null);var call_args = cljs.core.nthnext.call(null,vec__29508,(1));var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__29509 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.call(null,vec__29509,(0),null);var pending_gs = cljs.core.nth.call(null,vec__29509,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,index_keys,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29497_SHARP_){return cljs.core._EQ_.call(null,p1__29497_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,index_keys,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__29517 = cljs.core.next.call(null,stack);
var G__29518 = rel;
var G__29519 = index_keys;
stack = G__29517;
rel = G__29518;
index_keys = G__29519;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context)))
{{
var G__29520 = cljs.core.next.call(null,stack);
var G__29521 = rel;
var G__29522 = clojure.set.union.call(null,index_keys,new cljs.core.Keyword(null,"index-keys","index-keys",-43183086).cljs$core$IFn$_invoke$arity$1(prefix_context));
stack = G__29520;
rel = G__29521;
index_keys = G__29522;
continue;
}
} else
{var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);{
var G__29523 = cljs.core.concat.call(null,(function (){var iter__4304__auto__ = ((function (stack,rel,index_keys,used_args,branches,prefix_clauses,prefix_context,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__29510(s__29511){return (new cljs.core.LazySeq(null,((function (stack,rel,index_keys,used_args,branches,prefix_clauses,prefix_context,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__29511__$1 = s__29511;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29511__$1);if(temp__4126__auto__)
{var s__29511__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29511__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29511__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29513 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29512 = (0);while(true){
if((i__29512 < size__4303__auto__))
{var branch = cljs.core._nth.call(null,c__4302__auto__,i__29512);cljs.core.chunk_append.call(null,b__29513,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__29526 = (i__29512 + (1));
i__29512 = G__29526;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29513),iter__29510.call(null,cljs.core.chunk_rest.call(null,s__29511__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29513),null);
}
} else
{var branch = cljs.core.first.call(null,s__29511__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__29510.call(null,cljs.core.rest.call(null,s__29511__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,index_keys,used_args,branches,prefix_clauses,prefix_context,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,index_keys,used_args,branches,prefix_clauses,prefix_context,vec__29508,rule,call_args,guards,vec__29509,active_gs,pending_gs,vec__29506,clauses,vec__29507,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__4304__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__29524 = rel;
var G__29525 = clojure.set.union.call(null,index_keys,new cljs.core.Keyword(null,"index-keys","index-keys",-43183086).cljs$core$IFn$_invoke$arity$1(context));
stack = G__29523;
rel = G__29524;
index_keys = G__29525;
continue;
}
}
}
}
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rel,index_keys], null);
}
break;
}
});
datascript.analyze.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_.call(null,context,clause))
{var vec__29529 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.call(null,vec__29529,(0),null);var rule = cljs.core.nth.call(null,vec__29529,(1),null);var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var vec__29530 = datascript.analyze.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);var rel = cljs.core.nth.call(null,vec__29530,(0),null);var cc = cljs.core.nth.call(null,vec__29530,(1),null);var context__$1 = cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index-keys","index-keys",-43183086)], null),clojure.set.union,cc);return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else
{return datascript.analyze._resolve_clause.call(null,context,clause);
}
});
datascript.analyze._q__GT_index_keys = (function _q__GT_index_keys(context,clauses){return cljs.core.reduce.call(null,datascript.analyze.resolve_clause,context,clauses);
});
/**
* @param {...*} var_args
*/
datascript.analyze.analyze_q = (function() { 
var analyze_q__delegate = function (q,inputs){var q__$1 = ((cljs.core.sequential_QMARK_.call(null,q))?datascript.query.parse_query.call(null,q):q);var find = datascript.query.find_attrs.call(null,q__$1);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$1);var context = datascript.query.parse_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var result_context = datascript.analyze._q__GT_index_keys.call(null,context,wheres);var process_index_keys = ((function (q__$1,find,ins,wheres,context,result_context){
return (function (index_keys){return cljs.core.set.call(null,cljs.core.map.call(null,((function (q__$1,find,ins,wheres,context,result_context){
return (function (p1__29531_SHARP_){return cljs.core.assoc.call(null,p1__29531_SHARP_,(0),cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(result_context),cljs.core.first.call(null,p1__29531_SHARP_)));
});})(q__$1,find,ins,wheres,context,result_context))
,cljs.core.filter.call(null,((function (q__$1,find,ins,wheres,context,result_context){
return (function (p1__29532_SHARP_){return (cljs.core.count.call(null,p1__29532_SHARP_) > (1));
});})(q__$1,find,ins,wheres,context,result_context))
,index_keys)));
});})(q__$1,find,ins,wheres,context,result_context))
;var index_keys = process_index_keys.call(null,cljs.core.identity.call(null,new cljs.core.Keyword(null,"index-keys","index-keys",-43183086).cljs$core$IFn$_invoke$arity$1(result_context)));return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index-keys","index-keys",-43183086),index_keys,new cljs.core.Keyword(null,"calls","calls",-433802344),(function (){var or__3579__auto__ = new cljs.core.Keyword(null,"calls","calls",-433802344).cljs$core$IFn$_invoke$arity$1(result_context);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.PersistentHashSet.EMPTY;
}
})()], null);
};
var analyze_q = function (q,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return analyze_q__delegate.call(this,q,inputs);};
analyze_q.cljs$lang$maxFixedArity = 1;
analyze_q.cljs$lang$applyTo = (function (arglist__29533){
var q = cljs.core.first(arglist__29533);
var inputs = cljs.core.rest(arglist__29533);
return analyze_q__delegate(q,inputs);
});
analyze_q.cljs$core$IFn$_invoke$arity$variadic = analyze_q__delegate;
return analyze_q;
})()
;

//# sourceMappingURL=analyze.js.map