// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31213 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31213 = (function (f,fn_handler,meta31214){
this.f = f;
this.fn_handler = fn_handler;
this.meta31214 = meta31214;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31213.cljs$lang$type = true;
cljs.core.async.t31213.cljs$lang$ctorStr = "cljs.core.async/t31213";
cljs.core.async.t31213.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t31213");
});
cljs.core.async.t31213.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31213.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31213.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31213.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31215){var self__ = this;
var _31215__$1 = this;return self__.meta31214;
});
cljs.core.async.t31213.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31215,meta31214__$1){var self__ = this;
var _31215__$1 = this;return (new cljs.core.async.t31213(self__.f,self__.fn_handler,meta31214__$1));
});
cljs.core.async.__GT_t31213 = (function __GT_t31213(f__$1,fn_handler__$1,meta31214){return (new cljs.core.async.t31213(f__$1,fn_handler__$1,meta31214));
});
}
return (new cljs.core.async.t31213(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31217 = buff;if(G__31217)
{var bit__4229__auto__ = null;if(cljs.core.truth_((function (){var or__3579__auto__ = bit__4229__auto__;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return G__31217.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31217.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31217);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31217);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_31218 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31218);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_31218,ret){
return (function (){return fn1.call(null,val_31218);
});})(val_31218,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4435__auto___31219 = n;var x_31220 = (0);while(true){
if((x_31220 < n__4435__auto___31219))
{(a[x_31220] = (0));
{
var G__31221 = (x_31220 + (1));
x_31220 = G__31221;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__31222 = (i + (1));
i = G__31222;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31226 = (function (flag,alt_flag,meta31227){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31227 = meta31227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31226.cljs$lang$type = true;
cljs.core.async.t31226.cljs$lang$ctorStr = "cljs.core.async/t31226";
cljs.core.async.t31226.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t31226");
});})(flag))
;
cljs.core.async.t31226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t31226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t31226.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_31228){var self__ = this;
var _31228__$1 = this;return self__.meta31227;
});})(flag))
;
cljs.core.async.t31226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_31228,meta31227__$1){var self__ = this;
var _31228__$1 = this;return (new cljs.core.async.t31226(self__.flag,self__.alt_flag,meta31227__$1));
});})(flag))
;
cljs.core.async.__GT_t31226 = ((function (flag){
return (function __GT_t31226(flag__$1,alt_flag__$1,meta31227){return (new cljs.core.async.t31226(flag__$1,alt_flag__$1,meta31227));
});})(flag))
;
}
return (new cljs.core.async.t31226(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31232 = (function (cb,flag,alt_handler,meta31233){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31233 = meta31233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31232.cljs$lang$type = true;
cljs.core.async.t31232.cljs$lang$ctorStr = "cljs.core.async/t31232";
cljs.core.async.t31232.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t31232");
});
cljs.core.async.t31232.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31234){var self__ = this;
var _31234__$1 = this;return self__.meta31233;
});
cljs.core.async.t31232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31234,meta31233__$1){var self__ = this;
var _31234__$1 = this;return (new cljs.core.async.t31232(self__.cb,self__.flag,self__.alt_handler,meta31233__$1));
});
cljs.core.async.__GT_t31232 = (function __GT_t31232(cb__$1,flag__$1,alt_handler__$1,meta31233){return (new cljs.core.async.t31232(cb__$1,flag__$1,alt_handler__$1,meta31233));
});
}
return (new cljs.core.async.t31232(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31235_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31235_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__31236_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31236_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3579__auto__ = wport;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31237 = (i + (1));
i = G__31237;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3579__auto__ = ret;if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3567__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3567__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3567__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__31238){var map__31240 = p__31238;var map__31240__$1 = ((cljs.core.seq_QMARK_.call(null,map__31240))?cljs.core.apply.call(null,cljs.core.hash_map,map__31240):map__31240);var opts = map__31240__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__31238 = null;if (arguments.length > 1) {
  p__31238 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31238);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31241){
var ports = cljs.core.first(arglist__31241);
var p__31238 = cljs.core.rest(arglist__31241);
return alts_BANG___delegate(ports,p__31238);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6307__auto___31336 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___31336){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___31336){
return (function (state_31312){var state_val_31313 = (state_31312[(1)]);if((state_val_31313 === (7)))
{var inst_31308 = (state_31312[(2)]);var state_31312__$1 = state_31312;var statearr_31314_31337 = state_31312__$1;(statearr_31314_31337[(2)] = inst_31308);
(statearr_31314_31337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (1)))
{var state_31312__$1 = state_31312;var statearr_31315_31338 = state_31312__$1;(statearr_31315_31338[(2)] = null);
(statearr_31315_31338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (4)))
{var inst_31291 = (state_31312[(7)]);var inst_31291__$1 = (state_31312[(2)]);var inst_31292 = (inst_31291__$1 == null);var state_31312__$1 = (function (){var statearr_31316 = state_31312;(statearr_31316[(7)] = inst_31291__$1);
return statearr_31316;
})();if(cljs.core.truth_(inst_31292))
{var statearr_31317_31339 = state_31312__$1;(statearr_31317_31339[(1)] = (5));
} else
{var statearr_31318_31340 = state_31312__$1;(statearr_31318_31340[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (13)))
{var state_31312__$1 = state_31312;var statearr_31319_31341 = state_31312__$1;(statearr_31319_31341[(2)] = null);
(statearr_31319_31341[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (6)))
{var inst_31291 = (state_31312[(7)]);var state_31312__$1 = state_31312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31312__$1,(11),to,inst_31291);
} else
{if((state_val_31313 === (3)))
{var inst_31310 = (state_31312[(2)]);var state_31312__$1 = state_31312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31312__$1,inst_31310);
} else
{if((state_val_31313 === (12)))
{var state_31312__$1 = state_31312;var statearr_31320_31342 = state_31312__$1;(statearr_31320_31342[(2)] = null);
(statearr_31320_31342[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (2)))
{var state_31312__$1 = state_31312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31312__$1,(4),from);
} else
{if((state_val_31313 === (11)))
{var inst_31301 = (state_31312[(2)]);var state_31312__$1 = state_31312;if(cljs.core.truth_(inst_31301))
{var statearr_31321_31343 = state_31312__$1;(statearr_31321_31343[(1)] = (12));
} else
{var statearr_31322_31344 = state_31312__$1;(statearr_31322_31344[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (9)))
{var state_31312__$1 = state_31312;var statearr_31323_31345 = state_31312__$1;(statearr_31323_31345[(2)] = null);
(statearr_31323_31345[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (5)))
{var state_31312__$1 = state_31312;if(cljs.core.truth_(close_QMARK_))
{var statearr_31324_31346 = state_31312__$1;(statearr_31324_31346[(1)] = (8));
} else
{var statearr_31325_31347 = state_31312__$1;(statearr_31325_31347[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (14)))
{var inst_31306 = (state_31312[(2)]);var state_31312__$1 = state_31312;var statearr_31326_31348 = state_31312__$1;(statearr_31326_31348[(2)] = inst_31306);
(statearr_31326_31348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (10)))
{var inst_31298 = (state_31312[(2)]);var state_31312__$1 = state_31312;var statearr_31327_31349 = state_31312__$1;(statearr_31327_31349[(2)] = inst_31298);
(statearr_31327_31349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31313 === (8)))
{var inst_31295 = cljs.core.async.close_BANG_.call(null,to);var state_31312__$1 = state_31312;var statearr_31328_31350 = state_31312__$1;(statearr_31328_31350[(2)] = inst_31295);
(statearr_31328_31350[(1)] = (10));
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
}
}
}
}
}
}
}
});})(c__6307__auto___31336))
;return ((function (switch__6292__auto__,c__6307__auto___31336){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31332 = [null,null,null,null,null,null,null,null];(statearr_31332[(0)] = state_machine__6293__auto__);
(statearr_31332[(1)] = (1));
return statearr_31332;
});
var state_machine__6293__auto____1 = (function (state_31312){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31312);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31333){if((e31333 instanceof Object))
{var ex__6296__auto__ = e31333;var statearr_31334_31351 = state_31312;(statearr_31334_31351[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31333;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31352 = state_31312;
state_31312 = G__31352;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31312){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___31336))
})();var state__6309__auto__ = (function (){var statearr_31335 = f__6308__auto__.call(null);(statearr_31335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31336);
return statearr_31335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___31336))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__31536){var vec__31537 = p__31536;var v = cljs.core.nth.call(null,vec__31537,(0),null);var p = cljs.core.nth.call(null,vec__31537,(1),null);var job = vec__31537;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6307__auto___31719 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results){
return (function (state_31542){var state_val_31543 = (state_31542[(1)]);if((state_val_31543 === (2)))
{var inst_31539 = (state_31542[(2)]);var inst_31540 = cljs.core.async.close_BANG_.call(null,res);var state_31542__$1 = (function (){var statearr_31544 = state_31542;(statearr_31544[(7)] = inst_31539);
return statearr_31544;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31542__$1,inst_31540);
} else
{if((state_val_31543 === (1)))
{var state_31542__$1 = state_31542;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31542__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results))
;return ((function (switch__6292__auto__,c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31548 = [null,null,null,null,null,null,null,null];(statearr_31548[(0)] = state_machine__6293__auto__);
(statearr_31548[(1)] = (1));
return statearr_31548;
});
var state_machine__6293__auto____1 = (function (state_31542){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31542);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31549){if((e31549 instanceof Object))
{var ex__6296__auto__ = e31549;var statearr_31550_31720 = state_31542;(statearr_31550_31720[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31542);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31549;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31721 = state_31542;
state_31542 = G__31721;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31542){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31542);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results))
})();var state__6309__auto__ = (function (){var statearr_31551 = f__6308__auto__.call(null);(statearr_31551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31719);
return statearr_31551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___31719,res,vec__31537,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__31552){var vec__31553 = p__31552;var v = cljs.core.nth.call(null,vec__31553,(0),null);var p = cljs.core.nth.call(null,vec__31553,(1),null);var job = vec__31553;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4435__auto___31722 = n;var __31723 = (0);while(true){
if((__31723 < n__4435__auto___31722))
{var G__31554_31724 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__31554_31724) {
case "async":
var c__6307__auto___31726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__31723,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (__31723,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function (state_31567){var state_val_31568 = (state_31567[(1)]);if((state_val_31568 === (7)))
{var inst_31563 = (state_31567[(2)]);var state_31567__$1 = state_31567;var statearr_31569_31727 = state_31567__$1;(statearr_31569_31727[(2)] = inst_31563);
(statearr_31569_31727[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31568 === (6)))
{var state_31567__$1 = state_31567;var statearr_31570_31728 = state_31567__$1;(statearr_31570_31728[(2)] = null);
(statearr_31570_31728[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31568 === (5)))
{var state_31567__$1 = state_31567;var statearr_31571_31729 = state_31567__$1;(statearr_31571_31729[(2)] = null);
(statearr_31571_31729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31568 === (4)))
{var inst_31557 = (state_31567[(2)]);var inst_31558 = async.call(null,inst_31557);var state_31567__$1 = state_31567;if(cljs.core.truth_(inst_31558))
{var statearr_31572_31730 = state_31567__$1;(statearr_31572_31730[(1)] = (5));
} else
{var statearr_31573_31731 = state_31567__$1;(statearr_31573_31731[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31568 === (3)))
{var inst_31565 = (state_31567[(2)]);var state_31567__$1 = state_31567;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31567__$1,inst_31565);
} else
{if((state_val_31568 === (2)))
{var state_31567__$1 = state_31567;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31567__$1,(4),jobs);
} else
{if((state_val_31568 === (1)))
{var state_31567__$1 = state_31567;var statearr_31574_31732 = state_31567__$1;(statearr_31574_31732[(2)] = null);
(statearr_31574_31732[(1)] = (2));
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
});})(__31723,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
;return ((function (__31723,switch__6292__auto__,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31578 = [null,null,null,null,null,null,null];(statearr_31578[(0)] = state_machine__6293__auto__);
(statearr_31578[(1)] = (1));
return statearr_31578;
});
var state_machine__6293__auto____1 = (function (state_31567){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31567);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31579){if((e31579 instanceof Object))
{var ex__6296__auto__ = e31579;var statearr_31580_31733 = state_31567;(statearr_31580_31733[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31567);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31579;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31734 = state_31567;
state_31567 = G__31734;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31567){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(__31723,switch__6292__auto__,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
})();var state__6309__auto__ = (function (){var statearr_31581 = f__6308__auto__.call(null);(statearr_31581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31726);
return statearr_31581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(__31723,c__6307__auto___31726,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
);

break;
case "compute":
var c__6307__auto___31735 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__31723,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (__31723,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function (state_31594){var state_val_31595 = (state_31594[(1)]);if((state_val_31595 === (7)))
{var inst_31590 = (state_31594[(2)]);var state_31594__$1 = state_31594;var statearr_31596_31736 = state_31594__$1;(statearr_31596_31736[(2)] = inst_31590);
(statearr_31596_31736[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31595 === (6)))
{var state_31594__$1 = state_31594;var statearr_31597_31737 = state_31594__$1;(statearr_31597_31737[(2)] = null);
(statearr_31597_31737[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31595 === (5)))
{var state_31594__$1 = state_31594;var statearr_31598_31738 = state_31594__$1;(statearr_31598_31738[(2)] = null);
(statearr_31598_31738[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31595 === (4)))
{var inst_31584 = (state_31594[(2)]);var inst_31585 = process.call(null,inst_31584);var state_31594__$1 = state_31594;if(cljs.core.truth_(inst_31585))
{var statearr_31599_31739 = state_31594__$1;(statearr_31599_31739[(1)] = (5));
} else
{var statearr_31600_31740 = state_31594__$1;(statearr_31600_31740[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31595 === (3)))
{var inst_31592 = (state_31594[(2)]);var state_31594__$1 = state_31594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31594__$1,inst_31592);
} else
{if((state_val_31595 === (2)))
{var state_31594__$1 = state_31594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31594__$1,(4),jobs);
} else
{if((state_val_31595 === (1)))
{var state_31594__$1 = state_31594;var statearr_31601_31741 = state_31594__$1;(statearr_31601_31741[(2)] = null);
(statearr_31601_31741[(1)] = (2));
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
});})(__31723,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
;return ((function (__31723,switch__6292__auto__,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31605 = [null,null,null,null,null,null,null];(statearr_31605[(0)] = state_machine__6293__auto__);
(statearr_31605[(1)] = (1));
return statearr_31605;
});
var state_machine__6293__auto____1 = (function (state_31594){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31606){if((e31606 instanceof Object))
{var ex__6296__auto__ = e31606;var statearr_31607_31742 = state_31594;(statearr_31607_31742[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31594);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31606;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31743 = state_31594;
state_31594 = G__31743;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31594){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(__31723,switch__6292__auto__,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
})();var state__6309__auto__ = (function (){var statearr_31608 = f__6308__auto__.call(null);(statearr_31608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31735);
return statearr_31608;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(__31723,c__6307__auto___31735,G__31554_31724,n__4435__auto___31722,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__31744 = (__31723 + (1));
__31723 = G__31744;
continue;
}
} else
{}
break;
}
var c__6307__auto___31745 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___31745,jobs,results,process,async){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___31745,jobs,results,process,async){
return (function (state_31630){var state_val_31631 = (state_31630[(1)]);if((state_val_31631 === (9)))
{var inst_31623 = (state_31630[(2)]);var state_31630__$1 = (function (){var statearr_31632 = state_31630;(statearr_31632[(7)] = inst_31623);
return statearr_31632;
})();var statearr_31633_31746 = state_31630__$1;(statearr_31633_31746[(2)] = null);
(statearr_31633_31746[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (8)))
{var inst_31616 = (state_31630[(8)]);var inst_31621 = (state_31630[(2)]);var state_31630__$1 = (function (){var statearr_31634 = state_31630;(statearr_31634[(9)] = inst_31621);
return statearr_31634;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31630__$1,(9),results,inst_31616);
} else
{if((state_val_31631 === (7)))
{var inst_31626 = (state_31630[(2)]);var state_31630__$1 = state_31630;var statearr_31635_31747 = state_31630__$1;(statearr_31635_31747[(2)] = inst_31626);
(statearr_31635_31747[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (6)))
{var inst_31611 = (state_31630[(10)]);var inst_31616 = (state_31630[(8)]);var inst_31616__$1 = cljs.core.async.chan.call(null,(1));var inst_31617 = cljs.core.PersistentVector.EMPTY_NODE;var inst_31618 = [inst_31611,inst_31616__$1];var inst_31619 = (new cljs.core.PersistentVector(null,2,(5),inst_31617,inst_31618,null));var state_31630__$1 = (function (){var statearr_31636 = state_31630;(statearr_31636[(8)] = inst_31616__$1);
return statearr_31636;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31630__$1,(8),jobs,inst_31619);
} else
{if((state_val_31631 === (5)))
{var inst_31614 = cljs.core.async.close_BANG_.call(null,jobs);var state_31630__$1 = state_31630;var statearr_31637_31748 = state_31630__$1;(statearr_31637_31748[(2)] = inst_31614);
(statearr_31637_31748[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (4)))
{var inst_31611 = (state_31630[(10)]);var inst_31611__$1 = (state_31630[(2)]);var inst_31612 = (inst_31611__$1 == null);var state_31630__$1 = (function (){var statearr_31638 = state_31630;(statearr_31638[(10)] = inst_31611__$1);
return statearr_31638;
})();if(cljs.core.truth_(inst_31612))
{var statearr_31639_31749 = state_31630__$1;(statearr_31639_31749[(1)] = (5));
} else
{var statearr_31640_31750 = state_31630__$1;(statearr_31640_31750[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31631 === (3)))
{var inst_31628 = (state_31630[(2)]);var state_31630__$1 = state_31630;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31630__$1,inst_31628);
} else
{if((state_val_31631 === (2)))
{var state_31630__$1 = state_31630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31630__$1,(4),from);
} else
{if((state_val_31631 === (1)))
{var state_31630__$1 = state_31630;var statearr_31641_31751 = state_31630__$1;(statearr_31641_31751[(2)] = null);
(statearr_31641_31751[(1)] = (2));
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
}
}
});})(c__6307__auto___31745,jobs,results,process,async))
;return ((function (switch__6292__auto__,c__6307__auto___31745,jobs,results,process,async){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31645 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31645[(0)] = state_machine__6293__auto__);
(statearr_31645[(1)] = (1));
return statearr_31645;
});
var state_machine__6293__auto____1 = (function (state_31630){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31630);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31646){if((e31646 instanceof Object))
{var ex__6296__auto__ = e31646;var statearr_31647_31752 = state_31630;(statearr_31647_31752[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31630);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31646;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31753 = state_31630;
state_31630 = G__31753;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31630){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___31745,jobs,results,process,async))
})();var state__6309__auto__ = (function (){var statearr_31648 = f__6308__auto__.call(null);(statearr_31648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31745);
return statearr_31648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___31745,jobs,results,process,async))
);
var c__6307__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto__,jobs,results,process,async){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto__,jobs,results,process,async){
return (function (state_31686){var state_val_31687 = (state_31686[(1)]);if((state_val_31687 === (7)))
{var inst_31682 = (state_31686[(2)]);var state_31686__$1 = state_31686;var statearr_31688_31754 = state_31686__$1;(statearr_31688_31754[(2)] = inst_31682);
(statearr_31688_31754[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (20)))
{var state_31686__$1 = state_31686;var statearr_31689_31755 = state_31686__$1;(statearr_31689_31755[(2)] = null);
(statearr_31689_31755[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (1)))
{var state_31686__$1 = state_31686;var statearr_31690_31756 = state_31686__$1;(statearr_31690_31756[(2)] = null);
(statearr_31690_31756[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (4)))
{var inst_31651 = (state_31686[(7)]);var inst_31651__$1 = (state_31686[(2)]);var inst_31652 = (inst_31651__$1 == null);var state_31686__$1 = (function (){var statearr_31691 = state_31686;(statearr_31691[(7)] = inst_31651__$1);
return statearr_31691;
})();if(cljs.core.truth_(inst_31652))
{var statearr_31692_31757 = state_31686__$1;(statearr_31692_31757[(1)] = (5));
} else
{var statearr_31693_31758 = state_31686__$1;(statearr_31693_31758[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (15)))
{var inst_31664 = (state_31686[(8)]);var state_31686__$1 = state_31686;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31686__$1,(18),to,inst_31664);
} else
{if((state_val_31687 === (21)))
{var inst_31677 = (state_31686[(2)]);var state_31686__$1 = state_31686;var statearr_31694_31759 = state_31686__$1;(statearr_31694_31759[(2)] = inst_31677);
(statearr_31694_31759[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (13)))
{var inst_31679 = (state_31686[(2)]);var state_31686__$1 = (function (){var statearr_31695 = state_31686;(statearr_31695[(9)] = inst_31679);
return statearr_31695;
})();var statearr_31696_31760 = state_31686__$1;(statearr_31696_31760[(2)] = null);
(statearr_31696_31760[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (6)))
{var inst_31651 = (state_31686[(7)]);var state_31686__$1 = state_31686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(11),inst_31651);
} else
{if((state_val_31687 === (17)))
{var inst_31672 = (state_31686[(2)]);var state_31686__$1 = state_31686;if(cljs.core.truth_(inst_31672))
{var statearr_31697_31761 = state_31686__$1;(statearr_31697_31761[(1)] = (19));
} else
{var statearr_31698_31762 = state_31686__$1;(statearr_31698_31762[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (3)))
{var inst_31684 = (state_31686[(2)]);var state_31686__$1 = state_31686;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31686__$1,inst_31684);
} else
{if((state_val_31687 === (12)))
{var inst_31661 = (state_31686[(10)]);var state_31686__$1 = state_31686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(14),inst_31661);
} else
{if((state_val_31687 === (2)))
{var state_31686__$1 = state_31686;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31686__$1,(4),results);
} else
{if((state_val_31687 === (19)))
{var state_31686__$1 = state_31686;var statearr_31699_31763 = state_31686__$1;(statearr_31699_31763[(2)] = null);
(statearr_31699_31763[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (11)))
{var inst_31661 = (state_31686[(2)]);var state_31686__$1 = (function (){var statearr_31700 = state_31686;(statearr_31700[(10)] = inst_31661);
return statearr_31700;
})();var statearr_31701_31764 = state_31686__$1;(statearr_31701_31764[(2)] = null);
(statearr_31701_31764[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (9)))
{var state_31686__$1 = state_31686;var statearr_31702_31765 = state_31686__$1;(statearr_31702_31765[(2)] = null);
(statearr_31702_31765[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (5)))
{var state_31686__$1 = state_31686;if(cljs.core.truth_(close_QMARK_))
{var statearr_31703_31766 = state_31686__$1;(statearr_31703_31766[(1)] = (8));
} else
{var statearr_31704_31767 = state_31686__$1;(statearr_31704_31767[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (14)))
{var inst_31664 = (state_31686[(8)]);var inst_31666 = (state_31686[(11)]);var inst_31664__$1 = (state_31686[(2)]);var inst_31665 = (inst_31664__$1 == null);var inst_31666__$1 = cljs.core.not.call(null,inst_31665);var state_31686__$1 = (function (){var statearr_31705 = state_31686;(statearr_31705[(8)] = inst_31664__$1);
(statearr_31705[(11)] = inst_31666__$1);
return statearr_31705;
})();if(inst_31666__$1)
{var statearr_31706_31768 = state_31686__$1;(statearr_31706_31768[(1)] = (15));
} else
{var statearr_31707_31769 = state_31686__$1;(statearr_31707_31769[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (16)))
{var inst_31666 = (state_31686[(11)]);var state_31686__$1 = state_31686;var statearr_31708_31770 = state_31686__$1;(statearr_31708_31770[(2)] = inst_31666);
(statearr_31708_31770[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (10)))
{var inst_31658 = (state_31686[(2)]);var state_31686__$1 = state_31686;var statearr_31709_31771 = state_31686__$1;(statearr_31709_31771[(2)] = inst_31658);
(statearr_31709_31771[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (18)))
{var inst_31669 = (state_31686[(2)]);var state_31686__$1 = state_31686;var statearr_31710_31772 = state_31686__$1;(statearr_31710_31772[(2)] = inst_31669);
(statearr_31710_31772[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31687 === (8)))
{var inst_31655 = cljs.core.async.close_BANG_.call(null,to);var state_31686__$1 = state_31686;var statearr_31711_31773 = state_31686__$1;(statearr_31711_31773[(2)] = inst_31655);
(statearr_31711_31773[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6307__auto__,jobs,results,process,async))
;return ((function (switch__6292__auto__,c__6307__auto__,jobs,results,process,async){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31715 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31715[(0)] = state_machine__6293__auto__);
(statearr_31715[(1)] = (1));
return statearr_31715;
});
var state_machine__6293__auto____1 = (function (state_31686){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31686);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31716){if((e31716 instanceof Object))
{var ex__6296__auto__ = e31716;var statearr_31717_31774 = state_31686;(statearr_31717_31774[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31686);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31716;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31775 = state_31686;
state_31686 = G__31775;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31686){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31686);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto__,jobs,results,process,async))
})();var state__6309__auto__ = (function (){var statearr_31718 = f__6308__auto__.call(null);(statearr_31718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto__);
return statearr_31718;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto__,jobs,results,process,async))
);
return c__6307__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6307__auto___31876 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___31876,tc,fc){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___31876,tc,fc){
return (function (state_31851){var state_val_31852 = (state_31851[(1)]);if((state_val_31852 === (7)))
{var inst_31847 = (state_31851[(2)]);var state_31851__$1 = state_31851;var statearr_31853_31877 = state_31851__$1;(statearr_31853_31877[(2)] = inst_31847);
(statearr_31853_31877[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (1)))
{var state_31851__$1 = state_31851;var statearr_31854_31878 = state_31851__$1;(statearr_31854_31878[(2)] = null);
(statearr_31854_31878[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (4)))
{var inst_31828 = (state_31851[(7)]);var inst_31828__$1 = (state_31851[(2)]);var inst_31829 = (inst_31828__$1 == null);var state_31851__$1 = (function (){var statearr_31855 = state_31851;(statearr_31855[(7)] = inst_31828__$1);
return statearr_31855;
})();if(cljs.core.truth_(inst_31829))
{var statearr_31856_31879 = state_31851__$1;(statearr_31856_31879[(1)] = (5));
} else
{var statearr_31857_31880 = state_31851__$1;(statearr_31857_31880[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (13)))
{var state_31851__$1 = state_31851;var statearr_31858_31881 = state_31851__$1;(statearr_31858_31881[(2)] = null);
(statearr_31858_31881[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (6)))
{var inst_31828 = (state_31851[(7)]);var inst_31834 = p.call(null,inst_31828);var state_31851__$1 = state_31851;if(cljs.core.truth_(inst_31834))
{var statearr_31859_31882 = state_31851__$1;(statearr_31859_31882[(1)] = (9));
} else
{var statearr_31860_31883 = state_31851__$1;(statearr_31860_31883[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (3)))
{var inst_31849 = (state_31851[(2)]);var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31851__$1,inst_31849);
} else
{if((state_val_31852 === (12)))
{var state_31851__$1 = state_31851;var statearr_31861_31884 = state_31851__$1;(statearr_31861_31884[(2)] = null);
(statearr_31861_31884[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (2)))
{var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31851__$1,(4),ch);
} else
{if((state_val_31852 === (11)))
{var inst_31828 = (state_31851[(7)]);var inst_31838 = (state_31851[(2)]);var state_31851__$1 = state_31851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31851__$1,(8),inst_31838,inst_31828);
} else
{if((state_val_31852 === (9)))
{var state_31851__$1 = state_31851;var statearr_31862_31885 = state_31851__$1;(statearr_31862_31885[(2)] = tc);
(statearr_31862_31885[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (5)))
{var inst_31831 = cljs.core.async.close_BANG_.call(null,tc);var inst_31832 = cljs.core.async.close_BANG_.call(null,fc);var state_31851__$1 = (function (){var statearr_31863 = state_31851;(statearr_31863[(8)] = inst_31831);
return statearr_31863;
})();var statearr_31864_31886 = state_31851__$1;(statearr_31864_31886[(2)] = inst_31832);
(statearr_31864_31886[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (14)))
{var inst_31845 = (state_31851[(2)]);var state_31851__$1 = state_31851;var statearr_31865_31887 = state_31851__$1;(statearr_31865_31887[(2)] = inst_31845);
(statearr_31865_31887[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (10)))
{var state_31851__$1 = state_31851;var statearr_31866_31888 = state_31851__$1;(statearr_31866_31888[(2)] = fc);
(statearr_31866_31888[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31852 === (8)))
{var inst_31840 = (state_31851[(2)]);var state_31851__$1 = state_31851;if(cljs.core.truth_(inst_31840))
{var statearr_31867_31889 = state_31851__$1;(statearr_31867_31889[(1)] = (12));
} else
{var statearr_31868_31890 = state_31851__$1;(statearr_31868_31890[(1)] = (13));
}
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
}
}
}
}
}
}
}
});})(c__6307__auto___31876,tc,fc))
;return ((function (switch__6292__auto__,c__6307__auto___31876,tc,fc){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31872 = [null,null,null,null,null,null,null,null,null];(statearr_31872[(0)] = state_machine__6293__auto__);
(statearr_31872[(1)] = (1));
return statearr_31872;
});
var state_machine__6293__auto____1 = (function (state_31851){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31851);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31873){if((e31873 instanceof Object))
{var ex__6296__auto__ = e31873;var statearr_31874_31891 = state_31851;(statearr_31874_31891[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31851);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31873;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31892 = state_31851;
state_31851 = G__31892;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31851){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___31876,tc,fc))
})();var state__6309__auto__ = (function (){var statearr_31875 = f__6308__auto__.call(null);(statearr_31875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___31876);
return statearr_31875;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___31876,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6307__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto__){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto__){
return (function (state_31939){var state_val_31940 = (state_31939[(1)]);if((state_val_31940 === (7)))
{var inst_31935 = (state_31939[(2)]);var state_31939__$1 = state_31939;var statearr_31941_31957 = state_31939__$1;(statearr_31941_31957[(2)] = inst_31935);
(statearr_31941_31957[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31940 === (6)))
{var inst_31928 = (state_31939[(7)]);var inst_31925 = (state_31939[(8)]);var inst_31932 = f.call(null,inst_31925,inst_31928);var inst_31925__$1 = inst_31932;var state_31939__$1 = (function (){var statearr_31942 = state_31939;(statearr_31942[(8)] = inst_31925__$1);
return statearr_31942;
})();var statearr_31943_31958 = state_31939__$1;(statearr_31943_31958[(2)] = null);
(statearr_31943_31958[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31940 === (5)))
{var inst_31925 = (state_31939[(8)]);var state_31939__$1 = state_31939;var statearr_31944_31959 = state_31939__$1;(statearr_31944_31959[(2)] = inst_31925);
(statearr_31944_31959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31940 === (4)))
{var inst_31928 = (state_31939[(7)]);var inst_31928__$1 = (state_31939[(2)]);var inst_31929 = (inst_31928__$1 == null);var state_31939__$1 = (function (){var statearr_31945 = state_31939;(statearr_31945[(7)] = inst_31928__$1);
return statearr_31945;
})();if(cljs.core.truth_(inst_31929))
{var statearr_31946_31960 = state_31939__$1;(statearr_31946_31960[(1)] = (5));
} else
{var statearr_31947_31961 = state_31939__$1;(statearr_31947_31961[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_31940 === (3)))
{var inst_31937 = (state_31939[(2)]);var state_31939__$1 = state_31939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31939__$1,inst_31937);
} else
{if((state_val_31940 === (2)))
{var state_31939__$1 = state_31939;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31939__$1,(4),ch);
} else
{if((state_val_31940 === (1)))
{var inst_31925 = init;var state_31939__$1 = (function (){var statearr_31948 = state_31939;(statearr_31948[(8)] = inst_31925);
return statearr_31948;
})();var statearr_31949_31962 = state_31939__$1;(statearr_31949_31962[(2)] = null);
(statearr_31949_31962[(1)] = (2));
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
});})(c__6307__auto__))
;return ((function (switch__6292__auto__,c__6307__auto__){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_31953 = [null,null,null,null,null,null,null,null,null];(statearr_31953[(0)] = state_machine__6293__auto__);
(statearr_31953[(1)] = (1));
return statearr_31953;
});
var state_machine__6293__auto____1 = (function (state_31939){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_31939);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e31954){if((e31954 instanceof Object))
{var ex__6296__auto__ = e31954;var statearr_31955_31963 = state_31939;(statearr_31955_31963[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31939);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e31954;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__31964 = state_31939;
state_31939 = G__31964;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_31939){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_31939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto__))
})();var state__6309__auto__ = (function (){var statearr_31956 = f__6308__auto__.call(null);(statearr_31956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto__);
return statearr_31956;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto__))
);
return c__6307__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6307__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto__){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto__){
return (function (state_32038){var state_val_32039 = (state_32038[(1)]);if((state_val_32039 === (7)))
{var inst_32020 = (state_32038[(2)]);var state_32038__$1 = state_32038;var statearr_32040_32063 = state_32038__$1;(statearr_32040_32063[(2)] = inst_32020);
(statearr_32040_32063[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (1)))
{var inst_32014 = cljs.core.seq.call(null,coll);var inst_32015 = inst_32014;var state_32038__$1 = (function (){var statearr_32041 = state_32038;(statearr_32041[(7)] = inst_32015);
return statearr_32041;
})();var statearr_32042_32064 = state_32038__$1;(statearr_32042_32064[(2)] = null);
(statearr_32042_32064[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (4)))
{var inst_32015 = (state_32038[(7)]);var inst_32018 = cljs.core.first.call(null,inst_32015);var state_32038__$1 = state_32038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32038__$1,(7),ch,inst_32018);
} else
{if((state_val_32039 === (13)))
{var inst_32032 = (state_32038[(2)]);var state_32038__$1 = state_32038;var statearr_32043_32065 = state_32038__$1;(statearr_32043_32065[(2)] = inst_32032);
(statearr_32043_32065[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (6)))
{var inst_32023 = (state_32038[(2)]);var state_32038__$1 = state_32038;if(cljs.core.truth_(inst_32023))
{var statearr_32044_32066 = state_32038__$1;(statearr_32044_32066[(1)] = (8));
} else
{var statearr_32045_32067 = state_32038__$1;(statearr_32045_32067[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (3)))
{var inst_32036 = (state_32038[(2)]);var state_32038__$1 = state_32038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32038__$1,inst_32036);
} else
{if((state_val_32039 === (12)))
{var state_32038__$1 = state_32038;var statearr_32046_32068 = state_32038__$1;(statearr_32046_32068[(2)] = null);
(statearr_32046_32068[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (2)))
{var inst_32015 = (state_32038[(7)]);var state_32038__$1 = state_32038;if(cljs.core.truth_(inst_32015))
{var statearr_32047_32069 = state_32038__$1;(statearr_32047_32069[(1)] = (4));
} else
{var statearr_32048_32070 = state_32038__$1;(statearr_32048_32070[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (11)))
{var inst_32029 = cljs.core.async.close_BANG_.call(null,ch);var state_32038__$1 = state_32038;var statearr_32049_32071 = state_32038__$1;(statearr_32049_32071[(2)] = inst_32029);
(statearr_32049_32071[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (9)))
{var state_32038__$1 = state_32038;if(cljs.core.truth_(close_QMARK_))
{var statearr_32050_32072 = state_32038__$1;(statearr_32050_32072[(1)] = (11));
} else
{var statearr_32051_32073 = state_32038__$1;(statearr_32051_32073[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (5)))
{var inst_32015 = (state_32038[(7)]);var state_32038__$1 = state_32038;var statearr_32052_32074 = state_32038__$1;(statearr_32052_32074[(2)] = inst_32015);
(statearr_32052_32074[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (10)))
{var inst_32034 = (state_32038[(2)]);var state_32038__$1 = state_32038;var statearr_32053_32075 = state_32038__$1;(statearr_32053_32075[(2)] = inst_32034);
(statearr_32053_32075[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32039 === (8)))
{var inst_32015 = (state_32038[(7)]);var inst_32025 = cljs.core.next.call(null,inst_32015);var inst_32015__$1 = inst_32025;var state_32038__$1 = (function (){var statearr_32054 = state_32038;(statearr_32054[(7)] = inst_32015__$1);
return statearr_32054;
})();var statearr_32055_32076 = state_32038__$1;(statearr_32055_32076[(2)] = null);
(statearr_32055_32076[(1)] = (2));
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
}
}
}
}
}
}
});})(c__6307__auto__))
;return ((function (switch__6292__auto__,c__6307__auto__){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_32059 = [null,null,null,null,null,null,null,null];(statearr_32059[(0)] = state_machine__6293__auto__);
(statearr_32059[(1)] = (1));
return statearr_32059;
});
var state_machine__6293__auto____1 = (function (state_32038){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_32038);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e32060){if((e32060 instanceof Object))
{var ex__6296__auto__ = e32060;var statearr_32061_32077 = state_32038;(statearr_32061_32077[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32038);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32060;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32078 = state_32038;
state_32038 = G__32078;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_32038){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_32038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto__))
})();var state__6309__auto__ = (function (){var statearr_32062 = f__6308__auto__.call(null);(statearr_32062[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto__);
return statearr_32062;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto__))
);
return c__6307__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj32080 = {};return obj32080;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3567__auto__ = _;if(and__3567__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3567__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4206__auto__ = (((_ == null))?null:_);return (function (){var or__3579__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32082 = {};return obj32082;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32304 = (function (cs,ch,mult,meta32305){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32305 = meta32305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32304.cljs$lang$type = true;
cljs.core.async.t32304.cljs$lang$ctorStr = "cljs.core.async/t32304";
cljs.core.async.t32304.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t32304");
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32304.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32304.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32306){var self__ = this;
var _32306__$1 = this;return self__.meta32305;
});})(cs))
;
cljs.core.async.t32304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32306,meta32305__$1){var self__ = this;
var _32306__$1 = this;return (new cljs.core.async.t32304(self__.cs,self__.ch,self__.mult,meta32305__$1));
});})(cs))
;
cljs.core.async.__GT_t32304 = ((function (cs){
return (function __GT_t32304(cs__$1,ch__$1,mult__$1,meta32305){return (new cljs.core.async.t32304(cs__$1,ch__$1,mult__$1,meta32305));
});})(cs))
;
}
return (new cljs.core.async.t32304(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6307__auto___32525 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___32525,cs,m,dchan,dctr,done){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___32525,cs,m,dchan,dctr,done){
return (function (state_32437){var state_val_32438 = (state_32437[(1)]);if((state_val_32438 === (7)))
{var inst_32433 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32439_32526 = state_32437__$1;(statearr_32439_32526[(2)] = inst_32433);
(statearr_32439_32526[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (20)))
{var inst_32338 = (state_32437[(7)]);var inst_32348 = cljs.core.first.call(null,inst_32338);var inst_32349 = cljs.core.nth.call(null,inst_32348,(0),null);var inst_32350 = cljs.core.nth.call(null,inst_32348,(1),null);var state_32437__$1 = (function (){var statearr_32440 = state_32437;(statearr_32440[(8)] = inst_32349);
return statearr_32440;
})();if(cljs.core.truth_(inst_32350))
{var statearr_32441_32527 = state_32437__$1;(statearr_32441_32527[(1)] = (22));
} else
{var statearr_32442_32528 = state_32437__$1;(statearr_32442_32528[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (27)))
{var inst_32380 = (state_32437[(9)]);var inst_32309 = (state_32437[(10)]);var inst_32378 = (state_32437[(11)]);var inst_32385 = (state_32437[(12)]);var inst_32385__$1 = cljs.core._nth.call(null,inst_32378,inst_32380);var inst_32386 = cljs.core.async.put_BANG_.call(null,inst_32385__$1,inst_32309,done);var state_32437__$1 = (function (){var statearr_32443 = state_32437;(statearr_32443[(12)] = inst_32385__$1);
return statearr_32443;
})();if(cljs.core.truth_(inst_32386))
{var statearr_32444_32529 = state_32437__$1;(statearr_32444_32529[(1)] = (30));
} else
{var statearr_32445_32530 = state_32437__$1;(statearr_32445_32530[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (1)))
{var state_32437__$1 = state_32437;var statearr_32446_32531 = state_32437__$1;(statearr_32446_32531[(2)] = null);
(statearr_32446_32531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (24)))
{var inst_32338 = (state_32437[(7)]);var inst_32355 = (state_32437[(2)]);var inst_32356 = cljs.core.next.call(null,inst_32338);var inst_32318 = inst_32356;var inst_32319 = null;var inst_32320 = (0);var inst_32321 = (0);var state_32437__$1 = (function (){var statearr_32447 = state_32437;(statearr_32447[(13)] = inst_32355);
(statearr_32447[(14)] = inst_32320);
(statearr_32447[(15)] = inst_32319);
(statearr_32447[(16)] = inst_32318);
(statearr_32447[(17)] = inst_32321);
return statearr_32447;
})();var statearr_32448_32532 = state_32437__$1;(statearr_32448_32532[(2)] = null);
(statearr_32448_32532[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (39)))
{var state_32437__$1 = state_32437;var statearr_32452_32533 = state_32437__$1;(statearr_32452_32533[(2)] = null);
(statearr_32452_32533[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (4)))
{var inst_32309 = (state_32437[(10)]);var inst_32309__$1 = (state_32437[(2)]);var inst_32310 = (inst_32309__$1 == null);var state_32437__$1 = (function (){var statearr_32453 = state_32437;(statearr_32453[(10)] = inst_32309__$1);
return statearr_32453;
})();if(cljs.core.truth_(inst_32310))
{var statearr_32454_32534 = state_32437__$1;(statearr_32454_32534[(1)] = (5));
} else
{var statearr_32455_32535 = state_32437__$1;(statearr_32455_32535[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (15)))
{var inst_32320 = (state_32437[(14)]);var inst_32319 = (state_32437[(15)]);var inst_32318 = (state_32437[(16)]);var inst_32321 = (state_32437[(17)]);var inst_32334 = (state_32437[(2)]);var inst_32335 = (inst_32321 + (1));var tmp32449 = inst_32320;var tmp32450 = inst_32319;var tmp32451 = inst_32318;var inst_32318__$1 = tmp32451;var inst_32319__$1 = tmp32450;var inst_32320__$1 = tmp32449;var inst_32321__$1 = inst_32335;var state_32437__$1 = (function (){var statearr_32456 = state_32437;(statearr_32456[(14)] = inst_32320__$1);
(statearr_32456[(15)] = inst_32319__$1);
(statearr_32456[(16)] = inst_32318__$1);
(statearr_32456[(18)] = inst_32334);
(statearr_32456[(17)] = inst_32321__$1);
return statearr_32456;
})();var statearr_32457_32536 = state_32437__$1;(statearr_32457_32536[(2)] = null);
(statearr_32457_32536[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (21)))
{var inst_32359 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32461_32537 = state_32437__$1;(statearr_32461_32537[(2)] = inst_32359);
(statearr_32461_32537[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (31)))
{var inst_32385 = (state_32437[(12)]);var inst_32389 = done.call(null,null);var inst_32390 = cljs.core.async.untap_STAR_.call(null,m,inst_32385);var state_32437__$1 = (function (){var statearr_32462 = state_32437;(statearr_32462[(19)] = inst_32389);
return statearr_32462;
})();var statearr_32463_32538 = state_32437__$1;(statearr_32463_32538[(2)] = inst_32390);
(statearr_32463_32538[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (32)))
{var inst_32380 = (state_32437[(9)]);var inst_32378 = (state_32437[(11)]);var inst_32377 = (state_32437[(20)]);var inst_32379 = (state_32437[(21)]);var inst_32392 = (state_32437[(2)]);var inst_32393 = (inst_32380 + (1));var tmp32458 = inst_32378;var tmp32459 = inst_32377;var tmp32460 = inst_32379;var inst_32377__$1 = tmp32459;var inst_32378__$1 = tmp32458;var inst_32379__$1 = tmp32460;var inst_32380__$1 = inst_32393;var state_32437__$1 = (function (){var statearr_32464 = state_32437;(statearr_32464[(9)] = inst_32380__$1);
(statearr_32464[(11)] = inst_32378__$1);
(statearr_32464[(20)] = inst_32377__$1);
(statearr_32464[(22)] = inst_32392);
(statearr_32464[(21)] = inst_32379__$1);
return statearr_32464;
})();var statearr_32465_32539 = state_32437__$1;(statearr_32465_32539[(2)] = null);
(statearr_32465_32539[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (40)))
{var inst_32405 = (state_32437[(23)]);var inst_32409 = done.call(null,null);var inst_32410 = cljs.core.async.untap_STAR_.call(null,m,inst_32405);var state_32437__$1 = (function (){var statearr_32466 = state_32437;(statearr_32466[(24)] = inst_32409);
return statearr_32466;
})();var statearr_32467_32540 = state_32437__$1;(statearr_32467_32540[(2)] = inst_32410);
(statearr_32467_32540[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (33)))
{var inst_32396 = (state_32437[(25)]);var inst_32398 = cljs.core.chunked_seq_QMARK_.call(null,inst_32396);var state_32437__$1 = state_32437;if(inst_32398)
{var statearr_32468_32541 = state_32437__$1;(statearr_32468_32541[(1)] = (36));
} else
{var statearr_32469_32542 = state_32437__$1;(statearr_32469_32542[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (13)))
{var inst_32328 = (state_32437[(26)]);var inst_32331 = cljs.core.async.close_BANG_.call(null,inst_32328);var state_32437__$1 = state_32437;var statearr_32470_32543 = state_32437__$1;(statearr_32470_32543[(2)] = inst_32331);
(statearr_32470_32543[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (22)))
{var inst_32349 = (state_32437[(8)]);var inst_32352 = cljs.core.async.close_BANG_.call(null,inst_32349);var state_32437__$1 = state_32437;var statearr_32471_32544 = state_32437__$1;(statearr_32471_32544[(2)] = inst_32352);
(statearr_32471_32544[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (36)))
{var inst_32396 = (state_32437[(25)]);var inst_32400 = cljs.core.chunk_first.call(null,inst_32396);var inst_32401 = cljs.core.chunk_rest.call(null,inst_32396);var inst_32402 = cljs.core.count.call(null,inst_32400);var inst_32377 = inst_32401;var inst_32378 = inst_32400;var inst_32379 = inst_32402;var inst_32380 = (0);var state_32437__$1 = (function (){var statearr_32472 = state_32437;(statearr_32472[(9)] = inst_32380);
(statearr_32472[(11)] = inst_32378);
(statearr_32472[(20)] = inst_32377);
(statearr_32472[(21)] = inst_32379);
return statearr_32472;
})();var statearr_32473_32545 = state_32437__$1;(statearr_32473_32545[(2)] = null);
(statearr_32473_32545[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (41)))
{var inst_32396 = (state_32437[(25)]);var inst_32412 = (state_32437[(2)]);var inst_32413 = cljs.core.next.call(null,inst_32396);var inst_32377 = inst_32413;var inst_32378 = null;var inst_32379 = (0);var inst_32380 = (0);var state_32437__$1 = (function (){var statearr_32474 = state_32437;(statearr_32474[(9)] = inst_32380);
(statearr_32474[(11)] = inst_32378);
(statearr_32474[(20)] = inst_32377);
(statearr_32474[(27)] = inst_32412);
(statearr_32474[(21)] = inst_32379);
return statearr_32474;
})();var statearr_32475_32546 = state_32437__$1;(statearr_32475_32546[(2)] = null);
(statearr_32475_32546[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (43)))
{var state_32437__$1 = state_32437;var statearr_32476_32547 = state_32437__$1;(statearr_32476_32547[(2)] = null);
(statearr_32476_32547[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (29)))
{var inst_32421 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32477_32548 = state_32437__$1;(statearr_32477_32548[(2)] = inst_32421);
(statearr_32477_32548[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (44)))
{var inst_32430 = (state_32437[(2)]);var state_32437__$1 = (function (){var statearr_32478 = state_32437;(statearr_32478[(28)] = inst_32430);
return statearr_32478;
})();var statearr_32479_32549 = state_32437__$1;(statearr_32479_32549[(2)] = null);
(statearr_32479_32549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (6)))
{var inst_32369 = (state_32437[(29)]);var inst_32368 = cljs.core.deref.call(null,cs);var inst_32369__$1 = cljs.core.keys.call(null,inst_32368);var inst_32370 = cljs.core.count.call(null,inst_32369__$1);var inst_32371 = cljs.core.reset_BANG_.call(null,dctr,inst_32370);var inst_32376 = cljs.core.seq.call(null,inst_32369__$1);var inst_32377 = inst_32376;var inst_32378 = null;var inst_32379 = (0);var inst_32380 = (0);var state_32437__$1 = (function (){var statearr_32480 = state_32437;(statearr_32480[(9)] = inst_32380);
(statearr_32480[(29)] = inst_32369__$1);
(statearr_32480[(11)] = inst_32378);
(statearr_32480[(20)] = inst_32377);
(statearr_32480[(21)] = inst_32379);
(statearr_32480[(30)] = inst_32371);
return statearr_32480;
})();var statearr_32481_32550 = state_32437__$1;(statearr_32481_32550[(2)] = null);
(statearr_32481_32550[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (28)))
{var inst_32377 = (state_32437[(20)]);var inst_32396 = (state_32437[(25)]);var inst_32396__$1 = cljs.core.seq.call(null,inst_32377);var state_32437__$1 = (function (){var statearr_32482 = state_32437;(statearr_32482[(25)] = inst_32396__$1);
return statearr_32482;
})();if(inst_32396__$1)
{var statearr_32483_32551 = state_32437__$1;(statearr_32483_32551[(1)] = (33));
} else
{var statearr_32484_32552 = state_32437__$1;(statearr_32484_32552[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (25)))
{var inst_32380 = (state_32437[(9)]);var inst_32379 = (state_32437[(21)]);var inst_32382 = (inst_32380 < inst_32379);var inst_32383 = inst_32382;var state_32437__$1 = state_32437;if(cljs.core.truth_(inst_32383))
{var statearr_32485_32553 = state_32437__$1;(statearr_32485_32553[(1)] = (27));
} else
{var statearr_32486_32554 = state_32437__$1;(statearr_32486_32554[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (34)))
{var state_32437__$1 = state_32437;var statearr_32487_32555 = state_32437__$1;(statearr_32487_32555[(2)] = null);
(statearr_32487_32555[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (17)))
{var state_32437__$1 = state_32437;var statearr_32488_32556 = state_32437__$1;(statearr_32488_32556[(2)] = null);
(statearr_32488_32556[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (3)))
{var inst_32435 = (state_32437[(2)]);var state_32437__$1 = state_32437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32437__$1,inst_32435);
} else
{if((state_val_32438 === (12)))
{var inst_32364 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32489_32557 = state_32437__$1;(statearr_32489_32557[(2)] = inst_32364);
(statearr_32489_32557[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (2)))
{var state_32437__$1 = state_32437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32437__$1,(4),ch);
} else
{if((state_val_32438 === (23)))
{var state_32437__$1 = state_32437;var statearr_32490_32558 = state_32437__$1;(statearr_32490_32558[(2)] = null);
(statearr_32490_32558[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (35)))
{var inst_32419 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32491_32559 = state_32437__$1;(statearr_32491_32559[(2)] = inst_32419);
(statearr_32491_32559[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (19)))
{var inst_32338 = (state_32437[(7)]);var inst_32342 = cljs.core.chunk_first.call(null,inst_32338);var inst_32343 = cljs.core.chunk_rest.call(null,inst_32338);var inst_32344 = cljs.core.count.call(null,inst_32342);var inst_32318 = inst_32343;var inst_32319 = inst_32342;var inst_32320 = inst_32344;var inst_32321 = (0);var state_32437__$1 = (function (){var statearr_32492 = state_32437;(statearr_32492[(14)] = inst_32320);
(statearr_32492[(15)] = inst_32319);
(statearr_32492[(16)] = inst_32318);
(statearr_32492[(17)] = inst_32321);
return statearr_32492;
})();var statearr_32493_32560 = state_32437__$1;(statearr_32493_32560[(2)] = null);
(statearr_32493_32560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (11)))
{var inst_32318 = (state_32437[(16)]);var inst_32338 = (state_32437[(7)]);var inst_32338__$1 = cljs.core.seq.call(null,inst_32318);var state_32437__$1 = (function (){var statearr_32494 = state_32437;(statearr_32494[(7)] = inst_32338__$1);
return statearr_32494;
})();if(inst_32338__$1)
{var statearr_32495_32561 = state_32437__$1;(statearr_32495_32561[(1)] = (16));
} else
{var statearr_32496_32562 = state_32437__$1;(statearr_32496_32562[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (9)))
{var inst_32366 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32497_32563 = state_32437__$1;(statearr_32497_32563[(2)] = inst_32366);
(statearr_32497_32563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (5)))
{var inst_32316 = cljs.core.deref.call(null,cs);var inst_32317 = cljs.core.seq.call(null,inst_32316);var inst_32318 = inst_32317;var inst_32319 = null;var inst_32320 = (0);var inst_32321 = (0);var state_32437__$1 = (function (){var statearr_32498 = state_32437;(statearr_32498[(14)] = inst_32320);
(statearr_32498[(15)] = inst_32319);
(statearr_32498[(16)] = inst_32318);
(statearr_32498[(17)] = inst_32321);
return statearr_32498;
})();var statearr_32499_32564 = state_32437__$1;(statearr_32499_32564[(2)] = null);
(statearr_32499_32564[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (14)))
{var state_32437__$1 = state_32437;var statearr_32500_32565 = state_32437__$1;(statearr_32500_32565[(2)] = null);
(statearr_32500_32565[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (45)))
{var inst_32427 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32501_32566 = state_32437__$1;(statearr_32501_32566[(2)] = inst_32427);
(statearr_32501_32566[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (26)))
{var inst_32369 = (state_32437[(29)]);var inst_32423 = (state_32437[(2)]);var inst_32424 = cljs.core.seq.call(null,inst_32369);var state_32437__$1 = (function (){var statearr_32502 = state_32437;(statearr_32502[(31)] = inst_32423);
return statearr_32502;
})();if(inst_32424)
{var statearr_32503_32567 = state_32437__$1;(statearr_32503_32567[(1)] = (42));
} else
{var statearr_32504_32568 = state_32437__$1;(statearr_32504_32568[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (16)))
{var inst_32338 = (state_32437[(7)]);var inst_32340 = cljs.core.chunked_seq_QMARK_.call(null,inst_32338);var state_32437__$1 = state_32437;if(inst_32340)
{var statearr_32505_32569 = state_32437__$1;(statearr_32505_32569[(1)] = (19));
} else
{var statearr_32506_32570 = state_32437__$1;(statearr_32506_32570[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (38)))
{var inst_32416 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32507_32571 = state_32437__$1;(statearr_32507_32571[(2)] = inst_32416);
(statearr_32507_32571[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (30)))
{var state_32437__$1 = state_32437;var statearr_32508_32572 = state_32437__$1;(statearr_32508_32572[(2)] = null);
(statearr_32508_32572[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (10)))
{var inst_32319 = (state_32437[(15)]);var inst_32321 = (state_32437[(17)]);var inst_32327 = cljs.core._nth.call(null,inst_32319,inst_32321);var inst_32328 = cljs.core.nth.call(null,inst_32327,(0),null);var inst_32329 = cljs.core.nth.call(null,inst_32327,(1),null);var state_32437__$1 = (function (){var statearr_32509 = state_32437;(statearr_32509[(26)] = inst_32328);
return statearr_32509;
})();if(cljs.core.truth_(inst_32329))
{var statearr_32510_32573 = state_32437__$1;(statearr_32510_32573[(1)] = (13));
} else
{var statearr_32511_32574 = state_32437__$1;(statearr_32511_32574[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (18)))
{var inst_32362 = (state_32437[(2)]);var state_32437__$1 = state_32437;var statearr_32512_32575 = state_32437__$1;(statearr_32512_32575[(2)] = inst_32362);
(statearr_32512_32575[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (42)))
{var state_32437__$1 = state_32437;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32437__$1,(45),dchan);
} else
{if((state_val_32438 === (37)))
{var inst_32309 = (state_32437[(10)]);var inst_32405 = (state_32437[(23)]);var inst_32396 = (state_32437[(25)]);var inst_32405__$1 = cljs.core.first.call(null,inst_32396);var inst_32406 = cljs.core.async.put_BANG_.call(null,inst_32405__$1,inst_32309,done);var state_32437__$1 = (function (){var statearr_32513 = state_32437;(statearr_32513[(23)] = inst_32405__$1);
return statearr_32513;
})();if(cljs.core.truth_(inst_32406))
{var statearr_32514_32576 = state_32437__$1;(statearr_32514_32576[(1)] = (39));
} else
{var statearr_32515_32577 = state_32437__$1;(statearr_32515_32577[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32438 === (8)))
{var inst_32320 = (state_32437[(14)]);var inst_32321 = (state_32437[(17)]);var inst_32323 = (inst_32321 < inst_32320);var inst_32324 = inst_32323;var state_32437__$1 = state_32437;if(cljs.core.truth_(inst_32324))
{var statearr_32516_32578 = state_32437__$1;(statearr_32516_32578[(1)] = (10));
} else
{var statearr_32517_32579 = state_32437__$1;(statearr_32517_32579[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6307__auto___32525,cs,m,dchan,dctr,done))
;return ((function (switch__6292__auto__,c__6307__auto___32525,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_32521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32521[(0)] = state_machine__6293__auto__);
(statearr_32521[(1)] = (1));
return statearr_32521;
});
var state_machine__6293__auto____1 = (function (state_32437){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_32437);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e32522){if((e32522 instanceof Object))
{var ex__6296__auto__ = e32522;var statearr_32523_32580 = state_32437;(statearr_32523_32580[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32437);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32522;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32581 = state_32437;
state_32437 = G__32581;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_32437){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_32437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___32525,cs,m,dchan,dctr,done))
})();var state__6309__auto__ = (function (){var statearr_32524 = f__6308__auto__.call(null);(statearr_32524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___32525);
return statearr_32524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___32525,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj32583 = {};return obj32583;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3567__auto__ = m;if(and__3567__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4206__auto__ = (((m == null))?null:m);return (function (){var or__3579__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t32703 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32703 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32704){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32704 = meta32704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32703.cljs$lang$type = true;
cljs.core.async.t32703.cljs$lang$ctorStr = "cljs.core.async/t32703";
cljs.core.async.t32703.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t32703");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32705){var self__ = this;
var _32705__$1 = this;return self__.meta32704;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32705,meta32704__$1){var self__ = this;
var _32705__$1 = this;return (new cljs.core.async.t32703(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32704__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32703 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32704){return (new cljs.core.async.t32703(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta32704));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32703(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6307__auto___32822 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_32775){var state_val_32776 = (state_32775[(1)]);if((state_val_32776 === (7)))
{var inst_32719 = (state_32775[(7)]);var inst_32724 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32719);var state_32775__$1 = state_32775;var statearr_32777_32823 = state_32775__$1;(statearr_32777_32823[(2)] = inst_32724);
(statearr_32777_32823[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (20)))
{var inst_32734 = (state_32775[(8)]);var state_32775__$1 = state_32775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32775__$1,(23),out,inst_32734);
} else
{if((state_val_32776 === (1)))
{var inst_32709 = (state_32775[(9)]);var inst_32709__$1 = calc_state.call(null);var inst_32710 = cljs.core.seq_QMARK_.call(null,inst_32709__$1);var state_32775__$1 = (function (){var statearr_32778 = state_32775;(statearr_32778[(9)] = inst_32709__$1);
return statearr_32778;
})();if(inst_32710)
{var statearr_32779_32824 = state_32775__$1;(statearr_32779_32824[(1)] = (2));
} else
{var statearr_32780_32825 = state_32775__$1;(statearr_32780_32825[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (24)))
{var inst_32727 = (state_32775[(10)]);var inst_32719 = inst_32727;var state_32775__$1 = (function (){var statearr_32781 = state_32775;(statearr_32781[(7)] = inst_32719);
return statearr_32781;
})();var statearr_32782_32826 = state_32775__$1;(statearr_32782_32826[(2)] = null);
(statearr_32782_32826[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (4)))
{var inst_32709 = (state_32775[(9)]);var inst_32715 = (state_32775[(2)]);var inst_32716 = cljs.core.get.call(null,inst_32715,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32717 = cljs.core.get.call(null,inst_32715,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32718 = cljs.core.get.call(null,inst_32715,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_32719 = inst_32709;var state_32775__$1 = (function (){var statearr_32783 = state_32775;(statearr_32783[(7)] = inst_32719);
(statearr_32783[(11)] = inst_32716);
(statearr_32783[(12)] = inst_32718);
(statearr_32783[(13)] = inst_32717);
return statearr_32783;
})();var statearr_32784_32827 = state_32775__$1;(statearr_32784_32827[(2)] = null);
(statearr_32784_32827[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (15)))
{var state_32775__$1 = state_32775;var statearr_32785_32828 = state_32775__$1;(statearr_32785_32828[(2)] = null);
(statearr_32785_32828[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (21)))
{var inst_32727 = (state_32775[(10)]);var inst_32719 = inst_32727;var state_32775__$1 = (function (){var statearr_32786 = state_32775;(statearr_32786[(7)] = inst_32719);
return statearr_32786;
})();var statearr_32787_32829 = state_32775__$1;(statearr_32787_32829[(2)] = null);
(statearr_32787_32829[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (13)))
{var inst_32771 = (state_32775[(2)]);var state_32775__$1 = state_32775;var statearr_32788_32830 = state_32775__$1;(statearr_32788_32830[(2)] = inst_32771);
(statearr_32788_32830[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (22)))
{var inst_32769 = (state_32775[(2)]);var state_32775__$1 = state_32775;var statearr_32789_32831 = state_32775__$1;(statearr_32789_32831[(2)] = inst_32769);
(statearr_32789_32831[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (6)))
{var inst_32773 = (state_32775[(2)]);var state_32775__$1 = state_32775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32775__$1,inst_32773);
} else
{if((state_val_32776 === (25)))
{var state_32775__$1 = state_32775;var statearr_32790_32832 = state_32775__$1;(statearr_32790_32832[(2)] = null);
(statearr_32790_32832[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (17)))
{var inst_32749 = (state_32775[(14)]);var state_32775__$1 = state_32775;var statearr_32791_32833 = state_32775__$1;(statearr_32791_32833[(2)] = inst_32749);
(statearr_32791_32833[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (3)))
{var inst_32709 = (state_32775[(9)]);var state_32775__$1 = state_32775;var statearr_32792_32834 = state_32775__$1;(statearr_32792_32834[(2)] = inst_32709);
(statearr_32792_32834[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (12)))
{var inst_32735 = (state_32775[(15)]);var inst_32749 = (state_32775[(14)]);var inst_32730 = (state_32775[(16)]);var inst_32749__$1 = inst_32730.call(null,inst_32735);var state_32775__$1 = (function (){var statearr_32793 = state_32775;(statearr_32793[(14)] = inst_32749__$1);
return statearr_32793;
})();if(cljs.core.truth_(inst_32749__$1))
{var statearr_32794_32835 = state_32775__$1;(statearr_32794_32835[(1)] = (17));
} else
{var statearr_32795_32836 = state_32775__$1;(statearr_32795_32836[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (2)))
{var inst_32709 = (state_32775[(9)]);var inst_32712 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32709);var state_32775__$1 = state_32775;var statearr_32796_32837 = state_32775__$1;(statearr_32796_32837[(2)] = inst_32712);
(statearr_32796_32837[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (23)))
{var inst_32760 = (state_32775[(2)]);var state_32775__$1 = state_32775;if(cljs.core.truth_(inst_32760))
{var statearr_32797_32838 = state_32775__$1;(statearr_32797_32838[(1)] = (24));
} else
{var statearr_32798_32839 = state_32775__$1;(statearr_32798_32839[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (19)))
{var inst_32757 = (state_32775[(2)]);var state_32775__$1 = state_32775;if(cljs.core.truth_(inst_32757))
{var statearr_32799_32840 = state_32775__$1;(statearr_32799_32840[(1)] = (20));
} else
{var statearr_32800_32841 = state_32775__$1;(statearr_32800_32841[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (11)))
{var inst_32734 = (state_32775[(8)]);var inst_32740 = (inst_32734 == null);var state_32775__$1 = state_32775;if(cljs.core.truth_(inst_32740))
{var statearr_32801_32842 = state_32775__$1;(statearr_32801_32842[(1)] = (14));
} else
{var statearr_32802_32843 = state_32775__$1;(statearr_32802_32843[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (9)))
{var inst_32727 = (state_32775[(10)]);var inst_32727__$1 = (state_32775[(2)]);var inst_32728 = cljs.core.get.call(null,inst_32727__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_32729 = cljs.core.get.call(null,inst_32727__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_32730 = cljs.core.get.call(null,inst_32727__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_32775__$1 = (function (){var statearr_32803 = state_32775;(statearr_32803[(17)] = inst_32729);
(statearr_32803[(10)] = inst_32727__$1);
(statearr_32803[(16)] = inst_32730);
return statearr_32803;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32775__$1,(10),inst_32728);
} else
{if((state_val_32776 === (5)))
{var inst_32719 = (state_32775[(7)]);var inst_32722 = cljs.core.seq_QMARK_.call(null,inst_32719);var state_32775__$1 = state_32775;if(inst_32722)
{var statearr_32804_32844 = state_32775__$1;(statearr_32804_32844[(1)] = (7));
} else
{var statearr_32805_32845 = state_32775__$1;(statearr_32805_32845[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (14)))
{var inst_32735 = (state_32775[(15)]);var inst_32742 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32735);var state_32775__$1 = state_32775;var statearr_32806_32846 = state_32775__$1;(statearr_32806_32846[(2)] = inst_32742);
(statearr_32806_32846[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (26)))
{var inst_32765 = (state_32775[(2)]);var state_32775__$1 = state_32775;var statearr_32807_32847 = state_32775__$1;(statearr_32807_32847[(2)] = inst_32765);
(statearr_32807_32847[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (16)))
{var inst_32745 = (state_32775[(2)]);var inst_32746 = calc_state.call(null);var inst_32719 = inst_32746;var state_32775__$1 = (function (){var statearr_32808 = state_32775;(statearr_32808[(7)] = inst_32719);
(statearr_32808[(18)] = inst_32745);
return statearr_32808;
})();var statearr_32809_32848 = state_32775__$1;(statearr_32809_32848[(2)] = null);
(statearr_32809_32848[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (10)))
{var inst_32735 = (state_32775[(15)]);var inst_32734 = (state_32775[(8)]);var inst_32733 = (state_32775[(2)]);var inst_32734__$1 = cljs.core.nth.call(null,inst_32733,(0),null);var inst_32735__$1 = cljs.core.nth.call(null,inst_32733,(1),null);var inst_32736 = (inst_32734__$1 == null);var inst_32737 = cljs.core._EQ_.call(null,inst_32735__$1,change);var inst_32738 = (inst_32736) || (inst_32737);var state_32775__$1 = (function (){var statearr_32810 = state_32775;(statearr_32810[(15)] = inst_32735__$1);
(statearr_32810[(8)] = inst_32734__$1);
return statearr_32810;
})();if(cljs.core.truth_(inst_32738))
{var statearr_32811_32849 = state_32775__$1;(statearr_32811_32849[(1)] = (11));
} else
{var statearr_32812_32850 = state_32775__$1;(statearr_32812_32850[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (18)))
{var inst_32729 = (state_32775[(17)]);var inst_32735 = (state_32775[(15)]);var inst_32730 = (state_32775[(16)]);var inst_32752 = cljs.core.empty_QMARK_.call(null,inst_32730);var inst_32753 = inst_32729.call(null,inst_32735);var inst_32754 = cljs.core.not.call(null,inst_32753);var inst_32755 = (inst_32752) && (inst_32754);var state_32775__$1 = state_32775;var statearr_32813_32851 = state_32775__$1;(statearr_32813_32851[(2)] = inst_32755);
(statearr_32813_32851[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32776 === (8)))
{var inst_32719 = (state_32775[(7)]);var state_32775__$1 = state_32775;var statearr_32814_32852 = state_32775__$1;(statearr_32814_32852[(2)] = inst_32719);
(statearr_32814_32852[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6292__auto__,c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_32818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32818[(0)] = state_machine__6293__auto__);
(statearr_32818[(1)] = (1));
return statearr_32818;
});
var state_machine__6293__auto____1 = (function (state_32775){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_32775);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e32819){if((e32819 instanceof Object))
{var ex__6296__auto__ = e32819;var statearr_32820_32853 = state_32775;(statearr_32820_32853[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32854 = state_32775;
state_32775 = G__32854;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_32775){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_32775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6309__auto__ = (function (){var statearr_32821 = f__6308__auto__.call(null);(statearr_32821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___32822);
return statearr_32821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___32822,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj32856 = {};return obj32856;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3567__auto__ = p;if(and__3567__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3567__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4206__auto__ = (((p == null))?null:p);return (function (){var or__3579__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3567__auto__ = p;if(and__3567__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3567__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4206__auto__ = (((p == null))?null:p);return (function (){var or__3579__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3567__auto__ = p;if(and__3567__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3567__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4206__auto__ = (((p == null))?null:p);return (function (){var or__3579__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3567__auto__ = p;if(and__3567__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3567__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4206__auto__ = (((p == null))?null:p);return (function (){var or__3579__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4206__auto__)]);if(or__3579__auto__)
{return or__3579__auto__;
} else
{var or__3579__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3579__auto____$1)
{return or__3579__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3579__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3579__auto__))
{return or__3579__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3579__auto__,mults){
return (function (p1__32857_SHARP_){if(cljs.core.truth_(p1__32857_SHARP_.call(null,topic)))
{return p1__32857_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__32857_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3579__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32980 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32980 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32981){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32981 = meta32981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32980.cljs$lang$type = true;
cljs.core.async.t32980.cljs$lang$ctorStr = "cljs.core.async/t32980";
cljs.core.async.t32980.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t32980");
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32980.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32980.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32982){var self__ = this;
var _32982__$1 = this;return self__.meta32981;
});})(mults,ensure_mult))
;
cljs.core.async.t32980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32982,meta32981__$1){var self__ = this;
var _32982__$1 = this;return (new cljs.core.async.t32980(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32981__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32980 = ((function (mults,ensure_mult){
return (function __GT_t32980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32981){return (new cljs.core.async.t32980(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32981));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32980(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6307__auto___33102 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33102,mults,ensure_mult,p){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33102,mults,ensure_mult,p){
return (function (state_33054){var state_val_33055 = (state_33054[(1)]);if((state_val_33055 === (7)))
{var inst_33050 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33056_33103 = state_33054__$1;(statearr_33056_33103[(2)] = inst_33050);
(statearr_33056_33103[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (20)))
{var state_33054__$1 = state_33054;var statearr_33057_33104 = state_33054__$1;(statearr_33057_33104[(2)] = null);
(statearr_33057_33104[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (1)))
{var state_33054__$1 = state_33054;var statearr_33058_33105 = state_33054__$1;(statearr_33058_33105[(2)] = null);
(statearr_33058_33105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (24)))
{var inst_33033 = (state_33054[(7)]);var inst_33042 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33033);var state_33054__$1 = state_33054;var statearr_33059_33106 = state_33054__$1;(statearr_33059_33106[(2)] = inst_33042);
(statearr_33059_33106[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (4)))
{var inst_32985 = (state_33054[(8)]);var inst_32985__$1 = (state_33054[(2)]);var inst_32986 = (inst_32985__$1 == null);var state_33054__$1 = (function (){var statearr_33060 = state_33054;(statearr_33060[(8)] = inst_32985__$1);
return statearr_33060;
})();if(cljs.core.truth_(inst_32986))
{var statearr_33061_33107 = state_33054__$1;(statearr_33061_33107[(1)] = (5));
} else
{var statearr_33062_33108 = state_33054__$1;(statearr_33062_33108[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (15)))
{var inst_33027 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33063_33109 = state_33054__$1;(statearr_33063_33109[(2)] = inst_33027);
(statearr_33063_33109[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (21)))
{var inst_33047 = (state_33054[(2)]);var state_33054__$1 = (function (){var statearr_33064 = state_33054;(statearr_33064[(9)] = inst_33047);
return statearr_33064;
})();var statearr_33065_33110 = state_33054__$1;(statearr_33065_33110[(2)] = null);
(statearr_33065_33110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (13)))
{var inst_33009 = (state_33054[(10)]);var inst_33011 = cljs.core.chunked_seq_QMARK_.call(null,inst_33009);var state_33054__$1 = state_33054;if(inst_33011)
{var statearr_33066_33111 = state_33054__$1;(statearr_33066_33111[(1)] = (16));
} else
{var statearr_33067_33112 = state_33054__$1;(statearr_33067_33112[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (22)))
{var inst_33039 = (state_33054[(2)]);var state_33054__$1 = state_33054;if(cljs.core.truth_(inst_33039))
{var statearr_33068_33113 = state_33054__$1;(statearr_33068_33113[(1)] = (23));
} else
{var statearr_33069_33114 = state_33054__$1;(statearr_33069_33114[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (6)))
{var inst_33035 = (state_33054[(11)]);var inst_33033 = (state_33054[(7)]);var inst_32985 = (state_33054[(8)]);var inst_33033__$1 = topic_fn.call(null,inst_32985);var inst_33034 = cljs.core.deref.call(null,mults);var inst_33035__$1 = cljs.core.get.call(null,inst_33034,inst_33033__$1);var state_33054__$1 = (function (){var statearr_33070 = state_33054;(statearr_33070[(11)] = inst_33035__$1);
(statearr_33070[(7)] = inst_33033__$1);
return statearr_33070;
})();if(cljs.core.truth_(inst_33035__$1))
{var statearr_33071_33115 = state_33054__$1;(statearr_33071_33115[(1)] = (19));
} else
{var statearr_33072_33116 = state_33054__$1;(statearr_33072_33116[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (25)))
{var inst_33044 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33073_33117 = state_33054__$1;(statearr_33073_33117[(2)] = inst_33044);
(statearr_33073_33117[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (17)))
{var inst_33009 = (state_33054[(10)]);var inst_33018 = cljs.core.first.call(null,inst_33009);var inst_33019 = cljs.core.async.muxch_STAR_.call(null,inst_33018);var inst_33020 = cljs.core.async.close_BANG_.call(null,inst_33019);var inst_33021 = cljs.core.next.call(null,inst_33009);var inst_32995 = inst_33021;var inst_32996 = null;var inst_32997 = (0);var inst_32998 = (0);var state_33054__$1 = (function (){var statearr_33074 = state_33054;(statearr_33074[(12)] = inst_32995);
(statearr_33074[(13)] = inst_33020);
(statearr_33074[(14)] = inst_32996);
(statearr_33074[(15)] = inst_32997);
(statearr_33074[(16)] = inst_32998);
return statearr_33074;
})();var statearr_33075_33118 = state_33054__$1;(statearr_33075_33118[(2)] = null);
(statearr_33075_33118[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (3)))
{var inst_33052 = (state_33054[(2)]);var state_33054__$1 = state_33054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33054__$1,inst_33052);
} else
{if((state_val_33055 === (12)))
{var inst_33029 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33076_33119 = state_33054__$1;(statearr_33076_33119[(2)] = inst_33029);
(statearr_33076_33119[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (2)))
{var state_33054__$1 = state_33054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33054__$1,(4),ch);
} else
{if((state_val_33055 === (23)))
{var state_33054__$1 = state_33054;var statearr_33077_33120 = state_33054__$1;(statearr_33077_33120[(2)] = null);
(statearr_33077_33120[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (19)))
{var inst_33035 = (state_33054[(11)]);var inst_32985 = (state_33054[(8)]);var inst_33037 = cljs.core.async.muxch_STAR_.call(null,inst_33035);var state_33054__$1 = state_33054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33054__$1,(22),inst_33037,inst_32985);
} else
{if((state_val_33055 === (11)))
{var inst_32995 = (state_33054[(12)]);var inst_33009 = (state_33054[(10)]);var inst_33009__$1 = cljs.core.seq.call(null,inst_32995);var state_33054__$1 = (function (){var statearr_33078 = state_33054;(statearr_33078[(10)] = inst_33009__$1);
return statearr_33078;
})();if(inst_33009__$1)
{var statearr_33079_33121 = state_33054__$1;(statearr_33079_33121[(1)] = (13));
} else
{var statearr_33080_33122 = state_33054__$1;(statearr_33080_33122[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (9)))
{var inst_33031 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33081_33123 = state_33054__$1;(statearr_33081_33123[(2)] = inst_33031);
(statearr_33081_33123[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (5)))
{var inst_32992 = cljs.core.deref.call(null,mults);var inst_32993 = cljs.core.vals.call(null,inst_32992);var inst_32994 = cljs.core.seq.call(null,inst_32993);var inst_32995 = inst_32994;var inst_32996 = null;var inst_32997 = (0);var inst_32998 = (0);var state_33054__$1 = (function (){var statearr_33082 = state_33054;(statearr_33082[(12)] = inst_32995);
(statearr_33082[(14)] = inst_32996);
(statearr_33082[(15)] = inst_32997);
(statearr_33082[(16)] = inst_32998);
return statearr_33082;
})();var statearr_33083_33124 = state_33054__$1;(statearr_33083_33124[(2)] = null);
(statearr_33083_33124[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (14)))
{var state_33054__$1 = state_33054;var statearr_33087_33125 = state_33054__$1;(statearr_33087_33125[(2)] = null);
(statearr_33087_33125[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (16)))
{var inst_33009 = (state_33054[(10)]);var inst_33013 = cljs.core.chunk_first.call(null,inst_33009);var inst_33014 = cljs.core.chunk_rest.call(null,inst_33009);var inst_33015 = cljs.core.count.call(null,inst_33013);var inst_32995 = inst_33014;var inst_32996 = inst_33013;var inst_32997 = inst_33015;var inst_32998 = (0);var state_33054__$1 = (function (){var statearr_33088 = state_33054;(statearr_33088[(12)] = inst_32995);
(statearr_33088[(14)] = inst_32996);
(statearr_33088[(15)] = inst_32997);
(statearr_33088[(16)] = inst_32998);
return statearr_33088;
})();var statearr_33089_33126 = state_33054__$1;(statearr_33089_33126[(2)] = null);
(statearr_33089_33126[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (10)))
{var inst_32995 = (state_33054[(12)]);var inst_32996 = (state_33054[(14)]);var inst_32997 = (state_33054[(15)]);var inst_32998 = (state_33054[(16)]);var inst_33003 = cljs.core._nth.call(null,inst_32996,inst_32998);var inst_33004 = cljs.core.async.muxch_STAR_.call(null,inst_33003);var inst_33005 = cljs.core.async.close_BANG_.call(null,inst_33004);var inst_33006 = (inst_32998 + (1));var tmp33084 = inst_32995;var tmp33085 = inst_32996;var tmp33086 = inst_32997;var inst_32995__$1 = tmp33084;var inst_32996__$1 = tmp33085;var inst_32997__$1 = tmp33086;var inst_32998__$1 = inst_33006;var state_33054__$1 = (function (){var statearr_33090 = state_33054;(statearr_33090[(12)] = inst_32995__$1);
(statearr_33090[(17)] = inst_33005);
(statearr_33090[(14)] = inst_32996__$1);
(statearr_33090[(15)] = inst_32997__$1);
(statearr_33090[(16)] = inst_32998__$1);
return statearr_33090;
})();var statearr_33091_33127 = state_33054__$1;(statearr_33091_33127[(2)] = null);
(statearr_33091_33127[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (18)))
{var inst_33024 = (state_33054[(2)]);var state_33054__$1 = state_33054;var statearr_33092_33128 = state_33054__$1;(statearr_33092_33128[(2)] = inst_33024);
(statearr_33092_33128[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33055 === (8)))
{var inst_32997 = (state_33054[(15)]);var inst_32998 = (state_33054[(16)]);var inst_33000 = (inst_32998 < inst_32997);var inst_33001 = inst_33000;var state_33054__$1 = state_33054;if(cljs.core.truth_(inst_33001))
{var statearr_33093_33129 = state_33054__$1;(statearr_33093_33129[(1)] = (10));
} else
{var statearr_33094_33130 = state_33054__$1;(statearr_33094_33130[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6307__auto___33102,mults,ensure_mult,p))
;return ((function (switch__6292__auto__,c__6307__auto___33102,mults,ensure_mult,p){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33098 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33098[(0)] = state_machine__6293__auto__);
(statearr_33098[(1)] = (1));
return statearr_33098;
});
var state_machine__6293__auto____1 = (function (state_33054){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33054);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33099){if((e33099 instanceof Object))
{var ex__6296__auto__ = e33099;var statearr_33100_33131 = state_33054;(statearr_33100_33131[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33099;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33132 = state_33054;
state_33054 = G__33132;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33054){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33102,mults,ensure_mult,p))
})();var state__6309__auto__ = (function (){var statearr_33101 = f__6308__auto__.call(null);(statearr_33101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33102);
return statearr_33101;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33102,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6307__auto___33269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33239){var state_val_33240 = (state_33239[(1)]);if((state_val_33240 === (7)))
{var state_33239__$1 = state_33239;var statearr_33241_33270 = state_33239__$1;(statearr_33241_33270[(2)] = null);
(statearr_33241_33270[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (1)))
{var state_33239__$1 = state_33239;var statearr_33242_33271 = state_33239__$1;(statearr_33242_33271[(2)] = null);
(statearr_33242_33271[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (4)))
{var inst_33203 = (state_33239[(7)]);var inst_33205 = (inst_33203 < cnt);var state_33239__$1 = state_33239;if(cljs.core.truth_(inst_33205))
{var statearr_33243_33272 = state_33239__$1;(statearr_33243_33272[(1)] = (6));
} else
{var statearr_33244_33273 = state_33239__$1;(statearr_33244_33273[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (15)))
{var inst_33235 = (state_33239[(2)]);var state_33239__$1 = state_33239;var statearr_33245_33274 = state_33239__$1;(statearr_33245_33274[(2)] = inst_33235);
(statearr_33245_33274[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (13)))
{var inst_33228 = cljs.core.async.close_BANG_.call(null,out);var state_33239__$1 = state_33239;var statearr_33246_33275 = state_33239__$1;(statearr_33246_33275[(2)] = inst_33228);
(statearr_33246_33275[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (6)))
{var state_33239__$1 = state_33239;var statearr_33247_33276 = state_33239__$1;(statearr_33247_33276[(2)] = null);
(statearr_33247_33276[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (3)))
{var inst_33237 = (state_33239[(2)]);var state_33239__$1 = state_33239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33239__$1,inst_33237);
} else
{if((state_val_33240 === (12)))
{var inst_33225 = (state_33239[(8)]);var inst_33225__$1 = (state_33239[(2)]);var inst_33226 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33225__$1);var state_33239__$1 = (function (){var statearr_33248 = state_33239;(statearr_33248[(8)] = inst_33225__$1);
return statearr_33248;
})();if(cljs.core.truth_(inst_33226))
{var statearr_33249_33277 = state_33239__$1;(statearr_33249_33277[(1)] = (13));
} else
{var statearr_33250_33278 = state_33239__$1;(statearr_33250_33278[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (2)))
{var inst_33202 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33203 = (0);var state_33239__$1 = (function (){var statearr_33251 = state_33239;(statearr_33251[(7)] = inst_33203);
(statearr_33251[(9)] = inst_33202);
return statearr_33251;
})();var statearr_33252_33279 = state_33239__$1;(statearr_33252_33279[(2)] = null);
(statearr_33252_33279[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (11)))
{var inst_33203 = (state_33239[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33239,(10),Object,null,(9));var inst_33212 = chs__$1.call(null,inst_33203);var inst_33213 = done.call(null,inst_33203);var inst_33214 = cljs.core.async.take_BANG_.call(null,inst_33212,inst_33213);var state_33239__$1 = state_33239;var statearr_33253_33280 = state_33239__$1;(statearr_33253_33280[(2)] = inst_33214);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (9)))
{var inst_33203 = (state_33239[(7)]);var inst_33216 = (state_33239[(2)]);var inst_33217 = (inst_33203 + (1));var inst_33203__$1 = inst_33217;var state_33239__$1 = (function (){var statearr_33254 = state_33239;(statearr_33254[(7)] = inst_33203__$1);
(statearr_33254[(10)] = inst_33216);
return statearr_33254;
})();var statearr_33255_33281 = state_33239__$1;(statearr_33255_33281[(2)] = null);
(statearr_33255_33281[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (5)))
{var inst_33223 = (state_33239[(2)]);var state_33239__$1 = (function (){var statearr_33256 = state_33239;(statearr_33256[(11)] = inst_33223);
return statearr_33256;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33239__$1,(12),dchan);
} else
{if((state_val_33240 === (14)))
{var inst_33225 = (state_33239[(8)]);var inst_33230 = cljs.core.apply.call(null,f,inst_33225);var state_33239__$1 = state_33239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33239__$1,(16),out,inst_33230);
} else
{if((state_val_33240 === (16)))
{var inst_33232 = (state_33239[(2)]);var state_33239__$1 = (function (){var statearr_33257 = state_33239;(statearr_33257[(12)] = inst_33232);
return statearr_33257;
})();var statearr_33258_33282 = state_33239__$1;(statearr_33258_33282[(2)] = null);
(statearr_33258_33282[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (10)))
{var inst_33207 = (state_33239[(2)]);var inst_33208 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33239__$1 = (function (){var statearr_33259 = state_33239;(statearr_33259[(13)] = inst_33207);
return statearr_33259;
})();var statearr_33260_33283 = state_33239__$1;(statearr_33260_33283[(2)] = inst_33208);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33240 === (8)))
{var inst_33221 = (state_33239[(2)]);var state_33239__$1 = state_33239;var statearr_33261_33284 = state_33239__$1;(statearr_33261_33284[(2)] = inst_33221);
(statearr_33261_33284[(1)] = (5));
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
}
}
}
}
}
}
}
}
}
});})(c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6292__auto__,c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33265[(0)] = state_machine__6293__auto__);
(statearr_33265[(1)] = (1));
return statearr_33265;
});
var state_machine__6293__auto____1 = (function (state_33239){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33239);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33266){if((e33266 instanceof Object))
{var ex__6296__auto__ = e33266;var statearr_33267_33285 = state_33239;(statearr_33267_33285[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33266;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33286 = state_33239;
state_33239 = G__33286;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33239){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6309__auto__ = (function (){var statearr_33268 = f__6308__auto__.call(null);(statearr_33268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33269);
return statearr_33268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33269,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___33394 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33394,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33394,out){
return (function (state_33370){var state_val_33371 = (state_33370[(1)]);if((state_val_33371 === (7)))
{var inst_33350 = (state_33370[(7)]);var inst_33349 = (state_33370[(8)]);var inst_33349__$1 = (state_33370[(2)]);var inst_33350__$1 = cljs.core.nth.call(null,inst_33349__$1,(0),null);var inst_33351 = cljs.core.nth.call(null,inst_33349__$1,(1),null);var inst_33352 = (inst_33350__$1 == null);var state_33370__$1 = (function (){var statearr_33372 = state_33370;(statearr_33372[(7)] = inst_33350__$1);
(statearr_33372[(9)] = inst_33351);
(statearr_33372[(8)] = inst_33349__$1);
return statearr_33372;
})();if(cljs.core.truth_(inst_33352))
{var statearr_33373_33395 = state_33370__$1;(statearr_33373_33395[(1)] = (8));
} else
{var statearr_33374_33396 = state_33370__$1;(statearr_33374_33396[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (1)))
{var inst_33341 = cljs.core.vec.call(null,chs);var inst_33342 = inst_33341;var state_33370__$1 = (function (){var statearr_33375 = state_33370;(statearr_33375[(10)] = inst_33342);
return statearr_33375;
})();var statearr_33376_33397 = state_33370__$1;(statearr_33376_33397[(2)] = null);
(statearr_33376_33397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (4)))
{var inst_33342 = (state_33370[(10)]);var state_33370__$1 = state_33370;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33370__$1,(7),inst_33342);
} else
{if((state_val_33371 === (6)))
{var inst_33366 = (state_33370[(2)]);var state_33370__$1 = state_33370;var statearr_33377_33398 = state_33370__$1;(statearr_33377_33398[(2)] = inst_33366);
(statearr_33377_33398[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (3)))
{var inst_33368 = (state_33370[(2)]);var state_33370__$1 = state_33370;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33370__$1,inst_33368);
} else
{if((state_val_33371 === (2)))
{var inst_33342 = (state_33370[(10)]);var inst_33344 = cljs.core.count.call(null,inst_33342);var inst_33345 = (inst_33344 > (0));var state_33370__$1 = state_33370;if(cljs.core.truth_(inst_33345))
{var statearr_33379_33399 = state_33370__$1;(statearr_33379_33399[(1)] = (4));
} else
{var statearr_33380_33400 = state_33370__$1;(statearr_33380_33400[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (11)))
{var inst_33342 = (state_33370[(10)]);var inst_33359 = (state_33370[(2)]);var tmp33378 = inst_33342;var inst_33342__$1 = tmp33378;var state_33370__$1 = (function (){var statearr_33381 = state_33370;(statearr_33381[(10)] = inst_33342__$1);
(statearr_33381[(11)] = inst_33359);
return statearr_33381;
})();var statearr_33382_33401 = state_33370__$1;(statearr_33382_33401[(2)] = null);
(statearr_33382_33401[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (9)))
{var inst_33350 = (state_33370[(7)]);var state_33370__$1 = state_33370;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33370__$1,(11),out,inst_33350);
} else
{if((state_val_33371 === (5)))
{var inst_33364 = cljs.core.async.close_BANG_.call(null,out);var state_33370__$1 = state_33370;var statearr_33383_33402 = state_33370__$1;(statearr_33383_33402[(2)] = inst_33364);
(statearr_33383_33402[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (10)))
{var inst_33362 = (state_33370[(2)]);var state_33370__$1 = state_33370;var statearr_33384_33403 = state_33370__$1;(statearr_33384_33403[(2)] = inst_33362);
(statearr_33384_33403[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33371 === (8)))
{var inst_33342 = (state_33370[(10)]);var inst_33350 = (state_33370[(7)]);var inst_33351 = (state_33370[(9)]);var inst_33349 = (state_33370[(8)]);var inst_33354 = (function (){var c = inst_33351;var v = inst_33350;var vec__33347 = inst_33349;var cs = inst_33342;return ((function (c,v,vec__33347,cs,inst_33342,inst_33350,inst_33351,inst_33349,state_val_33371,c__6307__auto___33394,out){
return (function (p1__33287_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33287_SHARP_);
});
;})(c,v,vec__33347,cs,inst_33342,inst_33350,inst_33351,inst_33349,state_val_33371,c__6307__auto___33394,out))
})();var inst_33355 = cljs.core.filterv.call(null,inst_33354,inst_33342);var inst_33342__$1 = inst_33355;var state_33370__$1 = (function (){var statearr_33385 = state_33370;(statearr_33385[(10)] = inst_33342__$1);
return statearr_33385;
})();var statearr_33386_33404 = state_33370__$1;(statearr_33386_33404[(2)] = null);
(statearr_33386_33404[(1)] = (2));
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
}
}
}
}
});})(c__6307__auto___33394,out))
;return ((function (switch__6292__auto__,c__6307__auto___33394,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33390 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33390[(0)] = state_machine__6293__auto__);
(statearr_33390[(1)] = (1));
return statearr_33390;
});
var state_machine__6293__auto____1 = (function (state_33370){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33370);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33391){if((e33391 instanceof Object))
{var ex__6296__auto__ = e33391;var statearr_33392_33405 = state_33370;(statearr_33392_33405[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33370);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33391;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33406 = state_33370;
state_33370 = G__33406;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33370){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33394,out))
})();var state__6309__auto__ = (function (){var statearr_33393 = f__6308__auto__.call(null);(statearr_33393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33394);
return statearr_33393;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33394,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___33499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33499,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33499,out){
return (function (state_33476){var state_val_33477 = (state_33476[(1)]);if((state_val_33477 === (7)))
{var inst_33458 = (state_33476[(7)]);var inst_33458__$1 = (state_33476[(2)]);var inst_33459 = (inst_33458__$1 == null);var inst_33460 = cljs.core.not.call(null,inst_33459);var state_33476__$1 = (function (){var statearr_33478 = state_33476;(statearr_33478[(7)] = inst_33458__$1);
return statearr_33478;
})();if(inst_33460)
{var statearr_33479_33500 = state_33476__$1;(statearr_33479_33500[(1)] = (8));
} else
{var statearr_33480_33501 = state_33476__$1;(statearr_33480_33501[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (1)))
{var inst_33453 = (0);var state_33476__$1 = (function (){var statearr_33481 = state_33476;(statearr_33481[(8)] = inst_33453);
return statearr_33481;
})();var statearr_33482_33502 = state_33476__$1;(statearr_33482_33502[(2)] = null);
(statearr_33482_33502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (4)))
{var state_33476__$1 = state_33476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33476__$1,(7),ch);
} else
{if((state_val_33477 === (6)))
{var inst_33471 = (state_33476[(2)]);var state_33476__$1 = state_33476;var statearr_33483_33503 = state_33476__$1;(statearr_33483_33503[(2)] = inst_33471);
(statearr_33483_33503[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (3)))
{var inst_33473 = (state_33476[(2)]);var inst_33474 = cljs.core.async.close_BANG_.call(null,out);var state_33476__$1 = (function (){var statearr_33484 = state_33476;(statearr_33484[(9)] = inst_33473);
return statearr_33484;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33476__$1,inst_33474);
} else
{if((state_val_33477 === (2)))
{var inst_33453 = (state_33476[(8)]);var inst_33455 = (inst_33453 < n);var state_33476__$1 = state_33476;if(cljs.core.truth_(inst_33455))
{var statearr_33485_33504 = state_33476__$1;(statearr_33485_33504[(1)] = (4));
} else
{var statearr_33486_33505 = state_33476__$1;(statearr_33486_33505[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (11)))
{var inst_33453 = (state_33476[(8)]);var inst_33463 = (state_33476[(2)]);var inst_33464 = (inst_33453 + (1));var inst_33453__$1 = inst_33464;var state_33476__$1 = (function (){var statearr_33487 = state_33476;(statearr_33487[(10)] = inst_33463);
(statearr_33487[(8)] = inst_33453__$1);
return statearr_33487;
})();var statearr_33488_33506 = state_33476__$1;(statearr_33488_33506[(2)] = null);
(statearr_33488_33506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (9)))
{var state_33476__$1 = state_33476;var statearr_33489_33507 = state_33476__$1;(statearr_33489_33507[(2)] = null);
(statearr_33489_33507[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (5)))
{var state_33476__$1 = state_33476;var statearr_33490_33508 = state_33476__$1;(statearr_33490_33508[(2)] = null);
(statearr_33490_33508[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (10)))
{var inst_33468 = (state_33476[(2)]);var state_33476__$1 = state_33476;var statearr_33491_33509 = state_33476__$1;(statearr_33491_33509[(2)] = inst_33468);
(statearr_33491_33509[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33477 === (8)))
{var inst_33458 = (state_33476[(7)]);var state_33476__$1 = state_33476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33476__$1,(11),out,inst_33458);
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
}
}
});})(c__6307__auto___33499,out))
;return ((function (switch__6292__auto__,c__6307__auto___33499,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33495 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33495[(0)] = state_machine__6293__auto__);
(statearr_33495[(1)] = (1));
return statearr_33495;
});
var state_machine__6293__auto____1 = (function (state_33476){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33476);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33496){if((e33496 instanceof Object))
{var ex__6296__auto__ = e33496;var statearr_33497_33510 = state_33476;(statearr_33497_33510[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33476);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33496;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33511 = state_33476;
state_33476 = G__33511;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33476){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33499,out))
})();var state__6309__auto__ = (function (){var statearr_33498 = f__6308__auto__.call(null);(statearr_33498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33499);
return statearr_33498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33499,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33519 = (function (ch,f,map_LT_,meta33520){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33520 = meta33520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33519.cljs$lang$type = true;
cljs.core.async.t33519.cljs$lang$ctorStr = "cljs.core.async/t33519";
cljs.core.async.t33519.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t33519");
});
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33522 = (function (fn1,_,meta33520,ch,f,map_LT_,meta33523){
this.fn1 = fn1;
this._ = _;
this.meta33520 = meta33520;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33523 = meta33523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33522.cljs$lang$type = true;
cljs.core.async.t33522.cljs$lang$ctorStr = "cljs.core.async/t33522";
cljs.core.async.t33522.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t33522");
});})(___$1))
;
cljs.core.async.t33522.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t33522.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t33522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__33512_SHARP_){return f1.call(null,(((p1__33512_SHARP_ == null))?null:self__.f.call(null,p1__33512_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t33522.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_33524){var self__ = this;
var _33524__$1 = this;return self__.meta33523;
});})(___$1))
;
cljs.core.async.t33522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_33524,meta33523__$1){var self__ = this;
var _33524__$1 = this;return (new cljs.core.async.t33522(self__.fn1,self__._,self__.meta33520,self__.ch,self__.f,self__.map_LT_,meta33523__$1));
});})(___$1))
;
cljs.core.async.__GT_t33522 = ((function (___$1){
return (function __GT_t33522(fn1__$1,___$2,meta33520__$1,ch__$2,f__$2,map_LT___$2,meta33523){return (new cljs.core.async.t33522(fn1__$1,___$2,meta33520__$1,ch__$2,f__$2,map_LT___$2,meta33523));
});})(___$1))
;
}
return (new cljs.core.async.t33522(fn1,___$1,self__.meta33520,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3567__auto__ = ret;if(cljs.core.truth_(and__3567__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3567__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33519.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t33519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33521){var self__ = this;
var _33521__$1 = this;return self__.meta33520;
});
cljs.core.async.t33519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33521,meta33520__$1){var self__ = this;
var _33521__$1 = this;return (new cljs.core.async.t33519(self__.ch,self__.f,self__.map_LT_,meta33520__$1));
});
cljs.core.async.__GT_t33519 = (function __GT_t33519(ch__$1,f__$1,map_LT___$1,meta33520){return (new cljs.core.async.t33519(ch__$1,f__$1,map_LT___$1,meta33520));
});
}
return (new cljs.core.async.t33519(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33528 = (function (ch,f,map_GT_,meta33529){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33529 = meta33529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33528.cljs$lang$type = true;
cljs.core.async.t33528.cljs$lang$ctorStr = "cljs.core.async/t33528";
cljs.core.async.t33528.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t33528");
});
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33528.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33530){var self__ = this;
var _33530__$1 = this;return self__.meta33529;
});
cljs.core.async.t33528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33530,meta33529__$1){var self__ = this;
var _33530__$1 = this;return (new cljs.core.async.t33528(self__.ch,self__.f,self__.map_GT_,meta33529__$1));
});
cljs.core.async.__GT_t33528 = (function __GT_t33528(ch__$1,f__$1,map_GT___$1,meta33529){return (new cljs.core.async.t33528(ch__$1,f__$1,map_GT___$1,meta33529));
});
}
return (new cljs.core.async.t33528(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33534 = (function (ch,p,filter_GT_,meta33535){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33535 = meta33535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33534.cljs$lang$type = true;
cljs.core.async.t33534.cljs$lang$ctorStr = "cljs.core.async/t33534";
cljs.core.async.t33534.cljs$lang$ctorPrWriter = (function (this__4146__auto__,writer__4147__auto__,opt__4148__auto__){return cljs.core._write.call(null,writer__4147__auto__,"cljs.core.async/t33534");
});
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33534.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t33534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33536){var self__ = this;
var _33536__$1 = this;return self__.meta33535;
});
cljs.core.async.t33534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33536,meta33535__$1){var self__ = this;
var _33536__$1 = this;return (new cljs.core.async.t33534(self__.ch,self__.p,self__.filter_GT_,meta33535__$1));
});
cljs.core.async.__GT_t33534 = (function __GT_t33534(ch__$1,p__$1,filter_GT___$1,meta33535){return (new cljs.core.async.t33534(ch__$1,p__$1,filter_GT___$1,meta33535));
});
}
return (new cljs.core.async.t33534(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___33619 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33619,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33619,out){
return (function (state_33598){var state_val_33599 = (state_33598[(1)]);if((state_val_33599 === (7)))
{var inst_33594 = (state_33598[(2)]);var state_33598__$1 = state_33598;var statearr_33600_33620 = state_33598__$1;(statearr_33600_33620[(2)] = inst_33594);
(statearr_33600_33620[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (1)))
{var state_33598__$1 = state_33598;var statearr_33601_33621 = state_33598__$1;(statearr_33601_33621[(2)] = null);
(statearr_33601_33621[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (4)))
{var inst_33580 = (state_33598[(7)]);var inst_33580__$1 = (state_33598[(2)]);var inst_33581 = (inst_33580__$1 == null);var state_33598__$1 = (function (){var statearr_33602 = state_33598;(statearr_33602[(7)] = inst_33580__$1);
return statearr_33602;
})();if(cljs.core.truth_(inst_33581))
{var statearr_33603_33622 = state_33598__$1;(statearr_33603_33622[(1)] = (5));
} else
{var statearr_33604_33623 = state_33598__$1;(statearr_33604_33623[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (6)))
{var inst_33580 = (state_33598[(7)]);var inst_33585 = p.call(null,inst_33580);var state_33598__$1 = state_33598;if(cljs.core.truth_(inst_33585))
{var statearr_33605_33624 = state_33598__$1;(statearr_33605_33624[(1)] = (8));
} else
{var statearr_33606_33625 = state_33598__$1;(statearr_33606_33625[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (3)))
{var inst_33596 = (state_33598[(2)]);var state_33598__$1 = state_33598;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33598__$1,inst_33596);
} else
{if((state_val_33599 === (2)))
{var state_33598__$1 = state_33598;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33598__$1,(4),ch);
} else
{if((state_val_33599 === (11)))
{var inst_33588 = (state_33598[(2)]);var state_33598__$1 = state_33598;var statearr_33607_33626 = state_33598__$1;(statearr_33607_33626[(2)] = inst_33588);
(statearr_33607_33626[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (9)))
{var state_33598__$1 = state_33598;var statearr_33608_33627 = state_33598__$1;(statearr_33608_33627[(2)] = null);
(statearr_33608_33627[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (5)))
{var inst_33583 = cljs.core.async.close_BANG_.call(null,out);var state_33598__$1 = state_33598;var statearr_33609_33628 = state_33598__$1;(statearr_33609_33628[(2)] = inst_33583);
(statearr_33609_33628[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (10)))
{var inst_33591 = (state_33598[(2)]);var state_33598__$1 = (function (){var statearr_33610 = state_33598;(statearr_33610[(8)] = inst_33591);
return statearr_33610;
})();var statearr_33611_33629 = state_33598__$1;(statearr_33611_33629[(2)] = null);
(statearr_33611_33629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33599 === (8)))
{var inst_33580 = (state_33598[(7)]);var state_33598__$1 = state_33598;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33598__$1,(11),out,inst_33580);
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
}
}
});})(c__6307__auto___33619,out))
;return ((function (switch__6292__auto__,c__6307__auto___33619,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33615 = [null,null,null,null,null,null,null,null,null];(statearr_33615[(0)] = state_machine__6293__auto__);
(statearr_33615[(1)] = (1));
return statearr_33615;
});
var state_machine__6293__auto____1 = (function (state_33598){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33598);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33616){if((e33616 instanceof Object))
{var ex__6296__auto__ = e33616;var statearr_33617_33630 = state_33598;(statearr_33617_33630[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33598);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33616;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33631 = state_33598;
state_33598 = G__33631;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33598){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33619,out))
})();var state__6309__auto__ = (function (){var statearr_33618 = f__6308__auto__.call(null);(statearr_33618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33619);
return statearr_33618;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33619,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6307__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto__){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto__){
return (function (state_33797){var state_val_33798 = (state_33797[(1)]);if((state_val_33798 === (7)))
{var inst_33793 = (state_33797[(2)]);var state_33797__$1 = state_33797;var statearr_33799_33840 = state_33797__$1;(statearr_33799_33840[(2)] = inst_33793);
(statearr_33799_33840[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (20)))
{var inst_33763 = (state_33797[(7)]);var inst_33774 = (state_33797[(2)]);var inst_33775 = cljs.core.next.call(null,inst_33763);var inst_33749 = inst_33775;var inst_33750 = null;var inst_33751 = (0);var inst_33752 = (0);var state_33797__$1 = (function (){var statearr_33800 = state_33797;(statearr_33800[(8)] = inst_33751);
(statearr_33800[(9)] = inst_33749);
(statearr_33800[(10)] = inst_33750);
(statearr_33800[(11)] = inst_33774);
(statearr_33800[(12)] = inst_33752);
return statearr_33800;
})();var statearr_33801_33841 = state_33797__$1;(statearr_33801_33841[(2)] = null);
(statearr_33801_33841[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (1)))
{var state_33797__$1 = state_33797;var statearr_33802_33842 = state_33797__$1;(statearr_33802_33842[(2)] = null);
(statearr_33802_33842[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (4)))
{var inst_33738 = (state_33797[(13)]);var inst_33738__$1 = (state_33797[(2)]);var inst_33739 = (inst_33738__$1 == null);var state_33797__$1 = (function (){var statearr_33803 = state_33797;(statearr_33803[(13)] = inst_33738__$1);
return statearr_33803;
})();if(cljs.core.truth_(inst_33739))
{var statearr_33804_33843 = state_33797__$1;(statearr_33804_33843[(1)] = (5));
} else
{var statearr_33805_33844 = state_33797__$1;(statearr_33805_33844[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (15)))
{var state_33797__$1 = state_33797;var statearr_33809_33845 = state_33797__$1;(statearr_33809_33845[(2)] = null);
(statearr_33809_33845[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (21)))
{var state_33797__$1 = state_33797;var statearr_33810_33846 = state_33797__$1;(statearr_33810_33846[(2)] = null);
(statearr_33810_33846[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (13)))
{var inst_33751 = (state_33797[(8)]);var inst_33749 = (state_33797[(9)]);var inst_33750 = (state_33797[(10)]);var inst_33752 = (state_33797[(12)]);var inst_33759 = (state_33797[(2)]);var inst_33760 = (inst_33752 + (1));var tmp33806 = inst_33751;var tmp33807 = inst_33749;var tmp33808 = inst_33750;var inst_33749__$1 = tmp33807;var inst_33750__$1 = tmp33808;var inst_33751__$1 = tmp33806;var inst_33752__$1 = inst_33760;var state_33797__$1 = (function (){var statearr_33811 = state_33797;(statearr_33811[(8)] = inst_33751__$1);
(statearr_33811[(9)] = inst_33749__$1);
(statearr_33811[(10)] = inst_33750__$1);
(statearr_33811[(14)] = inst_33759);
(statearr_33811[(12)] = inst_33752__$1);
return statearr_33811;
})();var statearr_33812_33847 = state_33797__$1;(statearr_33812_33847[(2)] = null);
(statearr_33812_33847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (22)))
{var state_33797__$1 = state_33797;var statearr_33813_33848 = state_33797__$1;(statearr_33813_33848[(2)] = null);
(statearr_33813_33848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (6)))
{var inst_33738 = (state_33797[(13)]);var inst_33747 = f.call(null,inst_33738);var inst_33748 = cljs.core.seq.call(null,inst_33747);var inst_33749 = inst_33748;var inst_33750 = null;var inst_33751 = (0);var inst_33752 = (0);var state_33797__$1 = (function (){var statearr_33814 = state_33797;(statearr_33814[(8)] = inst_33751);
(statearr_33814[(9)] = inst_33749);
(statearr_33814[(10)] = inst_33750);
(statearr_33814[(12)] = inst_33752);
return statearr_33814;
})();var statearr_33815_33849 = state_33797__$1;(statearr_33815_33849[(2)] = null);
(statearr_33815_33849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (17)))
{var inst_33763 = (state_33797[(7)]);var inst_33767 = cljs.core.chunk_first.call(null,inst_33763);var inst_33768 = cljs.core.chunk_rest.call(null,inst_33763);var inst_33769 = cljs.core.count.call(null,inst_33767);var inst_33749 = inst_33768;var inst_33750 = inst_33767;var inst_33751 = inst_33769;var inst_33752 = (0);var state_33797__$1 = (function (){var statearr_33816 = state_33797;(statearr_33816[(8)] = inst_33751);
(statearr_33816[(9)] = inst_33749);
(statearr_33816[(10)] = inst_33750);
(statearr_33816[(12)] = inst_33752);
return statearr_33816;
})();var statearr_33817_33850 = state_33797__$1;(statearr_33817_33850[(2)] = null);
(statearr_33817_33850[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (3)))
{var inst_33795 = (state_33797[(2)]);var state_33797__$1 = state_33797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33797__$1,inst_33795);
} else
{if((state_val_33798 === (12)))
{var inst_33783 = (state_33797[(2)]);var state_33797__$1 = state_33797;var statearr_33818_33851 = state_33797__$1;(statearr_33818_33851[(2)] = inst_33783);
(statearr_33818_33851[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (2)))
{var state_33797__$1 = state_33797;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33797__$1,(4),in$);
} else
{if((state_val_33798 === (23)))
{var inst_33791 = (state_33797[(2)]);var state_33797__$1 = state_33797;var statearr_33819_33852 = state_33797__$1;(statearr_33819_33852[(2)] = inst_33791);
(statearr_33819_33852[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (19)))
{var inst_33778 = (state_33797[(2)]);var state_33797__$1 = state_33797;var statearr_33820_33853 = state_33797__$1;(statearr_33820_33853[(2)] = inst_33778);
(statearr_33820_33853[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (11)))
{var inst_33763 = (state_33797[(7)]);var inst_33749 = (state_33797[(9)]);var inst_33763__$1 = cljs.core.seq.call(null,inst_33749);var state_33797__$1 = (function (){var statearr_33821 = state_33797;(statearr_33821[(7)] = inst_33763__$1);
return statearr_33821;
})();if(inst_33763__$1)
{var statearr_33822_33854 = state_33797__$1;(statearr_33822_33854[(1)] = (14));
} else
{var statearr_33823_33855 = state_33797__$1;(statearr_33823_33855[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (9)))
{var inst_33785 = (state_33797[(2)]);var inst_33786 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_33797__$1 = (function (){var statearr_33824 = state_33797;(statearr_33824[(15)] = inst_33785);
return statearr_33824;
})();if(cljs.core.truth_(inst_33786))
{var statearr_33825_33856 = state_33797__$1;(statearr_33825_33856[(1)] = (21));
} else
{var statearr_33826_33857 = state_33797__$1;(statearr_33826_33857[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (5)))
{var inst_33741 = cljs.core.async.close_BANG_.call(null,out);var state_33797__$1 = state_33797;var statearr_33827_33858 = state_33797__$1;(statearr_33827_33858[(2)] = inst_33741);
(statearr_33827_33858[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (14)))
{var inst_33763 = (state_33797[(7)]);var inst_33765 = cljs.core.chunked_seq_QMARK_.call(null,inst_33763);var state_33797__$1 = state_33797;if(inst_33765)
{var statearr_33828_33859 = state_33797__$1;(statearr_33828_33859[(1)] = (17));
} else
{var statearr_33829_33860 = state_33797__$1;(statearr_33829_33860[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (16)))
{var inst_33781 = (state_33797[(2)]);var state_33797__$1 = state_33797;var statearr_33830_33861 = state_33797__$1;(statearr_33830_33861[(2)] = inst_33781);
(statearr_33830_33861[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33798 === (10)))
{var inst_33750 = (state_33797[(10)]);var inst_33752 = (state_33797[(12)]);var inst_33757 = cljs.core._nth.call(null,inst_33750,inst_33752);var state_33797__$1 = state_33797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33797__$1,(13),out,inst_33757);
} else
{if((state_val_33798 === (18)))
{var inst_33763 = (state_33797[(7)]);var inst_33772 = cljs.core.first.call(null,inst_33763);var state_33797__$1 = state_33797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33797__$1,(20),out,inst_33772);
} else
{if((state_val_33798 === (8)))
{var inst_33751 = (state_33797[(8)]);var inst_33752 = (state_33797[(12)]);var inst_33754 = (inst_33752 < inst_33751);var inst_33755 = inst_33754;var state_33797__$1 = state_33797;if(cljs.core.truth_(inst_33755))
{var statearr_33831_33862 = state_33797__$1;(statearr_33831_33862[(1)] = (10));
} else
{var statearr_33832_33863 = state_33797__$1;(statearr_33832_33863[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6307__auto__))
;return ((function (switch__6292__auto__,c__6307__auto__){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33836[(0)] = state_machine__6293__auto__);
(statearr_33836[(1)] = (1));
return statearr_33836;
});
var state_machine__6293__auto____1 = (function (state_33797){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33797);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33837){if((e33837 instanceof Object))
{var ex__6296__auto__ = e33837;var statearr_33838_33864 = state_33797;(statearr_33838_33864[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33797);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33837;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33865 = state_33797;
state_33797 = G__33865;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33797){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto__))
})();var state__6309__auto__ = (function (){var statearr_33839 = f__6308__auto__.call(null);(statearr_33839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto__);
return statearr_33839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto__))
);
return c__6307__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___33962 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___33962,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___33962,out){
return (function (state_33937){var state_val_33938 = (state_33937[(1)]);if((state_val_33938 === (7)))
{var inst_33932 = (state_33937[(2)]);var state_33937__$1 = state_33937;var statearr_33939_33963 = state_33937__$1;(statearr_33939_33963[(2)] = inst_33932);
(statearr_33939_33963[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (1)))
{var inst_33914 = null;var state_33937__$1 = (function (){var statearr_33940 = state_33937;(statearr_33940[(7)] = inst_33914);
return statearr_33940;
})();var statearr_33941_33964 = state_33937__$1;(statearr_33941_33964[(2)] = null);
(statearr_33941_33964[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (4)))
{var inst_33917 = (state_33937[(8)]);var inst_33917__$1 = (state_33937[(2)]);var inst_33918 = (inst_33917__$1 == null);var inst_33919 = cljs.core.not.call(null,inst_33918);var state_33937__$1 = (function (){var statearr_33942 = state_33937;(statearr_33942[(8)] = inst_33917__$1);
return statearr_33942;
})();if(inst_33919)
{var statearr_33943_33965 = state_33937__$1;(statearr_33943_33965[(1)] = (5));
} else
{var statearr_33944_33966 = state_33937__$1;(statearr_33944_33966[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (6)))
{var state_33937__$1 = state_33937;var statearr_33945_33967 = state_33937__$1;(statearr_33945_33967[(2)] = null);
(statearr_33945_33967[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (3)))
{var inst_33934 = (state_33937[(2)]);var inst_33935 = cljs.core.async.close_BANG_.call(null,out);var state_33937__$1 = (function (){var statearr_33946 = state_33937;(statearr_33946[(9)] = inst_33934);
return statearr_33946;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33937__$1,inst_33935);
} else
{if((state_val_33938 === (2)))
{var state_33937__$1 = state_33937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33937__$1,(4),ch);
} else
{if((state_val_33938 === (11)))
{var inst_33917 = (state_33937[(8)]);var inst_33926 = (state_33937[(2)]);var inst_33914 = inst_33917;var state_33937__$1 = (function (){var statearr_33947 = state_33937;(statearr_33947[(7)] = inst_33914);
(statearr_33947[(10)] = inst_33926);
return statearr_33947;
})();var statearr_33948_33968 = state_33937__$1;(statearr_33948_33968[(2)] = null);
(statearr_33948_33968[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (9)))
{var inst_33917 = (state_33937[(8)]);var state_33937__$1 = state_33937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33937__$1,(11),out,inst_33917);
} else
{if((state_val_33938 === (5)))
{var inst_33914 = (state_33937[(7)]);var inst_33917 = (state_33937[(8)]);var inst_33921 = cljs.core._EQ_.call(null,inst_33917,inst_33914);var state_33937__$1 = state_33937;if(inst_33921)
{var statearr_33950_33969 = state_33937__$1;(statearr_33950_33969[(1)] = (8));
} else
{var statearr_33951_33970 = state_33937__$1;(statearr_33951_33970[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (10)))
{var inst_33929 = (state_33937[(2)]);var state_33937__$1 = state_33937;var statearr_33952_33971 = state_33937__$1;(statearr_33952_33971[(2)] = inst_33929);
(statearr_33952_33971[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33938 === (8)))
{var inst_33914 = (state_33937[(7)]);var tmp33949 = inst_33914;var inst_33914__$1 = tmp33949;var state_33937__$1 = (function (){var statearr_33953 = state_33937;(statearr_33953[(7)] = inst_33914__$1);
return statearr_33953;
})();var statearr_33954_33972 = state_33937__$1;(statearr_33954_33972[(2)] = null);
(statearr_33954_33972[(1)] = (2));
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
}
}
}
}
});})(c__6307__auto___33962,out))
;return ((function (switch__6292__auto__,c__6307__auto___33962,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_33958 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33958[(0)] = state_machine__6293__auto__);
(statearr_33958[(1)] = (1));
return statearr_33958;
});
var state_machine__6293__auto____1 = (function (state_33937){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_33937);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e33959){if((e33959 instanceof Object))
{var ex__6296__auto__ = e33959;var statearr_33960_33973 = state_33937;(statearr_33960_33973[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33937);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33959;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33974 = state_33937;
state_33937 = G__33974;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_33937){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_33937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___33962,out))
})();var state__6309__auto__ = (function (){var statearr_33961 = f__6308__auto__.call(null);(statearr_33961[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___33962);
return statearr_33961;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___33962,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___34109 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___34109,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___34109,out){
return (function (state_34079){var state_val_34080 = (state_34079[(1)]);if((state_val_34080 === (7)))
{var inst_34075 = (state_34079[(2)]);var state_34079__$1 = state_34079;var statearr_34081_34110 = state_34079__$1;(statearr_34081_34110[(2)] = inst_34075);
(statearr_34081_34110[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (1)))
{var inst_34042 = (new Array(n));var inst_34043 = inst_34042;var inst_34044 = (0);var state_34079__$1 = (function (){var statearr_34082 = state_34079;(statearr_34082[(7)] = inst_34043);
(statearr_34082[(8)] = inst_34044);
return statearr_34082;
})();var statearr_34083_34111 = state_34079__$1;(statearr_34083_34111[(2)] = null);
(statearr_34083_34111[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (4)))
{var inst_34047 = (state_34079[(9)]);var inst_34047__$1 = (state_34079[(2)]);var inst_34048 = (inst_34047__$1 == null);var inst_34049 = cljs.core.not.call(null,inst_34048);var state_34079__$1 = (function (){var statearr_34084 = state_34079;(statearr_34084[(9)] = inst_34047__$1);
return statearr_34084;
})();if(inst_34049)
{var statearr_34085_34112 = state_34079__$1;(statearr_34085_34112[(1)] = (5));
} else
{var statearr_34086_34113 = state_34079__$1;(statearr_34086_34113[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (15)))
{var inst_34069 = (state_34079[(2)]);var state_34079__$1 = state_34079;var statearr_34087_34114 = state_34079__$1;(statearr_34087_34114[(2)] = inst_34069);
(statearr_34087_34114[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (13)))
{var state_34079__$1 = state_34079;var statearr_34088_34115 = state_34079__$1;(statearr_34088_34115[(2)] = null);
(statearr_34088_34115[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (6)))
{var inst_34044 = (state_34079[(8)]);var inst_34065 = (inst_34044 > (0));var state_34079__$1 = state_34079;if(cljs.core.truth_(inst_34065))
{var statearr_34089_34116 = state_34079__$1;(statearr_34089_34116[(1)] = (12));
} else
{var statearr_34090_34117 = state_34079__$1;(statearr_34090_34117[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (3)))
{var inst_34077 = (state_34079[(2)]);var state_34079__$1 = state_34079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34079__$1,inst_34077);
} else
{if((state_val_34080 === (12)))
{var inst_34043 = (state_34079[(7)]);var inst_34067 = cljs.core.vec.call(null,inst_34043);var state_34079__$1 = state_34079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34079__$1,(15),out,inst_34067);
} else
{if((state_val_34080 === (2)))
{var state_34079__$1 = state_34079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34079__$1,(4),ch);
} else
{if((state_val_34080 === (11)))
{var inst_34059 = (state_34079[(2)]);var inst_34060 = (new Array(n));var inst_34043 = inst_34060;var inst_34044 = (0);var state_34079__$1 = (function (){var statearr_34091 = state_34079;(statearr_34091[(7)] = inst_34043);
(statearr_34091[(10)] = inst_34059);
(statearr_34091[(8)] = inst_34044);
return statearr_34091;
})();var statearr_34092_34118 = state_34079__$1;(statearr_34092_34118[(2)] = null);
(statearr_34092_34118[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (9)))
{var inst_34043 = (state_34079[(7)]);var inst_34057 = cljs.core.vec.call(null,inst_34043);var state_34079__$1 = state_34079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34079__$1,(11),out,inst_34057);
} else
{if((state_val_34080 === (5)))
{var inst_34043 = (state_34079[(7)]);var inst_34052 = (state_34079[(11)]);var inst_34047 = (state_34079[(9)]);var inst_34044 = (state_34079[(8)]);var inst_34051 = (inst_34043[inst_34044] = inst_34047);var inst_34052__$1 = (inst_34044 + (1));var inst_34053 = (inst_34052__$1 < n);var state_34079__$1 = (function (){var statearr_34093 = state_34079;(statearr_34093[(11)] = inst_34052__$1);
(statearr_34093[(12)] = inst_34051);
return statearr_34093;
})();if(cljs.core.truth_(inst_34053))
{var statearr_34094_34119 = state_34079__$1;(statearr_34094_34119[(1)] = (8));
} else
{var statearr_34095_34120 = state_34079__$1;(statearr_34095_34120[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (14)))
{var inst_34072 = (state_34079[(2)]);var inst_34073 = cljs.core.async.close_BANG_.call(null,out);var state_34079__$1 = (function (){var statearr_34097 = state_34079;(statearr_34097[(13)] = inst_34072);
return statearr_34097;
})();var statearr_34098_34121 = state_34079__$1;(statearr_34098_34121[(2)] = inst_34073);
(statearr_34098_34121[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (10)))
{var inst_34063 = (state_34079[(2)]);var state_34079__$1 = state_34079;var statearr_34099_34122 = state_34079__$1;(statearr_34099_34122[(2)] = inst_34063);
(statearr_34099_34122[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34080 === (8)))
{var inst_34043 = (state_34079[(7)]);var inst_34052 = (state_34079[(11)]);var tmp34096 = inst_34043;var inst_34043__$1 = tmp34096;var inst_34044 = inst_34052;var state_34079__$1 = (function (){var statearr_34100 = state_34079;(statearr_34100[(7)] = inst_34043__$1);
(statearr_34100[(8)] = inst_34044);
return statearr_34100;
})();var statearr_34101_34123 = state_34079__$1;(statearr_34101_34123[(2)] = null);
(statearr_34101_34123[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__6307__auto___34109,out))
;return ((function (switch__6292__auto__,c__6307__auto___34109,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_34105 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34105[(0)] = state_machine__6293__auto__);
(statearr_34105[(1)] = (1));
return statearr_34105;
});
var state_machine__6293__auto____1 = (function (state_34079){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_34079);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e34106){if((e34106 instanceof Object))
{var ex__6296__auto__ = e34106;var statearr_34107_34124 = state_34079;(statearr_34107_34124[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34106;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34125 = state_34079;
state_34079 = G__34125;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_34079){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_34079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___34109,out))
})();var state__6309__auto__ = (function (){var statearr_34108 = f__6308__auto__.call(null);(statearr_34108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___34109);
return statearr_34108;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___34109,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6307__auto___34268 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6307__auto___34268,out){
return (function (){var f__6308__auto__ = (function (){var switch__6292__auto__ = ((function (c__6307__auto___34268,out){
return (function (state_34238){var state_val_34239 = (state_34238[(1)]);if((state_val_34239 === (7)))
{var inst_34234 = (state_34238[(2)]);var state_34238__$1 = state_34238;var statearr_34240_34269 = state_34238__$1;(statearr_34240_34269[(2)] = inst_34234);
(statearr_34240_34269[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (1)))
{var inst_34197 = [];var inst_34198 = inst_34197;var inst_34199 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_34238__$1 = (function (){var statearr_34241 = state_34238;(statearr_34241[(7)] = inst_34199);
(statearr_34241[(8)] = inst_34198);
return statearr_34241;
})();var statearr_34242_34270 = state_34238__$1;(statearr_34242_34270[(2)] = null);
(statearr_34242_34270[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (4)))
{var inst_34202 = (state_34238[(9)]);var inst_34202__$1 = (state_34238[(2)]);var inst_34203 = (inst_34202__$1 == null);var inst_34204 = cljs.core.not.call(null,inst_34203);var state_34238__$1 = (function (){var statearr_34243 = state_34238;(statearr_34243[(9)] = inst_34202__$1);
return statearr_34243;
})();if(inst_34204)
{var statearr_34244_34271 = state_34238__$1;(statearr_34244_34271[(1)] = (5));
} else
{var statearr_34245_34272 = state_34238__$1;(statearr_34245_34272[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (15)))
{var inst_34228 = (state_34238[(2)]);var state_34238__$1 = state_34238;var statearr_34246_34273 = state_34238__$1;(statearr_34246_34273[(2)] = inst_34228);
(statearr_34246_34273[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (13)))
{var state_34238__$1 = state_34238;var statearr_34247_34274 = state_34238__$1;(statearr_34247_34274[(2)] = null);
(statearr_34247_34274[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (6)))
{var inst_34198 = (state_34238[(8)]);var inst_34223 = inst_34198.length;var inst_34224 = (inst_34223 > (0));var state_34238__$1 = state_34238;if(cljs.core.truth_(inst_34224))
{var statearr_34248_34275 = state_34238__$1;(statearr_34248_34275[(1)] = (12));
} else
{var statearr_34249_34276 = state_34238__$1;(statearr_34249_34276[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (3)))
{var inst_34236 = (state_34238[(2)]);var state_34238__$1 = state_34238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34238__$1,inst_34236);
} else
{if((state_val_34239 === (12)))
{var inst_34198 = (state_34238[(8)]);var inst_34226 = cljs.core.vec.call(null,inst_34198);var state_34238__$1 = state_34238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34238__$1,(15),out,inst_34226);
} else
{if((state_val_34239 === (2)))
{var state_34238__$1 = state_34238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34238__$1,(4),ch);
} else
{if((state_val_34239 === (11)))
{var inst_34202 = (state_34238[(9)]);var inst_34206 = (state_34238[(10)]);var inst_34216 = (state_34238[(2)]);var inst_34217 = [];var inst_34218 = inst_34217.push(inst_34202);var inst_34198 = inst_34217;var inst_34199 = inst_34206;var state_34238__$1 = (function (){var statearr_34250 = state_34238;(statearr_34250[(7)] = inst_34199);
(statearr_34250[(8)] = inst_34198);
(statearr_34250[(11)] = inst_34218);
(statearr_34250[(12)] = inst_34216);
return statearr_34250;
})();var statearr_34251_34277 = state_34238__$1;(statearr_34251_34277[(2)] = null);
(statearr_34251_34277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (9)))
{var inst_34198 = (state_34238[(8)]);var inst_34214 = cljs.core.vec.call(null,inst_34198);var state_34238__$1 = state_34238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34238__$1,(11),out,inst_34214);
} else
{if((state_val_34239 === (5)))
{var inst_34199 = (state_34238[(7)]);var inst_34202 = (state_34238[(9)]);var inst_34206 = (state_34238[(10)]);var inst_34206__$1 = f.call(null,inst_34202);var inst_34207 = cljs.core._EQ_.call(null,inst_34206__$1,inst_34199);var inst_34208 = cljs.core.keyword_identical_QMARK_.call(null,inst_34199,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_34209 = (inst_34207) || (inst_34208);var state_34238__$1 = (function (){var statearr_34252 = state_34238;(statearr_34252[(10)] = inst_34206__$1);
return statearr_34252;
})();if(cljs.core.truth_(inst_34209))
{var statearr_34253_34278 = state_34238__$1;(statearr_34253_34278[(1)] = (8));
} else
{var statearr_34254_34279 = state_34238__$1;(statearr_34254_34279[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (14)))
{var inst_34231 = (state_34238[(2)]);var inst_34232 = cljs.core.async.close_BANG_.call(null,out);var state_34238__$1 = (function (){var statearr_34256 = state_34238;(statearr_34256[(13)] = inst_34231);
return statearr_34256;
})();var statearr_34257_34280 = state_34238__$1;(statearr_34257_34280[(2)] = inst_34232);
(statearr_34257_34280[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (10)))
{var inst_34221 = (state_34238[(2)]);var state_34238__$1 = state_34238;var statearr_34258_34281 = state_34238__$1;(statearr_34258_34281[(2)] = inst_34221);
(statearr_34258_34281[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34239 === (8)))
{var inst_34198 = (state_34238[(8)]);var inst_34202 = (state_34238[(9)]);var inst_34206 = (state_34238[(10)]);var inst_34211 = inst_34198.push(inst_34202);var tmp34255 = inst_34198;var inst_34198__$1 = tmp34255;var inst_34199 = inst_34206;var state_34238__$1 = (function (){var statearr_34259 = state_34238;(statearr_34259[(7)] = inst_34199);
(statearr_34259[(8)] = inst_34198__$1);
(statearr_34259[(14)] = inst_34211);
return statearr_34259;
})();var statearr_34260_34282 = state_34238__$1;(statearr_34260_34282[(2)] = null);
(statearr_34260_34282[(1)] = (2));
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
}
}
}
}
}
}
}
}
});})(c__6307__auto___34268,out))
;return ((function (switch__6292__auto__,c__6307__auto___34268,out){
return (function() {
var state_machine__6293__auto__ = null;
var state_machine__6293__auto____0 = (function (){var statearr_34264 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34264[(0)] = state_machine__6293__auto__);
(statearr_34264[(1)] = (1));
return statearr_34264;
});
var state_machine__6293__auto____1 = (function (state_34238){while(true){
var ret_value__6294__auto__ = (function (){try{while(true){
var result__6295__auto__ = switch__6292__auto__.call(null,state_34238);if(cljs.core.keyword_identical_QMARK_.call(null,result__6295__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6295__auto__;
}
break;
}
}catch (e34265){if((e34265 instanceof Object))
{var ex__6296__auto__ = e34265;var statearr_34266_34283 = state_34238;(statearr_34266_34283[(5)] = ex__6296__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34238);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34265;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6294__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34284 = state_34238;
state_34238 = G__34284;
continue;
}
} else
{return ret_value__6294__auto__;
}
break;
}
});
state_machine__6293__auto__ = function(state_34238){
switch(arguments.length){
case 0:
return state_machine__6293__auto____0.call(this);
case 1:
return state_machine__6293__auto____1.call(this,state_34238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6293__auto____0;
state_machine__6293__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6293__auto____1;
return state_machine__6293__auto__;
})()
;})(switch__6292__auto__,c__6307__auto___34268,out))
})();var state__6309__auto__ = (function (){var statearr_34267 = f__6308__auto__.call(null);(statearr_34267[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6307__auto___34268);
return statearr_34267;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6309__auto__);
});})(c__6307__auto___34268,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map