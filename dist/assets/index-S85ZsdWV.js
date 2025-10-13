(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var mg={exports:{}},Zu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _w;function YC(){if(_w)return Zu;_w=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,a,l){var c=null;if(l!==void 0&&(c=""+l),a.key!==void 0&&(c=""+a.key),"key"in a){l={};for(var f in a)f!=="key"&&(l[f]=a[f])}else l=a;return a=l.ref,{$$typeof:r,type:i,key:c,ref:a!==void 0?a:null,props:l}}return Zu.Fragment=e,Zu.jsx=t,Zu.jsxs=t,Zu}var yw;function $C(){return yw||(yw=1,mg.exports=YC()),mg.exports}var k=$C(),pg={exports:{}},Se={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vw;function XC(){if(vw)return Se;vw=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),A=Symbol.iterator;function P(x){return x===null||typeof x!="object"?null:(x=A&&x[A]||x["@@iterator"],typeof x=="function"?x:null)}var G={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Q=Object.assign,$={};function le(x,W,ie){this.props=x,this.context=W,this.refs=$,this.updater=ie||G}le.prototype.isReactComponent={},le.prototype.setState=function(x,W){if(typeof x!="object"&&typeof x!="function"&&x!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,x,W,"setState")},le.prototype.forceUpdate=function(x){this.updater.enqueueForceUpdate(this,x,"forceUpdate")};function he(){}he.prototype=le.prototype;function re(x,W,ie){this.props=x,this.context=W,this.refs=$,this.updater=ie||G}var ve=re.prototype=new he;ve.constructor=re,Q(ve,le.prototype),ve.isPureReactComponent=!0;var de=Array.isArray;function ue(){}var R={H:null,A:null,T:null,S:null},b=Object.prototype.hasOwnProperty;function S(x,W,ie){var pe=ie.ref;return{$$typeof:r,type:x,key:W,ref:pe!==void 0?pe:null,props:ie}}function N(x,W){return S(x.type,W,x.props)}function V(x){return typeof x=="object"&&x!==null&&x.$$typeof===r}function L(x){var W={"=":"=0",":":"=2"};return"$"+x.replace(/[=:]/g,function(ie){return W[ie]})}var C=/\/+/g;function ct(x,W){return typeof x=="object"&&x!==null&&x.key!=null?L(""+x.key):W.toString(36)}function yt(x){switch(x.status){case"fulfilled":return x.value;case"rejected":throw x.reason;default:switch(typeof x.status=="string"?x.then(ue,ue):(x.status="pending",x.then(function(W){x.status==="pending"&&(x.status="fulfilled",x.value=W)},function(W){x.status==="pending"&&(x.status="rejected",x.reason=W)})),x.status){case"fulfilled":return x.value;case"rejected":throw x.reason}}throw x}function X(x,W,ie,pe,be){var Oe=typeof x;(Oe==="undefined"||Oe==="boolean")&&(x=null);var Be=!1;if(x===null)Be=!0;else switch(Oe){case"bigint":case"string":case"number":Be=!0;break;case"object":switch(x.$$typeof){case r:case e:Be=!0;break;case v:return Be=x._init,X(Be(x._payload),W,ie,pe,be)}}if(Be)return be=be(x),Be=pe===""?"."+ct(x,0):pe,de(be)?(ie="",Be!=null&&(ie=Be.replace(C,"$&/")+"/"),X(be,W,ie,"",function(Ci){return Ci})):be!=null&&(V(be)&&(be=N(be,ie+(be.key==null||x&&x.key===be.key?"":(""+be.key).replace(C,"$&/")+"/")+Be)),W.push(be)),1;Be=0;var rn=pe===""?".":pe+":";if(de(x))for(var gt=0;gt<x.length;gt++)pe=x[gt],Oe=rn+ct(pe,gt),Be+=X(pe,W,ie,Oe,be);else if(gt=P(x),typeof gt=="function")for(x=gt.call(x),gt=0;!(pe=x.next()).done;)pe=pe.value,Oe=rn+ct(pe,gt++),Be+=X(pe,W,ie,Oe,be);else if(Oe==="object"){if(typeof x.then=="function")return X(yt(x),W,ie,pe,be);throw W=String(x),Error("Objects are not valid as a React child (found: "+(W==="[object Object]"?"object with keys {"+Object.keys(x).join(", ")+"}":W)+"). If you meant to render a collection of children, use an array instead.")}return Be}function ae(x,W,ie){if(x==null)return x;var pe=[],be=0;return X(x,pe,"","",function(Oe){return W.call(ie,Oe,be++)}),pe}function we(x){if(x._status===-1){var W=x._result;W=W(),W.then(function(ie){(x._status===0||x._status===-1)&&(x._status=1,x._result=ie)},function(ie){(x._status===0||x._status===-1)&&(x._status=2,x._result=ie)}),x._status===-1&&(x._status=0,x._result=W)}if(x._status===1)return x._result.default;throw x._result}var Ge=typeof reportError=="function"?reportError:function(x){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var W=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof x=="object"&&x!==null&&typeof x.message=="string"?String(x.message):String(x),error:x});if(!window.dispatchEvent(W))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",x);return}console.error(x)},$e={map:ae,forEach:function(x,W,ie){ae(x,function(){W.apply(this,arguments)},ie)},count:function(x){var W=0;return ae(x,function(){W++}),W},toArray:function(x){return ae(x,function(W){return W})||[]},only:function(x){if(!V(x))throw Error("React.Children.only expected to receive a single React element child.");return x}};return Se.Activity=T,Se.Children=$e,Se.Component=le,Se.Fragment=t,Se.Profiler=a,Se.PureComponent=re,Se.StrictMode=i,Se.Suspense=p,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=R,Se.__COMPILER_RUNTIME={__proto__:null,c:function(x){return R.H.useMemoCache(x)}},Se.cache=function(x){return function(){return x.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(x,W,ie){if(x==null)throw Error("The argument must be a React element, but you passed "+x+".");var pe=Q({},x.props),be=x.key;if(W!=null)for(Oe in W.key!==void 0&&(be=""+W.key),W)!b.call(W,Oe)||Oe==="key"||Oe==="__self"||Oe==="__source"||Oe==="ref"&&W.ref===void 0||(pe[Oe]=W[Oe]);var Oe=arguments.length-2;if(Oe===1)pe.children=ie;else if(1<Oe){for(var Be=Array(Oe),rn=0;rn<Oe;rn++)Be[rn]=arguments[rn+2];pe.children=Be}return S(x.type,be,pe)},Se.createContext=function(x){return x={$$typeof:c,_currentValue:x,_currentValue2:x,_threadCount:0,Provider:null,Consumer:null},x.Provider=x,x.Consumer={$$typeof:l,_context:x},x},Se.createElement=function(x,W,ie){var pe,be={},Oe=null;if(W!=null)for(pe in W.key!==void 0&&(Oe=""+W.key),W)b.call(W,pe)&&pe!=="key"&&pe!=="__self"&&pe!=="__source"&&(be[pe]=W[pe]);var Be=arguments.length-2;if(Be===1)be.children=ie;else if(1<Be){for(var rn=Array(Be),gt=0;gt<Be;gt++)rn[gt]=arguments[gt+2];be.children=rn}if(x&&x.defaultProps)for(pe in Be=x.defaultProps,Be)be[pe]===void 0&&(be[pe]=Be[pe]);return S(x,Oe,be)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(x){return{$$typeof:f,render:x}},Se.isValidElement=V,Se.lazy=function(x){return{$$typeof:v,_payload:{_status:-1,_result:x},_init:we}},Se.memo=function(x,W){return{$$typeof:g,type:x,compare:W===void 0?null:W}},Se.startTransition=function(x){var W=R.T,ie={};R.T=ie;try{var pe=x(),be=R.S;be!==null&&be(ie,pe),typeof pe=="object"&&pe!==null&&typeof pe.then=="function"&&pe.then(ue,Ge)}catch(Oe){Ge(Oe)}finally{W!==null&&ie.types!==null&&(W.types=ie.types),R.T=W}},Se.unstable_useCacheRefresh=function(){return R.H.useCacheRefresh()},Se.use=function(x){return R.H.use(x)},Se.useActionState=function(x,W,ie){return R.H.useActionState(x,W,ie)},Se.useCallback=function(x,W){return R.H.useCallback(x,W)},Se.useContext=function(x){return R.H.useContext(x)},Se.useDebugValue=function(){},Se.useDeferredValue=function(x,W){return R.H.useDeferredValue(x,W)},Se.useEffect=function(x,W){return R.H.useEffect(x,W)},Se.useEffectEvent=function(x){return R.H.useEffectEvent(x)},Se.useId=function(){return R.H.useId()},Se.useImperativeHandle=function(x,W,ie){return R.H.useImperativeHandle(x,W,ie)},Se.useInsertionEffect=function(x,W){return R.H.useInsertionEffect(x,W)},Se.useLayoutEffect=function(x,W){return R.H.useLayoutEffect(x,W)},Se.useMemo=function(x,W){return R.H.useMemo(x,W)},Se.useOptimistic=function(x,W){return R.H.useOptimistic(x,W)},Se.useReducer=function(x,W,ie){return R.H.useReducer(x,W,ie)},Se.useRef=function(x){return R.H.useRef(x)},Se.useState=function(x){return R.H.useState(x)},Se.useSyncExternalStore=function(x,W,ie){return R.H.useSyncExternalStore(x,W,ie)},Se.useTransition=function(){return R.H.useTransition()},Se.version="19.2.0",Se}var Ew;function T_(){return Ew||(Ew=1,pg.exports=XC()),pg.exports}var Ie=T_(),gg={exports:{}},ec={},_g={exports:{}},yg={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tw;function WC(){return Tw||(Tw=1,(function(r){function e(X,ae){var we=X.length;X.push(ae);e:for(;0<we;){var Ge=we-1>>>1,$e=X[Ge];if(0<a($e,ae))X[Ge]=ae,X[we]=$e,we=Ge;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ae=X[0],we=X.pop();if(we!==ae){X[0]=we;e:for(var Ge=0,$e=X.length,x=$e>>>1;Ge<x;){var W=2*(Ge+1)-1,ie=X[W],pe=W+1,be=X[pe];if(0>a(ie,we))pe<$e&&0>a(be,ie)?(X[Ge]=be,X[pe]=we,Ge=pe):(X[Ge]=ie,X[W]=we,Ge=W);else if(pe<$e&&0>a(be,we))X[Ge]=be,X[pe]=we,Ge=pe;else break e}}return ae}function a(X,ae){var we=X.sortIndex-ae.sortIndex;return we!==0?we:X.id-ae.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],g=[],v=1,T=null,A=3,P=!1,G=!1,Q=!1,$=!1,le=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,re=typeof setImmediate<"u"?setImmediate:null;function ve(X){for(var ae=t(g);ae!==null;){if(ae.callback===null)i(g);else if(ae.startTime<=X)i(g),ae.sortIndex=ae.expirationTime,e(p,ae);else break;ae=t(g)}}function de(X){if(Q=!1,ve(X),!G)if(t(p)!==null)G=!0,ue||(ue=!0,L());else{var ae=t(g);ae!==null&&yt(de,ae.startTime-X)}}var ue=!1,R=-1,b=5,S=-1;function N(){return $?!0:!(r.unstable_now()-S<b)}function V(){if($=!1,ue){var X=r.unstable_now();S=X;var ae=!0;try{e:{G=!1,Q&&(Q=!1,he(R),R=-1),P=!0;var we=A;try{t:{for(ve(X),T=t(p);T!==null&&!(T.expirationTime>X&&N());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,A=T.priorityLevel;var $e=Ge(T.expirationTime<=X);if(X=r.unstable_now(),typeof $e=="function"){T.callback=$e,ve(X),ae=!0;break t}T===t(p)&&i(p),ve(X)}else i(p);T=t(p)}if(T!==null)ae=!0;else{var x=t(g);x!==null&&yt(de,x.startTime-X),ae=!1}}break e}finally{T=null,A=we,P=!1}ae=void 0}}finally{ae?L():ue=!1}}}var L;if(typeof re=="function")L=function(){re(V)};else if(typeof MessageChannel<"u"){var C=new MessageChannel,ct=C.port2;C.port1.onmessage=V,L=function(){ct.postMessage(null)}}else L=function(){le(V,0)};function yt(X,ae){R=le(function(){X(r.unstable_now())},ae)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(X){X.callback=null},r.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<X?Math.floor(1e3/X):5},r.unstable_getCurrentPriorityLevel=function(){return A},r.unstable_next=function(X){switch(A){case 1:case 2:case 3:var ae=3;break;default:ae=A}var we=A;A=ae;try{return X()}finally{A=we}},r.unstable_requestPaint=function(){$=!0},r.unstable_runWithPriority=function(X,ae){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var we=A;A=X;try{return ae()}finally{A=we}},r.unstable_scheduleCallback=function(X,ae,we){var Ge=r.unstable_now();switch(typeof we=="object"&&we!==null?(we=we.delay,we=typeof we=="number"&&0<we?Ge+we:Ge):we=Ge,X){case 1:var $e=-1;break;case 2:$e=250;break;case 5:$e=1073741823;break;case 4:$e=1e4;break;default:$e=5e3}return $e=we+$e,X={id:v++,callback:ae,priorityLevel:X,startTime:we,expirationTime:$e,sortIndex:-1},we>Ge?(X.sortIndex=we,e(g,X),t(p)===null&&X===t(g)&&(Q?(he(R),R=-1):Q=!0,yt(de,we-Ge))):(X.sortIndex=$e,e(p,X),G||P||(G=!0,ue||(ue=!0,L()))),X},r.unstable_shouldYield=N,r.unstable_wrapCallback=function(X){var ae=A;return function(){var we=A;A=ae;try{return X.apply(this,arguments)}finally{A=we}}}})(yg)),yg}var ww;function JC(){return ww||(ww=1,_g.exports=WC()),_g.exports}var vg={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Iw;function ZC(){if(Iw)return _n;Iw=1;var r=T_();function e(p){var g="https://react.dev/errors/"+p;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var v=2;v<arguments.length;v++)g+="&args[]="+encodeURIComponent(arguments[v])}return"Minified React error #"+p+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},a=Symbol.for("react.portal");function l(p,g,v){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:T==null?null:""+T,children:p,containerInfo:g,implementation:v}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,g){if(p==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return _n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,_n.createPortal=function(p,g){var v=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(p,g,null,v)},_n.flushSync=function(p){var g=c.T,v=i.p;try{if(c.T=null,i.p=2,p)return p()}finally{c.T=g,i.p=v,i.d.f()}},_n.preconnect=function(p,g){typeof p=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(p,g))},_n.prefetchDNS=function(p){typeof p=="string"&&i.d.D(p)},_n.preinit=function(p,g){if(typeof p=="string"&&g&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin),A=typeof g.integrity=="string"?g.integrity:void 0,P=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;v==="style"?i.d.S(p,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:A,fetchPriority:P}):v==="script"&&i.d.X(p,{crossOrigin:T,integrity:A,fetchPriority:P,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},_n.preinitModule=function(p,g){if(typeof p=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var v=f(g.as,g.crossOrigin);i.d.M(p,{crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(p)},_n.preload=function(p,g){if(typeof p=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var v=g.as,T=f(v,g.crossOrigin);i.d.L(p,v,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},_n.preloadModule=function(p,g){if(typeof p=="string")if(g){var v=f(g.as,g.crossOrigin);i.d.m(p,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:v,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(p)},_n.requestFormReset=function(p){i.d.r(p)},_n.unstable_batchedUpdates=function(p,g){return p(g)},_n.useFormState=function(p,g,v){return c.H.useFormState(p,g,v)},_n.useFormStatus=function(){return c.H.useHostTransitionStatus()},_n.version="19.2.0",_n}var Aw;function eD(){if(Aw)return vg.exports;Aw=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),vg.exports=ZC(),vg.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bw;function tD(){if(bw)return ec;bw=1;var r=JC(),e=T_(),t=eD();function i(n){var s="https://react.dev/errors/"+n;if(1<arguments.length){s+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)s+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+n+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function l(n){var s=n,o=n;if(n.alternate)for(;s.return;)s=s.return;else{n=s;do s=n,(s.flags&4098)!==0&&(o=s.return),n=s.return;while(n)}return s.tag===3?o:null}function c(n){if(n.tag===13){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function f(n){if(n.tag===31){var s=n.memoizedState;if(s===null&&(n=n.alternate,n!==null&&(s=n.memoizedState)),s!==null)return s.dehydrated}return null}function p(n){if(l(n)!==n)throw Error(i(188))}function g(n){var s=n.alternate;if(!s){if(s=l(n),s===null)throw Error(i(188));return s!==n?null:n}for(var o=n,u=s;;){var d=o.return;if(d===null)break;var m=d.alternate;if(m===null){if(u=d.return,u!==null){o=u;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===o)return p(d),n;if(m===u)return p(d),s;m=m.sibling}throw Error(i(188))}if(o.return!==u.return)o=d,u=m;else{for(var y=!1,w=d.child;w;){if(w===o){y=!0,o=d,u=m;break}if(w===u){y=!0,u=d,o=m;break}w=w.sibling}if(!y){for(w=m.child;w;){if(w===o){y=!0,o=m,u=d;break}if(w===u){y=!0,u=m,o=d;break}w=w.sibling}if(!y)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?n:s}function v(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n;for(n=n.child;n!==null;){if(s=v(n),s!==null)return s;n=n.sibling}return null}var T=Object.assign,A=Symbol.for("react.element"),P=Symbol.for("react.transitional.element"),G=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),le=Symbol.for("react.profiler"),he=Symbol.for("react.consumer"),re=Symbol.for("react.context"),ve=Symbol.for("react.forward_ref"),de=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),R=Symbol.for("react.memo"),b=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),N=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function L(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var C=Symbol.for("react.client.reference");function ct(n){if(n==null)return null;if(typeof n=="function")return n.$$typeof===C?null:n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case Q:return"Fragment";case le:return"Profiler";case $:return"StrictMode";case de:return"Suspense";case ue:return"SuspenseList";case S:return"Activity"}if(typeof n=="object")switch(n.$$typeof){case G:return"Portal";case re:return n.displayName||"Context";case he:return(n._context.displayName||"Context")+".Consumer";case ve:var s=n.render;return n=n.displayName,n||(n=s.displayName||s.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case R:return s=n.displayName||null,s!==null?s:ct(n.type)||"Memo";case b:s=n._payload,n=n._init;try{return ct(n(s))}catch{}}return null}var yt=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,we={pending:!1,data:null,method:null,action:null},Ge=[],$e=-1;function x(n){return{current:n}}function W(n){0>$e||(n.current=Ge[$e],Ge[$e]=null,$e--)}function ie(n,s){$e++,Ge[$e]=n.current,n.current=s}var pe=x(null),be=x(null),Oe=x(null),Be=x(null);function rn(n,s){switch(ie(Oe,s),ie(be,n),ie(pe,null),s.nodeType){case 9:case 11:n=(n=s.documentElement)&&(n=n.namespaceURI)?BT(n):0;break;default:if(n=s.tagName,s=s.namespaceURI)s=BT(s),n=FT(s,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}W(pe),ie(pe,n)}function gt(){W(pe),W(be),W(Oe)}function Ci(n){n.memoizedState!==null&&ie(Be,n);var s=pe.current,o=FT(s,n.type);s!==o&&(ie(be,n),ie(pe,o))}function Ji(n){be.current===n&&(W(pe),W(be)),Be.current===n&&(W(Be),$u._currentValue=we)}var ea,fo;function yi(n){if(ea===void 0)try{throw Error()}catch(o){var s=o.stack.trim().match(/\n( *(at )?)/);ea=s&&s[1]||"",fo=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ea+n+fo}var ta=!1;function mo(n,s){if(!n||ta)return"";ta=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(s){var Z=function(){throw Error()};if(Object.defineProperty(Z.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(Z,[])}catch(j){var q=j}Reflect.construct(n,[],Z)}else{try{Z.call()}catch(j){q=j}n.call(Z.prototype)}}else{try{throw Error()}catch(j){q=j}(Z=n())&&typeof Z.catch=="function"&&Z.catch(function(){})}}catch(j){if(j&&q&&typeof j.stack=="string")return[j.stack,q.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var d=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");d&&d.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),y=m[0],w=m[1];if(y&&w){var D=y.split(`
`),B=w.split(`
`);for(d=u=0;u<D.length&&!D[u].includes("DetermineComponentFrameRoot");)u++;for(;d<B.length&&!B[d].includes("DetermineComponentFrameRoot");)d++;if(u===D.length||d===B.length)for(u=D.length-1,d=B.length-1;1<=u&&0<=d&&D[u]!==B[d];)d--;for(;1<=u&&0<=d;u--,d--)if(D[u]!==B[d]){if(u!==1||d!==1)do if(u--,d--,0>d||D[u]!==B[d]){var Y=`
`+D[u].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=u&&0<=d);break}}}finally{ta=!1,Error.prepareStackTrace=o}return(o=n?n.displayName||n.name:"")?yi(o):""}function hm(n,s){switch(n.tag){case 26:case 27:case 5:return yi(n.type);case 16:return yi("Lazy");case 13:return n.child!==s&&s!==null?yi("Suspense Fallback"):yi("Suspense");case 19:return yi("SuspenseList");case 0:case 15:return mo(n.type,!1);case 11:return mo(n.type.render,!1);case 1:return mo(n.type,!0);case 31:return yi("Activity");default:return""}}function fh(n){try{var s="",o=null;do s+=hm(n,o),o=n,n=n.return;while(n);return s}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var po=Object.prototype.hasOwnProperty,na=r.unstable_scheduleCallback,go=r.unstable_cancelCallback,dm=r.unstable_shouldYield,Jl=r.unstable_requestPaint,sn=r.unstable_now,mh=r.unstable_getCurrentPriorityLevel,Ft=r.unstable_ImmediatePriority,Ht=r.unstable_UserBlockingPriority,Zi=r.unstable_NormalPriority,ph=r.unstable_LowPriority,Zl=r.unstable_IdlePriority,fm=r.log,ia=r.unstable_setDisableYieldValue,zr=null,pn=null;function ni(n){if(typeof fm=="function"&&ia(n),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(zr,n)}catch{}}var vn=Math.clz32?Math.clz32:gh,mm=Math.log,eu=Math.LN2;function gh(n){return n>>>=0,n===0?32:31-(mm(n)/eu|0)|0}var ra=256,Di=262144,Br=4194304;function vi(n){var s=n&42;if(s!==0)return s;switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return n&261888;case 262144:case 524288:case 1048576:case 2097152:return n&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return n&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return n}}function ii(n,s,o){var u=n.pendingLanes;if(u===0)return 0;var d=0,m=n.suspendedLanes,y=n.pingedLanes;n=n.warmLanes;var w=u&134217727;return w!==0?(u=w&~m,u!==0?d=vi(u):(y&=w,y!==0?d=vi(y):o||(o=w&~n,o!==0&&(d=vi(o))))):(w=u&~m,w!==0?d=vi(w):y!==0?d=vi(y):o||(o=u&~n,o!==0&&(d=vi(o)))),d===0?0:s!==0&&s!==d&&(s&m)===0&&(m=d&-d,o=s&-s,m>=o||m===32&&(o&4194048)!==0)?s:d}function Fr(n,s){return(n.pendingLanes&~(n.suspendedLanes&~n.pingedLanes)&s)===0}function _o(n,s){switch(n){case 1:case 2:case 4:case 8:case 64:return s+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tu(){var n=Br;return Br<<=1,(Br&62914560)===0&&(Br=4194304),n}function er(n){for(var s=[],o=0;31>o;o++)s.push(n);return s}function qr(n,s){n.pendingLanes|=s,s!==268435456&&(n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0)}function an(n,s,o,u,d,m){var y=n.pendingLanes;n.pendingLanes=o,n.suspendedLanes=0,n.pingedLanes=0,n.warmLanes=0,n.expiredLanes&=o,n.entangledLanes&=o,n.errorRecoveryDisabledLanes&=o,n.shellSuspendCounter=0;var w=n.entanglements,D=n.expirationTimes,B=n.hiddenUpdates;for(o=y&~o;0<o;){var Y=31-vn(o),Z=1<<Y;w[Y]=0,D[Y]=-1;var q=B[Y];if(q!==null)for(B[Y]=null,Y=0;Y<q.length;Y++){var j=q[Y];j!==null&&(j.lane&=-536870913)}o&=~Z}u!==0&&nu(n,u,0),m!==0&&d===0&&n.tag!==0&&(n.suspendedLanes|=m&~(y&~s))}function nu(n,s,o){n.pendingLanes|=s,n.suspendedLanes&=~s;var u=31-vn(s);n.entangledLanes|=s,n.entanglements[u]=n.entanglements[u]|1073741824|o&261930}function jr(n,s){var o=n.entangledLanes|=s;for(n=n.entanglements;o;){var u=31-vn(o),d=1<<u;d&s|n[u]&s&&(n[u]|=s),o&=~d}}function Gr(n,s){var o=s&-s;return o=(o&42)!==0?1:iu(o),(o&(n.suspendedLanes|s))!==0?0:o}function iu(n){switch(n){case 2:n=1;break;case 8:n=4;break;case 32:n=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:n=128;break;case 268435456:n=134217728;break;default:n=0}return n}function ru(n){return n&=-n,2<n?8<n?(n&134217727)!==0?32:268435456:8:2}function tr(){var n=ae.p;return n!==0?n:(n=window.event,n===void 0?32:cw(n.type))}function _h(n,s){var o=ae.p;try{return ae.p=n,s()}finally{ae.p=o}}var Ni=Math.random().toString(36).slice(2),vt="__reactFiber$"+Ni,on="__reactProps$"+Ni,Oi="__reactContainer$"+Ni,Hr="__reactEvents$"+Ni,Pi="__reactListeners$"+Ni,yh="__reactHandles$"+Ni,su="__reactResources$"+Ni,nr="__reactMarker$"+Ni;function sa(n){delete n[vt],delete n[on],delete n[Hr],delete n[Pi],delete n[yh]}function ir(n){var s=n[vt];if(s)return s;for(var o=n.parentNode;o;){if(s=o[Oi]||o[vt]){if(o=s.alternate,s.child!==null||o!==null&&o.child!==null)for(n=YT(n);n!==null;){if(o=n[vt])return o;n=YT(n)}return s}n=o,o=n.parentNode}return null}function rr(n){if(n=n[vt]||n[Oi]){var s=n.tag;if(s===5||s===6||s===13||s===31||s===26||s===27||s===3)return n}return null}function aa(n){var s=n.tag;if(s===5||s===26||s===27||s===6)return n.stateNode;throw Error(i(33))}function Ei(n){var s=n[su];return s||(s=n[su]={hoistableStyles:new Map,hoistableScripts:new Map}),s}function Dt(n){n[nr]=!0}var yo=new Set,Kr={};function En(n,s){Vi(n,s),Vi(n+"Capture",s)}function Vi(n,s){for(Kr[n]=s,n=0;n<s.length;n++)yo.add(s[n])}var pm=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),au={},ou={};function vh(n){return po.call(ou,n)?!0:po.call(au,n)?!1:pm.test(n)?ou[n]=!0:(au[n]=!0,!1)}function Qr(n,s,o){if(vh(s))if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":n.removeAttribute(s);return;case"boolean":var u=s.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){n.removeAttribute(s);return}}n.setAttribute(s,""+o)}}function Yr(n,s,o){if(o===null)n.removeAttribute(s);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(s);return}n.setAttribute(s,""+o)}}function ri(n,s,o,u){if(u===null)n.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":n.removeAttribute(o);return}n.setAttributeNS(s,o,""+u)}}function Tn(n){switch(typeof n){case"bigint":case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Eh(n){var s=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function gm(n,s,o){var u=Object.getOwnPropertyDescriptor(n.constructor.prototype,s);if(!n.hasOwnProperty(s)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var d=u.get,m=u.set;return Object.defineProperty(n,s,{configurable:!0,get:function(){return d.call(this)},set:function(y){o=""+y,m.call(this,y)}}),Object.defineProperty(n,s,{enumerable:u.enumerable}),{getValue:function(){return o},setValue:function(y){o=""+y},stopTracking:function(){n._valueTracker=null,delete n[s]}}}}function vo(n){if(!n._valueTracker){var s=Eh(n)?"checked":"value";n._valueTracker=gm(n,s,""+n[s])}}function lu(n){if(!n)return!1;var s=n._valueTracker;if(!s)return!0;var o=s.getValue(),u="";return n&&(u=Eh(n)?n.checked?"true":"false":n.value),n=u,n!==o?(s.setValue(n),!0):!1}function Eo(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}var sr=/[\n"\\]/g;function Et(n){return n.replace(sr,function(s){return"\\"+s.charCodeAt(0).toString(16)+" "})}function $r(n,s,o,u,d,m,y,w){n.name="",y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"?n.type=y:n.removeAttribute("type"),s!=null?y==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+Tn(s)):n.value!==""+Tn(s)&&(n.value=""+Tn(s)):y!=="submit"&&y!=="reset"||n.removeAttribute("value"),s!=null?To(n,y,Tn(s)):o!=null?To(n,y,Tn(o)):u!=null&&n.removeAttribute("value"),d==null&&m!=null&&(n.defaultChecked=!!m),d!=null&&(n.checked=d&&typeof d!="function"&&typeof d!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?n.name=""+Tn(w):n.removeAttribute("name")}function oa(n,s,o,u,d,m,y,w){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(n.type=m),s!=null||o!=null){if(!(m!=="submit"&&m!=="reset"||s!=null)){vo(n);return}o=o!=null?""+Tn(o):"",s=s!=null?""+Tn(s):o,w||s===n.value||(n.value=s),n.defaultValue=s}u=u??d,u=typeof u!="function"&&typeof u!="symbol"&&!!u,n.checked=w?n.checked:!!u,n.defaultChecked=!!u,y!=null&&typeof y!="function"&&typeof y!="symbol"&&typeof y!="boolean"&&(n.name=y),vo(n)}function To(n,s,o){s==="number"&&Eo(n.ownerDocument)===n||n.defaultValue===""+o||(n.defaultValue=""+o)}function He(n,s,o,u){if(n=n.options,s){s={};for(var d=0;d<o.length;d++)s["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=s.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Tn(o),s=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,u&&(n[d].defaultSelected=!0);return}s!==null||n[d].disabled||(s=n[d])}s!==null&&(s.selected=!0)}}function la(n,s,o){if(s!=null&&(s=""+Tn(s),s!==n.value&&(n.value=s),o==null)){n.defaultValue!==s&&(n.defaultValue=s);return}n.defaultValue=o!=null?""+Tn(o):""}function Xr(n,s,o,u){if(s==null){if(u!=null){if(o!=null)throw Error(i(92));if(yt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),s=o}o=Tn(s),n.defaultValue=o,u=n.textContent,u===o&&u!==""&&u!==null&&(n.value=u),vo(n)}function si(n,s){if(s){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=s;return}}n.textContent=s}var _m=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function uu(n,s,o){var u=s.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?n.setProperty(s,""):s==="float"?n.cssFloat="":n[s]="":u?n.setProperty(s,o):typeof o!="number"||o===0||_m.has(s)?s==="float"?n.cssFloat=o:n[s]=(""+o).trim():n[s]=o+"px"}function Th(n,s,o){if(s!=null&&typeof s!="object")throw Error(i(62));if(n=n.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||s!=null&&s.hasOwnProperty(u)||(u.indexOf("--")===0?n.setProperty(u,""):u==="float"?n.cssFloat="":n[u]="");for(var d in s)u=s[d],s.hasOwnProperty(d)&&o[d]!==u&&uu(n,d,u)}else for(var m in s)s.hasOwnProperty(m)&&uu(n,m,s[m])}function cu(n){if(n.indexOf("-")===-1)return!1;switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ym=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),vm=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(n){return vm.test(""+n)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":n}function Kt(){}var wo=null;function Io(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ar=null,jn=null;function wh(n){var s=rr(n);if(s&&(n=s.stateNode)){var o=n[on]||null;e:switch(n=s.stateNode,s.type){case"input":if($r(n,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),s=o.name,o.type==="radio"&&s!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Et(""+s)+'"][type="radio"]'),s=0;s<o.length;s++){var u=o[s];if(u!==n&&u.form===n.form){var d=u[on]||null;if(!d)throw Error(i(90));$r(u,d.value,d.defaultValue,d.defaultValue,d.checked,d.defaultChecked,d.type,d.name)}}for(s=0;s<o.length;s++)u=o[s],u.form===n.form&&lu(u)}break e;case"textarea":la(n,o.value,o.defaultValue);break e;case"select":s=o.value,s!=null&&He(n,!!o.multiple,s,!1)}}}var hu=!1;function Ih(n,s,o){if(hu)return n(s,o);hu=!0;try{var u=n(s);return u}finally{if(hu=!1,(ar!==null||jn!==null)&&(vd(),ar&&(s=ar,n=jn,jn=ar=null,wh(s),n)))for(s=0;s<n.length;s++)wh(n[s])}}function Nn(n,s){var o=n.stateNode;if(o===null)return null;var u=o[on]||null;if(u===null)return null;o=u[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(i(231,s,typeof o));return o}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),du=!1;if(Ti)try{var wi={};Object.defineProperty(wi,"passive",{get:function(){du=!0}}),window.addEventListener("test",wi,wi),window.removeEventListener("test",wi,wi)}catch{du=!1}var Gn=null,Ao=null,Mi=null;function Wr(){if(Mi)return Mi;var n,s=Ao,o=s.length,u,d="value"in Gn?Gn.value:Gn.textContent,m=d.length;for(n=0;n<o&&s[n]===d[n];n++);var y=o-n;for(u=1;u<=y&&s[o-u]===d[m-u];u++);return Mi=d.slice(n,1<u?1-u:void 0)}function ua(n){var s=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&s===13&&(n=13)):n=s,n===10&&(n=13),32<=n||n===13?n:0}function Jr(){return!0}function at(){return!1}function gn(n){function s(o,u,d,m,y){this._reactName=o,this._targetInst=d,this.type=u,this.nativeEvent=m,this.target=y,this.currentTarget=null;for(var w in n)n.hasOwnProperty(w)&&(o=n[w],this[w]=o?o(m):m[w]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Jr:at,this.isPropagationStopped=at,this}return T(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Jr)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Jr)},persist:function(){},isPersistent:Jr}),s}var or={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ca=gn(or),Zr=T({},or,{view:0,detail:0}),Ah=gn(Zr),es,bo,wn,ha=T({},Zr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wn&&(wn&&n.type==="mousemove"?(es=n.screenX-wn.screenX,bo=n.screenY-wn.screenY):bo=es=0,wn=n),es)},movementY:function(n){return"movementY"in n?n.movementY:bo}}),bh=gn(ha),da=T({},ha,{dataTransfer:0}),Sh=gn(da),fu=T({},Zr,{relatedTarget:0}),ts=gn(fu),Rh=T({},or,{animationName:0,elapsedTime:0,pseudoElement:0}),So=gn(Rh),Em=T({},or,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Ch=gn(Em),fa=T({},or,{data:0}),mu=gn(fa),Dh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pu={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},gu={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Nh(n){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(n):(n=gu[n])?!!s[n]:!1}function ns(){return Nh}var Oh=T({},Zr,{key:function(n){if(n.key){var s=Dh[n.key]||n.key;if(s!=="Unidentified")return s}return n.type==="keypress"?(n=ua(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pu[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(n){return n.type==="keypress"?ua(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ua(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Ph=gn(Oh),lr=T({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),_u=gn(lr),Vh=T({},Zr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),xh=gn(Vh),Mh=T({},or,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ro=gn(Mh),In=T({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),kh=gn(In),Lh=T({},or,{newState:0,oldState:0}),is=gn(Lh),h=[9,13,27,32],_=Ti&&"CompositionEvent"in window,E=null;Ti&&"documentMode"in document&&(E=document.documentMode);var I=Ti&&"TextEvent"in window&&!E,U=Ti&&(!_||E&&8<E&&11>=E),K=" ",se=!1;function Xe(n,s){switch(n){case"keyup":return h.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function xt(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pe=!1;function Qt(n,s){switch(n){case"compositionend":return xt(s);case"keypress":return s.which!==32?null:(se=!0,K);case"textInput":return n=s.data,n===K&&se?null:n;default:return null}}function Yt(n,s){if(Pe)return n==="compositionend"||!_&&Xe(n,s)?(n=Wr(),Mi=Ao=Gn=null,Pe=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return U&&s.locale!=="ko"?null:s.data;default:return null}}var rs={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function On(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s==="input"?!!rs[n.type]:s==="textarea"}function ma(n,s,o,u){ar?jn?jn.push(u):jn=[u]:ar=u,s=Sd(s,"onChange"),0<s.length&&(o=new ca("onChange","change",null,o,u),n.push({event:o,listeners:s}))}var ur=null,yu=null;function TR(n){xT(n,0)}function Uh(n){var s=aa(n);if(lu(s))return n}function Zy(n,s){if(n==="change")return s}var ev=!1;if(Ti){var Tm;if(Ti){var wm="oninput"in document;if(!wm){var tv=document.createElement("div");tv.setAttribute("oninput","return;"),wm=typeof tv.oninput=="function"}Tm=wm}else Tm=!1;ev=Tm&&(!document.documentMode||9<document.documentMode)}function nv(){ur&&(ur.detachEvent("onpropertychange",iv),yu=ur=null)}function iv(n){if(n.propertyName==="value"&&Uh(yu)){var s=[];ma(s,yu,n,Io(n)),Ih(TR,s)}}function wR(n,s,o){n==="focusin"?(nv(),ur=s,yu=o,ur.attachEvent("onpropertychange",iv)):n==="focusout"&&nv()}function IR(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Uh(yu)}function AR(n,s){if(n==="click")return Uh(s)}function bR(n,s){if(n==="input"||n==="change")return Uh(s)}function SR(n,s){return n===s&&(n!==0||1/n===1/s)||n!==n&&s!==s}var Hn=typeof Object.is=="function"?Object.is:SR;function vu(n,s){if(Hn(n,s))return!0;if(typeof n!="object"||n===null||typeof s!="object"||s===null)return!1;var o=Object.keys(n),u=Object.keys(s);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var d=o[u];if(!po.call(s,d)||!Hn(n[d],s[d]))return!1}return!0}function rv(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function sv(n,s){var o=rv(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=s&&u>=s)return{node:o,offset:s-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rv(o)}}function av(n,s){return n&&s?n===s?!0:n&&n.nodeType===3?!1:s&&s.nodeType===3?av(n,s.parentNode):"contains"in n?n.contains(s):n.compareDocumentPosition?!!(n.compareDocumentPosition(s)&16):!1:!1}function ov(n){n=n!=null&&n.ownerDocument!=null&&n.ownerDocument.defaultView!=null?n.ownerDocument.defaultView:window;for(var s=Eo(n.document);s instanceof n.HTMLIFrameElement;){try{var o=typeof s.contentWindow.location.href=="string"}catch{o=!1}if(o)n=s.contentWindow;else break;s=Eo(n.document)}return s}function Im(n){var s=n&&n.nodeName&&n.nodeName.toLowerCase();return s&&(s==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||s==="textarea"||n.contentEditable==="true")}var RR=Ti&&"documentMode"in document&&11>=document.documentMode,Co=null,Am=null,Eu=null,bm=!1;function lv(n,s,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;bm||Co==null||Co!==Eo(u)||(u=Co,"selectionStart"in u&&Im(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Eu&&vu(Eu,u)||(Eu=u,u=Sd(Am,"onSelect"),0<u.length&&(s=new ca("onSelect","select",null,s,o),n.push({event:s,listeners:u}),s.target=Co)))}function pa(n,s){var o={};return o[n.toLowerCase()]=s.toLowerCase(),o["Webkit"+n]="webkit"+s,o["Moz"+n]="moz"+s,o}var Do={animationend:pa("Animation","AnimationEnd"),animationiteration:pa("Animation","AnimationIteration"),animationstart:pa("Animation","AnimationStart"),transitionrun:pa("Transition","TransitionRun"),transitionstart:pa("Transition","TransitionStart"),transitioncancel:pa("Transition","TransitionCancel"),transitionend:pa("Transition","TransitionEnd")},Sm={},uv={};Ti&&(uv=document.createElement("div").style,"AnimationEvent"in window||(delete Do.animationend.animation,delete Do.animationiteration.animation,delete Do.animationstart.animation),"TransitionEvent"in window||delete Do.transitionend.transition);function ga(n){if(Sm[n])return Sm[n];if(!Do[n])return n;var s=Do[n],o;for(o in s)if(s.hasOwnProperty(o)&&o in uv)return Sm[n]=s[o];return n}var cv=ga("animationend"),hv=ga("animationiteration"),dv=ga("animationstart"),CR=ga("transitionrun"),DR=ga("transitionstart"),NR=ga("transitioncancel"),fv=ga("transitionend"),mv=new Map,Rm="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Rm.push("scrollEnd");function Ii(n,s){mv.set(n,s),En(s,[n])}var zh=typeof reportError=="function"?reportError:function(n){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var s=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof n=="object"&&n!==null&&typeof n.message=="string"?String(n.message):String(n),error:n});if(!window.dispatchEvent(s))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",n);return}console.error(n)},ai=[],No=0,Cm=0;function Bh(){for(var n=No,s=Cm=No=0;s<n;){var o=ai[s];ai[s++]=null;var u=ai[s];ai[s++]=null;var d=ai[s];ai[s++]=null;var m=ai[s];if(ai[s++]=null,u!==null&&d!==null){var y=u.pending;y===null?d.next=d:(d.next=y.next,y.next=d),u.pending=d}m!==0&&pv(o,d,m)}}function Fh(n,s,o,u){ai[No++]=n,ai[No++]=s,ai[No++]=o,ai[No++]=u,Cm|=u,n.lanes|=u,n=n.alternate,n!==null&&(n.lanes|=u)}function Dm(n,s,o,u){return Fh(n,s,o,u),qh(n)}function _a(n,s){return Fh(n,null,null,s),qh(n)}function pv(n,s,o){n.lanes|=o;var u=n.alternate;u!==null&&(u.lanes|=o);for(var d=!1,m=n.return;m!==null;)m.childLanes|=o,u=m.alternate,u!==null&&(u.childLanes|=o),m.tag===22&&(n=m.stateNode,n===null||n._visibility&1||(d=!0)),n=m,m=m.return;return n.tag===3?(m=n.stateNode,d&&s!==null&&(d=31-vn(o),n=m.hiddenUpdates,u=n[d],u===null?n[d]=[s]:u.push(s),s.lane=o|536870912),m):null}function qh(n){if(50<qu)throw qu=0,Up=null,Error(i(185));for(var s=n.return;s!==null;)n=s,s=n.return;return n.tag===3?n.stateNode:null}var Oo={};function OR(n,s,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,s,o,u){return new OR(n,s,o,u)}function Nm(n){return n=n.prototype,!(!n||!n.isReactComponent)}function cr(n,s){var o=n.alternate;return o===null?(o=Kn(n.tag,s,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=s,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&65011712,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,s=n.dependencies,o.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o.refCleanup=n.refCleanup,o}function gv(n,s){n.flags&=65011714;var o=n.alternate;return o===null?(n.childLanes=0,n.lanes=s,n.child=null,n.subtreeFlags=0,n.memoizedProps=null,n.memoizedState=null,n.updateQueue=null,n.dependencies=null,n.stateNode=null):(n.childLanes=o.childLanes,n.lanes=o.lanes,n.child=o.child,n.subtreeFlags=0,n.deletions=null,n.memoizedProps=o.memoizedProps,n.memoizedState=o.memoizedState,n.updateQueue=o.updateQueue,n.type=o.type,s=o.dependencies,n.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext}),n}function jh(n,s,o,u,d,m){var y=0;if(u=n,typeof n=="function")Nm(n)&&(y=1);else if(typeof n=="string")y=kC(n,o,pe.current)?26:n==="html"||n==="head"||n==="body"?27:5;else e:switch(n){case S:return n=Kn(31,o,s,d),n.elementType=S,n.lanes=m,n;case Q:return ya(o.children,d,m,s);case $:y=8,d|=24;break;case le:return n=Kn(12,o,s,d|2),n.elementType=le,n.lanes=m,n;case de:return n=Kn(13,o,s,d),n.elementType=de,n.lanes=m,n;case ue:return n=Kn(19,o,s,d),n.elementType=ue,n.lanes=m,n;default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case re:y=10;break e;case he:y=9;break e;case ve:y=11;break e;case R:y=14;break e;case b:y=16,u=null;break e}y=29,o=Error(i(130,n===null?"null":typeof n,"")),u=null}return s=Kn(y,o,s,d),s.elementType=n,s.type=u,s.lanes=m,s}function ya(n,s,o,u){return n=Kn(7,n,u,s),n.lanes=o,n}function Om(n,s,o){return n=Kn(6,n,null,s),n.lanes=o,n}function _v(n){var s=Kn(18,null,null,0);return s.stateNode=n,s}function Pm(n,s,o){return s=Kn(4,n.children!==null?n.children:[],n.key,s),s.lanes=o,s.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},s}var yv=new WeakMap;function oi(n,s){if(typeof n=="object"&&n!==null){var o=yv.get(n);return o!==void 0?o:(s={value:n,source:s,stack:fh(s)},yv.set(n,s),s)}return{value:n,source:s,stack:fh(s)}}var Po=[],Vo=0,Gh=null,Tu=0,li=[],ui=0,ss=null,ki=1,Li="";function hr(n,s){Po[Vo++]=Tu,Po[Vo++]=Gh,Gh=n,Tu=s}function vv(n,s,o){li[ui++]=ki,li[ui++]=Li,li[ui++]=ss,ss=n;var u=ki;n=Li;var d=32-vn(u)-1;u&=~(1<<d),o+=1;var m=32-vn(s)+d;if(30<m){var y=d-d%5;m=(u&(1<<y)-1).toString(32),u>>=y,d-=y,ki=1<<32-vn(s)+d|o<<d|u,Li=m+n}else ki=1<<m|o<<d|u,Li=n}function Vm(n){n.return!==null&&(hr(n,1),vv(n,1,0))}function xm(n){for(;n===Gh;)Gh=Po[--Vo],Po[Vo]=null,Tu=Po[--Vo],Po[Vo]=null;for(;n===ss;)ss=li[--ui],li[ui]=null,Li=li[--ui],li[ui]=null,ki=li[--ui],li[ui]=null}function Ev(n,s){li[ui++]=ki,li[ui++]=Li,li[ui++]=ss,ki=s.id,Li=s.overflow,ss=n}var ln=null,ot=null,Fe=!1,as=null,ci=!1,Mm=Error(i(519));function os(n){var s=Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw wu(oi(s,n)),Mm}function Tv(n){var s=n.stateNode,o=n.type,u=n.memoizedProps;switch(s[vt]=n,s[on]=u,o){case"dialog":xe("cancel",s),xe("close",s);break;case"iframe":case"object":case"embed":xe("load",s);break;case"video":case"audio":for(o=0;o<Gu.length;o++)xe(Gu[o],s);break;case"source":xe("error",s);break;case"img":case"image":case"link":xe("error",s),xe("load",s);break;case"details":xe("toggle",s);break;case"input":xe("invalid",s),oa(s,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":xe("invalid",s);break;case"textarea":xe("invalid",s),Xr(s,u.value,u.defaultValue,u.children)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||s.textContent===""+o||u.suppressHydrationWarning===!0||UT(s.textContent,o)?(u.popover!=null&&(xe("beforetoggle",s),xe("toggle",s)),u.onScroll!=null&&xe("scroll",s),u.onScrollEnd!=null&&xe("scrollend",s),u.onClick!=null&&(s.onclick=Kt),s=!0):s=!1,s||os(n,!0)}function wv(n){for(ln=n.return;ln;)switch(ln.tag){case 5:case 31:case 13:ci=!1;return;case 27:case 3:ci=!0;return;default:ln=ln.return}}function xo(n){if(n!==ln)return!1;if(!Fe)return wv(n),Fe=!0,!1;var s=n.tag,o;if((o=s!==3&&s!==27)&&((o=s===5)&&(o=n.type,o=!(o!=="form"&&o!=="button")||Zp(n.type,n.memoizedProps)),o=!o),o&&ot&&os(n),wv(n),s===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));ot=QT(n)}else if(s===31){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(317));ot=QT(n)}else s===27?(s=ot,Ts(n.type)?(n=rg,rg=null,ot=n):ot=s):ot=ln?di(n.stateNode.nextSibling):null;return!0}function va(){ot=ln=null,Fe=!1}function km(){var n=as;return n!==null&&(Mn===null?Mn=n:Mn.push.apply(Mn,n),as=null),n}function wu(n){as===null?as=[n]:as.push(n)}var Lm=x(null),Ea=null,dr=null;function ls(n,s,o){ie(Lm,s._currentValue),s._currentValue=o}function fr(n){n._currentValue=Lm.current,W(Lm)}function Um(n,s,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&s)!==s?(n.childLanes|=s,u!==null&&(u.childLanes|=s)):u!==null&&(u.childLanes&s)!==s&&(u.childLanes|=s),n===o)break;n=n.return}}function zm(n,s,o,u){var d=n.child;for(d!==null&&(d.return=n);d!==null;){var m=d.dependencies;if(m!==null){var y=d.child;m=m.firstContext;e:for(;m!==null;){var w=m;m=d;for(var D=0;D<s.length;D++)if(w.context===s[D]){m.lanes|=o,w=m.alternate,w!==null&&(w.lanes|=o),Um(m.return,o,n),u||(y=null);break e}m=w.next}}else if(d.tag===18){if(y=d.return,y===null)throw Error(i(341));y.lanes|=o,m=y.alternate,m!==null&&(m.lanes|=o),Um(y,o,n),y=null}else y=d.child;if(y!==null)y.return=d;else for(y=d;y!==null;){if(y===n){y=null;break}if(d=y.sibling,d!==null){d.return=y.return,y=d;break}y=y.return}d=y}}function Mo(n,s,o,u){n=null;for(var d=s,m=!1;d!==null;){if(!m){if((d.flags&524288)!==0)m=!0;else if((d.flags&262144)!==0)break}if(d.tag===10){var y=d.alternate;if(y===null)throw Error(i(387));if(y=y.memoizedProps,y!==null){var w=d.type;Hn(d.pendingProps.value,y.value)||(n!==null?n.push(w):n=[w])}}else if(d===Be.current){if(y=d.alternate,y===null)throw Error(i(387));y.memoizedState.memoizedState!==d.memoizedState.memoizedState&&(n!==null?n.push($u):n=[$u])}d=d.return}n!==null&&zm(s,n,o,u),s.flags|=262144}function Hh(n){for(n=n.firstContext;n!==null;){if(!Hn(n.context._currentValue,n.memoizedValue))return!0;n=n.next}return!1}function Ta(n){Ea=n,dr=null,n=n.dependencies,n!==null&&(n.firstContext=null)}function un(n){return Iv(Ea,n)}function Kh(n,s){return Ea===null&&Ta(n),Iv(n,s)}function Iv(n,s){var o=s._currentValue;if(s={context:s,memoizedValue:o,next:null},dr===null){if(n===null)throw Error(i(308));dr=s,n.dependencies={lanes:0,firstContext:s},n.flags|=524288}else dr=dr.next=s;return o}var PR=typeof AbortController<"u"?AbortController:function(){var n=[],s=this.signal={aborted:!1,addEventListener:function(o,u){n.push(u)}};this.abort=function(){s.aborted=!0,n.forEach(function(o){return o()})}},VR=r.unstable_scheduleCallback,xR=r.unstable_NormalPriority,Mt={$$typeof:re,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Bm(){return{controller:new PR,data:new Map,refCount:0}}function Iu(n){n.refCount--,n.refCount===0&&VR(xR,function(){n.controller.abort()})}var Au=null,Fm=0,ko=0,Lo=null;function MR(n,s){if(Au===null){var o=Au=[];Fm=0,ko=Gp(),Lo={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Fm++,s.then(Av,Av),s}function Av(){if(--Fm===0&&Au!==null){Lo!==null&&(Lo.status="fulfilled");var n=Au;Au=null,ko=0,Lo=null;for(var s=0;s<n.length;s++)(0,n[s])()}}function kR(n,s){var o=[],u={status:"pending",value:null,reason:null,then:function(d){o.push(d)}};return n.then(function(){u.status="fulfilled",u.value=s;for(var d=0;d<o.length;d++)(0,o[d])(s)},function(d){for(u.status="rejected",u.reason=d,d=0;d<o.length;d++)(0,o[d])(void 0)}),u}var bv=X.S;X.S=function(n,s){lT=sn(),typeof s=="object"&&s!==null&&typeof s.then=="function"&&MR(n,s),bv!==null&&bv(n,s)};var wa=x(null);function qm(){var n=wa.current;return n!==null?n:rt.pooledCache}function Qh(n,s){s===null?ie(wa,wa.current):ie(wa,s.pool)}function Sv(){var n=qm();return n===null?null:{parent:Mt._currentValue,pool:n}}var Uo=Error(i(460)),jm=Error(i(474)),Yh=Error(i(542)),$h={then:function(){}};function Rv(n){return n=n.status,n==="fulfilled"||n==="rejected"}function Cv(n,s,o){switch(o=n[o],o===void 0?n.push(s):o!==s&&(s.then(Kt,Kt),s=o),s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Nv(n),n;default:if(typeof s.status=="string")s.then(Kt,Kt);else{if(n=rt,n!==null&&100<n.shellSuspendCounter)throw Error(i(482));n=s,n.status="pending",n.then(function(u){if(s.status==="pending"){var d=s;d.status="fulfilled",d.value=u}},function(u){if(s.status==="pending"){var d=s;d.status="rejected",d.reason=u}})}switch(s.status){case"fulfilled":return s.value;case"rejected":throw n=s.reason,Nv(n),n}throw Aa=s,Uo}}function Ia(n){try{var s=n._init;return s(n._payload)}catch(o){throw o!==null&&typeof o=="object"&&typeof o.then=="function"?(Aa=o,Uo):o}}var Aa=null;function Dv(){if(Aa===null)throw Error(i(459));var n=Aa;return Aa=null,n}function Nv(n){if(n===Uo||n===Yh)throw Error(i(483))}var zo=null,bu=0;function Xh(n){var s=bu;return bu+=1,zo===null&&(zo=[]),Cv(zo,n,s)}function Su(n,s){s=s.props.ref,n.ref=s!==void 0?s:null}function Wh(n,s){throw s.$$typeof===A?Error(i(525)):(n=Object.prototype.toString.call(s),Error(i(31,n==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":n)))}function Ov(n){function s(M,O){if(n){var z=M.deletions;z===null?(M.deletions=[O],M.flags|=16):z.push(O)}}function o(M,O){if(!n)return null;for(;O!==null;)s(M,O),O=O.sibling;return null}function u(M){for(var O=new Map;M!==null;)M.key!==null?O.set(M.key,M):O.set(M.index,M),M=M.sibling;return O}function d(M,O){return M=cr(M,O),M.index=0,M.sibling=null,M}function m(M,O,z){return M.index=z,n?(z=M.alternate,z!==null?(z=z.index,z<O?(M.flags|=67108866,O):z):(M.flags|=67108866,O)):(M.flags|=1048576,O)}function y(M){return n&&M.alternate===null&&(M.flags|=67108866),M}function w(M,O,z,J){return O===null||O.tag!==6?(O=Om(z,M.mode,J),O.return=M,O):(O=d(O,z),O.return=M,O)}function D(M,O,z,J){var Ee=z.type;return Ee===Q?Y(M,O,z.props.children,J,z.key):O!==null&&(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===b&&Ia(Ee)===O.type)?(O=d(O,z.props),Su(O,z),O.return=M,O):(O=jh(z.type,z.key,z.props,null,M.mode,J),Su(O,z),O.return=M,O)}function B(M,O,z,J){return O===null||O.tag!==4||O.stateNode.containerInfo!==z.containerInfo||O.stateNode.implementation!==z.implementation?(O=Pm(z,M.mode,J),O.return=M,O):(O=d(O,z.children||[]),O.return=M,O)}function Y(M,O,z,J,Ee){return O===null||O.tag!==7?(O=ya(z,M.mode,J,Ee),O.return=M,O):(O=d(O,z),O.return=M,O)}function Z(M,O,z){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return O=Om(""+O,M.mode,z),O.return=M,O;if(typeof O=="object"&&O!==null){switch(O.$$typeof){case P:return z=jh(O.type,O.key,O.props,null,M.mode,z),Su(z,O),z.return=M,z;case G:return O=Pm(O,M.mode,z),O.return=M,O;case b:return O=Ia(O),Z(M,O,z)}if(yt(O)||L(O))return O=ya(O,M.mode,z,null),O.return=M,O;if(typeof O.then=="function")return Z(M,Xh(O),z);if(O.$$typeof===re)return Z(M,Kh(M,O),z);Wh(M,O)}return null}function q(M,O,z,J){var Ee=O!==null?O.key:null;if(typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint")return Ee!==null?null:w(M,O,""+z,J);if(typeof z=="object"&&z!==null){switch(z.$$typeof){case P:return z.key===Ee?D(M,O,z,J):null;case G:return z.key===Ee?B(M,O,z,J):null;case b:return z=Ia(z),q(M,O,z,J)}if(yt(z)||L(z))return Ee!==null?null:Y(M,O,z,J,null);if(typeof z.then=="function")return q(M,O,Xh(z),J);if(z.$$typeof===re)return q(M,O,Kh(M,z),J);Wh(M,z)}return null}function j(M,O,z,J,Ee){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return M=M.get(z)||null,w(O,M,""+J,Ee);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case P:return M=M.get(J.key===null?z:J.key)||null,D(O,M,J,Ee);case G:return M=M.get(J.key===null?z:J.key)||null,B(O,M,J,Ee);case b:return J=Ia(J),j(M,O,z,J,Ee)}if(yt(J)||L(J))return M=M.get(z)||null,Y(O,M,J,Ee,null);if(typeof J.then=="function")return j(M,O,z,Xh(J),Ee);if(J.$$typeof===re)return j(M,O,z,Kh(O,J),Ee);Wh(O,J)}return null}function me(M,O,z,J){for(var Ee=null,Ke=null,ge=O,Ne=O=0,Le=null;ge!==null&&Ne<z.length;Ne++){ge.index>Ne?(Le=ge,ge=null):Le=ge.sibling;var Qe=q(M,ge,z[Ne],J);if(Qe===null){ge===null&&(ge=Le);break}n&&ge&&Qe.alternate===null&&s(M,ge),O=m(Qe,O,Ne),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe,ge=Le}if(Ne===z.length)return o(M,ge),Fe&&hr(M,Ne),Ee;if(ge===null){for(;Ne<z.length;Ne++)ge=Z(M,z[Ne],J),ge!==null&&(O=m(ge,O,Ne),Ke===null?Ee=ge:Ke.sibling=ge,Ke=ge);return Fe&&hr(M,Ne),Ee}for(ge=u(ge);Ne<z.length;Ne++)Le=j(ge,M,Ne,z[Ne],J),Le!==null&&(n&&Le.alternate!==null&&ge.delete(Le.key===null?Ne:Le.key),O=m(Le,O,Ne),Ke===null?Ee=Le:Ke.sibling=Le,Ke=Le);return n&&ge.forEach(function(Ss){return s(M,Ss)}),Fe&&hr(M,Ne),Ee}function Ae(M,O,z,J){if(z==null)throw Error(i(151));for(var Ee=null,Ke=null,ge=O,Ne=O=0,Le=null,Qe=z.next();ge!==null&&!Qe.done;Ne++,Qe=z.next()){ge.index>Ne?(Le=ge,ge=null):Le=ge.sibling;var Ss=q(M,ge,Qe.value,J);if(Ss===null){ge===null&&(ge=Le);break}n&&ge&&Ss.alternate===null&&s(M,ge),O=m(Ss,O,Ne),Ke===null?Ee=Ss:Ke.sibling=Ss,Ke=Ss,ge=Le}if(Qe.done)return o(M,ge),Fe&&hr(M,Ne),Ee;if(ge===null){for(;!Qe.done;Ne++,Qe=z.next())Qe=Z(M,Qe.value,J),Qe!==null&&(O=m(Qe,O,Ne),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe);return Fe&&hr(M,Ne),Ee}for(ge=u(ge);!Qe.done;Ne++,Qe=z.next())Qe=j(ge,M,Ne,Qe.value,J),Qe!==null&&(n&&Qe.alternate!==null&&ge.delete(Qe.key===null?Ne:Qe.key),O=m(Qe,O,Ne),Ke===null?Ee=Qe:Ke.sibling=Qe,Ke=Qe);return n&&ge.forEach(function(QC){return s(M,QC)}),Fe&&hr(M,Ne),Ee}function nt(M,O,z,J){if(typeof z=="object"&&z!==null&&z.type===Q&&z.key===null&&(z=z.props.children),typeof z=="object"&&z!==null){switch(z.$$typeof){case P:e:{for(var Ee=z.key;O!==null;){if(O.key===Ee){if(Ee=z.type,Ee===Q){if(O.tag===7){o(M,O.sibling),J=d(O,z.props.children),J.return=M,M=J;break e}}else if(O.elementType===Ee||typeof Ee=="object"&&Ee!==null&&Ee.$$typeof===b&&Ia(Ee)===O.type){o(M,O.sibling),J=d(O,z.props),Su(J,z),J.return=M,M=J;break e}o(M,O);break}else s(M,O);O=O.sibling}z.type===Q?(J=ya(z.props.children,M.mode,J,z.key),J.return=M,M=J):(J=jh(z.type,z.key,z.props,null,M.mode,J),Su(J,z),J.return=M,M=J)}return y(M);case G:e:{for(Ee=z.key;O!==null;){if(O.key===Ee)if(O.tag===4&&O.stateNode.containerInfo===z.containerInfo&&O.stateNode.implementation===z.implementation){o(M,O.sibling),J=d(O,z.children||[]),J.return=M,M=J;break e}else{o(M,O);break}else s(M,O);O=O.sibling}J=Pm(z,M.mode,J),J.return=M,M=J}return y(M);case b:return z=Ia(z),nt(M,O,z,J)}if(yt(z))return me(M,O,z,J);if(L(z)){if(Ee=L(z),typeof Ee!="function")throw Error(i(150));return z=Ee.call(z),Ae(M,O,z,J)}if(typeof z.then=="function")return nt(M,O,Xh(z),J);if(z.$$typeof===re)return nt(M,O,Kh(M,z),J);Wh(M,z)}return typeof z=="string"&&z!==""||typeof z=="number"||typeof z=="bigint"?(z=""+z,O!==null&&O.tag===6?(o(M,O.sibling),J=d(O,z),J.return=M,M=J):(o(M,O),J=Om(z,M.mode,J),J.return=M,M=J),y(M)):o(M,O)}return function(M,O,z,J){try{bu=0;var Ee=nt(M,O,z,J);return zo=null,Ee}catch(ge){if(ge===Uo||ge===Yh)throw ge;var Ke=Kn(29,ge,null,M.mode);return Ke.lanes=J,Ke.return=M,Ke}finally{}}}var ba=Ov(!0),Pv=Ov(!1),us=!1;function Gm(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hm(n,s){n=n.updateQueue,s.updateQueue===n&&(s.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,callbacks:null})}function cs(n){return{lane:n,tag:0,payload:null,callback:null,next:null}}function hs(n,s,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ye&2)!==0){var d=u.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s,s=qh(n),pv(n,null,o),s}return Fh(n,u,s,o),qh(n)}function Ru(n,s,o){if(s=s.updateQueue,s!==null&&(s=s.shared,(o&4194048)!==0)){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,jr(n,o)}}function Km(n,s){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var d=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var y={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};m===null?d=m=y:m=m.next=y,o=o.next}while(o!==null);m===null?d=m=s:m=m.next=s}else d=m=s;o={baseState:u.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=s:n.next=s,o.lastBaseUpdate=s}var Qm=!1;function Cu(){if(Qm){var n=Lo;if(n!==null)throw n}}function Du(n,s,o,u){Qm=!1;var d=n.updateQueue;us=!1;var m=d.firstBaseUpdate,y=d.lastBaseUpdate,w=d.shared.pending;if(w!==null){d.shared.pending=null;var D=w,B=D.next;D.next=null,y===null?m=B:y.next=B,y=D;var Y=n.alternate;Y!==null&&(Y=Y.updateQueue,w=Y.lastBaseUpdate,w!==y&&(w===null?Y.firstBaseUpdate=B:w.next=B,Y.lastBaseUpdate=D))}if(m!==null){var Z=d.baseState;y=0,Y=B=D=null,w=m;do{var q=w.lane&-536870913,j=q!==w.lane;if(j?(ke&q)===q:(u&q)===q){q!==0&&q===ko&&(Qm=!0),Y!==null&&(Y=Y.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var me=n,Ae=w;q=s;var nt=o;switch(Ae.tag){case 1:if(me=Ae.payload,typeof me=="function"){Z=me.call(nt,Z,q);break e}Z=me;break e;case 3:me.flags=me.flags&-65537|128;case 0:if(me=Ae.payload,q=typeof me=="function"?me.call(nt,Z,q):me,q==null)break e;Z=T({},Z,q);break e;case 2:us=!0}}q=w.callback,q!==null&&(n.flags|=64,j&&(n.flags|=8192),j=d.callbacks,j===null?d.callbacks=[q]:j.push(q))}else j={lane:q,tag:w.tag,payload:w.payload,callback:w.callback,next:null},Y===null?(B=Y=j,D=Z):Y=Y.next=j,y|=q;if(w=w.next,w===null){if(w=d.shared.pending,w===null)break;j=w,w=j.next,j.next=null,d.lastBaseUpdate=j,d.shared.pending=null}}while(!0);Y===null&&(D=Z),d.baseState=D,d.firstBaseUpdate=B,d.lastBaseUpdate=Y,m===null&&(d.shared.lanes=0),gs|=y,n.lanes=y,n.memoizedState=Z}}function Vv(n,s){if(typeof n!="function")throw Error(i(191,n));n.call(s)}function xv(n,s){var o=n.callbacks;if(o!==null)for(n.callbacks=null,n=0;n<o.length;n++)Vv(o[n],s)}var Bo=x(null),Jh=x(0);function Mv(n,s){n=wr,ie(Jh,n),ie(Bo,s),wr=n|s.baseLanes}function Ym(){ie(Jh,wr),ie(Bo,Bo.current)}function $m(){wr=Jh.current,W(Bo),W(Jh)}var Qn=x(null),hi=null;function ds(n){var s=n.alternate;ie(Nt,Nt.current&1),ie(Qn,n),hi===null&&(s===null||Bo.current!==null||s.memoizedState!==null)&&(hi=n)}function Xm(n){ie(Nt,Nt.current),ie(Qn,n),hi===null&&(hi=n)}function kv(n){n.tag===22?(ie(Nt,Nt.current),ie(Qn,n),hi===null&&(hi=n)):fs()}function fs(){ie(Nt,Nt.current),ie(Qn,Qn.current)}function Yn(n){W(Qn),hi===n&&(hi=null),W(Nt)}var Nt=x(0);function Zh(n){for(var s=n;s!==null;){if(s.tag===13){var o=s.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||ng(o)||ig(o)))return s}else if(s.tag===19&&(s.memoizedProps.revealOrder==="forwards"||s.memoizedProps.revealOrder==="backwards"||s.memoizedProps.revealOrder==="unstable_legacy-backwards"||s.memoizedProps.revealOrder==="together")){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var mr=0,Ce=null,et=null,kt=null,ed=!1,Fo=!1,Sa=!1,td=0,Nu=0,qo=null,LR=0;function Tt(){throw Error(i(321))}function Wm(n,s){if(s===null)return!1;for(var o=0;o<s.length&&o<n.length;o++)if(!Hn(n[o],s[o]))return!1;return!0}function Jm(n,s,o,u,d,m){return mr=m,Ce=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,X.H=n===null||n.memoizedState===null?vE:fp,Sa=!1,m=o(u,d),Sa=!1,Fo&&(m=Uv(s,o,u,d)),Lv(n),m}function Lv(n){X.H=Vu;var s=et!==null&&et.next!==null;if(mr=0,kt=et=Ce=null,ed=!1,Nu=0,qo=null,s)throw Error(i(300));n===null||Lt||(n=n.dependencies,n!==null&&Hh(n)&&(Lt=!0))}function Uv(n,s,o,u){Ce=n;var d=0;do{if(Fo&&(qo=null),Nu=0,Fo=!1,25<=d)throw Error(i(301));if(d+=1,kt=et=null,n.updateQueue!=null){var m=n.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}X.H=EE,m=s(o,u)}while(Fo);return m}function UR(){var n=X.H,s=n.useState()[0];return s=typeof s.then=="function"?Ou(s):s,n=n.useState()[0],(et!==null?et.memoizedState:null)!==n&&(Ce.flags|=1024),s}function Zm(){var n=td!==0;return td=0,n}function ep(n,s,o){s.updateQueue=n.updateQueue,s.flags&=-2053,n.lanes&=~o}function tp(n){if(ed){for(n=n.memoizedState;n!==null;){var s=n.queue;s!==null&&(s.pending=null),n=n.next}ed=!1}mr=0,kt=et=Ce=null,Fo=!1,Nu=td=0,qo=null}function An(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Ce.memoizedState=kt=n:kt=kt.next=n,kt}function Ot(){if(et===null){var n=Ce.alternate;n=n!==null?n.memoizedState:null}else n=et.next;var s=kt===null?Ce.memoizedState:kt.next;if(s!==null)kt=s,et=n;else{if(n===null)throw Ce.alternate===null?Error(i(467)):Error(i(310));et=n,n={memoizedState:et.memoizedState,baseState:et.baseState,baseQueue:et.baseQueue,queue:et.queue,next:null},kt===null?Ce.memoizedState=kt=n:kt=kt.next=n}return kt}function nd(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ou(n){var s=Nu;return Nu+=1,qo===null&&(qo=[]),n=Cv(qo,n,s),s=Ce,(kt===null?s.memoizedState:kt.next)===null&&(s=s.alternate,X.H=s===null||s.memoizedState===null?vE:fp),n}function id(n){if(n!==null&&typeof n=="object"){if(typeof n.then=="function")return Ou(n);if(n.$$typeof===re)return un(n)}throw Error(i(438,String(n)))}function np(n){var s=null,o=Ce.updateQueue;if(o!==null&&(s=o.memoCache),s==null){var u=Ce.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(s={data:u.data.map(function(d){return d.slice()}),index:0})))}if(s==null&&(s={data:[],index:0}),o===null&&(o=nd(),Ce.updateQueue=o),o.memoCache=s,o=s.data[s.index],o===void 0)for(o=s.data[s.index]=Array(n),u=0;u<n;u++)o[u]=N;return s.index++,o}function pr(n,s){return typeof s=="function"?s(n):s}function rd(n){var s=Ot();return ip(s,et,n)}function ip(n,s,o){var u=n.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var d=n.baseQueue,m=u.pending;if(m!==null){if(d!==null){var y=d.next;d.next=m.next,m.next=y}s.baseQueue=d=m,u.pending=null}if(m=n.baseState,d===null)n.memoizedState=m;else{s=d.next;var w=y=null,D=null,B=s,Y=!1;do{var Z=B.lane&-536870913;if(Z!==B.lane?(ke&Z)===Z:(mr&Z)===Z){var q=B.revertLane;if(q===0)D!==null&&(D=D.next={lane:0,revertLane:0,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null}),Z===ko&&(Y=!0);else if((mr&q)===q){B=B.next,q===ko&&(Y=!0);continue}else Z={lane:0,revertLane:B.revertLane,gesture:null,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},D===null?(w=D=Z,y=m):D=D.next=Z,Ce.lanes|=q,gs|=q;Z=B.action,Sa&&o(m,Z),m=B.hasEagerState?B.eagerState:o(m,Z)}else q={lane:Z,revertLane:B.revertLane,gesture:B.gesture,action:B.action,hasEagerState:B.hasEagerState,eagerState:B.eagerState,next:null},D===null?(w=D=q,y=m):D=D.next=q,Ce.lanes|=Z,gs|=Z;B=B.next}while(B!==null&&B!==s);if(D===null?y=m:D.next=w,!Hn(m,n.memoizedState)&&(Lt=!0,Y&&(o=Lo,o!==null)))throw o;n.memoizedState=m,n.baseState=y,n.baseQueue=D,u.lastRenderedState=m}return d===null&&(u.lanes=0),[n.memoizedState,u.dispatch]}function rp(n){var s=Ot(),o=s.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=n;var u=o.dispatch,d=o.pending,m=s.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do m=n(m,y.action),y=y.next;while(y!==d);Hn(m,s.memoizedState)||(Lt=!0),s.memoizedState=m,s.baseQueue===null&&(s.baseState=m),o.lastRenderedState=m}return[m,u]}function zv(n,s,o){var u=Ce,d=Ot(),m=Fe;if(m){if(o===void 0)throw Error(i(407));o=o()}else o=s();var y=!Hn((et||d).memoizedState,o);if(y&&(d.memoizedState=o,Lt=!0),d=d.queue,op(qv.bind(null,u,d,n),[n]),d.getSnapshot!==s||y||kt!==null&&kt.memoizedState.tag&1){if(u.flags|=2048,jo(9,{destroy:void 0},Fv.bind(null,u,d,o,s),null),rt===null)throw Error(i(349));m||(mr&127)!==0||Bv(u,s,o)}return o}function Bv(n,s,o){n.flags|=16384,n={getSnapshot:s,value:o},s=Ce.updateQueue,s===null?(s=nd(),Ce.updateQueue=s,s.stores=[n]):(o=s.stores,o===null?s.stores=[n]:o.push(n))}function Fv(n,s,o,u){s.value=o,s.getSnapshot=u,jv(s)&&Gv(n)}function qv(n,s,o){return o(function(){jv(s)&&Gv(n)})}function jv(n){var s=n.getSnapshot;n=n.value;try{var o=s();return!Hn(n,o)}catch{return!0}}function Gv(n){var s=_a(n,2);s!==null&&kn(s,n,2)}function sp(n){var s=An();if(typeof n=="function"){var o=n;if(n=o(),Sa){ni(!0);try{o()}finally{ni(!1)}}}return s.memoizedState=s.baseState=n,s.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:n},s}function Hv(n,s,o,u){return n.baseState=o,ip(n,et,typeof u=="function"?u:pr)}function zR(n,s,o,u,d){if(od(n))throw Error(i(485));if(n=s.action,n!==null){var m={payload:d,action:n,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(y){m.listeners.push(y)}};X.T!==null?o(!0):m.isTransition=!1,u(m),o=s.pending,o===null?(m.next=s.pending=m,Kv(s,m)):(m.next=o.next,s.pending=o.next=m)}}function Kv(n,s){var o=s.action,u=s.payload,d=n.state;if(s.isTransition){var m=X.T,y={};X.T=y;try{var w=o(d,u),D=X.S;D!==null&&D(y,w),Qv(n,s,w)}catch(B){ap(n,s,B)}finally{m!==null&&y.types!==null&&(m.types=y.types),X.T=m}}else try{m=o(d,u),Qv(n,s,m)}catch(B){ap(n,s,B)}}function Qv(n,s,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){Yv(n,s,u)},function(u){return ap(n,s,u)}):Yv(n,s,o)}function Yv(n,s,o){s.status="fulfilled",s.value=o,$v(s),n.state=o,s=n.pending,s!==null&&(o=s.next,o===s?n.pending=null:(o=o.next,s.next=o,Kv(n,o)))}function ap(n,s,o){var u=n.pending;if(n.pending=null,u!==null){u=u.next;do s.status="rejected",s.reason=o,$v(s),s=s.next;while(s!==u)}n.action=null}function $v(n){n=n.listeners;for(var s=0;s<n.length;s++)(0,n[s])()}function Xv(n,s){return s}function Wv(n,s){if(Fe){var o=rt.formState;if(o!==null){e:{var u=Ce;if(Fe){if(ot){t:{for(var d=ot,m=ci;d.nodeType!==8;){if(!m){d=null;break t}if(d=di(d.nextSibling),d===null){d=null;break t}}m=d.data,d=m==="F!"||m==="F"?d:null}if(d){ot=di(d.nextSibling),u=d.data==="F!";break e}}os(u)}u=!1}u&&(s=o[0])}}return o=An(),o.memoizedState=o.baseState=s,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Xv,lastRenderedState:s},o.queue=u,o=gE.bind(null,Ce,u),u.dispatch=o,u=sp(!1),m=dp.bind(null,Ce,!1,u.queue),u=An(),d={state:s,dispatch:null,action:n,pending:null},u.queue=d,o=zR.bind(null,Ce,d,m,o),d.dispatch=o,u.memoizedState=n,[s,o,!1]}function Jv(n){var s=Ot();return Zv(s,et,n)}function Zv(n,s,o){if(s=ip(n,s,Xv)[0],n=rd(pr)[0],typeof s=="object"&&s!==null&&typeof s.then=="function")try{var u=Ou(s)}catch(y){throw y===Uo?Yh:y}else u=s;s=Ot();var d=s.queue,m=d.dispatch;return o!==s.memoizedState&&(Ce.flags|=2048,jo(9,{destroy:void 0},BR.bind(null,d,o),null)),[u,m,n]}function BR(n,s){n.action=s}function eE(n){var s=Ot(),o=et;if(o!==null)return Zv(s,o,n);Ot(),s=s.memoizedState,o=Ot();var u=o.queue.dispatch;return o.memoizedState=n,[s,u,!1]}function jo(n,s,o,u){return n={tag:n,create:o,deps:u,inst:s,next:null},s=Ce.updateQueue,s===null&&(s=nd(),Ce.updateQueue=s),o=s.lastEffect,o===null?s.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,s.lastEffect=n),n}function tE(){return Ot().memoizedState}function sd(n,s,o,u){var d=An();Ce.flags|=n,d.memoizedState=jo(1|s,{destroy:void 0},o,u===void 0?null:u)}function ad(n,s,o,u){var d=Ot();u=u===void 0?null:u;var m=d.memoizedState.inst;et!==null&&u!==null&&Wm(u,et.memoizedState.deps)?d.memoizedState=jo(s,m,o,u):(Ce.flags|=n,d.memoizedState=jo(1|s,m,o,u))}function nE(n,s){sd(8390656,8,n,s)}function op(n,s){ad(2048,8,n,s)}function FR(n){Ce.flags|=4;var s=Ce.updateQueue;if(s===null)s=nd(),Ce.updateQueue=s,s.events=[n];else{var o=s.events;o===null?s.events=[n]:o.push(n)}}function iE(n){var s=Ot().memoizedState;return FR({ref:s,nextImpl:n}),function(){if((Ye&2)!==0)throw Error(i(440));return s.impl.apply(void 0,arguments)}}function rE(n,s){return ad(4,2,n,s)}function sE(n,s){return ad(4,4,n,s)}function aE(n,s){if(typeof s=="function"){n=n();var o=s(n);return function(){typeof o=="function"?o():s(null)}}if(s!=null)return n=n(),s.current=n,function(){s.current=null}}function oE(n,s,o){o=o!=null?o.concat([n]):null,ad(4,4,aE.bind(null,s,n),o)}function lp(){}function lE(n,s){var o=Ot();s=s===void 0?null:s;var u=o.memoizedState;return s!==null&&Wm(s,u[1])?u[0]:(o.memoizedState=[n,s],n)}function uE(n,s){var o=Ot();s=s===void 0?null:s;var u=o.memoizedState;if(s!==null&&Wm(s,u[1]))return u[0];if(u=n(),Sa){ni(!0);try{n()}finally{ni(!1)}}return o.memoizedState=[u,s],u}function up(n,s,o){return o===void 0||(mr&1073741824)!==0&&(ke&261930)===0?n.memoizedState=s:(n.memoizedState=o,n=cT(),Ce.lanes|=n,gs|=n,o)}function cE(n,s,o,u){return Hn(o,s)?o:Bo.current!==null?(n=up(n,o,u),Hn(n,s)||(Lt=!0),n):(mr&42)===0||(mr&1073741824)!==0&&(ke&261930)===0?(Lt=!0,n.memoizedState=o):(n=cT(),Ce.lanes|=n,gs|=n,s)}function hE(n,s,o,u,d){var m=ae.p;ae.p=m!==0&&8>m?m:8;var y=X.T,w={};X.T=w,dp(n,!1,s,o);try{var D=d(),B=X.S;if(B!==null&&B(w,D),D!==null&&typeof D=="object"&&typeof D.then=="function"){var Y=kR(D,u);Pu(n,s,Y,Wn(n))}else Pu(n,s,u,Wn(n))}catch(Z){Pu(n,s,{then:function(){},status:"rejected",reason:Z},Wn())}finally{ae.p=m,y!==null&&w.types!==null&&(y.types=w.types),X.T=y}}function qR(){}function cp(n,s,o,u){if(n.tag!==5)throw Error(i(476));var d=dE(n).queue;hE(n,d,s,we,o===null?qR:function(){return fE(n),o(u)})}function dE(n){var s=n.memoizedState;if(s!==null)return s;s={memoizedState:we,baseState:we,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:we},next:null};var o={};return s.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:pr,lastRenderedState:o},next:null},n.memoizedState=s,n=n.alternate,n!==null&&(n.memoizedState=s),s}function fE(n){var s=dE(n);s.next===null&&(s=n.alternate.memoizedState),Pu(n,s.next.queue,{},Wn())}function hp(){return un($u)}function mE(){return Ot().memoizedState}function pE(){return Ot().memoizedState}function jR(n){for(var s=n.return;s!==null;){switch(s.tag){case 24:case 3:var o=Wn();n=cs(o);var u=hs(s,n,o);u!==null&&(kn(u,s,o),Ru(u,s,o)),s={cache:Bm()},n.payload=s;return}s=s.return}}function GR(n,s,o){var u=Wn();o={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},od(n)?_E(s,o):(o=Dm(n,s,o,u),o!==null&&(kn(o,n,u),yE(o,s,u)))}function gE(n,s,o){var u=Wn();Pu(n,s,o,u)}function Pu(n,s,o,u){var d={lane:u,revertLane:0,gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null};if(od(n))_E(s,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=s.lastRenderedReducer,m!==null))try{var y=s.lastRenderedState,w=m(y,o);if(d.hasEagerState=!0,d.eagerState=w,Hn(w,y))return Fh(n,s,d,0),rt===null&&Bh(),!1}catch{}finally{}if(o=Dm(n,s,d,u),o!==null)return kn(o,n,u),yE(o,s,u),!0}return!1}function dp(n,s,o,u){if(u={lane:2,revertLane:Gp(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},od(n)){if(s)throw Error(i(479))}else s=Dm(n,o,u,2),s!==null&&kn(s,n,2)}function od(n){var s=n.alternate;return n===Ce||s!==null&&s===Ce}function _E(n,s){Fo=ed=!0;var o=n.pending;o===null?s.next=s:(s.next=o.next,o.next=s),n.pending=s}function yE(n,s,o){if((o&4194048)!==0){var u=s.lanes;u&=n.pendingLanes,o|=u,s.lanes=o,jr(n,o)}}var Vu={readContext:un,use:id,useCallback:Tt,useContext:Tt,useEffect:Tt,useImperativeHandle:Tt,useLayoutEffect:Tt,useInsertionEffect:Tt,useMemo:Tt,useReducer:Tt,useRef:Tt,useState:Tt,useDebugValue:Tt,useDeferredValue:Tt,useTransition:Tt,useSyncExternalStore:Tt,useId:Tt,useHostTransitionStatus:Tt,useFormState:Tt,useActionState:Tt,useOptimistic:Tt,useMemoCache:Tt,useCacheRefresh:Tt};Vu.useEffectEvent=Tt;var vE={readContext:un,use:id,useCallback:function(n,s){return An().memoizedState=[n,s===void 0?null:s],n},useContext:un,useEffect:nE,useImperativeHandle:function(n,s,o){o=o!=null?o.concat([n]):null,sd(4194308,4,aE.bind(null,s,n),o)},useLayoutEffect:function(n,s){return sd(4194308,4,n,s)},useInsertionEffect:function(n,s){sd(4,2,n,s)},useMemo:function(n,s){var o=An();s=s===void 0?null:s;var u=n();if(Sa){ni(!0);try{n()}finally{ni(!1)}}return o.memoizedState=[u,s],u},useReducer:function(n,s,o){var u=An();if(o!==void 0){var d=o(s);if(Sa){ni(!0);try{o(s)}finally{ni(!1)}}}else d=s;return u.memoizedState=u.baseState=d,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:d},u.queue=n,n=n.dispatch=GR.bind(null,Ce,n),[u.memoizedState,n]},useRef:function(n){var s=An();return n={current:n},s.memoizedState=n},useState:function(n){n=sp(n);var s=n.queue,o=gE.bind(null,Ce,s);return s.dispatch=o,[n.memoizedState,o]},useDebugValue:lp,useDeferredValue:function(n,s){var o=An();return up(o,n,s)},useTransition:function(){var n=sp(!1);return n=hE.bind(null,Ce,n.queue,!0,!1),An().memoizedState=n,[!1,n]},useSyncExternalStore:function(n,s,o){var u=Ce,d=An();if(Fe){if(o===void 0)throw Error(i(407));o=o()}else{if(o=s(),rt===null)throw Error(i(349));(ke&127)!==0||Bv(u,s,o)}d.memoizedState=o;var m={value:o,getSnapshot:s};return d.queue=m,nE(qv.bind(null,u,m,n),[n]),u.flags|=2048,jo(9,{destroy:void 0},Fv.bind(null,u,m,o,s),null),o},useId:function(){var n=An(),s=rt.identifierPrefix;if(Fe){var o=Li,u=ki;o=(u&~(1<<32-vn(u)-1)).toString(32)+o,s="_"+s+"R_"+o,o=td++,0<o&&(s+="H"+o.toString(32)),s+="_"}else o=LR++,s="_"+s+"r_"+o.toString(32)+"_";return n.memoizedState=s},useHostTransitionStatus:hp,useFormState:Wv,useActionState:Wv,useOptimistic:function(n){var s=An();s.memoizedState=s.baseState=n;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return s.queue=o,s=dp.bind(null,Ce,!0,o),o.dispatch=s,[n,s]},useMemoCache:np,useCacheRefresh:function(){return An().memoizedState=jR.bind(null,Ce)},useEffectEvent:function(n){var s=An(),o={impl:n};return s.memoizedState=o,function(){if((Ye&2)!==0)throw Error(i(440));return o.impl.apply(void 0,arguments)}}},fp={readContext:un,use:id,useCallback:lE,useContext:un,useEffect:op,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:sE,useMemo:uE,useReducer:rd,useRef:tE,useState:function(){return rd(pr)},useDebugValue:lp,useDeferredValue:function(n,s){var o=Ot();return cE(o,et.memoizedState,n,s)},useTransition:function(){var n=rd(pr)[0],s=Ot().memoizedState;return[typeof n=="boolean"?n:Ou(n),s]},useSyncExternalStore:zv,useId:mE,useHostTransitionStatus:hp,useFormState:Jv,useActionState:Jv,useOptimistic:function(n,s){var o=Ot();return Hv(o,et,n,s)},useMemoCache:np,useCacheRefresh:pE};fp.useEffectEvent=iE;var EE={readContext:un,use:id,useCallback:lE,useContext:un,useEffect:op,useImperativeHandle:oE,useInsertionEffect:rE,useLayoutEffect:sE,useMemo:uE,useReducer:rp,useRef:tE,useState:function(){return rp(pr)},useDebugValue:lp,useDeferredValue:function(n,s){var o=Ot();return et===null?up(o,n,s):cE(o,et.memoizedState,n,s)},useTransition:function(){var n=rp(pr)[0],s=Ot().memoizedState;return[typeof n=="boolean"?n:Ou(n),s]},useSyncExternalStore:zv,useId:mE,useHostTransitionStatus:hp,useFormState:eE,useActionState:eE,useOptimistic:function(n,s){var o=Ot();return et!==null?Hv(o,et,n,s):(o.baseState=n,[n,o.queue.dispatch])},useMemoCache:np,useCacheRefresh:pE};EE.useEffectEvent=iE;function mp(n,s,o,u){s=n.memoizedState,o=o(u,s),o=o==null?s:T({},s,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var pp={enqueueSetState:function(n,s,o){n=n._reactInternals;var u=Wn(),d=cs(u);d.payload=s,o!=null&&(d.callback=o),s=hs(n,d,u),s!==null&&(kn(s,n,u),Ru(s,n,u))},enqueueReplaceState:function(n,s,o){n=n._reactInternals;var u=Wn(),d=cs(u);d.tag=1,d.payload=s,o!=null&&(d.callback=o),s=hs(n,d,u),s!==null&&(kn(s,n,u),Ru(s,n,u))},enqueueForceUpdate:function(n,s){n=n._reactInternals;var o=Wn(),u=cs(o);u.tag=2,s!=null&&(u.callback=s),s=hs(n,u,o),s!==null&&(kn(s,n,o),Ru(s,n,o))}};function TE(n,s,o,u,d,m,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,m,y):s.prototype&&s.prototype.isPureReactComponent?!vu(o,u)||!vu(d,m):!0}function wE(n,s,o,u){n=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(o,u),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(o,u),s.state!==n&&pp.enqueueReplaceState(s,s.state,null)}function Ra(n,s){var o=s;if("ref"in s){o={};for(var u in s)u!=="ref"&&(o[u]=s[u])}if(n=n.defaultProps){o===s&&(o=T({},o));for(var d in n)o[d]===void 0&&(o[d]=n[d])}return o}function IE(n){zh(n)}function AE(n){console.error(n)}function bE(n){zh(n)}function ld(n,s){try{var o=n.onUncaughtError;o(s.value,{componentStack:s.stack})}catch(u){setTimeout(function(){throw u})}}function SE(n,s,o){try{var u=n.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:s.tag===1?s.stateNode:null})}catch(d){setTimeout(function(){throw d})}}function gp(n,s,o){return o=cs(o),o.tag=3,o.payload={element:null},o.callback=function(){ld(n,s)},o}function RE(n){return n=cs(n),n.tag=3,n}function CE(n,s,o,u){var d=o.type.getDerivedStateFromError;if(typeof d=="function"){var m=u.value;n.payload=function(){return d(m)},n.callback=function(){SE(s,o,u)}}var y=o.stateNode;y!==null&&typeof y.componentDidCatch=="function"&&(n.callback=function(){SE(s,o,u),typeof d!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var w=u.stack;this.componentDidCatch(u.value,{componentStack:w!==null?w:""})})}function HR(n,s,o,u,d){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(s=o.alternate,s!==null&&Mo(s,o,d,!0),o=Qn.current,o!==null){switch(o.tag){case 31:case 13:return hi===null?Ed():o.alternate===null&&wt===0&&(wt=3),o.flags&=-257,o.flags|=65536,o.lanes=d,u===$h?o.flags|=16384:(s=o.updateQueue,s===null?o.updateQueue=new Set([u]):s.add(u),Fp(n,u,d)),!1;case 22:return o.flags|=65536,u===$h?o.flags|=16384:(s=o.updateQueue,s===null?(s={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=s):(o=s.retryQueue,o===null?s.retryQueue=new Set([u]):o.add(u)),Fp(n,u,d)),!1}throw Error(i(435,o.tag))}return Fp(n,u,d),Ed(),!1}if(Fe)return s=Qn.current,s!==null?((s.flags&65536)===0&&(s.flags|=256),s.flags|=65536,s.lanes=d,u!==Mm&&(n=Error(i(422),{cause:u}),wu(oi(n,o)))):(u!==Mm&&(s=Error(i(423),{cause:u}),wu(oi(s,o))),n=n.current.alternate,n.flags|=65536,d&=-d,n.lanes|=d,u=oi(u,o),d=gp(n.stateNode,u,d),Km(n,d),wt!==4&&(wt=2)),!1;var m=Error(i(520),{cause:u});if(m=oi(m,o),Fu===null?Fu=[m]:Fu.push(m),wt!==4&&(wt=2),s===null)return!0;u=oi(u,o),o=s;do{switch(o.tag){case 3:return o.flags|=65536,n=d&-d,o.lanes|=n,n=gp(o.stateNode,u,n),Km(o,n),!1;case 1:if(s=o.type,m=o.stateNode,(o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(_s===null||!_s.has(m))))return o.flags|=65536,d&=-d,o.lanes|=d,d=RE(d),CE(d,n,o,u),Km(o,d),!1}o=o.return}while(o!==null);return!1}var _p=Error(i(461)),Lt=!1;function cn(n,s,o,u){s.child=n===null?Pv(s,null,o,u):ba(s,n.child,o,u)}function DE(n,s,o,u,d){o=o.render;var m=s.ref;if("ref"in u){var y={};for(var w in u)w!=="ref"&&(y[w]=u[w])}else y=u;return Ta(s),u=Jm(n,s,o,y,m,d),w=Zm(),n!==null&&!Lt?(ep(n,s,d),gr(n,s,d)):(Fe&&w&&Vm(s),s.flags|=1,cn(n,s,u,d),s.child)}function NE(n,s,o,u,d){if(n===null){var m=o.type;return typeof m=="function"&&!Nm(m)&&m.defaultProps===void 0&&o.compare===null?(s.tag=15,s.type=m,OE(n,s,m,u,d)):(n=jh(o.type,null,u,s,s.mode,d),n.ref=s.ref,n.return=s,s.child=n)}if(m=n.child,!bp(n,d)){var y=m.memoizedProps;if(o=o.compare,o=o!==null?o:vu,o(y,u)&&n.ref===s.ref)return gr(n,s,d)}return s.flags|=1,n=cr(m,u),n.ref=s.ref,n.return=s,s.child=n}function OE(n,s,o,u,d){if(n!==null){var m=n.memoizedProps;if(vu(m,u)&&n.ref===s.ref)if(Lt=!1,s.pendingProps=u=m,bp(n,d))(n.flags&131072)!==0&&(Lt=!0);else return s.lanes=n.lanes,gr(n,s,d)}return yp(n,s,o,u,d)}function PE(n,s,o,u){var d=u.children,m=n!==null?n.memoizedState:null;if(n===null&&s.stateNode===null&&(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((s.flags&128)!==0){if(m=m!==null?m.baseLanes|o:o,n!==null){for(u=s.child=n.child,d=0;u!==null;)d=d|u.lanes|u.childLanes,u=u.sibling;u=d&~m}else u=0,s.child=null;return VE(n,s,m,o,u)}if((o&536870912)!==0)s.memoizedState={baseLanes:0,cachePool:null},n!==null&&Qh(s,m!==null?m.cachePool:null),m!==null?Mv(s,m):Ym(),kv(s);else return u=s.lanes=536870912,VE(n,s,m!==null?m.baseLanes|o:o,o,u)}else m!==null?(Qh(s,m.cachePool),Mv(s,m),fs(),s.memoizedState=null):(n!==null&&Qh(s,null),Ym(),fs());return cn(n,s,d,o),s.child}function xu(n,s){return n!==null&&n.tag===22||s.stateNode!==null||(s.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.sibling}function VE(n,s,o,u,d){var m=qm();return m=m===null?null:{parent:Mt._currentValue,pool:m},s.memoizedState={baseLanes:o,cachePool:m},n!==null&&Qh(s,null),Ym(),kv(s),n!==null&&Mo(n,s,u,!0),s.childLanes=d,null}function ud(n,s){return s=hd({mode:s.mode,children:s.children},n.mode),s.ref=n.ref,n.child=s,s.return=n,s}function xE(n,s,o){return ba(s,n.child,null,o),n=ud(s,s.pendingProps),n.flags|=2,Yn(s),s.memoizedState=null,n}function KR(n,s,o){var u=s.pendingProps,d=(s.flags&128)!==0;if(s.flags&=-129,n===null){if(Fe){if(u.mode==="hidden")return n=ud(s,u),s.lanes=536870912,xu(null,n);if(Xm(s),(n=ot)?(n=KT(n,ci),n=n!==null&&n.data==="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:ss!==null?{id:ki,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},o=_v(n),o.return=s,s.child=o,ln=s,ot=null)):n=null,n===null)throw os(s);return s.lanes=536870912,null}return ud(s,u)}var m=n.memoizedState;if(m!==null){var y=m.dehydrated;if(Xm(s),d)if(s.flags&256)s.flags&=-257,s=xE(n,s,o);else if(s.memoizedState!==null)s.child=n.child,s.flags|=128,s=null;else throw Error(i(558));else if(Lt||Mo(n,s,o,!1),d=(o&n.childLanes)!==0,Lt||d){if(u=rt,u!==null&&(y=Gr(u,o),y!==0&&y!==m.retryLane))throw m.retryLane=y,_a(n,y),kn(u,n,y),_p;Ed(),s=xE(n,s,o)}else n=m.treeContext,ot=di(y.nextSibling),ln=s,Fe=!0,as=null,ci=!1,n!==null&&Ev(s,n),s=ud(s,u),s.flags|=4096;return s}return n=cr(n.child,{mode:u.mode,children:u.children}),n.ref=s.ref,s.child=n,n.return=s,n}function cd(n,s){var o=s.ref;if(o===null)n!==null&&n.ref!==null&&(s.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(n===null||n.ref!==o)&&(s.flags|=4194816)}}function yp(n,s,o,u,d){return Ta(s),o=Jm(n,s,o,u,void 0,d),u=Zm(),n!==null&&!Lt?(ep(n,s,d),gr(n,s,d)):(Fe&&u&&Vm(s),s.flags|=1,cn(n,s,o,d),s.child)}function ME(n,s,o,u,d,m){return Ta(s),s.updateQueue=null,o=Uv(s,u,o,d),Lv(n),u=Zm(),n!==null&&!Lt?(ep(n,s,m),gr(n,s,m)):(Fe&&u&&Vm(s),s.flags|=1,cn(n,s,o,m),s.child)}function kE(n,s,o,u,d){if(Ta(s),s.stateNode===null){var m=Oo,y=o.contextType;typeof y=="object"&&y!==null&&(m=un(y)),m=new o(u,m),s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=pp,s.stateNode=m,m._reactInternals=s,m=s.stateNode,m.props=u,m.state=s.memoizedState,m.refs={},Gm(s),y=o.contextType,m.context=typeof y=="object"&&y!==null?un(y):Oo,m.state=s.memoizedState,y=o.getDerivedStateFromProps,typeof y=="function"&&(mp(s,o,y,u),m.state=s.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(y=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),y!==m.state&&pp.enqueueReplaceState(m,m.state,null),Du(s,u,m,d),Cu(),m.state=s.memoizedState),typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!0}else if(n===null){m=s.stateNode;var w=s.memoizedProps,D=Ra(o,w);m.props=D;var B=m.context,Y=o.contextType;y=Oo,typeof Y=="object"&&Y!==null&&(y=un(Y));var Z=o.getDerivedStateFromProps;Y=typeof Z=="function"||typeof m.getSnapshotBeforeUpdate=="function",w=s.pendingProps!==w,Y||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(w||B!==y)&&wE(s,m,u,y),us=!1;var q=s.memoizedState;m.state=q,Du(s,u,m,d),Cu(),B=s.memoizedState,w||q!==B||us?(typeof Z=="function"&&(mp(s,o,Z,u),B=s.memoizedState),(D=us||TE(s,o,D,u,q,B,y))?(Y||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(s.flags|=4194308)):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=u,s.memoizedState=B),m.props=u,m.state=B,m.context=y,u=D):(typeof m.componentDidMount=="function"&&(s.flags|=4194308),u=!1)}else{m=s.stateNode,Hm(n,s),y=s.memoizedProps,Y=Ra(o,y),m.props=Y,Z=s.pendingProps,q=m.context,B=o.contextType,D=Oo,typeof B=="object"&&B!==null&&(D=un(B)),w=o.getDerivedStateFromProps,(B=typeof w=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(y!==Z||q!==D)&&wE(s,m,u,D),us=!1,q=s.memoizedState,m.state=q,Du(s,u,m,d),Cu();var j=s.memoizedState;y!==Z||q!==j||us||n!==null&&n.dependencies!==null&&Hh(n.dependencies)?(typeof w=="function"&&(mp(s,o,w,u),j=s.memoizedState),(Y=us||TE(s,o,Y,u,q,j,D)||n!==null&&n.dependencies!==null&&Hh(n.dependencies))?(B||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,j,D),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,j,D)),typeof m.componentDidUpdate=="function"&&(s.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),s.memoizedProps=u,s.memoizedState=j),m.props=u,m.state=j,m.context=D,u=Y):(typeof m.componentDidUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||y===n.memoizedProps&&q===n.memoizedState||(s.flags|=1024),u=!1)}return m=u,cd(n,s),u=(s.flags&128)!==0,m||u?(m=s.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:m.render(),s.flags|=1,n!==null&&u?(s.child=ba(s,n.child,null,d),s.child=ba(s,null,o,d)):cn(n,s,o,d),s.memoizedState=m.state,n=s.child):n=gr(n,s,d),n}function LE(n,s,o,u){return va(),s.flags|=256,cn(n,s,o,u),s.child}var vp={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Ep(n){return{baseLanes:n,cachePool:Sv()}}function Tp(n,s,o){return n=n!==null?n.childLanes&~o:0,s&&(n|=Xn),n}function UE(n,s,o){var u=s.pendingProps,d=!1,m=(s.flags&128)!==0,y;if((y=m)||(y=n!==null&&n.memoizedState===null?!1:(Nt.current&2)!==0),y&&(d=!0,s.flags&=-129),y=(s.flags&32)!==0,s.flags&=-33,n===null){if(Fe){if(d?ds(s):fs(),(n=ot)?(n=KT(n,ci),n=n!==null&&n.data!=="&"?n:null,n!==null&&(s.memoizedState={dehydrated:n,treeContext:ss!==null?{id:ki,overflow:Li}:null,retryLane:536870912,hydrationErrors:null},o=_v(n),o.return=s,s.child=o,ln=s,ot=null)):n=null,n===null)throw os(s);return ig(n)?s.lanes=32:s.lanes=536870912,null}var w=u.children;return u=u.fallback,d?(fs(),d=s.mode,w=hd({mode:"hidden",children:w},d),u=ya(u,d,o,null),w.return=s,u.return=s,w.sibling=u,s.child=w,u=s.child,u.memoizedState=Ep(o),u.childLanes=Tp(n,y,o),s.memoizedState=vp,xu(null,u)):(ds(s),wp(s,w))}var D=n.memoizedState;if(D!==null&&(w=D.dehydrated,w!==null)){if(m)s.flags&256?(ds(s),s.flags&=-257,s=Ip(n,s,o)):s.memoizedState!==null?(fs(),s.child=n.child,s.flags|=128,s=null):(fs(),w=u.fallback,d=s.mode,u=hd({mode:"visible",children:u.children},d),w=ya(w,d,o,null),w.flags|=2,u.return=s,w.return=s,u.sibling=w,s.child=u,ba(s,n.child,null,o),u=s.child,u.memoizedState=Ep(o),u.childLanes=Tp(n,y,o),s.memoizedState=vp,s=xu(null,u));else if(ds(s),ig(w)){if(y=w.nextSibling&&w.nextSibling.dataset,y)var B=y.dgst;y=B,u=Error(i(419)),u.stack="",u.digest=y,wu({value:u,source:null,stack:null}),s=Ip(n,s,o)}else if(Lt||Mo(n,s,o,!1),y=(o&n.childLanes)!==0,Lt||y){if(y=rt,y!==null&&(u=Gr(y,o),u!==0&&u!==D.retryLane))throw D.retryLane=u,_a(n,u),kn(y,n,u),_p;ng(w)||Ed(),s=Ip(n,s,o)}else ng(w)?(s.flags|=192,s.child=n.child,s=null):(n=D.treeContext,ot=di(w.nextSibling),ln=s,Fe=!0,as=null,ci=!1,n!==null&&Ev(s,n),s=wp(s,u.children),s.flags|=4096);return s}return d?(fs(),w=u.fallback,d=s.mode,D=n.child,B=D.sibling,u=cr(D,{mode:"hidden",children:u.children}),u.subtreeFlags=D.subtreeFlags&65011712,B!==null?w=cr(B,w):(w=ya(w,d,o,null),w.flags|=2),w.return=s,u.return=s,u.sibling=w,s.child=u,xu(null,u),u=s.child,w=n.child.memoizedState,w===null?w=Ep(o):(d=w.cachePool,d!==null?(D=Mt._currentValue,d=d.parent!==D?{parent:D,pool:D}:d):d=Sv(),w={baseLanes:w.baseLanes|o,cachePool:d}),u.memoizedState=w,u.childLanes=Tp(n,y,o),s.memoizedState=vp,xu(n.child,u)):(ds(s),o=n.child,n=o.sibling,o=cr(o,{mode:"visible",children:u.children}),o.return=s,o.sibling=null,n!==null&&(y=s.deletions,y===null?(s.deletions=[n],s.flags|=16):y.push(n)),s.child=o,s.memoizedState=null,o)}function wp(n,s){return s=hd({mode:"visible",children:s},n.mode),s.return=n,n.child=s}function hd(n,s){return n=Kn(22,n,null,s),n.lanes=0,n}function Ip(n,s,o){return ba(s,n.child,null,o),n=wp(s,s.pendingProps.children),n.flags|=2,s.memoizedState=null,n}function zE(n,s,o){n.lanes|=s;var u=n.alternate;u!==null&&(u.lanes|=s),Um(n.return,s,o)}function Ap(n,s,o,u,d,m){var y=n.memoizedState;y===null?n.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:d,treeForkCount:m}:(y.isBackwards=s,y.rendering=null,y.renderingStartTime=0,y.last=u,y.tail=o,y.tailMode=d,y.treeForkCount=m)}function BE(n,s,o){var u=s.pendingProps,d=u.revealOrder,m=u.tail;u=u.children;var y=Nt.current,w=(y&2)!==0;if(w?(y=y&1|2,s.flags|=128):y&=1,ie(Nt,y),cn(n,s,u,o),u=Fe?Tu:0,!w&&n!==null&&(n.flags&128)!==0)e:for(n=s.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&zE(n,o,s);else if(n.tag===19)zE(n,o,s);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===s)break e;for(;n.sibling===null;){if(n.return===null||n.return===s)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}switch(d){case"forwards":for(o=s.child,d=null;o!==null;)n=o.alternate,n!==null&&Zh(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=s.child,s.child=null):(d=o.sibling,o.sibling=null),Ap(s,!1,d,o,m,u);break;case"backwards":case"unstable_legacy-backwards":for(o=null,d=s.child,s.child=null;d!==null;){if(n=d.alternate,n!==null&&Zh(n)===null){s.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Ap(s,!0,o,null,m,u);break;case"together":Ap(s,!1,null,null,void 0,u);break;default:s.memoizedState=null}return s.child}function gr(n,s,o){if(n!==null&&(s.dependencies=n.dependencies),gs|=s.lanes,(o&s.childLanes)===0)if(n!==null){if(Mo(n,s,o,!1),(o&s.childLanes)===0)return null}else return null;if(n!==null&&s.child!==n.child)throw Error(i(153));if(s.child!==null){for(n=s.child,o=cr(n,n.pendingProps),s.child=o,o.return=s;n.sibling!==null;)n=n.sibling,o=o.sibling=cr(n,n.pendingProps),o.return=s;o.sibling=null}return s.child}function bp(n,s){return(n.lanes&s)!==0?!0:(n=n.dependencies,!!(n!==null&&Hh(n)))}function QR(n,s,o){switch(s.tag){case 3:rn(s,s.stateNode.containerInfo),ls(s,Mt,n.memoizedState.cache),va();break;case 27:case 5:Ci(s);break;case 4:rn(s,s.stateNode.containerInfo);break;case 10:ls(s,s.type,s.memoizedProps.value);break;case 31:if(s.memoizedState!==null)return s.flags|=128,Xm(s),null;break;case 13:var u=s.memoizedState;if(u!==null)return u.dehydrated!==null?(ds(s),s.flags|=128,null):(o&s.child.childLanes)!==0?UE(n,s,o):(ds(s),n=gr(n,s,o),n!==null?n.sibling:null);ds(s);break;case 19:var d=(n.flags&128)!==0;if(u=(o&s.childLanes)!==0,u||(Mo(n,s,o,!1),u=(o&s.childLanes)!==0),d){if(u)return BE(n,s,o);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),ie(Nt,Nt.current),u)break;return null;case 22:return s.lanes=0,PE(n,s,o,s.pendingProps);case 24:ls(s,Mt,n.memoizedState.cache)}return gr(n,s,o)}function FE(n,s,o){if(n!==null)if(n.memoizedProps!==s.pendingProps)Lt=!0;else{if(!bp(n,o)&&(s.flags&128)===0)return Lt=!1,QR(n,s,o);Lt=(n.flags&131072)!==0}else Lt=!1,Fe&&(s.flags&1048576)!==0&&vv(s,Tu,s.index);switch(s.lanes=0,s.tag){case 16:e:{var u=s.pendingProps;if(n=Ia(s.elementType),s.type=n,typeof n=="function")Nm(n)?(u=Ra(n,u),s.tag=1,s=kE(null,s,n,u,o)):(s.tag=0,s=yp(null,s,n,u,o));else{if(n!=null){var d=n.$$typeof;if(d===ve){s.tag=11,s=DE(null,s,n,u,o);break e}else if(d===R){s.tag=14,s=NE(null,s,n,u,o);break e}}throw s=ct(n)||n,Error(i(306,s,""))}}return s;case 0:return yp(n,s,s.type,s.pendingProps,o);case 1:return u=s.type,d=Ra(u,s.pendingProps),kE(n,s,u,d,o);case 3:e:{if(rn(s,s.stateNode.containerInfo),n===null)throw Error(i(387));u=s.pendingProps;var m=s.memoizedState;d=m.element,Hm(n,s),Du(s,u,null,o);var y=s.memoizedState;if(u=y.cache,ls(s,Mt,u),u!==m.cache&&zm(s,[Mt],o,!0),Cu(),u=y.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:y.cache},s.updateQueue.baseState=m,s.memoizedState=m,s.flags&256){s=LE(n,s,u,o);break e}else if(u!==d){d=oi(Error(i(424)),s),wu(d),s=LE(n,s,u,o);break e}else{switch(n=s.stateNode.containerInfo,n.nodeType){case 9:n=n.body;break;default:n=n.nodeName==="HTML"?n.ownerDocument.body:n}for(ot=di(n.firstChild),ln=s,Fe=!0,as=null,ci=!0,o=Pv(s,null,u,o),s.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(va(),u===d){s=gr(n,s,o);break e}cn(n,s,u,o)}s=s.child}return s;case 26:return cd(n,s),n===null?(o=JT(s.type,null,s.pendingProps,null))?s.memoizedState=o:Fe||(o=s.type,n=s.pendingProps,u=Rd(Oe.current).createElement(o),u[vt]=s,u[on]=n,hn(u,o,n),Dt(u),s.stateNode=u):s.memoizedState=JT(s.type,n.memoizedProps,s.pendingProps,n.memoizedState),null;case 27:return Ci(s),n===null&&Fe&&(u=s.stateNode=$T(s.type,s.pendingProps,Oe.current),ln=s,ci=!0,d=ot,Ts(s.type)?(rg=d,ot=di(u.firstChild)):ot=d),cn(n,s,s.pendingProps.children,o),cd(n,s),n===null&&(s.flags|=4194304),s.child;case 5:return n===null&&Fe&&((d=u=ot)&&(u=IC(u,s.type,s.pendingProps,ci),u!==null?(s.stateNode=u,ln=s,ot=di(u.firstChild),ci=!1,d=!0):d=!1),d||os(s)),Ci(s),d=s.type,m=s.pendingProps,y=n!==null?n.memoizedProps:null,u=m.children,Zp(d,m)?u=null:y!==null&&Zp(d,y)&&(s.flags|=32),s.memoizedState!==null&&(d=Jm(n,s,UR,null,null,o),$u._currentValue=d),cd(n,s),cn(n,s,u,o),s.child;case 6:return n===null&&Fe&&((n=o=ot)&&(o=AC(o,s.pendingProps,ci),o!==null?(s.stateNode=o,ln=s,ot=null,n=!0):n=!1),n||os(s)),null;case 13:return UE(n,s,o);case 4:return rn(s,s.stateNode.containerInfo),u=s.pendingProps,n===null?s.child=ba(s,null,u,o):cn(n,s,u,o),s.child;case 11:return DE(n,s,s.type,s.pendingProps,o);case 7:return cn(n,s,s.pendingProps,o),s.child;case 8:return cn(n,s,s.pendingProps.children,o),s.child;case 12:return cn(n,s,s.pendingProps.children,o),s.child;case 10:return u=s.pendingProps,ls(s,s.type,u.value),cn(n,s,u.children,o),s.child;case 9:return d=s.type._context,u=s.pendingProps.children,Ta(s),d=un(d),u=u(d),s.flags|=1,cn(n,s,u,o),s.child;case 14:return NE(n,s,s.type,s.pendingProps,o);case 15:return OE(n,s,s.type,s.pendingProps,o);case 19:return BE(n,s,o);case 31:return KR(n,s,o);case 22:return PE(n,s,o,s.pendingProps);case 24:return Ta(s),u=un(Mt),n===null?(d=qm(),d===null&&(d=rt,m=Bm(),d.pooledCache=m,m.refCount++,m!==null&&(d.pooledCacheLanes|=o),d=m),s.memoizedState={parent:u,cache:d},Gm(s),ls(s,Mt,d)):((n.lanes&o)!==0&&(Hm(n,s),Du(s,null,null,o),Cu()),d=n.memoizedState,m=s.memoizedState,d.parent!==u?(d={parent:u,cache:u},s.memoizedState=d,s.lanes===0&&(s.memoizedState=s.updateQueue.baseState=d),ls(s,Mt,u)):(u=m.cache,ls(s,Mt,u),u!==d.cache&&zm(s,[Mt],o,!0))),cn(n,s,s.pendingProps.children,o),s.child;case 29:throw s.pendingProps}throw Error(i(156,s.tag))}function _r(n){n.flags|=4}function Sp(n,s,o,u,d){if((s=(n.mode&32)!==0)&&(s=!1),s){if(n.flags|=16777216,(d&335544128)===d)if(n.stateNode.complete)n.flags|=8192;else if(mT())n.flags|=8192;else throw Aa=$h,jm}else n.flags&=-16777217}function qE(n,s){if(s.type!=="stylesheet"||(s.state.loading&4)!==0)n.flags&=-16777217;else if(n.flags|=16777216,!iw(s))if(mT())n.flags|=8192;else throw Aa=$h,jm}function dd(n,s){s!==null&&(n.flags|=4),n.flags&16384&&(s=n.tag!==22?tu():536870912,n.lanes|=s,Qo|=s)}function Mu(n,s){if(!Fe)switch(n.tailMode){case"hidden":s=n.tail;for(var o=null;s!==null;)s.alternate!==null&&(o=s),s=s.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?s||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function lt(n){var s=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(s)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags&65011712,u|=d.flags&65011712,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,u|=d.subtreeFlags,u|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=u,n.childLanes=o,s}function YR(n,s,o){var u=s.pendingProps;switch(xm(s),s.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(s),null;case 1:return lt(s),null;case 3:return o=s.stateNode,u=null,n!==null&&(u=n.memoizedState.cache),s.memoizedState.cache!==u&&(s.flags|=2048),fr(Mt),gt(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(n===null||n.child===null)&&(xo(s)?_r(s):n===null||n.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,km())),lt(s),null;case 26:var d=s.type,m=s.memoizedState;return n===null?(_r(s),m!==null?(lt(s),qE(s,m)):(lt(s),Sp(s,d,null,u,o))):m?m!==n.memoizedState?(_r(s),lt(s),qE(s,m)):(lt(s),s.flags&=-16777217):(n=n.memoizedProps,n!==u&&_r(s),lt(s),Sp(s,d,n,u,o)),null;case 27:if(Ji(s),o=Oe.current,d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return lt(s),null}n=pe.current,xo(s)?Tv(s):(n=$T(d,u,o),s.stateNode=n,_r(s))}return lt(s),null;case 5:if(Ji(s),d=s.type,n!==null&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(!u){if(s.stateNode===null)throw Error(i(166));return lt(s),null}if(m=pe.current,xo(s))Tv(s);else{var y=Rd(Oe.current);switch(m){case 1:m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case 2:m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;default:switch(d){case"svg":m=y.createElementNS("http://www.w3.org/2000/svg",d);break;case"math":m=y.createElementNS("http://www.w3.org/1998/Math/MathML",d);break;case"script":m=y.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?y.createElement("select",{is:u.is}):y.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?y.createElement(d,{is:u.is}):y.createElement(d)}}m[vt]=s,m[on]=u;e:for(y=s.child;y!==null;){if(y.tag===5||y.tag===6)m.appendChild(y.stateNode);else if(y.tag!==4&&y.tag!==27&&y.child!==null){y.child.return=y,y=y.child;continue}if(y===s)break e;for(;y.sibling===null;){if(y.return===null||y.return===s)break e;y=y.return}y.sibling.return=y.return,y=y.sibling}s.stateNode=m;e:switch(hn(m,d,u),d){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}u&&_r(s)}}return lt(s),Sp(s,s.type,n===null?null:n.memoizedProps,s.pendingProps,o),null;case 6:if(n&&s.stateNode!=null)n.memoizedProps!==u&&_r(s);else{if(typeof u!="string"&&s.stateNode===null)throw Error(i(166));if(n=Oe.current,xo(s)){if(n=s.stateNode,o=s.memoizedProps,u=null,d=ln,d!==null)switch(d.tag){case 27:case 5:u=d.memoizedProps}n[vt]=s,n=!!(n.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||UT(n.nodeValue,o)),n||os(s,!0)}else n=Rd(n).createTextNode(u),n[vt]=s,s.stateNode=n}return lt(s),null;case 31:if(o=s.memoizedState,n===null||n.memoizedState!==null){if(u=xo(s),o!==null){if(n===null){if(!u)throw Error(i(318));if(n=s.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(i(557));n[vt]=s}else va(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;lt(s),n=!1}else o=km(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=o),n=!0;if(!n)return s.flags&256?(Yn(s),s):(Yn(s),null);if((s.flags&128)!==0)throw Error(i(558))}return lt(s),null;case 13:if(u=s.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(d=xo(s),u!==null&&u.dehydrated!==null){if(n===null){if(!d)throw Error(i(318));if(d=s.memoizedState,d=d!==null?d.dehydrated:null,!d)throw Error(i(317));d[vt]=s}else va(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;lt(s),d=!1}else d=km(),n!==null&&n.memoizedState!==null&&(n.memoizedState.hydrationErrors=d),d=!0;if(!d)return s.flags&256?(Yn(s),s):(Yn(s),null)}return Yn(s),(s.flags&128)!==0?(s.lanes=o,s):(o=u!==null,n=n!==null&&n.memoizedState!==null,o&&(u=s.child,d=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(d=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==d&&(u.flags|=2048)),o!==n&&o&&(s.child.flags|=8192),dd(s,s.updateQueue),lt(s),null);case 4:return gt(),n===null&&Yp(s.stateNode.containerInfo),lt(s),null;case 10:return fr(s.type),lt(s),null;case 19:if(W(Nt),u=s.memoizedState,u===null)return lt(s),null;if(d=(s.flags&128)!==0,m=u.rendering,m===null)if(d)Mu(u,!1);else{if(wt!==0||n!==null&&(n.flags&128)!==0)for(n=s.child;n!==null;){if(m=Zh(n),m!==null){for(s.flags|=128,Mu(u,!1),n=m.updateQueue,s.updateQueue=n,dd(s,n),s.subtreeFlags=0,n=o,o=s.child;o!==null;)gv(o,n),o=o.sibling;return ie(Nt,Nt.current&1|2),Fe&&hr(s,u.treeForkCount),s.child}n=n.sibling}u.tail!==null&&sn()>_d&&(s.flags|=128,d=!0,Mu(u,!1),s.lanes=4194304)}else{if(!d)if(n=Zh(m),n!==null){if(s.flags|=128,d=!0,n=n.updateQueue,s.updateQueue=n,dd(s,n),Mu(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Fe)return lt(s),null}else 2*sn()-u.renderingStartTime>_d&&o!==536870912&&(s.flags|=128,d=!0,Mu(u,!1),s.lanes=4194304);u.isBackwards?(m.sibling=s.child,s.child=m):(n=u.last,n!==null?n.sibling=m:s.child=m,u.last=m)}return u.tail!==null?(n=u.tail,u.rendering=n,u.tail=n.sibling,u.renderingStartTime=sn(),n.sibling=null,o=Nt.current,ie(Nt,d?o&1|2:o&1),Fe&&hr(s,u.treeForkCount),n):(lt(s),null);case 22:case 23:return Yn(s),$m(),u=s.memoizedState!==null,n!==null?n.memoizedState!==null!==u&&(s.flags|=8192):u&&(s.flags|=8192),u?(o&536870912)!==0&&(s.flags&128)===0&&(lt(s),s.subtreeFlags&6&&(s.flags|=8192)):lt(s),o=s.updateQueue,o!==null&&dd(s,o.retryQueue),o=null,n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),u=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(u=s.memoizedState.cachePool.pool),u!==o&&(s.flags|=2048),n!==null&&W(wa),null;case 24:return o=null,n!==null&&(o=n.memoizedState.cache),s.memoizedState.cache!==o&&(s.flags|=2048),fr(Mt),lt(s),null;case 25:return null;case 30:return null}throw Error(i(156,s.tag))}function $R(n,s){switch(xm(s),s.tag){case 1:return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 3:return fr(Mt),gt(),n=s.flags,(n&65536)!==0&&(n&128)===0?(s.flags=n&-65537|128,s):null;case 26:case 27:case 5:return Ji(s),null;case 31:if(s.memoizedState!==null){if(Yn(s),s.alternate===null)throw Error(i(340));va()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 13:if(Yn(s),n=s.memoizedState,n!==null&&n.dehydrated!==null){if(s.alternate===null)throw Error(i(340));va()}return n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 19:return W(Nt),null;case 4:return gt(),null;case 10:return fr(s.type),null;case 22:case 23:return Yn(s),$m(),n!==null&&W(wa),n=s.flags,n&65536?(s.flags=n&-65537|128,s):null;case 24:return fr(Mt),null;case 25:return null;default:return null}}function jE(n,s){switch(xm(s),s.tag){case 3:fr(Mt),gt();break;case 26:case 27:case 5:Ji(s);break;case 4:gt();break;case 31:s.memoizedState!==null&&Yn(s);break;case 13:Yn(s);break;case 19:W(Nt);break;case 10:fr(s.type);break;case 22:case 23:Yn(s),$m(),n!==null&&W(wa);break;case 24:fr(Mt)}}function ku(n,s){try{var o=s.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var d=u.next;o=d;do{if((o.tag&n)===n){u=void 0;var m=o.create,y=o.inst;u=m(),y.destroy=u}o=o.next}while(o!==d)}}catch(w){Je(s,s.return,w)}}function ms(n,s,o){try{var u=s.updateQueue,d=u!==null?u.lastEffect:null;if(d!==null){var m=d.next;u=m;do{if((u.tag&n)===n){var y=u.inst,w=y.destroy;if(w!==void 0){y.destroy=void 0,d=s;var D=o,B=w;try{B()}catch(Y){Je(d,D,Y)}}}u=u.next}while(u!==m)}}catch(Y){Je(s,s.return,Y)}}function GE(n){var s=n.updateQueue;if(s!==null){var o=n.stateNode;try{xv(s,o)}catch(u){Je(n,n.return,u)}}}function HE(n,s,o){o.props=Ra(n.type,n.memoizedProps),o.state=n.memoizedState;try{o.componentWillUnmount()}catch(u){Je(n,s,u)}}function Lu(n,s){try{var o=n.ref;if(o!==null){switch(n.tag){case 26:case 27:case 5:var u=n.stateNode;break;case 30:u=n.stateNode;break;default:u=n.stateNode}typeof o=="function"?n.refCleanup=o(u):o.current=u}}catch(d){Je(n,s,d)}}function Ui(n,s){var o=n.ref,u=n.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(d){Je(n,s,d)}finally{n.refCleanup=null,n=n.alternate,n!=null&&(n.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(d){Je(n,s,d)}else o.current=null}function KE(n){var s=n.type,o=n.memoizedProps,u=n.stateNode;try{e:switch(s){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(d){Je(n,n.return,d)}}function Rp(n,s,o){try{var u=n.stateNode;_C(u,n.type,o,s),u[on]=s}catch(d){Je(n,n.return,d)}}function QE(n){return n.tag===5||n.tag===3||n.tag===26||n.tag===27&&Ts(n.type)||n.tag===4}function Cp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||QE(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.tag===27&&Ts(n.type)||n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Dp(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(n,s):(s=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,s.appendChild(n),o=o._reactRootContainer,o!=null||s.onclick!==null||(s.onclick=Kt));else if(u!==4&&(u===27&&Ts(n.type)&&(o=n.stateNode,s=null),n=n.child,n!==null))for(Dp(n,s,o),n=n.sibling;n!==null;)Dp(n,s,o),n=n.sibling}function fd(n,s,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,s?o.insertBefore(n,s):o.appendChild(n);else if(u!==4&&(u===27&&Ts(n.type)&&(o=n.stateNode),n=n.child,n!==null))for(fd(n,s,o),n=n.sibling;n!==null;)fd(n,s,o),n=n.sibling}function YE(n){var s=n.stateNode,o=n.memoizedProps;try{for(var u=n.type,d=s.attributes;d.length;)s.removeAttributeNode(d[0]);hn(s,u,o),s[vt]=n,s[on]=o}catch(m){Je(n,n.return,m)}}var yr=!1,Ut=!1,Np=!1,$E=typeof WeakSet=="function"?WeakSet:Set,$t=null;function XR(n,s){if(n=n.containerInfo,Wp=xd,n=ov(n),Im(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var d=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var y=0,w=-1,D=-1,B=0,Y=0,Z=n,q=null;t:for(;;){for(var j;Z!==o||d!==0&&Z.nodeType!==3||(w=y+d),Z!==m||u!==0&&Z.nodeType!==3||(D=y+u),Z.nodeType===3&&(y+=Z.nodeValue.length),(j=Z.firstChild)!==null;)q=Z,Z=j;for(;;){if(Z===n)break t;if(q===o&&++B===d&&(w=y),q===m&&++Y===u&&(D=y),(j=Z.nextSibling)!==null)break;Z=q,q=Z.parentNode}Z=j}o=w===-1||D===-1?null:{start:w,end:D}}else o=null}o=o||{start:0,end:0}}else o=null;for(Jp={focusedElem:n,selectionRange:o},xd=!1,$t=s;$t!==null;)if(s=$t,n=s.child,(s.subtreeFlags&1028)!==0&&n!==null)n.return=s,$t=n;else for(;$t!==null;){switch(s=$t,m=s.alternate,n=s.flags,s.tag){case 0:if((n&4)!==0&&(n=s.updateQueue,n=n!==null?n.events:null,n!==null))for(o=0;o<n.length;o++)d=n[o],d.ref.impl=d.nextImpl;break;case 11:case 15:break;case 1:if((n&1024)!==0&&m!==null){n=void 0,o=s,d=m.memoizedProps,m=m.memoizedState,u=o.stateNode;try{var me=Ra(o.type,d);n=u.getSnapshotBeforeUpdate(me,m),u.__reactInternalSnapshotBeforeUpdate=n}catch(Ae){Je(o,o.return,Ae)}}break;case 3:if((n&1024)!==0){if(n=s.stateNode.containerInfo,o=n.nodeType,o===9)tg(n);else if(o===1)switch(n.nodeName){case"HEAD":case"HTML":case"BODY":tg(n);break;default:n.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((n&1024)!==0)throw Error(i(163))}if(n=s.sibling,n!==null){n.return=s.return,$t=n;break}$t=s.return}}function XE(n,s,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Er(n,o),u&4&&ku(5,o);break;case 1:if(Er(n,o),u&4)if(n=o.stateNode,s===null)try{n.componentDidMount()}catch(y){Je(o,o.return,y)}else{var d=Ra(o.type,s.memoizedProps);s=s.memoizedState;try{n.componentDidUpdate(d,s,n.__reactInternalSnapshotBeforeUpdate)}catch(y){Je(o,o.return,y)}}u&64&&GE(o),u&512&&Lu(o,o.return);break;case 3:if(Er(n,o),u&64&&(n=o.updateQueue,n!==null)){if(s=null,o.child!==null)switch(o.child.tag){case 27:case 5:s=o.child.stateNode;break;case 1:s=o.child.stateNode}try{xv(n,s)}catch(y){Je(o,o.return,y)}}break;case 27:s===null&&u&4&&YE(o);case 26:case 5:Er(n,o),s===null&&u&4&&KE(o),u&512&&Lu(o,o.return);break;case 12:Er(n,o);break;case 31:Er(n,o),u&4&&ZE(n,o);break;case 13:Er(n,o),u&4&&eT(n,o),u&64&&(n=o.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&(o=sC.bind(null,o),bC(n,o))));break;case 22:if(u=o.memoizedState!==null||yr,!u){s=s!==null&&s.memoizedState!==null||Ut,d=yr;var m=Ut;yr=u,(Ut=s)&&!m?Tr(n,o,(o.subtreeFlags&8772)!==0):Er(n,o),yr=d,Ut=m}break;case 30:break;default:Er(n,o)}}function WE(n){var s=n.alternate;s!==null&&(n.alternate=null,WE(s)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(s=n.stateNode,s!==null&&sa(s)),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}var ht=null,Pn=!1;function vr(n,s,o){for(o=o.child;o!==null;)JE(n,s,o),o=o.sibling}function JE(n,s,o){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(zr,o)}catch{}switch(o.tag){case 26:Ut||Ui(o,s),vr(n,s,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:Ut||Ui(o,s);var u=ht,d=Pn;Ts(o.type)&&(ht=o.stateNode,Pn=!1),vr(n,s,o),Ku(o.stateNode),ht=u,Pn=d;break;case 5:Ut||Ui(o,s);case 6:if(u=ht,d=Pn,ht=null,vr(n,s,o),ht=u,Pn=d,ht!==null)if(Pn)try{(ht.nodeType===9?ht.body:ht.nodeName==="HTML"?ht.ownerDocument.body:ht).removeChild(o.stateNode)}catch(m){Je(o,s,m)}else try{ht.removeChild(o.stateNode)}catch(m){Je(o,s,m)}break;case 18:ht!==null&&(Pn?(n=ht,GT(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,o.stateNode),tl(n)):GT(ht,o.stateNode));break;case 4:u=ht,d=Pn,ht=o.stateNode.containerInfo,Pn=!0,vr(n,s,o),ht=u,Pn=d;break;case 0:case 11:case 14:case 15:ms(2,o,s),Ut||ms(4,o,s),vr(n,s,o);break;case 1:Ut||(Ui(o,s),u=o.stateNode,typeof u.componentWillUnmount=="function"&&HE(o,s,u)),vr(n,s,o);break;case 21:vr(n,s,o);break;case 22:Ut=(u=Ut)||o.memoizedState!==null,vr(n,s,o),Ut=u;break;default:vr(n,s,o)}}function ZE(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null))){n=n.dehydrated;try{tl(n)}catch(o){Je(s,s.return,o)}}}function eT(n,s){if(s.memoizedState===null&&(n=s.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null))))try{tl(n)}catch(o){Je(s,s.return,o)}}function WR(n){switch(n.tag){case 31:case 13:case 19:var s=n.stateNode;return s===null&&(s=n.stateNode=new $E),s;case 22:return n=n.stateNode,s=n._retryCache,s===null&&(s=n._retryCache=new $E),s;default:throw Error(i(435,n.tag))}}function md(n,s){var o=WR(n);s.forEach(function(u){if(!o.has(u)){o.add(u);var d=aC.bind(null,n,u);u.then(d,d)}})}function Vn(n,s){var o=s.deletions;if(o!==null)for(var u=0;u<o.length;u++){var d=o[u],m=n,y=s,w=y;e:for(;w!==null;){switch(w.tag){case 27:if(Ts(w.type)){ht=w.stateNode,Pn=!1;break e}break;case 5:ht=w.stateNode,Pn=!1;break e;case 3:case 4:ht=w.stateNode.containerInfo,Pn=!0;break e}w=w.return}if(ht===null)throw Error(i(160));JE(m,y,d),ht=null,Pn=!1,m=d.alternate,m!==null&&(m.return=null),d.return=null}if(s.subtreeFlags&13886)for(s=s.child;s!==null;)tT(s,n),s=s.sibling}var Ai=null;function tT(n,s){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:Vn(s,n),xn(n),u&4&&(ms(3,n,n.return),ku(3,n),ms(5,n,n.return));break;case 1:Vn(s,n),xn(n),u&512&&(Ut||o===null||Ui(o,o.return)),u&64&&yr&&(n=n.updateQueue,n!==null&&(u=n.callbacks,u!==null&&(o=n.shared.hiddenCallbacks,n.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var d=Ai;if(Vn(s,n),xn(n),u&512&&(Ut||o===null||Ui(o,o.return)),u&4){var m=o!==null?o.memoizedState:null;if(u=n.memoizedState,o===null)if(u===null)if(n.stateNode===null){e:{u=n.type,o=n.memoizedProps,d=d.ownerDocument||d;t:switch(u){case"title":m=d.getElementsByTagName("title")[0],(!m||m[nr]||m[vt]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=d.createElement(u),d.head.insertBefore(m,d.querySelector("head > title"))),hn(m,u,o),m[vt]=n,Dt(m),u=m;break e;case"link":var y=tw("link","href",d).get(u+(o.href||""));if(y){for(var w=0;w<y.length;w++)if(m=y[w],m.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&m.getAttribute("rel")===(o.rel==null?null:o.rel)&&m.getAttribute("title")===(o.title==null?null:o.title)&&m.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){y.splice(w,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;case"meta":if(y=tw("meta","content",d).get(u+(o.content||""))){for(w=0;w<y.length;w++)if(m=y[w],m.getAttribute("content")===(o.content==null?null:""+o.content)&&m.getAttribute("name")===(o.name==null?null:o.name)&&m.getAttribute("property")===(o.property==null?null:o.property)&&m.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&m.getAttribute("charset")===(o.charSet==null?null:o.charSet)){y.splice(w,1);break t}}m=d.createElement(u),hn(m,u,o),d.head.appendChild(m);break;default:throw Error(i(468,u))}m[vt]=n,Dt(m),u=m}n.stateNode=u}else nw(d,n.type,n.stateNode);else n.stateNode=ew(d,u,n.memoizedProps);else m!==u?(m===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):m.count--,u===null?nw(d,n.type,n.stateNode):ew(d,u,n.memoizedProps)):u===null&&n.stateNode!==null&&Rp(n,n.memoizedProps,o.memoizedProps)}break;case 27:Vn(s,n),xn(n),u&512&&(Ut||o===null||Ui(o,o.return)),o!==null&&u&4&&Rp(n,n.memoizedProps,o.memoizedProps);break;case 5:if(Vn(s,n),xn(n),u&512&&(Ut||o===null||Ui(o,o.return)),n.flags&32){d=n.stateNode;try{si(d,"")}catch(me){Je(n,n.return,me)}}u&4&&n.stateNode!=null&&(d=n.memoizedProps,Rp(n,d,o!==null?o.memoizedProps:d)),u&1024&&(Np=!0);break;case 6:if(Vn(s,n),xn(n),u&4){if(n.stateNode===null)throw Error(i(162));u=n.memoizedProps,o=n.stateNode;try{o.nodeValue=u}catch(me){Je(n,n.return,me)}}break;case 3:if(Nd=null,d=Ai,Ai=Cd(s.containerInfo),Vn(s,n),Ai=d,xn(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{tl(s.containerInfo)}catch(me){Je(n,n.return,me)}Np&&(Np=!1,nT(n));break;case 4:u=Ai,Ai=Cd(n.stateNode.containerInfo),Vn(s,n),xn(n),Ai=u;break;case 12:Vn(s,n),xn(n);break;case 31:Vn(s,n),xn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,md(n,u)));break;case 13:Vn(s,n),xn(n),n.child.flags&8192&&n.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(gd=sn()),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,md(n,u)));break;case 22:d=n.memoizedState!==null;var D=o!==null&&o.memoizedState!==null,B=yr,Y=Ut;if(yr=B||d,Ut=Y||D,Vn(s,n),Ut=Y,yr=B,xn(n),u&8192)e:for(s=n.stateNode,s._visibility=d?s._visibility&-2:s._visibility|1,d&&(o===null||D||yr||Ut||Ca(n)),o=null,s=n;;){if(s.tag===5||s.tag===26){if(o===null){D=o=s;try{if(m=D.stateNode,d)y=m.style,typeof y.setProperty=="function"?y.setProperty("display","none","important"):y.display="none";else{w=D.stateNode;var Z=D.memoizedProps.style,q=Z!=null&&Z.hasOwnProperty("display")?Z.display:null;w.style.display=q==null||typeof q=="boolean"?"":(""+q).trim()}}catch(me){Je(D,D.return,me)}}}else if(s.tag===6){if(o===null){D=s;try{D.stateNode.nodeValue=d?"":D.memoizedProps}catch(me){Je(D,D.return,me)}}}else if(s.tag===18){if(o===null){D=s;try{var j=D.stateNode;d?HT(j,!0):HT(D.stateNode,!1)}catch(me){Je(D,D.return,me)}}}else if((s.tag!==22&&s.tag!==23||s.memoizedState===null||s===n)&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===n)break e;for(;s.sibling===null;){if(s.return===null||s.return===n)break e;o===s&&(o=null),s=s.return}o===s&&(o=null),s.sibling.return=s.return,s=s.sibling}u&4&&(u=n.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,md(n,o))));break;case 19:Vn(s,n),xn(n),u&4&&(u=n.updateQueue,u!==null&&(n.updateQueue=null,md(n,u)));break;case 30:break;case 21:break;default:Vn(s,n),xn(n)}}function xn(n){var s=n.flags;if(s&2){try{for(var o,u=n.return;u!==null;){if(QE(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var d=o.stateNode,m=Cp(n);fd(n,m,d);break;case 5:var y=o.stateNode;o.flags&32&&(si(y,""),o.flags&=-33);var w=Cp(n);fd(n,w,y);break;case 3:case 4:var D=o.stateNode.containerInfo,B=Cp(n);Dp(n,B,D);break;default:throw Error(i(161))}}catch(Y){Je(n,n.return,Y)}n.flags&=-3}s&4096&&(n.flags&=-4097)}function nT(n){if(n.subtreeFlags&1024)for(n=n.child;n!==null;){var s=n;nT(s),s.tag===5&&s.flags&1024&&s.stateNode.reset(),n=n.sibling}}function Er(n,s){if(s.subtreeFlags&8772)for(s=s.child;s!==null;)XE(n,s.alternate,s),s=s.sibling}function Ca(n){for(n=n.child;n!==null;){var s=n;switch(s.tag){case 0:case 11:case 14:case 15:ms(4,s,s.return),Ca(s);break;case 1:Ui(s,s.return);var o=s.stateNode;typeof o.componentWillUnmount=="function"&&HE(s,s.return,o),Ca(s);break;case 27:Ku(s.stateNode);case 26:case 5:Ui(s,s.return),Ca(s);break;case 22:s.memoizedState===null&&Ca(s);break;case 30:Ca(s);break;default:Ca(s)}n=n.sibling}}function Tr(n,s,o){for(o=o&&(s.subtreeFlags&8772)!==0,s=s.child;s!==null;){var u=s.alternate,d=n,m=s,y=m.flags;switch(m.tag){case 0:case 11:case 15:Tr(d,m,o),ku(4,m);break;case 1:if(Tr(d,m,o),u=m,d=u.stateNode,typeof d.componentDidMount=="function")try{d.componentDidMount()}catch(B){Je(u,u.return,B)}if(u=m,d=u.updateQueue,d!==null){var w=u.stateNode;try{var D=d.shared.hiddenCallbacks;if(D!==null)for(d.shared.hiddenCallbacks=null,d=0;d<D.length;d++)Vv(D[d],w)}catch(B){Je(u,u.return,B)}}o&&y&64&&GE(m),Lu(m,m.return);break;case 27:YE(m);case 26:case 5:Tr(d,m,o),o&&u===null&&y&4&&KE(m),Lu(m,m.return);break;case 12:Tr(d,m,o);break;case 31:Tr(d,m,o),o&&y&4&&ZE(d,m);break;case 13:Tr(d,m,o),o&&y&4&&eT(d,m);break;case 22:m.memoizedState===null&&Tr(d,m,o),Lu(m,m.return);break;case 30:break;default:Tr(d,m,o)}s=s.sibling}}function Op(n,s){var o=null;n!==null&&n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),n=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(n=s.memoizedState.cachePool.pool),n!==o&&(n!=null&&n.refCount++,o!=null&&Iu(o))}function Pp(n,s){n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Iu(n))}function bi(n,s,o,u){if(s.subtreeFlags&10256)for(s=s.child;s!==null;)iT(n,s,o,u),s=s.sibling}function iT(n,s,o,u){var d=s.flags;switch(s.tag){case 0:case 11:case 15:bi(n,s,o,u),d&2048&&ku(9,s);break;case 1:bi(n,s,o,u);break;case 3:bi(n,s,o,u),d&2048&&(n=null,s.alternate!==null&&(n=s.alternate.memoizedState.cache),s=s.memoizedState.cache,s!==n&&(s.refCount++,n!=null&&Iu(n)));break;case 12:if(d&2048){bi(n,s,o,u),n=s.stateNode;try{var m=s.memoizedProps,y=m.id,w=m.onPostCommit;typeof w=="function"&&w(y,s.alternate===null?"mount":"update",n.passiveEffectDuration,-0)}catch(D){Je(s,s.return,D)}}else bi(n,s,o,u);break;case 31:bi(n,s,o,u);break;case 13:bi(n,s,o,u);break;case 23:break;case 22:m=s.stateNode,y=s.alternate,s.memoizedState!==null?m._visibility&2?bi(n,s,o,u):Uu(n,s):m._visibility&2?bi(n,s,o,u):(m._visibility|=2,Go(n,s,o,u,(s.subtreeFlags&10256)!==0||!1)),d&2048&&Op(y,s);break;case 24:bi(n,s,o,u),d&2048&&Pp(s.alternate,s);break;default:bi(n,s,o,u)}}function Go(n,s,o,u,d){for(d=d&&((s.subtreeFlags&10256)!==0||!1),s=s.child;s!==null;){var m=n,y=s,w=o,D=u,B=y.flags;switch(y.tag){case 0:case 11:case 15:Go(m,y,w,D,d),ku(8,y);break;case 23:break;case 22:var Y=y.stateNode;y.memoizedState!==null?Y._visibility&2?Go(m,y,w,D,d):Uu(m,y):(Y._visibility|=2,Go(m,y,w,D,d)),d&&B&2048&&Op(y.alternate,y);break;case 24:Go(m,y,w,D,d),d&&B&2048&&Pp(y.alternate,y);break;default:Go(m,y,w,D,d)}s=s.sibling}}function Uu(n,s){if(s.subtreeFlags&10256)for(s=s.child;s!==null;){var o=n,u=s,d=u.flags;switch(u.tag){case 22:Uu(o,u),d&2048&&Op(u.alternate,u);break;case 24:Uu(o,u),d&2048&&Pp(u.alternate,u);break;default:Uu(o,u)}s=s.sibling}}var zu=8192;function Ho(n,s,o){if(n.subtreeFlags&zu)for(n=n.child;n!==null;)rT(n,s,o),n=n.sibling}function rT(n,s,o){switch(n.tag){case 26:Ho(n,s,o),n.flags&zu&&n.memoizedState!==null&&LC(o,Ai,n.memoizedState,n.memoizedProps);break;case 5:Ho(n,s,o);break;case 3:case 4:var u=Ai;Ai=Cd(n.stateNode.containerInfo),Ho(n,s,o),Ai=u;break;case 22:n.memoizedState===null&&(u=n.alternate,u!==null&&u.memoizedState!==null?(u=zu,zu=16777216,Ho(n,s,o),zu=u):Ho(n,s,o));break;default:Ho(n,s,o)}}function sT(n){var s=n.alternate;if(s!==null&&(n=s.child,n!==null)){s.child=null;do s=n.sibling,n.sibling=null,n=s;while(n!==null)}}function Bu(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];$t=u,oT(u,n)}sT(n)}if(n.subtreeFlags&10256)for(n=n.child;n!==null;)aT(n),n=n.sibling}function aT(n){switch(n.tag){case 0:case 11:case 15:Bu(n),n.flags&2048&&ms(9,n,n.return);break;case 3:Bu(n);break;case 12:Bu(n);break;case 22:var s=n.stateNode;n.memoizedState!==null&&s._visibility&2&&(n.return===null||n.return.tag!==13)?(s._visibility&=-3,pd(n)):Bu(n);break;default:Bu(n)}}function pd(n){var s=n.deletions;if((n.flags&16)!==0){if(s!==null)for(var o=0;o<s.length;o++){var u=s[o];$t=u,oT(u,n)}sT(n)}for(n=n.child;n!==null;){switch(s=n,s.tag){case 0:case 11:case 15:ms(8,s,s.return),pd(s);break;case 22:o=s.stateNode,o._visibility&2&&(o._visibility&=-3,pd(s));break;default:pd(s)}n=n.sibling}}function oT(n,s){for(;$t!==null;){var o=$t;switch(o.tag){case 0:case 11:case 15:ms(8,o,s);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Iu(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,$t=u;else e:for(o=n;$t!==null;){u=$t;var d=u.sibling,m=u.return;if(WE(u),u===o){$t=null;break e}if(d!==null){d.return=m,$t=d;break e}$t=m}}}var JR={getCacheForType:function(n){var s=un(Mt),o=s.data.get(n);return o===void 0&&(o=n(),s.data.set(n,o)),o},cacheSignal:function(){return un(Mt).controller.signal}},ZR=typeof WeakMap=="function"?WeakMap:Map,Ye=0,rt=null,Ve=null,ke=0,We=0,$n=null,ps=!1,Ko=!1,Vp=!1,wr=0,wt=0,gs=0,Da=0,xp=0,Xn=0,Qo=0,Fu=null,Mn=null,Mp=!1,gd=0,lT=0,_d=1/0,yd=null,_s=null,qt=0,ys=null,Yo=null,Ir=0,kp=0,Lp=null,uT=null,qu=0,Up=null;function Wn(){return(Ye&2)!==0&&ke!==0?ke&-ke:X.T!==null?Gp():tr()}function cT(){if(Xn===0)if((ke&536870912)===0||Fe){var n=Di;Di<<=1,(Di&3932160)===0&&(Di=262144),Xn=n}else Xn=536870912;return n=Qn.current,n!==null&&(n.flags|=32),Xn}function kn(n,s,o){(n===rt&&(We===2||We===9)||n.cancelPendingCommit!==null)&&($o(n,0),vs(n,ke,Xn,!1)),qr(n,o),((Ye&2)===0||n!==rt)&&(n===rt&&((Ye&2)===0&&(Da|=o),wt===4&&vs(n,ke,Xn,!1)),zi(n))}function hT(n,s,o){if((Ye&6)!==0)throw Error(i(327));var u=!o&&(s&127)===0&&(s&n.expiredLanes)===0||Fr(n,s),d=u?nC(n,s):Bp(n,s,!0),m=u;do{if(d===0){Ko&&!u&&vs(n,s,0,!1);break}else{if(o=n.current.alternate,m&&!eC(o)){d=Bp(n,s,!1),m=!1;continue}if(d===2){if(m=s,n.errorRecoveryDisabledLanes&m)var y=0;else y=n.pendingLanes&-536870913,y=y!==0?y:y&536870912?536870912:0;if(y!==0){s=y;e:{var w=n;d=Fu;var D=w.current.memoizedState.isDehydrated;if(D&&($o(w,y).flags|=256),y=Bp(w,y,!1),y!==2){if(Vp&&!D){w.errorRecoveryDisabledLanes|=m,Da|=m,d=4;break e}m=Mn,Mn=d,m!==null&&(Mn===null?Mn=m:Mn.push.apply(Mn,m))}d=y}if(m=!1,d!==2)continue}}if(d===1){$o(n,0),vs(n,s,0,!0);break}e:{switch(u=n,m=d,m){case 0:case 1:throw Error(i(345));case 4:if((s&4194048)!==s)break;case 6:vs(u,s,Xn,!ps);break e;case 2:Mn=null;break;case 3:case 5:break;default:throw Error(i(329))}if((s&62914560)===s&&(d=gd+300-sn(),10<d)){if(vs(u,s,Xn,!ps),ii(u,0,!0)!==0)break e;Ir=s,u.timeoutHandle=qT(dT.bind(null,u,o,Mn,yd,Mp,s,Xn,Da,Qo,ps,m,"Throttled",-0,0),d);break e}dT(u,o,Mn,yd,Mp,s,Xn,Da,Qo,ps,m,null,-0,0)}}break}while(!0);zi(n)}function dT(n,s,o,u,d,m,y,w,D,B,Y,Z,q,j){if(n.timeoutHandle=-1,Z=s.subtreeFlags,Z&8192||(Z&16785408)===16785408){Z={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Kt},rT(s,m,Z);var me=(m&62914560)===m?gd-sn():(m&4194048)===m?lT-sn():0;if(me=UC(Z,me),me!==null){Ir=m,n.cancelPendingCommit=me(ET.bind(null,n,s,m,o,u,d,y,w,D,Y,Z,null,q,j)),vs(n,m,y,!B);return}}ET(n,s,m,o,u,d,y,w,D)}function eC(n){for(var s=n;;){var o=s.tag;if((o===0||o===11||o===15)&&s.flags&16384&&(o=s.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var d=o[u],m=d.getSnapshot;d=d.value;try{if(!Hn(m(),d))return!1}catch{return!1}}if(o=s.child,s.subtreeFlags&16384&&o!==null)o.return=s,s=o;else{if(s===n)break;for(;s.sibling===null;){if(s.return===null||s.return===n)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function vs(n,s,o,u){s&=~xp,s&=~Da,n.suspendedLanes|=s,n.pingedLanes&=~s,u&&(n.warmLanes|=s),u=n.expirationTimes;for(var d=s;0<d;){var m=31-vn(d),y=1<<m;u[m]=-1,d&=~y}o!==0&&nu(n,o,s)}function vd(){return(Ye&6)===0?(ju(0),!1):!0}function zp(){if(Ve!==null){if(We===0)var n=Ve.return;else n=Ve,dr=Ea=null,tp(n),zo=null,bu=0,n=Ve;for(;n!==null;)jE(n.alternate,n),n=n.return;Ve=null}}function $o(n,s){var o=n.timeoutHandle;o!==-1&&(n.timeoutHandle=-1,EC(o)),o=n.cancelPendingCommit,o!==null&&(n.cancelPendingCommit=null,o()),Ir=0,zp(),rt=n,Ve=o=cr(n.current,null),ke=s,We=0,$n=null,ps=!1,Ko=Fr(n,s),Vp=!1,Qo=Xn=xp=Da=gs=wt=0,Mn=Fu=null,Mp=!1,(s&8)!==0&&(s|=s&32);var u=n.entangledLanes;if(u!==0)for(n=n.entanglements,u&=s;0<u;){var d=31-vn(u),m=1<<d;s|=n[d],u&=~m}return wr=s,Bh(),o}function fT(n,s){Ce=null,X.H=Vu,s===Uo||s===Yh?(s=Dv(),We=3):s===jm?(s=Dv(),We=4):We=s===_p?8:s!==null&&typeof s=="object"&&typeof s.then=="function"?6:1,$n=s,Ve===null&&(wt=1,ld(n,oi(s,n.current)))}function mT(){var n=Qn.current;return n===null?!0:(ke&4194048)===ke?hi===null:(ke&62914560)===ke||(ke&536870912)!==0?n===hi:!1}function pT(){var n=X.H;return X.H=Vu,n===null?Vu:n}function gT(){var n=X.A;return X.A=JR,n}function Ed(){wt=4,ps||(ke&4194048)!==ke&&Qn.current!==null||(Ko=!0),(gs&134217727)===0&&(Da&134217727)===0||rt===null||vs(rt,ke,Xn,!1)}function Bp(n,s,o){var u=Ye;Ye|=2;var d=pT(),m=gT();(rt!==n||ke!==s)&&(yd=null,$o(n,s)),s=!1;var y=wt;e:do try{if(We!==0&&Ve!==null){var w=Ve,D=$n;switch(We){case 8:zp(),y=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(s=!0);var B=We;if(We=0,$n=null,Xo(n,w,D,B),o&&Ko){y=0;break e}break;default:B=We,We=0,$n=null,Xo(n,w,D,B)}}tC(),y=wt;break}catch(Y){fT(n,Y)}while(!0);return s&&n.shellSuspendCounter++,dr=Ea=null,Ye=u,X.H=d,X.A=m,Ve===null&&(rt=null,ke=0,Bh()),y}function tC(){for(;Ve!==null;)_T(Ve)}function nC(n,s){var o=Ye;Ye|=2;var u=pT(),d=gT();rt!==n||ke!==s?(yd=null,_d=sn()+500,$o(n,s)):Ko=Fr(n,s);e:do try{if(We!==0&&Ve!==null){s=Ve;var m=$n;t:switch(We){case 1:We=0,$n=null,Xo(n,s,m,1);break;case 2:case 9:if(Rv(m)){We=0,$n=null,yT(s);break}s=function(){We!==2&&We!==9||rt!==n||(We=7),zi(n)},m.then(s,s);break e;case 3:We=7;break e;case 4:We=5;break e;case 7:Rv(m)?(We=0,$n=null,yT(s)):(We=0,$n=null,Xo(n,s,m,7));break;case 5:var y=null;switch(Ve.tag){case 26:y=Ve.memoizedState;case 5:case 27:var w=Ve;if(y?iw(y):w.stateNode.complete){We=0,$n=null;var D=w.sibling;if(D!==null)Ve=D;else{var B=w.return;B!==null?(Ve=B,Td(B)):Ve=null}break t}}We=0,$n=null,Xo(n,s,m,5);break;case 6:We=0,$n=null,Xo(n,s,m,6);break;case 8:zp(),wt=6;break e;default:throw Error(i(462))}}iC();break}catch(Y){fT(n,Y)}while(!0);return dr=Ea=null,X.H=u,X.A=d,Ye=o,Ve!==null?0:(rt=null,ke=0,Bh(),wt)}function iC(){for(;Ve!==null&&!dm();)_T(Ve)}function _T(n){var s=FE(n.alternate,n,wr);n.memoizedProps=n.pendingProps,s===null?Td(n):Ve=s}function yT(n){var s=n,o=s.alternate;switch(s.tag){case 15:case 0:s=ME(o,s,s.pendingProps,s.type,void 0,ke);break;case 11:s=ME(o,s,s.pendingProps,s.type.render,s.ref,ke);break;case 5:tp(s);default:jE(o,s),s=Ve=gv(s,wr),s=FE(o,s,wr)}n.memoizedProps=n.pendingProps,s===null?Td(n):Ve=s}function Xo(n,s,o,u){dr=Ea=null,tp(s),zo=null,bu=0;var d=s.return;try{if(HR(n,d,s,o,ke)){wt=1,ld(n,oi(o,n.current)),Ve=null;return}}catch(m){if(d!==null)throw Ve=d,m;wt=1,ld(n,oi(o,n.current)),Ve=null;return}s.flags&32768?(Fe||u===1?n=!0:Ko||(ke&536870912)!==0?n=!1:(ps=n=!0,(u===2||u===9||u===3||u===6)&&(u=Qn.current,u!==null&&u.tag===13&&(u.flags|=16384))),vT(s,n)):Td(s)}function Td(n){var s=n;do{if((s.flags&32768)!==0){vT(s,ps);return}n=s.return;var o=YR(s.alternate,s,wr);if(o!==null){Ve=o;return}if(s=s.sibling,s!==null){Ve=s;return}Ve=s=n}while(s!==null);wt===0&&(wt=5)}function vT(n,s){do{var o=$R(n.alternate,n);if(o!==null){o.flags&=32767,Ve=o;return}if(o=n.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!s&&(n=n.sibling,n!==null)){Ve=n;return}Ve=n=o}while(n!==null);wt=6,Ve=null}function ET(n,s,o,u,d,m,y,w,D){n.cancelPendingCommit=null;do wd();while(qt!==0);if((Ye&6)!==0)throw Error(i(327));if(s!==null){if(s===n.current)throw Error(i(177));if(m=s.lanes|s.childLanes,m|=Cm,an(n,o,m,y,w,D),n===rt&&(Ve=rt=null,ke=0),Yo=s,ys=n,Ir=o,kp=m,Lp=d,uT=u,(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?(n.callbackNode=null,n.callbackPriority=0,oC(Zi,function(){return bT(),null})):(n.callbackNode=null,n.callbackPriority=0),u=(s.flags&13878)!==0,(s.subtreeFlags&13878)!==0||u){u=X.T,X.T=null,d=ae.p,ae.p=2,y=Ye,Ye|=4;try{XR(n,s,o)}finally{Ye=y,ae.p=d,X.T=u}}qt=1,TT(),wT(),IT()}}function TT(){if(qt===1){qt=0;var n=ys,s=Yo,o=(s.flags&13878)!==0;if((s.subtreeFlags&13878)!==0||o){o=X.T,X.T=null;var u=ae.p;ae.p=2;var d=Ye;Ye|=4;try{tT(s,n);var m=Jp,y=ov(n.containerInfo),w=m.focusedElem,D=m.selectionRange;if(y!==w&&w&&w.ownerDocument&&av(w.ownerDocument.documentElement,w)){if(D!==null&&Im(w)){var B=D.start,Y=D.end;if(Y===void 0&&(Y=B),"selectionStart"in w)w.selectionStart=B,w.selectionEnd=Math.min(Y,w.value.length);else{var Z=w.ownerDocument||document,q=Z&&Z.defaultView||window;if(q.getSelection){var j=q.getSelection(),me=w.textContent.length,Ae=Math.min(D.start,me),nt=D.end===void 0?Ae:Math.min(D.end,me);!j.extend&&Ae>nt&&(y=nt,nt=Ae,Ae=y);var M=sv(w,Ae),O=sv(w,nt);if(M&&O&&(j.rangeCount!==1||j.anchorNode!==M.node||j.anchorOffset!==M.offset||j.focusNode!==O.node||j.focusOffset!==O.offset)){var z=Z.createRange();z.setStart(M.node,M.offset),j.removeAllRanges(),Ae>nt?(j.addRange(z),j.extend(O.node,O.offset)):(z.setEnd(O.node,O.offset),j.addRange(z))}}}}for(Z=[],j=w;j=j.parentNode;)j.nodeType===1&&Z.push({element:j,left:j.scrollLeft,top:j.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<Z.length;w++){var J=Z[w];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}xd=!!Wp,Jp=Wp=null}finally{Ye=d,ae.p=u,X.T=o}}n.current=s,qt=2}}function wT(){if(qt===2){qt=0;var n=ys,s=Yo,o=(s.flags&8772)!==0;if((s.subtreeFlags&8772)!==0||o){o=X.T,X.T=null;var u=ae.p;ae.p=2;var d=Ye;Ye|=4;try{XE(n,s.alternate,s)}finally{Ye=d,ae.p=u,X.T=o}}qt=3}}function IT(){if(qt===4||qt===3){qt=0,Jl();var n=ys,s=Yo,o=Ir,u=uT;(s.subtreeFlags&10256)!==0||(s.flags&10256)!==0?qt=5:(qt=0,Yo=ys=null,AT(n,n.pendingLanes));var d=n.pendingLanes;if(d===0&&(_s=null),ru(o),s=s.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(zr,s,void 0,(s.current.flags&128)===128)}catch{}if(u!==null){s=X.T,d=ae.p,ae.p=2,X.T=null;try{for(var m=n.onRecoverableError,y=0;y<u.length;y++){var w=u[y];m(w.value,{componentStack:w.stack})}}finally{X.T=s,ae.p=d}}(Ir&3)!==0&&wd(),zi(n),d=n.pendingLanes,(o&261930)!==0&&(d&42)!==0?n===Up?qu++:(qu=0,Up=n):qu=0,ju(0)}}function AT(n,s){(n.pooledCacheLanes&=s)===0&&(s=n.pooledCache,s!=null&&(n.pooledCache=null,Iu(s)))}function wd(){return TT(),wT(),IT(),bT()}function bT(){if(qt!==5)return!1;var n=ys,s=kp;kp=0;var o=ru(Ir),u=X.T,d=ae.p;try{ae.p=32>o?32:o,X.T=null,o=Lp,Lp=null;var m=ys,y=Ir;if(qt=0,Yo=ys=null,Ir=0,(Ye&6)!==0)throw Error(i(331));var w=Ye;if(Ye|=4,aT(m.current),iT(m,m.current,y,o),Ye=w,ju(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(zr,m)}catch{}return!0}finally{ae.p=d,X.T=u,AT(n,s)}}function ST(n,s,o){s=oi(o,s),s=gp(n.stateNode,s,2),n=hs(n,s,2),n!==null&&(qr(n,2),zi(n))}function Je(n,s,o){if(n.tag===3)ST(n,n,o);else for(;s!==null;){if(s.tag===3){ST(s,n,o);break}else if(s.tag===1){var u=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(_s===null||!_s.has(u))){n=oi(o,n),o=RE(2),u=hs(s,o,2),u!==null&&(CE(o,u,s,n),qr(u,2),zi(u));break}}s=s.return}}function Fp(n,s,o){var u=n.pingCache;if(u===null){u=n.pingCache=new ZR;var d=new Set;u.set(s,d)}else d=u.get(s),d===void 0&&(d=new Set,u.set(s,d));d.has(o)||(Vp=!0,d.add(o),n=rC.bind(null,n,s,o),s.then(n,n))}function rC(n,s,o){var u=n.pingCache;u!==null&&u.delete(s),n.pingedLanes|=n.suspendedLanes&o,n.warmLanes&=~o,rt===n&&(ke&o)===o&&(wt===4||wt===3&&(ke&62914560)===ke&&300>sn()-gd?(Ye&2)===0&&$o(n,0):xp|=o,Qo===ke&&(Qo=0)),zi(n)}function RT(n,s){s===0&&(s=tu()),n=_a(n,s),n!==null&&(qr(n,s),zi(n))}function sC(n){var s=n.memoizedState,o=0;s!==null&&(o=s.retryLane),RT(n,o)}function aC(n,s){var o=0;switch(n.tag){case 31:case 13:var u=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:u=n.stateNode;break;case 22:u=n.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(s),RT(n,o)}function oC(n,s){return na(n,s)}var Id=null,Wo=null,qp=!1,Ad=!1,jp=!1,Es=0;function zi(n){n!==Wo&&n.next===null&&(Wo===null?Id=Wo=n:Wo=Wo.next=n),Ad=!0,qp||(qp=!0,uC())}function ju(n,s){if(!jp&&Ad){jp=!0;do for(var o=!1,u=Id;u!==null;){if(n!==0){var d=u.pendingLanes;if(d===0)var m=0;else{var y=u.suspendedLanes,w=u.pingedLanes;m=(1<<31-vn(42|n)+1)-1,m&=d&~(y&~w),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(o=!0,OT(u,m))}else m=ke,m=ii(u,u===rt?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Fr(u,m)||(o=!0,OT(u,m));u=u.next}while(o);jp=!1}}function lC(){CT()}function CT(){Ad=qp=!1;var n=0;Es!==0&&vC()&&(n=Es);for(var s=sn(),o=null,u=Id;u!==null;){var d=u.next,m=DT(u,s);m===0?(u.next=null,o===null?Id=d:o.next=d,d===null&&(Wo=o)):(o=u,(n!==0||(m&3)!==0)&&(Ad=!0)),u=d}qt!==0&&qt!==5||ju(n),Es!==0&&(Es=0)}function DT(n,s){for(var o=n.suspendedLanes,u=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes&-62914561;0<m;){var y=31-vn(m),w=1<<y,D=d[y];D===-1?((w&o)===0||(w&u)!==0)&&(d[y]=_o(w,s)):D<=s&&(n.expiredLanes|=w),m&=~w}if(s=rt,o=ke,o=ii(n,n===s?o:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u=n.callbackNode,o===0||n===s&&(We===2||We===9)||n.cancelPendingCommit!==null)return u!==null&&u!==null&&go(u),n.callbackNode=null,n.callbackPriority=0;if((o&3)===0||Fr(n,o)){if(s=o&-o,s===n.callbackPriority)return s;switch(u!==null&&go(u),ru(o)){case 2:case 8:o=Ht;break;case 32:o=Zi;break;case 268435456:o=Zl;break;default:o=Zi}return u=NT.bind(null,n),o=na(o,u),n.callbackPriority=s,n.callbackNode=o,s}return u!==null&&u!==null&&go(u),n.callbackPriority=2,n.callbackNode=null,2}function NT(n,s){if(qt!==0&&qt!==5)return n.callbackNode=null,n.callbackPriority=0,null;var o=n.callbackNode;if(wd()&&n.callbackNode!==o)return null;var u=ke;return u=ii(n,n===rt?u:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),u===0?null:(hT(n,u,s),DT(n,sn()),n.callbackNode!=null&&n.callbackNode===o?NT.bind(null,n):null)}function OT(n,s){if(wd())return null;hT(n,s,!0)}function uC(){TC(function(){(Ye&6)!==0?na(Ft,lC):CT()})}function Gp(){if(Es===0){var n=ko;n===0&&(n=ra,ra<<=1,(ra&261888)===0&&(ra=256)),Es=n}return Es}function PT(n){return n==null||typeof n=="symbol"||typeof n=="boolean"?null:typeof n=="function"?n:xi(""+n)}function VT(n,s){var o=s.ownerDocument.createElement("input");return o.name=s.name,o.value=s.value,n.id&&o.setAttribute("form",n.id),s.parentNode.insertBefore(o,s),n=new FormData(n),o.parentNode.removeChild(o),n}function cC(n,s,o,u,d){if(s==="submit"&&o&&o.stateNode===d){var m=PT((d[on]||null).action),y=u.submitter;y&&(s=(s=y[on]||null)?PT(s.formAction):y.getAttribute("formAction"),s!==null&&(m=s,y=null));var w=new ca("action","action",null,u,d);n.push({event:w,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(Es!==0){var D=y?VT(d,y):new FormData(d);cp(o,{pending:!0,data:D,method:d.method,action:m},null,D)}}else typeof m=="function"&&(w.preventDefault(),D=y?VT(d,y):new FormData(d),cp(o,{pending:!0,data:D,method:d.method,action:m},m,D))},currentTarget:d}]})}}for(var Hp=0;Hp<Rm.length;Hp++){var Kp=Rm[Hp],hC=Kp.toLowerCase(),dC=Kp[0].toUpperCase()+Kp.slice(1);Ii(hC,"on"+dC)}Ii(cv,"onAnimationEnd"),Ii(hv,"onAnimationIteration"),Ii(dv,"onAnimationStart"),Ii("dblclick","onDoubleClick"),Ii("focusin","onFocus"),Ii("focusout","onBlur"),Ii(CR,"onTransitionRun"),Ii(DR,"onTransitionStart"),Ii(NR,"onTransitionCancel"),Ii(fv,"onTransitionEnd"),Vi("onMouseEnter",["mouseout","mouseover"]),Vi("onMouseLeave",["mouseout","mouseover"]),Vi("onPointerEnter",["pointerout","pointerover"]),Vi("onPointerLeave",["pointerout","pointerover"]),En("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),En("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),En("onBeforeInput",["compositionend","keypress","textInput","paste"]),En("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),En("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Gu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fC=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Gu));function xT(n,s){s=(s&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],d=u.event;u=u.listeners;e:{var m=void 0;if(s)for(var y=u.length-1;0<=y;y--){var w=u[y],D=w.instance,B=w.currentTarget;if(w=w.listener,D!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=B;try{m(d)}catch(Y){zh(Y)}d.currentTarget=null,m=D}else for(y=0;y<u.length;y++){if(w=u[y],D=w.instance,B=w.currentTarget,w=w.listener,D!==m&&d.isPropagationStopped())break e;m=w,d.currentTarget=B;try{m(d)}catch(Y){zh(Y)}d.currentTarget=null,m=D}}}}function xe(n,s){var o=s[Hr];o===void 0&&(o=s[Hr]=new Set);var u=n+"__bubble";o.has(u)||(MT(s,n,2,!1),o.add(u))}function Qp(n,s,o){var u=0;s&&(u|=4),MT(o,n,u,s)}var bd="_reactListening"+Math.random().toString(36).slice(2);function Yp(n){if(!n[bd]){n[bd]=!0,yo.forEach(function(o){o!=="selectionchange"&&(fC.has(o)||Qp(o,!1,n),Qp(o,!0,n))});var s=n.nodeType===9?n:n.ownerDocument;s===null||s[bd]||(s[bd]=!0,Qp("selectionchange",!1,s))}}function MT(n,s,o,u){switch(cw(s)){case 2:var d=FC;break;case 8:d=qC;break;default:d=ug}o=d.bind(null,s,o,n),d=void 0,!du||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),u?d!==void 0?n.addEventListener(s,o,{capture:!0,passive:d}):n.addEventListener(s,o,!0):d!==void 0?n.addEventListener(s,o,{passive:d}):n.addEventListener(s,o,!1)}function $p(n,s,o,u,d){var m=u;if((s&1)===0&&(s&2)===0&&u!==null)e:for(;;){if(u===null)return;var y=u.tag;if(y===3||y===4){var w=u.stateNode.containerInfo;if(w===d)break;if(y===4)for(y=u.return;y!==null;){var D=y.tag;if((D===3||D===4)&&y.stateNode.containerInfo===d)return;y=y.return}for(;w!==null;){if(y=ir(w),y===null)return;if(D=y.tag,D===5||D===6||D===26||D===27){u=m=y;continue e}w=w.parentNode}}u=u.return}Ih(function(){var B=m,Y=Io(o),Z=[];e:{var q=mv.get(n);if(q!==void 0){var j=ca,me=n;switch(n){case"keypress":if(ua(o)===0)break e;case"keydown":case"keyup":j=Ph;break;case"focusin":me="focus",j=ts;break;case"focusout":me="blur",j=ts;break;case"beforeblur":case"afterblur":j=ts;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":j=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":j=Sh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":j=xh;break;case cv:case hv:case dv:j=So;break;case fv:j=Ro;break;case"scroll":case"scrollend":j=Ah;break;case"wheel":j=kh;break;case"copy":case"cut":case"paste":j=Ch;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":j=_u;break;case"toggle":case"beforetoggle":j=is}var Ae=(s&4)!==0,nt=!Ae&&(n==="scroll"||n==="scrollend"),M=Ae?q!==null?q+"Capture":null:q;Ae=[];for(var O=B,z;O!==null;){var J=O;if(z=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||z===null||M===null||(J=Nn(O,M),J!=null&&Ae.push(Hu(O,J,z))),nt)break;O=O.return}0<Ae.length&&(q=new j(q,me,null,o,Y),Z.push({event:q,listeners:Ae}))}}if((s&7)===0){e:{if(q=n==="mouseover"||n==="pointerover",j=n==="mouseout"||n==="pointerout",q&&o!==wo&&(me=o.relatedTarget||o.fromElement)&&(ir(me)||me[Oi]))break e;if((j||q)&&(q=Y.window===Y?Y:(q=Y.ownerDocument)?q.defaultView||q.parentWindow:window,j?(me=o.relatedTarget||o.toElement,j=B,me=me?ir(me):null,me!==null&&(nt=l(me),Ae=me.tag,me!==nt||Ae!==5&&Ae!==27&&Ae!==6)&&(me=null)):(j=null,me=B),j!==me)){if(Ae=bh,J="onMouseLeave",M="onMouseEnter",O="mouse",(n==="pointerout"||n==="pointerover")&&(Ae=_u,J="onPointerLeave",M="onPointerEnter",O="pointer"),nt=j==null?q:aa(j),z=me==null?q:aa(me),q=new Ae(J,O+"leave",j,o,Y),q.target=nt,q.relatedTarget=z,J=null,ir(Y)===B&&(Ae=new Ae(M,O+"enter",me,o,Y),Ae.target=z,Ae.relatedTarget=nt,J=Ae),nt=J,j&&me)t:{for(Ae=mC,M=j,O=me,z=0,J=M;J;J=Ae(J))z++;J=0;for(var Ee=O;Ee;Ee=Ae(Ee))J++;for(;0<z-J;)M=Ae(M),z--;for(;0<J-z;)O=Ae(O),J--;for(;z--;){if(M===O||O!==null&&M===O.alternate){Ae=M;break t}M=Ae(M),O=Ae(O)}Ae=null}else Ae=null;j!==null&&kT(Z,q,j,Ae,!1),me!==null&&nt!==null&&kT(Z,nt,me,Ae,!0)}}e:{if(q=B?aa(B):window,j=q.nodeName&&q.nodeName.toLowerCase(),j==="select"||j==="input"&&q.type==="file")var Ke=Zy;else if(On(q))if(ev)Ke=bR;else{Ke=IR;var ge=wR}else j=q.nodeName,!j||j.toLowerCase()!=="input"||q.type!=="checkbox"&&q.type!=="radio"?B&&cu(B.elementType)&&(Ke=Zy):Ke=AR;if(Ke&&(Ke=Ke(n,B))){ma(Z,Ke,o,Y);break e}ge&&ge(n,q,B),n==="focusout"&&B&&q.type==="number"&&B.memoizedProps.value!=null&&To(q,"number",q.value)}switch(ge=B?aa(B):window,n){case"focusin":(On(ge)||ge.contentEditable==="true")&&(Co=ge,Am=B,Eu=null);break;case"focusout":Eu=Am=Co=null;break;case"mousedown":bm=!0;break;case"contextmenu":case"mouseup":case"dragend":bm=!1,lv(Z,o,Y);break;case"selectionchange":if(RR)break;case"keydown":case"keyup":lv(Z,o,Y)}var Ne;if(_)e:{switch(n){case"compositionstart":var Le="onCompositionStart";break e;case"compositionend":Le="onCompositionEnd";break e;case"compositionupdate":Le="onCompositionUpdate";break e}Le=void 0}else Pe?Xe(n,o)&&(Le="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(Le="onCompositionStart");Le&&(U&&o.locale!=="ko"&&(Pe||Le!=="onCompositionStart"?Le==="onCompositionEnd"&&Pe&&(Ne=Wr()):(Gn=Y,Ao="value"in Gn?Gn.value:Gn.textContent,Pe=!0)),ge=Sd(B,Le),0<ge.length&&(Le=new mu(Le,n,null,o,Y),Z.push({event:Le,listeners:ge}),Ne?Le.data=Ne:(Ne=xt(o),Ne!==null&&(Le.data=Ne)))),(Ne=I?Qt(n,o):Yt(n,o))&&(Le=Sd(B,"onBeforeInput"),0<Le.length&&(ge=new mu("onBeforeInput","beforeinput",null,o,Y),Z.push({event:ge,listeners:Le}),ge.data=Ne)),cC(Z,n,B,o,Y)}xT(Z,s)})}function Hu(n,s,o){return{instance:n,listener:s,currentTarget:o}}function Sd(n,s){for(var o=s+"Capture",u=[];n!==null;){var d=n,m=d.stateNode;if(d=d.tag,d!==5&&d!==26&&d!==27||m===null||(d=Nn(n,o),d!=null&&u.unshift(Hu(n,d,m)),d=Nn(n,s),d!=null&&u.push(Hu(n,d,m))),n.tag===3)return u;n=n.return}return[]}function mC(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5&&n.tag!==27);return n||null}function kT(n,s,o,u,d){for(var m=s._reactName,y=[];o!==null&&o!==u;){var w=o,D=w.alternate,B=w.stateNode;if(w=w.tag,D!==null&&D===u)break;w!==5&&w!==26&&w!==27||B===null||(D=B,d?(B=Nn(o,m),B!=null&&y.unshift(Hu(o,B,D))):d||(B=Nn(o,m),B!=null&&y.push(Hu(o,B,D)))),o=o.return}y.length!==0&&n.push({event:s,listeners:y})}var pC=/\r\n?/g,gC=/\u0000|\uFFFD/g;function LT(n){return(typeof n=="string"?n:""+n).replace(pC,`
`).replace(gC,"")}function UT(n,s){return s=LT(s),LT(n)===s}function tt(n,s,o,u,d,m){switch(o){case"children":typeof u=="string"?s==="body"||s==="textarea"&&u===""||si(n,u):(typeof u=="number"||typeof u=="bigint")&&s!=="body"&&si(n,""+u);break;case"className":Yr(n,"class",u);break;case"tabIndex":Yr(n,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Yr(n,o,u);break;case"style":Th(n,u,m);break;case"data":if(s!=="object"){Yr(n,"data",u);break}case"src":case"href":if(u===""&&(s!=="a"||o!=="href")){n.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=xi(""+u),n.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){n.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(o==="formAction"?(s!=="input"&&tt(n,s,"name",d.name,d,null),tt(n,s,"formEncType",d.formEncType,d,null),tt(n,s,"formMethod",d.formMethod,d,null),tt(n,s,"formTarget",d.formTarget,d,null)):(tt(n,s,"encType",d.encType,d,null),tt(n,s,"method",d.method,d,null),tt(n,s,"target",d.target,d,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){n.removeAttribute(o);break}u=xi(""+u),n.setAttribute(o,u);break;case"onClick":u!=null&&(n.onclick=Kt);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"multiple":n.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":n.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){n.removeAttribute("xlink:href");break}o=xi(""+u),n.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""+u):n.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,""):n.removeAttribute(o);break;case"capture":case"download":u===!0?n.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?n.setAttribute(o,u):n.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?n.setAttribute(o,u):n.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?n.removeAttribute(o):n.setAttribute(o,u);break;case"popover":xe("beforetoggle",n),xe("toggle",n),Qr(n,"popover",u);break;case"xlinkActuate":ri(n,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":ri(n,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":ri(n,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":ri(n,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":ri(n,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":ri(n,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":ri(n,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":ri(n,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":ri(n,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Qr(n,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=ym.get(o)||o,Qr(n,o,u))}}function Xp(n,s,o,u,d,m){switch(o){case"style":Th(n,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(d.children!=null)throw Error(i(60));n.innerHTML=o}}break;case"children":typeof u=="string"?si(n,u):(typeof u=="number"||typeof u=="bigint")&&si(n,""+u);break;case"onScroll":u!=null&&xe("scroll",n);break;case"onScrollEnd":u!=null&&xe("scrollend",n);break;case"onClick":u!=null&&(n.onclick=Kt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Kr.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(d=o.endsWith("Capture"),s=o.slice(2,d?o.length-7:void 0),m=n[on]||null,m=m!=null?m[o]:null,typeof m=="function"&&n.removeEventListener(s,m,d),typeof u=="function")){typeof m!="function"&&m!==null&&(o in n?n[o]=null:n.hasAttribute(o)&&n.removeAttribute(o)),n.addEventListener(s,u,d);break e}o in n?n[o]=u:u===!0?n.setAttribute(o,""):Qr(n,o,u)}}}function hn(n,s,o){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",n),xe("load",n);var u=!1,d=!1,m;for(m in o)if(o.hasOwnProperty(m)){var y=o[m];if(y!=null)switch(m){case"src":u=!0;break;case"srcSet":d=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:tt(n,s,m,y,o,null)}}d&&tt(n,s,"srcSet",o.srcSet,o,null),u&&tt(n,s,"src",o.src,o,null);return;case"input":xe("invalid",n);var w=m=y=d=null,D=null,B=null;for(u in o)if(o.hasOwnProperty(u)){var Y=o[u];if(Y!=null)switch(u){case"name":d=Y;break;case"type":y=Y;break;case"checked":D=Y;break;case"defaultChecked":B=Y;break;case"value":m=Y;break;case"defaultValue":w=Y;break;case"children":case"dangerouslySetInnerHTML":if(Y!=null)throw Error(i(137,s));break;default:tt(n,s,u,Y,o,null)}}oa(n,m,w,D,B,y,d,!1);return;case"select":xe("invalid",n),u=y=m=null;for(d in o)if(o.hasOwnProperty(d)&&(w=o[d],w!=null))switch(d){case"value":m=w;break;case"defaultValue":y=w;break;case"multiple":u=w;default:tt(n,s,d,w,o,null)}s=m,o=y,n.multiple=!!u,s!=null?He(n,!!u,s,!1):o!=null&&He(n,!!u,o,!0);return;case"textarea":xe("invalid",n),m=d=u=null;for(y in o)if(o.hasOwnProperty(y)&&(w=o[y],w!=null))switch(y){case"value":u=w;break;case"defaultValue":d=w;break;case"children":m=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(i(91));break;default:tt(n,s,y,w,o,null)}Xr(n,u,d,m);return;case"option":for(D in o)if(o.hasOwnProperty(D)&&(u=o[D],u!=null))switch(D){case"selected":n.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:tt(n,s,D,u,o,null)}return;case"dialog":xe("beforetoggle",n),xe("toggle",n),xe("cancel",n),xe("close",n);break;case"iframe":case"object":xe("load",n);break;case"video":case"audio":for(u=0;u<Gu.length;u++)xe(Gu[u],n);break;case"image":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"embed":case"source":case"link":xe("error",n),xe("load",n);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(B in o)if(o.hasOwnProperty(B)&&(u=o[B],u!=null))switch(B){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,s));default:tt(n,s,B,u,o,null)}return;default:if(cu(s)){for(Y in o)o.hasOwnProperty(Y)&&(u=o[Y],u!==void 0&&Xp(n,s,Y,u,o,void 0));return}}for(w in o)o.hasOwnProperty(w)&&(u=o[w],u!=null&&tt(n,s,w,u,o,null))}function _C(n,s,o,u){switch(s){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var d=null,m=null,y=null,w=null,D=null,B=null,Y=null;for(j in o){var Z=o[j];if(o.hasOwnProperty(j)&&Z!=null)switch(j){case"checked":break;case"value":break;case"defaultValue":D=Z;default:u.hasOwnProperty(j)||tt(n,s,j,null,u,Z)}}for(var q in u){var j=u[q];if(Z=o[q],u.hasOwnProperty(q)&&(j!=null||Z!=null))switch(q){case"type":m=j;break;case"name":d=j;break;case"checked":B=j;break;case"defaultChecked":Y=j;break;case"value":y=j;break;case"defaultValue":w=j;break;case"children":case"dangerouslySetInnerHTML":if(j!=null)throw Error(i(137,s));break;default:j!==Z&&tt(n,s,q,j,u,Z)}}$r(n,y,w,D,B,Y,m,d);return;case"select":j=y=w=q=null;for(m in o)if(D=o[m],o.hasOwnProperty(m)&&D!=null)switch(m){case"value":break;case"multiple":j=D;default:u.hasOwnProperty(m)||tt(n,s,m,null,u,D)}for(d in u)if(m=u[d],D=o[d],u.hasOwnProperty(d)&&(m!=null||D!=null))switch(d){case"value":q=m;break;case"defaultValue":w=m;break;case"multiple":y=m;default:m!==D&&tt(n,s,d,m,u,D)}s=w,o=y,u=j,q!=null?He(n,!!o,q,!1):!!u!=!!o&&(s!=null?He(n,!!o,s,!0):He(n,!!o,o?[]:"",!1));return;case"textarea":j=q=null;for(w in o)if(d=o[w],o.hasOwnProperty(w)&&d!=null&&!u.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:tt(n,s,w,null,u,d)}for(y in u)if(d=u[y],m=o[y],u.hasOwnProperty(y)&&(d!=null||m!=null))switch(y){case"value":q=d;break;case"defaultValue":j=d;break;case"children":break;case"dangerouslySetInnerHTML":if(d!=null)throw Error(i(91));break;default:d!==m&&tt(n,s,y,d,u,m)}la(n,q,j);return;case"option":for(var me in o)if(q=o[me],o.hasOwnProperty(me)&&q!=null&&!u.hasOwnProperty(me))switch(me){case"selected":n.selected=!1;break;default:tt(n,s,me,null,u,q)}for(D in u)if(q=u[D],j=o[D],u.hasOwnProperty(D)&&q!==j&&(q!=null||j!=null))switch(D){case"selected":n.selected=q&&typeof q!="function"&&typeof q!="symbol";break;default:tt(n,s,D,q,u,j)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Ae in o)q=o[Ae],o.hasOwnProperty(Ae)&&q!=null&&!u.hasOwnProperty(Ae)&&tt(n,s,Ae,null,u,q);for(B in u)if(q=u[B],j=o[B],u.hasOwnProperty(B)&&q!==j&&(q!=null||j!=null))switch(B){case"children":case"dangerouslySetInnerHTML":if(q!=null)throw Error(i(137,s));break;default:tt(n,s,B,q,u,j)}return;default:if(cu(s)){for(var nt in o)q=o[nt],o.hasOwnProperty(nt)&&q!==void 0&&!u.hasOwnProperty(nt)&&Xp(n,s,nt,void 0,u,q);for(Y in u)q=u[Y],j=o[Y],!u.hasOwnProperty(Y)||q===j||q===void 0&&j===void 0||Xp(n,s,Y,q,u,j);return}}for(var M in o)q=o[M],o.hasOwnProperty(M)&&q!=null&&!u.hasOwnProperty(M)&&tt(n,s,M,null,u,q);for(Z in u)q=u[Z],j=o[Z],!u.hasOwnProperty(Z)||q===j||q==null&&j==null||tt(n,s,Z,q,u,j)}function zT(n){switch(n){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yC(){if(typeof performance.getEntriesByType=="function"){for(var n=0,s=0,o=performance.getEntriesByType("resource"),u=0;u<o.length;u++){var d=o[u],m=d.transferSize,y=d.initiatorType,w=d.duration;if(m&&w&&zT(y)){for(y=0,w=d.responseEnd,u+=1;u<o.length;u++){var D=o[u],B=D.startTime;if(B>w)break;var Y=D.transferSize,Z=D.initiatorType;Y&&zT(Z)&&(D=D.responseEnd,y+=Y*(D<w?1:(w-B)/(D-B)))}if(--u,s+=8*(m+y)/(d.duration/1e3),n++,10<n)break}}if(0<n)return s/n/1e6}return navigator.connection&&(n=navigator.connection.downlink,typeof n=="number")?n:5}var Wp=null,Jp=null;function Rd(n){return n.nodeType===9?n:n.ownerDocument}function BT(n){switch(n){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function FT(n,s){if(n===0)switch(s){case"svg":return 1;case"math":return 2;default:return 0}return n===1&&s==="foreignObject"?0:n}function Zp(n,s){return n==="textarea"||n==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.children=="bigint"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var eg=null;function vC(){var n=window.event;return n&&n.type==="popstate"?n===eg?!1:(eg=n,!0):(eg=null,!1)}var qT=typeof setTimeout=="function"?setTimeout:void 0,EC=typeof clearTimeout=="function"?clearTimeout:void 0,jT=typeof Promise=="function"?Promise:void 0,TC=typeof queueMicrotask=="function"?queueMicrotask:typeof jT<"u"?function(n){return jT.resolve(null).then(n).catch(wC)}:qT;function wC(n){setTimeout(function(){throw n})}function Ts(n){return n==="head"}function GT(n,s){var o=s,u=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"||o==="/&"){if(u===0){n.removeChild(d),tl(s);return}u--}else if(o==="$"||o==="$?"||o==="$~"||o==="$!"||o==="&")u++;else if(o==="html")Ku(n.ownerDocument.documentElement);else if(o==="head"){o=n.ownerDocument.head,Ku(o);for(var m=o.firstChild;m;){var y=m.nextSibling,w=m.nodeName;m[nr]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&m.rel.toLowerCase()==="stylesheet"||o.removeChild(m),m=y}}else o==="body"&&Ku(n.ownerDocument.body);o=d}while(o);tl(s)}function HT(n,s){var o=n;n=0;do{var u=o.nextSibling;if(o.nodeType===1?s?(o._stashedDisplay=o.style.display,o.style.display="none"):(o.style.display=o._stashedDisplay||"",o.getAttribute("style")===""&&o.removeAttribute("style")):o.nodeType===3&&(s?(o._stashedText=o.nodeValue,o.nodeValue=""):o.nodeValue=o._stashedText||""),u&&u.nodeType===8)if(o=u.data,o==="/$"){if(n===0)break;n--}else o!=="$"&&o!=="$?"&&o!=="$~"&&o!=="$!"||n++;o=u}while(o)}function tg(n){var s=n.firstChild;for(s&&s.nodeType===10&&(s=s.nextSibling);s;){var o=s;switch(s=s.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":tg(o),sa(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}n.removeChild(o)}}function IC(n,s,o,u){for(;n.nodeType===1;){var d=o;if(n.nodeName.toLowerCase()!==s.toLowerCase()){if(!u&&(n.nodeName!=="INPUT"||n.type!=="hidden"))break}else if(u){if(!n[nr])switch(s){case"meta":if(!n.hasAttribute("itemprop"))break;return n;case"link":if(m=n.getAttribute("rel"),m==="stylesheet"&&n.hasAttribute("data-precedence"))break;if(m!==d.rel||n.getAttribute("href")!==(d.href==null||d.href===""?null:d.href)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin)||n.getAttribute("title")!==(d.title==null?null:d.title))break;return n;case"style":if(n.hasAttribute("data-precedence"))break;return n;case"script":if(m=n.getAttribute("src"),(m!==(d.src==null?null:d.src)||n.getAttribute("type")!==(d.type==null?null:d.type)||n.getAttribute("crossorigin")!==(d.crossOrigin==null?null:d.crossOrigin))&&m&&n.hasAttribute("async")&&!n.hasAttribute("itemprop"))break;return n;default:return n}}else if(s==="input"&&n.type==="hidden"){var m=d.name==null?null:""+d.name;if(d.type==="hidden"&&n.getAttribute("name")===m)return n}else return n;if(n=di(n.nextSibling),n===null)break}return null}function AC(n,s,o){if(s==="")return null;for(;n.nodeType!==3;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!o||(n=di(n.nextSibling),n===null))return null;return n}function KT(n,s){for(;n.nodeType!==8;)if((n.nodeType!==1||n.nodeName!=="INPUT"||n.type!=="hidden")&&!s||(n=di(n.nextSibling),n===null))return null;return n}function ng(n){return n.data==="$?"||n.data==="$~"}function ig(n){return n.data==="$!"||n.data==="$?"&&n.ownerDocument.readyState!=="loading"}function bC(n,s){var o=n.ownerDocument;if(n.data==="$~")n._reactRetry=s;else if(n.data!=="$?"||o.readyState!=="loading")s();else{var u=function(){s(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),n._reactRetry=u}}function di(n){for(;n!=null;n=n.nextSibling){var s=n.nodeType;if(s===1||s===3)break;if(s===8){if(s=n.data,s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"||s==="F!"||s==="F")break;if(s==="/$"||s==="/&")return null}}return n}var rg=null;function QT(n){n=n.nextSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"||o==="/&"){if(s===0)return di(n.nextSibling);s--}else o!=="$"&&o!=="$!"&&o!=="$?"&&o!=="$~"&&o!=="&"||s++}n=n.nextSibling}return null}function YT(n){n=n.previousSibling;for(var s=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"||o==="$~"||o==="&"){if(s===0)return n;s--}else o!=="/$"&&o!=="/&"||s++}n=n.previousSibling}return null}function $T(n,s,o){switch(s=Rd(o),n){case"html":if(n=s.documentElement,!n)throw Error(i(452));return n;case"head":if(n=s.head,!n)throw Error(i(453));return n;case"body":if(n=s.body,!n)throw Error(i(454));return n;default:throw Error(i(451))}}function Ku(n){for(var s=n.attributes;s.length;)n.removeAttributeNode(s[0]);sa(n)}var fi=new Map,XT=new Set;function Cd(n){return typeof n.getRootNode=="function"?n.getRootNode():n.nodeType===9?n:n.ownerDocument}var Ar=ae.d;ae.d={f:SC,r:RC,D:CC,C:DC,L:NC,m:OC,X:VC,S:PC,M:xC};function SC(){var n=Ar.f(),s=vd();return n||s}function RC(n){var s=rr(n);s!==null&&s.tag===5&&s.type==="form"?fE(s):Ar.r(n)}var Jo=typeof document>"u"?null:document;function WT(n,s,o){var u=Jo;if(u&&typeof s=="string"&&s){var d=Et(s);d='link[rel="'+n+'"][href="'+d+'"]',typeof o=="string"&&(d+='[crossorigin="'+o+'"]'),XT.has(d)||(XT.add(d),n={rel:n,crossOrigin:o,href:s},u.querySelector(d)===null&&(s=u.createElement("link"),hn(s,"link",n),Dt(s),u.head.appendChild(s)))}}function CC(n){Ar.D(n),WT("dns-prefetch",n,null)}function DC(n,s){Ar.C(n,s),WT("preconnect",n,s)}function NC(n,s,o){Ar.L(n,s,o);var u=Jo;if(u&&n&&s){var d='link[rel="preload"][as="'+Et(s)+'"]';s==="image"&&o&&o.imageSrcSet?(d+='[imagesrcset="'+Et(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(d+='[imagesizes="'+Et(o.imageSizes)+'"]')):d+='[href="'+Et(n)+'"]';var m=d;switch(s){case"style":m=Zo(n);break;case"script":m=el(n)}fi.has(m)||(n=T({rel:"preload",href:s==="image"&&o&&o.imageSrcSet?void 0:n,as:s},o),fi.set(m,n),u.querySelector(d)!==null||s==="style"&&u.querySelector(Qu(m))||s==="script"&&u.querySelector(Yu(m))||(s=u.createElement("link"),hn(s,"link",n),Dt(s),u.head.appendChild(s)))}}function OC(n,s){Ar.m(n,s);var o=Jo;if(o&&n){var u=s&&typeof s.as=="string"?s.as:"script",d='link[rel="modulepreload"][as="'+Et(u)+'"][href="'+Et(n)+'"]',m=d;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=el(n)}if(!fi.has(m)&&(n=T({rel:"modulepreload",href:n},s),fi.set(m,n),o.querySelector(d)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(Yu(m)))return}u=o.createElement("link"),hn(u,"link",n),Dt(u),o.head.appendChild(u)}}}function PC(n,s,o){Ar.S(n,s,o);var u=Jo;if(u&&n){var d=Ei(u).hoistableStyles,m=Zo(n);s=s||"default";var y=d.get(m);if(!y){var w={loading:0,preload:null};if(y=u.querySelector(Qu(m)))w.loading=5;else{n=T({rel:"stylesheet",href:n,"data-precedence":s},o),(o=fi.get(m))&&sg(n,o);var D=y=u.createElement("link");Dt(D),hn(D,"link",n),D._p=new Promise(function(B,Y){D.onload=B,D.onerror=Y}),D.addEventListener("load",function(){w.loading|=1}),D.addEventListener("error",function(){w.loading|=2}),w.loading|=4,Dd(y,s,u)}y={type:"stylesheet",instance:y,count:1,state:w},d.set(m,y)}}}function VC(n,s){Ar.X(n,s);var o=Jo;if(o&&n){var u=Ei(o).hoistableScripts,d=el(n),m=u.get(d);m||(m=o.querySelector(Yu(d)),m||(n=T({src:n,async:!0},s),(s=fi.get(d))&&ag(n,s),m=o.createElement("script"),Dt(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function xC(n,s){Ar.M(n,s);var o=Jo;if(o&&n){var u=Ei(o).hoistableScripts,d=el(n),m=u.get(d);m||(m=o.querySelector(Yu(d)),m||(n=T({src:n,async:!0,type:"module"},s),(s=fi.get(d))&&ag(n,s),m=o.createElement("script"),Dt(m),hn(m,"link",n),o.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(d,m))}}function JT(n,s,o,u){var d=(d=Oe.current)?Cd(d):null;if(!d)throw Error(i(446));switch(n){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(s=Zo(o.href),o=Ei(d).hoistableStyles,u=o.get(s),u||(u={type:"style",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){n=Zo(o.href);var m=Ei(d).hoistableStyles,y=m.get(n);if(y||(d=d.ownerDocument||d,y={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(n,y),(m=d.querySelector(Qu(n)))&&!m._p&&(y.instance=m,y.state.loading=5),fi.has(n)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},fi.set(n,o),m||MC(d,n,o,y.state))),s&&u===null)throw Error(i(528,""));return y}if(s&&u!==null)throw Error(i(529,""));return null;case"script":return s=o.async,o=o.src,typeof o=="string"&&s&&typeof s!="function"&&typeof s!="symbol"?(s=el(o),o=Ei(d).hoistableScripts,u=o.get(s),u||(u={type:"script",instance:null,count:0,state:null},o.set(s,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,n))}}function Zo(n){return'href="'+Et(n)+'"'}function Qu(n){return'link[rel="stylesheet"]['+n+"]"}function ZT(n){return T({},n,{"data-precedence":n.precedence,precedence:null})}function MC(n,s,o,u){n.querySelector('link[rel="preload"][as="style"]['+s+"]")?u.loading=1:(s=n.createElement("link"),u.preload=s,s.addEventListener("load",function(){return u.loading|=1}),s.addEventListener("error",function(){return u.loading|=2}),hn(s,"link",o),Dt(s),n.head.appendChild(s))}function el(n){return'[src="'+Et(n)+'"]'}function Yu(n){return"script[async]"+n}function ew(n,s,o){if(s.count++,s.instance===null)switch(s.type){case"style":var u=n.querySelector('style[data-href~="'+Et(o.href)+'"]');if(u)return s.instance=u,Dt(u),u;var d=T({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(n.ownerDocument||n).createElement("style"),Dt(u),hn(u,"style",d),Dd(u,o.precedence,n),s.instance=u;case"stylesheet":d=Zo(o.href);var m=n.querySelector(Qu(d));if(m)return s.state.loading|=4,s.instance=m,Dt(m),m;u=ZT(o),(d=fi.get(d))&&sg(u,d),m=(n.ownerDocument||n).createElement("link"),Dt(m);var y=m;return y._p=new Promise(function(w,D){y.onload=w,y.onerror=D}),hn(m,"link",u),s.state.loading|=4,Dd(m,o.precedence,n),s.instance=m;case"script":return m=el(o.src),(d=n.querySelector(Yu(m)))?(s.instance=d,Dt(d),d):(u=o,(d=fi.get(m))&&(u=T({},o),ag(u,d)),n=n.ownerDocument||n,d=n.createElement("script"),Dt(d),hn(d,"link",u),n.head.appendChild(d),s.instance=d);case"void":return null;default:throw Error(i(443,s.type))}else s.type==="stylesheet"&&(s.state.loading&4)===0&&(u=s.instance,s.state.loading|=4,Dd(u,o.precedence,n));return s.instance}function Dd(n,s,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),d=u.length?u[u.length-1]:null,m=d,y=0;y<u.length;y++){var w=u[y];if(w.dataset.precedence===s)m=w;else if(m!==d)break}m?m.parentNode.insertBefore(n,m.nextSibling):(s=o.nodeType===9?o.head:o,s.insertBefore(n,s.firstChild))}function sg(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.title==null&&(n.title=s.title)}function ag(n,s){n.crossOrigin==null&&(n.crossOrigin=s.crossOrigin),n.referrerPolicy==null&&(n.referrerPolicy=s.referrerPolicy),n.integrity==null&&(n.integrity=s.integrity)}var Nd=null;function tw(n,s,o){if(Nd===null){var u=new Map,d=Nd=new Map;d.set(o,u)}else d=Nd,u=d.get(o),u||(u=new Map,d.set(o,u));if(u.has(n))return u;for(u.set(n,null),o=o.getElementsByTagName(n),d=0;d<o.length;d++){var m=o[d];if(!(m[nr]||m[vt]||n==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var y=m.getAttribute(s)||"";y=n+y;var w=u.get(y);w?w.push(m):u.set(y,[m])}}return u}function nw(n,s,o){n=n.ownerDocument||n,n.head.insertBefore(o,s==="title"?n.querySelector("head > title"):null)}function kC(n,s,o){if(o===1||s.itemProp!=null)return!1;switch(n){case"meta":case"title":return!0;case"style":if(typeof s.precedence!="string"||typeof s.href!="string"||s.href==="")break;return!0;case"link":if(typeof s.rel!="string"||typeof s.href!="string"||s.href===""||s.onLoad||s.onError)break;switch(s.rel){case"stylesheet":return n=s.disabled,typeof s.precedence=="string"&&n==null;default:return!0}case"script":if(s.async&&typeof s.async!="function"&&typeof s.async!="symbol"&&!s.onLoad&&!s.onError&&s.src&&typeof s.src=="string")return!0}return!1}function iw(n){return!(n.type==="stylesheet"&&(n.state.loading&3)===0)}function LC(n,s,o,u){if(o.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(o.state.loading&4)===0){if(o.instance===null){var d=Zo(u.href),m=s.querySelector(Qu(d));if(m){s=m._p,s!==null&&typeof s=="object"&&typeof s.then=="function"&&(n.count++,n=Od.bind(n),s.then(n,n)),o.state.loading|=4,o.instance=m,Dt(m);return}m=s.ownerDocument||s,u=ZT(u),(d=fi.get(d))&&sg(u,d),m=m.createElement("link"),Dt(m);var y=m;y._p=new Promise(function(w,D){y.onload=w,y.onerror=D}),hn(m,"link",u),o.instance=m}n.stylesheets===null&&(n.stylesheets=new Map),n.stylesheets.set(o,s),(s=o.state.preload)&&(o.state.loading&3)===0&&(n.count++,o=Od.bind(n),s.addEventListener("load",o),s.addEventListener("error",o))}}var og=0;function UC(n,s){return n.stylesheets&&n.count===0&&Vd(n,n.stylesheets),0<n.count||0<n.imgCount?function(o){var u=setTimeout(function(){if(n.stylesheets&&Vd(n,n.stylesheets),n.unsuspend){var m=n.unsuspend;n.unsuspend=null,m()}},6e4+s);0<n.imgBytes&&og===0&&(og=62500*yC());var d=setTimeout(function(){if(n.waitingForImages=!1,n.count===0&&(n.stylesheets&&Vd(n,n.stylesheets),n.unsuspend)){var m=n.unsuspend;n.unsuspend=null,m()}},(n.imgBytes>og?50:800)+s);return n.unsuspend=o,function(){n.unsuspend=null,clearTimeout(u),clearTimeout(d)}}:null}function Od(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Vd(this,this.stylesheets);else if(this.unsuspend){var n=this.unsuspend;this.unsuspend=null,n()}}}var Pd=null;function Vd(n,s){n.stylesheets=null,n.unsuspend!==null&&(n.count++,Pd=new Map,s.forEach(zC,n),Pd=null,Od.call(n))}function zC(n,s){if(!(s.state.loading&4)){var o=Pd.get(n);if(o)var u=o.get(null);else{o=new Map,Pd.set(n,o);for(var d=n.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<d.length;m++){var y=d[m];(y.nodeName==="LINK"||y.getAttribute("media")!=="not all")&&(o.set(y.dataset.precedence,y),u=y)}u&&o.set(null,u)}d=s.instance,y=d.getAttribute("data-precedence"),m=o.get(y)||u,m===u&&o.set(null,d),o.set(y,d),this.count++,u=Od.bind(this),d.addEventListener("load",u),d.addEventListener("error",u),m?m.parentNode.insertBefore(d,m.nextSibling):(n=n.nodeType===9?n.head:n,n.insertBefore(d,n.firstChild)),s.state.loading|=4}}var $u={$$typeof:re,Provider:null,Consumer:null,_currentValue:we,_currentValue2:we,_threadCount:0};function BC(n,s,o,u,d,m,y,w,D){this.tag=1,this.containerInfo=n,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=er(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=er(0),this.hiddenUpdates=er(null),this.identifierPrefix=u,this.onUncaughtError=d,this.onCaughtError=m,this.onRecoverableError=y,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=D,this.incompleteTransitions=new Map}function rw(n,s,o,u,d,m,y,w,D,B,Y,Z){return n=new BC(n,s,o,y,D,B,Y,Z,w),s=1,m===!0&&(s|=24),m=Kn(3,null,null,s),n.current=m,m.stateNode=n,s=Bm(),s.refCount++,n.pooledCache=s,s.refCount++,m.memoizedState={element:u,isDehydrated:o,cache:s},Gm(m),n}function sw(n){return n?(n=Oo,n):Oo}function aw(n,s,o,u,d,m){d=sw(d),u.context===null?u.context=d:u.pendingContext=d,u=cs(s),u.payload={element:o},m=m===void 0?null:m,m!==null&&(u.callback=m),o=hs(n,u,s),o!==null&&(kn(o,n,s),Ru(o,n,s))}function ow(n,s){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<s?o:s}}function lg(n,s){ow(n,s),(n=n.alternate)&&ow(n,s)}function lw(n){if(n.tag===13||n.tag===31){var s=_a(n,67108864);s!==null&&kn(s,n,67108864),lg(n,67108864)}}function uw(n){if(n.tag===13||n.tag===31){var s=Wn();s=iu(s);var o=_a(n,s);o!==null&&kn(o,n,s),lg(n,s)}}var xd=!0;function FC(n,s,o,u){var d=X.T;X.T=null;var m=ae.p;try{ae.p=2,ug(n,s,o,u)}finally{ae.p=m,X.T=d}}function qC(n,s,o,u){var d=X.T;X.T=null;var m=ae.p;try{ae.p=8,ug(n,s,o,u)}finally{ae.p=m,X.T=d}}function ug(n,s,o,u){if(xd){var d=cg(u);if(d===null)$p(n,s,u,Md,o),hw(n,u);else if(GC(d,n,s,o,u))u.stopPropagation();else if(hw(n,u),s&4&&-1<jC.indexOf(n)){for(;d!==null;){var m=rr(d);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var y=vi(m.pendingLanes);if(y!==0){var w=m;for(w.pendingLanes|=2,w.entangledLanes|=2;y;){var D=1<<31-vn(y);w.entanglements[1]|=D,y&=~D}zi(m),(Ye&6)===0&&(_d=sn()+500,ju(0))}}break;case 31:case 13:w=_a(m,2),w!==null&&kn(w,m,2),vd(),lg(m,2)}if(m=cg(u),m===null&&$p(n,s,u,Md,o),m===d)break;d=m}d!==null&&u.stopPropagation()}else $p(n,s,u,null,o)}}function cg(n){return n=Io(n),hg(n)}var Md=null;function hg(n){if(Md=null,n=ir(n),n!==null){var s=l(n);if(s===null)n=null;else{var o=s.tag;if(o===13){if(n=c(s),n!==null)return n;n=null}else if(o===31){if(n=f(s),n!==null)return n;n=null}else if(o===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;n=null}else s!==n&&(n=null)}}return Md=n,null}function cw(n){switch(n){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(mh()){case Ft:return 2;case Ht:return 8;case Zi:case ph:return 32;case Zl:return 268435456;default:return 32}default:return 32}}var dg=!1,ws=null,Is=null,As=null,Xu=new Map,Wu=new Map,bs=[],jC="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function hw(n,s){switch(n){case"focusin":case"focusout":ws=null;break;case"dragenter":case"dragleave":Is=null;break;case"mouseover":case"mouseout":As=null;break;case"pointerover":case"pointerout":Xu.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wu.delete(s.pointerId)}}function Ju(n,s,o,u,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:s,domEventName:o,eventSystemFlags:u,nativeEvent:m,targetContainers:[d]},s!==null&&(s=rr(s),s!==null&&lw(s)),n):(n.eventSystemFlags|=u,s=n.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),n)}function GC(n,s,o,u,d){switch(s){case"focusin":return ws=Ju(ws,n,s,o,u,d),!0;case"dragenter":return Is=Ju(Is,n,s,o,u,d),!0;case"mouseover":return As=Ju(As,n,s,o,u,d),!0;case"pointerover":var m=d.pointerId;return Xu.set(m,Ju(Xu.get(m)||null,n,s,o,u,d)),!0;case"gotpointercapture":return m=d.pointerId,Wu.set(m,Ju(Wu.get(m)||null,n,s,o,u,d)),!0}return!1}function dw(n){var s=ir(n.target);if(s!==null){var o=l(s);if(o!==null){if(s=o.tag,s===13){if(s=c(o),s!==null){n.blockedOn=s,_h(n.priority,function(){uw(o)});return}}else if(s===31){if(s=f(o),s!==null){n.blockedOn=s,_h(n.priority,function(){uw(o)});return}}else if(s===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function kd(n){if(n.blockedOn!==null)return!1;for(var s=n.targetContainers;0<s.length;){var o=cg(n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);wo=u,o.target.dispatchEvent(u),wo=null}else return s=rr(o),s!==null&&lw(s),n.blockedOn=o,!1;s.shift()}return!0}function fw(n,s,o){kd(n)&&o.delete(s)}function HC(){dg=!1,ws!==null&&kd(ws)&&(ws=null),Is!==null&&kd(Is)&&(Is=null),As!==null&&kd(As)&&(As=null),Xu.forEach(fw),Wu.forEach(fw)}function Ld(n,s){n.blockedOn===s&&(n.blockedOn=null,dg||(dg=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,HC)))}var Ud=null;function mw(n){Ud!==n&&(Ud=n,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Ud===n&&(Ud=null);for(var s=0;s<n.length;s+=3){var o=n[s],u=n[s+1],d=n[s+2];if(typeof u!="function"){if(hg(u||o)===null)continue;break}var m=rr(o);m!==null&&(n.splice(s,3),s-=3,cp(m,{pending:!0,data:d,method:o.method,action:u},u,d))}}))}function tl(n){function s(D){return Ld(D,n)}ws!==null&&Ld(ws,n),Is!==null&&Ld(Is,n),As!==null&&Ld(As,n),Xu.forEach(s),Wu.forEach(s);for(var o=0;o<bs.length;o++){var u=bs[o];u.blockedOn===n&&(u.blockedOn=null)}for(;0<bs.length&&(o=bs[0],o.blockedOn===null);)dw(o),o.blockedOn===null&&bs.shift();if(o=(n.ownerDocument||n).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var d=o[u],m=o[u+1],y=d[on]||null;if(typeof m=="function")y||mw(o);else if(y){var w=null;if(m&&m.hasAttribute("formAction")){if(d=m,y=m[on]||null)w=y.formAction;else if(hg(d)!==null)continue}else w=y.action;typeof w=="function"?o[u+1]=w:(o.splice(u,3),u-=3),mw(o)}}}function pw(){function n(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(y){return d=y})},focusReset:"manual",scroll:"manual"})}function s(){d!==null&&(d(),d=null),u||setTimeout(o,20)}function o(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,d=null;return navigation.addEventListener("navigate",n),navigation.addEventListener("navigatesuccess",s),navigation.addEventListener("navigateerror",s),setTimeout(o,100),function(){u=!0,navigation.removeEventListener("navigate",n),navigation.removeEventListener("navigatesuccess",s),navigation.removeEventListener("navigateerror",s),d!==null&&(d(),d=null)}}}function fg(n){this._internalRoot=n}zd.prototype.render=fg.prototype.render=function(n){var s=this._internalRoot;if(s===null)throw Error(i(409));var o=s.current,u=Wn();aw(o,u,n,s,null,null)},zd.prototype.unmount=fg.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var s=n.containerInfo;aw(n.current,2,null,n,null,null),vd(),s[Oi]=null}};function zd(n){this._internalRoot=n}zd.prototype.unstable_scheduleHydration=function(n){if(n){var s=tr();n={blockedOn:null,target:n,priority:s};for(var o=0;o<bs.length&&s!==0&&s<bs[o].priority;o++);bs.splice(o,0,n),o===0&&dw(n)}};var gw=e.version;if(gw!=="19.2.0")throw Error(i(527,gw,"19.2.0"));ae.findDOMNode=function(n){var s=n._reactInternals;if(s===void 0)throw typeof n.render=="function"?Error(i(188)):(n=Object.keys(n).join(","),Error(i(268,n)));return n=g(s),n=n!==null?v(n):null,n=n===null?null:n.stateNode,n};var KC={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Bd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Bd.isDisabled&&Bd.supportsFiber)try{zr=Bd.inject(KC),pn=Bd}catch{}}return ec.createRoot=function(n,s){if(!a(n))throw Error(i(299));var o=!1,u="",d=IE,m=AE,y=bE;return s!=null&&(s.unstable_strictMode===!0&&(o=!0),s.identifierPrefix!==void 0&&(u=s.identifierPrefix),s.onUncaughtError!==void 0&&(d=s.onUncaughtError),s.onCaughtError!==void 0&&(m=s.onCaughtError),s.onRecoverableError!==void 0&&(y=s.onRecoverableError)),s=rw(n,1,!1,null,null,o,u,null,d,m,y,pw),n[Oi]=s.current,Yp(n),new fg(s)},ec.hydrateRoot=function(n,s,o){if(!a(n))throw Error(i(299));var u=!1,d="",m=IE,y=AE,w=bE,D=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(d=o.identifierPrefix),o.onUncaughtError!==void 0&&(m=o.onUncaughtError),o.onCaughtError!==void 0&&(y=o.onCaughtError),o.onRecoverableError!==void 0&&(w=o.onRecoverableError),o.formState!==void 0&&(D=o.formState)),s=rw(n,1,!0,s,o??null,u,d,D,m,y,w,pw),s.context=sw(null),o=s.current,u=Wn(),u=iu(u),d=cs(u),d.callback=null,hs(o,d,u),o=u,s.current.lanes=o,qr(s,o),zi(s),n[Oi]=s.current,Yp(n),new zd(s)},ec.version="19.2.0",ec}var Sw;function nD(){if(Sw)return gg.exports;Sw=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),gg.exports=tD(),gg.exports}var iD=nD(),Rw={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SA=function(r){const e=[];let t=0;for(let i=0;i<r.length;i++){let a=r.charCodeAt(i);a<128?e[t++]=a:a<2048?(e[t++]=a>>6|192,e[t++]=a&63|128):(a&64512)===55296&&i+1<r.length&&(r.charCodeAt(i+1)&64512)===56320?(a=65536+((a&1023)<<10)+(r.charCodeAt(++i)&1023),e[t++]=a>>18|240,e[t++]=a>>12&63|128,e[t++]=a>>6&63|128,e[t++]=a&63|128):(e[t++]=a>>12|224,e[t++]=a>>6&63|128,e[t++]=a&63|128)}return e},rD=function(r){const e=[];let t=0,i=0;for(;t<r.length;){const a=r[t++];if(a<128)e[i++]=String.fromCharCode(a);else if(a>191&&a<224){const l=r[t++];e[i++]=String.fromCharCode((a&31)<<6|l&63)}else if(a>239&&a<365){const l=r[t++],c=r[t++],f=r[t++],p=((a&7)<<18|(l&63)<<12|(c&63)<<6|f&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=r[t++],c=r[t++];e[i++]=String.fromCharCode((a&15)<<12|(l&63)<<6|c&63)}}return e.join("")},RA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(r,e){if(!Array.isArray(r))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let a=0;a<r.length;a+=3){const l=r[a],c=a+1<r.length,f=c?r[a+1]:0,p=a+2<r.length,g=p?r[a+2]:0,v=l>>2,T=(l&3)<<4|f>>4;let A=(f&15)<<2|g>>6,P=g&63;p||(P=64,c||(A=64)),i.push(t[v],t[T],t[A],t[P])}return i.join("")},encodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(r):this.encodeByteArray(SA(r),e)},decodeString(r,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(r):rD(this.decodeStringToByteArray(r,e))},decodeStringToByteArray(r,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let a=0;a<r.length;){const l=t[r.charAt(a++)],f=a<r.length?t[r.charAt(a)]:0;++a;const g=a<r.length?t[r.charAt(a)]:64;++a;const T=a<r.length?t[r.charAt(a)]:64;if(++a,l==null||f==null||g==null||T==null)throw new sD;const A=l<<2|f>>4;if(i.push(A),g!==64){const P=f<<4&240|g>>2;if(i.push(P),T!==64){const G=g<<6&192|T;i.push(G)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let r=0;r<this.ENCODED_VALS.length;r++)this.byteToCharMap_[r]=this.ENCODED_VALS.charAt(r),this.charToByteMap_[this.byteToCharMap_[r]]=r,this.byteToCharMapWebSafe_[r]=this.ENCODED_VALS_WEBSAFE.charAt(r),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[r]]=r,r>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(r)]=r,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(r)]=r)}}};class sD extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const aD=function(r){const e=SA(r);return RA.encodeByteArray(e,!0)},uf=function(r){return aD(r).replace(/\./g,"")},CA=function(r){try{return RA.decodeString(r,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function cf(r,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:r===void 0&&(r={});break;case Array:r=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!oD(t)||(r[t]=cf(r[t],e[t]));return r}function oD(r){return r!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lD(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uD=()=>lD().__FIREBASE_DEFAULTS__,cD=()=>{if(typeof process>"u"||typeof Rw>"u")return;const r=Rw.__FIREBASE_DEFAULTS__;if(r)return JSON.parse(r)},hD=()=>{if(typeof document>"u")return;let r;try{r=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=r&&CA(r[1]);return e&&JSON.parse(e)},w_=()=>{try{return uD()||cD()||hD()}catch(r){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${r}`);return}},DA=()=>{var r;return(r=w_())===null||r===void 0?void 0:r.config},dD=r=>{var e;return(e=w_())===null||e===void 0?void 0:e[`_${r}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mD(r,e){if(r.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",a=r.iat||0,l=r.sub||r.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:a,exp:a+3600,auth_time:a,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},r);return[uf(JSON.stringify(t)),uf(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pD(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function I_(){var r;const e=(r=w_())===null||r===void 0?void 0:r.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function NA(){return typeof self=="object"&&self.self===self}function OA(){const r=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof r=="object"&&r.id!==void 0}function A_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function PA(){const r=pt();return r.indexOf("MSIE ")>=0||r.indexOf("Trident/")>=0}function VA(){return!I_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Sc(){try{return typeof indexedDB=="object"}catch{return!1}}function gD(){return new Promise((r,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(i);a.onsuccess=()=>{a.result.close(),t||self.indexedDB.deleteDatabase(i),r(!0)},a.onupgradeneeded=()=>{t=!1},a.onerror=()=>{var l;e(((l=a.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _D="FirebaseError";class Jt extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=_D,Object.setPrototypeOf(this,Jt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,so.prototype.create)}}class so{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},a=`${this.service}/${e}`,l=this.errors[e],c=l?yD(l,i):"Error",f=`${this.serviceName}: ${c} (${a}).`;return new Jt(a,f,i)}}function yD(r,e){return r.replace(vD,(t,i)=>{const a=e[i];return a!=null?String(a):`<${i}?>`})}const vD=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cw(r,e){return Object.prototype.hasOwnProperty.call(r,e)}function ED(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}function Rc(r,e){if(r===e)return!0;const t=Object.keys(r),i=Object.keys(e);for(const a of t){if(!i.includes(a))return!1;const l=r[a],c=e[a];if(Dw(l)&&Dw(c)){if(!Rc(l,c))return!1}else if(l!==c)return!1}for(const a of i)if(!t.includes(a))return!1;return!0}function Dw(r){return r!==null&&typeof r=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zl(r){const e=[];for(const[t,i]of Object.entries(r))Array.isArray(i)?i.forEach(a=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(a))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function dl(r){const e={};return r.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[a,l]=i.split("=");e[decodeURIComponent(a)]=decodeURIComponent(l)}}),e}function cc(r){const e=r.indexOf("?");if(!e)return"";const t=r.indexOf("#",e);return r.substring(e,t>0?t:void 0)}function xA(r,e){const t=new TD(r,e);return t.subscribe.bind(t)}class TD{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let a;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");wD(e,["next","error","complete"])?a=e:a={next:e,error:t,complete:i},a.next===void 0&&(a.next=Eg),a.error===void 0&&(a.error=Eg),a.complete===void 0&&(a.complete=Eg);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?a.error(this.finalError):a.complete()}catch{}}),this.observers.push(a),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wD(r,e){if(typeof r!="object"||r===null)return!1;for(const t of e)if(t in r&&typeof r[t]=="function")return!0;return!1}function Eg(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(r){return r&&r._delegate?r._delegate:r}class gi{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oa="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ID{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new fD;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const a=this.getOrInitializeService({instanceIdentifier:t});a&&i.resolve(a)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e?.identifier),a=(t=e?.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(a)return null;throw l}else{if(a)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bD(e))try{this.getOrInitializeService({instanceIdentifier:Oa})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:a});i.resolve(l)}catch{}}}}clearInstance(e=Oa){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Oa){return this.instances.has(e)}getOptions(e=Oa){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const a=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const f=this.normalizeInstanceIdentifier(l);i===f&&c.resolve(a)}return a}onInit(e,t){var i;const a=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(a))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(a,l);const c=this.instances.get(a);return c&&e(c,a),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const a of i)try{a(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:AD(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Oa){return this.component?this.component.multipleInstances?e:Oa:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function AD(r){return r===Oa?void 0:r}function bD(r){return r.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new ID(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b_=[];var Me;(function(r){r[r.DEBUG=0]="DEBUG",r[r.VERBOSE=1]="VERBOSE",r[r.INFO=2]="INFO",r[r.WARN=3]="WARN",r[r.ERROR=4]="ERROR",r[r.SILENT=5]="SILENT"})(Me||(Me={}));const kA={debug:Me.DEBUG,verbose:Me.VERBOSE,info:Me.INFO,warn:Me.WARN,error:Me.ERROR,silent:Me.SILENT},SD=Me.INFO,RD={[Me.DEBUG]:"log",[Me.VERBOSE]:"log",[Me.INFO]:"info",[Me.WARN]:"warn",[Me.ERROR]:"error"},CD=(r,e,...t)=>{if(e<r.logLevel)return;const i=new Date().toISOString(),a=RD[e];if(a)console[a](`[${i}]  ${r.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Of{constructor(e){this.name=e,this._logLevel=SD,this._logHandler=CD,this._userLogHandler=null,b_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?kA[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Me.DEBUG,...e),this._logHandler(this,Me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Me.VERBOSE,...e),this._logHandler(this,Me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Me.INFO,...e),this._logHandler(this,Me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Me.WARN,...e),this._logHandler(this,Me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Me.ERROR,...e),this._logHandler(this,Me.ERROR,...e)}}function DD(r){b_.forEach(e=>{e.setLogLevel(r)})}function ND(r,e){for(const t of b_){let i=null;e&&e.level&&(i=kA[e.level]),r===null?t.userLogHandler=null:t.userLogHandler=(a,l,...c)=>{const f=c.map(p=>{if(p==null)return null;if(typeof p=="string")return p;if(typeof p=="number"||typeof p=="boolean")return p.toString();if(p instanceof Error)return p.message;try{return JSON.stringify(p)}catch{return null}}).filter(p=>p).join(" ");l>=(i??a.logLevel)&&r({level:Me[l].toLowerCase(),message:f,args:c,type:a.name})}}}const OD=(r,e)=>e.some(t=>r instanceof t);let Nw,Ow;function PD(){return Nw||(Nw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VD(){return Ow||(Ow=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const LA=new WeakMap,kg=new WeakMap,UA=new WeakMap,Tg=new WeakMap,S_=new WeakMap;function xD(r){const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("success",l),r.removeEventListener("error",c)},l=()=>{t(Ms(r.result)),a()},c=()=>{i(r.error),a()};r.addEventListener("success",l),r.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&LA.set(t,r)}).catch(()=>{}),S_.set(e,r),e}function MD(r){if(kg.has(r))return;const e=new Promise((t,i)=>{const a=()=>{r.removeEventListener("complete",l),r.removeEventListener("error",c),r.removeEventListener("abort",c)},l=()=>{t(),a()},c=()=>{i(r.error||new DOMException("AbortError","AbortError")),a()};r.addEventListener("complete",l),r.addEventListener("error",c),r.addEventListener("abort",c)});kg.set(r,e)}let Lg={get(r,e,t){if(r instanceof IDBTransaction){if(e==="done")return kg.get(r);if(e==="objectStoreNames")return r.objectStoreNames||UA.get(r);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Ms(r[e])},set(r,e,t){return r[e]=t,!0},has(r,e){return r instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in r}};function kD(r){Lg=r(Lg)}function LD(r){return r===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=r.call(wg(this),e,...t);return UA.set(i,e.sort?e.sort():[e]),Ms(i)}:VD().includes(r)?function(...e){return r.apply(wg(this),e),Ms(LA.get(this))}:function(...e){return Ms(r.apply(wg(this),e))}}function UD(r){return typeof r=="function"?LD(r):(r instanceof IDBTransaction&&MD(r),OD(r,PD())?new Proxy(r,Lg):r)}function Ms(r){if(r instanceof IDBRequest)return xD(r);if(Tg.has(r))return Tg.get(r);const e=UD(r);return e!==r&&(Tg.set(r,e),S_.set(e,r)),e}const wg=r=>S_.get(r);function zD(r,e,{blocked:t,upgrade:i,blocking:a,terminated:l}={}){const c=indexedDB.open(r,e),f=Ms(c);return i&&c.addEventListener("upgradeneeded",p=>{i(Ms(c.result),p.oldVersion,p.newVersion,Ms(c.transaction),p)}),t&&c.addEventListener("blocked",p=>t(p.oldVersion,p.newVersion,p)),f.then(p=>{l&&p.addEventListener("close",()=>l()),a&&p.addEventListener("versionchange",g=>a(g.oldVersion,g.newVersion,g))}).catch(()=>{}),f}const BD=["get","getKey","getAll","getAllKeys","count"],FD=["put","add","delete","clear"],Ig=new Map;function Pw(r,e){if(!(r instanceof IDBDatabase&&!(e in r)&&typeof e=="string"))return;if(Ig.get(e))return Ig.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,a=FD.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(a||BD.includes(t)))return;const l=async function(c,...f){const p=this.transaction(c,a?"readwrite":"readonly");let g=p.store;return i&&(g=g.index(f.shift())),(await Promise.all([g[t](...f),a&&p.done]))[0]};return Ig.set(e,l),l}kD(r=>({...r,get:(e,t,i)=>Pw(e,t)||r.get(e,t,i),has:(e,t)=>!!Pw(e,t)||r.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(jD(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function jD(r){const e=r.getComponent();return e?.type==="VERSION"}const hf="@firebase/app",Ug="0.10.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka=new Of("@firebase/app"),GD="@firebase/app-compat",HD="@firebase/analytics-compat",KD="@firebase/analytics",QD="@firebase/app-check-compat",YD="@firebase/app-check",$D="@firebase/auth",XD="@firebase/auth-compat",WD="@firebase/database",JD="@firebase/database-compat",ZD="@firebase/functions",eN="@firebase/functions-compat",tN="@firebase/installations",nN="@firebase/installations-compat",iN="@firebase/messaging",rN="@firebase/messaging-compat",sN="@firebase/performance",aN="@firebase/performance-compat",oN="@firebase/remote-config",lN="@firebase/remote-config-compat",uN="@firebase/storage",cN="@firebase/storage-compat",hN="@firebase/firestore",dN="@firebase/vertexai-preview",fN="@firebase/firestore-compat",mN="firebase",pN="10.12.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ls="[DEFAULT]",gN={[hf]:"fire-core",[GD]:"fire-core-compat",[KD]:"fire-analytics",[HD]:"fire-analytics-compat",[YD]:"fire-app-check",[QD]:"fire-app-check-compat",[$D]:"fire-auth",[XD]:"fire-auth-compat",[WD]:"fire-rtdb",[JD]:"fire-rtdb-compat",[ZD]:"fire-fn",[eN]:"fire-fn-compat",[tN]:"fire-iid",[nN]:"fire-iid-compat",[iN]:"fire-fcm",[rN]:"fire-fcm-compat",[sN]:"fire-perf",[aN]:"fire-perf-compat",[oN]:"fire-rc",[lN]:"fire-rc-compat",[uN]:"fire-gcs",[cN]:"fire-gcs-compat",[hN]:"fire-fst",[fN]:"fire-fst-compat",[dN]:"fire-vertex","fire-js":"fire-js",[mN]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Us=new Map,Tl=new Map,wl=new Map;function Cc(r,e){try{r.container.addComponent(e)}catch(t){Ka.debug(`Component ${e.name} failed to register with FirebaseApp ${r.name}`,t)}}function zA(r,e){r.container.addOrOverwriteComponent(e)}function Nr(r){const e=r.name;if(wl.has(e))return Ka.debug(`There were multiple attempts to register component ${e}.`),!1;wl.set(e,r);for(const t of Us.values())Cc(t,r);for(const t of Tl.values())Cc(t,r);return!0}function BA(r,e){const t=r.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),r.container.getProvider(e)}function _N(r,e,t=Ls){BA(r,e).clearInstance(t)}function FA(r){return r.options!==void 0}function At(r){return r.settings!==void 0}function yN(){wl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vN={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},pi=new so("app","Firebase",vN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qA=class{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new gi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw pi.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EN extends qA{constructor(e,t,i,a){const l=t.automaticDataCollectionEnabled!==void 0?t.automaticDataCollectionEnabled:!1,c={name:i,automaticDataCollectionEnabled:l};if(e.apiKey!==void 0)super(e,c,a);else{const f=e;super(f.options,c,a)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:l},t),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,t.releaseOnDeref=void 0,ei(hf,Ug,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){C_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw pi.create("server-app-deleted")}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ys=pN;function R_(r,e={}){let t=r;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ls,automaticDataCollectionEnabled:!1},e),a=i.name;if(typeof a!="string"||!a)throw pi.create("bad-app-name",{appName:String(a)});if(t||(t=DA()),!t)throw pi.create("no-options");const l=Us.get(a);if(l){if(Rc(t,l.options)&&Rc(i,l.config))return l;throw pi.create("duplicate-app",{appName:a})}const c=new MA(a);for(const p of wl.values())c.addComponent(p);const f=new qA(t,i,c);return Us.set(a,f),f}function TN(r,e){if(NA())throw pi.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let t;FA(r)?t=r.options:t=r;const i=Object.assign(Object.assign({},e),t);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const a=g=>[...g].reduce((v,T)=>Math.imul(31,v)+T.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw pi.create("finalization-registry-not-supported",{});const l=""+a(JSON.stringify(i)),c=Tl.get(l);if(c)return c.incRefCount(e.releaseOnDeref),c;const f=new MA(l);for(const g of wl.values())f.addComponent(g);const p=new EN(t,e,l,f);return Tl.set(l,p),p}function wN(r=Ls){const e=Us.get(r);if(!e&&r===Ls&&DA())return R_();if(!e)throw pi.create("no-app",{appName:r});return e}function IN(){return Array.from(Us.values())}async function C_(r){let e=!1;const t=r.name;Us.has(t)?(e=!0,Us.delete(t)):Tl.has(t)&&r.decRefCount()<=0&&(Tl.delete(t),e=!0),e&&(await Promise.all(r.container.getProviders().map(i=>i.delete())),r.isDeleted=!0)}function ei(r,e,t){var i;let a=(i=gN[r])!==null&&i!==void 0?i:r;t&&(a+=`-${t}`);const l=a.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const f=[`Unable to register library "${a}" with version "${e}":`];l&&f.push(`library name "${a}" contains illegal characters (whitespace or "/")`),l&&c&&f.push("and"),c&&f.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Ka.warn(f.join(" "));return}Nr(new gi(`${a}-version`,()=>({library:a,version:e}),"VERSION"))}function jA(r,e){if(r!==null&&typeof r!="function")throw pi.create("invalid-log-argument");ND(r,e)}function GA(r){DD(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AN="firebase-heartbeat-database",bN=1,Dc="firebase-heartbeat-store";let Ag=null;function HA(){return Ag||(Ag=zD(AN,bN,{upgrade:(r,e)=>{switch(e){case 0:try{r.createObjectStore(Dc)}catch(t){console.warn(t)}}}}).catch(r=>{throw pi.create("idb-open",{originalErrorMessage:r.message})})),Ag}async function SN(r){try{const t=(await HA()).transaction(Dc),i=await t.objectStore(Dc).get(KA(r));return await t.done,i}catch(e){if(e instanceof Jt)Ka.warn(e.message);else{const t=pi.create("idb-get",{originalErrorMessage:e?.message});Ka.warn(t.message)}}}async function Vw(r,e){try{const i=(await HA()).transaction(Dc,"readwrite");await i.objectStore(Dc).put(e,KA(r)),await i.done}catch(t){if(t instanceof Jt)Ka.warn(t.message);else{const i=pi.create("idb-set",{originalErrorMessage:t?.message});Ka.warn(i.message)}}}function KA(r){return`${r.name}!${r.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=1024,CN=720*60*60*1e3;class DN{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ON(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=xw();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l)))return this._heartbeatsCache.heartbeats.push({date:l,agent:a}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(c=>{const f=new Date(c.date).valueOf();return Date.now()-f<=CN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xw(),{heartbeatsToSend:i,unsentEntries:a}=NN(this._heartbeatsCache.heartbeats),l=uf(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}}function xw(){return new Date().toISOString().substring(0,10)}function NN(r,e=RN){const t=[];let i=r.slice();for(const a of r){const l=t.find(c=>c.agent===a.agent);if(l){if(l.dates.push(a.date),Mw(t)>e){l.dates.pop();break}}else if(t.push({agent:a.agent,dates:[a.date]}),Mw(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class ON{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Sc()?gD().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await SN(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Vw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const a=await this.read();return Vw(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:a.lastSentHeartbeatDate,heartbeats:[...a.heartbeats,...e.heartbeats]})}else return}}function Mw(r){return uf(JSON.stringify({version:2,heartbeats:r})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PN(r){Nr(new gi("platform-logger",e=>new qD(e),"PRIVATE")),Nr(new gi("heartbeat",e=>new DN(e),"PRIVATE")),ei(hf,Ug,r),ei(hf,Ug,"esm2017"),ei("fire-js","")}PN("");const VN=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Jt,SDK_VERSION:Ys,_DEFAULT_ENTRY_NAME:Ls,_addComponent:Cc,_addOrOverwriteComponent:zA,_apps:Us,_clearComponents:yN,_components:wl,_getProvider:BA,_isFirebaseApp:FA,_isFirebaseServerApp:At,_registerComponent:Nr,_removeServiceInstance:_N,_serverApps:Tl,deleteApp:C_,getApp:wN,getApps:IN,initializeApp:R_,initializeServerApp:TN,onLog:jA,registerVersion:ei,setLogLevel:GA},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xN{constructor(e,t){this._delegate=e,this.firebase=t,Cc(e,new gi("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),C_(this._delegate)))}_getService(e,t=Ls){var i;this._delegate.checkDestroyed();const a=this._delegate.container.getProvider(e);return!a.isInitialized()&&((i=a.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&a.initialize(),a.getImmediate({identifier:t})}_removeServiceInstance(e,t=Ls){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Cc(this._delegate,e)}_addOrOverwriteComponent(e){zA(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MN={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},kw=new so("app-compat","Firebase",MN);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kN(r){const e={},t={__esModule:!0,initializeApp:l,app:a,registerVersion:ei,setLogLevel:GA,onLog:jA,apps:null,SDK_VERSION:Ys,INTERNAL:{registerComponent:f,removeApp:i,useAsService:p,modularAPIs:VN}};t.default=t,Object.defineProperty(t,"apps",{get:c});function i(g){delete e[g]}function a(g){if(g=g||Ls,!Cw(e,g))throw kw.create("no-app",{appName:g});return e[g]}a.App=r;function l(g,v={}){const T=R_(g,v);if(Cw(e,T.name))return e[T.name];const A=new r(T,t);return e[T.name]=A,A}function c(){return Object.keys(e).map(g=>e[g])}function f(g){const v=g.name,T=v.replace("-compat","");if(Nr(g)&&g.type==="PUBLIC"){const A=(P=a())=>{if(typeof P[T]!="function")throw kw.create("invalid-app-argument",{appName:v});return P[T]()};g.serviceProps!==void 0&&cf(A,g.serviceProps),t[T]=A,r.prototype[T]=function(...P){return this._getService.bind(this,v).apply(this,g.multipleInstances?P:[])}}return g.type==="PUBLIC"?t[T]:null}function p(g,v){return v==="serverAuth"?null:v}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){const r=kN(xN);r.INTERNAL=Object.assign(Object.assign({},r.INTERNAL),{createFirebaseNamespace:QA,extendNamespace:e,createSubscribe:xA,ErrorFactory:so,deepExtend:cf});function e(t){cf(r,t)}return r}const LN=QA();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lw=new Of("@firebase/app-compat"),UN="@firebase/app-compat",zN="0.2.35";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BN(r){ei(UN,zN,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(NA()&&self.firebase!==void 0){Lw.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const r=self.firebase.SDK_VERSION;r&&r.indexOf("LITE")>=0&&Lw.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const zn=LN;BN();var FN="firebase",qN="10.12.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zn.registerVersion(FN,qN,"app-compat");function D_(r,e){var t={};for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&e.indexOf(i)<0&&(t[i]=r[i]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,i=Object.getOwnPropertySymbols(r);a<i.length;a++)e.indexOf(i[a])<0&&Object.prototype.propertyIsEnumerable.call(r,i[a])&&(t[i[a]]=r[i[a]]);return t}const tc={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},nl={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jN(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function YA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const GN=jN,HN=YA,$A=new so("auth","Firebase",YA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const df=new Of("@firebase/auth");function KN(r,...e){df.logLevel<=Me.WARN&&df.warn(`Auth (${Ys}): ${r}`,...e)}function Yd(r,...e){df.logLevel<=Me.ERROR&&df.error(`Auth (${Ys}): ${r}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(r,...e){throw O_(r,...e)}function jt(r,...e){return O_(r,...e)}function N_(r,e,t){const i=Object.assign(Object.assign({},HN()),{[e]:t});return new so("auth","Firebase",i).create(e,{appName:r.name})}function Zt(r){return N_(r,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Bl(r,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&mn(r,"argument-error"),N_(r,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function O_(r,...e){if(typeof r!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=r.name),r._errorFactory.create(t,...i)}return $A.create(r,...e)}function ne(r,e,...t){if(!r)throw O_(e,...t)}function Gi(r){const e="INTERNAL ASSERTION FAILED: "+r;throw Yd(e),new Error(e)}function Si(r,e){r||Gi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.href)||""}function P_(){return Uw()==="http:"||Uw()==="https:"}function Uw(){var r;return typeof self<"u"&&((r=self.location)===null||r===void 0?void 0:r.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QN(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(P_()||OA()||"connection"in navigator)?navigator.onLine:!0}function YN(){if(typeof navigator>"u")return null;const r=navigator;return r.languages&&r.languages[0]||r.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t){this.shortDelay=e,this.longDelay=t,Si(t>e,"Short delay should be less than long delay!"),this.isMobile=pD()||A_()}get(){return QN()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(r,e){Si(r.emulator,"Emulator should always be set here");const{url:t}=r.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $N={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XN=new Yc(3e4,6e4);function Rt(r,e){return r.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:r.tenantId}):e}async function Ct(r,e,t,i,a={}){return WA(r,a,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const f=zl(Object.assign({key:r.config.apiKey},c)).slice(1),p=await r._getAdditionalHeaders();return p["Content-Type"]="application/json",r.languageCode&&(p["X-Firebase-Locale"]=r.languageCode),XA.fetch()(JA(r,r.config.apiHost,t,f),Object.assign({method:e,headers:p,referrerPolicy:"no-referrer"},l))})}async function WA(r,e,t){r._canInitEmulator=!1;const i=Object.assign(Object.assign({},$N),e);try{const a=new JN(r),l=await Promise.race([t(),a.promise]);a.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw hc(r,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const f=l.ok?c.errorMessage:c.error.message,[p,g]=f.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw hc(r,"credential-already-in-use",c);if(p==="EMAIL_EXISTS")throw hc(r,"email-already-in-use",c);if(p==="USER_DISABLED")throw hc(r,"user-disabled",c);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw N_(r,v,g);mn(r,v)}}catch(a){if(a instanceof Jt)throw a;mn(r,"network-request-failed",{message:String(a)})}}async function xr(r,e,t,i,a={}){const l=await Ct(r,e,t,i,a);return"mfaPendingCredential"in l&&mn(r,"multi-factor-auth-required",{_serverResponse:l}),l}function JA(r,e,t,i){const a=`${e}${t}?${i}`;return r.config.emulator?V_(r.config,a):`${r.config.apiScheme}://${a}`}function WN(r){switch(r){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class JN{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(jt(this.auth,"network-request-failed")),XN.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function hc(r,e,t){const i={appName:r.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const a=jt(r,e,i);return a.customData._tokenResponse=t,a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(r){return r!==void 0&&r.getResponse!==void 0}function Bw(r){return r!==void 0&&r.enterprise!==void 0}class ZN{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return WN(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function e1(r){return(await Ct(r,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function t1(r,e){return Ct(r,"GET","/v2/recaptchaConfig",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(r,e){return Ct(r,"POST","/v1/accounts:delete",e)}async function i1(r,e){return Ct(r,"POST","/v1/accounts:update",e)}async function ZA(r,e){return Ct(r,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(r){if(r)try{const e=new Date(Number(r));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function r1(r,e=!1){const t=Te(r),i=await t.getIdToken(e),a=Pf(i);ne(a&&a.exp&&a.auth_time&&a.iat,t.auth,"internal-error");const l=typeof a.firebase=="object"?a.firebase:void 0,c=l?.sign_in_provider;return{claims:a,token:i,authTime:_c(bg(a.auth_time)),issuedAtTime:_c(bg(a.iat)),expirationTime:_c(bg(a.exp)),signInProvider:c||null,signInSecondFactor:l?.sign_in_second_factor||null}}function bg(r){return Number(r)*1e3}function Pf(r){const[e,t,i]=r.split(".");if(e===void 0||t===void 0||i===void 0)return Yd("JWT malformed, contained fewer than 3 sections"),null;try{const a=CA(t);return a?JSON.parse(a):(Yd("Failed to decode base64 JWT payload"),null)}catch(a){return Yd("Caught error parsing JWT payload as JSON",a?.toString()),null}}function Fw(r){const e=Pf(r);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(r,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Jt&&s1(i)&&r.auth.currentUser===r&&await r.auth.signOut(),i}}function s1({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const a=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,a)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=_c(this.lastLoginAt),this.creationTime=_c(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(r){var e;const t=r.auth,i=await r.getIdToken(),a=await Or(r,ZA(t,{idToken:i}));ne(a?.users.length,t,"internal-error");const l=a.users[0];r._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?eb(l.providerUserInfo):[],f=l1(r.providerData,c),p=r.isAnonymous,g=!(r.email&&l.passwordHash)&&!f?.length,v=p?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:f,metadata:new zg(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(r,T)}async function o1(r){const e=Te(r);await Oc(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function l1(r,e){return[...r.filter(i=>!e.some(a=>a.providerId===i.providerId)),...e]}function eb(r){return r.map(e=>{var{providerId:t}=e,i=D_(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u1(r,e){const t=await WA(r,{},async()=>{const i=zl({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:a,apiKey:l}=r.config,c=JA(r,a,"/v1/token",`key=${l}`),f=await r._getAdditionalHeaders();return f["Content-Type"]="application/x-www-form-urlencoded",XA.fetch()(c,{method:"POST",headers:f,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function c1(r,e){return Ct(r,"POST","/v2/accounts:revokeToken",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Fw(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:a,expiresIn:l}=await u1(e,t);this.updateTokensAndExpiration(i,a,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:a,expirationTime:l}=t,c=new ml;return i&&(ne(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),a&&(ne(typeof a=="string","internal-error",{appName:e}),c.accessToken=a),l&&(ne(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ml,this.toJSON())}_performRefresh(){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rs(r,e){ne(typeof r=="string"||typeof r>"u","internal-error",{appName:e})}class Sr{constructor(e){var{uid:t,auth:i,stsTokenManager:a}=e,l=D_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new a1(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=a,this.accessToken=a.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new zg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Or(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return r1(this,e)}reload(){return o1(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Oc(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Zt(this.auth));const e=await this.getIdToken();return await Or(this,n1(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,a,l,c,f,p,g,v;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,A=(a=t.email)!==null&&a!==void 0?a:void 0,P=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,G=(c=t.photoURL)!==null&&c!==void 0?c:void 0,Q=(f=t.tenantId)!==null&&f!==void 0?f:void 0,$=(p=t._redirectEventId)!==null&&p!==void 0?p:void 0,le=(g=t.createdAt)!==null&&g!==void 0?g:void 0,he=(v=t.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:re,emailVerified:ve,isAnonymous:de,providerData:ue,stsTokenManager:R}=t;ne(re&&R,e,"internal-error");const b=ml.fromJSON(this.name,R);ne(typeof re=="string",e,"internal-error"),Rs(T,e.name),Rs(A,e.name),ne(typeof ve=="boolean",e,"internal-error"),ne(typeof de=="boolean",e,"internal-error"),Rs(P,e.name),Rs(G,e.name),Rs(Q,e.name),Rs($,e.name),Rs(le,e.name),Rs(he,e.name);const S=new Sr({uid:re,auth:e,email:A,emailVerified:ve,displayName:T,isAnonymous:de,photoURL:G,phoneNumber:P,tenantId:Q,stsTokenManager:b,createdAt:le,lastLoginAt:he});return ue&&Array.isArray(ue)&&(S.providerData=ue.map(N=>Object.assign({},N))),$&&(S._redirectEventId=$),S}static async _fromIdTokenResponse(e,t,i=!1){const a=new ml;a.updateFromServerResponse(t);const l=new Sr({uid:t.localId,auth:e,stsTokenManager:a,isAnonymous:i});return await Oc(l),l}static async _fromGetAccountInfoResponse(e,t,i){const a=t.users[0];ne(a.localId!==void 0,"internal-error");const l=a.providerUserInfo!==void 0?eb(a.providerUserInfo):[],c=!(a.email&&a.passwordHash)&&!l?.length,f=new ml;f.updateFromIdToken(i);const p=new Sr({uid:a.localId,auth:e,stsTokenManager:f,isAnonymous:c}),g={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:l,metadata:new zg(a.createdAt,a.lastLoginAt),isAnonymous:!(a.email&&a.passwordHash)&&!l?.length};return Object.assign(p,g),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qw=new Map;function Zn(r){Si(r instanceof Function,"Expected a class definition");let e=qw.get(r);return e?(Si(e instanceof r,"Instance stored in cache mismatched with class"),e):(e=new r,qw.set(r,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tb{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}tb.type="NONE";const Il=tb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(r,e,t){return`firebase:${r}:${e}:${t}`}class pl{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:a,name:l}=this.auth;this.fullUserKey=ja(this.userKey,a.apiKey,l),this.fullPersistenceKey=ja("persistence",a.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Sr._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new pl(Zn(Il),e,i);const a=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=a[0]||Zn(Il);const c=ja(i,e.config.apiKey,e.name);let f=null;for(const g of t)try{const v=await g._get(c);if(v){const T=Sr._fromJSON(e,v);g!==l&&(f=T),l=g;break}}catch{}const p=a.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new pl(l,e,i):(l=p[0],f&&await l._set(c,f.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new pl(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jw(r){const e=r.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(nb(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sb(e))return"Blackberry";if(ab(e))return"Webos";if(x_(e))return"Safari";if((e.includes("chrome/")||ib(e))&&!e.includes("edge/"))return"Chrome";if($c(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=r.match(t);if(i?.length===2)return i[1]}return"Other"}function nb(r=pt()){return/firefox\//i.test(r)}function x_(r=pt()){const e=r.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ib(r=pt()){return/crios\//i.test(r)}function rb(r=pt()){return/iemobile/i.test(r)}function $c(r=pt()){return/android/i.test(r)}function sb(r=pt()){return/blackberry/i.test(r)}function ab(r=pt()){return/webos/i.test(r)}function Fl(r=pt()){return/iphone|ipad|ipod/i.test(r)||/macintosh/i.test(r)&&/mobile/i.test(r)}function h1(r=pt()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(r)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(r)}function d1(r=pt()){var e;return Fl(r)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function f1(){return PA()&&document.documentMode===10}function ob(r=pt()){return Fl(r)||$c(r)||ab(r)||sb(r)||/windows phone/i.test(r)||rb(r)}function m1(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(r,e=[]){let t;switch(r){case"Browser":t=jw(pt());break;case"Worker":t=`${jw(pt())}-${r}`;break;default:t=r}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ys}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p1{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,f)=>{try{const p=e(l);c(p)}catch(p){f(p)}});i.onAbort=t,this.queue.push(i);const a=this.queue.length-1;return()=>{this.queue[a]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const a of t)try{a()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g1(r,e={}){return Ct(r,"GET","/v2/passwordPolicy",Rt(r,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _1=6;class y1{constructor(e){var t,i,a,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:_1,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(a=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&a!==void 0?a:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,a,l,c,f;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(t=p.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(a=p.containsLowercaseLetter)!==null&&a!==void 0?a:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(c=p.containsNumericCharacter)!==null&&c!==void 0?c:!0),p.isValid&&(p.isValid=(f=p.containsNonAlphanumericCharacter)!==null&&f!==void 0?f:!0),p}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,a=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),a&&(t.meetsMaxPasswordLength=e.length<=a)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let a=0;a<e.length;a++)i=e.charAt(a),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,a,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=a)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{constructor(e,t,i,a){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Gw(this),this.idTokenSubscription=new Gw(this),this.beforeStateQueue=new p1(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$A,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=a.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Zn(t)),this._initializationPromise=this.queue(async()=>{var i,a;if(!this._deleted&&(this.persistenceManager=await pl.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((a=this.currentUser)===null||a===void 0?void 0:a.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ZA(this,{idToken:e}),i=await Sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(At(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(f=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(f,f))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let a=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,f=a?._redirectEventId,p=await this.tryRedirectSignIn(e);(!c||c===f)&&p?.user&&(a=p.user,l=!0)}if(!a)return this.directlySetCurrentUser(null);if(!a._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(a)}catch(c){a=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return a?this.reloadAndSetCurrentUserOrClear(a):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===a._redirectEventId?this.directlySetCurrentUser(a):this.reloadAndSetCurrentUserOrClear(a)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Oc(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YN()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Zt(this));const t=e?Te(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Zt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Zt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await g1(this),t=new y1(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new so("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await c1(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Zn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await pl.create(this,[Zn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,a){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const f=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(f,this,"internal-error"),f.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const p=e.addObserver(t,i,a);return()=>{c=!0,p()}}else{const p=e.addObserver(t);return()=>{c=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=lb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const a=await this._getAppCheckToken();return a&&(t["X-Firebase-AppCheck"]=a),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t?.error&&KN(`Error while retrieving App Check token: ${t.error}`),t?.token}}function bt(r){return Te(r)}class Gw{constructor(e){this.auth=e,this.observer=null,this.addObserver=xA(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function E1(r){Xc=r}function M_(r){return Xc.loadJS(r)}function T1(){return Xc.recaptchaV2Script}function w1(){return Xc.recaptchaEnterpriseScript}function I1(){return Xc.gapiScript}function ub(r){return`__${r}${Math.floor(Math.random()*1e6)}`}const A1="recaptcha-enterprise",b1="NO_RECAPTCHA";class S1{constructor(e){this.type=A1,this.auth=bt(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,f)=>{t1(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)f(new Error("recaptcha Enterprise site key undefined"));else{const g=new ZN(p);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(p=>{f(p)})})}function a(l,c,f){const p=window.grecaptcha;Bw(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(b1)})}):f(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((l,c)=>{i(this.auth).then(f=>{if(!t&&Bw(window.grecaptcha))a(f,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let p=w1();p.length!==0&&(p+=f),M_(p).then(()=>{a(f,l,c)}).catch(g=>{c(g)})}}).catch(f=>{c(f)})})}}async function Hw(r,e,t,i=!1){const a=new S1(r);let l;try{l=await a.verify(t)}catch{l=await a.verify(t,!0)}const c=Object.assign({},e);return i?Object.assign(c,{captchaResp:l}):Object.assign(c,{captchaResponse:l}),Object.assign(c,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(c,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),c}async function Pc(r,e,t,i){var a;if(!((a=r._getRecaptchaConfig())===null||a===void 0)&&a.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await Hw(r,e,t,t==="getOobCode");return i(r,l)}else return i(r,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Hw(r,e,t,t==="getOobCode");return i(r,c)}else return Promise.reject(l)})}function R1(r,e){const t=e?.persistence||[],i=(Array.isArray(t)?t:[t]).map(Zn);e?.errorMap&&r._updateErrorMap(e.errorMap),r._initializeWithPersistence(i,e?.popupRedirectResolver)}function C1(r,e,t){const i=bt(r);ne(i._canInitEmulator,i,"emulator-config-failed"),ne(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const a=!!t?.disableWarnings,l=cb(e),{host:c,port:f}=D1(e),p=f===null?"":`:${f}`;i.config.emulator={url:`${l}//${c}${p}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:c,port:f,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:a})}),a||N1()}function cb(r){const e=r.indexOf(":");return e<0?"":r.substr(0,e+1)}function D1(r){const e=cb(r),t=/(\/\/)?([^?#/]+)/.exec(r.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",a=/^(\[[^\]]+\])(:|$)/.exec(i);if(a){const l=a[1];return{host:l,port:Kw(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:Kw(c)}}}function Kw(r){if(!r)return null;const e=Number(r);return isNaN(e)?null:e}function N1(){function r(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",r):r())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Gi("not implemented")}_getIdTokenResponse(e){return Gi("not implemented")}_linkToIdToken(e,t){return Gi("not implemented")}_getReauthenticationResolver(e){return Gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hb(r,e){return Ct(r,"POST","/v1/accounts:resetPassword",Rt(r,e))}async function O1(r,e){return Ct(r,"POST","/v1/accounts:update",e)}async function P1(r,e){return Ct(r,"POST","/v1/accounts:signUp",e)}async function V1(r,e){return Ct(r,"POST","/v1/accounts:update",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x1(r,e){return xr(r,"POST","/v1/accounts:signInWithPassword",Rt(r,e))}async function Vf(r,e){return Ct(r,"POST","/v1/accounts:sendOobCode",Rt(r,e))}async function M1(r,e){return Vf(r,e)}async function k1(r,e){return Vf(r,e)}async function L1(r,e){return Vf(r,e)}async function U1(r,e){return Vf(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z1(r,e){return xr(r,"POST","/v1/accounts:signInWithEmailLink",Rt(r,e))}async function B1(r,e){return xr(r,"POST","/v1/accounts:signInWithEmailLink",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc extends ql{constructor(e,t,i,a=null){super("password",i),this._email=e,this._password=t,this._tenantId=a}static _fromEmailAndPassword(e,t){return new Vc(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new Vc(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pc(e,t,"signInWithPassword",x1);case"emailLink":return z1(e,{email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Pc(e,i,"signUpPassword",P1);case"emailLink":return B1(e,{idToken:t,email:this._email,oobCode:this._password});default:mn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dr(r,e){return xr(r,"POST","/v1/accounts:signInWithIdp",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F1="http://localhost";class $i extends ql{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new $i(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):mn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a}=t,l=D_(t,["providerId","signInMethod"]);if(!i||!a)return null;const c=new $i(i,a);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Dr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}buildRequest(){const e={requestUri:F1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=zl(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function q1(r,e){return Ct(r,"POST","/v1/accounts:sendVerificationCode",Rt(r,e))}async function j1(r,e){return xr(r,"POST","/v1/accounts:signInWithPhoneNumber",Rt(r,e))}async function G1(r,e){const t=await xr(r,"POST","/v1/accounts:signInWithPhoneNumber",Rt(r,e));if(t.temporaryProof)throw hc(r,"account-exists-with-different-credential",t);return t}const H1={USER_NOT_FOUND:"user-not-found"};async function K1(r,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return xr(r,"POST","/v1/accounts:signInWithPhoneNumber",Rt(r,t),H1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ga extends ql{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new Ga({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new Ga({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return j1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return G1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return K1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:i,verificationCode:a}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:i,code:a}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l}=e;return!i&&!t&&!a&&!l?null:new Ga({verificationId:t,verificationCode:i,phoneNumber:a,temporaryProof:l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q1(r){switch(r){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Y1(r){const e=dl(cc(r)).link,t=e?dl(cc(e)).deep_link_id:null,i=dl(cc(r)).deep_link_id;return(i?dl(cc(i)).link:null)||i||t||e||r}class xf{constructor(e){var t,i,a,l,c,f;const p=dl(cc(e)),g=(t=p.apiKey)!==null&&t!==void 0?t:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,T=Q1((a=p.mode)!==null&&a!==void 0?a:null);ne(g&&v&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=p.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(f=p.tenantId)!==null&&f!==void 0?f:null}static parseLink(e){const t=Y1(e);try{return new xf(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(){this.providerId=$s.PROVIDER_ID}static credential(e,t){return Vc._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=xf.parseLink(t);return ne(i,"argument-error"),Vc._fromEmailAndCode(e,i.code,i.tenantId)}}$s.PROVIDER_ID="password";$s.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$s.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl extends Mr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class gl extends jl{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return ne("providerId"in t&&"signInMethod"in t,"argument-error"),$i._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return ne(e.idToken||e.accessToken,"argument-error"),$i._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return gl.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return gl.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i,oauthTokenSecret:a,pendingToken:l,nonce:c,providerId:f}=e;if(!i&&!a&&!t&&!l||!f)return null;try{return new gl(f)._credential({idToken:t,accessToken:i,nonce:c,pendingToken:l})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi extends jl{constructor(){super("facebook.com")}static credential(e){return $i._fromParams({providerId:Bi.PROVIDER_ID,signInMethod:Bi.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Bi.credentialFromTaggedObject(e)}static credentialFromError(e){return Bi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Bi.credential(e.oauthAccessToken)}catch{return null}}}Bi.FACEBOOK_SIGN_IN_METHOD="facebook.com";Bi.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi extends jl{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return $i._fromParams({providerId:Fi.PROVIDER_ID,signInMethod:Fi.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Fi.credentialFromTaggedObject(e)}static credentialFromError(e){return Fi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return Fi.credential(t,i)}catch{return null}}}Fi.GOOGLE_SIGN_IN_METHOD="google.com";Fi.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi extends jl{constructor(){super("github.com")}static credential(e){return $i._fromParams({providerId:qi.PROVIDER_ID,signInMethod:qi.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qi.credentialFromTaggedObject(e)}static credentialFromError(e){return qi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qi.credential(e.oauthAccessToken)}catch{return null}}}qi.GITHUB_SIGN_IN_METHOD="github.com";qi.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $1="http://localhost";class Al extends ql{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Dr(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Dr(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Dr(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:a,pendingToken:l}=t;return!i||!a||!l||i!==a?null:new Al(i,l)}static _create(e,t){return new Al(e,t)}buildRequest(){return{requestUri:$1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1="saml.";class ff extends Mr{constructor(e){ne(e.startsWith(X1),"argument-error"),super(e)}static credentialFromResult(e){return ff.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ff.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Al.fromJSON(e);return ne(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:i}=e;if(!t||!i)return null;try{return Al._create(i,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ji extends jl{constructor(){super("twitter.com")}static credential(e,t){return $i._fromParams({providerId:ji.PROVIDER_ID,signInMethod:ji.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ji.credentialFromTaggedObject(e)}static credentialFromError(e){return ji.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return ji.credential(t,i)}catch{return null}}}ji.TWITTER_SIGN_IN_METHOD="twitter.com";ji.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function db(r,e){return xr(r,"POST","/v1/accounts:signUp",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,a=!1){const l=await Sr._fromIdTokenResponse(e,i,a),c=Qw(i);return new _i({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const a=Qw(i);return new _i({user:e,providerId:a,_tokenResponse:i,operationType:t})}}function Qw(r){return r.providerId?r.providerId:"phoneNumber"in r?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(r){var e;if(At(r.app))return Promise.reject(Zt(r));const t=bt(r);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new _i({user:t.currentUser,providerId:null,operationType:"signIn"});const i=await db(t,{returnSecureToken:!0}),a=await _i._fromIdTokenResponse(t,"signIn",i,!0);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf extends Jt{constructor(e,t,i,a){var l;super(t.code,t.message),this.operationType=i,this.user=a,Object.setPrototypeOf(this,mf.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,a){return new mf(e,t,i,a)}}function fb(r,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(r):t._getIdTokenResponse(r)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?mf._fromErrorAndOperation(r,l,e,i):l})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mb(r){return new Set(r.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function J1(r,e){const t=Te(r);await Mf(!0,t,e);const{providerUserInfo:i}=await i1(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),a=mb(i||[]);return t.providerData=t.providerData.filter(l=>a.has(l.providerId)),a.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function k_(r,e,t=!1){const i=await Or(r,e._linkToIdToken(r.auth,await r.getIdToken()),t);return _i._forOperation(r,"link",i)}async function Mf(r,e,t){await Oc(e);const i=mb(e.providerData),a=r===!1?"provider-already-linked":"no-such-provider";ne(i.has(t)===r,e.auth,a)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pb(r,e,t=!1){const{auth:i}=r;if(At(i.app))return Promise.reject(Zt(i));const a="reauthenticate";try{const l=await Or(r,fb(i,a,e,r),t);ne(l.idToken,i,"internal-error");const c=Pf(l.idToken);ne(c,i,"internal-error");const{sub:f}=c;return ne(r.uid===f,i,"user-mismatch"),_i._forOperation(r,a,l)}catch(l){throw l?.code==="auth/user-not-found"&&mn(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(r,e,t=!1){if(At(r.app))return Promise.reject(Zt(r));const i="signIn",a=await fb(r,i,e),l=await _i._fromIdTokenResponse(r,i,a);return t||await r._updateCurrentUser(l.user),l}async function kf(r,e){return gb(bt(r),e)}async function _b(r,e){const t=Te(r);return await Mf(!1,t,e.providerId),k_(t,e)}async function yb(r,e){return pb(Te(r),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Z1(r,e){return xr(r,"POST","/v1/accounts:signInWithCustomToken",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eO(r,e){if(At(r.app))return Promise.reject(Zt(r));const t=bt(r),i=await Z1(t,{token:e,returnSecureToken:!0}),a=await _i._fromIdTokenResponse(t,"signIn",i);return await t._updateCurrentUser(a.user),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wc{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?L_._fromServerResponse(e,t):"totpInfo"in t?U_._fromServerResponse(e,t):mn(e,"internal-error")}}class L_ extends Wc{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new L_(t)}}class U_ extends Wc{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new U_(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lf(r,e,t){var i;ne(((i=t.url)===null||i===void 0?void 0:i.length)>0,r,"invalid-continue-uri"),ne(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,r,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(ne(t.iOS.bundleId.length>0,r,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(ne(t.android.packageName.length>0,r,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z_(r){const e=bt(r);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function tO(r,e,t){const i=bt(r),a={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&Lf(i,a,t),await Pc(i,a,"getOobCode",k1)}async function nO(r,e,t){await hb(Te(r),{oobCode:e,newPassword:t}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&z_(r),i})}async function iO(r,e){await V1(Te(r),{oobCode:e})}async function vb(r,e){const t=Te(r),i=await hb(t,{oobCode:e}),a=i.requestType;switch(ne(a,t,"internal-error"),a){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":ne(i.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":ne(i.mfaInfo,t,"internal-error");default:ne(i.email,t,"internal-error")}let l=null;return i.mfaInfo&&(l=Wc._fromServerResponse(bt(t),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:l},operation:a}}async function rO(r,e){const{data:t}=await vb(Te(r),e);return t.email}async function sO(r,e,t){if(At(r.app))return Promise.reject(Zt(r));const i=bt(r),c=await Pc(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",db).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&z_(r),p}),f=await _i._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(f.user),f}function aO(r,e,t){return At(r.app)?Promise.reject(Zt(r)):kf(Te(r),$s.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&z_(r),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oO(r,e,t){const i=bt(r),a={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function l(c,f){ne(f.handleCodeInApp,i,"argument-error"),f&&Lf(i,c,f)}l(a,t),await Pc(i,a,"getOobCode",L1)}function lO(r,e){const t=xf.parseLink(e);return t?.operation==="EMAIL_SIGNIN"}async function uO(r,e,t){if(At(r.app))return Promise.reject(Zt(r));const i=Te(r),a=$s.credentialWithLink(e,t||Nc());return ne(a._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),kf(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cO(r,e){return Ct(r,"POST","/v1/accounts:createAuthUri",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hO(r,e){const t=P_()?Nc():"http://localhost",i={identifier:e,continueUri:t},{signinMethods:a}=await cO(Te(r),i);return a||[]}async function dO(r,e){const t=Te(r),a={requestType:"VERIFY_EMAIL",idToken:await r.getIdToken()};e&&Lf(t.auth,a,e);const{email:l}=await M1(t.auth,a);l!==r.email&&await r.reload()}async function fO(r,e,t){const i=Te(r),l={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await r.getIdToken(),newEmail:e};t&&Lf(i.auth,l,t);const{email:c}=await U1(i.auth,l);c!==r.email&&await r.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mO(r,e){return Ct(r,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pO(r,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=Te(r),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Or(i,mO(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const f=i.providerData.find(({providerId:p})=>p==="password");f&&(f.displayName=i.displayName,f.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function gO(r,e){const t=Te(r);return At(t.auth.app)?Promise.reject(Zt(t.auth)):Eb(t,e,null)}function _O(r,e){return Eb(Te(r),null,e)}async function Eb(r,e,t){const{auth:i}=r,l={idToken:await r.getIdToken(),returnSecureToken:!0};e&&(l.email=e),t&&(l.password=t);const c=await Or(r,O1(i,l));await r._updateTokensIfNecessary(c,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yO(r){var e,t;if(!r)return null;const{providerId:i}=r,a=r.rawUserInfo?JSON.parse(r.rawUserInfo):{},l=r.isNewUser||r.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&r?.idToken){const c=(t=(e=Pf(r.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(c){const f=c!=="anonymous"&&c!=="custom"?c:null;return new _l(l,f)}}if(!i)return null;switch(i){case"facebook.com":return new vO(l,a);case"github.com":return new EO(l,a);case"google.com":return new TO(l,a);case"twitter.com":return new wO(l,a,r.screenName||null);case"custom":case"anonymous":return new _l(l,null);default:return new _l(l,i,a)}}class _l{constructor(e,t,i={}){this.isNewUser=e,this.providerId=t,this.profile=i}}class Tb extends _l{constructor(e,t,i,a){super(e,t,i),this.username=a}}class vO extends _l{constructor(e,t){super(e,"facebook.com",t)}}class EO extends Tb{constructor(e,t){super(e,"github.com",t,typeof t?.login=="string"?t?.login:null)}}class TO extends _l{constructor(e,t){super(e,"google.com",t)}}class wO extends Tb{constructor(e,t,i){super(e,"twitter.com",t,i)}}function IO(r){const{user:e,_tokenResponse:t}=r;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:yO(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,t,i){this.type=e,this.credential=t,this.user=i}static _fromIdtoken(e,t){return new za("enroll",e,t)}static _fromMfaPendingCredential(e){return new za("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,i;if(e?.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return za._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return za._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e,t,i){this.session=e,this.hints=t,this.signInResolver=i}static _fromError(e,t){const i=bt(e),a=t.customData._serverResponse,l=(a.mfaInfo||[]).map(f=>Wc._fromServerResponse(i,f));ne(a.mfaPendingCredential,i,"internal-error");const c=za._fromMfaPendingCredential(a.mfaPendingCredential);return new B_(c,l,async f=>{const p=await f._process(i,c);delete a.mfaInfo,delete a.mfaPendingCredential;const g=Object.assign(Object.assign({},a),{idToken:p.idToken,refreshToken:p.refreshToken});switch(t.operationType){case"signIn":const v=await _i._fromIdTokenResponse(i,t.operationType,g);return await i._updateCurrentUser(v.user),v;case"reauthenticate":return ne(t.user,i,"internal-error"),_i._forOperation(t.user,t.operationType,g);default:mn(i,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function AO(r,e){var t;const i=Te(r),a=e;return ne(e.customData.operationType,i,"argument-error"),ne((t=a.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,i,"argument-error"),B_._fromError(i,a)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bO(r,e){return Ct(r,"POST","/v2/accounts/mfaEnrollment:start",Rt(r,e))}function SO(r,e){return Ct(r,"POST","/v2/accounts/mfaEnrollment:finalize",Rt(r,e))}function RO(r,e){return Ct(r,"POST","/v2/accounts/mfaEnrollment:withdraw",Rt(r,e))}class F_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(i=>Wc._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new F_(e)}async getSession(){return za._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const i=e,a=await this.getSession(),l=await Or(this.user,i._process(this.user.auth,a,t));return await this.user._updateTokensIfNecessary(l),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const a=await Or(this.user,RO(this.user.auth,{idToken:i,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:l})=>l!==t),await this.user._updateTokensIfNecessary(a),await this.user.reload()}catch(a){throw a}}}const Sg=new WeakMap;function CO(r){const e=Te(r);return Sg.has(e)||Sg.set(e,F_._fromUser(e)),Sg.get(e)}const pf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(pf,"1"),this.storage.removeItem(pf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DO(){const r=pt();return x_(r)||Fl(r)}const NO=1e3,OO=10;class Ib extends wb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=DO()&&m1(),this.fallbackToPolling=ob(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),a=this.localCache[t];i!==a&&e(t,a,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,f,p)=>{this.notifyListeners(c,p)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const c=this.storage.getItem(i);if(e.newValue!==c)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const a=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);f1()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(a,OO):a()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},NO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ib.type="LOCAL";const q_=Ib;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ab extends wb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ab.type="SESSION";const Qa=Ab;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PO(r){return Promise.all(r.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uf{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(a=>a.isListeningto(e));if(t)return t;const i=new Uf(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:a,data:l}=t.data,c=this.handlersMap[a];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:a});const f=Array.from(c).map(async g=>g(t.origin,l)),p=await PO(f);t.ports[0].postMessage({status:"done",eventId:i,eventType:a,response:p})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Uf.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jc(r="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return r+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const a=typeof MessageChannel<"u"?new MessageChannel:null;if(!a)throw new Error("connection_unavailable");let l,c;return new Promise((f,p)=>{const g=Jc("",20);a.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);c={messageChannel:a,onMessage(T){const A=T;if(A.data.eventId===g)switch(A.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),f(A.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(c),a.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[a.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(){return window}function xO(r){Bt().location.href=r}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j_(){return typeof Bt().WorkerGlobalScope<"u"&&typeof Bt().importScripts=="function"}async function MO(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function kO(){var r;return((r=navigator?.serviceWorker)===null||r===void 0?void 0:r.controller)||null}function LO(){return j_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bb="firebaseLocalStorageDb",UO=1,gf="firebaseLocalStorage",Sb="fbase_key";class Zc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function zf(r,e){return r.transaction([gf],e?"readwrite":"readonly").objectStore(gf)}function zO(){const r=indexedDB.deleteDatabase(bb);return new Zc(r).toPromise()}function Bg(){const r=indexedDB.open(bb,UO);return new Promise((e,t)=>{r.addEventListener("error",()=>{t(r.error)}),r.addEventListener("upgradeneeded",()=>{const i=r.result;try{i.createObjectStore(gf,{keyPath:Sb})}catch(a){t(a)}}),r.addEventListener("success",async()=>{const i=r.result;i.objectStoreNames.contains(gf)?e(i):(i.close(),await zO(),e(await Bg()))})})}async function Yw(r,e,t){const i=zf(r,!0).put({[Sb]:e,value:t});return new Zc(i).toPromise()}async function BO(r,e){const t=zf(r,!1).get(e),i=await new Zc(t).toPromise();return i===void 0?null:i.value}function $w(r,e){const t=zf(r,!0).delete(e);return new Zc(t).toPromise()}const FO=800,qO=3;class Rb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Bg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>qO)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return j_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Uf._getInstance(LO()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await MO(),!this.activeServiceWorker)return;this.sender=new VO(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||kO()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Bg();return await Yw(e,pf,"1"),await $w(e,pf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Yw(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>BO(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$w(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(a=>{const l=zf(a,!1).getAll();return new Zc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:a,value:l}of e)i.add(a),JSON.stringify(this.localCache[a])!==JSON.stringify(l)&&(this.notifyListeners(a,l),t.push(a));for(const a of Object.keys(this.localCache))this.localCache[a]&&!i.has(a)&&(this.notifyListeners(a,null),t.push(a));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const a of Array.from(i))a(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),FO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Rb.type="LOCAL";const xc=Rb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jO(r,e){return Ct(r,"POST","/v2/accounts/mfaSignIn:start",Rt(r,e))}function GO(r,e){return Ct(r,"POST","/v2/accounts/mfaSignIn:finalize",Rt(r,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HO=500,KO=6e4,Fd=1e12;class QO{constructor(e){this.auth=e,this.counter=Fd,this._widgets=new Map}render(e,t){const i=this.counter;return this._widgets.set(i,new YO(e,this.auth.name,t||{})),this.counter++,i}reset(e){var t;const i=e||Fd;(t=this._widgets.get(i))===null||t===void 0||t.delete(),this._widgets.delete(i)}getResponse(e){var t;const i=e||Fd;return((t=this._widgets.get(i))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const i=e||Fd;return(t=this._widgets.get(i))===null||t===void 0||t.execute(),""}}class YO{constructor(e,t,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const a=typeof e=="string"?document.getElementById(e):e;ne(a,"argument-error",{appName:t}),this.container=a,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=$O(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},KO)},HO))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function $O(r){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<r;i++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=ub("rcb"),XO=new Yc(3e4,6e4);class WO{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Bt().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return ne(JO(t),e,"argument-error"),this.shouldResolveImmediately(t)&&zw(Bt().grecaptcha)?Promise.resolve(Bt().grecaptcha):new Promise((i,a)=>{const l=Bt().setTimeout(()=>{a(jt(e,"network-request-failed"))},XO.get());Bt()[Rg]=()=>{Bt().clearTimeout(l),delete Bt()[Rg];const f=Bt().grecaptcha;if(!f||!zw(f)){a(jt(e,"internal-error"));return}const p=f.render;f.render=(g,v)=>{const T=p(g,v);return this.counter++,T},this.hostLanguage=t,i(f)};const c=`${T1()}?${zl({onload:Rg,render:"explicit",hl:t})}`;M_(c).catch(()=>{clearTimeout(l),a(jt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Bt().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function JO(r){return r.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(r)}class ZO{async load(e){return new QO(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb="recaptcha",eP={theme:"light",type:"image"};let tP=class{constructor(e,t,i=Object.assign({},eP)){this.parameters=i,this.type=Cb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=bt(e),this.isInvisible=this.parameters.size==="invisible",ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const a=typeof t=="string"?document.getElementById(t):t;ne(a,this.auth,"argument-error"),this.container=a,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ZO:new WO,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),i=t.getResponse(e);return i||new Promise(a=>{const l=c=>{c&&(this.tokenChangeListeners.delete(l),a(c))};this.tokenChangeListeners.add(l),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){ne(!this.parameters.sitekey,this.auth,"argument-error"),ne(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),ne(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(i=>i(t)),typeof e=="function")e(t);else if(typeof e=="string"){const i=Bt()[e];typeof i=="function"&&i(t)}}}assertNotDestroyed(){ne(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){ne(P_()&&!j_(),this.auth,"internal-error"),await nP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await e1(this.auth);ne(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return ne(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function nP(){let r=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}r=()=>e(),window.addEventListener("load",r)}).catch(e=>{throw r&&window.removeEventListener("load",r),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=Ga._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function iP(r,e,t){if(At(r.app))return Promise.reject(Zt(r));const i=bt(r),a=await Bf(i,e,Te(t));return new G_(a,l=>kf(i,l))}async function rP(r,e,t){const i=Te(r);await Mf(!1,i,"phone");const a=await Bf(i.auth,e,Te(t));return new G_(a,l=>_b(i,l))}async function sP(r,e,t){const i=Te(r);if(At(i.auth.app))return Promise.reject(Zt(i.auth));const a=await Bf(i.auth,e,Te(t));return new G_(a,l=>yb(i,l))}async function Bf(r,e,t){var i;const a=await t.verify();try{ne(typeof a=="string",r,"argument-error"),ne(t.type===Cb,r,"argument-error");let l;if(typeof e=="string"?l={phoneNumber:e}:l=e,"session"in l){const c=l.session;if("phoneNumber"in l)return ne(c.type==="enroll",r,"internal-error"),(await bO(r,{idToken:c.credential,phoneEnrollmentInfo:{phoneNumber:l.phoneNumber,recaptchaToken:a}})).phoneSessionInfo.sessionInfo;{ne(c.type==="signin",r,"internal-error");const f=((i=l.multiFactorHint)===null||i===void 0?void 0:i.uid)||l.multiFactorUid;return ne(f,r,"missing-multi-factor-info"),(await jO(r,{mfaPendingCredential:c.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:a}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:c}=await q1(r,{phoneNumber:l.phoneNumber,recaptchaToken:a});return c}}finally{t._reset()}}async function aP(r,e){const t=Te(r);if(At(t.auth.app))return Promise.reject(Zt(t.auth));await k_(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ya=class $d{constructor(e){this.providerId=$d.PROVIDER_ID,this.auth=bt(e)}verifyPhoneNumber(e,t){return Bf(this.auth,e,Te(t))}static credential(e,t){return Ga._fromVerification(e,t)}static credentialFromResult(e){const t=e;return $d.credentialFromTaggedObject(t)}static credentialFromError(e){return $d.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:i}=e;return t&&i?Ga._fromTokenResponse(t,i):null}};Ya.PROVIDER_ID="phone";Ya.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(r,e){return e?Zn(e):(ne(r._popupRedirectResolver,r,"argument-error"),r._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_ extends ql{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Dr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Dr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Dr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function oP(r){return gb(r.auth,new H_(r),r.bypassAuthState)}function lP(r){const{auth:e,user:t}=r;return ne(t,e,"internal-error"),pb(t,new H_(r),r.bypassAuthState)}async function uP(r){const{auth:e,user:t}=r;return ne(t,e,"internal-error"),k_(t,new H_(r),r.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,t,i,a,l=!1){this.auth=e,this.resolver=i,this.user=a,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:a,tenantId:l,error:c,type:f}=e;if(c){this.reject(c);return}const p={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:a||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(f)(p))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return oP;case"linkViaPopup":case"linkViaRedirect":return uP;case"reauthViaPopup":case"reauthViaRedirect":return lP;default:mn(this.auth,"internal-error")}}resolve(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Si(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cP=new Yc(2e3,1e4);async function hP(r,e,t){if(At(r.app))return Promise.reject(jt(r,"operation-not-supported-in-this-environment"));const i=bt(r);Bl(r,e,Mr);const a=ao(i,t);return new Rr(i,"signInViaPopup",e,a).executeNotNull()}async function dP(r,e,t){const i=Te(r);if(At(i.auth.app))return Promise.reject(jt(i.auth,"operation-not-supported-in-this-environment"));Bl(i.auth,e,Mr);const a=ao(i.auth,t);return new Rr(i.auth,"reauthViaPopup",e,a,i).executeNotNull()}async function fP(r,e,t){const i=Te(r);Bl(i.auth,e,Mr);const a=ao(i.auth,t);return new Rr(i.auth,"linkViaPopup",e,a,i).executeNotNull()}class Rr extends Db{constructor(e,t,i,a,l){super(e,t,a,l),this.provider=i,this.authWindow=null,this.pollId=null,Rr.currentPopupAction&&Rr.currentPopupAction.cancel(),Rr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){Si(this.filter.length===1,"Popup operations only handle one event");const e=Jc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(jt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(jt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Rr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(jt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,cP.get())};e()}}Rr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP="pendingRedirect",yc=new Map;class pP extends Db{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=yc.get(this.auth._key());if(!e){try{const i=await gP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}yc.set(this.auth._key(),e)}return this.bypassAuthState||yc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gP(r,e){const t=Ob(e),i=Nb(r);if(!await i._isAvailable())return!1;const a=await i._get(t)==="true";return await i._remove(t),a}async function K_(r,e){return Nb(r)._set(Ob(e),"true")}function _P(){yc.clear()}function Q_(r,e){yc.set(r._key(),e)}function Nb(r){return Zn(r._redirectPersistence)}function Ob(r){return ja(mP,r.config.apiKey,r.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yP(r,e,t){return vP(r,e,t)}async function vP(r,e,t){if(At(r.app))return Promise.reject(Zt(r));const i=bt(r);Bl(r,e,Mr),await i._initializationPromise;const a=ao(i,t);return await K_(a,i),a._openRedirect(i,e,"signInViaRedirect")}function EP(r,e,t){return TP(r,e,t)}async function TP(r,e,t){const i=Te(r);if(Bl(i.auth,e,Mr),At(i.auth.app))return Promise.reject(Zt(i.auth));await i.auth._initializationPromise;const a=ao(i.auth,t);await K_(a,i.auth);const l=await Pb(i);return a._openRedirect(i.auth,e,"reauthViaRedirect",l)}function wP(r,e,t){return IP(r,e,t)}async function IP(r,e,t){const i=Te(r);Bl(i.auth,e,Mr),await i.auth._initializationPromise;const a=ao(i.auth,t);await Mf(!1,i,e.providerId),await K_(a,i.auth);const l=await Pb(i);return a._openRedirect(i.auth,e,"linkViaRedirect",l)}async function AP(r,e){return await bt(r)._initializationPromise,Ff(r,e,!1)}async function Ff(r,e,t=!1){if(At(r.app))return Promise.reject(Zt(r));const i=bt(r),a=ao(i,e),c=await new pP(i,a,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}async function Pb(r){const e=Jc(`${r.uid}:::`);return r._redirectEventId=e,await r.auth._setRedirectUser(r),await r.auth._persistUserIfCurrent(r),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=600*1e3;class Vb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!SP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!xb(e)){const a=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(jt(this.auth,a))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=bP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xw(e))}saveEventToCache(e){this.cachedEventUids.add(Xw(e)),this.lastProcessedEventTime=Date.now()}}function Xw(r){return[r.type,r.eventId,r.sessionId,r.tenantId].filter(e=>e).join("-")}function xb({type:r,error:e}){return r==="unknown"&&e?.code==="auth/no-auth-event"}function SP(r){switch(r.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xb(r);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mb(r,e={}){return Ct(r,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,CP=/^https?/;async function DP(r){if(r.config.emulator)return;const{authorizedDomains:e}=await Mb(r);for(const t of e)try{if(NP(t))return}catch{}mn(r,"unauthorized-domain")}function NP(r){const e=Nc(),{protocol:t,hostname:i}=new URL(e);if(r.startsWith("chrome-extension://")){const c=new URL(r);return c.hostname===""&&i===""?t==="chrome-extension:"&&r.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!CP.test(t))return!1;if(RP.test(r))return i===r;const a=r.replace(/\./g,"\\.");return new RegExp("^(.+\\."+a+"|"+a+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OP=new Yc(3e4,6e4);function Ww(){const r=Bt().___jsl;if(r?.H){for(const e of Object.keys(r.H))if(r.H[e].r=r.H[e].r||[],r.H[e].L=r.H[e].L||[],r.H[e].r=[...r.H[e].L],r.CP)for(let t=0;t<r.CP.length;t++)r.CP[t]=null}}function PP(r){return new Promise((e,t)=>{var i,a,l;function c(){Ww(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ww(),t(jt(r,"network-request-failed"))},timeout:OP.get()})}if(!((a=(i=Bt().gapi)===null||i===void 0?void 0:i.iframes)===null||a===void 0)&&a.Iframe)e(gapi.iframes.getContext());else if(!((l=Bt().gapi)===null||l===void 0)&&l.load)c();else{const f=ub("iframefcb");return Bt()[f]=()=>{gapi.load?c():t(jt(r,"network-request-failed"))},M_(`${I1()}?onload=${f}`).catch(p=>t(p))}}).catch(e=>{throw Xd=null,e})}let Xd=null;function VP(r){return Xd=Xd||PP(r),Xd}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xP=new Yc(5e3,15e3),MP="__/auth/iframe",kP="emulator/auth/iframe",LP={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},UP=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zP(r){const e=r.config;ne(e.authDomain,r,"auth-domain-config-required");const t=e.emulator?V_(e,kP):`https://${r.config.authDomain}/${MP}`,i={apiKey:e.apiKey,appName:r.name,v:Ys},a=UP.get(r.config.apiHost);a&&(i.eid=a);const l=r._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${zl(i).slice(1)}`}async function BP(r){const e=await VP(r),t=Bt().gapi;return ne(t,r,"internal-error"),e.open({where:document.body,url:zP(r),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:LP,dontclear:!0},i=>new Promise(async(a,l)=>{await i.restyle({setHideOnLeave:!1});const c=jt(r,"network-request-failed"),f=Bt().setTimeout(()=>{l(c)},xP.get());function p(){Bt().clearTimeout(f),a(i)}i.ping(p).then(p,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qP=500,jP=600,GP="_blank",HP="http://localhost";class Jw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function KP(r,e,t,i=qP,a=jP){const l=Math.max((window.screen.availHeight-a)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let f="";const p=Object.assign(Object.assign({},FP),{width:i.toString(),height:a.toString(),top:l,left:c}),g=pt().toLowerCase();t&&(f=ib(g)?GP:t),nb(g)&&(e=e||HP,p.scrollbars="yes");const v=Object.entries(p).reduce((A,[P,G])=>`${A}${P}=${G},`,"");if(d1(g)&&f!=="_self")return QP(e||"",f),new Jw(null);const T=window.open(e||"",f,v);ne(T,r,"popup-blocked");try{T.focus()}catch{}return new Jw(T)}function QP(r,e){const t=document.createElement("a");t.href=r,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP="__/auth/handler",$P="emulator/auth/handler",XP=encodeURIComponent("fac");async function Fg(r,e,t,i,a,l){ne(r.config.authDomain,r,"auth-domain-config-required"),ne(r.config.apiKey,r,"invalid-api-key");const c={apiKey:r.config.apiKey,appName:r.name,authType:t,redirectUrl:i,v:Ys,eventId:a};if(e instanceof Mr){e.setDefaultLanguage(r.languageCode),c.providerId=e.providerId||"",ED(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,T]of Object.entries(l||{}))c[v]=T}if(e instanceof jl){const v=e.getScopes().filter(T=>T!=="");v.length>0&&(c.scopes=v.join(","))}r.tenantId&&(c.tid=r.tenantId);const f=c;for(const v of Object.keys(f))f[v]===void 0&&delete f[v];const p=await r._getAppCheckToken(),g=p?`#${XP}=${encodeURIComponent(p)}`:"";return`${WP(r)}?${zl(f).slice(1)}${g}`}function WP({config:r}){return r.emulator?V_(r,$P):`https://${r.authDomain}/${YP}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cg="webStorageSupport";class JP{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qa,this._completeRedirectFn=Ff,this._overrideRedirectResult=Q_}async _openPopup(e,t,i,a){var l;Si((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Fg(e,t,i,Nc(),a);return KP(e,c,Jc())}async _openRedirect(e,t,i,a){await this._originValidation(e);const l=await Fg(e,t,i,Nc(),a);return xO(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:a,promise:l}=this.eventManagers[t];return a?Promise.resolve(a):(Si(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await BP(e),i=new Vb(e);return t.register("authEvent",a=>(ne(a?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(a.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Cg,{type:Cg},a=>{var l;const c=(l=a?.[0])===null||l===void 0?void 0:l[Cg];c!==void 0&&t(!!c),mn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return ob()||x_()||Fl()}}const ZP=JP;class eV{constructor(e){this.factorId=e}_process(e,t,i){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,i);case"signin":return this._finalizeSignIn(e,t.credential);default:return Gi("unexpected MultiFactorSessionType")}}}class Y_ extends eV{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Y_(e)}_finalizeEnroll(e,t,i){return SO(e,{idToken:t,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return GO(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class kb{constructor(){}static assertion(e){return Y_._fromCredential(e)}}kb.FACTOR_ID="phone";var Zw="@firebase/auth",eI="1.7.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tV{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nV(r){switch(r){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iV(r){Nr(new gi("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:f}=i.options;ne(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:c,authDomain:f,clientPlatform:r,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:lb(r)},g=new v1(i,a,l,p);return R1(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),Nr(new gi("auth-internal",e=>{const t=bt(e.getProvider("auth").getImmediate());return(i=>new tV(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),ei(Zw,eI,nV(r)),ei(Zw,eI,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV=300;dD("authIdTokenMaxAge");function sV(){var r,e;return(e=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&e!==void 0?e:document}E1({loadJS(r){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",r),i.onload=e,i.onerror=a=>{const l=jt("internal-error");l.customData=a,t(l)},i.type="text/javascript",i.charset="UTF-8",sV().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iV("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $a(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aV=2e3;async function oV(r,e,t){var i;const{BuildInfo:a}=$a();Si(e.sessionId,"AuthEvent did not contain a session ID");const l=await dV(e.sessionId),c={};return Fl()?c.ibi=a.packageName:$c()?c.apn=a.packageName:mn(r,"operation-not-supported-in-this-environment"),a.displayName&&(c.appDisplayName=a.displayName),c.sessionId=l,Fg(r,t,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,c)}async function lV(r){const{BuildInfo:e}=$a(),t={};Fl()?t.iosBundleId=e.packageName:$c()?t.androidPackageName=e.packageName:mn(r,"operation-not-supported-in-this-environment"),await Mb(r,t)}function uV(r){const{cordova:e}=$a();return new Promise(t=>{e.plugins.browsertab.isAvailable(i=>{let a=null;i?e.plugins.browsertab.openUrl(r):a=e.InAppBrowser.open(r,h1()?"_blank":"_system","location=yes"),t(a)})})}async function cV(r,e,t){const{cordova:i}=$a();let a=()=>{};try{await new Promise((l,c)=>{let f=null;function p(){var T;l();const A=(T=i.plugins.browsertab)===null||T===void 0?void 0:T.close;typeof A=="function"&&A(),typeof t?.close=="function"&&t.close()}function g(){f||(f=window.setTimeout(()=>{c(jt(r,"redirect-cancelled-by-user"))},aV))}function v(){document?.visibilityState==="visible"&&g()}e.addPassiveListener(p),document.addEventListener("resume",g,!1),$c()&&document.addEventListener("visibilitychange",v,!1),a=()=>{e.removePassiveListener(p),document.removeEventListener("resume",g,!1),document.removeEventListener("visibilitychange",v,!1),f&&window.clearTimeout(f)}})}finally{a()}}function hV(r){var e,t,i,a,l,c,f,p,g,v;const T=$a();ne(typeof((e=T?.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),ne(typeof((t=T?.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),ne(typeof((l=(a=(i=T?.cordova)===null||i===void 0?void 0:i.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.openUrl)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((p=(f=(c=T?.cordova)===null||c===void 0?void 0:c.plugins)===null||f===void 0?void 0:f.browsertab)===null||p===void 0?void 0:p.isAvailable)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),ne(typeof((v=(g=T?.cordova)===null||g===void 0?void 0:g.InAppBrowser)===null||v===void 0?void 0:v.open)=="function",r,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function dV(r){const e=fV(r),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(a=>a.toString(16).padStart(2,"0")).join("")}function fV(r){if(Si(/[0-9a-zA-Z]+/.test(r),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(r);const e=new ArrayBuffer(r.length),t=new Uint8Array(e);for(let i=0;i<r.length;i++)t[i]=r.charCodeAt(i);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mV=20;class pV extends Vb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function gV(r,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:vV(),postBody:null,tenantId:r.tenantId,error:jt(r,"no-auth-event")}}function _V(r,e){return qg()._set(jg(r),e)}async function tI(r){const e=await qg()._get(jg(r));return e&&await qg()._remove(jg(r)),e}function yV(r,e){var t,i;const a=TV(e);if(a.includes("/__/auth/callback")){const l=Wd(a),c=l.firebaseError?EV(decodeURIComponent(l.firebaseError)):null,f=(i=(t=c?.code)===null||t===void 0?void 0:t.split("auth/"))===null||i===void 0?void 0:i[1],p=f?jt(f):null;return p?{type:r.type,eventId:r.eventId,tenantId:r.tenantId,error:p,urlResponse:null,sessionId:null,postBody:null}:{type:r.type,eventId:r.eventId,tenantId:r.tenantId,sessionId:r.sessionId,urlResponse:a,postBody:null}}return null}function vV(){const r=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<mV;t++){const i=Math.floor(Math.random()*e.length);r.push(e.charAt(i))}return r.join("")}function qg(){return Zn(q_)}function jg(r){return ja("authEvent",r.config.apiKey,r.name)}function EV(r){try{return JSON.parse(r)}catch{return null}}function TV(r){const e=Wd(r),t=e.link?decodeURIComponent(e.link):void 0,i=Wd(t).link,a=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Wd(a).link||a||i||t||r}function Wd(r){if(!r?.includes("?"))return{};const[e,...t]=r.split("?");return dl(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wV=500;class IV{constructor(){this._redirectPersistence=Qa,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Ff,this._overrideRedirectResult=Q_}async _initialize(e){const t=e._key();let i=this.eventManagers.get(t);return i||(i=new pV(e),this.eventManagers.set(t,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){mn(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,i,a){hV(e);const l=await this._initialize(e);await l.initialized(),l.resetRedirect(),_P(),await this._originValidation(e);const c=gV(e,i,a);await _V(e,c);const f=await oV(e,c,t),p=await uV(f);return cV(e,l,p)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=lV(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:i,handleOpenURL:a,BuildInfo:l}=$a(),c=setTimeout(async()=>{await tI(e),t.onEvent(nI())},wV),f=async v=>{clearTimeout(c);const T=await tI(e);let A=null;T&&v?.url&&(A=yV(T,v.url)),t.onEvent(A||nI())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,f);const p=a,g=`${l.packageName.toLowerCase()}://`;$a().handleOpenURL=async v=>{if(v.toLowerCase().startsWith(g)&&f({url:v}),typeof p=="function")try{p(v)}catch(T){console.error(T)}}}}const AV=IV;function nI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:jt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bV(r,e){bt(r)._logFramework(e)}var SV="@firebase/auth-compat",RV="0.5.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CV=1e3;function vc(){var r;return((r=self?.location)===null||r===void 0?void 0:r.protocol)||null}function DV(){return vc()==="http:"||vc()==="https:"}function Lb(r=pt()){return!!((vc()==="file:"||vc()==="ionic:"||vc()==="capacitor:")&&r.toLowerCase().match(/iphone|ipad|ipod|android/))}function NV(){return A_()||I_()}function OV(){return PA()&&document?.documentMode===11}function PV(r=pt()){return/Edge\/\d+/.test(r)}function VV(r=pt()){return OV()||PV(r)}function Ub(){try{const r=self.localStorage,e=Jc();if(r)return r.setItem(e,"1"),r.removeItem(e),VV()?Sc():!0}catch{return $_()&&Sc()}return!1}function $_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Dg(){return(DV()||OA()||Lb())&&!NV()&&Ub()&&!$_()}function zb(){return Lb()&&typeof document<"u"}async function xV(){return zb()?new Promise(r=>{const e=setTimeout(()=>{r(!1)},CV);document.addEventListener("deviceready",()=>{clearTimeout(e),r(!0)})}):!1}function MV(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jn={LOCAL:"local",NONE:"none",SESSION:"session"},nc=ne,Bb="persistence";function kV(r,e){if(nc(Object.values(Jn).includes(e),r,"invalid-persistence-type"),A_()){nc(e!==Jn.SESSION,r,"unsupported-persistence-type");return}if(I_()){nc(e===Jn.NONE,r,"unsupported-persistence-type");return}if($_()){nc(e===Jn.NONE||e===Jn.LOCAL&&Sc(),r,"unsupported-persistence-type");return}nc(e===Jn.NONE||Ub(),r,"unsupported-persistence-type")}async function Gg(r){await r._initializationPromise;const e=Fb(),t=ja(Bb,r.config.apiKey,r.name);e&&e.setItem(t,r._getPersistence())}function LV(r,e){const t=Fb();if(!t)return[];const i=ja(Bb,r,e);switch(t.getItem(i)){case Jn.NONE:return[Il];case Jn.LOCAL:return[xc,Qa];case Jn.SESSION:return[Qa];default:return[]}}function Fb(){var r;try{return((r=MV())===null||r===void 0?void 0:r.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UV=ne;class Vs{constructor(){this.browserResolver=Zn(ZP),this.cordovaResolver=Zn(AV),this.underlyingResolver=null,this._redirectPersistence=Qa,this._completeRedirectFn=Ff,this._overrideRedirectResult=Q_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,i,a)}async _openRedirect(e,t,i,a){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,i,a)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return zb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return UV(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await xV();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qb(r){return r.unwrap()}function zV(r){return r.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BV(r){return jb(r)}function FV(r,e){var t;const i=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if(e?.code==="auth/multi-factor-auth-required"){const a=e;a.resolver=new qV(r,AO(r,e))}else if(i){const a=jb(e),l=e;a&&(l.credential=a,l.tenantId=i.tenantId||void 0,l.email=i.email||void 0,l.phoneNumber=i.phoneNumber||void 0)}}function jb(r){const{_tokenResponse:e}=r instanceof Jt?r.customData:r;if(!e)return null;if(!(r instanceof Jt)&&"temporaryProof"in e&&"phoneNumber"in e)return Ya.credentialFromResult(r);const t=e.providerId;if(!t||t===tc.PASSWORD)return null;let i;switch(t){case tc.GOOGLE:i=Fi;break;case tc.FACEBOOK:i=Bi;break;case tc.GITHUB:i=qi;break;case tc.TWITTER:i=ji;break;default:const{oauthIdToken:a,oauthAccessToken:l,oauthTokenSecret:c,pendingToken:f,nonce:p}=e;return!l&&!c&&!a&&!f?null:f?t.startsWith("saml.")?Al._create(t,f):$i._fromParams({providerId:t,signInMethod:t,pendingToken:f,idToken:a,accessToken:l}):new gl(t).credential({idToken:a,accessToken:l,rawNonce:p})}return r instanceof Jt?i.credentialFromError(r):i.credentialFromResult(r)}function Ln(r,e){return e.catch(t=>{throw t instanceof Jt&&FV(r,t),t}).then(t=>{const i=t.operationType,a=t.user;return{operationType:i,credential:BV(t),additionalUserInfo:IO(t),user:qf.getOrCreate(a)}})}async function Hg(r,e){const t=await e;return{verificationId:t.verificationId,confirm:i=>Ln(r,t.confirm(i))}}class qV{constructor(e,t){this.resolver=t,this.auth=zV(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ln(qb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qf=class dc{constructor(e){this._delegate=e,this.multiFactor=CO(e)}static getOrCreate(e){return dc.USER_MAP.has(e)||dc.USER_MAP.set(e,new dc(e)),dc.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ln(this.auth,_b(this._delegate,e))}async linkWithPhoneNumber(e,t){return Hg(this.auth,rP(this._delegate,e,t))}async linkWithPopup(e){return Ln(this.auth,fP(this._delegate,e,Vs))}async linkWithRedirect(e){return await Gg(bt(this.auth)),wP(this._delegate,e,Vs)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ln(this.auth,yb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return Hg(this.auth,sP(this._delegate,e,t))}reauthenticateWithPopup(e){return Ln(this.auth,dP(this._delegate,e,Vs))}async reauthenticateWithRedirect(e){return await Gg(bt(this.auth)),EP(this._delegate,e,Vs)}sendEmailVerification(e){return dO(this._delegate,e)}async unlink(e){return await J1(this._delegate,e),this}updateEmail(e){return gO(this._delegate,e)}updatePassword(e){return _O(this._delegate,e)}updatePhoneNumber(e){return aP(this._delegate,e)}updateProfile(e){return pO(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return fO(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};qf.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ic=ne;class Kg{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;ic(i,"invalid-api-key",{appName:e.name}),ic(i,"invalid-api-key",{appName:e.name});const a=typeof window<"u"?Vs:void 0;this._delegate=t.initialize({options:{persistence:jV(i,e.name),popupRedirectResolver:a}}),this._delegate._updateErrorMap(GN),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?qf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){C1(this._delegate,e,t)}applyActionCode(e){return iO(this._delegate,e)}checkActionCode(e){return vb(this._delegate,e)}confirmPasswordReset(e,t){return nO(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ln(this._delegate,sO(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return hO(this._delegate,e)}isSignInWithEmailLink(e){return lO(this._delegate,e)}async getRedirectResult(){ic(Dg(),this._delegate,"operation-not-supported-in-this-environment");const e=await AP(this._delegate,Vs);return e?Ln(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){bV(this._delegate,e)}onAuthStateChanged(e,t,i){const{next:a,error:l,complete:c}=iI(e,t,i);return this._delegate.onAuthStateChanged(a,l,c)}onIdTokenChanged(e,t,i){const{next:a,error:l,complete:c}=iI(e,t,i);return this._delegate.onIdTokenChanged(a,l,c)}sendSignInLinkToEmail(e,t){return oO(this._delegate,e,t)}sendPasswordResetEmail(e,t){return tO(this._delegate,e,t||void 0)}async setPersistence(e){kV(this._delegate,e);let t;switch(e){case Jn.SESSION:t=Qa;break;case Jn.LOCAL:t=await Zn(xc)._isAvailable()?xc:q_;break;case Jn.NONE:t=Il;break;default:return mn("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ln(this._delegate,W1(this._delegate))}signInWithCredential(e){return Ln(this._delegate,kf(this._delegate,e))}signInWithCustomToken(e){return Ln(this._delegate,eO(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ln(this._delegate,aO(this._delegate,e,t))}signInWithEmailLink(e,t){return Ln(this._delegate,uO(this._delegate,e,t))}signInWithPhoneNumber(e,t){return Hg(this._delegate,iP(this._delegate,e,t))}async signInWithPopup(e){return ic(Dg(),this._delegate,"operation-not-supported-in-this-environment"),Ln(this._delegate,hP(this._delegate,e,Vs))}async signInWithRedirect(e){return ic(Dg(),this._delegate,"operation-not-supported-in-this-environment"),await Gg(this._delegate),yP(this._delegate,e,Vs)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return rO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Kg.Persistence=Jn;function iI(r,e,t){let i=r;typeof r!="function"&&({next:i,error:e,complete:t}=r);const a=i;return{next:c=>a(c&&qf.getOrCreate(c)),error:e,complete:t}}function jV(r,e){const t=LV(r,e);if(typeof self<"u"&&!t.includes(xc)&&t.push(xc),typeof window<"u")for(const i of[q_,Qa])t.includes(i)||t.push(i);return t.includes(Il)||t.push(Il),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{constructor(){this.providerId="phone",this._delegate=new Ya(qb(zn.auth()))}static credential(e,t){return Ya.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}X_.PHONE_SIGN_IN_METHOD=Ya.PHONE_SIGN_IN_METHOD;X_.PROVIDER_ID=Ya.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GV=ne;class HV{constructor(e,t,i=zn.app()){var a;GV((a=i.options)===null||a===void 0?void 0:a.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new tP(i.auth(),e,t),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KV="auth-compat";function QV(r){r.INTERNAL.registerComponent(new gi(KV,e=>{const t=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Kg(t,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:nl.EMAIL_SIGNIN,PASSWORD_RESET:nl.PASSWORD_RESET,RECOVER_EMAIL:nl.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:nl.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:nl.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:nl.VERIFY_EMAIL}},EmailAuthProvider:$s,FacebookAuthProvider:Bi,GithubAuthProvider:qi,GoogleAuthProvider:Fi,OAuthProvider:gl,SAMLAuthProvider:ff,PhoneAuthProvider:X_,PhoneMultiFactorGenerator:kb,RecaptchaVerifier:HV,TwitterAuthProvider:ji,Auth:Kg,AuthCredential:ql,Error:Jt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),r.registerVersion(SV,RV)}QV(zn);var rI=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ha,Gb;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(R,b){function S(){}S.prototype=b.prototype,R.D=b.prototype,R.prototype=new S,R.prototype.constructor=R,R.C=function(N,V,L){for(var C=Array(arguments.length-2),ct=2;ct<arguments.length;ct++)C[ct-2]=arguments[ct];return b.prototype[V].apply(N,C)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(R,b,S){S||(S=0);var N=Array(16);if(typeof b=="string")for(var V=0;16>V;++V)N[V]=b.charCodeAt(S++)|b.charCodeAt(S++)<<8|b.charCodeAt(S++)<<16|b.charCodeAt(S++)<<24;else for(V=0;16>V;++V)N[V]=b[S++]|b[S++]<<8|b[S++]<<16|b[S++]<<24;b=R.g[0],S=R.g[1],V=R.g[2];var L=R.g[3],C=b+(L^S&(V^L))+N[0]+3614090360&4294967295;b=S+(C<<7&4294967295|C>>>25),C=L+(V^b&(S^V))+N[1]+3905402710&4294967295,L=b+(C<<12&4294967295|C>>>20),C=V+(S^L&(b^S))+N[2]+606105819&4294967295,V=L+(C<<17&4294967295|C>>>15),C=S+(b^V&(L^b))+N[3]+3250441966&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(L^S&(V^L))+N[4]+4118548399&4294967295,b=S+(C<<7&4294967295|C>>>25),C=L+(V^b&(S^V))+N[5]+1200080426&4294967295,L=b+(C<<12&4294967295|C>>>20),C=V+(S^L&(b^S))+N[6]+2821735955&4294967295,V=L+(C<<17&4294967295|C>>>15),C=S+(b^V&(L^b))+N[7]+4249261313&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(L^S&(V^L))+N[8]+1770035416&4294967295,b=S+(C<<7&4294967295|C>>>25),C=L+(V^b&(S^V))+N[9]+2336552879&4294967295,L=b+(C<<12&4294967295|C>>>20),C=V+(S^L&(b^S))+N[10]+4294925233&4294967295,V=L+(C<<17&4294967295|C>>>15),C=S+(b^V&(L^b))+N[11]+2304563134&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(L^S&(V^L))+N[12]+1804603682&4294967295,b=S+(C<<7&4294967295|C>>>25),C=L+(V^b&(S^V))+N[13]+4254626195&4294967295,L=b+(C<<12&4294967295|C>>>20),C=V+(S^L&(b^S))+N[14]+2792965006&4294967295,V=L+(C<<17&4294967295|C>>>15),C=S+(b^V&(L^b))+N[15]+1236535329&4294967295,S=V+(C<<22&4294967295|C>>>10),C=b+(V^L&(S^V))+N[1]+4129170786&4294967295,b=S+(C<<5&4294967295|C>>>27),C=L+(S^V&(b^S))+N[6]+3225465664&4294967295,L=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(L^b))+N[11]+643717713&4294967295,V=L+(C<<14&4294967295|C>>>18),C=S+(L^b&(V^L))+N[0]+3921069994&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^L&(S^V))+N[5]+3593408605&4294967295,b=S+(C<<5&4294967295|C>>>27),C=L+(S^V&(b^S))+N[10]+38016083&4294967295,L=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(L^b))+N[15]+3634488961&4294967295,V=L+(C<<14&4294967295|C>>>18),C=S+(L^b&(V^L))+N[4]+3889429448&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^L&(S^V))+N[9]+568446438&4294967295,b=S+(C<<5&4294967295|C>>>27),C=L+(S^V&(b^S))+N[14]+3275163606&4294967295,L=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(L^b))+N[3]+4107603335&4294967295,V=L+(C<<14&4294967295|C>>>18),C=S+(L^b&(V^L))+N[8]+1163531501&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(V^L&(S^V))+N[13]+2850285829&4294967295,b=S+(C<<5&4294967295|C>>>27),C=L+(S^V&(b^S))+N[2]+4243563512&4294967295,L=b+(C<<9&4294967295|C>>>23),C=V+(b^S&(L^b))+N[7]+1735328473&4294967295,V=L+(C<<14&4294967295|C>>>18),C=S+(L^b&(V^L))+N[12]+2368359562&4294967295,S=V+(C<<20&4294967295|C>>>12),C=b+(S^V^L)+N[5]+4294588738&4294967295,b=S+(C<<4&4294967295|C>>>28),C=L+(b^S^V)+N[8]+2272392833&4294967295,L=b+(C<<11&4294967295|C>>>21),C=V+(L^b^S)+N[11]+1839030562&4294967295,V=L+(C<<16&4294967295|C>>>16),C=S+(V^L^b)+N[14]+4259657740&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^L)+N[1]+2763975236&4294967295,b=S+(C<<4&4294967295|C>>>28),C=L+(b^S^V)+N[4]+1272893353&4294967295,L=b+(C<<11&4294967295|C>>>21),C=V+(L^b^S)+N[7]+4139469664&4294967295,V=L+(C<<16&4294967295|C>>>16),C=S+(V^L^b)+N[10]+3200236656&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^L)+N[13]+681279174&4294967295,b=S+(C<<4&4294967295|C>>>28),C=L+(b^S^V)+N[0]+3936430074&4294967295,L=b+(C<<11&4294967295|C>>>21),C=V+(L^b^S)+N[3]+3572445317&4294967295,V=L+(C<<16&4294967295|C>>>16),C=S+(V^L^b)+N[6]+76029189&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(S^V^L)+N[9]+3654602809&4294967295,b=S+(C<<4&4294967295|C>>>28),C=L+(b^S^V)+N[12]+3873151461&4294967295,L=b+(C<<11&4294967295|C>>>21),C=V+(L^b^S)+N[15]+530742520&4294967295,V=L+(C<<16&4294967295|C>>>16),C=S+(V^L^b)+N[2]+3299628645&4294967295,S=V+(C<<23&4294967295|C>>>9),C=b+(V^(S|~L))+N[0]+4096336452&4294967295,b=S+(C<<6&4294967295|C>>>26),C=L+(S^(b|~V))+N[7]+1126891415&4294967295,L=b+(C<<10&4294967295|C>>>22),C=V+(b^(L|~S))+N[14]+2878612391&4294967295,V=L+(C<<15&4294967295|C>>>17),C=S+(L^(V|~b))+N[5]+4237533241&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~L))+N[12]+1700485571&4294967295,b=S+(C<<6&4294967295|C>>>26),C=L+(S^(b|~V))+N[3]+2399980690&4294967295,L=b+(C<<10&4294967295|C>>>22),C=V+(b^(L|~S))+N[10]+4293915773&4294967295,V=L+(C<<15&4294967295|C>>>17),C=S+(L^(V|~b))+N[1]+2240044497&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~L))+N[8]+1873313359&4294967295,b=S+(C<<6&4294967295|C>>>26),C=L+(S^(b|~V))+N[15]+4264355552&4294967295,L=b+(C<<10&4294967295|C>>>22),C=V+(b^(L|~S))+N[6]+2734768916&4294967295,V=L+(C<<15&4294967295|C>>>17),C=S+(L^(V|~b))+N[13]+1309151649&4294967295,S=V+(C<<21&4294967295|C>>>11),C=b+(V^(S|~L))+N[4]+4149444226&4294967295,b=S+(C<<6&4294967295|C>>>26),C=L+(S^(b|~V))+N[11]+3174756917&4294967295,L=b+(C<<10&4294967295|C>>>22),C=V+(b^(L|~S))+N[2]+718787259&4294967295,V=L+(C<<15&4294967295|C>>>17),C=S+(L^(V|~b))+N[9]+3951481745&4294967295,R.g[0]=R.g[0]+b&4294967295,R.g[1]=R.g[1]+(V+(C<<21&4294967295|C>>>11))&4294967295,R.g[2]=R.g[2]+V&4294967295,R.g[3]=R.g[3]+L&4294967295}i.prototype.u=function(R,b){b===void 0&&(b=R.length);for(var S=b-this.blockSize,N=this.B,V=this.h,L=0;L<b;){if(V==0)for(;L<=S;)a(this,R,L),L+=this.blockSize;if(typeof R=="string"){for(;L<b;)if(N[V++]=R.charCodeAt(L++),V==this.blockSize){a(this,N),V=0;break}}else for(;L<b;)if(N[V++]=R[L++],V==this.blockSize){a(this,N),V=0;break}}this.h=V,this.o+=b},i.prototype.v=function(){var R=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);R[0]=128;for(var b=1;b<R.length-8;++b)R[b]=0;var S=8*this.o;for(b=R.length-8;b<R.length;++b)R[b]=S&255,S/=256;for(this.u(R),R=Array(16),b=S=0;4>b;++b)for(var N=0;32>N;N+=8)R[S++]=this.g[b]>>>N&255;return R};function l(R,b){var S=f;return Object.prototype.hasOwnProperty.call(S,R)?S[R]:S[R]=b(R)}function c(R,b){this.h=b;for(var S=[],N=!0,V=R.length-1;0<=V;V--){var L=R[V]|0;N&&L==b||(S[V]=L,N=!1)}this.g=S}var f={};function p(R){return-128<=R&&128>R?l(R,function(b){return new c([b|0],0>b?-1:0)}):new c([R|0],0>R?-1:0)}function g(R){if(isNaN(R)||!isFinite(R))return T;if(0>R)return $(g(-R));for(var b=[],S=1,N=0;R>=S;N++)b[N]=R/S|0,S*=4294967296;return new c(b,0)}function v(R,b){if(R.length==0)throw Error("number format error: empty string");if(b=b||10,2>b||36<b)throw Error("radix out of range: "+b);if(R.charAt(0)=="-")return $(v(R.substring(1),b));if(0<=R.indexOf("-"))throw Error('number format error: interior "-" character');for(var S=g(Math.pow(b,8)),N=T,V=0;V<R.length;V+=8){var L=Math.min(8,R.length-V),C=parseInt(R.substring(V,V+L),b);8>L?(L=g(Math.pow(b,L)),N=N.j(L).add(g(C))):(N=N.j(S),N=N.add(g(C)))}return N}var T=p(0),A=p(1),P=p(16777216);r=c.prototype,r.m=function(){if(Q(this))return-$(this).m();for(var R=0,b=1,S=0;S<this.g.length;S++){var N=this.i(S);R+=(0<=N?N:4294967296+N)*b,b*=4294967296}return R},r.toString=function(R){if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(G(this))return"0";if(Q(this))return"-"+$(this).toString(R);for(var b=g(Math.pow(R,6)),S=this,N="";;){var V=ve(S,b).g;S=le(S,V.j(b));var L=((0<S.g.length?S.g[0]:S.h)>>>0).toString(R);if(S=V,G(S))return L+N;for(;6>L.length;)L="0"+L;N=L+N}},r.i=function(R){return 0>R?0:R<this.g.length?this.g[R]:this.h};function G(R){if(R.h!=0)return!1;for(var b=0;b<R.g.length;b++)if(R.g[b]!=0)return!1;return!0}function Q(R){return R.h==-1}r.l=function(R){return R=le(this,R),Q(R)?-1:G(R)?0:1};function $(R){for(var b=R.g.length,S=[],N=0;N<b;N++)S[N]=~R.g[N];return new c(S,~R.h).add(A)}r.abs=function(){return Q(this)?$(this):this},r.add=function(R){for(var b=Math.max(this.g.length,R.g.length),S=[],N=0,V=0;V<=b;V++){var L=N+(this.i(V)&65535)+(R.i(V)&65535),C=(L>>>16)+(this.i(V)>>>16)+(R.i(V)>>>16);N=C>>>16,L&=65535,C&=65535,S[V]=C<<16|L}return new c(S,S[S.length-1]&-2147483648?-1:0)};function le(R,b){return R.add($(b))}r.j=function(R){if(G(this)||G(R))return T;if(Q(this))return Q(R)?$(this).j($(R)):$($(this).j(R));if(Q(R))return $(this.j($(R)));if(0>this.l(P)&&0>R.l(P))return g(this.m()*R.m());for(var b=this.g.length+R.g.length,S=[],N=0;N<2*b;N++)S[N]=0;for(N=0;N<this.g.length;N++)for(var V=0;V<R.g.length;V++){var L=this.i(N)>>>16,C=this.i(N)&65535,ct=R.i(V)>>>16,yt=R.i(V)&65535;S[2*N+2*V]+=C*yt,he(S,2*N+2*V),S[2*N+2*V+1]+=L*yt,he(S,2*N+2*V+1),S[2*N+2*V+1]+=C*ct,he(S,2*N+2*V+1),S[2*N+2*V+2]+=L*ct,he(S,2*N+2*V+2)}for(N=0;N<b;N++)S[N]=S[2*N+1]<<16|S[2*N];for(N=b;N<2*b;N++)S[N]=0;return new c(S,0)};function he(R,b){for(;(R[b]&65535)!=R[b];)R[b+1]+=R[b]>>>16,R[b]&=65535,b++}function re(R,b){this.g=R,this.h=b}function ve(R,b){if(G(b))throw Error("division by zero");if(G(R))return new re(T,T);if(Q(R))return b=ve($(R),b),new re($(b.g),$(b.h));if(Q(b))return b=ve(R,$(b)),new re($(b.g),b.h);if(30<R.g.length){if(Q(R)||Q(b))throw Error("slowDivide_ only works with positive integers.");for(var S=A,N=b;0>=N.l(R);)S=de(S),N=de(N);var V=ue(S,1),L=ue(N,1);for(N=ue(N,2),S=ue(S,2);!G(N);){var C=L.add(N);0>=C.l(R)&&(V=V.add(S),L=C),N=ue(N,1),S=ue(S,1)}return b=le(R,V.j(b)),new re(V,b)}for(V=T;0<=R.l(b);){for(S=Math.max(1,Math.floor(R.m()/b.m())),N=Math.ceil(Math.log(S)/Math.LN2),N=48>=N?1:Math.pow(2,N-48),L=g(S),C=L.j(b);Q(C)||0<C.l(R);)S-=N,L=g(S),C=L.j(b);G(L)&&(L=A),V=V.add(L),R=le(R,C)}return new re(V,R)}r.A=function(R){return ve(this,R).h},r.and=function(R){for(var b=Math.max(this.g.length,R.g.length),S=[],N=0;N<b;N++)S[N]=this.i(N)&R.i(N);return new c(S,this.h&R.h)},r.or=function(R){for(var b=Math.max(this.g.length,R.g.length),S=[],N=0;N<b;N++)S[N]=this.i(N)|R.i(N);return new c(S,this.h|R.h)},r.xor=function(R){for(var b=Math.max(this.g.length,R.g.length),S=[],N=0;N<b;N++)S[N]=this.i(N)^R.i(N);return new c(S,this.h^R.h)};function de(R){for(var b=R.g.length+1,S=[],N=0;N<b;N++)S[N]=R.i(N)<<1|R.i(N-1)>>>31;return new c(S,R.h)}function ue(R,b){var S=b>>5;b%=32;for(var N=R.g.length-S,V=[],L=0;L<N;L++)V[L]=0<b?R.i(L+S)>>>b|R.i(L+S+1)<<32-b:R.i(L+S);return new c(V,R.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Gb=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=v,Ha=c}).apply(typeof rI<"u"?rI:typeof self<"u"?self:typeof window<"u"?window:{});var qd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Hb,Kb,fc,Qb,Jd,Qg,Yb,$b,Xb;(function(){var r,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(h,_,E){return h==Array.prototype||h==Object.prototype||(h[_]=E.value),h};function t(h){h=[typeof globalThis=="object"&&globalThis,h,typeof window=="object"&&window,typeof self=="object"&&self,typeof qd=="object"&&qd];for(var _=0;_<h.length;++_){var E=h[_];if(E&&E.Math==Math)return E}throw Error("Cannot find global object")}var i=t(this);function a(h,_){if(_)e:{var E=i;h=h.split(".");for(var I=0;I<h.length-1;I++){var U=h[I];if(!(U in E))break e;E=E[U]}h=h[h.length-1],I=E[h],_=_(I),_!=I&&_!=null&&e(E,h,{configurable:!0,writable:!0,value:_})}}function l(h,_){h instanceof String&&(h+="");var E=0,I=!1,U={next:function(){if(!I&&E<h.length){var K=E++;return{value:_(K,h[K]),done:!1}}return I=!0,{done:!0,value:void 0}}};return U[Symbol.iterator]=function(){return U},U}a("Array.prototype.values",function(h){return h||function(){return l(this,function(_,E){return E})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},f=this||self;function p(h){var _=typeof h;return _=_!="object"?_:h?Array.isArray(h)?"array":_:"null",_=="array"||_=="object"&&typeof h.length=="number"}function g(h){var _=typeof h;return _=="object"&&h!=null||_=="function"}function v(h,_,E){return h.call.apply(h.bind,arguments)}function T(h,_,E){if(!h)throw Error();if(2<arguments.length){var I=Array.prototype.slice.call(arguments,2);return function(){var U=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(U,I),h.apply(_,U)}}return function(){return h.apply(_,arguments)}}function A(h,_,E){return A=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?v:T,A.apply(null,arguments)}function P(h,_){var E=Array.prototype.slice.call(arguments,1);return function(){var I=E.slice();return I.push.apply(I,arguments),h.apply(this,I)}}function G(h,_){function E(){}E.prototype=_.prototype,h.aa=_.prototype,h.prototype=new E,h.prototype.constructor=h,h.Qb=function(I,U,K){for(var se=Array(arguments.length-2),Xe=2;Xe<arguments.length;Xe++)se[Xe-2]=arguments[Xe];return _.prototype[U].apply(I,se)}}function Q(h){const _=h.length;if(0<_){const E=Array(_);for(let I=0;I<_;I++)E[I]=h[I];return E}return[]}function $(h,_){for(let E=1;E<arguments.length;E++){const I=arguments[E];if(p(I)){const U=h.length||0,K=I.length||0;h.length=U+K;for(let se=0;se<K;se++)h[U+se]=I[se]}else h.push(I)}}class le{constructor(_,E){this.i=_,this.j=E,this.h=0,this.g=null}get(){let _;return 0<this.h?(this.h--,_=this.g,this.g=_.next,_.next=null):_=this.i(),_}}function he(h){return/^[\s\xa0]*$/.test(h)}function re(){var h=f.navigator;return h&&(h=h.userAgent)?h:""}function ve(h){return ve[" "](h),h}ve[" "]=function(){};var de=re().indexOf("Gecko")!=-1&&!(re().toLowerCase().indexOf("webkit")!=-1&&re().indexOf("Edge")==-1)&&!(re().indexOf("Trident")!=-1||re().indexOf("MSIE")!=-1)&&re().indexOf("Edge")==-1;function ue(h,_,E){for(const I in h)_.call(E,h[I],I,h)}function R(h,_){for(const E in h)_.call(void 0,h[E],E,h)}function b(h){const _={};for(const E in h)_[E]=h[E];return _}const S="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function N(h,_){let E,I;for(let U=1;U<arguments.length;U++){I=arguments[U];for(E in I)h[E]=I[E];for(let K=0;K<S.length;K++)E=S[K],Object.prototype.hasOwnProperty.call(I,E)&&(h[E]=I[E])}}function V(h){var _=1;h=h.split(":");const E=[];for(;0<_&&h.length;)E.push(h.shift()),_--;return h.length&&E.push(h.join(":")),E}function L(h){f.setTimeout(()=>{throw h},0)}function C(){var h=Ge;let _=null;return h.g&&(_=h.g,h.g=h.g.next,h.g||(h.h=null),_.next=null),_}class ct{constructor(){this.h=this.g=null}add(_,E){const I=yt.get();I.set(_,E),this.h?this.h.next=I:this.g=I,this.h=I}}var yt=new le(()=>new X,h=>h.reset());class X{constructor(){this.next=this.g=this.h=null}set(_,E){this.h=_,this.g=E,this.next=null}reset(){this.next=this.g=this.h=null}}let ae,we=!1,Ge=new ct,$e=()=>{const h=f.Promise.resolve(void 0);ae=()=>{h.then(x)}};var x=()=>{for(var h;h=C();){try{h.h.call(h.g)}catch(E){L(E)}var _=yt;_.j(h),100>_.h&&(_.h++,h.next=_.g,_.g=h)}we=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ie(h,_){this.type=h,this.g=this.target=_,this.defaultPrevented=!1}ie.prototype.h=function(){this.defaultPrevented=!0};var pe=(function(){if(!f.addEventListener||!Object.defineProperty)return!1;var h=!1,_=Object.defineProperty({},"passive",{get:function(){h=!0}});try{const E=()=>{};f.addEventListener("test",E,_),f.removeEventListener("test",E,_)}catch{}return h})();function be(h,_){if(ie.call(this,h?h.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,h){var E=this.type=h.type,I=h.changedTouches&&h.changedTouches.length?h.changedTouches[0]:null;if(this.target=h.target||h.srcElement,this.g=_,_=h.relatedTarget){if(de){e:{try{ve(_.nodeName);var U=!0;break e}catch{}U=!1}U||(_=null)}}else E=="mouseover"?_=h.fromElement:E=="mouseout"&&(_=h.toElement);this.relatedTarget=_,I?(this.clientX=I.clientX!==void 0?I.clientX:I.pageX,this.clientY=I.clientY!==void 0?I.clientY:I.pageY,this.screenX=I.screenX||0,this.screenY=I.screenY||0):(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0),this.button=h.button,this.key=h.key||"",this.ctrlKey=h.ctrlKey,this.altKey=h.altKey,this.shiftKey=h.shiftKey,this.metaKey=h.metaKey,this.pointerId=h.pointerId||0,this.pointerType=typeof h.pointerType=="string"?h.pointerType:Oe[h.pointerType]||"",this.state=h.state,this.i=h,h.defaultPrevented&&be.aa.h.call(this)}}G(be,ie);var Oe={2:"touch",3:"pen",4:"mouse"};be.prototype.h=function(){be.aa.h.call(this);var h=this.i;h.preventDefault?h.preventDefault():h.returnValue=!1};var Be="closure_listenable_"+(1e6*Math.random()|0),rn=0;function gt(h,_,E,I,U){this.listener=h,this.proxy=null,this.src=_,this.type=E,this.capture=!!I,this.ha=U,this.key=++rn,this.da=this.fa=!1}function Ci(h){h.da=!0,h.listener=null,h.proxy=null,h.src=null,h.ha=null}function Ji(h){this.src=h,this.g={},this.h=0}Ji.prototype.add=function(h,_,E,I,U){var K=h.toString();h=this.g[K],h||(h=this.g[K]=[],this.h++);var se=fo(h,_,I,U);return-1<se?(_=h[se],E||(_.fa=!1)):(_=new gt(_,this.src,K,!!I,U),_.fa=E,h.push(_)),_};function ea(h,_){var E=_.type;if(E in h.g){var I=h.g[E],U=Array.prototype.indexOf.call(I,_,void 0),K;(K=0<=U)&&Array.prototype.splice.call(I,U,1),K&&(Ci(_),h.g[E].length==0&&(delete h.g[E],h.h--))}}function fo(h,_,E,I){for(var U=0;U<h.length;++U){var K=h[U];if(!K.da&&K.listener==_&&K.capture==!!E&&K.ha==I)return U}return-1}var yi="closure_lm_"+(1e6*Math.random()|0),ta={};function mo(h,_,E,I,U){if(Array.isArray(_)){for(var K=0;K<_.length;K++)mo(h,_[K],E,I,U);return null}return E=mh(E),h&&h[Be]?h.K(_,E,g(I)?!!I.capture:!1,U):hm(h,_,E,!1,I,U)}function hm(h,_,E,I,U,K){if(!_)throw Error("Invalid event type");var se=g(U)?!!U.capture:!!U,Xe=Jl(h);if(Xe||(h[yi]=Xe=new Ji(h)),E=Xe.add(_,E,I,se,K),E.proxy)return E;if(I=fh(),E.proxy=I,I.src=h,I.listener=E,h.addEventListener)pe||(U=se),U===void 0&&(U=!1),h.addEventListener(_.toString(),I,U);else if(h.attachEvent)h.attachEvent(go(_.toString()),I);else if(h.addListener&&h.removeListener)h.addListener(I);else throw Error("addEventListener and attachEvent are unavailable.");return E}function fh(){function h(E){return _.call(h.src,h.listener,E)}const _=dm;return h}function po(h,_,E,I,U){if(Array.isArray(_))for(var K=0;K<_.length;K++)po(h,_[K],E,I,U);else I=g(I)?!!I.capture:!!I,E=mh(E),h&&h[Be]?(h=h.i,_=String(_).toString(),_ in h.g&&(K=h.g[_],E=fo(K,E,I,U),-1<E&&(Ci(K[E]),Array.prototype.splice.call(K,E,1),K.length==0&&(delete h.g[_],h.h--)))):h&&(h=Jl(h))&&(_=h.g[_.toString()],h=-1,_&&(h=fo(_,E,I,U)),(E=-1<h?_[h]:null)&&na(E))}function na(h){if(typeof h!="number"&&h&&!h.da){var _=h.src;if(_&&_[Be])ea(_.i,h);else{var E=h.type,I=h.proxy;_.removeEventListener?_.removeEventListener(E,I,h.capture):_.detachEvent?_.detachEvent(go(E),I):_.addListener&&_.removeListener&&_.removeListener(I),(E=Jl(_))?(ea(E,h),E.h==0&&(E.src=null,_[yi]=null)):Ci(h)}}}function go(h){return h in ta?ta[h]:ta[h]="on"+h}function dm(h,_){if(h.da)h=!0;else{_=new be(_,this);var E=h.listener,I=h.ha||h.src;h.fa&&na(h),h=E.call(I,_)}return h}function Jl(h){return h=h[yi],h instanceof Ji?h:null}var sn="__closure_events_fn_"+(1e9*Math.random()>>>0);function mh(h){return typeof h=="function"?h:(h[sn]||(h[sn]=function(_){return h.handleEvent(_)}),h[sn])}function Ft(){W.call(this),this.i=new Ji(this),this.M=this,this.F=null}G(Ft,W),Ft.prototype[Be]=!0,Ft.prototype.removeEventListener=function(h,_,E,I){po(this,h,_,E,I)};function Ht(h,_){var E,I=h.F;if(I)for(E=[];I;I=I.F)E.push(I);if(h=h.M,I=_.type||_,typeof _=="string")_=new ie(_,h);else if(_ instanceof ie)_.target=_.target||h;else{var U=_;_=new ie(I,h),N(_,U)}if(U=!0,E)for(var K=E.length-1;0<=K;K--){var se=_.g=E[K];U=Zi(se,I,!0,_)&&U}if(se=_.g=h,U=Zi(se,I,!0,_)&&U,U=Zi(se,I,!1,_)&&U,E)for(K=0;K<E.length;K++)se=_.g=E[K],U=Zi(se,I,!1,_)&&U}Ft.prototype.N=function(){if(Ft.aa.N.call(this),this.i){var h=this.i,_;for(_ in h.g){for(var E=h.g[_],I=0;I<E.length;I++)Ci(E[I]);delete h.g[_],h.h--}}this.F=null},Ft.prototype.K=function(h,_,E,I){return this.i.add(String(h),_,!1,E,I)},Ft.prototype.L=function(h,_,E,I){return this.i.add(String(h),_,!0,E,I)};function Zi(h,_,E,I){if(_=h.i.g[String(_)],!_)return!0;_=_.concat();for(var U=!0,K=0;K<_.length;++K){var se=_[K];if(se&&!se.da&&se.capture==E){var Xe=se.listener,xt=se.ha||se.src;se.fa&&ea(h.i,se),U=Xe.call(xt,I)!==!1&&U}}return U&&!I.defaultPrevented}function ph(h,_,E){if(typeof h=="function")E&&(h=A(h,E));else if(h&&typeof h.handleEvent=="function")h=A(h.handleEvent,h);else throw Error("Invalid listener argument");return 2147483647<Number(_)?-1:f.setTimeout(h,_||0)}function Zl(h){h.g=ph(()=>{h.g=null,h.i&&(h.i=!1,Zl(h))},h.l);const _=h.h;h.h=null,h.m.apply(null,_)}class fm extends W{constructor(_,E){super(),this.m=_,this.l=E,this.h=null,this.i=!1,this.g=null}j(_){this.h=arguments,this.g?this.i=!0:Zl(this)}N(){super.N(),this.g&&(f.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ia(h){W.call(this),this.h=h,this.g={}}G(ia,W);var zr=[];function pn(h){ue(h.g,function(_,E){this.g.hasOwnProperty(E)&&na(_)},h),h.g={}}ia.prototype.N=function(){ia.aa.N.call(this),pn(this)},ia.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var ni=f.JSON.stringify,vn=f.JSON.parse,mm=class{stringify(h){return f.JSON.stringify(h,void 0)}parse(h){return f.JSON.parse(h,void 0)}};function eu(){}eu.prototype.h=null;function gh(h){return h.h||(h.h=h.i())}function ra(){}var Di={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Br(){ie.call(this,"d")}G(Br,ie);function vi(){ie.call(this,"c")}G(vi,ie);var ii={},Fr=null;function _o(){return Fr=Fr||new Ft}ii.La="serverreachability";function tu(h){ie.call(this,ii.La,h)}G(tu,ie);function er(h){const _=_o();Ht(_,new tu(_))}ii.STAT_EVENT="statevent";function qr(h,_){ie.call(this,ii.STAT_EVENT,h),this.stat=_}G(qr,ie);function an(h){const _=_o();Ht(_,new qr(_,h))}ii.Ma="timingevent";function nu(h,_){ie.call(this,ii.Ma,h),this.size=_}G(nu,ie);function jr(h,_){if(typeof h!="function")throw Error("Fn must not be null and must be a function");return f.setTimeout(function(){h()},_)}function Gr(){this.g=!0}Gr.prototype.xa=function(){this.g=!1};function iu(h,_,E,I,U,K){h.info(function(){if(h.g)if(K)for(var se="",Xe=K.split("&"),xt=0;xt<Xe.length;xt++){var Pe=Xe[xt].split("=");if(1<Pe.length){var Qt=Pe[0];Pe=Pe[1];var Yt=Qt.split("_");se=2<=Yt.length&&Yt[1]=="type"?se+(Qt+"="+Pe+"&"):se+(Qt+"=redacted&")}}else se=null;else se=K;return"XMLHTTP REQ ("+I+") [attempt "+U+"]: "+_+`
`+E+`
`+se})}function ru(h,_,E,I,U,K,se){h.info(function(){return"XMLHTTP RESP ("+I+") [ attempt "+U+"]: "+_+`
`+E+`
`+K+" "+se})}function tr(h,_,E,I){h.info(function(){return"XMLHTTP TEXT ("+_+"): "+Ni(h,E)+(I?" "+I:"")})}function _h(h,_){h.info(function(){return"TIMEOUT: "+_})}Gr.prototype.info=function(){};function Ni(h,_){if(!h.g)return _;if(!_)return null;try{var E=JSON.parse(_);if(E){for(h=0;h<E.length;h++)if(Array.isArray(E[h])){var I=E[h];if(!(2>I.length)){var U=I[1];if(Array.isArray(U)&&!(1>U.length)){var K=U[0];if(K!="noop"&&K!="stop"&&K!="close")for(var se=1;se<U.length;se++)U[se]=""}}}}return ni(E)}catch{return _}}var vt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},on={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Oi;function Hr(){}G(Hr,eu),Hr.prototype.g=function(){return new XMLHttpRequest},Hr.prototype.i=function(){return{}},Oi=new Hr;function Pi(h,_,E,I){this.j=h,this.i=_,this.l=E,this.R=I||1,this.U=new ia(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new yh}function yh(){this.i=null,this.g="",this.h=!1}var su={},nr={};function sa(h,_,E){h.L=1,h.v=la(Et(_)),h.m=E,h.P=!0,ir(h,null)}function ir(h,_){h.F=Date.now(),Ei(h),h.A=Et(h.v);var E=h.A,I=h.R;Array.isArray(I)||(I=[String(I)]),ar(E.i,"t",I),h.C=0,E=h.j.J,h.h=new yh,h.g=xh(h.j,E?_:null,!h.m),0<h.O&&(h.M=new fm(A(h.Y,h,h.g),h.O)),_=h.U,E=h.g,I=h.ca;var U="readystatechange";Array.isArray(U)||(U&&(zr[0]=U.toString()),U=zr);for(var K=0;K<U.length;K++){var se=mo(E,U[K],I||_.handleEvent,!1,_.h||_);if(!se)break;_.g[se.key]=se}_=h.H?b(h.H):{},h.m?(h.u||(h.u="POST"),_["Content-Type"]="application/x-www-form-urlencoded",h.g.ea(h.A,h.u,h.m,_)):(h.u="GET",h.g.ea(h.A,h.u,null,_)),er(),iu(h.i,h.u,h.A,h.l,h.R,h.m)}Pi.prototype.ca=function(h){h=h.target;const _=this.M;_&&wn(h)==3?_.j():this.Y(h)},Pi.prototype.Y=function(h){try{if(h==this.g)e:{const Yt=wn(this.g);var _=this.g.Ba();const rs=this.g.Z();if(!(3>Yt)&&(Yt!=3||this.g&&(this.h.h||this.g.oa()||ha(this.g)))){this.J||Yt!=4||_==7||(_==8||0>=rs?er(3):er(2)),yo(this);var E=this.g.Z();this.X=E;t:if(rr(this)){var I=ha(this.g);h="";var U=I.length,K=wn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){En(this),Kr(this);var se="";break t}this.h.i=new f.TextDecoder}for(_=0;_<U;_++)this.h.h=!0,h+=this.h.i.decode(I[_],{stream:!(K&&_==U-1)});I.length=0,this.h.g+=h,this.C=0,se=this.h.g}else se=this.g.oa();if(this.o=E==200,ru(this.i,this.u,this.A,this.l,this.R,Yt,E),this.o){if(this.T&&!this.K){t:{if(this.g){var Xe,xt=this.g;if((Xe=xt.g?xt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!he(Xe)){var Pe=Xe;break t}}Pe=null}if(E=Pe)tr(this.i,this.l,E,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Vi(this,E);else{this.o=!1,this.s=3,an(12),En(this),Kr(this);break e}}if(this.P){E=!0;let On;for(;!this.J&&this.C<se.length;)if(On=aa(this,se),On==nr){Yt==4&&(this.s=4,an(14),E=!1),tr(this.i,this.l,null,"[Incomplete Response]");break}else if(On==su){this.s=4,an(15),tr(this.i,this.l,se,"[Invalid Chunk]"),E=!1;break}else tr(this.i,this.l,On,null),Vi(this,On);if(rr(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Yt!=4||se.length!=0||this.h.h||(this.s=1,an(16),E=!1),this.o=this.o&&E,!E)tr(this.i,this.l,se,"[Invalid Chunked Response]"),En(this),Kr(this);else if(0<se.length&&!this.W){this.W=!0;var Qt=this.j;Qt.g==this&&Qt.ba&&!Qt.M&&(Qt.j.info("Great, no buffering proxy detected. Bytes received: "+se.length),gu(Qt),Qt.M=!0,an(11))}}else tr(this.i,this.l,se,null),Vi(this,se);Yt==4&&En(this),this.o&&!this.J&&(Yt==4?Oh(this.j,this):(this.o=!1,Ei(this)))}else bh(this.g),E==400&&0<se.indexOf("Unknown SID")?(this.s=3,an(12)):(this.s=0,an(13)),En(this),Kr(this)}}}catch{}finally{}};function rr(h){return h.g?h.u=="GET"&&h.L!=2&&h.j.Ca:!1}function aa(h,_){var E=h.C,I=_.indexOf(`
`,E);return I==-1?nr:(E=Number(_.substring(E,I)),isNaN(E)?su:(I+=1,I+E>_.length?nr:(_=_.slice(I,I+E),h.C=I+E,_)))}Pi.prototype.cancel=function(){this.J=!0,En(this)};function Ei(h){h.S=Date.now()+h.I,Dt(h,h.I)}function Dt(h,_){if(h.B!=null)throw Error("WatchDog timer not null");h.B=jr(A(h.ba,h),_)}function yo(h){h.B&&(f.clearTimeout(h.B),h.B=null)}Pi.prototype.ba=function(){this.B=null;const h=Date.now();0<=h-this.S?(_h(this.i,this.A),this.L!=2&&(er(),an(17)),En(this),this.s=2,Kr(this)):Dt(this,this.S-h)};function Kr(h){h.j.G==0||h.J||Oh(h.j,h)}function En(h){yo(h);var _=h.M;_&&typeof _.ma=="function"&&_.ma(),h.M=null,pn(h.U),h.g&&(_=h.g,h.g=null,_.abort(),_.ma())}function Vi(h,_){try{var E=h.j;if(E.G!=0&&(E.g==h||Qr(E.h,h))){if(!h.K&&Qr(E.h,h)&&E.G==3){try{var I=E.Da.g.parse(_)}catch{I=null}if(Array.isArray(I)&&I.length==3){var U=I;if(U[0]==0){e:if(!E.u){if(E.g)if(E.g.F+3e3<h.F)ns(E),ts(E);else break e;pu(E),an(18)}}else E.za=U[1],0<E.za-E.T&&37500>U[2]&&E.F&&E.v==0&&!E.C&&(E.C=jr(A(E.Za,E),6e3));if(1>=vh(E.h)&&E.ca){try{E.ca()}catch{}E.ca=void 0}}else lr(E,11)}else if((h.K||E.g==h)&&ns(E),!he(_))for(U=E.Da.g.parse(_),_=0;_<U.length;_++){let Pe=U[_];if(E.T=Pe[0],Pe=Pe[1],E.G==2)if(Pe[0]=="c"){E.K=Pe[1],E.ia=Pe[2];const Qt=Pe[3];Qt!=null&&(E.la=Qt,E.j.info("VER="+E.la));const Yt=Pe[4];Yt!=null&&(E.Aa=Yt,E.j.info("SVER="+E.Aa));const rs=Pe[5];rs!=null&&typeof rs=="number"&&0<rs&&(I=1.5*rs,E.L=I,E.j.info("backChannelRequestTimeoutMs_="+I)),I=E;const On=h.g;if(On){const ma=On.g?On.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ma){var K=I.h;K.g||ma.indexOf("spdy")==-1&&ma.indexOf("quic")==-1&&ma.indexOf("h2")==-1||(K.j=K.l,K.g=new Set,K.h&&(Yr(K,K.h),K.h=null))}if(I.D){const ur=On.g?On.g.getResponseHeader("X-HTTP-Session-Id"):null;ur&&(I.ya=ur,He(I.I,I.D,ur))}}E.G=3,E.l&&E.l.ua(),E.ba&&(E.R=Date.now()-h.F,E.j.info("Handshake RTT: "+E.R+"ms")),I=E;var se=h;if(I.qa=Vh(I,I.J?I.ia:null,I.W),se.K){ri(I.h,se);var Xe=se,xt=I.L;xt&&(Xe.I=xt),Xe.B&&(yo(Xe),Ei(Xe)),I.g=se}else Dh(I);0<E.i.length&&So(E)}else Pe[0]!="stop"&&Pe[0]!="close"||lr(E,7);else E.G==3&&(Pe[0]=="stop"||Pe[0]=="close"?Pe[0]=="stop"?lr(E,7):fu(E):Pe[0]!="noop"&&E.l&&E.l.ta(Pe),E.v=0)}}er(4)}catch{}}var pm=class{constructor(h,_){this.g=h,this.map=_}};function au(h){this.l=h||10,f.PerformanceNavigationTiming?(h=f.performance.getEntriesByType("navigation"),h=0<h.length&&(h[0].nextHopProtocol=="hq"||h[0].nextHopProtocol=="h2")):h=!!(f.chrome&&f.chrome.loadTimes&&f.chrome.loadTimes()&&f.chrome.loadTimes().wasFetchedViaSpdy),this.j=h?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function ou(h){return h.h?!0:h.g?h.g.size>=h.j:!1}function vh(h){return h.h?1:h.g?h.g.size:0}function Qr(h,_){return h.h?h.h==_:h.g?h.g.has(_):!1}function Yr(h,_){h.g?h.g.add(_):h.h=_}function ri(h,_){h.h&&h.h==_?h.h=null:h.g&&h.g.has(_)&&h.g.delete(_)}au.prototype.cancel=function(){if(this.i=Tn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const h of this.g.values())h.cancel();this.g.clear()}};function Tn(h){if(h.h!=null)return h.i.concat(h.h.D);if(h.g!=null&&h.g.size!==0){let _=h.i;for(const E of h.g.values())_=_.concat(E.D);return _}return Q(h.i)}function Eh(h){if(h.V&&typeof h.V=="function")return h.V();if(typeof Map<"u"&&h instanceof Map||typeof Set<"u"&&h instanceof Set)return Array.from(h.values());if(typeof h=="string")return h.split("");if(p(h)){for(var _=[],E=h.length,I=0;I<E;I++)_.push(h[I]);return _}_=[],E=0;for(I in h)_[E++]=h[I];return _}function gm(h){if(h.na&&typeof h.na=="function")return h.na();if(!h.V||typeof h.V!="function"){if(typeof Map<"u"&&h instanceof Map)return Array.from(h.keys());if(!(typeof Set<"u"&&h instanceof Set)){if(p(h)||typeof h=="string"){var _=[];h=h.length;for(var E=0;E<h;E++)_.push(E);return _}_=[],E=0;for(const I in h)_[E++]=I;return _}}}function vo(h,_){if(h.forEach&&typeof h.forEach=="function")h.forEach(_,void 0);else if(p(h)||typeof h=="string")Array.prototype.forEach.call(h,_,void 0);else for(var E=gm(h),I=Eh(h),U=I.length,K=0;K<U;K++)_.call(void 0,I[K],E&&E[K],h)}var lu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Eo(h,_){if(h){h=h.split("&");for(var E=0;E<h.length;E++){var I=h[E].indexOf("="),U=null;if(0<=I){var K=h[E].substring(0,I);U=h[E].substring(I+1)}else K=h[E];_(K,U?decodeURIComponent(U.replace(/\+/g," ")):"")}}}function sr(h){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,h instanceof sr){this.h=h.h,$r(this,h.j),this.o=h.o,this.g=h.g,oa(this,h.s),this.l=h.l;var _=h.i,E=new xi;E.i=_.i,_.g&&(E.g=new Map(_.g),E.h=_.h),To(this,E),this.m=h.m}else h&&(_=String(h).match(lu))?(this.h=!1,$r(this,_[1]||"",!0),this.o=Xr(_[2]||""),this.g=Xr(_[3]||"",!0),oa(this,_[4]),this.l=Xr(_[5]||"",!0),To(this,_[6]||"",!0),this.m=Xr(_[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}sr.prototype.toString=function(){var h=[],_=this.j;_&&h.push(si(_,uu,!0),":");var E=this.g;return(E||_=="file")&&(h.push("//"),(_=this.o)&&h.push(si(_,uu,!0),"@"),h.push(encodeURIComponent(String(E)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),E=this.s,E!=null&&h.push(":",String(E))),(E=this.l)&&(this.g&&E.charAt(0)!="/"&&h.push("/"),h.push(si(E,E.charAt(0)=="/"?cu:Th,!0))),(E=this.i.toString())&&h.push("?",E),(E=this.m)&&h.push("#",si(E,vm)),h.join("")};function Et(h){return new sr(h)}function $r(h,_,E){h.j=E?Xr(_,!0):_,h.j&&(h.j=h.j.replace(/:$/,""))}function oa(h,_){if(_){if(_=Number(_),isNaN(_)||0>_)throw Error("Bad port number "+_);h.s=_}else h.s=null}function To(h,_,E){_ instanceof xi?(h.i=_,wh(h.i,h.h)):(E||(_=si(_,ym)),h.i=new xi(_,h.h))}function He(h,_,E){h.i.set(_,E)}function la(h){return He(h,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),h}function Xr(h,_){return h?_?decodeURI(h.replace(/%25/g,"%2525")):decodeURIComponent(h):""}function si(h,_,E){return typeof h=="string"?(h=encodeURI(h).replace(_,_m),E&&(h=h.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h):null}function _m(h){return h=h.charCodeAt(0),"%"+(h>>4&15).toString(16)+(h&15).toString(16)}var uu=/[#\/\?@]/g,Th=/[#\?:]/g,cu=/[#\?]/g,ym=/[#\?@]/g,vm=/#/g;function xi(h,_){this.h=this.g=null,this.i=h||null,this.j=!!_}function Kt(h){h.g||(h.g=new Map,h.h=0,h.i&&Eo(h.i,function(_,E){h.add(decodeURIComponent(_.replace(/\+/g," ")),E)}))}r=xi.prototype,r.add=function(h,_){Kt(this),this.i=null,h=jn(this,h);var E=this.g.get(h);return E||this.g.set(h,E=[]),E.push(_),this.h+=1,this};function wo(h,_){Kt(h),_=jn(h,_),h.g.has(_)&&(h.i=null,h.h-=h.g.get(_).length,h.g.delete(_))}function Io(h,_){return Kt(h),_=jn(h,_),h.g.has(_)}r.forEach=function(h,_){Kt(this),this.g.forEach(function(E,I){E.forEach(function(U){h.call(_,U,I,this)},this)},this)},r.na=function(){Kt(this);const h=Array.from(this.g.values()),_=Array.from(this.g.keys()),E=[];for(let I=0;I<_.length;I++){const U=h[I];for(let K=0;K<U.length;K++)E.push(_[I])}return E},r.V=function(h){Kt(this);let _=[];if(typeof h=="string")Io(this,h)&&(_=_.concat(this.g.get(jn(this,h))));else{h=Array.from(this.g.values());for(let E=0;E<h.length;E++)_=_.concat(h[E])}return _},r.set=function(h,_){return Kt(this),this.i=null,h=jn(this,h),Io(this,h)&&(this.h-=this.g.get(h).length),this.g.set(h,[_]),this.h+=1,this},r.get=function(h,_){return h?(h=this.V(h),0<h.length?String(h[0]):_):_};function ar(h,_,E){wo(h,_),0<E.length&&(h.i=null,h.g.set(jn(h,_),Q(E)),h.h+=E.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const h=[],_=Array.from(this.g.keys());for(var E=0;E<_.length;E++){var I=_[E];const K=encodeURIComponent(String(I)),se=this.V(I);for(I=0;I<se.length;I++){var U=K;se[I]!==""&&(U+="="+encodeURIComponent(String(se[I]))),h.push(U)}}return this.i=h.join("&")};function jn(h,_){return _=String(_),h.j&&(_=_.toLowerCase()),_}function wh(h,_){_&&!h.j&&(Kt(h),h.i=null,h.g.forEach(function(E,I){var U=I.toLowerCase();I!=U&&(wo(this,I),ar(this,U,E))},h)),h.j=_}function hu(h,_){const E=new Gr;if(f.Image){const I=new Image;I.onload=P(Nn,E,"TestLoadImage: loaded",!0,_,I),I.onerror=P(Nn,E,"TestLoadImage: error",!1,_,I),I.onabort=P(Nn,E,"TestLoadImage: abort",!1,_,I),I.ontimeout=P(Nn,E,"TestLoadImage: timeout",!1,_,I),f.setTimeout(function(){I.ontimeout&&I.ontimeout()},1e4),I.src=h}else _(!1)}function Ih(h,_){const E=new Gr,I=new AbortController,U=setTimeout(()=>{I.abort(),Nn(E,"TestPingServer: timeout",!1,_)},1e4);fetch(h,{signal:I.signal}).then(K=>{clearTimeout(U),K.ok?Nn(E,"TestPingServer: ok",!0,_):Nn(E,"TestPingServer: server error",!1,_)}).catch(()=>{clearTimeout(U),Nn(E,"TestPingServer: error",!1,_)})}function Nn(h,_,E,I,U){try{U&&(U.onload=null,U.onerror=null,U.onabort=null,U.ontimeout=null),I(E)}catch{}}function Ti(){this.g=new mm}function du(h,_,E){const I=E||"";try{vo(h,function(U,K){let se=U;g(U)&&(se=ni(U)),_.push(I+K+"="+encodeURIComponent(se))})}catch(U){throw _.push(I+"type="+encodeURIComponent("_badmap")),U}}function wi(h){this.l=h.Ub||null,this.j=h.eb||!1}G(wi,eu),wi.prototype.g=function(){return new Gn(this.l,this.j)},wi.prototype.i=(function(h){return function(){return h}})({});function Gn(h,_){Ft.call(this),this.D=h,this.o=_,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}G(Gn,Ft),r=Gn.prototype,r.open=function(h,_){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=h,this.A=_,this.readyState=1,Wr(this)},r.send=function(h){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const _={headers:this.u,method:this.B,credentials:this.m,cache:void 0};h&&(_.body=h),(this.D||f).fetch(new Request(this.A,_)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Mi(this)),this.readyState=0},r.Sa=function(h){if(this.g&&(this.l=h,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=h.headers,this.readyState=2,Wr(this)),this.g&&(this.readyState=3,Wr(this),this.g)))if(this.responseType==="arraybuffer")h.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof f.ReadableStream<"u"&&"body"in h){if(this.j=h.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ao(this)}else h.text().then(this.Ra.bind(this),this.ga.bind(this))};function Ao(h){h.j.read().then(h.Pa.bind(h)).catch(h.ga.bind(h))}r.Pa=function(h){if(this.g){if(this.o&&h.value)this.response.push(h.value);else if(!this.o){var _=h.value?h.value:new Uint8Array(0);(_=this.v.decode(_,{stream:!h.done}))&&(this.response=this.responseText+=_)}h.done?Mi(this):Wr(this),this.readyState==3&&Ao(this)}},r.Ra=function(h){this.g&&(this.response=this.responseText=h,Mi(this))},r.Qa=function(h){this.g&&(this.response=h,Mi(this))},r.ga=function(){this.g&&Mi(this)};function Mi(h){h.readyState=4,h.l=null,h.j=null,h.v=null,Wr(h)}r.setRequestHeader=function(h,_){this.u.append(h,_)},r.getResponseHeader=function(h){return this.h&&this.h.get(h.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const h=[],_=this.h.entries();for(var E=_.next();!E.done;)E=E.value,h.push(E[0]+": "+E[1]),E=_.next();return h.join(`\r
`)};function Wr(h){h.onreadystatechange&&h.onreadystatechange.call(h)}Object.defineProperty(Gn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(h){this.m=h?"include":"same-origin"}});function ua(h){let _="";return ue(h,function(E,I){_+=I,_+=":",_+=E,_+=`\r
`}),_}function Jr(h,_,E){e:{for(I in E){var I=!1;break e}I=!0}I||(E=ua(E),typeof h=="string"?E!=null&&encodeURIComponent(String(E)):He(h,_,E))}function at(h){Ft.call(this),this.headers=new Map,this.o=h||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}G(at,Ft);var gn=/^https?$/i,or=["POST","PUT"];r=at.prototype,r.Ha=function(h){this.J=h},r.ea=function(h,_,E,I){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+h);_=_?_.toUpperCase():"GET",this.D=h,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Oi.g(),this.v=this.o?gh(this.o):gh(Oi),this.g.onreadystatechange=A(this.Ea,this);try{this.B=!0,this.g.open(_,String(h),!0),this.B=!1}catch(K){ca(this,K);return}if(h=E||"",E=new Map(this.headers),I)if(Object.getPrototypeOf(I)===Object.prototype)for(var U in I)E.set(U,I[U]);else if(typeof I.keys=="function"&&typeof I.get=="function")for(const K of I.keys())E.set(K,I.get(K));else throw Error("Unknown input type for opt_headers: "+String(I));I=Array.from(E.keys()).find(K=>K.toLowerCase()=="content-type"),U=f.FormData&&h instanceof f.FormData,!(0<=Array.prototype.indexOf.call(or,_,void 0))||I||U||E.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[K,se]of E)this.g.setRequestHeader(K,se);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{bo(this),this.u=!0,this.g.send(h),this.u=!1}catch(K){ca(this,K)}};function ca(h,_){h.h=!1,h.g&&(h.j=!0,h.g.abort(),h.j=!1),h.l=_,h.m=5,Zr(h),es(h)}function Zr(h){h.A||(h.A=!0,Ht(h,"complete"),Ht(h,"error"))}r.abort=function(h){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=h||7,Ht(this,"complete"),Ht(this,"abort"),es(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),es(this,!0)),at.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?Ah(this):this.bb())},r.bb=function(){Ah(this)};function Ah(h){if(h.h&&typeof c<"u"&&(!h.v[1]||wn(h)!=4||h.Z()!=2)){if(h.u&&wn(h)==4)ph(h.Ea,0,h);else if(Ht(h,"readystatechange"),wn(h)==4){h.h=!1;try{const se=h.Z();e:switch(se){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var _=!0;break e;default:_=!1}var E;if(!(E=_)){var I;if(I=se===0){var U=String(h.D).match(lu)[1]||null;!U&&f.self&&f.self.location&&(U=f.self.location.protocol.slice(0,-1)),I=!gn.test(U?U.toLowerCase():"")}E=I}if(E)Ht(h,"complete"),Ht(h,"success");else{h.m=6;try{var K=2<wn(h)?h.g.statusText:""}catch{K=""}h.l=K+" ["+h.Z()+"]",Zr(h)}}finally{es(h)}}}}function es(h,_){if(h.g){bo(h);const E=h.g,I=h.v[0]?()=>{}:null;h.g=null,h.v=null,_||Ht(h,"ready");try{E.onreadystatechange=I}catch{}}}function bo(h){h.I&&(f.clearTimeout(h.I),h.I=null)}r.isActive=function(){return!!this.g};function wn(h){return h.g?h.g.readyState:0}r.Z=function(){try{return 2<wn(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(h){if(this.g){var _=this.g.responseText;return h&&_.indexOf(h)==0&&(_=_.substring(h.length)),vn(_)}};function ha(h){try{if(!h.g)return null;if("response"in h.g)return h.g.response;switch(h.H){case"":case"text":return h.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in h.g)return h.g.mozResponseArrayBuffer}return null}catch{return null}}function bh(h){const _={};h=(h.g&&2<=wn(h)&&h.g.getAllResponseHeaders()||"").split(`\r
`);for(let I=0;I<h.length;I++){if(he(h[I]))continue;var E=V(h[I]);const U=E[0];if(E=E[1],typeof E!="string")continue;E=E.trim();const K=_[U]||[];_[U]=K,K.push(E)}R(_,function(I){return I.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function da(h,_,E){return E&&E.internalChannelParams&&E.internalChannelParams[h]||_}function Sh(h){this.Aa=0,this.i=[],this.j=new Gr,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=da("failFast",!1,h),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=da("baseRetryDelayMs",5e3,h),this.cb=da("retryDelaySeedMs",1e4,h),this.Wa=da("forwardChannelMaxRetries",2,h),this.wa=da("forwardChannelRequestTimeoutMs",2e4,h),this.pa=h&&h.xmlHttpFactory||void 0,this.Xa=h&&h.Tb||void 0,this.Ca=h&&h.useFetchStreams||!1,this.L=void 0,this.J=h&&h.supportsCrossDomainXhr||!1,this.K="",this.h=new au(h&&h.concurrentRequestLimit),this.Da=new Ti,this.P=h&&h.fastHandshake||!1,this.O=h&&h.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=h&&h.Rb||!1,h&&h.xa&&this.j.xa(),h&&h.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&h&&h.detectBufferingProxy||!1,this.ja=void 0,h&&h.longPollingTimeout&&0<h.longPollingTimeout&&(this.ja=h.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Sh.prototype,r.la=8,r.G=1,r.connect=function(h,_,E,I){an(0),this.W=h,this.H=_||{},E&&I!==void 0&&(this.H.OSID=E,this.H.OAID=I),this.F=this.X,this.I=Vh(this,null,this.W),So(this)};function fu(h){if(Rh(h),h.G==3){var _=h.U++,E=Et(h.I);if(He(E,"SID",h.K),He(E,"RID",_),He(E,"TYPE","terminate"),fa(h,E),_=new Pi(h,h.j,_),_.L=2,_.v=la(Et(E)),E=!1,f.navigator&&f.navigator.sendBeacon)try{E=f.navigator.sendBeacon(_.v.toString(),"")}catch{}!E&&f.Image&&(new Image().src=_.v,E=!0),E||(_.g=xh(_.j,null),_.g.ea(_.v)),_.F=Date.now(),Ei(_)}_u(h)}function ts(h){h.g&&(gu(h),h.g.cancel(),h.g=null)}function Rh(h){ts(h),h.u&&(f.clearTimeout(h.u),h.u=null),ns(h),h.h.cancel(),h.s&&(typeof h.s=="number"&&f.clearTimeout(h.s),h.s=null)}function So(h){if(!ou(h.h)&&!h.s){h.s=!0;var _=h.Ga;ae||$e(),we||(ae(),we=!0),Ge.add(_,h),h.B=0}}function Em(h,_){return vh(h.h)>=h.h.j-(h.s?1:0)?!1:h.s?(h.i=_.D.concat(h.i),!0):h.G==1||h.G==2||h.B>=(h.Va?0:h.Wa)?!1:(h.s=jr(A(h.Ga,h,_),Ph(h,h.B)),h.B++,!0)}r.Ga=function(h){if(this.s)if(this.s=null,this.G==1){if(!h){this.U=Math.floor(1e5*Math.random()),h=this.U++;const U=new Pi(this,this.j,h);let K=this.o;if(this.S&&(K?(K=b(K),N(K,this.S)):K=this.S),this.m!==null||this.O||(U.H=K,K=null),this.P)e:{for(var _=0,E=0;E<this.i.length;E++){t:{var I=this.i[E];if("__data__"in I.map&&(I=I.map.__data__,typeof I=="string")){I=I.length;break t}I=void 0}if(I===void 0)break;if(_+=I,4096<_){_=E;break e}if(_===4096||E===this.i.length-1){_=E+1;break e}}_=1e3}else _=1e3;_=mu(this,U,_),E=Et(this.I),He(E,"RID",h),He(E,"CVER",22),this.D&&He(E,"X-HTTP-Session-Id",this.D),fa(this,E),K&&(this.O?_="headers="+encodeURIComponent(String(ua(K)))+"&"+_:this.m&&Jr(E,this.m,K)),Yr(this.h,U),this.Ua&&He(E,"TYPE","init"),this.P?(He(E,"$req",_),He(E,"SID","null"),U.T=!0,sa(U,E,null)):sa(U,E,_),this.G=2}}else this.G==3&&(h?Ch(this,h):this.i.length==0||ou(this.h)||Ch(this))};function Ch(h,_){var E;_?E=_.l:E=h.U++;const I=Et(h.I);He(I,"SID",h.K),He(I,"RID",E),He(I,"AID",h.T),fa(h,I),h.m&&h.o&&Jr(I,h.m,h.o),E=new Pi(h,h.j,E,h.B+1),h.m===null&&(E.H=h.o),_&&(h.i=_.D.concat(h.i)),_=mu(h,E,1e3),E.I=Math.round(.5*h.wa)+Math.round(.5*h.wa*Math.random()),Yr(h.h,E),sa(E,I,_)}function fa(h,_){h.H&&ue(h.H,function(E,I){He(_,I,E)}),h.l&&vo({},function(E,I){He(_,I,E)})}function mu(h,_,E){E=Math.min(h.i.length,E);var I=h.l?A(h.l.Na,h.l,h):null;e:{var U=h.i;let K=-1;for(;;){const se=["count="+E];K==-1?0<E?(K=U[0].g,se.push("ofs="+K)):K=0:se.push("ofs="+K);let Xe=!0;for(let xt=0;xt<E;xt++){let Pe=U[xt].g;const Qt=U[xt].map;if(Pe-=K,0>Pe)K=Math.max(0,U[xt].g-100),Xe=!1;else try{du(Qt,se,"req"+Pe+"_")}catch{I&&I(Qt)}}if(Xe){I=se.join("&");break e}}}return h=h.i.splice(0,E),_.D=h,I}function Dh(h){if(!h.g&&!h.u){h.Y=1;var _=h.Fa;ae||$e(),we||(ae(),we=!0),Ge.add(_,h),h.v=0}}function pu(h){return h.g||h.u||3<=h.v?!1:(h.Y++,h.u=jr(A(h.Fa,h),Ph(h,h.v)),h.v++,!0)}r.Fa=function(){if(this.u=null,Nh(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var h=2*this.R;this.j.info("BP detection timer enabled: "+h),this.A=jr(A(this.ab,this),h)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,an(10),ts(this),Nh(this))};function gu(h){h.A!=null&&(f.clearTimeout(h.A),h.A=null)}function Nh(h){h.g=new Pi(h,h.j,"rpc",h.Y),h.m===null&&(h.g.H=h.o),h.g.O=0;var _=Et(h.qa);He(_,"RID","rpc"),He(_,"SID",h.K),He(_,"AID",h.T),He(_,"CI",h.F?"0":"1"),!h.F&&h.ja&&He(_,"TO",h.ja),He(_,"TYPE","xmlhttp"),fa(h,_),h.m&&h.o&&Jr(_,h.m,h.o),h.L&&(h.g.I=h.L);var E=h.g;h=h.ia,E.L=1,E.v=la(Et(_)),E.m=null,E.P=!0,ir(E,h)}r.Za=function(){this.C!=null&&(this.C=null,ts(this),pu(this),an(19))};function ns(h){h.C!=null&&(f.clearTimeout(h.C),h.C=null)}function Oh(h,_){var E=null;if(h.g==_){ns(h),gu(h),h.g=null;var I=2}else if(Qr(h.h,_))E=_.D,ri(h.h,_),I=1;else return;if(h.G!=0){if(_.o)if(I==1){E=_.m?_.m.length:0,_=Date.now()-_.F;var U=h.B;I=_o(),Ht(I,new nu(I,E)),So(h)}else Dh(h);else if(U=_.s,U==3||U==0&&0<_.X||!(I==1&&Em(h,_)||I==2&&pu(h)))switch(E&&0<E.length&&(_=h.h,_.i=_.i.concat(E)),U){case 1:lr(h,5);break;case 4:lr(h,10);break;case 3:lr(h,6);break;default:lr(h,2)}}}function Ph(h,_){let E=h.Ta+Math.floor(Math.random()*h.cb);return h.isActive()||(E*=2),E*_}function lr(h,_){if(h.j.info("Error code "+_),_==2){var E=A(h.fb,h),I=h.Xa;const U=!I;I=new sr(I||"//www.google.com/images/cleardot.gif"),f.location&&f.location.protocol=="http"||$r(I,"https"),la(I),U?hu(I.toString(),E):Ih(I.toString(),E)}else an(2);h.G=0,h.l&&h.l.sa(_),_u(h),Rh(h)}r.fb=function(h){h?(this.j.info("Successfully pinged google.com"),an(2)):(this.j.info("Failed to ping google.com"),an(1))};function _u(h){if(h.G=0,h.ka=[],h.l){const _=Tn(h.h);(_.length!=0||h.i.length!=0)&&($(h.ka,_),$(h.ka,h.i),h.h.i.length=0,Q(h.i),h.i.length=0),h.l.ra()}}function Vh(h,_,E){var I=E instanceof sr?Et(E):new sr(E);if(I.g!="")_&&(I.g=_+"."+I.g),oa(I,I.s);else{var U=f.location;I=U.protocol,_=_?_+"."+U.hostname:U.hostname,U=+U.port;var K=new sr(null);I&&$r(K,I),_&&(K.g=_),U&&oa(K,U),E&&(K.l=E),I=K}return E=h.D,_=h.ya,E&&_&&He(I,E,_),He(I,"VER",h.la),fa(h,I),I}function xh(h,_,E){if(_&&!h.J)throw Error("Can't create secondary domain capable XhrIo object.");return _=h.Ca&&!h.pa?new at(new wi({eb:E})):new at(h.pa),_.Ha(h.J),_}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mh(){}r=Mh.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Ro(){}Ro.prototype.g=function(h,_){return new In(h,_)};function In(h,_){Ft.call(this),this.g=new Sh(_),this.l=h,this.h=_&&_.messageUrlParams||null,h=_&&_.messageHeaders||null,_&&_.clientProtocolHeaderRequired&&(h?h["X-Client-Protocol"]="webchannel":h={"X-Client-Protocol":"webchannel"}),this.g.o=h,h=_&&_.initMessageHeaders||null,_&&_.messageContentType&&(h?h["X-WebChannel-Content-Type"]=_.messageContentType:h={"X-WebChannel-Content-Type":_.messageContentType}),_&&_.va&&(h?h["X-WebChannel-Client-Profile"]=_.va:h={"X-WebChannel-Client-Profile":_.va}),this.g.S=h,(h=_&&_.Sb)&&!he(h)&&(this.g.m=h),this.v=_&&_.supportsCrossDomainXhr||!1,this.u=_&&_.sendRawJson||!1,(_=_&&_.httpSessionIdParam)&&!he(_)&&(this.g.D=_,h=this.h,h!==null&&_ in h&&(h=this.h,_ in h&&delete h[_])),this.j=new is(this)}G(In,Ft),In.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},In.prototype.close=function(){fu(this.g)},In.prototype.o=function(h){var _=this.g;if(typeof h=="string"){var E={};E.__data__=h,h=E}else this.u&&(E={},E.__data__=ni(h),h=E);_.i.push(new pm(_.Ya++,h)),_.G==3&&So(_)},In.prototype.N=function(){this.g.l=null,delete this.j,fu(this.g),delete this.g,In.aa.N.call(this)};function kh(h){Br.call(this),h.__headers__&&(this.headers=h.__headers__,this.statusCode=h.__status__,delete h.__headers__,delete h.__status__);var _=h.__sm__;if(_){e:{for(const E in _){h=E;break e}h=void 0}(this.i=h)&&(h=this.i,_=_!==null&&h in _?_[h]:void 0),this.data=_}else this.data=h}G(kh,Br);function Lh(){vi.call(this),this.status=1}G(Lh,vi);function is(h){this.g=h}G(is,Mh),is.prototype.ua=function(){Ht(this.g,"a")},is.prototype.ta=function(h){Ht(this.g,new kh(h))},is.prototype.sa=function(h){Ht(this.g,new Lh)},is.prototype.ra=function(){Ht(this.g,"b")},Ro.prototype.createWebChannel=Ro.prototype.g,In.prototype.send=In.prototype.o,In.prototype.open=In.prototype.m,In.prototype.close=In.prototype.close,Xb=function(){return new Ro},$b=function(){return _o()},Yb=ii,Qg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},vt.NO_ERROR=0,vt.TIMEOUT=8,vt.HTTP_ERROR=6,Jd=vt,on.COMPLETE="complete",Qb=on,ra.EventType=Di,Di.OPEN="a",Di.CLOSE="b",Di.ERROR="c",Di.MESSAGE="d",Ft.prototype.listen=Ft.prototype.K,fc=ra,Kb=wi,at.prototype.listenOnce=at.prototype.L,at.prototype.getLastError=at.prototype.Ka,at.prototype.getLastErrorCode=at.prototype.Ba,at.prototype.getStatus=at.prototype.Z,at.prototype.getResponseJson=at.prototype.Oa,at.prototype.getResponseText=at.prototype.oa,at.prototype.send=at.prototype.ea,at.prototype.setWithCredentials=at.prototype.Ha,Hb=at}).apply(typeof qd<"u"?qd:typeof self<"u"?self:typeof window<"u"?window:{});const sI="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Wt.UNAUTHENTICATED=new Wt(null),Wt.GOOGLE_CREDENTIALS=new Wt("google-credentials-uid"),Wt.FIRST_PARTY=new Wt("first-party-uid"),Wt.MOCK_USER=new Wt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gl="10.12.1";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zs=new Of("@firebase/firestore");function ol(){return zs.logLevel}function YV(r){zs.setLogLevel(r)}function te(r,...e){if(zs.logLevel<=Me.DEBUG){const t=e.map(W_);zs.debug(`Firestore (${Gl}): ${r}`,...t)}}function Pt(r,...e){if(zs.logLevel<=Me.ERROR){const t=e.map(W_);zs.error(`Firestore (${Gl}): ${r}`,...t)}}function Ri(r,...e){if(zs.logLevel<=Me.WARN){const t=e.map(W_);zs.warn(`Firestore (${Gl}): ${r}`,...t)}}function W_(r){if(typeof r=="string")return r;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(r)}catch{return r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(r="Unexpected state"){const e=`FIRESTORE (${Gl}) INTERNAL ASSERTION FAILED: `+r;throw Pt(e),new Error(e)}function _e(r,e){r||fe()}function $V(r,e){r||fe()}function ce(r,e){return r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends Jt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wb{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Wt.UNAUTHENTICATED)))}shutdown(){}}class WV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class JV{constructor(e){this.t=e,this.currentUser=Wt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let i=this.i;const a=p=>this.i!==i?(i=this.i,t(p)):Promise.resolve();let l=new en;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new en,e.enqueueRetryable((()=>a(this.currentUser)))};const c=()=>{const p=l;e.enqueueRetryable((async()=>{await p.promise,await a(this.currentUser)}))},f=p=>{te("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=p,this.auth.addAuthTokenListener(this.o),c()};this.t.onInit((p=>f(p))),setTimeout((()=>{if(!this.auth){const p=this.t.getImmediate({optional:!0});p?f(p):(te("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new en)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((i=>this.i!==e?(te("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(_e(typeof i.accessToken=="string"),new Wb(i.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return _e(e===null||typeof e=="string"),new Wt(e)}}class ZV{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=Wt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ex{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new ZV(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable((()=>t(Wt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class tx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class nx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,t){const i=l=>{l.error!=null&&te("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,te("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable((()=>i(l)))};const a=l=>{te("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.appCheck.addTokenListener(this.o)};this.A.onInit((l=>a(l))),setTimeout((()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?a(l):te("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(_e(typeof t.token=="string"),this.R=t.token,new tx(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(r){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(r);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<r;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jb{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const a=ix(40);for(let l=0;l<a.length;++l)i.length<20&&a[l]<t&&(i+=e.charAt(a[l]%e.length))}return i}}function Re(r,e){return r<e?-1:r>e?1:0}function bl(r,e,t){return r.length===e.length&&r.every(((i,a)=>t(i,e[a])))}function Zb(r){return r+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return mt.fromMillis(Date.now())}static fromDate(e){return mt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*t));return new mt(t,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?Re(this.nanoseconds,e.nanoseconds):Re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ye(e)}static min(){return new ye(new mt(0,0))}static max(){return new ye(new mt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,i){t===void 0?t=0:t>e.length&&fe(),i===void 0?i=e.length-t:i>e.length-t&&fe(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return Mc.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Mc?e.forEach((i=>{t.push(i)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let a=0;a<i;a++){const l=e.get(a),c=t.get(a);if(l<c)return-1;if(l>c)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class Ue extends Mc{construct(e,t,i){return new Ue(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter((a=>a.length>0)))}return new Ue(t)}static emptyPath(){return new Ue([])}}const rx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class dt extends Mc{construct(e,t,i){return new dt(e,t,i)}static isValidIdentifier(e){return rx.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),dt.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new dt(["__name__"])}static fromServerFormat(e){const t=[];let i="",a=0;const l=()=>{if(i.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;a<e.length;){const f=e[a];if(f==="\\"){if(a+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const p=e[a+1];if(p!=="\\"&&p!=="."&&p!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=p,a+=2}else f==="`"?(c=!c,a++):f!=="."||c?(i+=f,a++):(l(),a++)}if(l(),c)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new dt(t)}static emptyPath(){return new dt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.path=e}static fromPath(e){return new oe(Ue.fromString(e))}static fromName(e){return new oe(Ue.fromString(e).popFirst(5))}static empty(){return new oe(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Ue.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new oe(new Ue(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(e,t,i,a){this.indexId=e,this.collectionGroup=t,this.fields=i,this.indexState=a}}function Yg(r){return r.fields.find((e=>e.kind===2))}function Pa(r){return r.fields.filter((e=>e.kind!==2))}_f.UNKNOWN_ID=-1;class Zd{constructor(e,t){this.fieldPath=e,this.kind=t}}class kc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new kc(0,ti.min())}}function eS(r,e){const t=r.toTimestamp().seconds,i=r.toTimestamp().nanoseconds+1,a=ye.fromTimestamp(i===1e9?new mt(t+1,0):new mt(t,i));return new ti(a,oe.empty(),e)}function tS(r){return new ti(r.readTime,r.key,-1)}class ti{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new ti(ye.min(),oe.empty(),-1)}static max(){return new ti(ye.max(),oe.empty(),-1)}}function J_(r,e){let t=r.readTime.compareTo(e.readTime);return t!==0?t:(t=oe.comparator(r.documentKey,e.documentKey),t!==0?t:Re(r.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nS="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class iS{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xs(r){if(r.code!==H.FAILED_PRECONDITION||r.message!==nS)throw r;te("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&fe(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new F(((i,a)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,a)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,a)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof F?t:F.resolve(t)}catch(t){return F.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):F.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):F.reject(t)}static resolve(e){return new F(((t,i)=>{t(e)}))}static reject(e){return new F(((t,i)=>{i(e)}))}static waitFor(e){return new F(((t,i)=>{let a=0,l=0,c=!1;e.forEach((f=>{++a,f.next((()=>{++l,c&&l===a&&t()}),(p=>i(p)))})),c=!0,l===a&&t()}))}static or(e){let t=F.resolve(!1);for(const i of e)t=t.next((a=>a?F.resolve(a):i()));return t}static forEach(e,t){const i=[];return e.forEach(((a,l)=>{i.push(t.call(this,a,l))})),this.waitFor(i)}static mapArray(e,t){return new F(((i,a)=>{const l=e.length,c=new Array(l);let f=0;for(let p=0;p<l;p++){const g=p;t(e[g]).next((v=>{c[g]=v,++f,f===l&&i(c)}),(v=>a(v)))}}))}static doWhile(e,t){return new F(((i,a)=>{const l=()=>{e()===!0?t().next((()=>{l()}),a):i()};l()}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jf{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.V=new en,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{t.error?this.V.reject(new Ec(e,t.error)):this.V.resolve()},this.transaction.onerror=i=>{const a=Z_(i.target.error);this.V.reject(new Ec(e,a))}}static open(e,t,i,a){try{return new jf(t,e.transaction(a,i))}catch(l){throw new Ec(t,l)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(te("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new ax(t)}}class Qi{constructor(e,t,i){this.name=e,this.version=t,this.p=i,Qi.S(pt())===12.2&&Pt("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return te("SimpleDb","Removing database:",e),Va(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Sc())return!1;if(Qi.C())return!0;const e=pt(),t=Qi.S(e),i=0<t&&t<10,a=rS(e),l=0<a&&a<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||l)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(i)}async M(e){return this.db||(te("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,i)=>{const a=indexedDB.open(this.name,this.version);a.onsuccess=l=>{const c=l.target.result;t(c)},a.onblocked=()=>{i(new Ec(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},a.onerror=l=>{const c=l.target.error;c.name==="VersionError"?i(new ee(H.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):c.name==="InvalidStateError"?i(new ee(H.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+c)):i(new Ec(e,c))},a.onupgradeneeded=l=>{te("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',l.oldVersion);const c=l.target.result;this.p.O(c,a.transaction,l.oldVersion,this.version).next((()=>{te("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.N&&(this.db.onversionchange=t=>this.N(t)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,i,a){const l=t==="readonly";let c=0;for(;;){++c;try{this.db=await this.M(e);const f=jf.open(this.db,e,l?"readonly":"readwrite",i),p=a(f).next((g=>(f.g(),g))).catch((g=>(f.abort(g),F.reject(g)))).toPromise();return p.catch((()=>{})),await f.m,p}catch(f){const p=f,g=p.name!=="FirebaseError"&&c<3;if(te("SimpleDb","Transaction failed with error:",p.message,"Retrying:",g),this.close(),!g)return Promise.reject(p)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rS(r){const e=r.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}class sx{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return Va(this.B.delete())}}class Ec extends ee{constructor(e,t){super(H.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ws(r){return r.name==="IndexedDbTransactionError"}class ax{constructor(e){this.store=e}put(e,t){let i;return t!==void 0?(te("SimpleDb","PUT",this.store.name,e,t),i=this.store.put(t,e)):(te("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),Va(i)}add(e){return te("SimpleDb","ADD",this.store.name,e,e),Va(this.store.add(e))}get(e){return Va(this.store.get(e)).next((t=>(t===void 0&&(t=null),te("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return te("SimpleDb","DELETE",this.store.name,e),Va(this.store.delete(e))}count(){return te("SimpleDb","COUNT",this.store.name),Va(this.store.count())}U(e,t){const i=this.options(e,t),a=i.index?this.store.index(i.index):this.store;if(typeof a.getAll=="function"){const l=a.getAll(i.range);return new F(((c,f)=>{l.onerror=p=>{f(p.target.error)},l.onsuccess=p=>{c(p.target.result)}}))}{const l=this.cursor(i),c=[];return this.W(l,((f,p)=>{c.push(p)})).next((()=>c))}}G(e,t){const i=this.store.getAll(e,t===null?void 0:t);return new F(((a,l)=>{i.onerror=c=>{l(c.target.error)},i.onsuccess=c=>{a(c.target.result)}}))}j(e,t){te("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,t);i.H=!1;const a=this.cursor(i);return this.W(a,((l,c,f)=>f.delete()))}J(e,t){let i;t?i=e:(i={},t=e);const a=this.cursor(i);return this.W(a,t)}Y(e){const t=this.cursor({});return new F(((i,a)=>{t.onerror=l=>{const c=Z_(l.target.error);a(c)},t.onsuccess=l=>{const c=l.target.result;c?e(c.primaryKey,c.value).next((f=>{f?c.continue():i()})):i()}}))}W(e,t){const i=[];return new F(((a,l)=>{e.onerror=c=>{l(c.target.error)},e.onsuccess=c=>{const f=c.target.result;if(!f)return void a();const p=new sx(f),g=t(f.primaryKey,f.value,p);if(g instanceof F){const v=g.catch((T=>(p.done(),F.reject(T))));i.push(v)}p.isDone?a():p.K===null?f.continue():f.continue(p.K)}})).next((()=>F.waitFor(i)))}options(e,t){let i;return e!==void 0&&(typeof e=="string"?i=e:t=e),{index:i,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const i=this.store.index(e.index);return e.H?i.openKeyCursor(e.range,t):i.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Va(r){return new F(((e,t)=>{r.onsuccess=i=>{const a=i.target.result;e(a)},r.onerror=i=>{const a=Z_(i.target.error);t(a)}}))}let aI=!1;function Z_(r){const e=Qi.S(pt());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(r.message.indexOf(t)>=0){const i=new ee("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return aI||(aI=!0,setTimeout((()=>{throw i}),0)),i}}return r}class ox{constructor(e,t){this.asyncQueue=e,this.Z=t,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){te("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{te("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(t){Ws(t)?te("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",t):await Xs(t)}await this.X(6e4)}))}}class lx{constructor(e,t){this.localStore=e,this.persistence=t}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.te(t,e)))}te(e,t){const i=new Set;let a=t,l=!0;return F.doWhile((()=>l===!0&&a>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((c=>{if(c!==null&&!i.has(c))return te("IndexBackfiller",`Processing collection: ${c}`),this.ne(e,c,a).next((f=>{a-=f,i.add(c)}));l=!1})))).next((()=>t-a))}ne(e,t,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((a=>this.localStore.localDocuments.getNextDocuments(e,t,a,i).next((l=>{const c=l.changes;return this.localStore.indexManager.updateIndexEntries(e,c).next((()=>this.re(a,l))).next((f=>(te("IndexBackfiller",`Updating offset: ${f}`),this.localStore.indexManager.updateCollectionGroup(e,t,f)))).next((()=>c.size))}))))}re(e,t){let i=e;return t.changes.forEach(((a,l)=>{const c=tS(l);J_(c,i)>0&&(i=c)})),new ti(i.readTime,i.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.ie(i),this.se=i=>t.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Bn.oe=-1;function eh(r){return r==null}function Lc(r){return r===0&&1/r==-1/0}function sS(r){return typeof r=="number"&&Number.isInteger(r)&&!Lc(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(r){let e="";for(let t=0;t<r.length;t++)e.length>0&&(e=oI(e)),e=ux(r.get(t),e);return oI(e)}function ux(r,e){let t=e;const i=r.length;for(let a=0;a<i;a++){const l=r.charAt(a);switch(l){case"\0":t+="";break;case"":t+="";break;default:t+=l}}return t}function oI(r){return r+""}function Hi(r){const e=r.length;if(_e(e>=2),e===2)return _e(r.charAt(0)===""&&r.charAt(1)===""),Ue.emptyPath();const t=e-2,i=[];let a="";for(let l=0;l<e;){const c=r.indexOf("",l);switch((c<0||c>t)&&fe(),r.charAt(c+1)){case"":const f=r.substring(l,c);let p;a.length===0?p=f:(a+=f,p=a,a=""),i.push(p);break;case"":a+=r.substring(l,c),a+="\0";break;case"":a+=r.substring(l,c+1);break;default:fe()}l=c+2}return new Ue(i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ef(r,e){return[r,Rn(e)]}function aS(r,e,t){return[r,Rn(e),t]}const cx={},hx=["prefixPath","collectionGroup","readTime","documentId"],dx=["prefixPath","collectionGroup","documentId"],fx=["collectionGroup","readTime","prefixPath","documentId"],mx=["canonicalId","targetId"],px=["targetId","path"],gx=["path","targetId"],_x=["collectionId","parent"],yx=["indexId","uid"],vx=["uid","sequenceNumber"],Ex=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Tx=["indexId","uid","orderedDocumentKey"],wx=["userId","collectionPath","documentId"],Ix=["userId","collectionPath","largestBatchId"],Ax=["userId","collectionGroup","largestBatchId"],oS=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],bx=[...oS,"documentOverlays"],lS=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],uS=lS,cS=[...uS,"indexConfiguration","indexState","indexEntries"],Sx=cS;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g extends iS{constructor(e,t){super(),this._e=e,this.currentSequenceNumber=t}}function tn(r,e){const t=ce(r);return Qi.F(t._e,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uI(r){let e=0;for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e++;return e}function oo(r,e){for(const t in r)Object.prototype.hasOwnProperty.call(r,t)&&e(t,r[t])}function hS(r){for(const e in r)if(Object.prototype.hasOwnProperty.call(r,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e,t){this.comparator=e,this.root=t||dn.EMPTY}insert(e,t){return new st(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,dn.BLACK,null,null))}remove(e){return new st(this.comparator,this.root.remove(e,this.comparator).copy(null,null,dn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const a=this.comparator(e,i.key);if(a===0)return t+i.left.size;a<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,i)=>(e(t,i),!1)))}toString(){const e=[];return this.inorderTraversal(((t,i)=>(e.push(`${t}:${i}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new jd(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new jd(this.root,e,this.comparator,!1)}getReverseIterator(){return new jd(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new jd(this.root,e,this.comparator,!0)}}class jd{constructor(e,t,i,a){this.isReverse=a,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&a&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class dn{constructor(e,t,i,a,l){this.key=e,this.value=t,this.color=i??dn.RED,this.left=a??dn.EMPTY,this.right=l??dn.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,a,l){return new dn(e??this.key,t??this.value,i??this.color,a??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let a=this;const l=i(e,a.key);return a=l<0?a.copy(null,null,null,a.left.insert(e,t,i),null):l===0?a.copy(null,t,null,null,null):a.copy(null,null,null,null,a.right.insert(e,t,i)),a.fixUp()}removeMin(){if(this.left.isEmpty())return dn.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,a=this;if(t(e,a.key)<0)a.left.isEmpty()||a.left.isRed()||a.left.left.isRed()||(a=a.moveRedLeft()),a=a.copy(null,null,null,a.left.remove(e,t),null);else{if(a.left.isRed()&&(a=a.rotateRight()),a.right.isEmpty()||a.right.isRed()||a.right.left.isRed()||(a=a.moveRedRight()),t(e,a.key)===0){if(a.right.isEmpty())return dn.EMPTY;i=a.right.min(),a=a.copy(i.key,i.value,null,null,a.right.removeMin())}a=a.copy(null,null,null,null,a.right.remove(e,t))}return a.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,dn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,dn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw fe();const e=this.left.check();if(e!==this.right.check())throw fe();return e+(this.isRed()?0:1)}}dn.EMPTY=null,dn.RED=!0,dn.BLACK=!1;dn.EMPTY=new class{constructor(){this.size=0}get key(){throw fe()}get value(){throw fe()}get color(){throw fe()}get left(){throw fe()}get right(){throw fe()}copy(e,t,i,a,l){return this}insert(e,t,i){return new dn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.comparator=e,this.data=new st(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,i)=>(e(t),!1)))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const a=i.getNext();if(this.comparator(a.key,e[1])>=0)return;t(a.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cI(this.data.getIterator())}getIteratorFrom(e){return new cI(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((i=>{t=t.add(i)})),t}isEqual(e){if(!(e instanceof it)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(this.comparator(a,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new it(this.comparator);return t.data=e,t}}class cI{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function il(r){return r.hasNext()?r.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.fields=e,e.sort(dt.comparator)}static empty(){return new Fn([])}unionWith(e){let t=new it(dt.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new Fn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return bl(this.fields,e.fields,((t,i)=>t.isEqual(i)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dS extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(a){try{return atob(a)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new dS("Invalid base64 string: "+l):l}})(e);return new Gt(t)}static fromUint8Array(e){const t=(function(a){let l="";for(let c=0;c<a.length;++c)l+=String.fromCharCode(a[c]);return l})(e);return new Gt(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const i=new Uint8Array(t.length);for(let a=0;a<t.length;a++)i[a]=t.charCodeAt(a);return i})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gt.EMPTY_BYTE_STRING=new Gt("");const Cx=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Pr(r){if(_e(!!r),typeof r=="string"){let e=0;const t=Cx.exec(r);if(_e(!!t),t[1]){let a=t[1];a=(a+"000000000").substr(0,9),e=Number(a)}const i=new Date(r);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:It(r.seconds),nanos:It(r.nanos)}}function It(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function Bs(r){return typeof r=="string"?Gt.fromBase64String(r):Gt.fromUint8Array(r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gf(r){var e,t;return((t=(((e=r?.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function ey(r){const e=r.mapValue.fields.__previous_value__;return Gf(e)?ey(e):e}function Uc(r){const e=Pr(r.mapValue.fields.__local_write_time__.timestampValue);return new mt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dx{constructor(e,t,i,a,l,c,f,p,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=a,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=f,this.longPollingOptions=p,this.useFetchStreams=g}}class Fs{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Fs("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Fs&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},tf={nullValue:"NULL_VALUE"};function Xa(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?Gf(r)?4:fS(r)?9007199254740991:10:fe()}function Xi(r,e){if(r===e)return!0;const t=Xa(r);if(t!==Xa(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===e.booleanValue;case 4:return Uc(r).isEqual(Uc(e));case 3:return(function(a,l){if(typeof a.timestampValue=="string"&&typeof l.timestampValue=="string"&&a.timestampValue.length===l.timestampValue.length)return a.timestampValue===l.timestampValue;const c=Pr(a.timestampValue),f=Pr(l.timestampValue);return c.seconds===f.seconds&&c.nanos===f.nanos})(r,e);case 5:return r.stringValue===e.stringValue;case 6:return(function(a,l){return Bs(a.bytesValue).isEqual(Bs(l.bytesValue))})(r,e);case 7:return r.referenceValue===e.referenceValue;case 8:return(function(a,l){return It(a.geoPointValue.latitude)===It(l.geoPointValue.latitude)&&It(a.geoPointValue.longitude)===It(l.geoPointValue.longitude)})(r,e);case 2:return(function(a,l){if("integerValue"in a&&"integerValue"in l)return It(a.integerValue)===It(l.integerValue);if("doubleValue"in a&&"doubleValue"in l){const c=It(a.doubleValue),f=It(l.doubleValue);return c===f?Lc(c)===Lc(f):isNaN(c)&&isNaN(f)}return!1})(r,e);case 9:return bl(r.arrayValue.values||[],e.arrayValue.values||[],Xi);case 10:return(function(a,l){const c=a.mapValue.fields||{},f=l.mapValue.fields||{};if(uI(c)!==uI(f))return!1;for(const p in c)if(c.hasOwnProperty(p)&&(f[p]===void 0||!Xi(c[p],f[p])))return!1;return!0})(r,e);default:return fe()}}function zc(r,e){return(r.values||[]).find((t=>Xi(t,e)))!==void 0}function qs(r,e){if(r===e)return 0;const t=Xa(r),i=Xa(e);if(t!==i)return Re(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Re(r.booleanValue,e.booleanValue);case 2:return(function(l,c){const f=It(l.integerValue||l.doubleValue),p=It(c.integerValue||c.doubleValue);return f<p?-1:f>p?1:f===p?0:isNaN(f)?isNaN(p)?0:-1:1})(r,e);case 3:return hI(r.timestampValue,e.timestampValue);case 4:return hI(Uc(r),Uc(e));case 5:return Re(r.stringValue,e.stringValue);case 6:return(function(l,c){const f=Bs(l),p=Bs(c);return f.compareTo(p)})(r.bytesValue,e.bytesValue);case 7:return(function(l,c){const f=l.split("/"),p=c.split("/");for(let g=0;g<f.length&&g<p.length;g++){const v=Re(f[g],p[g]);if(v!==0)return v}return Re(f.length,p.length)})(r.referenceValue,e.referenceValue);case 8:return(function(l,c){const f=Re(It(l.latitude),It(c.latitude));return f!==0?f:Re(It(l.longitude),It(c.longitude))})(r.geoPointValue,e.geoPointValue);case 9:return(function(l,c){const f=l.values||[],p=c.values||[];for(let g=0;g<f.length&&g<p.length;++g){const v=qs(f[g],p[g]);if(v)return v}return Re(f.length,p.length)})(r.arrayValue,e.arrayValue);case 10:return(function(l,c){if(l===xs.mapValue&&c===xs.mapValue)return 0;if(l===xs.mapValue)return 1;if(c===xs.mapValue)return-1;const f=l.fields||{},p=Object.keys(f),g=c.fields||{},v=Object.keys(g);p.sort(),v.sort();for(let T=0;T<p.length&&T<v.length;++T){const A=Re(p[T],v[T]);if(A!==0)return A;const P=qs(f[p[T]],g[v[T]]);if(P!==0)return P}return Re(p.length,v.length)})(r.mapValue,e.mapValue);default:throw fe()}}function hI(r,e){if(typeof r=="string"&&typeof e=="string"&&r.length===e.length)return Re(r,e);const t=Pr(r),i=Pr(e),a=Re(t.seconds,i.seconds);return a!==0?a:Re(t.nanos,i.nanos)}function Sl(r){return Xg(r)}function Xg(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(t){const i=Pr(t);return`time(${i.seconds},${i.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(t){return Bs(t).toBase64()})(r.bytesValue):"referenceValue"in r?(function(t){return oe.fromName(t).toString()})(r.referenceValue):"geoPointValue"in r?(function(t){return`geo(${t.latitude},${t.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(t){let i="[",a=!0;for(const l of t.values||[])a?a=!1:i+=",",i+=Xg(l);return i+"]"})(r.arrayValue):"mapValue"in r?(function(t){const i=Object.keys(t.fields||{}).sort();let a="{",l=!0;for(const c of i)l?l=!1:a+=",",a+=`${c}:${Xg(t.fields[c])}`;return a+"}"})(r.mapValue):fe()}function Wa(r,e){return{referenceValue:`projects/${r.projectId}/databases/${r.database}/documents/${e.path.canonicalString()}`}}function Wg(r){return!!r&&"integerValue"in r}function Bc(r){return!!r&&"arrayValue"in r}function dI(r){return!!r&&"nullValue"in r}function fI(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function nf(r){return!!r&&"mapValue"in r}function Tc(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const e={mapValue:{fields:{}}};return oo(r.mapValue.fields,((t,i)=>e.mapValue.fields[t]=Tc(i))),e}if(r.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(r.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Tc(r.arrayValue.values[t]);return e}return Object.assign({},r)}function fS(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function Nx(r){return"nullValue"in r?tf:"booleanValue"in r?{booleanValue:!1}:"integerValue"in r||"doubleValue"in r?{doubleValue:NaN}:"timestampValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in r?{stringValue:""}:"bytesValue"in r?{bytesValue:""}:"referenceValue"in r?Wa(Fs.empty(),oe.empty()):"geoPointValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in r?{arrayValue:{}}:"mapValue"in r?{mapValue:{}}:fe()}function Ox(r){return"nullValue"in r?{booleanValue:!1}:"booleanValue"in r?{doubleValue:NaN}:"integerValue"in r||"doubleValue"in r?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in r?{stringValue:""}:"stringValue"in r?{bytesValue:""}:"bytesValue"in r?Wa(Fs.empty(),oe.empty()):"referenceValue"in r?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in r?{arrayValue:{}}:"arrayValue"in r?{mapValue:{}}:"mapValue"in r?xs:fe()}function mI(r,e){const t=qs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?-1:!r.inclusive&&e.inclusive?1:0}function pI(r,e){const t=qs(r.value,e.value);return t!==0?t:r.inclusive&&!e.inclusive?1:!r.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e){this.value=e}static empty(){return new fn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!nf(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Tc(t)}setAll(e){let t=dt.emptyPath(),i={},a=[];e.forEach(((c,f)=>{if(!t.isImmediateParentOf(f)){const p=this.getFieldsMap(t);this.applyChanges(p,i,a),i={},a=[],t=f.popLast()}c?i[f.lastSegment()]=Tc(c):a.push(f.lastSegment())}));const l=this.getFieldsMap(t);this.applyChanges(l,i,a)}delete(e){const t=this.field(e.popLast());nf(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Xi(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let a=t.mapValue.fields[e.get(i)];nf(a)&&a.mapValue.fields||(a={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=a),t=a}return t.mapValue.fields}applyChanges(e,t,i){oo(t,((a,l)=>e[a]=l));for(const a of i)delete e[a]}clone(){return new fn(Tc(this.value))}}function mS(r){const e=[];return oo(r.fields,((t,i)=>{const a=new dt([t]);if(nf(i)){const l=mS(i.mapValue).fields;if(l.length===0)e.push(a);else for(const c of l)e.push(a.child(c))}else e.push(a)})),new Fn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e,t,i,a,l,c,f){this.key=e,this.documentType=t,this.version=i,this.readTime=a,this.createTime=l,this.data=c,this.documentState=f}static newInvalidDocument(e){return new ut(e,0,ye.min(),ye.min(),ye.min(),fn.empty(),0)}static newFoundDocument(e,t,i,a){return new ut(e,1,t,ye.min(),i,a,0)}static newNoDocument(e,t){return new ut(e,2,t,ye.min(),ye.min(),fn.empty(),0)}static newUnknownDocument(e,t){return new ut(e,3,t,ye.min(),ye.min(),fn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=fn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=fn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e,t){this.position=e,this.inclusive=t}}function gI(r,e,t){let i=0;for(let a=0;a<r.position.length;a++){const l=e[a],c=r.position[a];if(l.field.isKeyField()?i=oe.comparator(oe.fromName(c.referenceValue),t.key):i=qs(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function _I(r,e){if(r===null)return e===null;if(e===null||r.inclusive!==e.inclusive||r.position.length!==e.position.length)return!1;for(let t=0;t<r.position.length;t++)if(!Xi(r.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,t="asc"){this.field=e,this.dir=t}}function Px(r,e){return r.dir===e.dir&&r.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pS{}class ze extends pS{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new Vx(e,t,i):t==="array-contains"?new kx(e,i):t==="in"?new TS(e,i):t==="not-in"?new Lx(e,i):t==="array-contains-any"?new Ux(e,i):new ze(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new xx(e,i):new Mx(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(qs(t,this.value)):t!==null&&Xa(this.value)===Xa(t)&&this.matchesComparison(qs(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return fe()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ze extends pS{constructor(e,t){super(),this.filters=e,this.op=t,this.ae=null}static create(e,t){return new Ze(e,t)}matches(e){return Rl(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function Rl(r){return r.op==="and"}function Jg(r){return r.op==="or"}function ty(r){return gS(r)&&Rl(r)}function gS(r){for(const e of r.filters)if(e instanceof Ze)return!1;return!0}function Zg(r){if(r instanceof ze)return r.field.canonicalString()+r.op.toString()+Sl(r.value);if(ty(r))return r.filters.map((e=>Zg(e))).join(",");{const e=r.filters.map((t=>Zg(t))).join(",");return`${r.op}(${e})`}}function _S(r,e){return r instanceof ze?(function(i,a){return a instanceof ze&&i.op===a.op&&i.field.isEqual(a.field)&&Xi(i.value,a.value)})(r,e):r instanceof Ze?(function(i,a){return a instanceof Ze&&i.op===a.op&&i.filters.length===a.filters.length?i.filters.reduce(((l,c,f)=>l&&_S(c,a.filters[f])),!0):!1})(r,e):void fe()}function yS(r,e){const t=r.filters.concat(e);return Ze.create(t,r.op)}function vS(r){return r instanceof ze?(function(t){return`${t.field.canonicalString()} ${t.op} ${Sl(t.value)}`})(r):r instanceof Ze?(function(t){return t.op.toString()+" {"+t.getFilters().map(vS).join(" ,")+"}"})(r):"Filter"}class Vx extends ze{constructor(e,t,i){super(e,t,i),this.key=oe.fromName(i.referenceValue)}matches(e){const t=oe.comparator(e.key,this.key);return this.matchesComparison(t)}}class xx extends ze{constructor(e,t){super(e,"in",t),this.keys=ES("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Mx extends ze{constructor(e,t){super(e,"not-in",t),this.keys=ES("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ES(r,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((i=>oe.fromName(i.referenceValue)))}class kx extends ze{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bc(t)&&zc(t.arrayValue,this.value)}}class TS extends ze{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&zc(this.value.arrayValue,t)}}class Lx extends ze{constructor(e,t){super(e,"not-in",t)}matches(e){if(zc(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!zc(this.value.arrayValue,t)}}class Ux extends ze{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((i=>zc(this.value.arrayValue,i)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,t=null,i=[],a=[],l=null,c=null,f=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=a,this.limit=l,this.startAt=c,this.endAt=f,this.ue=null}}function e_(r,e=null,t=[],i=[],a=null,l=null,c=null){return new zx(r,e,t,i,a,l,c)}function Ja(r){const e=ce(r);if(e.ue===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((i=>Zg(i))).join(","),t+="|ob:",t+=e.orderBy.map((i=>(function(l){return l.field.canonicalString()+l.dir})(i))).join(","),eh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((i=>Sl(i))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((i=>Sl(i))).join(",")),e.ue=t}return e.ue}function th(r,e){if(r.limit!==e.limit||r.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<r.orderBy.length;t++)if(!Px(r.orderBy[t],e.orderBy[t]))return!1;if(r.filters.length!==e.filters.length)return!1;for(let t=0;t<r.filters.length;t++)if(!_S(r.filters[t],e.filters[t]))return!1;return r.collectionGroup===e.collectionGroup&&!!r.path.isEqual(e.path)&&!!_I(r.startAt,e.startAt)&&_I(r.endAt,e.endAt)}function yf(r){return oe.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}function vf(r,e){return r.filters.filter((t=>t instanceof ze&&t.field.isEqual(e)))}function yI(r,e,t){let i=tf,a=!0;for(const l of vf(r,e)){let c=tf,f=!0;switch(l.op){case"<":case"<=":c=Nx(l.value);break;case"==":case"in":case">=":c=l.value;break;case">":c=l.value,f=!1;break;case"!=":case"not-in":c=tf}mI({value:i,inclusive:a},{value:c,inclusive:f})<0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];mI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})<0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}function vI(r,e,t){let i=xs,a=!0;for(const l of vf(r,e)){let c=xs,f=!0;switch(l.op){case">=":case">":c=Ox(l.value),f=!1;break;case"==":case"in":case"<=":c=l.value;break;case"<":c=l.value,f=!1;break;case"!=":case"not-in":c=xs}pI({value:i,inclusive:a},{value:c,inclusive:f})>0&&(i=c,a=f)}if(t!==null){for(let l=0;l<r.orderBy.length;++l)if(r.orderBy[l].field.isEqual(e)){const c=t.position[l];pI({value:i,inclusive:a},{value:c,inclusive:t.inclusive})>0&&(i=c,a=t.inclusive);break}}return{value:i,inclusive:a}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,t=null,i=[],a=[],l=null,c="F",f=null,p=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=a,this.limit=l,this.limitType=c,this.startAt=f,this.endAt=p,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function wS(r,e,t,i,a,l,c,f){return new kr(r,e,t,i,a,l,c,f)}function Hl(r){return new kr(r)}function EI(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ny(r){return r.collectionGroup!==null}function yl(r){const e=ce(r);if(e.ce===null){e.ce=[];const t=new Set;for(const l of e.explicitOrderBy)e.ce.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let f=new it(dt.comparator);return c.filters.forEach((p=>{p.getFlattenedFilters().forEach((g=>{g.isInequality()&&(f=f.add(g.field))}))})),f})(e).forEach((l=>{t.has(l.canonicalString())||l.isKeyField()||e.ce.push(new Fc(l,i))})),t.has(dt.keyField().canonicalString())||e.ce.push(new Fc(dt.keyField(),i))}return e.ce}function Cn(r){const e=ce(r);return e.le||(e.le=Bx(e,yl(r))),e.le}function Bx(r,e){if(r.limitType==="F")return e_(r.path,r.collectionGroup,e,r.filters,r.limit,r.startAt,r.endAt);{e=e.map((a=>{const l=a.dir==="desc"?"asc":"desc";return new Fc(a.field,l)}));const t=r.endAt?new js(r.endAt.position,r.endAt.inclusive):null,i=r.startAt?new js(r.startAt.position,r.startAt.inclusive):null;return e_(r.path,r.collectionGroup,e,r.filters,r.limit,t,i)}}function t_(r,e){const t=r.filters.concat([e]);return new kr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),t,r.limit,r.limitType,r.startAt,r.endAt)}function Ef(r,e,t){return new kr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),e,t,r.startAt,r.endAt)}function nh(r,e){return th(Cn(r),Cn(e))&&r.limitType===e.limitType}function IS(r){return`${Ja(Cn(r))}|lt:${r.limitType}`}function ll(r){return`Query(target=${(function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map((a=>vS(a))).join(", ")}]`),eh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map((a=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(a))).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map((a=>Sl(a))).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map((a=>Sl(a))).join(",")),`Target(${i})`})(Cn(r))}; limitType=${r.limitType})`}function ih(r,e){return e.isFoundDocument()&&(function(i,a){const l=a.key.path;return i.collectionGroup!==null?a.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):oe.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)})(r,e)&&(function(i,a){for(const l of yl(i))if(!l.field.isKeyField()&&a.data.field(l.field)===null)return!1;return!0})(r,e)&&(function(i,a){for(const l of i.filters)if(!l.matches(a))return!1;return!0})(r,e)&&(function(i,a){return!(i.startAt&&!(function(c,f,p){const g=gI(c,f,p);return c.inclusive?g<=0:g<0})(i.startAt,yl(i),a)||i.endAt&&!(function(c,f,p){const g=gI(c,f,p);return c.inclusive?g>=0:g>0})(i.endAt,yl(i),a))})(r,e)}function AS(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function bS(r){return(e,t)=>{let i=!1;for(const a of yl(r)){const l=Fx(a,e,t);if(l!==0)return l;i=i||a.field.isKeyField()}return 0}}function Fx(r,e,t){const i=r.field.isKeyField()?oe.comparator(e.key,t.key):(function(l,c,f){const p=c.data.field(l),g=f.data.field(l);return p!==null&&g!==null?qs(p,g):fe()})(r.field,e,t);switch(r.dir){case"asc":return i;case"desc":return-1*i;default:return fe()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[a,l]of i)if(this.equalsFn(a,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),a=this.inner[i];if(a===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<a.length;l++)if(this.equalsFn(a[l][0],e))return void(a[l]=[e,t]);a.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return i.length===1?delete this.inner[t]:i.splice(a,1),this.innerSize--,!0;return!1}forEach(e){oo(this.inner,((t,i)=>{for(const[a,l]of i)e(a,l)}))}isEmpty(){return hS(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qx=new st(oe.comparator);function qn(){return qx}const SS=new st(oe.comparator);function mc(...r){let e=SS;for(const t of r)e=e.insert(t.key,t);return e}function RS(r){let e=SS;return r.forEach(((t,i)=>e=e.insert(t,i.overlayedDocument))),e}function Ki(){return wc()}function CS(){return wc()}function wc(){return new Js((r=>r.toString()),((r,e)=>r.isEqual(e)))}const jx=new st(oe.comparator),Gx=new it(oe.comparator);function De(...r){let e=Gx;for(const t of r)e=e.add(t);return e}const Hx=new it(Re);function iy(){return Hx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(r,e){if(r.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Lc(e)?"-0":e}}function NS(r){return{integerValue:""+r}}function OS(r,e){return sS(e)?NS(e):DS(r,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(){this._=void 0}}function Kx(r,e,t){return r instanceof Cl?(function(a,l){const c={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:a.seconds,nanos:a.nanoseconds}}}};return l&&Gf(l)&&(l=ey(l)),l&&(c.fields.__previous_value__=l),{mapValue:c}})(t,e):r instanceof Za?VS(r,e):r instanceof eo?xS(r,e):(function(a,l){const c=PS(a,l),f=TI(c)+TI(a.Pe);return Wg(c)&&Wg(a.Pe)?NS(f):DS(a.serializer,f)})(r,e)}function Qx(r,e,t){return r instanceof Za?VS(r,e):r instanceof eo?xS(r,e):t}function PS(r,e){return r instanceof Dl?(function(i){return Wg(i)||(function(l){return!!l&&"doubleValue"in l})(i)})(e)?e:{integerValue:0}:null}class Cl extends Hf{}class Za extends Hf{constructor(e){super(),this.elements=e}}function VS(r,e){const t=MS(e);for(const i of r.elements)t.some((a=>Xi(a,i)))||t.push(i);return{arrayValue:{values:t}}}class eo extends Hf{constructor(e){super(),this.elements=e}}function xS(r,e){let t=MS(e);for(const i of r.elements)t=t.filter((a=>!Xi(a,i)));return{arrayValue:{values:t}}}class Dl extends Hf{constructor(e,t){super(),this.serializer=e,this.Pe=t}}function TI(r){return It(r.integerValue||r.doubleValue)}function MS(r){return Bc(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh{constructor(e,t){this.field=e,this.transform=t}}function Yx(r,e){return r.field.isEqual(e.field)&&(function(i,a){return i instanceof Za&&a instanceof Za||i instanceof eo&&a instanceof eo?bl(i.elements,a.elements,Xi):i instanceof Dl&&a instanceof Dl?Xi(i.Pe,a.Pe):i instanceof Cl&&a instanceof Cl})(r.transform,e.transform)}class $x{constructor(e,t){this.version=e,this.transformResults=t}}class ft{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new ft}static exists(e){return new ft(void 0,e)}static updateTime(e){return new ft(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function rf(r,e){return r.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(r.updateTime):r.exists===void 0||r.exists===e.isFoundDocument()}class Kf{}function kS(r,e){if(!r.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return r.isNoDocument()?new Ql(r.key,ft.none()):new Kl(r.key,r.data,ft.none());{const t=r.data,i=fn.empty();let a=new it(dt.comparator);for(let l of e.fields)if(!a.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),a=a.add(l)}return new Lr(r.key,i,new Fn(a.toArray()),ft.none())}}function Xx(r,e,t){r instanceof Kl?(function(a,l,c){const f=a.value.clone(),p=II(a.fieldTransforms,l,c.transformResults);f.setAll(p),l.convertToFoundDocument(c.version,f).setHasCommittedMutations()})(r,e,t):r instanceof Lr?(function(a,l,c){if(!rf(a.precondition,l))return void l.convertToUnknownDocument(c.version);const f=II(a.fieldTransforms,l,c.transformResults),p=l.data;p.setAll(LS(a)),p.setAll(f),l.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(r,e,t):(function(a,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function Ic(r,e,t,i){return r instanceof Kl?(function(l,c,f,p){if(!rf(l.precondition,c))return f;const g=l.value.clone(),v=AI(l.fieldTransforms,p,c);return g.setAll(v),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null})(r,e,t,i):r instanceof Lr?(function(l,c,f,p){if(!rf(l.precondition,c))return f;const g=AI(l.fieldTransforms,p,c),v=c.data;return v.setAll(LS(l)),v.setAll(g),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),f===null?null:f.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map((T=>T.field)))})(r,e,t,i):(function(l,c,f){return rf(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):f})(r,e,t)}function Wx(r,e){let t=null;for(const i of r.fieldTransforms){const a=e.data.field(i.field),l=PS(i.transform,a||null);l!=null&&(t===null&&(t=fn.empty()),t.set(i.field,l))}return t||null}function wI(r,e){return r.type===e.type&&!!r.key.isEqual(e.key)&&!!r.precondition.isEqual(e.precondition)&&!!(function(i,a){return i===void 0&&a===void 0||!(!i||!a)&&bl(i,a,((l,c)=>Yx(l,c)))})(r.fieldTransforms,e.fieldTransforms)&&(r.type===0?r.value.isEqual(e.value):r.type!==1||r.data.isEqual(e.data)&&r.fieldMask.isEqual(e.fieldMask))}class Kl extends Kf{constructor(e,t,i,a=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=a,this.type=0}getFieldMask(){return null}}class Lr extends Kf{constructor(e,t,i,a,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=a,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function LS(r){const e=new Map;return r.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const i=r.data.field(t);e.set(t,i)}})),e}function II(r,e,t){const i=new Map;_e(r.length===t.length);for(let a=0;a<t.length;a++){const l=r[a],c=l.transform,f=e.data.field(l.field);i.set(l.field,Qx(c,f,t[a]))}return i}function AI(r,e,t){const i=new Map;for(const a of r){const l=a.transform,c=t.data.field(a.field);i.set(a.field,Kx(l,c,e))}return i}class Ql extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ry extends Kf{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(e,t,i,a){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=a}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let a=0;a<this.mutations.length;a++){const l=this.mutations[a];l.key.isEqual(e.key)&&Xx(l,e,i[a])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=Ic(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=Ic(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=CS();return this.mutations.forEach((a=>{const l=e.get(a.key),c=l.overlayedDocument;let f=this.applyToLocalView(c,l.mutatedFields);f=t.has(a.key)?null:f;const p=kS(c,f);p!==null&&i.set(a.key,p),c.isValidDocument()||c.convertToNoDocument(ye.min())})),i}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),De())}isEqual(e){return this.batchId===e.batchId&&bl(this.mutations,e.mutations,((t,i)=>wI(t,i)))&&bl(this.baseMutations,e.baseMutations,((t,i)=>wI(t,i)))}}class ay{constructor(e,t,i,a){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=a}static from(e,t,i){_e(e.mutations.length===i.length);let a=(function(){return jx})();const l=e.mutations;for(let c=0;c<l.length;c++)a=a.insert(l[c].key,i[c].version);return new ay(e,t,i,a)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oy{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zt,qe;function US(r){switch(r){default:return fe();case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0}}function zS(r){if(r===void 0)return Pt("GRPC error has no .code"),H.UNKNOWN;switch(r){case zt.OK:return H.OK;case zt.CANCELLED:return H.CANCELLED;case zt.UNKNOWN:return H.UNKNOWN;case zt.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case zt.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case zt.INTERNAL:return H.INTERNAL;case zt.UNAVAILABLE:return H.UNAVAILABLE;case zt.UNAUTHENTICATED:return H.UNAUTHENTICATED;case zt.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case zt.NOT_FOUND:return H.NOT_FOUND;case zt.ALREADY_EXISTS:return H.ALREADY_EXISTS;case zt.PERMISSION_DENIED:return H.PERMISSION_DENIED;case zt.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case zt.ABORTED:return H.ABORTED;case zt.OUT_OF_RANGE:return H.OUT_OF_RANGE;case zt.UNIMPLEMENTED:return H.UNIMPLEMENTED;case zt.DATA_LOSS:return H.DATA_LOSS;default:return fe()}}(qe=zt||(zt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BS(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zx=new Ha([4294967295,4294967295],0);function bI(r){const e=BS().encode(r),t=new Gb;return t.update(e),new Uint8Array(t.digest())}function SI(r){const e=new DataView(r.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),a=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new Ha([t,i],0),new Ha([a,l],0)]}class ly{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new pc(`Invalid padding: ${t}`);if(i<0)throw new pc(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new pc(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new pc(`Invalid padding when bitmap length is 0: ${t}`);this.Ie=8*e.length-t,this.Te=Ha.fromNumber(this.Ie)}Ee(e,t,i){let a=e.add(t.multiply(Ha.fromNumber(i)));return a.compare(Zx)===1&&(a=new Ha([a.getBits(0),a.getBits(1)],0)),a.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const t=bI(e),[i,a]=SI(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,a,l);if(!this.de(c))return!1}return!0}static create(e,t,i){const a=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new ly(l,a,t);return i.forEach((f=>c.insert(f))),c}insert(e){if(this.Ie===0)return;const t=bI(e),[i,a]=SI(t);for(let l=0;l<this.hashCount;l++){const c=this.Ee(i,a,l);this.Ae(c)}}Ae(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class pc extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,t,i,a,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=a,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const a=new Map;return a.set(e,ah.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new sh(ye.min(),a,new st(Re),qn(),De())}}class ah{constructor(e,t,i,a,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=a,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new ah(i,t,De(),De(),De())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,i,a){this.Re=e,this.removedTargetIds=t,this.key=i,this.Ve=a}}class FS{constructor(e,t){this.targetId=e,this.me=t}}class qS{constructor(e,t,i=Gt.EMPTY_BYTE_STRING,a=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=a}}class RI{constructor(){this.fe=0,this.ge=DI(),this.pe=Gt.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=De(),t=De(),i=De();return this.ge.forEach(((a,l)=>{switch(l){case 0:e=e.add(a);break;case 2:t=t.add(a);break;case 1:i=i.add(a);break;default:fe()}})),new ah(this.pe,this.ye,e,t,i)}ve(){this.we=!1,this.ge=DI()}Fe(e,t){this.we=!0,this.ge=this.ge.insert(e,t)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,_e(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class e2{constructor(e){this.Le=e,this.Be=new Map,this.ke=qn(),this.qe=CI(),this.Qe=new st(Re)}Ke(e){for(const t of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(t,e.Ve):this.Ue(t,e.key,e.Ve);for(const t of e.removedTargetIds)this.Ue(t,e.key,e.Ve)}We(e){this.forEachTarget(e,(t=>{const i=this.Ge(t);switch(e.state){case 0:this.ze(t)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(t);break;case 3:this.ze(t)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(t)&&(this.je(t),i.De(e.resumeToken));break;default:fe()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Be.forEach(((i,a)=>{this.ze(a)&&t(a)}))}He(e){const t=e.targetId,i=e.me.count,a=this.Je(t);if(a){const l=a.target;if(yf(l))if(i===0){const c=new oe(l.path);this.Ue(t,c,ut.newNoDocument(c,ye.min()))}else _e(i===1);else{const c=this.Ye(t);if(c!==i){const f=this.Ze(e),p=f?this.Xe(f,e,c):1;if(p!==0){this.je(t);const g=p===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(t,g)}}}}}Ze(e){const t=e.me.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:a=0},hashCount:l=0}=t;let c,f;try{c=Bs(i).toUint8Array()}catch(p){if(p instanceof dS)return Ri("Decoding the base64 bloom filter in existence filter failed ("+p.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw p}try{f=new ly(c,a,l)}catch(p){return Ri(p instanceof pc?"BloomFilter error: ":"Applying bloom filter failed: ",p),null}return f.Ie===0?null:f}Xe(e,t,i){return t.me.count===i-this.nt(e,t.targetId)?0:2}nt(e,t){const i=this.Le.getRemoteKeysForTarget(t);let a=0;return i.forEach((l=>{const c=this.Le.tt(),f=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(f)||(this.Ue(t,l,null),a++)})),a}rt(e){const t=new Map;this.Be.forEach(((l,c)=>{const f=this.Je(c);if(f){if(l.current&&yf(f.target)){const p=new oe(f.target.path);this.ke.get(p)!==null||this.it(c,p)||this.Ue(c,p,ut.newNoDocument(p,e))}l.be&&(t.set(c,l.Ce()),l.ve())}}));let i=De();this.qe.forEach(((l,c)=>{let f=!0;c.forEachWhile((p=>{const g=this.Je(p);return!g||g.purpose==="TargetPurposeLimboResolution"||(f=!1,!1)})),f&&(i=i.add(l))})),this.ke.forEach(((l,c)=>c.setReadTime(e)));const a=new sh(e,t,this.Qe,this.ke,i);return this.ke=qn(),this.qe=CI(),this.Qe=new st(Re),a}$e(e,t){if(!this.ze(e))return;const i=this.it(e,t.key)?2:0;this.Ge(e).Fe(t.key,i),this.ke=this.ke.insert(t.key,t),this.qe=this.qe.insert(t.key,this.st(t.key).add(e))}Ue(e,t,i){if(!this.ze(e))return;const a=this.Ge(e);this.it(e,t)?a.Fe(t,1):a.Me(t),this.qe=this.qe.insert(t,this.st(t).delete(e)),i&&(this.ke=this.ke.insert(t,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const t=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let t=this.Be.get(e);return t||(t=new RI,this.Be.set(e,t)),t}st(e){let t=this.qe.get(e);return t||(t=new it(Re),this.qe=this.qe.insert(e,t)),t}ze(e){const t=this.Je(e)!==null;return t||te("WatchChangeAggregator","Detected inactive target",e),t}Je(e){const t=this.Be.get(e);return t&&t.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new RI),this.Le.getRemoteKeysForTarget(e).forEach((t=>{this.Ue(e,t,null)}))}it(e,t){return this.Le.getRemoteKeysForTarget(e).has(t)}}function CI(){return new st(oe.comparator)}function DI(){return new st(oe.comparator)}const t2={asc:"ASCENDING",desc:"DESCENDING"},n2={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},i2={and:"AND",or:"OR"};class r2{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function n_(r,e){return r.useProto3Json||eh(e)?e:{value:e}}function Nl(r,e){return r.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jS(r,e){return r.useProto3Json?e.toBase64():e.toUint8Array()}function s2(r,e){return Nl(r,e.toTimestamp())}function Vt(r){return _e(!!r),ye.fromTimestamp((function(t){const i=Pr(t);return new mt(i.seconds,i.nanos)})(r))}function uy(r,e){return i_(r,e).canonicalString()}function i_(r,e){const t=(function(a){return new Ue(["projects",a.projectId,"databases",a.database])})(r).child("documents");return e===void 0?t:t.child(e)}function GS(r){const e=Ue.fromString(r);return _e(e0(e)),e}function qc(r,e){return uy(r.databaseId,e.path)}function Yi(r,e){const t=GS(e);if(t.get(1)!==r.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+r.databaseId.projectId);if(t.get(3)!==r.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+r.databaseId.database);return new oe(QS(t))}function HS(r,e){return uy(r.databaseId,e)}function KS(r){const e=GS(r);return e.length===4?Ue.emptyPath():QS(e)}function r_(r){return new Ue(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function QS(r){return _e(r.length>4&&r.get(4)==="documents"),r.popFirst(5)}function NI(r,e,t){return{name:qc(r,e),fields:t.value.mapValue.fields}}function YS(r,e,t){const i=Yi(r,e.name),a=Vt(e.updateTime),l=e.createTime?Vt(e.createTime):ye.min(),c=new fn({mapValue:{fields:e.fields}}),f=ut.newFoundDocument(i,a,l,c);return t&&f.setHasCommittedMutations(),t?f.setHasCommittedMutations():f}function a2(r,e){return"found"in e?(function(i,a){_e(!!a.found),a.found.name,a.found.updateTime;const l=Yi(i,a.found.name),c=Vt(a.found.updateTime),f=a.found.createTime?Vt(a.found.createTime):ye.min(),p=new fn({mapValue:{fields:a.found.fields}});return ut.newFoundDocument(l,c,f,p)})(r,e):"missing"in e?(function(i,a){_e(!!a.missing),_e(!!a.readTime);const l=Yi(i,a.missing),c=Vt(a.readTime);return ut.newNoDocument(l,c)})(r,e):fe()}function o2(r,e){let t;if("targetChange"in e){e.targetChange;const i=(function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:fe()})(e.targetChange.targetChangeType||"NO_CHANGE"),a=e.targetChange.targetIds||[],l=(function(g,v){return g.useProto3Json?(_e(v===void 0||typeof v=="string"),Gt.fromBase64String(v||"")):(_e(v===void 0||v instanceof Buffer||v instanceof Uint8Array),Gt.fromUint8Array(v||new Uint8Array))})(r,e.targetChange.resumeToken),c=e.targetChange.cause,f=c&&(function(g){const v=g.code===void 0?H.UNKNOWN:zS(g.code);return new ee(v,g.message||"")})(c);t=new qS(i,a,l,f||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const a=Yi(r,i.document.name),l=Vt(i.document.updateTime),c=i.document.createTime?Vt(i.document.createTime):ye.min(),f=new fn({mapValue:{fields:i.document.fields}}),p=ut.newFoundDocument(a,l,c,f),g=i.targetIds||[],v=i.removedTargetIds||[];t=new sf(g,v,p.key,p)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const a=Yi(r,i.document),l=i.readTime?Vt(i.readTime):ye.min(),c=ut.newNoDocument(a,l),f=i.removedTargetIds||[];t=new sf([],f,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const a=Yi(r,i.document),l=i.removedTargetIds||[];t=new sf([],l,a,null)}else{if(!("filter"in e))return fe();{e.filter;const i=e.filter;i.targetId;const{count:a=0,unchangedNames:l}=i,c=new Jx(a,l),f=i.targetId;t=new FS(f,c)}}return t}function jc(r,e){let t;if(e instanceof Kl)t={update:NI(r,e.key,e.value)};else if(e instanceof Ql)t={delete:qc(r,e.key)};else if(e instanceof Lr)t={update:NI(r,e.key,e.data),updateMask:f2(e.fieldMask)};else{if(!(e instanceof ry))return fe();t={verify:qc(r,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((i=>(function(l,c){const f=c.transform;if(f instanceof Cl)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(f instanceof Za)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:f.elements}};if(f instanceof eo)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:f.elements}};if(f instanceof Dl)return{fieldPath:c.field.canonicalString(),increment:f.Pe};throw fe()})(0,i)))),e.precondition.isNone||(t.currentDocument=(function(a,l){return l.updateTime!==void 0?{updateTime:s2(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:fe()})(r,e.precondition)),t}function s_(r,e){const t=e.currentDocument?(function(l){return l.updateTime!==void 0?ft.updateTime(Vt(l.updateTime)):l.exists!==void 0?ft.exists(l.exists):ft.none()})(e.currentDocument):ft.none(),i=e.updateTransforms?e.updateTransforms.map((a=>(function(c,f){let p=null;if("setToServerValue"in f)_e(f.setToServerValue==="REQUEST_TIME"),p=new Cl;else if("appendMissingElements"in f){const v=f.appendMissingElements.values||[];p=new Za(v)}else if("removeAllFromArray"in f){const v=f.removeAllFromArray.values||[];p=new eo(v)}else"increment"in f?p=new Dl(c,f.increment):fe();const g=dt.fromServerFormat(f.fieldPath);return new rh(g,p)})(r,a))):[];if(e.update){e.update.name;const a=Yi(r,e.update.name),l=new fn({mapValue:{fields:e.update.fields}});if(e.updateMask){const c=(function(p){const g=p.fieldPaths||[];return new Fn(g.map((v=>dt.fromServerFormat(v))))})(e.updateMask);return new Lr(a,l,c,t,i)}return new Kl(a,l,t,i)}if(e.delete){const a=Yi(r,e.delete);return new Ql(a,t)}if(e.verify){const a=Yi(r,e.verify);return new ry(a,t)}return fe()}function l2(r,e){return r&&r.length>0?(_e(e!==void 0),r.map((t=>(function(a,l){let c=a.updateTime?Vt(a.updateTime):Vt(l);return c.isEqual(ye.min())&&(c=Vt(l)),new $x(c,a.transformResults||[])})(t,e)))):[]}function $S(r,e){return{documents:[HS(r,e.path)]}}function XS(r,e){const t={structuredQuery:{}},i=e.path;let a;e.collectionGroup!==null?(a=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(a=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=HS(r,a);const l=(function(g){if(g.length!==0)return ZS(Ze.create(g,"and"))})(e.filters);l&&(t.structuredQuery.where=l);const c=(function(g){if(g.length!==0)return g.map((v=>(function(A){return{field:ul(A.field),direction:c2(A.dir)}})(v)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const f=n_(r,e.limit);return f!==null&&(t.structuredQuery.limit=f),e.startAt&&(t.structuredQuery.startAt=(function(g){return{before:g.inclusive,values:g.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(g){return{before:!g.inclusive,values:g.position}})(e.endAt)),{_t:t,parent:a}}function WS(r){let e=KS(r.parent);const t=r.structuredQuery,i=t.from?t.from.length:0;let a=null;if(i>0){_e(i===1);const v=t.from[0];v.allDescendants?a=v.collectionId:e=e.child(v.collectionId)}let l=[];t.where&&(l=(function(T){const A=JS(T);return A instanceof Ze&&ty(A)?A.getFilters():[A]})(t.where));let c=[];t.orderBy&&(c=(function(T){return T.map((A=>(function(G){return new Fc(cl(G.field),(function($){switch($){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(G.direction))})(A)))})(t.orderBy));let f=null;t.limit&&(f=(function(T){let A;return A=typeof T=="object"?T.value:T,eh(A)?null:A})(t.limit));let p=null;t.startAt&&(p=(function(T){const A=!!T.before,P=T.values||[];return new js(P,A)})(t.startAt));let g=null;return t.endAt&&(g=(function(T){const A=!T.before,P=T.values||[];return new js(P,A)})(t.endAt)),wS(e,a,c,l,f,"F",p,g)}function u2(r,e){const t=(function(a){switch(a){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return fe()}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function JS(r){return r.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=cl(t.unaryFilter.field);return ze.create(i,"==",{doubleValue:NaN});case"IS_NULL":const a=cl(t.unaryFilter.field);return ze.create(a,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=cl(t.unaryFilter.field);return ze.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=cl(t.unaryFilter.field);return ze.create(c,"!=",{nullValue:"NULL_VALUE"});default:return fe()}})(r):r.fieldFilter!==void 0?(function(t){return ze.create(cl(t.fieldFilter.field),(function(a){switch(a){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return fe()}})(t.fieldFilter.op),t.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(t){return Ze.create(t.compositeFilter.filters.map((i=>JS(i))),(function(a){switch(a){case"AND":return"and";case"OR":return"or";default:return fe()}})(t.compositeFilter.op))})(r):fe()}function c2(r){return t2[r]}function h2(r){return n2[r]}function d2(r){return i2[r]}function ul(r){return{fieldPath:r.canonicalString()}}function cl(r){return dt.fromServerFormat(r.fieldPath)}function ZS(r){return r instanceof ze?(function(t){if(t.op==="=="){if(fI(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NAN"}};if(dI(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(fI(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NOT_NAN"}};if(dI(t.value))return{unaryFilter:{field:ul(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ul(t.field),op:h2(t.op),value:t.value}}})(r):r instanceof Ze?(function(t){const i=t.getFilters().map((a=>ZS(a)));return i.length===1?i[0]:{compositeFilter:{op:d2(t.op),filters:i}}})(r):fe()}function f2(r){const e=[];return r.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function e0(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(e,t,i,a,l=ye.min(),c=ye.min(),f=Gt.EMPTY_BYTE_STRING,p=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=a,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=f,this.expectedCount=p}withSequenceNumber(e){return new Cr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Cr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t0{constructor(e){this.ct=e}}function m2(r,e){let t;if(e.document)t=YS(r.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=oe.fromSegments(e.noDocument.path),a=no(e.noDocument.readTime);t=ut.newNoDocument(i,a),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return fe();{const i=oe.fromSegments(e.unknownDocument.path),a=no(e.unknownDocument.version);t=ut.newUnknownDocument(i,a)}}return e.readTime&&t.setReadTime((function(a){const l=new mt(a[0],a[1]);return ye.fromTimestamp(l)})(e.readTime)),t}function OI(r,e){const t=e.key,i={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Tf(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=(function(l,c){return{name:qc(l,c.key),fields:c.data.value.mapValue.fields,updateTime:Nl(l,c.version.toTimestamp()),createTime:Nl(l,c.createTime.toTimestamp())}})(r.ct,e);else if(e.isNoDocument())i.noDocument={path:t.path.toArray(),readTime:to(e.version)};else{if(!e.isUnknownDocument())return fe();i.unknownDocument={path:t.path.toArray(),version:to(e.version)}}return i}function Tf(r){const e=r.toTimestamp();return[e.seconds,e.nanoseconds]}function to(r){const e=r.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function no(r){const e=new mt(r.seconds,r.nanoseconds);return ye.fromTimestamp(e)}function xa(r,e){const t=(e.baseMutations||[]).map((l=>s_(r.ct,l)));for(let l=0;l<e.mutations.length-1;++l){const c=e.mutations[l];if(l+1<e.mutations.length&&e.mutations[l+1].transform!==void 0){const f=e.mutations[l+1];c.updateTransforms=f.transform.fieldTransforms,e.mutations.splice(l+1,1),++l}}const i=e.mutations.map((l=>s_(r.ct,l))),a=mt.fromMillis(e.localWriteTimeMs);return new sy(e.batchId,a,t,i)}function gc(r){const e=no(r.readTime),t=r.lastLimboFreeSnapshotVersion!==void 0?no(r.lastLimboFreeSnapshotVersion):ye.min();let i;return i=(function(l){return l.documents!==void 0})(r.query)?(function(l){return _e(l.documents.length===1),Cn(Hl(KS(l.documents[0])))})(r.query):(function(l){return Cn(WS(l))})(r.query),new Cr(i,r.targetId,"TargetPurposeListen",r.lastListenSequenceNumber,e,t,Gt.fromBase64String(r.resumeToken))}function n0(r,e){const t=to(e.snapshotVersion),i=to(e.lastLimboFreeSnapshotVersion);let a;a=yf(e.target)?$S(r.ct,e.target):XS(r.ct,e.target)._t;const l=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Ja(e.target),readTime:t,resumeToken:l,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:a}}function cy(r){const e=WS({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?Ef(e,e.limit,"L"):e}function Ng(r,e){return new oy(e.largestBatchId,s_(r.ct,e.overlayMutation))}function PI(r,e){const t=e.path.lastSegment();return[r,Rn(e.path.popLast()),t]}function VI(r,e,t,i){return{indexId:r,uid:e,sequenceNumber:t,readTime:to(i.readTime),documentKey:Rn(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p2{getBundleMetadata(e,t){return xI(e).get(t).next((i=>{if(i)return(function(l){return{id:l.bundleId,createTime:no(l.createTime),version:l.version}})(i)}))}saveBundleMetadata(e,t){return xI(e).put((function(a){return{bundleId:a.id,createTime:to(Vt(a.createTime)),version:a.version}})(t))}getNamedQuery(e,t){return MI(e).get(t).next((i=>{if(i)return(function(l){return{name:l.name,query:cy(l.bundledQuery),readTime:no(l.readTime)}})(i)}))}saveNamedQuery(e,t){return MI(e).put((function(a){return{name:a.name,readTime:to(Vt(a.readTime)),bundledQuery:a.bundledQuery}})(t))}}function xI(r){return tn(r,"bundles")}function MI(r){return tn(r,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e,t){this.serializer=e,this.userId=t}static lt(e,t){const i=t.uid||"";return new Qf(e,i)}getOverlay(e,t){return rc(e).get(PI(this.userId,t)).next((i=>i?Ng(this.serializer,i):null))}getOverlays(e,t){const i=Ki();return F.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){const a=[];return i.forEach(((l,c)=>{const f=new oy(t,c);a.push(this.ht(e,f))})),F.waitFor(a)}removeOverlaysForBatchId(e,t,i){const a=new Set;t.forEach((c=>a.add(Rn(c.getCollectionPath()))));const l=[];return a.forEach((c=>{const f=IDBKeyRange.bound([this.userId,c,i],[this.userId,c,i+1],!1,!0);l.push(rc(e).j("collectionPathOverlayIndex",f))})),F.waitFor(l)}getOverlaysForCollection(e,t,i){const a=Ki(),l=Rn(t),c=IDBKeyRange.bound([this.userId,l,i],[this.userId,l,Number.POSITIVE_INFINITY],!0);return rc(e).U("collectionPathOverlayIndex",c).next((f=>{for(const p of f){const g=Ng(this.serializer,p);a.set(g.getKey(),g)}return a}))}getOverlaysForCollectionGroup(e,t,i,a){const l=Ki();let c;const f=IDBKeyRange.bound([this.userId,t,i],[this.userId,t,Number.POSITIVE_INFINITY],!0);return rc(e).J({index:"collectionGroupOverlayIndex",range:f},((p,g,v)=>{const T=Ng(this.serializer,g);l.size()<a||T.largestBatchId===c?(l.set(T.getKey(),T),c=T.largestBatchId):v.done()})).next((()=>l))}ht(e,t){return rc(e).put((function(a,l,c){const[f,p,g]=PI(l,c.mutation.key);return{userId:l,collectionPath:p,documentId:g,collectionGroup:c.mutation.key.getCollectionGroup(),largestBatchId:c.largestBatchId,overlayMutation:jc(a.ct,c.mutation)}})(this.serializer,this.userId,t))}}function rc(r){return tn(r,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ma{constructor(){}Pt(e,t){this.It(e,t),t.Tt()}It(e,t){if("nullValue"in e)this.Et(t,5);else if("booleanValue"in e)this.Et(t,10),t.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(t,15),t.dt(It(e.integerValue));else if("doubleValue"in e){const i=It(e.doubleValue);isNaN(i)?this.Et(t,13):(this.Et(t,15),Lc(i)?t.dt(0):t.dt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Et(t,20),typeof i=="string"&&(i=Pr(i)),t.At(`${i.seconds||""}`),t.dt(i.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,t),this.Vt(t);else if("bytesValue"in e)this.Et(t,30),t.ft(Bs(e.bytesValue)),this.Vt(t);else if("referenceValue"in e)this.gt(e.referenceValue,t);else if("geoPointValue"in e){const i=e.geoPointValue;this.Et(t,45),t.dt(i.latitude||0),t.dt(i.longitude||0)}else"mapValue"in e?fS(e)?this.Et(t,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,t),this.Vt(t)):"arrayValue"in e?(this.wt(e.arrayValue,t),this.Vt(t)):fe()}Rt(e,t){this.Et(t,25),this.St(e,t)}St(e,t){t.At(e)}yt(e,t){const i=e.fields||{};this.Et(t,55);for(const a of Object.keys(i))this.Rt(a,t),this.It(i[a],t)}wt(e,t){const i=e.values||[];this.Et(t,50);for(const a of i)this.It(a,t)}gt(e,t){this.Et(t,37),oe.fromName(e).path.forEach((i=>{this.Et(t,60),this.St(i,t)}))}Et(e,t){e.dt(t)}Vt(e){e.dt(2)}}Ma.bt=new Ma;function g2(r){if(r===0)return 8;let e=0;return r>>4==0&&(e+=4,r<<=4),r>>6==0&&(e+=2,r<<=2),r>>7==0&&(e+=1),e}function kI(r){const e=64-(function(i){let a=0;for(let l=0;l<8;++l){const c=g2(255&i[l]);if(a+=c,c!==8)break}return a})(r);return Math.ceil(e/8)}class _2{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Ct(i.value),i=t.next();this.vt()}Ft(e){const t=e[Symbol.iterator]();let i=t.next();for(;!i.done;)this.Mt(i.value),i=t.next();this.xt()}Ot(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Ct(i);else if(i<2048)this.Ct(960|i>>>6),this.Ct(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Ct(480|i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i);else{const a=t.codePointAt(0);this.Ct(240|a>>>18),this.Ct(128|63&a>>>12),this.Ct(128|63&a>>>6),this.Ct(128|63&a)}}this.vt()}Nt(e){for(const t of e){const i=t.charCodeAt(0);if(i<128)this.Mt(i);else if(i<2048)this.Mt(960|i>>>6),this.Mt(128|63&i);else if(t<"\uD800"||"\uDBFF"<t)this.Mt(480|i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i);else{const a=t.codePointAt(0);this.Mt(240|a>>>18),this.Mt(128|63&a>>>12),this.Mt(128|63&a>>>6),this.Mt(128|63&a)}}this.xt()}Lt(e){const t=this.Bt(e),i=kI(t);this.kt(1+i),this.buffer[this.position++]=255&i;for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=255&t[a]}qt(e){const t=this.Bt(e),i=kI(t);this.kt(1+i),this.buffer[this.position++]=~(255&i);for(let a=t.length-i;a<t.length;++a)this.buffer[this.position++]=~(255&t[a])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const t=(function(l){const c=new DataView(new ArrayBuffer(8));return c.setFloat64(0,l,!1),new Uint8Array(c.buffer)})(e),i=(128&t[0])!=0;t[0]^=i?255:128;for(let a=1;a<t.length;++a)t[a]^=i?255:0;return t}Ct(e){const t=255&e;t===0?(this.Kt(0),this.Kt(255)):t===255?(this.Kt(255),this.Kt(0)):this.Kt(t)}Mt(e){const t=255&e;t===0?(this.Ut(0),this.Ut(255)):t===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const t=e+this.position;if(t<=this.buffer.length)return;let i=2*this.buffer.length;i<t&&(i=t);const a=new Uint8Array(i);a.set(this.buffer),this.buffer=a}}class y2{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class v2{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class sc{constructor(){this.Gt=new _2,this.zt=new y2(this.Gt),this.jt=new v2(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(e,t,i,a){this.indexId=e,this.documentKey=t,this.arrayValue=i,this.directionalValue=a}Jt(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(t);return i.set(this.directionalValue,0),t!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new ka(this.indexId,this.documentKey,this.arrayValue,i)}}function Cs(r,e){let t=r.indexId-e.indexId;return t!==0?t:(t=LI(r.arrayValue,e.arrayValue),t!==0?t:(t=LI(r.directionalValue,e.directionalValue),t!==0?t:oe.comparator(r.documentKey,e.documentKey)))}function LI(r,e){for(let t=0;t<r.length&&t<e.length;++t){const i=r[t]-e[t];if(i!==0)return i}return r.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(e){this.Yt=new it(((t,i)=>dt.comparator(t.field,i.field))),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const t of e.filters){const i=t;i.isInequality()?this.Yt=this.Yt.add(i):this.Xt.push(i)}}get en(){return this.Yt.size>1}tn(e){if(_e(e.collectionGroup===this.collectionId),this.en)return!1;const t=Yg(e);if(t!==void 0&&!this.nn(t))return!1;const i=Pa(e);let a=new Set,l=0,c=0;for(;l<i.length&&this.nn(i[l]);++l)a=a.add(i[l].fieldPath.canonicalString());if(l===i.length)return!0;if(this.Yt.size>0){const f=this.Yt.getIterator().getNext();if(!a.has(f.field.canonicalString())){const p=i[l];if(!this.rn(f,p)||!this.sn(this.Zt[c++],p))return!1}++l}for(;l<i.length;++l){const f=i[l];if(c>=this.Zt.length||!this.sn(this.Zt[c++],f))return!1}return!0}on(){if(this.en)return null;let e=new it(dt.comparator);const t=[];for(const i of this.Xt)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")t.push(new Zd(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),t.push(new Zd(i.field,0))}for(const i of this.Zt)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),t.push(new Zd(i.field,i.dir==="asc"?0:1)));return new _f(_f.UNKNOWN_ID,this.collectionId,t,kc.empty())}nn(e){for(const t of this.Xt)if(this.rn(t,e))return!0;return!1}rn(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===i}sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i0(r){var e,t;if(_e(r instanceof ze||r instanceof Ze),r instanceof ze){if(r instanceof TS){const a=((t=(e=r.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map((l=>ze.create(r.field,"==",l))))||[];return Ze.create(a,"or")}return r}const i=r.filters.map((a=>i0(a)));return Ze.create(i,r.op)}function E2(r){if(r.getFilters().length===0)return[];const e=l_(i0(r));return _e(r0(e)),a_(e)||o_(e)?[e]:e.getFilters()}function a_(r){return r instanceof ze}function o_(r){return r instanceof Ze&&ty(r)}function r0(r){return a_(r)||o_(r)||(function(t){if(t instanceof Ze&&Jg(t)){for(const i of t.getFilters())if(!a_(i)&&!o_(i))return!1;return!0}return!1})(r)}function l_(r){if(_e(r instanceof ze||r instanceof Ze),r instanceof ze)return r;if(r.filters.length===1)return l_(r.filters[0]);const e=r.filters.map((i=>l_(i)));let t=Ze.create(e,r.op);return t=wf(t),r0(t)?t:(_e(t instanceof Ze),_e(Rl(t)),_e(t.filters.length>1),t.filters.reduce(((i,a)=>hy(i,a))))}function hy(r,e){let t;return _e(r instanceof ze||r instanceof Ze),_e(e instanceof ze||e instanceof Ze),t=r instanceof ze?e instanceof ze?(function(a,l){return Ze.create([a,l],"and")})(r,e):zI(r,e):e instanceof ze?zI(e,r):(function(a,l){if(_e(a.filters.length>0&&l.filters.length>0),Rl(a)&&Rl(l))return yS(a,l.getFilters());const c=Jg(a)?a:l,f=Jg(a)?l:a,p=c.filters.map((g=>hy(g,f)));return Ze.create(p,"or")})(r,e),wf(t)}function zI(r,e){if(Rl(e))return yS(e,r.getFilters());{const t=e.filters.map((i=>hy(r,i)));return Ze.create(t,"or")}}function wf(r){if(_e(r instanceof ze||r instanceof Ze),r instanceof ze)return r;const e=r.getFilters();if(e.length===1)return wf(e[0]);if(gS(r))return r;const t=e.map((a=>wf(a))),i=[];return t.forEach((a=>{a instanceof ze?i.push(a):a instanceof Ze&&(a.op===r.op?i.push(...a.filters):i.push(a))})),i.length===1?i[0]:Ze.create(i,r.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T2{constructor(){this._n=new dy}addToCollectionParentIndex(e,t){return this._n.add(t),F.resolve()}getCollectionParents(e,t){return F.resolve(this._n.getEntries(t))}addFieldIndex(e,t){return F.resolve()}deleteFieldIndex(e,t){return F.resolve()}deleteAllFieldIndexes(e){return F.resolve()}createTargetIndexes(e,t){return F.resolve()}getDocumentsMatchingTarget(e,t){return F.resolve(null)}getIndexType(e,t){return F.resolve(0)}getFieldIndexes(e,t){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,t){return F.resolve(ti.min())}getMinOffsetFromCollectionGroup(e,t){return F.resolve(ti.min())}updateCollectionGroup(e,t,i){return F.resolve()}updateIndexEntries(e,t){return F.resolve()}}class dy{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t]||new it(Ue.comparator),l=!a.has(i);return this.index[t]=a.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),a=this.index[t];return a&&a.has(i)}getEntries(e){return(this.index[e]||new it(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=new Uint8Array(0);class w2{constructor(e,t){this.databaseId=t,this.an=new dy,this.un=new Js((i=>Ja(i)),((i,a)=>th(i,a))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.an.has(t)){const i=t.lastSegment(),a=t.popLast();e.addOnCommittedListener((()=>{this.an.add(t)}));const l={collectionId:i,parent:Rn(a)};return BI(e).put(l)}return F.resolve()}getCollectionParents(e,t){const i=[],a=IDBKeyRange.bound([t,""],[Zb(t),""],!1,!0);return BI(e).U(a).next((l=>{for(const c of l){if(c.collectionId!==t)break;i.push(Hi(c.parent))}return i}))}addFieldIndex(e,t){const i=ac(e),a=(function(f){return{indexId:f.indexId,collectionGroup:f.collectionGroup,fields:f.fields.map((p=>[p.fieldPath.canonicalString(),p.kind]))}})(t);delete a.indexId;const l=i.add(a);if(t.indexState){const c=sl(e);return l.next((f=>{c.put(VI(f,this.uid,t.indexState.sequenceNumber,t.indexState.offset))}))}return l.next()}deleteFieldIndex(e,t){const i=ac(e),a=sl(e),l=rl(e);return i.delete(t.indexId).next((()=>a.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>l.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}deleteAllFieldIndexes(e){const t=ac(e),i=rl(e),a=sl(e);return t.j().next((()=>i.j())).next((()=>a.j()))}createTargetIndexes(e,t){return F.forEach(this.cn(t),(i=>this.getIndexType(e,i).next((a=>{if(a===0||a===1){const l=new UI(i).on();if(l!=null)return this.addFieldIndex(e,l)}}))))}getDocumentsMatchingTarget(e,t){const i=rl(e);let a=!0;const l=new Map;return F.forEach(this.cn(t),(c=>this.ln(e,c).next((f=>{a&&(a=!!f),l.set(c,f)})))).next((()=>{if(a){let c=De();const f=[];return F.forEach(l,((p,g)=>{te("IndexedDbIndexManager",`Using index ${(function(re){return`id=${re.indexId}|cg=${re.collectionGroup}|f=${re.fields.map((ve=>`${ve.fieldPath}:${ve.kind}`)).join(",")}`})(p)} to execute ${Ja(t)}`);const v=(function(re,ve){const de=Yg(ve);if(de===void 0)return null;for(const ue of vf(re,de.fieldPath))switch(ue.op){case"array-contains-any":return ue.value.arrayValue.values||[];case"array-contains":return[ue.value]}return null})(g,p),T=(function(re,ve){const de=new Map;for(const ue of Pa(ve))for(const R of vf(re,ue.fieldPath))switch(R.op){case"==":case"in":de.set(ue.fieldPath.canonicalString(),R.value);break;case"not-in":case"!=":return de.set(ue.fieldPath.canonicalString(),R.value),Array.from(de.values())}return null})(g,p),A=(function(re,ve){const de=[];let ue=!0;for(const R of Pa(ve)){const b=R.kind===0?yI(re,R.fieldPath,re.startAt):vI(re,R.fieldPath,re.startAt);de.push(b.value),ue&&(ue=b.inclusive)}return new js(de,ue)})(g,p),P=(function(re,ve){const de=[];let ue=!0;for(const R of Pa(ve)){const b=R.kind===0?vI(re,R.fieldPath,re.endAt):yI(re,R.fieldPath,re.endAt);de.push(b.value),ue&&(ue=b.inclusive)}return new js(de,ue)})(g,p),G=this.hn(p,g,A),Q=this.hn(p,g,P),$=this.Pn(p,g,T),le=this.In(p.indexId,v,G,A.inclusive,Q,P.inclusive,$);return F.forEach(le,(he=>i.G(he,t.limit).next((re=>{re.forEach((ve=>{const de=oe.fromSegments(ve.documentKey);c.has(de)||(c=c.add(de),f.push(de))}))}))))})).next((()=>f))}return F.resolve(null)}))}cn(e){let t=this.un.get(e);return t||(e.filters.length===0?t=[e]:t=E2(Ze.create(e.filters,"and")).map((i=>e_(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt))),this.un.set(e,t),t)}In(e,t,i,a,l,c,f){const p=(t!=null?t.length:1)*Math.max(i.length,l.length),g=p/(t!=null?t.length:1),v=[];for(let T=0;T<p;++T){const A=t?this.Tn(t[T/g]):Gd,P=this.En(e,A,i[T%g],a),G=this.dn(e,A,l[T%g],c),Q=f.map(($=>this.En(e,A,$,!0)));v.push(...this.createRange(P,G,Q))}return v}En(e,t,i,a){const l=new ka(e,oe.empty(),t,i);return a?l:l.Jt()}dn(e,t,i,a){const l=new ka(e,oe.empty(),t,i);return a?l.Jt():l}ln(e,t){const i=new UI(t),a=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,a).next((l=>{let c=null;for(const f of l)i.tn(f)&&(!c||f.fields.length>c.fields.length)&&(c=f);return c}))}getIndexType(e,t){let i=2;const a=this.cn(t);return F.forEach(a,(l=>this.ln(e,l).next((c=>{c?i!==0&&c.fields.length<(function(p){let g=new it(dt.comparator),v=!1;for(const T of p.filters)for(const A of T.getFlattenedFilters())A.field.isKeyField()||(A.op==="array-contains"||A.op==="array-contains-any"?v=!0:g=g.add(A.field));for(const T of p.orderBy)T.field.isKeyField()||(g=g.add(T.field));return g.size+(v?1:0)})(l)&&(i=1):i=0})))).next((()=>(function(c){return c.limit!==null})(t)&&a.length>1&&i===2?1:i))}An(e,t){const i=new sc;for(const a of Pa(e)){const l=t.data.field(a.fieldPath);if(l==null)return null;const c=i.Ht(a.kind);Ma.bt.Pt(l,c)}return i.Wt()}Tn(e){const t=new sc;return Ma.bt.Pt(e,t.Ht(0)),t.Wt()}Rn(e,t){const i=new sc;return Ma.bt.Pt(Wa(this.databaseId,t),i.Ht((function(l){const c=Pa(l);return c.length===0?0:c[c.length-1].kind})(e))),i.Wt()}Pn(e,t,i){if(i===null)return[];let a=[];a.push(new sc);let l=0;for(const c of Pa(e)){const f=i[l++];for(const p of a)if(this.Vn(t,c.fieldPath)&&Bc(f))a=this.mn(a,c,f);else{const g=p.Ht(c.kind);Ma.bt.Pt(f,g)}}return this.fn(a)}hn(e,t,i){return this.Pn(e,t,i.position)}fn(e){const t=[];for(let i=0;i<e.length;++i)t[i]=e[i].Wt();return t}mn(e,t,i){const a=[...e],l=[];for(const c of i.arrayValue.values||[])for(const f of a){const p=new sc;p.seed(f.Wt()),Ma.bt.Pt(c,p.Ht(t.kind)),l.push(p)}return l}Vn(e,t){return!!e.filters.find((i=>i instanceof ze&&i.field.isEqual(t)&&(i.op==="in"||i.op==="not-in")))}getFieldIndexes(e,t){const i=ac(e),a=sl(e);return(t?i.U("collectionGroupIndex",IDBKeyRange.bound(t,t)):i.U()).next((l=>{const c=[];return F.forEach(l,(f=>a.get([f.indexId,this.uid]).next((p=>{c.push((function(v,T){const A=T?new kc(T.sequenceNumber,new ti(no(T.readTime),new oe(Hi(T.documentKey)),T.largestBatchId)):kc.empty(),P=v.fields.map((([G,Q])=>new Zd(dt.fromServerFormat(G),Q)));return new _f(v.indexId,v.collectionGroup,P,A)})(f,p))})))).next((()=>c))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((t=>t.length===0?null:(t.sort(((i,a)=>{const l=i.indexState.sequenceNumber-a.indexState.sequenceNumber;return l!==0?l:Re(i.collectionGroup,a.collectionGroup)})),t[0].collectionGroup)))}updateCollectionGroup(e,t,i){const a=ac(e),l=sl(e);return this.gn(e).next((c=>a.U("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((f=>F.forEach(f,(p=>l.put(VI(p.indexId,this.uid,c,i))))))))}updateIndexEntries(e,t){const i=new Map;return F.forEach(t,((a,l)=>{const c=i.get(a.collectionGroup);return(c?F.resolve(c):this.getFieldIndexes(e,a.collectionGroup)).next((f=>(i.set(a.collectionGroup,f),F.forEach(f,(p=>this.pn(e,a,p).next((g=>{const v=this.yn(l,p);return g.isEqual(v)?F.resolve():this.wn(e,l,p,g,v)})))))))}))}Sn(e,t,i,a){return rl(e).put({indexId:a.indexId,uid:this.uid,arrayValue:a.arrayValue,directionalValue:a.directionalValue,orderedDocumentKey:this.Rn(i,t.key),documentKey:t.key.path.toArray()})}bn(e,t,i,a){return rl(e).delete([a.indexId,this.uid,a.arrayValue,a.directionalValue,this.Rn(i,t.key),t.key.path.toArray()])}pn(e,t,i){const a=rl(e);let l=new it(Cs);return a.J({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.Rn(i,t)])},((c,f)=>{l=l.add(new ka(i.indexId,t,f.arrayValue,f.directionalValue))})).next((()=>l))}yn(e,t){let i=new it(Cs);const a=this.An(t,e);if(a==null)return i;const l=Yg(t);if(l!=null){const c=e.data.field(l.fieldPath);if(Bc(c))for(const f of c.arrayValue.values||[])i=i.add(new ka(t.indexId,e.key,this.Tn(f),a))}else i=i.add(new ka(t.indexId,e.key,Gd,a));return i}wn(e,t,i,a,l){te("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const c=[];return(function(p,g,v,T,A){const P=p.getIterator(),G=g.getIterator();let Q=il(P),$=il(G);for(;Q||$;){let le=!1,he=!1;if(Q&&$){const re=v(Q,$);re<0?he=!0:re>0&&(le=!0)}else Q!=null?he=!0:le=!0;le?(T($),$=il(G)):he?(A(Q),Q=il(P)):(Q=il(P),$=il(G))}})(a,l,Cs,(f=>{c.push(this.Sn(e,t,i,f))}),(f=>{c.push(this.bn(e,t,i,f))})),F.waitFor(c)}gn(e){let t=1;return sl(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((i,a,l)=>{l.done(),t=a.sequenceNumber+1})).next((()=>t))}createRange(e,t,i){i=i.sort(((c,f)=>Cs(c,f))).filter(((c,f,p)=>!f||Cs(c,p[f-1])!==0));const a=[];a.push(e);for(const c of i){const f=Cs(c,e),p=Cs(c,t);if(f===0)a[0]=e.Jt();else if(f>0&&p<0)a.push(c),a.push(c.Jt());else if(p>0)break}a.push(t);const l=[];for(let c=0;c<a.length;c+=2){if(this.Dn(a[c],a[c+1]))return[];const f=[a[c].indexId,this.uid,a[c].arrayValue,a[c].directionalValue,Gd,[]],p=[a[c+1].indexId,this.uid,a[c+1].arrayValue,a[c+1].directionalValue,Gd,[]];l.push(IDBKeyRange.bound(f,p))}return l}Dn(e,t){return Cs(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(FI)}getMinOffset(e,t){return F.mapArray(this.cn(t),(i=>this.ln(e,i).next((a=>a||fe())))).next(FI)}}function BI(r){return tn(r,"collectionParents")}function rl(r){return tn(r,"indexEntries")}function ac(r){return tn(r,"indexConfiguration")}function sl(r){return tn(r,"indexState")}function FI(r){_e(r.length!==0);let e=r[0].indexState.offset,t=e.largestBatchId;for(let i=1;i<r.length;i++){const a=r[i].indexState.offset;J_(a,e)<0&&(e=a),t<a.largestBatchId&&(t=a.largestBatchId)}return new ti(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qI={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Un{constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Un(e,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function s0(r,e,t){const i=r.store("mutations"),a=r.store("documentMutations"),l=[],c=IDBKeyRange.only(t.batchId);let f=0;const p=i.J({range:c},((v,T,A)=>(f++,A.delete())));l.push(p.next((()=>{_e(f===1)})));const g=[];for(const v of t.mutations){const T=aS(e,v.key.path,t.batchId);l.push(a.delete(T)),g.push(v.key)}return F.waitFor(l).next((()=>g))}function If(r){if(!r)return 0;let e;if(r.document)e=r.document;else if(r.unknownDocument)e=r.unknownDocument;else{if(!r.noDocument)throw fe();e=r.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un.DEFAULT_COLLECTION_PERCENTILE=10,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Un.DEFAULT=new Un(41943040,Un.DEFAULT_COLLECTION_PERCENTILE,Un.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Un.DISABLED=new Un(-1,0,0);class Yf{constructor(e,t,i,a){this.userId=e,this.serializer=t,this.indexManager=i,this.referenceDelegate=a,this.Cn={}}static lt(e,t,i,a){_e(e.uid!=="");const l=e.isAuthenticated()?e.uid:"";return new Yf(l,t,i,a)}checkEmpty(e){let t=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).J({index:"userMutationsIndex",range:i},((a,l,c)=>{t=!1,c.done()})).next((()=>t))}addMutationBatch(e,t,i,a){const l=hl(e),c=Ds(e);return c.add({}).next((f=>{_e(typeof f=="number");const p=new sy(f,t,i,a),g=(function(P,G,Q){const $=Q.baseMutations.map((he=>jc(P.ct,he))),le=Q.mutations.map((he=>jc(P.ct,he)));return{userId:G,batchId:Q.batchId,localWriteTimeMs:Q.localWriteTime.toMillis(),baseMutations:$,mutations:le}})(this.serializer,this.userId,p),v=[];let T=new it(((A,P)=>Re(A.canonicalString(),P.canonicalString())));for(const A of a){const P=aS(this.userId,A.key.path,f);T=T.add(A.key.path.popLast()),v.push(c.put(g)),v.push(l.put(P,cx))}return T.forEach((A=>{v.push(this.indexManager.addToCollectionParentIndex(e,A))})),e.addOnCommittedListener((()=>{this.Cn[f]=p.keys()})),F.waitFor(v).next((()=>p))}))}lookupMutationBatch(e,t){return Ds(e).get(t).next((i=>i?(_e(i.userId===this.userId),xa(this.serializer,i)):null))}vn(e,t){return this.Cn[t]?F.resolve(this.Cn[t]):this.lookupMutationBatch(e,t).next((i=>{if(i){const a=i.keys();return this.Cn[t]=a,a}return null}))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=IDBKeyRange.lowerBound([this.userId,i]);let l=null;return Ds(e).J({index:"userMutationsIndex",range:a},((c,f,p)=>{f.userId===this.userId&&(_e(f.batchId>=i),l=xa(this.serializer,f)),p.done()})).next((()=>l))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Ds(e).J({index:"userMutationsIndex",range:t,reverse:!0},((a,l,c)=>{i=l.batchId,c.done()})).next((()=>i))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Ds(e).U("userMutationsIndex",t).next((i=>i.map((a=>xa(this.serializer,a)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const i=ef(this.userId,t.path),a=IDBKeyRange.lowerBound(i),l=[];return hl(e).J({range:a},((c,f,p)=>{const[g,v,T]=c,A=Hi(v);if(g===this.userId&&t.path.isEqual(A))return Ds(e).get(T).next((P=>{if(!P)throw fe();_e(P.userId===this.userId),l.push(xa(this.serializer,P))}));p.done()})).next((()=>l))}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new it(Re);const a=[];return t.forEach((l=>{const c=ef(this.userId,l.path),f=IDBKeyRange.lowerBound(c),p=hl(e).J({range:f},((g,v,T)=>{const[A,P,G]=g,Q=Hi(P);A===this.userId&&l.path.isEqual(Q)?i=i.add(G):T.done()}));a.push(p)})),F.waitFor(a).next((()=>this.Fn(e,i)))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1,l=ef(this.userId,i),c=IDBKeyRange.lowerBound(l);let f=new it(Re);return hl(e).J({range:c},((p,g,v)=>{const[T,A,P]=p,G=Hi(A);T===this.userId&&i.isPrefixOf(G)?G.length===a&&(f=f.add(P)):v.done()})).next((()=>this.Fn(e,f)))}Fn(e,t){const i=[],a=[];return t.forEach((l=>{a.push(Ds(e).get(l).next((c=>{if(c===null)throw fe();_e(c.userId===this.userId),i.push(xa(this.serializer,c))})))})),F.waitFor(a).next((()=>i))}removeMutationBatch(e,t){return s0(e._e,this.userId,t).next((i=>(e.addOnCommittedListener((()=>{this.Mn(t.batchId)})),F.forEach(i,(a=>this.referenceDelegate.markPotentiallyOrphaned(e,a))))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return F.resolve();const i=IDBKeyRange.lowerBound((function(c){return[c]})(this.userId)),a=[];return hl(e).J({range:i},((l,c,f)=>{if(l[0]===this.userId){const p=Hi(l[1]);a.push(p)}else f.done()})).next((()=>{_e(a.length===0)}))}))}containsKey(e,t){return a0(e,this.userId,t)}xn(e){return o0(e).get(this.userId).next((t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function a0(r,e,t){const i=ef(e,t.path),a=i[1],l=IDBKeyRange.lowerBound(i);let c=!1;return hl(r).J({range:l,H:!0},((f,p,g)=>{const[v,T,A]=f;v===e&&T===a&&(c=!0),g.done()})).next((()=>c))}function Ds(r){return tn(r,"mutations")}function hl(r){return tn(r,"documentMutations")}function o0(r){return tn(r,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new io(0)}static Ln(){return new io(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I2{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Bn(e).next((t=>{const i=new io(t.highestTargetId);return t.highestTargetId=i.next(),this.kn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Bn(e).next((t=>ye.fromTimestamp(new mt(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Bn(e).next((t=>t.highestListenSequenceNumber))}setTargetsMetadata(e,t,i){return this.Bn(e).next((a=>(a.highestListenSequenceNumber=t,i&&(a.lastRemoteSnapshotVersion=i.toTimestamp()),t>a.highestListenSequenceNumber&&(a.highestListenSequenceNumber=t),this.kn(e,a))))}addTargetData(e,t){return this.qn(e,t).next((()=>this.Bn(e).next((i=>(i.targetCount+=1,this.Qn(t,i),this.kn(e,i))))))}updateTargetData(e,t){return this.qn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>al(e).delete(t.targetId))).next((()=>this.Bn(e))).next((i=>(_e(i.targetCount>0),i.targetCount-=1,this.kn(e,i))))}removeTargets(e,t,i){let a=0;const l=[];return al(e).J(((c,f)=>{const p=gc(f);p.sequenceNumber<=t&&i.get(p.targetId)===null&&(a++,l.push(this.removeTargetData(e,p)))})).next((()=>F.waitFor(l))).next((()=>a))}forEachTarget(e,t){return al(e).J(((i,a)=>{const l=gc(a);t(l)}))}Bn(e){return jI(e).get("targetGlobalKey").next((t=>(_e(t!==null),t)))}kn(e,t){return jI(e).put("targetGlobalKey",t)}qn(e,t){return al(e).put(n0(this.serializer,t))}Qn(e,t){let i=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,i=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Bn(e).next((t=>t.targetCount))}getTargetData(e,t){const i=Ja(t),a=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let l=null;return al(e).J({range:a,index:"queryTargetsIndex"},((c,f,p)=>{const g=gc(f);th(t,g.target)&&(l=g,p.done())})).next((()=>l))}addMatchingKeys(e,t,i){const a=[],l=Os(e);return t.forEach((c=>{const f=Rn(c.path);a.push(l.put({targetId:i,path:f})),a.push(this.referenceDelegate.addReference(e,i,c))})),F.waitFor(a)}removeMatchingKeys(e,t,i){const a=Os(e);return F.forEach(t,(l=>{const c=Rn(l.path);return F.waitFor([a.delete([i,c]),this.referenceDelegate.removeReference(e,i,l)])}))}removeMatchingKeysForTargetId(e,t){const i=Os(e),a=IDBKeyRange.bound([t],[t+1],!1,!0);return i.delete(a)}getMatchingKeysForTargetId(e,t){const i=IDBKeyRange.bound([t],[t+1],!1,!0),a=Os(e);let l=De();return a.J({range:i,H:!0},((c,f,p)=>{const g=Hi(c[1]),v=new oe(g);l=l.add(v)})).next((()=>l))}containsKey(e,t){const i=Rn(t.path),a=IDBKeyRange.bound([i],[Zb(i)],!1,!0);let l=0;return Os(e).J({index:"documentTargetsIndex",H:!0,range:a},(([c,f],p,g)=>{c!==0&&(l++,g.done())})).next((()=>l>0))}ot(e,t){return al(e).get(t).next((i=>i?gc(i):null))}}function al(r){return tn(r,"targets")}function jI(r){return tn(r,"targetGlobal")}function Os(r){return tn(r,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI([r,e],[t,i]){const a=Re(r,t);return a===0?Re(e,i):a}class A2{constructor(e){this.Kn=e,this.buffer=new it(GI),this.$n=0}Un(){return++this.$n}Wn(e){const t=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();GI(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class b2{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){te("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ws(t)?te("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Xs(t)}await this.zn(3e5)}))}}class S2{constructor(e,t){this.jn=e,this.params=t}calculateTargetCount(e,t){return this.jn.Hn(e).next((i=>Math.floor(t/100*i)))}nthSequenceNumber(e,t){if(t===0)return F.resolve(Bn.oe);const i=new A2(t);return this.jn.forEachTarget(e,(a=>i.Wn(a.sequenceNumber))).next((()=>this.jn.Jn(e,(a=>i.Wn(a))))).next((()=>i.maxValue))}removeTargets(e,t,i){return this.jn.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.jn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(te("LruGarbageCollector","Garbage collection skipped; disabled"),F.resolve(qI)):this.getCacheSize(e).next((i=>i<this.params.cacheSizeCollectionThreshold?(te("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),qI):this.Yn(e,t)))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,t){let i,a,l,c,f,p,g;const v=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((T=>(T>this.params.maximumSequenceNumbersToCollect?(te("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),a=this.params.maximumSequenceNumbersToCollect):a=T,c=Date.now(),this.nthSequenceNumber(e,a)))).next((T=>(i=T,f=Date.now(),this.removeTargets(e,i,t)))).next((T=>(l=T,p=Date.now(),this.removeOrphanedDocuments(e,i)))).next((T=>(g=Date.now(),ol()<=Me.DEBUG&&te("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-v}ms
	Determined least recently used ${a} in `+(f-c)+`ms
	Removed ${l} targets in `+(p-f)+`ms
	Removed ${T} documents in `+(g-p)+`ms
Total Duration: ${g-v}ms`),F.resolve({didRun:!0,sequenceNumbersCollected:a,targetsRemoved:l,documentsRemoved:T}))))}}function R2(r,e){return new S2(r,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,t){this.db=e,this.garbageCollector=R2(this,t)}Hn(e){const t=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next((i=>t.next((a=>i+a))))}Zn(e){let t=0;return this.Jn(e,(i=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Jn(e,t){return this.Xn(e,((i,a)=>t(a)))}addReference(e,t,i){return Hd(e,i)}removeReference(e,t,i){return Hd(e,i)}removeTargets(e,t,i){return this.db.getTargetCache().removeTargets(e,t,i)}markPotentiallyOrphaned(e,t){return Hd(e,t)}er(e,t){return(function(a,l){let c=!1;return o0(a).Y((f=>a0(a,f,l).next((p=>(p&&(c=!0),F.resolve(!p)))))).next((()=>c))})(e,t)}removeOrphanedDocuments(e,t){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),a=[];let l=0;return this.Xn(e,((c,f)=>{if(f<=t){const p=this.er(e,c).next((g=>{if(!g)return l++,i.getEntry(e,c).next((()=>(i.removeEntry(c,ye.min()),Os(e).delete((function(T){return[0,Rn(T.path)]})(c)))))}));a.push(p)}})).next((()=>F.waitFor(a))).next((()=>i.apply(e))).next((()=>l))}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,t){return Hd(e,t)}Xn(e,t){const i=Os(e);let a,l=Bn.oe;return i.J({index:"documentTargetsIndex"},(([c,f],{path:p,sequenceNumber:g})=>{c===0?(l!==Bn.oe&&t(new oe(Hi(a)),l),l=g,a=p):l=Bn.oe})).next((()=>{l!==Bn.oe&&t(new oe(Hi(a)),l)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Hd(r,e){return Os(r).put((function(i,a){return{targetId:0,path:Rn(i.path),sequenceNumber:a}})(e,r.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l0{constructor(){this.changes=new Js((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ut.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?F.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,i){return Na(e).put(i)}removeEntry(e,t,i){return Na(e).delete((function(l,c){const f=l.path.toArray();return[f.slice(0,f.length-2),f[f.length-2],Tf(c),f[f.length-1]]})(t,i))}updateMetadata(e,t){return this.getMetadata(e).next((i=>(i.byteSize+=t,this.tr(e,i))))}getEntry(e,t){let i=ut.newInvalidDocument(t);return Na(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(oc(t))},((a,l)=>{i=this.nr(t,l)})).next((()=>i))}rr(e,t){let i={size:0,document:ut.newInvalidDocument(t)};return Na(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(oc(t))},((a,l)=>{i={document:this.nr(t,l),size:If(l)}})).next((()=>i))}getEntries(e,t){let i=qn();return this.ir(e,t,((a,l)=>{const c=this.nr(a,l);i=i.insert(a,c)})).next((()=>i))}sr(e,t){let i=qn(),a=new st(oe.comparator);return this.ir(e,t,((l,c)=>{const f=this.nr(l,c);i=i.insert(l,f),a=a.insert(l,If(c))})).next((()=>({documents:i,_r:a})))}ir(e,t,i){if(t.isEmpty())return F.resolve();let a=new it(QI);t.forEach((p=>a=a.add(p)));const l=IDBKeyRange.bound(oc(a.first()),oc(a.last())),c=a.getIterator();let f=c.getNext();return Na(e).J({index:"documentKeyIndex",range:l},((p,g,v)=>{const T=oe.fromSegments([...g.prefixPath,g.collectionGroup,g.documentId]);for(;f&&QI(f,T)<0;)i(f,null),f=c.getNext();f&&f.isEqual(T)&&(i(f,g),f=c.hasNext()?c.getNext():null),f?v.$(oc(f)):v.done()})).next((()=>{for(;f;)i(f,null),f=c.hasNext()?c.getNext():null}))}getDocumentsMatchingQuery(e,t,i,a,l){const c=t.path,f=[c.popLast().toArray(),c.lastSegment(),Tf(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],p=[c.popLast().toArray(),c.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Na(e).U(IDBKeyRange.bound(f,p,!0)).next((g=>{l?.incrementDocumentReadCount(g.length);let v=qn();for(const T of g){const A=this.nr(oe.fromSegments(T.prefixPath.concat(T.collectionGroup,T.documentId)),T);A.isFoundDocument()&&(ih(t,A)||a.has(A.key))&&(v=v.insert(A.key,A))}return v}))}getAllFromCollectionGroup(e,t,i,a){let l=qn();const c=KI(t,i),f=KI(t,ti.max());return Na(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(c,f,!0)},((p,g,v)=>{const T=this.nr(oe.fromSegments(g.prefixPath.concat(g.collectionGroup,g.documentId)),g);l=l.insert(T.key,T),l.size===a&&v.done()})).next((()=>l))}newChangeBuffer(e){return new N2(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((t=>t.byteSize))}getMetadata(e){return HI(e).get("remoteDocumentGlobalKey").next((t=>(_e(!!t),t)))}tr(e,t){return HI(e).put("remoteDocumentGlobalKey",t)}nr(e,t){if(t){const i=m2(this.serializer,t);if(!(i.isNoDocument()&&i.version.isEqual(ye.min())))return i}return ut.newInvalidDocument(e)}}function u0(r){return new D2(r)}class N2 extends l0{constructor(e,t){super(),this.ar=e,this.trackRemovals=t,this.ur=new Js((i=>i.toString()),((i,a)=>i.isEqual(a)))}applyChanges(e){const t=[];let i=0,a=new it(((l,c)=>Re(l.canonicalString(),c.canonicalString())));return this.changes.forEach(((l,c)=>{const f=this.ur.get(l);if(t.push(this.ar.removeEntry(e,l,f.readTime)),c.isValidDocument()){const p=OI(this.ar.serializer,c);a=a.add(l.path.popLast());const g=If(p);i+=g-f.size,t.push(this.ar.addEntry(e,l,p))}else if(i-=f.size,this.trackRemovals){const p=OI(this.ar.serializer,c.convertToNoDocument(ye.min()));t.push(this.ar.addEntry(e,l,p))}})),a.forEach((l=>{t.push(this.ar.indexManager.addToCollectionParentIndex(e,l))})),t.push(this.ar.updateMetadata(e,i)),F.waitFor(t)}getFromCache(e,t){return this.ar.rr(e,t).next((i=>(this.ur.set(t,{size:i.size,readTime:i.document.readTime}),i.document)))}getAllFromCache(e,t){return this.ar.sr(e,t).next((({documents:i,_r:a})=>(a.forEach(((l,c)=>{this.ur.set(l,{size:c,readTime:i.get(l).readTime})})),i)))}}function HI(r){return tn(r,"remoteDocumentGlobal")}function Na(r){return tn(r,"remoteDocumentsV14")}function oc(r){const e=r.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function KI(r,e){const t=e.documentKey.path.toArray();return[r,Tf(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function QI(r,e){const t=r.path.toArray(),i=e.path.toArray();let a=0;for(let l=0;l<t.length-2&&l<i.length-2;++l)if(a=Re(t[l],i[l]),a)return a;return a=Re(t.length,i.length),a||(a=Re(t[t.length-2],i[i.length-2]),a||Re(t[t.length-1],i[i.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O2{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e,t,i,a){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=a}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next((a=>(i=a,this.remoteDocumentCache.getEntry(e,t)))).next((a=>(i!==null&&Ic(i.mutation,a,Fn.empty(),mt.now()),a)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.getLocalViewOfDocuments(e,i,De()).next((()=>i))))}getLocalViewOfDocuments(e,t,i=De()){const a=Ki();return this.populateOverlays(e,a,t).next((()=>this.computeViews(e,t,a,i).next((l=>{let c=mc();return l.forEach(((f,p)=>{c=c.insert(f,p.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const i=Ki();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,De())))}populateOverlays(e,t,i){const a=[];return i.forEach((l=>{t.has(l)||a.push(l)})),this.documentOverlayCache.getOverlays(e,a).next((l=>{l.forEach(((c,f)=>{t.set(c,f)}))}))}computeViews(e,t,i,a){let l=qn();const c=wc(),f=(function(){return wc()})();return t.forEach(((p,g)=>{const v=i.get(g.key);a.has(g.key)&&(v===void 0||v.mutation instanceof Lr)?l=l.insert(g.key,g):v!==void 0?(c.set(g.key,v.mutation.getFieldMask()),Ic(v.mutation,g,v.mutation.getFieldMask(),mt.now())):c.set(g.key,Fn.empty())})),this.recalculateAndSaveOverlays(e,l).next((p=>(p.forEach(((g,v)=>c.set(g,v))),t.forEach(((g,v)=>{var T;return f.set(g,new O2(v,(T=c.get(g))!==null&&T!==void 0?T:null))})),f)))}recalculateAndSaveOverlays(e,t){const i=wc();let a=new st(((c,f)=>c-f)),l=De();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const f of c)f.keys().forEach((p=>{const g=t.get(p);if(g===null)return;let v=i.get(p)||Fn.empty();v=f.applyToLocalView(g,v),i.set(p,v);const T=(a.get(f.batchId)||De()).add(p);a=a.insert(f.batchId,T)}))})).next((()=>{const c=[],f=a.getReverseIterator();for(;f.hasNext();){const p=f.getNext(),g=p.key,v=p.value,T=CS();v.forEach((A=>{if(!l.has(A)){const P=kS(t.get(A),i.get(A));P!==null&&T.set(A,P),l=l.add(A)}})),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return F.waitFor(c)})).next((()=>i))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((i=>this.recalculateAndSaveOverlays(e,i)))}getDocumentsMatchingQuery(e,t,i,a){return(function(c){return oe.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):ny(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,a):this.getDocumentsMatchingCollectionQuery(e,t,i,a)}getNextDocuments(e,t,i,a){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,a).next((l=>{const c=a-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,a-l.size):F.resolve(Ki());let f=-1,p=l;return c.next((g=>F.forEach(g,((v,T)=>(f<T.largestBatchId&&(f=T.largestBatchId),l.get(v)?F.resolve():this.remoteDocumentCache.getEntry(e,v).next((A=>{p=p.insert(v,A)}))))).next((()=>this.populateOverlays(e,g,l))).next((()=>this.computeViews(e,p,g,De()))).next((v=>({batchId:f,changes:RS(v)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new oe(t)).next((i=>{let a=mc();return i.isFoundDocument()&&(a=a.insert(i.key,i)),a}))}getDocumentsMatchingCollectionGroupQuery(e,t,i,a){const l=t.collectionGroup;let c=mc();return this.indexManager.getCollectionParents(e,l).next((f=>F.forEach(f,(p=>{const g=(function(T,A){return new kr(A,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)})(t,p.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,a).next((v=>{v.forEach(((T,A)=>{c=c.insert(T,A)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,i,a){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next((c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,a)))).next((c=>{l.forEach(((p,g)=>{const v=g.getKey();c.get(v)===null&&(c=c.insert(v,ut.newInvalidDocument(v)))}));let f=mc();return c.forEach(((p,g)=>{const v=l.get(p);v!==void 0&&Ic(v.mutation,g,Fn.empty(),mt.now()),ih(t,g)&&(f=f.insert(p,g))})),f}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,t){return F.resolve(this.cr.get(t))}saveBundleMetadata(e,t){return this.cr.set(t.id,(function(a){return{id:a.id,version:a.version,createTime:Vt(a.createTime)}})(t)),F.resolve()}getNamedQuery(e,t){return F.resolve(this.lr.get(t))}saveNamedQuery(e,t){return this.lr.set(t.name,(function(a){return{name:a.name,query:cy(a.bundledQuery),readTime:Vt(a.readTime)}})(t)),F.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V2{constructor(){this.overlays=new st(oe.comparator),this.hr=new Map}getOverlay(e,t){return F.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Ki();return F.forEach(t,(a=>this.getOverlay(e,a).next((l=>{l!==null&&i.set(a,l)})))).next((()=>i))}saveOverlays(e,t,i){return i.forEach(((a,l)=>{this.ht(e,t,l)})),F.resolve()}removeOverlaysForBatchId(e,t,i){const a=this.hr.get(i);return a!==void 0&&(a.forEach((l=>this.overlays=this.overlays.remove(l))),this.hr.delete(i)),F.resolve()}getOverlaysForCollection(e,t,i){const a=Ki(),l=t.length+1,c=new oe(t.child("")),f=this.overlays.getIteratorFrom(c);for(;f.hasNext();){const p=f.getNext().value,g=p.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&p.largestBatchId>i&&a.set(p.getKey(),p)}return F.resolve(a)}getOverlaysForCollectionGroup(e,t,i,a){let l=new st(((g,v)=>g-v));const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let v=l.get(g.largestBatchId);v===null&&(v=Ki(),l=l.insert(g.largestBatchId,v)),v.set(g.getKey(),g)}}const f=Ki(),p=l.getIterator();for(;p.hasNext()&&(p.getNext().value.forEach(((g,v)=>f.set(g,v))),!(f.size()>=a)););return F.resolve(f)}ht(e,t,i){const a=this.overlays.get(i.key);if(a!==null){const c=this.hr.get(a.largestBatchId).delete(i.key);this.hr.set(a.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new oy(t,i));let l=this.hr.get(t);l===void 0&&(l=De(),this.hr.set(t,l)),this.hr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(){this.Pr=new it(Xt.Ir),this.Tr=new it(Xt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,t){const i=new Xt(e,t);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,t){e.forEach((i=>this.addReference(i,t)))}removeReference(e,t){this.Ar(new Xt(e,t))}Rr(e,t){e.forEach((i=>this.removeReference(i,t)))}Vr(e){const t=new oe(new Ue([])),i=new Xt(t,e),a=new Xt(t,e+1),l=[];return this.Tr.forEachInRange([i,a],(c=>{this.Ar(c),l.push(c.key)})),l}mr(){this.Pr.forEach((e=>this.Ar(e)))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const t=new oe(new Ue([])),i=new Xt(t,e),a=new Xt(t,e+1);let l=De();return this.Tr.forEachInRange([i,a],(c=>{l=l.add(c.key)})),l}containsKey(e){const t=new Xt(e,0),i=this.Pr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Xt{constructor(e,t){this.key=e,this.pr=t}static Ir(e,t){return oe.comparator(e.key,t.key)||Re(e.pr,t.pr)}static Er(e,t){return Re(e.pr,t.pr)||oe.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x2{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.yr=1,this.wr=new it(Xt.Ir)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,a){const l=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new sy(l,t,i,a);this.mutationQueue.push(c);for(const f of a)this.wr=this.wr.add(new Xt(f.key,l)),this.indexManager.addToCollectionParentIndex(e,f.key.path.popLast());return F.resolve(c)}lookupMutationBatch(e,t){return F.resolve(this.Sr(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,a=this.br(i),l=a<0?0:a;return F.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Xt(t,0),a=new Xt(t,Number.POSITIVE_INFINITY),l=[];return this.wr.forEachInRange([i,a],(c=>{const f=this.Sr(c.pr);l.push(f)})),F.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new it(Re);return t.forEach((a=>{const l=new Xt(a,0),c=new Xt(a,Number.POSITIVE_INFINITY);this.wr.forEachInRange([l,c],(f=>{i=i.add(f.pr)}))})),F.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,a=i.length+1;let l=i;oe.isDocumentKey(l)||(l=l.child(""));const c=new Xt(new oe(l),0);let f=new it(Re);return this.wr.forEachWhile((p=>{const g=p.key.path;return!!i.isPrefixOf(g)&&(g.length===a&&(f=f.add(p.pr)),!0)}),c),F.resolve(this.Dr(f))}Dr(e){const t=[];return e.forEach((i=>{const a=this.Sr(i);a!==null&&t.push(a)})),t}removeMutationBatch(e,t){_e(this.Cr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return F.forEach(t.mutations,(a=>{const l=new Xt(a.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,a.key)})).next((()=>{this.wr=i}))}Mn(e){}containsKey(e,t){const i=new Xt(t,0),a=this.wr.firstAfterOrEqual(i);return F.resolve(t.isEqual(a&&a.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Cr(e,t){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const t=this.br(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M2{constructor(e){this.vr=e,this.docs=(function(){return new st(oe.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,a=this.docs.get(i),l=a?a.size:0,c=this.vr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return F.resolve(i?i.document.mutableCopy():ut.newInvalidDocument(t))}getEntries(e,t){let i=qn();return t.forEach((a=>{const l=this.docs.get(a);i=i.insert(a,l?l.document.mutableCopy():ut.newInvalidDocument(a))})),F.resolve(i)}getDocumentsMatchingQuery(e,t,i,a){let l=qn();const c=t.path,f=new oe(c.child("")),p=this.docs.getIteratorFrom(f);for(;p.hasNext();){const{key:g,value:{document:v}}=p.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||J_(tS(v),i)<=0||(a.has(v.key)||ih(t,v))&&(l=l.insert(v.key,v.mutableCopy()))}return F.resolve(l)}getAllFromCollectionGroup(e,t,i,a){fe()}Fr(e,t){return F.forEach(this.docs,(i=>t(i)))}newChangeBuffer(e){return new k2(this)}getSize(e){return F.resolve(this.size)}}class k2 extends l0{constructor(e){super(),this.ar=e}applyChanges(e){const t=[];return this.changes.forEach(((i,a)=>{a.isValidDocument()?t.push(this.ar.addEntry(e,a)):this.ar.removeEntry(i)})),F.waitFor(t)}getFromCache(e,t){return this.ar.getEntry(e,t)}getAllFromCache(e,t){return this.ar.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2{constructor(e){this.persistence=e,this.Mr=new Js((t=>Ja(t)),th),this.lastRemoteSnapshotVersion=ye.min(),this.highestTargetId=0,this.Or=0,this.Nr=new fy,this.targetCount=0,this.Lr=io.Nn()}forEachTarget(e,t){return this.Mr.forEach(((i,a)=>t(a))),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.Or&&(this.Or=t),F.resolve()}qn(e){this.Mr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Lr=new io(t),this.highestTargetId=t),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,t){return this.qn(t),this.targetCount+=1,F.resolve()}updateTargetData(e,t){return this.qn(t),F.resolve()}removeTargetData(e,t){return this.Mr.delete(t.target),this.Nr.Vr(t.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,t,i){let a=0;const l=[];return this.Mr.forEach(((c,f)=>{f.sequenceNumber<=t&&i.get(f.targetId)===null&&(this.Mr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,f.targetId)),a++)})),F.waitFor(l).next((()=>a))}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,t){const i=this.Mr.get(t)||null;return F.resolve(i)}addMatchingKeys(e,t,i){return this.Nr.dr(t,i),F.resolve()}removeMatchingKeys(e,t,i){this.Nr.Rr(t,i);const a=this.persistence.referenceDelegate,l=[];return a&&t.forEach((c=>{l.push(a.markPotentiallyOrphaned(e,c))})),F.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Nr.Vr(t),F.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Nr.gr(t);return F.resolve(i)}containsKey(e,t){return F.resolve(this.Nr.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h0{constructor(e,t){this.Br={},this.overlays={},this.kr=new Bn(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new L2(this),this.indexManager=new T2,this.remoteDocumentCache=(function(a){return new M2(a)})((i=>this.referenceDelegate.Kr(i))),this.serializer=new t0(t),this.$r=new P2(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new V2,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Br[e.toKey()];return i||(i=new x2(t,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,t,i){te("MemoryPersistence","Starting transaction:",e);const a=new U2(this.kr.next());return this.referenceDelegate.Ur(),i(a).next((l=>this.referenceDelegate.Wr(a).next((()=>l)))).toPromise().then((l=>(a.raiseOnCommittedEvent(),l)))}Gr(e,t){return F.or(Object.values(this.Br).map((i=>()=>i.containsKey(e,t))))}}class U2 extends iS{constructor(e){super(),this.currentSequenceNumber=e}}class $f{constructor(e){this.persistence=e,this.zr=new fy,this.jr=null}static Hr(e){return new $f(e)}get Jr(){if(this.jr)return this.jr;throw fe()}addReference(e,t,i){return this.zr.addReference(i,t),this.Jr.delete(i.toString()),F.resolve()}removeReference(e,t,i){return this.zr.removeReference(i,t),this.Jr.add(i.toString()),F.resolve()}markPotentiallyOrphaned(e,t){return this.Jr.add(t.toString()),F.resolve()}removeTarget(e,t){this.zr.Vr(t.targetId).forEach((a=>this.Jr.add(a.toString())));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next((a=>{a.forEach((l=>this.Jr.add(l.toString())))})).next((()=>i.removeTargetData(e,t)))}Ur(){this.jr=new Set}Wr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.Jr,(i=>{const a=oe.fromPath(i);return this.Yr(e,a).next((l=>{l||t.removeEntry(a,ye.min())}))})).next((()=>(this.jr=null,t.apply(e))))}updateLimboDocument(e,t){return this.Yr(e,t).next((i=>{i?this.Jr.delete(t.toString()):this.Jr.add(t.toString())}))}Kr(e){return 0}Yr(e,t){return F.or([()=>F.resolve(this.zr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Gr(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z2{constructor(e){this.serializer=e}O(e,t,i,a){const l=new jf("createOrUpgrade",t);i<1&&a>=1&&((function(p){p.createObjectStore("owner")})(e),(function(p){p.createObjectStore("mutationQueues",{keyPath:"userId"}),p.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lI,{unique:!0}),p.createObjectStore("documentMutations")})(e),YI(e),(function(p){p.createObjectStore("remoteDocuments")})(e));let c=F.resolve();return i<3&&a>=3&&(i!==0&&((function(p){p.deleteObjectStore("targetDocuments"),p.deleteObjectStore("targets"),p.deleteObjectStore("targetGlobal")})(e),YI(e)),c=c.next((()=>(function(p){const g=p.store("targetGlobal"),v={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:ye.min().toTimestamp(),targetCount:0};return g.put("targetGlobalKey",v)})(l)))),i<4&&a>=4&&(i!==0&&(c=c.next((()=>(function(p,g){return g.store("mutations").U().next((v=>{p.deleteObjectStore("mutations"),p.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",lI,{unique:!0});const T=g.store("mutations"),A=v.map((P=>T.put(P)));return F.waitFor(A)}))})(e,l)))),c=c.next((()=>{(function(p){p.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)}))),i<5&&a>=5&&(c=c.next((()=>this.Xr(l)))),i<6&&a>=6&&(c=c.next((()=>((function(p){p.createObjectStore("remoteDocumentGlobal")})(e),this.ei(l))))),i<7&&a>=7&&(c=c.next((()=>this.ti(l)))),i<8&&a>=8&&(c=c.next((()=>this.ni(e,l)))),i<9&&a>=9&&(c=c.next((()=>{(function(p){p.objectStoreNames.contains("remoteDocumentChanges")&&p.deleteObjectStore("remoteDocumentChanges")})(e)}))),i<10&&a>=10&&(c=c.next((()=>this.ri(l)))),i<11&&a>=11&&(c=c.next((()=>{(function(p){p.createObjectStore("bundles",{keyPath:"bundleId"})})(e),(function(p){p.createObjectStore("namedQueries",{keyPath:"name"})})(e)}))),i<12&&a>=12&&(c=c.next((()=>{(function(p){const g=p.createObjectStore("documentOverlays",{keyPath:wx});g.createIndex("collectionPathOverlayIndex",Ix,{unique:!1}),g.createIndex("collectionGroupOverlayIndex",Ax,{unique:!1})})(e)}))),i<13&&a>=13&&(c=c.next((()=>(function(p){const g=p.createObjectStore("remoteDocumentsV14",{keyPath:hx});g.createIndex("documentKeyIndex",dx),g.createIndex("collectionGroupIndex",fx)})(e))).next((()=>this.ii(e,l))).next((()=>e.deleteObjectStore("remoteDocuments")))),i<14&&a>=14&&(c=c.next((()=>this.si(e,l)))),i<15&&a>=15&&(c=c.next((()=>(function(p){p.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),p.createObjectStore("indexState",{keyPath:yx}).createIndex("sequenceNumberIndex",vx,{unique:!1}),p.createObjectStore("indexEntries",{keyPath:Ex}).createIndex("documentKeyIndex",Tx,{unique:!1})})(e)))),i<16&&a>=16&&(c=c.next((()=>{t.objectStore("indexState").clear()})).next((()=>{t.objectStore("indexEntries").clear()}))),c}ei(e){let t=0;return e.store("remoteDocuments").J(((i,a)=>{t+=If(a)})).next((()=>{const i={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)}))}Xr(e){const t=e.store("mutationQueues"),i=e.store("mutations");return t.U().next((a=>F.forEach(a,(l=>{const c=IDBKeyRange.bound([l.userId,-1],[l.userId,l.lastAcknowledgedBatchId]);return i.U("userMutationsIndex",c).next((f=>F.forEach(f,(p=>{_e(p.userId===l.userId);const g=xa(this.serializer,p);return s0(e,l.userId,g).next((()=>{}))}))))}))))}ti(e){const t=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((a=>{const l=[];return i.J(((c,f)=>{const p=new Ue(c),g=(function(T){return[0,Rn(T)]})(p);l.push(t.get(g).next((v=>v?F.resolve():(T=>t.put({targetId:0,path:Rn(T),sequenceNumber:a.highestListenSequenceNumber}))(p))))})).next((()=>F.waitFor(l)))}))}ni(e,t){e.createObjectStore("collectionParents",{keyPath:_x});const i=t.store("collectionParents"),a=new dy,l=c=>{if(a.add(c)){const f=c.lastSegment(),p=c.popLast();return i.put({collectionId:f,parent:Rn(p)})}};return t.store("remoteDocuments").J({H:!0},((c,f)=>{const p=new Ue(c);return l(p.popLast())})).next((()=>t.store("documentMutations").J({H:!0},(([c,f,p],g)=>{const v=Hi(f);return l(v.popLast())}))))}ri(e){const t=e.store("targets");return t.J(((i,a)=>{const l=gc(a),c=n0(this.serializer,l);return t.put(c)}))}ii(e,t){const i=t.store("remoteDocuments"),a=[];return i.J(((l,c)=>{const f=t.store("remoteDocumentsV14"),p=(function(T){return T.document?new oe(Ue.fromString(T.document.name).popFirst(5)):T.noDocument?oe.fromSegments(T.noDocument.path):T.unknownDocument?oe.fromSegments(T.unknownDocument.path):fe()})(c).path.toArray(),g={prefixPath:p.slice(0,p.length-2),collectionGroup:p[p.length-2],documentId:p[p.length-1],readTime:c.readTime||[0,0],unknownDocument:c.unknownDocument,noDocument:c.noDocument,document:c.document,hasCommittedMutations:!!c.hasCommittedMutations};a.push(f.put(g))})).next((()=>F.waitFor(a)))}si(e,t){const i=t.store("mutations"),a=u0(this.serializer),l=new h0($f.Hr,this.serializer.ct);return i.U().next((c=>{const f=new Map;return c.forEach((p=>{var g;let v=(g=f.get(p.userId))!==null&&g!==void 0?g:De();xa(this.serializer,p).keys().forEach((T=>v=v.add(T))),f.set(p.userId,v)})),F.forEach(f,((p,g)=>{const v=new Wt(g),T=Qf.lt(this.serializer,v),A=l.getIndexManager(v),P=Yf.lt(v,this.serializer,A,l.referenceDelegate);return new c0(a,P,T,A).recalculateAndSaveOverlaysForDocumentKeys(new $g(t,Bn.oe),p).next()}))}))}}function YI(r){r.createObjectStore("targetDocuments",{keyPath:px}).createIndex("documentTargetsIndex",gx,{unique:!0}),r.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",mx,{unique:!0}),r.createObjectStore("targetGlobal")}const Og="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class my{constructor(e,t,i,a,l,c,f,p,g,v,T=16){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=i,this.oi=l,this.window=c,this.document=f,this._i=g,this.ai=v,this.ui=T,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=A=>Promise.resolve(),!my.D())throw new ee(H.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new C2(this,a),this.Ti=t+"main",this.serializer=new t0(p),this.Ei=new Qi(this.Ti,this.ui,new z2(this.serializer)),this.Qr=new I2(this.referenceDelegate,this.serializer),this.remoteDocumentCache=u0(this.serializer),this.$r=new p2,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,v===!1&&Pt("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new ee(H.FAILED_PRECONDITION,Og);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Qr.getHighestSequenceNumber(e)))})).then((e=>{this.kr=new Bn(e,this._i)})).then((()=>{this.qr=!0})).catch((e=>(this.Ei&&this.Ei.close(),Promise.reject(e))))}fi(e){return this.Ii=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L((async t=>{t.newVersion===null&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget((async()=>{this.started&&await this.Ai()})))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Kd(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.gi(e).next((t=>{t||(this.isPrimary=!1,this.oi.enqueueRetryable((()=>this.Ii(!1))))}))})).next((()=>this.pi(e))).next((t=>this.isPrimary&&!t?this.yi(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(Ws(e))return te("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return te("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.oi.enqueueRetryable((()=>this.Ii(e))),this.isPrimary=e}))}gi(e){return lc(e).get("owner").next((t=>F.resolve(this.Si(t))))}bi(e){return Kd(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(t=>{const i=tn(t,"clientMetadata");return i.U().next((a=>{const l=this.vi(a,18e5),c=a.filter((f=>l.indexOf(f)===-1));return F.forEach(c,(f=>i.delete(f.clientId))).next((()=>c))}))})).catch((()=>[]));if(this.di)for(const t of e)this.di.removeItem(this.Fi(t.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.Ai().then((()=>this.Di())).then((()=>this.mi()))))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?F.resolve(!0):lc(e).get("owner").next((t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)){if(this.Si(t)&&this.networkEnabled)return!0;if(!this.Si(t)){if(!t.allowTabSynchronization)throw new ee(H.FAILED_PRECONDITION,Og);return!1}}return!(!this.networkEnabled||!this.inForeground)||Kd(e).U().next((i=>this.vi(i,5e3).find((a=>{if(this.clientId!==a.clientId){const l=!this.networkEnabled&&a.networkEnabled,c=!this.inForeground&&a.inForeground,f=this.networkEnabled===a.networkEnabled;if(l||c&&f)return!0}return!1}))===void 0))})).next((t=>(this.isPrimary!==t&&te("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t)))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new $g(e,Bn.oe);return this.yi(t).next((()=>this.bi(t)))})),this.Ei.close(),this.Li()}vi(e,t){return e.filter((i=>this.Ci(i.updateTimeMs,t)&&!this.Mi(i.clientId)))}Bi(){return this.runTransaction("getActiveClients","readonly",(e=>Kd(e).U().next((t=>this.vi(t,18e5).map((i=>i.clientId))))))}get started(){return this.qr}getMutationQueue(e,t){return Yf.lt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new w2(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return Qf.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,t,i){te("IndexedDbPersistence","Starting transaction:",e);const a=t==="readonly"?"readonly":"readwrite",l=(function(p){return p===16?Sx:p===15?cS:p===14?uS:p===13?lS:p===12?bx:p===11?oS:void fe()})(this.ui);let c;return this.Ei.runTransaction(e,a,l,(f=>(c=new $g(f,this.kr?this.kr.next():Bn.oe),t==="readwrite-primary"?this.gi(c).next((p=>!!p||this.pi(c))).next((p=>{if(!p)throw Pt(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable((()=>this.Ii(!1))),new ee(H.FAILED_PRECONDITION,nS);return i(c)})).next((p=>this.wi(c).next((()=>p)))):this.ki(c).next((()=>i(c)))))).then((f=>(c.raiseOnCommittedEvent(),f)))}ki(e){return lc(e).get("owner").next((t=>{if(t!==null&&this.Ci(t.leaseTimestampMs,5e3)&&!this.Mi(t.ownerId)&&!this.Si(t)&&!(this.ai||this.allowTabSynchronization&&t.allowTabSynchronization))throw new ee(H.FAILED_PRECONDITION,Og)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return lc(e).put("owner",t)}static D(){return Qi.D()}yi(e){const t=lc(e);return t.get("owner").next((i=>this.Si(i)?(te("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):F.resolve()))}Ci(e,t){const i=Date.now();return!(e<i-t)&&(!(e>i)||(Pt(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget((()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai())))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const t=/(?:Version|Mobile)\/1[456]/;VA()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var t;try{const i=((t=this.di)===null||t===void 0?void 0:t.getItem(this.Fi(e)))!==null;return te("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return Pt("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){Pt("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function lc(r){return tn(r,"owner")}function Kd(r){return tn(r,"clientMetadata")}function py(r,e){let t=r.projectId;return r.isDefaultDatabase||(t+="."+r.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gy{constructor(e,t,i,a){this.targetId=e,this.fromCache=t,this.qi=i,this.Qi=a}static Ki(e,t){let i=De(),a=De();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:a=a.add(l.doc.key)}return new gy(e,t.fromCache,i,a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B2{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d0{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=(function(){return VA()?8:rS(pt())>0?6:4})()}initialize(e,t){this.zi=e,this.indexManager=t,this.$i=!0}getDocumentsMatchingQuery(e,t,i,a){const l={result:null};return this.ji(e,t).next((c=>{l.result=c})).next((()=>{if(!l.result)return this.Hi(e,t,a,i).next((c=>{l.result=c}))})).next((()=>{if(l.result)return;const c=new B2;return this.Ji(e,t,c).next((f=>{if(l.result=f,this.Ui)return this.Yi(e,t,c,f.size)}))})).next((()=>l.result))}Yi(e,t,i,a){return i.documentReadCount<this.Wi?(ol()<=Me.DEBUG&&te("QueryEngine","SDK will not create cache indexes for query:",ll(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),F.resolve()):(ol()<=Me.DEBUG&&te("QueryEngine","Query:",ll(t),"scans",i.documentReadCount,"local documents and returns",a,"documents as results."),i.documentReadCount>this.Gi*a?(ol()<=Me.DEBUG&&te("QueryEngine","The SDK decides to create cache indexes for query:",ll(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Cn(t))):F.resolve())}ji(e,t){if(EI(t))return F.resolve(null);let i=Cn(t);return this.indexManager.getIndexType(e,i).next((a=>a===0?null:(t.limit!==null&&a===1&&(t=Ef(t,null,"F"),i=Cn(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next((l=>{const c=De(...l);return this.zi.getDocuments(e,c).next((f=>this.indexManager.getMinOffset(e,i).next((p=>{const g=this.Zi(t,f);return this.Xi(t,g,c,p.readTime)?this.ji(e,Ef(t,null,"F")):this.es(e,g,t,p)}))))})))))}Hi(e,t,i,a){return EI(t)||a.isEqual(ye.min())?F.resolve(null):this.zi.getDocuments(e,i).next((l=>{const c=this.Zi(t,l);return this.Xi(t,c,i,a)?F.resolve(null):(ol()<=Me.DEBUG&&te("QueryEngine","Re-using previous result from %s to execute query: %s",a.toString(),ll(t)),this.es(e,c,t,eS(a,-1)).next((f=>f)))}))}Zi(e,t){let i=new it(bS(e));return t.forEach(((a,l)=>{ih(e,l)&&(i=i.add(l))})),i}Xi(e,t,i,a){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(a)>0)}Ji(e,t,i){return ol()<=Me.DEBUG&&te("QueryEngine","Using full collection scan to execute query:",ll(t)),this.zi.getDocumentsMatchingQuery(e,t,ti.min(),i)}es(e,t,i,a){return this.zi.getDocumentsMatchingQuery(e,i,a).next((l=>(t.forEach((c=>{l=l.insert(c.key,c)})),l)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F2{constructor(e,t,i,a){this.persistence=e,this.ts=t,this.serializer=a,this.ns=new st(Re),this.rs=new Js((l=>Ja(l)),th),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new c0(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.ns)))}}function f0(r,e,t,i){return new F2(r,e,t,i)}async function m0(r,e){const t=ce(r);return await t.persistence.runTransaction("Handle user change","readonly",(i=>{let a;return t.mutationQueue.getAllMutationBatches(i).next((l=>(a=l,t._s(e),t.mutationQueue.getAllMutationBatches(i)))).next((l=>{const c=[],f=[];let p=De();for(const g of a){c.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}for(const g of l){f.push(g.batchId);for(const v of g.mutations)p=p.add(v.key)}return t.localDocuments.getDocuments(i,p).next((g=>({us:g,removedBatchIds:c,addedBatchIds:f})))}))}))}function q2(r,e){const t=ce(r);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(i=>{const a=e.batch.keys(),l=t.os.newChangeBuffer({trackRemovals:!0});return(function(f,p,g,v){const T=g.batch,A=T.keys();let P=F.resolve();return A.forEach((G=>{P=P.next((()=>v.getEntry(p,G))).next((Q=>{const $=g.docVersions.get(G);_e($!==null),Q.version.compareTo($)<0&&(T.applyToRemoteDocument(Q,g),Q.isValidDocument()&&(Q.setReadTime(g.commitVersion),v.addEntry(Q)))}))})),P.next((()=>f.mutationQueue.removeMutationBatch(p,T)))})(t,i,e,l).next((()=>l.apply(i))).next((()=>t.mutationQueue.performConsistencyCheck(i))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(i,a,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,(function(f){let p=De();for(let g=0;g<f.mutationResults.length;++g)f.mutationResults[g].transformResults.length>0&&(p=p.add(f.batch.mutations[g].key));return p})(e)))).next((()=>t.localDocuments.getDocuments(i,a)))}))}function p0(r){const e=ce(r);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Qr.getLastRemoteSnapshotVersion(t)))}function j2(r,e){const t=ce(r),i=e.snapshotVersion;let a=t.ns;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(l=>{const c=t.os.newChangeBuffer({trackRemovals:!0});a=t.ns;const f=[];e.targetChanges.forEach(((v,T)=>{const A=a.get(T);if(!A)return;f.push(t.Qr.removeMatchingKeys(l,v.removedDocuments,T).next((()=>t.Qr.addMatchingKeys(l,v.addedDocuments,T))));let P=A.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?P=P.withResumeToken(Gt.EMPTY_BYTE_STRING,ye.min()).withLastLimboFreeSnapshotVersion(ye.min()):v.resumeToken.approximateByteSize()>0&&(P=P.withResumeToken(v.resumeToken,i)),a=a.insert(T,P),(function(Q,$,le){return Q.resumeToken.approximateByteSize()===0||$.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=3e8?!0:le.addedDocuments.size+le.modifiedDocuments.size+le.removedDocuments.size>0})(A,P,v)&&f.push(t.Qr.updateTargetData(l,P))}));let p=qn(),g=De();if(e.documentUpdates.forEach((v=>{e.resolvedLimboDocuments.has(v)&&f.push(t.persistence.referenceDelegate.updateLimboDocument(l,v))})),f.push(g0(l,c,e.documentUpdates).next((v=>{p=v.cs,g=v.ls}))),!i.isEqual(ye.min())){const v=t.Qr.getLastRemoteSnapshotVersion(l).next((T=>t.Qr.setTargetsMetadata(l,l.currentSequenceNumber,i)));f.push(v)}return F.waitFor(f).next((()=>c.apply(l))).next((()=>t.localDocuments.getLocalViewOfDocuments(l,p,g))).next((()=>p))})).then((l=>(t.ns=a,l)))}function g0(r,e,t){let i=De(),a=De();return t.forEach((l=>i=i.add(l))),e.getEntries(r,i).next((l=>{let c=qn();return t.forEach(((f,p)=>{const g=l.get(f);p.isFoundDocument()!==g.isFoundDocument()&&(a=a.add(f)),p.isNoDocument()&&p.version.isEqual(ye.min())?(e.removeEntry(f,p.readTime),c=c.insert(f,p)):!g.isValidDocument()||p.version.compareTo(g.version)>0||p.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(p),c=c.insert(f,p)):te("LocalStore","Ignoring outdated watch update for ",f,". Current version:",g.version," Watch version:",p.version)})),{cs:c,ls:a}}))}function G2(r,e){const t=ce(r);return t.persistence.runTransaction("Get next mutation batch","readonly",(i=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e))))}function Ol(r,e){const t=ce(r);return t.persistence.runTransaction("Allocate target","readwrite",(i=>{let a;return t.Qr.getTargetData(i,e).next((l=>l?(a=l,F.resolve(a)):t.Qr.allocateTargetId(i).next((c=>(a=new Cr(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Qr.addTargetData(i,a).next((()=>a)))))))})).then((i=>{const a=t.ns.get(i.targetId);return(a===null||i.snapshotVersion.compareTo(a.snapshotVersion)>0)&&(t.ns=t.ns.insert(i.targetId,i),t.rs.set(e,i.targetId)),i}))}async function Pl(r,e,t){const i=ce(r),a=i.ns.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,(c=>i.persistence.referenceDelegate.removeTarget(c,a)))}catch(c){if(!Ws(c))throw c;te("LocalStore",`Failed to update sequence numbers for target ${e}: ${c}`)}i.ns=i.ns.remove(e),i.rs.delete(a.target)}function Af(r,e,t){const i=ce(r);let a=ye.min(),l=De();return i.persistence.runTransaction("Execute query","readwrite",(c=>(function(p,g,v){const T=ce(p),A=T.rs.get(v);return A!==void 0?F.resolve(T.ns.get(A)):T.Qr.getTargetData(g,v)})(i,c,Cn(e)).next((f=>{if(f)return a=f.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(c,f.targetId).next((p=>{l=p}))})).next((()=>i.ts.getDocumentsMatchingQuery(c,e,t?a:ye.min(),t?l:De()))).next((f=>(v0(i,AS(e),f),{documents:f,hs:l})))))}function _0(r,e){const t=ce(r),i=ce(t.Qr),a=t.ns.get(e);return a?Promise.resolve(a.target):t.persistence.runTransaction("Get target data","readonly",(l=>i.ot(l,e).next((c=>c?c.target:null))))}function y0(r,e){const t=ce(r),i=t.ss.get(e)||ye.min();return t.persistence.runTransaction("Get new document changes","readonly",(a=>t.os.getAllFromCollectionGroup(a,e,eS(i,-1),Number.MAX_SAFE_INTEGER))).then((a=>(v0(t,e,a),a)))}function v0(r,e,t){let i=r.ss.get(e)||ye.min();t.forEach(((a,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)})),r.ss.set(e,i)}async function H2(r,e,t,i){const a=ce(r);let l=De(),c=qn();for(const g of t){const v=e.Ps(g.metadata.name);g.document&&(l=l.add(v));const T=e.Is(g);T.setReadTime(e.Ts(g.metadata.readTime)),c=c.insert(v,T)}const f=a.os.newChangeBuffer({trackRemovals:!0}),p=await Ol(a,(function(v){return Cn(Hl(Ue.fromString(`__bundle__/docs/${v}`)))})(i));return a.persistence.runTransaction("Apply bundle documents","readwrite",(g=>g0(g,f,c).next((v=>(f.apply(g),v))).next((v=>a.Qr.removeMatchingKeysForTargetId(g,p.targetId).next((()=>a.Qr.addMatchingKeys(g,l,p.targetId))).next((()=>a.localDocuments.getLocalViewOfDocuments(g,v.cs,v.ls))).next((()=>v.cs))))))}async function K2(r,e,t=De()){const i=await Ol(r,Cn(cy(e.bundledQuery))),a=ce(r);return a.persistence.runTransaction("Save named query","readwrite",(l=>{const c=Vt(e.readTime);if(i.snapshotVersion.compareTo(c)>=0)return a.$r.saveNamedQuery(l,e);const f=i.withResumeToken(Gt.EMPTY_BYTE_STRING,c);return a.ns=a.ns.insert(f.targetId,f),a.Qr.updateTargetData(l,f).next((()=>a.Qr.removeMatchingKeysForTargetId(l,i.targetId))).next((()=>a.Qr.addMatchingKeys(l,t,i.targetId))).next((()=>a.$r.saveNamedQuery(l,e)))}))}function $I(r,e){return`firestore_clients_${r}_${e}`}function XI(r,e,t){let i=`firestore_mutations_${r}_${t}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function Pg(r,e){return`firestore_targets_${r}_${e}`}class bf{constructor(e,t,i,a){this.user=e,this.batchId=t,this.state=i,this.error=a}static Es(e,t,i){const a=JSON.parse(i);let l,c=typeof a=="object"&&["pending","acknowledged","rejected"].indexOf(a.state)!==-1&&(a.error===void 0||typeof a.error=="object");return c&&a.error&&(c=typeof a.error.message=="string"&&typeof a.error.code=="string",c&&(l=new ee(a.error.code,a.error.message))),c?new bf(e,t,a.state,l):(Pt("SharedClientState",`Failed to parse mutation state for ID '${t}': ${i}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ac{constructor(e,t,i){this.targetId=e,this.state=t,this.error=i}static Es(e,t){const i=JSON.parse(t);let a,l=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return l&&i.error&&(l=typeof i.error.message=="string"&&typeof i.error.code=="string",l&&(a=new ee(i.error.code,i.error.message))),l?new Ac(e,i.state,a):(Pt("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Sf{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Es(e,t){const i=JSON.parse(t);let a=typeof i=="object"&&i.activeTargetIds instanceof Array,l=iy();for(let c=0;a&&c<i.activeTargetIds.length;++c)a=sS(i.activeTargetIds[c]),l=l.add(i.activeTargetIds[c]);return a?new Sf(e,l):(Pt("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class _y{constructor(e,t){this.clientId=e,this.onlineState=t}static Es(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new _y(t.clientId,t.onlineState):(Pt("SharedClientState",`Failed to parse online state: ${e}`),null)}}class u_{constructor(){this.activeTargetIds=iy()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Vg{constructor(e,t,i,a,l){this.window=e,this.oi=t,this.persistenceKey=i,this.Vs=a,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new st(Re),this.started=!1,this.ys=[];const c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=l,this.ws=$I(this.persistenceKey,this.Vs),this.Ss=(function(p){return`firestore_sequence_number_${p}`})(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new u_),this.bs=new RegExp(`^firestore_clients_${c}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${c}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${c}_(\\d+)$`),this.vs=(function(p){return`firestore_online_state_${p}`})(this.persistenceKey),this.Fs=(function(p){return`firestore_bundle_loaded_v2_${p}`})(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const i of e){if(i===this.Vs)continue;const a=this.getItem($I(this.persistenceKey,i));if(a){const l=Sf.Es(i,a);l&&(this.ps=this.ps.insert(l.clientId,l))}}this.Ms();const t=this.storage.getItem(this.vs);if(t){const i=this.xs(t);i&&this.Os(i)}for(const i of this.ys)this.gs(i);this.ys=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let t=!1;return this.ps.forEach(((i,a)=>{a.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,t,i){this.Ls(e,t,i),this.Bs(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(Pg(this.persistenceKey,e));if(i){const a=Ac.Es(e,i);a&&(t=a.state)}}return this.ks.As(e),this.Ms(),t}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Pg(this.persistenceKey,e))}updateQueryState(e,t,i){this.qs(e,t,i)}handleUserChange(e,t,i){t.forEach((a=>{this.Bs(a)})),this.currentUser=e,i.forEach((a=>{this.addPendingMutation(a)}))}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return te("SharedClientState","READ",e,t),t}setItem(e,t){te("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){te("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const t=e;if(t.storageArea===this.storage){if(te("SharedClientState","EVENT",t.key,t.newValue),t.key===this.ws)return void Pt("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable((async()=>{if(this.started){if(t.key!==null){if(this.bs.test(t.key)){if(t.newValue==null){const i=this.$s(t.key);return this.Us(i,null)}{const i=this.Ws(t.key,t.newValue);if(i)return this.Us(i.clientId,i)}}else if(this.Ds.test(t.key)){if(t.newValue!==null){const i=this.Gs(t.key,t.newValue);if(i)return this.zs(i)}}else if(this.Cs.test(t.key)){if(t.newValue!==null){const i=this.js(t.key,t.newValue);if(i)return this.Hs(i)}}else if(t.key===this.vs){if(t.newValue!==null){const i=this.xs(t.newValue);if(i)return this.Os(i)}}else if(t.key===this.Ss){const i=(function(l){let c=Bn.oe;if(l!=null)try{const f=JSON.parse(l);_e(typeof f=="number"),c=f}catch(f){Pt("SharedClientState","Failed to read sequence number from WebStorage",f)}return c})(t.newValue);i!==Bn.oe&&this.sequenceNumberHandler(i)}else if(t.key===this.Fs){const i=this.Js(t.newValue);await Promise.all(i.map((a=>this.syncEngine.Ys(a))))}}}else this.ys.push(t)}))}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,t,i){const a=new bf(this.currentUser,e,t,i),l=XI(this.persistenceKey,this.currentUser,e);this.setItem(l,a.ds())}Bs(e){const t=XI(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Qs(e){const t={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(t))}qs(e,t,i){const a=Pg(this.persistenceKey,e),l=new Ac(e,t,i);this.setItem(a,l.ds())}Ks(e){const t=JSON.stringify(Array.from(e));this.setItem(this.Fs,t)}$s(e){const t=this.bs.exec(e);return t?t[1]:null}Ws(e,t){const i=this.$s(e);return Sf.Es(i,t)}Gs(e,t){const i=this.Ds.exec(e),a=Number(i[1]),l=i[2]!==void 0?i[2]:null;return bf.Es(new Wt(l),a,t)}js(e,t){const i=this.Cs.exec(e),a=Number(i[1]);return Ac.Es(a,t)}xs(e){return _y.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);te("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,t){const i=t?this.ps.insert(e,t):this.ps.remove(e),a=this.Ns(this.ps),l=this.Ns(i),c=[],f=[];return l.forEach((p=>{a.has(p)||c.push(p)})),a.forEach((p=>{l.has(p)||f.push(p)})),this.syncEngine.eo(c,f).then((()=>{this.ps=i}))}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let t=iy();return e.forEach(((i,a)=>{t=t.unionWith(a.activeTargetIds)})),t}}class E0{constructor(){this.no=new u_,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,t,i){this.ro[e]=t}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new u_,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q2{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){te("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){te("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qd=null;function xg(){return Qd===null?Qd=(function(){return 268435456+Math.round(2147483648*Math.random())})():Qd++,"0x"+Qd.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y2={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $2{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yn="WebChannelConnection";class X2 extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const i=t.ssl?"https":"http",a=encodeURIComponent(this.databaseId.projectId),l=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+t.host,this.So=`projects/${a}/databases/${l}`,this.bo=this.databaseId.database==="(default)"?`project_id=${a}`:`project_id=${a}&database_id=${l}`}get Do(){return!1}Co(t,i,a,l,c){const f=xg(),p=this.vo(t,i.toUriEncodedString());te("RestConnection",`Sending RPC '${t}' ${f}:`,p,a);const g={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(g,l,c),this.Mo(t,p,g,a).then((v=>(te("RestConnection",`Received RPC '${t}' ${f}: `,v),v)),(v=>{throw Ri("RestConnection",`RPC '${t}' ${f} failed with error: `,v,"url: ",p,"request:",a),v}))}xo(t,i,a,l,c,f){return this.Co(t,i,a,l,c)}Fo(t,i,a){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Gl})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach(((l,c)=>t[c]=l)),a&&a.headers.forEach(((l,c)=>t[c]=l))}vo(t,i){const a=Y2[t];return`${this.wo}/v1/${i}:${a}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,t,i,a){const l=xg();return new Promise(((c,f)=>{const p=new Hb;p.setWithCredentials(!0),p.listenOnce(Qb.COMPLETE,(()=>{try{switch(p.getLastErrorCode()){case Jd.NO_ERROR:const v=p.getResponseJson();te(yn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(v)),c(v);break;case Jd.TIMEOUT:te(yn,`RPC '${e}' ${l} timed out`),f(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case Jd.HTTP_ERROR:const T=p.getStatus();if(te(yn,`RPC '${e}' ${l} failed with status:`,T,"response text:",p.getResponseText()),T>0){let A=p.getResponseJson();Array.isArray(A)&&(A=A[0]);const P=A?.error;if(P&&P.status&&P.message){const G=(function($){const le=$.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(le)>=0?le:H.UNKNOWN})(P.status);f(new ee(G,P.message))}else f(new ee(H.UNKNOWN,"Server responded with status "+p.getStatus()))}else f(new ee(H.UNAVAILABLE,"Connection failed."));break;default:fe()}}finally{te(yn,`RPC '${e}' ${l} completed.`)}}));const g=JSON.stringify(a);te(yn,`RPC '${e}' ${l} sending request:`,a),p.send(t,"POST",g,i,15)}))}Oo(e,t,i){const a=xg(),l=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Xb(),f=$b(),p={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(p.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(p.xmlHttpFactory=new Kb({})),this.Fo(p.initMessageHeaders,t,i),p.encodeInitMessageHeaders=!0;const v=l.join("");te(yn,`Creating RPC '${e}' stream ${a}: ${v}`,p);const T=c.createWebChannel(v,p);let A=!1,P=!1;const G=new $2({lo:$=>{P?te(yn,`Not sending because RPC '${e}' stream ${a} is closed:`,$):(A||(te(yn,`Opening RPC '${e}' stream ${a} transport.`),T.open(),A=!0),te(yn,`RPC '${e}' stream ${a} sending:`,$),T.send($))},ho:()=>T.close()}),Q=($,le,he)=>{$.listen(le,(re=>{try{he(re)}catch(ve){setTimeout((()=>{throw ve}),0)}}))};return Q(T,fc.EventType.OPEN,(()=>{P||(te(yn,`RPC '${e}' stream ${a} transport opened.`),G.mo())})),Q(T,fc.EventType.CLOSE,(()=>{P||(P=!0,te(yn,`RPC '${e}' stream ${a} transport closed`),G.po())})),Q(T,fc.EventType.ERROR,($=>{P||(P=!0,Ri(yn,`RPC '${e}' stream ${a} transport errored:`,$),G.po(new ee(H.UNAVAILABLE,"The operation could not be completed")))})),Q(T,fc.EventType.MESSAGE,($=>{var le;if(!P){const he=$.data[0];_e(!!he);const re=he,ve=re.error||((le=re[0])===null||le===void 0?void 0:le.error);if(ve){te(yn,`RPC '${e}' stream ${a} received error:`,ve);const de=ve.status;let ue=(function(S){const N=zt[S];if(N!==void 0)return zS(N)})(de),R=ve.message;ue===void 0&&(ue=H.INTERNAL,R="Unknown error status: "+de+" with message "+ve.message),P=!0,G.po(new ee(ue,R)),T.close()}else te(yn,`RPC '${e}' stream ${a} received:`,he),G.yo(he)}})),Q(f,Yb.STAT_EVENT,($=>{$.stat===Qg.PROXY?te(yn,`RPC '${e}' stream ${a} detected buffering proxy`):$.stat===Qg.NOPROXY&&te(yn,`RPC '${e}' stream ${a} detected no buffering proxy`)})),setTimeout((()=>{G.fo()}),0),G}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(){return typeof window<"u"?window:null}function af(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(r){return new r2(r,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(e,t,i=1e3,a=1.5,l=6e4){this.oi=e,this.timerId=t,this.No=i,this.Lo=a,this.Bo=l,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const t=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),a=Math.max(0,t-i);a>0&&te("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.ko} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,a,(()=>(this.Qo=Date.now(),e()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w0{constructor(e,t,i,a,l,c,f,p){this.oi=e,this.Go=i,this.zo=a,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=f,this.listener=p,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new yy(e,t)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,(()=>this.r_())))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,t){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(Pt(t.toString()),Pt("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(t)}__(){}auth(){this.state=1;const e=this.a_(this.jo),t=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([i,a])=>{this.jo===t&&this.u_(i,a)}),(i=>{e((()=>{const a=new ee(H.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(a)}))}))}u_(e,t){const i=this.a_(this.jo);this.stream=this.l_(e,t),this.stream.Po((()=>{i((()=>this.listener.Po()))})),this.stream.To((()=>{i((()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,(()=>(this.Xo()&&(this.state=3),Promise.resolve()))),this.listener.To())))})),this.stream.Ao((a=>{i((()=>this.c_(a)))})),this.stream.onMessage((a=>{i((()=>this.onMessage(a)))}))}e_(){this.state=5,this.Yo.$o((async()=>{this.state=0,this.start()}))}c_(e){return te("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return t=>{this.oi.enqueueAndForget((()=>this.jo===e?t():(te("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class W2 extends w0{constructor(e,t,i,a,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l}l_(e,t){return this.connection.Oo("Listen",e,t)}onMessage(e){this.Yo.reset();const t=o2(this.serializer,e),i=(function(l){if(!("targetChange"in l))return ye.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?ye.min():c.readTime?Vt(c.readTime):ye.min()})(e);return this.listener.h_(t,i)}P_(e){const t={};t.database=r_(this.serializer),t.addTarget=(function(l,c){let f;const p=c.target;if(f=yf(p)?{documents:$S(l,p)}:{query:XS(l,p)._t},f.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){f.resumeToken=jS(l,c.resumeToken);const g=n_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}else if(c.snapshotVersion.compareTo(ye.min())>0){f.readTime=Nl(l,c.snapshotVersion.toTimestamp());const g=n_(l,c.expectedCount);g!==null&&(f.expectedCount=g)}return f})(this.serializer,e);const i=u2(this.serializer,e);i&&(t.labels=i),this.i_(t)}I_(e){const t={};t.database=r_(this.serializer),t.removeTarget=e,this.i_(t)}}class J2 extends w0{constructor(e,t,i,a,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,a,c),this.serializer=l,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,t){return this.connection.Oo("Write",e,t)}onMessage(e){if(_e(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const t=l2(e.writeResults,e.commitTime),i=Vt(e.commitTime);return this.listener.A_(i,t)}return _e(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=r_(this.serializer),this.i_(e)}d_(e){const t={streamToken:this.lastStreamToken,writes:e.map((i=>jc(this.serializer,i)))};this.i_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z2 extends class{}{constructor(e,t,i,a){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=a,this.m_=!1}f_(){if(this.m_)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,t,i,a){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([l,c])=>this.connection.Co(e,i_(t,i),a,l,c))).catch((l=>{throw l.name==="FirebaseError"?(l.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new ee(H.UNKNOWN,l.toString())}))}xo(e,t,i,a,l){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,f])=>this.connection.xo(e,i_(t,i),a,c,f,l))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(H.UNKNOWN,c.toString())}))}terminate(){this.m_=!0,this.connection.terminate()}}class eM{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve()))))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(Pt(t),this.y_=!1):te("OnlineStateTracker",t)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{constructor(e,t,i,a,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=l,this.O_.io((c=>{i.enqueueAndForget((async()=>{Zs(this)&&(te("RemoteStore","Restarting streams for network reachability change."),await(async function(p){const g=ce(p);g.M_.add(4),await Yl(g),g.N_.set("Unknown"),g.M_.delete(4),await lh(g)})(this))}))})),this.N_=new eM(i,a)}}async function lh(r){if(Zs(r))for(const e of r.x_)await e(!0)}async function Yl(r){for(const e of r.x_)await e(!1)}function Xf(r,e){const t=ce(r);t.F_.has(e.targetId)||(t.F_.set(e.targetId,e),Ty(t)?Ey(t):Xl(t).Xo()&&vy(t,e))}function Vl(r,e){const t=ce(r),i=Xl(t);t.F_.delete(e),i.Xo()&&I0(t,e),t.F_.size===0&&(i.Xo()?i.n_():Zs(t)&&t.N_.set("Unknown"))}function vy(r,e){if(r.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ye.min())>0){const t=r.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}Xl(r).P_(e)}function I0(r,e){r.L_.xe(e),Xl(r).I_(e)}function Ey(r){r.L_=new e2({getRemoteKeysForTarget:e=>r.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>r.F_.get(e)||null,tt:()=>r.datastore.serializer.databaseId}),Xl(r).start(),r.N_.w_()}function Ty(r){return Zs(r)&&!Xl(r).Zo()&&r.F_.size>0}function Zs(r){return ce(r).M_.size===0}function A0(r){r.L_=void 0}async function nM(r){r.N_.set("Online")}async function iM(r){r.F_.forEach(((e,t)=>{vy(r,e)}))}async function rM(r,e){A0(r),Ty(r)?(r.N_.D_(e),Ey(r)):r.N_.set("Unknown")}async function sM(r,e,t){if(r.N_.set("Online"),e instanceof qS&&e.state===2&&e.cause)try{await(async function(a,l){const c=l.cause;for(const f of l.targetIds)a.F_.has(f)&&(await a.remoteSyncer.rejectListen(f,c),a.F_.delete(f),a.L_.removeTarget(f))})(r,e)}catch(i){te("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Rf(r,i)}else if(e instanceof sf?r.L_.Ke(e):e instanceof FS?r.L_.He(e):r.L_.We(e),!t.isEqual(ye.min()))try{const i=await p0(r.localStore);t.compareTo(i)>=0&&await(function(l,c){const f=l.L_.rt(c);return f.targetChanges.forEach(((p,g)=>{if(p.resumeToken.approximateByteSize()>0){const v=l.F_.get(g);v&&l.F_.set(g,v.withResumeToken(p.resumeToken,c))}})),f.targetMismatches.forEach(((p,g)=>{const v=l.F_.get(p);if(!v)return;l.F_.set(p,v.withResumeToken(Gt.EMPTY_BYTE_STRING,v.snapshotVersion)),I0(l,p);const T=new Cr(v.target,p,g,v.sequenceNumber);vy(l,T)})),l.remoteSyncer.applyRemoteEvent(f)})(r,t)}catch(i){te("RemoteStore","Failed to raise snapshot:",i),await Rf(r,i)}}async function Rf(r,e,t){if(!Ws(e))throw e;r.M_.add(1),await Yl(r),r.N_.set("Offline"),t||(t=()=>p0(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{te("RemoteStore","Retrying IndexedDB access"),await t(),r.M_.delete(1),await lh(r)}))}function b0(r,e){return e().catch((t=>Rf(r,t,e)))}async function $l(r){const e=ce(r),t=Gs(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;aM(e);)try{const a=await G2(e.localStore,i);if(a===null){e.v_.length===0&&t.n_();break}i=a.batchId,oM(e,a)}catch(a){await Rf(e,a)}S0(e)&&R0(e)}function aM(r){return Zs(r)&&r.v_.length<10}function oM(r,e){r.v_.push(e);const t=Gs(r);t.Xo()&&t.E_&&t.d_(e.mutations)}function S0(r){return Zs(r)&&!Gs(r).Zo()&&r.v_.length>0}function R0(r){Gs(r).start()}async function lM(r){Gs(r).V_()}async function uM(r){const e=Gs(r);for(const t of r.v_)e.d_(t.mutations)}async function cM(r,e,t){const i=r.v_.shift(),a=ay.from(i,e,t);await b0(r,(()=>r.remoteSyncer.applySuccessfulWrite(a))),await $l(r)}async function hM(r,e){e&&Gs(r).E_&&await(async function(i,a){if((function(c){return US(c)&&c!==H.ABORTED})(a.code)){const l=i.v_.shift();Gs(i).t_(),await b0(i,(()=>i.remoteSyncer.rejectFailedWrite(l.batchId,a))),await $l(i)}})(r,e),S0(r)&&R0(r)}async function JI(r,e){const t=ce(r);t.asyncQueue.verifyOperationInProgress(),te("RemoteStore","RemoteStore received new credentials");const i=Zs(t);t.M_.add(3),await Yl(t),i&&t.N_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.M_.delete(3),await lh(t)}async function c_(r,e){const t=ce(r);e?(t.M_.delete(2),await lh(t)):e||(t.M_.add(2),await Yl(t),t.N_.set("Unknown"))}function Xl(r){return r.B_||(r.B_=(function(t,i,a){const l=ce(t);return l.f_(),new W2(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Po:nM.bind(null,r),To:iM.bind(null,r),Ao:rM.bind(null,r),h_:sM.bind(null,r)}),r.x_.push((async e=>{e?(r.B_.t_(),Ty(r)?Ey(r):r.N_.set("Unknown")):(await r.B_.stop(),A0(r))}))),r.B_}function Gs(r){return r.k_||(r.k_=(function(t,i,a){const l=ce(t);return l.f_(),new J2(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,a)})(r.datastore,r.asyncQueue,{Po:()=>Promise.resolve(),To:lM.bind(null,r),Ao:hM.bind(null,r),R_:uM.bind(null,r),A_:cM.bind(null,r)}),r.x_.push((async e=>{e?(r.k_.t_(),await $l(r)):(await r.k_.stop(),r.v_.length>0&&(te("RemoteStore",`Stopping write stream with ${r.v_.length} pending writes`),r.v_=[]))}))),r.k_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wy{constructor(e,t,i,a,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=a,this.removalCallback=l,this.deferred=new en,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,a,l){const c=Date.now()+i,f=new wy(e,t,c,a,l);return f.start(i),f}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Wl(r,e){if(Pt("AsyncQueue",`${e}: ${r}`),Ws(r))return new ee(H.UNAVAILABLE,`${e}: ${r}`);throw r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.comparator=e?(t,i)=>e(t,i)||oe.comparator(t.key,i.key):(t,i)=>oe.comparator(t.key,i.key),this.keyedMap=mc(),this.sortedSet=new st(this.comparator)}static emptySet(e){return new vl(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,i)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vl)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const a=t.getNext().key,l=i.getNext().key;if(!a.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new vl;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(){this.q_=new st(oe.comparator)}track(e){const t=e.doc.key,i=this.q_.get(t);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(t,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(t):e.type===1&&i.type===2?this.q_=this.q_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(t,{type:2,doc:e.doc}):fe():this.q_=this.q_.insert(t,e)}Q_(){const e=[];return this.q_.inorderTraversal(((t,i)=>{e.push(i)})),e}}class xl{constructor(e,t,i,a,l,c,f,p,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=a,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=f,this.excludesMetadataChanges=p,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,a,l){const c=[];return t.forEach((f=>{c.push({type:0,doc:f})})),new xl(e,t,vl.emptySet(t),c,i,a,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nh(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let a=0;a<t.length;a++)if(t[a].type!==i[a].type||!t[a].doc.isEqual(i[a].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some((e=>e.G_()))}}class fM{constructor(){this.queries=new Js((e=>IS(e)),nh),this.onlineState="Unknown",this.z_=new Set}}async function Iy(r,e){const t=ce(r);let i=3;const a=e.query;let l=t.queries.get(a);l?!l.W_()&&e.G_()&&(i=2):(l=new dM,i=e.G_()?0:1);try{switch(i){case 0:l.K_=await t.onListen(a,!0);break;case 1:l.K_=await t.onListen(a,!1);break;case 2:await t.onFirstRemoteStoreListen(a)}}catch(c){const f=Wl(c,`Initialization of query '${ll(e.query)}' failed`);return void e.onError(f)}t.queries.set(a,l),l.U_.push(e),e.j_(t.onlineState),l.K_&&e.H_(l.K_)&&by(t)}async function Ay(r,e){const t=ce(r),i=e.query;let a=3;const l=t.queries.get(i);if(l){const c=l.U_.indexOf(e);c>=0&&(l.U_.splice(c,1),l.U_.length===0?a=e.G_()?0:1:!l.W_()&&e.G_()&&(a=2))}switch(a){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function mM(r,e){const t=ce(r);let i=!1;for(const a of e){const l=a.query,c=t.queries.get(l);if(c){for(const f of c.U_)f.H_(a)&&(i=!0);c.K_=a}}i&&by(t)}function pM(r,e,t){const i=ce(r),a=i.queries.get(e);if(a)for(const l of a.U_)l.onError(t);i.queries.delete(e)}function by(r){r.z_.forEach((e=>{e.next()}))}var h_,eA;(eA=h_||(h_={})).J_="default",eA.Cache="cache";class Sy{constructor(e,t,i){this.query=e,this.Y_=t,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const a of e.docChanges)a.type!==3&&i.push(a);e=new xl(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),t=!0):this.ta(e,this.onlineState)&&(this.na(e),t=!0),this.X_=e,t}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let t=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),t=!0),t}ta(e,t){if(!e.fromCache||!this.G_())return!0;const i=t!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const t=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}na(e){e=xl.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==h_.Cache}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gM{constructor(e,t){this.ia=e,this.byteLength=t}sa(){return"metadata"in this.ia}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tA{constructor(e){this.serializer=e}Ps(e){return Yi(this.serializer,e)}Is(e){return e.metadata.exists?YS(this.serializer,e.document,!1):ut.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Vt(e)}}class _M{constructor(e,t,i){this.oa=e,this.localStore=t,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=C0(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++t;const i=Ue.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}aa(e){const t=new Map,i=new tA(this.serializer);for(const a of e)if(a.metadata.queries){const l=i.Ps(a.metadata.name);for(const c of a.metadata.queries){const f=(t.get(c)||De()).add(l);t.set(c,f)}}return t}async complete(){const e=await H2(this.localStore,new tA(this.serializer),this.documents,this.oa.id),t=this.aa(this.documents);for(const i of this.queries)await K2(this.localStore,i,t.get(i.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function C0(r){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D0{constructor(e){this.key=e}}class N0{constructor(e){this.key=e}}class O0{constructor(e,t){this.query=e,this.la=t,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=De(),this.mutatedKeys=De(),this.Ia=bS(e),this.Ta=new vl(this.Ia)}get Ea(){return this.la}da(e,t){const i=t?t.Aa:new ZI,a=t?t.Ta:this.Ta;let l=t?t.mutatedKeys:this.mutatedKeys,c=a,f=!1;const p=this.query.limitType==="F"&&a.size===this.query.limit?a.last():null,g=this.query.limitType==="L"&&a.size===this.query.limit?a.first():null;if(e.inorderTraversal(((v,T)=>{const A=a.get(v),P=ih(this.query,T)?T:null,G=!!A&&this.mutatedKeys.has(A.key),Q=!!P&&(P.hasLocalMutations||this.mutatedKeys.has(P.key)&&P.hasCommittedMutations);let $=!1;A&&P?A.data.isEqual(P.data)?G!==Q&&(i.track({type:3,doc:P}),$=!0):this.Ra(A,P)||(i.track({type:2,doc:P}),$=!0,(p&&this.Ia(P,p)>0||g&&this.Ia(P,g)<0)&&(f=!0)):!A&&P?(i.track({type:0,doc:P}),$=!0):A&&!P&&(i.track({type:1,doc:A}),$=!0,(p||g)&&(f=!0)),$&&(P?(c=c.add(P),l=Q?l.add(v):l.delete(v)):(c=c.delete(v),l=l.delete(v)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const v=this.query.limitType==="F"?c.last():c.first();c=c.delete(v.key),l=l.delete(v.key),i.track({type:1,doc:v})}return{Ta:c,Aa:i,Xi:f,mutatedKeys:l}}Ra(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,a){const l=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const c=e.Aa.Q_();c.sort(((v,T)=>(function(P,G){const Q=$=>{switch($){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return fe()}};return Q(P)-Q(G)})(v.type,T.type)||this.Ia(v.doc,T.doc))),this.Va(i),a=a!=null&&a;const f=t&&!a?this.ma():[],p=this.Pa.size===0&&this.current&&!a?1:0,g=p!==this.ha;return this.ha=p,c.length!==0||g?{snapshot:new xl(this.query,e.Ta,l,c,e.mutatedKeys,p===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:f}:{fa:f}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new ZI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach((t=>this.la=this.la.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.la=this.la.delete(t))),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=De(),this.Ta.forEach((i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))}));const t=[];return e.forEach((i=>{this.Pa.has(i)||t.push(new N0(i))})),this.Pa.forEach((i=>{e.has(i)||t.push(new D0(i))})),t}pa(e){this.la=e.hs,this.Pa=De();const t=this.da(e.documents);return this.applyChanges(t,!0)}ya(){return xl.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class yM{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class vM{constructor(e){this.key=e,this.wa=!1}}class EM{constructor(e,t,i,a,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=a,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.Sa={},this.ba=new Js((f=>IS(f)),nh),this.Da=new Map,this.Ca=new Set,this.va=new st(oe.comparator),this.Fa=new Map,this.Ma=new fy,this.xa={},this.Oa=new Map,this.Na=io.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function TM(r,e,t=!0){const i=Wf(r);let a;const l=i.ba.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),a=l.view.ya()):a=await P0(i,e,t,!0),a}async function wM(r,e){const t=Wf(r);await P0(t,e,!0,!1)}async function P0(r,e,t,i){const a=await Ol(r.localStore,Cn(e)),l=a.targetId,c=t?r.sharedClientState.addLocalQueryTarget(l):"not-current";let f;return i&&(f=await Ry(r,e,l,c==="current",a.resumeToken)),r.isPrimaryClient&&t&&Xf(r.remoteStore,a),f}async function Ry(r,e,t,i,a){r.Ba=(T,A,P)=>(async function(Q,$,le,he){let re=$.view.da(le);re.Xi&&(re=await Af(Q.localStore,$.query,!1).then((({documents:R})=>$.view.da(R,re))));const ve=he&&he.targetChanges.get($.targetId),de=he&&he.targetMismatches.get($.targetId)!=null,ue=$.view.applyChanges(re,Q.isPrimaryClient,ve,de);return d_(Q,$.targetId,ue.fa),ue.snapshot})(r,T,A,P);const l=await Af(r.localStore,e,!0),c=new O0(e,l.hs),f=c.da(l.documents),p=ah.createSynthesizedTargetChangeForCurrentChange(t,i&&r.onlineState!=="Offline",a),g=c.applyChanges(f,r.isPrimaryClient,p);d_(r,t,g.fa);const v=new yM(e,t,c);return r.ba.set(e,v),r.Da.has(t)?r.Da.get(t).push(e):r.Da.set(t,[e]),g.snapshot}async function IM(r,e,t){const i=ce(r),a=i.ba.get(e),l=i.Da.get(a.targetId);if(l.length>1)return i.Da.set(a.targetId,l.filter((c=>!nh(c,e)))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(a.targetId),i.sharedClientState.isActiveQueryTarget(a.targetId)||await Pl(i.localStore,a.targetId,!1).then((()=>{i.sharedClientState.clearQueryState(a.targetId),t&&Vl(i.remoteStore,a.targetId),Ml(i,a.targetId)})).catch(Xs)):(Ml(i,a.targetId),await Pl(i.localStore,a.targetId,!0))}async function AM(r,e){const t=ce(r),i=t.ba.get(e),a=t.Da.get(i.targetId);t.isPrimaryClient&&a.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Vl(t.remoteStore,i.targetId))}async function bM(r,e,t){const i=Oy(r);try{const a=await(function(c,f){const p=ce(c),g=mt.now(),v=f.reduce(((P,G)=>P.add(G.key)),De());let T,A;return p.persistence.runTransaction("Locally write mutations","readwrite",(P=>{let G=qn(),Q=De();return p.os.getEntries(P,v).next(($=>{G=$,G.forEach(((le,he)=>{he.isValidDocument()||(Q=Q.add(le))}))})).next((()=>p.localDocuments.getOverlayedDocuments(P,G))).next(($=>{T=$;const le=[];for(const he of f){const re=Wx(he,T.get(he.key).overlayedDocument);re!=null&&le.push(new Lr(he.key,re,mS(re.value.mapValue),ft.exists(!0)))}return p.mutationQueue.addMutationBatch(P,g,le,f)})).next(($=>{A=$;const le=$.applyToLocalDocumentSet(T,Q);return p.documentOverlayCache.saveOverlays(P,$.batchId,le)}))})).then((()=>({batchId:A.batchId,changes:RS(T)})))})(i.localStore,e);i.sharedClientState.addPendingMutation(a.batchId),(function(c,f,p){let g=c.xa[c.currentUser.toKey()];g||(g=new st(Re)),g=g.insert(f,p),c.xa[c.currentUser.toKey()]=g})(i,a.batchId,t),await Ur(i,a.changes),await $l(i.remoteStore)}catch(a){const l=Wl(a,"Failed to persist write");t.reject(l)}}async function V0(r,e){const t=ce(r);try{const i=await j2(t.localStore,e);e.targetChanges.forEach(((a,l)=>{const c=t.Fa.get(l);c&&(_e(a.addedDocuments.size+a.modifiedDocuments.size+a.removedDocuments.size<=1),a.addedDocuments.size>0?c.wa=!0:a.modifiedDocuments.size>0?_e(c.wa):a.removedDocuments.size>0&&(_e(c.wa),c.wa=!1))})),await Ur(t,i,e)}catch(i){await Xs(i)}}function nA(r,e,t){const i=ce(r);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const a=[];i.ba.forEach(((l,c)=>{const f=c.view.j_(e);f.snapshot&&a.push(f.snapshot)})),(function(c,f){const p=ce(c);p.onlineState=f;let g=!1;p.queries.forEach(((v,T)=>{for(const A of T.U_)A.j_(f)&&(g=!0)})),g&&by(p)})(i.eventManager,e),a.length&&i.Sa.h_(a),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function SM(r,e,t){const i=ce(r);i.sharedClientState.updateQueryState(e,"rejected",t);const a=i.Fa.get(e),l=a&&a.key;if(l){let c=new st(oe.comparator);c=c.insert(l,ut.newNoDocument(l,ye.min()));const f=De().add(l),p=new sh(ye.min(),new Map,new st(Re),c,f);await V0(i,p),i.va=i.va.remove(l),i.Fa.delete(e),Ny(i)}else await Pl(i.localStore,e,!1).then((()=>Ml(i,e,t))).catch(Xs)}async function RM(r,e){const t=ce(r),i=e.batch.batchId;try{const a=await q2(t.localStore,e);Dy(t,i,null),Cy(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await Ur(t,a)}catch(a){await Xs(a)}}async function CM(r,e,t){const i=ce(r);try{const a=await(function(c,f){const p=ce(c);return p.persistence.runTransaction("Reject batch","readwrite-primary",(g=>{let v;return p.mutationQueue.lookupMutationBatch(g,f).next((T=>(_e(T!==null),v=T.keys(),p.mutationQueue.removeMutationBatch(g,T)))).next((()=>p.mutationQueue.performConsistencyCheck(g))).next((()=>p.documentOverlayCache.removeOverlaysForBatchId(g,v,f))).next((()=>p.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,v))).next((()=>p.localDocuments.getDocuments(g,v)))}))})(i.localStore,e);Dy(i,e,t),Cy(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await Ur(i,a)}catch(a){await Xs(a)}}async function DM(r,e){const t=ce(r);Zs(t.remoteStore)||te("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await(function(c){const f=ce(c);return f.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(p=>f.mutationQueue.getHighestUnacknowledgedBatchId(p)))})(t.localStore);if(i===-1)return void e.resolve();const a=t.Oa.get(i)||[];a.push(e),t.Oa.set(i,a)}catch(i){const a=Wl(i,"Initialization of waitForPendingWrites() operation failed");e.reject(a)}}function Cy(r,e){(r.Oa.get(e)||[]).forEach((t=>{t.resolve()})),r.Oa.delete(e)}function Dy(r,e,t){const i=ce(r);let a=i.xa[i.currentUser.toKey()];if(a){const l=a.get(e);l&&(t?l.reject(t):l.resolve(),a=a.remove(e)),i.xa[i.currentUser.toKey()]=a}}function Ml(r,e,t=null){r.sharedClientState.removeLocalQueryTarget(e);for(const i of r.Da.get(e))r.ba.delete(i),t&&r.Sa.ka(i,t);r.Da.delete(e),r.isPrimaryClient&&r.Ma.Vr(e).forEach((i=>{r.Ma.containsKey(i)||x0(r,i)}))}function x0(r,e){r.Ca.delete(e.path.canonicalString());const t=r.va.get(e);t!==null&&(Vl(r.remoteStore,t),r.va=r.va.remove(e),r.Fa.delete(t),Ny(r))}function d_(r,e,t){for(const i of t)i instanceof D0?(r.Ma.addReference(i.key,e),NM(r,i)):i instanceof N0?(te("SyncEngine","Document no longer in limbo: "+i.key),r.Ma.removeReference(i.key,e),r.Ma.containsKey(i.key)||x0(r,i.key)):fe()}function NM(r,e){const t=e.key,i=t.path.canonicalString();r.va.get(t)||r.Ca.has(i)||(te("SyncEngine","New document in limbo: "+t),r.Ca.add(i),Ny(r))}function Ny(r){for(;r.Ca.size>0&&r.va.size<r.maxConcurrentLimboResolutions;){const e=r.Ca.values().next().value;r.Ca.delete(e);const t=new oe(Ue.fromString(e)),i=r.Na.next();r.Fa.set(i,new vM(t)),r.va=r.va.insert(t,i),Xf(r.remoteStore,new Cr(Cn(Hl(t.path)),i,"TargetPurposeLimboResolution",Bn.oe))}}async function Ur(r,e,t){const i=ce(r),a=[],l=[],c=[];i.ba.isEmpty()||(i.ba.forEach(((f,p)=>{c.push(i.Ba(p,e,t).then((g=>{if((g||t)&&i.isPrimaryClient){const v=g&&!g.fromCache;i.sharedClientState.updateQueryState(p.targetId,v?"current":"not-current")}if(g){a.push(g);const v=gy.Ki(p.targetId,g);l.push(v)}})))})),await Promise.all(c),i.Sa.h_(a),await(async function(p,g){const v=ce(p);try{await v.persistence.runTransaction("notifyLocalViewChanges","readwrite",(T=>F.forEach(g,(A=>F.forEach(A.qi,(P=>v.persistence.referenceDelegate.addReference(T,A.targetId,P))).next((()=>F.forEach(A.Qi,(P=>v.persistence.referenceDelegate.removeReference(T,A.targetId,P)))))))))}catch(T){if(!Ws(T))throw T;te("LocalStore","Failed to update sequence numbers: "+T)}for(const T of g){const A=T.targetId;if(!T.fromCache){const P=v.ns.get(A),G=P.snapshotVersion,Q=P.withLastLimboFreeSnapshotVersion(G);v.ns=v.ns.insert(A,Q)}}})(i.localStore,l))}async function OM(r,e){const t=ce(r);if(!t.currentUser.isEqual(e)){te("SyncEngine","User change. New user:",e.toKey());const i=await m0(t.localStore,e);t.currentUser=e,(function(l,c){l.Oa.forEach((f=>{f.forEach((p=>{p.reject(new ee(H.CANCELLED,c))}))})),l.Oa.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await Ur(t,i.us)}}function PM(r,e){const t=ce(r),i=t.Fa.get(e);if(i&&i.wa)return De().add(i.key);{let a=De();const l=t.Da.get(e);if(!l)return a;for(const c of l){const f=t.ba.get(c);a=a.unionWith(f.view.Ea)}return a}}async function VM(r,e){const t=ce(r),i=await Af(t.localStore,e.query,!0),a=e.view.pa(i);return t.isPrimaryClient&&d_(t,e.targetId,a.fa),a}async function xM(r,e){const t=ce(r);return y0(t.localStore,e).then((i=>Ur(t,i)))}async function MM(r,e,t,i){const a=ce(r),l=await(function(f,p){const g=ce(f),v=ce(g.mutationQueue);return g.persistence.runTransaction("Lookup mutation documents","readonly",(T=>v.vn(T,p).next((A=>A?g.localDocuments.getDocuments(T,A):F.resolve(null)))))})(a.localStore,e);l!==null?(t==="pending"?await $l(a.remoteStore):t==="acknowledged"||t==="rejected"?(Dy(a,e,i||null),Cy(a,e),(function(f,p){ce(ce(f).mutationQueue).Mn(p)})(a.localStore,e)):fe(),await Ur(a,l)):te("SyncEngine","Cannot apply mutation batch with id: "+e)}async function kM(r,e){const t=ce(r);if(Wf(t),Oy(t),e===!0&&t.La!==!0){const i=t.sharedClientState.getAllActiveQueryTargets(),a=await iA(t,i.toArray());t.La=!0,await c_(t.remoteStore,!0);for(const l of a)Xf(t.remoteStore,l)}else if(e===!1&&t.La!==!1){const i=[];let a=Promise.resolve();t.Da.forEach(((l,c)=>{t.sharedClientState.isLocalQueryTarget(c)?i.push(c):a=a.then((()=>(Ml(t,c),Pl(t.localStore,c,!0)))),Vl(t.remoteStore,c)})),await a,await iA(t,i),(function(c){const f=ce(c);f.Fa.forEach(((p,g)=>{Vl(f.remoteStore,g)})),f.Ma.mr(),f.Fa=new Map,f.va=new st(oe.comparator)})(t),t.La=!1,await c_(t.remoteStore,!1)}}async function iA(r,e,t){const i=ce(r),a=[],l=[];for(const c of e){let f;const p=i.Da.get(c);if(p&&p.length!==0){f=await Ol(i.localStore,Cn(p[0]));for(const g of p){const v=i.ba.get(g),T=await VM(i,v);T.snapshot&&l.push(T.snapshot)}}else{const g=await _0(i.localStore,c);f=await Ol(i.localStore,g),await Ry(i,M0(g),c,!1,f.resumeToken)}a.push(f)}return i.Sa.h_(l),a}function M0(r){return wS(r.path,r.collectionGroup,r.orderBy,r.filters,r.limit,"F",r.startAt,r.endAt)}function LM(r){return(function(t){return ce(ce(t).persistence).Bi()})(ce(r).localStore)}async function UM(r,e,t,i){const a=ce(r);if(a.La)return void te("SyncEngine","Ignoring unexpected query state notification.");const l=a.Da.get(e);if(l&&l.length>0)switch(t){case"current":case"not-current":{const c=await y0(a.localStore,AS(l[0])),f=sh.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Gt.EMPTY_BYTE_STRING);await Ur(a,c,f);break}case"rejected":await Pl(a.localStore,e,!0),Ml(a,e,i);break;default:fe()}}async function zM(r,e,t){const i=Wf(r);if(i.La){for(const a of e){if(i.Da.has(a)&&i.sharedClientState.isActiveQueryTarget(a)){te("SyncEngine","Adding an already active target "+a);continue}const l=await _0(i.localStore,a),c=await Ol(i.localStore,l);await Ry(i,M0(l),c.targetId,!1,c.resumeToken),Xf(i.remoteStore,c)}for(const a of t)i.Da.has(a)&&await Pl(i.localStore,a,!1).then((()=>{Vl(i.remoteStore,a),Ml(i,a)})).catch(Xs)}}function Wf(r){const e=ce(r);return e.remoteStore.remoteSyncer.applyRemoteEvent=V0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=PM.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=SM.bind(null,e),e.Sa.h_=mM.bind(null,e.eventManager),e.Sa.ka=pM.bind(null,e.eventManager),e}function Oy(r){const e=ce(r);return e.remoteStore.remoteSyncer.applySuccessfulWrite=RM.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=CM.bind(null,e),e}function BM(r,e,t){const i=ce(r);(async function(l,c,f){try{const p=await c.getMetadata();if(await(function(P,G){const Q=ce(P),$=Vt(G.createTime);return Q.persistence.runTransaction("hasNewerBundle","readonly",(le=>Q.$r.getBundleMetadata(le,G.id))).then((le=>!!le&&le.createTime.compareTo($)>=0))})(l.localStore,p))return await c.close(),f._completeWith((function(P){return{taskState:"Success",documentsLoaded:P.totalDocuments,bytesLoaded:P.totalBytes,totalDocuments:P.totalDocuments,totalBytes:P.totalBytes}})(p)),Promise.resolve(new Set);f._updateProgress(C0(p));const g=new _M(p,l.localStore,c.serializer);let v=await c.qa();for(;v;){const A=await g._a(v);A&&f._updateProgress(A),v=await c.qa()}const T=await g.complete();return await Ur(l,T.ca,void 0),await(function(P,G){const Q=ce(P);return Q.persistence.runTransaction("Save bundle","readwrite",($=>Q.$r.saveBundleMetadata($,G)))})(l.localStore,p),f._completeWith(T.progress),Promise.resolve(T.ua)}catch(p){return Ri("SyncEngine",`Loading bundle failed with ${p}`),f._failWith(p),Promise.resolve(new Set)}})(i,e,t).then((a=>{i.sharedClientState.notifyBundleLoaded(a)}))}class f_{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oh(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return f0(this.persistence,new d0,e.initialUser,this.serializer)}createPersistence(e){return new h0($f.Hr,this.serializer)}createSharedClientState(e){return new E0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class k0 extends f_{constructor(e,t,i){super(),this.Qa=e,this.cacheSizeBytes=t,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await Oy(this.Qa.syncEngine),await $l(this.Qa.remoteStore),await this.persistence.fi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return f0(this.persistence,new d0,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const i=this.persistence.referenceDelegate.garbageCollector;return new b2(i,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const i=new lx(t,this.persistence);return new ox(e.asyncQueue,i)}createPersistence(e){const t=py(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Un.withCacheSize(this.cacheSizeBytes):Un.DEFAULT;return new my(this.synchronizeTabs,t,e.clientId,i,e.asyncQueue,T0(),af(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new E0}}class FM extends k0{constructor(e,t){super(e,t,!1),this.Qa=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Qa.syncEngine;this.sharedClientState instanceof Vg&&(this.sharedClientState.syncEngine={Zs:MM.bind(null,t),Xs:UM.bind(null,t),eo:zM.bind(null,t),Bi:LM.bind(null,t),Ys:xM.bind(null,t)},await this.sharedClientState.start()),await this.persistence.fi((async i=>{await kM(this.Qa.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=T0();if(!Vg.D(t))throw new ee(H.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=py(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Vg(t,e.asyncQueue,i,e.clientId,e.initialUser)}}class Py{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>nA(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=OM.bind(null,this.syncEngine),await c_(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new fM})()}createDatastore(e){const t=oh(e.databaseInfo.databaseId),i=(function(l){return new X2(l)})(e.databaseInfo);return(function(l,c,f,p){return new Z2(l,c,f,p)})(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return(function(i,a,l,c,f){return new tM(i,a,l,c,f)})(this.localStore,this.datastore,e.asyncQueue,(t=>nA(this.syncEngine,t,0)),(function(){return WI.D()?new WI:new Q2})())}createSyncEngine(e,t){return(function(a,l,c,f,p,g,v){const T=new EM(a,l,c,f,p,g);return v&&(T.La=!0),T})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e;await(async function(i){const a=ce(i);te("RemoteStore","RemoteStore shutting down."),a.M_.add(5),await Yl(a),a.O_.shutdown(),a.N_.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rA(r,e=10240){let t=0;return{async read(){if(t<r.byteLength){const i={value:r.slice(t,t+e),done:!1};return t+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):Pt("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qM{constructor(e,t){this.Ua=e,this.serializer=t,this.metadata=new en,this.buffer=new Uint8Array,this.Wa=(function(){return new TextDecoder("utf-8")})(),this.Ga().then((i=>{i&&i.sa()?this.metadata.resolve(i.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i?.ia)}`))}),(i=>this.metadata.reject(i)))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const t=this.Wa.decode(e),i=Number(t);isNaN(i)&&this.ja(`length string (${t}) is not valid number`);const a=await this.Ha(i);return new gM(JSON.parse(a),e.length+i)}Ja(){return this.buffer.findIndex((e=>e===123))}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const t=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jM{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new ee(H.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await(async function(a,l){const c=ce(a),f={documents:l.map((T=>qc(c.serializer,T)))},p=await c.xo("BatchGetDocuments",c.serializer.databaseId,Ue.emptyPath(),f,l.length),g=new Map;p.forEach((T=>{const A=a2(c.serializer,T);g.set(A.key.toString(),A)}));const v=[];return l.forEach((T=>{const A=g.get(T.toString());_e(!!A),v.push(A)})),v})(this.datastore,e);return t.forEach((i=>this.recordVersion(i))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ql(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((t,i)=>{const a=oe.fromPath(i);this.mutations.push(new ry(a,this.precondition(a)))})),await(async function(i,a){const l=ce(i),c={writes:a.map((f=>jc(l.serializer,f)))};await l.Co("Commit",l.serializer.databaseId,Ue.emptyPath(),c)})(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw fe();t=ye.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!t.isEqual(i))throw new ee(H.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(ye.min())?ft.exists(!1):ft.updateTime(t):ft.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(ye.min()))throw new ee(H.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ft.updateTime(t)}return ft.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GM{constructor(e,t,i,a,l){this.asyncQueue=e,this.datastore=t,this.options=i,this.updateFunction=a,this.deferred=l,this.Za=i.maxAttempts,this.Yo=new yy(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o((async()=>{const e=new jM(this.datastore),t=this.tu(e);t&&t.then((i=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(i)})).catch((a=>{this.nu(a)}))))})).catch((i=>{this.nu(i)}))}))}tu(e){try{const t=this.updateFunction(e);return!eh(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget((()=>(this.eu(),Promise.resolve())))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!US(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HM{constructor(e,t,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=a,this.user=Wt.UNAUTHENTICATED,this.clientId=Jb.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,(async l=>{te("FirestoreClient","Received user=",l.uid),await this.authCredentialListener(l),this.user=l})),this.appCheckCredentials.start(i,(l=>(te("FirestoreClient","Received new app check token=",l),this.appCheckCredentialListener(l,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new en;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Wl(t,"Failed to shutdown persistence");e.reject(i)}})),e.promise}}async function of(r,e){r.asyncQueue.verifyOperationInProgress(),te("FirestoreClient","Initializing OfflineComponentProvider");const t=r.configuration;await e.initialize(t);let i=t.initialUser;r.setCredentialChangeListener((async a=>{i.isEqual(a)||(await m0(e.localStore,a),i=a)})),e.persistence.setDatabaseDeletedListener((()=>r.terminate())),r._offlineComponents=e}async function m_(r,e){r.asyncQueue.verifyOperationInProgress();const t=await Vy(r);te("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(t,r.configuration),r.setCredentialChangeListener((i=>JI(e.remoteStore,i))),r.setAppCheckTokenChangeListener(((i,a)=>JI(e.remoteStore,a))),r._onlineComponents=e}function L0(r){return r.name==="FirebaseError"?r.code===H.FAILED_PRECONDITION||r.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11}async function Vy(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){te("FirestoreClient","Using user provided OfflineComponentProvider");try{await of(r,r._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!L0(t))throw t;Ri("Error using user provided cache. Falling back to memory cache: "+t),await of(r,new f_)}}else te("FirestoreClient","Using default OfflineComponentProvider"),await of(r,new f_);return r._offlineComponents}async function Zf(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(te("FirestoreClient","Using user provided OnlineComponentProvider"),await m_(r,r._uninitializedComponentsProvider._online)):(te("FirestoreClient","Using default OnlineComponentProvider"),await m_(r,new Py))),r._onlineComponents}function U0(r){return Vy(r).then((e=>e.persistence))}function xy(r){return Vy(r).then((e=>e.localStore))}function z0(r){return Zf(r).then((e=>e.remoteStore))}function My(r){return Zf(r).then((e=>e.syncEngine))}function KM(r){return Zf(r).then((e=>e.datastore))}async function kl(r){const e=await Zf(r),t=e.eventManager;return t.onListen=TM.bind(null,e.syncEngine),t.onUnlisten=IM.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=wM.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=AM.bind(null,e.syncEngine),t}function QM(r){return r.asyncQueue.enqueue((async()=>{const e=await U0(r),t=await z0(r);return e.setNetworkEnabled(!0),(function(a){const l=ce(a);return l.M_.delete(0),lh(l)})(t)}))}function YM(r){return r.asyncQueue.enqueue((async()=>{const e=await U0(r),t=await z0(r);return e.setNetworkEnabled(!1),(async function(a){const l=ce(a);l.M_.add(0),await Yl(l),l.N_.set("Offline")})(t)}))}function $M(r,e){const t=new en;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await(function(g,v){const T=ce(g);return T.persistence.runTransaction("read document","readonly",(A=>T.localDocuments.getDocument(A,v)))})(a,l);f.isFoundDocument()?c.resolve(f):f.isNoDocument()?c.resolve(null):c.reject(new ee(H.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(f){const p=Wl(f,`Failed to get document '${l} from cache`);c.reject(p)}})(await xy(r),e,t))),t.promise}function B0(r,e,t={}){const i=new en;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Jf({next:A=>{c.enqueueAndForget((()=>Ay(l,T)));const P=A.docs.has(f);!P&&A.fromCache?g.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):P&&A.fromCache&&p&&p.source==="server"?g.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new Sy(Hl(f.path),v,{includeMetadataChanges:!0,ra:!0});return Iy(l,T)})(await kl(r),r.asyncQueue,e,t,i))),i.promise}function XM(r,e){const t=new en;return r.asyncQueue.enqueueAndForget((async()=>(async function(a,l,c){try{const f=await Af(a,l,!0),p=new O0(l,f.hs),g=p.da(f.documents),v=p.applyChanges(g,!1);c.resolve(v.snapshot)}catch(f){const p=Wl(f,`Failed to execute query '${l} against cache`);c.reject(p)}})(await xy(r),e,t))),t.promise}function F0(r,e,t={}){const i=new en;return r.asyncQueue.enqueueAndForget((async()=>(function(l,c,f,p,g){const v=new Jf({next:A=>{c.enqueueAndForget((()=>Ay(l,T))),A.fromCache&&p.source==="server"?g.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):g.resolve(A)},error:A=>g.reject(A)}),T=new Sy(f,v,{includeMetadataChanges:!0,ra:!0});return Iy(l,T)})(await kl(r),r.asyncQueue,e,t,i))),i.promise}function WM(r,e){const t=new Jf(e);return r.asyncQueue.enqueueAndForget((async()=>(function(a,l){ce(a).z_.add(l),l.next()})(await kl(r),t))),()=>{t.$a(),r.asyncQueue.enqueueAndForget((async()=>(function(a,l){ce(a).z_.delete(l)})(await kl(r),t)))}}function JM(r,e,t,i){const a=(function(c,f){let p;return p=typeof c=="string"?BS().encode(c):c,(function(v,T){return new qM(v,T)})((function(v,T){if(v instanceof Uint8Array)return rA(v,T);if(v instanceof ArrayBuffer)return rA(new Uint8Array(v),T);if(v instanceof ReadableStream)return v.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")})(p),f)})(t,oh(e));r.asyncQueue.enqueueAndForget((async()=>{BM(await My(r),a,i)}))}function ZM(r,e){return r.asyncQueue.enqueue((async()=>(function(i,a){const l=ce(i);return l.persistence.runTransaction("Get named query","readonly",(c=>l.$r.getNamedQuery(c,a)))})(await xy(r),e)))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q0(r){const e={};return r.timeoutSeconds!==void 0&&(e.timeoutSeconds=r.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ky(r,e,t){if(!t)throw new ee(H.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${e}.`)}function j0(r,e,t,i){if(e===!0&&i===!0)throw new ee(H.INVALID_ARGUMENT,`${r} and ${t} cannot be used together.`)}function aA(r){if(!oe.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function oA(r){if(oe.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function em(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const e=(function(i){return i.constructor?i.constructor.name:null})(r);return e?`a custom ${e} object`:"an object"}}return typeof r=="function"?"a function":fe()}function je(r,e){if("_delegate"in r&&(r=r._delegate),!(r instanceof e)){if(e.name===r.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=em(r);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return r}function G0(r,e){if(e<=0)throw new ee(H.INVALID_ARGUMENT,`Function ${r}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}j0("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=q0((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),(function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(i,a){return i.timeoutSeconds===a.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uh{constructor(e,t,i,a){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new lA({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new lA(e),e.credentials!==void 0&&(this._authCredentials=(function(i){if(!i)return new XV;switch(i.type){case"firstParty":return new ex(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const i=sA.get(t);i&&(te("ComponentProvider","Removing Datastore"),sA.delete(t),i.terminate())})(this),Promise.resolve()}}function ek(r,e,t,i={}){var a;const l=(r=je(r,uh))._getSettings(),c=`${e}:${t}`;if(l.host!=="firestore.googleapis.com"&&l.host!==c&&Ri("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),r._setSettings(Object.assign(Object.assign({},l),{host:c,ssl:!1})),i.mockUserToken){let f,p;if(typeof i.mockUserToken=="string")f=i.mockUserToken,p=Wt.MOCK_USER;else{f=mD(i.mockUserToken,(a=r._app)===null||a===void 0?void 0:a.options.projectId);const g=i.mockUserToken.sub||i.mockUserToken.user_id;if(!g)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");p=new Wt(g)}r._authCredentials=new WV(new Wb(f,p))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Dn=class H0{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new H0(this.firestore,e,this._query)}},_t=class K0{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new K0(this.firestore,e,this._key)}},ks=class Q0 extends Dn{constructor(e,t,i){super(e,t,Hl(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new oe(e))}withConverter(e){return new Q0(this.firestore,e,this._path)}};function Y0(r,e,...t){if(r=Te(r),ky("collection","path",e),r instanceof uh){const i=Ue.fromString(e,...t);return oA(i),new ks(r,null,i)}{if(!(r instanceof _t||r instanceof ks))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ue.fromString(e,...t));return oA(i),new ks(r.firestore,null,i)}}function tk(r,e){if(r=je(r,uh),ky("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Dn(r,null,(function(i){return new kr(Ue.emptyPath(),i)})(e))}function Cf(r,e,...t){if(r=Te(r),arguments.length===1&&(e=Jb.newId()),ky("doc","path",e),r instanceof uh){const i=Ue.fromString(e,...t);return aA(i),new _t(r,null,new oe(i))}{if(!(r instanceof _t||r instanceof ks))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=r._path.child(Ue.fromString(e,...t));return aA(i),new _t(r.firestore,r instanceof ks?r.converter:null,new oe(i))}}function $0(r,e){return r=Te(r),e=Te(e),(r instanceof _t||r instanceof ks)&&(e instanceof _t||e instanceof ks)&&r.firestore===e.firestore&&r.path===e.path&&r.converter===e.converter}function X0(r,e){return r=Te(r),e=Te(e),r instanceof Dn&&e instanceof Dn&&r.firestore===e.firestore&&nh(r._query,e._query)&&r.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nk{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new yy(this,"async_queue_retry"),this.hu=()=>{const t=af();t&&te("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const e=af();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const t=af();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise((()=>{}));const t=new en;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.su.push(e),this.Tu())))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!Ws(e))throw e;te("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(e){const t=this.iu.then((()=>(this.uu=!0,e().catch((i=>{this.au=i,this.uu=!1;const a=(function(c){let f=c.message||"";return c.stack&&(f=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),f})(i);throw Pt("INTERNAL UNHANDLED ERROR: ",a),i})).then((i=>(this.uu=!1,i))))));return this.iu=t,t}enqueueAfterDelay(e,t,i){this.Pu(),this.lu.indexOf(e)>-1&&(t=0);const a=wy.createAndSchedule(this,e,t,i,(l=>this.Eu(l)));return this._u.push(a),a}Pu(){this.au&&fe()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const t of this._u)if(t.timerId===e)return!0;return!1}Ru(e){return this.du().then((()=>{this._u.sort(((t,i)=>t.targetTimeMs-i.targetTimeMs));for(const t of this._u)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.du()}))}Vu(e){this.lu.push(e)}Eu(e){const t=this._u.indexOf(e);this._u.splice(t,1)}}function p_(r){return(function(t,i){if(typeof t!="object"||t===null)return!1;const a=t;for(const l of i)if(l in a&&typeof a[l]=="function")return!0;return!1})(r,["next","error","complete"])}class ik{constructor(){this._progressObserver={},this._taskCompletionResolver=new en,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,i){this._progressObserver={next:e,error:t,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rk=-1;let St=class extends uh{constructor(e,t,i,a){super(e,t,i,a),this.type="firestore",this._queue=(function(){return new nk})(),this._persistenceKey=a?.name||"[DEFAULT]"}_terminate(){return this._firestoreClient||W0(this),this._firestoreClient.terminate()}};function nn(r){return r._firestoreClient||W0(r),r._firestoreClient.verifyNotTerminated(),r._firestoreClient}function W0(r){var e,t,i;const a=r._freezeSettings(),l=(function(f,p,g,v){return new Dx(f,p,g,v.host,v.ssl,v.experimentalForceLongPolling,v.experimentalAutoDetectLongPolling,q0(v.experimentalLongPollingOptions),v.useFetchStreams)})(r._databaseId,((e=r._app)===null||e===void 0?void 0:e.options.appId)||"",r._persistenceKey,a);r._firestoreClient=new HM(r._authCredentials,r._appCheckCredentials,r._queue,l),!((t=a.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=a.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(r._firestoreClient._uninitializedComponentsProvider={_offlineKind:a.localCache.kind,_offline:a.localCache._offlineComponentProvider,_online:a.localCache._onlineComponentProvider})}function sk(r,e){Z0(r=je(r,St));const t=nn(r);if(t._uninitializedComponentsProvider)throw new ee(H.FAILED_PRECONDITION,"SDK cache is already specified.");Ri("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const i=r._freezeSettings(),a=new Py;return J0(t,a,new k0(a,i.cacheSizeBytes,e?.forceOwnership))}function ak(r){Z0(r=je(r,St));const e=nn(r);if(e._uninitializedComponentsProvider)throw new ee(H.FAILED_PRECONDITION,"SDK cache is already specified.");Ri("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=r._freezeSettings(),i=new Py;return J0(e,i,new FM(i,t.cacheSizeBytes))}function J0(r,e,t){const i=new en;return r.asyncQueue.enqueue((async()=>{try{await of(r,t),await m_(r,e),i.resolve()}catch(a){const l=a;if(!L0(l))throw l;Ri("Error enabling indexeddb cache. Falling back to memory cache: "+l),i.reject(l)}})).then((()=>i.promise))}function ok(r){if(r._initialized&&!r._terminated)throw new ee(H.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new en;return r._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await(async function(i){if(!Qi.D())return Promise.resolve();const a=i+"main";await Qi.delete(a)})(py(r._databaseId,r._persistenceKey)),e.resolve()}catch(t){e.reject(t)}})),e.promise}function lk(r){return(function(t){const i=new en;return t.asyncQueue.enqueueAndForget((async()=>DM(await My(t),i))),i.promise})(nn(r=je(r,St)))}function uk(r){return QM(nn(r=je(r,St)))}function ck(r){return YM(nn(r=je(r,St)))}function hk(r,e){const t=nn(r=je(r,St)),i=new ik;return JM(t,r._databaseId,e,i),i}function dk(r,e){return ZM(nn(r=je(r,St)),e).then((t=>t?new Dn(r,null,t.query):null))}function Z0(r){if(r._initialized||r._terminated)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Wi(Gt.fromBase64String(e))}catch(t){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Wi(Gt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hs=class{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new dt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lo=class{constructor(e){this._methodName=e}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Re(this._lat,e._lat)||Re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fk=/^__.*__$/;class mk{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return this.fieldMask!==null?new Lr(e,this.data,this.fieldMask,t,this.fieldTransforms):new Kl(e,this.data,t,this.fieldTransforms)}}class eR{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Lr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function tR(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw fe()}}class nm{constructor(e,t,i,a,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=a,l===void 0&&this.mu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new nm(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.gu({path:i,yu:!1});return a.wu(e),a}Su(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),a=this.gu({path:i,yu:!1});return a.mu(),a}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Df(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(tR(this.fu)&&fk.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class pk{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||oh(e)}Fu(e,t,i,a=!1){return new nm({fu:e,methodName:t,vu:i,path:dt.emptyPath(),yu:!1,Cu:a},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function uo(r){const e=r._freezeSettings(),t=oh(r._databaseId);return new pk(r._databaseId,!!e.ignoreUndefinedProperties,t)}function im(r,e,t,i,a,l={}){const c=r.Fu(l.merge||l.mergeFields?2:0,e,t,a);jy("Data must be an object, but it was:",c,i);const f=rR(i,c);let p,g;if(l.merge)p=new Fn(c.fieldMask),g=c.fieldTransforms;else if(l.mergeFields){const v=[];for(const T of l.mergeFields){const A=g_(e,T,t);if(!c.contains(A))throw new ee(H.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);aR(v,A)||v.push(A)}p=new Fn(v),g=c.fieldTransforms.filter((T=>p.covers(T.field)))}else p=null,g=c.fieldTransforms;return new mk(new fn(f),p,g)}class ch extends lo{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ch}}function nR(r,e,t){return new nm({fu:3,vu:e.settings.vu,methodName:r._methodName,yu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ly extends lo{_toFieldTransform(e){return new rh(e.path,new Cl)}isEqual(e){return e instanceof Ly}}class Uy extends lo{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=nR(this,e,!0),i=this.Mu.map((l=>co(l,t))),a=new Za(i);return new rh(e.path,a)}isEqual(e){return e instanceof Uy&&Rc(this.Mu,e.Mu)}}class zy extends lo{constructor(e,t){super(e),this.Mu=t}_toFieldTransform(e){const t=nR(this,e,!0),i=this.Mu.map((l=>co(l,t))),a=new eo(i);return new rh(e.path,a)}isEqual(e){return e instanceof zy&&Rc(this.Mu,e.Mu)}}class By extends lo{constructor(e,t){super(e),this.xu=t}_toFieldTransform(e){const t=new Dl(e.serializer,OS(e.serializer,this.xu));return new rh(e.path,t)}isEqual(e){return e instanceof By&&this.xu===e.xu}}function Fy(r,e,t,i){const a=r.Fu(1,e,t);jy("Data must be an object, but it was:",a,i);const l=[],c=fn.empty();oo(i,((p,g)=>{const v=Gy(e,p,t);g=Te(g);const T=a.Su(v);if(g instanceof ch)l.push(v);else{const A=co(g,T);A!=null&&(l.push(v),c.set(v,A))}}));const f=new Fn(l);return new eR(c,f,a.fieldTransforms)}function qy(r,e,t,i,a,l){const c=r.Fu(1,e,t),f=[g_(e,i,t)],p=[a];if(l.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let A=0;A<l.length;A+=2)f.push(g_(e,l[A])),p.push(l[A+1]);const g=[],v=fn.empty();for(let A=f.length-1;A>=0;--A)if(!aR(g,f[A])){const P=f[A];let G=p[A];G=Te(G);const Q=c.Su(P);if(G instanceof ch)g.push(P);else{const $=co(G,Q);$!=null&&(g.push(P),v.set(P,$))}}const T=new Fn(g);return new eR(v,T,c.fieldTransforms)}function iR(r,e,t,i=!1){return co(t,r.Fu(i?4:3,e))}function co(r,e){if(sR(r=Te(r)))return jy("Unsupported field value:",e,r),rR(r,e);if(r instanceof lo)return(function(i,a){if(!tR(a.fu))throw a.Du(`${i._methodName}() can only be used with update() and set()`);if(!a.path)throw a.Du(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(a);l&&a.fieldTransforms.push(l)})(r,e),null;if(r===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),r instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return(function(i,a){const l=[];let c=0;for(const f of i){let p=co(f,a.bu(c));p==null&&(p={nullValue:"NULL_VALUE"}),l.push(p),c++}return{arrayValue:{values:l}}})(r,e)}return(function(i,a){if((i=Te(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return OS(a.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=mt.fromDate(i);return{timestampValue:Nl(a.serializer,l)}}if(i instanceof mt){const l=new mt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nl(a.serializer,l)}}if(i instanceof tm)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof Wi)return{bytesValue:jS(a.serializer,i._byteString)};if(i instanceof _t){const l=a.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw a.Du(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:uy(i.firestore._databaseId||a.databaseId,i._key.path)}}throw a.Du(`Unsupported field value: ${em(i)}`)})(r,e)}function rR(r,e){const t={};return hS(r)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):oo(r,((i,a)=>{const l=co(a,e.pu(i));l!=null&&(t[i]=l)})),{mapValue:{fields:t}}}function sR(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof mt||r instanceof tm||r instanceof Wi||r instanceof _t||r instanceof lo)}function jy(r,e,t){if(!sR(t)||!(function(a){return typeof a=="object"&&a!==null&&(Object.getPrototypeOf(a)===Object.prototype||Object.getPrototypeOf(a)===null)})(t)){const i=em(t);throw i==="an object"?e.Du(r+" a custom object"):e.Du(r+" "+i)}}function g_(r,e,t){if((e=Te(e))instanceof Hs)return e._internalPath;if(typeof e=="string")return Gy(r,e);throw Df("Field path arguments must be of type string or ",r,!1,void 0,t)}const gk=new RegExp("[~\\*/\\[\\]]");function Gy(r,e,t){if(e.search(gk)>=0)throw Df(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,t);try{return new Hs(...e.split("."))._internalPath}catch{throw Df(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,t)}}function Df(r,e,t,i,a){const l=i&&!i.isEmpty(),c=a!==void 0;let f=`Function ${e}() called with invalid data`;t&&(f+=" (via `toFirestore()`)"),f+=". ";let p="";return(l||c)&&(p+=" (found",l&&(p+=` in field ${i}`),c&&(p+=` in document ${a}`),p+=")"),new ee(H.INVALID_ARGUMENT,f+r+p)}function aR(r,e){return r.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(e,t,i,a,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=a,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new _k(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(rm("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class _k extends Gc{data(){return super.data()}}function rm(r,e){return typeof e=="string"?Gy(r,e):e instanceof Hs?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oR(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Hy{}class hh extends Hy{}function Ns(r,e,...t){let i=[];e instanceof Hy&&i.push(e),i=i.concat(t),(function(l){const c=l.filter((p=>p instanceof Ky)).length,f=l.filter((p=>p instanceof sm)).length;if(c>1||c>0&&f>0)throw new ee(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(i);for(const a of i)r=a._apply(r);return r}class sm extends hh{constructor(e,t,i){super(),this._field=e,this._op=t,this._value=i,this.type="where"}static _create(e,t,i){return new sm(e,t,i)}_apply(e){const t=this._parse(e);return uR(e._query,t),new Dn(e.firestore,e.converter,t_(e._query,t))}_parse(e){const t=uo(e.firestore);return(function(l,c,f,p,g,v,T){let A;if(g.isKeyField()){if(v==="array-contains"||v==="array-contains-any")throw new ee(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${v}' queries on documentId().`);if(v==="in"||v==="not-in"){cA(T,v);const P=[];for(const G of T)P.push(uA(p,l,G));A={arrayValue:{values:P}}}else A=uA(p,l,T)}else v!=="in"&&v!=="not-in"&&v!=="array-contains-any"||cA(T,v),A=iR(f,c,T,v==="in"||v==="not-in");return ze.create(g,v,A)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function yk(r,e,t){const i=e,a=rm("where",r);return sm._create(a,i,t)}class Ky extends Hy{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Ky(e,t)}_parse(e){const t=this._queryConstraints.map((i=>i._parse(e))).filter((i=>i.getFilters().length>0));return t.length===1?t[0]:Ze.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(a,l){let c=a;const f=l.getFlattenedFilters();for(const p of f)uR(c,p),c=t_(c,p)})(e._query,t),new Dn(e.firestore,e.converter,t_(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qy extends hh{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qy(e,t)}_apply(e){const t=(function(a,l,c){if(a.startAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(a.endAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Fc(l,c)})(e._query,this._field,this._direction);return new Dn(e.firestore,e.converter,(function(a,l){const c=a.explicitOrderBy.concat([l]);return new kr(a.path,a.collectionGroup,c,a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt)})(e._query,t))}}function vk(r,e="asc"){const t=e,i=rm("orderBy",r);return Qy._create(i,t)}class am extends hh{constructor(e,t,i){super(),this.type=e,this._limit=t,this._limitType=i}static _create(e,t,i){return new am(e,t,i)}_apply(e){return new Dn(e.firestore,e.converter,Ef(e._query,this._limit,this._limitType))}}function Ek(r){return G0("limit",r),am._create("limit",r,"F")}function Tk(r){return G0("limitToLast",r),am._create("limitToLast",r,"L")}class om extends hh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new om(e,t,i)}_apply(e){const t=lR(e,this.type,this._docOrFields,this._inclusive);return new Dn(e.firestore,e.converter,(function(a,l){return new kr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,l,a.endAt)})(e._query,t))}}function wk(...r){return om._create("startAt",r,!0)}function Ik(...r){return om._create("startAfter",r,!1)}class lm extends hh{constructor(e,t,i){super(),this.type=e,this._docOrFields=t,this._inclusive=i}static _create(e,t,i){return new lm(e,t,i)}_apply(e){const t=lR(e,this.type,this._docOrFields,this._inclusive);return new Dn(e.firestore,e.converter,(function(a,l){return new kr(a.path,a.collectionGroup,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,l)})(e._query,t))}}function Ak(...r){return lm._create("endBefore",r,!1)}function bk(...r){return lm._create("endAt",r,!0)}function lR(r,e,t,i){if(t[0]=Te(t[0]),t[0]instanceof Gc)return(function(l,c,f,p,g){if(!p)throw new ee(H.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${f}().`);const v=[];for(const T of yl(l))if(T.field.isKeyField())v.push(Wa(c,p.key));else{const A=p.data.field(T.field);if(Gf(A))throw new ee(H.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+T.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(A===null){const P=T.field.canonicalString();throw new ee(H.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${P}' (used as the orderBy) does not exist.`)}v.push(A)}return new js(v,g)})(r._query,r.firestore._databaseId,e,t[0]._document,i);{const a=uo(r.firestore);return(function(c,f,p,g,v,T){const A=c.explicitOrderBy;if(v.length>A.length)throw new ee(H.INVALID_ARGUMENT,`Too many arguments provided to ${g}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const P=[];for(let G=0;G<v.length;G++){const Q=v[G];if(A[G].field.isKeyField()){if(typeof Q!="string")throw new ee(H.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${g}(), but got a ${typeof Q}`);if(!ny(c)&&Q.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${g}() must be a plain document ID, but '${Q}' contains a slash.`);const $=c.path.child(Ue.fromString(Q));if(!oe.isDocumentKey($))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${g}() must result in a valid document path, but '${$}' is not because it contains an odd number of segments.`);const le=new oe($);P.push(Wa(f,le))}else{const $=iR(p,g,Q);P.push($)}}return new js(P,T)})(r._query,r.firestore._databaseId,a,e,t,i)}}function uA(r,e,t){if(typeof(t=Te(t))=="string"){if(t==="")throw new ee(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ny(e)&&t.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const i=e.path.child(Ue.fromString(t));if(!oe.isDocumentKey(i))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Wa(r,new oe(i))}if(t instanceof _t)return Wa(r,t._key);throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${em(t)}.`)}function cA(r,e){if(!Array.isArray(r)||r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function uR(r,e){const t=(function(a,l){for(const c of a)for(const f of c.getFlattenedFilters())if(l.indexOf(f.op)>=0)return f.op;return null})(r.filters,(function(a){switch(a){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Yy{convertValue(e,t="none"){switch(Xa(e)){case 0:return null;case 1:return e.booleanValue;case 2:return It(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Bs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw fe()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return oo(e,((a,l)=>{i[a]=this.convertValue(l,t)})),i}convertGeoPoint(e){return new tm(It(e.latitude),It(e.longitude))}convertArray(e,t){return(e.values||[]).map((i=>this.convertValue(i,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const i=ey(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Uc(e));default:return null}}convertTimestamp(e){const t=Pr(e);return new mt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=Ue.fromString(e);_e(e0(i));const a=new Fs(i.get(1),i.get(3)),l=new oe(i.popFirst(5));return a.isEqual(t)||Pt(`Document ${l} contains a document reference within a different database (${a.projectId}/${a.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(r,e,t){let i;return i=r?t&&(t.merge||t.mergeFields)?r.toFirestore(e,t):r.toFirestore(e):e,i}class Sk extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let Vr=class extends Gc{constructor(e,t,i,a,l,c){super(e,t,i,a,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bc(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(rm("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}},bc=class extends Vr{data(e={}){return super.data(e)}},Ks=class{constructor(e,t,i,a){this._firestore=e,this._userDataWriter=t,this._snapshot=a,this.metadata=new Ba(a.hasPendingWrites,a.fromCache),this.query=i}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((i=>{e.call(t,new bc(this._firestore,this._userDataWriter,i.key,i,new Ba(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(a,l){if(a._snapshot.oldDocs.isEmpty()){let c=0;return a._snapshot.docChanges.map((f=>{const p=new bc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ba(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);return f.doc,{type:"added",doc:p,oldIndex:-1,newIndex:c++}}))}{let c=a._snapshot.oldDocs;return a._snapshot.docChanges.filter((f=>l||f.type!==3)).map((f=>{const p=new bc(a._firestore,a._userDataWriter,f.doc.key,f.doc,new Ba(a._snapshot.mutatedKeys.has(f.doc.key),a._snapshot.fromCache),a.query.converter);let g=-1,v=-1;return f.type!==0&&(g=c.indexOf(f.doc.key),c=c.delete(f.doc.key)),f.type!==1&&(c=c.add(f.doc),v=c.indexOf(f.doc.key)),{type:Rk(f.type),doc:p,oldIndex:g,newIndex:v}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}};function Rk(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return fe()}}function cR(r,e){return r instanceof Vr&&e instanceof Vr?r._firestore===e._firestore&&r._key.isEqual(e._key)&&(r._document===null?e._document===null:r._document.isEqual(e._document))&&r._converter===e._converter:r instanceof Ks&&e instanceof Ks&&r._firestore===e._firestore&&X0(r.query,e.query)&&r.metadata.isEqual(e.metadata)&&r._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ck(r){r=je(r,_t);const e=je(r.firestore,St);return B0(nn(e),r._key).then((t=>$y(e,r,t)))}class ho extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Wi(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,t)}}function Dk(r){r=je(r,_t);const e=je(r.firestore,St),t=nn(e),i=new ho(e);return $M(t,r._key).then((a=>new Vr(e,i,r._key,a,new Ba(a!==null&&a.hasLocalMutations,!0),r.converter)))}function Nk(r){r=je(r,_t);const e=je(r.firestore,St);return B0(nn(e),r._key,{source:"server"}).then((t=>$y(e,r,t)))}function Ok(r){r=je(r,Dn);const e=je(r.firestore,St),t=nn(e),i=new ho(e);return oR(r._query),F0(t,r._query).then((a=>new Ks(e,i,r,a)))}function Pk(r){r=je(r,Dn);const e=je(r.firestore,St),t=nn(e),i=new ho(e);return XM(t,r._query).then((a=>new Ks(e,i,r,a)))}function Vk(r){r=je(r,Dn);const e=je(r.firestore,St),t=nn(e),i=new ho(e);return F0(t,r._query,{source:"server"}).then((a=>new Ks(e,i,r,a)))}function hA(r,e,t){r=je(r,_t);const i=je(r.firestore,St),a=um(r.converter,e,t);return dh(i,[im(uo(i),"setDoc",r._key,a,r.converter!==null,t).toMutation(r._key,ft.none())])}function dA(r,e,t,...i){r=je(r,_t);const a=je(r.firestore,St),l=uo(a);let c;return c=typeof(e=Te(e))=="string"||e instanceof Hs?qy(l,"updateDoc",r._key,e,t,i):Fy(l,"updateDoc",r._key,e),dh(a,[c.toMutation(r._key,ft.exists(!0))])}function xk(r){return dh(je(r.firestore,St),[new Ql(r._key,ft.none())])}function Mk(r,e){const t=je(r.firestore,St),i=Cf(r),a=um(r.converter,e);return dh(t,[im(uo(r.firestore),"addDoc",i._key,a,r.converter!==null,{}).toMutation(i._key,ft.exists(!1))]).then((()=>i))}function hR(r,...e){var t,i,a;r=Te(r);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||p_(e[c])||(l=e[c],c++);const f={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(p_(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(a=T.complete)===null||a===void 0?void 0:a.bind(T)}let p,g,v;if(r instanceof _t)g=je(r.firestore,St),v=Hl(r._key.path),p={next:T=>{e[c]&&e[c]($y(g,r,T))},error:e[c+1],complete:e[c+2]};else{const T=je(r,Dn);g=je(T.firestore,St),v=T._query;const A=new ho(g);p={next:P=>{e[c]&&e[c](new Ks(g,A,T,P))},error:e[c+1],complete:e[c+2]},oR(r._query)}return(function(A,P,G,Q){const $=new Jf(Q),le=new Sy(P,$,G);return A.asyncQueue.enqueueAndForget((async()=>Iy(await kl(A),le))),()=>{$.$a(),A.asyncQueue.enqueueAndForget((async()=>Ay(await kl(A),le)))}})(nn(g),v,f,p)}function kk(r,e){return WM(nn(r=je(r,St)),p_(e)?e:{next:e})}function dh(r,e){return(function(i,a){const l=new en;return i.asyncQueue.enqueueAndForget((async()=>bM(await My(i),a,l))),l.promise})(nn(r),e)}function $y(r,e,t){const i=t.docs.get(e._key),a=new ho(r);return new Vr(r,a,e._key,i,new Ba(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Uk=class{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=uo(e)}set(e,t,i){this._verifyNotCommitted();const a=Ps(e,this._firestore),l=um(a.converter,t,i),c=im(this._dataReader,"WriteBatch.set",a._key,l,a.converter!==null,i);return this._mutations.push(c.toMutation(a._key,ft.none())),this}update(e,t,i,...a){this._verifyNotCommitted();const l=Ps(e,this._firestore);let c;return c=typeof(t=Te(t))=="string"||t instanceof Hs?qy(this._dataReader,"WriteBatch.update",l._key,t,i,a):Fy(this._dataReader,"WriteBatch.update",l._key,t),this._mutations.push(c.toMutation(l._key,ft.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ps(e,this._firestore);return this._mutations=this._mutations.concat(new Ql(t._key,ft.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new ee(H.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function Ps(r,e){if((r=Te(r)).firestore!==e)throw new ee(H.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zk=class extends class{constructor(t,i){this._firestore=t,this._transaction=i,this._dataReader=uo(t)}get(t){const i=Ps(t,this._firestore),a=new Sk(this._firestore);return this._transaction.lookup([i._key]).then((l=>{if(!l||l.length!==1)return fe();const c=l[0];if(c.isFoundDocument())return new Gc(this._firestore,a,c.key,c,i.converter);if(c.isNoDocument())return new Gc(this._firestore,a,i._key,null,i.converter);throw fe()}))}set(t,i,a){const l=Ps(t,this._firestore),c=um(l.converter,i,a),f=im(this._dataReader,"Transaction.set",l._key,c,l.converter!==null,a);return this._transaction.set(l._key,f),this}update(t,i,a,...l){const c=Ps(t,this._firestore);let f;return f=typeof(i=Te(i))=="string"||i instanceof Hs?qy(this._dataReader,"Transaction.update",c._key,i,a,l):Fy(this._dataReader,"Transaction.update",c._key,i),this._transaction.update(c._key,f),this}delete(t){const i=Ps(t,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Ps(e,this._firestore),i=new ho(this._firestore);return super.get(e).then((a=>new Vr(this._firestore,i,t._key,a._document,new Ba(!1,!1),t.converter)))}};function Bk(r,e,t){r=je(r,St);const i=Object.assign(Object.assign({},Lk),t);return(function(l){if(l.maxAttempts<1)throw new ee(H.INVALID_ARGUMENT,"Max attempts must be at least 1")})(i),(function(l,c,f){const p=new en;return l.asyncQueue.enqueueAndForget((async()=>{const g=await KM(l);new GM(l.asyncQueue,g,f,c,p).Xa()})),p.promise})(nn(r),(a=>e(new zk(r,a))),i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fk(){return new ch("deleteField")}function qk(){return new Ly("serverTimestamp")}function jk(...r){return new Uy("arrayUnion",r)}function Gk(...r){return new zy("arrayRemove",r)}function Hk(r){return new By("increment",r)}(function(e,t=!0){(function(a){Gl=a})(Ys),Nr(new gi("firestore",((i,{instanceIdentifier:a,options:l})=>{const c=i.getProvider("app").getImmediate(),f=new St(new JV(i.getProvider("auth-internal")),new nx(i.getProvider("app-check-internal")),(function(g,v){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Fs(g.options.projectId,v)})(c,a),c);return l=Object.assign({useFetchStreams:t},l),f._setSettings(l),f}),"PUBLIC").setMultipleInstances(!0)),ei(sI,"4.6.3",e),ei(sI,"4.6.3","esm2017")})();const Kk="@firebase/firestore-compat",Qk="0.3.32";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xy(r,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new ee("invalid-argument",`Invalid options passed to function ${r}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(){if(typeof Uint8Array>"u")throw new ee("unimplemented","Uint8Arrays are not available in this environment.")}function mA(){if(!Rx())throw new ee("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Hc{constructor(e){this._delegate=e}static fromBase64String(e){return mA(),new Hc(Wi.fromBase64String(e))}static fromUint8Array(e){return fA(),new Hc(Wi.fromUint8Array(e))}toBase64(){return mA(),this._delegate.toBase64()}toUint8Array(){return fA(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function __(r){return Yk(r,["next","error","complete"])}function Yk(r,e){if(typeof r!="object"||r===null)return!1;const t=r;for(const i of e)if(i in t&&typeof t[i]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $k{enableIndexedDbPersistence(e,t){return sk(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return ak(e._delegate)}clearIndexedDbPersistence(e){return ok(e._delegate)}}class dR{constructor(e,t,i){this._delegate=t,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Fs||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Ri("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,i={}){ek(this._delegate,e,t,i)}enableNetwork(){return uk(this._delegate)}disableNetwork(){return ck(this._delegate)}enablePersistence(e){let t=!1,i=!1;return e&&(t=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,j0("synchronizeTabs",t,"experimentalForceOwningTab",i)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return lk(this._delegate)}onSnapshotsInSync(e){return kk(this._delegate,e)}get app(){if(!this._appCompat)throw new ee("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ll(this,Y0(this._delegate,e))}catch(t){throw Sn(t,"collection()","Firestore.collection()")}}doc(e){try{return new mi(this,Cf(this._delegate,e))}catch(t){throw Sn(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new bn(this,tk(this._delegate,e))}catch(t){throw Sn(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Bk(this._delegate,t=>e(new fR(this,t)))}batch(){return nn(this._delegate),new mR(new Uk(this._delegate,e=>dh(this._delegate,e)))}loadBundle(e){return hk(this._delegate,e)}namedQuery(e){return dk(this._delegate,e).then(t=>t?new bn(this,t):null)}}class cm extends Yy{constructor(e){super(),this.firestore=e}convertBytes(e){return new Hc(new Wi(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return mi.forKey(t,this.firestore,null)}}function Xk(r){YV(r)}class fR{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}get(e){const t=Fa(e);return this._delegate.get(t).then(i=>new Kc(this._firestore,new Vr(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,t.converter)))}set(e,t,i){const a=Fa(e);return i?(Xy("Transaction.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=Fa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=Fa(e);return this._delegate.delete(t),this}}class mR{constructor(e){this._delegate=e}set(e,t,i){const a=Fa(e);return i?(Xy("WriteBatch.set",i),this._delegate.set(a,t,i)):this._delegate.set(a,t),this}update(e,t,i,...a){const l=Fa(e);return arguments.length===2?this._delegate.update(l,t):this._delegate.update(l,t,i,...a),this}delete(e){const t=Fa(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ro{constructor(e,t,i){this._firestore=e,this._userDataWriter=t,this._delegate=i}fromFirestore(e,t){const i=new bc(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Qc(this._firestore,i),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const i=ro.INSTANCES;let a=i.get(e);a||(a=new WeakMap,i.set(e,a));let l=a.get(t);return l||(l=new ro(e,new cm(e),t),a.set(t,l)),l}}ro.INSTANCES=new WeakMap;class mi{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}static forPath(e,t,i){if(e.length%2!==0)throw new ee("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new mi(t,new _t(t._delegate,i,new oe(e)))}static forKey(e,t,i){return new mi(t,new _t(t._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new Ll(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ll(this.firestore,Y0(this._delegate,e))}catch(t){throw Sn(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=Te(e),e instanceof _t?$0(this._delegate,e):!1}set(e,t){t=Xy("DocumentReference.set",t);try{return t?hA(this._delegate,e,t):hA(this._delegate,e)}catch(i){throw Sn(i,"setDoc()","DocumentReference.set()")}}update(e,t,...i){try{return arguments.length===1?dA(this._delegate,e):dA(this._delegate,e,t,...i)}catch(a){throw Sn(a,"updateDoc()","DocumentReference.update()")}}delete(){return xk(this._delegate)}onSnapshot(...e){const t=pR(e),i=gR(e,a=>new Kc(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,a._key,a._document,a.metadata,this._delegate.converter)));return hR(this._delegate,t,i)}get(e){let t;return e?.source==="cache"?t=Dk(this._delegate):e?.source==="server"?t=Nk(this._delegate):t=Ck(this._delegate),t.then(i=>new Kc(this.firestore,new Vr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new mi(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Sn(r,e,t){return r.message=r.message.replace(e,t),r}function pR(r){for(const e of r)if(typeof e=="object"&&!__(e))return e;return{}}function gR(r,e){var t,i;let a;return __(r[0])?a=r[0]:__(r[1])?a=r[1]:typeof r[0]=="function"?a={next:r[0],error:r[1],complete:r[2]}:a={next:r[1],error:r[2],complete:r[3]},{next:l=>{a.next&&a.next(e(l))},error:(t=a.error)===null||t===void 0?void 0:t.bind(a),complete:(i=a.complete)===null||i===void 0?void 0:i.bind(a)}}class Kc{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new mi(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return cR(this._delegate,e._delegate)}}class Qc extends Kc{data(e){const t=this._delegate.data(e);return this._delegate._converter||$V(t!==void 0),t}}class bn{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new cm(e)}where(e,t,i){try{return new bn(this.firestore,Ns(this._delegate,yk(e,t,i)))}catch(a){throw Sn(a,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new bn(this.firestore,Ns(this._delegate,vk(e,t)))}catch(i){throw Sn(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new bn(this.firestore,Ns(this._delegate,Ek(e)))}catch(t){throw Sn(t,"limit()","Query.limit()")}}limitToLast(e){try{return new bn(this.firestore,Ns(this._delegate,Tk(e)))}catch(t){throw Sn(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new bn(this.firestore,Ns(this._delegate,wk(...e)))}catch(t){throw Sn(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new bn(this.firestore,Ns(this._delegate,Ik(...e)))}catch(t){throw Sn(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new bn(this.firestore,Ns(this._delegate,Ak(...e)))}catch(t){throw Sn(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new bn(this.firestore,Ns(this._delegate,bk(...e)))}catch(t){throw Sn(t,"endAt()","Query.endAt()")}}isEqual(e){return X0(this._delegate,e._delegate)}get(e){let t;return e?.source==="cache"?t=Pk(this._delegate):e?.source==="server"?t=Vk(this._delegate):t=Ok(this._delegate),t.then(i=>new y_(this.firestore,new Ks(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const t=pR(e),i=gR(e,a=>new y_(this.firestore,new Ks(this.firestore._delegate,this._userDataWriter,this._delegate,a._snapshot)));return hR(this._delegate,t,i)}withConverter(e){return new bn(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Wk{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Qc(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class y_{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new bn(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Qc(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Wk(this._firestore,t))}forEach(e,t){this._delegate.forEach(i=>{e.call(t,new Qc(this._firestore,i))})}isEqual(e){return cR(this._delegate,e._delegate)}}class Ll extends bn{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new mi(this.firestore,e):null}doc(e){try{return e===void 0?new mi(this.firestore,Cf(this._delegate)):new mi(this.firestore,Cf(this._delegate,e))}catch(t){throw Sn(t,"doc()","CollectionReference.doc()")}}add(e){return Mk(this._delegate,e).then(t=>new mi(this.firestore,t))}isEqual(e){return $0(this._delegate,e._delegate)}withConverter(e){return new Ll(this.firestore,e?this._delegate.withConverter(ro.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Fa(r){return je(r,_t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(...e){this._delegate=new Hs(...e)}static documentId(){return new Wy(dt.keyField().canonicalString())}isEqual(e){return e=Te(e),e instanceof Hs?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this._delegate=e}static serverTimestamp(){const e=qk();return e._methodName="FieldValue.serverTimestamp",new La(e)}static delete(){const e=Fk();return e._methodName="FieldValue.delete",new La(e)}static arrayUnion(...e){const t=jk(...e);return t._methodName="FieldValue.arrayUnion",new La(t)}static arrayRemove(...e){const t=Gk(...e);return t._methodName="FieldValue.arrayRemove",new La(t)}static increment(e){const t=Hk(e);return t._methodName="FieldValue.increment",new La(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jk={Firestore:dR,GeoPoint:tm,Timestamp:mt,Blob:Hc,Transaction:fR,WriteBatch:mR,DocumentReference:mi,DocumentSnapshot:Kc,Query:bn,QueryDocumentSnapshot:Qc,QuerySnapshot:y_,CollectionReference:Ll,FieldPath:Wy,FieldValue:La,setLogLevel:Xk,CACHE_SIZE_UNLIMITED:rk};function Zk(r,e){r.INTERNAL.registerComponent(new gi("firestore-compat",t=>{const i=t.getProvider("app-compat").getImmediate(),a=t.getProvider("firestore").getImmediate();return e(i,a)},"PUBLIC").setServiceProps(Object.assign({},Jk)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eL(r){Zk(r,(e,t)=>new dR(e,t,new $k)),r.registerVersion(Kk,Qk)}eL(zn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tL="type.googleapis.com/google.protobuf.Int64Value",nL="type.googleapis.com/google.protobuf.UInt64Value";function _R(r,e){const t={};for(const i in r)r.hasOwnProperty(i)&&(t[i]=e(r[i]));return t}function v_(r){if(r==null)return null;if(r instanceof Number&&(r=r.valueOf()),typeof r=="number"&&isFinite(r)||r===!0||r===!1||Object.prototype.toString.call(r)==="[object String]")return r;if(r instanceof Date)return r.toISOString();if(Array.isArray(r))return r.map(e=>v_(e));if(typeof r=="function"||typeof r=="object")return _R(r,e=>v_(e));throw new Error("Data cannot be encoded in JSON: "+r)}function Nf(r){if(r==null)return r;if(r["@type"])switch(r["@type"]){case tL:case nL:{const e=Number(r.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+r);return e}default:throw new Error("Data cannot be decoded from JSON: "+r)}return Array.isArray(r)?r.map(e=>Nf(e)):typeof r=="function"||typeof r=="object"?_R(r,e=>Nf(e)):r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR="functions";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class El extends Jt{constructor(e,t,i){super(`${yR}/${e}`,t||""),this.details=i}}function iL(r){if(r>=200&&r<300)return"ok";switch(r){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function rL(r,e){let t=iL(r),i=t,a;try{const l=e&&e.error;if(l){const c=l.status;if(typeof c=="string"){if(!pA[c])return new El("internal","internal");t=pA[c],i=c}const f=l.message;typeof f=="string"&&(i=f),a=l.details,a!==void 0&&(a=Nf(a))}}catch{}return t==="ok"?null:new El(t,i,a)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sL{constructor(e,t,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=t.getImmediate({optional:!0}),this.auth||e.get().then(a=>this.auth=a,()=>{}),this.messaging||t.get().then(a=>this.messaging=a,()=>{}),this.appCheck||i.get().then(a=>this.appCheck=a,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e?.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const t=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return t.error?null:t.token}return null}async getContext(e){const t=await this.getAuthToken(),i=await this.getMessagingToken(),a=await this.getAppCheckToken(e);return{authToken:t,messagingToken:i,appCheckToken:a}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gA="us-central1";function aL(r){let e=null;return{promise:new Promise((t,i)=>{e=setTimeout(()=>{i(new El("deadline-exceeded","deadline-exceeded"))},r)}),cancel:()=>{e&&clearTimeout(e)}}}let oL=class{constructor(e,t,i,a,l=gA,c){this.app=e,this.fetchImpl=c,this.emulatorOrigin=null,this.contextProvider=new sL(t,i,a),this.cancelAllRequests=new Promise(f=>{this.deleteService=()=>Promise.resolve(f())});try{const f=new URL(l);this.customDomain=f.origin,this.region=gA}catch{this.customDomain=null,this.region=l}}_delete(){return this.deleteService()}_url(e){const t=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${t}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${t}.cloudfunctions.net/${e}`}};function lL(r,e,t){r.emulatorOrigin=`http://${e}:${t}`}function uL(r,e,t){return(i=>dL(r,e,i,t||{}))}function cL(r,e,t){return(i=>vR(r,e,i,t||{}))}async function hL(r,e,t,i){t["Content-Type"]="application/json";let a;try{a=await i(r,{method:"POST",body:JSON.stringify(e),headers:t})}catch{return{status:0,json:null}}let l=null;try{l=await a.json()}catch{}return{status:a.status,json:l}}function dL(r,e,t,i){const a=r._url(e);return vR(r,a,t,i)}async function vR(r,e,t,i){t=v_(t);const a={data:t},l={},c=await r.contextProvider.getContext(i.limitedUseAppCheckTokens);c.authToken&&(l.Authorization="Bearer "+c.authToken),c.messagingToken&&(l["Firebase-Instance-ID-Token"]=c.messagingToken),c.appCheckToken!==null&&(l["X-Firebase-AppCheck"]=c.appCheckToken);const f=i.timeout||7e4,p=aL(f),g=await Promise.race([hL(e,a,l,r.fetchImpl),p.promise,r.cancelAllRequests]);if(p.cancel(),!g)throw new El("cancelled","Firebase Functions instance was deleted.");const v=rL(g.status,g.json);if(v)throw v;if(!g.json)throw new El("internal","Response is not valid JSON object.");let T=g.json.data;if(typeof T>"u"&&(T=g.json.result),typeof T>"u")throw new El("internal","Response is missing data field.");return{data:Nf(T)}}const _A="@firebase/functions",yA="0.11.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fL="auth-internal",mL="app-check-internal",pL="messaging-internal";function gL(r,e){const t=(i,{instanceIdentifier:a})=>{const l=i.getProvider("app").getImmediate(),c=i.getProvider(fL),f=i.getProvider(pL),p=i.getProvider(mL);return new oL(l,c,f,p,a,r)};Nr(new gi(yR,t,"PUBLIC").setMultipleInstances(!0)),ei(_A,yA,e),ei(_A,yA,"esm2017")}function vA(r,e,t){lL(Te(r),e,t)}function _L(r,e,t){return uL(Te(r),e,t)}function yL(r,e,t){return cL(Te(r),e,t)}gL(fetch.bind(self));const vL="@firebase/functions-compat",EL="0.3.11";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,t){this.app=e,this._delegate=t,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,t){return _L(this._delegate,e,t)}httpsCallableFromURL(e,t){return yL(this._delegate,e,t)}useFunctionsEmulator(e){const t=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(t==null)throw new Jt("functions","No origin provided to useFunctionsEmulator()");if(t[2]==null)throw new Jt("functions","Port missing in origin provided to useFunctionsEmulator()");return vA(this._delegate,t[1],Number(t[2]))}useEmulator(e,t){return vA(this._delegate,e,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TL="us-central1",wL=(r,{instanceIdentifier:e})=>{const t=r.getProvider("app-compat").getImmediate(),i=r.getProvider("functions").getImmediate({identifier:e??TL});return new ER(t,i)};function IL(){const r={Functions:ER};zn.INTERNAL.registerComponent(new gi("functions-compat",wL,"PUBLIC").setServiceProps(r).setMultipleInstances(!0))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */IL();zn.registerVersion(vL,EL);const lf={apiKey:"AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",authDomain:"smartlocalai-469603.firebaseapp.com",projectId:"smartlocalai-469603",storageBucket:"smartlocalai-469603.firebasestorage.app",messagingSenderId:"206325636938",appId:"1:206325636938:web:16040b951bdfb691fbabb3",measurementId:"G-KZHGGD9JVP"};let uc=null,Qs=null,br=null,E_=null,Ul=null;!lf.apiKey||lf.apiKey.includes("xxxxxxxxxx")?Ul="Firebase API Key is not configured correctly. Please set VITE_FIREBASE_API_KEY in your environment.":lf.projectId||(Ul="Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your environment.");if(!Ul)try{zn.apps.length?uc=zn.app():uc=zn.initializeApp(lf),Qs=zn.auth(uc),br=zn.firestore(uc),E_=zn.functions(uc)}catch(r){console.error("Firebase initialization error:",r),Ul=`Firebase initialization failed: ${r.message}. Please check your Firebase project configuration.`}const EA=Qs?new zn.auth.GoogleAuthProvider:null,AL=async()=>{if(!Qs||!EA)throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");try{await Qs.signInWithPopup(EA)}catch(r){console.error("Google Sign-In Error:",r),r.code==="auth/popup-blocked"?alert("Popup was blocked by your browser. Please allow popups for this site and try again."):r.code==="auth/popup-closed-by-user"?console.log("Sign-in popup was closed by the user."):alert(`An error occurred during sign-in: ${r.message}`)}},bL=async()=>{if(!Qs)throw new Error("Firebase Auth is not initialized.");await Qs.signOut()};function SL(r,e,t,i){function a(l){return l instanceof t?l:new t(function(c){c(l)})}return new(t||(t=Promise))(function(l,c){function f(v){try{g(i.next(v))}catch(T){c(T)}}function p(v){try{g(i.throw(v))}catch(T){c(T)}}function g(v){v.done?l(v.value):a(v.value).then(f,p)}g((i=i.apply(r,[])).next())})}function RL(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Mg,TA;function CL(){return TA||(TA=1,Mg=function r(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var i,a,l;if(Array.isArray(e)){if(i=e.length,i!=t.length)return!1;for(a=i;a--!==0;)if(!r(e[a],t[a]))return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(l=Object.keys(e),i=l.length,i!==Object.keys(t).length)return!1;for(a=i;a--!==0;)if(!Object.prototype.hasOwnProperty.call(t,l[a]))return!1;for(a=i;a--!==0;){var c=l[a];if(!r(e[c],t[c]))return!1}return!0}return e!==e&&t!==t}),Mg}var DL=CL(),NL=RL(DL);const wA="__googleMapsScriptId";var fl;(function(r){r[r.INITIALIZED=0]="INITIALIZED",r[r.LOADING=1]="LOADING",r[r.SUCCESS=2]="SUCCESS",r[r.FAILURE=3]="FAILURE"})(fl||(fl={}));class Ua{constructor({apiKey:e,authReferrerPolicy:t,channel:i,client:a,id:l=wA,language:c,libraries:f=[],mapIds:p,nonce:g,region:v,retries:T=3,url:A="https://maps.googleapis.com/maps/api/js",version:P}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=t,this.channel=i,this.client=a,this.id=l||wA,this.language=c,this.libraries=f,this.mapIds=p,this.nonce=g,this.region=v,this.retries=T,this.url=A,this.version=P,Ua.instance){if(!NL(this.options,Ua.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(Ua.instance.options)}`);return Ua.instance}Ua.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?fl.FAILURE:this.done?fl.SUCCESS:this.loading?fl.LOADING:fl.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,t)=>{this.loadCallback(i=>{i?t(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,t;if(document.getElementById(this.id)){this.callback();return}const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(l=>!i[l]&&delete i[l]),!((t=(e=window?.google)===null||e===void 0?void 0:e.maps)===null||t===void 0)&&t.importLibrary||(l=>{let c,f,p,g="The Google Maps JavaScript API",v="google",T="importLibrary",A="__ib__",P=document,G=window;G=G[v]||(G[v]={});const Q=G.maps||(G.maps={}),$=new Set,le=new URLSearchParams,he=()=>c||(c=new Promise((re,ve)=>SL(this,void 0,void 0,function*(){var de;yield f=P.createElement("script"),f.id=this.id,le.set("libraries",[...$]+"");for(p in l)le.set(p.replace(/[A-Z]/g,ue=>"_"+ue[0].toLowerCase()),l[p]);le.set("callback",v+".maps."+A),f.src=this.url+"?"+le,Q[A]=re,f.onerror=()=>c=ve(Error(g+" could not load.")),f.nonce=this.nonce||((de=P.querySelector("script[nonce]"))===null||de===void 0?void 0:de.nonce)||"",P.head.append(f)})));Q[T]?console.warn(g+" only loads once. Ignoring:",l):Q[T]=(re,...ve)=>$.add(re)&&he().then(()=>Q[T](re,...ve))})(i);const a=this.libraries.map(l=>this.importLibrary(l));a.length||a.push(this.importLibrary("core")),Promise.all(a).then(()=>this.callback(),l=>{const c=new ErrorEvent("error",{error:l});this.loadErrorCallback(c)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const t=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${t} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},t)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}const OL="AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",PL=()=>k.jsx("div",{className:"map-loader",children:k.jsx("div",{className:"loading-spinner"})}),VL=({message:r})=>k.jsx("div",{className:"map-error-overlay",children:k.jsx("p",{children:r})}),IA=({onStartAudit:r})=>{const[e,t]=Ie.useState(!1),[i,a]=Ie.useState(null),[l,c]=Ie.useState(!0),[f,p]=Ie.useState([]),[g,v]=Ie.useState(!1),T=Ie.useRef(null),A=Ie.useRef(null),P=Ie.useRef(null),G=Ie.useRef(null),Q=Ie.useRef(null),$=Ie.useRef([]),le="smartlocal-map-search-history",he=10;Ie.useEffect(()=>{try{const b=localStorage.getItem(le);b&&p(JSON.parse(b))}catch(b){console.error("Failed to parse search history from localStorage",b)}},[]),Ie.useEffect(()=>{if(e)return;new Ua({apiKey:OL,version:"weekly",libraries:["places","marker"]}).load().then(S=>{t(!0),ve(S)}).catch(S=>{console.error("Failed to load Google Maps script:",S),a("Failed to load Google Maps. Please check that the API key is correct and has the 'Maps JavaScript API' and 'Places API' enabled.")}).finally(()=>{c(!1)})},[e]);const re=b=>{if(!b||!b.trim())return;const S=b.trim(),N=[S,...f.filter(V=>V.toLowerCase()!==S.toLowerCase())].slice(0,he);p(N);try{localStorage.setItem(le,JSON.stringify(N))}catch(V){console.error("Failed to save search history to localStorage",V)}},ve=b=>{if(!T.current||!A.current)return;P.current=new b.maps.Map(T.current,{center:{lat:34.0522,lng:-118.2437},zoom:12,mapId:"SMART_LOCAL_AI_MAP"}),G.current=new b.maps.places.PlacesService(P.current),Q.current=new b.maps.InfoWindow;const S=new b.maps.places.Autocomplete(A.current,{fields:["geometry","name"]});S.addListener("place_changed",()=>{const N=S.getPlace(),V=A.current?.value||N.name||"";N.geometry&&N.geometry.location&&(P.current?.setCenter(N.geometry.location),P.current?.setZoom(14)),de({query:V})}),Q.current.addListener("domready",()=>{const N=document.querySelector(".map-infowindow-content");!N||N.classList.contains("click-handler-attached")||(N.classList.add("click-handler-attached"),N.addEventListener("click",V=>{const C=V.target.closest(".btn-start-audit");if(C){const ct=C.getAttribute("data-name"),yt=C.getAttribute("data-website");ct&&(r({name:decodeURIComponent(ct),website:yt?decodeURIComponent(yt):void 0}),Q.current?.close());return}}))})},de=b=>{!G.current||!b.query.trim()||(re(b.query),v(!1),A.current&&A.current.blur(),b.location||(b.location=P.current.getCenter()),c(!0),G.current.textSearch(b,(S,N)=>{c(!1),N===google.maps.places.PlacesServiceStatus.OK&&S?R(S):console.warn("Places search failed with status:",N)}))},ue=b=>{A.current&&(A.current.value=b,de({query:b}))},R=b=>{$.current.forEach(N=>N.setMap(null)),$.current=[];const S=new google.maps.LatLngBounds;b.forEach(N=>{if(!N.geometry||!N.geometry.location||!N.name)return;const V=new google.maps.Marker({map:P.current,position:N.geometry.location,title:N.name,animation:google.maps.Animation.DROP,icon:"https://maps.google.com/mapfiles/ms/icons/green-dot.png"});V.addListener("click",()=>{if(!Q.current)return;const L=N.website??"",C=encodeURIComponent(N.name),ct=encodeURIComponent(L),yt=`
                    <div class="map-infowindow-content">
                        <h4>${N.name}</h4>
                        <p>${N.formatted_address||""}</p>
                        <div class="map-infowindow-buttons" style="margin-top: 1rem;">
                            <button class="btn btn-primary btn-start-audit" data-name="${C}" data-website="${ct}">Start an audit</button>
                        </div>
                    </div>
                `;Q.current.setContent(yt),Q.current.open(P.current,V)}),$.current.push(V),S.extend(N.geometry.location)}),P.current&&$.current.length>0&&P.current.fitBounds(S)};return k.jsxs("div",{className:"map-view-wrapper",children:[i&&k.jsx(VL,{message:i}),l&&k.jsx(PL,{}),k.jsxs("div",{className:"map-search-container",children:[k.jsx("input",{ref:A,type:"text",className:"map-search-input",placeholder:"Search for a business or location",disabled:!e,onFocus:()=>v(!0),onBlur:()=>{setTimeout(()=>v(!1),200)},onKeyDown:b=>{b.key==="Enter"&&A.current&&de({query:A.current.value})},autoComplete:"off"}),g&&f.length>0&&k.jsx("div",{className:"search-history-dropdown",children:f.map((b,S)=>k.jsx("div",{className:"search-history-item",onMouseDown:()=>ue(b),children:b},`${b}-${S}`))})]}),k.jsx("div",{ref:T,className:"map-container"})]})},Jy="https://storage.googleapis.com/imageonline/ChatGPT%20Image%20Aug%2010%2C%202025%2C%2010_03_53%20AM.png";let qa=null;E_&&(qa=E_.httpsCallable("geminiProxy"));const xL=()=>k.jsxs("div",{className:"loading-screen","aria-label":"Loading application",children:[k.jsx("img",{src:Jy,alt:"SMARTLOCAL.AI Logo",className:"header-logo"}),k.jsx("div",{className:"loading-spinner"})]}),ML=()=>k.jsx("div",{className:"login-view",children:k.jsxs("div",{className:"login-box",children:[k.jsx("img",{src:Jy,alt:"SMARTLOCAL.AI Logo",className:"header-logo"}),k.jsx("h1",{children:"AI-Powered Local Business Growth"}),k.jsx("p",{children:"Sign in to access your dashboard and start optimizing your local presence."}),k.jsxs("button",{className:"btn btn-google",onClick:AL,children:[k.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:k.jsxs("g",{fill:"none",fillRule:"evenodd",children:[k.jsx("path",{d:"M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7772 2.7218v2.2582h2.9082c1.7018-1.5668 2.6836-3.8741 2.6836-6.621v.0001z",fill:"#4285F4"}),k.jsx("path",{d:"M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.2582c-.8059.54-1.8368.8618-3.0482.8618-2.344 0-4.3282-1.5818-5.0359-3.7118H.9573v2.3318C2.4382 16.1423 5.4818 18 9 18z",fill:"#34A853"}),k.jsx("path",{d:"M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.964 10.71z",fill:"#FBBC05"}),k.jsx("path",{d:"M9 3.4773c1.3236 0 2.52.4573 3.4418 1.346l2.5818-2.5818C13.4636.8918 11.43 0 9 0 5.4818 0 2.4382 1.8577.9573 4.9582L3.964 7.29C4.6718 5.159 6.656 3.4773 9 3.4773z",fill:"#EA4335"})]})}),"Sign In with Google"]})]})}),kL=({user:r,currentView:e,setView:t,onSignOut:i})=>{const a=[{id:"MAP",label:"Map View"},{id:"SERVICES",label:"Service Packages"},{id:"CLIENT_SETUP",label:"Client Setup"},{id:"PROFILES",label:"Profiles"},{id:"TOOLS",label:"AI Tools"}];return k.jsxs("header",{className:"app-header",children:[k.jsx("div",{className:"header-branding",children:k.jsx("img",{src:Jy,alt:"SMARTLOCAL.AI Logo",className:"header-logo"})}),k.jsx("nav",{className:"app-nav",children:a.map(l=>{const c=e===l.id||e==="PROFILE_DETAIL"&&l.id==="PROFILES";return k.jsx("button",{className:`nav-button ${c?"active":""}`,onClick:()=>t(l.id),"aria-current":c?"page":void 0,children:l.label},l.id)})}),k.jsxs("div",{className:"header-user-info",children:[k.jsx("img",{src:r.photoURL??void 0,alt:r.displayName??"User"}),k.jsx("span",{className:"user-name",children:r.displayName}),k.jsx("button",{className:"btn-sign-out",onClick:i,children:"Sign Out"})]})]})},LL=()=>{const[r,e]=Ie.useState(!navigator.onLine);return Ie.useEffect(()=>{const t=()=>e(!1),i=()=>e(!0);return window.addEventListener("online",t),window.addEventListener("offline",i),()=>{window.removeEventListener("online",t),window.removeEventListener("offline",i)}},[]),r?k.jsx("div",{className:"offline-banner",role:"status",children:"You are currently offline. Some features may be unavailable."}):null},UL=({onCreateProfile:r})=>{const[e,t]=Ie.useState(""),[i,a]=Ie.useState(""),[l,c]=Ie.useState(""),[f,p]=Ie.useState(!1),g=async()=>{if(!e.trim()){alert("Business Name is required.");return}p(!0);try{await r({name:e,website:i,notes:l}),t(""),a(""),c("")}catch(v){console.error("Failed to save profile:",v),alert("Failed to save profile. Please try again.")}finally{p(!1)}};return k.jsxs("div",{className:"view-container client-setup-view",children:[k.jsxs("div",{className:"client-setup-header",children:[k.jsx("h2",{children:"Client Onboarding"}),k.jsx("p",{children:"Enter your new client's information. This will create a profile to track audits and AI-generated content."})]}),k.jsx("div",{className:"client-setup-layout",children:k.jsxs("div",{className:"notepad-container",style:{gap:"1rem",textAlign:"left"},children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"client-name",children:"Business Name"}),k.jsx("input",{id:"client-name",type:"text",value:e,onChange:v=>t(v.target.value),placeholder:"e.g., Joe's Pizza Downtown"})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"client-website",children:"Website URL"}),k.jsx("input",{id:"client-website",type:"url",value:i,onChange:v=>a(v.target.value),placeholder:"https://www.joespizzadt.com"})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"client-notes",children:"Onboarding Notes"}),k.jsx("textarea",{id:"client-notes",className:"notepad-textarea",rows:10,value:l,onChange:v=>c(v.target.value),placeholder:"e.g., target audience, primary goals for local SEO, main competitors, etc."})]}),k.jsx("div",{className:"notepad-actions",children:k.jsx("button",{className:"btn btn-primary",onClick:g,disabled:f||!e.trim(),children:f?"Saving...":"Create Profile"})})]})})]})},zL=({business:r,onSaveAudit:e})=>{const[t,i]=Ie.useState(r?.name||""),[a,l]=Ie.useState(r?.website||""),[c,f]=Ie.useState(""),[p,g]=Ie.useState(!1),[v,T]=Ie.useState(null),[A,P]=Ie.useState(!1),[G,Q]=Ie.useState(!1);Ie.useEffect(()=>{i(r?.name||""),l(r?.website||""),f(""),T(null),Q(!1),P(!1)},[r]);const $=async()=>{if(!t.trim()){alert("Business Name is required to run an audit.");return}if(!qa){T("AI functionality is not available. Please check your configuration.");return}g(!0),T(null),f("");const he=`Please perform a comprehensive local SEO and online presence audit for the following business. Provide a summary, key findings, and actionable recommendations.

Business Name: ${t}
Website: ${a||"Not provided"}

The audit should cover:
1.  **Google Business Profile:** Potential optimizations, completeness, photo quality, reviews, Q&A.
2.  **On-Page SEO:** Website mobile-friendliness, page speed insights (conceptual), local keyword targeting, NAP consistency.
3.  **Local Citations & Listings:** Importance of consistent NAP across major directories.
4.  **Online Reviews:** Reputation analysis, strategy for getting more reviews.
5.  **Social Media Presence:** Brief check of relevant social media channels for activity and engagement.
6.  **Competitor Analysis:** Based on the business name and website, identify 2-3 likely local competitors. Briefly analyze their online strengths and suggest ways for our client to differentiate themselves.

Format the output as clean, well-structured markdown. Use headings, bold text, and bullet points to make it easy to read.`;try{const re=await qa({action:"generateContent",params:{model:"gemini-2.5-flash",contents:he}});f(re.data.text)}catch(re){console.error("Audit generation failed:",re),T(`Failed to generate audit: ${re.message||"An unknown error occurred."}`)}finally{g(!1)}},le=async()=>{if(!(!c||!r?.id)){P(!0),Q(!1),T(null);try{await e(c,r.id),Q(!0)}catch(he){console.error("Failed to save audit report:",he),T("Failed to save the report. Please try again.")}finally{P(!1)}}};return k.jsxs("div",{className:"view-container",children:[k.jsx("h2",{children:"Run a Local Presence Audit"}),k.jsxs("div",{className:"audit-controls",children:[k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"business-name",children:"Business Name"}),k.jsx("input",{type:"text",id:"business-name",placeholder:"e.g., Joe's Pizza Downtown",value:t,onChange:he=>i(he.target.value)})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"business-website",children:"Website URL"}),k.jsx("input",{type:"url",id:"business-website",placeholder:"https://www.joespizzadt.com",value:a,onChange:he=>l(he.target.value)})]}),k.jsx("button",{className:"btn btn-primary",onClick:$,disabled:p||!t,children:p?"Generating Report...":"Start AI Audit"})]}),k.jsxs("div",{className:`result-container ${c?"has-content":""} ${v?"error":""}`,children:[p&&k.jsx("div",{className:"loading-spinner small"}),v&&k.jsx("p",{children:v}),c?k.jsx("p",{children:c}):!p&&k.jsx("div",{className:"audit-placeholder",children:k.jsx("p",{children:"Your audit report will appear here once generated."})})]}),c&&k.jsx("div",{className:"audit-actions",children:r?.id?k.jsx("button",{className:"btn btn-primary",onClick:le,disabled:A||G,children:A?"Saving...":G?"✓ Report Saved":"Save Report to Profile"}):k.jsx("div",{className:"audit-actions-note",children:k.jsx("p",{children:"To save this report, first create a client profile from the 'Client Setup' tab and run the audit from the 'Profiles' view."})})})]})},AA=({profiles:r,onSelectProfile:e,loading:t})=>t?k.jsxs("div",{className:"view-container profiles-view-container",children:[k.jsx("h2",{children:"Client Profiles"}),k.jsx("div",{className:"loading-spinner"})]}):r.length===0?k.jsxs("div",{className:"view-container profiles-view-container",children:[k.jsx("h2",{children:"Client Profiles"}),k.jsxs("div",{className:"no-profiles-message",children:[k.jsx("p",{children:"You haven't created any client profiles yet."}),k.jsx("p",{children:"Go to the 'Client Setup' tab to add your first client."})]})]}):k.jsxs("div",{className:"view-container profiles-view-container",children:[k.jsx("h2",{children:"Client Profiles"}),k.jsx("div",{className:"profiles-grid",children:r.map(i=>k.jsxs("div",{className:"profile-card",tabIndex:0,onClick:()=>e(i),onKeyDown:a=>a.key==="Enter"&&e(i),children:[k.jsx("h3",{children:i.name}),i.website&&k.jsx("a",{href:i.website,target:"_blank",rel:"noopener noreferrer",onClick:a=>a.stopPropagation(),children:i.website}),k.jsx("div",{className:"profile-footer",children:k.jsxs("span",{className:"date-info",children:["Created: ",new Date(i.createdAt?.toDate()).toLocaleDateString()]})})]},i.id))})]}),BL=({profile:r,onBack:e,onRunAudit:t})=>{const[i,a]=Ie.useState([]),[l,c]=Ie.useState(!0),[f,p]=Ie.useState(null);Ie.useEffect(()=>{(async()=>{if(br){c(!0);try{const P=(await br.collection("audits").where("client_id","==",r.id).orderBy("date_completed","desc").get()).docs.map(G=>({id:G.id,...G.data()}));a(P)}catch(T){console.error("Error fetching audits: ",T)}finally{c(!1)}}})()},[r.id]);const g=v=>{p(f===v?null:v)};return k.jsxs("div",{className:"view-container profile-detail-view",children:[k.jsxs("div",{className:"profile-detail-header",children:[k.jsx("button",{className:"btn-back",onClick:e,children:"← Back to Profiles"}),k.jsx("div",{className:"profile-detail-actions",children:k.jsx("button",{className:"btn btn-primary",onClick:()=>t(r),children:"Run New Audit"})})]}),k.jsxs("div",{className:"profile-detail-info",children:[k.jsx("h2",{children:r.name}),r.website&&k.jsx("a",{href:r.website,target:"_blank",rel:"noopener noreferrer",children:r.website}),r.notes&&k.jsx("p",{className:"profile-notes",children:r.notes})]}),k.jsxs("div",{className:"profile-audits-section",children:[k.jsx("h3",{children:"Audit History"}),l?k.jsx("div",{className:"loading-spinner"}):i.length===0?k.jsx("p",{children:"No audits found for this client yet."}):k.jsx("div",{className:"audits-list",children:i.map(v=>k.jsxs("div",{className:"audit-item-card",children:[k.jsxs("div",{className:"audit-item-header",onClick:()=>g(v.id),tabIndex:0,onKeyDown:T=>T.key==="Enter"&&g(v.id),role:"button","aria-expanded":f===v.id,children:[k.jsxs("span",{children:["Audit from ",new Date(v.date_completed.toDate()).toLocaleString()]}),k.jsx("span",{children:f===v.id?"Hide Report ▲":"View Report ▼"})]}),f===v.id&&k.jsx("div",{className:"audit-item-body",children:k.jsx("pre",{children:v.ai_report})})]},v.id))})]})]})},FL=()=>{const[r,e]=Ie.useState(""),[t,i]=Ie.useState("Friendly"),[a,l]=Ie.useState(""),[c,f]=Ie.useState(!1),[p,g]=Ie.useState(null),[v,T]=Ie.useState(""),[A,P]=Ie.useState(""),[G,Q]=Ie.useState(""),[$,le]=Ie.useState(!1),[he,re]=Ie.useState(null),ve=async()=>{if(!r.trim())return;if(!qa){g("AI is unavailable");return}f(!0),g(null),l("");const ue=`Generate a short, engaging Google Business Profile post about "${r}". The tone of voice should be ${t}. Include relevant hashtags.`;try{const R=await qa({action:"generateContent",params:{model:"gemini-2.5-flash",contents:ue}});l(R.data.text)}catch(R){console.error("Post generation failed:",R),g(R.message||"Failed to generate post.")}finally{f(!1)}},de=async()=>{if(!v.trim()||!A.trim())return;if(!qa){re("AI is unavailable");return}le(!0),re(null),Q("");const ue=`Generate a list of local SEO keyword ideas for a business that offers "${v}" in "${A}". Include a mix of short-tail, long-tail, and question-based keywords.`;try{const R=await qa({action:"generateContent",params:{model:"gemini-2.5-flash",contents:ue}});Q(R.data.text)}catch(R){console.error("Keyword idea generation failed:",R),re(R.message||"Failed to get ideas.")}finally{le(!1)}};return k.jsxs("div",{className:"view-container",children:[k.jsx("h2",{children:"AI Content Tools"}),k.jsxs("div",{className:"tools-grid",children:[k.jsxs("div",{className:"tool-card",children:[k.jsx("h3",{children:"Google Business Profile Post"}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"post-topic",children:"Topic"}),k.jsx("input",{type:"text",id:"post-topic",placeholder:"e.g., New weekly special, upcoming event",value:r,onChange:ue=>e(ue.target.value)})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"post-tone",children:"Tone of Voice"}),k.jsxs("select",{id:"post-tone",value:t,onChange:ue=>i(ue.target.value),children:[k.jsx("option",{children:"Friendly"}),k.jsx("option",{children:"Professional"}),k.jsx("option",{children:"Excited"}),k.jsx("option",{children:"Informative"})]})]}),k.jsx("button",{className:"btn btn-primary",onClick:ve,disabled:c||!r.trim(),children:c?"Generating...":"Generate Post"}),k.jsxs("div",{className:`result-container ${a?"has-content":""} ${p?"error":""}`,children:[c&&k.jsx("div",{className:"loading-spinner small"}),p&&k.jsx("p",{children:p}),a&&k.jsx("p",{children:a})]})]}),k.jsxs("div",{className:"tool-card",children:[k.jsx("h3",{children:"Local SEO Keyword Ideas"}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"keyword-service",children:"Service/Product"}),k.jsx("input",{type:"text",id:"keyword-service",placeholder:"e.g., residential plumbing, artisan coffee",value:v,onChange:ue=>T(ue.target.value)})]}),k.jsxs("div",{className:"form-group",children:[k.jsx("label",{htmlFor:"keyword-location",children:"Location"}),k.jsx("input",{type:"text",id:"keyword-location",placeholder:"e.g., San Francisco",value:A,onChange:ue=>P(ue.target.value)})]}),k.jsx("button",{className:"btn btn-primary",onClick:de,disabled:$||!v.trim()||!A.trim(),children:$?"Generating...":"Get Ideas"}),k.jsxs("div",{className:`result-container ${G?"has-content":""} ${he?"error":""}`,children:[$&&k.jsx("div",{className:"loading-spinner small"}),he&&k.jsx("p",{children:he}),G&&k.jsx("p",{children:G})]})]})]})]})},qL=()=>{const[r,e]=Ie.useState(null),t=a=>{e(r===a?null:a)},i=[{id:"starter",name:"Local SEO Starter",price:"$99",description:"Essential local SEO to get your business on the map and ranking.",features:["Google Business Profile Optimization","Local Keyword Research (10 keywords)","On-Page SEO for 5 Pages","Monthly Performance Report","Basic Citation Building (20 listings)"]},{id:"growth",name:"Business Growth Pro",price:"$299",description:"A comprehensive package for businesses ready to dominate local search.",features:["All features from Starter Plan","Advanced Schema Markup","Content Creation (2 Articles/mo)","Local Link Building Campaign","Quarterly Strategy Review"]},{id:"ultimate",name:"Ultimate Presence",price:"$699+",description:"The ultimate solution for market leaders who want maximum visibility.",features:["All features from Growth Pro Plan","Reputation Management & Review Generation","Social Media Signal Integration","Hyperlocal Content Strategy","Dedicated Account Manager"]}];return k.jsxs("div",{className:"view-container",children:[k.jsx("h2",{children:"Our Service Packages"}),k.jsx("p",{style:{textAlign:"center",maxWidth:"600px",margin:"0 auto 2rem"},children:"Choose a package that fits your goals. Click on any package to see the full list of features."}),k.jsx("div",{className:"services-grid",children:i.map(a=>k.jsxs("div",{className:"service-card",onClick:()=>t(a.id),tabIndex:0,role:"button","aria-expanded":r===a.id,children:[k.jsxs("div",{className:"service-header",children:[k.jsx("h3",{children:a.name}),k.jsx("p",{className:"service-price",children:a.price}),k.jsx("p",{children:a.description})]}),k.jsx("div",{className:`service-details ${r===a.id?"expanded":""}`,children:k.jsx("ul",{children:a.features.map((l,c)=>k.jsx("li",{children:l},c))})})]},a.id))})]})},jL=()=>{const[r,e]=Ie.useState(null),[t,i]=Ie.useState(!0),[a,l]=Ie.useState("MAP"),[c,f]=Ie.useState(),[p,g]=Ie.useState([]),[v,T]=Ie.useState(!0),[A,P]=Ie.useState(null),G=Ie.useCallback(async de=>{if(!de||!br){g([]),T(!1);return}T(!0);try{const b=(await br.collection("clients").where("consultant_uid","==",de.uid).orderBy("createdAt","desc").get()).docs.map(S=>({id:S.id,...S.data()}));g(b)}catch(ue){console.error("Error fetching profiles: ",ue)}finally{T(!1)}},[]);Ie.useEffect(()=>{if(!Qs){i(!1);return}const de=Qs.onAuthStateChanged(ue=>{e(ue),G(ue),i(!1)});return()=>de()},[G]),Ie.useEffect(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(de=>{console.log("Service Worker registered: ",de)}).catch(de=>{console.log("Service Worker registration failed: ",de)})})},[]);const Q=de=>{f(de),l("AUDIT")},$=de=>{de!=="AUDIT"&&f(void 0),de!=="PROFILE_DETAIL"&&P(null),l(de)},le=async de=>{if(!r||!br)throw new Error("User not signed in or DB not available");await br.collection("clients").add({...de,consultant_uid:r.uid,createdAt:new Date}),await G(r),l("PROFILES")},he=de=>{P(de),l("PROFILE_DETAIL")},re=async(de,ue)=>{if(!r||!br)throw new Error("User not signed in or DB not available");await br.collection("audits").add({client_id:ue,consultant_uid:r.uid,status:"complete",ai_report:de,date_completed:new Date})};if(Ul)return k.jsxs("div",{style:{padding:"2rem",color:"#dc3545",textAlign:"center"},children:[k.jsx("h2",{children:"Configuration Error"}),k.jsx("p",{children:Ul})]});if(t)return k.jsx(xL,{});if(!r)return k.jsx(ML,{});const ve=()=>{switch(a){case"MAP":return k.jsx(IA,{onStartAudit:Q});case"SERVICES":return k.jsx(qL,{});case"CLIENT_SETUP":return k.jsx(UL,{onCreateProfile:le});case"AUDIT":return k.jsx(zL,{business:c,onSaveAudit:re});case"PROFILES":return k.jsx(AA,{profiles:p,onSelectProfile:he,loading:v});case"PROFILE_DETAIL":return A?k.jsx(BL,{profile:A,onBack:()=>l("PROFILES"),onRunAudit:de=>{f(de),l("AUDIT")}}):k.jsx(AA,{profiles:p,onSelectProfile:he,loading:v});case"TOOLS":return k.jsx(FL,{});default:return k.jsx(IA,{onStartAudit:Q})}};return k.jsxs(k.Fragment,{children:[k.jsx(LL,{}),k.jsx(kL,{user:r,currentView:a,setView:$,onSignOut:bL}),k.jsx("main",{className:"app-container",children:ve()})]})},bA=document.getElementById("root");bA?iD.createRoot(bA).render(k.jsx(jL,{})):console.error("Failed to find the root element.");
