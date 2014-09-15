// Compiled by ClojureScript 0.0-2311
goog.provide('ewen.wreak.todo_mvc');
goog.require('cljs.core');
goog.require('domina');
goog.require('domina.css');
goog.require('ewen.wreak');
goog.require('domina.events');
goog.require('domina.css');
goog.require('cljs.core.async');
goog.require('datascript');
goog.require('domina');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('domina.events');
goog.require('ewen.wreak');
goog.require('datascript');
goog.require('cljs.core.match');
goog.require('ewen.wreak');
cljs.core.async.impl.channels.ManyToManyChannel.prototype.datascript$IPublish$ = true;
cljs.core.async.impl.channels.ManyToManyChannel.prototype.datascript$IPublish$publish$arity$2 = (function (this$,report){var this$__$1 = this;return cljs.core.async.put_BANG_.call(null,this$__$1,report);
});
/**
* Return the only item from a query result
*/
ewen.wreak.todo_mvc.only = (function() {
var only = null;
var only__1 = (function (query_result){if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,query_result)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"query-result","query-result",806887385,null))))))));
}
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.first.call(null,query_result))))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),cljs.core.list(new cljs.core.Symbol(null,"first","first",996428481,null),new cljs.core.Symbol(null,"query-result","query-result",806887385,null)))))))));
}
return cljs.core.ffirst.call(null,query_result);
});
var only__2 = (function (query_result,default$){if(cljs.core._EQ_.call(null,(0),cljs.core.count.call(null,query_result)))
{return default$;
} else
{return only.call(null,query_result);
}
});
only = function(query_result,default$){
switch(arguments.length){
case 1:
return only__1.call(this,query_result);
case 2:
return only__2.call(this,query_result,default$);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
only.cljs$core$IFn$_invoke$arity$1 = only__1;
only.cljs$core$IFn$_invoke$arity$2 = only__2;
return only;
})()
;
ewen.wreak.todo_mvc.set_attr_BANG_ = (function set_attr_BANG_(app,id,attr,val){return datascript.transact_BANG_.call(null,app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword("db","id","db/id",-1388397098),id,attr,val], true, false)], null));
});
ewen.wreak.todo_mvc.id_for_attr = (function id_for_attr(db,in_attr){return ewen.wreak.todo_mvc.only.call(null,datascript.q.call(null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Symbol(null,"$","$",-1580747756,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?id","?id",928433279,null),new cljs.core.Symbol(null,"attr","attr",1036399174,null),new cljs.core.Symbol(null,"_","_",-1201019570,null)], null)], null),db,in_attr));
});
ewen.wreak.todo_mvc.header = ewen.wreak.component.call(null,"header",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,___$1,___$2){return React.DOM.div(null,React.DOM.h1(null,"todos"),sablono.interpreter.input.call(null,{"id": "new-todo", "placeholder": "What needs to be done?", "autofocus": true}));
})], null));
ewen.wreak.todo_mvc.get_display_main = datascript.wrap_query.call(null,(function (){if(typeof ewen.wreak.todo_mvc.t35745 !== 'undefined')
{} else
{
/**
* @constructor
*/
ewen.wreak.todo_mvc.t35745 = (function (meta35746){
this.meta35746 = meta35746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393217;
})
ewen.wreak.todo_mvc.t35745.cljs$lang$type = true;
ewen.wreak.todo_mvc.t35745.cljs$lang$ctorStr = "ewen.wreak.todo-mvc/t35745";
ewen.wreak.todo_mvc.t35745.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"ewen.wreak.todo-mvc/t35745");
});
ewen.wreak.todo_mvc.t35745.prototype.datascript$IndexKeys$ = true;
ewen.wreak.todo_mvc.t35745.prototype.datascript$IndexKeys$get_index_keys$arity$2 = (function (_,data){var self__ = this;
var ___$1 = this;return datascript.analyze_calls__GT_index_keys.call(null,datascript.analyze_q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null)], null)], null),data));
});
ewen.wreak.todo_mvc.t35745.prototype.call = (function (self__,data){var self__ = this;
var self____$1 = this;var _ = self____$1;return datascript.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null)], null)], null),data);
});
ewen.wreak.todo_mvc.t35745.prototype.apply = (function (self__,args35748){var self__ = this;
var self____$1 = this;return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args35748)));
});
ewen.wreak.todo_mvc.t35745.prototype.cljs$core$IFn$_invoke$arity$1 = (function (data){var self__ = this;
var _ = this;return datascript.q.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"find","find",496279456),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null),new cljs.core.Keyword(null,"where","where",-2044795965),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236),new cljs.core.Symbol(null,"?display-main","?display-main",-181351994,null)], null)], null),data);
});
ewen.wreak.todo_mvc.t35745.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35747){var self__ = this;
var _35747__$1 = this;return self__.meta35746;
});
ewen.wreak.todo_mvc.t35745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35747,meta35746__$1){var self__ = this;
var _35747__$1 = this;return (new ewen.wreak.todo_mvc.t35745(meta35746__$1));
});
ewen.wreak.todo_mvc.__GT_t35745 = (function __GT_t35745(meta35746){return (new ewen.wreak.todo_mvc.t35745(meta35746));
});
}
return (new ewen.wreak.todo_mvc.t35745(null));
})(),ewen.wreak.todo_mvc.only);
ewen.wreak.todo_mvc.set_display_main_BANG_ = (function set_display_main_BANG_(app,val){var id = ewen.wreak.todo_mvc.id_for_attr.call(null,cljs.core.deref.call(null,app),new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236));return ewen.wreak.todo_mvc.set_attr_BANG_.call(null,app,id,new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236),val);
});
ewen.wreak.todo_mvc.listen_display_main = (function listen_display_main(p__35749){var map__35768 = p__35749;var map__35768__$1 = ((cljs.core.seq_QMARK_.call(null,map__35768))?cljs.core.apply.call(null,cljs.core.hash_map,map__35768):map__35768);var tx_data = cljs.core.get.call(null,map__35768__$1,new cljs.core.Keyword(null,"tx-data","tx-data",934159761));var temp__4126__auto__ = cljs.core.last.call(null,cljs.core.filter.call(null,new cljs.core.Keyword(null,"added","added",2057651688),tx_data));if(cljs.core.truth_(temp__4126__auto__))
{var tx_data__$1 = temp__4126__auto__;try{if((function (){var G__35781 = tx_data__$1;if(G__35781)
{var bit__4229__auto__ = (G__35781.cljs$lang$protocol_mask$partition0$ & (256));if((bit__4229__auto__) || (G__35781.cljs$core$ILookup$))
{return true;
} else
{if((!G__35781.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__35781);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ILookup,G__35781);
}
})())
{try{var tx_data_added__35777 = cljs.core.get.call(null,tx_data__$1,new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if((tx_data_added__35777 === true))
{try{var tx_data_a__35779 = cljs.core.get.call(null,tx_data__$1,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.keyword_identical_QMARK_.call(null,tx_data_a__35779,new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236)))
{try{var tx_data_v__35776 = cljs.core.get.call(null,tx_data__$1,new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,tx_data_v__35776,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{try{var tx_data_e__35778 = cljs.core.get.call(null,tx_data__$1,new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780));if(cljs.core.not_EQ_.call(null,tx_data_e__35778,new cljs.core.Keyword("clojure.core.match","not-found","clojure.core.match/not-found",1553053780)))
{var val = cljs.core.get.call(null,tx_data__$1,new cljs.core.Keyword(null,"v","v",21465059));return val;
} else
{throw cljs.core.match.backtrack;

}
}catch (e35785){if((e35785 instanceof Error))
{var e__17049__auto__ = e35785;if((e__17049__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__17049__auto__;
}
} else
{throw e35785;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e35784){if((e35784 instanceof Error))
{var e__17049__auto__ = e35784;if((e__17049__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__17049__auto__;
}
} else
{throw e35784;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e35783){if((e35783 instanceof Error))
{var e__17049__auto__ = e35783;if((e__17049__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__17049__auto__;
}
} else
{throw e35783;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e35782){if((e35782 instanceof Error))
{var e__17049__auto__ = e35782;if((e__17049__auto__ === cljs.core.match.backtrack))
{throw cljs.core.match.backtrack;
} else
{throw e__17049__auto__;
}
} else
{throw e35782;

}
}} else
{throw cljs.core.match.backtrack;

}
}catch (e35780){if((e35780 instanceof Error))
{var e__17049__auto__ = e35780;if((e__17049__auto__ === cljs.core.match.backtrack))
{throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tx_data__$1))));
} else
{throw e__17049__auto__;
}
} else
{throw e35780;

}
}} else
{return null;
}
});
ewen.wreak.todo_mvc.main = ewen.wreak.component.call(null,"main",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,p__35786,___$1){var map__35787 = p__35786;var map__35787__$1 = ((cljs.core.seq_QMARK_.call(null,map__35787))?cljs.core.apply.call(null,cljs.core.hash_map,map__35787):map__35787);var display_main = cljs.core.get.call(null,map__35787__$1,new cljs.core.Keyword(null,"display-main","display-main",-1468873833));return React.DOM.div({"style": {"display": (cljs.core.truth_(display_main)?"block":"none")}},sablono.interpreter.input.call(null,{"id": "toggle-all", "type": "checkbox"}),React.DOM.label({"htmlFor": "toggle-all"},"Mark all as complete"),React.DOM.ul({"id": "todo-list"}));
}),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),(function (_,p__35794){var map__35795 = p__35794;var map__35795__$1 = ((cljs.core.seq_QMARK_.call(null,map__35795))?cljs.core.apply.call(null,cljs.core.hash_map,map__35795):map__35795);var app = cljs.core.get.call(null,map__35795__$1,new cljs.core.Keyword(null,"app","app",-560961707));return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display-main","display-main",-1468873833),ewen.wreak.todo_mvc.get_display_main.call(null,cljs.core.deref.call(null,app))], null);
}),new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936),(function (_,___$1,p__35796){var map__35797 = p__35796;var map__35797__$1 = ((cljs.core.seq_QMARK_.call(null,map__35797))?cljs.core.apply.call(null,cljs.core.hash_map,map__35797):map__35797);var app = cljs.core.get.call(null,map__35797__$1,new cljs.core.Keyword(null,"app","app",-560961707));var display_main_transducer = cljs.core.map.call(null,ewen.wreak.todo_mvc.listen_display_main);var display_main_chan = cljs.core.async.chan.call(null,(1),display_main_transducer);var index_keys = datascript.get_index_keys.call(null,ewen.wreak.todo_mvc.get_display_main,app);var comp = ewen.wreak._STAR_component_STAR_;(comp[new cljs.core.Keyword("ewen.wreak.todo-mvc","display-main-chan","ewen.wreak.todo-mvc/display-main-chan",-15400159)] = display_main_chan);
datascript.listen_BANG_.call(null,app,display_main_chan,index_keys);
var c__6307__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app){
return (function (state_35818){var state_val_35819 = (state_35818[(1)]);if((state_val_35819 === (7)))
{var inst_35813 = (state_35818[(2)]);var inst_35814 = cljs.core.async.close_BANG_.call(null,display_main_chan);var state_35818__$1 = (function (){var statearr_35820 = state_35818;(statearr_35820[(7)] = inst_35813);
return statearr_35820;
})();var statearr_35821_35838 = state_35818__$1;(statearr_35821_35838[(2)] = inst_35814);
(statearr_35821_35838[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35819 === (6)))
{var state_35818__$1 = state_35818;var statearr_35822_35839 = state_35818__$1;(statearr_35822_35839[(2)] = null);
(statearr_35822_35839[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35819 === (5)))
{var inst_35800 = (state_35818[(8)]);var inst_35804 = ewen.wreak.get_state.call(null,comp);var inst_35805 = [new cljs.core.Keyword(null,"display-main","display-main",-1468873833)];var inst_35806 = [inst_35800];var inst_35807 = cljs.core.PersistentHashMap.fromArrays(inst_35805,inst_35806);var inst_35808 = cljs.core.merge.call(null,inst_35804,inst_35807);var inst_35809 = ewen.wreak.replace_state_BANG_.call(null,comp,inst_35808);var state_35818__$1 = (function (){var statearr_35823 = state_35818;(statearr_35823[(9)] = inst_35809);
return statearr_35823;
})();var statearr_35824_35840 = state_35818__$1;(statearr_35824_35840[(2)] = null);
(statearr_35824_35840[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35819 === (4)))
{var inst_35800 = (state_35818[(8)]);var inst_35800__$1 = (state_35818[(2)]);var inst_35801 = (inst_35800__$1 == null);var inst_35802 = cljs.core.not.call(null,inst_35801);var state_35818__$1 = (function (){var statearr_35825 = state_35818;(statearr_35825[(8)] = inst_35800__$1);
return statearr_35825;
})();if(inst_35802)
{var statearr_35826_35841 = state_35818__$1;(statearr_35826_35841[(1)] = (5));
} else
{var statearr_35827_35842 = state_35818__$1;(statearr_35827_35842[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35819 === (3)))
{var inst_35816 = (state_35818[(2)]);var state_35818__$1 = state_35818;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35818__$1,inst_35816);
} else
{if((state_val_35819 === (2)))
{var state_35818__$1 = state_35818;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35818__$1,(4),display_main_chan);
} else
{if((state_val_35819 === (1)))
{var state_35818__$1 = state_35818;var statearr_35828_35843 = state_35818__$1;(statearr_35828_35843[(2)] = null);
(statearr_35828_35843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app))
;return ((function (switch__6292__auto__,c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_35832 = [null,null,null,null,null,null,null,null,null,null];(statearr_35832[(0)] = state_machine__6293__auto__);
(statearr_35832[(1)] = (1));
return statearr_35832;
});
var state_machine__6293__auto____1 = (function (state_35818){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_35818);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e35833){if((e35833 instanceof Object))
{var ex__6296__auto__ = e35833;var statearr_35834_35844 = state_35818;(statearr_35834_35844[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35818);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35833;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35845 = state_35818;
state_35818 = G__35845;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_35818){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_35818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app))
})();var state__6309__auto__ = (function (){var statearr_35835 = f__6308__auto__.call(null);(statearr_35835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto__);
return statearr_35835;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto__,display_main_transducer,display_main_chan,index_keys,comp,map__35797,map__35797__$1,app))
);
return c__6307__auto__;
}),new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814),(function (_,___$1,p__35836){var map__35837 = p__35836;var map__35837__$1 = ((cljs.core.seq_QMARK_.call(null,map__35837))?cljs.core.apply.call(null,cljs.core.hash_map,map__35837):map__35837);var app = cljs.core.get.call(null,map__35837__$1,new cljs.core.Keyword(null,"app","app",-560961707));return datascript.unlisten_BANG_.call(null,app,(ewen.wreak._STAR_component_STAR_[new cljs.core.Keyword("ewen.wreak.todo-mvc","display-main-chan","ewen.wreak.todo-mvc/display-main-chan",-15400159)]));
})], null));
ewen.wreak.todo_mvc.footer = ewen.wreak.component.call(null,"footer",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function (_,___$1,___$2){return React.DOM.div(null,React.DOM.span({"id": "todo-count"}),React.DOM.ul({"id": "filters"},React.DOM.li(null,React.DOM.a({"className": "selected", "href": "#/"},"All")),React.DOM.li(null,React.DOM.a({"className": "selected", "href": "#/active"},"Active")),React.DOM.li(null,React.DOM.a({"className": "selected", "href": "#/completed"},"Completed"))),React.DOM.button({"id": "clear-completed"},"Clear completed"));
})], null));
ewen.wreak.todo_mvc.load_app = (function load_app(){var conn = datascript.create_conn.call(null);datascript.transact_BANG_.call(null,conn,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("db","id","db/id",-1388397098),(-1),new cljs.core.Keyword("todo-mvc","display-main","todo-mvc/display-main",2059392236),false], null)], null));
return conn;
});
ewen.wreak.todo_mvc.app = ewen.wreak.todo_mvc.load_app.call(null);
ewen.wreak.render.call(null,ewen.wreak.todo_mvc.header.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),ewen.wreak.todo_mvc.app], null)),domina.single_node.call(null,domina.css.sel.call(null,"#header")));
ewen.wreak.render.call(null,ewen.wreak.todo_mvc.main.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),ewen.wreak.todo_mvc.app], null)),domina.single_node.call(null,domina.css.sel.call(null,"#main")));
ewen.wreak.render.call(null,ewen.wreak.todo_mvc.footer.call(null,null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"app","app",-560961707),ewen.wreak.todo_mvc.app], null)),domina.single_node.call(null,domina.css.sel.call(null,"#footer")));

//# sourceMappingURL=todo_mvc.js.map