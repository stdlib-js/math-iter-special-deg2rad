// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).iterDeg2rad=e()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,r=Object.defineProperty,n=Object.prototype,o=n.toString,u=n.__defineGetter__,i=n.__defineSetter__,c=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,e,r){var l,a,y,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((a="value"in r)&&(c.call(t,e)||f.call(t,e)?(l=t.__proto__,t.__proto__=n,delete t[e],t[e]=r.value,t.__proto__=l):t[e]=r.value),y="get"in r,p="set"in r,a&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&u&&u.call(t,e,r.get),p&&i&&i.call(t,e,r.set),t};var l=e;function a(t,e,r){l(t,e,{configurable:!1,enumerable:!1,writable:!1,value:r})}var y=/./;function p(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function s(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function m(t,e){return null!=t&&d.call(t,e)}var j="function"==typeof Symbol?Symbol.toStringTag:"";var g=s()?function(t){var e,r,n;if(null==t)return v.call(t);r=t[j],e=m(t,j);try{t[j]=void 0}catch(e){return v.call(t)}return n=v.call(t),e?t[j]=r:delete t[j],n}:function(t){return v.call(t)},_=Boolean.prototype.toString;var w=s();function h(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return _.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===g(t)))}function O(t){return p(t)||h(t)}function S(){return new Function("return this;")()}a(O,"isPrimitive",p),a(O,"isObject",h);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var x=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),B=x.document&&x.document.childNodes,V=Int8Array;function F(){return/^\s*function\s*([^(]*)/i}var N=/^\s*function\s*([^(]*)/i;a(F,"REGEXP",N);var k=Array.isArray?Array.isArray:function(t){return"[object Array]"===g(t)};function C(t){return null!==t&&"object"==typeof t}function G(t){var e,r,n,o;if(("Object"===(r=g(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(e=N.exec(n.toString()))return e[1]}return C(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":r}a(C,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(e){var r,n;if(!k(e))return!1;if(0===(r=e.length))return!1;for(n=0;n<r;n++)if(!1===t(e[n]))return!1;return!0}}(C));var L="function"==typeof y||"object"==typeof V||"function"==typeof B?function(t){return G(t).toLowerCase()}:function(t){var e;return null===t?"null":"object"===(e=typeof t)?G(t).toLowerCase():e};function M(t){return"function"===L(t)}function D(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)&&M(t.next)}function I(t){return"number"==typeof t}var R=Number,U=R.prototype.toString;var X=s();function q(t){return"object"==typeof t&&(t instanceof R||(X?function(t){try{return U.call(t),!0}catch(t){return!1}}(t):"[object Number]"===g(t)))}function z(t){return I(t)||q(t)}a(z,"isPrimitive",I),a(z,"isObject",q);var H="function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&m(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator?Symbol.iterator:null;var J,K=Object.getPrototypeOf;J=M(Object.getPrototypeOf)?K:function(t){var e=function(t){return t.__proto__}(t);return e||null===e?e:"[object Function]"===g(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Q=J;var W=Object.prototype;function Y(t){var e;return!!function(t){return"object"==typeof t&&null!==t&&!k(t)}(t)&&(e=function(t){return null==t?null:(t=Object(t),Q(t))}(t),!e||!m(t,"constructor")&&m(e,"constructor")&&M(e.constructor)&&"[object Function]"===g(e.constructor)&&m(e,"isPrototypeOf")&&M(e.isPrototypeOf)&&(e===W||function(t){var e;for(e in t)if(!m(t,e))return!1;return!0}(t)))}function Z(t,e){return Y(e)?(m(e,"invalid")&&(t.invalid=e.invalid),null):new TypeError("invalid argument. Options argument must be an object. Value: `"+e+"`.")}function $(t,e,r){var n,o,u,i;if(!D(t))throw new TypeError("invalid argument. First argument must be an iterator protocol-compliant object. Value: `"+t+"`.");if(!M(e))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+e+"`.");if(n={invalid:NaN},arguments.length>2&&(u=Z(n,r)))throw u;return a(o={},"next",c),a(o,"return",f),H&&M(t[H])&&a(o,H,l),o;function c(){var r;return i?{done:!0}:(r=t.next()).done?(i=!0,r):{value:I(r.value)?e(r.value):n.invalid,done:!1}}function f(t){return i=!0,arguments.length?{value:t,done:!0}:{done:!0}}function l(){return $(t[H](),e,n)}}function tt(t){return.017453292519943295*t}return function(t){return $(t,tt)}}));
//# sourceMappingURL=browser.js.map
