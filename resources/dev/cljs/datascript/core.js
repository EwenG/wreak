// Compiled by ClojureScript 0.0-2311
goog.provide('datascript.core');
goog.require('cljs.core');
goog.require('datascript.btset');
goog.require('datascript.btset');

/**
* @constructor
* @param {*} e
* @param {*} a
* @param {*} v
* @param {*} tx
* @param {*} added
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.Datom = (function (e,a,v,tx,added,__meta,__extmap){
this.e = e;
this.a = a;
this.v = v;
this.tx = tx;
this.added = added;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.Datom.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str.call(null,this$);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4165__auto__,k__4166__auto__){var self__ = this;
var this__4165__auto____$1 = this;return cljs.core._lookup.call(null,this__4165__auto____$1,k__4166__auto__,null);
});
datascript.core.Datom.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4167__auto__,k29372,else__4168__auto__){var self__ = this;
var this__4167__auto____$1 = this;var G__29374 = (((k29372 instanceof cljs.core.Keyword))?k29372.fqn:null);switch (G__29374) {
case "added":
return self__.added;

break;
case "tx":
return self__.tx;

break;
case "v":
return self__.v;

break;
case "a":
return self__.a;

break;
case "e":
return self__.e;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29372,else__4168__auto__);

}
});
datascript.core.Datom.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4179__auto__,writer__4180__auto__,opts__4181__auto__){var self__ = this;
var this__4179__auto____$1 = this;var pr_pair__4182__auto__ = ((function (this__4179__auto____$1){
return (function (keyval__4183__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,cljs.core.pr_writer,""," ","",opts__4181__auto__,keyval__4183__auto__);
});})(this__4179__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,pr_pair__4182__auto__,"#datascript.core.Datom{",", ","}",opts__4181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4163__auto__){var self__ = this;
var this__4163__auto____$1 = this;return self__.__meta;
});
datascript.core.Datom.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4169__auto__){var self__ = this;
var this__4169__auto____$1 = this;return (5 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4160__auto__){var self__ = this;
var this__4160__auto____$1 = this;var h__3990__auto__ = self__.__hash;if(!((h__3990__auto__ == null)))
{return h__3990__auto__;
} else
{var h__3990__auto____$1 = cljs.core.hash_imap.call(null,this__4160__auto____$1);self__.__hash = h__3990__auto____$1;
return h__3990__auto____$1;
}
});
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4161__auto__,other__4162__auto__){var self__ = this;
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
datascript.core.Datom.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4174__auto__,k__4175__auto__){var self__ = this;
var this__4174__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"v","v",21465059),null,new cljs.core.Keyword(null,"added","added",2057651688),null,new cljs.core.Keyword(null,"e","e",1381269198),null,new cljs.core.Keyword(null,"tx","tx",466630418),null,new cljs.core.Keyword(null,"a","a",-2123407586),null], null), null),k__4175__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4174__auto____$1),self__.__meta),k__4175__auto__);
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4175__auto__)),null));
}
});
datascript.core.Datom.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4172__auto__,k__4173__auto__,G__29371){var self__ = this;
var this__4172__auto____$1 = this;var pred__29375 = cljs.core.keyword_identical_QMARK_;var expr__29376 = k__4173__auto__;if(cljs.core.truth_(pred__29375.call(null,new cljs.core.Keyword(null,"e","e",1381269198),expr__29376)))
{return (new datascript.core.Datom(G__29371,self__.a,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29375.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),expr__29376)))
{return (new datascript.core.Datom(self__.e,G__29371,self__.v,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29375.call(null,new cljs.core.Keyword(null,"v","v",21465059),expr__29376)))
{return (new datascript.core.Datom(self__.e,self__.a,G__29371,self__.tx,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29375.call(null,new cljs.core.Keyword(null,"tx","tx",466630418),expr__29376)))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,G__29371,self__.added,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29375.call(null,new cljs.core.Keyword(null,"added","added",2057651688),expr__29376)))
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,G__29371,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4173__auto__,G__29371),null));
}
}
}
}
}
});
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4177__auto__){var self__ = this;
var this__4177__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"e","e",1381269198),self__.e],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"a","a",-2123407586),self__.a],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"v","v",21465059),self__.v],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx","tx",466630418),self__.tx],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"added","added",2057651688),self__.added],null))], null),self__.__extmap));
});
datascript.core.Datom.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4164__auto__,G__29371){var self__ = this;
var this__4164__auto____$1 = this;return (new datascript.core.Datom(self__.e,self__.a,self__.v,self__.tx,self__.added,G__29371,self__.__extmap,self__.__hash));
});
datascript.core.Datom.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4170__auto__,entry__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4171__auto__))
{return cljs.core._assoc.call(null,this__4170__auto____$1,cljs.core._nth.call(null,entry__4171__auto__,(0)),cljs.core._nth.call(null,entry__4171__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4170__auto____$1,entry__4171__auto__);
}
});
datascript.core.Datom.cljs$lang$type = true;
datascript.core.Datom.cljs$lang$ctorPrSeq = (function (this__4199__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/Datom");
});
datascript.core.Datom.cljs$lang$ctorPrWriter = (function (this__4199__auto__,writer__4200__auto__){return cljs.core._write.call(null,writer__4200__auto__,"datascript.core/Datom");
});
datascript.core.__GT_Datom = (function __GT_Datom(e,a,v,tx,added){return (new datascript.core.Datom(e,a,v,tx,added));
});
datascript.core.map__GT_Datom = (function map__GT_Datom(G__29373){return (new datascript.core.Datom(new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(G__29373),new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(G__29373),new cljs.core.Keyword(null,"v","v",21465059).cljs$core$IFn$_invoke$arity$1(G__29373),new cljs.core.Keyword(null,"tx","tx",466630418).cljs$core$IFn$_invoke$arity$1(G__29373),new cljs.core.Keyword(null,"added","added",2057651688).cljs$core$IFn$_invoke$arity$1(G__29373),null,cljs.core.dissoc.call(null,G__29373,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"tx","tx",466630418),new cljs.core.Keyword(null,"added","added",2057651688))));
});
datascript.core.Datom.prototype.cljs$core$ISeqable$ = true;
datascript.core.Datom.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (d){var d__$1 = this;return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,d__$1.added),d__$1.tx),d__$1.v),d__$1.a),d__$1.e);
});
datascript.core.Datom.prototype.cljs$core$IEquiv$ = true;
datascript.core.Datom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (d,o){var d__$1 = this;return (cljs.core._EQ_.call(null,d__$1.e,o.e)) && (cljs.core._EQ_.call(null,d__$1.a,o.a)) && (cljs.core._EQ_.call(null,d__$1.v,o.v));
});
datascript.core.Datom.prototype.cljs$core$IHash$ = true;
datascript.core.Datom.prototype.cljs$core$IHash$_hash$arity$1 = (function (d){var d__$1 = this;var or__3579__auto__ = d__$1.__hash;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return d__$1.__hash = cljs.core.hash_coll.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [d__$1.e,d__$1.a,d__$1.v], null));
}
});
datascript.core.ISearch = (function (){var obj29380 = {};return obj29380;
})();
datascript.core._search = (function _search(data,pattern){if((function (){var and__3567__auto__ = data;if(and__3567__auto__)
{return data.datascript$core$ISearch$_search$arity$2;
} else
{return and__3567__auto__;
}
})())
{return data.datascript$core$ISearch$_search$arity$2(data,pattern);
} else
{var x__4206__auto__ = (((data == null))?null:data);return (function (){var or__3579__auto__ = (datascript.core._search[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (datascript.core._search["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"ISearch.-search",data);
}
}
})().call(null,data,pattern);
}
});
datascript.core.compare_key = (function compare_key(k,o1,o2){var k1 = cljs.core.get.call(null,o1,k);var k2 = cljs.core.get.call(null,o2,k);if((cljs.core.some_QMARK_.call(null,k1)) && (cljs.core.some_QMARK_.call(null,k2)))
{var t1 = cljs.core.type.call(null,k1);var t2 = cljs.core.type.call(null,k2);if(cljs.core._EQ_.call(null,t1,t2))
{return cljs.core.compare.call(null,k1,k2);
} else
{return cljs.core.compare.call(null,t1,t2);
}
} else
{return (0);
}
});
datascript.core.cmp_val = (function cmp_val(o1,o2){if((cljs.core.some_QMARK_.call(null,o1)) && (cljs.core.some_QMARK_.call(null,o2)))
{var t1 = cljs.core.type.call(null,o1);var t2 = cljs.core.type.call(null,o2);if(cljs.core._EQ_.call(null,t1,t2))
{return cljs.core.compare.call(null,o1,o2);
} else
{return cljs.core.compare.call(null,t1,t2);
}
} else
{return (0);
}
});
datascript.core.cmp = (function cmp(o1,o2){if(cljs.core.truth_((function (){var and__3567__auto__ = o1;if(cljs.core.truth_(and__3567__auto__))
{return o2;
} else
{return and__3567__auto__;
}
})()))
{return cljs.core.compare.call(null,o1,o2);
} else
{return (0);
}
});
datascript.core.cmp_datoms_eavt = (function cmp_datoms_eavt(d1,d2){var c__28721__auto__ = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__28721__auto__))
{var c__28721__auto____$1 = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__28721__auto____$1))
{var c__28721__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__28721__auto____$2))
{var c__28721__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__28721__auto____$3))
{return (0);
} else
{return c__28721__auto____$3;
}
} else
{return c__28721__auto____$2;
}
} else
{return c__28721__auto____$1;
}
} else
{return c__28721__auto__;
}
});
datascript.core.cmp_datoms_aevt = (function cmp_datoms_aevt(d1,d2){var c__28721__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__28721__auto__))
{var c__28721__auto____$1 = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__28721__auto____$1))
{var c__28721__auto____$2 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__28721__auto____$2))
{var c__28721__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__28721__auto____$3))
{return (0);
} else
{return c__28721__auto____$3;
}
} else
{return c__28721__auto____$2;
}
} else
{return c__28721__auto____$1;
}
} else
{return c__28721__auto__;
}
});
datascript.core.cmp_datoms_avet = (function cmp_datoms_avet(d1,d2){var c__28721__auto__ = datascript.core.cmp.call(null,d1.a,d2.a);if(((0) === c__28721__auto__))
{var c__28721__auto____$1 = datascript.core.cmp_val.call(null,d1.v,d2.v);if(((0) === c__28721__auto____$1))
{var c__28721__auto____$2 = datascript.core.cmp.call(null,d1.e,d2.e);if(((0) === c__28721__auto____$2))
{var c__28721__auto____$3 = datascript.core.cmp.call(null,d1.tx,d2.tx);if(((0) === c__28721__auto____$3))
{return (0);
} else
{return c__28721__auto____$3;
}
} else
{return c__28721__auto____$2;
}
} else
{return c__28721__auto____$1;
}
} else
{return c__28721__auto__;
}
});

/**
* @constructor
* @param {*} schema
* @param {*} eavt
* @param {*} aevt
* @param {*} avet
* @param {*} max_eid
* @param {*} max_tx
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.DB = (function (schema,eavt,aevt,avet,max_eid,max_tx,__meta,__extmap){
this.schema = schema;
this.eavt = eavt;
this.aevt = aevt;
this.avet = avet;
this.max_eid = max_eid;
this.max_tx = max_tx;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>6){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.DB.prototype.toString = (function (){var self__ = this;
var this$ = this;return cljs.core.pr_str_STAR_.call(null,this$);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4165__auto__,k__4166__auto__){var self__ = this;
var this__4165__auto____$1 = this;return cljs.core._lookup.call(null,this__4165__auto____$1,k__4166__auto__,null);
});
datascript.core.DB.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4167__auto__,k29391,else__4168__auto__){var self__ = this;
var this__4167__auto____$1 = this;var G__29393 = (((k29391 instanceof cljs.core.Keyword))?k29391.fqn:null);switch (G__29393) {
case "max-tx":
return self__.max_tx;

break;
case "max-eid":
return self__.max_eid;

break;
case "avet":
return self__.avet;

break;
case "aevt":
return self__.aevt;

break;
case "eavt":
return self__.eavt;

break;
case "schema":
return self__.schema;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29391,else__4168__auto__);

}
});
datascript.core.DB.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4179__auto__,writer__4180__auto__,opts__4181__auto__){var self__ = this;
var this__4179__auto____$1 = this;var pr_pair__4182__auto__ = ((function (this__4179__auto____$1){
return (function (keyval__4183__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,cljs.core.pr_writer,""," ","",opts__4181__auto__,keyval__4183__auto__);
});})(this__4179__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,pr_pair__4182__auto__,"#datascript.core.DB{",", ","}",opts__4181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4163__auto__){var self__ = this;
var this__4163__auto____$1 = this;return self__.__meta;
});
datascript.core.DB.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4169__auto__){var self__ = this;
var this__4169__auto____$1 = this;return (6 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4160__auto__){var self__ = this;
var this__4160__auto____$1 = this;var h__3990__auto__ = self__.__hash;if(!((h__3990__auto__ == null)))
{return h__3990__auto__;
} else
{var h__3990__auto____$1 = cljs.core.hash_imap.call(null,this__4160__auto____$1);self__.__hash = h__3990__auto____$1;
return h__3990__auto____$1;
}
});
datascript.core.DB.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4161__auto__,other__4162__auto__){var self__ = this;
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
datascript.core.DB.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4174__auto__,k__4175__auto__){var self__ = this;
var this__4174__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"schema","schema",-1582001791),null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),null,new cljs.core.Keyword(null,"avet","avet",1383857032),null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),null], null), null),k__4175__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4174__auto____$1),self__.__meta),k__4175__auto__);
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4175__auto__)),null));
}
});
datascript.core.DB.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4172__auto__,k__4173__auto__,G__29390){var self__ = this;
var this__4172__auto____$1 = this;var pred__29394 = cljs.core.keyword_identical_QMARK_;var expr__29395 = k__4173__auto__;if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),expr__29395)))
{return (new datascript.core.DB(G__29390,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"eavt","eavt",-666437073),expr__29395)))
{return (new datascript.core.DB(self__.schema,G__29390,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"aevt","aevt",-585148059),expr__29395)))
{return (new datascript.core.DB(self__.schema,self__.eavt,G__29390,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"avet","avet",1383857032),expr__29395)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,G__29390,self__.max_eid,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),expr__29395)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,G__29390,self__.max_tx,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29394.call(null,new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),expr__29395)))
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,G__29390,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4173__auto__,G__29390),null));
}
}
}
}
}
}
});
datascript.core.DB.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4177__auto__){var self__ = this;
var this__4177__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"schema","schema",-1582001791),self__.schema],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"eavt","eavt",-666437073),self__.eavt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"aevt","aevt",-585148059),self__.aevt],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"avet","avet",1383857032),self__.avet],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),self__.max_eid],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"max-tx","max-tx",1119558339),self__.max_tx],null))], null),self__.__extmap));
});
datascript.core.DB.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4164__auto__,G__29390){var self__ = this;
var this__4164__auto____$1 = this;return (new datascript.core.DB(self__.schema,self__.eavt,self__.aevt,self__.avet,self__.max_eid,self__.max_tx,G__29390,self__.__extmap,self__.__hash));
});
datascript.core.DB.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4170__auto__,entry__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4171__auto__))
{return cljs.core._assoc.call(null,this__4170__auto____$1,cljs.core._nth.call(null,entry__4171__auto__,(0)),cljs.core._nth.call(null,entry__4171__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4170__auto____$1,entry__4171__auto__);
}
});
datascript.core.DB.prototype.datascript$core$ISearch$ = true;
datascript.core.DB.prototype.datascript$core$ISearch$_search$arity$2 = (function (_,p__29397){var self__ = this;
var vec__29398 = p__29397;var e = cljs.core.nth.call(null,vec__29398,(0),null);var a = cljs.core.nth.call(null,vec__29398,(1),null);var v = cljs.core.nth.call(null,vec__29398,(2),null);var tx = cljs.core.nth.call(null,vec__29398,(3),null);var ___$1 = this;if(cljs.core.truth_(e))
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,tx,null)));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29381_SHARP_){return cljs.core._EQ_.call(null,tx,p1__29381_SHARP_.tx);
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29382_SHARP_){return (cljs.core._EQ_.call(null,v,p1__29382_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__29382_SHARP_.tx));
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29383_SHARP_){return cljs.core._EQ_.call(null,v,p1__29383_SHARP_.v);
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29384_SHARP_){return cljs.core._EQ_.call(null,tx,p1__29384_SHARP_.tx);
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.eavt,(new datascript.core.Datom(e,null,null,null,null)));
}
}
}
} else
{if(cljs.core.truth_(a))
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29385_SHARP_){return cljs.core._EQ_.call(null,tx,p1__29385_SHARP_.tx);
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null))));
} else
{return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,v,null,null)));
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29386_SHARP_){return cljs.core._EQ_.call(null,tx,p1__29386_SHARP_.tx);
});})(___$1,vec__29398,e,a,v,tx))
,datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null))));
} else
{return datascript.btset.slice.call(null,self__.avet,(new datascript.core.Datom(null,a,null,null,null)));
}
}
} else
{if(cljs.core.some_QMARK_.call(null,v))
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29387_SHARP_){return (cljs.core._EQ_.call(null,v,p1__29387_SHARP_.v)) && (cljs.core._EQ_.call(null,tx,p1__29387_SHARP_.tx));
});})(___$1,vec__29398,e,a,v,tx))
,self__.eavt);
} else
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29388_SHARP_){return cljs.core._EQ_.call(null,v,p1__29388_SHARP_.v);
});})(___$1,vec__29398,e,a,v,tx))
,self__.eavt);
}
} else
{if(cljs.core.truth_(tx))
{return cljs.core.filter.call(null,((function (___$1,vec__29398,e,a,v,tx){
return (function (p1__29389_SHARP_){return cljs.core._EQ_.call(null,tx,p1__29389_SHARP_.tx);
});})(___$1,vec__29398,e,a,v,tx))
,self__.eavt);
} else
{return self__.eavt;
}
}
}
}
});
datascript.core.DB.cljs$lang$type = true;
datascript.core.DB.cljs$lang$ctorPrSeq = (function (this__4199__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/DB");
});
datascript.core.DB.cljs$lang$ctorPrWriter = (function (this__4199__auto__,writer__4200__auto__){return cljs.core._write.call(null,writer__4200__auto__,"datascript.core/DB");
});
datascript.core.__GT_DB = (function __GT_DB(schema,eavt,aevt,avet,max_eid,max_tx){return (new datascript.core.DB(schema,eavt,aevt,avet,max_eid,max_tx));
});
datascript.core.map__GT_DB = (function map__GT_DB(G__29392){return (new datascript.core.DB(new cljs.core.Keyword(null,"schema","schema",-1582001791).cljs$core$IFn$_invoke$arity$1(G__29392),new cljs.core.Keyword(null,"eavt","eavt",-666437073).cljs$core$IFn$_invoke$arity$1(G__29392),new cljs.core.Keyword(null,"aevt","aevt",-585148059).cljs$core$IFn$_invoke$arity$1(G__29392),new cljs.core.Keyword(null,"avet","avet",1383857032).cljs$core$IFn$_invoke$arity$1(G__29392),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(G__29392),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339).cljs$core$IFn$_invoke$arity$1(G__29392),null,cljs.core.dissoc.call(null,G__29392,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"eavt","eavt",-666437073),new cljs.core.Keyword(null,"aevt","aevt",-585148059),new cljs.core.Keyword(null,"avet","avet",1383857032),new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339))));
});

/**
* @constructor
* @param {*} db_before
* @param {*} db_after
* @param {*} tx_data
* @param {*} tempids
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
datascript.core.TxReport = (function (db_before,db_after,tx_data,tempids,__meta,__extmap){
this.db_before = db_before;
this.db_after = db_after;
this.tx_data = tx_data;
this.tempids = tempids;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>4){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4165__auto__,k__4166__auto__){var self__ = this;
var this__4165__auto____$1 = this;return cljs.core._lookup.call(null,this__4165__auto____$1,k__4166__auto__,null);
});
datascript.core.TxReport.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4167__auto__,k29401,else__4168__auto__){var self__ = this;
var this__4167__auto____$1 = this;var G__29403 = (((k29401 instanceof cljs.core.Keyword))?k29401.fqn:null);switch (G__29403) {
case "tempids":
return self__.tempids;

break;
case "tx-data":
return self__.tx_data;

break;
case "db-after":
return self__.db_after;

break;
case "db-before":
return self__.db_before;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k29401,else__4168__auto__);

}
});
datascript.core.TxReport.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4179__auto__,writer__4180__auto__,opts__4181__auto__){var self__ = this;
var this__4179__auto____$1 = this;var pr_pair__4182__auto__ = ((function (this__4179__auto____$1){
return (function (keyval__4183__auto__){return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,cljs.core.pr_writer,""," ","",opts__4181__auto__,keyval__4183__auto__);
});})(this__4179__auto____$1))
;return cljs.core.pr_sequential_writer.call(null,writer__4180__auto__,pr_pair__4182__auto__,"#datascript.core.TxReport{",", ","}",opts__4181__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4163__auto__){var self__ = this;
var this__4163__auto____$1 = this;return self__.__meta;
});
datascript.core.TxReport.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4159__auto__){var self__ = this;
var this__4159__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4169__auto__){var self__ = this;
var this__4169__auto____$1 = this;return (4 + cljs.core.count.call(null,self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4160__auto__){var self__ = this;
var this__4160__auto____$1 = this;var h__3990__auto__ = self__.__hash;if(!((h__3990__auto__ == null)))
{return h__3990__auto__;
} else
{var h__3990__auto____$1 = cljs.core.hash_imap.call(null,this__4160__auto____$1);self__.__hash = h__3990__auto____$1;
return h__3990__auto____$1;
}
});
datascript.core.TxReport.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4161__auto__,other__4162__auto__){var self__ = this;
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
datascript.core.TxReport.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4174__auto__,k__4175__auto__){var self__ = this;
var this__4174__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),null], null), null),k__4175__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4174__auto____$1),self__.__meta),k__4175__auto__);
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4175__auto__)),null));
}
});
datascript.core.TxReport.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4172__auto__,k__4173__auto__,G__29400){var self__ = this;
var this__4172__auto____$1 = this;var pred__29404 = cljs.core.keyword_identical_QMARK_;var expr__29405 = k__4173__auto__;if(cljs.core.truth_(pred__29404.call(null,new cljs.core.Keyword(null,"db-before","db-before",-553691536),expr__29405)))
{return (new datascript.core.TxReport(G__29400,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29404.call(null,new cljs.core.Keyword(null,"db-after","db-after",-571884666),expr__29405)))
{return (new datascript.core.TxReport(self__.db_before,G__29400,self__.tx_data,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29404.call(null,new cljs.core.Keyword(null,"tx-data","tx-data",934159761),expr__29405)))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,G__29400,self__.tempids,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_(pred__29404.call(null,new cljs.core.Keyword(null,"tempids","tempids",1767509089),expr__29405)))
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,G__29400,self__.__meta,self__.__extmap,null));
} else
{return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4173__auto__,G__29400),null));
}
}
}
}
});
datascript.core.TxReport.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4177__auto__){var self__ = this;
var this__4177__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-before","db-before",-553691536),self__.db_before],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"db-after","db-after",-571884666),self__.db_after],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tx-data","tx-data",934159761),self__.tx_data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"tempids","tempids",1767509089),self__.tempids],null))], null),self__.__extmap));
});
datascript.core.TxReport.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4164__auto__,G__29400){var self__ = this;
var this__4164__auto____$1 = this;return (new datascript.core.TxReport(self__.db_before,self__.db_after,self__.tx_data,self__.tempids,G__29400,self__.__extmap,self__.__hash));
});
datascript.core.TxReport.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4170__auto__,entry__4171__auto__){var self__ = this;
var this__4170__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__4171__auto__))
{return cljs.core._assoc.call(null,this__4170__auto____$1,cljs.core._nth.call(null,entry__4171__auto__,(0)),cljs.core._nth.call(null,entry__4171__auto__,(1)));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__4170__auto____$1,entry__4171__auto__);
}
});
datascript.core.TxReport.cljs$lang$type = true;
datascript.core.TxReport.cljs$lang$ctorPrSeq = (function (this__4199__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"datascript.core/TxReport");
});
datascript.core.TxReport.cljs$lang$ctorPrWriter = (function (this__4199__auto__,writer__4200__auto__){return cljs.core._write.call(null,writer__4200__auto__,"datascript.core/TxReport");
});
datascript.core.__GT_TxReport = (function __GT_TxReport(db_before,db_after,tx_data,tempids){return (new datascript.core.TxReport(db_before,db_after,tx_data,tempids));
});
datascript.core.map__GT_TxReport = (function map__GT_TxReport(G__29402){return (new datascript.core.TxReport(new cljs.core.Keyword(null,"db-before","db-before",-553691536).cljs$core$IFn$_invoke$arity$1(G__29402),new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(G__29402),new cljs.core.Keyword(null,"tx-data","tx-data",934159761).cljs$core$IFn$_invoke$arity$1(G__29402),new cljs.core.Keyword(null,"tempids","tempids",1767509089).cljs$core$IFn$_invoke$arity$1(G__29402),null,cljs.core.dissoc.call(null,G__29402,new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"tx-data","tx-data",934159761),new cljs.core.Keyword(null,"tempids","tempids",1767509089))));
});
datascript.core.multival_QMARK_ = (function multival_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","cardinality","db/cardinality",-104975659)], null)),new cljs.core.Keyword("db.cardinality","many","db.cardinality/many",772806234));
});
datascript.core.ref_QMARK_ = (function ref_QMARK_(db,attr){return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),attr,new cljs.core.Keyword("db","valueType","db/valueType",1827971944)], null)),new cljs.core.Keyword("db.type","ref","db.type/ref",-1728373079));
});
datascript.core.current_tx = (function current_tx(report){return (cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-before","db-before",-553691536),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null)) + (1));
});
datascript.core.next_eid = (function next_eid(db){return (new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db) + (1));
});
datascript.core.advance_max_eid = (function advance_max_eid(db,eid){var G__29409 = db;var G__29409__$1 = (((eid > new cljs.core.Keyword(null,"max-eid","max-eid",2134868075).cljs$core$IFn$_invoke$arity$1(db)))?cljs.core.assoc.call(null,G__29409,new cljs.core.Keyword(null,"max-eid","max-eid",2134868075),eid):G__29409);return G__29409__$1;
});
datascript.core.allocate_eid = (function() {
var allocate_eid = null;
var allocate_eid__2 = (function (report,eid){return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
var allocate_eid__3 = (function (report,e,eid){return cljs.core.update_in.call(null,cljs.core.assoc_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null),eid),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.advance_max_eid,eid);
});
allocate_eid = function(report,e,eid){
switch(arguments.length){
case 2:
return allocate_eid__2.call(this,report,e);
case 3:
return allocate_eid__3.call(this,report,e,eid);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
allocate_eid.cljs$core$IFn$_invoke$arity$2 = allocate_eid__2;
allocate_eid.cljs$core$IFn$_invoke$arity$3 = allocate_eid__3;
return allocate_eid;
})()
;
datascript.core.with_datom = (function with_datom(db,datom){if(cljs.core.truth_(datom.added))
{return datascript.core.advance_max_eid.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.conj,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.conj,datom),datom.e);
} else
{var removing = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [datom.e,datom.a,datom.v], null)));return cljs.core.update_in.call(null,cljs.core.update_in.call(null,cljs.core.update_in.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"eavt","eavt",-666437073)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"aevt","aevt",-585148059)], null),cljs.core.disj,removing),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"avet","avet",1383857032)], null),cljs.core.disj,removing);
}
});
datascript.core.transact_report = (function transact_report(report,datom){return cljs.core.update_in.call(null,cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666)], null),datascript.core.with_datom,datom),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tx-data","tx-data",934159761)], null),cljs.core.conj,datom);
});
datascript.core.explode = (function explode(db,entity){var eid = new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity);var iter__4304__auto__ = ((function (eid){
return (function iter__29418(s__29419){return (new cljs.core.LazySeq(null,((function (eid){
return (function (){var s__29419__$1 = s__29419;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__29419__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var vec__29425 = cljs.core.first.call(null,xs__4624__auto__);var a = cljs.core.nth.call(null,vec__29425,(0),null);var vs = cljs.core.nth.call(null,vec__29425,(1),null);var iterys__4300__auto__ = ((function (s__29419__$1,vec__29425,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function iter__29420(s__29421){return (new cljs.core.LazySeq(null,((function (s__29419__$1,vec__29425,a,vs,xs__4624__auto__,temp__4126__auto__,eid){
return (function (){var s__29421__$1 = s__29421;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__29421__$1);if(temp__4126__auto____$1)
{var s__29421__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__29421__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__29421__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__29423 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__29422 = (0);while(true){
if((i__29422 < size__4303__auto__))
{var v = cljs.core._nth.call(null,c__4302__auto__,i__29422);cljs.core.chunk_append.call(null,b__29423,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null));
{
var G__29426 = (i__29422 + (1));
i__29422 = G__29426;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29423),iter__29420.call(null,cljs.core.chunk_rest.call(null,s__29421__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__29423),null);
}
} else
{var v = cljs.core.first.call(null,s__29421__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("db","add","db/add",235286841),eid,a,v], null),iter__29420.call(null,cljs.core.rest.call(null,s__29421__$2)));
}
} else
{return null;
}
break;
}
});})(s__29419__$1,vec__29425,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
,null,null));
});})(s__29419__$1,vec__29425,a,vs,xs__4624__auto__,temp__4126__auto__,eid))
;var fs__4301__auto__ = cljs.core.seq.call(null,iterys__4300__auto__.call(null,(((cljs.core.sequential_QMARK_.call(null,vs)) && (datascript.core.multival_QMARK_.call(null,db,a)))?vs:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [vs], null))));if(fs__4301__auto__)
{return cljs.core.concat.call(null,fs__4301__auto__,iter__29418.call(null,cljs.core.rest.call(null,s__29419__$1)));
} else
{{
var G__29427 = cljs.core.rest.call(null,s__29419__$1);
s__29419__$1 = G__29427;
continue;
}
}
} else
{return null;
}
break;
}
});})(eid))
,null,null));
});})(eid))
;return iter__4304__auto__.call(null,cljs.core.dissoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098)));
});
datascript.core.transact_add = (function transact_add(report,p__29428){var vec__29430 = p__29428;var _ = cljs.core.nth.call(null,vec__29430,(0),null);var e = cljs.core.nth.call(null,vec__29430,(1),null);var a = cljs.core.nth.call(null,vec__29430,(2),null);var v = cljs.core.nth.call(null,vec__29430,(3),null);var tx = datascript.core.current_tx.call(null,report);var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);var datom = (new datascript.core.Datom(e,a,v,tx,true));if(datascript.core.multival_QMARK_.call(null,db,a))
{if(cljs.core.empty_QMARK_.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null))))
{return datascript.core.transact_report.call(null,report,datom);
} else
{return report;
}
} else
{var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;if(cljs.core._EQ_.call(null,old_datom.v,v))
{return report;
} else
{return datascript.core.transact_report.call(null,datascript.core.transact_report.call(null,report,(new datascript.core.Datom(e,a,old_datom.v,tx,false))),datom);
}
} else
{return datascript.core.transact_report.call(null,report,datom);
}
}
});
datascript.core.transact_retract_datom = (function transact_retract_datom(report,d){var tx = datascript.core.current_tx.call(null,report);return datascript.core.transact_report.call(null,report,(new datascript.core.Datom(d.e,d.a,d.v,tx,false)));
});
datascript.core.transact_entities = (function transact_entities(report,p__29431){while(true){
var vec__29435 = p__29431;var entity = cljs.core.nth.call(null,vec__29435,(0),null);var entities = cljs.core.nthnext.call(null,vec__29435,(1));var es = vec__29435;var db = new cljs.core.Keyword(null,"db-after","db-after",-571884666).cljs$core$IFn$_invoke$arity$1(report);if((entity == null))
{return cljs.core.update_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"db-after","db-after",-571884666),new cljs.core.Keyword(null,"max-tx","max-tx",1119558339)], null),cljs.core.inc);
} else
{if(cljs.core.map_QMARK_.call(null,entity))
{if(cljs.core.truth_(new cljs.core.Keyword("db","id","db/id",-1388397098).cljs$core$IFn$_invoke$arity$1(entity)))
{{
var G__29438 = report;
var G__29439 = cljs.core.concat.call(null,datascript.core.explode.call(null,db,entity),entities);
report = G__29438;
p__29431 = G__29439;
continue;
}
} else
{var eid = datascript.core.next_eid.call(null,db);var entity__$1 = cljs.core.assoc.call(null,entity,new cljs.core.Keyword("db","id","db/id",-1388397098),eid);{
var G__29440 = datascript.core.allocate_eid.call(null,report,eid);
var G__29441 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [entity__$1], null),entities);
report = G__29440;
p__29431 = G__29441;
continue;
}
}
} else
{var vec__29436 = entity;var op = cljs.core.nth.call(null,vec__29436,(0),null);var e = cljs.core.nth.call(null,vec__29436,(1),null);var a = cljs.core.nth.call(null,vec__29436,(2),null);var v = cljs.core.nth.call(null,vec__29436,(3),null);if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","call","db.fn/call",-151594418)))
{var vec__29437 = entity;var _ = cljs.core.nth.call(null,vec__29437,(0),null);var f = cljs.core.nth.call(null,vec__29437,(1),null);var args = cljs.core.nthnext.call(null,vec__29437,(2));{
var G__29442 = report;
var G__29443 = cljs.core.concat.call(null,cljs.core.apply.call(null,f,db,args),entities);
report = G__29442;
p__29431 = G__29443;
continue;
}
} else
{if((e < (0)))
{var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),e], null));if(cljs.core.truth_(temp__4124__auto__))
{var eid = temp__4124__auto__;{
var G__29444 = report;
var G__29445 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,eid,a,v], null)], null),entities);
report = G__29444;
p__29431 = G__29445;
continue;
}
} else
{{
var G__29446 = datascript.core.allocate_eid.call(null,report,e,datascript.core.next_eid.call(null,db));
var G__29447 = es;
report = G__29446;
p__29431 = G__29447;
continue;
}
}
} else
{if((datascript.core.ref_QMARK_.call(null,db,a)) && ((v < (0))))
{var temp__4124__auto__ = cljs.core.get_in.call(null,report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempids","tempids",1767509089),v], null));if(cljs.core.truth_(temp__4124__auto__))
{var vid = temp__4124__auto__;{
var G__29448 = report;
var G__29449 = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [op,e,a,vid], null)], null),entities);
report = G__29448;
p__29431 = G__29449;
continue;
}
} else
{{
var G__29450 = datascript.core.allocate_eid.call(null,report,v,datascript.core.next_eid.call(null,db));
var G__29451 = es;
report = G__29450;
p__29431 = G__29451;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","add","db/add",235286841)))
{{
var G__29452 = datascript.core.transact_add.call(null,report,entity);
var G__29453 = entities;
report = G__29452;
p__29431 = G__29453;
continue;
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db","retract","db/retract",-1549825231)))
{var temp__4124__auto__ = cljs.core.first.call(null,datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a,v], null)));if(cljs.core.truth_(temp__4124__auto__))
{var old_datom = temp__4124__auto__;{
var G__29454 = datascript.core.transact_retract_datom.call(null,report,old_datom);
var G__29455 = entities;
report = G__29454;
p__29431 = G__29455;
continue;
}
} else
{{
var G__29456 = report;
var G__29457 = entities;
report = G__29456;
p__29431 = G__29457;
continue;
}
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractAttribute","db.fn/retractAttribute",937402164)))
{var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [e,a], null));{
var G__29458 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__29459 = entities;
report = G__29458;
p__29431 = G__29459;
continue;
}
} else
{if(cljs.core._EQ_.call(null,op,new cljs.core.Keyword("db.fn","retractEntity","db.fn/retractEntity",-1423535441)))
{var datoms = datascript.core._search.call(null,db,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [e], null));{
var G__29460 = cljs.core.reduce.call(null,datascript.core.transact_retract_datom,report,datoms);
var G__29461 = entities;
report = G__29460;
p__29431 = G__29461;
continue;
}
} else
{return null;
}
}
}
}
}
}
}

}
}
break;
}
});

//# sourceMappingURL=core.js.map