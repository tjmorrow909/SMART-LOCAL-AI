(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var VI={exports:{}},bd={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l1=Symbol.for("react.transitional.element"),u1=Symbol.for("react.fragment");function xI(t,e,n){var i=null;if(n!==void 0&&(i=""+n),e.key!==void 0&&(i=""+e.key),"key"in e){n={};for(var r in e)r!=="key"&&(n[r]=e[r])}else n=e;return e=n.ref,{$$typeof:l1,type:t,key:i,ref:e!==void 0?e:null,props:n}}bd.Fragment=u1;bd.jsx=xI;bd.jsxs=xI;VI.exports=bd;var C=VI.exports,MI={exports:{}},ne={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dg=Symbol.for("react.transitional.element"),c1=Symbol.for("react.portal"),h1=Symbol.for("react.fragment"),d1=Symbol.for("react.strict_mode"),f1=Symbol.for("react.profiler"),m1=Symbol.for("react.consumer"),p1=Symbol.for("react.context"),g1=Symbol.for("react.forward_ref"),_1=Symbol.for("react.suspense"),y1=Symbol.for("react.memo"),kI=Symbol.for("react.lazy"),v1=Symbol.for("react.activity"),aE=Symbol.iterator;function E1(t){return t===null||typeof t!="object"?null:(t=aE&&t[aE]||t["@@iterator"],typeof t=="function"?t:null)}var LI={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},UI=Object.assign,zI={};function wo(t,e,n){this.props=t,this.context=e,this.refs=zI,this.updater=n||LI}wo.prototype.isReactComponent={};wo.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};wo.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function BI(){}BI.prototype=wo.prototype;function Ng(t,e,n){this.props=t,this.context=e,this.refs=zI,this.updater=n||LI}var Og=Ng.prototype=new BI;Og.constructor=Ng;UI(Og,wo.prototype);Og.isPureReactComponent=!0;var oE=Array.isArray;function Qm(){}var Pe={H:null,A:null,T:null,S:null},FI=Object.prototype.hasOwnProperty;function Pg(t,e,n){var i=n.ref;return{$$typeof:Dg,type:t,key:e,ref:i!==void 0?i:null,props:n}}function T1(t,e){return Pg(t.type,e,t.props)}function Vg(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dg}function w1(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lE=/\/+/g;function $f(t,e){return typeof t=="object"&&t!==null&&t.key!=null?w1(""+t.key):e.toString(36)}function I1(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(Qm,Qm):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function ca(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"bigint":case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case Dg:case c1:a=!0;break;case kI:return a=t._init,ca(a(t._payload),e,n,i,r)}}if(a)return r=r(t),a=i===""?"."+$f(t,0):i,oE(r)?(n="",a!=null&&(n=a.replace(lE,"$&/")+"/"),ca(r,e,n,"",function(c){return c})):r!=null&&(Vg(r)&&(r=T1(r,n+(r.key==null||t&&t.key===r.key?"":(""+r.key).replace(lE,"$&/")+"/")+a)),e.push(r)),1;a=0;var o=i===""?".":i+":";if(oE(t))for(var u=0;u<t.length;u++)i=t[u],s=o+$f(i,u),a+=ca(i,e,n,s,r);else if(u=E1(t),typeof u=="function")for(t=u.call(t),u=0;!(i=t.next()).done;)i=i.value,s=o+$f(i,u++),a+=ca(i,e,n,s,r);else if(s==="object"){if(typeof t.then=="function")return ca(I1(t),e,n,i,r);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return a}function Oc(t,e,n){if(t==null)return t;var i=[],r=0;return ca(t,i,"","",function(s){return e.call(n,s,r++)}),i}function A1(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var uE=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},b1={map:Oc,forEach:function(t,e,n){Oc(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Oc(t,function(){e++}),e},toArray:function(t){return Oc(t,function(e){return e})||[]},only:function(t){if(!Vg(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ne.Activity=v1;ne.Children=b1;ne.Component=wo;ne.Fragment=h1;ne.Profiler=f1;ne.PureComponent=Ng;ne.StrictMode=d1;ne.Suspense=_1;ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Pe;ne.__COMPILER_RUNTIME={__proto__:null,c:function(t){return Pe.H.useMemoCache(t)}};ne.cache=function(t){return function(){return t.apply(null,arguments)}};ne.cacheSignal=function(){return null};ne.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var i=UI({},t.props),r=t.key;if(e!=null)for(s in e.key!==void 0&&(r=""+e.key),e)!FI.call(e,s)||s==="key"||s==="__self"||s==="__source"||s==="ref"&&e.ref===void 0||(i[s]=e[s]);var s=arguments.length-2;if(s===1)i.children=n;else if(1<s){for(var a=Array(s),o=0;o<s;o++)a[o]=arguments[o+2];i.children=a}return Pg(t.type,r,i)};ne.createContext=function(t){return t={$$typeof:p1,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:m1,_context:t},t};ne.createElement=function(t,e,n){var i,r={},s=null;if(e!=null)for(i in e.key!==void 0&&(s=""+e.key),e)FI.call(e,i)&&i!=="key"&&i!=="__self"&&i!=="__source"&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),u=0;u<a;u++)o[u]=arguments[u+2];r.children=o}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return Pg(t,s,r)};ne.createRef=function(){return{current:null}};ne.forwardRef=function(t){return{$$typeof:g1,render:t}};ne.isValidElement=Vg;ne.lazy=function(t){return{$$typeof:kI,_payload:{_status:-1,_result:t},_init:A1}};ne.memo=function(t,e){return{$$typeof:y1,type:t,compare:e===void 0?null:e}};ne.startTransition=function(t){var e=Pe.T,n={};Pe.T=n;try{var i=t(),r=Pe.S;r!==null&&r(n,i),typeof i=="object"&&i!==null&&typeof i.then=="function"&&i.then(Qm,uE)}catch(s){uE(s)}finally{e!==null&&n.types!==null&&(e.types=n.types),Pe.T=e}};ne.unstable_useCacheRefresh=function(){return Pe.H.useCacheRefresh()};ne.use=function(t){return Pe.H.use(t)};ne.useActionState=function(t,e,n){return Pe.H.useActionState(t,e,n)};ne.useCallback=function(t,e){return Pe.H.useCallback(t,e)};ne.useContext=function(t){return Pe.H.useContext(t)};ne.useDebugValue=function(){};ne.useDeferredValue=function(t,e){return Pe.H.useDeferredValue(t,e)};ne.useEffect=function(t,e){return Pe.H.useEffect(t,e)};ne.useEffectEvent=function(t){return Pe.H.useEffectEvent(t)};ne.useId=function(){return Pe.H.useId()};ne.useImperativeHandle=function(t,e,n){return Pe.H.useImperativeHandle(t,e,n)};ne.useInsertionEffect=function(t,e){return Pe.H.useInsertionEffect(t,e)};ne.useLayoutEffect=function(t,e){return Pe.H.useLayoutEffect(t,e)};ne.useMemo=function(t,e){return Pe.H.useMemo(t,e)};ne.useOptimistic=function(t,e){return Pe.H.useOptimistic(t,e)};ne.useReducer=function(t,e,n){return Pe.H.useReducer(t,e,n)};ne.useRef=function(t){return Pe.H.useRef(t)};ne.useState=function(t){return Pe.H.useState(t)};ne.useSyncExternalStore=function(t,e,n){return Pe.H.useSyncExternalStore(t,e,n)};ne.useTransition=function(){return Pe.H.useTransition()};ne.version="19.2.0";MI.exports=ne;var W=MI.exports,jI={exports:{}},Sd={},qI={exports:{}},GI={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(K,ee){var Z=K.length;K.push(ee);e:for(;0<Z;){var Re=Z-1>>>1,Ye=K[Re];if(0<r(Ye,ee))K[Re]=ee,K[Z]=Ye,Z=Re;else break e}}function n(K){return K.length===0?null:K[0]}function i(K){if(K.length===0)return null;var ee=K[0],Z=K.pop();if(Z!==ee){K[0]=Z;e:for(var Re=0,Ye=K.length,Js=Ye>>>1;Re<Js;){var an=2*(Re+1)-1,et=K[an],oi=an+1,jn=K[oi];if(0>r(et,Z))oi<Ye&&0>r(jn,et)?(K[Re]=jn,K[oi]=Z,Re=oi):(K[Re]=et,K[an]=Z,Re=an);else if(oi<Ye&&0>r(jn,Z))K[Re]=jn,K[oi]=Z,Re=oi;else break e}}return ee}function r(K,ee){var Z=K.sortIndex-ee.sortIndex;return Z!==0?Z:K.id-ee.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var u=[],c=[],d=1,f=null,p=3,g=!1,R=!1,N=!1,x=!1,I=typeof setTimeout=="function"?setTimeout:null,E=typeof clearTimeout=="function"?clearTimeout:null,A=typeof setImmediate<"u"?setImmediate:null;function O(K){for(var ee=n(c);ee!==null;){if(ee.callback===null)i(c);else if(ee.startTime<=K)i(c),ee.sortIndex=ee.expirationTime,e(u,ee);else break;ee=n(c)}}function L(K){if(N=!1,O(K),!R)if(n(u)!==null)R=!0,F||(F=!0,D());else{var ee=n(c);ee!==null&&Ht(L,ee.startTime-K)}}var F=!1,T=-1,_=5,v=-1;function w(){return x?!0:!(t.unstable_now()-v<_)}function S(){if(x=!1,F){var K=t.unstable_now();v=K;var ee=!0;try{e:{R=!1,N&&(N=!1,E(T),T=-1),g=!0;var Z=p;try{t:{for(O(K),f=n(u);f!==null&&!(f.expirationTime>K&&w());){var Re=f.callback;if(typeof Re=="function"){f.callback=null,p=f.priorityLevel;var Ye=Re(f.expirationTime<=K);if(K=t.unstable_now(),typeof Ye=="function"){f.callback=Ye,O(K),ee=!0;break t}f===n(u)&&i(u),O(K)}else i(u);f=n(u)}if(f!==null)ee=!0;else{var Js=n(c);Js!==null&&Ht(L,Js.startTime-K),ee=!1}}break e}finally{f=null,p=Z,g=!1}ee=void 0}}finally{ee?D():F=!1}}}var D;if(typeof A=="function")D=function(){A(S)};else if(typeof MessageChannel<"u"){var b=new MessageChannel,ot=b.port2;b.port1.onmessage=S,D=function(){ot.postMessage(null)}}else D=function(){I(S,0)};function Ht(K,ee){T=I(function(){K(t.unstable_now())},ee)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(K){K.callback=null},t.unstable_forceFrameRate=function(K){0>K||125<K?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):_=0<K?Math.floor(1e3/K):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_next=function(K){switch(p){case 1:case 2:case 3:var ee=3;break;default:ee=p}var Z=p;p=ee;try{return K()}finally{p=Z}},t.unstable_requestPaint=function(){x=!0},t.unstable_runWithPriority=function(K,ee){switch(K){case 1:case 2:case 3:case 4:case 5:break;default:K=3}var Z=p;p=K;try{return ee()}finally{p=Z}},t.unstable_scheduleCallback=function(K,ee,Z){var Re=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?Re+Z:Re):Z=Re,K){case 1:var Ye=-1;break;case 2:Ye=250;break;case 5:Ye=1073741823;break;case 4:Ye=1e4;break;default:Ye=5e3}return Ye=Z+Ye,K={id:d++,callback:ee,priorityLevel:K,startTime:Z,expirationTime:Ye,sortIndex:-1},Z>Re?(K.sortIndex=Z,e(c,K),n(u)===null&&K===n(c)&&(N?(E(T),T=-1):N=!0,Ht(L,Z-Re))):(K.sortIndex=Ye,e(u,K),R||g||(R=!0,F||(F=!0,D()))),K},t.unstable_shouldYield=w,t.unstable_wrapCallback=function(K){var ee=p;return function(){var Z=p;p=ee;try{return K.apply(this,arguments)}finally{p=Z}}}})(GI);qI.exports=GI;var S1=qI.exports,HI={exports:{}},Gt={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R1=W;function KI(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function Ki(){}var Bt={d:{f:Ki,r:function(){throw Error(KI(522))},D:Ki,C:Ki,L:Ki,m:Ki,X:Ki,S:Ki,M:Ki},p:0,findDOMNode:null},C1=Symbol.for("react.portal");function D1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C1,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}var Ol=R1.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Rd(t,e){if(t==="font")return"";if(typeof e=="string")return e==="use-credentials"?e:""}Gt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Bt;Gt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)throw Error(KI(299));return D1(t,e,null,n)};Gt.flushSync=function(t){var e=Ol.T,n=Bt.p;try{if(Ol.T=null,Bt.p=2,t)return t()}finally{Ol.T=e,Bt.p=n,Bt.d.f()}};Gt.preconnect=function(t,e){typeof t=="string"&&(e?(e=e.crossOrigin,e=typeof e=="string"?e==="use-credentials"?e:"":void 0):e=null,Bt.d.C(t,e))};Gt.prefetchDNS=function(t){typeof t=="string"&&Bt.d.D(t)};Gt.preinit=function(t,e){if(typeof t=="string"&&e&&typeof e.as=="string"){var n=e.as,i=Rd(n,e.crossOrigin),r=typeof e.integrity=="string"?e.integrity:void 0,s=typeof e.fetchPriority=="string"?e.fetchPriority:void 0;n==="style"?Bt.d.S(t,typeof e.precedence=="string"?e.precedence:void 0,{crossOrigin:i,integrity:r,fetchPriority:s}):n==="script"&&Bt.d.X(t,{crossOrigin:i,integrity:r,fetchPriority:s,nonce:typeof e.nonce=="string"?e.nonce:void 0})}};Gt.preinitModule=function(t,e){if(typeof t=="string")if(typeof e=="object"&&e!==null){if(e.as==null||e.as==="script"){var n=Rd(e.as,e.crossOrigin);Bt.d.M(t,{crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0})}}else e==null&&Bt.d.M(t)};Gt.preload=function(t,e){if(typeof t=="string"&&typeof e=="object"&&e!==null&&typeof e.as=="string"){var n=e.as,i=Rd(n,e.crossOrigin);Bt.d.L(t,n,{crossOrigin:i,integrity:typeof e.integrity=="string"?e.integrity:void 0,nonce:typeof e.nonce=="string"?e.nonce:void 0,type:typeof e.type=="string"?e.type:void 0,fetchPriority:typeof e.fetchPriority=="string"?e.fetchPriority:void 0,referrerPolicy:typeof e.referrerPolicy=="string"?e.referrerPolicy:void 0,imageSrcSet:typeof e.imageSrcSet=="string"?e.imageSrcSet:void 0,imageSizes:typeof e.imageSizes=="string"?e.imageSizes:void 0,media:typeof e.media=="string"?e.media:void 0})}};Gt.preloadModule=function(t,e){if(typeof t=="string")if(e){var n=Rd(e.as,e.crossOrigin);Bt.d.m(t,{as:typeof e.as=="string"&&e.as!=="script"?e.as:void 0,crossOrigin:n,integrity:typeof e.integrity=="string"?e.integrity:void 0})}else Bt.d.m(t)};Gt.requestFormReset=function(t){Bt.d.r(t)};Gt.unstable_batchedUpdates=function(t,e){return t(e)};Gt.useFormState=function(t,e,n){return Ol.H.useFormState(t,e,n)};Gt.useFormStatus=function(){return Ol.H.useHostTransitionStatus()};Gt.version="19.2.0";function QI(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QI)}catch(t){console.error(t)}}QI(),HI.exports=Gt;var N1=HI.exports;/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ct=S1,$I=W,O1=N1;function U(t){var e="https://react.dev/errors/"+t;if(1<arguments.length){e+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function YI(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ku(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function XI(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function WI(t){if(t.tag===31){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function cE(t){if(ku(t)!==t)throw Error(U(188))}function P1(t){var e=t.alternate;if(!e){if(e=ku(t),e===null)throw Error(U(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return cE(r),t;if(s===i)return cE(r),e;s=s.sibling}throw Error(U(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(U(189))}}if(n.alternate!==i)throw Error(U(190))}if(n.tag!==3)throw Error(U(188));return n.stateNode.current===n?t:e}function JI(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t;for(t=t.child;t!==null;){if(e=JI(t),e!==null)return e;t=t.sibling}return null}var Ve=Object.assign,V1=Symbol.for("react.element"),Pc=Symbol.for("react.transitional.element"),vl=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),ZI=Symbol.for("react.strict_mode"),$m=Symbol.for("react.profiler"),eA=Symbol.for("react.consumer"),yi=Symbol.for("react.context"),xg=Symbol.for("react.forward_ref"),Ym=Symbol.for("react.suspense"),Xm=Symbol.for("react.suspense_list"),Mg=Symbol.for("react.memo"),Wi=Symbol.for("react.lazy"),Wm=Symbol.for("react.activity"),x1=Symbol.for("react.memo_cache_sentinel"),hE=Symbol.iterator;function il(t){return t===null||typeof t!="object"?null:(t=hE&&t[hE]||t["@@iterator"],typeof t=="function"?t:null)}var M1=Symbol.for("react.client.reference");function Jm(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===M1?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ya:return"Fragment";case $m:return"Profiler";case ZI:return"StrictMode";case Ym:return"Suspense";case Xm:return"SuspenseList";case Wm:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case vl:return"Portal";case yi:return t.displayName||"Context";case eA:return(t._context.displayName||"Context")+".Consumer";case xg:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Mg:return e=t.displayName||null,e!==null?e:Jm(t.type)||"Memo";case Wi:e=t._payload,t=t._init;try{return Jm(t(e))}catch{}}return null}var El=Array.isArray,J=$I.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ge=O1.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ms={pending:!1,data:null,method:null,action:null},Zm=[],va=-1;function si(t){return{current:t}}function gt(t){0>va||(t.current=Zm[va],Zm[va]=null,va--)}function be(t,e){va++,Zm[va]=t.current,t.current=e}var Zn=si(null),eu=si(null),dr=si(null),Ch=si(null);function Dh(t,e){switch(be(dr,e),be(eu,t),be(Zn,null),e.nodeType){case 9:case 11:t=(t=e.documentElement)&&(t=t.namespaceURI)?_T(t):0;break;default:if(t=e.tagName,e=e.namespaceURI)e=_T(e),t=ES(e,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}gt(Zn),be(Zn,t)}function Ka(){gt(Zn),gt(eu),gt(dr)}function ep(t){t.memoizedState!==null&&be(Ch,t);var e=Zn.current,n=ES(e,t.type);e!==n&&(be(eu,t),be(Zn,n))}function Nh(t){eu.current===t&&(gt(Zn),gt(eu)),Ch.current===t&&(gt(Ch),hu._currentValue=ms)}var Yf,dE;function Jr(t){if(Yf===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Yf=e&&e[1]||"",dE=-1<n.stack.indexOf(`
    at`)?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Yf+t+dE}var Xf=!1;function Wf(t,e){if(!t||Xf)return"";Xf=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(e){var f=function(){throw Error()};if(Object.defineProperty(f.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(f,[])}catch(g){var p=g}Reflect.construct(t,[],f)}else{try{f.call()}catch(g){p=g}t.call(f.prototype)}}else{try{throw Error()}catch(g){p=g}(f=t())&&typeof f.catch=="function"&&f.catch(function(){})}}catch(g){if(g&&p&&typeof g.stack=="string")return[g.stack,p.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var s=i.DetermineComponentFrameRoot(),a=s[0],o=s[1];if(a&&o){var u=a.split(`
`),c=o.split(`
`);for(r=i=0;i<u.length&&!u[i].includes("DetermineComponentFrameRoot");)i++;for(;r<c.length&&!c[r].includes("DetermineComponentFrameRoot");)r++;if(i===u.length||r===c.length)for(i=u.length-1,r=c.length-1;1<=i&&0<=r&&u[i]!==c[r];)r--;for(;1<=i&&0<=r;i--,r--)if(u[i]!==c[r]){if(i!==1||r!==1)do if(i--,r--,0>r||u[i]!==c[r]){var d=`
`+u[i].replace(" at new "," at ");return t.displayName&&d.includes("<anonymous>")&&(d=d.replace("<anonymous>",t.displayName)),d}while(1<=i&&0<=r);break}}}finally{Xf=!1,Error.prepareStackTrace=n}return(n=t?t.displayName||t.name:"")?Jr(n):""}function k1(t,e){switch(t.tag){case 26:case 27:case 5:return Jr(t.type);case 16:return Jr("Lazy");case 13:return t.child!==e&&e!==null?Jr("Suspense Fallback"):Jr("Suspense");case 19:return Jr("SuspenseList");case 0:case 15:return Wf(t.type,!1);case 11:return Wf(t.type.render,!1);case 1:return Wf(t.type,!0);case 31:return Jr("Activity");default:return""}}function fE(t){try{var e="",n=null;do e+=k1(t,n),n=t,t=t.return;while(t);return e}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var tp=Object.prototype.hasOwnProperty,kg=ct.unstable_scheduleCallback,Jf=ct.unstable_cancelCallback,L1=ct.unstable_shouldYield,U1=ct.unstable_requestPaint,mn=ct.unstable_now,z1=ct.unstable_getCurrentPriorityLevel,tA=ct.unstable_ImmediatePriority,nA=ct.unstable_UserBlockingPriority,Oh=ct.unstable_NormalPriority,B1=ct.unstable_LowPriority,iA=ct.unstable_IdlePriority,F1=ct.log,j1=ct.unstable_setDisableYieldValue,Lu=null,pn=null;function sr(t){if(typeof F1=="function"&&j1(t),pn&&typeof pn.setStrictMode=="function")try{pn.setStrictMode(Lu,t)}catch{}}var gn=Math.clz32?Math.clz32:H1,q1=Math.log,G1=Math.LN2;function H1(t){return t>>>=0,t===0?32:31-(q1(t)/G1|0)|0}var Vc=256,xc=262144,Mc=4194304;function Zr(t){var e=t&42;if(e!==0)return e;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Cd(t,e,n){var i=t.pendingLanes;if(i===0)return 0;var r=0,s=t.suspendedLanes,a=t.pingedLanes;t=t.warmLanes;var o=i&134217727;return o!==0?(i=o&~s,i!==0?r=Zr(i):(a&=o,a!==0?r=Zr(a):n||(n=o&~t,n!==0&&(r=Zr(n))))):(o=i&~s,o!==0?r=Zr(o):a!==0?r=Zr(a):n||(n=i&~t,n!==0&&(r=Zr(n)))),r===0?0:e!==0&&e!==r&&!(e&s)&&(s=r&-r,n=e&-e,s>=n||s===32&&(n&4194048)!==0)?e:r}function Uu(t,e){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&e)===0}function K1(t,e){switch(t){case 1:case 2:case 4:case 8:case 64:return e+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function rA(){var t=Mc;return Mc<<=1,!(Mc&62914560)&&(Mc=4194304),t}function Zf(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function zu(t,e){t.pendingLanes|=e,e!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Q1(t,e,n,i,r,s){var a=t.pendingLanes;t.pendingLanes=n,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=n,t.entangledLanes&=n,t.errorRecoveryDisabledLanes&=n,t.shellSuspendCounter=0;var o=t.entanglements,u=t.expirationTimes,c=t.hiddenUpdates;for(n=a&~n;0<n;){var d=31-gn(n),f=1<<d;o[d]=0,u[d]=-1;var p=c[d];if(p!==null)for(c[d]=null,d=0;d<p.length;d++){var g=p[d];g!==null&&(g.lane&=-536870913)}n&=~f}i!==0&&sA(t,i,0),s!==0&&r===0&&t.tag!==0&&(t.suspendedLanes|=s&~(a&~e))}function sA(t,e,n){t.pendingLanes|=e,t.suspendedLanes&=~e;var i=31-gn(e);t.entangledLanes|=e,t.entanglements[i]=t.entanglements[i]|1073741824|n&261930}function aA(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-gn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}function oA(t,e){var n=e&-e;return n=n&42?1:Lg(n),n&(t.suspendedLanes|e)?0:n}function Lg(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Ug(t){return t&=-t,2<t?8<t?t&134217727?32:268435456:8:2}function lA(){var t=ge.p;return t!==0?t:(t=window.event,t===void 0?32:OS(t.type))}function mE(t,e){var n=ge.p;try{return ge.p=t,e()}finally{ge.p=n}}var Ur=Math.random().toString(36).slice(2),bt="__reactFiber$"+Ur,rn="__reactProps$"+Ur,Io="__reactContainer$"+Ur,np="__reactEvents$"+Ur,$1="__reactListeners$"+Ur,Y1="__reactHandles$"+Ur,pE="__reactResources$"+Ur,Bu="__reactMarker$"+Ur;function zg(t){delete t[bt],delete t[rn],delete t[np],delete t[$1],delete t[Y1]}function Ea(t){var e=t[bt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Io]||n[bt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=wT(t);t!==null;){if(n=t[bt])return n;t=wT(t)}return e}t=n,n=t.parentNode}return null}function Ao(t){if(t=t[bt]||t[Io]){var e=t.tag;if(e===5||e===6||e===13||e===31||e===26||e===27||e===3)return t}return null}function Tl(t){var e=t.tag;if(e===5||e===26||e===27||e===6)return t.stateNode;throw Error(U(33))}function Pa(t){var e=t[pE];return e||(e=t[pE]={hoistableStyles:new Map,hoistableScripts:new Map}),e}function pt(t){t[Bu]=!0}var uA=new Set,cA={};function Bs(t,e){Qa(t,e),Qa(t+"Capture",e)}function Qa(t,e){for(cA[t]=e,t=0;t<e.length;t++)uA.add(e[t])}var X1=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),gE={},_E={};function W1(t){return tp.call(_E,t)?!0:tp.call(gE,t)?!1:X1.test(t)?_E[t]=!0:(gE[t]=!0,!1)}function eh(t,e,n){if(W1(e))if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":t.removeAttribute(e);return;case"boolean":var i=e.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){t.removeAttribute(e);return}}t.setAttribute(e,""+n)}}function kc(t,e,n){if(n===null)t.removeAttribute(e);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttribute(e,""+n)}}function ci(t,e,n,i){if(i===null)t.removeAttribute(n);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttributeNS(e,n,""+i)}}function In(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hA(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function J1(t,e,n){var i=Object.getOwnPropertyDescriptor(t.constructor.prototype,e);if(!t.hasOwnProperty(e)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,s=i.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){n=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:i.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ip(t){if(!t._valueTracker){var e=hA(t)?"checked":"value";t._valueTracker=J1(t,e,""+t[e])}}function dA(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=hA(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ph(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Z1=/[\n"\\]/g;function Sn(t){return t.replace(Z1,function(e){return"\\"+e.charCodeAt(0).toString(16)+" "})}function rp(t,e,n,i,r,s,a,o){t.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?t.type=a:t.removeAttribute("type"),e!=null?a==="number"?(e===0&&t.value===""||t.value!=e)&&(t.value=""+In(e)):t.value!==""+In(e)&&(t.value=""+In(e)):a!=="submit"&&a!=="reset"||t.removeAttribute("value"),e!=null?sp(t,a,In(e)):n!=null?sp(t,a,In(n)):i!=null&&t.removeAttribute("value"),r==null&&s!=null&&(t.defaultChecked=!!s),r!=null&&(t.checked=r&&typeof r!="function"&&typeof r!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?t.name=""+In(o):t.removeAttribute("name")}function fA(t,e,n,i,r,s,a,o){if(s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(t.type=s),e!=null||n!=null){if(!(s!=="submit"&&s!=="reset"||e!=null)){ip(t);return}n=n!=null?""+In(n):"",e=e!=null?""+In(e):n,o||e===t.value||(t.value=e),t.defaultValue=e}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,t.checked=o?t.checked:!!i,t.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(t.name=a),ip(t)}function sp(t,e,n){e==="number"&&Ph(t.ownerDocument)===t||t.defaultValue===""+n||(t.defaultValue=""+n)}function Va(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+In(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function mA(t,e,n){if(e!=null&&(e=""+In(e),e!==t.value&&(t.value=e),n==null)){t.defaultValue!==e&&(t.defaultValue=e);return}t.defaultValue=n!=null?""+In(n):""}function pA(t,e,n,i){if(e==null){if(i!=null){if(n!=null)throw Error(U(92));if(El(i)){if(1<i.length)throw Error(U(93));i=i[0]}n=i}n==null&&(n=""),e=n}n=In(e),t.defaultValue=n,i=t.textContent,i===n&&i!==""&&i!==null&&(t.value=i),ip(t)}function $a(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var eN=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function yE(t,e,n){var i=e.indexOf("--")===0;n==null||typeof n=="boolean"||n===""?i?t.setProperty(e,""):e==="float"?t.cssFloat="":t[e]="":i?t.setProperty(e,n):typeof n!="number"||n===0||eN.has(e)?e==="float"?t.cssFloat=n:t[e]=(""+n).trim():t[e]=n+"px"}function gA(t,e,n){if(e!=null&&typeof e!="object")throw Error(U(62));if(t=t.style,n!=null){for(var i in n)!n.hasOwnProperty(i)||e!=null&&e.hasOwnProperty(i)||(i.indexOf("--")===0?t.setProperty(i,""):i==="float"?t.cssFloat="":t[i]="");for(var r in e)i=e[r],e.hasOwnProperty(r)&&n[r]!==i&&yE(t,r,i)}else for(var s in e)e.hasOwnProperty(s)&&yE(t,s,e[s])}function Bg(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var tN=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),nN=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function th(t){return nN.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function vi(){}var ap=null;function Fg(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ta=null,xa=null;function vE(t){var e=Ao(t);if(e&&(t=e.stateNode)){var n=t[rn]||null;e:switch(t=e.stateNode,e.type){case"input":if(rp(t,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+Sn(""+e)+'"][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=i[rn]||null;if(!r)throw Error(U(90));rp(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(e=0;e<n.length;e++)i=n[e],i.form===t.form&&dA(i)}break e;case"textarea":mA(t,n.value,n.defaultValue);break e;case"select":e=n.value,e!=null&&Va(t,!!n.multiple,e,!1)}}}var em=!1;function _A(t,e,n){if(em)return t(e,n);em=!0;try{var i=t(e);return i}finally{if(em=!1,(Ta!==null||xa!==null)&&(Bd(),Ta&&(e=Ta,t=xa,xa=Ta=null,vE(e),t)))for(e=0;e<t.length;e++)vE(t[e])}}function tu(t,e){var n=t.stateNode;if(n===null)return null;var i=n[rn]||null;if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(U(231,e,typeof n));return n}var Ci=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),op=!1;if(Ci)try{var rl={};Object.defineProperty(rl,"passive",{get:function(){op=!0}}),window.addEventListener("test",rl,rl),window.removeEventListener("test",rl,rl)}catch{op=!1}var ar=null,jg=null,nh=null;function yA(){if(nh)return nh;var t,e=jg,n=e.length,i,r="value"in ar?ar.value:ar.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return nh=r.slice(t,1<i?1-i:void 0)}function ih(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Lc(){return!0}function EE(){return!1}function sn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Lc:EE,this.isPropagationStopped=EE,this}return Ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Lc)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Lc)},persist:function(){},isPersistent:Lc}),e}var Fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dd=sn(Fs),Fu=Ve({},Fs,{view:0,detail:0}),iN=sn(Fu),tm,nm,sl,Nd=Ve({},Fu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:qg,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==sl&&(sl&&t.type==="mousemove"?(tm=t.screenX-sl.screenX,nm=t.screenY-sl.screenY):nm=tm=0,sl=t),tm)},movementY:function(t){return"movementY"in t?t.movementY:nm}}),TE=sn(Nd),rN=Ve({},Nd,{dataTransfer:0}),sN=sn(rN),aN=Ve({},Fu,{relatedTarget:0}),im=sn(aN),oN=Ve({},Fs,{animationName:0,elapsedTime:0,pseudoElement:0}),lN=sn(oN),uN=Ve({},Fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),cN=sn(uN),hN=Ve({},Fs,{data:0}),wE=sn(hN),dN={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fN={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mN={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function pN(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=mN[t])?!!e[t]:!1}function qg(){return pN}var gN=Ve({},Fu,{key:function(t){if(t.key){var e=dN[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ih(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?fN[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:qg,charCode:function(t){return t.type==="keypress"?ih(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ih(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),_N=sn(gN),yN=Ve({},Nd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),IE=sn(yN),vN=Ve({},Fu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:qg}),EN=sn(vN),TN=Ve({},Fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),wN=sn(TN),IN=Ve({},Nd,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),AN=sn(IN),bN=Ve({},Fs,{newState:0,oldState:0}),SN=sn(bN),RN=[9,13,27,32],Gg=Ci&&"CompositionEvent"in window,Pl=null;Ci&&"documentMode"in document&&(Pl=document.documentMode);var CN=Ci&&"TextEvent"in window&&!Pl,vA=Ci&&(!Gg||Pl&&8<Pl&&11>=Pl),AE=" ",bE=!1;function EA(t,e){switch(t){case"keyup":return RN.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function TA(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var wa=!1;function DN(t,e){switch(t){case"compositionend":return TA(e);case"keypress":return e.which!==32?null:(bE=!0,AE);case"textInput":return t=e.data,t===AE&&bE?null:t;default:return null}}function NN(t,e){if(wa)return t==="compositionend"||!Gg&&EA(t,e)?(t=yA(),nh=jg=ar=null,wa=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return vA&&e.locale!=="ko"?null:e.data;default:return null}}var ON={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function SE(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!ON[t.type]:e==="textarea"}function wA(t,e,n,i){Ta?xa?xa.push(i):xa=[i]:Ta=i,e=Xh(e,"onChange"),0<e.length&&(n=new Dd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Vl=null,nu=null;function PN(t){_S(t,0)}function Od(t){var e=Tl(t);if(dA(e))return t}function RE(t,e){if(t==="change")return e}var IA=!1;if(Ci){var rm;if(Ci){var sm="oninput"in document;if(!sm){var CE=document.createElement("div");CE.setAttribute("oninput","return;"),sm=typeof CE.oninput=="function"}rm=sm}else rm=!1;IA=rm&&(!document.documentMode||9<document.documentMode)}function DE(){Vl&&(Vl.detachEvent("onpropertychange",AA),nu=Vl=null)}function AA(t){if(t.propertyName==="value"&&Od(nu)){var e=[];wA(e,nu,t,Fg(t)),_A(PN,e)}}function VN(t,e,n){t==="focusin"?(DE(),Vl=e,nu=n,Vl.attachEvent("onpropertychange",AA)):t==="focusout"&&DE()}function xN(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Od(nu)}function MN(t,e){if(t==="click")return Od(e)}function kN(t,e){if(t==="input"||t==="change")return Od(e)}function LN(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var vn=typeof Object.is=="function"?Object.is:LN;function iu(t,e){if(vn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!tp.call(e,r)||!vn(t[r],e[r]))return!1}return!0}function NE(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function OE(t,e){var n=NE(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=NE(n)}}function bA(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bA(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function SA(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var e=Ph(t.document);e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ph(t.document)}return e}function Hg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var UN=Ci&&"documentMode"in document&&11>=document.documentMode,Ia=null,lp=null,xl=null,up=!1;function PE(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;up||Ia==null||Ia!==Ph(i)||(i=Ia,"selectionStart"in i&&Hg(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),xl&&iu(xl,i)||(xl=i,i=Xh(lp,"onSelect"),0<i.length&&(e=new Dd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Ia)))}function Xr(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Aa={animationend:Xr("Animation","AnimationEnd"),animationiteration:Xr("Animation","AnimationIteration"),animationstart:Xr("Animation","AnimationStart"),transitionrun:Xr("Transition","TransitionRun"),transitionstart:Xr("Transition","TransitionStart"),transitioncancel:Xr("Transition","TransitionCancel"),transitionend:Xr("Transition","TransitionEnd")},am={},RA={};Ci&&(RA=document.createElement("div").style,"AnimationEvent"in window||(delete Aa.animationend.animation,delete Aa.animationiteration.animation,delete Aa.animationstart.animation),"TransitionEvent"in window||delete Aa.transitionend.transition);function js(t){if(am[t])return am[t];if(!Aa[t])return t;var e=Aa[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in RA)return am[t]=e[n];return t}var CA=js("animationend"),DA=js("animationiteration"),NA=js("animationstart"),zN=js("transitionrun"),BN=js("transitionstart"),FN=js("transitioncancel"),OA=js("transitionend"),PA=new Map,cp="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");cp.push("scrollEnd");function Fn(t,e){PA.set(t,e),Bs(e,[t])}var Vh=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},wn=[],ba=0,Kg=0;function Pd(){for(var t=ba,e=Kg=ba=0;e<t;){var n=wn[e];wn[e++]=null;var i=wn[e];wn[e++]=null;var r=wn[e];wn[e++]=null;var s=wn[e];if(wn[e++]=null,i!==null&&r!==null){var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}s!==0&&VA(n,r,s)}}function Vd(t,e,n,i){wn[ba++]=t,wn[ba++]=e,wn[ba++]=n,wn[ba++]=i,Kg|=i,t.lanes|=i,t=t.alternate,t!==null&&(t.lanes|=i)}function Qg(t,e,n,i){return Vd(t,e,n,i),xh(t)}function qs(t,e){return Vd(t,null,null,e),xh(t)}function VA(t,e,n){t.lanes|=n;var i=t.alternate;i!==null&&(i.lanes|=n);for(var r=!1,s=t.return;s!==null;)s.childLanes|=n,i=s.alternate,i!==null&&(i.childLanes|=n),s.tag===22&&(t=s.stateNode,t===null||t._visibility&1||(r=!0)),t=s,s=s.return;return t.tag===3?(s=t.stateNode,r&&e!==null&&(r=31-gn(n),t=s.hiddenUpdates,i=t[r],i===null?t[r]=[e]:i.push(e),e.lane=n|536870912),s):null}function xh(t){if(50<ql)throw ql=0,Op=null,Error(U(185));for(var e=t.return;e!==null;)t=e,e=t.return;return t.tag===3?t.stateNode:null}var Sa={};function jN(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hn(t,e,n,i){return new jN(t,e,n,i)}function $g(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ai(t,e){var n=t.alternate;return n===null?(n=hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&65011712,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n.refCleanup=t.refCleanup,n}function xA(t,e){t.flags&=65011714;var n=t.alternate;return n===null?(t.childLanes=0,t.lanes=e,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,t.type=n.type,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),t}function rh(t,e,n,i,r,s){var a=0;if(i=t,typeof t=="function")$g(t)&&(a=1);else if(typeof t=="string")a=QO(t,n,Zn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case Wm:return t=hn(31,n,e,r),t.elementType=Wm,t.lanes=s,t;case ya:return ps(n.children,r,s,e);case ZI:a=8,r|=24;break;case $m:return t=hn(12,n,e,r|2),t.elementType=$m,t.lanes=s,t;case Ym:return t=hn(13,n,e,r),t.elementType=Ym,t.lanes=s,t;case Xm:return t=hn(19,n,e,r),t.elementType=Xm,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case yi:a=10;break e;case eA:a=9;break e;case xg:a=11;break e;case Mg:a=14;break e;case Wi:a=16,i=null;break e}a=29,n=Error(U(130,t===null?"null":typeof t,"")),i=null}return e=hn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function ps(t,e,n,i){return t=hn(7,t,i,e),t.lanes=n,t}function om(t,e,n){return t=hn(6,t,null,e),t.lanes=n,t}function MA(t){var e=hn(18,null,null,0);return e.stateNode=t,e}function lm(t,e,n){return e=hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}var VE=new WeakMap;function Rn(t,e){if(typeof t=="object"&&t!==null){var n=VE.get(t);return n!==void 0?n:(e={value:t,source:e,stack:fE(e)},VE.set(t,e),e)}return{value:t,source:e,stack:fE(e)}}var Ra=[],Ca=0,Mh=null,ru=0,An=[],bn=0,Ir=null,Qn=1,$n="";function pi(t,e){Ra[Ca++]=ru,Ra[Ca++]=Mh,Mh=t,ru=e}function kA(t,e,n){An[bn++]=Qn,An[bn++]=$n,An[bn++]=Ir,Ir=t;var i=Qn;t=$n;var r=32-gn(i)-1;i&=~(1<<r),n+=1;var s=32-gn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Qn=1<<32-gn(e)+r|n<<r|i,$n=s+t}else Qn=1<<s|n<<r|i,$n=t}function Yg(t){t.return!==null&&(pi(t,1),kA(t,1,0))}function Xg(t){for(;t===Mh;)Mh=Ra[--Ca],Ra[Ca]=null,ru=Ra[--Ca],Ra[Ca]=null;for(;t===Ir;)Ir=An[--bn],An[bn]=null,$n=An[--bn],An[bn]=null,Qn=An[--bn],An[bn]=null}function LA(t,e){An[bn++]=Qn,An[bn++]=$n,An[bn++]=Ir,Qn=e.id,$n=e.overflow,Ir=t}var St=null,Ne=null,he=!1,fr=null,Cn=!1,hp=Error(U(519));function Ar(t){var e=Error(U(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw su(Rn(e,t)),hp}function xE(t){var e=t.stateNode,n=t.type,i=t.memoizedProps;switch(e[bt]=t,e[rn]=i,n){case"dialog":se("cancel",e),se("close",e);break;case"iframe":case"object":case"embed":se("load",e);break;case"video":case"audio":for(n=0;n<uu.length;n++)se(uu[n],e);break;case"source":se("error",e);break;case"img":case"image":case"link":se("error",e),se("load",e);break;case"details":se("toggle",e);break;case"input":se("invalid",e),fA(e,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":se("invalid",e);break;case"textarea":se("invalid",e),pA(e,i.value,i.defaultValue,i.children)}n=i.children,typeof n!="string"&&typeof n!="number"&&typeof n!="bigint"||e.textContent===""+n||i.suppressHydrationWarning===!0||vS(e.textContent,n)?(i.popover!=null&&(se("beforetoggle",e),se("toggle",e)),i.onScroll!=null&&se("scroll",e),i.onScrollEnd!=null&&se("scrollend",e),i.onClick!=null&&(e.onclick=vi),e=!0):e=!1,e||Ar(t,!0)}function ME(t){for(St=t.return;St;)switch(St.tag){case 5:case 31:case 13:Cn=!1;return;case 27:case 3:Cn=!0;return;default:St=St.return}}function ia(t){if(t!==St)return!1;if(!he)return ME(t),he=!0,!1;var e=t.tag,n;if((n=e!==3&&e!==27)&&((n=e===5)&&(n=t.type,n=!(n!=="form"&&n!=="button")||kp(t.type,t.memoizedProps)),n=!n),n&&Ne&&Ar(t),ME(t),e===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));Ne=TT(t)}else if(e===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(317));Ne=TT(t)}else e===27?(e=Ne,zr(t.type)?(t=Bp,Bp=null,Ne=t):Ne=e):Ne=St?On(t.stateNode.nextSibling):null;return!0}function ws(){Ne=St=null,he=!1}function um(){var t=fr;return t!==null&&(Yt===null?Yt=t:Yt.push.apply(Yt,t),fr=null),t}function su(t){fr===null?fr=[t]:fr.push(t)}var dp=si(null),Gs=null,Ei=null;function Zi(t,e,n){be(dp,e._currentValue),e._currentValue=n}function bi(t){t._currentValue=dp.current,gt(dp)}function fp(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function mp(t,e,n,i){var r=t.child;for(r!==null&&(r.return=t);r!==null;){var s=r.dependencies;if(s!==null){var a=r.child;s=s.firstContext;e:for(;s!==null;){var o=s;s=r;for(var u=0;u<e.length;u++)if(o.context===e[u]){s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),fp(s.return,n,t),i||(a=null);break e}s=o.next}}else if(r.tag===18){if(a=r.return,a===null)throw Error(U(341));a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),fp(a,n,t),a=null}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===t){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}}function bo(t,e,n,i){t=null;for(var r=e,s=!1;r!==null;){if(!s){if(r.flags&524288)s=!0;else if(r.flags&262144)break}if(r.tag===10){var a=r.alternate;if(a===null)throw Error(U(387));if(a=a.memoizedProps,a!==null){var o=r.type;vn(r.pendingProps.value,a.value)||(t!==null?t.push(o):t=[o])}}else if(r===Ch.current){if(a=r.alternate,a===null)throw Error(U(387));a.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(t!==null?t.push(hu):t=[hu])}r=r.return}t!==null&&mp(e,t,n,i),e.flags|=262144}function kh(t){for(t=t.firstContext;t!==null;){if(!vn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Is(t){Gs=t,Ei=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Ct(t){return UA(Gs,t)}function Uc(t,e){return Gs===null&&Is(t),UA(t,e)}function UA(t,e){var n=e._currentValue;if(e={context:e,memoizedValue:n,next:null},Ei===null){if(t===null)throw Error(U(308));Ei=e,t.dependencies={lanes:0,firstContext:e},t.flags|=524288}else Ei=Ei.next=e;return n}var qN=typeof AbortController<"u"?AbortController:function(){var t=[],e=this.signal={aborted:!1,addEventListener:function(n,i){t.push(i)}};this.abort=function(){e.aborted=!0,t.forEach(function(n){return n()})}},GN=ct.unstable_scheduleCallback,HN=ct.unstable_NormalPriority,st={$$typeof:yi,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Wg(){return{controller:new qN,data:new Map,refCount:0}}function ju(t){t.refCount--,t.refCount===0&&GN(HN,function(){t.controller.abort()})}var Ml=null,pp=0,Ya=0,Ma=null;function KN(t,e){if(Ml===null){var n=Ml=[];pp=0,Ya=w_(),Ma={status:"pending",value:void 0,then:function(i){n.push(i)}}}return pp++,e.then(kE,kE),e}function kE(){if(--pp===0&&Ml!==null){Ma!==null&&(Ma.status="fulfilled");var t=Ml;Ml=null,Ya=0,Ma=null;for(var e=0;e<t.length;e++)(0,t[e])()}}function QN(t,e){var n=[],i={status:"pending",value:null,reason:null,then:function(r){n.push(r)}};return t.then(function(){i.status="fulfilled",i.value=e;for(var r=0;r<n.length;r++)(0,n[r])(e)},function(r){for(i.status="rejected",i.reason=r,r=0;r<n.length;r++)(0,n[r])(void 0)}),i}var LE=J.S;J.S=function(t,e){Jb=mn(),typeof e=="object"&&e!==null&&typeof e.then=="function"&&KN(t,e),LE!==null&&LE(t,e)};var gs=si(null);function Jg(){var t=gs.current;return t!==null?t:Ae.pooledCache}function sh(t,e){e===null?be(gs,gs.current):be(gs,e.pool)}function zA(){var t=Jg();return t===null?null:{parent:st._currentValue,pool:t}}var So=Error(U(460)),Zg=Error(U(474)),xd=Error(U(542)),Lh={then:function(){}};function UE(t){return t=t.status,t==="fulfilled"||t==="rejected"}function BA(t,e,n){switch(n=t[n],n===void 0?t.push(e):n!==e&&(e.then(vi,vi),e=n),e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,BE(t),t;default:if(typeof e.status=="string")e.then(vi,vi);else{if(t=Ae,t!==null&&100<t.shellSuspendCounter)throw Error(U(482));t=e,t.status="pending",t.then(function(i){if(e.status==="pending"){var r=e;r.status="fulfilled",r.value=i}},function(i){if(e.status==="pending"){var r=e;r.status="rejected",r.reason=i}})}switch(e.status){case"fulfilled":return e.value;case"rejected":throw t=e.reason,BE(t),t}throw _s=e,So}}function es(t){try{var e=t._init;return e(t._payload)}catch(n){throw n!==null&&typeof n=="object"&&typeof n.then=="function"?(_s=n,So):n}}var _s=null;function zE(){if(_s===null)throw Error(U(459));var t=_s;return _s=null,t}function BE(t){if(t===So||t===xd)throw Error(U(483))}var ka=null,au=0;function zc(t){var e=au;return au+=1,ka===null&&(ka=[]),BA(ka,t,e)}function al(t,e){e=e.props.ref,t.ref=e!==void 0?e:null}function Bc(t,e){throw e.$$typeof===V1?Error(U(525)):(t=Object.prototype.toString.call(e),Error(U(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)))}function FA(t){function e(I,E){if(t){var A=I.deletions;A===null?(I.deletions=[E],I.flags|=16):A.push(E)}}function n(I,E){if(!t)return null;for(;E!==null;)e(I,E),E=E.sibling;return null}function i(I){for(var E=new Map;I!==null;)I.key!==null?E.set(I.key,I):E.set(I.index,I),I=I.sibling;return E}function r(I,E){return I=Ai(I,E),I.index=0,I.sibling=null,I}function s(I,E,A){return I.index=A,t?(A=I.alternate,A!==null?(A=A.index,A<E?(I.flags|=67108866,E):A):(I.flags|=67108866,E)):(I.flags|=1048576,E)}function a(I){return t&&I.alternate===null&&(I.flags|=67108866),I}function o(I,E,A,O){return E===null||E.tag!==6?(E=om(A,I.mode,O),E.return=I,E):(E=r(E,A),E.return=I,E)}function u(I,E,A,O){var L=A.type;return L===ya?d(I,E,A.props.children,O,A.key):E!==null&&(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Wi&&es(L)===E.type)?(E=r(E,A.props),al(E,A),E.return=I,E):(E=rh(A.type,A.key,A.props,null,I.mode,O),al(E,A),E.return=I,E)}function c(I,E,A,O){return E===null||E.tag!==4||E.stateNode.containerInfo!==A.containerInfo||E.stateNode.implementation!==A.implementation?(E=lm(A,I.mode,O),E.return=I,E):(E=r(E,A.children||[]),E.return=I,E)}function d(I,E,A,O,L){return E===null||E.tag!==7?(E=ps(A,I.mode,O,L),E.return=I,E):(E=r(E,A),E.return=I,E)}function f(I,E,A){if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return E=om(""+E,I.mode,A),E.return=I,E;if(typeof E=="object"&&E!==null){switch(E.$$typeof){case Pc:return A=rh(E.type,E.key,E.props,null,I.mode,A),al(A,E),A.return=I,A;case vl:return E=lm(E,I.mode,A),E.return=I,E;case Wi:return E=es(E),f(I,E,A)}if(El(E)||il(E))return E=ps(E,I.mode,A,null),E.return=I,E;if(typeof E.then=="function")return f(I,zc(E),A);if(E.$$typeof===yi)return f(I,Uc(I,E),A);Bc(I,E)}return null}function p(I,E,A,O){var L=E!==null?E.key:null;if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return L!==null?null:o(I,E,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Pc:return A.key===L?u(I,E,A,O):null;case vl:return A.key===L?c(I,E,A,O):null;case Wi:return A=es(A),p(I,E,A,O)}if(El(A)||il(A))return L!==null?null:d(I,E,A,O,null);if(typeof A.then=="function")return p(I,E,zc(A),O);if(A.$$typeof===yi)return p(I,E,Uc(I,A),O);Bc(I,A)}return null}function g(I,E,A,O,L){if(typeof O=="string"&&O!==""||typeof O=="number"||typeof O=="bigint")return I=I.get(A)||null,o(E,I,""+O,L);if(typeof O=="object"&&O!==null){switch(O.$$typeof){case Pc:return I=I.get(O.key===null?A:O.key)||null,u(E,I,O,L);case vl:return I=I.get(O.key===null?A:O.key)||null,c(E,I,O,L);case Wi:return O=es(O),g(I,E,A,O,L)}if(El(O)||il(O))return I=I.get(A)||null,d(E,I,O,L,null);if(typeof O.then=="function")return g(I,E,A,zc(O),L);if(O.$$typeof===yi)return g(I,E,A,Uc(E,O),L);Bc(E,O)}return null}function R(I,E,A,O){for(var L=null,F=null,T=E,_=E=0,v=null;T!==null&&_<A.length;_++){T.index>_?(v=T,T=null):v=T.sibling;var w=p(I,T,A[_],O);if(w===null){T===null&&(T=v);break}t&&T&&w.alternate===null&&e(I,T),E=s(w,E,_),F===null?L=w:F.sibling=w,F=w,T=v}if(_===A.length)return n(I,T),he&&pi(I,_),L;if(T===null){for(;_<A.length;_++)T=f(I,A[_],O),T!==null&&(E=s(T,E,_),F===null?L=T:F.sibling=T,F=T);return he&&pi(I,_),L}for(T=i(T);_<A.length;_++)v=g(T,I,_,A[_],O),v!==null&&(t&&v.alternate!==null&&T.delete(v.key===null?_:v.key),E=s(v,E,_),F===null?L=v:F.sibling=v,F=v);return t&&T.forEach(function(S){return e(I,S)}),he&&pi(I,_),L}function N(I,E,A,O){if(A==null)throw Error(U(151));for(var L=null,F=null,T=E,_=E=0,v=null,w=A.next();T!==null&&!w.done;_++,w=A.next()){T.index>_?(v=T,T=null):v=T.sibling;var S=p(I,T,w.value,O);if(S===null){T===null&&(T=v);break}t&&T&&S.alternate===null&&e(I,T),E=s(S,E,_),F===null?L=S:F.sibling=S,F=S,T=v}if(w.done)return n(I,T),he&&pi(I,_),L;if(T===null){for(;!w.done;_++,w=A.next())w=f(I,w.value,O),w!==null&&(E=s(w,E,_),F===null?L=w:F.sibling=w,F=w);return he&&pi(I,_),L}for(T=i(T);!w.done;_++,w=A.next())w=g(T,I,_,w.value,O),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?_:w.key),E=s(w,E,_),F===null?L=w:F.sibling=w,F=w);return t&&T.forEach(function(D){return e(I,D)}),he&&pi(I,_),L}function x(I,E,A,O){if(typeof A=="object"&&A!==null&&A.type===ya&&A.key===null&&(A=A.props.children),typeof A=="object"&&A!==null){switch(A.$$typeof){case Pc:e:{for(var L=A.key;E!==null;){if(E.key===L){if(L=A.type,L===ya){if(E.tag===7){n(I,E.sibling),O=r(E,A.props.children),O.return=I,I=O;break e}}else if(E.elementType===L||typeof L=="object"&&L!==null&&L.$$typeof===Wi&&es(L)===E.type){n(I,E.sibling),O=r(E,A.props),al(O,A),O.return=I,I=O;break e}n(I,E);break}else e(I,E);E=E.sibling}A.type===ya?(O=ps(A.props.children,I.mode,O,A.key),O.return=I,I=O):(O=rh(A.type,A.key,A.props,null,I.mode,O),al(O,A),O.return=I,I=O)}return a(I);case vl:e:{for(L=A.key;E!==null;){if(E.key===L)if(E.tag===4&&E.stateNode.containerInfo===A.containerInfo&&E.stateNode.implementation===A.implementation){n(I,E.sibling),O=r(E,A.children||[]),O.return=I,I=O;break e}else{n(I,E);break}else e(I,E);E=E.sibling}O=lm(A,I.mode,O),O.return=I,I=O}return a(I);case Wi:return A=es(A),x(I,E,A,O)}if(El(A))return R(I,E,A,O);if(il(A)){if(L=il(A),typeof L!="function")throw Error(U(150));return A=L.call(A),N(I,E,A,O)}if(typeof A.then=="function")return x(I,E,zc(A),O);if(A.$$typeof===yi)return x(I,E,Uc(I,A),O);Bc(I,A)}return typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint"?(A=""+A,E!==null&&E.tag===6?(n(I,E.sibling),O=r(E,A),O.return=I,I=O):(n(I,E),O=om(A,I.mode,O),O.return=I,I=O),a(I)):n(I,E)}return function(I,E,A,O){try{au=0;var L=x(I,E,A,O);return ka=null,L}catch(T){if(T===So||T===xd)throw T;var F=hn(29,T,null,I.mode);return F.lanes=O,F.return=I,F}finally{}}}var As=FA(!0),jA=FA(!1),Ji=!1;function e_(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function gp(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function mr(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function pr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,pe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,e=xh(t),VA(t,null,n),e}return Vd(t,i,e,n),xh(t)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194048)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,aA(t,n)}}function cm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,callbacks:i.callbacks},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}var _p=!1;function Ll(){if(_p){var t=Ma;if(t!==null)throw t}}function Ul(t,e,n,i){_p=!1;var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var u=o,c=u.next;u.next=null,a===null?s=c:a.next=c,a=u;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=u))}if(s!==null){var f=r.baseState;a=0,d=c=u=null,o=s;do{var p=o.lane&-536870913,g=p!==o.lane;if(g?(ue&p)===p:(i&p)===p){p!==0&&p===Ya&&(_p=!0),d!==null&&(d=d.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var R=t,N=o;p=e;var x=n;switch(N.tag){case 1:if(R=N.payload,typeof R=="function"){f=R.call(x,f,p);break e}f=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=N.payload,p=typeof R=="function"?R.call(x,f,p):R,p==null)break e;f=Ve({},f,p);break e;case 2:Ji=!0}}p=o.callback,p!==null&&(t.flags|=64,g&&(t.flags|=8192),g=r.callbacks,g===null?r.callbacks=[p]:g.push(p))}else g={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=g,u=f):d=d.next=g,a|=p;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;g=o,o=g.next,g.next=null,r.lastBaseUpdate=g,r.shared.pending=null}}while(!0);d===null&&(u=f),r.baseState=u,r.firstBaseUpdate=c,r.lastBaseUpdate=d,s===null&&(r.shared.lanes=0),Sr|=a,t.lanes=a,t.memoizedState=f}}function qA(t,e){if(typeof t!="function")throw Error(U(191,t));t.call(e)}function GA(t,e){var n=t.callbacks;if(n!==null)for(t.callbacks=null,t=0;t<n.length;t++)qA(n[t],e)}var Xa=si(null),Uh=si(0);function FE(t,e){t=Pi,be(Uh,t),be(Xa,e),Pi=t|e.baseLanes}function yp(){be(Uh,Pi),be(Xa,Xa.current)}function t_(){Pi=Uh.current,gt(Xa),gt(Uh)}var En=si(null),Nn=null;function er(t){var e=t.alternate;be(Xe,Xe.current&1),be(En,t),Nn===null&&(e===null||Xa.current!==null||e.memoizedState!==null)&&(Nn=t)}function vp(t){be(Xe,Xe.current),be(En,t),Nn===null&&(Nn=t)}function HA(t){t.tag===22?(be(Xe,Xe.current),be(En,t),Nn===null&&(Nn=t)):tr()}function tr(){be(Xe,Xe.current),be(En,En.current)}function un(t){gt(En),Nn===t&&(Nn=null),gt(Xe)}var Xe=si(0);function zh(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||Up(n)||zp(n)))return e}else if(e.tag===19&&(e.memoizedProps.revealOrder==="forwards"||e.memoizedProps.revealOrder==="backwards"||e.memoizedProps.revealOrder==="unstable_legacy-backwards"||e.memoizedProps.revealOrder==="together")){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Di=0,ie=null,Te=null,it=null,Bh=!1,La=!1,bs=!1,Fh=0,ou=0,Ua=null,$N=0;function Fe(){throw Error(U(321))}function n_(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!vn(t[n],e[n]))return!1;return!0}function i_(t,e,n,i,r,s){return Di=s,ie=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,J.H=t===null||t.memoizedState===null?wb:m_,bs=!1,s=n(i,r),bs=!1,La&&(s=QA(e,n,i,r)),KA(t),s}function KA(t){J.H=lu;var e=Te!==null&&Te.next!==null;if(Di=0,it=Te=ie=null,Bh=!1,ou=0,Ua=null,e)throw Error(U(300));t===null||at||(t=t.dependencies,t!==null&&kh(t)&&(at=!0))}function QA(t,e,n,i){ie=t;var r=0;do{if(La&&(Ua=null),ou=0,La=!1,25<=r)throw Error(U(301));if(r+=1,it=Te=null,t.updateQueue!=null){var s=t.updateQueue;s.lastEffect=null,s.events=null,s.stores=null,s.memoCache!=null&&(s.memoCache.index=0)}J.H=Ib,s=e(n,i)}while(La);return s}function YN(){var t=J.H,e=t.useState()[0];return e=typeof e.then=="function"?qu(e):e,t=t.useState()[0],(Te!==null?Te.memoizedState:null)!==t&&(ie.flags|=1024),e}function r_(){var t=Fh!==0;return Fh=0,t}function s_(t,e,n){e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~n}function a_(t){if(Bh){for(t=t.memoizedState;t!==null;){var e=t.queue;e!==null&&(e.pending=null),t=t.next}Bh=!1}Di=0,it=Te=ie=null,La=!1,ou=Fh=0,Ua=null}function Lt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return it===null?ie.memoizedState=it=t:it=it.next=t,it}function Je(){if(Te===null){var t=ie.alternate;t=t!==null?t.memoizedState:null}else t=Te.next;var e=it===null?ie.memoizedState:it.next;if(e!==null)it=e,Te=t;else{if(t===null)throw ie.alternate===null?Error(U(467)):Error(U(310));Te=t,t={memoizedState:Te.memoizedState,baseState:Te.baseState,baseQueue:Te.baseQueue,queue:Te.queue,next:null},it===null?ie.memoizedState=it=t:it=it.next=t}return it}function Md(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function qu(t){var e=ou;return ou+=1,Ua===null&&(Ua=[]),t=BA(Ua,t,e),e=ie,(it===null?e.memoizedState:it.next)===null&&(e=e.alternate,J.H=e===null||e.memoizedState===null?wb:m_),t}function kd(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return qu(t);if(t.$$typeof===yi)return Ct(t)}throw Error(U(438,String(t)))}function o_(t){var e=null,n=ie.updateQueue;if(n!==null&&(e=n.memoCache),e==null){var i=ie.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(e={data:i.data.map(function(r){return r.slice()}),index:0})))}if(e==null&&(e={data:[],index:0}),n===null&&(n=Md(),ie.updateQueue=n),n.memoCache=e,n=e.data[e.index],n===void 0)for(n=e.data[e.index]=Array(t),i=0;i<t;i++)n[i]=x1;return e.index++,n}function Ni(t,e){return typeof e=="function"?e(t):e}function ah(t){var e=Je();return l_(e,Te,t)}function l_(t,e,n){var i=t.queue;if(i===null)throw Error(U(311));i.lastRenderedReducer=n;var r=t.baseQueue,s=i.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}e.baseQueue=r=s,i.pending=null}if(s=t.baseState,r===null)t.memoizedState=s;else{e=r.next;var o=a=null,u=null,c=e,d=!1;do{var f=c.lane&-536870913;if(f!==c.lane?(ue&f)===f:(Di&f)===f){var p=c.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),f===Ya&&(d=!0);else if((Di&p)===p){c=c.next,p===Ya&&(d=!0);continue}else f={lane:0,revertLane:c.revertLane,gesture:null,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(o=u=f,a=s):u=u.next=f,ie.lanes|=p,Sr|=p;f=c.action,bs&&n(s,f),s=c.hasEagerState?c.eagerState:n(s,f)}else p={lane:f,revertLane:c.revertLane,gesture:c.gesture,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null},u===null?(o=u=p,a=s):u=u.next=p,ie.lanes|=f,Sr|=f;c=c.next}while(c!==null&&c!==e);if(u===null?a=s:u.next=o,!vn(s,t.memoizedState)&&(at=!0,d&&(n=Ma,n!==null)))throw n;t.memoizedState=s,t.baseState=a,t.baseQueue=u,i.lastRenderedState=s}return r===null&&(i.lanes=0),[t.memoizedState,i.dispatch]}function hm(t){var e=Je(),n=e.queue;if(n===null)throw Error(U(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);vn(s,e.memoizedState)||(at=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function $A(t,e,n){var i=ie,r=Je(),s=he;if(s){if(n===void 0)throw Error(U(407));n=n()}else n=e();var a=!vn((Te||r).memoizedState,n);if(a&&(r.memoizedState=n,at=!0),r=r.queue,u_(WA.bind(null,i,r,t),[t]),r.getSnapshot!==e||a||it!==null&&it.memoizedState.tag&1){if(i.flags|=2048,Wa(9,{destroy:void 0},XA.bind(null,i,r,n,e),null),Ae===null)throw Error(U(349));s||Di&127||YA(i,e,n)}return n}function YA(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=ie.updateQueue,e===null?(e=Md(),ie.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function XA(t,e,n,i){e.value=n,e.getSnapshot=i,JA(e)&&ZA(t)}function WA(t,e,n){return n(function(){JA(e)&&ZA(t)})}function JA(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!vn(t,n)}catch{return!0}}function ZA(t){var e=qs(t,2);e!==null&&nn(e,t,2)}function Ep(t){var e=Lt();if(typeof t=="function"){var n=t;if(t=n(),bs){sr(!0);try{n()}finally{sr(!1)}}}return e.memoizedState=e.baseState=t,e.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:t},e}function eb(t,e,n,i){return t.baseState=n,l_(t,Te,typeof i=="function"?i:Ni)}function XN(t,e,n,i,r){if(Ud(t))throw Error(U(485));if(t=e.action,t!==null){var s={payload:r,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){s.listeners.push(a)}};J.T!==null?n(!0):s.isTransition=!1,i(s),n=e.pending,n===null?(s.next=e.pending=s,tb(e,s)):(s.next=n.next,e.pending=n.next=s)}}function tb(t,e){var n=e.action,i=e.payload,r=t.state;if(e.isTransition){var s=J.T,a={};J.T=a;try{var o=n(r,i),u=J.S;u!==null&&u(a,o),jE(t,e,o)}catch(c){Tp(t,e,c)}finally{s!==null&&a.types!==null&&(s.types=a.types),J.T=s}}else try{s=n(r,i),jE(t,e,s)}catch(c){Tp(t,e,c)}}function jE(t,e,n){n!==null&&typeof n=="object"&&typeof n.then=="function"?n.then(function(i){qE(t,e,i)},function(i){return Tp(t,e,i)}):qE(t,e,n)}function qE(t,e,n){e.status="fulfilled",e.value=n,nb(e),t.state=n,e=t.pending,e!==null&&(n=e.next,n===e?t.pending=null:(n=n.next,e.next=n,tb(t,n)))}function Tp(t,e,n){var i=t.pending;if(t.pending=null,i!==null){i=i.next;do e.status="rejected",e.reason=n,nb(e),e=e.next;while(e!==i)}t.action=null}function nb(t){t=t.listeners;for(var e=0;e<t.length;e++)(0,t[e])()}function ib(t,e){return e}function GE(t,e){if(he){var n=Ae.formState;if(n!==null){e:{var i=ie;if(he){if(Ne){t:{for(var r=Ne,s=Cn;r.nodeType!==8;){if(!s){r=null;break t}if(r=On(r.nextSibling),r===null){r=null;break t}}s=r.data,r=s==="F!"||s==="F"?r:null}if(r){Ne=On(r.nextSibling),i=r.data==="F!";break e}}Ar(i)}i=!1}i&&(e=n[0])}}return n=Lt(),n.memoizedState=n.baseState=e,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ib,lastRenderedState:e},n.queue=i,n=vb.bind(null,ie,i),i.dispatch=n,i=Ep(!1),s=f_.bind(null,ie,!1,i.queue),i=Lt(),r={state:e,dispatch:null,action:t,pending:null},i.queue=r,n=XN.bind(null,ie,r,s,n),r.dispatch=n,i.memoizedState=t,[e,n,!1]}function HE(t){var e=Je();return rb(e,Te,t)}function rb(t,e,n){if(e=l_(t,e,ib)[0],t=ah(Ni)[0],typeof e=="object"&&e!==null&&typeof e.then=="function")try{var i=qu(e)}catch(a){throw a===So?xd:a}else i=e;e=Je();var r=e.queue,s=r.dispatch;return n!==e.memoizedState&&(ie.flags|=2048,Wa(9,{destroy:void 0},WN.bind(null,r,n),null)),[i,s,t]}function WN(t,e){t.action=e}function KE(t){var e=Je(),n=Te;if(n!==null)return rb(e,n,t);Je(),e=e.memoizedState,n=Je();var i=n.queue.dispatch;return n.memoizedState=t,[e,i,!1]}function Wa(t,e,n,i){return t={tag:t,create:n,deps:i,inst:e,next:null},e=ie.updateQueue,e===null&&(e=Md(),ie.updateQueue=e),n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t),t}function sb(){return Je().memoizedState}function oh(t,e,n,i){var r=Lt();ie.flags|=t,r.memoizedState=Wa(1|e,{destroy:void 0},n,i===void 0?null:i)}function Ld(t,e,n,i){var r=Je();i=i===void 0?null:i;var s=r.memoizedState.inst;Te!==null&&i!==null&&n_(i,Te.memoizedState.deps)?r.memoizedState=Wa(e,s,n,i):(ie.flags|=t,r.memoizedState=Wa(1|e,s,n,i))}function QE(t,e){oh(8390656,8,t,e)}function u_(t,e){Ld(2048,8,t,e)}function JN(t){ie.flags|=4;var e=ie.updateQueue;if(e===null)e=Md(),ie.updateQueue=e,e.events=[t];else{var n=e.events;n===null?e.events=[t]:n.push(t)}}function ab(t){var e=Je().memoizedState;return JN({ref:e,nextImpl:t}),function(){if(pe&2)throw Error(U(440));return e.impl.apply(void 0,arguments)}}function ob(t,e){return Ld(4,2,t,e)}function lb(t,e){return Ld(4,4,t,e)}function ub(t,e){if(typeof e=="function"){t=t();var n=e(t);return function(){typeof n=="function"?n():e(null)}}if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function cb(t,e,n){n=n!=null?n.concat([t]):null,Ld(4,4,ub.bind(null,e,t),n)}function c_(){}function hb(t,e){var n=Je();e=e===void 0?null:e;var i=n.memoizedState;return e!==null&&n_(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function db(t,e){var n=Je();e=e===void 0?null:e;var i=n.memoizedState;if(e!==null&&n_(e,i[1]))return i[0];if(i=t(),bs){sr(!0);try{t()}finally{sr(!1)}}return n.memoizedState=[i,e],i}function h_(t,e,n){return n===void 0||Di&1073741824&&!(ue&261930)?t.memoizedState=e:(t.memoizedState=n,t=eS(),ie.lanes|=t,Sr|=t,n)}function fb(t,e,n,i){return vn(n,e)?n:Xa.current!==null?(t=h_(t,n,i),vn(t,e)||(at=!0),t):!(Di&42)||Di&1073741824&&!(ue&261930)?(at=!0,t.memoizedState=n):(t=eS(),ie.lanes|=t,Sr|=t,e)}function mb(t,e,n,i,r){var s=ge.p;ge.p=s!==0&&8>s?s:8;var a=J.T,o={};J.T=o,f_(t,!1,e,n);try{var u=r(),c=J.S;if(c!==null&&c(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var d=QN(u,i);zl(t,e,d,_n(t))}else zl(t,e,i,_n(t))}catch(f){zl(t,e,{then:function(){},status:"rejected",reason:f},_n())}finally{ge.p=s,a!==null&&o.types!==null&&(a.types=o.types),J.T=a}}function ZN(){}function wp(t,e,n,i){if(t.tag!==5)throw Error(U(476));var r=pb(t).queue;mb(t,r,e,ms,n===null?ZN:function(){return gb(t),n(i)})}function pb(t){var e=t.memoizedState;if(e!==null)return e;e={memoizedState:ms,baseState:ms,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:ms},next:null};var n={};return e.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ni,lastRenderedState:n},next:null},t.memoizedState=e,t=t.alternate,t!==null&&(t.memoizedState=e),e}function gb(t){var e=pb(t);e.next===null&&(e=t.alternate.memoizedState),zl(t,e.next.queue,{},_n())}function d_(){return Ct(hu)}function _b(){return Je().memoizedState}function yb(){return Je().memoizedState}function eO(t){for(var e=t.return;e!==null;){switch(e.tag){case 24:case 3:var n=_n();t=mr(n);var i=pr(e,t,n);i!==null&&(nn(i,e,n),kl(i,e,n)),e={cache:Wg()},t.payload=e;return}e=e.return}}function tO(t,e,n){var i=_n();n={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ud(t)?Eb(e,n):(n=Qg(t,e,n,i),n!==null&&(nn(n,t,i),Tb(n,e,i)))}function vb(t,e,n){var i=_n();zl(t,e,n,i)}function zl(t,e,n,i){var r={lane:i,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ud(t))Eb(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,vn(o,a))return Vd(t,e,r,0),Ae===null&&Pd(),!1}catch{}finally{}if(n=Qg(t,e,r,i),n!==null)return nn(n,t,i),Tb(n,e,i),!0}return!1}function f_(t,e,n,i){if(i={lane:2,revertLane:w_(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},Ud(t)){if(e)throw Error(U(479))}else e=Qg(t,n,i,2),e!==null&&nn(e,t,2)}function Ud(t){var e=t.alternate;return t===ie||e!==null&&e===ie}function Eb(t,e){La=Bh=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Tb(t,e,n){if(n&4194048){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,aA(t,n)}}var lu={readContext:Ct,use:kd,useCallback:Fe,useContext:Fe,useEffect:Fe,useImperativeHandle:Fe,useLayoutEffect:Fe,useInsertionEffect:Fe,useMemo:Fe,useReducer:Fe,useRef:Fe,useState:Fe,useDebugValue:Fe,useDeferredValue:Fe,useTransition:Fe,useSyncExternalStore:Fe,useId:Fe,useHostTransitionStatus:Fe,useFormState:Fe,useActionState:Fe,useOptimistic:Fe,useMemoCache:Fe,useCacheRefresh:Fe};lu.useEffectEvent=Fe;var wb={readContext:Ct,use:kd,useCallback:function(t,e){return Lt().memoizedState=[t,e===void 0?null:e],t},useContext:Ct,useEffect:QE,useImperativeHandle:function(t,e,n){n=n!=null?n.concat([t]):null,oh(4194308,4,ub.bind(null,e,t),n)},useLayoutEffect:function(t,e){return oh(4194308,4,t,e)},useInsertionEffect:function(t,e){oh(4,2,t,e)},useMemo:function(t,e){var n=Lt();e=e===void 0?null:e;var i=t();if(bs){sr(!0);try{t()}finally{sr(!1)}}return n.memoizedState=[i,e],i},useReducer:function(t,e,n){var i=Lt();if(n!==void 0){var r=n(e);if(bs){sr(!0);try{n(e)}finally{sr(!1)}}}else r=e;return i.memoizedState=i.baseState=r,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:r},i.queue=t,t=t.dispatch=tO.bind(null,ie,t),[i.memoizedState,t]},useRef:function(t){var e=Lt();return t={current:t},e.memoizedState=t},useState:function(t){t=Ep(t);var e=t.queue,n=vb.bind(null,ie,e);return e.dispatch=n,[t.memoizedState,n]},useDebugValue:c_,useDeferredValue:function(t,e){var n=Lt();return h_(n,t,e)},useTransition:function(){var t=Ep(!1);return t=mb.bind(null,ie,t.queue,!0,!1),Lt().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,e,n){var i=ie,r=Lt();if(he){if(n===void 0)throw Error(U(407));n=n()}else{if(n=e(),Ae===null)throw Error(U(349));ue&127||YA(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,QE(WA.bind(null,i,s,t),[t]),i.flags|=2048,Wa(9,{destroy:void 0},XA.bind(null,i,s,n,e),null),n},useId:function(){var t=Lt(),e=Ae.identifierPrefix;if(he){var n=$n,i=Qn;n=(i&~(1<<32-gn(i)-1)).toString(32)+n,e="_"+e+"R_"+n,n=Fh++,0<n&&(e+="H"+n.toString(32)),e+="_"}else n=$N++,e="_"+e+"r_"+n.toString(32)+"_";return t.memoizedState=e},useHostTransitionStatus:d_,useFormState:GE,useActionState:GE,useOptimistic:function(t){var e=Lt();e.memoizedState=e.baseState=t;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return e.queue=n,e=f_.bind(null,ie,!0,n),n.dispatch=e,[t,e]},useMemoCache:o_,useCacheRefresh:function(){return Lt().memoizedState=eO.bind(null,ie)},useEffectEvent:function(t){var e=Lt(),n={impl:t};return e.memoizedState=n,function(){if(pe&2)throw Error(U(440));return n.impl.apply(void 0,arguments)}}},m_={readContext:Ct,use:kd,useCallback:hb,useContext:Ct,useEffect:u_,useImperativeHandle:cb,useInsertionEffect:ob,useLayoutEffect:lb,useMemo:db,useReducer:ah,useRef:sb,useState:function(){return ah(Ni)},useDebugValue:c_,useDeferredValue:function(t,e){var n=Je();return fb(n,Te.memoizedState,t,e)},useTransition:function(){var t=ah(Ni)[0],e=Je().memoizedState;return[typeof t=="boolean"?t:qu(t),e]},useSyncExternalStore:$A,useId:_b,useHostTransitionStatus:d_,useFormState:HE,useActionState:HE,useOptimistic:function(t,e){var n=Je();return eb(n,Te,t,e)},useMemoCache:o_,useCacheRefresh:yb};m_.useEffectEvent=ab;var Ib={readContext:Ct,use:kd,useCallback:hb,useContext:Ct,useEffect:u_,useImperativeHandle:cb,useInsertionEffect:ob,useLayoutEffect:lb,useMemo:db,useReducer:hm,useRef:sb,useState:function(){return hm(Ni)},useDebugValue:c_,useDeferredValue:function(t,e){var n=Je();return Te===null?h_(n,t,e):fb(n,Te.memoizedState,t,e)},useTransition:function(){var t=hm(Ni)[0],e=Je().memoizedState;return[typeof t=="boolean"?t:qu(t),e]},useSyncExternalStore:$A,useId:_b,useHostTransitionStatus:d_,useFormState:KE,useActionState:KE,useOptimistic:function(t,e){var n=Je();return Te!==null?eb(n,Te,t,e):(n.baseState=t,[t,n.queue.dispatch])},useMemoCache:o_,useCacheRefresh:yb};Ib.useEffectEvent=ab;function dm(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ip={enqueueSetState:function(t,e,n){t=t._reactInternals;var i=_n(),r=mr(i);r.payload=e,n!=null&&(r.callback=n),e=pr(t,r,i),e!==null&&(nn(e,t,i),kl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=_n(),r=mr(i);r.tag=1,r.payload=e,n!=null&&(r.callback=n),e=pr(t,r,i),e!==null&&(nn(e,t,i),kl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=_n(),i=mr(n);i.tag=2,e!=null&&(i.callback=e),e=pr(t,i,n),e!==null&&(nn(e,t,n),kl(e,t,n))}};function $E(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!iu(n,i)||!iu(r,s):!0}function YE(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ip.enqueueReplaceState(e,e.state,null)}function Ss(t,e){var n=e;if("ref"in e){n={};for(var i in e)i!=="ref"&&(n[i]=e[i])}if(t=t.defaultProps){n===e&&(n=Ve({},n));for(var r in t)n[r]===void 0&&(n[r]=t[r])}return n}function Ab(t){Vh(t)}function bb(t){console.error(t)}function Sb(t){Vh(t)}function jh(t,e){try{var n=t.onUncaughtError;n(e.value,{componentStack:e.stack})}catch(i){setTimeout(function(){throw i})}}function XE(t,e,n){try{var i=t.onCaughtError;i(n.value,{componentStack:n.stack,errorBoundary:e.tag===1?e.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function Ap(t,e,n){return n=mr(n),n.tag=3,n.payload={element:null},n.callback=function(){jh(t,e)},n}function Rb(t){return t=mr(t),t.tag=3,t}function Cb(t,e,n,i){var r=n.type.getDerivedStateFromError;if(typeof r=="function"){var s=i.value;t.payload=function(){return r(s)},t.callback=function(){XE(e,n,i)}}var a=n.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(t.callback=function(){XE(e,n,i),typeof r!="function"&&(gr===null?gr=new Set([this]):gr.add(this));var o=i.stack;this.componentDidCatch(i.value,{componentStack:o!==null?o:""})})}function nO(t,e,n,i,r){if(n.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(e=n.alternate,e!==null&&bo(e,n,r,!0),n=En.current,n!==null){switch(n.tag){case 31:case 13:return Nn===null?Qh():n.alternate===null&&qe===0&&(qe=3),n.flags&=-257,n.flags|=65536,n.lanes=r,i===Lh?n.flags|=16384:(e=n.updateQueue,e===null?n.updateQueue=new Set([i]):e.add(i),Im(t,i,r)),!1;case 22:return n.flags|=65536,i===Lh?n.flags|=16384:(e=n.updateQueue,e===null?(e={transitions:null,markerInstances:null,retryQueue:new Set([i])},n.updateQueue=e):(n=e.retryQueue,n===null?e.retryQueue=new Set([i]):n.add(i)),Im(t,i,r)),!1}throw Error(U(435,n.tag))}return Im(t,i,r),Qh(),!1}if(he)return e=En.current,e!==null?(!(e.flags&65536)&&(e.flags|=256),e.flags|=65536,e.lanes=r,i!==hp&&(t=Error(U(422),{cause:i}),su(Rn(t,n)))):(i!==hp&&(e=Error(U(423),{cause:i}),su(Rn(e,n))),t=t.current.alternate,t.flags|=65536,r&=-r,t.lanes|=r,i=Rn(i,n),r=Ap(t.stateNode,i,r),cm(t,r),qe!==4&&(qe=2)),!1;var s=Error(U(520),{cause:i});if(s=Rn(s,n),jl===null?jl=[s]:jl.push(s),qe!==4&&(qe=2),e===null)return!0;i=Rn(i,n),n=e;do{switch(n.tag){case 3:return n.flags|=65536,t=r&-r,n.lanes|=t,t=Ap(n.stateNode,i,t),cm(n,t),!1;case 1:if(e=n.type,s=n.stateNode,(n.flags&128)===0&&(typeof e.getDerivedStateFromError=="function"||s!==null&&typeof s.componentDidCatch=="function"&&(gr===null||!gr.has(s))))return n.flags|=65536,r&=-r,n.lanes|=r,r=Rb(r),Cb(r,t,n,i),cm(n,r),!1}n=n.return}while(n!==null);return!1}var p_=Error(U(461)),at=!1;function It(t,e,n,i){e.child=t===null?jA(e,null,n,i):As(e,t.child,n,i)}function WE(t,e,n,i,r){n=n.render;var s=e.ref;if("ref"in i){var a={};for(var o in i)o!=="ref"&&(a[o]=i[o])}else a=i;return Is(e),i=i_(t,e,n,a,s,r),o=r_(),t!==null&&!at?(s_(t,e,r),Oi(t,e,r)):(he&&o&&Yg(e),e.flags|=1,It(t,e,i,r),e.child)}function JE(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!$g(s)&&s.defaultProps===void 0&&n.compare===null?(e.tag=15,e.type=s,Db(t,e,s,i,r)):(t=rh(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!g_(t,r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:iu,n(a,i)&&t.ref===e.ref)return Oi(t,e,r)}return e.flags|=1,t=Ai(s,i),t.ref=e.ref,t.return=e,e.child=t}function Db(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(iu(s,i)&&t.ref===e.ref)if(at=!1,e.pendingProps=i=s,g_(t,r))t.flags&131072&&(at=!0);else return e.lanes=t.lanes,Oi(t,e,r)}return bp(t,e,n,i,r)}function Nb(t,e,n,i){var r=i.children,s=t!==null?t.memoizedState:null;if(t===null&&e.stateNode===null&&(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if(e.flags&128){if(s=s!==null?s.baseLanes|n:n,t!==null){for(i=e.child=t.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~s}else i=0,e.child=null;return ZE(t,e,s,n,i)}if(n&536870912)e.memoizedState={baseLanes:0,cachePool:null},t!==null&&sh(e,s!==null?s.cachePool:null),s!==null?FE(e,s):yp(),HA(e);else return i=e.lanes=536870912,ZE(t,e,s!==null?s.baseLanes|n:n,n,i)}else s!==null?(sh(e,s.cachePool),FE(e,s),tr(),e.memoizedState=null):(t!==null&&sh(e,null),yp(),tr());return It(t,e,r,n),e.child}function wl(t,e){return t!==null&&t.tag===22||e.stateNode!==null||(e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),e.sibling}function ZE(t,e,n,i,r){var s=Jg();return s=s===null?null:{parent:st._currentValue,pool:s},e.memoizedState={baseLanes:n,cachePool:s},t!==null&&sh(e,null),yp(),HA(e),t!==null&&bo(t,e,i,!0),e.childLanes=r,null}function lh(t,e){return e=qh({mode:e.mode,children:e.children},t.mode),e.ref=t.ref,t.child=e,e.return=t,e}function eT(t,e,n){return As(e,t.child,null,n),t=lh(e,e.pendingProps),t.flags|=2,un(e),e.memoizedState=null,t}function iO(t,e,n){var i=e.pendingProps,r=(e.flags&128)!==0;if(e.flags&=-129,t===null){if(he){if(i.mode==="hidden")return t=lh(e,i),e.lanes=536870912,wl(null,t);if(vp(e),(t=Ne)?(t=wS(t,Cn),t=t!==null&&t.data==="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ir!==null?{id:Qn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},n=MA(t),n.return=e,e.child=n,St=e,Ne=null)):t=null,t===null)throw Ar(e);return e.lanes=536870912,null}return lh(e,i)}var s=t.memoizedState;if(s!==null){var a=s.dehydrated;if(vp(e),r)if(e.flags&256)e.flags&=-257,e=eT(t,e,n);else if(e.memoizedState!==null)e.child=t.child,e.flags|=128,e=null;else throw Error(U(558));else if(at||bo(t,e,n,!1),r=(n&t.childLanes)!==0,at||r){if(i=Ae,i!==null&&(a=oA(i,n),a!==0&&a!==s.retryLane))throw s.retryLane=a,qs(t,a),nn(i,t,a),p_;Qh(),e=eT(t,e,n)}else t=s.treeContext,Ne=On(a.nextSibling),St=e,he=!0,fr=null,Cn=!1,t!==null&&LA(e,t),e=lh(e,i),e.flags|=4096;return e}return t=Ai(t.child,{mode:i.mode,children:i.children}),t.ref=e.ref,e.child=t,t.return=e,t}function uh(t,e){var n=e.ref;if(n===null)t!==null&&t.ref!==null&&(e.flags|=4194816);else{if(typeof n!="function"&&typeof n!="object")throw Error(U(284));(t===null||t.ref!==n)&&(e.flags|=4194816)}}function bp(t,e,n,i,r){return Is(e),n=i_(t,e,n,i,void 0,r),i=r_(),t!==null&&!at?(s_(t,e,r),Oi(t,e,r)):(he&&i&&Yg(e),e.flags|=1,It(t,e,n,r),e.child)}function tT(t,e,n,i,r,s){return Is(e),e.updateQueue=null,n=QA(e,i,n,r),KA(t),i=r_(),t!==null&&!at?(s_(t,e,s),Oi(t,e,s)):(he&&i&&Yg(e),e.flags|=1,It(t,e,n,s),e.child)}function nT(t,e,n,i,r){if(Is(e),e.stateNode===null){var s=Sa,a=n.contextType;typeof a=="object"&&a!==null&&(s=Ct(a)),s=new n(i,s),e.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ip,e.stateNode=s,s._reactInternals=e,s=e.stateNode,s.props=i,s.state=e.memoizedState,s.refs={},e_(e),a=n.contextType,s.context=typeof a=="object"&&a!==null?Ct(a):Sa,s.state=e.memoizedState,a=n.getDerivedStateFromProps,typeof a=="function"&&(dm(e,n,a,i),s.state=e.memoizedState),typeof n.getDerivedStateFromProps=="function"||typeof s.getSnapshotBeforeUpdate=="function"||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(a=s.state,typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount(),a!==s.state&&Ip.enqueueReplaceState(s,s.state,null),Ul(e,i,s,r),Ll(),s.state=e.memoizedState),typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!0}else if(t===null){s=e.stateNode;var o=e.memoizedProps,u=Ss(n,o);s.props=u;var c=s.context,d=n.contextType;a=Sa,typeof d=="object"&&d!==null&&(a=Ct(d));var f=n.getDerivedStateFromProps;d=typeof f=="function"||typeof s.getSnapshotBeforeUpdate=="function",o=e.pendingProps!==o,d||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(o||c!==a)&&YE(e,s,i,a),Ji=!1;var p=e.memoizedState;s.state=p,Ul(e,i,s,r),Ll(),c=e.memoizedState,o||p!==c||Ji?(typeof f=="function"&&(dm(e,n,f,i),c=e.memoizedState),(u=Ji||$E(e,n,u,i,p,c,a))?(d||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=c),s.props=i,s.state=c,s.context=a,i=u):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{s=e.stateNode,gp(t,e),a=e.memoizedProps,d=Ss(n,a),s.props=d,f=e.pendingProps,p=s.context,c=n.contextType,u=Sa,typeof c=="object"&&c!==null&&(u=Ct(c)),o=n.getDerivedStateFromProps,(c=typeof o=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||p!==u)&&YE(e,s,i,u),Ji=!1,p=e.memoizedState,s.state=p,Ul(e,i,s,r),Ll();var g=e.memoizedState;a!==f||p!==g||Ji||t!==null&&t.dependencies!==null&&kh(t.dependencies)?(typeof o=="function"&&(dm(e,n,o,i),g=e.memoizedState),(d=Ji||$E(e,n,d,i,p,g,u)||t!==null&&t.dependencies!==null&&kh(t.dependencies))?(c||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(i,g,u),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(i,g,u)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),s.props=i,s.state=g,s.context=u,i=d):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&p===t.memoizedState||(e.flags|=1024),i=!1)}return s=i,uh(t,e),i=(e.flags&128)!==0,s||i?(s=e.stateNode,n=i&&typeof n.getDerivedStateFromError!="function"?null:s.render(),e.flags|=1,t!==null&&i?(e.child=As(e,t.child,null,r),e.child=As(e,null,n,r)):It(t,e,n,r),e.memoizedState=s.state,t=e.child):t=Oi(t,e,r),t}function iT(t,e,n,i){return ws(),e.flags|=256,It(t,e,n,i),e.child}var fm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function mm(t){return{baseLanes:t,cachePool:zA()}}function pm(t,e,n){return t=t!==null?t.childLanes&~n:0,e&&(t|=dn),t}function Ob(t,e,n){var i=e.pendingProps,r=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(Xe.current&2)!==0),a&&(r=!0,e.flags&=-129),a=(e.flags&32)!==0,e.flags&=-33,t===null){if(he){if(r?er(e):tr(),(t=Ne)?(t=wS(t,Cn),t=t!==null&&t.data!=="&"?t:null,t!==null&&(e.memoizedState={dehydrated:t,treeContext:Ir!==null?{id:Qn,overflow:$n}:null,retryLane:536870912,hydrationErrors:null},n=MA(t),n.return=e,e.child=n,St=e,Ne=null)):t=null,t===null)throw Ar(e);return zp(t)?e.lanes=32:e.lanes=536870912,null}var o=i.children;return i=i.fallback,r?(tr(),r=e.mode,o=qh({mode:"hidden",children:o},r),i=ps(i,r,n,null),o.return=e,i.return=e,o.sibling=i,e.child=o,i=e.child,i.memoizedState=mm(n),i.childLanes=pm(t,a,n),e.memoizedState=fm,wl(null,i)):(er(e),Sp(e,o))}var u=t.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(s)e.flags&256?(er(e),e.flags&=-257,e=gm(t,e,n)):e.memoizedState!==null?(tr(),e.child=t.child,e.flags|=128,e=null):(tr(),o=i.fallback,r=e.mode,i=qh({mode:"visible",children:i.children},r),o=ps(o,r,n,null),o.flags|=2,i.return=e,o.return=e,i.sibling=o,e.child=i,As(e,t.child,null,n),i=e.child,i.memoizedState=mm(n),i.childLanes=pm(t,a,n),e.memoizedState=fm,e=wl(null,i));else if(er(e),zp(o)){if(a=o.nextSibling&&o.nextSibling.dataset,a)var c=a.dgst;a=c,i=Error(U(419)),i.stack="",i.digest=a,su({value:i,source:null,stack:null}),e=gm(t,e,n)}else if(at||bo(t,e,n,!1),a=(n&t.childLanes)!==0,at||a){if(a=Ae,a!==null&&(i=oA(a,n),i!==0&&i!==u.retryLane))throw u.retryLane=i,qs(t,i),nn(a,t,i),p_;Up(o)||Qh(),e=gm(t,e,n)}else Up(o)?(e.flags|=192,e.child=t.child,e=null):(t=u.treeContext,Ne=On(o.nextSibling),St=e,he=!0,fr=null,Cn=!1,t!==null&&LA(e,t),e=Sp(e,i.children),e.flags|=4096);return e}return r?(tr(),o=i.fallback,r=e.mode,u=t.child,c=u.sibling,i=Ai(u,{mode:"hidden",children:i.children}),i.subtreeFlags=u.subtreeFlags&65011712,c!==null?o=Ai(c,o):(o=ps(o,r,n,null),o.flags|=2),o.return=e,i.return=e,i.sibling=o,e.child=i,wl(null,i),i=e.child,o=t.child.memoizedState,o===null?o=mm(n):(r=o.cachePool,r!==null?(u=st._currentValue,r=r.parent!==u?{parent:u,pool:u}:r):r=zA(),o={baseLanes:o.baseLanes|n,cachePool:r}),i.memoizedState=o,i.childLanes=pm(t,a,n),e.memoizedState=fm,wl(t.child,i)):(er(e),n=t.child,t=n.sibling,n=Ai(n,{mode:"visible",children:i.children}),n.return=e,n.sibling=null,t!==null&&(a=e.deletions,a===null?(e.deletions=[t],e.flags|=16):a.push(t)),e.child=n,e.memoizedState=null,n)}function Sp(t,e){return e=qh({mode:"visible",children:e},t.mode),e.return=t,t.child=e}function qh(t,e){return t=hn(22,t,null,e),t.lanes=0,t}function gm(t,e,n){return As(e,t.child,null,n),t=Sp(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function rT(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),fp(t.return,e,n)}function _m(t,e,n,i,r,s){var a=t.memoizedState;a===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r,treeForkCount:s}:(a.isBackwards=e,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=n,a.tailMode=r,a.treeForkCount=s)}function Pb(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;i=i.children;var a=Xe.current,o=(a&2)!==0;if(o?(a=a&1|2,e.flags|=128):a&=1,be(Xe,a),It(t,e,i,n),i=he?ru:0,!o&&t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&rT(t,n,e);else if(t.tag===19)rT(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&zh(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),_m(e,!1,r,n,s,i);break;case"backwards":case"unstable_legacy-backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&zh(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}_m(e,!0,n,null,s,i);break;case"together":_m(e,!1,null,null,void 0,i);break;default:e.memoizedState=null}return e.child}function Oi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Sr|=e.lanes,!(n&e.childLanes))if(t!==null){if(bo(t,e,n,!1),(n&e.childLanes)===0)return null}else return null;if(t!==null&&e.child!==t.child)throw Error(U(153));if(e.child!==null){for(t=e.child,n=Ai(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ai(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function g_(t,e){return t.lanes&e?!0:(t=t.dependencies,!!(t!==null&&kh(t)))}function rO(t,e,n){switch(e.tag){case 3:Dh(e,e.stateNode.containerInfo),Zi(e,st,t.memoizedState.cache),ws();break;case 27:case 5:ep(e);break;case 4:Dh(e,e.stateNode.containerInfo);break;case 10:Zi(e,e.type,e.memoizedProps.value);break;case 31:if(e.memoizedState!==null)return e.flags|=128,vp(e),null;break;case 13:var i=e.memoizedState;if(i!==null)return i.dehydrated!==null?(er(e),e.flags|=128,null):n&e.child.childLanes?Ob(t,e,n):(er(e),t=Oi(t,e,n),t!==null?t.sibling:null);er(e);break;case 19:var r=(t.flags&128)!==0;if(i=(n&e.childLanes)!==0,i||(bo(t,e,n,!1),i=(n&e.childLanes)!==0),r){if(i)return Pb(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),be(Xe,Xe.current),i)break;return null;case 22:return e.lanes=0,Nb(t,e,n,e.pendingProps);case 24:Zi(e,st,t.memoizedState.cache)}return Oi(t,e,n)}function Vb(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps)at=!0;else{if(!g_(t,n)&&!(e.flags&128))return at=!1,rO(t,e,n);at=!!(t.flags&131072)}else at=!1,he&&e.flags&1048576&&kA(e,ru,e.index);switch(e.lanes=0,e.tag){case 16:e:{var i=e.pendingProps;if(t=es(e.elementType),e.type=t,typeof t=="function")$g(t)?(i=Ss(t,i),e.tag=1,e=nT(null,e,t,i,n)):(e.tag=0,e=bp(null,e,t,i,n));else{if(t!=null){var r=t.$$typeof;if(r===xg){e.tag=11,e=WE(null,e,t,i,n);break e}else if(r===Mg){e.tag=14,e=JE(null,e,t,i,n);break e}}throw e=Jm(t)||t,Error(U(306,e,""))}}return e;case 0:return bp(t,e,e.type,e.pendingProps,n);case 1:return i=e.type,r=Ss(i,e.pendingProps),nT(t,e,i,r,n);case 3:e:{if(Dh(e,e.stateNode.containerInfo),t===null)throw Error(U(387));i=e.pendingProps;var s=e.memoizedState;r=s.element,gp(t,e),Ul(e,i,null,n);var a=e.memoizedState;if(i=a.cache,Zi(e,st,i),i!==s.cache&&mp(e,[st],n,!0),Ll(),i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){e=iT(t,e,i,n);break e}else if(i!==r){r=Rn(Error(U(424)),e),su(r),e=iT(t,e,i,n);break e}else{switch(t=e.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Ne=On(t.firstChild),St=e,he=!0,fr=null,Cn=!0,n=jA(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(ws(),i===r){e=Oi(t,e,n);break e}It(t,e,i,n)}e=e.child}return e;case 26:return uh(t,e),t===null?(n=AT(e.type,null,e.pendingProps,null))?e.memoizedState=n:he||(n=e.type,t=e.pendingProps,i=Wh(dr.current).createElement(n),i[bt]=e,i[rn]=t,Dt(i,n,t),pt(i),e.stateNode=i):e.memoizedState=AT(e.type,t.memoizedProps,e.pendingProps,t.memoizedState),null;case 27:return ep(e),t===null&&he&&(i=e.stateNode=IS(e.type,e.pendingProps,dr.current),St=e,Cn=!0,r=Ne,zr(e.type)?(Bp=r,Ne=On(i.firstChild)):Ne=r),It(t,e,e.pendingProps.children,n),uh(t,e),t===null&&(e.flags|=4194304),e.child;case 5:return t===null&&he&&((r=i=Ne)&&(i=xO(i,e.type,e.pendingProps,Cn),i!==null?(e.stateNode=i,St=e,Ne=On(i.firstChild),Cn=!1,r=!0):r=!1),r||Ar(e)),ep(e),r=e.type,s=e.pendingProps,a=t!==null?t.memoizedProps:null,i=s.children,kp(r,s)?i=null:a!==null&&kp(r,a)&&(e.flags|=32),e.memoizedState!==null&&(r=i_(t,e,YN,null,null,n),hu._currentValue=r),uh(t,e),It(t,e,i,n),e.child;case 6:return t===null&&he&&((t=n=Ne)&&(n=MO(n,e.pendingProps,Cn),n!==null?(e.stateNode=n,St=e,Ne=null,t=!0):t=!1),t||Ar(e)),null;case 13:return Ob(t,e,n);case 4:return Dh(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):It(t,e,i,n),e.child;case 11:return WE(t,e,e.type,e.pendingProps,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:return i=e.pendingProps,Zi(e,e.type,i.value),It(t,e,i.children,n),e.child;case 9:return r=e.type._context,i=e.pendingProps.children,Is(e),r=Ct(r),i=i(r),e.flags|=1,It(t,e,i,n),e.child;case 14:return JE(t,e,e.type,e.pendingProps,n);case 15:return Db(t,e,e.type,e.pendingProps,n);case 19:return Pb(t,e,n);case 31:return iO(t,e,n);case 22:return Nb(t,e,n,e.pendingProps);case 24:return Is(e),i=Ct(st),t===null?(r=Jg(),r===null&&(r=Ae,s=Wg(),r.pooledCache=s,s.refCount++,s!==null&&(r.pooledCacheLanes|=n),r=s),e.memoizedState={parent:i,cache:r},e_(e),Zi(e,st,r)):(t.lanes&n&&(gp(t,e),Ul(e,null,null,n),Ll()),r=t.memoizedState,s=e.memoizedState,r.parent!==i?(r={parent:i,cache:i},e.memoizedState=r,e.lanes===0&&(e.memoizedState=e.updateQueue.baseState=r),Zi(e,st,i)):(i=s.cache,Zi(e,st,i),i!==r.cache&&mp(e,[st],n,!0))),It(t,e,e.pendingProps.children,n),e.child;case 29:throw e.pendingProps}throw Error(U(156,e.tag))}function hi(t){t.flags|=4}function ym(t,e,n,i,r){if((e=(t.mode&32)!==0)&&(e=!1),e){if(t.flags|=16777216,(r&335544128)===r)if(t.stateNode.complete)t.flags|=8192;else if(iS())t.flags|=8192;else throw _s=Lh,Zg}else t.flags&=-16777217}function sT(t,e){if(e.type!=="stylesheet"||e.state.loading&4)t.flags&=-16777217;else if(t.flags|=16777216,!SS(e))if(iS())t.flags|=8192;else throw _s=Lh,Zg}function Fc(t,e){e!==null&&(t.flags|=4),t.flags&16384&&(e=t.tag!==22?rA():536870912,t.lanes|=e,Ja|=e)}function ol(t,e){if(!he)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function De(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function sO(t,e,n){var i=e.pendingProps;switch(Xg(e),e.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return De(e),null;case 1:return De(e),null;case 3:return n=e.stateNode,i=null,t!==null&&(i=t.memoizedState.cache),e.memoizedState.cache!==i&&(e.flags|=2048),bi(st),Ka(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(t===null||t.child===null)&&(ia(e)?hi(e):t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,um())),De(e),null;case 26:var r=e.type,s=e.memoizedState;return t===null?(hi(e),s!==null?(De(e),sT(e,s)):(De(e),ym(e,r,null,i,n))):s?s!==t.memoizedState?(hi(e),De(e),sT(e,s)):(De(e),e.flags&=-16777217):(t=t.memoizedProps,t!==i&&hi(e),De(e),ym(e,r,t,i,n)),null;case 27:if(Nh(e),n=dr.current,r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&hi(e);else{if(!i){if(e.stateNode===null)throw Error(U(166));return De(e),null}t=Zn.current,ia(e)?xE(e):(t=IS(r,i,n),e.stateNode=t,hi(e))}return De(e),null;case 5:if(Nh(e),r=e.type,t!==null&&e.stateNode!=null)t.memoizedProps!==i&&hi(e);else{if(!i){if(e.stateNode===null)throw Error(U(166));return De(e),null}if(s=Zn.current,ia(e))xE(e);else{var a=Wh(dr.current);switch(s){case 1:s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":s=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":s=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":s=a.createElement("div"),s.innerHTML="<script><\/script>",s=s.removeChild(s.firstChild);break;case"select":s=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?s.multiple=!0:i.size&&(s.size=i.size);break;default:s=typeof i.is=="string"?a.createElement(r,{is:i.is}):a.createElement(r)}}s[bt]=e,s[rn]=i;e:for(a=e.child;a!==null;){if(a.tag===5||a.tag===6)s.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===e)break e;for(;a.sibling===null;){if(a.return===null||a.return===e)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}e.stateNode=s;e:switch(Dt(s,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&hi(e)}}return De(e),ym(e,e.type,t===null?null:t.memoizedProps,e.pendingProps,n),null;case 6:if(t&&e.stateNode!=null)t.memoizedProps!==i&&hi(e);else{if(typeof i!="string"&&e.stateNode===null)throw Error(U(166));if(t=dr.current,ia(e)){if(t=e.stateNode,n=e.memoizedProps,i=null,r=St,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}t[bt]=e,t=!!(t.nodeValue===n||i!==null&&i.suppressHydrationWarning===!0||vS(t.nodeValue,n)),t||Ar(e,!0)}else t=Wh(t).createTextNode(i),t[bt]=e,e.stateNode=t}return De(e),null;case 31:if(n=e.memoizedState,t===null||t.memoizedState!==null){if(i=ia(e),n!==null){if(t===null){if(!i)throw Error(U(318));if(t=e.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(U(557));t[bt]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),t=!1}else n=um(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=n),t=!0;if(!t)return e.flags&256?(un(e),e):(un(e),null);if(e.flags&128)throw Error(U(558))}return De(e),null;case 13:if(i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(r=ia(e),i!==null&&i.dehydrated!==null){if(t===null){if(!r)throw Error(U(318));if(r=e.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(U(317));r[bt]=e}else ws(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;De(e),r=!1}else r=um(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=r),r=!0;if(!r)return e.flags&256?(un(e),e):(un(e),null)}return un(e),e.flags&128?(e.lanes=n,e):(n=i!==null,t=t!==null&&t.memoizedState!==null,n&&(i=e.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),s=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(s=i.memoizedState.cachePool.pool),s!==r&&(i.flags|=2048)),n!==t&&n&&(e.child.flags|=8192),Fc(e,e.updateQueue),De(e),null);case 4:return Ka(),t===null&&I_(e.stateNode.containerInfo),De(e),null;case 10:return bi(e.type),De(e),null;case 19:if(gt(Xe),i=e.memoizedState,i===null)return De(e),null;if(r=(e.flags&128)!==0,s=i.rendering,s===null)if(r)ol(i,!1);else{if(qe!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=zh(t),s!==null){for(e.flags|=128,ol(i,!1),t=s.updateQueue,e.updateQueue=t,Fc(e,t),e.subtreeFlags=0,t=n,n=e.child;n!==null;)xA(n,t),n=n.sibling;return be(Xe,Xe.current&1|2),he&&pi(e,i.treeForkCount),e.child}t=t.sibling}i.tail!==null&&mn()>Hh&&(e.flags|=128,r=!0,ol(i,!1),e.lanes=4194304)}else{if(!r)if(t=zh(s),t!==null){if(e.flags|=128,r=!0,t=t.updateQueue,e.updateQueue=t,Fc(e,t),ol(i,!0),i.tail===null&&i.tailMode==="hidden"&&!s.alternate&&!he)return De(e),null}else 2*mn()-i.renderingStartTime>Hh&&n!==536870912&&(e.flags|=128,r=!0,ol(i,!1),e.lanes=4194304);i.isBackwards?(s.sibling=e.child,e.child=s):(t=i.last,t!==null?t.sibling=s:e.child=s,i.last=s)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=mn(),t.sibling=null,n=Xe.current,be(Xe,r?n&1|2:n&1),he&&pi(e,i.treeForkCount),t):(De(e),null);case 22:case 23:return un(e),t_(),i=e.memoizedState!==null,t!==null?t.memoizedState!==null!==i&&(e.flags|=8192):i&&(e.flags|=8192),i?n&536870912&&!(e.flags&128)&&(De(e),e.subtreeFlags&6&&(e.flags|=8192)):De(e),n=e.updateQueue,n!==null&&Fc(e,n.retryQueue),n=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),i=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(i=e.memoizedState.cachePool.pool),i!==n&&(e.flags|=2048),t!==null&&gt(gs),null;case 24:return n=null,t!==null&&(n=t.memoizedState.cache),e.memoizedState.cache!==n&&(e.flags|=2048),bi(st),De(e),null;case 25:return null;case 30:return null}throw Error(U(156,e.tag))}function aO(t,e){switch(Xg(e),e.tag){case 1:return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return bi(st),Ka(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 26:case 27:case 5:return Nh(e),null;case 31:if(e.memoizedState!==null){if(un(e),e.alternate===null)throw Error(U(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 13:if(un(e),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(U(340));ws()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(Xe),null;case 4:return Ka(),null;case 10:return bi(e.type),null;case 22:case 23:return un(e),t_(),t!==null&&gt(gs),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 24:return bi(st),null;case 25:return null;default:return null}}function xb(t,e){switch(Xg(e),e.tag){case 3:bi(st),Ka();break;case 26:case 27:case 5:Nh(e);break;case 4:Ka();break;case 31:e.memoizedState!==null&&un(e);break;case 13:un(e);break;case 19:gt(Xe);break;case 10:bi(e.type);break;case 22:case 23:un(e),t_(),t!==null&&gt(gs);break;case 24:bi(st)}}function Gu(t,e){try{var n=e.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var r=i.next;n=r;do{if((n.tag&t)===t){i=void 0;var s=n.create,a=n.inst;i=s(),a.destroy=i}n=n.next}while(n!==r)}}catch(o){ye(e,e.return,o)}}function br(t,e,n){try{var i=e.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var s=r.next;i=s;do{if((i.tag&t)===t){var a=i.inst,o=a.destroy;if(o!==void 0){a.destroy=void 0,r=e;var u=n,c=o;try{c()}catch(d){ye(r,u,d)}}}i=i.next}while(i!==s)}}catch(d){ye(e,e.return,d)}}function Mb(t){var e=t.updateQueue;if(e!==null){var n=t.stateNode;try{GA(e,n)}catch(i){ye(t,t.return,i)}}}function kb(t,e,n){n.props=Ss(t.type,t.memoizedProps),n.state=t.memoizedState;try{n.componentWillUnmount()}catch(i){ye(t,e,i)}}function Bl(t,e){try{var n=t.ref;if(n!==null){switch(t.tag){case 26:case 27:case 5:var i=t.stateNode;break;case 30:i=t.stateNode;break;default:i=t.stateNode}typeof n=="function"?t.refCleanup=n(i):n.current=i}}catch(r){ye(t,e,r)}}function Yn(t,e){var n=t.ref,i=t.refCleanup;if(n!==null)if(typeof i=="function")try{i()}catch(r){ye(t,e,r)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof n=="function")try{n(null)}catch(r){ye(t,e,r)}else n.current=null}function Lb(t){var e=t.type,n=t.memoizedProps,i=t.stateNode;try{e:switch(e){case"button":case"input":case"select":case"textarea":n.autoFocus&&i.focus();break e;case"img":n.src?i.src=n.src:n.srcSet&&(i.srcset=n.srcSet)}}catch(r){ye(t,t.return,r)}}function vm(t,e,n){try{var i=t.stateNode;CO(i,t.type,n,e),i[rn]=e}catch(r){ye(t,t.return,r)}}function Ub(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&zr(t.type)||t.tag===4}function Em(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Ub(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&zr(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Rp(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?(n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n).insertBefore(t,e):(e=n.nodeType===9?n.body:n.nodeName==="HTML"?n.ownerDocument.body:n,e.appendChild(t),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vi));else if(i!==4&&(i===27&&zr(t.type)&&(n=t.stateNode,e=null),t=t.child,t!==null))for(Rp(t,e,n),t=t.sibling;t!==null;)Rp(t,e,n),t=t.sibling}function Gh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(i===27&&zr(t.type)&&(n=t.stateNode),t=t.child,t!==null))for(Gh(t,e,n),t=t.sibling;t!==null;)Gh(t,e,n),t=t.sibling}function zb(t){var e=t.stateNode,n=t.memoizedProps;try{for(var i=t.type,r=e.attributes;r.length;)e.removeAttributeNode(r[0]);Dt(e,i,n),e[bt]=t,e[rn]=n}catch(s){ye(t,t.return,s)}}var _i=!1,rt=!1,Tm=!1,aT=typeof WeakSet=="function"?WeakSet:Set,ft=null;function oO(t,e){if(t=t.containerInfo,xp=td,t=SA(t),Hg(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,u=-1,c=0,d=0,f=t,p=null;t:for(;;){for(var g;f!==n||r!==0&&f.nodeType!==3||(o=a+r),f!==s||i!==0&&f.nodeType!==3||(u=a+i),f.nodeType===3&&(a+=f.nodeValue.length),(g=f.firstChild)!==null;)p=f,f=g;for(;;){if(f===t)break t;if(p===n&&++c===r&&(o=a),p===s&&++d===i&&(u=a),(g=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=g}n=o===-1||u===-1?null:{start:o,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Mp={focusedElem:t,selectionRange:n},td=!1,ft=e;ft!==null;)if(e=ft,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,ft=t;else for(;ft!==null;){switch(e=ft,s=e.alternate,t=e.flags,e.tag){case 0:if(t&4&&(t=e.updateQueue,t=t!==null?t.events:null,t!==null))for(n=0;n<t.length;n++)r=t[n],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if(t&1024&&s!==null){t=void 0,n=e,r=s.memoizedProps,s=s.memoizedState,i=n.stateNode;try{var R=Ss(n.type,r);t=i.getSnapshotBeforeUpdate(R,s),i.__reactInternalSnapshotBeforeUpdate=t}catch(N){ye(n,n.return,N)}}break;case 3:if(t&1024){if(t=e.stateNode.containerInfo,n=t.nodeType,n===9)Lp(t);else if(n===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Lp(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(t&1024)throw Error(U(163))}if(t=e.sibling,t!==null){t.return=e.return,ft=t;break}ft=e.return}}function Bb(t,e,n){var i=n.flags;switch(n.tag){case 0:case 11:case 15:fi(t,n),i&4&&Gu(5,n);break;case 1:if(fi(t,n),i&4)if(t=n.stateNode,e===null)try{t.componentDidMount()}catch(a){ye(n,n.return,a)}else{var r=Ss(n.type,e.memoizedProps);e=e.memoizedState;try{t.componentDidUpdate(r,e,t.__reactInternalSnapshotBeforeUpdate)}catch(a){ye(n,n.return,a)}}i&64&&Mb(n),i&512&&Bl(n,n.return);break;case 3:if(fi(t,n),i&64&&(t=n.updateQueue,t!==null)){if(e=null,n.child!==null)switch(n.child.tag){case 27:case 5:e=n.child.stateNode;break;case 1:e=n.child.stateNode}try{GA(t,e)}catch(a){ye(n,n.return,a)}}break;case 27:e===null&&i&4&&zb(n);case 26:case 5:fi(t,n),e===null&&i&4&&Lb(n),i&512&&Bl(n,n.return);break;case 12:fi(t,n);break;case 31:fi(t,n),i&4&&qb(t,n);break;case 13:fi(t,n),i&4&&Gb(t,n),i&64&&(t=n.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(n=gO.bind(null,n),kO(t,n))));break;case 22:if(i=n.memoizedState!==null||_i,!i){e=e!==null&&e.memoizedState!==null||rt,r=_i;var s=rt;_i=i,(rt=e)&&!s?mi(t,n,(n.subtreeFlags&8772)!==0):fi(t,n),_i=r,rt=s}break;case 30:break;default:fi(t,n)}}function Fb(t){var e=t.alternate;e!==null&&(t.alternate=null,Fb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&zg(e)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var xe=null,$t=!1;function di(t,e,n){for(n=n.child;n!==null;)jb(t,e,n),n=n.sibling}function jb(t,e,n){if(pn&&typeof pn.onCommitFiberUnmount=="function")try{pn.onCommitFiberUnmount(Lu,n)}catch{}switch(n.tag){case 26:rt||Yn(n,e),di(t,e,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:rt||Yn(n,e);var i=xe,r=$t;zr(n.type)&&(xe=n.stateNode,$t=!1),di(t,e,n),Gl(n.stateNode),xe=i,$t=r;break;case 5:rt||Yn(n,e);case 6:if(i=xe,r=$t,xe=null,di(t,e,n),xe=i,$t=r,xe!==null)if($t)try{(xe.nodeType===9?xe.body:xe.nodeName==="HTML"?xe.ownerDocument.body:xe).removeChild(n.stateNode)}catch(s){ye(n,e,s)}else try{xe.removeChild(n.stateNode)}catch(s){ye(n,e,s)}break;case 18:xe!==null&&($t?(t=xe,vT(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,n.stateNode),no(t)):vT(xe,n.stateNode));break;case 4:i=xe,r=$t,xe=n.stateNode.containerInfo,$t=!0,di(t,e,n),xe=i,$t=r;break;case 0:case 11:case 14:case 15:br(2,n,e),rt||br(4,n,e),di(t,e,n);break;case 1:rt||(Yn(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"&&kb(n,e,i)),di(t,e,n);break;case 21:di(t,e,n);break;case 22:rt=(i=rt)||n.memoizedState!==null,di(t,e,n),rt=i;break;default:di(t,e,n)}}function qb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{no(t)}catch(n){ye(e,e.return,n)}}}function Gb(t,e){if(e.memoizedState===null&&(t=e.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{no(t)}catch(n){ye(e,e.return,n)}}function lO(t){switch(t.tag){case 31:case 13:case 19:var e=t.stateNode;return e===null&&(e=t.stateNode=new aT),e;case 22:return t=t.stateNode,e=t._retryCache,e===null&&(e=t._retryCache=new aT),e;default:throw Error(U(435,t.tag))}}function jc(t,e){var n=lO(t);e.forEach(function(i){if(!n.has(i)){n.add(i);var r=_O.bind(null,t,i);i.then(r,r)}})}function Kt(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i],s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 27:if(zr(o.type)){xe=o.stateNode,$t=!1;break e}break;case 5:xe=o.stateNode,$t=!1;break e;case 3:case 4:xe=o.stateNode.containerInfo,$t=!0;break e}o=o.return}if(xe===null)throw Error(U(160));jb(s,a,r),xe=null,$t=!1,s=r.alternate,s!==null&&(s.return=null),r.return=null}if(e.subtreeFlags&13886)for(e=e.child;e!==null;)Hb(e,t),e=e.sibling}var Un=null;function Hb(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Kt(e,t),Qt(t),i&4&&(br(3,t,t.return),Gu(3,t),br(5,t,t.return));break;case 1:Kt(e,t),Qt(t),i&512&&(rt||n===null||Yn(n,n.return)),i&64&&_i&&(t=t.updateQueue,t!==null&&(i=t.callbacks,i!==null&&(n=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=n===null?i:n.concat(i))));break;case 26:var r=Un;if(Kt(e,t),Qt(t),i&512&&(rt||n===null||Yn(n,n.return)),i&4){var s=n!==null?n.memoizedState:null;if(i=t.memoizedState,n===null)if(i===null)if(t.stateNode===null){e:{i=t.type,n=t.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":s=r.getElementsByTagName("title")[0],(!s||s[Bu]||s[bt]||s.namespaceURI==="http://www.w3.org/2000/svg"||s.hasAttribute("itemprop"))&&(s=r.createElement(i),r.head.insertBefore(s,r.querySelector("head > title"))),Dt(s,i,n),s[bt]=t,pt(s),i=s;break e;case"link":var a=ST("link","href",r).get(i+(n.href||""));if(a){for(var o=0;o<a.length;o++)if(s=a[o],s.getAttribute("href")===(n.href==null||n.href===""?null:n.href)&&s.getAttribute("rel")===(n.rel==null?null:n.rel)&&s.getAttribute("title")===(n.title==null?null:n.title)&&s.getAttribute("crossorigin")===(n.crossOrigin==null?null:n.crossOrigin)){a.splice(o,1);break t}}s=r.createElement(i),Dt(s,i,n),r.head.appendChild(s);break;case"meta":if(a=ST("meta","content",r).get(i+(n.content||""))){for(o=0;o<a.length;o++)if(s=a[o],s.getAttribute("content")===(n.content==null?null:""+n.content)&&s.getAttribute("name")===(n.name==null?null:n.name)&&s.getAttribute("property")===(n.property==null?null:n.property)&&s.getAttribute("http-equiv")===(n.httpEquiv==null?null:n.httpEquiv)&&s.getAttribute("charset")===(n.charSet==null?null:n.charSet)){a.splice(o,1);break t}}s=r.createElement(i),Dt(s,i,n),r.head.appendChild(s);break;default:throw Error(U(468,i))}s[bt]=t,pt(s),i=s}t.stateNode=i}else RT(r,t.type,t.stateNode);else t.stateNode=bT(r,i,t.memoizedProps);else s!==i?(s===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):s.count--,i===null?RT(r,t.type,t.stateNode):bT(r,i,t.memoizedProps)):i===null&&t.stateNode!==null&&vm(t,t.memoizedProps,n.memoizedProps)}break;case 27:Kt(e,t),Qt(t),i&512&&(rt||n===null||Yn(n,n.return)),n!==null&&i&4&&vm(t,t.memoizedProps,n.memoizedProps);break;case 5:if(Kt(e,t),Qt(t),i&512&&(rt||n===null||Yn(n,n.return)),t.flags&32){r=t.stateNode;try{$a(r,"")}catch(R){ye(t,t.return,R)}}i&4&&t.stateNode!=null&&(r=t.memoizedProps,vm(t,r,n!==null?n.memoizedProps:r)),i&1024&&(Tm=!0);break;case 6:if(Kt(e,t),Qt(t),i&4){if(t.stateNode===null)throw Error(U(162));i=t.memoizedProps,n=t.stateNode;try{n.nodeValue=i}catch(R){ye(t,t.return,R)}}break;case 3:if(dh=null,r=Un,Un=Jh(e.containerInfo),Kt(e,t),Un=r,Qt(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{no(e.containerInfo)}catch(R){ye(t,t.return,R)}Tm&&(Tm=!1,Kb(t));break;case 4:i=Un,Un=Jh(t.stateNode.containerInfo),Kt(e,t),Qt(t),Un=i;break;case 12:Kt(e,t),Qt(t);break;case 31:Kt(e,t),Qt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,jc(t,i)));break;case 13:Kt(e,t),Qt(t),t.child.flags&8192&&t.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(zd=mn()),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,jc(t,i)));break;case 22:r=t.memoizedState!==null;var u=n!==null&&n.memoizedState!==null,c=_i,d=rt;if(_i=c||r,rt=d||u,Kt(e,t),rt=d,_i=c,Qt(t),i&8192)e:for(e=t.stateNode,e._visibility=r?e._visibility&-2:e._visibility|1,r&&(n===null||u||_i||rt||ts(t)),n=null,e=t;;){if(e.tag===5||e.tag===26){if(n===null){u=n=e;try{if(s=u.stateNode,r)a=s.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{o=u.stateNode;var f=u.memoizedProps.style,p=f!=null&&f.hasOwnProperty("display")?f.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(R){ye(u,u.return,R)}}}else if(e.tag===6){if(n===null){u=e;try{u.stateNode.nodeValue=r?"":u.memoizedProps}catch(R){ye(u,u.return,R)}}}else if(e.tag===18){if(n===null){u=e;try{var g=u.stateNode;r?ET(g,!0):ET(u.stateNode,!1)}catch(R){ye(u,u.return,R)}}}else if((e.tag!==22&&e.tag!==23||e.memoizedState===null||e===t)&&e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;n===e&&(n=null),e=e.return}n===e&&(n=null),e.sibling.return=e.return,e=e.sibling}i&4&&(i=t.updateQueue,i!==null&&(n=i.retryQueue,n!==null&&(i.retryQueue=null,jc(t,n))));break;case 19:Kt(e,t),Qt(t),i&4&&(i=t.updateQueue,i!==null&&(t.updateQueue=null,jc(t,i)));break;case 30:break;case 21:break;default:Kt(e,t),Qt(t)}}function Qt(t){var e=t.flags;if(e&2){try{for(var n,i=t.return;i!==null;){if(Ub(i)){n=i;break}i=i.return}if(n==null)throw Error(U(160));switch(n.tag){case 27:var r=n.stateNode,s=Em(t);Gh(t,s,r);break;case 5:var a=n.stateNode;n.flags&32&&($a(a,""),n.flags&=-33);var o=Em(t);Gh(t,o,a);break;case 3:case 4:var u=n.stateNode.containerInfo,c=Em(t);Rp(t,c,u);break;default:throw Error(U(161))}}catch(d){ye(t,t.return,d)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Kb(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var e=t;Kb(e),e.tag===5&&e.flags&1024&&e.stateNode.reset(),t=t.sibling}}function fi(t,e){if(e.subtreeFlags&8772)for(e=e.child;e!==null;)Bb(t,e.alternate,e),e=e.sibling}function ts(t){for(t=t.child;t!==null;){var e=t;switch(e.tag){case 0:case 11:case 14:case 15:br(4,e,e.return),ts(e);break;case 1:Yn(e,e.return);var n=e.stateNode;typeof n.componentWillUnmount=="function"&&kb(e,e.return,n),ts(e);break;case 27:Gl(e.stateNode);case 26:case 5:Yn(e,e.return),ts(e);break;case 22:e.memoizedState===null&&ts(e);break;case 30:ts(e);break;default:ts(e)}t=t.sibling}}function mi(t,e,n){for(n=n&&(e.subtreeFlags&8772)!==0,e=e.child;e!==null;){var i=e.alternate,r=t,s=e,a=s.flags;switch(s.tag){case 0:case 11:case 15:mi(r,s,n),Gu(4,s);break;case 1:if(mi(r,s,n),i=s,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(c){ye(i,i.return,c)}if(i=s,r=i.updateQueue,r!==null){var o=i.stateNode;try{var u=r.shared.hiddenCallbacks;if(u!==null)for(r.shared.hiddenCallbacks=null,r=0;r<u.length;r++)qA(u[r],o)}catch(c){ye(i,i.return,c)}}n&&a&64&&Mb(s),Bl(s,s.return);break;case 27:zb(s);case 26:case 5:mi(r,s,n),n&&i===null&&a&4&&Lb(s),Bl(s,s.return);break;case 12:mi(r,s,n);break;case 31:mi(r,s,n),n&&a&4&&qb(r,s);break;case 13:mi(r,s,n),n&&a&4&&Gb(r,s);break;case 22:s.memoizedState===null&&mi(r,s,n),Bl(s,s.return);break;case 30:break;default:mi(r,s,n)}e=e.sibling}}function __(t,e){var n=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),t=null,e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(t=e.memoizedState.cachePool.pool),t!==n&&(t!=null&&t.refCount++,n!=null&&ju(n))}function y_(t,e){t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ju(t))}function Ln(t,e,n,i){if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Qb(t,e,n,i),e=e.sibling}function Qb(t,e,n,i){var r=e.flags;switch(e.tag){case 0:case 11:case 15:Ln(t,e,n,i),r&2048&&Gu(9,e);break;case 1:Ln(t,e,n,i);break;case 3:Ln(t,e,n,i),r&2048&&(t=null,e.alternate!==null&&(t=e.alternate.memoizedState.cache),e=e.memoizedState.cache,e!==t&&(e.refCount++,t!=null&&ju(t)));break;case 12:if(r&2048){Ln(t,e,n,i),t=e.stateNode;try{var s=e.memoizedProps,a=s.id,o=s.onPostCommit;typeof o=="function"&&o(a,e.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(u){ye(e,e.return,u)}}else Ln(t,e,n,i);break;case 31:Ln(t,e,n,i);break;case 13:Ln(t,e,n,i);break;case 23:break;case 22:s=e.stateNode,a=e.alternate,e.memoizedState!==null?s._visibility&2?Ln(t,e,n,i):Fl(t,e):s._visibility&2?Ln(t,e,n,i):(s._visibility|=2,ha(t,e,n,i,(e.subtreeFlags&10256)!==0||!1)),r&2048&&__(a,e);break;case 24:Ln(t,e,n,i),r&2048&&y_(e.alternate,e);break;default:Ln(t,e,n,i)}}function ha(t,e,n,i,r){for(r=r&&((e.subtreeFlags&10256)!==0||!1),e=e.child;e!==null;){var s=t,a=e,o=n,u=i,c=a.flags;switch(a.tag){case 0:case 11:case 15:ha(s,a,o,u,r),Gu(8,a);break;case 23:break;case 22:var d=a.stateNode;a.memoizedState!==null?d._visibility&2?ha(s,a,o,u,r):Fl(s,a):(d._visibility|=2,ha(s,a,o,u,r)),r&&c&2048&&__(a.alternate,a);break;case 24:ha(s,a,o,u,r),r&&c&2048&&y_(a.alternate,a);break;default:ha(s,a,o,u,r)}e=e.sibling}}function Fl(t,e){if(e.subtreeFlags&10256)for(e=e.child;e!==null;){var n=t,i=e,r=i.flags;switch(i.tag){case 22:Fl(n,i),r&2048&&__(i.alternate,i);break;case 24:Fl(n,i),r&2048&&y_(i.alternate,i);break;default:Fl(n,i)}e=e.sibling}}var Il=8192;function ra(t,e,n){if(t.subtreeFlags&Il)for(t=t.child;t!==null;)$b(t,e,n),t=t.sibling}function $b(t,e,n){switch(t.tag){case 26:ra(t,e,n),t.flags&Il&&t.memoizedState!==null&&$O(n,Un,t.memoizedState,t.memoizedProps);break;case 5:ra(t,e,n);break;case 3:case 4:var i=Un;Un=Jh(t.stateNode.containerInfo),ra(t,e,n),Un=i;break;case 22:t.memoizedState===null&&(i=t.alternate,i!==null&&i.memoizedState!==null?(i=Il,Il=16777216,ra(t,e,n),Il=i):ra(t,e,n));break;default:ra(t,e,n)}}function Yb(t){var e=t.alternate;if(e!==null&&(t=e.child,t!==null)){e.child=null;do e=t.sibling,t.sibling=null,t=e;while(t!==null)}}function ll(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];ft=i,Wb(i,t)}Yb(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Xb(t),t=t.sibling}function Xb(t){switch(t.tag){case 0:case 11:case 15:ll(t),t.flags&2048&&br(9,t,t.return);break;case 3:ll(t);break;case 12:ll(t);break;case 22:var e=t.stateNode;t.memoizedState!==null&&e._visibility&2&&(t.return===null||t.return.tag!==13)?(e._visibility&=-3,ch(t)):ll(t);break;default:ll(t)}}function ch(t){var e=t.deletions;if(t.flags&16){if(e!==null)for(var n=0;n<e.length;n++){var i=e[n];ft=i,Wb(i,t)}Yb(t)}for(t=t.child;t!==null;){switch(e=t,e.tag){case 0:case 11:case 15:br(8,e,e.return),ch(e);break;case 22:n=e.stateNode,n._visibility&2&&(n._visibility&=-3,ch(e));break;default:ch(e)}t=t.sibling}}function Wb(t,e){for(;ft!==null;){var n=ft;switch(n.tag){case 0:case 11:case 15:br(8,n,e);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var i=n.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:ju(n.memoizedState.cache)}if(i=n.child,i!==null)i.return=n,ft=i;else e:for(n=t;ft!==null;){i=ft;var r=i.sibling,s=i.return;if(Fb(i),i===n){ft=null;break e}if(r!==null){r.return=s,ft=r;break e}ft=s}}}var uO={getCacheForType:function(t){var e=Ct(st),n=e.data.get(t);return n===void 0&&(n=t(),e.data.set(t,n)),n},cacheSignal:function(){return Ct(st).controller.signal}},cO=typeof WeakMap=="function"?WeakMap:Map,pe=0,Ae=null,oe=null,ue=0,_e=0,ln=null,or=!1,Ro=!1,v_=!1,Pi=0,qe=0,Sr=0,ys=0,E_=0,dn=0,Ja=0,jl=null,Yt=null,Cp=!1,zd=0,Jb=0,Hh=1/0,Kh=null,gr=null,lt=0,_r=null,Za=null,Si=0,Dp=0,Np=null,Zb=null,ql=0,Op=null;function _n(){return pe&2&&ue!==0?ue&-ue:J.T!==null?w_():lA()}function eS(){if(dn===0)if(!(ue&536870912)||he){var t=xc;xc<<=1,!(xc&3932160)&&(xc=262144),dn=t}else dn=536870912;return t=En.current,t!==null&&(t.flags|=32),dn}function nn(t,e,n){(t===Ae&&(_e===2||_e===9)||t.cancelPendingCommit!==null)&&(eo(t,0),lr(t,ue,dn,!1)),zu(t,n),(!(pe&2)||t!==Ae)&&(t===Ae&&(!(pe&2)&&(ys|=n),qe===4&&lr(t,ue,dn,!1)),ai(t))}function tS(t,e,n){if(pe&6)throw Error(U(327));var i=!n&&(e&127)===0&&(e&t.expiredLanes)===0||Uu(t,e),r=i?fO(t,e):wm(t,e,!0),s=i;do{if(r===0){Ro&&!i&&lr(t,e,0,!1);break}else{if(n=t.current.alternate,s&&!hO(n)){r=wm(t,e,!1),s=!1;continue}if(r===2){if(s=e,t.errorRecoveryDisabledLanes&s)var a=0;else a=t.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){e=a;e:{var o=t;r=jl;var u=o.current.memoizedState.isDehydrated;if(u&&(eo(o,a).flags|=256),a=wm(o,a,!1),a!==2){if(v_&&!u){o.errorRecoveryDisabledLanes|=s,ys|=s,r=4;break e}s=Yt,Yt=r,s!==null&&(Yt===null?Yt=s:Yt.push.apply(Yt,s))}r=a}if(s=!1,r!==2)continue}}if(r===1){eo(t,0),lr(t,e,0,!0);break}e:{switch(i=t,s=r,s){case 0:case 1:throw Error(U(345));case 4:if((e&4194048)!==e)break;case 6:lr(i,e,dn,!or);break e;case 2:Yt=null;break;case 3:case 5:break;default:throw Error(U(329))}if((e&62914560)===e&&(r=zd+300-mn(),10<r)){if(lr(i,e,dn,!or),Cd(i,0,!0)!==0)break e;Si=e,i.timeoutHandle=TS(oT.bind(null,i,n,Yt,Kh,Cp,e,dn,ys,Ja,or,s,"Throttled",-0,0),r);break e}oT(i,n,Yt,Kh,Cp,e,dn,ys,Ja,or,s,null,-0,0)}}break}while(!0);ai(t)}function oT(t,e,n,i,r,s,a,o,u,c,d,f,p,g){if(t.timeoutHandle=-1,f=e.subtreeFlags,f&8192||(f&16785408)===16785408){f={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:vi},$b(e,s,f);var R=(s&62914560)===s?zd-mn():(s&4194048)===s?Jb-mn():0;if(R=YO(f,R),R!==null){Si=s,t.cancelPendingCommit=R(uT.bind(null,t,e,s,n,i,r,a,o,u,d,f,null,p,g)),lr(t,s,a,!c);return}}uT(t,e,s,n,i,r,a,o,u)}function hO(t){for(var e=t;;){var n=e.tag;if((n===0||n===11||n===15)&&e.flags&16384&&(n=e.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!vn(s(),r))return!1}catch{return!1}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function lr(t,e,n,i){e&=~E_,e&=~ys,t.suspendedLanes|=e,t.pingedLanes&=~e,i&&(t.warmLanes|=e),i=t.expirationTimes;for(var r=e;0<r;){var s=31-gn(r),a=1<<s;i[s]=-1,r&=~a}n!==0&&sA(t,n,e)}function Bd(){return pe&6?!0:(Hu(0),!1)}function T_(){if(oe!==null){if(_e===0)var t=oe.return;else t=oe,Ei=Gs=null,a_(t),ka=null,au=0,t=oe;for(;t!==null;)xb(t.alternate,t),t=t.return;oe=null}}function eo(t,e){var n=t.timeoutHandle;n!==-1&&(t.timeoutHandle=-1,OO(n)),n=t.cancelPendingCommit,n!==null&&(t.cancelPendingCommit=null,n()),Si=0,T_(),Ae=t,oe=n=Ai(t.current,null),ue=e,_e=0,ln=null,or=!1,Ro=Uu(t,e),v_=!1,Ja=dn=E_=ys=Sr=qe=0,Yt=jl=null,Cp=!1,e&8&&(e|=e&32);var i=t.entangledLanes;if(i!==0)for(t=t.entanglements,i&=e;0<i;){var r=31-gn(i),s=1<<r;e|=t[r],i&=~s}return Pi=e,Pd(),n}function nS(t,e){ie=null,J.H=lu,e===So||e===xd?(e=zE(),_e=3):e===Zg?(e=zE(),_e=4):_e=e===p_?8:e!==null&&typeof e=="object"&&typeof e.then=="function"?6:1,ln=e,oe===null&&(qe=1,jh(t,Rn(e,t.current)))}function iS(){var t=En.current;return t===null?!0:(ue&4194048)===ue?Nn===null:(ue&62914560)===ue||ue&536870912?t===Nn:!1}function rS(){var t=J.H;return J.H=lu,t===null?lu:t}function sS(){var t=J.A;return J.A=uO,t}function Qh(){qe=4,or||(ue&4194048)!==ue&&En.current!==null||(Ro=!0),!(Sr&134217727)&&!(ys&134217727)||Ae===null||lr(Ae,ue,dn,!1)}function wm(t,e,n){var i=pe;pe|=2;var r=rS(),s=sS();(Ae!==t||ue!==e)&&(Kh=null,eo(t,e)),e=!1;var a=qe;e:do try{if(_e!==0&&oe!==null){var o=oe,u=ln;switch(_e){case 8:T_(),a=6;break e;case 3:case 2:case 9:case 6:En.current===null&&(e=!0);var c=_e;if(_e=0,ln=null,Da(t,o,u,c),n&&Ro){a=0;break e}break;default:c=_e,_e=0,ln=null,Da(t,o,u,c)}}dO(),a=qe;break}catch(d){nS(t,d)}while(!0);return e&&t.shellSuspendCounter++,Ei=Gs=null,pe=i,J.H=r,J.A=s,oe===null&&(Ae=null,ue=0,Pd()),a}function dO(){for(;oe!==null;)aS(oe)}function fO(t,e){var n=pe;pe|=2;var i=rS(),r=sS();Ae!==t||ue!==e?(Kh=null,Hh=mn()+500,eo(t,e)):Ro=Uu(t,e);e:do try{if(_e!==0&&oe!==null){e=oe;var s=ln;t:switch(_e){case 1:_e=0,ln=null,Da(t,e,s,1);break;case 2:case 9:if(UE(s)){_e=0,ln=null,lT(e);break}e=function(){_e!==2&&_e!==9||Ae!==t||(_e=7),ai(t)},s.then(e,e);break e;case 3:_e=7;break e;case 4:_e=5;break e;case 7:UE(s)?(_e=0,ln=null,lT(e)):(_e=0,ln=null,Da(t,e,s,7));break;case 5:var a=null;switch(oe.tag){case 26:a=oe.memoizedState;case 5:case 27:var o=oe;if(a?SS(a):o.stateNode.complete){_e=0,ln=null;var u=o.sibling;if(u!==null)oe=u;else{var c=o.return;c!==null?(oe=c,Fd(c)):oe=null}break t}}_e=0,ln=null,Da(t,e,s,5);break;case 6:_e=0,ln=null,Da(t,e,s,6);break;case 8:T_(),qe=6;break e;default:throw Error(U(462))}}mO();break}catch(d){nS(t,d)}while(!0);return Ei=Gs=null,J.H=i,J.A=r,pe=n,oe!==null?0:(Ae=null,ue=0,Pd(),qe)}function mO(){for(;oe!==null&&!L1();)aS(oe)}function aS(t){var e=Vb(t.alternate,t,Pi);t.memoizedProps=t.pendingProps,e===null?Fd(t):oe=e}function lT(t){var e=t,n=e.alternate;switch(e.tag){case 15:case 0:e=tT(n,e,e.pendingProps,e.type,void 0,ue);break;case 11:e=tT(n,e,e.pendingProps,e.type.render,e.ref,ue);break;case 5:a_(e);default:xb(n,e),e=oe=xA(e,Pi),e=Vb(n,e,Pi)}t.memoizedProps=t.pendingProps,e===null?Fd(t):oe=e}function Da(t,e,n,i){Ei=Gs=null,a_(e),ka=null,au=0;var r=e.return;try{if(nO(t,r,e,n,ue)){qe=1,jh(t,Rn(n,t.current)),oe=null;return}}catch(s){if(r!==null)throw oe=r,s;qe=1,jh(t,Rn(n,t.current)),oe=null;return}e.flags&32768?(he||i===1?t=!0:Ro||ue&536870912?t=!1:(or=t=!0,(i===2||i===9||i===3||i===6)&&(i=En.current,i!==null&&i.tag===13&&(i.flags|=16384))),oS(e,t)):Fd(e)}function Fd(t){var e=t;do{if(e.flags&32768){oS(e,or);return}t=e.return;var n=sO(e.alternate,e,Pi);if(n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);qe===0&&(qe=5)}function oS(t,e){do{var n=aO(t.alternate,t);if(n!==null){n.flags&=32767,oe=n;return}if(n=t.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!e&&(t=t.sibling,t!==null)){oe=t;return}oe=t=n}while(t!==null);qe=6,oe=null}function uT(t,e,n,i,r,s,a,o,u){t.cancelPendingCommit=null;do jd();while(lt!==0);if(pe&6)throw Error(U(327));if(e!==null){if(e===t.current)throw Error(U(177));if(s=e.lanes|e.childLanes,s|=Kg,Q1(t,n,s,a,o,u),t===Ae&&(oe=Ae=null,ue=0),Za=e,_r=t,Si=n,Dp=s,Np=r,Zb=i,e.subtreeFlags&10256||e.flags&10256?(t.callbackNode=null,t.callbackPriority=0,yO(Oh,function(){return dS(),null})):(t.callbackNode=null,t.callbackPriority=0),i=(e.flags&13878)!==0,e.subtreeFlags&13878||i){i=J.T,J.T=null,r=ge.p,ge.p=2,a=pe,pe|=4;try{oO(t,e,n)}finally{pe=a,ge.p=r,J.T=i}}lt=1,lS(),uS(),cS()}}function lS(){if(lt===1){lt=0;var t=_r,e=Za,n=(e.flags&13878)!==0;if(e.subtreeFlags&13878||n){n=J.T,J.T=null;var i=ge.p;ge.p=2;var r=pe;pe|=4;try{Hb(e,t);var s=Mp,a=SA(t.containerInfo),o=s.focusedElem,u=s.selectionRange;if(a!==o&&o&&o.ownerDocument&&bA(o.ownerDocument.documentElement,o)){if(u!==null&&Hg(o)){var c=u.start,d=u.end;if(d===void 0&&(d=c),"selectionStart"in o)o.selectionStart=c,o.selectionEnd=Math.min(d,o.value.length);else{var f=o.ownerDocument||document,p=f&&f.defaultView||window;if(p.getSelection){var g=p.getSelection(),R=o.textContent.length,N=Math.min(u.start,R),x=u.end===void 0?N:Math.min(u.end,R);!g.extend&&N>x&&(a=x,x=N,N=a);var I=OE(o,N),E=OE(o,x);if(I&&E&&(g.rangeCount!==1||g.anchorNode!==I.node||g.anchorOffset!==I.offset||g.focusNode!==E.node||g.focusOffset!==E.offset)){var A=f.createRange();A.setStart(I.node,I.offset),g.removeAllRanges(),N>x?(g.addRange(A),g.extend(E.node,E.offset)):(A.setEnd(E.node,E.offset),g.addRange(A))}}}}for(f=[],g=o;g=g.parentNode;)g.nodeType===1&&f.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<f.length;o++){var O=f[o];O.element.scrollLeft=O.left,O.element.scrollTop=O.top}}td=!!xp,Mp=xp=null}finally{pe=r,ge.p=i,J.T=n}}t.current=e,lt=2}}function uS(){if(lt===2){lt=0;var t=_r,e=Za,n=(e.flags&8772)!==0;if(e.subtreeFlags&8772||n){n=J.T,J.T=null;var i=ge.p;ge.p=2;var r=pe;pe|=4;try{Bb(t,e.alternate,e)}finally{pe=r,ge.p=i,J.T=n}}lt=3}}function cS(){if(lt===4||lt===3){lt=0,U1();var t=_r,e=Za,n=Si,i=Zb;e.subtreeFlags&10256||e.flags&10256?lt=5:(lt=0,Za=_r=null,hS(t,t.pendingLanes));var r=t.pendingLanes;if(r===0&&(gr=null),Ug(n),e=e.stateNode,pn&&typeof pn.onCommitFiberRoot=="function")try{pn.onCommitFiberRoot(Lu,e,void 0,(e.current.flags&128)===128)}catch{}if(i!==null){e=J.T,r=ge.p,ge.p=2,J.T=null;try{for(var s=t.onRecoverableError,a=0;a<i.length;a++){var o=i[a];s(o.value,{componentStack:o.stack})}}finally{J.T=e,ge.p=r}}Si&3&&jd(),ai(t),r=t.pendingLanes,n&261930&&r&42?t===Op?ql++:(ql=0,Op=t):ql=0,Hu(0)}}function hS(t,e){(t.pooledCacheLanes&=e)===0&&(e=t.pooledCache,e!=null&&(t.pooledCache=null,ju(e)))}function jd(){return lS(),uS(),cS(),dS()}function dS(){if(lt!==5)return!1;var t=_r,e=Dp;Dp=0;var n=Ug(Si),i=J.T,r=ge.p;try{ge.p=32>n?32:n,J.T=null,n=Np,Np=null;var s=_r,a=Si;if(lt=0,Za=_r=null,Si=0,pe&6)throw Error(U(331));var o=pe;if(pe|=4,Xb(s.current),Qb(s,s.current,a,n),pe=o,Hu(0,!1),pn&&typeof pn.onPostCommitFiberRoot=="function")try{pn.onPostCommitFiberRoot(Lu,s)}catch{}return!0}finally{ge.p=r,J.T=i,hS(t,e)}}function cT(t,e,n){e=Rn(n,e),e=Ap(t.stateNode,e,2),t=pr(t,e,2),t!==null&&(zu(t,2),ai(t))}function ye(t,e,n){if(t.tag===3)cT(t,t,n);else for(;e!==null;){if(e.tag===3){cT(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(gr===null||!gr.has(i))){t=Rn(n,t),n=Rb(2),i=pr(e,n,2),i!==null&&(Cb(n,i,e,t),zu(i,2),ai(i));break}}e=e.return}}function Im(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new cO;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(v_=!0,r.add(n),t=pO.bind(null,t,e,n),e.then(t,t))}function pO(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),t.pingedLanes|=t.suspendedLanes&n,t.warmLanes&=~n,Ae===t&&(ue&n)===n&&(qe===4||qe===3&&(ue&62914560)===ue&&300>mn()-zd?!(pe&2)&&eo(t,0):E_|=n,Ja===ue&&(Ja=0)),ai(t)}function fS(t,e){e===0&&(e=rA()),t=qs(t,e),t!==null&&(zu(t,e),ai(t))}function gO(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),fS(t,n)}function _O(t,e){var n=0;switch(t.tag){case 31:case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;case 22:i=t.stateNode._retryCache;break;default:throw Error(U(314))}i!==null&&i.delete(e),fS(t,n)}function yO(t,e){return kg(t,e)}var $h=null,da=null,Pp=!1,Yh=!1,Am=!1,ur=0;function ai(t){t!==da&&t.next===null&&(da===null?$h=da=t:da=da.next=t),Yh=!0,Pp||(Pp=!0,EO())}function Hu(t,e){if(!Am&&Yh){Am=!0;do for(var n=!1,i=$h;i!==null;){if(t!==0){var r=i.pendingLanes;if(r===0)var s=0;else{var a=i.suspendedLanes,o=i.pingedLanes;s=(1<<31-gn(42|t)+1)-1,s&=r&~(a&~o),s=s&201326741?s&201326741|1:s?s|2:0}s!==0&&(n=!0,hT(i,s))}else s=ue,s=Cd(i,i===Ae?s:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),!(s&3)||Uu(i,s)||(n=!0,hT(i,s));i=i.next}while(n);Am=!1}}function vO(){mS()}function mS(){Yh=Pp=!1;var t=0;ur!==0&&NO()&&(t=ur);for(var e=mn(),n=null,i=$h;i!==null;){var r=i.next,s=pS(i,e);s===0?(i.next=null,n===null?$h=r:n.next=r,r===null&&(da=n)):(n=i,(t!==0||s&3)&&(Yh=!0)),i=r}lt!==0&&lt!==5||Hu(t),ur!==0&&(ur=0)}function pS(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes&-62914561;0<s;){var a=31-gn(s),o=1<<a,u=r[a];u===-1?(!(o&n)||o&i)&&(r[a]=K1(o,e)):u<=e&&(t.expiredLanes|=o),s&=~o}if(e=Ae,n=ue,n=Cd(t,t===e?n:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i=t.callbackNode,n===0||t===e&&(_e===2||_e===9)||t.cancelPendingCommit!==null)return i!==null&&i!==null&&Jf(i),t.callbackNode=null,t.callbackPriority=0;if(!(n&3)||Uu(t,n)){if(e=n&-n,e===t.callbackPriority)return e;switch(i!==null&&Jf(i),Ug(n)){case 2:case 8:n=nA;break;case 32:n=Oh;break;case 268435456:n=iA;break;default:n=Oh}return i=gS.bind(null,t),n=kg(n,i),t.callbackPriority=e,t.callbackNode=n,e}return i!==null&&i!==null&&Jf(i),t.callbackPriority=2,t.callbackNode=null,2}function gS(t,e){if(lt!==0&&lt!==5)return t.callbackNode=null,t.callbackPriority=0,null;var n=t.callbackNode;if(jd()&&t.callbackNode!==n)return null;var i=ue;return i=Cd(t,t===Ae?i:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),i===0?null:(tS(t,i,e),pS(t,mn()),t.callbackNode!=null&&t.callbackNode===n?gS.bind(null,t):null)}function hT(t,e){if(jd())return null;tS(t,e,!0)}function EO(){PO(function(){pe&6?kg(tA,vO):mS()})}function w_(){if(ur===0){var t=Ya;t===0&&(t=Vc,Vc<<=1,!(Vc&261888)&&(Vc=256)),ur=t}return ur}function dT(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:th(""+t)}function fT(t,e){var n=e.ownerDocument.createElement("input");return n.name=e.name,n.value=e.value,t.id&&n.setAttribute("form",t.id),e.parentNode.insertBefore(n,e),t=new FormData(t),n.parentNode.removeChild(n),t}function TO(t,e,n,i,r){if(e==="submit"&&n&&n.stateNode===r){var s=dT((r[rn]||null).action),a=i.submitter;a&&(e=(e=a[rn]||null)?dT(e.formAction):a.getAttribute("formAction"),e!==null&&(s=e,a=null));var o=new Dd("action","action",null,i,r);t.push({event:o,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(ur!==0){var u=a?fT(r,a):new FormData(r);wp(n,{pending:!0,data:u,method:r.method,action:s},null,u)}}else typeof s=="function"&&(o.preventDefault(),u=a?fT(r,a):new FormData(r),wp(n,{pending:!0,data:u,method:r.method,action:s},s,u))},currentTarget:r}]})}}for(var bm=0;bm<cp.length;bm++){var Sm=cp[bm],wO=Sm.toLowerCase(),IO=Sm[0].toUpperCase()+Sm.slice(1);Fn(wO,"on"+IO)}Fn(CA,"onAnimationEnd");Fn(DA,"onAnimationIteration");Fn(NA,"onAnimationStart");Fn("dblclick","onDoubleClick");Fn("focusin","onFocus");Fn("focusout","onBlur");Fn(zN,"onTransitionRun");Fn(BN,"onTransitionStart");Fn(FN,"onTransitionCancel");Fn(OA,"onTransitionEnd");Qa("onMouseEnter",["mouseout","mouseover"]);Qa("onMouseLeave",["mouseout","mouseover"]);Qa("onPointerEnter",["pointerout","pointerover"]);Qa("onPointerLeave",["pointerout","pointerover"]);Bs("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Bs("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Bs("onBeforeInput",["compositionend","keypress","textInput","paste"]);Bs("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Bs("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AO=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function _S(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],u=o.instance,c=o.currentTarget;if(o=o.listener,u!==s&&r.isPropagationStopped())break e;s=o,r.currentTarget=c;try{s(r)}catch(d){Vh(d)}r.currentTarget=null,s=u}else for(a=0;a<i.length;a++){if(o=i[a],u=o.instance,c=o.currentTarget,o=o.listener,u!==s&&r.isPropagationStopped())break e;s=o,r.currentTarget=c;try{s(r)}catch(d){Vh(d)}r.currentTarget=null,s=u}}}}function se(t,e){var n=e[np];n===void 0&&(n=e[np]=new Set);var i=t+"__bubble";n.has(i)||(yS(e,t,2,!1),n.add(i))}function Rm(t,e,n){var i=0;e&&(i|=4),yS(n,t,i,e)}var qc="_reactListening"+Math.random().toString(36).slice(2);function I_(t){if(!t[qc]){t[qc]=!0,uA.forEach(function(n){n!=="selectionchange"&&(AO.has(n)||Rm(n,!1,t),Rm(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[qc]||(e[qc]=!0,Rm("selectionchange",!1,e))}}function yS(t,e,n,i){switch(OS(e)){case 2:var r=JO;break;case 8:r=ZO;break;default:r=R_}n=r.bind(null,e,n,t),r=void 0,!op||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Cm(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r)break;if(a===4)for(a=i.return;a!==null;){var u=a.tag;if((u===3||u===4)&&a.stateNode.containerInfo===r)return;a=a.return}for(;o!==null;){if(a=Ea(o),a===null)return;if(u=a.tag,u===5||u===6||u===26||u===27){i=s=a;continue e}o=o.parentNode}}i=i.return}_A(function(){var c=s,d=Fg(n),f=[];e:{var p=PA.get(t);if(p!==void 0){var g=Dd,R=t;switch(t){case"keypress":if(ih(n)===0)break e;case"keydown":case"keyup":g=_N;break;case"focusin":R="focus",g=im;break;case"focusout":R="blur",g=im;break;case"beforeblur":case"afterblur":g=im;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=TE;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=sN;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=EN;break;case CA:case DA:case NA:g=lN;break;case OA:g=wN;break;case"scroll":case"scrollend":g=iN;break;case"wheel":g=AN;break;case"copy":case"cut":case"paste":g=cN;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=IE;break;case"toggle":case"beforetoggle":g=SN}var N=(e&4)!==0,x=!N&&(t==="scroll"||t==="scrollend"),I=N?p!==null?p+"Capture":null:p;N=[];for(var E=c,A;E!==null;){var O=E;if(A=O.stateNode,O=O.tag,O!==5&&O!==26&&O!==27||A===null||I===null||(O=tu(E,I),O!=null&&N.push(cu(E,O,A))),x)break;E=E.return}0<N.length&&(p=new g(p,R,null,n,d),f.push({event:p,listeners:N}))}}if(!(e&7)){e:{if(p=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",p&&n!==ap&&(R=n.relatedTarget||n.fromElement)&&(Ea(R)||R[Io]))break e;if((g||p)&&(p=d.window===d?d:(p=d.ownerDocument)?p.defaultView||p.parentWindow:window,g?(R=n.relatedTarget||n.toElement,g=c,R=R?Ea(R):null,R!==null&&(x=ku(R),N=R.tag,R!==x||N!==5&&N!==27&&N!==6)&&(R=null)):(g=null,R=c),g!==R)){if(N=TE,O="onMouseLeave",I="onMouseEnter",E="mouse",(t==="pointerout"||t==="pointerover")&&(N=IE,O="onPointerLeave",I="onPointerEnter",E="pointer"),x=g==null?p:Tl(g),A=R==null?p:Tl(R),p=new N(O,E+"leave",g,n,d),p.target=x,p.relatedTarget=A,O=null,Ea(d)===c&&(N=new N(I,E+"enter",R,n,d),N.target=A,N.relatedTarget=x,O=N),x=O,g&&R)t:{for(N=bO,I=g,E=R,A=0,O=I;O;O=N(O))A++;O=0;for(var L=E;L;L=N(L))O++;for(;0<A-O;)I=N(I),A--;for(;0<O-A;)E=N(E),O--;for(;A--;){if(I===E||E!==null&&I===E.alternate){N=I;break t}I=N(I),E=N(E)}N=null}else N=null;g!==null&&mT(f,p,g,N,!1),R!==null&&x!==null&&mT(f,x,R,N,!0)}}e:{if(p=c?Tl(c):window,g=p.nodeName&&p.nodeName.toLowerCase(),g==="select"||g==="input"&&p.type==="file")var F=RE;else if(SE(p))if(IA)F=kN;else{F=xN;var T=VN}else g=p.nodeName,!g||g.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?c&&Bg(c.elementType)&&(F=RE):F=MN;if(F&&(F=F(t,c))){wA(f,F,n,d);break e}T&&T(t,p,c),t==="focusout"&&c&&p.type==="number"&&c.memoizedProps.value!=null&&sp(p,"number",p.value)}switch(T=c?Tl(c):window,t){case"focusin":(SE(T)||T.contentEditable==="true")&&(Ia=T,lp=c,xl=null);break;case"focusout":xl=lp=Ia=null;break;case"mousedown":up=!0;break;case"contextmenu":case"mouseup":case"dragend":up=!1,PE(f,n,d);break;case"selectionchange":if(UN)break;case"keydown":case"keyup":PE(f,n,d)}var _;if(Gg)e:{switch(t){case"compositionstart":var v="onCompositionStart";break e;case"compositionend":v="onCompositionEnd";break e;case"compositionupdate":v="onCompositionUpdate";break e}v=void 0}else wa?EA(t,n)&&(v="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(v="onCompositionStart");v&&(vA&&n.locale!=="ko"&&(wa||v!=="onCompositionStart"?v==="onCompositionEnd"&&wa&&(_=yA()):(ar=d,jg="value"in ar?ar.value:ar.textContent,wa=!0)),T=Xh(c,v),0<T.length&&(v=new wE(v,t,null,n,d),f.push({event:v,listeners:T}),_?v.data=_:(_=TA(n),_!==null&&(v.data=_)))),(_=CN?DN(t,n):NN(t,n))&&(v=Xh(c,"onBeforeInput"),0<v.length&&(T=new wE("onBeforeInput","beforeinput",null,n,d),f.push({event:T,listeners:v}),T.data=_)),TO(f,t,c,n,d)}_S(f,e)})}function cu(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Xh(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||s===null||(r=tu(t,n),r!=null&&i.unshift(cu(t,r,s)),r=tu(t,e),r!=null&&i.push(cu(t,r,s))),t.tag===3)return i;t=t.return}return[]}function bO(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function mT(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,u=o.alternate,c=o.stateNode;if(o=o.tag,u!==null&&u===i)break;o!==5&&o!==26&&o!==27||c===null||(u=c,r?(c=tu(n,s),c!=null&&a.unshift(cu(n,c,u))):r||(c=tu(n,s),c!=null&&a.push(cu(n,c,u)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var SO=/\r\n?/g,RO=/\u0000|\uFFFD/g;function pT(t){return(typeof t=="string"?t:""+t).replace(SO,`
`).replace(RO,"")}function vS(t,e){return e=pT(e),pT(t)===e}function Ee(t,e,n,i,r,s){switch(n){case"children":typeof i=="string"?e==="body"||e==="textarea"&&i===""||$a(t,i):(typeof i=="number"||typeof i=="bigint")&&e!=="body"&&$a(t,""+i);break;case"className":kc(t,"class",i);break;case"tabIndex":kc(t,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":kc(t,n,i);break;case"style":gA(t,i,s);break;case"data":if(e!=="object"){kc(t,"data",i);break}case"src":case"href":if(i===""&&(e!=="a"||n!=="href")){t.removeAttribute(n);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=th(""+i),t.setAttribute(n,i);break;case"action":case"formAction":if(typeof i=="function"){t.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof s=="function"&&(n==="formAction"?(e!=="input"&&Ee(t,e,"name",r.name,r,null),Ee(t,e,"formEncType",r.formEncType,r,null),Ee(t,e,"formMethod",r.formMethod,r,null),Ee(t,e,"formTarget",r.formTarget,r,null)):(Ee(t,e,"encType",r.encType,r,null),Ee(t,e,"method",r.method,r,null),Ee(t,e,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){t.removeAttribute(n);break}i=th(""+i),t.setAttribute(n,i);break;case"onClick":i!=null&&(t.onclick=vi);break;case"onScroll":i!=null&&se("scroll",t);break;case"onScrollEnd":i!=null&&se("scrollend",t);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(U(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(U(60));t.innerHTML=n}}break;case"multiple":t.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":t.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){t.removeAttribute("xlink:href");break}n=th(""+i),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""+i):t.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,""):t.removeAttribute(n);break;case"capture":case"download":i===!0?t.setAttribute(n,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?t.setAttribute(n,i):t.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?t.setAttribute(n,i):t.removeAttribute(n);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?t.removeAttribute(n):t.setAttribute(n,i);break;case"popover":se("beforetoggle",t),se("toggle",t),eh(t,"popover",i);break;case"xlinkActuate":ci(t,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":ci(t,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":ci(t,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":ci(t,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":ci(t,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":ci(t,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":ci(t,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":ci(t,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":ci(t,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":eh(t,"is",i);break;case"innerText":case"textContent":break;default:(!(2<n.length)||n[0]!=="o"&&n[0]!=="O"||n[1]!=="n"&&n[1]!=="N")&&(n=tN.get(n)||n,eh(t,n,i))}}function Vp(t,e,n,i,r,s){switch(n){case"style":gA(t,i,s);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(U(61));if(n=i.__html,n!=null){if(r.children!=null)throw Error(U(60));t.innerHTML=n}}break;case"children":typeof i=="string"?$a(t,i):(typeof i=="number"||typeof i=="bigint")&&$a(t,""+i);break;case"onScroll":i!=null&&se("scroll",t);break;case"onScrollEnd":i!=null&&se("scrollend",t);break;case"onClick":i!=null&&(t.onclick=vi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!cA.hasOwnProperty(n))e:{if(n[0]==="o"&&n[1]==="n"&&(r=n.endsWith("Capture"),e=n.slice(2,r?n.length-7:void 0),s=t[rn]||null,s=s!=null?s[n]:null,typeof s=="function"&&t.removeEventListener(e,s,r),typeof i=="function")){typeof s!="function"&&s!==null&&(n in t?t[n]=null:t.hasAttribute(n)&&t.removeAttribute(n)),t.addEventListener(e,i,r);break e}n in t?t[n]=i:i===!0?t.setAttribute(n,""):eh(t,n,i)}}}function Dt(t,e,n){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":se("error",t),se("load",t);var i=!1,r=!1,s;for(s in n)if(n.hasOwnProperty(s)){var a=n[s];if(a!=null)switch(s){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(U(137,e));default:Ee(t,e,s,a,n,null)}}r&&Ee(t,e,"srcSet",n.srcSet,n,null),i&&Ee(t,e,"src",n.src,n,null);return;case"input":se("invalid",t);var o=s=a=r=null,u=null,c=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(d!=null)switch(i){case"name":r=d;break;case"type":a=d;break;case"checked":u=d;break;case"defaultChecked":c=d;break;case"value":s=d;break;case"defaultValue":o=d;break;case"children":case"dangerouslySetInnerHTML":if(d!=null)throw Error(U(137,e));break;default:Ee(t,e,i,d,n,null)}}fA(t,s,o,u,c,a,r,!1);return;case"select":se("invalid",t),i=a=s=null;for(r in n)if(n.hasOwnProperty(r)&&(o=n[r],o!=null))switch(r){case"value":s=o;break;case"defaultValue":a=o;break;case"multiple":i=o;default:Ee(t,e,r,o,n,null)}e=s,n=a,t.multiple=!!i,e!=null?Va(t,!!i,e,!1):n!=null&&Va(t,!!i,n,!0);return;case"textarea":se("invalid",t),s=r=i=null;for(a in n)if(n.hasOwnProperty(a)&&(o=n[a],o!=null))switch(a){case"value":i=o;break;case"defaultValue":r=o;break;case"children":s=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(U(91));break;default:Ee(t,e,a,o,n,null)}pA(t,i,r,s);return;case"option":for(u in n)if(n.hasOwnProperty(u)&&(i=n[u],i!=null))switch(u){case"selected":t.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:Ee(t,e,u,i,n,null)}return;case"dialog":se("beforetoggle",t),se("toggle",t),se("cancel",t),se("close",t);break;case"iframe":case"object":se("load",t);break;case"video":case"audio":for(i=0;i<uu.length;i++)se(uu[i],t);break;case"image":se("error",t),se("load",t);break;case"details":se("toggle",t);break;case"embed":case"source":case"link":se("error",t),se("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(c in n)if(n.hasOwnProperty(c)&&(i=n[c],i!=null))switch(c){case"children":case"dangerouslySetInnerHTML":throw Error(U(137,e));default:Ee(t,e,c,i,n,null)}return;default:if(Bg(e)){for(d in n)n.hasOwnProperty(d)&&(i=n[d],i!==void 0&&Vp(t,e,d,i,n,void 0));return}}for(o in n)n.hasOwnProperty(o)&&(i=n[o],i!=null&&Ee(t,e,o,i,n,null))}function CO(t,e,n,i){switch(e){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,s=null,a=null,o=null,u=null,c=null,d=null;for(g in n){var f=n[g];if(n.hasOwnProperty(g)&&f!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":u=f;default:i.hasOwnProperty(g)||Ee(t,e,g,null,i,f)}}for(var p in i){var g=i[p];if(f=n[p],i.hasOwnProperty(p)&&(g!=null||f!=null))switch(p){case"type":s=g;break;case"name":r=g;break;case"checked":c=g;break;case"defaultChecked":d=g;break;case"value":a=g;break;case"defaultValue":o=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(U(137,e));break;default:g!==f&&Ee(t,e,p,g,i,f)}}rp(t,a,o,u,c,d,s,r);return;case"select":g=a=o=p=null;for(s in n)if(u=n[s],n.hasOwnProperty(s)&&u!=null)switch(s){case"value":break;case"multiple":g=u;default:i.hasOwnProperty(s)||Ee(t,e,s,null,i,u)}for(r in i)if(s=i[r],u=n[r],i.hasOwnProperty(r)&&(s!=null||u!=null))switch(r){case"value":p=s;break;case"defaultValue":o=s;break;case"multiple":a=s;default:s!==u&&Ee(t,e,r,s,i,u)}e=o,n=a,i=g,p!=null?Va(t,!!n,p,!1):!!i!=!!n&&(e!=null?Va(t,!!n,e,!0):Va(t,!!n,n?[]:"",!1));return;case"textarea":g=p=null;for(o in n)if(r=n[o],n.hasOwnProperty(o)&&r!=null&&!i.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:Ee(t,e,o,null,i,r)}for(a in i)if(r=i[a],s=n[a],i.hasOwnProperty(a)&&(r!=null||s!=null))switch(a){case"value":p=r;break;case"defaultValue":g=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(U(91));break;default:r!==s&&Ee(t,e,a,r,i,s)}mA(t,p,g);return;case"option":for(var R in n)if(p=n[R],n.hasOwnProperty(R)&&p!=null&&!i.hasOwnProperty(R))switch(R){case"selected":t.selected=!1;break;default:Ee(t,e,R,null,i,p)}for(u in i)if(p=i[u],g=n[u],i.hasOwnProperty(u)&&p!==g&&(p!=null||g!=null))switch(u){case"selected":t.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:Ee(t,e,u,p,i,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var N in n)p=n[N],n.hasOwnProperty(N)&&p!=null&&!i.hasOwnProperty(N)&&Ee(t,e,N,null,i,p);for(c in i)if(p=i[c],g=n[c],i.hasOwnProperty(c)&&p!==g&&(p!=null||g!=null))switch(c){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(U(137,e));break;default:Ee(t,e,c,p,i,g)}return;default:if(Bg(e)){for(var x in n)p=n[x],n.hasOwnProperty(x)&&p!==void 0&&!i.hasOwnProperty(x)&&Vp(t,e,x,void 0,i,p);for(d in i)p=i[d],g=n[d],!i.hasOwnProperty(d)||p===g||p===void 0&&g===void 0||Vp(t,e,d,p,i,g);return}}for(var I in n)p=n[I],n.hasOwnProperty(I)&&p!=null&&!i.hasOwnProperty(I)&&Ee(t,e,I,null,i,p);for(f in i)p=i[f],g=n[f],!i.hasOwnProperty(f)||p===g||p==null&&g==null||Ee(t,e,f,p,i,g)}function gT(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function DO(){if(typeof performance.getEntriesByType=="function"){for(var t=0,e=0,n=performance.getEntriesByType("resource"),i=0;i<n.length;i++){var r=n[i],s=r.transferSize,a=r.initiatorType,o=r.duration;if(s&&o&&gT(a)){for(a=0,o=r.responseEnd,i+=1;i<n.length;i++){var u=n[i],c=u.startTime;if(c>o)break;var d=u.transferSize,f=u.initiatorType;d&&gT(f)&&(u=u.responseEnd,a+=d*(u<o?1:(o-c)/(u-c)))}if(--i,e+=8*(s+a)/(r.duration/1e3),t++,10<t)break}}if(0<t)return e/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var xp=null,Mp=null;function Wh(t){return t.nodeType===9?t:t.ownerDocument}function _T(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ES(t,e){if(t===0)switch(e){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&e==="foreignObject"?0:t}function kp(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.children=="bigint"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dm=null;function NO(){var t=window.event;return t&&t.type==="popstate"?t===Dm?!1:(Dm=t,!0):(Dm=null,!1)}var TS=typeof setTimeout=="function"?setTimeout:void 0,OO=typeof clearTimeout=="function"?clearTimeout:void 0,yT=typeof Promise=="function"?Promise:void 0,PO=typeof queueMicrotask=="function"?queueMicrotask:typeof yT<"u"?function(t){return yT.resolve(null).then(t).catch(VO)}:TS;function VO(t){setTimeout(function(){throw t})}function zr(t){return t==="head"}function vT(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"||n==="/&"){if(i===0){t.removeChild(r),no(e);return}i--}else if(n==="$"||n==="$?"||n==="$~"||n==="$!"||n==="&")i++;else if(n==="html")Gl(t.ownerDocument.documentElement);else if(n==="head"){n=t.ownerDocument.head,Gl(n);for(var s=n.firstChild;s;){var a=s.nextSibling,o=s.nodeName;s[Bu]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&s.rel.toLowerCase()==="stylesheet"||n.removeChild(s),s=a}}else n==="body"&&Gl(t.ownerDocument.body);n=r}while(n);no(e)}function ET(t,e){var n=t;t=0;do{var i=n.nextSibling;if(n.nodeType===1?e?(n._stashedDisplay=n.style.display,n.style.display="none"):(n.style.display=n._stashedDisplay||"",n.getAttribute("style")===""&&n.removeAttribute("style")):n.nodeType===3&&(e?(n._stashedText=n.nodeValue,n.nodeValue=""):n.nodeValue=n._stashedText||""),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(t===0)break;t--}else n!=="$"&&n!=="$?"&&n!=="$~"&&n!=="$!"||t++;n=i}while(n)}function Lp(t){var e=t.firstChild;for(e&&e.nodeType===10&&(e=e.nextSibling);e;){var n=e;switch(e=e.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":Lp(n),zg(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(n.rel.toLowerCase()==="stylesheet")continue}t.removeChild(n)}}function xO(t,e,n,i){for(;t.nodeType===1;){var r=n;if(t.nodeName.toLowerCase()!==e.toLowerCase()){if(!i&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(i){if(!t[Bu])switch(e){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(s=t.getAttribute("rel"),s==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(s!==r.rel||t.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||t.getAttribute("title")!==(r.title==null?null:r.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(s=t.getAttribute("src"),(s!==(r.src==null?null:r.src)||t.getAttribute("type")!==(r.type==null?null:r.type)||t.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&s&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(e==="input"&&t.type==="hidden"){var s=r.name==null?null:""+r.name;if(r.type==="hidden"&&t.getAttribute("name")===s)return t}else return t;if(t=On(t.nextSibling),t===null)break}return null}function MO(t,e,n){if(e==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=On(t.nextSibling),t===null))return null;return t}function wS(t,e){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=On(t.nextSibling),t===null))return null;return t}function Up(t){return t.data==="$?"||t.data==="$~"}function zp(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function kO(t,e){var n=t.ownerDocument;if(t.data==="$~")t._reactRetry=e;else if(t.data!=="$?"||n.readyState!=="loading")e();else{var i=function(){e(),n.removeEventListener("DOMContentLoaded",i)};n.addEventListener("DOMContentLoaded",i),t._reactRetry=i}}function On(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"||e==="F!"||e==="F")break;if(e==="/$"||e==="/&")return null}}return t}var Bp=null;function TT(t){t=t.nextSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"||n==="/&"){if(e===0)return On(t.nextSibling);e--}else n!=="$"&&n!=="$!"&&n!=="$?"&&n!=="$~"&&n!=="&"||e++}t=t.nextSibling}return null}function wT(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"){if(e===0)return t;e--}else n!=="/$"&&n!=="/&"||e++}t=t.previousSibling}return null}function IS(t,e,n){switch(e=Wh(n),t){case"html":if(t=e.documentElement,!t)throw Error(U(452));return t;case"head":if(t=e.head,!t)throw Error(U(453));return t;case"body":if(t=e.body,!t)throw Error(U(454));return t;default:throw Error(U(451))}}function Gl(t){for(var e=t.attributes;e.length;)t.removeAttributeNode(e[0]);zg(t)}var Vn=new Map,IT=new Set;function Jh(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Li=ge.d;ge.d={f:LO,r:UO,D:zO,C:BO,L:FO,m:jO,X:GO,S:qO,M:HO};function LO(){var t=Li.f(),e=Bd();return t||e}function UO(t){var e=Ao(t);e!==null&&e.tag===5&&e.type==="form"?gb(e):Li.r(t)}var Co=typeof document>"u"?null:document;function AS(t,e,n){var i=Co;if(i&&typeof e=="string"&&e){var r=Sn(e);r='link[rel="'+t+'"][href="'+r+'"]',typeof n=="string"&&(r+='[crossorigin="'+n+'"]'),IT.has(r)||(IT.add(r),t={rel:t,crossOrigin:n,href:e},i.querySelector(r)===null&&(e=i.createElement("link"),Dt(e,"link",t),pt(e),i.head.appendChild(e)))}}function zO(t){Li.D(t),AS("dns-prefetch",t,null)}function BO(t,e){Li.C(t,e),AS("preconnect",t,e)}function FO(t,e,n){Li.L(t,e,n);var i=Co;if(i&&t&&e){var r='link[rel="preload"][as="'+Sn(e)+'"]';e==="image"&&n&&n.imageSrcSet?(r+='[imagesrcset="'+Sn(n.imageSrcSet)+'"]',typeof n.imageSizes=="string"&&(r+='[imagesizes="'+Sn(n.imageSizes)+'"]')):r+='[href="'+Sn(t)+'"]';var s=r;switch(e){case"style":s=to(t);break;case"script":s=Do(t)}Vn.has(s)||(t=Ve({rel:"preload",href:e==="image"&&n&&n.imageSrcSet?void 0:t,as:e},n),Vn.set(s,t),i.querySelector(r)!==null||e==="style"&&i.querySelector(Ku(s))||e==="script"&&i.querySelector(Qu(s))||(e=i.createElement("link"),Dt(e,"link",t),pt(e),i.head.appendChild(e)))}}function jO(t,e){Li.m(t,e);var n=Co;if(n&&t){var i=e&&typeof e.as=="string"?e.as:"script",r='link[rel="modulepreload"][as="'+Sn(i)+'"][href="'+Sn(t)+'"]',s=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":s=Do(t)}if(!Vn.has(s)&&(t=Ve({rel:"modulepreload",href:t},e),Vn.set(s,t),n.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Qu(s)))return}i=n.createElement("link"),Dt(i,"link",t),pt(i),n.head.appendChild(i)}}}function qO(t,e,n){Li.S(t,e,n);var i=Co;if(i&&t){var r=Pa(i).hoistableStyles,s=to(t);e=e||"default";var a=r.get(s);if(!a){var o={loading:0,preload:null};if(a=i.querySelector(Ku(s)))o.loading=5;else{t=Ve({rel:"stylesheet",href:t,"data-precedence":e},n),(n=Vn.get(s))&&A_(t,n);var u=a=i.createElement("link");pt(u),Dt(u,"link",t),u._p=new Promise(function(c,d){u.onload=c,u.onerror=d}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,hh(a,e,i)}a={type:"stylesheet",instance:a,count:1,state:o},r.set(s,a)}}}function GO(t,e){Li.X(t,e);var n=Co;if(n&&t){var i=Pa(n).hoistableScripts,r=Do(t),s=i.get(r);s||(s=n.querySelector(Qu(r)),s||(t=Ve({src:t,async:!0},e),(e=Vn.get(r))&&b_(t,e),s=n.createElement("script"),pt(s),Dt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function HO(t,e){Li.M(t,e);var n=Co;if(n&&t){var i=Pa(n).hoistableScripts,r=Do(t),s=i.get(r);s||(s=n.querySelector(Qu(r)),s||(t=Ve({src:t,async:!0,type:"module"},e),(e=Vn.get(r))&&b_(t,e),s=n.createElement("script"),pt(s),Dt(s,"link",t),n.head.appendChild(s)),s={type:"script",instance:s,count:1,state:null},i.set(r,s))}}function AT(t,e,n,i){var r=(r=dr.current)?Jh(r):null;if(!r)throw Error(U(446));switch(t){case"meta":case"title":return null;case"style":return typeof n.precedence=="string"&&typeof n.href=="string"?(e=to(n.href),n=Pa(r).hoistableStyles,i=n.get(e),i||(i={type:"style",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(n.rel==="stylesheet"&&typeof n.href=="string"&&typeof n.precedence=="string"){t=to(n.href);var s=Pa(r).hoistableStyles,a=s.get(t);if(a||(r=r.ownerDocument||r,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},s.set(t,a),(s=r.querySelector(Ku(t)))&&!s._p&&(a.instance=s,a.state.loading=5),Vn.has(t)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Vn.set(t,n),s||KO(r,t,n,a.state))),e&&i===null)throw Error(U(528,""));return a}if(e&&i!==null)throw Error(U(529,""));return null;case"script":return e=n.async,n=n.src,typeof n=="string"&&e&&typeof e!="function"&&typeof e!="symbol"?(e=Do(n),n=Pa(r).hoistableScripts,i=n.get(e),i||(i={type:"script",instance:null,count:0,state:null},n.set(e,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(U(444,t))}}function to(t){return'href="'+Sn(t)+'"'}function Ku(t){return'link[rel="stylesheet"]['+t+"]"}function bS(t){return Ve({},t,{"data-precedence":t.precedence,precedence:null})}function KO(t,e,n,i){t.querySelector('link[rel="preload"][as="style"]['+e+"]")?i.loading=1:(e=t.createElement("link"),i.preload=e,e.addEventListener("load",function(){return i.loading|=1}),e.addEventListener("error",function(){return i.loading|=2}),Dt(e,"link",n),pt(e),t.head.appendChild(e))}function Do(t){return'[src="'+Sn(t)+'"]'}function Qu(t){return"script[async]"+t}function bT(t,e,n){if(e.count++,e.instance===null)switch(e.type){case"style":var i=t.querySelector('style[data-href~="'+Sn(n.href)+'"]');if(i)return e.instance=i,pt(i),i;var r=Ve({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return i=(t.ownerDocument||t).createElement("style"),pt(i),Dt(i,"style",r),hh(i,n.precedence,t),e.instance=i;case"stylesheet":r=to(n.href);var s=t.querySelector(Ku(r));if(s)return e.state.loading|=4,e.instance=s,pt(s),s;i=bS(n),(r=Vn.get(r))&&A_(i,r),s=(t.ownerDocument||t).createElement("link"),pt(s);var a=s;return a._p=new Promise(function(o,u){a.onload=o,a.onerror=u}),Dt(s,"link",i),e.state.loading|=4,hh(s,n.precedence,t),e.instance=s;case"script":return s=Do(n.src),(r=t.querySelector(Qu(s)))?(e.instance=r,pt(r),r):(i=n,(r=Vn.get(s))&&(i=Ve({},n),b_(i,r)),t=t.ownerDocument||t,r=t.createElement("script"),pt(r),Dt(r,"link",i),t.head.appendChild(r),e.instance=r);case"void":return null;default:throw Error(U(443,e.type))}else e.type==="stylesheet"&&!(e.state.loading&4)&&(i=e.instance,e.state.loading|=4,hh(i,n.precedence,t));return e.instance}function hh(t,e,n){for(var i=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,s=r,a=0;a<i.length;a++){var o=i[a];if(o.dataset.precedence===e)s=o;else if(s!==r)break}s?s.parentNode.insertBefore(t,s.nextSibling):(e=n.nodeType===9?n.head:n,e.insertBefore(t,e.firstChild))}function A_(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.title==null&&(t.title=e.title)}function b_(t,e){t.crossOrigin==null&&(t.crossOrigin=e.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=e.referrerPolicy),t.integrity==null&&(t.integrity=e.integrity)}var dh=null;function ST(t,e,n){if(dh===null){var i=new Map,r=dh=new Map;r.set(n,i)}else r=dh,i=r.get(n),i||(i=new Map,r.set(n,i));if(i.has(t))return i;for(i.set(t,null),n=n.getElementsByTagName(t),r=0;r<n.length;r++){var s=n[r];if(!(s[Bu]||s[bt]||t==="link"&&s.getAttribute("rel")==="stylesheet")&&s.namespaceURI!=="http://www.w3.org/2000/svg"){var a=s.getAttribute(e)||"";a=t+a;var o=i.get(a);o?o.push(s):i.set(a,[s])}}return i}function RT(t,e,n){t=t.ownerDocument||t,t.head.insertBefore(n,e==="title"?t.querySelector("head > title"):null)}function QO(t,e,n){if(n===1||e.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof e.precedence!="string"||typeof e.href!="string"||e.href==="")break;return!0;case"link":if(typeof e.rel!="string"||typeof e.href!="string"||e.href===""||e.onLoad||e.onError)break;switch(e.rel){case"stylesheet":return t=e.disabled,typeof e.precedence=="string"&&t==null;default:return!0}case"script":if(e.async&&typeof e.async!="function"&&typeof e.async!="symbol"&&!e.onLoad&&!e.onError&&e.src&&typeof e.src=="string")return!0}return!1}function SS(t){return!(t.type==="stylesheet"&&!(t.state.loading&3))}function $O(t,e,n,i){if(n.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var r=to(i.href),s=e.querySelector(Ku(r));if(s){e=s._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(t.count++,t=Zh.bind(t),e.then(t,t)),n.state.loading|=4,n.instance=s,pt(s);return}s=e.ownerDocument||e,i=bS(i),(r=Vn.get(r))&&A_(i,r),s=s.createElement("link"),pt(s);var a=s;a._p=new Promise(function(o,u){a.onload=o,a.onerror=u}),Dt(s,"link",i),n.instance=s}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(t.count++,n=Zh.bind(t),e.addEventListener("load",n),e.addEventListener("error",n))}}var Nm=0;function YO(t,e){return t.stylesheets&&t.count===0&&fh(t,t.stylesheets),0<t.count||0<t.imgCount?function(n){var i=setTimeout(function(){if(t.stylesheets&&fh(t,t.stylesheets),t.unsuspend){var s=t.unsuspend;t.unsuspend=null,s()}},6e4+e);0<t.imgBytes&&Nm===0&&(Nm=62500*DO());var r=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&fh(t,t.stylesheets),t.unsuspend)){var s=t.unsuspend;t.unsuspend=null,s()}},(t.imgBytes>Nm?50:800)+e);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function Zh(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)fh(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var ed=null;function fh(t,e){t.stylesheets=null,t.unsuspend!==null&&(t.count++,ed=new Map,e.forEach(XO,t),ed=null,Zh.call(t))}function XO(t,e){if(!(e.state.loading&4)){var n=ed.get(t);if(n)var i=n.get(null);else{n=new Map,ed.set(t,n);for(var r=t.querySelectorAll("link[data-precedence],style[data-precedence]"),s=0;s<r.length;s++){var a=r[s];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(n.set(a.dataset.precedence,a),i=a)}i&&n.set(null,i)}r=e.instance,a=r.getAttribute("data-precedence"),s=n.get(a)||i,s===i&&n.set(null,r),n.set(a,r),this.count++,i=Zh.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),s?s.parentNode.insertBefore(r,s.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(r,t.firstChild)),e.state.loading|=4}}var hu={$$typeof:yi,Provider:null,Consumer:null,_currentValue:ms,_currentValue2:ms,_threadCount:0};function WO(t,e,n,i,r,s,a,o,u){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zf(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zf(0),this.hiddenUpdates=Zf(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=s,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function RS(t,e,n,i,r,s,a,o,u,c,d,f){return t=new WO(t,e,n,a,u,c,d,f,o),e=1,s===!0&&(e|=24),s=hn(3,null,null,e),t.current=s,s.stateNode=t,e=Wg(),e.refCount++,t.pooledCache=e,e.refCount++,s.memoizedState={element:i,isDehydrated:n,cache:e},e_(s),t}function CS(t){return t?(t=Sa,t):Sa}function DS(t,e,n,i,r,s){r=CS(r),i.context===null?i.context=r:i.pendingContext=r,i=mr(e),i.payload={element:n},s=s===void 0?null:s,s!==null&&(i.callback=s),n=pr(t,i,e),n!==null&&(nn(n,t,e),kl(n,t,e))}function CT(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function S_(t,e){CT(t,e),(t=t.alternate)&&CT(t,e)}function NS(t){if(t.tag===13||t.tag===31){var e=qs(t,67108864);e!==null&&nn(e,t,67108864),S_(t,67108864)}}function DT(t){if(t.tag===13||t.tag===31){var e=_n();e=Lg(e);var n=qs(t,e);n!==null&&nn(n,t,e),S_(t,e)}}var td=!0;function JO(t,e,n,i){var r=J.T;J.T=null;var s=ge.p;try{ge.p=2,R_(t,e,n,i)}finally{ge.p=s,J.T=r}}function ZO(t,e,n,i){var r=J.T;J.T=null;var s=ge.p;try{ge.p=8,R_(t,e,n,i)}finally{ge.p=s,J.T=r}}function R_(t,e,n,i){if(td){var r=Fp(i);if(r===null)Cm(t,e,i,nd,n),NT(t,i);else if(tP(r,t,e,n,i))i.stopPropagation();else if(NT(t,i),e&4&&-1<eP.indexOf(t)){for(;r!==null;){var s=Ao(r);if(s!==null)switch(s.tag){case 3:if(s=s.stateNode,s.current.memoizedState.isDehydrated){var a=Zr(s.pendingLanes);if(a!==0){var o=s;for(o.pendingLanes|=2,o.entangledLanes|=2;a;){var u=1<<31-gn(a);o.entanglements[1]|=u,a&=~u}ai(s),!(pe&6)&&(Hh=mn()+500,Hu(0))}}break;case 31:case 13:o=qs(s,2),o!==null&&nn(o,s,2),Bd(),S_(s,2)}if(s=Fp(i),s===null&&Cm(t,e,i,nd,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Cm(t,e,i,null,n)}}function Fp(t){return t=Fg(t),C_(t)}var nd=null;function C_(t){if(nd=null,t=Ea(t),t!==null){var e=ku(t);if(e===null)t=null;else{var n=e.tag;if(n===13){if(t=XI(e),t!==null)return t;t=null}else if(n===31){if(t=WI(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null)}}return nd=t,null}function OS(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(z1()){case tA:return 2;case nA:return 8;case Oh:case B1:return 32;case iA:return 268435456;default:return 32}default:return 32}}var jp=!1,yr=null,vr=null,Er=null,du=new Map,fu=new Map,nr=[],eP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function NT(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":Er=null;break;case"pointerover":case"pointerout":du.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":fu.delete(e.pointerId)}}function ul(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ao(e),e!==null&&NS(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function tP(t,e,n,i,r){switch(e){case"focusin":return yr=ul(yr,t,e,n,i,r),!0;case"dragenter":return vr=ul(vr,t,e,n,i,r),!0;case"mouseover":return Er=ul(Er,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return du.set(s,ul(du.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,fu.set(s,ul(fu.get(s)||null,t,e,n,i,r)),!0}return!1}function PS(t){var e=Ea(t.target);if(e!==null){var n=ku(e);if(n!==null){if(e=n.tag,e===13){if(e=XI(n),e!==null){t.blockedOn=e,mE(t.priority,function(){DT(n)});return}}else if(e===31){if(e=WI(n),e!==null){t.blockedOn=e,mE(t.priority,function(){DT(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function mh(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fp(t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);ap=i,n.target.dispatchEvent(i),ap=null}else return e=Ao(n),e!==null&&NS(e),t.blockedOn=n,!1;e.shift()}return!0}function OT(t,e,n){mh(t)&&n.delete(e)}function nP(){jp=!1,yr!==null&&mh(yr)&&(yr=null),vr!==null&&mh(vr)&&(vr=null),Er!==null&&mh(Er)&&(Er=null),du.forEach(OT),fu.forEach(OT)}function Gc(t,e){t.blockedOn===e&&(t.blockedOn=null,jp||(jp=!0,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,nP)))}var Hc=null;function PT(t){Hc!==t&&(Hc=t,ct.unstable_scheduleCallback(ct.unstable_NormalPriority,function(){Hc===t&&(Hc=null);for(var e=0;e<t.length;e+=3){var n=t[e],i=t[e+1],r=t[e+2];if(typeof i!="function"){if(C_(i||n)===null)continue;break}var s=Ao(n);s!==null&&(t.splice(e,3),e-=3,wp(s,{pending:!0,data:r,method:n.method,action:i},i,r))}}))}function no(t){function e(u){return Gc(u,t)}yr!==null&&Gc(yr,t),vr!==null&&Gc(vr,t),Er!==null&&Gc(Er,t),du.forEach(e),fu.forEach(e);for(var n=0;n<nr.length;n++){var i=nr[n];i.blockedOn===t&&(i.blockedOn=null)}for(;0<nr.length&&(n=nr[0],n.blockedOn===null);)PS(n),n.blockedOn===null&&nr.shift();if(n=(t.ownerDocument||t).$$reactFormReplay,n!=null)for(i=0;i<n.length;i+=3){var r=n[i],s=n[i+1],a=r[rn]||null;if(typeof s=="function")a||PT(n);else if(a){var o=null;if(s&&s.hasAttribute("formAction")){if(r=s,a=s[rn]||null)o=a.formAction;else if(C_(r)!==null)continue}else o=a.action;typeof o=="function"?n[i+1]=o:(n.splice(i,3),i-=3),PT(n)}}}function VS(){function t(s){s.canIntercept&&s.info==="react-transition"&&s.intercept({handler:function(){return new Promise(function(a){return r=a})},focusReset:"manual",scroll:"manual"})}function e(){r!==null&&(r(),r=null),i||setTimeout(n,20)}function n(){if(!i&&!navigation.transition){var s=navigation.currentEntry;s&&s.url!=null&&navigation.navigate(s.url,{state:s.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",e),navigation.addEventListener("navigateerror",e),setTimeout(n,100),function(){i=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",e),navigation.removeEventListener("navigateerror",e),r!==null&&(r(),r=null)}}}function D_(t){this._internalRoot=t}qd.prototype.render=D_.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(U(409));var n=e.current,i=_n();DS(n,i,t,e,null,null)};qd.prototype.unmount=D_.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;DS(t.current,2,null,t,null,null),Bd(),e[Io]=null}};function qd(t){this._internalRoot=t}qd.prototype.unstable_scheduleHydration=function(t){if(t){var e=lA();t={blockedOn:null,target:t,priority:e};for(var n=0;n<nr.length&&e!==0&&e<nr[n].priority;n++);nr.splice(n,0,t),n===0&&PS(t)}};var VT=$I.version;if(VT!=="19.2.0")throw Error(U(527,VT,"19.2.0"));ge.findDOMNode=function(t){var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(U(188)):(t=Object.keys(t).join(","),Error(U(268,t)));return t=P1(e),t=t!==null?JI(t):null,t=t===null?null:t.stateNode,t};var iP={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:J,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Kc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Kc.isDisabled&&Kc.supportsFiber)try{Lu=Kc.inject(iP),pn=Kc}catch{}}Sd.createRoot=function(t,e){if(!YI(t))throw Error(U(299));var n=!1,i="",r=Ab,s=bb,a=Sb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onUncaughtError!==void 0&&(r=e.onUncaughtError),e.onCaughtError!==void 0&&(s=e.onCaughtError),e.onRecoverableError!==void 0&&(a=e.onRecoverableError)),e=RS(t,1,!1,null,null,n,i,null,r,s,a,VS),t[Io]=e.current,I_(t),new D_(e)};Sd.hydrateRoot=function(t,e,n){if(!YI(t))throw Error(U(299));var i=!1,r="",s=Ab,a=bb,o=Sb,u=null;return n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(r=n.identifierPrefix),n.onUncaughtError!==void 0&&(s=n.onUncaughtError),n.onCaughtError!==void 0&&(a=n.onCaughtError),n.onRecoverableError!==void 0&&(o=n.onRecoverableError),n.formState!==void 0&&(u=n.formState)),e=RS(t,1,!0,e,n??null,i,r,u,s,a,o,VS),e.context=CS(null),n=e.current,i=_n(),i=Lg(i),r=mr(i),r.callback=null,pr(n,r,i),n=i,e.current.lanes=n,zu(e,n),ai(e),t[Io]=e.current,I_(t),new qd(e)};Sd.version="19.2.0";function xS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xS)}catch(t){console.error(t)}}xS(),jI.exports=Sd;var rP=jI.exports,xT={};/**
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
 */const MS=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let r=t.charCodeAt(i);r<128?e[n++]=r:r<2048?(e[n++]=r>>6|192,e[n++]=r&63|128):(r&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(r=65536+((r&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=r>>18|240,e[n++]=r>>12&63|128,e[n++]=r>>6&63|128,e[n++]=r&63|128):(e[n++]=r>>12|224,e[n++]=r>>6&63|128,e[n++]=r&63|128)}return e},sP=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const r=t[n++];if(r<128)e[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=t[n++];e[i++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=t[n++],a=t[n++],o=t[n++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;e[i++]=String.fromCharCode(55296+(u>>10)),e[i++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],a=t[n++];e[i++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},kS={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<t.length;r+=3){const s=t[r],a=r+1<t.length,o=a?t[r+1]:0,u=r+2<t.length,c=u?t[r+2]:0,d=s>>2,f=(s&3)<<4|o>>4;let p=(o&15)<<2|c>>6,g=c&63;u||(g=64,a||(p=64)),i.push(n[d],n[f],n[p],n[g])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(MS(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sP(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<t.length;){const s=n[t.charAt(r++)],o=r<t.length?n[t.charAt(r)]:0;++r;const c=r<t.length?n[t.charAt(r)]:64;++r;const f=r<t.length?n[t.charAt(r)]:64;if(++r,s==null||o==null||c==null||f==null)throw new aP;const p=s<<2|o>>4;if(i.push(p),c!==64){const g=o<<4&240|c>>2;if(i.push(g),f!==64){const R=c<<6&192|f;i.push(R)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class aP extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const oP=function(t){const e=MS(t);return kS.encodeByteArray(e,!0)},id=function(t){return oP(t).replace(/\./g,"")},LS=function(t){try{return kS.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function rd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!lP(n)||(t[n]=rd(t[n],e[n]));return t}function lP(t){return t!=="__proto__"}/**
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
 */function uP(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const cP=()=>uP().__FIREBASE_DEFAULTS__,hP=()=>{if(typeof process>"u"||typeof xT>"u")return;const t=xT.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},dP=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&LS(t[1]);return e&&JSON.parse(e)},N_=()=>{try{return cP()||hP()||dP()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},US=()=>{var t;return(t=N_())===null||t===void 0?void 0:t.config},fP=t=>{var e;return(e=N_())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class mP{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
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
 */function pP(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",r=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[id(JSON.stringify(n)),id(JSON.stringify(a)),""].join(".")}/**
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
 */function Ue(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function gP(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ue())}function O_(){var t;const e=(t=N_())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function zS(){return typeof self=="object"&&self.self===self}function BS(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function P_(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function FS(){const t=Ue();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function jS(){return!O_()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function mu(){try{return typeof indexedDB=="object"}catch{return!1}}function _P(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
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
 */const yP="FirebaseError";class _t extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=yP,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hs.prototype.create)}}class Hs{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?vP(s,i):"Error",o=`${this.serviceName}: ${a} (${r}).`;return new _t(r,o,i)}}function vP(t,e){return t.replace(EP,(n,i)=>{const r=e[i];return r!=null?String(r):`<${i}?>`})}const EP=/\{\$([^}]+)}/g;/**
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
 */function MT(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function TP(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function pu(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const r of n){if(!i.includes(r))return!1;const s=t[r],a=e[r];if(kT(s)&&kT(a)){if(!pu(s,a))return!1}else if(s!==a)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function kT(t){return t!==null&&typeof t=="object"}/**
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
 */function No(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(r=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Na(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[r,s]=i.split("=");e[decodeURIComponent(r)]=decodeURIComponent(s)}}),e}function Al(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function qS(t,e){const n=new wP(t,e);return n.subscribe.bind(n)}class wP{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let r;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");IP(e,["next","error","complete"])?r=e:r={next:e,error:n,complete:i},r.next===void 0&&(r.next=Om),r.error===void 0&&(r.error=Om),r.complete===void 0&&(r.complete=Om);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IP(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Om(){}/**
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
 */function X(t){return t&&t._delegate?t._delegate:t}class xn{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ns="[DEFAULT]";/**
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
 */class AP{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new mP;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&i.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(SP(e))try{this.getOrInitializeService({instanceIdentifier:ns})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:r});i.resolve(s)}catch{}}}}clearInstance(e=ns){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ns){return this.instances.has(e)}getOptions(e=ns){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);i===o&&a.resolve(r)}return r}onInit(e,n){var i;const r=this.normalizeInstanceIdentifier(n),s=(i=this.onInitCallbacks.get(r))!==null&&i!==void 0?i:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const r of i)try{r(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bP(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=ns){return this.component?this.component.multipleInstances?e:ns:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bP(t){return t===ns?void 0:t}function SP(t){return t.instantiationMode==="EAGER"}/**
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
 */class GS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AP(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const V_=[];var ae;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ae||(ae={}));const HS={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},RP=ae.INFO,CP={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},DP=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),r=CP[e];if(r)console[r](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gd{constructor(e){this.name=e,this._logLevel=RP,this._logHandler=DP,this._userLogHandler=null,V_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?HS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}function NP(t){V_.forEach(e=>{e.setLogLevel(t)})}function OP(t,e){for(const n of V_){let i=null;e&&e.level&&(i=HS[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(r,s,...a)=>{const o=a.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(i??r.logLevel)&&t({level:ae[s].toLowerCase(),message:o,args:a,type:r.name})}}}const PP=(t,e)=>e.some(n=>t instanceof n);let LT,UT;function VP(){return LT||(LT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function xP(){return UT||(UT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const KS=new WeakMap,qp=new WeakMap,QS=new WeakMap,Pm=new WeakMap,x_=new WeakMap;function MP(t){const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("success",s),t.removeEventListener("error",a)},s=()=>{n(Tr(t.result)),r()},a=()=>{i(t.error),r()};t.addEventListener("success",s),t.addEventListener("error",a)});return e.then(n=>{n instanceof IDBCursor&&KS.set(n,t)}).catch(()=>{}),x_.set(e,t),e}function kP(t){if(qp.has(t))return;const e=new Promise((n,i)=>{const r=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",a),t.removeEventListener("abort",a)},s=()=>{n(),r()},a=()=>{i(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",s),t.addEventListener("error",a),t.addEventListener("abort",a)});qp.set(t,e)}let Gp={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return qp.get(t);if(e==="objectStoreNames")return t.objectStoreNames||QS.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LP(t){Gp=t(Gp)}function UP(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Vm(this),e,...n);return QS.set(i,e.sort?e.sort():[e]),Tr(i)}:xP().includes(t)?function(...e){return t.apply(Vm(this),e),Tr(KS.get(this))}:function(...e){return Tr(t.apply(Vm(this),e))}}function zP(t){return typeof t=="function"?UP(t):(t instanceof IDBTransaction&&kP(t),PP(t,VP())?new Proxy(t,Gp):t)}function Tr(t){if(t instanceof IDBRequest)return MP(t);if(Pm.has(t))return Pm.get(t);const e=zP(t);return e!==t&&(Pm.set(t,e),x_.set(e,t)),e}const Vm=t=>x_.get(t);function BP(t,e,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const a=indexedDB.open(t,e),o=Tr(a);return i&&a.addEventListener("upgradeneeded",u=>{i(Tr(a.result),u.oldVersion,u.newVersion,Tr(a.transaction),u)}),n&&a.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),o.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",c=>r(c.oldVersion,c.newVersion,c))}).catch(()=>{}),o}const FP=["get","getKey","getAll","getAllKeys","count"],jP=["put","add","delete","clear"],xm=new Map;function zT(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(xm.get(e))return xm.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,r=jP.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(r||FP.includes(n)))return;const s=async function(a,...o){const u=this.transaction(a,r?"readwrite":"readonly");let c=u.store;return i&&(c=c.index(o.shift())),(await Promise.all([c[n](...o),r&&u.done]))[0]};return xm.set(e,s),s}LP(t=>({...t,get:(e,n,i)=>zT(e,n)||t.get(e,n,i),has:(e,n)=>!!zT(e,n)||t.has(e,n)}));/**
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
 */class qP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(GP(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function GP(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const sd="@firebase/app",Hp="0.10.5";/**
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
 */const Rs=new Gd("@firebase/app"),HP="@firebase/app-compat",KP="@firebase/analytics-compat",QP="@firebase/analytics",$P="@firebase/app-check-compat",YP="@firebase/app-check",XP="@firebase/auth",WP="@firebase/auth-compat",JP="@firebase/database",ZP="@firebase/database-compat",eV="@firebase/functions",tV="@firebase/functions-compat",nV="@firebase/installations",iV="@firebase/installations-compat",rV="@firebase/messaging",sV="@firebase/messaging-compat",aV="@firebase/performance",oV="@firebase/performance-compat",lV="@firebase/remote-config",uV="@firebase/remote-config-compat",cV="@firebase/storage",hV="@firebase/storage-compat",dV="@firebase/firestore",fV="@firebase/vertexai-preview",mV="@firebase/firestore-compat",pV="firebase",gV="10.12.2";/**
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
 */const Rr="[DEFAULT]",_V={[sd]:"fire-core",[HP]:"fire-core-compat",[QP]:"fire-analytics",[KP]:"fire-analytics-compat",[YP]:"fire-app-check",[$P]:"fire-app-check-compat",[XP]:"fire-auth",[WP]:"fire-auth-compat",[JP]:"fire-rtdb",[ZP]:"fire-rtdb-compat",[eV]:"fire-fn",[tV]:"fire-fn-compat",[nV]:"fire-iid",[iV]:"fire-iid-compat",[rV]:"fire-fcm",[sV]:"fire-fcm-compat",[aV]:"fire-perf",[oV]:"fire-perf-compat",[lV]:"fire-rc",[uV]:"fire-rc-compat",[cV]:"fire-gcs",[hV]:"fire-gcs-compat",[dV]:"fire-fst",[mV]:"fire-fst-compat",[fV]:"fire-vertex","fire-js":"fire-js",[pV]:"fire-js-all"};/**
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
 */const Cr=new Map,io=new Map,ro=new Map;function gu(t,e){try{t.container.addComponent(e)}catch(n){Rs.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function $S(t,e){t.container.addOrOverwriteComponent(e)}function Vi(t){const e=t.name;if(ro.has(e))return Rs.debug(`There were multiple attempts to register component ${e}.`),!1;ro.set(e,t);for(const n of Cr.values())gu(n,t);for(const n of io.values())gu(n,t);return!0}function YS(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function yV(t,e,n=Rr){YS(t,e).clearInstance(n)}function XS(t){return t.options!==void 0}function Ge(t){return t.settings!==void 0}function vV(){ro.clear()}/**
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
 */const EV={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Hs("app","Firebase",EV);/**
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
 */let WS=class{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}};/**
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
 */class TV extends WS{constructor(e,n,i,r){const s=n.automaticDataCollectionEnabled!==void 0?n.automaticDataCollectionEnabled:!1,a={name:i,automaticDataCollectionEnabled:s};if(e.apiKey!==void 0)super(e,a,r);else{const o=e;super(o.options,a,r)}this._serverConfig=Object.assign({automaticDataCollectionEnabled:s},n),this._finalizationRegistry=new FinalizationRegistry(()=>{this.automaticCleanup()}),this._refCount=0,this.incRefCount(this._serverConfig.releaseOnDeref),this._serverConfig.releaseOnDeref=void 0,n.releaseOnDeref=void 0,yn(sd,Hp,"serverapp")}toJSON(){}get refCount(){return this._refCount}incRefCount(e){this.isDeleted||(this._refCount++,e!==void 0&&this._finalizationRegistry.register(e,this))}decRefCount(){return this.isDeleted?0:--this._refCount}automaticCleanup(){k_(this)}get settings(){return this.checkDestroyed(),this._serverConfig}checkDestroyed(){if(this.isDeleted)throw Pn.create("server-app-deleted")}}/**
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
 */const Br=gV;function M_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Rr,automaticDataCollectionEnabled:!1},e),r=i.name;if(typeof r!="string"||!r)throw Pn.create("bad-app-name",{appName:String(r)});if(n||(n=US()),!n)throw Pn.create("no-options");const s=Cr.get(r);if(s){if(pu(n,s.options)&&pu(i,s.config))return s;throw Pn.create("duplicate-app",{appName:r})}const a=new GS(r);for(const u of ro.values())a.addComponent(u);const o=new WS(n,i,a);return Cr.set(r,o),o}function wV(t,e){if(zS())throw Pn.create("invalid-server-app-environment");e.automaticDataCollectionEnabled===void 0&&(e.automaticDataCollectionEnabled=!1);let n;XS(t)?n=t.options:n=t;const i=Object.assign(Object.assign({},e),n);i.releaseOnDeref!==void 0&&delete i.releaseOnDeref;const r=c=>[...c].reduce((d,f)=>Math.imul(31,d)+f.charCodeAt(0)|0,0);if(e.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Pn.create("finalization-registry-not-supported",{});const s=""+r(JSON.stringify(i)),a=io.get(s);if(a)return a.incRefCount(e.releaseOnDeref),a;const o=new GS(s);for(const c of ro.values())o.addComponent(c);const u=new TV(n,e,s,o);return io.set(s,u),u}function IV(t=Rr){const e=Cr.get(t);if(!e&&t===Rr&&US())return M_();if(!e)throw Pn.create("no-app",{appName:t});return e}function AV(){return Array.from(Cr.values())}async function k_(t){let e=!1;const n=t.name;Cr.has(n)?(e=!0,Cr.delete(n)):io.has(n)&&t.decRefCount()<=0&&(io.delete(n),e=!0),e&&(await Promise.all(t.container.getProviders().map(i=>i.delete())),t.isDeleted=!0)}function yn(t,e,n){var i;let r=(i=_V[t])!==null&&i!==void 0?i:t;n&&(r+=`-${n}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const o=[`Unable to register library "${r}" with version "${e}":`];s&&o.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Rs.warn(o.join(" "));return}Vi(new xn(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function JS(t,e){if(t!==null&&typeof t!="function")throw Pn.create("invalid-log-argument");OP(t,e)}function ZS(t){NP(t)}/**
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
 */const bV="firebase-heartbeat-database",SV=1,_u="firebase-heartbeat-store";let Mm=null;function e0(){return Mm||(Mm=BP(bV,SV,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(_u)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),Mm}async function RV(t){try{const n=(await e0()).transaction(_u),i=await n.objectStore(_u).get(t0(t));return await n.done,i}catch(e){if(e instanceof _t)Rs.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Rs.warn(n.message)}}}async function BT(t,e){try{const i=(await e0()).transaction(_u,"readwrite");await i.objectStore(_u).put(e,t0(t)),await i.done}catch(n){if(n instanceof _t)Rs.warn(n.message);else{const i=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Rs.warn(i.message)}}}function t0(t){return`${t.name}!${t.options.appId}`}/**
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
 */const CV=1024,DV=30*24*60*60*1e3;class NV{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new PV(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;const r=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=FT();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(a=>a.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(a=>{const o=new Date(a.date).valueOf();return Date.now()-o<=DV}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=FT(),{heartbeatsToSend:i,unsentEntries:r}=OV(this._heartbeatsCache.heartbeats),s=id(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function FT(){return new Date().toISOString().substring(0,10)}function OV(t,e=CV){const n=[];let i=t.slice();for(const r of t){const s=n.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),jT(n)>e){s.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),jT(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class PV{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return mu()?_P().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await RV(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return BT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const r=await this.read();return BT(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function jT(t){return id(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function VV(t){Vi(new xn("platform-logger",e=>new qP(e),"PRIVATE")),Vi(new xn("heartbeat",e=>new NV(e),"PRIVATE")),yn(sd,Hp,t),yn(sd,Hp,"esm2017"),yn("fire-js","")}VV("");const xV=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:_t,SDK_VERSION:Br,_DEFAULT_ENTRY_NAME:Rr,_addComponent:gu,_addOrOverwriteComponent:$S,_apps:Cr,_clearComponents:vV,_components:ro,_getProvider:YS,_isFirebaseApp:XS,_isFirebaseServerApp:Ge,_registerComponent:Vi,_removeServiceInstance:yV,_serverApps:io,deleteApp:k_,getApp:IV,getApps:AV,initializeApp:M_,initializeServerApp:wV,onLog:JS,registerVersion:yn,setLogLevel:ZS},Symbol.toStringTag,{value:"Module"}));/**
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
 */class MV{constructor(e,n){this._delegate=e,this.firebase=n,gu(e,new xn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),k_(this._delegate)))}_getService(e,n=Rr){var i;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((i=r.getComponent())===null||i===void 0?void 0:i.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:n})}_removeServiceInstance(e,n=Rr){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){gu(this._delegate,e)}_addOrOverwriteComponent(e){$S(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const kV={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance."},qT=new Hs("app-compat","Firebase",kV);/**
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
 */function LV(t){const e={},n={__esModule:!0,initializeApp:s,app:r,registerVersion:yn,setLogLevel:ZS,onLog:JS,apps:null,SDK_VERSION:Br,INTERNAL:{registerComponent:o,removeApp:i,useAsService:u,modularAPIs:xV}};n.default=n,Object.defineProperty(n,"apps",{get:a});function i(c){delete e[c]}function r(c){if(c=c||Rr,!MT(e,c))throw qT.create("no-app",{appName:c});return e[c]}r.App=t;function s(c,d={}){const f=M_(c,d);if(MT(e,f.name))return e[f.name];const p=new t(f,n);return e[f.name]=p,p}function a(){return Object.keys(e).map(c=>e[c])}function o(c){const d=c.name,f=d.replace("-compat","");if(Vi(c)&&c.type==="PUBLIC"){const p=(g=r())=>{if(typeof g[f]!="function")throw qT.create("invalid-app-argument",{appName:d});return g[f]()};c.serviceProps!==void 0&&rd(p,c.serviceProps),n[f]=p,t.prototype[f]=function(...g){return this._getService.bind(this,d).apply(this,c.multipleInstances?g:[])}}return c.type==="PUBLIC"?n[f]:null}function u(c,d){return d==="serverAuth"?null:d}return n}/**
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
 */function n0(){const t=LV(MV);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:n0,extendNamespace:e,createSubscribe:qS,ErrorFactory:Hs,deepExtend:rd});function e(n){rd(t,n)}return t}const UV=n0();/**
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
 */const GT=new Gd("@firebase/app-compat"),zV="@firebase/app-compat",BV="0.2.35";/**
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
 */function FV(t){yn(zV,BV,t)}/**
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
 */if(zS()&&self.firebase!==void 0){GT.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&GT.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Jt=UV;FV();var jV="firebase",qV="10.12.2";/**
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
 */Jt.registerVersion(jV,qV,"app-compat");function L_(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var r=0,i=Object.getOwnPropertySymbols(t);r<i.length;r++)e.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(t,i[r])&&(n[i[r]]=t[i[r]]);return n}const cl={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",TWITTER:"twitter.com"},sa={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function GV(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function i0(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const HV=GV,KV=i0,r0=new Hs("auth","Firebase",i0());/**
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
 */const ad=new Gd("@firebase/auth");function QV(t,...e){ad.logLevel<=ae.WARN&&ad.warn(`Auth (${Br}): ${t}`,...e)}function ph(t,...e){ad.logLevel<=ae.ERROR&&ad.error(`Auth (${Br}): ${t}`,...e)}/**
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
 */function Nt(t,...e){throw z_(t,...e)}function ut(t,...e){return z_(t,...e)}function U_(t,e,n){const i=Object.assign(Object.assign({},KV()),{[e]:n});return new Hs("auth","Firebase",i).create(e,{appName:t.name})}function yt(t){return U_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Oo(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&Nt(t,"argument-error"),U_(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function z_(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return r0.create(t,...e)}function j(t,e,...n){if(!t)throw z_(e,...n)}function Xn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ph(e),new Error(e)}function zn(t,e){t||Xn(e)}/**
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
 */function yu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function B_(){return HT()==="http:"||HT()==="https:"}function HT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $V(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B_()||BS()||"connection"in navigator)?navigator.onLine:!0}function YV(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class $u{constructor(e,n){this.shortDelay=e,this.longDelay=n,zn(n>e,"Short delay should be less than long delay!"),this.isMobile=gP()||P_()}get(){return $V()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function F_(t,e){zn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class s0{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Xn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Xn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Xn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const XV={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const WV=new $u(3e4,6e4);function Qe(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function $e(t,e,n,i,r={}){return a0(t,r,async()=>{let s={},a={};i&&(e==="GET"?a=i:s={body:JSON.stringify(i)});const o=No(Object.assign({key:t.config.apiKey},a)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),s0.fetch()(o0(t,t.config.apiHost,n,o),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function a0(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},XV),e);try{const r=new ZV(t),s=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw bl(t,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[u,c]=o.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw bl(t,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw bl(t,"email-already-in-use",a);if(u==="USER_DISABLED")throw bl(t,"user-disabled",a);const d=i[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw U_(t,d,c);Nt(t,d)}}catch(r){if(r instanceof _t)throw r;Nt(t,"network-request-failed",{message:String(r)})}}async function Ui(t,e,n,i,r={}){const s=await $e(t,e,n,i,r);return"mfaPendingCredential"in s&&Nt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function o0(t,e,n,i){const r=`${e}${n}?${i}`;return t.config.emulator?F_(t.config,r):`${t.config.apiScheme}://${r}`}function JV(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class ZV{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(ut(this.auth,"network-request-failed")),WV.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function bl(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=ut(t,e,i);return r.customData._tokenResponse=n,r}/**
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
 */function KT(t){return t!==void 0&&t.getResponse!==void 0}function QT(t){return t!==void 0&&t.enterprise!==void 0}class ex{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return JV(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function tx(t){return(await $e(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function nx(t,e){return $e(t,"GET","/v2/recaptchaConfig",Qe(t,e))}/**
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
 */async function ix(t,e){return $e(t,"POST","/v1/accounts:delete",e)}async function rx(t,e){return $e(t,"POST","/v1/accounts:update",e)}async function l0(t,e){return $e(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Hl(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function sx(t,e=!1){const n=X(t),i=await n.getIdToken(e),r=Hd(i);j(r&&r.exp&&r.auth_time&&r.iat,n.auth,"internal-error");const s=typeof r.firebase=="object"?r.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:r,token:i,authTime:Hl(km(r.auth_time)),issuedAtTime:Hl(km(r.iat)),expirationTime:Hl(km(r.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function km(t){return Number(t)*1e3}function Hd(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return ph("JWT malformed, contained fewer than 3 sections"),null;try{const r=LS(n);return r?JSON.parse(r):(ph("Failed to decode base64 JWT payload"),null)}catch(r){return ph("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}function $T(t){const e=Hd(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function xi(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof _t&&ax(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function ax({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ox{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const r=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Kp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Hl(this.lastLoginAt),this.creationTime=Hl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function vu(t){var e;const n=t.auth,i=await t.getIdToken(),r=await xi(t,l0(n,{idToken:i}));j(r==null?void 0:r.users.length,n,"internal-error");const s=r.users[0];t._notifyReloadListener(s);const a=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?u0(s.providerUserInfo):[],o=ux(t.providerData,a),u=t.isAnonymous,c=!(t.email&&s.passwordHash)&&!(o!=null&&o.length),d=u?c:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new Kp(s.createdAt,s.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function lx(t){const e=X(t);await vu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ux(t,e){return[...t.filter(i=>!e.some(r=>r.providerId===i.providerId)),...e]}function u0(t){return t.map(e=>{var{providerId:n}=e,i=L_(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function cx(t,e){const n=await a0(t,{},async()=>{const i=No({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:s}=t.config,a=o0(t,r,"/v1/token",`key=${s}`),o=await t._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",s0.fetch()(a,{method:"POST",headers:o,body:i})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function hx(t,e){return $e(t,"POST","/v2/accounts:revokeToken",Qe(t,e))}/**
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
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$T(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=$T(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:r,expiresIn:s}=await cx(e,n);this.updateTokensAndExpiration(i,r,Number(s))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:r,expirationTime:s}=n,a=new za;return i&&(j(typeof i=="string","internal-error",{appName:e}),a.refreshToken=i),r&&(j(typeof r=="string","internal-error",{appName:e}),a.accessToken=r),s&&(j(typeof s=="number","internal-error",{appName:e}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return Xn("not implemented")}}/**
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
 */function Qi(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Ti{constructor(e){var{uid:n,auth:i,stsTokenManager:r}=e,s=L_(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ox(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Kp(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await xi(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return sx(this,e)}reload(){return lx(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Ti(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await vu(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ge(this.auth.app))return Promise.reject(yt(this.auth));const e=await this.getIdToken();return await xi(this,ix(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,r,s,a,o,u,c,d;const f=(i=n.displayName)!==null&&i!==void 0?i:void 0,p=(r=n.email)!==null&&r!==void 0?r:void 0,g=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,R=(a=n.photoURL)!==null&&a!==void 0?a:void 0,N=(o=n.tenantId)!==null&&o!==void 0?o:void 0,x=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,I=(c=n.createdAt)!==null&&c!==void 0?c:void 0,E=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:A,emailVerified:O,isAnonymous:L,providerData:F,stsTokenManager:T}=n;j(A&&T,e,"internal-error");const _=za.fromJSON(this.name,T);j(typeof A=="string",e,"internal-error"),Qi(f,e.name),Qi(p,e.name),j(typeof O=="boolean",e,"internal-error"),j(typeof L=="boolean",e,"internal-error"),Qi(g,e.name),Qi(R,e.name),Qi(N,e.name),Qi(x,e.name),Qi(I,e.name),Qi(E,e.name);const v=new Ti({uid:A,auth:e,email:p,emailVerified:O,displayName:f,isAnonymous:L,photoURL:R,phoneNumber:g,tenantId:N,stsTokenManager:_,createdAt:I,lastLoginAt:E});return F&&Array.isArray(F)&&(v.providerData=F.map(w=>Object.assign({},w))),x&&(v._redirectEventId=x),v}static async _fromIdTokenResponse(e,n,i=!1){const r=new za;r.updateFromServerResponse(n);const s=new Ti({uid:n.localId,auth:e,stsTokenManager:r,isAnonymous:i});return await vu(s),s}static async _fromGetAccountInfoResponse(e,n,i){const r=n.users[0];j(r.localId!==void 0,"internal-error");const s=r.providerUserInfo!==void 0?u0(r.providerUserInfo):[],a=!(r.email&&r.passwordHash)&&!(s!=null&&s.length),o=new za;o.updateFromIdToken(i);const u=new Ti({uid:r.localId,auth:e,stsTokenManager:o,isAnonymous:a}),c={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:s,metadata:new Kp(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,c),u}}/**
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
 */const YT=new Map;function fn(t){zn(t instanceof Function,"Expected a class definition");let e=YT.get(t);return e?(zn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,YT.set(t,e),e)}/**
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
 */class c0{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}c0.type="NONE";const so=c0;/**
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
 */function vs(t,e,n){return`firebase:${t}:${e}:${n}`}class Ba{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:r,name:s}=this.auth;this.fullUserKey=vs(this.userKey,r.apiKey,s),this.fullPersistenceKey=vs("persistence",r.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ti._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ba(fn(so),e,i);const r=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let s=r[0]||fn(so);const a=vs(i,e.config.apiKey,e.name);let o=null;for(const c of n)try{const d=await c._get(a);if(d){const f=Ti._fromJSON(e,d);c!==s&&(o=f),s=c;break}}catch{}const u=r.filter(c=>c._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ba(s,e,i):(s=u[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async c=>{if(c!==s)try{await c._remove(a)}catch{}})),new Ba(s,e,i))}}/**
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
 */function XT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(f0(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(h0(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(m0(e))return"Blackberry";if(p0(e))return"Webos";if(j_(e))return"Safari";if((e.includes("chrome/")||d0(e))&&!e.includes("edge/"))return"Chrome";if(Yu(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function h0(t=Ue()){return/firefox\//i.test(t)}function j_(t=Ue()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function d0(t=Ue()){return/crios\//i.test(t)}function f0(t=Ue()){return/iemobile/i.test(t)}function Yu(t=Ue()){return/android/i.test(t)}function m0(t=Ue()){return/blackberry/i.test(t)}function p0(t=Ue()){return/webos/i.test(t)}function Po(t=Ue()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dx(t=Ue()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function fx(t=Ue()){var e;return Po(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function mx(){return FS()&&document.documentMode===10}function g0(t=Ue()){return Po(t)||Yu(t)||p0(t)||m0(t)||/windows phone/i.test(t)||f0(t)}function px(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function _0(t,e=[]){let n;switch(t){case"Browser":n=XT(Ue());break;case"Worker":n=`${XT(Ue())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Br}/${i}`}/**
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
 */class gx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=s=>new Promise((a,o)=>{try{const u=e(s);a(u)}catch(u){o(u)}});i.onAbort=n,this.queue.push(i);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
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
 */async function _x(t,e={}){return $e(t,"GET","/v2/passwordPolicy",Qe(t,e))}/**
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
 */const yx=6;class vx{constructor(e){var n,i,r,s;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=a.minPasswordLength)!==null&&n!==void 0?n:yx,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(r=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&r!==void 0?r:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,r,s,a,o;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(i=u.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(r=u.containsLowercaseLetter)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(a=u.containsNumericCharacter)!==null&&a!==void 0?a:!0),u.isValid&&(u.isValid=(o=u.containsNonAlphanumericCharacter)!==null&&o!==void 0?o:!0),u}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),r&&(n.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let r=0;r<e.length;r++)i=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,r,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
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
 */class Ex{constructor(e,n,i,r){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new WT(this),this.idTokenSubscription=new WT(this),this.beforeStateQueue=new gx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=r0,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var i,r;if(!this._deleted&&(this.persistenceManager=await Ba.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await l0(this,{idToken:e}),i=await Ti._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ge(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(o,o))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let r=i,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===o)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await vu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=YV()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ge(this.app))return Promise.reject(yt(this));const n=e?X(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ge(this.app)?Promise.reject(yt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ge(this.app)?Promise.reject(yt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await _x(this),n=new vx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Hs("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await hx(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Ba.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,r){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let a=!1;const o=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(o,this,"internal-error"),o.then(()=>{a||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,i,r);return()=>{a=!0,u()}}else{const u=e.addObserver(n);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=_0(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&QV(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function He(t){return X(t)}class WT{constructor(e){this.auth=e,this.observer=null,this.addObserver=qS(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Xu={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Tx(t){Xu=t}function q_(t){return Xu.loadJS(t)}function wx(){return Xu.recaptchaV2Script}function Ix(){return Xu.recaptchaEnterpriseScript}function Ax(){return Xu.gapiScript}function y0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const bx="recaptcha-enterprise",Sx="NO_RECAPTCHA";class Rx{constructor(e){this.type=bx,this.auth=He(e)}async verify(e="verify",n=!1){async function i(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{nx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const c=new ex(u);return s.tenantId==null?s._agentRecaptchaConfig=c:s._tenantRecaptchaConfigs[s.tenantId]=c,a(c.siteKey)}}).catch(u=>{o(u)})})}function r(s,a,o){const u=window.grecaptcha;QT(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(c=>{a(c)}).catch(()=>{a(Sx)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{i(this.auth).then(o=>{if(!n&&QT(window.grecaptcha))r(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Ix();u.length!==0&&(u+=o),q_(u).then(()=>{r(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function JT(t,e,n,i=!1){const r=new Rx(t);let s;try{s=await r.verify(n)}catch{s=await r.verify(n,!0)}const a=Object.assign({},e);return i?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function Eu(t,e,n,i){var r;if(!((r=t._getRecaptchaConfig())===null||r===void 0)&&r.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await JT(t,e,n,n==="getOobCode");return i(t,s)}else return i(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const a=await JT(t,e,n,n==="getOobCode");return i(t,a)}else return Promise.reject(s)})}function Cx(t,e){const n=(e==null?void 0:e.persistence)||[],i=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function Dx(t,e,n){const i=He(t);j(i._canInitEmulator,i,"emulator-config-failed"),j(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),s=v0(e),{host:a,port:o}=Nx(e),u=o===null?"":`:${o}`;i.config.emulator={url:`${s}//${a}${u}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Ox()}function v0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Nx(t){const e=v0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const s=r[1];return{host:s,port:ZT(i.substr(s.length+1))}}else{const[s,a]=i.split(":");return{host:s,port:ZT(a)}}}function ZT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ox(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Vo{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Xn("not implemented")}_getIdTokenResponse(e){return Xn("not implemented")}_linkToIdToken(e,n){return Xn("not implemented")}_getReauthenticationResolver(e){return Xn("not implemented")}}/**
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
 */async function E0(t,e){return $e(t,"POST","/v1/accounts:resetPassword",Qe(t,e))}async function Px(t,e){return $e(t,"POST","/v1/accounts:update",e)}async function Vx(t,e){return $e(t,"POST","/v1/accounts:signUp",e)}async function xx(t,e){return $e(t,"POST","/v1/accounts:update",Qe(t,e))}/**
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
 */async function Mx(t,e){return Ui(t,"POST","/v1/accounts:signInWithPassword",Qe(t,e))}async function Kd(t,e){return $e(t,"POST","/v1/accounts:sendOobCode",Qe(t,e))}async function kx(t,e){return Kd(t,e)}async function Lx(t,e){return Kd(t,e)}async function Ux(t,e){return Kd(t,e)}async function zx(t,e){return Kd(t,e)}/**
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
 */async function Bx(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}async function Fx(t,e){return Ui(t,"POST","/v1/accounts:signInWithEmailLink",Qe(t,e))}/**
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
 */class Tu extends Vo{constructor(e,n,i,r=null){super("password",i),this._email=e,this._password=n,this._tenantId=r}static _fromEmailAndPassword(e,n){return new Tu(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new Tu(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,n,"signInWithPassword",Mx);case"emailLink":return Bx(e,{email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Eu(e,i,"signUpPassword",Vx);case"emailLink":return Fx(e,{idToken:n,email:this._email,oobCode:this._password});default:Nt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Ri(t,e){return Ui(t,"POST","/v1/accounts:signInWithIdp",Qe(t,e))}/**
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
 */const jx="http://localhost";class ni extends Vo{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ni(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Nt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r}=n,s=L_(n,["providerId","signInMethod"]);if(!i||!r)return null;const a=new ni(i,r);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ri(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}buildRequest(){const e={requestUri:jx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=No(n)}return e}}/**
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
 */async function qx(t,e){return $e(t,"POST","/v1/accounts:sendVerificationCode",Qe(t,e))}async function Gx(t,e){return Ui(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e))}async function Hx(t,e){const n=await Ui(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,e));if(n.temporaryProof)throw bl(t,"account-exists-with-different-credential",n);return n}const Kx={USER_NOT_FOUND:"user-not-found"};async function Qx(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Ui(t,"POST","/v1/accounts:signInWithPhoneNumber",Qe(t,n),Kx)}/**
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
 */class Es extends Vo{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new Es({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Es({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return Gx(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return Hx(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Qx(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:i,verificationCode:r}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:i,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s}=e;return!i&&!n&&!r&&!s?null:new Es({verificationId:n,verificationCode:i,phoneNumber:r,temporaryProof:s})}}/**
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
 */function $x(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Yx(t){const e=Na(Al(t)).link,n=e?Na(Al(e)).deep_link_id:null,i=Na(Al(t)).deep_link_id;return(i?Na(Al(i)).link:null)||i||n||e||t}class Qd{constructor(e){var n,i,r,s,a,o;const u=Na(Al(e)),c=(n=u.apiKey)!==null&&n!==void 0?n:null,d=(i=u.oobCode)!==null&&i!==void 0?i:null,f=$x((r=u.mode)!==null&&r!==void 0?r:null);j(c&&d&&f,"argument-error"),this.apiKey=c,this.operation=f,this.code=d,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=u.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=u.tenantId)!==null&&o!==void 0?o:null}static parseLink(e){const n=Yx(e);try{return new Qd(n)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(e,n){return Tu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=Qd.parseLink(n);return j(i,"argument-error"),Tu._fromEmailAndCode(e,i.code,i.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class zi{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class xo extends zi{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Fa extends xo{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return j("providerId"in n&&"signInMethod"in n,"argument-error"),ni._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return j(e.idToken||e.accessToken,"argument-error"),ni._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Fa.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Fa.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i,oauthTokenSecret:r,pendingToken:s,nonce:a,providerId:o}=e;if(!i&&!r&&!n&&!s||!o)return null;try{return new Fa(o)._credential({idToken:n,accessToken:i,nonce:a,pendingToken:s})}catch{return null}}}/**
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
 */class qn extends xo{constructor(){super("facebook.com")}static credential(e){return ni._fromParams({providerId:qn.PROVIDER_ID,signInMethod:qn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qn.credentialFromTaggedObject(e)}static credentialFromError(e){return qn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qn.credential(e.oauthAccessToken)}catch{return null}}}qn.FACEBOOK_SIGN_IN_METHOD="facebook.com";qn.PROVIDER_ID="facebook.com";/**
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
 */class Gn extends xo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ni._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return Gn.credential(n,i)}catch{return null}}}Gn.GOOGLE_SIGN_IN_METHOD="google.com";Gn.PROVIDER_ID="google.com";/**
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
 */class Hn extends xo{constructor(){super("github.com")}static credential(e){return ni._fromParams({providerId:Hn.PROVIDER_ID,signInMethod:Hn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Hn.credentialFromTaggedObject(e)}static credentialFromError(e){return Hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Hn.credential(e.oauthAccessToken)}catch{return null}}}Hn.GITHUB_SIGN_IN_METHOD="github.com";Hn.PROVIDER_ID="github.com";/**
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
 */const Xx="http://localhost";class ao extends Vo{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Ri(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,Ri(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ri(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:r,pendingToken:s}=n;return!i||!r||!s||i!==r?null:new ao(i,s)}static _create(e,n){return new ao(e,n)}buildRequest(){return{requestUri:Xx,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Wx="saml.";class od extends zi{constructor(e){j(e.startsWith(Wx),"argument-error"),super(e)}static credentialFromResult(e){return od.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return od.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=ao.fromJSON(e);return j(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:i}=e;if(!n||!i)return null;try{return ao._create(i,n)}catch{return null}}}/**
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
 */class Kn extends xo{constructor(){super("twitter.com")}static credential(e,n){return ni._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return Kn.credential(n,i)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
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
 */async function T0(t,e){return Ui(t,"POST","/v1/accounts:signUp",Qe(t,e))}/**
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
 */class Mn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,r=!1){const s=await Ti._fromIdTokenResponse(e,i,r),a=ew(i);return new Mn({user:s,providerId:a,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const r=ew(i);return new Mn({user:e,providerId:r,_tokenResponse:i,operationType:n})}}function ew(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function Jx(t){var e;if(Ge(t.app))return Promise.reject(yt(t));const n=He(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Mn({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await T0(n,{returnSecureToken:!0}),r=await Mn._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}/**
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
 */class ld extends _t{constructor(e,n,i,r){var s;super(n.code,n.message),this.operationType=i,this.user=r,Object.setPrototypeOf(this,ld.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,r){return new ld(e,n,i,r)}}function w0(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?ld._fromErrorAndOperation(t,s,e,i):s})}/**
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
 */function I0(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Zx(t,e){const n=X(t);await $d(!0,n,e);const{providerUserInfo:i}=await rx(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),r=I0(i||[]);return n.providerData=n.providerData.filter(s=>r.has(s.providerId)),r.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function G_(t,e,n=!1){const i=await xi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Mn._forOperation(t,"link",i)}async function $d(t,e,n){await vu(e);const i=I0(e.providerData),r=t===!1?"provider-already-linked":"no-such-provider";j(i.has(n)===t,e.auth,r)}/**
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
 */async function A0(t,e,n=!1){const{auth:i}=t;if(Ge(i.app))return Promise.reject(yt(i));const r="reauthenticate";try{const s=await xi(t,w0(i,r,e,t),n);j(s.idToken,i,"internal-error");const a=Hd(s.idToken);j(a,i,"internal-error");const{sub:o}=a;return j(t.uid===o,i,"user-mismatch"),Mn._forOperation(t,r,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Nt(i,"user-mismatch"),s}}/**
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
 */async function b0(t,e,n=!1){if(Ge(t.app))return Promise.reject(yt(t));const i="signIn",r=await w0(t,i,e),s=await Mn._fromIdTokenResponse(t,i,r);return n||await t._updateCurrentUser(s.user),s}async function Yd(t,e){return b0(He(t),e)}async function S0(t,e){const n=X(t);return await $d(!1,n,e.providerId),G_(n,e)}async function R0(t,e){return A0(X(t),e)}/**
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
 */async function e2(t,e){return Ui(t,"POST","/v1/accounts:signInWithCustomToken",Qe(t,e))}/**
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
 */async function t2(t,e){if(Ge(t.app))return Promise.reject(yt(t));const n=He(t),i=await e2(n,{token:e,returnSecureToken:!0}),r=await Mn._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}/**
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
 */class Wu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?H_._fromServerResponse(e,n):"totpInfo"in n?K_._fromServerResponse(e,n):Nt(e,"internal-error")}}class H_ extends Wu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new H_(n)}}class K_ extends Wu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new K_(n)}}/**
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
 */function Xd(t,e,n){var i;j(((i=n.url)===null||i===void 0?void 0:i.length)>0,t,"invalid-continue-uri"),j(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(j(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(j(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
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
 */async function Q_(t){const e=He(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function n2(t,e,n){const i=He(t),r={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};n&&Xd(i,r,n),await Eu(i,r,"getOobCode",Lx)}async function i2(t,e,n){await E0(X(t),{oobCode:e,newPassword:n}).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Q_(t),i})}async function r2(t,e){await xx(X(t),{oobCode:e})}async function C0(t,e){const n=X(t),i=await E0(n,{oobCode:e}),r=i.requestType;switch(j(r,n,"internal-error"),r){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":j(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":j(i.mfaInfo,n,"internal-error");default:j(i.email,n,"internal-error")}let s=null;return i.mfaInfo&&(s=Wu._fromServerResponse(He(n),i.mfaInfo)),{data:{email:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.newEmail:i.email)||null,previousEmail:(i.requestType==="VERIFY_AND_CHANGE_EMAIL"?i.email:i.newEmail)||null,multiFactorInfo:s},operation:r}}async function s2(t,e){const{data:n}=await C0(X(t),e);return n.email}async function a2(t,e,n){if(Ge(t.app))return Promise.reject(yt(t));const i=He(t),a=await Eu(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",T0).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&Q_(t),u}),o=await Mn._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(o.user),o}function o2(t,e,n){return Ge(t.app)?Promise.reject(yt(t)):Yd(X(t),Fr.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Q_(t),i})}/**
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
 */async function l2(t,e,n){const i=He(t),r={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,o){j(o.handleCodeInApp,i,"argument-error"),o&&Xd(i,a,o)}s(r,n),await Eu(i,r,"getOobCode",Ux)}function u2(t,e){const n=Qd.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function c2(t,e,n){if(Ge(t.app))return Promise.reject(yt(t));const i=X(t),r=Fr.credentialWithLink(e,n||yu());return j(r._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Yd(i,r)}/**
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
 */async function h2(t,e){return $e(t,"POST","/v1/accounts:createAuthUri",Qe(t,e))}/**
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
 */async function d2(t,e){const n=B_()?yu():"http://localhost",i={identifier:e,continueUri:n},{signinMethods:r}=await h2(X(t),i);return r||[]}async function f2(t,e){const n=X(t),r={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Xd(n.auth,r,e);const{email:s}=await kx(n.auth,r);s!==t.email&&await t.reload()}async function m2(t,e,n){const i=X(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Xd(i.auth,s,n);const{email:a}=await zx(i.auth,s);a!==t.email&&await t.reload()}/**
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
 */async function p2(t,e){return $e(t,"POST","/v1/accounts:update",e)}/**
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
 */async function g2(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const i=X(t),s={idToken:await i.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},a=await xi(i,p2(i.auth,s));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const o=i.providerData.find(({providerId:u})=>u==="password");o&&(o.displayName=i.displayName,o.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function _2(t,e){const n=X(t);return Ge(n.auth.app)?Promise.reject(yt(n.auth)):D0(n,e,null)}function y2(t,e){return D0(X(t),null,e)}async function D0(t,e,n){const{auth:i}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const a=await xi(t,Px(i,s));await t._updateTokensIfNecessary(a,!0)}/**
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
 */function v2(t){var e,n;if(!t)return null;const{providerId:i}=t,r=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!i&&(t!=null&&t.idToken)){const a=(n=(e=Hd(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(a){const o=a!=="anonymous"&&a!=="custom"?a:null;return new ja(s,o)}}if(!i)return null;switch(i){case"facebook.com":return new E2(s,r);case"github.com":return new T2(s,r);case"google.com":return new w2(s,r);case"twitter.com":return new I2(s,r,t.screenName||null);case"custom":case"anonymous":return new ja(s,null);default:return new ja(s,i,r)}}class ja{constructor(e,n,i={}){this.isNewUser=e,this.providerId=n,this.profile=i}}class N0 extends ja{constructor(e,n,i,r){super(e,n,i),this.username=r}}class E2 extends ja{constructor(e,n){super(e,"facebook.com",n)}}class T2 extends N0{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class w2 extends ja{constructor(e,n){super(e,"google.com",n)}}class I2 extends N0{constructor(e,n,i){super(e,"twitter.com",n,i)}}function A2(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:v2(n)}/**
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
 */class cs{constructor(e,n,i){this.type=e,this.credential=n,this.user=i}static _fromIdtoken(e,n){return new cs("enroll",e,n)}static _fromMfaPendingCredential(e){return new cs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,i;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return cs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((i=e.multiFactorSession)===null||i===void 0)&&i.idToken)return cs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class $_{constructor(e,n,i){this.session=e,this.hints=n,this.signInResolver=i}static _fromError(e,n){const i=He(e),r=n.customData._serverResponse,s=(r.mfaInfo||[]).map(o=>Wu._fromServerResponse(i,o));j(r.mfaPendingCredential,i,"internal-error");const a=cs._fromMfaPendingCredential(r.mfaPendingCredential);return new $_(a,s,async o=>{const u=await o._process(i,a);delete r.mfaInfo,delete r.mfaPendingCredential;const c=Object.assign(Object.assign({},r),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const d=await Mn._fromIdTokenResponse(i,n.operationType,c);return await i._updateCurrentUser(d.user),d;case"reauthenticate":return j(n.user,i,"internal-error"),Mn._forOperation(n.user,n.operationType,c);default:Nt(i,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function b2(t,e){var n;const i=X(t),r=e;return j(e.customData.operationType,i,"argument-error"),j((n=r.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,i,"argument-error"),$_._fromError(i,r)}/**
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
 */function S2(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:start",Qe(t,e))}function R2(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:finalize",Qe(t,e))}function C2(t,e){return $e(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Qe(t,e))}class Y_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(i=>Wu._fromServerResponse(e.auth,i)))})}static _fromUser(e){return new Y_(e)}async getSession(){return cs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const i=e,r=await this.getSession(),s=await xi(this.user,i._process(this.user.auth,r,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,i=await this.user.getIdToken();try{const r=await xi(this.user,C2(this.user.auth,{idToken:i,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(r),await this.user.reload()}catch(r){throw r}}}const Lm=new WeakMap;function D2(t){const e=X(t);return Lm.has(e)||Lm.set(e,Y_._fromUser(e)),Lm.get(e)}const ud="__sak";/**
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
 */class O0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ud,"1"),this.storage.removeItem(ud),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function N2(){const t=Ue();return j_(t)||Po(t)}const O2=1e3,P2=10;class P0 extends O0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=N2()&&px(),this.fallbackToPolling=g0(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),r=this.localCache[n];i!==r&&e(n,r,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((a,o,u)=>{this.notifyListeners(a,u)});return}const i=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(i);if(e.newValue!==a)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!n)return}const r=()=>{const a=this.storage.getItem(i);!n&&this.localCache[i]===a||this.notifyListeners(i,a)},s=this.storage.getItem(i);mx()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,P2):r()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},O2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}P0.type="LOCAL";const X_=P0;/**
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
 */class V0 extends O0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}V0.type="SESSION";const Cs=V0;/**
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
 */function V2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Wd{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(r=>r.isListeningto(e));if(n)return n;const i=new Wd(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:r,data:s}=n.data,a=this.handlersMap[r];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:r});const o=Array.from(a).map(async c=>c(n.origin,s)),u=await V2(o);n.ports[0].postMessage({status:"done",eventId:i,eventType:r,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Wd.receivers=[];/**
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
 */function Ju(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class x2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let s,a;return new Promise((o,u)=>{const c=Ju("",20);r.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},i);a={messageChannel:r,onMessage(f){const p=f;if(p.data.eventId===c)switch(p.data.status){case"ack":clearTimeout(d),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(p.data.response);break;default:clearTimeout(d),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(a),r.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[r.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function nt(){return window}function M2(t){nt().location.href=t}/**
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
 */function W_(){return typeof nt().WorkerGlobalScope<"u"&&typeof nt().importScripts=="function"}async function k2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function L2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function U2(){return W_()?self:null}/**
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
 */const x0="firebaseLocalStorageDb",z2=1,cd="firebaseLocalStorage",M0="fbase_key";class Zu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Jd(t,e){return t.transaction([cd],e?"readwrite":"readonly").objectStore(cd)}function B2(){const t=indexedDB.deleteDatabase(x0);return new Zu(t).toPromise()}function Qp(){const t=indexedDB.open(x0,z2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(cd,{keyPath:M0})}catch(r){n(r)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(cd)?e(i):(i.close(),await B2(),e(await Qp()))})})}async function tw(t,e,n){const i=Jd(t,!0).put({[M0]:e,value:n});return new Zu(i).toPromise()}async function F2(t,e){const n=Jd(t,!1).get(e),i=await new Zu(n).toPromise();return i===void 0?null:i.value}function nw(t,e){const n=Jd(t,!0).delete(e);return new Zu(n).toPromise()}const j2=800,q2=3;class k0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Qp(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>q2)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return W_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wd._getInstance(U2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await k2(),!this.activeServiceWorker)return;this.sender=new x2(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||L2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Qp();return await tw(e,ud,"1"),await nw(e,ud),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>tw(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>F2(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>nw(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(r=>{const s=Jd(r,!1).getAll();return new Zu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:r,value:s}of e)i.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(s)&&(this.notifyListeners(r,s),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!i.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const r of Array.from(i))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),j2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}k0.type="LOCAL";const wu=k0;/**
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
 */function G2(t,e){return $e(t,"POST","/v2/accounts/mfaSignIn:start",Qe(t,e))}function H2(t,e){return $e(t,"POST","/v2/accounts/mfaSignIn:finalize",Qe(t,e))}/**
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
 */const K2=500,Q2=6e4,Qc=1e12;class $2{constructor(e){this.auth=e,this.counter=Qc,this._widgets=new Map}render(e,n){const i=this.counter;return this._widgets.set(i,new Y2(e,this.auth.name,n||{})),this.counter++,i}reset(e){var n;const i=e||Qc;(n=this._widgets.get(i))===null||n===void 0||n.delete(),this._widgets.delete(i)}getResponse(e){var n;const i=e||Qc;return((n=this._widgets.get(i))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const i=e||Qc;return(n=this._widgets.get(i))===null||n===void 0||n.execute(),""}}class Y2{constructor(e,n,i){this.params=i,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const r=typeof e=="string"?document.getElementById(e):e;j(r,"argument-error",{appName:n}),this.container=r,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=X2(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},Q2)},K2))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function X2(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<t;i++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
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
 */const Um=y0("rcb"),W2=new $u(3e4,6e4);class J2{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=nt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return j(Z2(n),e,"argument-error"),this.shouldResolveImmediately(n)&&KT(nt().grecaptcha)?Promise.resolve(nt().grecaptcha):new Promise((i,r)=>{const s=nt().setTimeout(()=>{r(ut(e,"network-request-failed"))},W2.get());nt()[Um]=()=>{nt().clearTimeout(s),delete nt()[Um];const o=nt().grecaptcha;if(!o||!KT(o)){r(ut(e,"internal-error"));return}const u=o.render;o.render=(c,d)=>{const f=u(c,d);return this.counter++,f},this.hostLanguage=n,i(o)};const a=`${wx()}?${No({onload:Um,render:"explicit",hl:n})}`;q_(a).catch(()=>{clearTimeout(s),r(ut(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=nt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function Z2(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class eM{async load(e){return new $2(e)}clearedOneInstance(){}}/**
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
 */const L0="recaptcha",tM={theme:"light",type:"image"};let nM=class{constructor(e,n,i=Object.assign({},tM)){this.parameters=i,this.type=L0,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=He(e),this.isInvisible=this.parameters.size==="invisible",j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const r=typeof n=="string"?document.getElementById(n):n;j(r,this.auth,"argument-error"),this.container=r,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new eM:new J2,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),i=n.getResponse(e);return i||new Promise(r=>{const s=a=>{a&&(this.tokenChangeListeners.delete(s),r(a))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){j(!this.parameters.sitekey,this.auth,"argument-error"),j(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),j(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(i=>i(n)),typeof e=="function")e(n);else if(typeof e=="string"){const i=nt()[e];typeof i=="function"&&i(n)}}}assertNotDestroyed(){j(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){j(B_()&&!W_(),this.auth,"internal-error"),await iM(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await tx(this.auth);j(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return j(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function iM(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
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
 */class J_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Es._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function rM(t,e,n){if(Ge(t.app))return Promise.reject(yt(t));const i=He(t),r=await Zd(i,e,X(n));return new J_(r,s=>Yd(i,s))}async function sM(t,e,n){const i=X(t);await $d(!1,i,"phone");const r=await Zd(i.auth,e,X(n));return new J_(r,s=>S0(i,s))}async function aM(t,e,n){const i=X(t);if(Ge(i.auth.app))return Promise.reject(yt(i.auth));const r=await Zd(i.auth,e,X(n));return new J_(r,s=>R0(i,s))}async function Zd(t,e,n){var i;const r=await n.verify();try{j(typeof r=="string",t,"argument-error"),j(n.type===L0,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const a=s.session;if("phoneNumber"in s)return j(a.type==="enroll",t,"internal-error"),(await S2(t,{idToken:a.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}})).phoneSessionInfo.sessionInfo;{j(a.type==="signin",t,"internal-error");const o=((i=s.multiFactorHint)===null||i===void 0?void 0:i.uid)||s.multiFactorUid;return j(o,t,"missing-multi-factor-info"),(await G2(t,{mfaPendingCredential:a.credential,mfaEnrollmentId:o,phoneSignInInfo:{recaptchaToken:r}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:a}=await qx(t,{phoneNumber:s.phoneNumber,recaptchaToken:r});return a}}finally{n._reset()}}async function oM(t,e){const n=X(t);if(Ge(n.auth.app))return Promise.reject(yt(n.auth));await G_(n,e)}/**
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
 */let Ds=class gh{constructor(e){this.providerId=gh.PROVIDER_ID,this.auth=He(e)}verifyPhoneNumber(e,n){return Zd(this.auth,e,X(n))}static credential(e,n){return Es._fromVerification(e,n)}static credentialFromResult(e){const n=e;return gh.credentialFromTaggedObject(n)}static credentialFromError(e){return gh.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:i}=e;return n&&i?Es._fromTokenResponse(n,i):null}};Ds.PROVIDER_ID="phone";Ds.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Ks(t,e){return e?fn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Z_ extends Vo{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ri(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ri(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ri(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function lM(t){return b0(t.auth,new Z_(t),t.bypassAuthState)}function uM(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),A0(n,new Z_(t),t.bypassAuthState)}async function cM(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),G_(n,new Z_(t),t.bypassAuthState)}/**
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
 */class U0{constructor(e,n,i,r,s=!1){this.auth=e,this.resolver=i,this.user=r,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:r,tenantId:s,error:a,type:o}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:n,sessionId:i,tenantId:s||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(u))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return lM;case"linkViaPopup":case"linkViaRedirect":return cM;case"reauthViaPopup":case"reauthViaRedirect":return uM;default:Nt(this.auth,"internal-error")}}resolve(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){zn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const hM=new $u(2e3,1e4);async function dM(t,e,n){if(Ge(t.app))return Promise.reject(ut(t,"operation-not-supported-in-this-environment"));const i=He(t);Oo(t,e,zi);const r=Ks(i,n);return new wi(i,"signInViaPopup",e,r).executeNotNull()}async function fM(t,e,n){const i=X(t);if(Ge(i.auth.app))return Promise.reject(ut(i.auth,"operation-not-supported-in-this-environment"));Oo(i.auth,e,zi);const r=Ks(i.auth,n);return new wi(i.auth,"reauthViaPopup",e,r,i).executeNotNull()}async function mM(t,e,n){const i=X(t);Oo(i.auth,e,zi);const r=Ks(i.auth,n);return new wi(i.auth,"linkViaPopup",e,r,i).executeNotNull()}class wi extends U0{constructor(e,n,i,r,s){super(e,n,r,s),this.provider=i,this.authWindow=null,this.pollId=null,wi.currentPopupAction&&wi.currentPopupAction.cancel(),wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){zn(this.filter.length===1,"Popup operations only handle one event");const e=Ju();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,hM.get())};e()}}wi.currentPopupAction=null;/**
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
 */const pM="pendingRedirect",Kl=new Map;class gM extends U0{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Kl.get(this.auth._key());if(!e){try{const i=await _M(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Kl.set(this.auth._key(),e)}return this.bypassAuthState||Kl.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _M(t,e){const n=B0(e),i=z0(t);if(!await i._isAvailable())return!1;const r=await i._get(n)==="true";return await i._remove(n),r}async function ey(t,e){return z0(t)._set(B0(e),"true")}function yM(){Kl.clear()}function ty(t,e){Kl.set(t._key(),e)}function z0(t){return fn(t._redirectPersistence)}function B0(t){return vs(pM,t.config.apiKey,t.name)}/**
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
 */function vM(t,e,n){return EM(t,e,n)}async function EM(t,e,n){if(Ge(t.app))return Promise.reject(yt(t));const i=He(t);Oo(t,e,zi),await i._initializationPromise;const r=Ks(i,n);return await ey(r,i),r._openRedirect(i,e,"signInViaRedirect")}function TM(t,e,n){return wM(t,e,n)}async function wM(t,e,n){const i=X(t);if(Oo(i.auth,e,zi),Ge(i.auth.app))return Promise.reject(yt(i.auth));await i.auth._initializationPromise;const r=Ks(i.auth,n);await ey(r,i.auth);const s=await F0(i);return r._openRedirect(i.auth,e,"reauthViaRedirect",s)}function IM(t,e,n){return AM(t,e,n)}async function AM(t,e,n){const i=X(t);Oo(i.auth,e,zi),await i.auth._initializationPromise;const r=Ks(i.auth,n);await $d(!1,i,e.providerId),await ey(r,i.auth);const s=await F0(i);return r._openRedirect(i.auth,e,"linkViaRedirect",s)}async function bM(t,e){return await He(t)._initializationPromise,ef(t,e,!1)}async function ef(t,e,n=!1){if(Ge(t.app))return Promise.reject(yt(t));const i=He(t),r=Ks(i,e),a=await new gM(i,r,n).execute();return a&&!n&&(delete a.user._redirectEventId,await i._persistUserIfCurrent(a.user),await i._setRedirectUser(null,e)),a}async function F0(t){const e=Ju(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
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
 */const SM=10*60*1e3;class j0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!RM(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!q0(e)){const r=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,r))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SM&&this.cachedEventUids.clear(),this.cachedEventUids.has(iw(e))}saveEventToCache(e){this.cachedEventUids.add(iw(e)),this.lastProcessedEventTime=Date.now()}}function iw(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function q0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function RM(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return q0(t);default:return!1}}/**
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
 */async function G0(t,e={}){return $e(t,"GET","/v1/projects",e)}/**
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
 */const CM=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,DM=/^https?/;async function NM(t){if(t.config.emulator)return;const{authorizedDomains:e}=await G0(t);for(const n of e)try{if(OM(n))return}catch{}Nt(t,"unauthorized-domain")}function OM(t){const e=yu(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const a=new URL(t);return a.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===i}if(!DM.test(n))return!1;if(CM.test(t))return i===t;const r=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(i)}/**
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
 */const PM=new $u(3e4,6e4);function rw(){const t=nt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function VM(t){return new Promise((e,n)=>{var i,r,s;function a(){rw(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rw(),n(ut(t,"network-request-failed"))},timeout:PM.get()})}if(!((r=(i=nt().gapi)===null||i===void 0?void 0:i.iframes)===null||r===void 0)&&r.Iframe)e(gapi.iframes.getContext());else if(!((s=nt().gapi)===null||s===void 0)&&s.load)a();else{const o=y0("iframefcb");return nt()[o]=()=>{gapi.load?a():n(ut(t,"network-request-failed"))},q_(`${Ax()}?onload=${o}`).catch(u=>n(u))}}).catch(e=>{throw _h=null,e})}let _h=null;function xM(t){return _h=_h||VM(t),_h}/**
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
 */const MM=new $u(5e3,15e3),kM="__/auth/iframe",LM="emulator/auth/iframe",UM={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zM=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function BM(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?F_(e,LM):`https://${t.config.authDomain}/${kM}`,i={apiKey:e.apiKey,appName:t.name,v:Br},r=zM.get(t.config.apiHost);r&&(i.eid=r);const s=t._getFrameworks();return s.length&&(i.fw=s.join(",")),`${n}?${No(i).slice(1)}`}async function FM(t){const e=await xM(t),n=nt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:BM(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:UM,dontclear:!0},i=>new Promise(async(r,s)=>{await i.restyle({setHideOnLeave:!1});const a=ut(t,"network-request-failed"),o=nt().setTimeout(()=>{s(a)},MM.get());function u(){nt().clearTimeout(o),r(i)}i.ping(u).then(u,()=>{s(a)})}))}/**
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
 */const jM={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qM=500,GM=600,HM="_blank",KM="http://localhost";class sw{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QM(t,e,n,i=qM,r=GM){const s=Math.max((window.screen.availHeight-r)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let o="";const u=Object.assign(Object.assign({},jM),{width:i.toString(),height:r.toString(),top:s,left:a}),c=Ue().toLowerCase();n&&(o=d0(c)?HM:n),h0(c)&&(e=e||KM,u.scrollbars="yes");const d=Object.entries(u).reduce((p,[g,R])=>`${p}${g}=${R},`,"");if(fx(c)&&o!=="_self")return $M(e||"",o),new sw(null);const f=window.open(e||"",o,d);j(f,t,"popup-blocked");try{f.focus()}catch{}return new sw(f)}function $M(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const YM="__/auth/handler",XM="emulator/auth/handler",WM=encodeURIComponent("fac");async function $p(t,e,n,i,r,s){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const a={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Br,eventId:r};if(e instanceof zi){e.setDefaultLanguage(t.languageCode),a.providerId=e.providerId||"",TP(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(s||{}))a[d]=f}if(e instanceof xo){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(a.scopes=d.join(","))}t.tenantId&&(a.tid=t.tenantId);const o=a;for(const d of Object.keys(o))o[d]===void 0&&delete o[d];const u=await t._getAppCheckToken(),c=u?`#${WM}=${encodeURIComponent(u)}`:"";return`${JM(t)}?${No(o).slice(1)}${c}`}function JM({config:t}){return t.emulator?F_(t,XM):`https://${t.authDomain}/${YM}`}/**
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
 */const zm="webStorageSupport";class ZM{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Cs,this._completeRedirectFn=ef,this._overrideRedirectResult=ty}async _openPopup(e,n,i,r){var s;zn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await $p(e,n,i,yu(),r);return QM(e,a,Ju())}async _openRedirect(e,n,i,r){await this._originValidation(e);const s=await $p(e,n,i,yu(),r);return M2(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:r,promise:s}=this.eventManagers[n];return r?Promise.resolve(r):(zn(s,"If manager is not set, promise should be"),s)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await FM(e),i=new j0(e);return n.register("authEvent",r=>(j(r==null?void 0:r.authEvent,e,"invalid-auth-event"),{status:i.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(zm,{type:zm},r=>{var s;const a=(s=r==null?void 0:r[0])===null||s===void 0?void 0:s[zm];a!==void 0&&n(!!a),Nt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=NM(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return g0()||j_()||Po()}}const ek=ZM;class tk{constructor(e){this.factorId=e}_process(e,n,i){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,i);case"signin":return this._finalizeSignIn(e,n.credential);default:return Xn("unexpected MultiFactorSessionType")}}}class ny extends tk{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new ny(e)}_finalizeEnroll(e,n,i){return R2(e,{idToken:n,displayName:i,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return H2(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class H0{constructor(){}static assertion(e){return ny._fromCredential(e)}}H0.FACTOR_ID="phone";var aw="@firebase/auth",ow="1.7.4";/**
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
 */class nk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function rk(t){Vi(new xn("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=i.options;j(a&&!a.includes(":"),"invalid-api-key",{appName:i.name});const u={apiKey:a,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_0(t)},c=new Ex(i,r,s,u);return Cx(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),Vi(new xn("auth-internal",e=>{const n=He(e.getProvider("auth").getImmediate());return(i=>new nk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),yn(aw,ow,ik(t)),yn(aw,ow,"esm2017")}/**
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
 */const sk=5*60;fP("authIdTokenMaxAge");function ak(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Tx({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=r=>{const s=ut("internal-error");s.customData=r,n(s)},i.type="text/javascript",i.charset="UTF-8",ak().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});rk("Browser");/**
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
 */function Ns(){return window}/**
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
 */const ok=2e3;async function lk(t,e,n){var i;const{BuildInfo:r}=Ns();zn(e.sessionId,"AuthEvent did not contain a session ID");const s=await fk(e.sessionId),a={};return Po()?a.ibi=r.packageName:Yu()?a.apn=r.packageName:Nt(t,"operation-not-supported-in-this-environment"),r.displayName&&(a.appDisplayName=r.displayName),a.sessionId=s,$p(t,n,e.type,void 0,(i=e.eventId)!==null&&i!==void 0?i:void 0,a)}async function uk(t){const{BuildInfo:e}=Ns(),n={};Po()?n.iosBundleId=e.packageName:Yu()?n.androidPackageName=e.packageName:Nt(t,"operation-not-supported-in-this-environment"),await G0(t,n)}function ck(t){const{cordova:e}=Ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(i=>{let r=null;i?e.plugins.browsertab.openUrl(t):r=e.InAppBrowser.open(t,dx()?"_blank":"_system","location=yes"),n(r)})})}async function hk(t,e,n){const{cordova:i}=Ns();let r=()=>{};try{await new Promise((s,a)=>{let o=null;function u(){var f;s();const p=(f=i.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof p=="function"&&p(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function c(){o||(o=window.setTimeout(()=>{a(ut(t,"redirect-cancelled-by-user"))},ok))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&c()}e.addPassiveListener(u),document.addEventListener("resume",c,!1),Yu()&&document.addEventListener("visibilitychange",d,!1),r=()=>{e.removePassiveListener(u),document.removeEventListener("resume",c,!1),document.removeEventListener("visibilitychange",d,!1),o&&window.clearTimeout(o)}})}finally{r()}}function dk(t){var e,n,i,r,s,a,o,u,c,d;const f=Ns();j(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),j(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),j(typeof((s=(r=(i=f==null?void 0:f.cordova)===null||i===void 0?void 0:i.plugins)===null||r===void 0?void 0:r.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((u=(o=(a=f==null?void 0:f.cordova)===null||a===void 0?void 0:a.plugins)===null||o===void 0?void 0:o.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),j(typeof((d=(c=f==null?void 0:f.cordova)===null||c===void 0?void 0:c.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function fk(t){const e=mk(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(r=>r.toString(16).padStart(2,"0")).join("")}function mk(t){if(zn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return n}/**
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
 */const pk=20;class gk extends j0{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function _k(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Ek(),postBody:null,tenantId:t.tenantId,error:ut(t,"no-auth-event")}}function yk(t,e){return Yp()._set(Xp(t),e)}async function lw(t){const e=await Yp()._get(Xp(t));return e&&await Yp()._remove(Xp(t)),e}function vk(t,e){var n,i;const r=wk(e);if(r.includes("/__/auth/callback")){const s=yh(r),a=s.firebaseError?Tk(decodeURIComponent(s.firebaseError)):null,o=(i=(n=a==null?void 0:a.code)===null||n===void 0?void 0:n.split("auth/"))===null||i===void 0?void 0:i[1],u=o?ut(o):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:r,postBody:null}}return null}function Ek(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<pk;n++){const i=Math.floor(Math.random()*e.length);t.push(e.charAt(i))}return t.join("")}function Yp(){return fn(X_)}function Xp(t){return vs("authEvent",t.config.apiKey,t.name)}function Tk(t){try{return JSON.parse(t)}catch{return null}}function wk(t){const e=yh(t),n=e.link?decodeURIComponent(e.link):void 0,i=yh(n).link,r=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return yh(r).link||r||i||n||t}function yh(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Na(n.join("?"))}/**
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
 */const Ik=500;class Ak{constructor(){this._redirectPersistence=Cs,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=ef,this._overrideRedirectResult=ty}async _initialize(e){const n=e._key();let i=this.eventManagers.get(n);return i||(i=new gk(e),this.eventManagers.set(n,i),this.attachCallbackListeners(e,i)),i}_openPopup(e){Nt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,i,r){dk(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),yM(),await this._originValidation(e);const a=_k(e,i,r);await yk(e,a);const o=await lk(e,a,n),u=await ck(o);return hk(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=uk(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:i,handleOpenURL:r,BuildInfo:s}=Ns(),a=setTimeout(async()=>{await lw(e),n.onEvent(uw())},Ik),o=async d=>{clearTimeout(a);const f=await lw(e);let p=null;f&&(d!=null&&d.url)&&(p=vk(f,d.url)),n.onEvent(p||uw())};typeof i<"u"&&typeof i.subscribe=="function"&&i.subscribe(null,o);const u=r,c=`${s.packageName.toLowerCase()}://`;Ns().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(c)&&o({url:d}),typeof u=="function")try{u(d)}catch(f){console.error(f)}}}}const bk=Ak;function uw(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ut("no-auth-event")}}/**
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
 */function Sk(t,e){He(t)._logFramework(e)}var Rk="@firebase/auth-compat",Ck="0.5.9";/**
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
 */const Dk=1e3;function Ql(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Nk(){return Ql()==="http:"||Ql()==="https:"}function K0(t=Ue()){return!!((Ql()==="file:"||Ql()==="ionic:"||Ql()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ok(){return P_()||O_()}function Pk(){return FS()&&(document==null?void 0:document.documentMode)===11}function Vk(t=Ue()){return/Edge\/\d+/.test(t)}function xk(t=Ue()){return Pk()||Vk(t)}function Q0(){try{const t=self.localStorage,e=Ju();if(t)return t.setItem(e,"1"),t.removeItem(e),xk()?mu():!0}catch{return iy()&&mu()}return!1}function iy(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Bm(){return(Nk()||BS()||K0())&&!Ok()&&Q0()&&!iy()}function $0(){return K0()&&typeof document<"u"}async function Mk(){return $0()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Dk);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function kk(){return typeof window<"u"?window:null}/**
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
 */const cn={LOCAL:"local",NONE:"none",SESSION:"session"},hl=j,Y0="persistence";function Lk(t,e){if(hl(Object.values(cn).includes(e),t,"invalid-persistence-type"),P_()){hl(e!==cn.SESSION,t,"unsupported-persistence-type");return}if(O_()){hl(e===cn.NONE,t,"unsupported-persistence-type");return}if(iy()){hl(e===cn.NONE||e===cn.LOCAL&&mu(),t,"unsupported-persistence-type");return}hl(e===cn.NONE||Q0(),t,"unsupported-persistence-type")}async function Wp(t){await t._initializationPromise;const e=X0(),n=vs(Y0,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Uk(t,e){const n=X0();if(!n)return[];const i=vs(Y0,t,e);switch(n.getItem(i)){case cn.NONE:return[so];case cn.LOCAL:return[wu,Cs];case cn.SESSION:return[Cs];default:return[]}}function X0(){var t;try{return((t=kk())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
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
 */const zk=j;class cr{constructor(){this.browserResolver=fn(ek),this.cordovaResolver=fn(bk),this.underlyingResolver=null,this._redirectPersistence=Cs,this._completeRedirectFn=ef,this._overrideRedirectResult=ty}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,i,r)}async _openRedirect(e,n,i,r){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,i,r)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return $0()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return zk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Mk();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function W0(t){return t.unwrap()}function Bk(t){return t.wrapped()}/**
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
 */function Fk(t){return J0(t)}function jk(t,e){var n;const i=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const r=e;r.resolver=new qk(t,b2(t,e))}else if(i){const r=J0(e),s=e;r&&(s.credential=r,s.tenantId=i.tenantId||void 0,s.email=i.email||void 0,s.phoneNumber=i.phoneNumber||void 0)}}function J0(t){const{_tokenResponse:e}=t instanceof _t?t.customData:t;if(!e)return null;if(!(t instanceof _t)&&"temporaryProof"in e&&"phoneNumber"in e)return Ds.credentialFromResult(t);const n=e.providerId;if(!n||n===cl.PASSWORD)return null;let i;switch(n){case cl.GOOGLE:i=Gn;break;case cl.FACEBOOK:i=qn;break;case cl.GITHUB:i=Hn;break;case cl.TWITTER:i=Kn;break;default:const{oauthIdToken:r,oauthAccessToken:s,oauthTokenSecret:a,pendingToken:o,nonce:u}=e;return!s&&!a&&!r&&!o?null:o?n.startsWith("saml.")?ao._create(n,o):ni._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:r,accessToken:s}):new Fa(n).credential({idToken:r,accessToken:s,rawNonce:u})}return t instanceof _t?i.credentialFromError(t):i.credentialFromResult(t)}function Xt(t,e){return e.catch(n=>{throw n instanceof _t&&jk(t,n),n}).then(n=>{const i=n.operationType,r=n.user;return{operationType:i,credential:Fk(n),additionalUserInfo:A2(n),user:tf.getOrCreate(r)}})}async function Jp(t,e){const n=await e;return{verificationId:n.verificationId,confirm:i=>Xt(t,n.confirm(i))}}class qk{constructor(e,n){this.resolver=n,this.auth=Bk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Xt(W0(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */let tf=class Sl{constructor(e){this._delegate=e,this.multiFactor=D2(e)}static getOrCreate(e){return Sl.USER_MAP.has(e)||Sl.USER_MAP.set(e,new Sl(e)),Sl.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Xt(this.auth,S0(this._delegate,e))}async linkWithPhoneNumber(e,n){return Jp(this.auth,sM(this._delegate,e,n))}async linkWithPopup(e){return Xt(this.auth,mM(this._delegate,e,cr))}async linkWithRedirect(e){return await Wp(He(this.auth)),IM(this._delegate,e,cr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Xt(this.auth,R0(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Jp(this.auth,aM(this._delegate,e,n))}reauthenticateWithPopup(e){return Xt(this.auth,fM(this._delegate,e,cr))}async reauthenticateWithRedirect(e){return await Wp(He(this.auth)),TM(this._delegate,e,cr)}sendEmailVerification(e){return f2(this._delegate,e)}async unlink(e){return await Zx(this._delegate,e),this}updateEmail(e){return _2(this._delegate,e)}updatePassword(e){return y2(this._delegate,e)}updatePhoneNumber(e){return oM(this._delegate,e)}updateProfile(e){return g2(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return m2(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}};tf.USER_MAP=new WeakMap;/**
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
 */const dl=j;class Zp{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:i}=e.options;dl(i,"invalid-api-key",{appName:e.name}),dl(i,"invalid-api-key",{appName:e.name});const r=typeof window<"u"?cr:void 0;this._delegate=n.initialize({options:{persistence:Gk(i,e.name),popupRedirectResolver:r}}),this._delegate._updateErrorMap(HV),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?tf.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Dx(this._delegate,e,n)}applyActionCode(e){return r2(this._delegate,e)}checkActionCode(e){return C0(this._delegate,e)}confirmPasswordReset(e,n){return i2(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Xt(this._delegate,a2(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return d2(this._delegate,e)}isSignInWithEmailLink(e){return u2(this._delegate,e)}async getRedirectResult(){dl(Bm(),this._delegate,"operation-not-supported-in-this-environment");const e=await bM(this._delegate,cr);return e?Xt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Sk(this._delegate,e)}onAuthStateChanged(e,n,i){const{next:r,error:s,complete:a}=cw(e,n,i);return this._delegate.onAuthStateChanged(r,s,a)}onIdTokenChanged(e,n,i){const{next:r,error:s,complete:a}=cw(e,n,i);return this._delegate.onIdTokenChanged(r,s,a)}sendSignInLinkToEmail(e,n){return l2(this._delegate,e,n)}sendPasswordResetEmail(e,n){return n2(this._delegate,e,n||void 0)}async setPersistence(e){Lk(this._delegate,e);let n;switch(e){case cn.SESSION:n=Cs;break;case cn.LOCAL:n=await fn(wu)._isAvailable()?wu:X_;break;case cn.NONE:n=so;break;default:return Nt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Xt(this._delegate,Jx(this._delegate))}signInWithCredential(e){return Xt(this._delegate,Yd(this._delegate,e))}signInWithCustomToken(e){return Xt(this._delegate,t2(this._delegate,e))}signInWithEmailAndPassword(e,n){return Xt(this._delegate,o2(this._delegate,e,n))}signInWithEmailLink(e,n){return Xt(this._delegate,c2(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Jp(this._delegate,rM(this._delegate,e,n))}async signInWithPopup(e){return dl(Bm(),this._delegate,"operation-not-supported-in-this-environment"),Xt(this._delegate,dM(this._delegate,e,cr))}async signInWithRedirect(e){return dl(Bm(),this._delegate,"operation-not-supported-in-this-environment"),await Wp(this._delegate),vM(this._delegate,e,cr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return s2(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Zp.Persistence=cn;function cw(t,e,n){let i=t;typeof t!="function"&&({next:i,error:e,complete:n}=t);const r=i;return{next:a=>r(a&&tf.getOrCreate(a)),error:e,complete:n}}function Gk(t,e){const n=Uk(t,e);if(typeof self<"u"&&!n.includes(wu)&&n.push(wu),typeof window<"u")for(const i of[X_,Cs])n.includes(i)||n.push(i);return n.includes(so)||n.push(so),n}/**
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
 */class ry{constructor(){this.providerId="phone",this._delegate=new Ds(W0(Jt.auth()))}static credential(e,n){return Ds.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ry.PHONE_SIGN_IN_METHOD=Ds.PHONE_SIGN_IN_METHOD;ry.PROVIDER_ID=Ds.PROVIDER_ID;/**
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
 */const Hk=j;class Kk{constructor(e,n,i=Jt.app()){var r;Hk((r=i.options)===null||r===void 0?void 0:r.apiKey,"invalid-api-key",{appName:i.name}),this._delegate=new nM(i.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const Qk="auth-compat";function $k(t){t.INTERNAL.registerComponent(new xn(Qk,e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("auth");return new Zp(n,i)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:sa.EMAIL_SIGNIN,PASSWORD_RESET:sa.PASSWORD_RESET,RECOVER_EMAIL:sa.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:sa.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:sa.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:sa.VERIFY_EMAIL}},EmailAuthProvider:Fr,FacebookAuthProvider:qn,GithubAuthProvider:Hn,GoogleAuthProvider:Gn,OAuthProvider:Fa,SAMLAuthProvider:od,PhoneAuthProvider:ry,PhoneMultiFactorGenerator:H0,RecaptchaVerifier:Kk,TwitterAuthProvider:Kn,Auth:Zp,AuthCredential:Vo,Error:_t}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Rk,Ck)}$k(Jt);var hw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ts,Z0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(T,_){function v(){}v.prototype=_.prototype,T.D=_.prototype,T.prototype=new v,T.prototype.constructor=T,T.C=function(w,S,D){for(var b=Array(arguments.length-2),ot=2;ot<arguments.length;ot++)b[ot-2]=arguments[ot];return _.prototype[S].apply(w,b)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(T,_,v){v||(v=0);var w=Array(16);if(typeof _=="string")for(var S=0;16>S;++S)w[S]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(S=0;16>S;++S)w[S]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=T.g[0],v=T.g[1],S=T.g[2];var D=T.g[3],b=_+(D^v&(S^D))+w[0]+3614090360&4294967295;_=v+(b<<7&4294967295|b>>>25),b=D+(S^_&(v^S))+w[1]+3905402710&4294967295,D=_+(b<<12&4294967295|b>>>20),b=S+(v^D&(_^v))+w[2]+606105819&4294967295,S=D+(b<<17&4294967295|b>>>15),b=v+(_^S&(D^_))+w[3]+3250441966&4294967295,v=S+(b<<22&4294967295|b>>>10),b=_+(D^v&(S^D))+w[4]+4118548399&4294967295,_=v+(b<<7&4294967295|b>>>25),b=D+(S^_&(v^S))+w[5]+1200080426&4294967295,D=_+(b<<12&4294967295|b>>>20),b=S+(v^D&(_^v))+w[6]+2821735955&4294967295,S=D+(b<<17&4294967295|b>>>15),b=v+(_^S&(D^_))+w[7]+4249261313&4294967295,v=S+(b<<22&4294967295|b>>>10),b=_+(D^v&(S^D))+w[8]+1770035416&4294967295,_=v+(b<<7&4294967295|b>>>25),b=D+(S^_&(v^S))+w[9]+2336552879&4294967295,D=_+(b<<12&4294967295|b>>>20),b=S+(v^D&(_^v))+w[10]+4294925233&4294967295,S=D+(b<<17&4294967295|b>>>15),b=v+(_^S&(D^_))+w[11]+2304563134&4294967295,v=S+(b<<22&4294967295|b>>>10),b=_+(D^v&(S^D))+w[12]+1804603682&4294967295,_=v+(b<<7&4294967295|b>>>25),b=D+(S^_&(v^S))+w[13]+4254626195&4294967295,D=_+(b<<12&4294967295|b>>>20),b=S+(v^D&(_^v))+w[14]+2792965006&4294967295,S=D+(b<<17&4294967295|b>>>15),b=v+(_^S&(D^_))+w[15]+1236535329&4294967295,v=S+(b<<22&4294967295|b>>>10),b=_+(S^D&(v^S))+w[1]+4129170786&4294967295,_=v+(b<<5&4294967295|b>>>27),b=D+(v^S&(_^v))+w[6]+3225465664&4294967295,D=_+(b<<9&4294967295|b>>>23),b=S+(_^v&(D^_))+w[11]+643717713&4294967295,S=D+(b<<14&4294967295|b>>>18),b=v+(D^_&(S^D))+w[0]+3921069994&4294967295,v=S+(b<<20&4294967295|b>>>12),b=_+(S^D&(v^S))+w[5]+3593408605&4294967295,_=v+(b<<5&4294967295|b>>>27),b=D+(v^S&(_^v))+w[10]+38016083&4294967295,D=_+(b<<9&4294967295|b>>>23),b=S+(_^v&(D^_))+w[15]+3634488961&4294967295,S=D+(b<<14&4294967295|b>>>18),b=v+(D^_&(S^D))+w[4]+3889429448&4294967295,v=S+(b<<20&4294967295|b>>>12),b=_+(S^D&(v^S))+w[9]+568446438&4294967295,_=v+(b<<5&4294967295|b>>>27),b=D+(v^S&(_^v))+w[14]+3275163606&4294967295,D=_+(b<<9&4294967295|b>>>23),b=S+(_^v&(D^_))+w[3]+4107603335&4294967295,S=D+(b<<14&4294967295|b>>>18),b=v+(D^_&(S^D))+w[8]+1163531501&4294967295,v=S+(b<<20&4294967295|b>>>12),b=_+(S^D&(v^S))+w[13]+2850285829&4294967295,_=v+(b<<5&4294967295|b>>>27),b=D+(v^S&(_^v))+w[2]+4243563512&4294967295,D=_+(b<<9&4294967295|b>>>23),b=S+(_^v&(D^_))+w[7]+1735328473&4294967295,S=D+(b<<14&4294967295|b>>>18),b=v+(D^_&(S^D))+w[12]+2368359562&4294967295,v=S+(b<<20&4294967295|b>>>12),b=_+(v^S^D)+w[5]+4294588738&4294967295,_=v+(b<<4&4294967295|b>>>28),b=D+(_^v^S)+w[8]+2272392833&4294967295,D=_+(b<<11&4294967295|b>>>21),b=S+(D^_^v)+w[11]+1839030562&4294967295,S=D+(b<<16&4294967295|b>>>16),b=v+(S^D^_)+w[14]+4259657740&4294967295,v=S+(b<<23&4294967295|b>>>9),b=_+(v^S^D)+w[1]+2763975236&4294967295,_=v+(b<<4&4294967295|b>>>28),b=D+(_^v^S)+w[4]+1272893353&4294967295,D=_+(b<<11&4294967295|b>>>21),b=S+(D^_^v)+w[7]+4139469664&4294967295,S=D+(b<<16&4294967295|b>>>16),b=v+(S^D^_)+w[10]+3200236656&4294967295,v=S+(b<<23&4294967295|b>>>9),b=_+(v^S^D)+w[13]+681279174&4294967295,_=v+(b<<4&4294967295|b>>>28),b=D+(_^v^S)+w[0]+3936430074&4294967295,D=_+(b<<11&4294967295|b>>>21),b=S+(D^_^v)+w[3]+3572445317&4294967295,S=D+(b<<16&4294967295|b>>>16),b=v+(S^D^_)+w[6]+76029189&4294967295,v=S+(b<<23&4294967295|b>>>9),b=_+(v^S^D)+w[9]+3654602809&4294967295,_=v+(b<<4&4294967295|b>>>28),b=D+(_^v^S)+w[12]+3873151461&4294967295,D=_+(b<<11&4294967295|b>>>21),b=S+(D^_^v)+w[15]+530742520&4294967295,S=D+(b<<16&4294967295|b>>>16),b=v+(S^D^_)+w[2]+3299628645&4294967295,v=S+(b<<23&4294967295|b>>>9),b=_+(S^(v|~D))+w[0]+4096336452&4294967295,_=v+(b<<6&4294967295|b>>>26),b=D+(v^(_|~S))+w[7]+1126891415&4294967295,D=_+(b<<10&4294967295|b>>>22),b=S+(_^(D|~v))+w[14]+2878612391&4294967295,S=D+(b<<15&4294967295|b>>>17),b=v+(D^(S|~_))+w[5]+4237533241&4294967295,v=S+(b<<21&4294967295|b>>>11),b=_+(S^(v|~D))+w[12]+1700485571&4294967295,_=v+(b<<6&4294967295|b>>>26),b=D+(v^(_|~S))+w[3]+2399980690&4294967295,D=_+(b<<10&4294967295|b>>>22),b=S+(_^(D|~v))+w[10]+4293915773&4294967295,S=D+(b<<15&4294967295|b>>>17),b=v+(D^(S|~_))+w[1]+2240044497&4294967295,v=S+(b<<21&4294967295|b>>>11),b=_+(S^(v|~D))+w[8]+1873313359&4294967295,_=v+(b<<6&4294967295|b>>>26),b=D+(v^(_|~S))+w[15]+4264355552&4294967295,D=_+(b<<10&4294967295|b>>>22),b=S+(_^(D|~v))+w[6]+2734768916&4294967295,S=D+(b<<15&4294967295|b>>>17),b=v+(D^(S|~_))+w[13]+1309151649&4294967295,v=S+(b<<21&4294967295|b>>>11),b=_+(S^(v|~D))+w[4]+4149444226&4294967295,_=v+(b<<6&4294967295|b>>>26),b=D+(v^(_|~S))+w[11]+3174756917&4294967295,D=_+(b<<10&4294967295|b>>>22),b=S+(_^(D|~v))+w[2]+718787259&4294967295,S=D+(b<<15&4294967295|b>>>17),b=v+(D^(S|~_))+w[9]+3951481745&4294967295,T.g[0]=T.g[0]+_&4294967295,T.g[1]=T.g[1]+(S+(b<<21&4294967295|b>>>11))&4294967295,T.g[2]=T.g[2]+S&4294967295,T.g[3]=T.g[3]+D&4294967295}i.prototype.u=function(T,_){_===void 0&&(_=T.length);for(var v=_-this.blockSize,w=this.B,S=this.h,D=0;D<_;){if(S==0)for(;D<=v;)r(this,T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<_;)if(w[S++]=T.charCodeAt(D++),S==this.blockSize){r(this,w),S=0;break}}else for(;D<_;)if(w[S++]=T[D++],S==this.blockSize){r(this,w),S=0;break}}this.h=S,this.o+=_},i.prototype.v=function(){var T=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);T[0]=128;for(var _=1;_<T.length-8;++_)T[_]=0;var v=8*this.o;for(_=T.length-8;_<T.length;++_)T[_]=v&255,v/=256;for(this.u(T),T=Array(16),_=v=0;4>_;++_)for(var w=0;32>w;w+=8)T[v++]=this.g[_]>>>w&255;return T};function s(T,_){var v=o;return Object.prototype.hasOwnProperty.call(v,T)?v[T]:v[T]=_(T)}function a(T,_){this.h=_;for(var v=[],w=!0,S=T.length-1;0<=S;S--){var D=T[S]|0;w&&D==_||(v[S]=D,w=!1)}this.g=v}var o={};function u(T){return-128<=T&&128>T?s(T,function(_){return new a([_|0],0>_?-1:0)}):new a([T|0],0>T?-1:0)}function c(T){if(isNaN(T)||!isFinite(T))return f;if(0>T)return x(c(-T));for(var _=[],v=1,w=0;T>=v;w++)_[w]=T/v|0,v*=4294967296;return new a(_,0)}function d(T,_){if(T.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(T.charAt(0)=="-")return x(d(T.substring(1),_));if(0<=T.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=c(Math.pow(_,8)),w=f,S=0;S<T.length;S+=8){var D=Math.min(8,T.length-S),b=parseInt(T.substring(S,S+D),_);8>D?(D=c(Math.pow(_,D)),w=w.j(D).add(c(b))):(w=w.j(v),w=w.add(c(b)))}return w}var f=u(0),p=u(1),g=u(16777216);t=a.prototype,t.m=function(){if(N(this))return-x(this).m();for(var T=0,_=1,v=0;v<this.g.length;v++){var w=this.i(v);T+=(0<=w?w:4294967296+w)*_,_*=4294967296}return T},t.toString=function(T){if(T=T||10,2>T||36<T)throw Error("radix out of range: "+T);if(R(this))return"0";if(N(this))return"-"+x(this).toString(T);for(var _=c(Math.pow(T,6)),v=this,w="";;){var S=O(v,_).g;v=I(v,S.j(_));var D=((0<v.g.length?v.g[0]:v.h)>>>0).toString(T);if(v=S,R(v))return D+w;for(;6>D.length;)D="0"+D;w=D+w}},t.i=function(T){return 0>T?0:T<this.g.length?this.g[T]:this.h};function R(T){if(T.h!=0)return!1;for(var _=0;_<T.g.length;_++)if(T.g[_]!=0)return!1;return!0}function N(T){return T.h==-1}t.l=function(T){return T=I(this,T),N(T)?-1:R(T)?0:1};function x(T){for(var _=T.g.length,v=[],w=0;w<_;w++)v[w]=~T.g[w];return new a(v,~T.h).add(p)}t.abs=function(){return N(this)?x(this):this},t.add=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],w=0,S=0;S<=_;S++){var D=w+(this.i(S)&65535)+(T.i(S)&65535),b=(D>>>16)+(this.i(S)>>>16)+(T.i(S)>>>16);w=b>>>16,D&=65535,b&=65535,v[S]=b<<16|D}return new a(v,v[v.length-1]&-2147483648?-1:0)};function I(T,_){return T.add(x(_))}t.j=function(T){if(R(this)||R(T))return f;if(N(this))return N(T)?x(this).j(x(T)):x(x(this).j(T));if(N(T))return x(this.j(x(T)));if(0>this.l(g)&&0>T.l(g))return c(this.m()*T.m());for(var _=this.g.length+T.g.length,v=[],w=0;w<2*_;w++)v[w]=0;for(w=0;w<this.g.length;w++)for(var S=0;S<T.g.length;S++){var D=this.i(w)>>>16,b=this.i(w)&65535,ot=T.i(S)>>>16,Ht=T.i(S)&65535;v[2*w+2*S]+=b*Ht,E(v,2*w+2*S),v[2*w+2*S+1]+=D*Ht,E(v,2*w+2*S+1),v[2*w+2*S+1]+=b*ot,E(v,2*w+2*S+1),v[2*w+2*S+2]+=D*ot,E(v,2*w+2*S+2)}for(w=0;w<_;w++)v[w]=v[2*w+1]<<16|v[2*w];for(w=_;w<2*_;w++)v[w]=0;return new a(v,0)};function E(T,_){for(;(T[_]&65535)!=T[_];)T[_+1]+=T[_]>>>16,T[_]&=65535,_++}function A(T,_){this.g=T,this.h=_}function O(T,_){if(R(_))throw Error("division by zero");if(R(T))return new A(f,f);if(N(T))return _=O(x(T),_),new A(x(_.g),x(_.h));if(N(_))return _=O(T,x(_)),new A(x(_.g),_.h);if(30<T.g.length){if(N(T)||N(_))throw Error("slowDivide_ only works with positive integers.");for(var v=p,w=_;0>=w.l(T);)v=L(v),w=L(w);var S=F(v,1),D=F(w,1);for(w=F(w,2),v=F(v,2);!R(w);){var b=D.add(w);0>=b.l(T)&&(S=S.add(v),D=b),w=F(w,1),v=F(v,1)}return _=I(T,S.j(_)),new A(S,_)}for(S=f;0<=T.l(_);){for(v=Math.max(1,Math.floor(T.m()/_.m())),w=Math.ceil(Math.log(v)/Math.LN2),w=48>=w?1:Math.pow(2,w-48),D=c(v),b=D.j(_);N(b)||0<b.l(T);)v-=w,D=c(v),b=D.j(_);R(D)&&(D=p),S=S.add(D),T=I(T,b)}return new A(S,T)}t.A=function(T){return O(this,T).h},t.and=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)&T.i(w);return new a(v,this.h&T.h)},t.or=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)|T.i(w);return new a(v,this.h|T.h)},t.xor=function(T){for(var _=Math.max(this.g.length,T.g.length),v=[],w=0;w<_;w++)v[w]=this.i(w)^T.i(w);return new a(v,this.h^T.h)};function L(T){for(var _=T.g.length+1,v=[],w=0;w<_;w++)v[w]=T.i(w)<<1|T.i(w-1)>>>31;return new a(v,T.h)}function F(T,_){var v=_>>5;_%=32;for(var w=T.g.length-v,S=[],D=0;D<w;D++)S[D]=0<_?T.i(D+v)>>>_|T.i(D+v+1)<<32-_:T.i(D+v);return new a(S,T.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,Z0=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=c,a.fromString=d,Ts=a}).apply(typeof hw<"u"?hw:typeof self<"u"?self:typeof window<"u"?window:{});var $c=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var eR,tR,Rl,nR,vh,eg,iR,rR,sR;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(l,h,m){return l==Array.prototype||l==Object.prototype||(l[h]=m.value),l};function n(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof $c=="object"&&$c];for(var h=0;h<l.length;++h){var m=l[h];if(m&&m.Math==Math)return m}throw Error("Cannot find global object")}var i=n(this);function r(l,h){if(h)e:{var m=i;l=l.split(".");for(var y=0;y<l.length-1;y++){var P=l[y];if(!(P in m))break e;m=m[P]}l=l[l.length-1],y=m[l],h=h(y),h!=y&&h!=null&&e(m,l,{configurable:!0,writable:!0,value:h})}}function s(l,h){l instanceof String&&(l+="");var m=0,y=!1,P={next:function(){if(!y&&m<l.length){var k=m++;return{value:h(k,l[k]),done:!1}}return y=!0,{done:!0,value:void 0}}};return P[Symbol.iterator]=function(){return P},P}r("Array.prototype.values",function(l){return l||function(){return s(this,function(h,m){return m})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},o=this||self;function u(l){var h=typeof l;return h=h!="object"?h:l?Array.isArray(l)?"array":h:"null",h=="array"||h=="object"&&typeof l.length=="number"}function c(l){var h=typeof l;return h=="object"&&l!=null||h=="function"}function d(l,h,m){return l.call.apply(l.bind,arguments)}function f(l,h,m){if(!l)throw Error();if(2<arguments.length){var y=Array.prototype.slice.call(arguments,2);return function(){var P=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(P,y),l.apply(h,P)}}return function(){return l.apply(h,arguments)}}function p(l,h,m){return p=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:f,p.apply(null,arguments)}function g(l,h){var m=Array.prototype.slice.call(arguments,1);return function(){var y=m.slice();return y.push.apply(y,arguments),l.apply(this,y)}}function R(l,h){function m(){}m.prototype=h.prototype,l.aa=h.prototype,l.prototype=new m,l.prototype.constructor=l,l.Qb=function(y,P,k){for(var q=Array(arguments.length-2),Ie=2;Ie<arguments.length;Ie++)q[Ie-2]=arguments[Ie];return h.prototype[P].apply(y,q)}}function N(l){const h=l.length;if(0<h){const m=Array(h);for(let y=0;y<h;y++)m[y]=l[y];return m}return[]}function x(l,h){for(let m=1;m<arguments.length;m++){const y=arguments[m];if(u(y)){const P=l.length||0,k=y.length||0;l.length=P+k;for(let q=0;q<k;q++)l[P+q]=y[q]}else l.push(y)}}class I{constructor(h,m){this.i=h,this.j=m,this.h=0,this.g=null}get(){let h;return 0<this.h?(this.h--,h=this.g,this.g=h.next,h.next=null):h=this.i(),h}}function E(l){return/^[\s\xa0]*$/.test(l)}function A(){var l=o.navigator;return l&&(l=l.userAgent)?l:""}function O(l){return O[" "](l),l}O[" "]=function(){};var L=A().indexOf("Gecko")!=-1&&!(A().toLowerCase().indexOf("webkit")!=-1&&A().indexOf("Edge")==-1)&&!(A().indexOf("Trident")!=-1||A().indexOf("MSIE")!=-1)&&A().indexOf("Edge")==-1;function F(l,h,m){for(const y in l)h.call(m,l[y],y,l)}function T(l,h){for(const m in l)h.call(void 0,l[m],m,l)}function _(l){const h={};for(const m in l)h[m]=l[m];return h}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function w(l,h){let m,y;for(let P=1;P<arguments.length;P++){y=arguments[P];for(m in y)l[m]=y[m];for(let k=0;k<v.length;k++)m=v[k],Object.prototype.hasOwnProperty.call(y,m)&&(l[m]=y[m])}}function S(l){var h=1;l=l.split(":");const m=[];for(;0<h&&l.length;)m.push(l.shift()),h--;return l.length&&m.push(l.join(":")),m}function D(l){o.setTimeout(()=>{throw l},0)}function b(){var l=Re;let h=null;return l.g&&(h=l.g,l.g=l.g.next,l.g||(l.h=null),h.next=null),h}class ot{constructor(){this.h=this.g=null}add(h,m){const y=Ht.get();y.set(h,m),this.h?this.h.next=y:this.g=y,this.h=y}}var Ht=new I(()=>new K,l=>l.reset());class K{constructor(){this.next=this.g=this.h=null}set(h,m){this.h=h,this.g=m,this.next=null}reset(){this.next=this.g=this.h=null}}let ee,Z=!1,Re=new ot,Ye=()=>{const l=o.Promise.resolve(void 0);ee=()=>{l.then(Js)}};var Js=()=>{for(var l;l=b();){try{l.h.call(l.g)}catch(m){D(m)}var h=Ht;h.j(l),100>h.h&&(h.h++,l.next=h.g,h.g=l)}Z=!1};function an(){this.s=this.s,this.C=this.C}an.prototype.s=!1,an.prototype.ma=function(){this.s||(this.s=!0,this.N())},an.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function et(l,h){this.type=l,this.g=this.target=h,this.defaultPrevented=!1}et.prototype.h=function(){this.defaultPrevented=!0};var oi=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,h=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const m=()=>{};o.addEventListener("test",m,h),o.removeEventListener("test",m,h)}catch{}return l}();function jn(l,h){if(et.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l){var m=this.type=l.type,y=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;if(this.target=l.target||l.srcElement,this.g=h,h=l.relatedTarget){if(L){e:{try{O(h.nodeName);var P=!0;break e}catch{}P=!1}P||(h=null)}}else m=="mouseover"?h=l.fromElement:m=="mouseout"&&(h=l.toElement);this.relatedTarget=h,y?(this.clientX=y.clientX!==void 0?y.clientX:y.pageX,this.clientY=y.clientY!==void 0?y.clientY:y.pageY,this.screenX=y.screenX||0,this.screenY=y.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=typeof l.pointerType=="string"?l.pointerType:ND[l.pointerType]||"",this.state=l.state,this.i=l,l.defaultPrevented&&jn.aa.h.call(this)}}R(jn,et);var ND={2:"touch",3:"pen",4:"mouse"};jn.prototype.h=function(){jn.aa.h.call(this);var l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var fc="closure_listenable_"+(1e6*Math.random()|0),OD=0;function PD(l,h,m,y,P){this.listener=l,this.proxy=null,this.src=h,this.type=m,this.capture=!!y,this.ha=P,this.key=++OD,this.da=this.fa=!1}function mc(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function pc(l){this.src=l,this.g={},this.h=0}pc.prototype.add=function(l,h,m,y,P){var k=l.toString();l=this.g[k],l||(l=this.g[k]=[],this.h++);var q=Sf(l,h,y,P);return-1<q?(h=l[q],m||(h.fa=!1)):(h=new PD(h,this.src,k,!!y,P),h.fa=m,l.push(h)),h};function bf(l,h){var m=h.type;if(m in l.g){var y=l.g[m],P=Array.prototype.indexOf.call(y,h,void 0),k;(k=0<=P)&&Array.prototype.splice.call(y,P,1),k&&(mc(h),l.g[m].length==0&&(delete l.g[m],l.h--))}}function Sf(l,h,m,y){for(var P=0;P<l.length;++P){var k=l[P];if(!k.da&&k.listener==h&&k.capture==!!m&&k.ha==y)return P}return-1}var Rf="closure_lm_"+(1e6*Math.random()|0),Cf={};function ov(l,h,m,y,P){if(Array.isArray(h)){for(var k=0;k<h.length;k++)ov(l,h[k],m,y,P);return null}return m=cv(m),l&&l[fc]?l.K(h,m,c(y)?!!y.capture:!1,P):VD(l,h,m,!1,y,P)}function VD(l,h,m,y,P,k){if(!h)throw Error("Invalid event type");var q=c(P)?!!P.capture:!!P,Ie=Nf(l);if(Ie||(l[Rf]=Ie=new pc(l)),m=Ie.add(h,m,y,q,k),m.proxy)return m;if(y=xD(),m.proxy=y,y.src=l,y.listener=m,l.addEventListener)oi||(P=q),P===void 0&&(P=!1),l.addEventListener(h.toString(),y,P);else if(l.attachEvent)l.attachEvent(uv(h.toString()),y);else if(l.addListener&&l.removeListener)l.addListener(y);else throw Error("addEventListener and attachEvent are unavailable.");return m}function xD(){function l(m){return h.call(l.src,l.listener,m)}const h=MD;return l}function lv(l,h,m,y,P){if(Array.isArray(h))for(var k=0;k<h.length;k++)lv(l,h[k],m,y,P);else y=c(y)?!!y.capture:!!y,m=cv(m),l&&l[fc]?(l=l.i,h=String(h).toString(),h in l.g&&(k=l.g[h],m=Sf(k,m,y,P),-1<m&&(mc(k[m]),Array.prototype.splice.call(k,m,1),k.length==0&&(delete l.g[h],l.h--)))):l&&(l=Nf(l))&&(h=l.g[h.toString()],l=-1,h&&(l=Sf(h,m,y,P)),(m=-1<l?h[l]:null)&&Df(m))}function Df(l){if(typeof l!="number"&&l&&!l.da){var h=l.src;if(h&&h[fc])bf(h.i,l);else{var m=l.type,y=l.proxy;h.removeEventListener?h.removeEventListener(m,y,l.capture):h.detachEvent?h.detachEvent(uv(m),y):h.addListener&&h.removeListener&&h.removeListener(y),(m=Nf(h))?(bf(m,l),m.h==0&&(m.src=null,h[Rf]=null)):mc(l)}}}function uv(l){return l in Cf?Cf[l]:Cf[l]="on"+l}function MD(l,h){if(l.da)l=!0;else{h=new jn(h,this);var m=l.listener,y=l.ha||l.src;l.fa&&Df(l),l=m.call(y,h)}return l}function Nf(l){return l=l[Rf],l instanceof pc?l:null}var Of="__closure_events_fn_"+(1e9*Math.random()>>>0);function cv(l){return typeof l=="function"?l:(l[Of]||(l[Of]=function(h){return l.handleEvent(h)}),l[Of])}function Ot(){an.call(this),this.i=new pc(this),this.M=this,this.F=null}R(Ot,an),Ot.prototype[fc]=!0,Ot.prototype.removeEventListener=function(l,h,m,y){lv(this,l,h,m,y)};function Mt(l,h){var m,y=l.F;if(y)for(m=[];y;y=y.F)m.push(y);if(l=l.M,y=h.type||h,typeof h=="string")h=new et(h,l);else if(h instanceof et)h.target=h.target||l;else{var P=h;h=new et(y,l),w(h,P)}if(P=!0,m)for(var k=m.length-1;0<=k;k--){var q=h.g=m[k];P=gc(q,y,!0,h)&&P}if(q=h.g=l,P=gc(q,y,!0,h)&&P,P=gc(q,y,!1,h)&&P,m)for(k=0;k<m.length;k++)q=h.g=m[k],P=gc(q,y,!1,h)&&P}Ot.prototype.N=function(){if(Ot.aa.N.call(this),this.i){var l=this.i,h;for(h in l.g){for(var m=l.g[h],y=0;y<m.length;y++)mc(m[y]);delete l.g[h],l.h--}}this.F=null},Ot.prototype.K=function(l,h,m,y){return this.i.add(String(l),h,!1,m,y)},Ot.prototype.L=function(l,h,m,y){return this.i.add(String(l),h,!0,m,y)};function gc(l,h,m,y){if(h=l.i.g[String(h)],!h)return!0;h=h.concat();for(var P=!0,k=0;k<h.length;++k){var q=h[k];if(q&&!q.da&&q.capture==m){var Ie=q.listener,wt=q.ha||q.src;q.fa&&bf(l.i,q),P=Ie.call(wt,y)!==!1&&P}}return P&&!y.defaultPrevented}function hv(l,h,m){if(typeof l=="function")m&&(l=p(l,m));else if(l&&typeof l.handleEvent=="function")l=p(l.handleEvent,l);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:o.setTimeout(l,h||0)}function dv(l){l.g=hv(()=>{l.g=null,l.i&&(l.i=!1,dv(l))},l.l);const h=l.h;l.h=null,l.m.apply(null,h)}class kD extends an{constructor(h,m){super(),this.m=h,this.l=m,this.h=null,this.i=!1,this.g=null}j(h){this.h=arguments,this.g?this.i=!0:dv(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function qo(l){an.call(this),this.h=l,this.g={}}R(qo,an);var fv=[];function mv(l){F(l.g,function(h,m){this.g.hasOwnProperty(m)&&Df(h)},l),l.g={}}qo.prototype.N=function(){qo.aa.N.call(this),mv(this)},qo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Pf=o.JSON.stringify,LD=o.JSON.parse,UD=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function Vf(){}Vf.prototype.h=null;function pv(l){return l.h||(l.h=l.i())}function gv(){}var Go={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function xf(){et.call(this,"d")}R(xf,et);function Mf(){et.call(this,"c")}R(Mf,et);var Kr={},_v=null;function _c(){return _v=_v||new Ot}Kr.La="serverreachability";function yv(l){et.call(this,Kr.La,l)}R(yv,et);function Ho(l){const h=_c();Mt(h,new yv(h))}Kr.STAT_EVENT="statevent";function vv(l,h){et.call(this,Kr.STAT_EVENT,l),this.stat=h}R(vv,et);function kt(l){const h=_c();Mt(h,new vv(h,l))}Kr.Ma="timingevent";function Ev(l,h){et.call(this,Kr.Ma,l),this.size=h}R(Ev,et);function Ko(l,h){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},h)}function Qo(){this.g=!0}Qo.prototype.xa=function(){this.g=!1};function zD(l,h,m,y,P,k){l.info(function(){if(l.g)if(k)for(var q="",Ie=k.split("&"),wt=0;wt<Ie.length;wt++){var me=Ie[wt].split("=");if(1<me.length){var Pt=me[0];me=me[1];var Vt=Pt.split("_");q=2<=Vt.length&&Vt[1]=="type"?q+(Pt+"="+me+"&"):q+(Pt+"=redacted&")}}else q=null;else q=k;return"XMLHTTP REQ ("+y+") [attempt "+P+"]: "+h+`
`+m+`
`+q})}function BD(l,h,m,y,P,k,q){l.info(function(){return"XMLHTTP RESP ("+y+") [ attempt "+P+"]: "+h+`
`+m+`
`+k+" "+q})}function Zs(l,h,m,y){l.info(function(){return"XMLHTTP TEXT ("+h+"): "+jD(l,m)+(y?" "+y:"")})}function FD(l,h){l.info(function(){return"TIMEOUT: "+h})}Qo.prototype.info=function(){};function jD(l,h){if(!l.g)return h;if(!h)return null;try{var m=JSON.parse(h);if(m){for(l=0;l<m.length;l++)if(Array.isArray(m[l])){var y=m[l];if(!(2>y.length)){var P=y[1];if(Array.isArray(P)&&!(1>P.length)){var k=P[0];if(k!="noop"&&k!="stop"&&k!="close")for(var q=1;q<P.length;q++)P[q]=""}}}}return Pf(m)}catch{return h}}var yc={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Tv={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},kf;function vc(){}R(vc,Vf),vc.prototype.g=function(){return new XMLHttpRequest},vc.prototype.i=function(){return{}},kf=new vc;function qi(l,h,m,y){this.j=l,this.i=h,this.l=m,this.R=y||1,this.U=new qo(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new wv}function wv(){this.i=null,this.g="",this.h=!1}var Iv={},Lf={};function Uf(l,h,m){l.L=1,l.v=Ic(li(h)),l.m=m,l.P=!0,Av(l,null)}function Av(l,h){l.F=Date.now(),Ec(l),l.A=li(l.v);var m=l.A,y=l.R;Array.isArray(y)||(y=[String(y)]),Uv(m.i,"t",y),l.C=0,m=l.j.J,l.h=new wv,l.g=nE(l.j,m?h:null,!l.m),0<l.O&&(l.M=new kD(p(l.Y,l,l.g),l.O)),h=l.U,m=l.g,y=l.ca;var P="readystatechange";Array.isArray(P)||(P&&(fv[0]=P.toString()),P=fv);for(var k=0;k<P.length;k++){var q=ov(m,P[k],y||h.handleEvent,!1,h.h||h);if(!q)break;h.g[q.key]=q}h=l.H?_(l.H):{},l.m?(l.u||(l.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.A,l.u,l.m,h)):(l.u="GET",l.g.ea(l.A,l.u,null,h)),Ho(),zD(l.i,l.u,l.A,l.l,l.R,l.m)}qi.prototype.ca=function(l){l=l.target;const h=this.M;h&&ui(l)==3?h.j():this.Y(l)},qi.prototype.Y=function(l){try{if(l==this.g)e:{const Vt=ui(this.g);var h=this.g.Ba();const na=this.g.Z();if(!(3>Vt)&&(Vt!=3||this.g&&(this.h.h||this.g.oa()||Hv(this.g)))){this.J||Vt!=4||h==7||(h==8||0>=na?Ho(3):Ho(2)),zf(this);var m=this.g.Z();this.X=m;t:if(bv(this)){var y=Hv(this.g);l="";var P=y.length,k=ui(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Qr(this),$o(this);var q="";break t}this.h.i=new o.TextDecoder}for(h=0;h<P;h++)this.h.h=!0,l+=this.h.i.decode(y[h],{stream:!(k&&h==P-1)});y.length=0,this.h.g+=l,this.C=0,q=this.h.g}else q=this.g.oa();if(this.o=m==200,BD(this.i,this.u,this.A,this.l,this.R,Vt,m),this.o){if(this.T&&!this.K){t:{if(this.g){var Ie,wt=this.g;if((Ie=wt.g?wt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(Ie)){var me=Ie;break t}}me=null}if(m=me)Zs(this.i,this.l,m,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Bf(this,m);else{this.o=!1,this.s=3,kt(12),Qr(this),$o(this);break e}}if(this.P){m=!0;let kn;for(;!this.J&&this.C<q.length;)if(kn=qD(this,q),kn==Lf){Vt==4&&(this.s=4,kt(14),m=!1),Zs(this.i,this.l,null,"[Incomplete Response]");break}else if(kn==Iv){this.s=4,kt(15),Zs(this.i,this.l,q,"[Invalid Chunk]"),m=!1;break}else Zs(this.i,this.l,kn,null),Bf(this,kn);if(bv(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Vt!=4||q.length!=0||this.h.h||(this.s=1,kt(16),m=!1),this.o=this.o&&m,!m)Zs(this.i,this.l,q,"[Invalid Chunked Response]"),Qr(this),$o(this);else if(0<q.length&&!this.W){this.W=!0;var Pt=this.j;Pt.g==this&&Pt.ba&&!Pt.M&&(Pt.j.info("Great, no buffering proxy detected. Bytes received: "+q.length),Kf(Pt),Pt.M=!0,kt(11))}}else Zs(this.i,this.l,q,null),Bf(this,q);Vt==4&&Qr(this),this.o&&!this.J&&(Vt==4?Jv(this.j,this):(this.o=!1,Ec(this)))}else a1(this.g),m==400&&0<q.indexOf("Unknown SID")?(this.s=3,kt(12)):(this.s=0,kt(13)),Qr(this),$o(this)}}}catch{}finally{}};function bv(l){return l.g?l.u=="GET"&&l.L!=2&&l.j.Ca:!1}function qD(l,h){var m=l.C,y=h.indexOf(`
`,m);return y==-1?Lf:(m=Number(h.substring(m,y)),isNaN(m)?Iv:(y+=1,y+m>h.length?Lf:(h=h.slice(y,y+m),l.C=y+m,h)))}qi.prototype.cancel=function(){this.J=!0,Qr(this)};function Ec(l){l.S=Date.now()+l.I,Sv(l,l.I)}function Sv(l,h){if(l.B!=null)throw Error("WatchDog timer not null");l.B=Ko(p(l.ba,l),h)}function zf(l){l.B&&(o.clearTimeout(l.B),l.B=null)}qi.prototype.ba=function(){this.B=null;const l=Date.now();0<=l-this.S?(FD(this.i,this.A),this.L!=2&&(Ho(),kt(17)),Qr(this),this.s=2,$o(this)):Sv(this,this.S-l)};function $o(l){l.j.G==0||l.J||Jv(l.j,l)}function Qr(l){zf(l);var h=l.M;h&&typeof h.ma=="function"&&h.ma(),l.M=null,mv(l.U),l.g&&(h=l.g,l.g=null,h.abort(),h.ma())}function Bf(l,h){try{var m=l.j;if(m.G!=0&&(m.g==l||Ff(m.h,l))){if(!l.K&&Ff(m.h,l)&&m.G==3){try{var y=m.Da.g.parse(h)}catch{y=null}if(Array.isArray(y)&&y.length==3){var P=y;if(P[0]==0){e:if(!m.u){if(m.g)if(m.g.F+3e3<l.F)Cc(m),Sc(m);else break e;Hf(m),kt(18)}}else m.za=P[1],0<m.za-m.T&&37500>P[2]&&m.F&&m.v==0&&!m.C&&(m.C=Ko(p(m.Za,m),6e3));if(1>=Dv(m.h)&&m.ca){try{m.ca()}catch{}m.ca=void 0}}else Yr(m,11)}else if((l.K||m.g==l)&&Cc(m),!E(h))for(P=m.Da.g.parse(h),h=0;h<P.length;h++){let me=P[h];if(m.T=me[0],me=me[1],m.G==2)if(me[0]=="c"){m.K=me[1],m.ia=me[2];const Pt=me[3];Pt!=null&&(m.la=Pt,m.j.info("VER="+m.la));const Vt=me[4];Vt!=null&&(m.Aa=Vt,m.j.info("SVER="+m.Aa));const na=me[5];na!=null&&typeof na=="number"&&0<na&&(y=1.5*na,m.L=y,m.j.info("backChannelRequestTimeoutMs_="+y)),y=m;const kn=l.g;if(kn){const Nc=kn.g?kn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Nc){var k=y.h;k.g||Nc.indexOf("spdy")==-1&&Nc.indexOf("quic")==-1&&Nc.indexOf("h2")==-1||(k.j=k.l,k.g=new Set,k.h&&(jf(k,k.h),k.h=null))}if(y.D){const Qf=kn.g?kn.g.getResponseHeader("X-HTTP-Session-Id"):null;Qf&&(y.ya=Qf,Ce(y.I,y.D,Qf))}}m.G=3,m.l&&m.l.ua(),m.ba&&(m.R=Date.now()-l.F,m.j.info("Handshake RTT: "+m.R+"ms")),y=m;var q=l;if(y.qa=tE(y,y.J?y.ia:null,y.W),q.K){Nv(y.h,q);var Ie=q,wt=y.L;wt&&(Ie.I=wt),Ie.B&&(zf(Ie),Ec(Ie)),y.g=q}else Xv(y);0<m.i.length&&Rc(m)}else me[0]!="stop"&&me[0]!="close"||Yr(m,7);else m.G==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?Yr(m,7):Gf(m):me[0]!="noop"&&m.l&&m.l.ta(me),m.v=0)}}Ho(4)}catch{}}var GD=class{constructor(l,h){this.g=l,this.map=h}};function Rv(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=0<l.length&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Cv(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Dv(l){return l.h?1:l.g?l.g.size:0}function Ff(l,h){return l.h?l.h==h:l.g?l.g.has(h):!1}function jf(l,h){l.g?l.g.add(h):l.h=h}function Nv(l,h){l.h&&l.h==h?l.h=null:l.g&&l.g.has(h)&&l.g.delete(h)}Rv.prototype.cancel=function(){if(this.i=Ov(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function Ov(l){if(l.h!=null)return l.i.concat(l.h.D);if(l.g!=null&&l.g.size!==0){let h=l.i;for(const m of l.g.values())h=h.concat(m.D);return h}return N(l.i)}function HD(l){if(l.V&&typeof l.V=="function")return l.V();if(typeof Map<"u"&&l instanceof Map||typeof Set<"u"&&l instanceof Set)return Array.from(l.values());if(typeof l=="string")return l.split("");if(u(l)){for(var h=[],m=l.length,y=0;y<m;y++)h.push(l[y]);return h}h=[],m=0;for(y in l)h[m++]=l[y];return h}function KD(l){if(l.na&&typeof l.na=="function")return l.na();if(!l.V||typeof l.V!="function"){if(typeof Map<"u"&&l instanceof Map)return Array.from(l.keys());if(!(typeof Set<"u"&&l instanceof Set)){if(u(l)||typeof l=="string"){var h=[];l=l.length;for(var m=0;m<l;m++)h.push(m);return h}h=[],m=0;for(const y in l)h[m++]=y;return h}}}function Pv(l,h){if(l.forEach&&typeof l.forEach=="function")l.forEach(h,void 0);else if(u(l)||typeof l=="string")Array.prototype.forEach.call(l,h,void 0);else for(var m=KD(l),y=HD(l),P=y.length,k=0;k<P;k++)h.call(void 0,y[k],m&&m[k],l)}var Vv=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QD(l,h){if(l){l=l.split("&");for(var m=0;m<l.length;m++){var y=l[m].indexOf("="),P=null;if(0<=y){var k=l[m].substring(0,y);P=l[m].substring(y+1)}else k=l[m];h(k,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function $r(l){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,l instanceof $r){this.h=l.h,Tc(this,l.j),this.o=l.o,this.g=l.g,wc(this,l.s),this.l=l.l;var h=l.i,m=new Wo;m.i=h.i,h.g&&(m.g=new Map(h.g),m.h=h.h),xv(this,m),this.m=l.m}else l&&(h=String(l).match(Vv))?(this.h=!1,Tc(this,h[1]||"",!0),this.o=Yo(h[2]||""),this.g=Yo(h[3]||"",!0),wc(this,h[4]),this.l=Yo(h[5]||"",!0),xv(this,h[6]||"",!0),this.m=Yo(h[7]||"")):(this.h=!1,this.i=new Wo(null,this.h))}$r.prototype.toString=function(){var l=[],h=this.j;h&&l.push(Xo(h,Mv,!0),":");var m=this.g;return(m||h=="file")&&(l.push("//"),(h=this.o)&&l.push(Xo(h,Mv,!0),"@"),l.push(encodeURIComponent(String(m)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),m=this.s,m!=null&&l.push(":",String(m))),(m=this.l)&&(this.g&&m.charAt(0)!="/"&&l.push("/"),l.push(Xo(m,m.charAt(0)=="/"?XD:YD,!0))),(m=this.i.toString())&&l.push("?",m),(m=this.m)&&l.push("#",Xo(m,JD)),l.join("")};function li(l){return new $r(l)}function Tc(l,h,m){l.j=m?Yo(h,!0):h,l.j&&(l.j=l.j.replace(/:$/,""))}function wc(l,h){if(h){if(h=Number(h),isNaN(h)||0>h)throw Error("Bad port number "+h);l.s=h}else l.s=null}function xv(l,h,m){h instanceof Wo?(l.i=h,ZD(l.i,l.h)):(m||(h=Xo(h,WD)),l.i=new Wo(h,l.h))}function Ce(l,h,m){l.i.set(h,m)}function Ic(l){return Ce(l,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),l}function Yo(l,h){return l?h?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Xo(l,h,m){return typeof l=="string"?(l=encodeURI(l).replace(h,$D),m&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function $D(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var Mv=/[#\/\?@]/g,YD=/[#\?:]/g,XD=/[#\?]/g,WD=/[#\?@]/g,JD=/#/g;function Wo(l,h){this.h=this.g=null,this.i=l||null,this.j=!!h}function Gi(l){l.g||(l.g=new Map,l.h=0,l.i&&QD(l.i,function(h,m){l.add(decodeURIComponent(h.replace(/\+/g," ")),m)}))}t=Wo.prototype,t.add=function(l,h){Gi(this),this.i=null,l=ea(this,l);var m=this.g.get(l);return m||this.g.set(l,m=[]),m.push(h),this.h+=1,this};function kv(l,h){Gi(l),h=ea(l,h),l.g.has(h)&&(l.i=null,l.h-=l.g.get(h).length,l.g.delete(h))}function Lv(l,h){return Gi(l),h=ea(l,h),l.g.has(h)}t.forEach=function(l,h){Gi(this),this.g.forEach(function(m,y){m.forEach(function(P){l.call(h,P,y,this)},this)},this)},t.na=function(){Gi(this);const l=Array.from(this.g.values()),h=Array.from(this.g.keys()),m=[];for(let y=0;y<h.length;y++){const P=l[y];for(let k=0;k<P.length;k++)m.push(h[y])}return m},t.V=function(l){Gi(this);let h=[];if(typeof l=="string")Lv(this,l)&&(h=h.concat(this.g.get(ea(this,l))));else{l=Array.from(this.g.values());for(let m=0;m<l.length;m++)h=h.concat(l[m])}return h},t.set=function(l,h){return Gi(this),this.i=null,l=ea(this,l),Lv(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[h]),this.h+=1,this},t.get=function(l,h){return l?(l=this.V(l),0<l.length?String(l[0]):h):h};function Uv(l,h,m){kv(l,h),0<m.length&&(l.i=null,l.g.set(ea(l,h),N(m)),l.h+=m.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],h=Array.from(this.g.keys());for(var m=0;m<h.length;m++){var y=h[m];const k=encodeURIComponent(String(y)),q=this.V(y);for(y=0;y<q.length;y++){var P=k;q[y]!==""&&(P+="="+encodeURIComponent(String(q[y]))),l.push(P)}}return this.i=l.join("&")};function ea(l,h){return h=String(h),l.j&&(h=h.toLowerCase()),h}function ZD(l,h){h&&!l.j&&(Gi(l),l.i=null,l.g.forEach(function(m,y){var P=y.toLowerCase();y!=P&&(kv(this,y),Uv(this,P,m))},l)),l.j=h}function e1(l,h){const m=new Qo;if(o.Image){const y=new Image;y.onload=g(Hi,m,"TestLoadImage: loaded",!0,h,y),y.onerror=g(Hi,m,"TestLoadImage: error",!1,h,y),y.onabort=g(Hi,m,"TestLoadImage: abort",!1,h,y),y.ontimeout=g(Hi,m,"TestLoadImage: timeout",!1,h,y),o.setTimeout(function(){y.ontimeout&&y.ontimeout()},1e4),y.src=l}else h(!1)}function t1(l,h){const m=new Qo,y=new AbortController,P=setTimeout(()=>{y.abort(),Hi(m,"TestPingServer: timeout",!1,h)},1e4);fetch(l,{signal:y.signal}).then(k=>{clearTimeout(P),k.ok?Hi(m,"TestPingServer: ok",!0,h):Hi(m,"TestPingServer: server error",!1,h)}).catch(()=>{clearTimeout(P),Hi(m,"TestPingServer: error",!1,h)})}function Hi(l,h,m,y,P){try{P&&(P.onload=null,P.onerror=null,P.onabort=null,P.ontimeout=null),y(m)}catch{}}function n1(){this.g=new UD}function i1(l,h,m){const y=m||"";try{Pv(l,function(P,k){let q=P;c(P)&&(q=Pf(P)),h.push(y+k+"="+encodeURIComponent(q))})}catch(P){throw h.push(y+"type="+encodeURIComponent("_badmap")),P}}function Jo(l){this.l=l.Ub||null,this.j=l.eb||!1}R(Jo,Vf),Jo.prototype.g=function(){return new Ac(this.l,this.j)},Jo.prototype.i=function(l){return function(){return l}}({});function Ac(l,h){Ot.call(this),this.D=l,this.o=h,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}R(Ac,Ot),t=Ac.prototype,t.open=function(l,h){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=l,this.A=h,this.readyState=1,el(this)},t.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const h={headers:this.u,method:this.B,credentials:this.m,cache:void 0};l&&(h.body=l),(this.D||o).fetch(new Request(this.A,h)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zo(this)),this.readyState=0},t.Sa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,el(this)),this.g&&(this.readyState=3,el(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;zv(this)}else l.text().then(this.Ra.bind(this),this.ga.bind(this))};function zv(l){l.j.read().then(l.Pa.bind(l)).catch(l.ga.bind(l))}t.Pa=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var h=l.value?l.value:new Uint8Array(0);(h=this.v.decode(h,{stream:!l.done}))&&(this.response=this.responseText+=h)}l.done?Zo(this):el(this),this.readyState==3&&zv(this)}},t.Ra=function(l){this.g&&(this.response=this.responseText=l,Zo(this))},t.Qa=function(l){this.g&&(this.response=l,Zo(this))},t.ga=function(){this.g&&Zo(this)};function Zo(l){l.readyState=4,l.l=null,l.j=null,l.v=null,el(l)}t.setRequestHeader=function(l,h){this.u.append(l,h)},t.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],h=this.h.entries();for(var m=h.next();!m.done;)m=m.value,l.push(m[0]+": "+m[1]),m=h.next();return l.join(`\r
`)};function el(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(Ac.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Bv(l){let h="";return F(l,function(m,y){h+=y,h+=":",h+=m,h+=`\r
`}),h}function qf(l,h,m){e:{for(y in m){var y=!1;break e}y=!0}y||(m=Bv(m),typeof l=="string"?m!=null&&encodeURIComponent(String(m)):Ce(l,h,m))}function Be(l){Ot.call(this),this.headers=new Map,this.o=l||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}R(Be,Ot);var r1=/^https?$/i,s1=["POST","PUT"];t=Be.prototype,t.Ha=function(l){this.J=l},t.ea=function(l,h,m,y){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);h=h?h.toUpperCase():"GET",this.D=l,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():kf.g(),this.v=this.o?pv(this.o):pv(kf),this.g.onreadystatechange=p(this.Ea,this);try{this.B=!0,this.g.open(h,String(l),!0),this.B=!1}catch(k){Fv(this,k);return}if(l=m||"",m=new Map(this.headers),y)if(Object.getPrototypeOf(y)===Object.prototype)for(var P in y)m.set(P,y[P]);else if(typeof y.keys=="function"&&typeof y.get=="function")for(const k of y.keys())m.set(k,y.get(k));else throw Error("Unknown input type for opt_headers: "+String(y));y=Array.from(m.keys()).find(k=>k.toLowerCase()=="content-type"),P=o.FormData&&l instanceof o.FormData,!(0<=Array.prototype.indexOf.call(s1,h,void 0))||y||P||m.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[k,q]of m)this.g.setRequestHeader(k,q);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gv(this),this.u=!0,this.g.send(l),this.u=!1}catch(k){Fv(this,k)}};function Fv(l,h){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=h,l.m=5,jv(l),bc(l)}function jv(l){l.A||(l.A=!0,Mt(l,"complete"),Mt(l,"error"))}t.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=l||7,Mt(this,"complete"),Mt(this,"abort"),bc(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bc(this,!0)),Be.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?qv(this):this.bb())},t.bb=function(){qv(this)};function qv(l){if(l.h&&typeof a<"u"&&(!l.v[1]||ui(l)!=4||l.Z()!=2)){if(l.u&&ui(l)==4)hv(l.Ea,0,l);else if(Mt(l,"readystatechange"),ui(l)==4){l.h=!1;try{const q=l.Z();e:switch(q){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h=!0;break e;default:h=!1}var m;if(!(m=h)){var y;if(y=q===0){var P=String(l.D).match(Vv)[1]||null;!P&&o.self&&o.self.location&&(P=o.self.location.protocol.slice(0,-1)),y=!r1.test(P?P.toLowerCase():"")}m=y}if(m)Mt(l,"complete"),Mt(l,"success");else{l.m=6;try{var k=2<ui(l)?l.g.statusText:""}catch{k=""}l.l=k+" ["+l.Z()+"]",jv(l)}}finally{bc(l)}}}}function bc(l,h){if(l.g){Gv(l);const m=l.g,y=l.v[0]?()=>{}:null;l.g=null,l.v=null,h||Mt(l,"ready");try{m.onreadystatechange=y}catch{}}}function Gv(l){l.I&&(o.clearTimeout(l.I),l.I=null)}t.isActive=function(){return!!this.g};function ui(l){return l.g?l.g.readyState:0}t.Z=function(){try{return 2<ui(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(l){if(this.g){var h=this.g.responseText;return l&&h.indexOf(l)==0&&(h=h.substring(l.length)),LD(h)}};function Hv(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.H){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function a1(l){const h={};l=(l.g&&2<=ui(l)&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let y=0;y<l.length;y++){if(E(l[y]))continue;var m=S(l[y]);const P=m[0];if(m=m[1],typeof m!="string")continue;m=m.trim();const k=h[P]||[];h[P]=k,k.push(m)}T(h,function(y){return y.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function tl(l,h,m){return m&&m.internalChannelParams&&m.internalChannelParams[l]||h}function Kv(l){this.Aa=0,this.i=[],this.j=new Qo,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=tl("failFast",!1,l),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=tl("baseRetryDelayMs",5e3,l),this.cb=tl("retryDelaySeedMs",1e4,l),this.Wa=tl("forwardChannelMaxRetries",2,l),this.wa=tl("forwardChannelRequestTimeoutMs",2e4,l),this.pa=l&&l.xmlHttpFactory||void 0,this.Xa=l&&l.Tb||void 0,this.Ca=l&&l.useFetchStreams||!1,this.L=void 0,this.J=l&&l.supportsCrossDomainXhr||!1,this.K="",this.h=new Rv(l&&l.concurrentRequestLimit),this.Da=new n1,this.P=l&&l.fastHandshake||!1,this.O=l&&l.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=l&&l.Rb||!1,l&&l.xa&&this.j.xa(),l&&l.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&l&&l.detectBufferingProxy||!1,this.ja=void 0,l&&l.longPollingTimeout&&0<l.longPollingTimeout&&(this.ja=l.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Kv.prototype,t.la=8,t.G=1,t.connect=function(l,h,m,y){kt(0),this.W=l,this.H=h||{},m&&y!==void 0&&(this.H.OSID=m,this.H.OAID=y),this.F=this.X,this.I=tE(this,null,this.W),Rc(this)};function Gf(l){if(Qv(l),l.G==3){var h=l.U++,m=li(l.I);if(Ce(m,"SID",l.K),Ce(m,"RID",h),Ce(m,"TYPE","terminate"),nl(l,m),h=new qi(l,l.j,h),h.L=2,h.v=Ic(li(m)),m=!1,o.navigator&&o.navigator.sendBeacon)try{m=o.navigator.sendBeacon(h.v.toString(),"")}catch{}!m&&o.Image&&(new Image().src=h.v,m=!0),m||(h.g=nE(h.j,null),h.g.ea(h.v)),h.F=Date.now(),Ec(h)}eE(l)}function Sc(l){l.g&&(Kf(l),l.g.cancel(),l.g=null)}function Qv(l){Sc(l),l.u&&(o.clearTimeout(l.u),l.u=null),Cc(l),l.h.cancel(),l.s&&(typeof l.s=="number"&&o.clearTimeout(l.s),l.s=null)}function Rc(l){if(!Cv(l.h)&&!l.s){l.s=!0;var h=l.Ga;ee||Ye(),Z||(ee(),Z=!0),Re.add(h,l),l.B=0}}function o1(l,h){return Dv(l.h)>=l.h.j-(l.s?1:0)?!1:l.s?(l.i=h.D.concat(l.i),!0):l.G==1||l.G==2||l.B>=(l.Va?0:l.Wa)?!1:(l.s=Ko(p(l.Ga,l,h),Zv(l,l.B)),l.B++,!0)}t.Ga=function(l){if(this.s)if(this.s=null,this.G==1){if(!l){this.U=Math.floor(1e5*Math.random()),l=this.U++;const P=new qi(this,this.j,l);let k=this.o;if(this.S&&(k?(k=_(k),w(k,this.S)):k=this.S),this.m!==null||this.O||(P.H=k,k=null),this.P)e:{for(var h=0,m=0;m<this.i.length;m++){t:{var y=this.i[m];if("__data__"in y.map&&(y=y.map.__data__,typeof y=="string")){y=y.length;break t}y=void 0}if(y===void 0)break;if(h+=y,4096<h){h=m;break e}if(h===4096||m===this.i.length-1){h=m+1;break e}}h=1e3}else h=1e3;h=Yv(this,P,h),m=li(this.I),Ce(m,"RID",l),Ce(m,"CVER",22),this.D&&Ce(m,"X-HTTP-Session-Id",this.D),nl(this,m),k&&(this.O?h="headers="+encodeURIComponent(String(Bv(k)))+"&"+h:this.m&&qf(m,this.m,k)),jf(this.h,P),this.Ua&&Ce(m,"TYPE","init"),this.P?(Ce(m,"$req",h),Ce(m,"SID","null"),P.T=!0,Uf(P,m,null)):Uf(P,m,h),this.G=2}}else this.G==3&&(l?$v(this,l):this.i.length==0||Cv(this.h)||$v(this))};function $v(l,h){var m;h?m=h.l:m=l.U++;const y=li(l.I);Ce(y,"SID",l.K),Ce(y,"RID",m),Ce(y,"AID",l.T),nl(l,y),l.m&&l.o&&qf(y,l.m,l.o),m=new qi(l,l.j,m,l.B+1),l.m===null&&(m.H=l.o),h&&(l.i=h.D.concat(l.i)),h=Yv(l,m,1e3),m.I=Math.round(.5*l.wa)+Math.round(.5*l.wa*Math.random()),jf(l.h,m),Uf(m,y,h)}function nl(l,h){l.H&&F(l.H,function(m,y){Ce(h,y,m)}),l.l&&Pv({},function(m,y){Ce(h,y,m)})}function Yv(l,h,m){m=Math.min(l.i.length,m);var y=l.l?p(l.l.Na,l.l,l):null;e:{var P=l.i;let k=-1;for(;;){const q=["count="+m];k==-1?0<m?(k=P[0].g,q.push("ofs="+k)):k=0:q.push("ofs="+k);let Ie=!0;for(let wt=0;wt<m;wt++){let me=P[wt].g;const Pt=P[wt].map;if(me-=k,0>me)k=Math.max(0,P[wt].g-100),Ie=!1;else try{i1(Pt,q,"req"+me+"_")}catch{y&&y(Pt)}}if(Ie){y=q.join("&");break e}}}return l=l.i.splice(0,m),h.D=l,y}function Xv(l){if(!l.g&&!l.u){l.Y=1;var h=l.Fa;ee||Ye(),Z||(ee(),Z=!0),Re.add(h,l),l.v=0}}function Hf(l){return l.g||l.u||3<=l.v?!1:(l.Y++,l.u=Ko(p(l.Fa,l),Zv(l,l.v)),l.v++,!0)}t.Fa=function(){if(this.u=null,Wv(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var l=2*this.R;this.j.info("BP detection timer enabled: "+l),this.A=Ko(p(this.ab,this),l)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,kt(10),Sc(this),Wv(this))};function Kf(l){l.A!=null&&(o.clearTimeout(l.A),l.A=null)}function Wv(l){l.g=new qi(l,l.j,"rpc",l.Y),l.m===null&&(l.g.H=l.o),l.g.O=0;var h=li(l.qa);Ce(h,"RID","rpc"),Ce(h,"SID",l.K),Ce(h,"AID",l.T),Ce(h,"CI",l.F?"0":"1"),!l.F&&l.ja&&Ce(h,"TO",l.ja),Ce(h,"TYPE","xmlhttp"),nl(l,h),l.m&&l.o&&qf(h,l.m,l.o),l.L&&(l.g.I=l.L);var m=l.g;l=l.ia,m.L=1,m.v=Ic(li(h)),m.m=null,m.P=!0,Av(m,l)}t.Za=function(){this.C!=null&&(this.C=null,Sc(this),Hf(this),kt(19))};function Cc(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Jv(l,h){var m=null;if(l.g==h){Cc(l),Kf(l),l.g=null;var y=2}else if(Ff(l.h,h))m=h.D,Nv(l.h,h),y=1;else return;if(l.G!=0){if(h.o)if(y==1){m=h.m?h.m.length:0,h=Date.now()-h.F;var P=l.B;y=_c(),Mt(y,new Ev(y,m)),Rc(l)}else Xv(l);else if(P=h.s,P==3||P==0&&0<h.X||!(y==1&&o1(l,h)||y==2&&Hf(l)))switch(m&&0<m.length&&(h=l.h,h.i=h.i.concat(m)),P){case 1:Yr(l,5);break;case 4:Yr(l,10);break;case 3:Yr(l,6);break;default:Yr(l,2)}}}function Zv(l,h){let m=l.Ta+Math.floor(Math.random()*l.cb);return l.isActive()||(m*=2),m*h}function Yr(l,h){if(l.j.info("Error code "+h),h==2){var m=p(l.fb,l),y=l.Xa;const P=!y;y=new $r(y||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Tc(y,"https"),Ic(y),P?e1(y.toString(),m):t1(y.toString(),m)}else kt(2);l.G=0,l.l&&l.l.sa(h),eE(l),Qv(l)}t.fb=function(l){l?(this.j.info("Successfully pinged google.com"),kt(2)):(this.j.info("Failed to ping google.com"),kt(1))};function eE(l){if(l.G=0,l.ka=[],l.l){const h=Ov(l.h);(h.length!=0||l.i.length!=0)&&(x(l.ka,h),x(l.ka,l.i),l.h.i.length=0,N(l.i),l.i.length=0),l.l.ra()}}function tE(l,h,m){var y=m instanceof $r?li(m):new $r(m);if(y.g!="")h&&(y.g=h+"."+y.g),wc(y,y.s);else{var P=o.location;y=P.protocol,h=h?h+"."+P.hostname:P.hostname,P=+P.port;var k=new $r(null);y&&Tc(k,y),h&&(k.g=h),P&&wc(k,P),m&&(k.l=m),y=k}return m=l.D,h=l.ya,m&&h&&Ce(y,m,h),Ce(y,"VER",l.la),nl(l,y),y}function nE(l,h,m){if(h&&!l.J)throw Error("Can't create secondary domain capable XhrIo object.");return h=l.Ca&&!l.pa?new Be(new Jo({eb:m})):new Be(l.pa),h.Ha(l.J),h}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function iE(){}t=iE.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function Dc(){}Dc.prototype.g=function(l,h){return new on(l,h)};function on(l,h){Ot.call(this),this.g=new Kv(h),this.l=l,this.h=h&&h.messageUrlParams||null,l=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(l?l["X-WebChannel-Content-Type"]=h.messageContentType:l={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.va&&(l?l["X-WebChannel-Client-Profile"]=h.va:l={"X-WebChannel-Client-Profile":h.va}),this.g.S=l,(l=h&&h.Sb)&&!E(l)&&(this.g.m=l),this.v=h&&h.supportsCrossDomainXhr||!1,this.u=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!E(h)&&(this.g.D=h,l=this.h,l!==null&&h in l&&(l=this.h,h in l&&delete l[h])),this.j=new ta(this)}R(on,Ot),on.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},on.prototype.close=function(){Gf(this.g)},on.prototype.o=function(l){var h=this.g;if(typeof l=="string"){var m={};m.__data__=l,l=m}else this.u&&(m={},m.__data__=Pf(l),l=m);h.i.push(new GD(h.Ya++,l)),h.G==3&&Rc(h)},on.prototype.N=function(){this.g.l=null,delete this.j,Gf(this.g),delete this.g,on.aa.N.call(this)};function rE(l){xf.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var h=l.__sm__;if(h){e:{for(const m in h){l=m;break e}l=void 0}(this.i=l)&&(l=this.i,h=h!==null&&l in h?h[l]:void 0),this.data=h}else this.data=l}R(rE,xf);function sE(){Mf.call(this),this.status=1}R(sE,Mf);function ta(l){this.g=l}R(ta,iE),ta.prototype.ua=function(){Mt(this.g,"a")},ta.prototype.ta=function(l){Mt(this.g,new rE(l))},ta.prototype.sa=function(l){Mt(this.g,new sE)},ta.prototype.ra=function(){Mt(this.g,"b")},Dc.prototype.createWebChannel=Dc.prototype.g,on.prototype.send=on.prototype.o,on.prototype.open=on.prototype.m,on.prototype.close=on.prototype.close,sR=function(){return new Dc},rR=function(){return _c()},iR=Kr,eg={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},yc.NO_ERROR=0,yc.TIMEOUT=8,yc.HTTP_ERROR=6,vh=yc,Tv.COMPLETE="complete",nR=Tv,gv.EventType=Go,Go.OPEN="a",Go.CLOSE="b",Go.ERROR="c",Go.MESSAGE="d",Ot.prototype.listen=Ot.prototype.K,Rl=gv,tR=Jo,Be.prototype.listenOnce=Be.prototype.L,Be.prototype.getLastError=Be.prototype.Ka,Be.prototype.getLastErrorCode=Be.prototype.Ba,Be.prototype.getStatus=Be.prototype.Z,Be.prototype.getResponseJson=Be.prototype.Oa,Be.prototype.getResponseText=Be.prototype.oa,Be.prototype.send=Be.prototype.ea,Be.prototype.setWithCredentials=Be.prototype.Ha,eR=Be}).apply(typeof $c<"u"?$c:typeof self<"u"?self:typeof window<"u"?window:{});const dw="@firebase/firestore";/**
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
 */class mt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}mt.UNAUTHENTICATED=new mt(null),mt.GOOGLE_CREDENTIALS=new mt("google-credentials-uid"),mt.FIRST_PARTY=new mt("first-party-uid"),mt.MOCK_USER=new mt("mock-user");/**
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
 */let Mo="10.12.1";/**
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
 */const Dr=new Gd("@firebase/firestore");function fa(){return Dr.logLevel}function Yk(t){Dr.setLogLevel(t)}function B(t,...e){if(Dr.logLevel<=ae.DEBUG){const n=e.map(sy);Dr.debug(`Firestore (${Mo}): ${t}`,...n)}}function We(t,...e){if(Dr.logLevel<=ae.ERROR){const n=e.map(sy);Dr.error(`Firestore (${Mo}): ${t}`,...n)}}function Bn(t,...e){if(Dr.logLevel<=ae.WARN){const n=e.map(sy);Dr.warn(`Firestore (${Mo}): ${t}`,...n)}}function sy(t){if(typeof t=="string")return t;try{/**
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
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
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
 */function Q(t="Unexpected state"){const e=`FIRESTORE (${Mo}) INTERNAL ASSERTION FAILED: `+t;throw We(e),new Error(e)}function $(t,e){t||Q()}function Xk(t,e){t||Q()}function H(t,e){return t}/**
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
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class z extends _t{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class vt{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class aR{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Wk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(mt.UNAUTHENTICATED))}shutdown(){}}class Jk{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class Zk{constructor(e){this.t=e,this.currentUser=mt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let i=this.i;const r=u=>this.i!==i?(i=this.i,n(u)):Promise.resolve();let s=new vt;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new vt,e.enqueueRetryable(()=>r(this.currentUser))};const a=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},o=u=>{B("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),a()};this.t.onInit(u=>o(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?o(u):(B("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new vt)}},0),a()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(i=>this.i!==e?(B("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?($(typeof i.accessToken=="string"),new aR(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return $(e===null||typeof e=="string"),new mt(e)}}class eL{constructor(e,n,i){this.l=e,this.h=n,this.P=i,this.type="FirstParty",this.user=mt.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tL{constructor(e,n,i){this.l=e,this.h=n,this.P=i}getToken(){return Promise.resolve(new eL(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(mt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nL{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class iL{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const i=s=>{s.error!=null&&B("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const a=s.token!==this.R;return this.R=s.token,B("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>i(s))};const r=s=>{B("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>r(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?r(s):B("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?($(typeof n.token=="string"),this.R=n.token,new nL(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function rL(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let i=0;i<t;i++)n[i]=Math.floor(256*Math.random());return n}/**
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
 */class oR{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let i="";for(;i.length<20;){const r=rL(40);for(let s=0;s<r.length;++s)i.length<20&&r[s]<n&&(i+=e.charAt(r[s]%e.length))}return i}}function te(t,e){return t<e?-1:t>e?1:0}function oo(t,e,n){return t.length===e.length&&t.every((i,r)=>n(i,e[r]))}function lR(t){return t+"\0"}/**
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
 */class Le{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new z(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new z(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Le.fromMillis(Date.now())}static fromDate(e){return Le.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),i=Math.floor(1e6*(e-1e3*n));return new Le(n,i)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?te(this.nanoseconds,e.nanoseconds):te(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Y{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Y(e)}static min(){return new Y(new Le(0,0))}static max(){return new Y(new Le(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Iu{constructor(e,n,i){n===void 0?n=0:n>e.length&&Q(),i===void 0?i=e.length-n:i>e.length-n&&Q(),this.segments=e,this.offset=n,this.len=i}get length(){return this.len}isEqual(e){return Iu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Iu?e.forEach(i=>{n.push(i)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,i=this.limit();n<i;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const i=Math.min(e.length,n.length);for(let r=0;r<i;r++){const s=e.get(r),a=n.get(r);if(s<a)return-1;if(s>a)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class le extends Iu{construct(e,n,i){return new le(e,n,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const i of e){if(i.indexOf("//")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);n.push(...i.split("/").filter(r=>r.length>0))}return new le(n)}static emptyPath(){return new le([])}}const sL=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Me extends Iu{construct(e,n,i){return new Me(e,n,i)}static isValidIdentifier(e){return sL.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Me.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Me(["__name__"])}static fromServerFormat(e){const n=[];let i="",r=0;const s=()=>{if(i.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(i),i=""};let a=!1;for(;r<e.length;){const o=e[r];if(o==="\\"){if(r+1===e.length)throw new z(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new z(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=u,r+=2}else o==="`"?(a=!a,r++):o!=="."||a?(i+=o,r++):(s(),r++)}if(s(),a)throw new z(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Me(n)}static emptyPath(){return new Me([])}}/**
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
 */class G{constructor(e){this.path=e}static fromPath(e){return new G(le.fromString(e))}static fromName(e){return new G(le.fromString(e).popFirst(5))}static empty(){return new G(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return le.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new G(new le(e.slice()))}}/**
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
 */class hd{constructor(e,n,i,r){this.indexId=e,this.collectionGroup=n,this.fields=i,this.indexState=r}}function tg(t){return t.fields.find(e=>e.kind===2)}function is(t){return t.fields.filter(e=>e.kind!==2)}hd.UNKNOWN_ID=-1;class Eh{constructor(e,n){this.fieldPath=e,this.kind=n}}class Au{constructor(e,n){this.sequenceNumber=e,this.offset=n}static empty(){return new Au(0,Tn.min())}}function uR(t,e){const n=t.toTimestamp().seconds,i=t.toTimestamp().nanoseconds+1,r=Y.fromTimestamp(i===1e9?new Le(n+1,0):new Le(n,i));return new Tn(r,G.empty(),e)}function cR(t){return new Tn(t.readTime,t.key,-1)}class Tn{constructor(e,n,i){this.readTime=e,this.documentKey=n,this.largestBatchId=i}static min(){return new Tn(Y.min(),G.empty(),-1)}static max(){return new Tn(Y.max(),G.empty(),-1)}}function ay(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=G.comparator(t.documentKey,e.documentKey),n!==0?n:te(t.largestBatchId,e.largestBatchId))}/**
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
 */const hR="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class dR{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function jr(t){if(t.code!==M.FAILED_PRECONDITION||t.message!==hR)throw t;B("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new V((i,r)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(i,r)},this.catchCallback=s=>{this.wrapFailure(n,s).next(i,r)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof V?n:V.resolve(n)}catch(n){return V.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):V.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):V.reject(n)}static resolve(e){return new V((n,i)=>{n(e)})}static reject(e){return new V((n,i)=>{i(e)})}static waitFor(e){return new V((n,i)=>{let r=0,s=0,a=!1;e.forEach(o=>{++r,o.next(()=>{++s,a&&s===r&&n()},u=>i(u))}),a=!0,s===r&&n()})}static or(e){let n=V.resolve(!1);for(const i of e)n=n.next(r=>r?V.resolve(r):i());return n}static forEach(e,n){const i=[];return e.forEach((r,s)=>{i.push(n.call(this,r,s))}),this.waitFor(i)}static mapArray(e,n){return new V((i,r)=>{const s=e.length,a=new Array(s);let o=0;for(let u=0;u<s;u++){const c=u;n(e[c]).next(d=>{a[c]=d,++o,o===s&&i(a)},d=>r(d))}})}static doWhile(e,n){return new V((i,r)=>{const s=()=>{e()===!0?n().next(()=>{s()},r):i()};s()})}}/**
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
 */class nf{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new vt,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new $l(e,n.error)):this.V.resolve()},this.transaction.onerror=i=>{const r=oy(i.target.error);this.V.reject(new $l(e,r))}}static open(e,n,i,r){try{return new nf(n,e.transaction(r,i))}catch(s){throw new $l(n,s)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(B("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new oL(n)}}class ei{constructor(e,n,i){this.name=e,this.version=n,this.p=i,ei.S(Ue())===12.2&&We("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return B("SimpleDb","Removing database:",e),rs(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!mu())return!1;if(ei.C())return!0;const e=Ue(),n=ei.S(e),i=0<n&&n<10,r=fR(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||i||s)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.v)==="YES"}static F(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),i=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(i)}async M(e){return this.db||(B("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,i)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=s=>{const a=s.target.result;n(a)},r.onblocked=()=>{i(new $l(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=s=>{const a=s.target.error;a.name==="VersionError"?i(new z(M.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):a.name==="InvalidStateError"?i(new z(M.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+a)):i(new $l(e,a))},r.onupgradeneeded=s=>{B("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const a=s.target.result;this.p.O(a,r.transaction,s.oldVersion,this.version).next(()=>{B("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.N&&(this.db.onversionchange=n=>this.N(n)),this.db}L(e){this.N=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,i,r){const s=n==="readonly";let a=0;for(;;){++a;try{this.db=await this.M(e);const o=nf.open(this.db,e,s?"readonly":"readwrite",i),u=r(o).next(c=>(o.g(),c)).catch(c=>(o.abort(c),V.reject(c))).toPromise();return u.catch(()=>{}),await o.m,u}catch(o){const u=o,c=u.name!=="FirebaseError"&&a<3;if(B("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}function fR(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class aL{constructor(e){this.B=e,this.k=!1,this.q=null}get isDone(){return this.k}get K(){return this.q}set cursor(e){this.B=e}done(){this.k=!0}$(e){this.q=e}delete(){return rs(this.B.delete())}}class $l extends z{constructor(e,n){super(M.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function qr(t){return t.name==="IndexedDbTransactionError"}class oL{constructor(e){this.store=e}put(e,n){let i;return n!==void 0?(B("SimpleDb","PUT",this.store.name,e,n),i=this.store.put(n,e)):(B("SimpleDb","PUT",this.store.name,"<auto-key>",e),i=this.store.put(e)),rs(i)}add(e){return B("SimpleDb","ADD",this.store.name,e,e),rs(this.store.add(e))}get(e){return rs(this.store.get(e)).next(n=>(n===void 0&&(n=null),B("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return B("SimpleDb","DELETE",this.store.name,e),rs(this.store.delete(e))}count(){return B("SimpleDb","COUNT",this.store.name),rs(this.store.count())}U(e,n){const i=this.options(e,n),r=i.index?this.store.index(i.index):this.store;if(typeof r.getAll=="function"){const s=r.getAll(i.range);return new V((a,o)=>{s.onerror=u=>{o(u.target.error)},s.onsuccess=u=>{a(u.target.result)}})}{const s=this.cursor(i),a=[];return this.W(s,(o,u)=>{a.push(u)}).next(()=>a)}}G(e,n){const i=this.store.getAll(e,n===null?void 0:n);return new V((r,s)=>{i.onerror=a=>{s(a.target.error)},i.onsuccess=a=>{r(a.target.result)}})}j(e,n){B("SimpleDb","DELETE ALL",this.store.name);const i=this.options(e,n);i.H=!1;const r=this.cursor(i);return this.W(r,(s,a,o)=>o.delete())}J(e,n){let i;n?i=e:(i={},n=e);const r=this.cursor(i);return this.W(r,n)}Y(e){const n=this.cursor({});return new V((i,r)=>{n.onerror=s=>{const a=oy(s.target.error);r(a)},n.onsuccess=s=>{const a=s.target.result;a?e(a.primaryKey,a.value).next(o=>{o?a.continue():i()}):i()}})}W(e,n){const i=[];return new V((r,s)=>{e.onerror=a=>{s(a.target.error)},e.onsuccess=a=>{const o=a.target.result;if(!o)return void r();const u=new aL(o),c=n(o.primaryKey,o.value,u);if(c instanceof V){const d=c.catch(f=>(u.done(),V.reject(f)));i.push(d)}u.isDone?r():u.K===null?o.continue():o.continue(u.K)}}).next(()=>V.waitFor(i))}options(e,n){let i;return e!==void 0&&(typeof e=="string"?i=e:n=e),{index:i,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const i=this.store.index(e.index);return e.H?i.openKeyCursor(e.range,n):i.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function rs(t){return new V((e,n)=>{t.onsuccess=i=>{const r=i.target.result;e(r)},t.onerror=i=>{const r=oy(i.target.error);n(r)}})}let fw=!1;function oy(t){const e=ei.S(Ue());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const i=new z("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fw||(fw=!0,setTimeout(()=>{throw i},0)),i}}return t}class lL{constructor(e,n){this.asyncQueue=e,this.Z=n,this.task=null}start(){this.X(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}X(e){B("IndexBackfiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{B("IndexBackfiller",`Documents written: ${await this.Z.ee()}`)}catch(n){qr(n)?B("IndexBackfiller","Ignoring IndexedDB error during index backfill: ",n):await jr(n)}await this.X(6e4)})}}class uL{constructor(e,n){this.localStore=e,this.persistence=n}async ee(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",n=>this.te(n,e))}te(e,n){const i=new Set;let r=n,s=!0;return V.doWhile(()=>s===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(a=>{if(a!==null&&!i.has(a))return B("IndexBackfiller",`Processing collection: ${a}`),this.ne(e,a,r).next(o=>{r-=o,i.add(a)});s=!1})).next(()=>n-r)}ne(e,n,i){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,n).next(r=>this.localStore.localDocuments.getNextDocuments(e,n,r,i).next(s=>{const a=s.changes;return this.localStore.indexManager.updateIndexEntries(e,a).next(()=>this.re(r,s)).next(o=>(B("IndexBackfiller",`Updating offset: ${o}`),this.localStore.indexManager.updateCollectionGroup(e,n,o))).next(()=>a.size)}))}re(e,n){let i=e;return n.changes.forEach((r,s)=>{const a=cR(s);ay(a,i)>0&&(i=a)}),new Tn(i.readTime,i.documentKey,Math.max(n.batchId,e.largestBatchId))}}/**
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
 */class Zt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=i=>this.ie(i),this.se=i=>n.writeSequenceNumber(i))}ie(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.se&&this.se(e),e}}Zt.oe=-1;function ec(t){return t==null}function bu(t){return t===0&&1/t==-1/0}function mR(t){return typeof t=="number"&&Number.isInteger(t)&&!bu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ft(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=mw(e)),e=cL(t.get(n),e);return mw(e)}function cL(t,e){let n=e;const i=t.length;for(let r=0;r<i;r++){const s=t.charAt(r);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function mw(t){return t+""}function Wn(t){const e=t.length;if($(e>=2),e===2)return $(t.charAt(0)===""&&t.charAt(1)===""),le.emptyPath();const n=e-2,i=[];let r="";for(let s=0;s<e;){const a=t.indexOf("",s);switch((a<0||a>n)&&Q(),t.charAt(a+1)){case"":const o=t.substring(s,a);let u;r.length===0?u=o:(r+=o,u=r,r=""),i.push(u);break;case"":r+=t.substring(s,a),r+="\0";break;case"":r+=t.substring(s,a+1);break;default:Q()}s=a+2}return new le(i)}/**
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
 */const pw=["userId","batchId"];/**
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
 */function Th(t,e){return[t,Ft(e)]}function pR(t,e,n){return[t,Ft(e),n]}const hL={},dL=["prefixPath","collectionGroup","readTime","documentId"],fL=["prefixPath","collectionGroup","documentId"],mL=["collectionGroup","readTime","prefixPath","documentId"],pL=["canonicalId","targetId"],gL=["targetId","path"],_L=["path","targetId"],yL=["collectionId","parent"],vL=["indexId","uid"],EL=["uid","sequenceNumber"],TL=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],wL=["indexId","uid","orderedDocumentKey"],IL=["userId","collectionPath","documentId"],AL=["userId","collectionPath","largestBatchId"],bL=["userId","collectionGroup","largestBatchId"],gR=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],SL=[...gR,"documentOverlays"],_R=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],yR=_R,vR=[...yR,"indexConfiguration","indexState","indexEntries"],RL=vR;/**
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
 */class ng extends dR{constructor(e,n){super(),this._e=e,this.currentSequenceNumber=n}}function Et(t,e){const n=H(t);return ei.F(n._e,e)}/**
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
 */function gw(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Qs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Se{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new Se(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new Se(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(i===0)return n.value;i<0?n=n.left:i>0&&(n=n.right)}return null}indexOf(e){let n=0,i=this.root;for(;!i.isEmpty();){const r=this.comparator(e,i.key);if(r===0)return n+i.left.size;r<0?i=i.left:(n+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,i)=>(e(n,i),!1))}toString(){const e=[];return this.inorderTraversal((n,i)=>(e.push(`${n}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Yc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Yc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Yc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Yc(this.root,e,this.comparator,!0)}}class Yc{constructor(e,n,i,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?i(e.key,n):1,n&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,i,r,s){this.key=e,this.value=n,this.color=i??At.RED,this.left=r??At.EMPTY,this.right=s??At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,i,r,s){return new At(e??this.key,n??this.value,i??this.color,r??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let r=this;const s=i(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,n,i),null):s===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(e,n,i)),r.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let i,r=this;if(n(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(e,r.key)===0){if(r.right.isEmpty())return At.EMPTY;i=r.right.min(),r=r.copy(i.key,i.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const e=this.left.check();if(e!==this.right.check())throw Q();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,n,i,r,s){return this}insert(e,n,i){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class we{constructor(e){this.comparator=e,this.data=new Se(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,i)=>(e(n),!1))}forEachInRange(e,n){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const r=i.getNext();if(this.comparator(r.key,e[1])>=0)return;n(r.key)}}forEachWhile(e,n){let i;for(i=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new _w(this.data.getIterator())}getIteratorFrom(e){return new _w(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(i=>{n=n.add(i)}),n}isEqual(e){if(!(e instanceof we)||this.size!==e.size)return!1;const n=this.data.getIterator(),i=e.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(this.comparator(r,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new we(this.comparator);return n.data=e,n}}class _w{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function aa(t){return t.hasNext()?t.getNext():void 0}/**
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
 */class en{constructor(e){this.fields=e,e.sort(Me.comparator)}static empty(){return new en([])}unionWith(e){let n=new we(Me.comparator);for(const i of this.fields)n=n.add(i);for(const i of e)n=n.add(i);return new en(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return oo(this.fields,e.fields,(n,i)=>n.isEqual(i))}}/**
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
 */class TR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function CL(){return typeof atob<"u"}/**
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
 */class ht{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new TR("Invalid base64 string: "+s):s}}(e);return new ht(n)}static fromUint8Array(e){const n=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(e);return new ht(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const i=new Uint8Array(n.length);for(let r=0;r<n.length;r++)i[r]=n.charCodeAt(r);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return te(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const DL=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Mi(t){if($(!!t),typeof t=="string"){let e=0;const n=DL.exec(t);if($(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),e=Number(r)}const i=new Date(t);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:je(t.seconds),nanos:je(t.nanos)}}function je(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Nr(t){return typeof t=="string"?ht.fromBase64String(t):ht.fromUint8Array(t)}/**
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
 */function rf(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function ly(t){const e=t.mapValue.fields.__previous_value__;return rf(e)?ly(e):e}function Su(t){const e=Mi(t.mapValue.fields.__local_write_time__.timestampValue);return new Le(e.seconds,e.nanos)}/**
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
 */class NL{constructor(e,n,i,r,s,a,o,u,c){this.databaseId=e,this.appId=n,this.persistenceKey=i,this.host=r,this.ssl=s,this.forceLongPolling=a,this.autoDetectLongPolling=o,this.longPollingOptions=u,this.useFetchStreams=c}}class Or{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Or("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Or&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},wh={nullValue:"NULL_VALUE"};function Os(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?rf(t)?4:wR(t)?9007199254740991:10:Q()}function ii(t,e){if(t===e)return!0;const n=Os(t);if(n!==Os(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Su(t).isEqual(Su(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=Mi(r.timestampValue),o=Mi(s.timestampValue);return a.seconds===o.seconds&&a.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Nr(r.bytesValue).isEqual(Nr(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return je(r.geoPointValue.latitude)===je(s.geoPointValue.latitude)&&je(r.geoPointValue.longitude)===je(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return je(r.integerValue)===je(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=je(r.doubleValue),o=je(s.doubleValue);return a===o?bu(a)===bu(o):isNaN(a)&&isNaN(o)}return!1}(t,e);case 9:return oo(t.arrayValue.values||[],e.arrayValue.values||[],ii);case 10:return function(r,s){const a=r.mapValue.fields||{},o=s.mapValue.fields||{};if(gw(a)!==gw(o))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(o[u]===void 0||!ii(a[u],o[u])))return!1;return!0}(t,e);default:return Q()}}function Ru(t,e){return(t.values||[]).find(n=>ii(n,e))!==void 0}function Pr(t,e){if(t===e)return 0;const n=Os(t),i=Os(e);if(n!==i)return te(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return te(t.booleanValue,e.booleanValue);case 2:return function(s,a){const o=je(s.integerValue||s.doubleValue),u=je(a.integerValue||a.doubleValue);return o<u?-1:o>u?1:o===u?0:isNaN(o)?isNaN(u)?0:-1:1}(t,e);case 3:return yw(t.timestampValue,e.timestampValue);case 4:return yw(Su(t),Su(e));case 5:return te(t.stringValue,e.stringValue);case 6:return function(s,a){const o=Nr(s),u=Nr(a);return o.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const o=s.split("/"),u=a.split("/");for(let c=0;c<o.length&&c<u.length;c++){const d=te(o[c],u[c]);if(d!==0)return d}return te(o.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const o=te(je(s.latitude),je(a.latitude));return o!==0?o:te(je(s.longitude),je(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,a){const o=s.values||[],u=a.values||[];for(let c=0;c<o.length&&c<u.length;++c){const d=Pr(o[c],u[c]);if(d)return d}return te(o.length,u.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===hr.mapValue&&a===hr.mapValue)return 0;if(s===hr.mapValue)return 1;if(a===hr.mapValue)return-1;const o=s.fields||{},u=Object.keys(o),c=a.fields||{},d=Object.keys(c);u.sort(),d.sort();for(let f=0;f<u.length&&f<d.length;++f){const p=te(u[f],d[f]);if(p!==0)return p;const g=Pr(o[u[f]],c[d[f]]);if(g!==0)return g}return te(u.length,d.length)}(t.mapValue,e.mapValue);default:throw Q()}}function yw(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return te(t,e);const n=Mi(t),i=Mi(e),r=te(n.seconds,i.seconds);return r!==0?r:te(n.nanos,i.nanos)}function lo(t){return ig(t)}function ig(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const i=Mi(n);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Nr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return G.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let i="[",r=!0;for(const s of n.values||[])r?r=!1:i+=",",i+=ig(s);return i+"]"}(t.arrayValue):"mapValue"in t?function(n){const i=Object.keys(n.fields||{}).sort();let r="{",s=!0;for(const a of i)s?s=!1:r+=",",r+=`${a}:${ig(n.fields[a])}`;return r+"}"}(t.mapValue):Q()}function Ps(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function rg(t){return!!t&&"integerValue"in t}function Cu(t){return!!t&&"arrayValue"in t}function vw(t){return!!t&&"nullValue"in t}function Ew(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ih(t){return!!t&&"mapValue"in t}function Yl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Qs(t.mapValue.fields,(n,i)=>e.mapValue.fields[n]=Yl(i)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Yl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function wR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function OL(t){return"nullValue"in t?wh:"booleanValue"in t?{booleanValue:!1}:"integerValue"in t||"doubleValue"in t?{doubleValue:NaN}:"timestampValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in t?{stringValue:""}:"bytesValue"in t?{bytesValue:""}:"referenceValue"in t?Ps(Or.empty(),G.empty()):"geoPointValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in t?{arrayValue:{}}:"mapValue"in t?{mapValue:{}}:Q()}function PL(t){return"nullValue"in t?{booleanValue:!1}:"booleanValue"in t?{doubleValue:NaN}:"integerValue"in t||"doubleValue"in t?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in t?{stringValue:""}:"stringValue"in t?{bytesValue:""}:"bytesValue"in t?Ps(Or.empty(),G.empty()):"referenceValue"in t?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in t?{arrayValue:{}}:"arrayValue"in t?{mapValue:{}}:"mapValue"in t?hr:Q()}function Tw(t,e){const n=Pr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?-1:!t.inclusive&&e.inclusive?1:0}function ww(t,e){const n=Pr(t.value,e.value);return n!==0?n:t.inclusive&&!e.inclusive?1:!t.inclusive&&e.inclusive?-1:0}/**
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
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let i=0;i<e.length-1;++i)if(n=(n.mapValue.fields||{})[e.get(i)],!Ih(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Yl(n)}setAll(e){let n=Me.emptyPath(),i={},r=[];e.forEach((a,o)=>{if(!n.isImmediateParentOf(o)){const u=this.getFieldsMap(n);this.applyChanges(u,i,r),i={},r=[],n=o.popLast()}a?i[o.lastSegment()]=Yl(a):r.push(o.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,i,r)}delete(e){const n=this.field(e.popLast());Ih(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return ii(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let i=0;i<e.length;++i){let r=n.mapValue.fields[e.get(i)];Ih(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[e.get(i)]=r),n=r}return n.mapValue.fields}applyChanges(e,n,i){Qs(n,(r,s)=>e[r]=s);for(const r of i)delete e[r]}clone(){return new Rt(Yl(this.value))}}function IR(t){const e=[];return Qs(t.fields,(n,i)=>{const r=new Me([n]);if(Ih(i)){const s=IR(i.mapValue).fields;if(s.length===0)e.push(r);else for(const a of s)e.push(r.child(a))}else e.push(r)}),new en(e)}/**
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
 */class Oe{constructor(e,n,i,r,s,a,o){this.key=e,this.documentType=n,this.version=i,this.readTime=r,this.createTime=s,this.data=a,this.documentState=o}static newInvalidDocument(e){return new Oe(e,0,Y.min(),Y.min(),Y.min(),Rt.empty(),0)}static newFoundDocument(e,n,i,r){return new Oe(e,1,n,Y.min(),i,r,0)}static newNoDocument(e,n){return new Oe(e,2,n,Y.min(),Y.min(),Rt.empty(),0)}static newUnknownDocument(e,n){return new Oe(e,3,n,Y.min(),Y.min(),Rt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Y.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Y.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Oe&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Oe(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Vr{constructor(e,n){this.position=e,this.inclusive=n}}function Iw(t,e,n){let i=0;for(let r=0;r<t.position.length;r++){const s=e[r],a=t.position[r];if(s.field.isKeyField()?i=G.comparator(G.fromName(a.referenceValue),n.key):i=Pr(a,n.data.field(s.field)),s.dir==="desc"&&(i*=-1),i!==0)break}return i}function Aw(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!ii(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class Du{constructor(e,n="asc"){this.field=e,this.dir=n}}function VL(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class AR{}class ce extends AR{constructor(e,n,i){super(),this.field=e,this.op=n,this.value=i}static create(e,n,i){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,i):new xL(e,n,i):n==="array-contains"?new LL(e,i):n==="in"?new NR(e,i):n==="not-in"?new UL(e,i):n==="array-contains-any"?new zL(e,i):new ce(e,n,i)}static createKeyFieldInFilter(e,n,i){return n==="in"?new ML(e,i):new kL(e,i)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Pr(n,this.value)):n!==null&&Os(this.value)===Os(n)&&this.matchesComparison(Pr(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ve extends AR{constructor(e,n){super(),this.filters=e,this.op=n,this.ae=null}static create(e,n){return new ve(e,n)}matches(e){return uo(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ae!==null||(this.ae=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ae}getFilters(){return Object.assign([],this.filters)}}function uo(t){return t.op==="and"}function sg(t){return t.op==="or"}function uy(t){return bR(t)&&uo(t)}function bR(t){for(const e of t.filters)if(e instanceof ve)return!1;return!0}function ag(t){if(t instanceof ce)return t.field.canonicalString()+t.op.toString()+lo(t.value);if(uy(t))return t.filters.map(e=>ag(e)).join(",");{const e=t.filters.map(n=>ag(n)).join(",");return`${t.op}(${e})`}}function SR(t,e){return t instanceof ce?function(i,r){return r instanceof ce&&i.op===r.op&&i.field.isEqual(r.field)&&ii(i.value,r.value)}(t,e):t instanceof ve?function(i,r){return r instanceof ve&&i.op===r.op&&i.filters.length===r.filters.length?i.filters.reduce((s,a,o)=>s&&SR(a,r.filters[o]),!0):!1}(t,e):void Q()}function RR(t,e){const n=t.filters.concat(e);return ve.create(n,t.op)}function CR(t){return t instanceof ce?function(n){return`${n.field.canonicalString()} ${n.op} ${lo(n.value)}`}(t):t instanceof ve?function(n){return n.op.toString()+" {"+n.getFilters().map(CR).join(" ,")+"}"}(t):"Filter"}class xL extends ce{constructor(e,n,i){super(e,n,i),this.key=G.fromName(i.referenceValue)}matches(e){const n=G.comparator(e.key,this.key);return this.matchesComparison(n)}}class ML extends ce{constructor(e,n){super(e,"in",n),this.keys=DR("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class kL extends ce{constructor(e,n){super(e,"not-in",n),this.keys=DR("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function DR(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(i=>G.fromName(i.referenceValue))}class LL extends ce{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Cu(n)&&Ru(n.arrayValue,this.value)}}class NR extends ce{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ru(this.value.arrayValue,n)}}class UL extends ce{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ru(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ru(this.value.arrayValue,n)}}class zL extends ce{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Cu(n)||!n.arrayValue.values)&&n.arrayValue.values.some(i=>Ru(this.value.arrayValue,i))}}/**
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
 */class BL{constructor(e,n=null,i=[],r=[],s=null,a=null,o=null){this.path=e,this.collectionGroup=n,this.orderBy=i,this.filters=r,this.limit=s,this.startAt=a,this.endAt=o,this.ue=null}}function og(t,e=null,n=[],i=[],r=null,s=null,a=null){return new BL(t,e,n,i,r,s,a)}function Vs(t){const e=H(t);if(e.ue===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(i=>ag(i)).join(","),n+="|ob:",n+=e.orderBy.map(i=>function(s){return s.field.canonicalString()+s.dir}(i)).join(","),ec(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(i=>lo(i)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(i=>lo(i)).join(",")),e.ue=n}return e.ue}function tc(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VL(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!SR(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Aw(t.startAt,e.startAt)&&Aw(t.endAt,e.endAt)}function dd(t){return G.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}function fd(t,e){return t.filters.filter(n=>n instanceof ce&&n.field.isEqual(e))}function bw(t,e,n){let i=wh,r=!0;for(const s of fd(t,e)){let a=wh,o=!0;switch(s.op){case"<":case"<=":a=OL(s.value);break;case"==":case"in":case">=":a=s.value;break;case">":a=s.value,o=!1;break;case"!=":case"not-in":a=wh}Tw({value:i,inclusive:r},{value:a,inclusive:o})<0&&(i=a,r=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];Tw({value:i,inclusive:r},{value:a,inclusive:n.inclusive})<0&&(i=a,r=n.inclusive);break}}return{value:i,inclusive:r}}function Sw(t,e,n){let i=hr,r=!0;for(const s of fd(t,e)){let a=hr,o=!0;switch(s.op){case">=":case">":a=PL(s.value),o=!1;break;case"==":case"in":case"<=":a=s.value;break;case"<":a=s.value,o=!1;break;case"!=":case"not-in":a=hr}ww({value:i,inclusive:r},{value:a,inclusive:o})>0&&(i=a,r=o)}if(n!==null){for(let s=0;s<t.orderBy.length;++s)if(t.orderBy[s].field.isEqual(e)){const a=n.position[s];ww({value:i,inclusive:r},{value:a,inclusive:n.inclusive})>0&&(i=a,r=n.inclusive);break}}return{value:i,inclusive:r}}/**
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
 */class Bi{constructor(e,n=null,i=[],r=[],s=null,a="F",o=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=i,this.filters=r,this.limit=s,this.limitType=a,this.startAt=o,this.endAt=u,this.ce=null,this.le=null,this.he=null,this.startAt,this.endAt}}function OR(t,e,n,i,r,s,a,o){return new Bi(t,e,n,i,r,s,a,o)}function ko(t){return new Bi(t)}function Rw(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function cy(t){return t.collectionGroup!==null}function qa(t){const e=H(t);if(e.ce===null){e.ce=[];const n=new Set;for(const s of e.explicitOrderBy)e.ce.push(s),n.add(s.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let o=new we(Me.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(c=>{c.isInequality()&&(o=o.add(c.field))})}),o})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.ce.push(new Du(s,i))}),n.has(Me.keyField().canonicalString())||e.ce.push(new Du(Me.keyField(),i))}return e.ce}function jt(t){const e=H(t);return e.le||(e.le=FL(e,qa(t))),e.le}function FL(t,e){if(t.limitType==="F")return og(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(r=>{const s=r.dir==="desc"?"asc":"desc";return new Du(r.field,s)});const n=t.endAt?new Vr(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new Vr(t.startAt.position,t.startAt.inclusive):null;return og(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}}function lg(t,e){const n=t.filters.concat([e]);return new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function md(t,e,n){return new Bi(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function nc(t,e){return tc(jt(t),jt(e))&&t.limitType===e.limitType}function PR(t){return`${Vs(jt(t))}|lt:${t.limitType}`}function ma(t){return`Query(target=${function(n){let i=n.path.canonicalString();return n.collectionGroup!==null&&(i+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(i+=`, filters: [${n.filters.map(r=>CR(r)).join(", ")}]`),ec(n.limit)||(i+=", limit: "+n.limit),n.orderBy.length>0&&(i+=`, orderBy: [${n.orderBy.map(r=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(r)).join(", ")}]`),n.startAt&&(i+=", startAt: ",i+=n.startAt.inclusive?"b:":"a:",i+=n.startAt.position.map(r=>lo(r)).join(",")),n.endAt&&(i+=", endAt: ",i+=n.endAt.inclusive?"a:":"b:",i+=n.endAt.position.map(r=>lo(r)).join(",")),`Target(${i})`}(jt(t))}; limitType=${t.limitType})`}function ic(t,e){return e.isFoundDocument()&&function(i,r){const s=r.key.path;return i.collectionGroup!==null?r.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(s):G.isDocumentKey(i.path)?i.path.isEqual(s):i.path.isImmediateParentOf(s)}(t,e)&&function(i,r){for(const s of qa(i))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(i,r){for(const s of i.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(i,r){return!(i.startAt&&!function(a,o,u){const c=Iw(a,o,u);return a.inclusive?c<=0:c<0}(i.startAt,qa(i),r)||i.endAt&&!function(a,o,u){const c=Iw(a,o,u);return a.inclusive?c>=0:c>0}(i.endAt,qa(i),r))}(t,e)}function VR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function xR(t){return(e,n)=>{let i=!1;for(const r of qa(t)){const s=jL(r,e,n);if(s!==0)return s;i=i||r.field.isKeyField()}return 0}}function jL(t,e,n){const i=t.field.isKeyField()?G.comparator(e.key,n.key):function(s,a,o){const u=a.data.field(s),c=o.data.field(s);return u!==null&&c!==null?Pr(u,c):Q()}(t.field,e,n);switch(t.dir){case"asc":return i;case"desc":return-1*i;default:return Q()}}/**
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
 */class Gr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i!==void 0){for(const[r,s]of i)if(this.equalsFn(r,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const i=this.mapKeyFn(e),r=this.inner[i];if(r===void 0)return this.inner[i]=[[e,n]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,n]);r.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),i=this.inner[n];if(i===void 0)return!1;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return i.length===1?delete this.inner[n]:i.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Qs(this.inner,(n,i)=>{for(const[r,s]of i)e(r,s)})}isEmpty(){return ER(this.inner)}size(){return this.innerSize}}/**
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
 */const qL=new Se(G.comparator);function tn(){return qL}const MR=new Se(G.comparator);function Cl(...t){let e=MR;for(const n of t)e=e.insert(n.key,n);return e}function kR(t){let e=MR;return t.forEach((n,i)=>e=e.insert(n,i.overlayedDocument)),e}function Jn(){return Xl()}function LR(){return Xl()}function Xl(){return new Gr(t=>t.toString(),(t,e)=>t.isEqual(e))}const GL=new Se(G.comparator),HL=new we(G.comparator);function re(...t){let e=HL;for(const n of t)e=e.add(n);return e}const KL=new we(te);function hy(){return KL}/**
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
 */function UR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bu(e)?"-0":e}}function zR(t){return{integerValue:""+t}}function BR(t,e){return mR(e)?zR(e):UR(t,e)}/**
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
 */class sf{constructor(){this._=void 0}}function QL(t,e,n){return t instanceof co?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&rf(s)&&(s=ly(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof xs?jR(t,e):t instanceof Ms?qR(t,e):function(r,s){const a=FR(r,s),o=Cw(a)+Cw(r.Pe);return rg(a)&&rg(r.Pe)?zR(o):UR(r.serializer,o)}(t,e)}function $L(t,e,n){return t instanceof xs?jR(t,e):t instanceof Ms?qR(t,e):n}function FR(t,e){return t instanceof ho?function(i){return rg(i)||function(s){return!!s&&"doubleValue"in s}(i)}(e)?e:{integerValue:0}:null}class co extends sf{}class xs extends sf{constructor(e){super(),this.elements=e}}function jR(t,e){const n=GR(e);for(const i of t.elements)n.some(r=>ii(r,i))||n.push(i);return{arrayValue:{values:n}}}class Ms extends sf{constructor(e){super(),this.elements=e}}function qR(t,e){let n=GR(e);for(const i of t.elements)n=n.filter(r=>!ii(r,i));return{arrayValue:{values:n}}}class ho extends sf{constructor(e,n){super(),this.serializer=e,this.Pe=n}}function Cw(t){return je(t.integerValue||t.doubleValue)}function GR(t){return Cu(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
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
 */class rc{constructor(e,n){this.field=e,this.transform=n}}function YL(t,e){return t.field.isEqual(e.field)&&function(i,r){return i instanceof xs&&r instanceof xs||i instanceof Ms&&r instanceof Ms?oo(i.elements,r.elements,ii):i instanceof ho&&r instanceof ho?ii(i.Pe,r.Pe):i instanceof co&&r instanceof co}(t.transform,e.transform)}class XL{constructor(e,n){this.version=e,this.transformResults=n}}class ke{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new ke}static exists(e){return new ke(void 0,e)}static updateTime(e){return new ke(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ah(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class af{}function HR(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Uo(t.key,ke.none()):new Lo(t.key,t.data,ke.none());{const n=t.data,i=Rt.empty();let r=new we(Me.comparator);for(let s of e.fields)if(!r.has(s)){let a=n.field(s);a===null&&s.length>1&&(s=s.popLast(),a=n.field(s)),a===null?i.delete(s):i.set(s,a),r=r.add(s)}return new Fi(t.key,i,new en(r.toArray()),ke.none())}}function WL(t,e,n){t instanceof Lo?function(r,s,a){const o=r.value.clone(),u=Nw(r.fieldTransforms,s,a.transformResults);o.setAll(u),s.convertToFoundDocument(a.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Fi?function(r,s,a){if(!Ah(r.precondition,s))return void s.convertToUnknownDocument(a.version);const o=Nw(r.fieldTransforms,s,a.transformResults),u=s.data;u.setAll(KR(r)),u.setAll(o),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function Wl(t,e,n,i){return t instanceof Lo?function(s,a,o,u){if(!Ah(s.precondition,a))return o;const c=s.value.clone(),d=Ow(s.fieldTransforms,u,a);return c.setAll(d),a.convertToFoundDocument(a.version,c).setHasLocalMutations(),null}(t,e,n,i):t instanceof Fi?function(s,a,o,u){if(!Ah(s.precondition,a))return o;const c=Ow(s.fieldTransforms,u,a),d=a.data;return d.setAll(KR(s)),d.setAll(c),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(f=>f.field))}(t,e,n,i):function(s,a,o){return Ah(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):o}(t,e,n)}function JL(t,e){let n=null;for(const i of t.fieldTransforms){const r=e.data.field(i.field),s=FR(i.transform,r||null);s!=null&&(n===null&&(n=Rt.empty()),n.set(i.field,s))}return n||null}function Dw(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(i,r){return i===void 0&&r===void 0||!(!i||!r)&&oo(i,r,(s,a)=>YL(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Lo extends af{constructor(e,n,i,r=[]){super(),this.key=e,this.value=n,this.precondition=i,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Fi extends af{constructor(e,n,i,r,s=[]){super(),this.key=e,this.data=n,this.fieldMask=i,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function KR(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const i=t.data.field(n);e.set(n,i)}}),e}function Nw(t,e,n){const i=new Map;$(t.length===n.length);for(let r=0;r<n.length;r++){const s=t[r],a=s.transform,o=e.data.field(s.field);i.set(s.field,$L(a,o,n[r]))}return i}function Ow(t,e,n){const i=new Map;for(const r of t){const s=r.transform,a=n.data.field(r.field);i.set(r.field,QL(s,a,e))}return i}class Uo extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class dy extends af{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fy{constructor(e,n,i,r){this.batchId=e,this.localWriteTime=n,this.baseMutations=i,this.mutations=r}applyToRemoteDocument(e,n){const i=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const s=this.mutations[r];s.key.isEqual(e.key)&&WL(s,e,i[r])}}applyToLocalView(e,n){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(n=Wl(i,e,n,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(n=Wl(i,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const i=LR();return this.mutations.forEach(r=>{const s=e.get(r.key),a=s.overlayedDocument;let o=this.applyToLocalView(a,s.mutatedFields);o=n.has(r.key)?null:o;const u=HR(a,o);u!==null&&i.set(r.key,u),a.isValidDocument()||a.convertToNoDocument(Y.min())}),i}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&oo(this.mutations,e.mutations,(n,i)=>Dw(n,i))&&oo(this.baseMutations,e.baseMutations,(n,i)=>Dw(n,i))}}class my{constructor(e,n,i,r){this.batch=e,this.commitVersion=n,this.mutationResults=i,this.docVersions=r}static from(e,n,i){$(e.mutations.length===i.length);let r=function(){return GL}();const s=e.mutations;for(let a=0;a<s.length;a++)r=r.insert(s[a].key,i[a].version);return new my(e,n,i,r)}}/**
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
 */class py{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class ZL{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var tt,de;function QR(t){switch(t){default:return Q();case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0}}function $R(t){if(t===void 0)return We("GRPC error has no .code"),M.UNKNOWN;switch(t){case tt.OK:return M.OK;case tt.CANCELLED:return M.CANCELLED;case tt.UNKNOWN:return M.UNKNOWN;case tt.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case tt.INTERNAL:return M.INTERNAL;case tt.UNAVAILABLE:return M.UNAVAILABLE;case tt.UNAUTHENTICATED:return M.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case tt.NOT_FOUND:return M.NOT_FOUND;case tt.ALREADY_EXISTS:return M.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return M.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case tt.ABORTED:return M.ABORTED;case tt.OUT_OF_RANGE:return M.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return M.UNIMPLEMENTED;case tt.DATA_LOSS:return M.DATA_LOSS;default:return Q()}}(de=tt||(tt={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function YR(){return new TextEncoder}/**
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
 */const eU=new Ts([4294967295,4294967295],0);function Pw(t){const e=YR().encode(t),n=new Z0;return n.update(e),new Uint8Array(n.digest())}function Vw(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),i=e.getUint32(4,!0),r=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ts([n,i],0),new Ts([r,s],0)]}class gy{constructor(e,n,i){if(this.bitmap=e,this.padding=n,this.hashCount=i,n<0||n>=8)throw new Dl(`Invalid padding: ${n}`);if(i<0)throw new Dl(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Dl(`Invalid hash count: ${i}`);if(e.length===0&&n!==0)throw new Dl(`Invalid padding when bitmap length is 0: ${n}`);this.Ie=8*e.length-n,this.Te=Ts.fromNumber(this.Ie)}Ee(e,n,i){let r=e.add(n.multiply(Ts.fromNumber(i)));return r.compare(eU)===1&&(r=new Ts([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Te).toNumber()}de(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Ie===0)return!1;const n=Pw(e),[i,r]=Vw(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);if(!this.de(a))return!1}return!0}static create(e,n,i){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),a=new gy(s,r,n);return i.forEach(o=>a.insert(o)),a}insert(e){if(this.Ie===0)return;const n=Pw(e),[i,r]=Vw(n);for(let s=0;s<this.hashCount;s++){const a=this.Ee(i,r,s);this.Ae(a)}}Ae(e){const n=Math.floor(e/8),i=e%8;this.bitmap[n]|=1<<i}}class Dl extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sc{constructor(e,n,i,r,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=i,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,i){const r=new Map;return r.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,n,i)),new sc(Y.min(),r,new Se(te),tn(),re())}}class ac{constructor(e,n,i,r,s){this.resumeToken=e,this.current=n,this.addedDocuments=i,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,i){return new ac(i,n,re(),re(),re())}}/**
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
 */class bh{constructor(e,n,i,r){this.Re=e,this.removedTargetIds=n,this.key=i,this.Ve=r}}class XR{constructor(e,n){this.targetId=e,this.me=n}}class WR{constructor(e,n,i=ht.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=n,this.resumeToken=i,this.cause=r}}class xw{constructor(){this.fe=0,this.ge=kw(),this.pe=ht.EMPTY_BYTE_STRING,this.ye=!1,this.we=!0}get current(){return this.ye}get resumeToken(){return this.pe}get Se(){return this.fe!==0}get be(){return this.we}De(e){e.approximateByteSize()>0&&(this.we=!0,this.pe=e)}Ce(){let e=re(),n=re(),i=re();return this.ge.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:n=n.add(r);break;case 1:i=i.add(r);break;default:Q()}}),new ac(this.pe,this.ye,e,n,i)}ve(){this.we=!1,this.ge=kw()}Fe(e,n){this.we=!0,this.ge=this.ge.insert(e,n)}Me(e){this.we=!0,this.ge=this.ge.remove(e)}xe(){this.fe+=1}Oe(){this.fe-=1,$(this.fe>=0)}Ne(){this.we=!0,this.ye=!0}}class tU{constructor(e){this.Le=e,this.Be=new Map,this.ke=tn(),this.qe=Mw(),this.Qe=new Se(te)}Ke(e){for(const n of e.Re)e.Ve&&e.Ve.isFoundDocument()?this.$e(n,e.Ve):this.Ue(n,e.key,e.Ve);for(const n of e.removedTargetIds)this.Ue(n,e.key,e.Ve)}We(e){this.forEachTarget(e,n=>{const i=this.Ge(n);switch(e.state){case 0:this.ze(n)&&i.De(e.resumeToken);break;case 1:i.Oe(),i.Se||i.ve(),i.De(e.resumeToken);break;case 2:i.Oe(),i.Se||this.removeTarget(n);break;case 3:this.ze(n)&&(i.Ne(),i.De(e.resumeToken));break;case 4:this.ze(n)&&(this.je(n),i.De(e.resumeToken));break;default:Q()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Be.forEach((i,r)=>{this.ze(r)&&n(r)})}He(e){const n=e.targetId,i=e.me.count,r=this.Je(n);if(r){const s=r.target;if(dd(s))if(i===0){const a=new G(s.path);this.Ue(n,a,Oe.newNoDocument(a,Y.min()))}else $(i===1);else{const a=this.Ye(n);if(a!==i){const o=this.Ze(e),u=o?this.Xe(o,e,a):1;if(u!==0){this.je(n);const c=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Qe=this.Qe.insert(n,c)}}}}}Ze(e){const n=e.me.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:i="",padding:r=0},hashCount:s=0}=n;let a,o;try{a=Nr(i).toUint8Array()}catch(u){if(u instanceof TR)return Bn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{o=new gy(a,r,s)}catch(u){return Bn(u instanceof Dl?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return o.Ie===0?null:o}Xe(e,n,i){return n.me.count===i-this.nt(e,n.targetId)?0:2}nt(e,n){const i=this.Le.getRemoteKeysForTarget(n);let r=0;return i.forEach(s=>{const a=this.Le.tt(),o=`projects/${a.projectId}/databases/${a.database}/documents/${s.path.canonicalString()}`;e.mightContain(o)||(this.Ue(n,s,null),r++)}),r}rt(e){const n=new Map;this.Be.forEach((s,a)=>{const o=this.Je(a);if(o){if(s.current&&dd(o.target)){const u=new G(o.target.path);this.ke.get(u)!==null||this.it(a,u)||this.Ue(a,u,Oe.newNoDocument(u,e))}s.be&&(n.set(a,s.Ce()),s.ve())}});let i=re();this.qe.forEach((s,a)=>{let o=!0;a.forEachWhile(u=>{const c=this.Je(u);return!c||c.purpose==="TargetPurposeLimboResolution"||(o=!1,!1)}),o&&(i=i.add(s))}),this.ke.forEach((s,a)=>a.setReadTime(e));const r=new sc(e,n,this.Qe,this.ke,i);return this.ke=tn(),this.qe=Mw(),this.Qe=new Se(te),r}$e(e,n){if(!this.ze(e))return;const i=this.it(e,n.key)?2:0;this.Ge(e).Fe(n.key,i),this.ke=this.ke.insert(n.key,n),this.qe=this.qe.insert(n.key,this.st(n.key).add(e))}Ue(e,n,i){if(!this.ze(e))return;const r=this.Ge(e);this.it(e,n)?r.Fe(n,1):r.Me(n),this.qe=this.qe.insert(n,this.st(n).delete(e)),i&&(this.ke=this.ke.insert(n,i))}removeTarget(e){this.Be.delete(e)}Ye(e){const n=this.Ge(e).Ce();return this.Le.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}xe(e){this.Ge(e).xe()}Ge(e){let n=this.Be.get(e);return n||(n=new xw,this.Be.set(e,n)),n}st(e){let n=this.qe.get(e);return n||(n=new we(te),this.qe=this.qe.insert(e,n)),n}ze(e){const n=this.Je(e)!==null;return n||B("WatchChangeAggregator","Detected inactive target",e),n}Je(e){const n=this.Be.get(e);return n&&n.Se?null:this.Le.ot(e)}je(e){this.Be.set(e,new xw),this.Le.getRemoteKeysForTarget(e).forEach(n=>{this.Ue(e,n,null)})}it(e,n){return this.Le.getRemoteKeysForTarget(e).has(n)}}function Mw(){return new Se(G.comparator)}function kw(){return new Se(G.comparator)}const nU={asc:"ASCENDING",desc:"DESCENDING"},iU={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},rU={and:"AND",or:"OR"};class sU{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function ug(t,e){return t.useProto3Json||ec(e)?e:{value:e}}function fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function JR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function aU(t,e){return fo(t,e.toTimestamp())}function Ze(t){return $(!!t),Y.fromTimestamp(function(n){const i=Mi(n);return new Le(i.seconds,i.nanos)}(t))}function _y(t,e){return cg(t,e).canonicalString()}function cg(t,e){const n=function(r){return new le(["projects",r.projectId,"databases",r.database])}(t).child("documents");return e===void 0?n:n.child(e)}function ZR(t){const e=le.fromString(t);return $(uC(e)),e}function Nu(t,e){return _y(t.databaseId,e.path)}function ti(t,e){const n=ZR(e);if(n.get(1)!==t.databaseId.projectId)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new z(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new G(nC(n))}function eC(t,e){return _y(t.databaseId,e)}function tC(t){const e=ZR(t);return e.length===4?le.emptyPath():nC(e)}function hg(t){return new le(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function nC(t){return $(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Lw(t,e,n){return{name:Nu(t,e),fields:n.value.mapValue.fields}}function iC(t,e,n){const i=ti(t,e.name),r=Ze(e.updateTime),s=e.createTime?Ze(e.createTime):Y.min(),a=new Rt({mapValue:{fields:e.fields}}),o=Oe.newFoundDocument(i,r,s,a);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function oU(t,e){return"found"in e?function(i,r){$(!!r.found),r.found.name,r.found.updateTime;const s=ti(i,r.found.name),a=Ze(r.found.updateTime),o=r.found.createTime?Ze(r.found.createTime):Y.min(),u=new Rt({mapValue:{fields:r.found.fields}});return Oe.newFoundDocument(s,a,o,u)}(t,e):"missing"in e?function(i,r){$(!!r.missing),$(!!r.readTime);const s=ti(i,r.missing),a=Ze(r.readTime);return Oe.newNoDocument(s,a)}(t,e):Q()}function lU(t,e){let n;if("targetChange"in e){e.targetChange;const i=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:Q()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],s=function(c,d){return c.useProto3Json?($(d===void 0||typeof d=="string"),ht.fromBase64String(d||"")):($(d===void 0||d instanceof Buffer||d instanceof Uint8Array),ht.fromUint8Array(d||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,o=a&&function(c){const d=c.code===void 0?M.UNKNOWN:$R(c.code);return new z(d,c.message||"")}(a);n=new WR(i,r,s,o||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const r=ti(t,i.document.name),s=Ze(i.document.updateTime),a=i.document.createTime?Ze(i.document.createTime):Y.min(),o=new Rt({mapValue:{fields:i.document.fields}}),u=Oe.newFoundDocument(r,s,a,o),c=i.targetIds||[],d=i.removedTargetIds||[];n=new bh(c,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const r=ti(t,i.document),s=i.readTime?Ze(i.readTime):Y.min(),a=Oe.newNoDocument(r,s),o=i.removedTargetIds||[];n=new bh([],o,a.key,a)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const r=ti(t,i.document),s=i.removedTargetIds||[];n=new bh([],s,r,null)}else{if(!("filter"in e))return Q();{e.filter;const i=e.filter;i.targetId;const{count:r=0,unchangedNames:s}=i,a=new ZL(r,s),o=i.targetId;n=new XR(o,a)}}return n}function Ou(t,e){let n;if(e instanceof Lo)n={update:Lw(t,e.key,e.value)};else if(e instanceof Uo)n={delete:Nu(t,e.key)};else if(e instanceof Fi)n={update:Lw(t,e.key,e.data),updateMask:mU(e.fieldMask)};else{if(!(e instanceof dy))return Q();n={verify:Nu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(i=>function(s,a){const o=a.transform;if(o instanceof co)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof xs)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ms)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ho)return{fieldPath:a.field.canonicalString(),increment:o.Pe};throw Q()}(0,i))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:aU(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:Q()}(t,e.precondition)),n}function dg(t,e){const n=e.currentDocument?function(s){return s.updateTime!==void 0?ke.updateTime(Ze(s.updateTime)):s.exists!==void 0?ke.exists(s.exists):ke.none()}(e.currentDocument):ke.none(),i=e.updateTransforms?e.updateTransforms.map(r=>function(a,o){let u=null;if("setToServerValue"in o)$(o.setToServerValue==="REQUEST_TIME"),u=new co;else if("appendMissingElements"in o){const d=o.appendMissingElements.values||[];u=new xs(d)}else if("removeAllFromArray"in o){const d=o.removeAllFromArray.values||[];u=new Ms(d)}else"increment"in o?u=new ho(a,o.increment):Q();const c=Me.fromServerFormat(o.fieldPath);return new rc(c,u)}(t,r)):[];if(e.update){e.update.name;const r=ti(t,e.update.name),s=new Rt({mapValue:{fields:e.update.fields}});if(e.updateMask){const a=function(u){const c=u.fieldPaths||[];return new en(c.map(d=>Me.fromServerFormat(d)))}(e.updateMask);return new Fi(r,s,a,n,i)}return new Lo(r,s,n,i)}if(e.delete){const r=ti(t,e.delete);return new Uo(r,n)}if(e.verify){const r=ti(t,e.verify);return new dy(r,n)}return Q()}function uU(t,e){return t&&t.length>0?($(e!==void 0),t.map(n=>function(r,s){let a=r.updateTime?Ze(r.updateTime):Ze(s);return a.isEqual(Y.min())&&(a=Ze(s)),new XL(a,r.transformResults||[])}(n,e))):[]}function rC(t,e){return{documents:[eC(t,e.path)]}}function sC(t,e){const n={structuredQuery:{}},i=e.path;let r;e.collectionGroup!==null?(r=i,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=i.popLast(),n.structuredQuery.from=[{collectionId:i.lastSegment()}]),n.parent=eC(t,r);const s=function(c){if(c.length!==0)return lC(ve.create(c,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const a=function(c){if(c.length!==0)return c.map(d=>function(p){return{field:pa(p.field),direction:hU(p.dir)}}(d))}(e.orderBy);a&&(n.structuredQuery.orderBy=a);const o=ug(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{_t:n,parent:r}}function aC(t){let e=tC(t.parent);const n=t.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){$(i===1);const d=n.from[0];d.allDescendants?r=d.collectionId:e=e.child(d.collectionId)}let s=[];n.where&&(s=function(f){const p=oC(f);return p instanceof ve&&uy(p)?p.getFilters():[p]}(n.where));let a=[];n.orderBy&&(a=function(f){return f.map(p=>function(R){return new Du(ga(R.field),function(x){switch(x){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(R.direction))}(p))}(n.orderBy));let o=null;n.limit&&(o=function(f){let p;return p=typeof f=="object"?f.value:f,ec(p)?null:p}(n.limit));let u=null;n.startAt&&(u=function(f){const p=!!f.before,g=f.values||[];return new Vr(g,p)}(n.startAt));let c=null;return n.endAt&&(c=function(f){const p=!f.before,g=f.values||[];return new Vr(g,p)}(n.endAt)),OR(e,r,a,s,o,"F",u,c)}function cU(t,e){const n=function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Q()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function oC(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const i=ga(n.unaryFilter.field);return ce.create(i,"==",{doubleValue:NaN});case"IS_NULL":const r=ga(n.unaryFilter.field);return ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=ga(n.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=ga(n.unaryFilter.field);return ce.create(a,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(t):t.fieldFilter!==void 0?function(n){return ce.create(ga(n.fieldFilter.field),function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return ve.create(n.compositeFilter.filters.map(i=>oC(i)),function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Q()}}(n.compositeFilter.op))}(t):Q()}function hU(t){return nU[t]}function dU(t){return iU[t]}function fU(t){return rU[t]}function pa(t){return{fieldPath:t.canonicalString()}}function ga(t){return Me.fromServerFormat(t.fieldPath)}function lC(t){return t instanceof ce?function(n){if(n.op==="=="){if(Ew(n.value))return{unaryFilter:{field:pa(n.field),op:"IS_NAN"}};if(vw(n.value))return{unaryFilter:{field:pa(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Ew(n.value))return{unaryFilter:{field:pa(n.field),op:"IS_NOT_NAN"}};if(vw(n.value))return{unaryFilter:{field:pa(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:pa(n.field),op:dU(n.op),value:n.value}}}(t):t instanceof ve?function(n){const i=n.getFilters().map(r=>lC(r));return i.length===1?i[0]:{compositeFilter:{op:fU(n.op),filters:i}}}(t):Q()}function mU(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uC(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Ii{constructor(e,n,i,r,s=Y.min(),a=Y.min(),o=ht.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=i,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=o,this.expectedCount=u}withSequenceNumber(e){return new Ii(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ii(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class cC{constructor(e){this.ct=e}}function pU(t,e){let n;if(e.document)n=iC(t.ct,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const i=G.fromSegments(e.noDocument.path),r=Ls(e.noDocument.readTime);n=Oe.newNoDocument(i,r),e.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!e.unknownDocument)return Q();{const i=G.fromSegments(e.unknownDocument.path),r=Ls(e.unknownDocument.version);n=Oe.newUnknownDocument(i,r)}}return e.readTime&&n.setReadTime(function(r){const s=new Le(r[0],r[1]);return Y.fromTimestamp(s)}(e.readTime)),n}function Uw(t,e){const n=e.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:pd(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())i.document=function(s,a){return{name:Nu(s,a.key),fields:a.data.value.mapValue.fields,updateTime:fo(s,a.version.toTimestamp()),createTime:fo(s,a.createTime.toTimestamp())}}(t.ct,e);else if(e.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:ks(e.version)};else{if(!e.isUnknownDocument())return Q();i.unknownDocument={path:n.path.toArray(),version:ks(e.version)}}return i}function pd(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function ks(t){const e=t.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ls(t){const e=new Le(t.seconds,t.nanoseconds);return Y.fromTimestamp(e)}function ss(t,e){const n=(e.baseMutations||[]).map(s=>dg(t.ct,s));for(let s=0;s<e.mutations.length-1;++s){const a=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const o=e.mutations[s+1];a.updateTransforms=o.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const i=e.mutations.map(s=>dg(t.ct,s)),r=Le.fromMillis(e.localWriteTimeMs);return new fy(e.batchId,r,n,i)}function Nl(t){const e=Ls(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?Ls(t.lastLimboFreeSnapshotVersion):Y.min();let i;return i=function(s){return s.documents!==void 0}(t.query)?function(s){return $(s.documents.length===1),jt(ko(tC(s.documents[0])))}(t.query):function(s){return jt(aC(s))}(t.query),new Ii(i,t.targetId,"TargetPurposeListen",t.lastListenSequenceNumber,e,n,ht.fromBase64String(t.resumeToken))}function hC(t,e){const n=ks(e.snapshotVersion),i=ks(e.lastLimboFreeSnapshotVersion);let r;r=dd(e.target)?rC(t.ct,e.target):sC(t.ct,e.target)._t;const s=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Vs(e.target),readTime:n,resumeToken:s,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function yy(t){const e=aC({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?md(e,e.limit,"L"):e}function Fm(t,e){return new py(e.largestBatchId,dg(t.ct,e.overlayMutation))}function zw(t,e){const n=e.path.lastSegment();return[t,Ft(e.path.popLast()),n]}function Bw(t,e,n,i){return{indexId:t,uid:e,sequenceNumber:n,readTime:ks(i.readTime),documentKey:Ft(i.documentKey.path),largestBatchId:i.largestBatchId}}/**
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
 */class gU{getBundleMetadata(e,n){return Fw(e).get(n).next(i=>{if(i)return function(s){return{id:s.bundleId,createTime:Ls(s.createTime),version:s.version}}(i)})}saveBundleMetadata(e,n){return Fw(e).put(function(r){return{bundleId:r.id,createTime:ks(Ze(r.createTime)),version:r.version}}(n))}getNamedQuery(e,n){return jw(e).get(n).next(i=>{if(i)return function(s){return{name:s.name,query:yy(s.bundledQuery),readTime:Ls(s.readTime)}}(i)})}saveNamedQuery(e,n){return jw(e).put(function(r){return{name:r.name,readTime:ks(Ze(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function Fw(t){return Et(t,"bundles")}function jw(t){return Et(t,"namedQueries")}/**
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
 */class of{constructor(e,n){this.serializer=e,this.userId=n}static lt(e,n){const i=n.uid||"";return new of(e,i)}getOverlay(e,n){return fl(e).get(zw(this.userId,n)).next(i=>i?Fm(this.serializer,i):null)}getOverlays(e,n){const i=Jn();return V.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){const r=[];return i.forEach((s,a)=>{const o=new py(n,a);r.push(this.ht(e,o))}),V.waitFor(r)}removeOverlaysForBatchId(e,n,i){const r=new Set;n.forEach(a=>r.add(Ft(a.getCollectionPath())));const s=[];return r.forEach(a=>{const o=IDBKeyRange.bound([this.userId,a,i],[this.userId,a,i+1],!1,!0);s.push(fl(e).j("collectionPathOverlayIndex",o))}),V.waitFor(s)}getOverlaysForCollection(e,n,i){const r=Jn(),s=Ft(n),a=IDBKeyRange.bound([this.userId,s,i],[this.userId,s,Number.POSITIVE_INFINITY],!0);return fl(e).U("collectionPathOverlayIndex",a).next(o=>{for(const u of o){const c=Fm(this.serializer,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(e,n,i,r){const s=Jn();let a;const o=IDBKeyRange.bound([this.userId,n,i],[this.userId,n,Number.POSITIVE_INFINITY],!0);return fl(e).J({index:"collectionGroupOverlayIndex",range:o},(u,c,d)=>{const f=Fm(this.serializer,c);s.size()<r||f.largestBatchId===a?(s.set(f.getKey(),f),a=f.largestBatchId):d.done()}).next(()=>s)}ht(e,n){return fl(e).put(function(r,s,a){const[o,u,c]=zw(s,a.mutation.key);return{userId:s,collectionPath:u,documentId:c,collectionGroup:a.mutation.key.getCollectionGroup(),largestBatchId:a.largestBatchId,overlayMutation:Ou(r.ct,a.mutation)}}(this.serializer,this.userId,n))}}function fl(t){return Et(t,"documentOverlays")}/**
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
 */class as{constructor(){}Pt(e,n){this.It(e,n),n.Tt()}It(e,n){if("nullValue"in e)this.Et(n,5);else if("booleanValue"in e)this.Et(n,10),n.dt(e.booleanValue?1:0);else if("integerValue"in e)this.Et(n,15),n.dt(je(e.integerValue));else if("doubleValue"in e){const i=je(e.doubleValue);isNaN(i)?this.Et(n,13):(this.Et(n,15),bu(i)?n.dt(0):n.dt(i))}else if("timestampValue"in e){let i=e.timestampValue;this.Et(n,20),typeof i=="string"&&(i=Mi(i)),n.At(`${i.seconds||""}`),n.dt(i.nanos||0)}else if("stringValue"in e)this.Rt(e.stringValue,n),this.Vt(n);else if("bytesValue"in e)this.Et(n,30),n.ft(Nr(e.bytesValue)),this.Vt(n);else if("referenceValue"in e)this.gt(e.referenceValue,n);else if("geoPointValue"in e){const i=e.geoPointValue;this.Et(n,45),n.dt(i.latitude||0),n.dt(i.longitude||0)}else"mapValue"in e?wR(e)?this.Et(n,Number.MAX_SAFE_INTEGER):(this.yt(e.mapValue,n),this.Vt(n)):"arrayValue"in e?(this.wt(e.arrayValue,n),this.Vt(n)):Q()}Rt(e,n){this.Et(n,25),this.St(e,n)}St(e,n){n.At(e)}yt(e,n){const i=e.fields||{};this.Et(n,55);for(const r of Object.keys(i))this.Rt(r,n),this.It(i[r],n)}wt(e,n){const i=e.values||[];this.Et(n,50);for(const r of i)this.It(r,n)}gt(e,n){this.Et(n,37),G.fromName(e).path.forEach(i=>{this.Et(n,60),this.St(i,n)})}Et(e,n){e.dt(n)}Vt(e){e.dt(2)}}as.bt=new as;function _U(t){if(t===0)return 8;let e=0;return!(t>>4)&&(e+=4,t<<=4),!(t>>6)&&(e+=2,t<<=2),!(t>>7)&&(e+=1),e}function qw(t){const e=64-function(i){let r=0;for(let s=0;s<8;++s){const a=_U(255&i[s]);if(r+=a,a!==8)break}return r}(t);return Math.ceil(e/8)}class yU{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Dt(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.Ct(i.value),i=n.next();this.vt()}Ft(e){const n=e[Symbol.iterator]();let i=n.next();for(;!i.done;)this.Mt(i.value),i=n.next();this.xt()}Ot(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.Ct(i);else if(i<2048)this.Ct(960|i>>>6),this.Ct(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.Ct(480|i>>>12),this.Ct(128|63&i>>>6),this.Ct(128|63&i);else{const r=n.codePointAt(0);this.Ct(240|r>>>18),this.Ct(128|63&r>>>12),this.Ct(128|63&r>>>6),this.Ct(128|63&r)}}this.vt()}Nt(e){for(const n of e){const i=n.charCodeAt(0);if(i<128)this.Mt(i);else if(i<2048)this.Mt(960|i>>>6),this.Mt(128|63&i);else if(n<"\uD800"||"\uDBFF"<n)this.Mt(480|i>>>12),this.Mt(128|63&i>>>6),this.Mt(128|63&i);else{const r=n.codePointAt(0);this.Mt(240|r>>>18),this.Mt(128|63&r>>>12),this.Mt(128|63&r>>>6),this.Mt(128|63&r)}}this.xt()}Lt(e){const n=this.Bt(e),i=qw(n);this.kt(1+i),this.buffer[this.position++]=255&i;for(let r=n.length-i;r<n.length;++r)this.buffer[this.position++]=255&n[r]}qt(e){const n=this.Bt(e),i=qw(n);this.kt(1+i),this.buffer[this.position++]=~(255&i);for(let r=n.length-i;r<n.length;++r)this.buffer[this.position++]=~(255&n[r])}Qt(){this.Kt(255),this.Kt(255)}$t(){this.Ut(255),this.Ut(255)}reset(){this.position=0}seed(e){this.kt(e.length),this.buffer.set(e,this.position),this.position+=e.length}Wt(){return this.buffer.slice(0,this.position)}Bt(e){const n=function(s){const a=new DataView(new ArrayBuffer(8));return a.setFloat64(0,s,!1),new Uint8Array(a.buffer)}(e),i=(128&n[0])!=0;n[0]^=i?255:128;for(let r=1;r<n.length;++r)n[r]^=i?255:0;return n}Ct(e){const n=255&e;n===0?(this.Kt(0),this.Kt(255)):n===255?(this.Kt(255),this.Kt(0)):this.Kt(n)}Mt(e){const n=255&e;n===0?(this.Ut(0),this.Ut(255)):n===255?(this.Ut(255),this.Ut(0)):this.Ut(e)}vt(){this.Kt(0),this.Kt(1)}xt(){this.Ut(0),this.Ut(1)}Kt(e){this.kt(1),this.buffer[this.position++]=e}Ut(e){this.kt(1),this.buffer[this.position++]=~e}kt(e){const n=e+this.position;if(n<=this.buffer.length)return;let i=2*this.buffer.length;i<n&&(i=n);const r=new Uint8Array(i);r.set(this.buffer),this.buffer=r}}class vU{constructor(e){this.Gt=e}ft(e){this.Gt.Dt(e)}At(e){this.Gt.Ot(e)}dt(e){this.Gt.Lt(e)}Tt(){this.Gt.Qt()}}class EU{constructor(e){this.Gt=e}ft(e){this.Gt.Ft(e)}At(e){this.Gt.Nt(e)}dt(e){this.Gt.qt(e)}Tt(){this.Gt.$t()}}class ml{constructor(){this.Gt=new yU,this.zt=new vU(this.Gt),this.jt=new EU(this.Gt)}seed(e){this.Gt.seed(e)}Ht(e){return e===0?this.zt:this.jt}Wt(){return this.Gt.Wt()}reset(){this.Gt.reset()}}/**
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
 */class os{constructor(e,n,i,r){this.indexId=e,this.documentKey=n,this.arrayValue=i,this.directionalValue=r}Jt(){const e=this.directionalValue.length,n=e===0||this.directionalValue[e-1]===255?e+1:e,i=new Uint8Array(n);return i.set(this.directionalValue,0),n!==e?i.set([0],this.directionalValue.length):++i[i.length-1],new os(this.indexId,this.documentKey,this.arrayValue,i)}}function $i(t,e){let n=t.indexId-e.indexId;return n!==0?n:(n=Gw(t.arrayValue,e.arrayValue),n!==0?n:(n=Gw(t.directionalValue,e.directionalValue),n!==0?n:G.comparator(t.documentKey,e.documentKey)))}function Gw(t,e){for(let n=0;n<t.length&&n<e.length;++n){const i=t[n]-e[n];if(i!==0)return i}return t.length-e.length}/**
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
 */class Hw{constructor(e){this.Yt=new we((n,i)=>Me.comparator(n.field,i.field)),this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Zt=e.orderBy,this.Xt=[];for(const n of e.filters){const i=n;i.isInequality()?this.Yt=this.Yt.add(i):this.Xt.push(i)}}get en(){return this.Yt.size>1}tn(e){if($(e.collectionGroup===this.collectionId),this.en)return!1;const n=tg(e);if(n!==void 0&&!this.nn(n))return!1;const i=is(e);let r=new Set,s=0,a=0;for(;s<i.length&&this.nn(i[s]);++s)r=r.add(i[s].fieldPath.canonicalString());if(s===i.length)return!0;if(this.Yt.size>0){const o=this.Yt.getIterator().getNext();if(!r.has(o.field.canonicalString())){const u=i[s];if(!this.rn(o,u)||!this.sn(this.Zt[a++],u))return!1}++s}for(;s<i.length;++s){const o=i[s];if(a>=this.Zt.length||!this.sn(this.Zt[a++],o))return!1}return!0}on(){if(this.en)return null;let e=new we(Me.comparator);const n=[];for(const i of this.Xt)if(!i.field.isKeyField())if(i.op==="array-contains"||i.op==="array-contains-any")n.push(new Eh(i.field,2));else{if(e.has(i.field))continue;e=e.add(i.field),n.push(new Eh(i.field,0))}for(const i of this.Zt)i.field.isKeyField()||e.has(i.field)||(e=e.add(i.field),n.push(new Eh(i.field,i.dir==="asc"?0:1)));return new hd(hd.UNKNOWN_ID,this.collectionId,n,Au.empty())}nn(e){for(const n of this.Xt)if(this.rn(n,e))return!0;return!1}rn(e,n){if(e===void 0||!e.field.isEqual(n.fieldPath))return!1;const i=e.op==="array-contains"||e.op==="array-contains-any";return n.kind===2===i}sn(e,n){return!!e.field.isEqual(n.fieldPath)&&(n.kind===0&&e.dir==="asc"||n.kind===1&&e.dir==="desc")}}/**
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
 */function dC(t){var e,n;if($(t instanceof ce||t instanceof ve),t instanceof ce){if(t instanceof NR){const r=((n=(e=t.value.arrayValue)===null||e===void 0?void 0:e.values)===null||n===void 0?void 0:n.map(s=>ce.create(t.field,"==",s)))||[];return ve.create(r,"or")}return t}const i=t.filters.map(r=>dC(r));return ve.create(i,t.op)}function TU(t){if(t.getFilters().length===0)return[];const e=pg(dC(t));return $(fC(e)),fg(e)||mg(e)?[e]:e.getFilters()}function fg(t){return t instanceof ce}function mg(t){return t instanceof ve&&uy(t)}function fC(t){return fg(t)||mg(t)||function(n){if(n instanceof ve&&sg(n)){for(const i of n.getFilters())if(!fg(i)&&!mg(i))return!1;return!0}return!1}(t)}function pg(t){if($(t instanceof ce||t instanceof ve),t instanceof ce)return t;if(t.filters.length===1)return pg(t.filters[0]);const e=t.filters.map(i=>pg(i));let n=ve.create(e,t.op);return n=gd(n),fC(n)?n:($(n instanceof ve),$(uo(n)),$(n.filters.length>1),n.filters.reduce((i,r)=>vy(i,r)))}function vy(t,e){let n;return $(t instanceof ce||t instanceof ve),$(e instanceof ce||e instanceof ve),n=t instanceof ce?e instanceof ce?function(r,s){return ve.create([r,s],"and")}(t,e):Kw(t,e):e instanceof ce?Kw(e,t):function(r,s){if($(r.filters.length>0&&s.filters.length>0),uo(r)&&uo(s))return RR(r,s.getFilters());const a=sg(r)?r:s,o=sg(r)?s:r,u=a.filters.map(c=>vy(c,o));return ve.create(u,"or")}(t,e),gd(n)}function Kw(t,e){if(uo(e))return RR(e,t.getFilters());{const n=e.filters.map(i=>vy(t,i));return ve.create(n,"or")}}function gd(t){if($(t instanceof ce||t instanceof ve),t instanceof ce)return t;const e=t.getFilters();if(e.length===1)return gd(e[0]);if(bR(t))return t;const n=e.map(r=>gd(r)),i=[];return n.forEach(r=>{r instanceof ce?i.push(r):r instanceof ve&&(r.op===t.op?i.push(...r.filters):i.push(r))}),i.length===1?i[0]:ve.create(i,t.op)}/**
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
 */class wU{constructor(){this._n=new Ey}addToCollectionParentIndex(e,n){return this._n.add(n),V.resolve()}getCollectionParents(e,n){return V.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return V.resolve()}deleteFieldIndex(e,n){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,n){return V.resolve()}getDocumentsMatchingTarget(e,n){return V.resolve(null)}getIndexType(e,n){return V.resolve(0)}getFieldIndexes(e,n){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,n){return V.resolve(Tn.min())}getMinOffsetFromCollectionGroup(e,n){return V.resolve(Tn.min())}updateCollectionGroup(e,n,i){return V.resolve()}updateIndexEntries(e,n){return V.resolve()}}class Ey{constructor(){this.index={}}add(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n]||new we(le.comparator),s=!r.has(i);return this.index[n]=r.add(i),s}has(e){const n=e.lastSegment(),i=e.popLast(),r=this.index[n];return r&&r.has(i)}getEntries(e){return(this.index[e]||new we(le.comparator)).toArray()}}/**
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
 */const Xc=new Uint8Array(0);class IU{constructor(e,n){this.databaseId=n,this.an=new Ey,this.un=new Gr(i=>Vs(i),(i,r)=>tc(i,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,n){if(!this.an.has(n)){const i=n.lastSegment(),r=n.popLast();e.addOnCommittedListener(()=>{this.an.add(n)});const s={collectionId:i,parent:Ft(r)};return Qw(e).put(s)}return V.resolve()}getCollectionParents(e,n){const i=[],r=IDBKeyRange.bound([n,""],[lR(n),""],!1,!0);return Qw(e).U(r).next(s=>{for(const a of s){if(a.collectionId!==n)break;i.push(Wn(a.parent))}return i})}addFieldIndex(e,n){const i=pl(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(u=>[u.fieldPath.canonicalString(),u.kind])}}(n);delete r.indexId;const s=i.add(r);if(n.indexState){const a=la(e);return s.next(o=>{a.put(Bw(o,this.uid,n.indexState.sequenceNumber,n.indexState.offset))})}return s.next()}deleteFieldIndex(e,n){const i=pl(e),r=la(e),s=oa(e);return i.delete(n.indexId).next(()=>r.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([n.indexId],[n.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const n=pl(e),i=oa(e),r=la(e);return n.j().next(()=>i.j()).next(()=>r.j())}createTargetIndexes(e,n){return V.forEach(this.cn(n),i=>this.getIndexType(e,i).next(r=>{if(r===0||r===1){const s=new Hw(i).on();if(s!=null)return this.addFieldIndex(e,s)}}))}getDocumentsMatchingTarget(e,n){const i=oa(e);let r=!0;const s=new Map;return V.forEach(this.cn(n),a=>this.ln(e,a).next(o=>{r&&(r=!!o),s.set(a,o)})).next(()=>{if(r){let a=re();const o=[];return V.forEach(s,(u,c)=>{B("IndexedDbIndexManager",`Using index ${function(A){return`id=${A.indexId}|cg=${A.collectionGroup}|f=${A.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`}(u)} to execute ${Vs(n)}`);const d=function(A,O){const L=tg(O);if(L===void 0)return null;for(const F of fd(A,L.fieldPath))switch(F.op){case"array-contains-any":return F.value.arrayValue.values||[];case"array-contains":return[F.value]}return null}(c,u),f=function(A,O){const L=new Map;for(const F of is(O))for(const T of fd(A,F.fieldPath))switch(T.op){case"==":case"in":L.set(F.fieldPath.canonicalString(),T.value);break;case"not-in":case"!=":return L.set(F.fieldPath.canonicalString(),T.value),Array.from(L.values())}return null}(c,u),p=function(A,O){const L=[];let F=!0;for(const T of is(O)){const _=T.kind===0?bw(A,T.fieldPath,A.startAt):Sw(A,T.fieldPath,A.startAt);L.push(_.value),F&&(F=_.inclusive)}return new Vr(L,F)}(c,u),g=function(A,O){const L=[];let F=!0;for(const T of is(O)){const _=T.kind===0?Sw(A,T.fieldPath,A.endAt):bw(A,T.fieldPath,A.endAt);L.push(_.value),F&&(F=_.inclusive)}return new Vr(L,F)}(c,u),R=this.hn(u,c,p),N=this.hn(u,c,g),x=this.Pn(u,c,f),I=this.In(u.indexId,d,R,p.inclusive,N,g.inclusive,x);return V.forEach(I,E=>i.G(E,n.limit).next(A=>{A.forEach(O=>{const L=G.fromSegments(O.documentKey);a.has(L)||(a=a.add(L),o.push(L))})}))}).next(()=>o)}return V.resolve(null)})}cn(e){let n=this.un.get(e);return n||(e.filters.length===0?n=[e]:n=TU(ve.create(e.filters,"and")).map(i=>og(e.path,e.collectionGroup,e.orderBy,i.getFilters(),e.limit,e.startAt,e.endAt)),this.un.set(e,n),n)}In(e,n,i,r,s,a,o){const u=(n!=null?n.length:1)*Math.max(i.length,s.length),c=u/(n!=null?n.length:1),d=[];for(let f=0;f<u;++f){const p=n?this.Tn(n[f/c]):Xc,g=this.En(e,p,i[f%c],r),R=this.dn(e,p,s[f%c],a),N=o.map(x=>this.En(e,p,x,!0));d.push(...this.createRange(g,R,N))}return d}En(e,n,i,r){const s=new os(e,G.empty(),n,i);return r?s:s.Jt()}dn(e,n,i,r){const s=new os(e,G.empty(),n,i);return r?s.Jt():s}ln(e,n){const i=new Hw(n),r=n.collectionGroup!=null?n.collectionGroup:n.path.lastSegment();return this.getFieldIndexes(e,r).next(s=>{let a=null;for(const o of s)i.tn(o)&&(!a||o.fields.length>a.fields.length)&&(a=o);return a})}getIndexType(e,n){let i=2;const r=this.cn(n);return V.forEach(r,s=>this.ln(e,s).next(a=>{a?i!==0&&a.fields.length<function(u){let c=new we(Me.comparator),d=!1;for(const f of u.filters)for(const p of f.getFlattenedFilters())p.field.isKeyField()||(p.op==="array-contains"||p.op==="array-contains-any"?d=!0:c=c.add(p.field));for(const f of u.orderBy)f.field.isKeyField()||(c=c.add(f.field));return c.size+(d?1:0)}(s)&&(i=1):i=0})).next(()=>function(a){return a.limit!==null}(n)&&r.length>1&&i===2?1:i)}An(e,n){const i=new ml;for(const r of is(e)){const s=n.data.field(r.fieldPath);if(s==null)return null;const a=i.Ht(r.kind);as.bt.Pt(s,a)}return i.Wt()}Tn(e){const n=new ml;return as.bt.Pt(e,n.Ht(0)),n.Wt()}Rn(e,n){const i=new ml;return as.bt.Pt(Ps(this.databaseId,n),i.Ht(function(s){const a=is(s);return a.length===0?0:a[a.length-1].kind}(e))),i.Wt()}Pn(e,n,i){if(i===null)return[];let r=[];r.push(new ml);let s=0;for(const a of is(e)){const o=i[s++];for(const u of r)if(this.Vn(n,a.fieldPath)&&Cu(o))r=this.mn(r,a,o);else{const c=u.Ht(a.kind);as.bt.Pt(o,c)}}return this.fn(r)}hn(e,n,i){return this.Pn(e,n,i.position)}fn(e){const n=[];for(let i=0;i<e.length;++i)n[i]=e[i].Wt();return n}mn(e,n,i){const r=[...e],s=[];for(const a of i.arrayValue.values||[])for(const o of r){const u=new ml;u.seed(o.Wt()),as.bt.Pt(a,u.Ht(n.kind)),s.push(u)}return s}Vn(e,n){return!!e.filters.find(i=>i instanceof ce&&i.field.isEqual(n)&&(i.op==="in"||i.op==="not-in"))}getFieldIndexes(e,n){const i=pl(e),r=la(e);return(n?i.U("collectionGroupIndex",IDBKeyRange.bound(n,n)):i.U()).next(s=>{const a=[];return V.forEach(s,o=>r.get([o.indexId,this.uid]).next(u=>{a.push(function(d,f){const p=f?new Au(f.sequenceNumber,new Tn(Ls(f.readTime),new G(Wn(f.documentKey)),f.largestBatchId)):Au.empty(),g=d.fields.map(([R,N])=>new Eh(Me.fromServerFormat(R),N));return new hd(d.indexId,d.collectionGroup,g,p)}(o,u))})).next(()=>a)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(n=>n.length===0?null:(n.sort((i,r)=>{const s=i.indexState.sequenceNumber-r.indexState.sequenceNumber;return s!==0?s:te(i.collectionGroup,r.collectionGroup)}),n[0].collectionGroup))}updateCollectionGroup(e,n,i){const r=pl(e),s=la(e);return this.gn(e).next(a=>r.U("collectionGroupIndex",IDBKeyRange.bound(n,n)).next(o=>V.forEach(o,u=>s.put(Bw(u.indexId,this.uid,a,i)))))}updateIndexEntries(e,n){const i=new Map;return V.forEach(n,(r,s)=>{const a=i.get(r.collectionGroup);return(a?V.resolve(a):this.getFieldIndexes(e,r.collectionGroup)).next(o=>(i.set(r.collectionGroup,o),V.forEach(o,u=>this.pn(e,r,u).next(c=>{const d=this.yn(s,u);return c.isEqual(d)?V.resolve():this.wn(e,s,u,c,d)}))))})}Sn(e,n,i,r){return oa(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.Rn(i,n.key),documentKey:n.key.path.toArray()})}bn(e,n,i,r){return oa(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.Rn(i,n.key),n.key.path.toArray()])}pn(e,n,i){const r=oa(e);let s=new we($i);return r.J({index:"documentKeyIndex",range:IDBKeyRange.only([i.indexId,this.uid,this.Rn(i,n)])},(a,o)=>{s=s.add(new os(i.indexId,n,o.arrayValue,o.directionalValue))}).next(()=>s)}yn(e,n){let i=new we($i);const r=this.An(n,e);if(r==null)return i;const s=tg(n);if(s!=null){const a=e.data.field(s.fieldPath);if(Cu(a))for(const o of a.arrayValue.values||[])i=i.add(new os(n.indexId,e.key,this.Tn(o),r))}else i=i.add(new os(n.indexId,e.key,Xc,r));return i}wn(e,n,i,r,s){B("IndexedDbIndexManager","Updating index entries for document '%s'",n.key);const a=[];return function(u,c,d,f,p){const g=u.getIterator(),R=c.getIterator();let N=aa(g),x=aa(R);for(;N||x;){let I=!1,E=!1;if(N&&x){const A=d(N,x);A<0?E=!0:A>0&&(I=!0)}else N!=null?E=!0:I=!0;I?(f(x),x=aa(R)):E?(p(N),N=aa(g)):(N=aa(g),x=aa(R))}}(r,s,$i,o=>{a.push(this.Sn(e,n,i,o))},o=>{a.push(this.bn(e,n,i,o))}),V.waitFor(a)}gn(e){let n=1;return la(e).J({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(i,r,s)=>{s.done(),n=r.sequenceNumber+1}).next(()=>n)}createRange(e,n,i){i=i.sort((a,o)=>$i(a,o)).filter((a,o,u)=>!o||$i(a,u[o-1])!==0);const r=[];r.push(e);for(const a of i){const o=$i(a,e),u=$i(a,n);if(o===0)r[0]=e.Jt();else if(o>0&&u<0)r.push(a),r.push(a.Jt());else if(u>0)break}r.push(n);const s=[];for(let a=0;a<r.length;a+=2){if(this.Dn(r[a],r[a+1]))return[];const o=[r[a].indexId,this.uid,r[a].arrayValue,r[a].directionalValue,Xc,[]],u=[r[a+1].indexId,this.uid,r[a+1].arrayValue,r[a+1].directionalValue,Xc,[]];s.push(IDBKeyRange.bound(o,u))}return s}Dn(e,n){return $i(e,n)>0}getMinOffsetFromCollectionGroup(e,n){return this.getFieldIndexes(e,n).next($w)}getMinOffset(e,n){return V.mapArray(this.cn(n),i=>this.ln(e,i).next(r=>r||Q())).next($w)}}function Qw(t){return Et(t,"collectionParents")}function oa(t){return Et(t,"indexEntries")}function pl(t){return Et(t,"indexConfiguration")}function la(t){return Et(t,"indexState")}function $w(t){$(t.length!==0);let e=t[0].indexState.offset,n=e.largestBatchId;for(let i=1;i<t.length;i++){const r=t[i].indexState.offset;ay(r,e)<0&&(e=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new Tn(e.readTime,e.documentKey,n)}/**
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
 */const Yw={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Wt{constructor(e,n,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=i}static withCacheSize(e){return new Wt(e,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function mC(t,e,n){const i=t.store("mutations"),r=t.store("documentMutations"),s=[],a=IDBKeyRange.only(n.batchId);let o=0;const u=i.J({range:a},(d,f,p)=>(o++,p.delete()));s.push(u.next(()=>{$(o===1)}));const c=[];for(const d of n.mutations){const f=pR(e,d.key.path,n.batchId);s.push(r.delete(f)),c.push(d.key)}return V.waitFor(s).next(()=>c)}function _d(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw Q();e=t.noDocument}return JSON.stringify(e).length}/**
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
 */Wt.DEFAULT_COLLECTION_PERCENTILE=10,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Wt.DEFAULT=new Wt(41943040,Wt.DEFAULT_COLLECTION_PERCENTILE,Wt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Wt.DISABLED=new Wt(-1,0,0);class lf{constructor(e,n,i,r){this.userId=e,this.serializer=n,this.indexManager=i,this.referenceDelegate=r,this.Cn={}}static lt(e,n,i,r){$(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new lf(s,n,i,r)}checkEmpty(e){let n=!0;const i=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yi(e).J({index:"userMutationsIndex",range:i},(r,s,a)=>{n=!1,a.done()}).next(()=>n)}addMutationBatch(e,n,i,r){const s=_a(e),a=Yi(e);return a.add({}).next(o=>{$(typeof o=="number");const u=new fy(o,n,i,r),c=function(g,R,N){const x=N.baseMutations.map(E=>Ou(g.ct,E)),I=N.mutations.map(E=>Ou(g.ct,E));return{userId:R,batchId:N.batchId,localWriteTimeMs:N.localWriteTime.toMillis(),baseMutations:x,mutations:I}}(this.serializer,this.userId,u),d=[];let f=new we((p,g)=>te(p.canonicalString(),g.canonicalString()));for(const p of r){const g=pR(this.userId,p.key.path,o);f=f.add(p.key.path.popLast()),d.push(a.put(c)),d.push(s.put(g,hL))}return f.forEach(p=>{d.push(this.indexManager.addToCollectionParentIndex(e,p))}),e.addOnCommittedListener(()=>{this.Cn[o]=u.keys()}),V.waitFor(d).next(()=>u)})}lookupMutationBatch(e,n){return Yi(e).get(n).next(i=>i?($(i.userId===this.userId),ss(this.serializer,i)):null)}vn(e,n){return this.Cn[n]?V.resolve(this.Cn[n]):this.lookupMutationBatch(e,n).next(i=>{if(i){const r=i.keys();return this.Cn[n]=r,r}return null})}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=IDBKeyRange.lowerBound([this.userId,i]);let s=null;return Yi(e).J({index:"userMutationsIndex",range:r},(a,o,u)=>{o.userId===this.userId&&($(o.batchId>=i),s=ss(this.serializer,o)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let i=-1;return Yi(e).J({index:"userMutationsIndex",range:n,reverse:!0},(r,s,a)=>{i=s.batchId,a.done()}).next(()=>i)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Yi(e).U("userMutationsIndex",n).next(i=>i.map(r=>ss(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(e,n){const i=Th(this.userId,n.path),r=IDBKeyRange.lowerBound(i),s=[];return _a(e).J({range:r},(a,o,u)=>{const[c,d,f]=a,p=Wn(d);if(c===this.userId&&n.path.isEqual(p))return Yi(e).get(f).next(g=>{if(!g)throw Q();$(g.userId===this.userId),s.push(ss(this.serializer,g))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new we(te);const r=[];return n.forEach(s=>{const a=Th(this.userId,s.path),o=IDBKeyRange.lowerBound(a),u=_a(e).J({range:o},(c,d,f)=>{const[p,g,R]=c,N=Wn(g);p===this.userId&&s.path.isEqual(N)?i=i.add(R):f.done()});r.push(u)}),V.waitFor(r).next(()=>this.Fn(e,i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1,s=Th(this.userId,i),a=IDBKeyRange.lowerBound(s);let o=new we(te);return _a(e).J({range:a},(u,c,d)=>{const[f,p,g]=u,R=Wn(p);f===this.userId&&i.isPrefixOf(R)?R.length===r&&(o=o.add(g)):d.done()}).next(()=>this.Fn(e,o))}Fn(e,n){const i=[],r=[];return n.forEach(s=>{r.push(Yi(e).get(s).next(a=>{if(a===null)throw Q();$(a.userId===this.userId),i.push(ss(this.serializer,a))}))}),V.waitFor(r).next(()=>i)}removeMutationBatch(e,n){return mC(e._e,this.userId,n).next(i=>(e.addOnCommittedListener(()=>{this.Mn(n.batchId)}),V.forEach(i,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}Mn(e){delete this.Cn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return V.resolve();const i=IDBKeyRange.lowerBound(function(a){return[a]}(this.userId)),r=[];return _a(e).J({range:i},(s,a,o)=>{if(s[0]===this.userId){const u=Wn(s[1]);r.push(u)}else o.done()}).next(()=>{$(r.length===0)})})}containsKey(e,n){return pC(e,this.userId,n)}xn(e){return gC(e).get(this.userId).next(n=>n||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function pC(t,e,n){const i=Th(e,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let a=!1;return _a(t).J({range:s,H:!0},(o,u,c)=>{const[d,f,p]=o;d===e&&f===r&&(a=!0),c.done()}).next(()=>a)}function Yi(t){return Et(t,"mutations")}function _a(t){return Et(t,"documentMutations")}function gC(t){return Et(t,"mutationQueues")}/**
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
 */class Us{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new Us(0)}static Ln(){return new Us(-1)}}/**
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
 */class AU{constructor(e,n){this.referenceDelegate=e,this.serializer=n}allocateTargetId(e){return this.Bn(e).next(n=>{const i=new Us(n.highestTargetId);return n.highestTargetId=i.next(),this.kn(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Bn(e).next(n=>Y.fromTimestamp(new Le(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Bn(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,i){return this.Bn(e).next(r=>(r.highestListenSequenceNumber=n,i&&(r.lastRemoteSnapshotVersion=i.toTimestamp()),n>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=n),this.kn(e,r)))}addTargetData(e,n){return this.qn(e,n).next(()=>this.Bn(e).next(i=>(i.targetCount+=1,this.Qn(n,i),this.kn(e,i))))}updateTargetData(e,n){return this.qn(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ua(e).delete(n.targetId)).next(()=>this.Bn(e)).next(i=>($(i.targetCount>0),i.targetCount-=1,this.kn(e,i)))}removeTargets(e,n,i){let r=0;const s=[];return ua(e).J((a,o)=>{const u=Nl(o);u.sequenceNumber<=n&&i.get(u.targetId)===null&&(r++,s.push(this.removeTargetData(e,u)))}).next(()=>V.waitFor(s)).next(()=>r)}forEachTarget(e,n){return ua(e).J((i,r)=>{const s=Nl(r);n(s)})}Bn(e){return Xw(e).get("targetGlobalKey").next(n=>($(n!==null),n))}kn(e,n){return Xw(e).put("targetGlobalKey",n)}qn(e,n){return ua(e).put(hC(this.serializer,n))}Qn(e,n){let i=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,i=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,i=!0),i}getTargetCount(e){return this.Bn(e).next(n=>n.targetCount)}getTargetData(e,n){const i=Vs(n),r=IDBKeyRange.bound([i,Number.NEGATIVE_INFINITY],[i,Number.POSITIVE_INFINITY]);let s=null;return ua(e).J({range:r,index:"queryTargetsIndex"},(a,o,u)=>{const c=Nl(o);tc(n,c.target)&&(s=c,u.done())}).next(()=>s)}addMatchingKeys(e,n,i){const r=[],s=ir(e);return n.forEach(a=>{const o=Ft(a.path);r.push(s.put({targetId:i,path:o})),r.push(this.referenceDelegate.addReference(e,i,a))}),V.waitFor(r)}removeMatchingKeys(e,n,i){const r=ir(e);return V.forEach(n,s=>{const a=Ft(s.path);return V.waitFor([r.delete([i,a]),this.referenceDelegate.removeReference(e,i,s)])})}removeMatchingKeysForTargetId(e,n){const i=ir(e),r=IDBKeyRange.bound([n],[n+1],!1,!0);return i.delete(r)}getMatchingKeysForTargetId(e,n){const i=IDBKeyRange.bound([n],[n+1],!1,!0),r=ir(e);let s=re();return r.J({range:i,H:!0},(a,o,u)=>{const c=Wn(a[1]),d=new G(c);s=s.add(d)}).next(()=>s)}containsKey(e,n){const i=Ft(n.path),r=IDBKeyRange.bound([i],[lR(i)],!1,!0);let s=0;return ir(e).J({index:"documentTargetsIndex",H:!0,range:r},([a,o],u,c)=>{a!==0&&(s++,c.done())}).next(()=>s>0)}ot(e,n){return ua(e).get(n).next(i=>i?Nl(i):null)}}function ua(t){return Et(t,"targets")}function Xw(t){return Et(t,"targetGlobal")}function ir(t){return Et(t,"targetDocuments")}/**
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
 */function Ww([t,e],[n,i]){const r=te(t,n);return r===0?te(e,i):r}class bU{constructor(e){this.Kn=e,this.buffer=new we(Ww),this.$n=0}Un(){return++this.$n}Wn(e){const n=[e,this.Un()];if(this.buffer.size<this.Kn)this.buffer=this.buffer.add(n);else{const i=this.buffer.last();Ww(n,i)<0&&(this.buffer=this.buffer.delete(i).add(n))}}get maxValue(){return this.buffer.last()[0]}}class SU{constructor(e,n,i){this.garbageCollector=e,this.asyncQueue=n,this.localStore=i,this.Gn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.zn(6e4)}stop(){this.Gn&&(this.Gn.cancel(),this.Gn=null)}get started(){return this.Gn!==null}zn(e){B("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.Gn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Gn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){qr(n)?B("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",n):await jr(n)}await this.zn(3e5)})}}class RU{constructor(e,n){this.jn=e,this.params=n}calculateTargetCount(e,n){return this.jn.Hn(e).next(i=>Math.floor(n/100*i))}nthSequenceNumber(e,n){if(n===0)return V.resolve(Zt.oe);const i=new bU(n);return this.jn.forEachTarget(e,r=>i.Wn(r.sequenceNumber)).next(()=>this.jn.Jn(e,r=>i.Wn(r))).next(()=>i.maxValue)}removeTargets(e,n,i){return this.jn.removeTargets(e,n,i)}removeOrphanedDocuments(e,n){return this.jn.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(B("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Yw)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(B("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Yw):this.Yn(e,n))}getCacheSize(e){return this.jn.getCacheSize(e)}Yn(e,n){let i,r,s,a,o,u,c;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(f=>(f>this.params.maximumSequenceNumbersToCollect?(B("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,a=Date.now(),this.nthSequenceNumber(e,r))).next(f=>(i=f,o=Date.now(),this.removeTargets(e,i,n))).next(f=>(s=f,u=Date.now(),this.removeOrphanedDocuments(e,i))).next(f=>(c=Date.now(),fa()<=ae.DEBUG&&B("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${r} in `+(o-a)+`ms
	Removed ${s} targets in `+(u-o)+`ms
	Removed ${f} documents in `+(c-u)+`ms
Total Duration: ${c-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:s,documentsRemoved:f})))}}function CU(t,e){return new RU(t,e)}/**
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
 */class DU{constructor(e,n){this.db=e,this.garbageCollector=CU(this,n)}Hn(e){const n=this.Zn(e);return this.db.getTargetCache().getTargetCount(e).next(i=>n.next(r=>i+r))}Zn(e){let n=0;return this.Jn(e,i=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}Jn(e,n){return this.Xn(e,(i,r)=>n(r))}addReference(e,n,i){return Wc(e,i)}removeReference(e,n,i){return Wc(e,i)}removeTargets(e,n,i){return this.db.getTargetCache().removeTargets(e,n,i)}markPotentiallyOrphaned(e,n){return Wc(e,n)}er(e,n){return function(r,s){let a=!1;return gC(r).Y(o=>pC(r,o,s).next(u=>(u&&(a=!0),V.resolve(!u)))).next(()=>a)}(e,n)}removeOrphanedDocuments(e,n){const i=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.Xn(e,(a,o)=>{if(o<=n){const u=this.er(e,a).next(c=>{if(!c)return s++,i.getEntry(e,a).next(()=>(i.removeEntry(a,Y.min()),ir(e).delete(function(f){return[0,Ft(f.path)]}(a))))});r.push(u)}}).next(()=>V.waitFor(r)).next(()=>i.apply(e)).next(()=>s)}removeTarget(e,n){const i=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,i)}updateLimboDocument(e,n){return Wc(e,n)}Xn(e,n){const i=ir(e);let r,s=Zt.oe;return i.J({index:"documentTargetsIndex"},([a,o],{path:u,sequenceNumber:c})=>{a===0?(s!==Zt.oe&&n(new G(Wn(r)),s),s=c,r=u):s=Zt.oe}).next(()=>{s!==Zt.oe&&n(new G(Wn(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Wc(t,e){return ir(t).put(function(i,r){return{targetId:0,path:Ft(i.path),sequenceNumber:r}}(e,t.currentSequenceNumber))}/**
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
 */class _C{constructor(){this.changes=new Gr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Oe.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const i=this.changes.get(n);return i!==void 0?V.resolve(i):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class NU{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,n,i){return Wr(e).put(i)}removeEntry(e,n,i){return Wr(e).delete(function(s,a){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],pd(a),o[o.length-1]]}(n,i))}updateMetadata(e,n){return this.getMetadata(e).next(i=>(i.byteSize+=n,this.tr(e,i)))}getEntry(e,n){let i=Oe.newInvalidDocument(n);return Wr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gl(n))},(r,s)=>{i=this.nr(n,s)}).next(()=>i)}rr(e,n){let i={size:0,document:Oe.newInvalidDocument(n)};return Wr(e).J({index:"documentKeyIndex",range:IDBKeyRange.only(gl(n))},(r,s)=>{i={document:this.nr(n,s),size:_d(s)}}).next(()=>i)}getEntries(e,n){let i=tn();return this.ir(e,n,(r,s)=>{const a=this.nr(r,s);i=i.insert(r,a)}).next(()=>i)}sr(e,n){let i=tn(),r=new Se(G.comparator);return this.ir(e,n,(s,a)=>{const o=this.nr(s,a);i=i.insert(s,o),r=r.insert(s,_d(a))}).next(()=>({documents:i,_r:r}))}ir(e,n,i){if(n.isEmpty())return V.resolve();let r=new we(eI);n.forEach(u=>r=r.add(u));const s=IDBKeyRange.bound(gl(r.first()),gl(r.last())),a=r.getIterator();let o=a.getNext();return Wr(e).J({index:"documentKeyIndex",range:s},(u,c,d)=>{const f=G.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;o&&eI(o,f)<0;)i(o,null),o=a.getNext();o&&o.isEqual(f)&&(i(o,c),o=a.hasNext()?a.getNext():null),o?d.$(gl(o)):d.done()}).next(()=>{for(;o;)i(o,null),o=a.hasNext()?a.getNext():null})}getDocumentsMatchingQuery(e,n,i,r,s){const a=n.path,o=[a.popLast().toArray(),a.lastSegment(),pd(i.readTime),i.documentKey.path.isEmpty()?"":i.documentKey.path.lastSegment()],u=[a.popLast().toArray(),a.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Wr(e).U(IDBKeyRange.bound(o,u,!0)).next(c=>{s==null||s.incrementDocumentReadCount(c.length);let d=tn();for(const f of c){const p=this.nr(G.fromSegments(f.prefixPath.concat(f.collectionGroup,f.documentId)),f);p.isFoundDocument()&&(ic(n,p)||r.has(p.key))&&(d=d.insert(p.key,p))}return d})}getAllFromCollectionGroup(e,n,i,r){let s=tn();const a=Zw(n,i),o=Zw(n,Tn.max());return Wr(e).J({index:"collectionGroupIndex",range:IDBKeyRange.bound(a,o,!0)},(u,c,d)=>{const f=this.nr(G.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);s=s.insert(f.key,f),s.size===r&&d.done()}).next(()=>s)}newChangeBuffer(e){return new OU(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return Jw(e).get("remoteDocumentGlobalKey").next(n=>($(!!n),n))}tr(e,n){return Jw(e).put("remoteDocumentGlobalKey",n)}nr(e,n){if(n){const i=pU(this.serializer,n);if(!(i.isNoDocument()&&i.version.isEqual(Y.min())))return i}return Oe.newInvalidDocument(e)}}function yC(t){return new NU(t)}class OU extends _C{constructor(e,n){super(),this.ar=e,this.trackRemovals=n,this.ur=new Gr(i=>i.toString(),(i,r)=>i.isEqual(r))}applyChanges(e){const n=[];let i=0,r=new we((s,a)=>te(s.canonicalString(),a.canonicalString()));return this.changes.forEach((s,a)=>{const o=this.ur.get(s);if(n.push(this.ar.removeEntry(e,s,o.readTime)),a.isValidDocument()){const u=Uw(this.ar.serializer,a);r=r.add(s.path.popLast());const c=_d(u);i+=c-o.size,n.push(this.ar.addEntry(e,s,u))}else if(i-=o.size,this.trackRemovals){const u=Uw(this.ar.serializer,a.convertToNoDocument(Y.min()));n.push(this.ar.addEntry(e,s,u))}}),r.forEach(s=>{n.push(this.ar.indexManager.addToCollectionParentIndex(e,s))}),n.push(this.ar.updateMetadata(e,i)),V.waitFor(n)}getFromCache(e,n){return this.ar.rr(e,n).next(i=>(this.ur.set(n,{size:i.size,readTime:i.document.readTime}),i.document))}getAllFromCache(e,n){return this.ar.sr(e,n).next(({documents:i,_r:r})=>(r.forEach((s,a)=>{this.ur.set(s,{size:a,readTime:i.get(s).readTime})}),i))}}function Jw(t){return Et(t,"remoteDocumentGlobal")}function Wr(t){return Et(t,"remoteDocumentsV14")}function gl(t){const e=t.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Zw(t,e){const n=e.documentKey.path.toArray();return[t,pd(e.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function eI(t,e){const n=t.path.toArray(),i=e.path.toArray();let r=0;for(let s=0;s<n.length-2&&s<i.length-2;++s)if(r=te(n[s],i[s]),r)return r;return r=te(n.length,i.length),r||(r=te(n[n.length-2],i[i.length-2]),r||te(n[n.length-1],i[i.length-1]))}/**
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
 */class PU{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class vC{constructor(e,n,i,r){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=i,this.indexManager=r}getDocument(e,n){let i=null;return this.documentOverlayCache.getOverlay(e,n).next(r=>(i=r,this.remoteDocumentCache.getEntry(e,n))).next(r=>(i!==null&&Wl(i.mutation,r,en.empty(),Le.now()),r))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.getLocalViewOfDocuments(e,i,re()).next(()=>i))}getLocalViewOfDocuments(e,n,i=re()){const r=Jn();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,i).next(s=>{let a=Cl();return s.forEach((o,u)=>{a=a.insert(o,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,n){const i=Jn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,re()))}populateOverlays(e,n,i){const r=[];return i.forEach(s=>{n.has(s)||r.push(s)}),this.documentOverlayCache.getOverlays(e,r).next(s=>{s.forEach((a,o)=>{n.set(a,o)})})}computeViews(e,n,i,r){let s=tn();const a=Xl(),o=function(){return Xl()}();return n.forEach((u,c)=>{const d=i.get(c.key);r.has(c.key)&&(d===void 0||d.mutation instanceof Fi)?s=s.insert(c.key,c):d!==void 0?(a.set(c.key,d.mutation.getFieldMask()),Wl(d.mutation,c,d.mutation.getFieldMask(),Le.now())):a.set(c.key,en.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((c,d)=>a.set(c,d)),n.forEach((c,d)=>{var f;return o.set(c,new PU(d,(f=a.get(c))!==null&&f!==void 0?f:null))}),o))}recalculateAndSaveOverlays(e,n){const i=Xl();let r=new Se((a,o)=>a-o),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(a=>{for(const o of a)o.keys().forEach(u=>{const c=n.get(u);if(c===null)return;let d=i.get(u)||en.empty();d=o.applyToLocalView(c,d),i.set(u,d);const f=(r.get(o.batchId)||re()).add(u);r=r.insert(o.batchId,f)})}).next(()=>{const a=[],o=r.getReverseIterator();for(;o.hasNext();){const u=o.getNext(),c=u.key,d=u.value,f=LR();d.forEach(p=>{if(!s.has(p)){const g=HR(n.get(p),i.get(p));g!==null&&f.set(p,g),s=s.add(p)}}),a.push(this.documentOverlayCache.saveOverlays(e,c,f))}return V.waitFor(a)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,n,i,r){return function(a){return G.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):cy(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,i,r):this.getDocumentsMatchingCollectionQuery(e,n,i,r)}getNextDocuments(e,n,i,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,i,r).next(s=>{const a=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,i.largestBatchId,r-s.size):V.resolve(Jn());let o=-1,u=s;return a.next(c=>V.forEach(c,(d,f)=>(o<f.largestBatchId&&(o=f.largestBatchId),s.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(p=>{u=u.insert(d,p)}))).next(()=>this.populateOverlays(e,c,s)).next(()=>this.computeViews(e,u,c,re())).next(d=>({batchId:o,changes:kR(d)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new G(n)).next(i=>{let r=Cl();return i.isFoundDocument()&&(r=r.insert(i.key,i)),r})}getDocumentsMatchingCollectionGroupQuery(e,n,i,r){const s=n.collectionGroup;let a=Cl();return this.indexManager.getCollectionParents(e,s).next(o=>V.forEach(o,u=>{const c=function(f,p){return new Bi(p,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,i,r).next(d=>{d.forEach((f,p)=>{a=a.insert(f,p)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,i,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,i.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,i,s,r))).next(a=>{s.forEach((u,c)=>{const d=c.getKey();a.get(d)===null&&(a=a.insert(d,Oe.newInvalidDocument(d)))});let o=Cl();return a.forEach((u,c)=>{const d=s.get(u);d!==void 0&&Wl(d.mutation,c,en.empty(),Le.now()),ic(n,c)&&(o=o.insert(u,c))}),o})}}/**
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
 */class VU{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return V.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(r){return{id:r.id,version:r.version,createTime:Ze(r.createTime)}}(n)),V.resolve()}getNamedQuery(e,n){return V.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(r){return{name:r.name,query:yy(r.bundledQuery),readTime:Ze(r.readTime)}}(n)),V.resolve()}}/**
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
 */class xU{constructor(){this.overlays=new Se(G.comparator),this.hr=new Map}getOverlay(e,n){return V.resolve(this.overlays.get(n))}getOverlays(e,n){const i=Jn();return V.forEach(n,r=>this.getOverlay(e,r).next(s=>{s!==null&&i.set(r,s)})).next(()=>i)}saveOverlays(e,n,i){return i.forEach((r,s)=>{this.ht(e,n,s)}),V.resolve()}removeOverlaysForBatchId(e,n,i){const r=this.hr.get(i);return r!==void 0&&(r.forEach(s=>this.overlays=this.overlays.remove(s)),this.hr.delete(i)),V.resolve()}getOverlaysForCollection(e,n,i){const r=Jn(),s=n.length+1,a=new G(n.child("")),o=this.overlays.getIteratorFrom(a);for(;o.hasNext();){const u=o.getNext().value,c=u.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===s&&u.largestBatchId>i&&r.set(u.getKey(),u)}return V.resolve(r)}getOverlaysForCollectionGroup(e,n,i,r){let s=new Se((c,d)=>c-d);const a=this.overlays.getIterator();for(;a.hasNext();){const c=a.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>i){let d=s.get(c.largestBatchId);d===null&&(d=Jn(),s=s.insert(c.largestBatchId,d)),d.set(c.getKey(),c)}}const o=Jn(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,d)=>o.set(c,d)),!(o.size()>=r)););return V.resolve(o)}ht(e,n,i){const r=this.overlays.get(i.key);if(r!==null){const a=this.hr.get(r.largestBatchId).delete(i.key);this.hr.set(r.largestBatchId,a)}this.overlays=this.overlays.insert(i.key,new py(n,i));let s=this.hr.get(n);s===void 0&&(s=re(),this.hr.set(n,s)),this.hr.set(n,s.add(i.key))}}/**
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
 */class Ty{constructor(){this.Pr=new we(dt.Ir),this.Tr=new we(dt.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const i=new dt(e,n);this.Pr=this.Pr.add(i),this.Tr=this.Tr.add(i)}dr(e,n){e.forEach(i=>this.addReference(i,n))}removeReference(e,n){this.Ar(new dt(e,n))}Rr(e,n){e.forEach(i=>this.removeReference(i,n))}Vr(e){const n=new G(new le([])),i=new dt(n,e),r=new dt(n,e+1),s=[];return this.Tr.forEachInRange([i,r],a=>{this.Ar(a),s.push(a.key)}),s}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new G(new le([])),i=new dt(n,e),r=new dt(n,e+1);let s=re();return this.Tr.forEachInRange([i,r],a=>{s=s.add(a.key)}),s}containsKey(e){const n=new dt(e,0),i=this.Pr.firstAfterOrEqual(n);return i!==null&&e.isEqual(i.key)}}class dt{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return G.comparator(e.key,n.key)||te(e.pr,n.pr)}static Er(e,n){return te(e.pr,n.pr)||G.comparator(e.key,n.key)}}/**
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
 */class MU{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new we(dt.Ir)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,i,r){const s=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fy(s,n,i,r);this.mutationQueue.push(a);for(const o of r)this.wr=this.wr.add(new dt(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,n){return V.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const i=n+1,r=this.br(i),s=r<0?0:r;return V.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const i=new dt(n,0),r=new dt(n,Number.POSITIVE_INFINITY),s=[];return this.wr.forEachInRange([i,r],a=>{const o=this.Sr(a.pr);s.push(o)}),V.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let i=new we(te);return n.forEach(r=>{const s=new dt(r,0),a=new dt(r,Number.POSITIVE_INFINITY);this.wr.forEachInRange([s,a],o=>{i=i.add(o.pr)})}),V.resolve(this.Dr(i))}getAllMutationBatchesAffectingQuery(e,n){const i=n.path,r=i.length+1;let s=i;G.isDocumentKey(s)||(s=s.child(""));const a=new dt(new G(s),0);let o=new we(te);return this.wr.forEachWhile(u=>{const c=u.key.path;return!!i.isPrefixOf(c)&&(c.length===r&&(o=o.add(u.pr)),!0)},a),V.resolve(this.Dr(o))}Dr(e){const n=[];return e.forEach(i=>{const r=this.Sr(i);r!==null&&n.push(r)}),n}removeMutationBatch(e,n){$(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let i=this.wr;return V.forEach(n.mutations,r=>{const s=new dt(r.key,n.batchId);return i=i.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.wr=i})}Mn(e){}containsKey(e,n){const i=new dt(n,0),r=this.wr.firstAfterOrEqual(i);return V.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class kU{constructor(e){this.vr=e,this.docs=function(){return new Se(G.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const i=n.key,r=this.docs.get(i),s=r?r.size:0,a=this.vr(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a}),this.size+=a-s,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const i=this.docs.get(n);return V.resolve(i?i.document.mutableCopy():Oe.newInvalidDocument(n))}getEntries(e,n){let i=tn();return n.forEach(r=>{const s=this.docs.get(r);i=i.insert(r,s?s.document.mutableCopy():Oe.newInvalidDocument(r))}),V.resolve(i)}getDocumentsMatchingQuery(e,n,i,r){let s=tn();const a=n.path,o=new G(a.child("")),u=this.docs.getIteratorFrom(o);for(;u.hasNext();){const{key:c,value:{document:d}}=u.getNext();if(!a.isPrefixOf(c.path))break;c.path.length>a.length+1||ay(cR(d),i)<=0||(r.has(d.key)||ic(n,d))&&(s=s.insert(d.key,d.mutableCopy()))}return V.resolve(s)}getAllFromCollectionGroup(e,n,i,r){Q()}Fr(e,n){return V.forEach(this.docs,i=>n(i))}newChangeBuffer(e){return new LU(this)}getSize(e){return V.resolve(this.size)}}class LU extends _C{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((i,r)=>{r.isValidDocument()?n.push(this.ar.addEntry(e,r)):this.ar.removeEntry(i)}),V.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class UU{constructor(e){this.persistence=e,this.Mr=new Gr(n=>Vs(n),tc),this.lastRemoteSnapshotVersion=Y.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Ty,this.targetCount=0,this.Lr=Us.Nn()}forEachTarget(e,n){return this.Mr.forEach((i,r)=>n(r)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,n,i){return i&&(this.lastRemoteSnapshotVersion=i),n>this.Or&&(this.Or=n),V.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new Us(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,V.resolve()}updateTargetData(e,n){return this.qn(n),V.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,n,i){let r=0;const s=[];return this.Mr.forEach((a,o)=>{o.sequenceNumber<=n&&i.get(o.targetId)===null&&(this.Mr.delete(a),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),V.waitFor(s).next(()=>r)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,n){const i=this.Mr.get(n)||null;return V.resolve(i)}addMatchingKeys(e,n,i){return this.Nr.dr(n,i),V.resolve()}removeMatchingKeys(e,n,i){this.Nr.Rr(n,i);const r=this.persistence.referenceDelegate,s=[];return r&&n.forEach(a=>{s.push(r.markPotentiallyOrphaned(e,a))}),V.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),V.resolve()}getMatchingKeysForTargetId(e,n){const i=this.Nr.gr(n);return V.resolve(i)}containsKey(e,n){return V.resolve(this.Nr.containsKey(n))}}/**
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
 */class EC{constructor(e,n){this.Br={},this.overlays={},this.kr=new Zt(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new UU(this),this.indexManager=new wU,this.remoteDocumentCache=function(r){return new kU(r)}(i=>this.referenceDelegate.Kr(i)),this.serializer=new cC(n),this.$r=new VU(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new xU,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let i=this.Br[e.toKey()];return i||(i=new MU(n,this.referenceDelegate),this.Br[e.toKey()]=i),i}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,i){B("MemoryPersistence","Starting transaction:",e);const r=new zU(this.kr.next());return this.referenceDelegate.Ur(),i(r).next(s=>this.referenceDelegate.Wr(r).next(()=>s)).toPromise().then(s=>(r.raiseOnCommittedEvent(),s))}Gr(e,n){return V.or(Object.values(this.Br).map(i=>()=>i.containsKey(e,n)))}}class zU extends dR{constructor(e){super(),this.currentSequenceNumber=e}}class uf{constructor(e){this.persistence=e,this.zr=new Ty,this.jr=null}static Hr(e){return new uf(e)}get Jr(){if(this.jr)return this.jr;throw Q()}addReference(e,n,i){return this.zr.addReference(i,n),this.Jr.delete(i.toString()),V.resolve()}removeReference(e,n,i){return this.zr.removeReference(i,n),this.Jr.add(i.toString()),V.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),V.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(r=>this.Jr.add(r.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,n.targetId).next(r=>{r.forEach(s=>this.Jr.add(s.toString()))}).next(()=>i.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.Jr,i=>{const r=G.fromPath(i);return this.Yr(e,r).next(s=>{s||n.removeEntry(r,Y.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(i=>{i?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return V.or([()=>V.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class BU{constructor(e){this.serializer=e}O(e,n,i,r){const s=new nf("createOrUpgrade",n);i<1&&r>=1&&(function(u){u.createObjectStore("owner")}(e),function(u){u.createObjectStore("mutationQueues",{keyPath:"userId"}),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pw,{unique:!0}),u.createObjectStore("documentMutations")}(e),tI(e),function(u){u.createObjectStore("remoteDocuments")}(e));let a=V.resolve();return i<3&&r>=3&&(i!==0&&(function(u){u.deleteObjectStore("targetDocuments"),u.deleteObjectStore("targets"),u.deleteObjectStore("targetGlobal")}(e),tI(e)),a=a.next(()=>function(u){const c=u.store("targetGlobal"),d={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Y.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",d)}(s))),i<4&&r>=4&&(i!==0&&(a=a.next(()=>function(u,c){return c.store("mutations").U().next(d=>{u.deleteObjectStore("mutations"),u.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",pw,{unique:!0});const f=c.store("mutations"),p=d.map(g=>f.put(g));return V.waitFor(p)})}(e,s))),a=a.next(()=>{(function(u){u.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),i<5&&r>=5&&(a=a.next(()=>this.Xr(s))),i<6&&r>=6&&(a=a.next(()=>(function(u){u.createObjectStore("remoteDocumentGlobal")}(e),this.ei(s)))),i<7&&r>=7&&(a=a.next(()=>this.ti(s))),i<8&&r>=8&&(a=a.next(()=>this.ni(e,s))),i<9&&r>=9&&(a=a.next(()=>{(function(u){u.objectStoreNames.contains("remoteDocumentChanges")&&u.deleteObjectStore("remoteDocumentChanges")})(e)})),i<10&&r>=10&&(a=a.next(()=>this.ri(s))),i<11&&r>=11&&(a=a.next(()=>{(function(u){u.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(u){u.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),i<12&&r>=12&&(a=a.next(()=>{(function(u){const c=u.createObjectStore("documentOverlays",{keyPath:IL});c.createIndex("collectionPathOverlayIndex",AL,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",bL,{unique:!1})})(e)})),i<13&&r>=13&&(a=a.next(()=>function(u){const c=u.createObjectStore("remoteDocumentsV14",{keyPath:dL});c.createIndex("documentKeyIndex",fL),c.createIndex("collectionGroupIndex",mL)}(e)).next(()=>this.ii(e,s)).next(()=>e.deleteObjectStore("remoteDocuments"))),i<14&&r>=14&&(a=a.next(()=>this.si(e,s))),i<15&&r>=15&&(a=a.next(()=>function(u){u.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),u.createObjectStore("indexState",{keyPath:vL}).createIndex("sequenceNumberIndex",EL,{unique:!1}),u.createObjectStore("indexEntries",{keyPath:TL}).createIndex("documentKeyIndex",wL,{unique:!1})}(e))),i<16&&r>=16&&(a=a.next(()=>{n.objectStore("indexState").clear()}).next(()=>{n.objectStore("indexEntries").clear()})),a}ei(e){let n=0;return e.store("remoteDocuments").J((i,r)=>{n+=_d(r)}).next(()=>{const i={byteSize:n};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",i)})}Xr(e){const n=e.store("mutationQueues"),i=e.store("mutations");return n.U().next(r=>V.forEach(r,s=>{const a=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return i.U("userMutationsIndex",a).next(o=>V.forEach(o,u=>{$(u.userId===s.userId);const c=ss(this.serializer,u);return mC(e,s.userId,c).next(()=>{})}))}))}ti(e){const n=e.store("targetDocuments"),i=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const s=[];return i.J((a,o)=>{const u=new le(a),c=function(f){return[0,Ft(f)]}(u);s.push(n.get(c).next(d=>d?V.resolve():(f=>n.put({targetId:0,path:Ft(f),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>V.waitFor(s))})}ni(e,n){e.createObjectStore("collectionParents",{keyPath:yL});const i=n.store("collectionParents"),r=new Ey,s=a=>{if(r.add(a)){const o=a.lastSegment(),u=a.popLast();return i.put({collectionId:o,parent:Ft(u)})}};return n.store("remoteDocuments").J({H:!0},(a,o)=>{const u=new le(a);return s(u.popLast())}).next(()=>n.store("documentMutations").J({H:!0},([a,o,u],c)=>{const d=Wn(o);return s(d.popLast())}))}ri(e){const n=e.store("targets");return n.J((i,r)=>{const s=Nl(r),a=hC(this.serializer,s);return n.put(a)})}ii(e,n){const i=n.store("remoteDocuments"),r=[];return i.J((s,a)=>{const o=n.store("remoteDocumentsV14"),u=function(f){return f.document?new G(le.fromString(f.document.name).popFirst(5)):f.noDocument?G.fromSegments(f.noDocument.path):f.unknownDocument?G.fromSegments(f.unknownDocument.path):Q()}(a).path.toArray(),c={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:a.readTime||[0,0],unknownDocument:a.unknownDocument,noDocument:a.noDocument,document:a.document,hasCommittedMutations:!!a.hasCommittedMutations};r.push(o.put(c))}).next(()=>V.waitFor(r))}si(e,n){const i=n.store("mutations"),r=yC(this.serializer),s=new EC(uf.Hr,this.serializer.ct);return i.U().next(a=>{const o=new Map;return a.forEach(u=>{var c;let d=(c=o.get(u.userId))!==null&&c!==void 0?c:re();ss(this.serializer,u).keys().forEach(f=>d=d.add(f)),o.set(u.userId,d)}),V.forEach(o,(u,c)=>{const d=new mt(c),f=of.lt(this.serializer,d),p=s.getIndexManager(d),g=lf.lt(d,this.serializer,p,s.referenceDelegate);return new vC(r,g,f,p).recalculateAndSaveOverlaysForDocumentKeys(new ng(n,Zt.oe),u).next()})})}}function tI(t){t.createObjectStore("targetDocuments",{keyPath:gL}).createIndex("documentTargetsIndex",_L,{unique:!0}),t.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",pL,{unique:!0}),t.createObjectStore("targetGlobal")}const jm="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class wy{constructor(e,n,i,r,s,a,o,u,c,d,f=16){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=i,this.oi=s,this.window=a,this.document=o,this._i=c,this.ai=d,this.ui=f,this.kr=null,this.qr=!1,this.isPrimary=!1,this.networkEnabled=!0,this.ci=null,this.inForeground=!1,this.li=null,this.hi=null,this.Pi=Number.NEGATIVE_INFINITY,this.Ii=p=>Promise.resolve(),!wy.D())throw new z(M.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new DU(this,r),this.Ti=n+"main",this.serializer=new cC(u),this.Ei=new ei(this.Ti,this.ui,new BU(this.serializer)),this.Qr=new AU(this.referenceDelegate,this.serializer),this.remoteDocumentCache=yC(this.serializer),this.$r=new gU,this.window&&this.window.localStorage?this.di=this.window.localStorage:(this.di=null,d===!1&&We("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ai().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,jm);return this.Ri(),this.Vi(),this.mi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Qr.getHighestSequenceNumber(e))}).then(e=>{this.kr=new Zt(e,this._i)}).then(()=>{this.qr=!0}).catch(e=>(this.Ei&&this.Ei.close(),Promise.reject(e)))}fi(e){return this.Ii=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.Ei.L(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.oi.enqueueAndForget(async()=>{this.started&&await this.Ai()}))}Ai(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Jc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.gi(e).next(n=>{n||(this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)))})}).next(()=>this.pi(e)).next(n=>this.isPrimary&&!n?this.yi(e).next(()=>!1):!!n&&this.wi(e).next(()=>!0))).catch(e=>{if(qr(e))return B("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return B("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.oi.enqueueRetryable(()=>this.Ii(e)),this.isPrimary=e})}gi(e){return _l(e).get("owner").next(n=>V.resolve(this.Si(n)))}bi(e){return Jc(e).delete(this.clientId)}async Di(){if(this.isPrimary&&!this.Ci(this.Pi,18e5)){this.Pi=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const i=Et(n,"clientMetadata");return i.U().next(r=>{const s=this.vi(r,18e5),a=r.filter(o=>s.indexOf(o)===-1);return V.forEach(a,o=>i.delete(o.clientId)).next(()=>a)})}).catch(()=>[]);if(this.di)for(const n of e)this.di.removeItem(this.Fi(n.clientId))}}mi(){this.hi=this.oi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ai().then(()=>this.Di()).then(()=>this.mi()))}Si(e){return!!e&&e.ownerId===this.clientId}pi(e){return this.ai?V.resolve(!0):_l(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)){if(this.Si(n)&&this.networkEnabled)return!0;if(!this.Si(n)){if(!n.allowTabSynchronization)throw new z(M.FAILED_PRECONDITION,jm);return!1}}return!(!this.networkEnabled||!this.inForeground)||Jc(e).U().next(i=>this.vi(i,5e3).find(r=>{if(this.clientId!==r.clientId){const s=!this.networkEnabled&&r.networkEnabled,a=!this.inForeground&&r.inForeground,o=this.networkEnabled===r.networkEnabled;if(s||a&&o)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&B("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.qr=!1,this.xi(),this.hi&&(this.hi.cancel(),this.hi=null),this.Oi(),this.Ni(),await this.Ei.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const n=new ng(e,Zt.oe);return this.yi(n).next(()=>this.bi(n))}),this.Ei.close(),this.Li()}vi(e,n){return e.filter(i=>this.Ci(i.updateTimeMs,n)&&!this.Mi(i.clientId))}Bi(){return this.runTransaction("getActiveClients","readonly",e=>Jc(e).U().next(n=>this.vi(n,18e5).map(i=>i.clientId)))}get started(){return this.qr}getMutationQueue(e,n){return lf.lt(e,this.serializer,n,this.referenceDelegate)}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new IU(e,this.serializer.ct.databaseId)}getDocumentOverlayCache(e){return of.lt(this.serializer,e)}getBundleCache(){return this.$r}runTransaction(e,n,i){B("IndexedDbPersistence","Starting transaction:",e);const r=n==="readonly"?"readonly":"readwrite",s=function(u){return u===16?RL:u===15?vR:u===14?yR:u===13?_R:u===12?SL:u===11?gR:void Q()}(this.ui);let a;return this.Ei.runTransaction(e,r,s,o=>(a=new ng(o,this.kr?this.kr.next():Zt.oe),n==="readwrite-primary"?this.gi(a).next(u=>!!u||this.pi(a)).next(u=>{if(!u)throw We(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.oi.enqueueRetryable(()=>this.Ii(!1)),new z(M.FAILED_PRECONDITION,hR);return i(a)}).next(u=>this.wi(a).next(()=>u)):this.ki(a).next(()=>i(a)))).then(o=>(a.raiseOnCommittedEvent(),o))}ki(e){return _l(e).get("owner").next(n=>{if(n!==null&&this.Ci(n.leaseTimestampMs,5e3)&&!this.Mi(n.ownerId)&&!this.Si(n)&&!(this.ai||this.allowTabSynchronization&&n.allowTabSynchronization))throw new z(M.FAILED_PRECONDITION,jm)})}wi(e){const n={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return _l(e).put("owner",n)}static D(){return ei.D()}yi(e){const n=_l(e);return n.get("owner").next(i=>this.Si(i)?(B("IndexedDbPersistence","Releasing primary lease."),n.delete("owner")):V.resolve())}Ci(e,n){const i=Date.now();return!(e<i-n)&&(!(e>i)||(We(`Detected an update time that is in the future: ${e} > ${i}`),!1))}Ri(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.li=()=>{this.oi.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ai()))},this.document.addEventListener("visibilitychange",this.li),this.inForeground=this.document.visibilityState==="visible")}Oi(){this.li&&(this.document.removeEventListener("visibilitychange",this.li),this.li=null)}Vi(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.ci=()=>{this.xi();const n=/(?:Version|Mobile)\/1[456]/;jS()&&(navigator.appVersion.match(n)||navigator.userAgent.match(n))&&this.oi.enterRestrictedMode(!0),this.oi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.ci))}Ni(){this.ci&&(this.window.removeEventListener("pagehide",this.ci),this.ci=null)}Mi(e){var n;try{const i=((n=this.di)===null||n===void 0?void 0:n.getItem(this.Fi(e)))!==null;return B("IndexedDbPersistence",`Client '${e}' ${i?"is":"is not"} zombied in LocalStorage`),i}catch(i){return We("IndexedDbPersistence","Failed to get zombied client id.",i),!1}}xi(){if(this.di)try{this.di.setItem(this.Fi(this.clientId),String(Date.now()))}catch(e){We("Failed to set zombie client id.",e)}}Li(){if(this.di)try{this.di.removeItem(this.Fi(this.clientId))}catch{}}Fi(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function _l(t){return Et(t,"owner")}function Jc(t){return Et(t,"clientMetadata")}function Iy(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
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
 */class Ay{constructor(e,n,i,r){this.targetId=e,this.fromCache=n,this.qi=i,this.Qi=r}static Ki(e,n){let i=re(),r=re();for(const s of n.docChanges)switch(s.type){case 0:i=i.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Ay(e,n.fromCache,i,r)}}/**
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
 */class FU{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class TC{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return jS()?8:fR(Ue())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,i,r){const s={result:null};return this.ji(e,n).next(a=>{s.result=a}).next(()=>{if(!s.result)return this.Hi(e,n,r,i).next(a=>{s.result=a})}).next(()=>{if(s.result)return;const a=new FU;return this.Ji(e,n,a).next(o=>{if(s.result=o,this.Ui)return this.Yi(e,n,a,o.size)})}).next(()=>s.result)}Yi(e,n,i,r){return i.documentReadCount<this.Wi?(fa()<=ae.DEBUG&&B("QueryEngine","SDK will not create cache indexes for query:",ma(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),V.resolve()):(fa()<=ae.DEBUG&&B("QueryEngine","Query:",ma(n),"scans",i.documentReadCount,"local documents and returns",r,"documents as results."),i.documentReadCount>this.Gi*r?(fa()<=ae.DEBUG&&B("QueryEngine","The SDK decides to create cache indexes for query:",ma(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,jt(n))):V.resolve())}ji(e,n){if(Rw(n))return V.resolve(null);let i=jt(n);return this.indexManager.getIndexType(e,i).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=md(n,null,"F"),i=jt(n)),this.indexManager.getDocumentsMatchingTarget(e,i).next(s=>{const a=re(...s);return this.zi.getDocuments(e,a).next(o=>this.indexManager.getMinOffset(e,i).next(u=>{const c=this.Zi(n,o);return this.Xi(n,c,a,u.readTime)?this.ji(e,md(n,null,"F")):this.es(e,c,n,u)}))})))}Hi(e,n,i,r){return Rw(n)||r.isEqual(Y.min())?V.resolve(null):this.zi.getDocuments(e,i).next(s=>{const a=this.Zi(n,s);return this.Xi(n,a,i,r)?V.resolve(null):(fa()<=ae.DEBUG&&B("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),ma(n)),this.es(e,a,n,uR(r,-1)).next(o=>o))})}Zi(e,n){let i=new we(xR(e));return n.forEach((r,s)=>{ic(e,s)&&(i=i.add(s))}),i}Xi(e,n,i,r){if(e.limit===null)return!1;if(i.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}Ji(e,n,i){return fa()<=ae.DEBUG&&B("QueryEngine","Using full collection scan to execute query:",ma(n)),this.zi.getDocumentsMatchingQuery(e,n,Tn.min(),i)}es(e,n,i,r){return this.zi.getDocumentsMatchingQuery(e,i,r).next(s=>(n.forEach(a=>{s=s.insert(a.key,a)}),s))}}/**
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
 */class jU{constructor(e,n,i,r){this.persistence=e,this.ts=n,this.serializer=r,this.ns=new Se(te),this.rs=new Gr(s=>Vs(s),tc),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(i)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new vC(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function wC(t,e,n,i){return new jU(t,e,n,i)}async function IC(t,e){const n=H(t);return await n.persistence.runTransaction("Handle user change","readonly",i=>{let r;return n.mutationQueue.getAllMutationBatches(i).next(s=>(r=s,n._s(e),n.mutationQueue.getAllMutationBatches(i))).next(s=>{const a=[],o=[];let u=re();for(const c of r){a.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}for(const c of s){o.push(c.batchId);for(const d of c.mutations)u=u.add(d.key)}return n.localDocuments.getDocuments(i,u).next(c=>({us:c,removedBatchIds:a,addedBatchIds:o}))})})}function qU(t,e){const n=H(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const r=e.batch.keys(),s=n.os.newChangeBuffer({trackRemovals:!0});return function(o,u,c,d){const f=c.batch,p=f.keys();let g=V.resolve();return p.forEach(R=>{g=g.next(()=>d.getEntry(u,R)).next(N=>{const x=c.docVersions.get(R);$(x!==null),N.version.compareTo(x)<0&&(f.applyToRemoteDocument(N,c),N.isValidDocument()&&(N.setReadTime(c.commitVersion),d.addEntry(N)))})}),g.next(()=>o.mutationQueue.removeMutationBatch(u,f))}(n,i,e,s).next(()=>s.apply(i)).next(()=>n.mutationQueue.performConsistencyCheck(i)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(i,r,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(o){let u=re();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(u=u.add(o.batch.mutations[c].key));return u}(e))).next(()=>n.localDocuments.getDocuments(i,r))})}function AC(t){const e=H(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function GU(t,e){const n=H(t),i=e.snapshotVersion;let r=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const a=n.os.newChangeBuffer({trackRemovals:!0});r=n.ns;const o=[];e.targetChanges.forEach((d,f)=>{const p=r.get(f);if(!p)return;o.push(n.Qr.removeMatchingKeys(s,d.removedDocuments,f).next(()=>n.Qr.addMatchingKeys(s,d.addedDocuments,f)));let g=p.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(f)!==null?g=g.withResumeToken(ht.EMPTY_BYTE_STRING,Y.min()).withLastLimboFreeSnapshotVersion(Y.min()):d.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(d.resumeToken,i)),r=r.insert(f,g),function(N,x,I){return N.resumeToken.approximateByteSize()===0||x.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(p,g,d)&&o.push(n.Qr.updateTargetData(s,g))});let u=tn(),c=re();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(s,d))}),o.push(bC(s,a,e.documentUpdates).next(d=>{u=d.cs,c=d.ls})),!i.isEqual(Y.min())){const d=n.Qr.getLastRemoteSnapshotVersion(s).next(f=>n.Qr.setTargetsMetadata(s,s.currentSequenceNumber,i));o.push(d)}return V.waitFor(o).next(()=>a.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,c)).next(()=>u)}).then(s=>(n.ns=r,s))}function bC(t,e,n){let i=re(),r=re();return n.forEach(s=>i=i.add(s)),e.getEntries(t,i).next(s=>{let a=tn();return n.forEach((o,u)=>{const c=s.get(o);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(o)),u.isNoDocument()&&u.version.isEqual(Y.min())?(e.removeEntry(o,u.readTime),a=a.insert(o,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),a=a.insert(o,u)):B("LocalStore","Ignoring outdated watch update for ",o,". Current version:",c.version," Watch version:",u.version)}),{cs:a,ls:r}})}function HU(t,e){const n=H(t);return n.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function mo(t,e){const n=H(t);return n.persistence.runTransaction("Allocate target","readwrite",i=>{let r;return n.Qr.getTargetData(i,e).next(s=>s?(r=s,V.resolve(r)):n.Qr.allocateTargetId(i).next(a=>(r=new Ii(e,a,"TargetPurposeListen",i.currentSequenceNumber),n.Qr.addTargetData(i,r).next(()=>r))))}).then(i=>{const r=n.ns.get(i.targetId);return(r===null||i.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.ns=n.ns.insert(i.targetId,i),n.rs.set(e,i.targetId)),i})}async function po(t,e,n){const i=H(t),r=i.ns.get(e),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,a=>i.persistence.referenceDelegate.removeTarget(a,r))}catch(a){if(!qr(a))throw a;B("LocalStore",`Failed to update sequence numbers for target ${e}: ${a}`)}i.ns=i.ns.remove(e),i.rs.delete(r.target)}function yd(t,e,n){const i=H(t);let r=Y.min(),s=re();return i.persistence.runTransaction("Execute query","readwrite",a=>function(u,c,d){const f=H(u),p=f.rs.get(d);return p!==void 0?V.resolve(f.ns.get(p)):f.Qr.getTargetData(c,d)}(i,a,jt(e)).next(o=>{if(o)return r=o.lastLimboFreeSnapshotVersion,i.Qr.getMatchingKeysForTargetId(a,o.targetId).next(u=>{s=u})}).next(()=>i.ts.getDocumentsMatchingQuery(a,e,n?r:Y.min(),n?s:re())).next(o=>(CC(i,VR(e),o),{documents:o,hs:s})))}function SC(t,e){const n=H(t),i=H(n.Qr),r=n.ns.get(e);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",s=>i.ot(s,e).next(a=>a?a.target:null))}function RC(t,e){const n=H(t),i=n.ss.get(e)||Y.min();return n.persistence.runTransaction("Get new document changes","readonly",r=>n.os.getAllFromCollectionGroup(r,e,uR(i,-1),Number.MAX_SAFE_INTEGER)).then(r=>(CC(n,e,r),r))}function CC(t,e,n){let i=t.ss.get(e)||Y.min();n.forEach((r,s)=>{s.readTime.compareTo(i)>0&&(i=s.readTime)}),t.ss.set(e,i)}async function KU(t,e,n,i){const r=H(t);let s=re(),a=tn();for(const c of n){const d=e.Ps(c.metadata.name);c.document&&(s=s.add(d));const f=e.Is(c);f.setReadTime(e.Ts(c.metadata.readTime)),a=a.insert(d,f)}const o=r.os.newChangeBuffer({trackRemovals:!0}),u=await mo(r,function(d){return jt(ko(le.fromString(`__bundle__/docs/${d}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",c=>bC(c,o,a).next(d=>(o.apply(c),d)).next(d=>r.Qr.removeMatchingKeysForTargetId(c,u.targetId).next(()=>r.Qr.addMatchingKeys(c,s,u.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,d.cs,d.ls)).next(()=>d.cs)))}async function QU(t,e,n=re()){const i=await mo(t,jt(yy(e.bundledQuery))),r=H(t);return r.persistence.runTransaction("Save named query","readwrite",s=>{const a=Ze(e.readTime);if(i.snapshotVersion.compareTo(a)>=0)return r.$r.saveNamedQuery(s,e);const o=i.withResumeToken(ht.EMPTY_BYTE_STRING,a);return r.ns=r.ns.insert(o.targetId,o),r.Qr.updateTargetData(s,o).next(()=>r.Qr.removeMatchingKeysForTargetId(s,i.targetId)).next(()=>r.Qr.addMatchingKeys(s,n,i.targetId)).next(()=>r.$r.saveNamedQuery(s,e))})}function nI(t,e){return`firestore_clients_${t}_${e}`}function iI(t,e,n){let i=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(i+=`_${e.uid}`),i}function qm(t,e){return`firestore_targets_${t}_${e}`}class vd{constructor(e,n,i,r){this.user=e,this.batchId=n,this.state=i,this.error=r}static Es(e,n,i){const r=JSON.parse(i);let s,a=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return a&&r.error&&(a=typeof r.error.message=="string"&&typeof r.error.code=="string",a&&(s=new z(r.error.code,r.error.message))),a?new vd(e,n,r.state,s):(We("SharedClientState",`Failed to parse mutation state for ID '${n}': ${i}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Jl{constructor(e,n,i){this.targetId=e,this.state=n,this.error=i}static Es(e,n){const i=JSON.parse(n);let r,s=typeof i=="object"&&["not-current","current","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return s&&i.error&&(s=typeof i.error.message=="string"&&typeof i.error.code=="string",s&&(r=new z(i.error.code,i.error.message))),s?new Jl(e,i.state,r):(We("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}ds(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ed{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Es(e,n){const i=JSON.parse(n);let r=typeof i=="object"&&i.activeTargetIds instanceof Array,s=hy();for(let a=0;r&&a<i.activeTargetIds.length;++a)r=mR(i.activeTargetIds[a]),s=s.add(i.activeTargetIds[a]);return r?new Ed(e,s):(We("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class by{constructor(e,n){this.clientId=e,this.onlineState=n}static Es(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new by(n.clientId,n.onlineState):(We("SharedClientState",`Failed to parse online state: ${e}`),null)}}class gg{constructor(){this.activeTargetIds=hy()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Gm{constructor(e,n,i,r,s){this.window=e,this.oi=n,this.persistenceKey=i,this.Vs=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.fs=this.gs.bind(this),this.ps=new Se(te),this.started=!1,this.ys=[];const a=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.ws=nI(this.persistenceKey,this.Vs),this.Ss=function(u){return`firestore_sequence_number_${u}`}(this.persistenceKey),this.ps=this.ps.insert(this.Vs,new gg),this.bs=new RegExp(`^firestore_clients_${a}_([^_]*)$`),this.Ds=new RegExp(`^firestore_mutations_${a}_(\\d+)(?:_(.*))?$`),this.Cs=new RegExp(`^firestore_targets_${a}_(\\d+)$`),this.vs=function(u){return`firestore_online_state_${u}`}(this.persistenceKey),this.Fs=function(u){return`firestore_bundle_loaded_v2_${u}`}(this.persistenceKey),this.window.addEventListener("storage",this.fs)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Bi();for(const i of e){if(i===this.Vs)continue;const r=this.getItem(nI(this.persistenceKey,i));if(r){const s=Ed.Es(i,r);s&&(this.ps=this.ps.insert(s.clientId,s))}}this.Ms();const n=this.storage.getItem(this.vs);if(n){const i=this.xs(n);i&&this.Os(i)}for(const i of this.ys)this.gs(i);this.ys=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ss,JSON.stringify(e))}getAllActiveQueryTargets(){return this.Ns(this.ps)}isActiveQueryTarget(e){let n=!1;return this.ps.forEach((i,r)=>{r.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.Ls(e,"pending")}updateMutationState(e,n,i){this.Ls(e,n,i),this.Bs(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const i=this.storage.getItem(qm(this.persistenceKey,e));if(i){const r=Jl.Es(e,i);r&&(n=r.state)}}return this.ks.As(e),this.Ms(),n}removeLocalQueryTarget(e){this.ks.Rs(e),this.Ms()}isLocalQueryTarget(e){return this.ks.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(qm(this.persistenceKey,e))}updateQueryState(e,n,i){this.qs(e,n,i)}handleUserChange(e,n,i){n.forEach(r=>{this.Bs(r)}),this.currentUser=e,i.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Qs(e)}notifyBundleLoaded(e){this.Ks(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.fs),this.removeItem(this.ws),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return B("SharedClientState","READ",e,n),n}setItem(e,n){B("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){B("SharedClientState","REMOVE",e),this.storage.removeItem(e)}gs(e){const n=e;if(n.storageArea===this.storage){if(B("SharedClientState","EVENT",n.key,n.newValue),n.key===this.ws)return void We("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.oi.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.bs.test(n.key)){if(n.newValue==null){const i=this.$s(n.key);return this.Us(i,null)}{const i=this.Ws(n.key,n.newValue);if(i)return this.Us(i.clientId,i)}}else if(this.Ds.test(n.key)){if(n.newValue!==null){const i=this.Gs(n.key,n.newValue);if(i)return this.zs(i)}}else if(this.Cs.test(n.key)){if(n.newValue!==null){const i=this.js(n.key,n.newValue);if(i)return this.Hs(i)}}else if(n.key===this.vs){if(n.newValue!==null){const i=this.xs(n.newValue);if(i)return this.Os(i)}}else if(n.key===this.Ss){const i=function(s){let a=Zt.oe;if(s!=null)try{const o=JSON.parse(s);$(typeof o=="number"),a=o}catch(o){We("SharedClientState","Failed to read sequence number from WebStorage",o)}return a}(n.newValue);i!==Zt.oe&&this.sequenceNumberHandler(i)}else if(n.key===this.Fs){const i=this.Js(n.newValue);await Promise.all(i.map(r=>this.syncEngine.Ys(r)))}}}else this.ys.push(n)})}}get ks(){return this.ps.get(this.Vs)}Ms(){this.setItem(this.ws,this.ks.ds())}Ls(e,n,i){const r=new vd(this.currentUser,e,n,i),s=iI(this.persistenceKey,this.currentUser,e);this.setItem(s,r.ds())}Bs(e){const n=iI(this.persistenceKey,this.currentUser,e);this.removeItem(n)}Qs(e){const n={clientId:this.Vs,onlineState:e};this.storage.setItem(this.vs,JSON.stringify(n))}qs(e,n,i){const r=qm(this.persistenceKey,e),s=new Jl(e,n,i);this.setItem(r,s.ds())}Ks(e){const n=JSON.stringify(Array.from(e));this.setItem(this.Fs,n)}$s(e){const n=this.bs.exec(e);return n?n[1]:null}Ws(e,n){const i=this.$s(e);return Ed.Es(i,n)}Gs(e,n){const i=this.Ds.exec(e),r=Number(i[1]),s=i[2]!==void 0?i[2]:null;return vd.Es(new mt(s),r,n)}js(e,n){const i=this.Cs.exec(e),r=Number(i[1]);return Jl.Es(r,n)}xs(e){return by.Es(e)}Js(e){return JSON.parse(e)}async zs(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Zs(e.batchId,e.state,e.error);B("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Hs(e){return this.syncEngine.Xs(e.targetId,e.state,e.error)}Us(e,n){const i=n?this.ps.insert(e,n):this.ps.remove(e),r=this.Ns(this.ps),s=this.Ns(i),a=[],o=[];return s.forEach(u=>{r.has(u)||a.push(u)}),r.forEach(u=>{s.has(u)||o.push(u)}),this.syncEngine.eo(a,o).then(()=>{this.ps=i})}Os(e){this.ps.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}Ns(e){let n=hy();return e.forEach((i,r)=>{n=n.unionWith(r.activeTargetIds)}),n}}class DC{constructor(){this.no=new gg,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,i){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,i){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new gg,Promise.resolve()}handleUserChange(e,n,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class $U{io(e){}shutdown(){}}/**
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
 */class rI{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){B("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){B("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Zc=null;function Hm(){return Zc===null?Zc=function(){return 268435456+Math.round(2147483648*Math.random())}():Zc++,"0x"+Zc.toString(16)}/**
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
 */const YU={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class XU{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}Ao(e){this.Ro=e}onMessage(e){this.Vo=e}close(){this.ho()}send(e){this.lo(e)}mo(){this.Io()}fo(){this.Eo()}po(e){this.Ro(e)}yo(e){this.Vo(e)}}/**
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
 */const xt="WebChannelConnection";class WU extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const i=n.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.wo=i+"://"+n.host,this.So=`projects/${r}/databases/${s}`,this.bo=this.databaseId.database==="(default)"?`project_id=${r}`:`project_id=${r}&database_id=${s}`}get Do(){return!1}Co(n,i,r,s,a){const o=Hm(),u=this.vo(n,i.toUriEncodedString());B("RestConnection",`Sending RPC '${n}' ${o}:`,u,r);const c={"google-cloud-resource-prefix":this.So,"x-goog-request-params":this.bo};return this.Fo(c,s,a),this.Mo(n,u,c,r).then(d=>(B("RestConnection",`Received RPC '${n}' ${o}: `,d),d),d=>{throw Bn("RestConnection",`RPC '${n}' ${o} failed with error: `,d,"url: ",u,"request:",r),d})}xo(n,i,r,s,a,o){return this.Co(n,i,r,s,a)}Fo(n,i,r){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Mo}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),i&&i.headers.forEach((s,a)=>n[a]=s),r&&r.headers.forEach((s,a)=>n[a]=s)}vo(n,i){const r=YU[n];return`${this.wo}/v1/${i}:${r}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Mo(e,n,i,r){const s=Hm();return new Promise((a,o)=>{const u=new eR;u.setWithCredentials(!0),u.listenOnce(nR.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case vh.NO_ERROR:const d=u.getResponseJson();B(xt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(d)),a(d);break;case vh.TIMEOUT:B(xt,`RPC '${e}' ${s} timed out`),o(new z(M.DEADLINE_EXCEEDED,"Request time out"));break;case vh.HTTP_ERROR:const f=u.getStatus();if(B(xt,`RPC '${e}' ${s} failed with status:`,f,"response text:",u.getResponseText()),f>0){let p=u.getResponseJson();Array.isArray(p)&&(p=p[0]);const g=p==null?void 0:p.error;if(g&&g.status&&g.message){const R=function(x){const I=x.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(I)>=0?I:M.UNKNOWN}(g.status);o(new z(R,g.message))}else o(new z(M.UNKNOWN,"Server responded with status "+u.getStatus()))}else o(new z(M.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{B(xt,`RPC '${e}' ${s} completed.`)}});const c=JSON.stringify(r);B(xt,`RPC '${e}' ${s} sending request:`,r),u.send(n,"POST",c,i,15)})}Oo(e,n,i){const r=Hm(),s=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=sR(),o=rR(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(u.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(u.xmlHttpFactory=new tR({})),this.Fo(u.initMessageHeaders,n,i),u.encodeInitMessageHeaders=!0;const d=s.join("");B(xt,`Creating RPC '${e}' stream ${r}: ${d}`,u);const f=a.createWebChannel(d,u);let p=!1,g=!1;const R=new XU({lo:x=>{g?B(xt,`Not sending because RPC '${e}' stream ${r} is closed:`,x):(p||(B(xt,`Opening RPC '${e}' stream ${r} transport.`),f.open(),p=!0),B(xt,`RPC '${e}' stream ${r} sending:`,x),f.send(x))},ho:()=>f.close()}),N=(x,I,E)=>{x.listen(I,A=>{try{E(A)}catch(O){setTimeout(()=>{throw O},0)}})};return N(f,Rl.EventType.OPEN,()=>{g||(B(xt,`RPC '${e}' stream ${r} transport opened.`),R.mo())}),N(f,Rl.EventType.CLOSE,()=>{g||(g=!0,B(xt,`RPC '${e}' stream ${r} transport closed`),R.po())}),N(f,Rl.EventType.ERROR,x=>{g||(g=!0,Bn(xt,`RPC '${e}' stream ${r} transport errored:`,x),R.po(new z(M.UNAVAILABLE,"The operation could not be completed")))}),N(f,Rl.EventType.MESSAGE,x=>{var I;if(!g){const E=x.data[0];$(!!E);const A=E,O=A.error||((I=A[0])===null||I===void 0?void 0:I.error);if(O){B(xt,`RPC '${e}' stream ${r} received error:`,O);const L=O.status;let F=function(v){const w=tt[v];if(w!==void 0)return $R(w)}(L),T=O.message;F===void 0&&(F=M.INTERNAL,T="Unknown error status: "+L+" with message "+O.message),g=!0,R.po(new z(F,T)),f.close()}else B(xt,`RPC '${e}' stream ${r} received:`,E),R.yo(E)}}),N(o,iR.STAT_EVENT,x=>{x.stat===eg.PROXY?B(xt,`RPC '${e}' stream ${r} detected buffering proxy`):x.stat===eg.NOPROXY&&B(xt,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{R.fo()},0),R}}/**
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
 */function NC(){return typeof window<"u"?window:null}function Sh(){return typeof document<"u"?document:null}/**
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
 */function oc(t){return new sU(t,!0)}/**
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
 */class Sy{constructor(e,n,i=1e3,r=1.5,s=6e4){this.oi=e,this.timerId=n,this.No=i,this.Lo=r,this.Bo=s,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(e){this.cancel();const n=Math.floor(this.ko+this.Uo()),i=Math.max(0,Date.now()-this.Qo),r=Math.max(0,n-i);r>0&&B("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${n} ms, last attempt: ${i} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,()=>(this.Qo=Date.now(),e())),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){this.qo!==null&&(this.qo.skipDelay(),this.qo=null)}cancel(){this.qo!==null&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}/**
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
 */class OC{constructor(e,n,i,r,s,a,o,u){this.oi=e,this.Go=i,this.zo=r,this.connection=s,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=o,this.listener=u,this.state=0,this.jo=0,this.Ho=null,this.Jo=null,this.stream=null,this.Yo=new Sy(e,n)}Zo(){return this.state===1||this.state===5||this.Xo()}Xo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.e_()}async stop(){this.Zo()&&await this.close(0)}t_(){this.state=0,this.Yo.reset()}n_(){this.Xo()&&this.Ho===null&&(this.Ho=this.oi.enqueueAfterDelay(this.Go,6e4,()=>this.r_()))}i_(e){this.s_(),this.stream.send(e)}async r_(){if(this.Xo())return this.close(0)}s_(){this.Ho&&(this.Ho.cancel(),this.Ho=null)}o_(){this.Jo&&(this.Jo.cancel(),this.Jo=null)}async close(e,n){this.s_(),this.o_(),this.Yo.cancel(),this.jo++,e!==4?this.Yo.reset():n&&n.code===M.RESOURCE_EXHAUSTED?(We(n.toString()),We("Using maximum backoff delay to prevent overloading the backend."),this.Yo.Ko()):n&&n.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.__(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ao(n)}__(){}auth(){this.state=1;const e=this.a_(this.jo),n=this.jo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,r])=>{this.jo===n&&this.u_(i,r)},i=>{e(()=>{const r=new z(M.UNKNOWN,"Fetching auth token failed: "+i.message);return this.c_(r)})})}u_(e,n){const i=this.a_(this.jo);this.stream=this.l_(e,n),this.stream.Po(()=>{i(()=>this.listener.Po())}),this.stream.To(()=>{i(()=>(this.state=2,this.Jo=this.oi.enqueueAfterDelay(this.zo,1e4,()=>(this.Xo()&&(this.state=3),Promise.resolve())),this.listener.To()))}),this.stream.Ao(r=>{i(()=>this.c_(r))}),this.stream.onMessage(r=>{i(()=>this.onMessage(r))})}e_(){this.state=5,this.Yo.$o(async()=>{this.state=0,this.start()})}c_(e){return B("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}a_(e){return n=>{this.oi.enqueueAndForget(()=>this.jo===e?n():(B("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class JU extends OC{constructor(e,n,i,r,s,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s}l_(e,n){return this.connection.Oo("Listen",e,n)}onMessage(e){this.Yo.reset();const n=lU(this.serializer,e),i=function(s){if(!("targetChange"in s))return Y.min();const a=s.targetChange;return a.targetIds&&a.targetIds.length?Y.min():a.readTime?Ze(a.readTime):Y.min()}(e);return this.listener.h_(n,i)}P_(e){const n={};n.database=hg(this.serializer),n.addTarget=function(s,a){let o;const u=a.target;if(o=dd(u)?{documents:rC(s,u)}:{query:sC(s,u)._t},o.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){o.resumeToken=JR(s,a.resumeToken);const c=ug(s,a.expectedCount);c!==null&&(o.expectedCount=c)}else if(a.snapshotVersion.compareTo(Y.min())>0){o.readTime=fo(s,a.snapshotVersion.toTimestamp());const c=ug(s,a.expectedCount);c!==null&&(o.expectedCount=c)}return o}(this.serializer,e);const i=cU(this.serializer,e);i&&(n.labels=i),this.i_(n)}I_(e){const n={};n.database=hg(this.serializer),n.removeTarget=e,this.i_(n)}}class ZU extends OC{constructor(e,n,i,r,s,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,i,r,a),this.serializer=s,this.T_=!1}get E_(){return this.T_}start(){this.T_=!1,this.lastStreamToken=void 0,super.start()}__(){this.T_&&this.d_([])}l_(e,n){return this.connection.Oo("Write",e,n)}onMessage(e){if($(!!e.streamToken),this.lastStreamToken=e.streamToken,this.T_){this.Yo.reset();const n=uU(e.writeResults,e.commitTime),i=Ze(e.commitTime);return this.listener.A_(i,n)}return $(!e.writeResults||e.writeResults.length===0),this.T_=!0,this.listener.R_()}V_(){const e={};e.database=hg(this.serializer),this.i_(e)}d_(e){const n={streamToken:this.lastStreamToken,writes:e.map(i=>Ou(this.serializer,i))};this.i_(n)}}/**
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
 */class e4 extends class{}{constructor(e,n,i,r){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=i,this.serializer=r,this.m_=!1}f_(){if(this.m_)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}Co(e,n,i,r){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.Co(e,cg(n,i),r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new z(M.UNKNOWN,s.toString())})}xo(e,n,i,r,s){return this.f_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,o])=>this.connection.xo(e,cg(n,i),r,a,o,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new z(M.UNKNOWN,a.toString())})}terminate(){this.m_=!0,this.connection.terminate()}}class t4{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.g_=0,this.p_=null,this.y_=!0}w_(){this.g_===0&&(this.S_("Unknown"),this.p_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.p_=null,this.b_("Backend didn't respond within 10 seconds."),this.S_("Offline"),Promise.resolve())))}D_(e){this.state==="Online"?this.S_("Unknown"):(this.g_++,this.g_>=1&&(this.C_(),this.b_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.S_("Offline")))}set(e){this.C_(),this.g_=0,e==="Online"&&(this.y_=!1),this.S_(e)}S_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}b_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.y_?(We(n),this.y_=!1):B("OnlineStateTracker",n)}C_(){this.p_!==null&&(this.p_.cancel(),this.p_=null)}}/**
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
 */class n4{constructor(e,n,i,r,s){this.localStore=e,this.datastore=n,this.asyncQueue=i,this.remoteSyncer={},this.v_=[],this.F_=new Map,this.M_=new Set,this.x_=[],this.O_=s,this.O_.io(a=>{i.enqueueAndForget(async()=>{Hr(this)&&(B("RemoteStore","Restarting streams for network reachability change."),await async function(u){const c=H(u);c.M_.add(4),await zo(c),c.N_.set("Unknown"),c.M_.delete(4),await lc(c)}(this))})}),this.N_=new t4(i,r)}}async function lc(t){if(Hr(t))for(const e of t.x_)await e(!0)}async function zo(t){for(const e of t.x_)await e(!1)}function cf(t,e){const n=H(t);n.F_.has(e.targetId)||(n.F_.set(e.targetId,e),Dy(n)?Cy(n):Fo(n).Xo()&&Ry(n,e))}function go(t,e){const n=H(t),i=Fo(n);n.F_.delete(e),i.Xo()&&PC(n,e),n.F_.size===0&&(i.Xo()?i.n_():Hr(n)&&n.N_.set("Unknown"))}function Ry(t,e){if(t.L_.xe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Y.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Fo(t).P_(e)}function PC(t,e){t.L_.xe(e),Fo(t).I_(e)}function Cy(t){t.L_=new tU({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ot:e=>t.F_.get(e)||null,tt:()=>t.datastore.serializer.databaseId}),Fo(t).start(),t.N_.w_()}function Dy(t){return Hr(t)&&!Fo(t).Zo()&&t.F_.size>0}function Hr(t){return H(t).M_.size===0}function VC(t){t.L_=void 0}async function i4(t){t.N_.set("Online")}async function r4(t){t.F_.forEach((e,n)=>{Ry(t,e)})}async function s4(t,e){VC(t),Dy(t)?(t.N_.D_(e),Cy(t)):t.N_.set("Unknown")}async function a4(t,e,n){if(t.N_.set("Online"),e instanceof WR&&e.state===2&&e.cause)try{await async function(r,s){const a=s.cause;for(const o of s.targetIds)r.F_.has(o)&&(await r.remoteSyncer.rejectListen(o,a),r.F_.delete(o),r.L_.removeTarget(o))}(t,e)}catch(i){B("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Td(t,i)}else if(e instanceof bh?t.L_.Ke(e):e instanceof XR?t.L_.He(e):t.L_.We(e),!n.isEqual(Y.min()))try{const i=await AC(t.localStore);n.compareTo(i)>=0&&await function(s,a){const o=s.L_.rt(a);return o.targetChanges.forEach((u,c)=>{if(u.resumeToken.approximateByteSize()>0){const d=s.F_.get(c);d&&s.F_.set(c,d.withResumeToken(u.resumeToken,a))}}),o.targetMismatches.forEach((u,c)=>{const d=s.F_.get(u);if(!d)return;s.F_.set(u,d.withResumeToken(ht.EMPTY_BYTE_STRING,d.snapshotVersion)),PC(s,u);const f=new Ii(d.target,u,c,d.sequenceNumber);Ry(s,f)}),s.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(i){B("RemoteStore","Failed to raise snapshot:",i),await Td(t,i)}}async function Td(t,e,n){if(!qr(e))throw e;t.M_.add(1),await zo(t),t.N_.set("Offline"),n||(n=()=>AC(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{B("RemoteStore","Retrying IndexedDB access"),await n(),t.M_.delete(1),await lc(t)})}function xC(t,e){return e().catch(n=>Td(t,n,e))}async function Bo(t){const e=H(t),n=xr(e);let i=e.v_.length>0?e.v_[e.v_.length-1].batchId:-1;for(;o4(e);)try{const r=await HU(e.localStore,i);if(r===null){e.v_.length===0&&n.n_();break}i=r.batchId,l4(e,r)}catch(r){await Td(e,r)}MC(e)&&kC(e)}function o4(t){return Hr(t)&&t.v_.length<10}function l4(t,e){t.v_.push(e);const n=xr(t);n.Xo()&&n.E_&&n.d_(e.mutations)}function MC(t){return Hr(t)&&!xr(t).Zo()&&t.v_.length>0}function kC(t){xr(t).start()}async function u4(t){xr(t).V_()}async function c4(t){const e=xr(t);for(const n of t.v_)e.d_(n.mutations)}async function h4(t,e,n){const i=t.v_.shift(),r=my.from(i,e,n);await xC(t,()=>t.remoteSyncer.applySuccessfulWrite(r)),await Bo(t)}async function d4(t,e){e&&xr(t).E_&&await async function(i,r){if(function(a){return QR(a)&&a!==M.ABORTED}(r.code)){const s=i.v_.shift();xr(i).t_(),await xC(i,()=>i.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Bo(i)}}(t,e),MC(t)&&kC(t)}async function sI(t,e){const n=H(t);n.asyncQueue.verifyOperationInProgress(),B("RemoteStore","RemoteStore received new credentials");const i=Hr(n);n.M_.add(3),await zo(n),i&&n.N_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.M_.delete(3),await lc(n)}async function _g(t,e){const n=H(t);e?(n.M_.delete(2),await lc(n)):e||(n.M_.add(2),await zo(n),n.N_.set("Unknown"))}function Fo(t){return t.B_||(t.B_=function(n,i,r){const s=H(n);return s.f_(),new JU(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Po:i4.bind(null,t),To:r4.bind(null,t),Ao:s4.bind(null,t),h_:a4.bind(null,t)}),t.x_.push(async e=>{e?(t.B_.t_(),Dy(t)?Cy(t):t.N_.set("Unknown")):(await t.B_.stop(),VC(t))})),t.B_}function xr(t){return t.k_||(t.k_=function(n,i,r){const s=H(n);return s.f_(),new ZU(i,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{Po:()=>Promise.resolve(),To:u4.bind(null,t),Ao:d4.bind(null,t),R_:c4.bind(null,t),A_:h4.bind(null,t)}),t.x_.push(async e=>{e?(t.k_.t_(),await Bo(t)):(await t.k_.stop(),t.v_.length>0&&(B("RemoteStore",`Stopping write stream with ${t.v_.length} pending writes`),t.v_=[]))})),t.k_}/**
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
 */class Ny{constructor(e,n,i,r,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=i,this.op=r,this.removalCallback=s,this.deferred=new vt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,i,r,s){const a=Date.now()+i,o=new Ny(e,n,a,r,s);return o.start(i),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new z(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function jo(t,e){if(We("AsyncQueue",`${e}: ${t}`),qr(t))return new z(M.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ga{constructor(e){this.comparator=e?(n,i)=>e(n,i)||G.comparator(n.key,i.key):(n,i)=>G.comparator(n.key,i.key),this.keyedMap=Cl(),this.sortedSet=new Se(this.comparator)}static emptySet(e){return new Ga(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,i)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ga)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,s=i.getNext().key;if(!r.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const i=new Ga;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=n,i}}/**
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
 */class aI{constructor(){this.q_=new Se(G.comparator)}track(e){const n=e.doc.key,i=this.q_.get(n);i?e.type!==0&&i.type===3?this.q_=this.q_.insert(n,e):e.type===3&&i.type!==1?this.q_=this.q_.insert(n,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.q_=this.q_.insert(n,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.q_=this.q_.remove(n):e.type===1&&i.type===2?this.q_=this.q_.insert(n,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.q_=this.q_.insert(n,{type:2,doc:e.doc}):Q():this.q_=this.q_.insert(n,e)}Q_(){const e=[];return this.q_.inorderTraversal((n,i)=>{e.push(i)}),e}}class _o{constructor(e,n,i,r,s,a,o,u,c){this.query=e,this.docs=n,this.oldDocs=i,this.docChanges=r,this.mutatedKeys=s,this.fromCache=a,this.syncStateChanged=o,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,n,i,r,s){const a=[];return n.forEach(o=>{a.push({type:0,doc:o})}),new _o(e,n,Ga.emptySet(n),a,i,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&nc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,i=e.docChanges;if(n.length!==i.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==i[r].type||!n[r].doc.isEqual(i[r].doc))return!1;return!0}}/**
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
 */class f4{constructor(){this.K_=void 0,this.U_=[]}W_(){return this.U_.some(e=>e.G_())}}class m4{constructor(){this.queries=new Gr(e=>PR(e),nc),this.onlineState="Unknown",this.z_=new Set}}async function Oy(t,e){const n=H(t);let i=3;const r=e.query;let s=n.queries.get(r);s?!s.W_()&&e.G_()&&(i=2):(s=new f4,i=e.G_()?0:1);try{switch(i){case 0:s.K_=await n.onListen(r,!0);break;case 1:s.K_=await n.onListen(r,!1);break;case 2:await n.onFirstRemoteStoreListen(r)}}catch(a){const o=jo(a,`Initialization of query '${ma(e.query)}' failed`);return void e.onError(o)}n.queries.set(r,s),s.U_.push(e),e.j_(n.onlineState),s.K_&&e.H_(s.K_)&&Vy(n)}async function Py(t,e){const n=H(t),i=e.query;let r=3;const s=n.queries.get(i);if(s){const a=s.U_.indexOf(e);a>=0&&(s.U_.splice(a,1),s.U_.length===0?r=e.G_()?0:1:!s.W_()&&e.G_()&&(r=2))}switch(r){case 0:return n.queries.delete(i),n.onUnlisten(i,!0);case 1:return n.queries.delete(i),n.onUnlisten(i,!1);case 2:return n.onLastRemoteStoreUnlisten(i);default:return}}function p4(t,e){const n=H(t);let i=!1;for(const r of e){const s=r.query,a=n.queries.get(s);if(a){for(const o of a.U_)o.H_(r)&&(i=!0);a.K_=r}}i&&Vy(n)}function g4(t,e,n){const i=H(t),r=i.queries.get(e);if(r)for(const s of r.U_)s.onError(n);i.queries.delete(e)}function Vy(t){t.z_.forEach(e=>{e.next()})}var yg,oI;(oI=yg||(yg={})).J_="default",oI.Cache="cache";class xy{constructor(e,n,i){this.query=e,this.Y_=n,this.Z_=!1,this.X_=null,this.onlineState="Unknown",this.options=i||{}}H_(e){if(!this.options.includeMetadataChanges){const i=[];for(const r of e.docChanges)r.type!==3&&i.push(r);e=new _o(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Z_?this.ea(e)&&(this.Y_.next(e),n=!0):this.ta(e,this.onlineState)&&(this.na(e),n=!0),this.X_=e,n}onError(e){this.Y_.error(e)}j_(e){this.onlineState=e;let n=!1;return this.X_&&!this.Z_&&this.ta(this.X_,e)&&(this.na(this.X_),n=!0),n}ta(e,n){if(!e.fromCache||!this.G_())return!0;const i=n!=="Offline";return(!this.options.ra||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}ea(e){if(e.docChanges.length>0)return!0;const n=this.X_&&this.X_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}na(e){e=_o.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Z_=!0,this.Y_.next(e)}G_(){return this.options.source!==yg.Cache}}/**
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
 */class _4{constructor(e,n){this.ia=e,this.byteLength=n}sa(){return"metadata"in this.ia}}/**
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
 */class lI{constructor(e){this.serializer=e}Ps(e){return ti(this.serializer,e)}Is(e){return e.metadata.exists?iC(this.serializer,e.document,!1):Oe.newNoDocument(this.Ps(e.metadata.name),this.Ts(e.metadata.readTime))}Ts(e){return Ze(e)}}class y4{constructor(e,n,i){this.oa=e,this.localStore=n,this.serializer=i,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=LC(e)}_a(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;if(e.ia.namedQuery)this.queries.push(e.ia.namedQuery);else if(e.ia.documentMetadata){this.documents.push({metadata:e.ia.documentMetadata}),e.ia.documentMetadata.exists||++n;const i=le.fromString(e.ia.documentMetadata.name);this.collectionGroups.add(i.get(i.length-2))}else e.ia.document&&(this.documents[this.documents.length-1].document=e.ia.document,++n);return n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}aa(e){const n=new Map,i=new lI(this.serializer);for(const r of e)if(r.metadata.queries){const s=i.Ps(r.metadata.name);for(const a of r.metadata.queries){const o=(n.get(a)||re()).add(s);n.set(a,o)}}return n}async complete(){const e=await KU(this.localStore,new lI(this.serializer),this.documents,this.oa.id),n=this.aa(this.documents);for(const i of this.queries)await QU(this.localStore,i,n.get(i.name));return this.progress.taskState="Success",{progress:this.progress,ua:this.collectionGroups,ca:e}}}function LC(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
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
 */class UC{constructor(e){this.key=e}}class zC{constructor(e){this.key=e}}class BC{constructor(e,n){this.query=e,this.la=n,this.ha=null,this.hasCachedResults=!1,this.current=!1,this.Pa=re(),this.mutatedKeys=re(),this.Ia=xR(e),this.Ta=new Ga(this.Ia)}get Ea(){return this.la}da(e,n){const i=n?n.Aa:new aI,r=n?n.Ta:this.Ta;let s=n?n.mutatedKeys:this.mutatedKeys,a=r,o=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((d,f)=>{const p=r.get(d),g=ic(this.query,f)?f:null,R=!!p&&this.mutatedKeys.has(p.key),N=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let x=!1;p&&g?p.data.isEqual(g.data)?R!==N&&(i.track({type:3,doc:g}),x=!0):this.Ra(p,g)||(i.track({type:2,doc:g}),x=!0,(u&&this.Ia(g,u)>0||c&&this.Ia(g,c)<0)&&(o=!0)):!p&&g?(i.track({type:0,doc:g}),x=!0):p&&!g&&(i.track({type:1,doc:p}),x=!0,(u||c)&&(o=!0)),x&&(g?(a=a.add(g),s=N?s.add(d):s.delete(d)):(a=a.delete(d),s=s.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),s=s.delete(d.key),i.track({type:1,doc:d})}return{Ta:a,Aa:i,Xi:o,mutatedKeys:s}}Ra(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,i,r){const s=this.Ta;this.Ta=e.Ta,this.mutatedKeys=e.mutatedKeys;const a=e.Aa.Q_();a.sort((d,f)=>function(g,R){const N=x=>{switch(x){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return N(g)-N(R)}(d.type,f.type)||this.Ia(d.doc,f.doc)),this.Va(i),r=r!=null&&r;const o=n&&!r?this.ma():[],u=this.Pa.size===0&&this.current&&!r?1:0,c=u!==this.ha;return this.ha=u,a.length!==0||c?{snapshot:new _o(this.query,e.Ta,s,a,e.mutatedKeys,u===0,c,!1,!!i&&i.resumeToken.approximateByteSize()>0),fa:o}:{fa:o}}j_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ta:this.Ta,Aa:new aI,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{fa:[]}}ga(e){return!this.la.has(e)&&!!this.Ta.has(e)&&!this.Ta.get(e).hasLocalMutations}Va(e){e&&(e.addedDocuments.forEach(n=>this.la=this.la.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.la=this.la.delete(n)),this.current=e.current)}ma(){if(!this.current)return[];const e=this.Pa;this.Pa=re(),this.Ta.forEach(i=>{this.ga(i.key)&&(this.Pa=this.Pa.add(i.key))});const n=[];return e.forEach(i=>{this.Pa.has(i)||n.push(new zC(i))}),this.Pa.forEach(i=>{e.has(i)||n.push(new UC(i))}),n}pa(e){this.la=e.hs,this.Pa=re();const n=this.da(e.documents);return this.applyChanges(n,!0)}ya(){return _o.fromInitialDocuments(this.query,this.Ta,this.mutatedKeys,this.ha===0,this.hasCachedResults)}}class v4{constructor(e,n,i){this.query=e,this.targetId=n,this.view=i}}class E4{constructor(e){this.key=e,this.wa=!1}}class T4{constructor(e,n,i,r,s,a){this.localStore=e,this.remoteStore=n,this.eventManager=i,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=a,this.Sa={},this.ba=new Gr(o=>PR(o),nc),this.Da=new Map,this.Ca=new Set,this.va=new Se(G.comparator),this.Fa=new Map,this.Ma=new Ty,this.xa={},this.Oa=new Map,this.Na=Us.Ln(),this.onlineState="Unknown",this.La=void 0}get isPrimaryClient(){return this.La===!0}}async function w4(t,e,n=!0){const i=hf(t);let r;const s=i.ba.get(e);return s?(i.sharedClientState.addLocalQueryTarget(s.targetId),r=s.view.ya()):r=await FC(i,e,n,!0),r}async function I4(t,e){const n=hf(t);await FC(n,e,!0,!1)}async function FC(t,e,n,i){const r=await mo(t.localStore,jt(e)),s=r.targetId,a=n?t.sharedClientState.addLocalQueryTarget(s):"not-current";let o;return i&&(o=await My(t,e,s,a==="current",r.resumeToken)),t.isPrimaryClient&&n&&cf(t.remoteStore,r),o}async function My(t,e,n,i,r){t.Ba=(f,p,g)=>async function(N,x,I,E){let A=x.view.da(I);A.Xi&&(A=await yd(N.localStore,x.query,!1).then(({documents:T})=>x.view.da(T,A)));const O=E&&E.targetChanges.get(x.targetId),L=E&&E.targetMismatches.get(x.targetId)!=null,F=x.view.applyChanges(A,N.isPrimaryClient,O,L);return vg(N,x.targetId,F.fa),F.snapshot}(t,f,p,g);const s=await yd(t.localStore,e,!0),a=new BC(e,s.hs),o=a.da(s.documents),u=ac.createSynthesizedTargetChangeForCurrentChange(n,i&&t.onlineState!=="Offline",r),c=a.applyChanges(o,t.isPrimaryClient,u);vg(t,n,c.fa);const d=new v4(e,n,a);return t.ba.set(e,d),t.Da.has(n)?t.Da.get(n).push(e):t.Da.set(n,[e]),c.snapshot}async function A4(t,e,n){const i=H(t),r=i.ba.get(e),s=i.Da.get(r.targetId);if(s.length>1)return i.Da.set(r.targetId,s.filter(a=>!nc(a,e))),void i.ba.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(r.targetId),i.sharedClientState.isActiveQueryTarget(r.targetId)||await po(i.localStore,r.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(r.targetId),n&&go(i.remoteStore,r.targetId),yo(i,r.targetId)}).catch(jr)):(yo(i,r.targetId),await po(i.localStore,r.targetId,!0))}async function b4(t,e){const n=H(t),i=n.ba.get(e),r=n.Da.get(i.targetId);n.isPrimaryClient&&r.length===1&&(n.sharedClientState.removeLocalQueryTarget(i.targetId),go(n.remoteStore,i.targetId))}async function S4(t,e,n){const i=zy(t);try{const r=await function(a,o){const u=H(a),c=Le.now(),d=o.reduce((g,R)=>g.add(R.key),re());let f,p;return u.persistence.runTransaction("Locally write mutations","readwrite",g=>{let R=tn(),N=re();return u.os.getEntries(g,d).next(x=>{R=x,R.forEach((I,E)=>{E.isValidDocument()||(N=N.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(g,R)).next(x=>{f=x;const I=[];for(const E of o){const A=JL(E,f.get(E.key).overlayedDocument);A!=null&&I.push(new Fi(E.key,A,IR(A.value.mapValue),ke.exists(!0)))}return u.mutationQueue.addMutationBatch(g,c,I,o)}).next(x=>{p=x;const I=x.applyToLocalDocumentSet(f,N);return u.documentOverlayCache.saveOverlays(g,x.batchId,I)})}).then(()=>({batchId:p.batchId,changes:kR(f)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(r.batchId),function(a,o,u){let c=a.xa[a.currentUser.toKey()];c||(c=new Se(te)),c=c.insert(o,u),a.xa[a.currentUser.toKey()]=c}(i,r.batchId,n),await ji(i,r.changes),await Bo(i.remoteStore)}catch(r){const s=jo(r,"Failed to persist write");n.reject(s)}}async function jC(t,e){const n=H(t);try{const i=await GU(n.localStore,e);e.targetChanges.forEach((r,s)=>{const a=n.Fa.get(s);a&&($(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?a.wa=!0:r.modifiedDocuments.size>0?$(a.wa):r.removedDocuments.size>0&&($(a.wa),a.wa=!1))}),await ji(n,i,e)}catch(i){await jr(i)}}function uI(t,e,n){const i=H(t);if(i.isPrimaryClient&&n===0||!i.isPrimaryClient&&n===1){const r=[];i.ba.forEach((s,a)=>{const o=a.view.j_(e);o.snapshot&&r.push(o.snapshot)}),function(a,o){const u=H(a);u.onlineState=o;let c=!1;u.queries.forEach((d,f)=>{for(const p of f.U_)p.j_(o)&&(c=!0)}),c&&Vy(u)}(i.eventManager,e),r.length&&i.Sa.h_(r),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function R4(t,e,n){const i=H(t);i.sharedClientState.updateQueryState(e,"rejected",n);const r=i.Fa.get(e),s=r&&r.key;if(s){let a=new Se(G.comparator);a=a.insert(s,Oe.newNoDocument(s,Y.min()));const o=re().add(s),u=new sc(Y.min(),new Map,new Se(te),a,o);await jC(i,u),i.va=i.va.remove(s),i.Fa.delete(e),Uy(i)}else await po(i.localStore,e,!1).then(()=>yo(i,e,n)).catch(jr)}async function C4(t,e){const n=H(t),i=e.batch.batchId;try{const r=await qU(n.localStore,e);Ly(n,i,null),ky(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await ji(n,r)}catch(r){await jr(r)}}async function D4(t,e,n){const i=H(t);try{const r=await function(a,o){const u=H(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let d;return u.mutationQueue.lookupMutationBatch(c,o).next(f=>($(f!==null),d=f.keys(),u.mutationQueue.removeMutationBatch(c,f))).next(()=>u.mutationQueue.performConsistencyCheck(c)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(c,d,o)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,d)).next(()=>u.localDocuments.getDocuments(c,d))})}(i.localStore,e);Ly(i,e,n),ky(i,e),i.sharedClientState.updateMutationState(e,"rejected",n),await ji(i,r)}catch(r){await jr(r)}}async function N4(t,e){const n=H(t);Hr(n.remoteStore)||B("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const i=await function(a){const o=H(a);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",u=>o.mutationQueue.getHighestUnacknowledgedBatchId(u))}(n.localStore);if(i===-1)return void e.resolve();const r=n.Oa.get(i)||[];r.push(e),n.Oa.set(i,r)}catch(i){const r=jo(i,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function ky(t,e){(t.Oa.get(e)||[]).forEach(n=>{n.resolve()}),t.Oa.delete(e)}function Ly(t,e,n){const i=H(t);let r=i.xa[i.currentUser.toKey()];if(r){const s=r.get(e);s&&(n?s.reject(n):s.resolve(),r=r.remove(e)),i.xa[i.currentUser.toKey()]=r}}function yo(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const i of t.Da.get(e))t.ba.delete(i),n&&t.Sa.ka(i,n);t.Da.delete(e),t.isPrimaryClient&&t.Ma.Vr(e).forEach(i=>{t.Ma.containsKey(i)||qC(t,i)})}function qC(t,e){t.Ca.delete(e.path.canonicalString());const n=t.va.get(e);n!==null&&(go(t.remoteStore,n),t.va=t.va.remove(e),t.Fa.delete(n),Uy(t))}function vg(t,e,n){for(const i of n)i instanceof UC?(t.Ma.addReference(i.key,e),O4(t,i)):i instanceof zC?(B("SyncEngine","Document no longer in limbo: "+i.key),t.Ma.removeReference(i.key,e),t.Ma.containsKey(i.key)||qC(t,i.key)):Q()}function O4(t,e){const n=e.key,i=n.path.canonicalString();t.va.get(n)||t.Ca.has(i)||(B("SyncEngine","New document in limbo: "+n),t.Ca.add(i),Uy(t))}function Uy(t){for(;t.Ca.size>0&&t.va.size<t.maxConcurrentLimboResolutions;){const e=t.Ca.values().next().value;t.Ca.delete(e);const n=new G(le.fromString(e)),i=t.Na.next();t.Fa.set(i,new E4(n)),t.va=t.va.insert(n,i),cf(t.remoteStore,new Ii(jt(ko(n.path)),i,"TargetPurposeLimboResolution",Zt.oe))}}async function ji(t,e,n){const i=H(t),r=[],s=[],a=[];i.ba.isEmpty()||(i.ba.forEach((o,u)=>{a.push(i.Ba(u,e,n).then(c=>{if((c||n)&&i.isPrimaryClient){const d=c&&!c.fromCache;i.sharedClientState.updateQueryState(u.targetId,d?"current":"not-current")}if(c){r.push(c);const d=Ay.Ki(u.targetId,c);s.push(d)}}))}),await Promise.all(a),i.Sa.h_(r),await async function(u,c){const d=H(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>V.forEach(c,p=>V.forEach(p.qi,g=>d.persistence.referenceDelegate.addReference(f,p.targetId,g)).next(()=>V.forEach(p.Qi,g=>d.persistence.referenceDelegate.removeReference(f,p.targetId,g)))))}catch(f){if(!qr(f))throw f;B("LocalStore","Failed to update sequence numbers: "+f)}for(const f of c){const p=f.targetId;if(!f.fromCache){const g=d.ns.get(p),R=g.snapshotVersion,N=g.withLastLimboFreeSnapshotVersion(R);d.ns=d.ns.insert(p,N)}}}(i.localStore,s))}async function P4(t,e){const n=H(t);if(!n.currentUser.isEqual(e)){B("SyncEngine","User change. New user:",e.toKey());const i=await IC(n.localStore,e);n.currentUser=e,function(s,a){s.Oa.forEach(o=>{o.forEach(u=>{u.reject(new z(M.CANCELLED,a))})}),s.Oa.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await ji(n,i.us)}}function V4(t,e){const n=H(t),i=n.Fa.get(e);if(i&&i.wa)return re().add(i.key);{let r=re();const s=n.Da.get(e);if(!s)return r;for(const a of s){const o=n.ba.get(a);r=r.unionWith(o.view.Ea)}return r}}async function x4(t,e){const n=H(t),i=await yd(n.localStore,e.query,!0),r=e.view.pa(i);return n.isPrimaryClient&&vg(n,e.targetId,r.fa),r}async function M4(t,e){const n=H(t);return RC(n.localStore,e).then(i=>ji(n,i))}async function k4(t,e,n,i){const r=H(t),s=await function(o,u){const c=H(o),d=H(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",f=>d.vn(f,u).next(p=>p?c.localDocuments.getDocuments(f,p):V.resolve(null)))}(r.localStore,e);s!==null?(n==="pending"?await Bo(r.remoteStore):n==="acknowledged"||n==="rejected"?(Ly(r,e,i||null),ky(r,e),function(o,u){H(H(o).mutationQueue).Mn(u)}(r.localStore,e)):Q(),await ji(r,s)):B("SyncEngine","Cannot apply mutation batch with id: "+e)}async function L4(t,e){const n=H(t);if(hf(n),zy(n),e===!0&&n.La!==!0){const i=n.sharedClientState.getAllActiveQueryTargets(),r=await cI(n,i.toArray());n.La=!0,await _g(n.remoteStore,!0);for(const s of r)cf(n.remoteStore,s)}else if(e===!1&&n.La!==!1){const i=[];let r=Promise.resolve();n.Da.forEach((s,a)=>{n.sharedClientState.isLocalQueryTarget(a)?i.push(a):r=r.then(()=>(yo(n,a),po(n.localStore,a,!0))),go(n.remoteStore,a)}),await r,await cI(n,i),function(a){const o=H(a);o.Fa.forEach((u,c)=>{go(o.remoteStore,c)}),o.Ma.mr(),o.Fa=new Map,o.va=new Se(G.comparator)}(n),n.La=!1,await _g(n.remoteStore,!1)}}async function cI(t,e,n){const i=H(t),r=[],s=[];for(const a of e){let o;const u=i.Da.get(a);if(u&&u.length!==0){o=await mo(i.localStore,jt(u[0]));for(const c of u){const d=i.ba.get(c),f=await x4(i,d);f.snapshot&&s.push(f.snapshot)}}else{const c=await SC(i.localStore,a);o=await mo(i.localStore,c),await My(i,GC(c),a,!1,o.resumeToken)}r.push(o)}return i.Sa.h_(s),r}function GC(t){return OR(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function U4(t){return function(n){return H(H(n).persistence).Bi()}(H(t).localStore)}async function z4(t,e,n,i){const r=H(t);if(r.La)return void B("SyncEngine","Ignoring unexpected query state notification.");const s=r.Da.get(e);if(s&&s.length>0)switch(n){case"current":case"not-current":{const a=await RC(r.localStore,VR(s[0])),o=sc.createSynthesizedRemoteEventForCurrentChange(e,n==="current",ht.EMPTY_BYTE_STRING);await ji(r,a,o);break}case"rejected":await po(r.localStore,e,!0),yo(r,e,i);break;default:Q()}}async function B4(t,e,n){const i=hf(t);if(i.La){for(const r of e){if(i.Da.has(r)&&i.sharedClientState.isActiveQueryTarget(r)){B("SyncEngine","Adding an already active target "+r);continue}const s=await SC(i.localStore,r),a=await mo(i.localStore,s);await My(i,GC(s),a.targetId,!1,a.resumeToken),cf(i.remoteStore,a)}for(const r of n)i.Da.has(r)&&await po(i.localStore,r,!1).then(()=>{go(i.remoteStore,r),yo(i,r)}).catch(jr)}}function hf(t){const e=H(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=jC.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=V4.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=R4.bind(null,e),e.Sa.h_=p4.bind(null,e.eventManager),e.Sa.ka=g4.bind(null,e.eventManager),e}function zy(t){const e=H(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=C4.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=D4.bind(null,e),e}function F4(t,e,n){const i=H(t);(async function(s,a,o){try{const u=await a.getMetadata();if(await function(g,R){const N=H(g),x=Ze(R.createTime);return N.persistence.runTransaction("hasNewerBundle","readonly",I=>N.$r.getBundleMetadata(I,R.id)).then(I=>!!I&&I.createTime.compareTo(x)>=0)}(s.localStore,u))return await a.close(),o._completeWith(function(g){return{taskState:"Success",documentsLoaded:g.totalDocuments,bytesLoaded:g.totalBytes,totalDocuments:g.totalDocuments,totalBytes:g.totalBytes}}(u)),Promise.resolve(new Set);o._updateProgress(LC(u));const c=new y4(u,s.localStore,a.serializer);let d=await a.qa();for(;d;){const p=await c._a(d);p&&o._updateProgress(p),d=await a.qa()}const f=await c.complete();return await ji(s,f.ca,void 0),await function(g,R){const N=H(g);return N.persistence.runTransaction("Save bundle","readwrite",x=>N.$r.saveBundleMetadata(x,R))}(s.localStore,u),o._completeWith(f.progress),Promise.resolve(f.ua)}catch(u){return Bn("SyncEngine",`Loading bundle failed with ${u}`),o._failWith(u),Promise.resolve(new Set)}})(i,e,n).then(r=>{i.sharedClientState.notifyBundleLoaded(r)})}class Eg{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=oc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return wC(this.persistence,new TC,e.initialUser,this.serializer)}createPersistence(e){return new EC(uf.Hr,this.serializer)}createSharedClientState(e){return new DC}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class HC extends Eg{constructor(e,n,i){super(),this.Qa=e,this.cacheSizeBytes=n,this.forceOwnership=i,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Qa.initialize(this,e),await zy(this.Qa.syncEngine),await Bo(this.Qa.remoteStore),await this.persistence.fi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return wC(this.persistence,new TC,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,n){const i=this.persistence.referenceDelegate.garbageCollector;return new SU(i,e.asyncQueue,n)}createIndexBackfillerScheduler(e,n){const i=new uL(n,this.persistence);return new lL(e.asyncQueue,i)}createPersistence(e){const n=Iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),i=this.cacheSizeBytes!==void 0?Wt.withCacheSize(this.cacheSizeBytes):Wt.DEFAULT;return new wy(this.synchronizeTabs,n,e.clientId,i,e.asyncQueue,NC(),Sh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new DC}}class j4 extends HC{constructor(e,n){super(e,n,!1),this.Qa=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.Qa.syncEngine;this.sharedClientState instanceof Gm&&(this.sharedClientState.syncEngine={Zs:k4.bind(null,n),Xs:z4.bind(null,n),eo:B4.bind(null,n),Bi:U4.bind(null,n),Ys:M4.bind(null,n)},await this.sharedClientState.start()),await this.persistence.fi(async i=>{await L4(this.Qa.syncEngine,i),this.gcScheduler&&(i&&!this.gcScheduler.started?this.gcScheduler.start():i||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(i&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():i||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const n=NC();if(!Gm.D(n))throw new z(M.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const i=Iy(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Gm(n,e.asyncQueue,i,e.clientId,e.initialUser)}}class By{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>uI(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=P4.bind(null,this.syncEngine),await _g(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new m4}()}createDatastore(e){const n=oc(e.databaseInfo.databaseId),i=function(s){return new WU(s)}(e.databaseInfo);return function(s,a,o,u){return new e4(s,a,o,u)}(e.authCredentials,e.appCheckCredentials,i,n)}createRemoteStore(e){return function(i,r,s,a,o){return new n4(i,r,s,a,o)}(this.localStore,this.datastore,e.asyncQueue,n=>uI(this.syncEngine,n,0),function(){return rI.D()?new rI:new $U}())}createSyncEngine(e,n){return function(r,s,a,o,u,c,d){const f=new T4(r,s,a,o,u,c);return d&&(f.La=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(i){const r=H(i);B("RemoteStore","RemoteStore shutting down."),r.M_.add(5),await zo(r),r.O_.shutdown(),r.N_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */function hI(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const i={value:t.slice(n,n+e),done:!1};return n+=e,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class df{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ka(this.observer.next,e)}error(e){this.observer.error?this.Ka(this.observer.error,e):We("Uncaught Error in snapshot listener:",e.toString())}$a(){this.muted=!0}Ka(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class q4{constructor(e,n){this.Ua=e,this.serializer=n,this.metadata=new vt,this.buffer=new Uint8Array,this.Wa=function(){return new TextDecoder("utf-8")}(),this.Ga().then(i=>{i&&i.sa()?this.metadata.resolve(i.ia.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(i==null?void 0:i.ia)}`))},i=>this.metadata.reject(i))}close(){return this.Ua.cancel()}async getMetadata(){return this.metadata.promise}async qa(){return await this.getMetadata(),this.Ga()}async Ga(){const e=await this.za();if(e===null)return null;const n=this.Wa.decode(e),i=Number(n);isNaN(i)&&this.ja(`length string (${n}) is not valid number`);const r=await this.Ha(i);return new _4(JSON.parse(r),e.length+i)}Ja(){return this.buffer.findIndex(e=>e===123)}async za(){for(;this.Ja()<0&&!await this.Ya(););if(this.buffer.length===0)return null;const e=this.Ja();e<0&&this.ja("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async Ha(e){for(;this.buffer.length<e;)await this.Ya()&&this.ja("Reached the end of bundle when more is expected.");const n=this.Wa.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}ja(e){throw this.Ua.cancel(),new Error(`Invalid bundle format: ${e}`)}async Ya(){const e=await this.Ua.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
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
 */class G4{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new z(M.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const n=await async function(r,s){const a=H(r),o={documents:s.map(f=>Nu(a.serializer,f))},u=await a.xo("BatchGetDocuments",a.serializer.databaseId,le.emptyPath(),o,s.length),c=new Map;u.forEach(f=>{const p=oU(a.serializer,f);c.set(p.key.toString(),p)});const d=[];return s.forEach(f=>{const p=c.get(f.toString());$(!!p),d.push(p)}),d}(this.datastore,e);return n.forEach(i=>this.recordVersion(i)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(i){this.lastTransactionError=i}this.writtenDocs.add(e.toString())}delete(e){this.write(new Uo(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,i)=>{const r=G.fromPath(i);this.mutations.push(new dy(r,this.precondition(r)))}),await async function(i,r){const s=H(i),a={writes:r.map(o=>Ou(s.serializer,o))};await s.Co("Commit",s.serializer.databaseId,le.emptyPath(),a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw Q();n=Y.min()}const i=this.readVersions.get(e.key.toString());if(i){if(!n.isEqual(i))throw new z(M.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?n.isEqual(Y.min())?ke.exists(!1):ke.updateTime(n):ke.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Y.min()))throw new z(M.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return ke.updateTime(n)}return ke.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class H4{constructor(e,n,i,r,s){this.asyncQueue=e,this.datastore=n,this.options=i,this.updateFunction=r,this.deferred=s,this.Za=i.maxAttempts,this.Yo=new Sy(this.asyncQueue,"transaction_retry")}Xa(){this.Za-=1,this.eu()}eu(){this.Yo.$o(async()=>{const e=new G4(this.datastore),n=this.tu(e);n&&n.then(i=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(i)}).catch(r=>{this.nu(r)}))}).catch(i=>{this.nu(i)})})}tu(e){try{const n=this.updateFunction(e);return!ec(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}nu(e){this.Za>0&&this.ru(e)?(this.Za-=1,this.asyncQueue.enqueueAndForget(()=>(this.eu(),Promise.resolve()))):this.deferred.reject(e)}ru(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||n==="already-exists"||!QR(n)}return!1}}/**
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
 */class K4{constructor(e,n,i,r){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=i,this.databaseInfo=r,this.user=mt.UNAUTHENTICATED,this.clientId=oR.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(i,async s=>{B("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(i,s=>(B("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new z(M.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new vt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const i=jo(n,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Rh(t,e){t.asyncQueue.verifyOperationInProgress(),B("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let i=n.initialUser;t.setCredentialChangeListener(async r=>{i.isEqual(r)||(await IC(e.localStore,r),i=r)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Tg(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Fy(t);B("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(i=>sI(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>sI(e.remoteStore,r)),t._onlineComponents=e}function KC(t){return t.name==="FirebaseError"?t.code===M.FAILED_PRECONDITION||t.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Fy(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){B("FirestoreClient","Using user provided OfflineComponentProvider");try{await Rh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!KC(n))throw n;Bn("Error using user provided cache. Falling back to memory cache: "+n),await Rh(t,new Eg)}}else B("FirestoreClient","Using default OfflineComponentProvider"),await Rh(t,new Eg);return t._offlineComponents}async function ff(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(B("FirestoreClient","Using user provided OnlineComponentProvider"),await Tg(t,t._uninitializedComponentsProvider._online)):(B("FirestoreClient","Using default OnlineComponentProvider"),await Tg(t,new By))),t._onlineComponents}function QC(t){return Fy(t).then(e=>e.persistence)}function jy(t){return Fy(t).then(e=>e.localStore)}function $C(t){return ff(t).then(e=>e.remoteStore)}function qy(t){return ff(t).then(e=>e.syncEngine)}function Q4(t){return ff(t).then(e=>e.datastore)}async function vo(t){const e=await ff(t),n=e.eventManager;return n.onListen=w4.bind(null,e.syncEngine),n.onUnlisten=A4.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=I4.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=b4.bind(null,e.syncEngine),n}function $4(t){return t.asyncQueue.enqueue(async()=>{const e=await QC(t),n=await $C(t);return e.setNetworkEnabled(!0),function(r){const s=H(r);return s.M_.delete(0),lc(s)}(n)})}function Y4(t){return t.asyncQueue.enqueue(async()=>{const e=await QC(t),n=await $C(t);return e.setNetworkEnabled(!1),async function(r){const s=H(r);s.M_.add(0),await zo(s),s.N_.set("Offline")}(n)})}function X4(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,a){try{const o=await function(c,d){const f=H(c);return f.persistence.runTransaction("read document","readonly",p=>f.localDocuments.getDocument(p,d))}(r,s);o.isFoundDocument()?a.resolve(o):o.isNoDocument()?a.resolve(null):a.reject(new z(M.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const u=jo(o,`Failed to get document '${s} from cache`);a.reject(u)}}(await jy(t),e,n)),n.promise}function YC(t,e,n={}){const i=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,u,c){const d=new df({next:p=>{a.enqueueAndForget(()=>Py(s,f));const g=p.docs.has(o);!g&&p.fromCache?c.reject(new z(M.UNAVAILABLE,"Failed to get document because the client is offline.")):g&&p.fromCache&&u&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new xy(ko(o.path),d,{includeMetadataChanges:!0,ra:!0});return Oy(s,f)}(await vo(t),t.asyncQueue,e,n,i)),i.promise}function W4(t,e){const n=new vt;return t.asyncQueue.enqueueAndForget(async()=>async function(r,s,a){try{const o=await yd(r,s,!0),u=new BC(s,o.hs),c=u.da(o.documents),d=u.applyChanges(c,!1);a.resolve(d.snapshot)}catch(o){const u=jo(o,`Failed to execute query '${s} against cache`);a.reject(u)}}(await jy(t),e,n)),n.promise}function XC(t,e,n={}){const i=new vt;return t.asyncQueue.enqueueAndForget(async()=>function(s,a,o,u,c){const d=new df({next:p=>{a.enqueueAndForget(()=>Py(s,f)),p.fromCache&&u.source==="server"?c.reject(new z(M.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(p)},error:p=>c.reject(p)}),f=new xy(o,d,{includeMetadataChanges:!0,ra:!0});return Oy(s,f)}(await vo(t),t.asyncQueue,e,n,i)),i.promise}function J4(t,e){const n=new df(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,s){H(r).z_.add(s),s.next()}(await vo(t),n)),()=>{n.$a(),t.asyncQueue.enqueueAndForget(async()=>function(r,s){H(r).z_.delete(s)}(await vo(t),n))}}function Z4(t,e,n,i){const r=function(a,o){let u;return u=typeof a=="string"?YR().encode(a):a,function(d,f){return new q4(d,f)}(function(d,f){if(d instanceof Uint8Array)return hI(d,f);if(d instanceof ArrayBuffer)return hI(new Uint8Array(d),f);if(d instanceof ReadableStream)return d.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(u),o)}(n,oc(e));t.asyncQueue.enqueueAndForget(async()=>{F4(await qy(t),r,i)})}function ez(t,e){return t.asyncQueue.enqueue(async()=>function(i,r){const s=H(i);return s.persistence.runTransaction("Get named query","readonly",a=>s.$r.getNamedQuery(a,r))}(await jy(t),e))}/**
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
 */function WC(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const dI=new Map;/**
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
 */function Gy(t,e,n){if(!n)throw new z(M.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function JC(t,e,n,i){if(e===!0&&i===!0)throw new z(M.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fI(t){if(!G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function mI(t){if(G.isDocumentKey(t))throw new z(M.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function mf(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Q()}function fe(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new z(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=mf(t);throw new z(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function ZC(t,e){if(e<=0)throw new z(M.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
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
 */class pI{constructor(e){var n,i;if(e.host===void 0){if(e.ssl!==void 0)throw new z(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new z(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}JC("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=WC((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new z(M.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,r){return i.timeoutSeconds===r.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uc{constructor(e,n,i,r){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=i,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new pI({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new z(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new pI(e),e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new Wk;switch(i.type){case"firstParty":return new tL(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new z(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const i=dI.get(n);i&&(B("ComponentProvider","Removing Datastore"),dI.delete(n),i.terminate())}(this),Promise.resolve()}}function tz(t,e,n,i={}){var r;const s=(t=fe(t,uc))._getSettings(),a=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==a&&Bn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let o,u;if(typeof i.mockUserToken=="string")o=i.mockUserToken,u=mt.MOCK_USER;else{o=pP(i.mockUserToken,(r=t._app)===null||r===void 0?void 0:r.options.projectId);const c=i.mockUserToken.sub||i.mockUserToken.user_id;if(!c)throw new z(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new mt(c)}t._authCredentials=new Jk(new aR(o,u))}}/**
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
 */let qt=class eD{constructor(e,n,i){this.converter=n,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new eD(this.firestore,e,this._query)}},ze=class tD{constructor(e,n,i){this.converter=n,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new wr(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new tD(this.firestore,e,this._key)}},wr=class nD extends qt{constructor(e,n,i){super(e,n,ko(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new G(e))}withConverter(e){return new nD(this.firestore,e,this._path)}};function iD(t,e,...n){if(t=X(t),Gy("collection","path",e),t instanceof uc){const i=le.fromString(e,...n);return mI(i),new wr(t,null,i)}{if(!(t instanceof ze||t instanceof wr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(le.fromString(e,...n));return mI(i),new wr(t.firestore,null,i)}}function nz(t,e){if(t=fe(t,uc),Gy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new z(M.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new qt(t,null,function(i){return new Bi(le.emptyPath(),i)}(e))}function wd(t,e,...n){if(t=X(t),arguments.length===1&&(e=oR.newId()),Gy("doc","path",e),t instanceof uc){const i=le.fromString(e,...n);return fI(i),new ze(t,null,new G(i))}{if(!(t instanceof ze||t instanceof wr))throw new z(M.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=t._path.child(le.fromString(e,...n));return fI(i),new ze(t.firestore,t instanceof wr?t.converter:null,new G(i))}}function rD(t,e){return t=X(t),e=X(e),(t instanceof ze||t instanceof wr)&&(e instanceof ze||e instanceof wr)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function sD(t,e){return t=X(t),e=X(e),t instanceof qt&&e instanceof qt&&t.firestore===e.firestore&&nc(t._query,e._query)&&t.converter===e.converter}/**
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
 */class iz{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new Sy(this,"async_queue_retry"),this.hu=()=>{const n=Sh();n&&B("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Yo.Wo()};const e=Sh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pu(),this.Iu(e)}enterRestrictedMode(e){if(!this.ou){this.ou=!0,this.cu=e||!1;const n=Sh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.hu)}}enqueue(e){if(this.Pu(),this.ou)return new Promise(()=>{});const n=new vt;return this.Iu(()=>this.ou&&this.cu?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.su.push(e),this.Tu()))}async Tu(){if(this.su.length!==0){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(e){if(!qr(e))throw e;B("AsyncQueue","Operation failed with retryable error: "+e)}this.su.length>0&&this.Yo.$o(()=>this.Tu())}}Iu(e){const n=this.iu.then(()=>(this.uu=!0,e().catch(i=>{this.au=i,this.uu=!1;const r=function(a){let o=a.message||"";return a.stack&&(o=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),o}(i);throw We("INTERNAL UNHANDLED ERROR: ",r),i}).then(i=>(this.uu=!1,i))));return this.iu=n,n}enqueueAfterDelay(e,n,i){this.Pu(),this.lu.indexOf(e)>-1&&(n=0);const r=Ny.createAndSchedule(this,e,n,i,s=>this.Eu(s));return this._u.push(r),r}Pu(){this.au&&Q()}verifyOperationInProgress(){}async du(){let e;do e=this.iu,await e;while(e!==this.iu)}Au(e){for(const n of this._u)if(n.timerId===e)return!0;return!1}Ru(e){return this.du().then(()=>{this._u.sort((n,i)=>n.targetTimeMs-i.targetTimeMs);for(const n of this._u)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.du()})}Vu(e){this.lu.push(e)}Eu(e){const n=this._u.indexOf(e);this._u.splice(n,1)}}function wg(t){return function(n,i){if(typeof n!="object"||n===null)return!1;const r=n;for(const s of i)if(s in r&&typeof r[s]=="function")return!0;return!1}(t,["next","error","complete"])}class rz{constructor(){this._progressObserver={},this._taskCompletionResolver=new vt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,i){this._progressObserver={next:e,error:n,complete:i}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const sz=-1;let Ke=class extends uc{constructor(e,n,i,r){super(e,n,i,r),this.type="firestore",this._queue=function(){return new iz}(),this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||aD(this),this._firestoreClient.terminate()}};function Tt(t){return t._firestoreClient||aD(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function aD(t){var e,n,i;const r=t._freezeSettings(),s=function(o,u,c,d){return new NL(o,u,c,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,WC(d.experimentalLongPollingOptions),d.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,r);t._firestoreClient=new K4(t._authCredentials,t._appCheckCredentials,t._queue,s),!((n=r.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((i=r.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.localCache.kind,_offline:r.localCache._offlineComponentProvider,_online:r.localCache._onlineComponentProvider})}function az(t,e){lD(t=fe(t,Ke));const n=Tt(t);if(n._uninitializedComponentsProvider)throw new z(M.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const i=t._freezeSettings(),r=new By;return oD(n,r,new HC(r,i.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function oz(t){lD(t=fe(t,Ke));const e=Tt(t);if(e._uninitializedComponentsProvider)throw new z(M.FAILED_PRECONDITION,"SDK cache is already specified.");Bn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=t._freezeSettings(),i=new By;return oD(e,i,new j4(i,n.cacheSizeBytes))}function oD(t,e,n){const i=new vt;return t.asyncQueue.enqueue(async()=>{try{await Rh(t,n),await Tg(t,e),i.resolve()}catch(r){const s=r;if(!KC(s))throw s;Bn("Error enabling indexeddb cache. Falling back to memory cache: "+s),i.reject(s)}}).then(()=>i.promise)}function lz(t){if(t._initialized&&!t._terminated)throw new z(M.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new vt;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(i){if(!ei.D())return Promise.resolve();const r=i+"main";await ei.delete(r)}(Iy(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function uz(t){return function(n){const i=new vt;return n.asyncQueue.enqueueAndForget(async()=>N4(await qy(n),i)),i.promise}(Tt(t=fe(t,Ke)))}function cz(t){return $4(Tt(t=fe(t,Ke)))}function hz(t){return Y4(Tt(t=fe(t,Ke)))}function dz(t,e){const n=Tt(t=fe(t,Ke)),i=new rz;return Z4(n,t._databaseId,e,i),i}function fz(t,e){return ez(Tt(t=fe(t,Ke)),e).then(n=>n?new qt(t,null,n.query):null)}function lD(t){if(t._initialized||t._terminated)throw new z(M.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class ri{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ri(ht.fromBase64String(e))}catch(n){throw new z(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ri(ht.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */let Mr=class{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new z(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Me(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}};/**
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
 */let $s=class{constructor(e){this._methodName=e}};/**
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
 */class pf{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new z(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new z(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return te(this._lat,e._lat)||te(this._long,e._long)}}/**
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
 */const mz=/^__.*__$/;class pz{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return this.fieldMask!==null?new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms):new Lo(e,this.data,n,this.fieldTransforms)}}class uD{constructor(e,n,i){this.data=e,this.fieldMask=n,this.fieldTransforms=i}toMutation(e,n){return new Fi(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function cD(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class gf{constructor(e,n,i,r,s,a){this.settings=e,this.databaseId=n,this.serializer=i,this.ignoreUndefinedProperties=r,s===void 0&&this.mu(),this.fieldTransforms=s||[],this.fieldMask=a||[]}get path(){return this.settings.path}get fu(){return this.settings.fu}gu(e){return new gf(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}pu(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:i,yu:!1});return r.wu(e),r}Su(e){var n;const i=(n=this.path)===null||n===void 0?void 0:n.child(e),r=this.gu({path:i,yu:!1});return r.mu(),r}bu(e){return this.gu({path:void 0,yu:!0})}Du(e){return Id(e,this.settings.methodName,this.settings.Cu||!1,this.path,this.settings.vu)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}mu(){if(this.path)for(let e=0;e<this.path.length;e++)this.wu(this.path.get(e))}wu(e){if(e.length===0)throw this.Du("Document fields must not be empty");if(cD(this.fu)&&mz.test(e))throw this.Du('Document fields cannot begin and end with "__"')}}class gz{constructor(e,n,i){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=i||oc(e)}Fu(e,n,i,r=!1){return new gf({fu:e,methodName:n,vu:i,path:Me.emptyPath(),yu:!1,Cu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ys(t){const e=t._freezeSettings(),n=oc(t._databaseId);return new gz(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _f(t,e,n,i,r,s={}){const a=t.Fu(s.merge||s.mergeFields?2:0,e,n,r);Wy("Data must be an object, but it was:",a,i);const o=fD(i,a);let u,c;if(s.merge)u=new en(a.fieldMask),c=a.fieldTransforms;else if(s.mergeFields){const d=[];for(const f of s.mergeFields){const p=Ig(e,f,n);if(!a.contains(p))throw new z(M.INVALID_ARGUMENT,`Field '${p}' is specified in your field mask but missing from your input data.`);pD(d,p)||d.push(p)}u=new en(d),c=a.fieldTransforms.filter(f=>u.covers(f.field))}else u=null,c=a.fieldTransforms;return new pz(new Rt(o),u,c)}class cc extends $s{_toFieldTransform(e){if(e.fu!==2)throw e.fu===1?e.Du(`${this._methodName}() can only appear at the top level of your update data`):e.Du(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof cc}}function hD(t,e,n){return new gf({fu:3,vu:e.settings.vu,methodName:t._methodName,yu:n},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Hy extends $s{_toFieldTransform(e){return new rc(e.path,new co)}isEqual(e){return e instanceof Hy}}class Ky extends $s{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=hD(this,e,!0),i=this.Mu.map(s=>Xs(s,n)),r=new xs(i);return new rc(e.path,r)}isEqual(e){return e instanceof Ky&&pu(this.Mu,e.Mu)}}class Qy extends $s{constructor(e,n){super(e),this.Mu=n}_toFieldTransform(e){const n=hD(this,e,!0),i=this.Mu.map(s=>Xs(s,n)),r=new Ms(i);return new rc(e.path,r)}isEqual(e){return e instanceof Qy&&pu(this.Mu,e.Mu)}}class $y extends $s{constructor(e,n){super(e),this.xu=n}_toFieldTransform(e){const n=new ho(e.serializer,BR(e.serializer,this.xu));return new rc(e.path,n)}isEqual(e){return e instanceof $y&&this.xu===e.xu}}function Yy(t,e,n,i){const r=t.Fu(1,e,n);Wy("Data must be an object, but it was:",r,i);const s=[],a=Rt.empty();Qs(i,(u,c)=>{const d=Jy(e,u,n);c=X(c);const f=r.Su(d);if(c instanceof cc)s.push(d);else{const p=Xs(c,f);p!=null&&(s.push(d),a.set(d,p))}});const o=new en(s);return new uD(a,o,r.fieldTransforms)}function Xy(t,e,n,i,r,s){const a=t.Fu(1,e,n),o=[Ig(e,i,n)],u=[r];if(s.length%2!=0)throw new z(M.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let p=0;p<s.length;p+=2)o.push(Ig(e,s[p])),u.push(s[p+1]);const c=[],d=Rt.empty();for(let p=o.length-1;p>=0;--p)if(!pD(c,o[p])){const g=o[p];let R=u[p];R=X(R);const N=a.Su(g);if(R instanceof cc)c.push(g);else{const x=Xs(R,N);x!=null&&(c.push(g),d.set(g,x))}}const f=new en(c);return new uD(d,f,a.fieldTransforms)}function dD(t,e,n,i=!1){return Xs(n,t.Fu(i?4:3,e))}function Xs(t,e){if(mD(t=X(t)))return Wy("Unsupported field value:",e,t),fD(t,e);if(t instanceof $s)return function(i,r){if(!cD(r.fu))throw r.Du(`${i._methodName}() can only be used with update() and set()`);if(!r.path)throw r.Du(`${i._methodName}() is not currently supported inside arrays`);const s=i._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.yu&&e.fu!==4)throw e.Du("Nested arrays are not supported");return function(i,r){const s=[];let a=0;for(const o of i){let u=Xs(o,r.bu(a));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),a++}return{arrayValue:{values:s}}}(t,e)}return function(i,r){if((i=X(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return BR(r.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const s=Le.fromDate(i);return{timestampValue:fo(r.serializer,s)}}if(i instanceof Le){const s=new Le(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:fo(r.serializer,s)}}if(i instanceof pf)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof ri)return{bytesValue:JR(r.serializer,i._byteString)};if(i instanceof ze){const s=r.databaseId,a=i.firestore._databaseId;if(!a.isEqual(s))throw r.Du(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:_y(i.firestore._databaseId||r.databaseId,i._key.path)}}throw r.Du(`Unsupported field value: ${mf(i)}`)}(t,e)}function fD(t,e){const n={};return ER(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Qs(t,(i,r)=>{const s=Xs(r,e.pu(i));s!=null&&(n[i]=s)}),{mapValue:{fields:n}}}function mD(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Le||t instanceof pf||t instanceof ri||t instanceof ze||t instanceof $s)}function Wy(t,e,n){if(!mD(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const i=mf(n);throw i==="an object"?e.Du(t+" a custom object"):e.Du(t+" "+i)}}function Ig(t,e,n){if((e=X(e))instanceof Mr)return e._internalPath;if(typeof e=="string")return Jy(t,e);throw Id("Field path arguments must be of type string or ",t,!1,void 0,n)}const _z=new RegExp("[~\\*/\\[\\]]");function Jy(t,e,n){if(e.search(_z)>=0)throw Id(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Mr(...e.split("."))._internalPath}catch{throw Id(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Id(t,e,n,i,r){const s=i&&!i.isEmpty(),a=r!==void 0;let o=`Function ${e}() called with invalid data`;n&&(o+=" (via `toFirestore()`)"),o+=". ";let u="";return(s||a)&&(u+=" (found",s&&(u+=` in field ${i}`),a&&(u+=` in document ${r}`),u+=")"),new z(M.INVALID_ARGUMENT,o+t+u)}function pD(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Pu{constructor(e,n,i,r,s){this._firestore=e,this._userDataWriter=n,this._key=i,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yz(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(yf("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class yz extends Pu{data(){return super.data()}}function yf(t,e){return typeof e=="string"?Jy(t,e):e instanceof Mr?e._internalPath:e._delegate._internalPath}/**
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
 */function gD(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new z(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zy{}class hc extends Zy{}function Xi(t,e,...n){let i=[];e instanceof Zy&&i.push(e),i=i.concat(n),function(s){const a=s.filter(u=>u instanceof ev).length,o=s.filter(u=>u instanceof vf).length;if(a>1||a>0&&o>0)throw new z(M.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(i);for(const r of i)t=r._apply(t);return t}class vf extends hc{constructor(e,n,i){super(),this._field=e,this._op=n,this._value=i,this.type="where"}static _create(e,n,i){return new vf(e,n,i)}_apply(e){const n=this._parse(e);return yD(e._query,n),new qt(e.firestore,e.converter,lg(e._query,n))}_parse(e){const n=Ys(e.firestore);return function(s,a,o,u,c,d,f){let p;if(c.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new z(M.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){_I(f,d);const g=[];for(const R of f)g.push(gI(u,s,R));p={arrayValue:{values:g}}}else p=gI(u,s,f)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||_I(f,d),p=dD(o,a,f,d==="in"||d==="not-in");return ce.create(c,d,p)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}function vz(t,e,n){const i=e,r=yf("where",t);return vf._create(r,i,n)}class ev extends Zy{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new ev(e,n)}_parse(e){const n=this._queryConstraints.map(i=>i._parse(e)).filter(i=>i.getFilters().length>0);return n.length===1?n[0]:ve.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(r,s){let a=r;const o=s.getFlattenedFilters();for(const u of o)yD(a,u),a=lg(a,u)}(e._query,n),new qt(e.firestore,e.converter,lg(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class tv extends hc{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new tv(e,n)}_apply(e){const n=function(r,s,a){if(r.startAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new z(M.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Du(s,a)}(e._query,this._field,this._direction);return new qt(e.firestore,e.converter,function(r,s){const a=r.explicitOrderBy.concat([s]);return new Bi(r.path,r.collectionGroup,a,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function Ez(t,e="asc"){const n=e,i=yf("orderBy",t);return tv._create(i,n)}class Ef extends hc{constructor(e,n,i){super(),this.type=e,this._limit=n,this._limitType=i}static _create(e,n,i){return new Ef(e,n,i)}_apply(e){return new qt(e.firestore,e.converter,md(e._query,this._limit,this._limitType))}}function Tz(t){return ZC("limit",t),Ef._create("limit",t,"F")}function wz(t){return ZC("limitToLast",t),Ef._create("limitToLast",t,"L")}class Tf extends hc{constructor(e,n,i){super(),this.type=e,this._docOrFields=n,this._inclusive=i}static _create(e,n,i){return new Tf(e,n,i)}_apply(e){const n=_D(e,this.type,this._docOrFields,this._inclusive);return new qt(e.firestore,e.converter,function(r,s){return new Bi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,n))}}function Iz(...t){return Tf._create("startAt",t,!0)}function Az(...t){return Tf._create("startAfter",t,!1)}class wf extends hc{constructor(e,n,i){super(),this.type=e,this._docOrFields=n,this._inclusive=i}static _create(e,n,i){return new wf(e,n,i)}_apply(e){const n=_D(e,this.type,this._docOrFields,this._inclusive);return new qt(e.firestore,e.converter,function(r,s){return new Bi(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,n))}}function bz(...t){return wf._create("endBefore",t,!1)}function Sz(...t){return wf._create("endAt",t,!0)}function _D(t,e,n,i){if(n[0]=X(n[0]),n[0]instanceof Pu)return function(s,a,o,u,c){if(!u)throw new z(M.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const d=[];for(const f of qa(s))if(f.field.isKeyField())d.push(Ps(a,u.key));else{const p=u.data.field(f.field);if(rf(p))throw new z(M.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+f.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(p===null){const g=f.field.canonicalString();throw new z(M.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${g}' (used as the orderBy) does not exist.`)}d.push(p)}return new Vr(d,c)}(t._query,t.firestore._databaseId,e,n[0]._document,i);{const r=Ys(t.firestore);return function(a,o,u,c,d,f){const p=a.explicitOrderBy;if(d.length>p.length)throw new z(M.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const g=[];for(let R=0;R<d.length;R++){const N=d[R];if(p[R].field.isKeyField()){if(typeof N!="string")throw new z(M.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof N}`);if(!cy(a)&&N.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${N}' contains a slash.`);const x=a.path.child(le.fromString(N));if(!G.isDocumentKey(x))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${x}' is not because it contains an odd number of segments.`);const I=new G(x);g.push(Ps(o,I))}else{const x=dD(u,c,N);g.push(x)}}return new Vr(g,f)}(t._query,t.firestore._databaseId,r,e,n,i)}}function gI(t,e,n){if(typeof(n=X(n))=="string"){if(n==="")throw new z(M.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!cy(e)&&n.indexOf("/")!==-1)throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=e.path.child(le.fromString(n));if(!G.isDocumentKey(i))throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Ps(t,new G(i))}if(n instanceof ze)return Ps(t,n._key);throw new z(M.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${mf(n)}.`)}function _I(t,e){if(!Array.isArray(t)||t.length===0)throw new z(M.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function yD(t,e){const n=function(r,s){for(const a of r)for(const o of a.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new z(M.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class nv{convertValue(e,n="none"){switch(Os(e)){case 0:return null;case 1:return e.booleanValue;case 2:return je(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Nr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Q()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const i={};return Qs(e,(r,s)=>{i[r]=this.convertValue(s,n)}),i}convertGeoPoint(e){return new pf(je(e.latitude),je(e.longitude))}convertArray(e,n){return(e.values||[]).map(i=>this.convertValue(i,n))}convertServerTimestamp(e,n){switch(n){case"previous":const i=ly(e);return i==null?null:this.convertValue(i,n);case"estimate":return this.convertTimestamp(Su(e));default:return null}}convertTimestamp(e){const n=Mi(e);return new Le(n.seconds,n.nanos)}convertDocumentKey(e,n){const i=le.fromString(e);$(uC(i));const r=new Or(i.get(1),i.get(3)),s=new G(i.popFirst(5));return r.isEqual(n)||We(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
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
 */function If(t,e,n){let i;return i=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,i}class Rz extends nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}/**
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
 */class hs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}let ki=class extends Pu{constructor(e,n,i,r,s,a){super(e,n,i,r,a),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Zl(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const i=this._document.data.field(yf("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,n.serverTimestamps)}}},Zl=class extends ki{data(e={}){return super.data(e)}},kr=class{constructor(e,n,i,r){this._firestore=e,this._userDataWriter=n,this._snapshot=r,this.metadata=new hs(r.hasPendingWrites,r.fromCache),this.query=i}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(i=>{e.call(n,new Zl(this._firestore,this._userDataWriter,i.key,i,new hs(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new z(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let a=0;return r._snapshot.docChanges.map(o=>{const u=new Zl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const u=new Zl(r._firestore,r._userDataWriter,o.doc.key,o.doc,new hs(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,d=-1;return o.type!==0&&(c=a.indexOf(o.doc.key),a=a.delete(o.doc.key)),o.type!==1&&(a=a.add(o.doc),d=a.indexOf(o.doc.key)),{type:Cz(o.type),doc:u,oldIndex:c,newIndex:d}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}};function Cz(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}function vD(t,e){return t instanceof ki&&e instanceof ki?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof kr&&e instanceof kr&&t._firestore===e._firestore&&sD(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
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
 */function Dz(t){t=fe(t,ze);const e=fe(t.firestore,Ke);return YC(Tt(e),t._key).then(n=>iv(e,t,n))}class Ws extends nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new ri(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,n)}}function Nz(t){t=fe(t,ze);const e=fe(t.firestore,Ke),n=Tt(e),i=new Ws(e);return X4(n,t._key).then(r=>new ki(e,i,t._key,r,new hs(r!==null&&r.hasLocalMutations,!0),t.converter))}function Oz(t){t=fe(t,ze);const e=fe(t.firestore,Ke);return YC(Tt(e),t._key,{source:"server"}).then(n=>iv(e,t,n))}function Pz(t){t=fe(t,qt);const e=fe(t.firestore,Ke),n=Tt(e),i=new Ws(e);return gD(t._query),XC(n,t._query).then(r=>new kr(e,i,t,r))}function Vz(t){t=fe(t,qt);const e=fe(t.firestore,Ke),n=Tt(e),i=new Ws(e);return W4(n,t._query).then(r=>new kr(e,i,t,r))}function xz(t){t=fe(t,qt);const e=fe(t.firestore,Ke),n=Tt(e),i=new Ws(e);return XC(n,t._query,{source:"server"}).then(r=>new kr(e,i,t,r))}function yI(t,e,n){t=fe(t,ze);const i=fe(t.firestore,Ke),r=If(t.converter,e,n);return dc(i,[_f(Ys(i),"setDoc",t._key,r,t.converter!==null,n).toMutation(t._key,ke.none())])}function vI(t,e,n,...i){t=fe(t,ze);const r=fe(t.firestore,Ke),s=Ys(r);let a;return a=typeof(e=X(e))=="string"||e instanceof Mr?Xy(s,"updateDoc",t._key,e,n,i):Yy(s,"updateDoc",t._key,e),dc(r,[a.toMutation(t._key,ke.exists(!0))])}function Mz(t){return dc(fe(t.firestore,Ke),[new Uo(t._key,ke.none())])}function kz(t,e){const n=fe(t.firestore,Ke),i=wd(t),r=If(t.converter,e);return dc(n,[_f(Ys(t.firestore),"addDoc",i._key,r,t.converter!==null,{}).toMutation(i._key,ke.exists(!1))]).then(()=>i)}function ED(t,...e){var n,i,r;t=X(t);let s={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||wg(e[a])||(s=e[a],a++);const o={includeMetadataChanges:s.includeMetadataChanges,source:s.source};if(wg(e[a])){const f=e[a];e[a]=(n=f.next)===null||n===void 0?void 0:n.bind(f),e[a+1]=(i=f.error)===null||i===void 0?void 0:i.bind(f),e[a+2]=(r=f.complete)===null||r===void 0?void 0:r.bind(f)}let u,c,d;if(t instanceof ze)c=fe(t.firestore,Ke),d=ko(t._key.path),u={next:f=>{e[a]&&e[a](iv(c,t,f))},error:e[a+1],complete:e[a+2]};else{const f=fe(t,qt);c=fe(f.firestore,Ke),d=f._query;const p=new Ws(c);u={next:g=>{e[a]&&e[a](new kr(c,p,f,g))},error:e[a+1],complete:e[a+2]},gD(t._query)}return function(p,g,R,N){const x=new df(N),I=new xy(g,x,R);return p.asyncQueue.enqueueAndForget(async()=>Oy(await vo(p),I)),()=>{x.$a(),p.asyncQueue.enqueueAndForget(async()=>Py(await vo(p),I))}}(Tt(c),d,o,u)}function Lz(t,e){return J4(Tt(t=fe(t,Ke)),wg(e)?e:{next:e})}function dc(t,e){return function(i,r){const s=new vt;return i.asyncQueue.enqueueAndForget(async()=>S4(await qy(i),r,s)),s.promise}(Tt(t),e)}function iv(t,e,n){const i=n.docs.get(e._key),r=new Ws(t);return new ki(t,r,e._key,i,new hs(n.hasPendingWrites,n.fromCache),e.converter)}/**
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
 */const Uz={maxAttempts:5};/**
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
 */let zz=class{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Ys(e)}set(e,n,i){this._verifyNotCommitted();const r=rr(e,this._firestore),s=If(r.converter,n,i),a=_f(this._dataReader,"WriteBatch.set",r._key,s,r.converter!==null,i);return this._mutations.push(a.toMutation(r._key,ke.none())),this}update(e,n,i,...r){this._verifyNotCommitted();const s=rr(e,this._firestore);let a;return a=typeof(n=X(n))=="string"||n instanceof Mr?Xy(this._dataReader,"WriteBatch.update",s._key,n,i,r):Yy(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(a.toMutation(s._key,ke.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=rr(e,this._firestore);return this._mutations=this._mutations.concat(new Uo(n._key,ke.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new z(M.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}};function rr(t,e){if((t=X(t)).firestore!==e)throw new z(M.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
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
 */let Bz=class extends class{constructor(n,i){this._firestore=n,this._transaction=i,this._dataReader=Ys(n)}get(n){const i=rr(n,this._firestore),r=new Rz(this._firestore);return this._transaction.lookup([i._key]).then(s=>{if(!s||s.length!==1)return Q();const a=s[0];if(a.isFoundDocument())return new Pu(this._firestore,r,a.key,a,i.converter);if(a.isNoDocument())return new Pu(this._firestore,r,i._key,null,i.converter);throw Q()})}set(n,i,r){const s=rr(n,this._firestore),a=If(s.converter,i,r),o=_f(this._dataReader,"Transaction.set",s._key,a,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(n,i,r,...s){const a=rr(n,this._firestore);let o;return o=typeof(i=X(i))=="string"||i instanceof Mr?Xy(this._dataReader,"Transaction.update",a._key,i,r,s):Yy(this._dataReader,"Transaction.update",a._key,i),this._transaction.update(a._key,o),this}delete(n){const i=rr(n,this._firestore);return this._transaction.delete(i._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=rr(e,this._firestore),i=new Ws(this._firestore);return super.get(e).then(r=>new ki(this._firestore,i,n._key,r._document,new hs(!1,!1),n.converter))}};function Fz(t,e,n){t=fe(t,Ke);const i=Object.assign(Object.assign({},Uz),n);return function(s){if(s.maxAttempts<1)throw new z(M.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(s,a,o){const u=new vt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await Q4(s);new H4(s.asyncQueue,c,o,a,u).Xa()}),u.promise}(Tt(t),r=>e(new Bz(t,r)),i)}/**
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
 */function jz(){return new cc("deleteField")}function qz(){return new Hy("serverTimestamp")}function Gz(...t){return new Ky("arrayUnion",t)}function Hz(...t){return new Qy("arrayRemove",t)}function Kz(t){return new $y("increment",t)}(function(e,n=!0){(function(r){Mo=r})(Br),Vi(new xn("firestore",(i,{instanceIdentifier:r,options:s})=>{const a=i.getProvider("app").getImmediate(),o=new Ke(new Zk(i.getProvider("auth-internal")),new iL(i.getProvider("app-check-internal")),function(c,d){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new z(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Or(c.options.projectId,d)}(a,r),a);return s=Object.assign({useFetchStreams:n},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),yn(dw,"4.6.3",e),yn(dw,"4.6.3","esm2017")})();const Qz="@firebase/firestore-compat",$z="0.3.32";/**
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
 */function rv(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new z("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function EI(){if(typeof Uint8Array>"u")throw new z("unimplemented","Uint8Arrays are not available in this environment.")}function TI(){if(!CL())throw new z("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Vu{constructor(e){this._delegate=e}static fromBase64String(e){return TI(),new Vu(ri.fromBase64String(e))}static fromUint8Array(e){return EI(),new Vu(ri.fromUint8Array(e))}toBase64(){return TI(),this._delegate.toBase64()}toUint8Array(){return EI(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Ag(t){return Yz(t,["next","error","complete"])}function Yz(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const i of e)if(i in n&&typeof n[i]=="function")return!0;return!1}/**
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
 */class Xz{enableIndexedDbPersistence(e,n){return az(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return oz(e._delegate)}clearIndexedDbPersistence(e){return lz(e._delegate)}}class TD{constructor(e,n,i){this._delegate=n,this._persistenceProvider=i,this.INTERNAL={delete:()=>this.terminate()},e instanceof Or||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&Bn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,i={}){tz(this._delegate,e,n,i)}enableNetwork(){return cz(this._delegate)}disableNetwork(){return hz(this._delegate)}enablePersistence(e){let n=!1,i=!1;return e&&(n=!!e.synchronizeTabs,i=!!e.experimentalForceOwningTab,JC("synchronizeTabs",n,"experimentalForceOwningTab",i)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,i)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return uz(this._delegate)}onSnapshotsInSync(e){return Lz(this._delegate,e)}get app(){if(!this._appCompat)throw new z("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Eo(this,iD(this._delegate,e))}catch(n){throw zt(n,"collection()","Firestore.collection()")}}doc(e){try{return new Dn(this,wd(this._delegate,e))}catch(n){throw zt(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Ut(this,nz(this._delegate,e))}catch(n){throw zt(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Fz(this._delegate,n=>e(new wD(this,n)))}batch(){return Tt(this._delegate),new ID(new zz(this._delegate,e=>dc(this._delegate,e)))}loadBundle(e){return dz(this._delegate,e)}namedQuery(e){return fz(this._delegate,e).then(n=>n?new Ut(this,n):null)}}class Af extends nv{constructor(e){super(),this.firestore=e}convertBytes(e){return new Vu(new ri(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return Dn.forKey(n,this.firestore,null)}}function Wz(t){Yk(t)}class wD{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new Af(e)}get(e){const n=ds(e);return this._delegate.get(n).then(i=>new xu(this._firestore,new ki(this._firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,n.converter)))}set(e,n,i){const r=ds(e);return i?(rv("Transaction.set",i),this._delegate.set(r,n,i)):this._delegate.set(r,n),this}update(e,n,i,...r){const s=ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,i,...r),this}delete(e){const n=ds(e);return this._delegate.delete(n),this}}class ID{constructor(e){this._delegate=e}set(e,n,i){const r=ds(e);return i?(rv("WriteBatch.set",i),this._delegate.set(r,n,i)):this._delegate.set(r,n),this}update(e,n,i,...r){const s=ds(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,i,...r),this}delete(e){const n=ds(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class zs{constructor(e,n,i){this._firestore=e,this._userDataWriter=n,this._delegate=i}fromFirestore(e,n){const i=new Zl(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Mu(this._firestore,i),n??{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const i=zs.INSTANCES;let r=i.get(e);r||(r=new WeakMap,i.set(e,r));let s=r.get(n);return s||(s=new zs(e,new Af(e),n),r.set(n,s)),s}}zs.INSTANCES=new WeakMap;class Dn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Af(e)}static forPath(e,n,i){if(e.length%2!==0)throw new z("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Dn(n,new ze(n._delegate,i,new G(e)))}static forKey(e,n,i){return new Dn(n,new ze(n._delegate,i,e))}get id(){return this._delegate.id}get parent(){return new Eo(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Eo(this.firestore,iD(this._delegate,e))}catch(n){throw zt(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=X(e),e instanceof ze?rD(this._delegate,e):!1}set(e,n){n=rv("DocumentReference.set",n);try{return n?yI(this._delegate,e,n):yI(this._delegate,e)}catch(i){throw zt(i,"setDoc()","DocumentReference.set()")}}update(e,n,...i){try{return arguments.length===1?vI(this._delegate,e):vI(this._delegate,e,n,...i)}catch(r){throw zt(r,"updateDoc()","DocumentReference.update()")}}delete(){return Mz(this._delegate)}onSnapshot(...e){const n=AD(e),i=bD(e,r=>new xu(this.firestore,new ki(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)));return ED(this._delegate,n,i)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Nz(this._delegate):(e==null?void 0:e.source)==="server"?n=Oz(this._delegate):n=Dz(this._delegate),n.then(i=>new xu(this.firestore,new ki(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)))}withConverter(e){return new Dn(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function zt(t,e,n){return t.message=t.message.replace(e,n),t}function AD(t){for(const e of t)if(typeof e=="object"&&!Ag(e))return e;return{}}function bD(t,e){var n,i;let r;return Ag(t[0])?r=t[0]:Ag(t[1])?r=t[1]:typeof t[0]=="function"?r={next:t[0],error:t[1],complete:t[2]}:r={next:t[1],error:t[2],complete:t[3]},{next:s=>{r.next&&r.next(e(s))},error:(n=r.error)===null||n===void 0?void 0:n.bind(r),complete:(i=r.complete)===null||i===void 0?void 0:i.bind(r)}}class xu{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new Dn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return vD(this._delegate,e._delegate)}}class Mu extends xu{data(e){const n=this._delegate.data(e);return this._delegate._converter||Xk(n!==void 0),n}}class Ut{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new Af(e)}where(e,n,i){try{return new Ut(this.firestore,Xi(this._delegate,vz(e,n,i)))}catch(r){throw zt(r,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Ut(this.firestore,Xi(this._delegate,Ez(e,n)))}catch(i){throw zt(i,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Ut(this.firestore,Xi(this._delegate,Tz(e)))}catch(n){throw zt(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Ut(this.firestore,Xi(this._delegate,wz(e)))}catch(n){throw zt(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Ut(this.firestore,Xi(this._delegate,Iz(...e)))}catch(n){throw zt(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Ut(this.firestore,Xi(this._delegate,Az(...e)))}catch(n){throw zt(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Ut(this.firestore,Xi(this._delegate,bz(...e)))}catch(n){throw zt(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Ut(this.firestore,Xi(this._delegate,Sz(...e)))}catch(n){throw zt(n,"endAt()","Query.endAt()")}}isEqual(e){return sD(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=Vz(this._delegate):(e==null?void 0:e.source)==="server"?n=xz(this._delegate):n=Pz(this._delegate),n.then(i=>new bg(this.firestore,new kr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)))}onSnapshot(...e){const n=AD(e),i=bD(e,r=>new bg(this.firestore,new kr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)));return ED(this._delegate,n,i)}withConverter(e){return new Ut(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Jz{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Mu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class bg{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Ut(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Mu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new Jz(this._firestore,n))}forEach(e,n){this._delegate.forEach(i=>{e.call(n,new Mu(this._firestore,i))})}isEqual(e){return vD(this._delegate,e._delegate)}}class Eo extends Ut{constructor(e,n){super(e,n),this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Dn(this.firestore,e):null}doc(e){try{return e===void 0?new Dn(this.firestore,wd(this._delegate)):new Dn(this.firestore,wd(this._delegate,e))}catch(n){throw zt(n,"doc()","CollectionReference.doc()")}}add(e){return kz(this._delegate,e).then(n=>new Dn(this.firestore,n))}isEqual(e){return rD(this._delegate,e._delegate)}withConverter(e){return new Eo(this.firestore,e?this._delegate.withConverter(zs.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function ds(t){return fe(t,ze)}/**
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
 */class sv{constructor(...e){this._delegate=new Mr(...e)}static documentId(){return new sv(Me.keyField().canonicalString())}isEqual(e){return e=X(e),e instanceof Mr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class ls{constructor(e){this._delegate=e}static serverTimestamp(){const e=qz();return e._methodName="FieldValue.serverTimestamp",new ls(e)}static delete(){const e=jz();return e._methodName="FieldValue.delete",new ls(e)}static arrayUnion(...e){const n=Gz(...e);return n._methodName="FieldValue.arrayUnion",new ls(n)}static arrayRemove(...e){const n=Hz(...e);return n._methodName="FieldValue.arrayRemove",new ls(n)}static increment(e){const n=Kz(e);return n._methodName="FieldValue.increment",new ls(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const Zz={Firestore:TD,GeoPoint:pf,Timestamp:Le,Blob:Vu,Transaction:wD,WriteBatch:ID,DocumentReference:Dn,DocumentSnapshot:xu,Query:Ut,QueryDocumentSnapshot:Mu,QuerySnapshot:bg,CollectionReference:Eo,FieldPath:sv,FieldValue:ls,setLogLevel:Wz,CACHE_SIZE_UNLIMITED:sz};function eB(t,e){t.INTERNAL.registerComponent(new xn("firestore-compat",n=>{const i=n.getProvider("app-compat").getImmediate(),r=n.getProvider("firestore").getImmediate();return e(i,r)},"PUBLIC").setServiceProps(Object.assign({},Zz)))}/**
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
 */function tB(t){eB(t,(e,n)=>new TD(e,n,new Xz)),t.registerVersion(Qz,$z)}tB(Jt);/**
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
 */const nB="type.googleapis.com/google.protobuf.Int64Value",iB="type.googleapis.com/google.protobuf.UInt64Value";function SD(t,e){const n={};for(const i in t)t.hasOwnProperty(i)&&(n[i]=e(t[i]));return n}function Sg(t){if(t==null)return null;if(t instanceof Number&&(t=t.valueOf()),typeof t=="number"&&isFinite(t)||t===!0||t===!1||Object.prototype.toString.call(t)==="[object String]")return t;if(t instanceof Date)return t.toISOString();if(Array.isArray(t))return t.map(e=>Sg(e));if(typeof t=="function"||typeof t=="object")return SD(t,e=>Sg(e));throw new Error("Data cannot be encoded in JSON: "+t)}function Ad(t){if(t==null)return t;if(t["@type"])switch(t["@type"]){case nB:case iB:{const e=Number(t.value);if(isNaN(e))throw new Error("Data cannot be decoded from JSON: "+t);return e}default:throw new Error("Data cannot be decoded from JSON: "+t)}return Array.isArray(t)?t.map(e=>Ad(e)):typeof t=="function"||typeof t=="object"?SD(t,e=>Ad(e)):t}/**
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
 */const RD="functions";/**
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
 */const wI={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Ha extends _t{constructor(e,n,i){super(`${RD}/${e}`,n||""),this.details=i}}function rB(t){if(t>=200&&t<300)return"ok";switch(t){case 0:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 500:return"internal";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}function sB(t,e){let n=rB(t),i=n,r;try{const s=e&&e.error;if(s){const a=s.status;if(typeof a=="string"){if(!wI[a])return new Ha("internal","internal");n=wI[a],i=a}const o=s.message;typeof o=="string"&&(i=o),r=s.details,r!==void 0&&(r=Ad(r))}}catch{}return n==="ok"?null:new Ha(n,i,r)}/**
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
 */class aB{constructor(e,n,i){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=e.getImmediate({optional:!0}),this.messaging=n.getImmediate({optional:!0}),this.auth||e.get().then(r=>this.auth=r,()=>{}),this.messaging||n.get().then(r=>this.messaging=r,()=>{}),this.appCheck||i.get().then(r=>this.appCheck=r,()=>{})}async getAuthToken(){if(this.auth)try{const e=await this.auth.getToken();return e==null?void 0:e.accessToken}catch{return}}async getMessagingToken(){if(!(!this.messaging||!("Notification"in self)||Notification.permission!=="granted"))try{return await this.messaging.getToken()}catch{return}}async getAppCheckToken(e){if(this.appCheck){const n=e?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return n.error?null:n.token}return null}async getContext(e){const n=await this.getAuthToken(),i=await this.getMessagingToken(),r=await this.getAppCheckToken(e);return{authToken:n,messagingToken:i,appCheckToken:r}}}/**
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
 */const II="us-central1";function oB(t){let e=null;return{promise:new Promise((n,i)=>{e=setTimeout(()=>{i(new Ha("deadline-exceeded","deadline-exceeded"))},t)}),cancel:()=>{e&&clearTimeout(e)}}}let lB=class{constructor(e,n,i,r,s=II,a){this.app=e,this.fetchImpl=a,this.emulatorOrigin=null,this.contextProvider=new aB(n,i,r),this.cancelAllRequests=new Promise(o=>{this.deleteService=()=>Promise.resolve(o())});try{const o=new URL(s);this.customDomain=o.origin,this.region=II}catch{this.customDomain=null,this.region=s}}_delete(){return this.deleteService()}_url(e){const n=this.app.options.projectId;return this.emulatorOrigin!==null?`${this.emulatorOrigin}/${n}/${this.region}/${e}`:this.customDomain!==null?`${this.customDomain}/${e}`:`https://${this.region}-${n}.cloudfunctions.net/${e}`}};function uB(t,e,n){t.emulatorOrigin=`http://${e}:${n}`}function cB(t,e,n){return i=>fB(t,e,i,n||{})}function hB(t,e,n){return i=>CD(t,e,i,n||{})}async function dB(t,e,n,i){n["Content-Type"]="application/json";let r;try{r=await i(t,{method:"POST",body:JSON.stringify(e),headers:n})}catch{return{status:0,json:null}}let s=null;try{s=await r.json()}catch{}return{status:r.status,json:s}}function fB(t,e,n,i){const r=t._url(e);return CD(t,r,n,i)}async function CD(t,e,n,i){n=Sg(n);const r={data:n},s={},a=await t.contextProvider.getContext(i.limitedUseAppCheckTokens);a.authToken&&(s.Authorization="Bearer "+a.authToken),a.messagingToken&&(s["Firebase-Instance-ID-Token"]=a.messagingToken),a.appCheckToken!==null&&(s["X-Firebase-AppCheck"]=a.appCheckToken);const o=i.timeout||7e4,u=oB(o),c=await Promise.race([dB(e,r,s,t.fetchImpl),u.promise,t.cancelAllRequests]);if(u.cancel(),!c)throw new Ha("cancelled","Firebase Functions instance was deleted.");const d=sB(c.status,c.json);if(d)throw d;if(!c.json)throw new Ha("internal","Response is not valid JSON object.");let f=c.json.data;if(typeof f>"u"&&(f=c.json.result),typeof f>"u")throw new Ha("internal","Response is missing data field.");return{data:Ad(f)}}const AI="@firebase/functions",bI="0.11.5";/**
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
 */const mB="auth-internal",pB="app-check-internal",gB="messaging-internal";function _B(t,e){const n=(i,{instanceIdentifier:r})=>{const s=i.getProvider("app").getImmediate(),a=i.getProvider(mB),o=i.getProvider(gB),u=i.getProvider(pB);return new lB(s,a,o,u,r,t)};Vi(new xn(RD,n,"PUBLIC").setMultipleInstances(!0)),yn(AI,bI,e),yn(AI,bI,"esm2017")}function SI(t,e,n){uB(X(t),e,n)}function yB(t,e,n){return cB(X(t),e,n)}function vB(t,e,n){return hB(X(t),e,n)}_B(fetch.bind(self));const EB="@firebase/functions-compat",TB="0.3.11";/**
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
 */class DD{constructor(e,n){this.app=e,this._delegate=n,this._region=this._delegate.region,this._customDomain=this._delegate.customDomain}httpsCallable(e,n){return yB(this._delegate,e,n)}httpsCallableFromURL(e,n){return vB(this._delegate,e,n)}useFunctionsEmulator(e){const n=e.match("[a-zA-Z]+://([a-zA-Z0-9.-]+)(?::([0-9]+))?");if(n==null)throw new _t("functions","No origin provided to useFunctionsEmulator()");if(n[2]==null)throw new _t("functions","Port missing in origin provided to useFunctionsEmulator()");return SI(this._delegate,n[1],Number(n[2]))}useEmulator(e,n){return SI(this._delegate,e,n)}}/**
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
 */const wB="us-central1",IB=(t,{instanceIdentifier:e})=>{const n=t.getProvider("app-compat").getImmediate(),i=t.getProvider("functions").getImmediate({identifier:e??wB});return new DD(n,i)};function AB(){const t={Functions:DD};Jt.INTERNAL.registerComponent(new xn("functions-compat",IB,"PUBLIC").setServiceProps(t).setMultipleInstances(!0))}/**
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
 */AB();Jt.registerVersion(EB,TB);const Rg={apiKey:"AIzaSyBJ0VKNcUOrDCW8TehNJhjzHxxebZDYGmI",authDomain:"smart-local-ai.firebaseapp.com",projectId:"smart-local-ai",storageBucket:"smart-local-ai.firebasestorage.app",messagingSenderId:"873357924119",appId:"1:873357924119:web:e62fb2feddc1ebb1d08952",measurementId:"G-EBE7V88V8H"};let yl=null,Lr=null,gi=null,Cg=null,To=null;Rg.apiKey?Rg.projectId||(To="Firebase Project ID is not configured. Please set VITE_FIREBASE_PROJECT_ID in your .env file."):To="Firebase API Key is not configured. Please set VITE_FIREBASE_API_KEY in your .env file.";if(!To)try{Jt.apps.length?yl=Jt.app():yl=Jt.initializeApp(Rg),Lr=Jt.auth(yl),gi=Jt.firestore(yl),Cg=Jt.functions(yl)}catch(t){console.error("Firebase initialization error:",t),To=`Firebase initialization failed: ${t.message}. Please check your Firebase project configuration.`}const RI=Lr?new Jt.auth.GoogleAuthProvider:null,bB=async()=>{if(!Lr||!RI)throw new Error("Firebase Auth is not initialized. Check your Firebase configuration.");try{await Lr.signInWithPopup(RI)}catch(t){console.error("Google Sign-In Error:",t),t.code==="auth/popup-blocked"?alert("Popup was blocked by your browser. Please allow popups for this site and try again."):t.code==="auth/popup-closed-by-user"?console.log("Sign-in popup was closed by the user."):alert(`An error occurred during sign-in: ${t.message}`)}},SB=async()=>{if(!Lr)throw new Error("Firebase Auth is not initialized.");await Lr.signOut()};function RB(t,e,n,i){function r(s){return s instanceof n?s:new n(function(a){a(s)})}return new(n||(n=Promise))(function(s,a){function o(d){try{c(i.next(d))}catch(f){a(f)}}function u(d){try{c(i.throw(d))}catch(f){a(f)}}function c(d){d.done?s(d.value):r(d.value).then(o,u)}c((i=i.apply(t,[])).next())})}function CB(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Km,CI;function DB(){return CI||(CI=1,Km=function t(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){if(e.constructor!==n.constructor)return!1;var i,r,s;if(Array.isArray(e)){if(i=e.length,i!=n.length)return!1;for(r=i;r--!==0;)if(!t(e[r],n[r]))return!1;return!0}if(e.constructor===RegExp)return e.source===n.source&&e.flags===n.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===n.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===n.toString();if(s=Object.keys(e),i=s.length,i!==Object.keys(n).length)return!1;for(r=i;r--!==0;)if(!Object.prototype.hasOwnProperty.call(n,s[r]))return!1;for(r=i;r--!==0;){var a=s[r];if(!t(e[a],n[a]))return!1}return!0}return e!==e&&n!==n}),Km}var NB=DB(),OB=CB(NB);const DI="__googleMapsScriptId";var Oa;(function(t){t[t.INITIALIZED=0]="INITIALIZED",t[t.LOADING=1]="LOADING",t[t.SUCCESS=2]="SUCCESS",t[t.FAILURE=3]="FAILURE"})(Oa||(Oa={}));class us{constructor({apiKey:e,authReferrerPolicy:n,channel:i,client:r,id:s=DI,language:a,libraries:o=[],mapIds:u,nonce:c,region:d,retries:f=3,url:p="https://maps.googleapis.com/maps/api/js",version:g}){if(this.callbacks=[],this.done=!1,this.loading=!1,this.errors=[],this.apiKey=e,this.authReferrerPolicy=n,this.channel=i,this.client=r,this.id=s||DI,this.language=a,this.libraries=o,this.mapIds=u,this.nonce=c,this.region=d,this.retries=f,this.url=p,this.version=g,us.instance){if(!OB(this.options,us.instance.options))throw new Error(`Loader must not be called again with different options. ${JSON.stringify(this.options)} !== ${JSON.stringify(us.instance.options)}`);return us.instance}us.instance=this}get options(){return{version:this.version,apiKey:this.apiKey,channel:this.channel,client:this.client,id:this.id,libraries:this.libraries,language:this.language,region:this.region,mapIds:this.mapIds,nonce:this.nonce,url:this.url,authReferrerPolicy:this.authReferrerPolicy}}get status(){return this.errors.length?Oa.FAILURE:this.done?Oa.SUCCESS:this.loading?Oa.LOADING:Oa.INITIALIZED}get failed(){return this.done&&!this.loading&&this.errors.length>=this.retries+1}createUrl(){let e=this.url;return e+="?callback=__googleMapsCallback&loading=async",this.apiKey&&(e+=`&key=${this.apiKey}`),this.channel&&(e+=`&channel=${this.channel}`),this.client&&(e+=`&client=${this.client}`),this.libraries.length>0&&(e+=`&libraries=${this.libraries.join(",")}`),this.language&&(e+=`&language=${this.language}`),this.region&&(e+=`&region=${this.region}`),this.version&&(e+=`&v=${this.version}`),this.mapIds&&(e+=`&map_ids=${this.mapIds.join(",")}`),this.authReferrerPolicy&&(e+=`&auth_referrer_policy=${this.authReferrerPolicy}`),e}deleteScript(){const e=document.getElementById(this.id);e&&e.remove()}load(){return this.loadPromise()}loadPromise(){return new Promise((e,n)=>{this.loadCallback(i=>{i?n(i.error):e(window.google)})})}importLibrary(e){return this.execute(),google.maps.importLibrary(e)}loadCallback(e){this.callbacks.push(e),this.execute()}setScript(){var e,n;if(document.getElementById(this.id)){this.callback();return}const i={key:this.apiKey,channel:this.channel,client:this.client,libraries:this.libraries.length&&this.libraries,v:this.version,mapIds:this.mapIds,language:this.language,region:this.region,authReferrerPolicy:this.authReferrerPolicy};Object.keys(i).forEach(s=>!i[s]&&delete i[s]),!((n=(e=window==null?void 0:window.google)===null||e===void 0?void 0:e.maps)===null||n===void 0)&&n.importLibrary||(s=>{let a,o,u,c="The Google Maps JavaScript API",d="google",f="importLibrary",p="__ib__",g=document,R=window;R=R[d]||(R[d]={});const N=R.maps||(R.maps={}),x=new Set,I=new URLSearchParams,E=()=>a||(a=new Promise((A,O)=>RB(this,void 0,void 0,function*(){var L;yield o=g.createElement("script"),o.id=this.id,I.set("libraries",[...x]+"");for(u in s)I.set(u.replace(/[A-Z]/g,F=>"_"+F[0].toLowerCase()),s[u]);I.set("callback",d+".maps."+p),o.src=this.url+"?"+I,N[p]=A,o.onerror=()=>a=O(Error(c+" could not load.")),o.nonce=this.nonce||((L=g.querySelector("script[nonce]"))===null||L===void 0?void 0:L.nonce)||"",g.head.append(o)})));N[f]?console.warn(c+" only loads once. Ignoring:",s):N[f]=(A,...O)=>x.add(A)&&E().then(()=>N[f](A,...O))})(i);const r=this.libraries.map(s=>this.importLibrary(s));r.length||r.push(this.importLibrary("core")),Promise.all(r).then(()=>this.callback(),s=>{const a=new ErrorEvent("error",{error:s});this.loadErrorCallback(a)})}reset(){this.deleteScript(),this.done=!1,this.loading=!1,this.errors=[],this.onerrorEvent=null}resetIfRetryingFailed(){this.failed&&this.reset()}loadErrorCallback(e){if(this.errors.push(e),this.errors.length<=this.retries){const n=this.errors.length*Math.pow(2,this.errors.length);console.error(`Failed to load Google Maps script, retrying in ${n} ms.`),setTimeout(()=>{this.deleteScript(),this.setScript()},n)}else this.onerrorEvent=e,this.callback()}callback(){this.done=!0,this.loading=!1,this.callbacks.forEach(e=>{e(this.onerrorEvent)}),this.callbacks=[]}execute(){if(this.resetIfRetryingFailed(),!this.loading)if(this.done)this.callback();else{if(window.google&&window.google.maps&&window.google.maps.version){console.warn("Google Maps already loaded outside @googlemaps/js-api-loader. This may result in undesirable behavior as options and script parameters may not match."),this.callback();return}this.loading=!0,this.setScript()}}}const PB="AIzaSyAQKbUQdmZFfWrD92-SMxthZtgN6Jxuoxg",VB=()=>C.jsx("div",{className:"map-loader",children:C.jsx("div",{className:"loading-spinner"})}),xB=({message:t})=>C.jsx("div",{className:"map-error-overlay",children:C.jsx("p",{children:t})}),NI=({onStartAudit:t})=>{const[e,n]=W.useState(!1),[i,r]=W.useState(null),[s,a]=W.useState(!0),[o,u]=W.useState([]),[c,d]=W.useState(!1),f=W.useRef(null),p=W.useRef(null),g=W.useRef(null),R=W.useRef(null),N=W.useRef(null),x=W.useRef([]),I="smartlocal-map-search-history",E=10;W.useEffect(()=>{try{const _=localStorage.getItem(I);_&&u(JSON.parse(_))}catch(_){console.error("Failed to parse search history from localStorage",_)}},[]),W.useEffect(()=>{if(e)return;new us({apiKey:PB,version:"weekly",libraries:["places","marker"]}).load().then(v=>{n(!0),O(v)}).catch(v=>{console.error("Failed to load Google Maps script:",v),r("Failed to load Google Maps. Please check that the API key is correct and has the 'Maps JavaScript API' and 'Places API' enabled.")}).finally(()=>{a(!1)})},[e]);const A=_=>{if(!_||!_.trim())return;const v=_.trim(),w=[v,...o.filter(S=>S.toLowerCase()!==v.toLowerCase())].slice(0,E);u(w);try{localStorage.setItem(I,JSON.stringify(w))}catch(S){console.error("Failed to save search history to localStorage",S)}},O=_=>{if(!f.current||!p.current)return;g.current=new _.maps.Map(f.current,{center:{lat:34.0522,lng:-118.2437},zoom:12,mapId:"SMART_LOCAL_AI_MAP"}),R.current=new _.maps.places.PlacesService(g.current),N.current=new _.maps.InfoWindow;const v=new _.maps.places.Autocomplete(p.current,{fields:["geometry","name"]});v.addListener("place_changed",()=>{var D,b,ot;const w=v.getPlace(),S=((D=p.current)==null?void 0:D.value)||w.name||"";w.geometry&&w.geometry.location&&((b=g.current)==null||b.setCenter(w.geometry.location),(ot=g.current)==null||ot.setZoom(14)),L({query:S})}),N.current.addListener("domready",()=>{const w=document.querySelector(".map-infowindow-content");!w||w.classList.contains("click-handler-attached")||(w.classList.add("click-handler-attached"),w.addEventListener("click",S=>{var ot;const b=S.target.closest(".btn-start-audit");if(b){const Ht=b.getAttribute("data-name"),K=b.getAttribute("data-website");Ht&&(t({name:decodeURIComponent(Ht),website:K?decodeURIComponent(K):void 0}),(ot=N.current)==null||ot.close());return}}))})},L=_=>{!R.current||!_.query.trim()||(A(_.query),d(!1),p.current&&p.current.blur(),_.location||(_.location=g.current.getCenter()),a(!0),R.current.textSearch(_,(v,w)=>{a(!1),w===google.maps.places.PlacesServiceStatus.OK&&v?T(v):console.warn("Places search failed with status:",w)}))},F=_=>{p.current&&(p.current.value=_,L({query:_}))},T=_=>{x.current.forEach(w=>w.setMap(null)),x.current=[];const v=new google.maps.LatLngBounds;_.forEach(w=>{if(!w.geometry||!w.geometry.location||!w.name)return;const S=new google.maps.Marker({map:g.current,position:w.geometry.location,title:w.name,animation:google.maps.Animation.DROP,icon:"https://maps.google.com/mapfiles/ms/icons/green-dot.png"});S.addListener("click",()=>{if(!N.current)return;const D=w.website??"",b=encodeURIComponent(w.name),ot=encodeURIComponent(D),Ht=`
                    <div class="map-infowindow-content">
                        <h4>${w.name}</h4>
                        <p>${w.formatted_address||""}</p>
                        <div class="map-infowindow-buttons" style="margin-top: 1rem;">
                            <button class="btn btn-primary btn-start-audit" data-name="${b}" data-website="${ot}">Start an audit</button>
                        </div>
                    </div>
                `;N.current.setContent(Ht),N.current.open(g.current,S)}),x.current.push(S),v.extend(w.geometry.location)}),g.current&&x.current.length>0&&g.current.fitBounds(v)};return C.jsxs("div",{className:"map-view-wrapper",children:[i&&C.jsx(xB,{message:i}),s&&C.jsx(VB,{}),C.jsxs("div",{className:"map-search-container",children:[C.jsx("input",{ref:p,type:"text",className:"map-search-input",placeholder:"Search for a business or location",disabled:!e,onFocus:()=>d(!0),onBlur:()=>{setTimeout(()=>d(!1),200)},onKeyDown:_=>{_.key==="Enter"&&p.current&&L({query:p.current.value})},autoComplete:"off"}),c&&o.length>0&&C.jsx("div",{className:"search-history-dropdown",children:o.map((_,v)=>C.jsx("div",{className:"search-history-item",onMouseDown:()=>F(_),children:_},`${_}-${v}`))})]}),C.jsx("div",{ref:f,className:"map-container"})]})},av="https://storage.googleapis.com/imageonline/ChatGPT%20Image%20Aug%2010%2C%202025%2C%2010_03_53%20AM.png";let fs=null;Cg&&(fs=Cg.httpsCallable("geminiProxy"));const MB=()=>C.jsxs("div",{className:"loading-screen","aria-label":"Loading application",children:[C.jsx("img",{src:av,alt:"SMARTLOCAL.AI Logo",className:"header-logo"}),C.jsx("div",{className:"loading-spinner"})]}),kB=()=>C.jsx("div",{className:"login-view",children:C.jsxs("div",{className:"login-box",children:[C.jsx("img",{src:av,alt:"SMARTLOCAL.AI Logo",className:"header-logo"}),C.jsx("h1",{children:"AI-Powered Local Business Growth"}),C.jsx("p",{children:"Sign in to access your dashboard and start optimizing your local presence."}),C.jsxs("button",{className:"btn btn-google",onClick:bB,children:[C.jsx("svg",{width:"18",height:"18",viewBox:"0 0 18 18",xmlns:"http://www.w3.org/2000/svg",children:C.jsxs("g",{fill:"none",fillRule:"evenodd",children:[C.jsx("path",{d:"M17.64 9.2045c0-.6381-.0573-1.2518-.1636-1.8409H9v3.4818h4.8436c-.2086 1.125-.8427 2.0782-1.7772 2.7218v2.2582h2.9082c1.7018-1.5668 2.6836-3.8741 2.6836-6.621v.0001z",fill:"#4285F4"}),C.jsx("path",{d:"M9 18c2.43 0 4.4673-.806 5.9564-2.1805l-2.9082-2.2582c-.8059.54-1.8368.8618-3.0482.8618-2.344 0-4.3282-1.5818-5.0359-3.7118H.9573v2.3318C2.4382 16.1423 5.4818 18 9 18z",fill:"#34A853"}),C.jsx("path",{d:"M3.964 10.71c-.18-.54-.2822-1.1168-.2822-1.71s.1023-1.17.2823-1.71V4.9582H.9573C.3477 6.1732 0 7.5477 0 9s.3477 2.8268.9573 4.0418L3.964 10.71z",fill:"#FBBC05"}),C.jsx("path",{d:"M9 3.4773c1.3236 0 2.52.4573 3.4418 1.346l2.5818-2.5818C13.4636.8918 11.43 0 9 0 5.4818 0 2.4382 1.8577.9573 4.9582L3.964 7.29C4.6718 5.159 6.656 3.4773 9 3.4773z",fill:"#EA4335"})]})}),"Sign In with Google"]})]})}),LB=({user:t,currentView:e,setView:n,onSignOut:i})=>{const r=[{id:"MAP",label:"Map View"},{id:"SERVICES",label:"Service Packages"},{id:"CLIENT_SETUP",label:"Client Setup"},{id:"PROFILES",label:"Profiles"},{id:"TOOLS",label:"AI Tools"}];return C.jsxs("header",{className:"app-header",children:[C.jsx("div",{className:"header-branding",children:C.jsx("img",{src:av,alt:"SMARTLOCAL.AI Logo",className:"header-logo"})}),C.jsx("nav",{className:"app-nav",children:r.map(s=>{const a=e===s.id||e==="PROFILE_DETAIL"&&s.id==="PROFILES";return C.jsx("button",{className:`nav-button ${a?"active":""}`,onClick:()=>n(s.id),"aria-current":a?"page":void 0,children:s.label},s.id)})}),C.jsxs("div",{className:"header-user-info",children:[C.jsx("img",{src:t.photoURL??void 0,alt:t.displayName??"User"}),C.jsx("span",{className:"user-name",children:t.displayName}),C.jsx("button",{className:"btn-sign-out",onClick:i,children:"Sign Out"})]})]})},UB=()=>{const[t,e]=W.useState(!navigator.onLine);return W.useEffect(()=>{const n=()=>e(!1),i=()=>e(!0);return window.addEventListener("online",n),window.addEventListener("offline",i),()=>{window.removeEventListener("online",n),window.removeEventListener("offline",i)}},[]),t?C.jsx("div",{className:"offline-banner",role:"status",children:"You are currently offline. Some features may be unavailable."}):null},zB=({onCreateProfile:t})=>{const[e,n]=W.useState(""),[i,r]=W.useState(""),[s,a]=W.useState(""),[o,u]=W.useState(!1),c=async()=>{if(!e.trim()){alert("Business Name is required.");return}u(!0);try{await t({name:e,website:i,notes:s}),n(""),r(""),a("")}catch(d){console.error("Failed to save profile:",d),alert("Failed to save profile. Please try again.")}finally{u(!1)}};return C.jsxs("div",{className:"view-container client-setup-view",children:[C.jsxs("div",{className:"client-setup-header",children:[C.jsx("h2",{children:"Client Onboarding"}),C.jsx("p",{children:"Enter your new client's information. This will create a profile to track audits and AI-generated content."})]}),C.jsx("div",{className:"client-setup-layout",children:C.jsxs("div",{className:"notepad-container",style:{gap:"1rem",textAlign:"left"},children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"client-name",children:"Business Name"}),C.jsx("input",{id:"client-name",type:"text",value:e,onChange:d=>n(d.target.value),placeholder:"e.g., Joe's Pizza Downtown"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"client-website",children:"Website URL"}),C.jsx("input",{id:"client-website",type:"url",value:i,onChange:d=>r(d.target.value),placeholder:"https://www.joespizzadt.com"})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"client-notes",children:"Onboarding Notes"}),C.jsx("textarea",{id:"client-notes",className:"notepad-textarea",rows:10,value:s,onChange:d=>a(d.target.value),placeholder:"e.g., target audience, primary goals for local SEO, main competitors, etc."})]}),C.jsx("div",{className:"notepad-actions",children:C.jsx("button",{className:"btn btn-primary",onClick:c,disabled:o||!e.trim(),children:o?"Saving...":"Create Profile"})})]})})]})},BB=({business:t,onSaveAudit:e})=>{const[n,i]=W.useState((t==null?void 0:t.name)||""),[r,s]=W.useState((t==null?void 0:t.website)||""),[a,o]=W.useState(""),[u,c]=W.useState(!1),[d,f]=W.useState(null),[p,g]=W.useState(!1),[R,N]=W.useState(!1);W.useEffect(()=>{i((t==null?void 0:t.name)||""),s((t==null?void 0:t.website)||""),o(""),f(null),N(!1),g(!1)},[t]);const x=async()=>{if(!n.trim()){alert("Business Name is required to run an audit.");return}if(!fs){f("AI functionality is not available. Please check your configuration.");return}c(!0),f(null),o("");const E=`Please perform a comprehensive local SEO and online presence audit for the following business. Provide a summary, key findings, and actionable recommendations.

Business Name: ${n}
Website: ${r||"Not provided"}

The audit should cover:
1.  **Google Business Profile:** Potential optimizations, completeness, photo quality, reviews, Q&A.
2.  **On-Page SEO:** Website mobile-friendliness, page speed insights (conceptual), local keyword targeting, NAP consistency.
3.  **Local Citations & Listings:** Importance of consistent NAP across major directories.
4.  **Online Reviews:** Reputation analysis, strategy for getting more reviews.
5.  **Social Media Presence:** Brief check of relevant social media channels for activity and engagement.
6.  **Competitor Analysis:** Based on the business name and website, identify 2-3 likely local competitors. Briefly analyze their online strengths and suggest ways for our client to differentiate themselves.

Format the output as clean, well-structured markdown. Use headings, bold text, and bullet points to make it easy to read.`;try{const A=await fs({action:"generateContent",params:{model:"gemini-2.5-flash",contents:E}});o(A.data.text)}catch(A){console.error("Audit generation failed:",A),f(`Failed to generate audit: ${A.message||"An unknown error occurred."}`)}finally{c(!1)}},I=async()=>{if(!(!a||!(t!=null&&t.id))){g(!0),N(!1),f(null);try{await e(a,t.id),N(!0)}catch(E){console.error("Failed to save audit report:",E),f("Failed to save the report. Please try again.")}finally{g(!1)}}};return C.jsxs("div",{className:"view-container",children:[C.jsx("h2",{children:"Run a Local Presence Audit"}),C.jsxs("div",{className:"audit-controls",children:[C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"business-name",children:"Business Name"}),C.jsx("input",{type:"text",id:"business-name",placeholder:"e.g., Joe's Pizza Downtown",value:n,onChange:E=>i(E.target.value)})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"business-website",children:"Website URL"}),C.jsx("input",{type:"url",id:"business-website",placeholder:"https://www.joespizzadt.com",value:r,onChange:E=>s(E.target.value)})]}),C.jsx("button",{className:"btn btn-primary",onClick:x,disabled:u||!n,children:u?"Generating Report...":"Start AI Audit"})]}),C.jsxs("div",{className:`result-container ${a?"has-content":""} ${d?"error":""}`,children:[u&&C.jsx("div",{className:"loading-spinner small"}),d&&C.jsx("p",{children:d}),a?C.jsx("p",{children:a}):!u&&C.jsx("div",{className:"audit-placeholder",children:C.jsx("p",{children:"Your audit report will appear here once generated."})})]}),a&&C.jsx("div",{className:"audit-actions",children:t!=null&&t.id?C.jsx("button",{className:"btn btn-primary",onClick:I,disabled:p||R,children:p?"Saving...":R?"✓ Report Saved":"Save Report to Profile"}):C.jsx("div",{className:"audit-actions-note",children:C.jsx("p",{children:"To save this report, first create a client profile from the 'Client Setup' tab and run the audit from the 'Profiles' view."})})})]})},OI=({profiles:t,onSelectProfile:e,loading:n})=>n?C.jsxs("div",{className:"view-container profiles-view-container",children:[C.jsx("h2",{children:"Client Profiles"}),C.jsx("div",{className:"loading-spinner"})]}):t.length===0?C.jsxs("div",{className:"view-container profiles-view-container",children:[C.jsx("h2",{children:"Client Profiles"}),C.jsxs("div",{className:"no-profiles-message",children:[C.jsx("p",{children:"You haven't created any client profiles yet."}),C.jsx("p",{children:"Go to the 'Client Setup' tab to add your first client."})]})]}):C.jsxs("div",{className:"view-container profiles-view-container",children:[C.jsx("h2",{children:"Client Profiles"}),C.jsx("div",{className:"profiles-grid",children:t.map(i=>{var r;return C.jsxs("div",{className:"profile-card",tabIndex:0,onClick:()=>e(i),onKeyDown:s=>s.key==="Enter"&&e(i),children:[C.jsx("h3",{children:i.name}),i.website&&C.jsx("a",{href:i.website,target:"_blank",rel:"noopener noreferrer",onClick:s=>s.stopPropagation(),children:i.website}),C.jsx("div",{className:"profile-footer",children:C.jsxs("span",{className:"date-info",children:["Created: ",new Date((r=i.createdAt)==null?void 0:r.toDate()).toLocaleDateString()]})})]},i.id)})})]}),FB=({profile:t,onBack:e,onRunAudit:n})=>{const[i,r]=W.useState([]),[s,a]=W.useState(!0),[o,u]=W.useState(null);W.useEffect(()=>{(async()=>{if(gi){a(!0);try{const g=(await gi.collection("audits").where("client_id","==",t.id).orderBy("date_completed","desc").get()).docs.map(R=>({id:R.id,...R.data()}));r(g)}catch(f){console.error("Error fetching audits: ",f)}finally{a(!1)}}})()},[t.id]);const c=d=>{u(o===d?null:d)};return C.jsxs("div",{className:"view-container profile-detail-view",children:[C.jsxs("div",{className:"profile-detail-header",children:[C.jsx("button",{className:"btn-back",onClick:e,children:"← Back to Profiles"}),C.jsx("div",{className:"profile-detail-actions",children:C.jsx("button",{className:"btn btn-primary",onClick:()=>n(t),children:"Run New Audit"})})]}),C.jsxs("div",{className:"profile-detail-info",children:[C.jsx("h2",{children:t.name}),t.website&&C.jsx("a",{href:t.website,target:"_blank",rel:"noopener noreferrer",children:t.website}),t.notes&&C.jsx("p",{className:"profile-notes",children:t.notes})]}),C.jsxs("div",{className:"profile-audits-section",children:[C.jsx("h3",{children:"Audit History"}),s?C.jsx("div",{className:"loading-spinner"}):i.length===0?C.jsx("p",{children:"No audits found for this client yet."}):C.jsx("div",{className:"audits-list",children:i.map(d=>C.jsxs("div",{className:"audit-item-card",children:[C.jsxs("div",{className:"audit-item-header",onClick:()=>c(d.id),tabIndex:0,onKeyDown:f=>f.key==="Enter"&&c(d.id),role:"button","aria-expanded":o===d.id,children:[C.jsxs("span",{children:["Audit from ",new Date(d.date_completed.toDate()).toLocaleString()]}),C.jsx("span",{children:o===d.id?"Hide Report ▲":"View Report ▼"})]}),o===d.id&&C.jsx("div",{className:"audit-item-body",children:C.jsx("pre",{children:d.ai_report})})]},d.id))})]})]})},jB=()=>{const[t,e]=W.useState(""),[n,i]=W.useState("Friendly"),[r,s]=W.useState(""),[a,o]=W.useState(!1),[u,c]=W.useState(null),[d,f]=W.useState(""),[p,g]=W.useState(""),[R,N]=W.useState(""),[x,I]=W.useState(!1),[E,A]=W.useState(null),O=async()=>{if(!t.trim())return;if(!fs){c("AI is unavailable");return}o(!0),c(null),s("");const F=`Generate a short, engaging Google Business Profile post about "${t}". The tone of voice should be ${n}. Include relevant hashtags.`;try{const T=await fs({action:"generateContent",params:{model:"gemini-2.5-flash",contents:F}});s(T.data.text)}catch(T){console.error("Post generation failed:",T),c(T.message||"Failed to generate post.")}finally{o(!1)}},L=async()=>{if(!d.trim()||!p.trim())return;if(!fs){A("AI is unavailable");return}I(!0),A(null),N("");const F=`Generate a list of local SEO keyword ideas for a business that offers "${d}" in "${p}". Include a mix of short-tail, long-tail, and question-based keywords.`;try{const T=await fs({action:"generateContent",params:{model:"gemini-2.5-flash",contents:F}});N(T.data.text)}catch(T){console.error("Keyword idea generation failed:",T),A(T.message||"Failed to get ideas.")}finally{I(!1)}};return C.jsxs("div",{className:"view-container",children:[C.jsx("h2",{children:"AI Content Tools"}),C.jsxs("div",{className:"tools-grid",children:[C.jsxs("div",{className:"tool-card",children:[C.jsx("h3",{children:"Google Business Profile Post"}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"post-topic",children:"Topic"}),C.jsx("input",{type:"text",id:"post-topic",placeholder:"e.g., New weekly special, upcoming event",value:t,onChange:F=>e(F.target.value)})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"post-tone",children:"Tone of Voice"}),C.jsxs("select",{id:"post-tone",value:n,onChange:F=>i(F.target.value),children:[C.jsx("option",{children:"Friendly"}),C.jsx("option",{children:"Professional"}),C.jsx("option",{children:"Excited"}),C.jsx("option",{children:"Informative"})]})]}),C.jsx("button",{className:"btn btn-primary",onClick:O,disabled:a||!t.trim(),children:a?"Generating...":"Generate Post"}),C.jsxs("div",{className:`result-container ${r?"has-content":""} ${u?"error":""}`,children:[a&&C.jsx("div",{className:"loading-spinner small"}),u&&C.jsx("p",{children:u}),r&&C.jsx("p",{children:r})]})]}),C.jsxs("div",{className:"tool-card",children:[C.jsx("h3",{children:"Local SEO Keyword Ideas"}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"keyword-service",children:"Service/Product"}),C.jsx("input",{type:"text",id:"keyword-service",placeholder:"e.g., residential plumbing, artisan coffee",value:d,onChange:F=>f(F.target.value)})]}),C.jsxs("div",{className:"form-group",children:[C.jsx("label",{htmlFor:"keyword-location",children:"Location"}),C.jsx("input",{type:"text",id:"keyword-location",placeholder:"e.g., San Francisco",value:p,onChange:F=>g(F.target.value)})]}),C.jsx("button",{className:"btn btn-primary",onClick:L,disabled:x||!d.trim()||!p.trim(),children:x?"Generating...":"Get Ideas"}),C.jsxs("div",{className:`result-container ${R?"has-content":""} ${E?"error":""}`,children:[x&&C.jsx("div",{className:"loading-spinner small"}),E&&C.jsx("p",{children:E}),R&&C.jsx("p",{children:R})]})]})]})]})},qB=()=>{const[t,e]=W.useState(null),n=r=>{e(t===r?null:r)},i=[{id:"starter",name:"Local SEO Starter",price:"$99",description:"Essential local SEO to get your business on the map and ranking.",features:["Google Business Profile Optimization","Local Keyword Research (10 keywords)","On-Page SEO for 5 Pages","Monthly Performance Report","Basic Citation Building (20 listings)"]},{id:"growth",name:"Business Growth Pro",price:"$299",description:"A comprehensive package for businesses ready to dominate local search.",features:["All features from Starter Plan","Advanced Schema Markup","Content Creation (2 Articles/mo)","Local Link Building Campaign","Quarterly Strategy Review"]},{id:"ultimate",name:"Ultimate Presence",price:"$699+",description:"The ultimate solution for market leaders who want maximum visibility.",features:["All features from Growth Pro Plan","Reputation Management & Review Generation","Social Media Signal Integration","Hyperlocal Content Strategy","Dedicated Account Manager"]}];return C.jsxs("div",{className:"view-container",children:[C.jsx("h2",{children:"Our Service Packages"}),C.jsx("p",{style:{textAlign:"center",maxWidth:"600px",margin:"0 auto 2rem"},children:"Choose a package that fits your goals. Click on any package to see the full list of features."}),C.jsx("div",{className:"services-grid",children:i.map(r=>C.jsxs("div",{className:"service-card",onClick:()=>n(r.id),tabIndex:0,role:"button","aria-expanded":t===r.id,children:[C.jsxs("div",{className:"service-header",children:[C.jsx("h3",{children:r.name}),C.jsx("p",{className:"service-price",children:r.price}),C.jsx("p",{children:r.description})]}),C.jsx("div",{className:`service-details ${t===r.id?"expanded":""}`,children:C.jsx("ul",{children:r.features.map((s,a)=>C.jsx("li",{children:s},a))})})]},r.id))})]})},GB=()=>{const[t,e]=W.useState(null),[n,i]=W.useState(!0),[r,s]=W.useState("MAP"),[a,o]=W.useState(),[u,c]=W.useState([]),[d,f]=W.useState(!0),[p,g]=W.useState(null),R=W.useCallback(async L=>{if(!L||!gi){c([]),f(!1);return}f(!0);try{const _=(await gi.collection("clients").where("consultant_uid","==",L.uid).orderBy("createdAt","desc").get()).docs.map(v=>({id:v.id,...v.data()}));c(_)}catch(F){console.error("Error fetching profiles: ",F)}finally{f(!1)}},[]);W.useEffect(()=>{if(!Lr){i(!1);return}const L=Lr.onAuthStateChanged(F=>{e(F),R(F),i(!1)});return()=>L()},[R]),W.useEffect(()=>{"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(L=>{console.log("Service Worker registered: ",L)}).catch(L=>{console.log("Service Worker registration failed: ",L)})})},[]);const N=L=>{o(L),s("AUDIT")},x=L=>{L!=="AUDIT"&&o(void 0),L!=="PROFILE_DETAIL"&&g(null),s(L)},I=async L=>{if(!t||!gi)throw new Error("User not signed in or DB not available");await gi.collection("clients").add({...L,consultant_uid:t.uid,createdAt:new Date}),await R(t),s("PROFILES")},E=L=>{g(L),s("PROFILE_DETAIL")},A=async(L,F)=>{if(!t||!gi)throw new Error("User not signed in or DB not available");await gi.collection("audits").add({client_id:F,consultant_uid:t.uid,status:"complete",ai_report:L,date_completed:new Date})};if(To)return C.jsxs("div",{style:{padding:"2rem",color:"#dc3545",textAlign:"center"},children:[C.jsx("h2",{children:"Configuration Error"}),C.jsx("p",{children:To})]});if(n)return C.jsx(MB,{});if(!t)return C.jsx(kB,{});const O=()=>{switch(r){case"MAP":return C.jsx(NI,{onStartAudit:N});case"SERVICES":return C.jsx(qB,{});case"CLIENT_SETUP":return C.jsx(zB,{onCreateProfile:I});case"AUDIT":return C.jsx(BB,{business:a,onSaveAudit:A});case"PROFILES":return C.jsx(OI,{profiles:u,onSelectProfile:E,loading:d});case"PROFILE_DETAIL":return p?C.jsx(FB,{profile:p,onBack:()=>s("PROFILES"),onRunAudit:L=>{o(L),s("AUDIT")}}):C.jsx(OI,{profiles:u,onSelectProfile:E,loading:d});case"TOOLS":return C.jsx(jB,{});default:return C.jsx(NI,{onStartAudit:N})}};return C.jsxs(C.Fragment,{children:[C.jsx(UB,{}),C.jsx(LB,{user:t,currentView:r,setView:x,onSignOut:SB}),C.jsx("main",{className:"app-container",children:O()})]})},PI=document.getElementById("root");PI?rP.createRoot(PI).render(C.jsx(GB,{})):console.error("Failed to find the root element.");
