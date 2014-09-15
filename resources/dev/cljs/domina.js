// Compiled by ClojureScript 0.0-2311
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_30744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_30745 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_30746 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_30746,opt_wrapper_30744,table_section_wrapper_30745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_30744,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_30745,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_30745,cell_wrapper_30746,table_section_wrapper_30745,table_section_wrapper_30745]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3567__auto__ = div.firstChild;if(cljs.core.truth_(and__3567__auto__))
{return div.firstChild.childNodes;
} else
{return and__3567__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__30751 = cljs.core.seq.call(null,tbody);var chunk__30752 = null;var count__30753 = (0);var i__30754 = (0);while(true){
if((i__30754 < count__30753))
{var child = cljs.core._nth.call(null,chunk__30752,i__30754);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30755 = seq__30751;
var G__30756 = chunk__30752;
var G__30757 = count__30753;
var G__30758 = (i__30754 + (1));
seq__30751 = G__30755;
chunk__30752 = G__30756;
count__30753 = G__30757;
i__30754 = G__30758;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__30751);if(temp__4126__auto__)
{var seq__30751__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30751__$1))
{var c__4335__auto__ = cljs.core.chunk_first.call(null,seq__30751__$1);{
var G__30759 = cljs.core.chunk_rest.call(null,seq__30751__$1);
var G__30760 = c__4335__auto__;
var G__30761 = cljs.core.count.call(null,c__4335__auto__);
var G__30762 = (0);
seq__30751 = G__30759;
chunk__30752 = G__30760;
count__30753 = G__30761;
i__30754 = G__30762;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__30751__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__30763 = cljs.core.next.call(null,seq__30751__$1);
var G__30764 = null;
var G__30765 = (0);
var G__30766 = (0);
seq__30751 = G__30763;
chunk__30752 = G__30764;
count__30753 = G__30765;
i__30754 = G__30766;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__30768 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__30768,(0),null);var start_wrap = cljs.core.nth.call(null,vec__30768,(1),null);var end_wrap = cljs.core.nth.call(null,vec__30768,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__30769 = wrapper.lastChild;
var G__30770 = (level - (1));
wrapper = G__30769;
level = G__30770;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3567__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3567__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3567__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj30772 = {};return obj30772;
})();
domina.nodes = (function nodes(content){if((function (){var and__3567__auto__ = content;if(and__3567__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3567__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4206__auto__ = (((content == null))?null:content);return (function (){var or__3579__auto__ = (domina.nodes[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.nodes["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3567__auto__ = nodeseq;if(and__3567__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3567__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4206__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3579__auto__ = (domina.single_node[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.single_node["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3567__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3567__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3567__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__30773){
var mesg = cljs.core.seq(arglist__30773);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__30774){
var mesg = cljs.core.seq(arglist__30774);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__30775){
var contents = cljs.core.seq(arglist__30775);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__30776_SHARP_){return p1__30776_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__30777_SHARP_,p2__30778_SHARP_){return goog.dom.insertChildAt(p1__30777_SHARP_,p2__30778_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30780_SHARP_,p2__30779_SHARP_){return goog.dom.insertSiblingBefore(p2__30779_SHARP_,p1__30780_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__30782_SHARP_,p2__30781_SHARP_){return goog.dom.insertSiblingAfter(p2__30781_SHARP_,p1__30782_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__30784_SHARP_,p2__30783_SHARP_){return goog.dom.replaceNode(p2__30783_SHARP_,p1__30784_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__30789_30793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30790_30794 = null;var count__30791_30795 = (0);var i__30792_30796 = (0);while(true){
if((i__30792_30796 < count__30791_30795))
{var n_30797 = cljs.core._nth.call(null,chunk__30790_30794,i__30792_30796);goog.style.setStyle(n_30797,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30798 = seq__30789_30793;
var G__30799 = chunk__30790_30794;
var G__30800 = count__30791_30795;
var G__30801 = (i__30792_30796 + (1));
seq__30789_30793 = G__30798;
chunk__30790_30794 = G__30799;
count__30791_30795 = G__30800;
i__30792_30796 = G__30801;
continue;
}
} else
{var temp__4126__auto___30802 = cljs.core.seq.call(null,seq__30789_30793);if(temp__4126__auto___30802)
{var seq__30789_30803__$1 = temp__4126__auto___30802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30789_30803__$1))
{var c__4335__auto___30804 = cljs.core.chunk_first.call(null,seq__30789_30803__$1);{
var G__30805 = cljs.core.chunk_rest.call(null,seq__30789_30803__$1);
var G__30806 = c__4335__auto___30804;
var G__30807 = cljs.core.count.call(null,c__4335__auto___30804);
var G__30808 = (0);
seq__30789_30793 = G__30805;
chunk__30790_30794 = G__30806;
count__30791_30795 = G__30807;
i__30792_30796 = G__30808;
continue;
}
} else
{var n_30809 = cljs.core.first.call(null,seq__30789_30803__$1);goog.style.setStyle(n_30809,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30810 = cljs.core.next.call(null,seq__30789_30803__$1);
var G__30811 = null;
var G__30812 = (0);
var G__30813 = (0);
seq__30789_30793 = G__30810;
chunk__30790_30794 = G__30811;
count__30791_30795 = G__30812;
i__30792_30796 = G__30813;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__30814){
var content = cljs.core.first(arglist__30814);
arglist__30814 = cljs.core.next(arglist__30814);
var name = cljs.core.first(arglist__30814);
var value = cljs.core.rest(arglist__30814);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__30819_30823 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30820_30824 = null;var count__30821_30825 = (0);var i__30822_30826 = (0);while(true){
if((i__30822_30826 < count__30821_30825))
{var n_30827 = cljs.core._nth.call(null,chunk__30820_30824,i__30822_30826);n_30827.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30828 = seq__30819_30823;
var G__30829 = chunk__30820_30824;
var G__30830 = count__30821_30825;
var G__30831 = (i__30822_30826 + (1));
seq__30819_30823 = G__30828;
chunk__30820_30824 = G__30829;
count__30821_30825 = G__30830;
i__30822_30826 = G__30831;
continue;
}
} else
{var temp__4126__auto___30832 = cljs.core.seq.call(null,seq__30819_30823);if(temp__4126__auto___30832)
{var seq__30819_30833__$1 = temp__4126__auto___30832;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30819_30833__$1))
{var c__4335__auto___30834 = cljs.core.chunk_first.call(null,seq__30819_30833__$1);{
var G__30835 = cljs.core.chunk_rest.call(null,seq__30819_30833__$1);
var G__30836 = c__4335__auto___30834;
var G__30837 = cljs.core.count.call(null,c__4335__auto___30834);
var G__30838 = (0);
seq__30819_30823 = G__30835;
chunk__30820_30824 = G__30836;
count__30821_30825 = G__30837;
i__30822_30826 = G__30838;
continue;
}
} else
{var n_30839 = cljs.core.first.call(null,seq__30819_30833__$1);n_30839.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__30840 = cljs.core.next.call(null,seq__30819_30833__$1);
var G__30841 = null;
var G__30842 = (0);
var G__30843 = (0);
seq__30819_30823 = G__30840;
chunk__30820_30824 = G__30841;
count__30821_30825 = G__30842;
i__30822_30826 = G__30843;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__30844){
var content = cljs.core.first(arglist__30844);
arglist__30844 = cljs.core.next(arglist__30844);
var name = cljs.core.first(arglist__30844);
var value = cljs.core.rest(arglist__30844);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__30849_30853 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30850_30854 = null;var count__30851_30855 = (0);var i__30852_30856 = (0);while(true){
if((i__30852_30856 < count__30851_30855))
{var n_30857 = cljs.core._nth.call(null,chunk__30850_30854,i__30852_30856);n_30857.removeAttribute(cljs.core.name.call(null,name));
{
var G__30858 = seq__30849_30853;
var G__30859 = chunk__30850_30854;
var G__30860 = count__30851_30855;
var G__30861 = (i__30852_30856 + (1));
seq__30849_30853 = G__30858;
chunk__30850_30854 = G__30859;
count__30851_30855 = G__30860;
i__30852_30856 = G__30861;
continue;
}
} else
{var temp__4126__auto___30862 = cljs.core.seq.call(null,seq__30849_30853);if(temp__4126__auto___30862)
{var seq__30849_30863__$1 = temp__4126__auto___30862;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30849_30863__$1))
{var c__4335__auto___30864 = cljs.core.chunk_first.call(null,seq__30849_30863__$1);{
var G__30865 = cljs.core.chunk_rest.call(null,seq__30849_30863__$1);
var G__30866 = c__4335__auto___30864;
var G__30867 = cljs.core.count.call(null,c__4335__auto___30864);
var G__30868 = (0);
seq__30849_30853 = G__30865;
chunk__30850_30854 = G__30866;
count__30851_30855 = G__30867;
i__30852_30856 = G__30868;
continue;
}
} else
{var n_30869 = cljs.core.first.call(null,seq__30849_30863__$1);n_30869.removeAttribute(cljs.core.name.call(null,name));
{
var G__30870 = cljs.core.next.call(null,seq__30849_30863__$1);
var G__30871 = null;
var G__30872 = (0);
var G__30873 = (0);
seq__30849_30853 = G__30870;
chunk__30850_30854 = G__30871;
count__30851_30855 = G__30872;
i__30852_30856 = G__30873;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__30875 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__30875,(0),null);var v = cljs.core.nth.call(null,vec__30875,(1),null);if(cljs.core.truth_((function (){var and__3567__auto__ = k;if(cljs.core.truth_(and__3567__auto__))
{return v;
} else
{return and__3567__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__30876_SHARP_){var attr = attrs__$1.item(p1__30876_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__30883_30889 = cljs.core.seq.call(null,styles);var chunk__30884_30890 = null;var count__30885_30891 = (0);var i__30886_30892 = (0);while(true){
if((i__30886_30892 < count__30885_30891))
{var vec__30887_30893 = cljs.core._nth.call(null,chunk__30884_30890,i__30886_30892);var name_30894 = cljs.core.nth.call(null,vec__30887_30893,(0),null);var value_30895 = cljs.core.nth.call(null,vec__30887_30893,(1),null);domina.set_style_BANG_.call(null,content,name_30894,value_30895);
{
var G__30896 = seq__30883_30889;
var G__30897 = chunk__30884_30890;
var G__30898 = count__30885_30891;
var G__30899 = (i__30886_30892 + (1));
seq__30883_30889 = G__30896;
chunk__30884_30890 = G__30897;
count__30885_30891 = G__30898;
i__30886_30892 = G__30899;
continue;
}
} else
{var temp__4126__auto___30900 = cljs.core.seq.call(null,seq__30883_30889);if(temp__4126__auto___30900)
{var seq__30883_30901__$1 = temp__4126__auto___30900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30883_30901__$1))
{var c__4335__auto___30902 = cljs.core.chunk_first.call(null,seq__30883_30901__$1);{
var G__30903 = cljs.core.chunk_rest.call(null,seq__30883_30901__$1);
var G__30904 = c__4335__auto___30902;
var G__30905 = cljs.core.count.call(null,c__4335__auto___30902);
var G__30906 = (0);
seq__30883_30889 = G__30903;
chunk__30884_30890 = G__30904;
count__30885_30891 = G__30905;
i__30886_30892 = G__30906;
continue;
}
} else
{var vec__30888_30907 = cljs.core.first.call(null,seq__30883_30901__$1);var name_30908 = cljs.core.nth.call(null,vec__30888_30907,(0),null);var value_30909 = cljs.core.nth.call(null,vec__30888_30907,(1),null);domina.set_style_BANG_.call(null,content,name_30908,value_30909);
{
var G__30910 = cljs.core.next.call(null,seq__30883_30901__$1);
var G__30911 = null;
var G__30912 = (0);
var G__30913 = (0);
seq__30883_30889 = G__30910;
chunk__30884_30890 = G__30911;
count__30885_30891 = G__30912;
i__30886_30892 = G__30913;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__30920_30926 = cljs.core.seq.call(null,attrs);var chunk__30921_30927 = null;var count__30922_30928 = (0);var i__30923_30929 = (0);while(true){
if((i__30923_30929 < count__30922_30928))
{var vec__30924_30930 = cljs.core._nth.call(null,chunk__30921_30927,i__30923_30929);var name_30931 = cljs.core.nth.call(null,vec__30924_30930,(0),null);var value_30932 = cljs.core.nth.call(null,vec__30924_30930,(1),null);domina.set_attr_BANG_.call(null,content,name_30931,value_30932);
{
var G__30933 = seq__30920_30926;
var G__30934 = chunk__30921_30927;
var G__30935 = count__30922_30928;
var G__30936 = (i__30923_30929 + (1));
seq__30920_30926 = G__30933;
chunk__30921_30927 = G__30934;
count__30922_30928 = G__30935;
i__30923_30929 = G__30936;
continue;
}
} else
{var temp__4126__auto___30937 = cljs.core.seq.call(null,seq__30920_30926);if(temp__4126__auto___30937)
{var seq__30920_30938__$1 = temp__4126__auto___30937;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30920_30938__$1))
{var c__4335__auto___30939 = cljs.core.chunk_first.call(null,seq__30920_30938__$1);{
var G__30940 = cljs.core.chunk_rest.call(null,seq__30920_30938__$1);
var G__30941 = c__4335__auto___30939;
var G__30942 = cljs.core.count.call(null,c__4335__auto___30939);
var G__30943 = (0);
seq__30920_30926 = G__30940;
chunk__30921_30927 = G__30941;
count__30922_30928 = G__30942;
i__30923_30929 = G__30943;
continue;
}
} else
{var vec__30925_30944 = cljs.core.first.call(null,seq__30920_30938__$1);var name_30945 = cljs.core.nth.call(null,vec__30925_30944,(0),null);var value_30946 = cljs.core.nth.call(null,vec__30925_30944,(1),null);domina.set_attr_BANG_.call(null,content,name_30945,value_30946);
{
var G__30947 = cljs.core.next.call(null,seq__30920_30938__$1);
var G__30948 = null;
var G__30949 = (0);
var G__30950 = (0);
seq__30920_30926 = G__30947;
chunk__30921_30927 = G__30948;
count__30922_30928 = G__30949;
i__30923_30929 = G__30950;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__30955_30959 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30956_30960 = null;var count__30957_30961 = (0);var i__30958_30962 = (0);while(true){
if((i__30958_30962 < count__30957_30961))
{var node_30963 = cljs.core._nth.call(null,chunk__30956_30960,i__30958_30962);goog.dom.classes.add(node_30963,class$);
{
var G__30964 = seq__30955_30959;
var G__30965 = chunk__30956_30960;
var G__30966 = count__30957_30961;
var G__30967 = (i__30958_30962 + (1));
seq__30955_30959 = G__30964;
chunk__30956_30960 = G__30965;
count__30957_30961 = G__30966;
i__30958_30962 = G__30967;
continue;
}
} else
{var temp__4126__auto___30968 = cljs.core.seq.call(null,seq__30955_30959);if(temp__4126__auto___30968)
{var seq__30955_30969__$1 = temp__4126__auto___30968;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30955_30969__$1))
{var c__4335__auto___30970 = cljs.core.chunk_first.call(null,seq__30955_30969__$1);{
var G__30971 = cljs.core.chunk_rest.call(null,seq__30955_30969__$1);
var G__30972 = c__4335__auto___30970;
var G__30973 = cljs.core.count.call(null,c__4335__auto___30970);
var G__30974 = (0);
seq__30955_30959 = G__30971;
chunk__30956_30960 = G__30972;
count__30957_30961 = G__30973;
i__30958_30962 = G__30974;
continue;
}
} else
{var node_30975 = cljs.core.first.call(null,seq__30955_30969__$1);goog.dom.classes.add(node_30975,class$);
{
var G__30976 = cljs.core.next.call(null,seq__30955_30969__$1);
var G__30977 = null;
var G__30978 = (0);
var G__30979 = (0);
seq__30955_30959 = G__30976;
chunk__30956_30960 = G__30977;
count__30957_30961 = G__30978;
i__30958_30962 = G__30979;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__30984_30988 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__30985_30989 = null;var count__30986_30990 = (0);var i__30987_30991 = (0);while(true){
if((i__30987_30991 < count__30986_30990))
{var node_30992 = cljs.core._nth.call(null,chunk__30985_30989,i__30987_30991);goog.dom.classes.remove(node_30992,class$);
{
var G__30993 = seq__30984_30988;
var G__30994 = chunk__30985_30989;
var G__30995 = count__30986_30990;
var G__30996 = (i__30987_30991 + (1));
seq__30984_30988 = G__30993;
chunk__30985_30989 = G__30994;
count__30986_30990 = G__30995;
i__30987_30991 = G__30996;
continue;
}
} else
{var temp__4126__auto___30997 = cljs.core.seq.call(null,seq__30984_30988);if(temp__4126__auto___30997)
{var seq__30984_30998__$1 = temp__4126__auto___30997;if(cljs.core.chunked_seq_QMARK_.call(null,seq__30984_30998__$1))
{var c__4335__auto___30999 = cljs.core.chunk_first.call(null,seq__30984_30998__$1);{
var G__31000 = cljs.core.chunk_rest.call(null,seq__30984_30998__$1);
var G__31001 = c__4335__auto___30999;
var G__31002 = cljs.core.count.call(null,c__4335__auto___30999);
var G__31003 = (0);
seq__30984_30988 = G__31000;
chunk__30985_30989 = G__31001;
count__30986_30990 = G__31002;
i__30987_30991 = G__31003;
continue;
}
} else
{var node_31004 = cljs.core.first.call(null,seq__30984_30998__$1);goog.dom.classes.remove(node_31004,class$);
{
var G__31005 = cljs.core.next.call(null,seq__30984_30998__$1);
var G__31006 = null;
var G__31007 = (0);
var G__31008 = (0);
seq__30984_30988 = G__31005;
chunk__30985_30989 = G__31006;
count__30986_30990 = G__31007;
i__30987_30991 = G__31008;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__31013_31017 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31014_31018 = null;var count__31015_31019 = (0);var i__31016_31020 = (0);while(true){
if((i__31016_31020 < count__31015_31019))
{var node_31021 = cljs.core._nth.call(null,chunk__31014_31018,i__31016_31020);goog.dom.classes.toggle(node_31021,class$);
{
var G__31022 = seq__31013_31017;
var G__31023 = chunk__31014_31018;
var G__31024 = count__31015_31019;
var G__31025 = (i__31016_31020 + (1));
seq__31013_31017 = G__31022;
chunk__31014_31018 = G__31023;
count__31015_31019 = G__31024;
i__31016_31020 = G__31025;
continue;
}
} else
{var temp__4126__auto___31026 = cljs.core.seq.call(null,seq__31013_31017);if(temp__4126__auto___31026)
{var seq__31013_31027__$1 = temp__4126__auto___31026;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31013_31027__$1))
{var c__4335__auto___31028 = cljs.core.chunk_first.call(null,seq__31013_31027__$1);{
var G__31029 = cljs.core.chunk_rest.call(null,seq__31013_31027__$1);
var G__31030 = c__4335__auto___31028;
var G__31031 = cljs.core.count.call(null,c__4335__auto___31028);
var G__31032 = (0);
seq__31013_31017 = G__31029;
chunk__31014_31018 = G__31030;
count__31015_31019 = G__31031;
i__31016_31020 = G__31032;
continue;
}
} else
{var node_31033 = cljs.core.first.call(null,seq__31013_31027__$1);goog.dom.classes.toggle(node_31033,class$);
{
var G__31034 = cljs.core.next.call(null,seq__31013_31027__$1);
var G__31035 = null;
var G__31036 = (0);
var G__31037 = (0);
seq__31013_31017 = G__31034;
chunk__31014_31018 = G__31035;
count__31015_31019 = G__31036;
i__31016_31020 = G__31037;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_31046__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__31042_31047 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31043_31048 = null;var count__31044_31049 = (0);var i__31045_31050 = (0);while(true){
if((i__31045_31050 < count__31044_31049))
{var node_31051 = cljs.core._nth.call(null,chunk__31043_31048,i__31045_31050);goog.dom.classes.set(node_31051,classes_31046__$1);
{
var G__31052 = seq__31042_31047;
var G__31053 = chunk__31043_31048;
var G__31054 = count__31044_31049;
var G__31055 = (i__31045_31050 + (1));
seq__31042_31047 = G__31052;
chunk__31043_31048 = G__31053;
count__31044_31049 = G__31054;
i__31045_31050 = G__31055;
continue;
}
} else
{var temp__4126__auto___31056 = cljs.core.seq.call(null,seq__31042_31047);if(temp__4126__auto___31056)
{var seq__31042_31057__$1 = temp__4126__auto___31056;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31042_31057__$1))
{var c__4335__auto___31058 = cljs.core.chunk_first.call(null,seq__31042_31057__$1);{
var G__31059 = cljs.core.chunk_rest.call(null,seq__31042_31057__$1);
var G__31060 = c__4335__auto___31058;
var G__31061 = cljs.core.count.call(null,c__4335__auto___31058);
var G__31062 = (0);
seq__31042_31047 = G__31059;
chunk__31043_31048 = G__31060;
count__31044_31049 = G__31061;
i__31045_31050 = G__31062;
continue;
}
} else
{var node_31063 = cljs.core.first.call(null,seq__31042_31057__$1);goog.dom.classes.set(node_31063,classes_31046__$1);
{
var G__31064 = cljs.core.next.call(null,seq__31042_31057__$1);
var G__31065 = null;
var G__31066 = (0);
var G__31067 = (0);
seq__31042_31047 = G__31064;
chunk__31043_31048 = G__31065;
count__31044_31049 = G__31066;
i__31045_31050 = G__31067;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__31072_31076 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31073_31077 = null;var count__31074_31078 = (0);var i__31075_31079 = (0);while(true){
if((i__31075_31079 < count__31074_31078))
{var node_31080 = cljs.core._nth.call(null,chunk__31073_31077,i__31075_31079);goog.dom.setTextContent(node_31080,value);
{
var G__31081 = seq__31072_31076;
var G__31082 = chunk__31073_31077;
var G__31083 = count__31074_31078;
var G__31084 = (i__31075_31079 + (1));
seq__31072_31076 = G__31081;
chunk__31073_31077 = G__31082;
count__31074_31078 = G__31083;
i__31075_31079 = G__31084;
continue;
}
} else
{var temp__4126__auto___31085 = cljs.core.seq.call(null,seq__31072_31076);if(temp__4126__auto___31085)
{var seq__31072_31086__$1 = temp__4126__auto___31085;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31072_31086__$1))
{var c__4335__auto___31087 = cljs.core.chunk_first.call(null,seq__31072_31086__$1);{
var G__31088 = cljs.core.chunk_rest.call(null,seq__31072_31086__$1);
var G__31089 = c__4335__auto___31087;
var G__31090 = cljs.core.count.call(null,c__4335__auto___31087);
var G__31091 = (0);
seq__31072_31076 = G__31088;
chunk__31073_31077 = G__31089;
count__31074_31078 = G__31090;
i__31075_31079 = G__31091;
continue;
}
} else
{var node_31092 = cljs.core.first.call(null,seq__31072_31086__$1);goog.dom.setTextContent(node_31092,value);
{
var G__31093 = cljs.core.next.call(null,seq__31072_31086__$1);
var G__31094 = null;
var G__31095 = (0);
var G__31096 = (0);
seq__31072_31076 = G__31093;
chunk__31073_31077 = G__31094;
count__31074_31078 = G__31095;
i__31075_31079 = G__31096;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__31101_31105 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31102_31106 = null;var count__31103_31107 = (0);var i__31104_31108 = (0);while(true){
if((i__31104_31108 < count__31103_31107))
{var node_31109 = cljs.core._nth.call(null,chunk__31102_31106,i__31104_31108);goog.dom.forms.setValue(node_31109,value);
{
var G__31110 = seq__31101_31105;
var G__31111 = chunk__31102_31106;
var G__31112 = count__31103_31107;
var G__31113 = (i__31104_31108 + (1));
seq__31101_31105 = G__31110;
chunk__31102_31106 = G__31111;
count__31103_31107 = G__31112;
i__31104_31108 = G__31113;
continue;
}
} else
{var temp__4126__auto___31114 = cljs.core.seq.call(null,seq__31101_31105);if(temp__4126__auto___31114)
{var seq__31101_31115__$1 = temp__4126__auto___31114;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31101_31115__$1))
{var c__4335__auto___31116 = cljs.core.chunk_first.call(null,seq__31101_31115__$1);{
var G__31117 = cljs.core.chunk_rest.call(null,seq__31101_31115__$1);
var G__31118 = c__4335__auto___31116;
var G__31119 = cljs.core.count.call(null,c__4335__auto___31116);
var G__31120 = (0);
seq__31101_31105 = G__31117;
chunk__31102_31106 = G__31118;
count__31103_31107 = G__31119;
i__31104_31108 = G__31120;
continue;
}
} else
{var node_31121 = cljs.core.first.call(null,seq__31101_31115__$1);goog.dom.forms.setValue(node_31121,value);
{
var G__31122 = cljs.core.next.call(null,seq__31101_31115__$1);
var G__31123 = null;
var G__31124 = (0);
var G__31125 = (0);
seq__31101_31105 = G__31122;
chunk__31102_31106 = G__31123;
count__31103_31107 = G__31124;
i__31104_31108 = G__31125;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3567__auto__ = allows_inner_html_QMARK_;if(and__3567__auto__)
{var and__3567__auto____$1 = (function (){var or__3579__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3567__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3567__auto____$1;
}
} else
{return and__3567__auto__;
}
})()))
{var value_31136 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__31132_31137 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__31133_31138 = null;var count__31134_31139 = (0);var i__31135_31140 = (0);while(true){
if((i__31135_31140 < count__31134_31139))
{var node_31141 = cljs.core._nth.call(null,chunk__31133_31138,i__31135_31140);node_31141.innerHTML = value_31136;
{
var G__31142 = seq__31132_31137;
var G__31143 = chunk__31133_31138;
var G__31144 = count__31134_31139;
var G__31145 = (i__31135_31140 + (1));
seq__31132_31137 = G__31142;
chunk__31133_31138 = G__31143;
count__31134_31139 = G__31144;
i__31135_31140 = G__31145;
continue;
}
} else
{var temp__4126__auto___31146 = cljs.core.seq.call(null,seq__31132_31137);if(temp__4126__auto___31146)
{var seq__31132_31147__$1 = temp__4126__auto___31146;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31132_31147__$1))
{var c__4335__auto___31148 = cljs.core.chunk_first.call(null,seq__31132_31147__$1);{
var G__31149 = cljs.core.chunk_rest.call(null,seq__31132_31147__$1);
var G__31150 = c__4335__auto___31148;
var G__31151 = cljs.core.count.call(null,c__4335__auto___31148);
var G__31152 = (0);
seq__31132_31137 = G__31149;
chunk__31133_31138 = G__31150;
count__31134_31139 = G__31151;
i__31135_31140 = G__31152;
continue;
}
} else
{var node_31153 = cljs.core.first.call(null,seq__31132_31147__$1);node_31153.innerHTML = value_31136;
{
var G__31154 = cljs.core.next.call(null,seq__31132_31147__$1);
var G__31155 = null;
var G__31156 = (0);
var G__31157 = (0);
seq__31132_31137 = G__31154;
chunk__31133_31138 = G__31155;
count__31134_31139 = G__31156;
i__31135_31140 = G__31157;
continue;
}
}
} else
{}
}
break;
}
}catch (e31131){if((e31131 instanceof Error))
{var e_31158 = e31131;domina.replace_children_BANG_.call(null,content,value_31136);
} else
{throw e31131;

}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3567__auto__ = bubble;if(cljs.core.truth_(and__3567__auto__))
{return (value == null);
} else
{return and__3567__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3579__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__31165_31169 = cljs.core.seq.call(null,children);var chunk__31166_31170 = null;var count__31167_31171 = (0);var i__31168_31172 = (0);while(true){
if((i__31168_31172 < count__31167_31171))
{var child_31173 = cljs.core._nth.call(null,chunk__31166_31170,i__31168_31172);frag.appendChild(child_31173);
{
var G__31174 = seq__31165_31169;
var G__31175 = chunk__31166_31170;
var G__31176 = count__31167_31171;
var G__31177 = (i__31168_31172 + (1));
seq__31165_31169 = G__31174;
chunk__31166_31170 = G__31175;
count__31167_31171 = G__31176;
i__31168_31172 = G__31177;
continue;
}
} else
{var temp__4126__auto___31178 = cljs.core.seq.call(null,seq__31165_31169);if(temp__4126__auto___31178)
{var seq__31165_31179__$1 = temp__4126__auto___31178;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31165_31179__$1))
{var c__4335__auto___31180 = cljs.core.chunk_first.call(null,seq__31165_31179__$1);{
var G__31181 = cljs.core.chunk_rest.call(null,seq__31165_31179__$1);
var G__31182 = c__4335__auto___31180;
var G__31183 = cljs.core.count.call(null,c__4335__auto___31180);
var G__31184 = (0);
seq__31165_31169 = G__31181;
chunk__31166_31170 = G__31182;
count__31167_31171 = G__31183;
i__31168_31172 = G__31184;
continue;
}
} else
{var child_31185 = cljs.core.first.call(null,seq__31165_31179__$1);frag.appendChild(child_31185);
{
var G__31186 = cljs.core.next.call(null,seq__31165_31179__$1);
var G__31187 = null;
var G__31188 = (0);
var G__31189 = (0);
seq__31165_31169 = G__31186;
chunk__31166_31170 = G__31187;
count__31167_31171 = G__31188;
i__31168_31172 = G__31189;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__31159_SHARP_,p2__31160_SHARP_){return f.call(null,p1__31159_SHARP_,p2__31160_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3567__auto__ = obj;if(cljs.core.truth_(and__3567__auto__))
{var and__3567__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3567__auto____$1)
{return obj.length;
} else
{return and__3567__auto____$1;
}
} else
{return and__3567__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__31191 = list_thing;if(G__31191)
{var bit__4229__auto__ = (G__31191.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4229__auto__) || (G__31191.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31191.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31191);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31191);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__31192 = content;if(G__31192)
{var bit__4229__auto__ = (G__31192.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4229__auto__) || (G__31192.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31192.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31192);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31192);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__31193 = content;if(G__31193)
{var bit__4229__auto__ = (G__31193.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4229__auto__) || (G__31193.cljs$core$ISeqable$))
{return true;
} else
{if((!G__31193.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31193);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__31193);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map