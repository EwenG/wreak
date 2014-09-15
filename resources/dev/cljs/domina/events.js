// Compiled by ClojureScript 0.0-2311
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj34519 = {};return obj34519;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.prevent_default[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.prevent_default["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.target[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.target["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.current_target[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.current_target["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.event_type[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.event_type["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3567__auto__ = evt;if(and__3567__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3567__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4206__auto__ = (((evt == null))?null:evt);return (function (){var or__3579__auto__ = (domina.events.raw_event[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (domina.events.raw_event["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t34523 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t34523 = (function (evt,f,create_listener_function,meta34524){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta34524 = meta34524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t34523.cljs$lang$type = true;
domina.events.t34523.cljs$lang$ctorStr = "domina.events/t34523";
domina.events.t34523.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"domina.events/t34523");
});
domina.events.t34523.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t34523.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3579__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return not_found;
}
});
domina.events.t34523.prototype.domina$events$Event$ = true;
domina.events.t34523.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t34523.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t34523.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t34523.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t34523.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t34523.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t34523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34525){var self__ = this;
var _34525__$1 = this;return self__.meta34524;
});
domina.events.t34523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34525,meta34524__$1){var self__ = this;
var _34525__$1 = this;return (new domina.events.t34523(self__.evt,self__.f,self__.create_listener_function,meta34524__$1));
});
domina.events.__GT_t34523 = (function __GT_t34523(evt__$1,f__$1,create_listener_function__$1,meta34524){return (new domina.events.t34523(evt__$1,f__$1,create_listener_function__$1,meta34524));
});
}
return (new domina.events.t34523(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4304__auto__ = ((function (f,t){
return (function iter__34530(s__34531){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__34531__$1 = s__34531;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34531__$1);if(temp__4126__auto__)
{var s__34531__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34531__$2))
{var c__4302__auto__ = cljs.core.chunk_first.call(null,s__34531__$2);var size__4303__auto__ = cljs.core.count.call(null,c__4302__auto__);var b__34533 = cljs.core.chunk_buffer.call(null,size__4303__auto__);if((function (){var i__34532 = (0);while(true){
if((i__34532 < size__4303__auto__))
{var node = cljs.core._nth.call(null,c__4302__auto__,i__34532);cljs.core.chunk_append.call(null,b__34533,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__34534 = (i__34532 + (1));
i__34532 = G__34534;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34533),iter__34530.call(null,cljs.core.chunk_rest.call(null,s__34531__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34533),null);
}
} else
{var node = cljs.core.first.call(null,s__34531__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__34530.call(null,cljs.core.rest.call(null,s__34531__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4304__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__34543 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34544 = null;var count__34545 = (0);var i__34546 = (0);while(true){
if((i__34546 < count__34545))
{var node = cljs.core._nth.call(null,chunk__34544,i__34546);goog.events.removeAll(node);
{
var G__34551 = seq__34543;
var G__34552 = chunk__34544;
var G__34553 = count__34545;
var G__34554 = (i__34546 + (1));
seq__34543 = G__34551;
chunk__34544 = G__34552;
count__34545 = G__34553;
i__34546 = G__34554;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__34543);if(temp__4126__auto__)
{var seq__34543__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34543__$1))
{var c__4335__auto__ = cljs.core.chunk_first.call(null,seq__34543__$1);{
var G__34555 = cljs.core.chunk_rest.call(null,seq__34543__$1);
var G__34556 = c__4335__auto__;
var G__34557 = cljs.core.count.call(null,c__4335__auto__);
var G__34558 = (0);
seq__34543 = G__34555;
chunk__34544 = G__34556;
count__34545 = G__34557;
i__34546 = G__34558;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34543__$1);goog.events.removeAll(node);
{
var G__34559 = cljs.core.next.call(null,seq__34543__$1);
var G__34560 = null;
var G__34561 = (0);
var G__34562 = (0);
seq__34543 = G__34559;
chunk__34544 = G__34560;
count__34545 = G__34561;
i__34546 = G__34562;
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
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__34547 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__34548 = null;var count__34549 = (0);var i__34550 = (0);while(true){
if((i__34550 < count__34549))
{var node = cljs.core._nth.call(null,chunk__34548,i__34550);goog.events.removeAll(node,type__$1);
{
var G__34563 = seq__34547;
var G__34564 = chunk__34548;
var G__34565 = count__34549;
var G__34566 = (i__34550 + (1));
seq__34547 = G__34563;
chunk__34548 = G__34564;
count__34549 = G__34565;
i__34550 = G__34566;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__34547);if(temp__4126__auto__)
{var seq__34547__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34547__$1))
{var c__4335__auto__ = cljs.core.chunk_first.call(null,seq__34547__$1);{
var G__34567 = cljs.core.chunk_rest.call(null,seq__34547__$1);
var G__34568 = c__4335__auto__;
var G__34569 = cljs.core.count.call(null,c__4335__auto__);
var G__34570 = (0);
seq__34547 = G__34567;
chunk__34548 = G__34568;
count__34549 = G__34569;
i__34550 = G__34570;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__34547__$1);goog.events.removeAll(node,type__$1);
{
var G__34571 = cljs.core.next.call(null,seq__34547__$1);
var G__34572 = null;
var G__34573 = (0);
var G__34574 = (0);
seq__34547 = G__34571;
chunk__34548 = G__34572;
count__34549 = G__34573;
i__34550 = G__34574;
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
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__34575 = parent;
var G__34576 = cljs.core.cons.call(null,parent,so_far);
n = G__34575;
so_far = G__34576;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__34585_34593 = cljs.core.seq.call(null,ancestors);var chunk__34586_34594 = null;var count__34587_34595 = (0);var i__34588_34596 = (0);while(true){
if((i__34588_34596 < count__34587_34595))
{var n_34597 = cljs.core._nth.call(null,chunk__34586_34594,i__34588_34596);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34597;
goog.events.fireListeners(n_34597,evt.type,true,evt);
}
{
var G__34598 = seq__34585_34593;
var G__34599 = chunk__34586_34594;
var G__34600 = count__34587_34595;
var G__34601 = (i__34588_34596 + (1));
seq__34585_34593 = G__34598;
chunk__34586_34594 = G__34599;
count__34587_34595 = G__34600;
i__34588_34596 = G__34601;
continue;
}
} else
{var temp__4126__auto___34602 = cljs.core.seq.call(null,seq__34585_34593);if(temp__4126__auto___34602)
{var seq__34585_34603__$1 = temp__4126__auto___34602;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34585_34603__$1))
{var c__4335__auto___34604 = cljs.core.chunk_first.call(null,seq__34585_34603__$1);{
var G__34605 = cljs.core.chunk_rest.call(null,seq__34585_34603__$1);
var G__34606 = c__4335__auto___34604;
var G__34607 = cljs.core.count.call(null,c__4335__auto___34604);
var G__34608 = (0);
seq__34585_34593 = G__34605;
chunk__34586_34594 = G__34606;
count__34587_34595 = G__34607;
i__34588_34596 = G__34608;
continue;
}
} else
{var n_34609 = cljs.core.first.call(null,seq__34585_34603__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34609;
goog.events.fireListeners(n_34609,evt.type,true,evt);
}
{
var G__34610 = cljs.core.next.call(null,seq__34585_34603__$1);
var G__34611 = null;
var G__34612 = (0);
var G__34613 = (0);
seq__34585_34593 = G__34610;
chunk__34586_34594 = G__34611;
count__34587_34595 = G__34612;
i__34588_34596 = G__34613;
continue;
}
}
} else
{}
}
break;
}
var seq__34589_34614 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__34590_34615 = null;var count__34591_34616 = (0);var i__34592_34617 = (0);while(true){
if((i__34592_34617 < count__34591_34616))
{var n_34618 = cljs.core._nth.call(null,chunk__34590_34615,i__34592_34617);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34618;
goog.events.fireListeners(n_34618,evt.type,false,evt);
}
{
var G__34619 = seq__34589_34614;
var G__34620 = chunk__34590_34615;
var G__34621 = count__34591_34616;
var G__34622 = (i__34592_34617 + (1));
seq__34589_34614 = G__34619;
chunk__34590_34615 = G__34620;
count__34591_34616 = G__34621;
i__34592_34617 = G__34622;
continue;
}
} else
{var temp__4126__auto___34623 = cljs.core.seq.call(null,seq__34589_34614);if(temp__4126__auto___34623)
{var seq__34589_34624__$1 = temp__4126__auto___34623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34589_34624__$1))
{var c__4335__auto___34625 = cljs.core.chunk_first.call(null,seq__34589_34624__$1);{
var G__34626 = cljs.core.chunk_rest.call(null,seq__34589_34624__$1);
var G__34627 = c__4335__auto___34625;
var G__34628 = cljs.core.count.call(null,c__4335__auto___34625);
var G__34629 = (0);
seq__34589_34614 = G__34626;
chunk__34590_34615 = G__34627;
count__34591_34616 = G__34628;
i__34592_34617 = G__34629;
continue;
}
} else
{var n_34630 = cljs.core.first.call(null,seq__34589_34624__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_34630;
goog.events.fireListeners(n_34630,evt.type,false,evt);
}
{
var G__34631 = cljs.core.next.call(null,seq__34589_34624__$1);
var G__34632 = null;
var G__34633 = (0);
var G__34634 = (0);
seq__34589_34614 = G__34631;
chunk__34590_34615 = G__34632;
count__34591_34616 = G__34633;
i__34592_34617 = G__34634;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3567__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3567__auto__))
{return o.dispatchEvent;
} else
{return and__3567__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__34641_34647 = cljs.core.seq.call(null,evt_map);var chunk__34642_34648 = null;var count__34643_34649 = (0);var i__34644_34650 = (0);while(true){
if((i__34644_34650 < count__34643_34649))
{var vec__34645_34651 = cljs.core._nth.call(null,chunk__34642_34648,i__34644_34650);var k_34652 = cljs.core.nth.call(null,vec__34645_34651,(0),null);var v_34653 = cljs.core.nth.call(null,vec__34645_34651,(1),null);(evt[k_34652] = v_34653);
{
var G__34654 = seq__34641_34647;
var G__34655 = chunk__34642_34648;
var G__34656 = count__34643_34649;
var G__34657 = (i__34644_34650 + (1));
seq__34641_34647 = G__34654;
chunk__34642_34648 = G__34655;
count__34643_34649 = G__34656;
i__34644_34650 = G__34657;
continue;
}
} else
{var temp__4126__auto___34658 = cljs.core.seq.call(null,seq__34641_34647);if(temp__4126__auto___34658)
{var seq__34641_34659__$1 = temp__4126__auto___34658;if(cljs.core.chunked_seq_QMARK_.call(null,seq__34641_34659__$1))
{var c__4335__auto___34660 = cljs.core.chunk_first.call(null,seq__34641_34659__$1);{
var G__34661 = cljs.core.chunk_rest.call(null,seq__34641_34659__$1);
var G__34662 = c__4335__auto___34660;
var G__34663 = cljs.core.count.call(null,c__4335__auto___34660);
var G__34664 = (0);
seq__34641_34647 = G__34661;
chunk__34642_34648 = G__34662;
count__34643_34649 = G__34663;
i__34644_34650 = G__34664;
continue;
}
} else
{var vec__34646_34665 = cljs.core.first.call(null,seq__34641_34659__$1);var k_34666 = cljs.core.nth.call(null,vec__34646_34665,(0),null);var v_34667 = cljs.core.nth.call(null,vec__34646_34665,(1),null);(evt[k_34666] = v_34667);
{
var G__34668 = cljs.core.next.call(null,seq__34641_34659__$1);
var G__34669 = null;
var G__34670 = (0);
var G__34671 = (0);
seq__34641_34647 = G__34668;
chunk__34642_34648 = G__34669;
count__34643_34649 = G__34670;
i__34644_34650 = G__34671;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__34672_SHARP_){return goog.events.getListeners(p1__34672_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map