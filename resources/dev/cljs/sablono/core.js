// Compiled by ClojureScript 0.0-2311
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__34411__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34410 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34410,(0),null);var body = cljs.core.nthnext.call(null,vec__34410,(1));if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34411 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34411__delegate.call(this,args);};
G__34411.cljs$lang$maxFixedArity = 0;
G__34411.cljs$lang$applyTo = (function (arglist__34412){
var args = cljs.core.seq(arglist__34412);
return G__34411__delegate(args);
});
G__34411.cljs$core$IFn$_invoke$arity$variadic = G__34411__delegate;
return G__34411;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__4304__auto__ = (function iter__34417(s__34418){return (new cljs.core.LazySeq(null,(function (){var s__34418__$1 = s__34418;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34418__$1);if(temp__4126__auto__)
{var s__34418__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34418__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34418__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34420 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34419 = (0);while(true){
if((i__34419 < size__4303__auto__))
{var args = cljs.core._nth.call(null,c__4302__auto__,i__34419);cljs.core.chunk_append.call(null,b__34420,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));
{
var G__34421 = (i__34419 + (1));
i__34419 = G__34421;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34420),iter__34417.call(null,cljs.core.chunk_rest.call(null,s__34418__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34420),null);
}
} else
{var args = cljs.core.first.call(null,s__34418__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__34417.call(null,cljs.core.rest.call(null,s__34418__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){var html = cljs.core.atom.call(null,null);React.renderComponentToString(component,((function (html){
return (function (p1__34422_SHARP_){return cljs.core.reset_BANG_.call(null,html,p1__34422_SHARP_);
});})(html))
);
return cljs.core.deref.call(null,html);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__4304__auto__ = (function iter__34427(s__34428){return (new cljs.core.LazySeq(null,(function (){var s__34428__$1 = s__34428;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34428__$1);if(temp__4126__auto__)
{var s__34428__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34428__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34428__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34430 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34429 = (0);while(true){
if((i__34429 < size__4303__auto__))
{var style = cljs.core._nth.call(null,c__4302__auto__,i__34429);cljs.core.chunk_append.call(null,b__34430,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));
{
var G__34431 = (i__34429 + (1));
i__34429 = G__34431;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34430),iter__34427.call(null,cljs.core.chunk_rest.call(null,s__34428__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34430),null);
}
} else
{var style = cljs.core.first.call(null,s__34428__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__34427.call(null,cljs.core.rest.call(null,s__34428__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__34432){
var styles = cljs.core.seq(arglist__34432);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.8.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to34433 = (function() { 
var link_to34433__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34433 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34433__delegate.call(this,url,content);};
link_to34433.cljs$lang$maxFixedArity = 1;
link_to34433.cljs$lang$applyTo = (function (arglist__34434){
var url = cljs.core.first(arglist__34434);
var content = cljs.core.rest(arglist__34434);
return link_to34433__delegate(url,content);
});
link_to34433.cljs$core$IFn$_invoke$arity$variadic = link_to34433__delegate;
return link_to34433;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34433);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34435 = (function() { 
var mail_to34435__delegate = function (e_mail,p__34436){var vec__34438 = p__34436;var content = cljs.core.nth.call(null,vec__34438,(0),null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),("mailto:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail))], null),(function (){var or__3579__auto__ = content;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34435 = function (e_mail,var_args){
var p__34436 = null;if (arguments.length > 1) {
  p__34436 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34435__delegate.call(this,e_mail,p__34436);};
mail_to34435.cljs$lang$maxFixedArity = 1;
mail_to34435.cljs$lang$applyTo = (function (arglist__34439){
var e_mail = cljs.core.first(arglist__34439);
var p__34436 = cljs.core.rest(arglist__34439);
return mail_to34435__delegate(e_mail,p__34436);
});
mail_to34435.cljs$core$IFn$_invoke$arity$variadic = mail_to34435__delegate;
return mail_to34435;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34435);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34440 = (function unordered_list34440(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4304__auto__ = (function iter__34445(s__34446){return (new cljs.core.LazySeq(null,(function (){var s__34446__$1 = s__34446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34446__$1);if(temp__4126__auto__)
{var s__34446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34446__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34446__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34448 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34447 = (0);while(true){
if((i__34447 < size__4303__auto__))
{var x = cljs.core._nth.call(null,c__4302__auto__,i__34447);cljs.core.chunk_append.call(null,b__34448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__34449 = (i__34447 + (1));
i__34447 = G__34449;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34448),iter__34445.call(null,cljs.core.chunk_rest.call(null,s__34446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34448),null);
}
} else
{var x = cljs.core.first.call(null,s__34446__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__34445.call(null,cljs.core.rest.call(null,s__34446__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34440);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34450 = (function ordered_list34450(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4304__auto__ = (function iter__34455(s__34456){return (new cljs.core.LazySeq(null,(function (){var s__34456__$1 = s__34456;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34456__$1);if(temp__4126__auto__)
{var s__34456__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34456__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34456__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34458 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34457 = (0);while(true){
if((i__34457 < size__4303__auto__))
{var x = cljs.core._nth.call(null,c__4302__auto__,i__34457);cljs.core.chunk_append.call(null,b__34458,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));
{
var G__34459 = (i__34457 + (1));
i__34457 = G__34459;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34458),iter__34455.call(null,cljs.core.chunk_rest.call(null,s__34456__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34458),null);
}
} else
{var x = cljs.core.first.call(null,s__34456__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__34455.call(null,cljs.core.rest.call(null,s__34456__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34450);
/**
* Create an image element.
*/
sablono.core.image34460 = (function() {
var image34460 = null;
var image34460__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image34460__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image34460 = function(src,alt){
switch(arguments.length){
case 1:
return image34460__1.call(this,src);
case 2:
return image34460__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34460.cljs$core$IFn$_invoke$arity$1 = image34460__1;
image34460.cljs$core$IFn$_invoke$arity$2 = image34460__2;
return image34460;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34460);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34461_SHARP_,p2__34462_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34461_SHARP_)+"["+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34462_SHARP_)+"]");
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34463_SHARP_,p2__34464_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__34463_SHARP_)+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__34464_SHARP_));
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field = (function input_field(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field34465 = (function() {
var hidden_field34465 = null;
var hidden_field34465__1 = (function (name){return hidden_field34465.call(null,name,null);
});
var hidden_field34465__2 = (function (name,value){return sablono.core.input_field.call(null,"hidden",name,value);
});
hidden_field34465 = function(name,value){
switch(arguments.length){
case 1:
return hidden_field34465__1.call(this,name);
case 2:
return hidden_field34465__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34465.cljs$core$IFn$_invoke$arity$1 = hidden_field34465__1;
hidden_field34465.cljs$core$IFn$_invoke$arity$2 = hidden_field34465__2;
return hidden_field34465;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34465);
/**
* Creates a new text input field.
*/
sablono.core.text_field34466 = (function() {
var text_field34466 = null;
var text_field34466__1 = (function (name){return text_field34466.call(null,name,null);
});
var text_field34466__2 = (function (name,value){return sablono.core.input_field.call(null,"text",name,value);
});
text_field34466 = function(name,value){
switch(arguments.length){
case 1:
return text_field34466__1.call(this,name);
case 2:
return text_field34466__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34466.cljs$core$IFn$_invoke$arity$1 = text_field34466__1;
text_field34466.cljs$core$IFn$_invoke$arity$2 = text_field34466__2;
return text_field34466;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34466);
/**
* Creates a new password field.
*/
sablono.core.password_field34467 = (function() {
var password_field34467 = null;
var password_field34467__1 = (function (name){return password_field34467.call(null,name,null);
});
var password_field34467__2 = (function (name,value){return sablono.core.input_field.call(null,"password",name,value);
});
password_field34467 = function(name,value){
switch(arguments.length){
case 1:
return password_field34467__1.call(this,name);
case 2:
return password_field34467__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34467.cljs$core$IFn$_invoke$arity$1 = password_field34467__1;
password_field34467.cljs$core$IFn$_invoke$arity$2 = password_field34467__2;
return password_field34467;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34467);
/**
* Creates a new email input field.
*/
sablono.core.email_field34468 = (function() {
var email_field34468 = null;
var email_field34468__1 = (function (name){return email_field34468.call(null,name,null);
});
var email_field34468__2 = (function (name,value){return sablono.core.input_field.call(null,"email",name,value);
});
email_field34468 = function(name,value){
switch(arguments.length){
case 1:
return email_field34468__1.call(this,name);
case 2:
return email_field34468__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34468.cljs$core$IFn$_invoke$arity$1 = email_field34468__1;
email_field34468.cljs$core$IFn$_invoke$arity$2 = email_field34468__2;
return email_field34468;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34468);
/**
* Creates a check box.
*/
sablono.core.check_box34469 = (function() {
var check_box34469 = null;
var check_box34469__1 = (function (name){return check_box34469.call(null,name,null);
});
var check_box34469__2 = (function (name,checked_QMARK_){return check_box34469.call(null,name,checked_QMARK_,"true");
});
var check_box34469__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box34469 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34469__1.call(this,name);
case 2:
return check_box34469__2.call(this,name,checked_QMARK_);
case 3:
return check_box34469__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34469.cljs$core$IFn$_invoke$arity$1 = check_box34469__1;
check_box34469.cljs$core$IFn$_invoke$arity$2 = check_box34469__2;
check_box34469.cljs$core$IFn$_invoke$arity$3 = check_box34469__3;
return check_box34469;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34469);
/**
* Creates a radio button.
*/
sablono.core.radio_button34470 = (function() {
var radio_button34470 = null;
var radio_button34470__1 = (function (group){return radio_button34470.call(null,group,null);
});
var radio_button34470__2 = (function (group,checked_QMARK_){return radio_button34470.call(null,group,checked_QMARK_,"true");
});
var radio_button34470__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group))+"-"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value)))),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button34470 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34470__1.call(this,group);
case 2:
return radio_button34470__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34470__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34470.cljs$core$IFn$_invoke$arity$1 = radio_button34470__1;
radio_button34470.cljs$core$IFn$_invoke$arity$2 = radio_button34470__2;
radio_button34470.cljs$core$IFn$_invoke$arity$3 = radio_button34470__3;
return radio_button34470;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34470);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34471 = (function() {
var select_options34471 = null;
var select_options34471__1 = (function (coll){return select_options34471.call(null,coll,null);
});
var select_options34471__2 = (function (coll,selected){var iter__4304__auto__ = (function iter__34480(s__34481){return (new cljs.core.LazySeq(null,(function (){var s__34481__$1 = s__34481;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34481__$1);if(temp__4126__auto__)
{var s__34481__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34481__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34481__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34483 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34482 = (0);while(true){
if((i__34482 < size__4303__auto__))
{var x = cljs.core._nth.call(null,c__4302__auto__,i__34482);cljs.core.chunk_append.call(null,b__34483,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34486 = x;var text = cljs.core.nth.call(null,vec__34486,(0),null);var val = cljs.core.nth.call(null,vec__34486,(1),null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options34471.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34488 = (i__34482 + (1));
i__34482 = G__34488;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34483),iter__34480.call(null,cljs.core.chunk_rest.call(null,s__34481__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34483),null);
}
} else
{var x = cljs.core.first.call(null,s__34481__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34487 = x;var text = cljs.core.nth.call(null,vec__34487,(0),null);var val = cljs.core.nth.call(null,vec__34487,(1),null);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options34471.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected)], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34480.call(null,cljs.core.rest.call(null,s__34481__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4304__auto__.call(null,coll);
});
select_options34471 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34471__1.call(this,coll);
case 2:
return select_options34471__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34471.cljs$core$IFn$_invoke$arity$1 = select_options34471__1;
select_options34471.cljs$core$IFn$_invoke$arity$2 = select_options34471__2;
return select_options34471;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34471);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34489 = (function() {
var drop_down34489 = null;
var drop_down34489__2 = (function (name,options){return drop_down34489.call(null,name,options,null);
});
var drop_down34489__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34489 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34489__2.call(this,name,options);
case 3:
return drop_down34489__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34489.cljs$core$IFn$_invoke$arity$2 = drop_down34489__2;
drop_down34489.cljs$core$IFn$_invoke$arity$3 = drop_down34489__3;
return drop_down34489;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34489);
/**
* Creates a text area element.
*/
sablono.core.text_area34490 = (function() {
var text_area34490 = null;
var text_area34490__1 = (function (name){return text_area34490.call(null,name,null);
});
var text_area34490__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area34490 = function(name,value){
switch(arguments.length){
case 1:
return text_area34490__1.call(this,name);
case 2:
return text_area34490__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34490.cljs$core$IFn$_invoke$arity$1 = text_area34490__1;
text_area34490.cljs$core$IFn$_invoke$arity$2 = text_area34490__2;
return text_area34490;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34490);
/**
* Creates a file upload input.
*/
sablono.core.file_upload34491 = (function file_upload34491(name){return sablono.core.input_field.call(null,"file",name,null);
});
sablono.core.file_upload = sablono.core.wrap_attrs.call(null,sablono.core.file_upload34491);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34492 = (function label34492(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34492);
/**
* Creates a submit button.
*/
sablono.core.submit_button34493 = (function submit_button34493(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34493);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34494 = (function reset_button34494(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34494);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34495 = (function() { 
var form_to34495__delegate = function (p__34496,body){var vec__34498 = p__34496;var method = cljs.core.nth.call(null,vec__34498,(0),null);var action = cljs.core.nth.call(null,vec__34498,(1),null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34495 = function (p__34496,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34495__delegate.call(this,p__34496,body);};
form_to34495.cljs$lang$maxFixedArity = 1;
form_to34495.cljs$lang$applyTo = (function (arglist__34499){
var p__34496 = cljs.core.first(arglist__34499);
var body = cljs.core.rest(arglist__34499);
return form_to34495__delegate(p__34496,body);
});
form_to34495.cljs$core$IFn$_invoke$arity$variadic = form_to34495__delegate;
return form_to34495;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34495);

//# sourceMappingURL=core.js.map