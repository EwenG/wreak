// Compiled by ClojureScript 0.0-2311
goog.provide('datascript.query');
goog.require('cljs.core');
goog.require('datascript.core');
goog.require('datascript.core');
goog.require('clojure.walk');
goog.require('clojure.walk');
goog.require('clojure.set');
goog.require('clojure.set');

/**
* @constructor
* @param {*} rels
* @param {*} sources
* @param {*} rules
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Context = (function (rels,sources,rules,__meta,__extmap){
this.rels = rels;
this.sources = sources;
this.rules = rules;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>3){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4165__auto__,k__4166__auto__){var self__ = this;
var this__4165__auto____$1 = this;return cljs.core._lookup.call(null,this__4165__auto____$1,k__4166__auto__,null);
});
datascript.query.Context.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4167__auto__,k28993,else__4168__auto__){var self__ = this;
var this__4167__auto____$1 = this;var G__28995 = (((k28993 instanceof cljs.core.Keyword))?k28993.fqn:null);switch (G__28995) {
case "rules":
return self__.rules;

break;
case "sources":
return self__.sources;

break;
case "rels":
return self__.rels;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k28993,else__4168__auto__);

}
});
datascript.query.Context.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4179__auto__,writer__4180__auto__,opts__4181__auto__){var self__ = this;
var this__4179__auto____$1 = this;var pr_pair__4182__auto__ = ((function (this__4179__auto____$1){
return (function (keyval__4183__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,cljs.core.pr_writer,""," ","",opts__4181__auto__,keyval__4183__auto__);
});})(this__4179__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,pr_pair__4182__auto__,"#datascript.query.Context{",", ","}",opts__4181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4163__auto__){var self__ = this;
var this__4163__auto____$1 = this;return self__.__meta;
});
datascript.query.Context.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4169__auto__){var self__ = this;
var this__4169__auto____$1 = this;return (3 + cljs.core.count.call(null,self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4160__auto__){var self__ = this;
var this__4160__auto____$1 = this;var h__3990__auto__ = self__.__hash;if(!((h__3990__auto__ == null)))
{return h__3990__auto__;
} else
{var h__3990__auto____$1 = cljs.core.hash_imap.call(null,this__4160__auto____$1);self__.__hash = h__3990__auto____$1;
return h__3990__auto____$1;
}
});
datascript.query.Context.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4161__auto__,other__4162__auto__){var self__ = this;
var this__4161__auto____$1 = this;if(cljs.core.truth_((function (){var and__3567__auto__ = other__4162__auto__;if(cljs.core.truth_(and__3567__auto__))
{return ((this__4161__auto____$1.constructor === other__4162__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4161__auto____$1,other__4162__auto__));
} else
{return and__3567__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Context.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4174__auto__,k__4175__auto__){var self__ = this;
var this__4174__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"sources","sources",-321166424),null,new cljs.core.Keyword(null,"rules","rules",1198912366),null,new cljs.core.Keyword(null,"rels","rels",1770187185),null], null), null),k__4175__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4174__auto____$1),self__.__meta),k__4175__auto__);
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4175__auto__)),null));
}
});
datascript.query.Context.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4172__auto__,k__4173__auto__,G__28992){var self__ = this;
var this__4172__auto____$1 = this;var pred__28996 = cljs.core.keyword_identical_QMARK_;var expr__28997 = k__4173__auto__;if(cljs.core.truth_(pred__28996.call(null,new cljs.core.Keyword(null,"rels","rels",1770187185),expr__28997)))
{return (new datascript.query.Context(G__28992,self__.sources,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28996.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424),expr__28997)))
{return (new datascript.query.Context(self__.rels,G__28992,self__.rules,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__28996.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366),expr__28997)))
{return (new datascript.query.Context(self__.rels,self__.sources,G__28992,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4173__auto__,G__28992),null));
}
}
}
});
datascript.query.Context.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4177__auto__){var self__ = this;
var this__4177__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rels","rels",1770187185),self__.rels],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"sources","sources",-321166424),self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rules","rules",1198912366),self__.rules],null))], null),self__.__extmap));
});
datascript.query.Context.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4164__auto__,G__28992){var self__ = this;
var this__4164__auto____$1 = this;return (new datascript.query.Context(self__.rels,self__.sources,self__.rules,G__28992,self__.__extmap,self__.__hash));
});
datascript.query.Context.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4170__auto__,entry__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4171__auto__))
{return cljs.core._assoc.call(null,this__4170__auto____$1,cljs.core._nth.call(null,entry__4171__auto__,(0)),cljs.core._nth.call(null,entry__4171__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4170__auto____$1,entry__4171__auto__);
}
});
datascript.query.Context.cljs$lang$type = true;
datascript.query.Context.cljs$lang$ctorPrSeq = (function (this__4199__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Context");
});
datascript.query.Context.cljs$lang$ctorPrWriter = (function (this__4199__auto__,writer__4200__auto__){return cljs.core._write.call(null,writer__4200__auto__,"datascript.query/Context");
});
datascript.query.__GT_Context = (function __GT_Context(rels,sources,rules){return (new datascript.query.Context(rels,sources,rules));
});
datascript.query.map__GT_Context = (function map__GT_Context(G__28994){return (new datascript.query.Context(new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(G__28994),new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(G__28994),new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(G__28994),null,cljs.core.dissoc.call(null,G__28994,new cljs.core.Keyword(null,"rels","rels",1770187185),new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.Keyword(null,"rules","rules",1198912366))));
});

/**
* @constructor
* @param {*} attrs
* @param {*} tuples
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.query.Relation = (function (attrs,tuples,__meta,__extmap){
this.attrs = attrs;
this.tuples = tuples;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>2){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4165__auto__,k__4166__auto__){var self__ = this;
var this__4165__auto____$1 = this;return cljs.core._lookup.call(null,this__4165__auto____$1,k__4166__auto__,null);
});
datascript.query.Relation.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4167__auto__,k29001,else__4168__auto__){var self__ = this;
var this__4167__auto____$1 = this;var G__29003 = (((k29001 instanceof cljs.core.Keyword))?k29001.fqn:null);switch (G__29003) {
case "tuples":
return self__.tuples;

break;
case "attrs":
return self__.attrs;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29001,else__4168__auto__);

}
});
datascript.query.Relation.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4179__auto__,writer__4180__auto__,opts__4181__auto__){var self__ = this;
var this__4179__auto____$1 = this;var pr_pair__4182__auto__ = ((function (this__4179__auto____$1){
return (function (keyval__4183__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,cljs.core.pr_writer,""," ","",opts__4181__auto__,keyval__4183__auto__);
});})(this__4179__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,pr_pair__4182__auto__,"#datascript.query.Relation{",", ","}",opts__4181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4163__auto__){var self__ = this;
var this__4163__auto____$1 = this;return self__.__meta;
});
datascript.query.Relation.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4169__auto__){var self__ = this;
var this__4169__auto____$1 = this;return (2 + cljs.core.count.call(null,self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4160__auto__){var self__ = this;
var this__4160__auto____$1 = this;var h__3990__auto__ = self__.__hash;if(!((h__3990__auto__ == null)))
{return h__3990__auto__;
} else
{var h__3990__auto____$1 = cljs.core.hash_imap.call(null,this__4160__auto____$1);self__.__hash = h__3990__auto____$1;
return h__3990__auto____$1;
}
});
datascript.query.Relation.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4161__auto__,other__4162__auto__){var self__ = this;
var this__4161__auto____$1 = this;if(cljs.core.truth_((function (){var and__3567__auto__ = other__4162__auto__;if(cljs.core.truth_(and__3567__auto__))
{return ((this__4161__auto____$1.constructor === other__4162__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__4161__auto____$1,other__4162__auto__));
} else
{return and__3567__auto__;
}
})()))
{return true;
} else
{return false;
}
});
datascript.query.Relation.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4174__auto__,k__4175__auto__){var self__ = this;
var this__4174__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tuples","tuples",-676032639),null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),null], null), null),k__4175__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4174__auto____$1),self__.__meta),k__4175__auto__);
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4175__auto__)),null));
}
});
datascript.query.Relation.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4172__auto__,k__4173__auto__,G__29000){var self__ = this;
var this__4172__auto____$1 = this;var pred__29004 = cljs.core.keyword_identical_QMARK_;var expr__29005 = k__4173__auto__;if(cljs.core.truth_(pred__29004.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),expr__29005)))
{return (new datascript.query.Relation(G__29000,self__.tuples,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29004.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639),expr__29005)))
{return (new datascript.query.Relation(self__.attrs,G__29000,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.query.Relation(self__.attrs,self__.tuples,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4173__auto__,G__29000),null));
}
}
});
datascript.query.Relation.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4177__auto__){var self__ = this;
var this__4177__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"attrs","attrs",-2090668713),self__.attrs],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tuples","tuples",-676032639),self__.tuples],null))], null),self__.__extmap));
});
datascript.query.Relation.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4164__auto__,G__29000){var self__ = this;
var this__4164__auto____$1 = this;return (new datascript.query.Relation(self__.attrs,self__.tuples,G__29000,self__.__extmap,self__.__hash));
});
datascript.query.Relation.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4170__auto__,entry__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4171__auto__))
{return cljs.core._assoc.call(null,this__4170__auto____$1,cljs.core._nth.call(null,entry__4171__auto__,(0)),cljs.core._nth.call(null,entry__4171__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4170__auto____$1,entry__4171__auto__);
}
});
datascript.query.Relation.cljs$lang$type = true;
datascript.query.Relation.cljs$lang$ctorPrSeq = (function (this__4199__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.query/Relation");
});
datascript.query.Relation.cljs$lang$ctorPrWriter = (function (this__4199__auto__,writer__4200__auto__){return cljs.core._write.call(null,writer__4200__auto__,"datascript.query/Relation");
});
datascript.query.__GT_Relation = (function __GT_Relation(attrs,tuples){return (new datascript.query.Relation(attrs,tuples));
});
datascript.query.map__GT_Relation = (function map__GT_Relation(G__29002){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(G__29002),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(G__29002),null,cljs.core.dissoc.call(null,G__29002,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"tuples","tuples",-676032639))));
});
datascript.query.intersect_keys = (function intersect_keys(attrs1,attrs2){return clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs1)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)));
});
/**
* @param {...*} var_args
*/
datascript.query.concatv = (function() { 
var concatv__delegate = function (xs){return cljs.core.vec.call(null,cljs.core.apply.call(null,cljs.core.concat,xs));
};
var concatv = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return concatv__delegate.call(this,xs);};
concatv.cljs$lang$maxFixedArity = 0;
concatv.cljs$lang$applyTo = (function (arglist__29008){
var xs = cljs.core.seq(arglist__29008);
return concatv__delegate(xs);
});
concatv.cljs$core$IFn$_invoke$arity$variadic = concatv__delegate;
return concatv;
})()
;
datascript.query.source_QMARK_ = (function source_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"$",cljs.core.first.call(null,cljs.core.name.call(null,sym))));
});
datascript.query.free_var_QMARK_ = (function free_var_QMARK_(sym){return ((sym instanceof cljs.core.Symbol)) && (cljs.core._EQ_.call(null,"?",cljs.core.first.call(null,cljs.core.name.call(null,sym)))) && (cljs.core.not_EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),sym));
});
datascript.query.looks_like_QMARK_ = (function looks_like_QMARK_(pattern,form){if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),pattern))
{return true;
} else
{if(cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),pattern))
{return cljs.core.sequential_QMARK_.call(null,form);
} else
{if(cljs.core.sequential_QMARK_.call(null,pattern))
{return (cljs.core.sequential_QMARK_.call(null,form)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,form),cljs.core.count.call(null,pattern))) && (cljs.core.every_QMARK_.call(null,(function (p__29015){var vec__29016 = p__29015;var pattern_el = cljs.core.nth.call(null,vec__29016,(0),null);var form_el = cljs.core.nth.call(null,vec__29016,(1),null);return looks_like_QMARK_.call(null,pattern_el,form_el);
}),cljs.core.map.call(null,cljs.core.vector,pattern,form)));
} else
{if((pattern instanceof cljs.core.Symbol))
{return cljs.core._EQ_.call(null,form,pattern);
} else
{return pattern.call(null,form);

}
}
}
}
});
datascript.query.join_tuples = (function join_tuples(t1,idxs1,t2,idxs2){var l1 = idxs1.length;var l2 = idxs2.length;var res = (new Array((l1 + l2)));var n__4435__auto___29017 = l1;var i_29018 = (0);while(true){
if((i_29018 < n__4435__auto___29017))
{(res[i_29018] = (t1[(idxs1[i_29018])]));
{
var G__29019 = (i_29018 + (1));
i_29018 = G__29019;
continue;
}
} else
{}
break;
}
var n__4435__auto___29020 = l2;var i_29021 = (0);while(true){
if((i_29021 < n__4435__auto___29020))
{(res[(l1 + i_29021)] = (t2[(idxs2[i_29021])]));
{
var G__29022 = (i_29021 + (1));
i_29021 = G__29022;
continue;
}
} else
{}
break;
}
return res;
});
datascript.query.sum_rel = (function sum_rel(a,b){return (new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(a),cljs.core.concat.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(a),new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(b))));
});
datascript.query.prod_rel = (function prod_rel(rel1,rel2){var attrs1 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1));var attrs2 = cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2));var idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),attrs1));var idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2),attrs2));return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,attrs1,attrs2),cljs.core.range.call(null)),(function (){var iter__4304__auto__ = ((function (attrs1,attrs2,idxs1,idxs2){
return (function iter__29029(s__29030){return (new cljs.core.LazySeq(null,((function (attrs1,attrs2,idxs1,idxs2){
return (function (){var s__29030__$1 = s__29030;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29030__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__4300__auto__ = ((function (s__29030__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function iter__29031(s__29032){return (new cljs.core.LazySeq(null,((function (s__29030__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2){
return (function (){var s__29032__$1 = s__29032;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29032__$1);if(temp__4126__auto____$1)
{var s__29032__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29032__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29032__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29034 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29033 = (0);while(true){
if((i__29033 < size__4303__auto__))
{var t2 = cljs.core._nth.call(null,c__4302__auto__,i__29033);cljs.core.chunk_append.call(null,b__29034,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2));
{
var G__29035 = (i__29033 + (1));
i__29033 = G__29035;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29034),iter__29031.call(null,cljs.core.chunk_rest.call(null,s__29032__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29034),null);
}
} else
{var t2 = cljs.core.first.call(null,s__29032__$2);return cljs.core.cons.call(null,datascript.query.join_tuples.call(null,t1,idxs1,t2,idxs2),iter__29031.call(null,cljs.core.rest.call(null,s__29032__$2)));
}
} else
{return null;
}
break;
}
});})(s__29030__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(s__29030__$1,t1,xs__4624__auto__,temp__4126__auto__,attrs1,attrs2,idxs1,idxs2))
;var fs__4301__auto__ = cljs.core.seq.call(null,iterys__4300__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2)));if(fs__4301__auto__)
{return cljs.core.concat.call(null,fs__4301__auto__,iter__29029.call(null,cljs.core.rest.call(null,s__29030__$1)));
} else
{{
var G__29036 = cljs.core.rest.call(null,s__29030__$1);
s__29030__$1 = G__29036;
continue;
}
}
} else
{return null;
}
break;
}
});})(attrs1,attrs2,idxs1,idxs2))
,null,null));
});})(attrs1,attrs2,idxs1,idxs2))
;return iter__4304__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1));
})()));
});
/**
* @param {...*} var_args
*/
datascript.query._differ_QMARK_ = (function() { 
var _differ_QMARK___delegate = function (xs){var l = cljs.core.count.call(null,xs);return cljs.core.not_EQ_.call(null,cljs.core.take.call(null,(l / (2)),xs),cljs.core.drop.call(null,(l / (2)),xs));
};
var _differ_QMARK_ = function (var_args){
var xs = null;if (arguments.length > 0) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return _differ_QMARK___delegate.call(this,xs);};
_differ_QMARK_.cljs$lang$maxFixedArity = 0;
_differ_QMARK_.cljs$lang$applyTo = (function (arglist__29037){
var xs = cljs.core.seq(arglist__29037);
return _differ_QMARK___delegate(xs);
});
_differ_QMARK_.cljs$core$IFn$_invoke$arity$variadic = _differ_QMARK___delegate;
return _differ_QMARK_;
})()
;
datascript.query.built_ins = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Symbol(null,"odd?","odd?",-1458588199,null),new cljs.core.Symbol(null,">=",">=",1016916022,null),new cljs.core.Symbol(null,">",">",1085014381,null),new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"inc","inc",324505433,null),new cljs.core.Symbol(null,"/","/",-1371932971,null),new cljs.core.Symbol(null,"quot","quot",-1125214196,null),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"identity","identity",-1007039734,null),new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null),new cljs.core.Symbol(null,"<=","<=",1244895369,null),new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"min","min",2085523049,null),new cljs.core.Symbol(null,"+","+",-740910886,null),new cljs.core.Symbol(null,"==","==",-234118149,null),new cljs.core.Symbol(null,"max","max",1701898075,null),new cljs.core.Symbol(null,"*","*",345799209,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"!=","!=",-201205829,null),new cljs.core.Symbol(null,"dec","dec",-766002333,null),new cljs.core.Symbol(null,"vector","vector",-751469611,null),new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Symbol(null,"str","str",-1564826950,null),new cljs.core.Symbol(null,"<","<",993667236,null),new cljs.core.Symbol(null,"-","-",-471816912,null),new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"mod","mod",1510044207,null),new cljs.core.Symbol(null,"rem","rem",664046770,null),new cljs.core.Symbol(null,"even?","even?",-1827825394,null),new cljs.core.Symbol(null,"neg?","neg?",-1902175577,null)],[cljs.core.true_QMARK_,cljs.core.odd_QMARK_,cljs.core._GT__EQ_,cljs.core._GT_,cljs.core.nil_QMARK_,cljs.core.inc,cljs.core._SLASH_,cljs.core.quot,cljs.core.false_QMARK_,cljs.core.identity,datascript.query._differ_QMARK_,cljs.core._LT__EQ_,cljs.core._EQ_,cljs.core.min,cljs.core._PLUS_,cljs.core._EQ__EQ_,cljs.core.max,cljs.core._STAR_,cljs.core.zero_QMARK_,cljs.core.not_EQ_,cljs.core.dec,cljs.core.vector,cljs.core.not_EQ_,cljs.core.str,cljs.core._LT_,cljs.core._,cljs.core.pos_QMARK_,cljs.core.mod,cljs.core.rem,cljs.core.even_QMARK_,cljs.core.neg_QMARK_]);
datascript.query.built_in_aggregates = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),cljs.core.comp.call(null,cljs.core.vec,cljs.core.distinct),new cljs.core.Symbol(null,"min","min",2085523049,null),(function() {
var G__29039 = null;
var G__29039__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.min,coll);
});
var G__29039__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x < cljs.core.last.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.butlast.call(null,acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__29039 = function(n,coll){
switch(arguments.length){
case 1:
return G__29039__1.call(this,n);
case 2:
return G__29039__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29039.cljs$core$IFn$_invoke$arity$1 = G__29039__1;
G__29039.cljs$core$IFn$_invoke$arity$2 = G__29039__2;
return G__29039;
})()
,new cljs.core.Symbol(null,"max","max",1701898075,null),(function() {
var G__29040 = null;
var G__29040__1 = (function (coll){return cljs.core.reduce.call(null,cljs.core.max,coll);
});
var G__29040__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.reduce.call(null,(function (acc,x){if((cljs.core.count.call(null,acc) < n))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,acc,x));
} else
{if((x > cljs.core.first.call(null,acc)))
{return cljs.core.sort.call(null,cljs.core.conj.call(null,cljs.core.next.call(null,acc),x));
} else
{return acc;

}
}
}),cljs.core.PersistentVector.EMPTY,coll));
});
G__29040 = function(n,coll){
switch(arguments.length){
case 1:
return G__29040__1.call(this,n);
case 2:
return G__29040__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29040.cljs$core$IFn$_invoke$arity$1 = G__29040__1;
G__29040.cljs$core$IFn$_invoke$arity$2 = G__29040__2;
return G__29040;
})()
,new cljs.core.Symbol(null,"sum","sum",1777518341,null),(function (p1__29038_SHARP_){return cljs.core.reduce.call(null,cljs.core._PLUS_,(0),p1__29038_SHARP_);
}),new cljs.core.Symbol(null,"rand","rand",-1745930995,null),(function() {
var G__29041 = null;
var G__29041__1 = (function (coll){return cljs.core.rand_nth.call(null,coll);
});
var G__29041__2 = (function (n,coll){return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,n,(function (){return cljs.core.rand_nth.call(null,coll);
})));
});
G__29041 = function(n,coll){
switch(arguments.length){
case 1:
return G__29041__1.call(this,n);
case 2:
return G__29041__2.call(this,n,coll);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__29041.cljs$core$IFn$_invoke$arity$1 = G__29041__1;
G__29041.cljs$core$IFn$_invoke$arity$2 = G__29041__2;
return G__29041;
})()
,new cljs.core.Symbol(null,"sample","sample",1719555128,null),(function (n,coll){return cljs.core.vec.call(null,cljs.core.take.call(null,n,cljs.core.shuffle.call(null,coll)));
}),new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.count], null);
datascript.query.in__GT_rel = (function in__GT_rel(form,value){var pred__29049 = datascript.query.looks_like_QMARK_;var expr__29050 = form;if(cljs.core.truth_(pred__29049.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null),expr__29050)))
{return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (pred__29049,expr__29050){
return (function (p1__29042_SHARP_){return in__GT_rel.call(null,cljs.core.first.call(null,form),p1__29042_SHARP_);
});})(pred__29049,expr__29050))
,value));
} else
{if(cljs.core.truth_(pred__29049.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__29050)))
{return cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (pred__29049,expr__29050){
return (function (p1__29043_SHARP_){return in__GT_rel.call(null,cljs.core.first.call(null,form),p1__29043_SHARP_);
});})(pred__29049,expr__29050))
,value));
} else
{if(cljs.core.truth_(pred__29049.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__29050)))
{return cljs.core.reduce.call(null,datascript.query.prod_rel,cljs.core.map.call(null,((function (pred__29049,expr__29050){
return (function (p1__29044_SHARP_,p2__29045_SHARP_){return in__GT_rel.call(null,p1__29044_SHARP_,p2__29045_SHARP_);
});})(pred__29049,expr__29050))
,form,value));
} else
{if(cljs.core.truth_(pred__29049.call(null,new cljs.core.Symbol(null,"_","_",-1201019570,null),expr__29050)))
{return (new datascript.query.Relation(new cljs.core.PersistentArrayMap.fromArray([form,(0)], true, false),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[value]], null)));
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29050))));
}
}
}
}
});
datascript.query.parse_rules = (function parse_rules(rules){var rules__$1 = ((typeof rules === 'string')?cljs.reader.read_string.call(null,rules):rules);return cljs.core.group_by.call(null,cljs.core.ffirst,rules__$1);
});
datascript.query.parse_in = (function parse_in(context,p__29052){var vec__29054 = p__29052;var in$ = cljs.core.nth.call(null,vec__29054,(0),null);var value = cljs.core.nth.call(null,vec__29054,(1),null);if(datascript.query.source_QMARK_.call(null,in$))
{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424)], null),cljs.core.assoc,in$,value);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null),in$))
{return cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rules","rules",1198912366),datascript.query.parse_rules.call(null,value));
} else
{return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,datascript.query.in__GT_rel.call(null,in$,value));

}
}
});
datascript.query.parse_ins = (function parse_ins(context,ins,values){return cljs.core.reduce.call(null,datascript.query.parse_in,context,cljs.core.map.call(null,cljs.core.vector,ins,values));
});
datascript.query.tuple_key_fn = (function tuple_key_fn(idxs){if((cljs.core.count.call(null,idxs) === (1)))
{var idx = cljs.core.first.call(null,idxs);return ((function (idx){
return (function (tuple){return (tuple[idx]);
});
;})(idx))
} else
{var idxs__$1 = cljs.core.to_array.call(null,idxs);return ((function (idxs__$1){
return (function (tuple){return cljs.core.list_STAR_.call(null,idxs__$1.map(((function (idxs__$1){
return (function (p1__29055_SHARP_){return (tuple[p1__29055_SHARP_]);
});})(idxs__$1))
));
});
;})(idxs__$1))
}
});
datascript.query.hash_attrs = (function hash_attrs(idxs,tuples){var key_fn = datascript.query.tuple_key_fn.call(null,idxs);var tuples__$1 = tuples;var hash_table = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
var temp__4124__auto__ = cljs.core.first.call(null,tuples__$1);if(cljs.core.truth_(temp__4124__auto__))
{var tuple = temp__4124__auto__;var key = key_fn.call(null,tuple);{
var G__29056 = cljs.core.next.call(null,tuples__$1);
var G__29057 = cljs.core.assoc_BANG_.call(null,hash_table,key,cljs.core.conj.call(null,cljs.core.get.call(null,hash_table,key,cljs.core.List.EMPTY),tuple));
tuples__$1 = G__29056;
hash_table = G__29057;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,hash_table);
}
break;
}
});
datascript.query.hash_join = (function hash_join(rel1,rel2){var tuples1 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel1);var tuples2 = new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel2);var attrs1 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1);var attrs2 = new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2);var common_attrs = cljs.core.vec.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel2)));var common_idxs1 = cljs.core.map.call(null,attrs1,common_attrs);var common_idxs2 = cljs.core.map.call(null,attrs2,common_attrs);var keep_attrs1 = cljs.core.keys.call(null,attrs1);var keep_attrs2 = cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,attrs2)),cljs.core.set.call(null,cljs.core.keys.call(null,attrs1))));var keep_idxs1 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs1,keep_attrs1));var keep_idxs2 = cljs.core.to_array.call(null,cljs.core.map.call(null,attrs2,keep_attrs2));var hash = datascript.query.hash_attrs.call(null,common_idxs1,tuples1);var key_fn = datascript.query.tuple_key_fn.call(null,common_idxs2);var new_tuples = cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,((function (tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc,tuple2){var key = key_fn.call(null,tuple2);var temp__4124__auto__ = cljs.core.get.call(null,hash,key);if(cljs.core.truth_(temp__4124__auto__))
{var tuples1__$1 = temp__4124__auto__;return cljs.core.reduce.call(null,((function (tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn){
return (function (acc__$1,tuple1){return cljs.core.conj_BANG_.call(null,acc__$1,datascript.query.join_tuples.call(null,tuple1,keep_idxs1,tuple2,keep_idxs2));
});})(tuples1__$1,temp__4124__auto__,key,tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,acc,tuples1__$1);
} else
{return acc;
}
});})(tuples1,tuples2,attrs1,attrs2,common_attrs,common_idxs1,common_idxs2,keep_attrs1,keep_attrs2,keep_idxs1,keep_idxs2,hash,key_fn))
,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY),tuples2));return (new datascript.query.Relation(cljs.core.zipmap.call(null,cljs.core.concat.call(null,keep_attrs1,keep_attrs2),cljs.core.range.call(null)),new_tuples));
});
datascript.query.lookup_pattern_db = (function lookup_pattern_db(db,pattern){var search_pattern = cljs.core.mapv.call(null,(function (p1__29058_SHARP_){if((p1__29058_SHARP_ instanceof cljs.core.Symbol))
{return null;
} else
{return p1__29058_SHARP_;
}
}),pattern);var datoms = datascript.core._search.call(null,db,search_pattern);var attr__GT_prop = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (search_pattern,datoms){
return (function (p__29061){var vec__29062 = p__29061;var s = cljs.core.nth.call(null,vec__29062,(0),null);var _ = cljs.core.nth.call(null,vec__29062,(1),null);return datascript.query.free_var_QMARK_.call(null,s);
});})(search_pattern,datoms))
,cljs.core.map.call(null,cljs.core.vector,pattern,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["e","a","v","tx"], null))));return (new datascript.query.Relation(attr__GT_prop,datoms));
});
datascript.query.matches_pattern_QMARK_ = (function matches_pattern_QMARK_(pattern,tuple){var tuple__$1 = tuple;var pattern__$1 = pattern;while(true){
if(cljs.core.truth_((function (){var and__3567__auto__ = tuple__$1;if(cljs.core.truth_(and__3567__auto__))
{return pattern__$1;
} else
{return and__3567__auto__;
}
})()))
{var t = cljs.core.first.call(null,tuple__$1);var p = cljs.core.first.call(null,pattern__$1);if(((p instanceof cljs.core.Symbol)) || (cljs.core._EQ_.call(null,t,p)))
{{
var G__29063 = cljs.core.next.call(null,tuple__$1);
var G__29064 = cljs.core.next.call(null,pattern__$1);
tuple__$1 = G__29063;
pattern__$1 = G__29064;
continue;
}
} else
{return false;
}
} else
{return true;
}
break;
}
});
datascript.query.lookup_pattern_coll = (function lookup_pattern_coll(coll,pattern){var data = cljs.core.filter.call(null,(function (p1__29065_SHARP_){return datascript.query.matches_pattern_QMARK_.call(null,pattern,p1__29065_SHARP_);
}),coll);var attr__GT_idx = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,((function (data){
return (function (p__29068){var vec__29069 = p__29068;var s = cljs.core.nth.call(null,vec__29069,(0),null);var _ = cljs.core.nth.call(null,vec__29069,(1),null);return datascript.query.free_var_QMARK_.call(null,s);
});})(data))
,cljs.core.map.call(null,cljs.core.vector,pattern,cljs.core.range.call(null))));return (new datascript.query.Relation(attr__GT_idx,cljs.core.map.call(null,cljs.core.to_array,data)));
});
datascript.query.lookup_pattern = (function lookup_pattern(context,clause){var vec__29071 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source_sym = cljs.core.nth.call(null,vec__29071,(0),null);var pattern = cljs.core.nth.call(null,vec__29071,(1),null);var source = cljs.core.get.call(null,new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(context),source_sym);if((source instanceof datascript.core.DB))
{return datascript.query.lookup_pattern_db.call(null,source,pattern);
} else
{return datascript.query.lookup_pattern_coll.call(null,source,pattern);

}
});
datascript.query.collapse_rels = (function collapse_rels(rels,new_rel){var rels__$1 = rels;var new_rel__$1 = new_rel;var acc = cljs.core.PersistentVector.EMPTY;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels__$1);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;if(cljs.core.truth_(cljs.core.not_empty.call(null,datascript.query.intersect_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(new_rel__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel)))))
{{
var G__29072 = cljs.core.next.call(null,rels__$1);
var G__29073 = datascript.query.hash_join.call(null,rel,new_rel__$1);
var G__29074 = acc;
rels__$1 = G__29072;
new_rel__$1 = G__29073;
acc = G__29074;
continue;
}
} else
{{
var G__29075 = cljs.core.next.call(null,rels__$1);
var G__29076 = new_rel__$1;
var G__29077 = cljs.core.conj.call(null,acc,rel);
rels__$1 = G__29075;
new_rel__$1 = G__29076;
acc = G__29077;
continue;
}
}
} else
{return cljs.core.conj.call(null,acc,new_rel__$1);
}
break;
}
});
datascript.query.context_resolve_val = (function context_resolve_val(context,sym){var temp__4126__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29078_SHARP_){return cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(p1__29078_SHARP_),sym);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context)));if(cljs.core.truth_(temp__4126__auto__))
{var rel = temp__4126__auto__;return (cljs.core.first.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel))[new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel).call(null,sym)]);
} else
{return null;
}
});
datascript.query.rel_contains_attrs_QMARK_ = (function rel_contains_attrs_QMARK_(rel,attrs){return !(cljs.core.empty_QMARK_.call(null,clojure.set.intersection.call(null,cljs.core.set.call(null,attrs),cljs.core.set.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel))))));
});
datascript.query.rel_prod_by_attrs = (function rel_prod_by_attrs(context,attrs){var rels = cljs.core.filter.call(null,(function (p1__29079_SHARP_){return datascript.query.rel_contains_attrs_QMARK_.call(null,p1__29079_SHARP_,attrs);
}),new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context));var production = cljs.core.reduce.call(null,datascript.query.prod_rel,rels);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),((function (rels,production){
return (function (p1__29080_SHARP_){return cljs.core.remove.call(null,cljs.core.set.call(null,rels),p1__29080_SHARP_);
});})(rels,production))
),production], null);
});
datascript.query._call_fn = (function _call_fn(rel,f,args){return (function (tuple){var resolved_args = cljs.core.map.call(null,(function (p1__29081_SHARP_){if((p1__29081_SHARP_ instanceof cljs.core.Symbol))
{return (tuple[cljs.core.get.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),p1__29081_SHARP_)]);
} else
{return p1__29081_SHARP_;
}
}),args);return cljs.core.apply.call(null,f,resolved_args);
});
});
datascript.query.filter_by_pred = (function filter_by_pred(context,clause){var vec__29086 = clause;var vec__29087 = cljs.core.nth.call(null,vec__29086,(0),null);var f = cljs.core.nth.call(null,vec__29087,(0),null);var args = cljs.core.nthnext.call(null,vec__29087,(1));var pred = (function (){var or__3579__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();var vec__29088 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.call(null,vec__29088,(0),null);var production = cljs.core.nth.call(null,vec__29088,(1),null);var tuple_pred = datascript.query._call_fn.call(null,production,pred,args);var new_rel = cljs.core.update_in.call(null,production,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuples","tuples",-676032639)], null),((function (vec__29086,vec__29087,f,args,pred,vec__29088,context__$1,production,tuple_pred){
return (function (p1__29082_SHARP_){return cljs.core.filter.call(null,tuple_pred,p1__29082_SHARP_);
});})(vec__29086,vec__29087,f,args,pred,vec__29088,context__$1,production,tuple_pred))
);return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.bind_by_fn = (function bind_by_fn(context,clause){var vec__29093 = clause;var vec__29094 = cljs.core.nth.call(null,vec__29093,(0),null);var f = cljs.core.nth.call(null,vec__29094,(0),null);var args = cljs.core.nthnext.call(null,vec__29094,(1));var out = cljs.core.nth.call(null,vec__29093,(1),null);var fun = (function (){var or__3579__auto__ = cljs.core.get.call(null,datascript.query.built_ins,f);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();var vec__29095 = datascript.query.rel_prod_by_attrs.call(null,context,cljs.core.filter.call(null,cljs.core.symbol_QMARK_,args));var context__$1 = cljs.core.nth.call(null,vec__29095,(0),null);var production = cljs.core.nth.call(null,vec__29095,(1),null);var tuple_fn = datascript.query._call_fn.call(null,production,fun,args);var new_rel = cljs.core.reduce.call(null,datascript.query.sum_rel,cljs.core.map.call(null,((function (vec__29093,vec__29094,f,args,out,fun,vec__29095,context__$1,production,tuple_fn){
return (function (p1__29089_SHARP_){var val = tuple_fn.call(null,p1__29089_SHARP_);var rel = datascript.query.in__GT_rel.call(null,out,val);return datascript.query.prod_rel.call(null,(new datascript.query.Relation(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(production),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29089_SHARP_], null))),rel);
});})(vec__29093,vec__29094,f,args,out,fun,vec__29095,context__$1,production,tuple_fn))
,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(production)));return cljs.core.update_in.call(null,context__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),cljs.core.conj,new_rel);
});
datascript.query.rule_QMARK_ = (function rule_QMARK_(context,clause){return (cljs.core.sequential_QMARK_.call(null,clause)) && (cljs.core.contains_QMARK_.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?cljs.core.second.call(null,clause):cljs.core.first.call(null,clause))));
});
datascript.query.rule_seqid = cljs.core.atom.call(null,(0));
datascript.query.expand_rule = (function expand_rule(clause,context,used_args){var vec__29110 = clause;var rule = cljs.core.nth.call(null,vec__29110,(0),null);var call_args = cljs.core.nthnext.call(null,vec__29110,(1));var seqid = cljs.core.swap_BANG_.call(null,datascript.query.rule_seqid,cljs.core.inc);var branches = cljs.core.get.call(null,new cljs.core.Keyword(null,"rules","rules",1198912366).cljs$core$IFn$_invoke$arity$1(context),rule);var iter__4304__auto__ = ((function (vec__29110,rule,call_args,seqid,branches){
return (function iter__29111(s__29112){return (new cljs.core.LazySeq(null,((function (vec__29110,rule,call_args,seqid,branches){
return (function (){var s__29112__$1 = s__29112;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29112__$1);if(temp__4126__auto__)
{var s__29112__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29112__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29112__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29114 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29113 = (0);while(true){
if((i__29113 < size__4303__auto__))
{var branch = cljs.core._nth.call(null,c__4302__auto__,i__29113);var vec__29119 = branch;var vec__29120 = cljs.core.nth.call(null,vec__29119,(0),null);var _ = cljs.core.nth.call(null,vec__29120,(0),null);var rule_args = cljs.core.nthnext.call(null,vec__29120,(1));var clauses = cljs.core.nthnext.call(null,vec__29119,(1));var replacements = cljs.core.zipmap.call(null,rule_args,call_args);cljs.core.chunk_append.call(null,b__29114,clojure.walk.postwalk.call(null,((function (i__29113,vec__29119,vec__29120,_,rule_args,clauses,replacements,branch,c__4302__auto__,size__4303__auto__,b__29114,s__29112__$2,temp__4126__auto__,vec__29110,rule,call_args,seqid,branches){
return (function (p1__29096_SHARP_){if(datascript.query.free_var_QMARK_.call(null,p1__29096_SHARP_))
{var or__3579__auto__ = replacements.call(null,p1__29096_SHARP_);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__29096_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__29096_SHARP_;
}
});})(i__29113,vec__29119,vec__29120,_,rule_args,clauses,replacements,branch,c__4302__auto__,size__4303__auto__,b__29114,s__29112__$2,temp__4126__auto__,vec__29110,rule,call_args,seqid,branches))
,clauses));
{
var G__29123 = (i__29113 + (1));
i__29113 = G__29123;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29114),iter__29111.call(null,cljs.core.chunk_rest.call(null,s__29112__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29114),null);
}
} else
{var branch = cljs.core.first.call(null,s__29112__$2);var vec__29121 = branch;var vec__29122 = cljs.core.nth.call(null,vec__29121,(0),null);var _ = cljs.core.nth.call(null,vec__29122,(0),null);var rule_args = cljs.core.nthnext.call(null,vec__29122,(1));var clauses = cljs.core.nthnext.call(null,vec__29121,(1));var replacements = cljs.core.zipmap.call(null,rule_args,call_args);return cljs.core.cons.call(null,clojure.walk.postwalk.call(null,((function (vec__29121,vec__29122,_,rule_args,clauses,replacements,branch,s__29112__$2,temp__4126__auto__,vec__29110,rule,call_args,seqid,branches){
return (function (p1__29096_SHARP_){if(datascript.query.free_var_QMARK_.call(null,p1__29096_SHARP_))
{var or__3579__auto__ = replacements.call(null,p1__29096_SHARP_);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.symbol.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,p1__29096_SHARP_))+"__auto__"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(seqid)));
}
} else
{return p1__29096_SHARP_;
}
});})(vec__29121,vec__29122,_,rule_args,clauses,replacements,branch,s__29112__$2,temp__4126__auto__,vec__29110,rule,call_args,seqid,branches))
,clauses),iter__29111.call(null,cljs.core.rest.call(null,s__29112__$2)));
}
} else
{return null;
}
break;
}
});})(vec__29110,rule,call_args,seqid,branches))
,null,null));
});})(vec__29110,rule,call_args,seqid,branches))
;return iter__4304__auto__.call(null,branches);
});
datascript.query.remove_pairs = (function remove_pairs(xs,ys){var pairs = cljs.core.remove.call(null,(function (p__29126){var vec__29127 = p__29126;var x = cljs.core.nth.call(null,vec__29127,(0),null);var y = cljs.core.nth.call(null,vec__29127,(1),null);return cljs.core._EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,cljs.core.first,pairs),cljs.core.map.call(null,cljs.core.second,pairs)], null);
});
datascript.query.rule_gen_guards = (function rule_gen_guards(rule_clause,used_args){var vec__29137 = rule_clause;var rule = cljs.core.nth.call(null,vec__29137,(0),null);var call_args = cljs.core.nthnext.call(null,vec__29137,(1));var prev_call_args = cljs.core.get.call(null,used_args,rule);var iter__4304__auto__ = ((function (vec__29137,rule,call_args,prev_call_args){
return (function iter__29138(s__29139){return (new cljs.core.LazySeq(null,((function (vec__29137,rule,call_args,prev_call_args){
return (function (){var s__29139__$1 = s__29139;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29139__$1);if(temp__4126__auto__)
{var s__29139__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29139__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29139__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29141 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29140 = (0);while(true){
if((i__29140 < size__4303__auto__))
{var prev_args = cljs.core._nth.call(null,c__4302__auto__,i__29140);var vec__29144 = datascript.query.remove_pairs.call(null,call_args,prev_args);var call_args__$1 = cljs.core.nth.call(null,vec__29144,(0),null);var prev_args__$1 = cljs.core.nth.call(null,vec__29144,(1),null);cljs.core.chunk_append.call(null,b__29141,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null));
{
var G__29146 = (i__29140 + (1));
i__29140 = G__29146;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29141),iter__29138.call(null,cljs.core.chunk_rest.call(null,s__29139__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29141),null);
}
} else
{var prev_args = cljs.core.first.call(null,s__29139__$2);var vec__29145 = datascript.query.remove_pairs.call(null,call_args,prev_args);var call_args__$1 = cljs.core.nth.call(null,vec__29145,(0),null);var prev_args__$1 = cljs.core.nth.call(null,vec__29145,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null)], null),call_args__$1,prev_args__$1)], null),iter__29138.call(null,cljs.core.rest.call(null,s__29139__$2)));
}
} else
{return null;
}
break;
}
});})(vec__29137,rule,call_args,prev_call_args))
,null,null));
});})(vec__29137,rule,call_args,prev_call_args))
;return iter__4304__auto__.call(null,prev_call_args);
});
datascript.query.walk_collect = (function walk_collect(form,pred){var res = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);clojure.walk.postwalk.call(null,((function (res){
return (function (p1__29147_SHARP_){if(cljs.core.truth_(pred.call(null,p1__29147_SHARP_)))
{cljs.core.swap_BANG_.call(null,res,cljs.core.conj,p1__29147_SHARP_);
} else
{}
return p1__29147_SHARP_;
});})(res))
,form);
return cljs.core.deref.call(null,res);
});
datascript.query.split_guards = (function split_guards(clauses,guards){var bound_vars = cljs.core.set.call(null,datascript.query.walk_collect.call(null,clauses,datascript.query.free_var_QMARK_));var pred = ((function (bound_vars){
return (function (p__29151){var vec__29152 = p__29151;var vec__29153 = cljs.core.nth.call(null,vec__29152,(0),null);var _ = cljs.core.nth.call(null,vec__29153,(0),null);var vars = cljs.core.nthnext.call(null,vec__29153,(1));return cljs.core.every_QMARK_.call(null,bound_vars,vars);
});})(bound_vars))
;return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.filter.call(null,pred,guards),cljs.core.remove.call(null,pred,guards)], null);
});
datascript.query.solve_rule = (function solve_rule(context,clause){var final_attrs = cljs.core.filter.call(null,datascript.query.free_var_QMARK_,clause);var final_attrs_map = cljs.core.zipmap.call(null,final_attrs,cljs.core.range.call(null));var solve = ((function (final_attrs,final_attrs_map){
return (function (prefix_context,clauses){return cljs.core.reduce.call(null,datascript.query._resolve_clause,prefix_context,clauses);
});})(final_attrs,final_attrs_map))
;var empty_rels_QMARK_ = ((function (final_attrs,final_attrs_map,solve){
return (function (context__$1){return cljs.core.some.call(null,((function (final_attrs,final_attrs_map,solve){
return (function (p1__29154_SHARP_){return cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(p1__29154_SHARP_));
});})(final_attrs,final_attrs_map,solve))
,new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context__$1));
});})(final_attrs,final_attrs_map,solve))
;var stack = cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"rels","rels",1770187185),cljs.core.PersistentVector.EMPTY),new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"used-args","used-args",23596256),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),cljs.core.PersistentArrayMap.EMPTY], null));var rel = (new datascript.query.Relation(final_attrs_map,cljs.core.PersistentVector.EMPTY));while(true){
var temp__4124__auto__ = cljs.core.first.call(null,stack);if(cljs.core.truth_(temp__4124__auto__))
{var frame = temp__4124__auto__;var vec__29165 = cljs.core.split_with.call(null,((function (stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29155_SHARP_){return !(datascript.query.rule_QMARK_.call(null,context,p1__29155_SHARP_));
});})(stack,rel,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(frame));var clauses = cljs.core.nth.call(null,vec__29165,(0),null);var vec__29166 = cljs.core.nth.call(null,vec__29165,(1),null);var rule_clause = cljs.core.nth.call(null,vec__29166,(0),null);var next_clauses = cljs.core.nthnext.call(null,vec__29166,(1));if((rule_clause == null))
{var context__$1 = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),clauses);var tuples = datascript.query._collect.call(null,context__$1,final_attrs);var new_rel = (new datascript.query.Relation(final_attrs_map,tuples));{
var G__29173 = cljs.core.next.call(null,stack);
var G__29174 = datascript.query.sum_rel.call(null,rel,new_rel);
stack = G__29173;
rel = G__29174;
continue;
}
} else
{var vec__29167 = rule_clause;var rule = cljs.core.nth.call(null,vec__29167,(0),null);var call_args = cljs.core.nthnext.call(null,vec__29167,(1));var guards = datascript.query.rule_gen_guards.call(null,rule_clause,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame));var vec__29168 = datascript.query.split_guards.call(null,cljs.core.concat.call(null,new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028).cljs$core$IFn$_invoke$arity$1(frame),clauses),cljs.core.concat.call(null,guards,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308).cljs$core$IFn$_invoke$arity$1(frame)));var active_gs = cljs.core.nth.call(null,vec__29168,(0),null);var pending_gs = cljs.core.nth.call(null,vec__29168,(1),null);if(cljs.core.truth_(cljs.core.some.call(null,((function (stack,rel,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (p1__29156_SHARP_){return cljs.core._EQ_.call(null,p1__29156_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol(null,"-differ?","-differ?",1465687357,null))], null));
});})(stack,rel,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,active_gs)))
{{
var G__29175 = cljs.core.next.call(null,stack);
var G__29176 = rel;
stack = G__29175;
rel = G__29176;
continue;
}
} else
{var prefix_clauses = cljs.core.concat.call(null,clauses,active_gs);var prefix_context = solve.call(null,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591).cljs$core$IFn$_invoke$arity$1(frame),prefix_clauses);if(cljs.core.truth_(empty_rels_QMARK_.call(null,prefix_context)))
{{
var G__29177 = cljs.core.next.call(null,stack);
var G__29178 = rel;
stack = G__29177;
rel = G__29178;
continue;
}
} else
{var used_args = cljs.core.assoc.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.conj.call(null,cljs.core.get.call(null,new cljs.core.Keyword(null,"used-args","used-args",23596256).cljs$core$IFn$_invoke$arity$1(frame),rule,cljs.core.PersistentVector.EMPTY),call_args));var branches = datascript.query.expand_rule.call(null,rule_clause,context,used_args);{
var G__29179 = cljs.core.concat.call(null,(function (){var iter__4304__auto__ = ((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function iter__29169(s__29170){return (new cljs.core.LazySeq(null,((function (stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_){
return (function (){var s__29170__$1 = s__29170;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29170__$1);if(temp__4126__auto__)
{var s__29170__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29170__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29170__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29172 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29171 = (0);while(true){
if((i__29171 < size__4303__auto__))
{var branch = cljs.core._nth.call(null,c__4302__auto__,i__29171);cljs.core.chunk_append.call(null,b__29172,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null));
{
var G__29181 = (i__29171 + (1));
i__29171 = G__29181;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29172),iter__29169.call(null,cljs.core.chunk_rest.call(null,s__29170__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29172),null);
}
} else
{var branch = cljs.core.first.call(null,s__29170__$2);return cljs.core.cons.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"prefix-clauses","prefix-clauses",1294180028),prefix_clauses,new cljs.core.Keyword(null,"prefix-context","prefix-context",-1269613591),prefix_context,new cljs.core.Keyword(null,"clauses","clauses",1454841241),datascript.query.concatv.call(null,branch,next_clauses),new cljs.core.Keyword(null,"used-args","used-args",23596256),used_args,new cljs.core.Keyword(null,"pending-guards","pending-guards",-1255527308),pending_gs], null),iter__29169.call(null,cljs.core.rest.call(null,s__29170__$2)));
}
} else
{return null;
}
break;
}
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
,null,null));
});})(stack,rel,used_args,branches,prefix_clauses,prefix_context,vec__29167,rule,call_args,guards,vec__29168,active_gs,pending_gs,vec__29165,clauses,vec__29166,rule_clause,next_clauses,frame,temp__4124__auto__,final_attrs,final_attrs_map,solve,empty_rels_QMARK_))
;return iter__4304__auto__.call(null,branches);
})(),cljs.core.next.call(null,stack));
var G__29180 = rel;
stack = G__29179;
rel = G__29180;
continue;
}
}
}
}
} else
{return rel;
}
break;
}
});
datascript.query._resolve_clause = (function _resolve_clause(context,clause){var pred__29185 = datascript.query.looks_like_QMARK_;var expr__29186 = clause;if(cljs.core.truth_(pred__29185.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null)], null),expr__29186)))
{return datascript.query.filter_by_pred.call(null,context,clause);
} else
{if(cljs.core.truth_(pred__29185.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null),expr__29186)))
{return datascript.query.bind_by_fn.call(null,context,clause);
} else
{if(cljs.core.truth_(pred__29185.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"*","*",345799209,null)], null),expr__29186)))
{var relation = datascript.query.lookup_pattern.call(null,context,clause);return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,relation);
} else
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__29186))));
}
}
}
});
datascript.query.resolve_clause = (function resolve_clause(context,clause){if(datascript.query.rule_QMARK_.call(null,context,clause))
{var vec__29189 = ((datascript.query.source_QMARK_.call(null,cljs.core.first.call(null,clause)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,clause),cljs.core.next.call(null,clause)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null),clause], null));var source = cljs.core.nth.call(null,vec__29189,(0),null);var rule = cljs.core.nth.call(null,vec__29189,(1),null);var source__$1 = cljs.core.get_in.call(null,context,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sources","sources",-321166424),source], null));var rel = datascript.query.solve_rule.call(null,cljs.core.assoc.call(null,context,new cljs.core.Keyword(null,"sources","sources",-321166424),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"$","$",-1580747756,null),source__$1], null)),rule);return cljs.core.update_in.call(null,context,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rels","rels",1770187185)], null),datascript.query.collapse_rels,rel);
} else
{return datascript.query._resolve_clause.call(null,context,clause);
}
});
datascript.query._q = (function _q(context,clauses){return cljs.core.reduce.call(null,datascript.query.resolve_clause,context,clauses);
});
datascript.query._collect = (function() {
var _collect = null;
var _collect__2 = (function (context,symbols){var rels = new cljs.core.Keyword(null,"rels","rels",1770187185).cljs$core$IFn$_invoke$arity$1(context);return _collect.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new Array(cljs.core.count.call(null,symbols)))], null),rels,symbols);
});
var _collect__3 = (function (acc,rels,symbols){while(true){
var temp__4124__auto__ = cljs.core.first.call(null,rels);if(cljs.core.truth_(temp__4124__auto__))
{var rel = temp__4124__auto__;var keep_attrs = cljs.core.select_keys.call(null,new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(rel),symbols);if(cljs.core.empty_QMARK_.call(null,keep_attrs))
{{
var G__29203 = acc;
var G__29204 = cljs.core.next.call(null,rels);
var G__29205 = symbols;
acc = G__29203;
rels = G__29204;
symbols = G__29205;
continue;
}
} else
{var copy_map = cljs.core.to_array.call(null,cljs.core.map.call(null,((function (acc,rels,symbols,keep_attrs,rel,temp__4124__auto__){
return (function (p1__29190_SHARP_){return cljs.core.get.call(null,keep_attrs,p1__29190_SHARP_);
});})(acc,rels,symbols,keep_attrs,rel,temp__4124__auto__))
,symbols));var len = cljs.core.count.call(null,symbols);{
var G__29206 = (function (){var iter__4304__auto__ = ((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__29197(s__29198){return (new cljs.core.LazySeq(null,((function (acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__29198__$1 = s__29198;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29198__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var t1 = cljs.core.first.call(null,xs__4624__auto__);var iterys__4300__auto__ = ((function (s__29198__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function iter__29199(s__29200){return (new cljs.core.LazySeq(null,((function (s__29198__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__){
return (function (){var s__29200__$1 = s__29200;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29200__$1);if(temp__4126__auto____$1)
{var s__29200__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29200__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29200__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29202 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29201 = (0);while(true){
if((i__29201 < size__4303__auto__))
{var t2 = cljs.core._nth.call(null,c__4302__auto__,i__29201);cljs.core.chunk_append.call(null,b__29202,(function (){var res = cljs.core.aclone.call(null,t1);var n__4435__auto___29209 = len;var i_29210 = (0);while(true){
if((i_29210 < n__4435__auto___29209))
{var temp__4126__auto___29211__$2 = (copy_map[i_29210]);if(cljs.core.truth_(temp__4126__auto___29211__$2))
{var idx_29212 = temp__4126__auto___29211__$2;(res[i_29210] = (t2[idx_29212]));
} else
{}
{
var G__29213 = (i_29210 + (1));
i_29210 = G__29213;
continue;
}
} else
{}
break;
}
return res;
})());
{
var G__29214 = (i__29201 + (1));
i__29201 = G__29214;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29202),iter__29199.call(null,cljs.core.chunk_rest.call(null,s__29200__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29202),null);
}
} else
{var t2 = cljs.core.first.call(null,s__29200__$2);return cljs.core.cons.call(null,(function (){var res = cljs.core.aclone.call(null,t1);var n__4435__auto___29215 = len;var i_29216 = (0);while(true){
if((i_29216 < n__4435__auto___29215))
{var temp__4126__auto___29217__$2 = (copy_map[i_29216]);if(cljs.core.truth_(temp__4126__auto___29217__$2))
{var idx_29218 = temp__4126__auto___29217__$2;(res[i_29216] = (t2[idx_29218]));
} else
{}
{
var G__29219 = (i_29216 + (1));
i_29216 = G__29219;
continue;
}
} else
{}
break;
}
return res;
})(),iter__29199.call(null,cljs.core.rest.call(null,s__29200__$2)));
}
} else
{return null;
}
break;
}
});})(s__29198__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(s__29198__$1,acc,rels,symbols,t1,xs__4624__auto__,temp__4126__auto__,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;var fs__4301__auto__ = cljs.core.seq.call(null,iterys__4300__auto__.call(null,new cljs.core.Keyword(null,"tuples","tuples",-676032639).cljs$core$IFn$_invoke$arity$1(rel)));if(fs__4301__auto__)
{return cljs.core.concat.call(null,fs__4301__auto__,iter__29197.call(null,cljs.core.rest.call(null,s__29198__$1)));
} else
{{
var G__29220 = cljs.core.rest.call(null,s__29198__$1);
s__29198__$1 = G__29220;
continue;
}
}
} else
{return null;
}
break;
}
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
,null,null));
});})(acc,rels,symbols,copy_map,len,keep_attrs,rel,temp__4124__auto__))
;return iter__4304__auto__.call(null,acc);
})();
var G__29207 = cljs.core.next.call(null,rels);
var G__29208 = symbols;
acc = G__29206;
rels = G__29207;
symbols = G__29208;
continue;
}
}
} else
{return acc;
}
break;
}
});
_collect = function(acc,rels,symbols){
switch(arguments.length){
case 2:
return _collect__2.call(this,acc,rels);
case 3:
return _collect__3.call(this,acc,rels,symbols);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
_collect.cljs$core$IFn$_invoke$arity$2 = _collect__2;
_collect.cljs$core$IFn$_invoke$arity$3 = _collect__3;
return _collect;
})()
;
datascript.query.collect = (function collect(context,symbols){return cljs.core.set.call(null,cljs.core.map.call(null,cljs.core.vec,datascript.query._collect.call(null,context,symbols)));
});
datascript.query.find_attrs = (function find_attrs(q){return cljs.core.concat.call(null,cljs.core.map.call(null,(function (p1__29221_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__29221_SHARP_))
{return cljs.core.last.call(null,p1__29221_SHARP_);
} else
{return p1__29221_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q)),new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q));
});
datascript.query._aggregate = (function _aggregate(q,context,tuples){return cljs.core.mapv.call(null,(function (form,fixed_value,i){if(cljs.core.sequential_QMARK_.call(null,form))
{var vec__29225 = form;var f = cljs.core.nth.call(null,vec__29225,(0),null);var args = cljs.core.nthnext.call(null,vec__29225,(1));var vals = cljs.core.map.call(null,((function (vec__29225,f,args){
return (function (p1__29222_SHARP_){return cljs.core.nth.call(null,p1__29222_SHARP_,i);
});})(vec__29225,f,args))
,tuples);var args__$1 = cljs.core.map.call(null,((function (vec__29225,f,args,vals){
return (function (p1__29223_SHARP_){if((p1__29223_SHARP_ instanceof cljs.core.Symbol))
{return datascript.query.context_resolve_val.call(null,context,p1__29223_SHARP_);
} else
{return p1__29223_SHARP_;
}
});})(vec__29225,f,args,vals))
,cljs.core.butlast.call(null,args));var f__$1 = (function (){var or__3579__auto__ = datascript.query.built_in_aggregates.call(null,f);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return datascript.query.context_resolve_val.call(null,context,f);
}
})();return cljs.core.apply.call(null,f__$1,cljs.core.concat.call(null,args__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vals], null)));
} else
{return fixed_value;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.first.call(null,tuples),cljs.core.range.call(null));
});
datascript.query.aggregate = (function aggregate(q,context,resultset){var group_idxs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,(function (p1__29226_SHARP_,p2__29227_SHARP_){if(cljs.core.sequential_QMARK_.call(null,p1__29226_SHARP_))
{return null;
} else
{return p2__29227_SHARP_;
}
}),new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q),cljs.core.range.call(null)));var group_fn = ((function (group_idxs){
return (function (tuple){return cljs.core.map.call(null,((function (group_idxs){
return (function (p1__29228_SHARP_){return cljs.core.nth.call(null,tuple,p1__29228_SHARP_);
});})(group_idxs))
,group_idxs);
});})(group_idxs))
;var grouped = cljs.core.group_by.call(null,group_fn,resultset);var iter__4304__auto__ = ((function (group_idxs,group_fn,grouped){
return (function iter__29237(s__29238){return (new cljs.core.LazySeq(null,((function (group_idxs,group_fn,grouped){
return (function (){var s__29238__$1 = s__29238;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29238__$1);if(temp__4126__auto__)
{var s__29238__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__29238__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29238__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29240 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29239 = (0);while(true){
if((i__29239 < size__4303__auto__))
{var vec__29243 = cljs.core._nth.call(null,c__4302__auto__,i__29239);var _ = cljs.core.nth.call(null,vec__29243,(0),null);var tuples = cljs.core.nth.call(null,vec__29243,(1),null);cljs.core.chunk_append.call(null,b__29240,datascript.query._aggregate.call(null,q,context,tuples));
{
var G__29245 = (i__29239 + (1));
i__29239 = G__29245;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29240),iter__29237.call(null,cljs.core.chunk_rest.call(null,s__29238__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29240),null);
}
} else
{var vec__29244 = cljs.core.first.call(null,s__29238__$2);var _ = cljs.core.nth.call(null,vec__29244,(0),null);var tuples = cljs.core.nth.call(null,vec__29244,(1),null);return cljs.core.cons.call(null,datascript.query._aggregate.call(null,q,context,tuples),iter__29237.call(null,cljs.core.rest.call(null,s__29238__$2)));
}
} else
{return null;
}
break;
}
});})(group_idxs,group_fn,grouped))
,null,null));
});})(group_idxs,group_fn,grouped))
;return iter__4304__auto__.call(null,grouped);
});
datascript.query.parse_query = (function parse_query(query){var parsed = cljs.core.PersistentArrayMap.EMPTY;var key = null;var qs = query;while(true){
var temp__4124__auto__ = cljs.core.first.call(null,qs);if(cljs.core.truth_(temp__4124__auto__))
{var q = temp__4124__auto__;if((q instanceof cljs.core.Keyword))
{{
var G__29246 = parsed;
var G__29247 = q;
var G__29248 = cljs.core.next.call(null,qs);
parsed = G__29246;
key = G__29247;
qs = G__29248;
continue;
}
} else
{{
var G__29249 = cljs.core.update_in.call(null,parsed,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentVector.EMPTY),q);
var G__29250 = key;
var G__29251 = cljs.core.next.call(null,qs);
parsed = G__29249;
key = G__29250;
qs = G__29251;
continue;
}
}
} else
{return parsed;
}
break;
}
});
/**
* @param {...*} var_args
*/
datascript.query.q = (function() { 
var q__delegate = function (q__$1,inputs){var q__$2 = ((cljs.core.sequential_QMARK_.call(null,q__$1))?datascript.query.parse_query.call(null,q__$1):q__$1);var find = datascript.query.find_attrs.call(null,q__$2);var ins = new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$2(q__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"$","$",-1580747756,null)], null));var wheres = new cljs.core.Keyword(null,"where","where",-2044795965).cljs$core$IFn$_invoke$arity$1(q__$2);var context = datascript.query.parse_ins.call(null,(new datascript.query.Context(cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY)),ins,inputs);var resultset = datascript.query.collect.call(null,datascript.query._q.call(null,context,wheres),find);var G__29254 = resultset;var G__29254__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"with","with",-1536296876).cljs$core$IFn$_invoke$arity$1(q__$2))?cljs.core.mapv.call(null,((function (G__29254,q__$2,find,ins,wheres,context,resultset){
return (function (p1__29252_SHARP_){return cljs.core.subvec.call(null,p1__29252_SHARP_,(0),cljs.core.count.call(null,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2)));
});})(G__29254,q__$2,find,ins,wheres,context,resultset))
,G__29254):G__29254);var G__29254__$2 = (cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,cljs.core.sequential_QMARK_,new cljs.core.Keyword(null,"find","find",496279456).cljs$core$IFn$_invoke$arity$1(q__$2))))?datascript.query.aggregate.call(null,q__$2,context,G__29254__$1):G__29254__$1);return G__29254__$2;
};
var q = function (q__$1,var_args){
var inputs = null;if (arguments.length > 1) {
  inputs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return q__delegate.call(this,q__$1,inputs);};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = (function (arglist__29255){
var q__$1 = cljs.core.first(arglist__29255);
var inputs = cljs.core.rest(arglist__29255);
return q__delegate(q__$1,inputs);
});
q.cljs$core$IFn$_invoke$arity$variadic = q__delegate;
return q;
})()
;

//# sourceMappingURL=query.js.map