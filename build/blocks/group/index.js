(()=>{var e={1549:(e,t,r)=>{var n=r(2032),o=r(3862),l=r(6721),i=r(2749),a=r(5749);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=l,c.prototype.has=i,c.prototype.set=a,e.exports=c},79:(e,t,r)=>{var n=r(3702),o=r(80),l=r(4739),i=r(8655),a=r(1175);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=l,c.prototype.has=i,c.prototype.set=a,e.exports=c},8223:(e,t,r)=>{var n=r(6110)(r(9325),"Map");e.exports=n},3661:(e,t,r)=>{var n=r(3040),o=r(7670),l=r(289),i=r(4509),a=r(2949);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=l,c.prototype.has=i,c.prototype.set=a,e.exports=c},1873:(e,t,r)=>{var n=r(9325).Symbol;e.exports=n},4932:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},6025:(e,t,r)=>{var n=r(5288);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},2552:(e,t,r)=>{var n=r(1873),o=r(659),l=r(9350),i=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":i&&i in Object(e)?o(e):l(e)}},426:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,r){return null!=e&&t.call(e,r)}},7534:(e,t,r)=>{var n=r(2552),o=r(346);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},5083:(e,t,r)=>{var n=r(1882),o=r(7296),l=r(3805),i=r(7473),a=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,s=c.toString,p=u.hasOwnProperty,f=RegExp("^"+s.call(p).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!l(e)||o(e))&&(n(e)?f:a).test(i(e))}},7556:(e,t,r)=>{var n=r(1873),o=r(4932),l=r(6449),i=r(4394),a=n?n.prototype:void 0,c=a?a.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(l(t))return o(t,e)+"";if(i(t))return c?c.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},1769:(e,t,r)=>{var n=r(6449),o=r(8586),l=r(1802),i=r(3222);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:l(i(e))}},5481:(e,t,r)=>{var n=r(9325)["__core-js_shared__"];e.exports=n},4840:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},2651:(e,t,r)=>{var n=r(4218);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},6110:(e,t,r)=>{var n=r(5083),o=r(392);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},659:(e,t,r)=>{var n=r(1873),o=Object.prototype,l=o.hasOwnProperty,i=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=l.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=i.call(e);return n&&(t?e[a]=r:delete e[a]),o}},392:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},9326:(e,t,r)=>{var n=r(1769),o=r(2428),l=r(6449),i=r(361),a=r(294),c=r(7797);e.exports=function(e,t,r){for(var u=-1,s=(t=n(t,e)).length,p=!1;++u<s;){var f=c(t[u]);if(!(p=null!=e&&r(e,f)))break;e=e[f]}return p||++u!=s?p:!!(s=null==e?0:e.length)&&a(s)&&i(f,s)&&(l(e)||o(e))}},2032:(e,t,r)=>{var n=r(1042);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},3862:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},6721:(e,t,r)=>{var n=r(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},2749:(e,t,r)=>{var n=r(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},5749:(e,t,r)=>{var n=r(1042);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},361:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},8586:(e,t,r)=>{var n=r(6449),o=r(4394),l=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,i=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||i.test(e)||!l.test(e)||null!=t&&e in Object(t)}},4218:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},7296:(e,t,r)=>{var n,o=r(5481),l=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!l&&l in e}},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},80:(e,t,r)=>{var n=r(6025),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():o.call(t,r,1),--this.size,0))}},4739:(e,t,r)=>{var n=r(6025);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},8655:(e,t,r)=>{var n=r(6025);e.exports=function(e){return n(this.__data__,e)>-1}},1175:(e,t,r)=>{var n=r(6025);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},3040:(e,t,r)=>{var n=r(1549),o=r(79),l=r(8223);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(l||o),string:new n}}},7670:(e,t,r)=>{var n=r(2651);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},289:(e,t,r)=>{var n=r(2651);e.exports=function(e){return n(this,e).get(e)}},4509:(e,t,r)=>{var n=r(2651);e.exports=function(e){return n(this,e).has(e)}},2949:(e,t,r)=>{var n=r(2651);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},2224:(e,t,r)=>{var n=r(104);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},1042:(e,t,r)=>{var n=r(6110)(Object,"create");e.exports=n},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,r)=>{var n=r(4840),o="object"==typeof self&&self&&self.Object===Object&&self,l=n||o||Function("return this")();e.exports=l},1802:(e,t,r)=>{var n=r(2224),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,l=/\\(\\)?/g,i=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,r,n,o){t.push(n?o.replace(l,"$1"):r||e)})),t}));e.exports=i},7797:(e,t,r)=>{var n=r(4394);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7473:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5288:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},1448:(e,t,r)=>{var n=r(426),o=r(9326);e.exports=function(e,t){return null!=e&&o(e,t,n)}},2428:(e,t,r)=>{var n=r(7534),o=r(346),l=Object.prototype,i=l.hasOwnProperty,a=l.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return o(e)&&i.call(e,"callee")&&!a.call(e,"callee")};e.exports=c},6449:e=>{var t=Array.isArray;e.exports=t},1882:(e,t,r)=>{var n=r(2552),o=r(3805);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},294:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,r)=>{var n=r(2552),o=r(346);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},104:(e,t,r)=>{var n=r(3661);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],l=r.cache;if(l.has(o))return l.get(o);var i=e.apply(this,n);return r.cache=l.set(o,i)||l,i};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},3222:(e,t,r)=>{var n=r(7556);e.exports=function(e){return null==e?"":n(e)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var l=t[n]={exports:{}};return e[n](l,l.exports,r),l.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,n=window.wp.components,o=window.wp.element,l=window.wp.i18n;function i(e){var t=e.media,r=e.mediaClass,n=e.extraClass,o=t.url,l=t.alt,i=(t.width,t.height,t.sizes),a=o,c=o,u=o;return void 0!==i&&i.length>0&&(i.thumbnail,i.medium,i.large),React.createElement("picture",{className:"w-full h-full"},a?React.createElement("source",{media:"(max-width: 576px)",srcSet:a,className:"".concat(r," ").concat(n)}):null,c?React.createElement("source",{media:"(min-width: 768px)",srcSet:c,className:"".concat(r," ").concat(n)}):null,u?React.createElement("source",{media:"(min-width: 1200px)",srcSet:u,className:"".concat(r," ").concat(n)}):null,c?React.createElement("img",{src:c,alt:l,className:"".concat(r," ").concat(n)}):null)}function a(e){var t=e.media,r=e.mediaClass,n=(e.extraClass,t.url),o=(t.alt,n),l=r?"responsive-video ".concat(r):"responsive-video";return React.createElement("video",{className:l,preload:"none",playsInline:!0,controls:!0,autoPlay:!0,muted:!0,loop:!0},React.createElement("source",{src:o,type:"video/mp4"}))}window.wp.url;const c=window.wp.apiFetch;var u=r.n(c);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=s(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=s(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==s(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,i,a=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return a}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function v(e,t){if(e){if("string"==typeof e)return h(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?h(e,t):void 0}}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function y(e){var t=m((0,o.useState)(""),2),r=t[0],i=t[1],a=m((0,o.useState)(null),2),c=a[0],s=a[1],p=m((0,o.useState)({url:"",title:""}),2),b=p[0],y=p[1];return(0,o.useEffect)((function(){""!==r&&(s(null),u()({path:"/blockbite/v1/block-helpers/get-links/".concat(r)}).then((function(e){var t;e.length?s(function(e){if(Array.isArray(e))return h(e)}(t=e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(t)||v(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()):s([])})))}),[r]),(0,o.useEffect)((function(){""!==b.url&&e.parentCallback(b)}),[b]),React.createElement(React.Fragment,null,React.createElement("div",{className:"blockbite--editor-linkwrap"},React.createElement(n.TextControl,{label:(0,l.__)("Search link","blockbitelinks"),value:r,placeholder:"Example: About",onChange:function(e){return i(e)},help:(0,l.__)("Type a post, page, title","blockbitelinks")}),r?React.createElement("div",{className:"blockbite--editor-linklist"},React.createElement(d,{links:c,onActiveLink:function(e){return[y(f({},e)),i("")]}})):null))}function d(e){var t=e.links,r=e.onActiveLink,n=[];return null===t?React.createElement("p",null,"Loading..."):0===t.length?React.createElement("p",null,"No Results"):(t.forEach((function(e){n.push(React.createElement("div",{key:e.id},React.createElement("span",{className:"blockbite--editor-link",onClick:function(){return r(e)}},React.createElement("span",null,e.title),React.createElement("span",{className:"blockbite--preview-link"},e.url),React.createElement("span",{className:"blockbite--preview-link"},e.post_type))))})),n)}function g(e){return g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},g(e)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){k(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function k(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=g(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=g(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==g(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,l,i,a=[],c=!0,u=!1;try{if(l=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=l.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return x(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?x(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function j(e){var t=e.linkUrl,r=e.linkTitle,i=e.linkTarget,a=e.linkTile,c=e.showLinkTile,u=e.parentCallback,s=O((0,o.useState)(!1),2),p=s[0],f=(s[1],O((0,o.useState)(""),2)),b=f[0],m=f[1],v=O((0,o.useState)(""),2),h=v[0],d=v[1],g=O((0,o.useState)(!1),2),w=g[0],k=g[1],x=O((0,o.useState)(!1),2),j=x[0],C=x[1];(0,o.useEffect)((function(){"_blank"===i&&k(!0),a&&C(!0),t&&m(t),r&&d(r)}),[]),(0,o.useEffect)((function(){var e=_({},E());u(e)}),[h,b,w,j]);var E=function(){var e={};return h&&(e.linkTitle=h),b&&(e.linkUrl=b),e.linkTile=a,e.linkTarget=w?"_blank":"_self",e};return React.createElement(React.Fragment,null,React.createElement(n.PanelRow,null,p?React.createElement("span",{style:{color:"red"}},p):React.createElement("div",null,React.createElement("span",null,h),React.createElement("br",null),React.createElement("span",null,b))),React.createElement(n.PanelRow,null,React.createElement("fieldset",null,React.createElement(y,{parentCallback:function(e){var t=_({},E());t.linkTitle=e.title,t.linkUrl=e.url,d(e.title),m(e.url),u(t)}}),React.createElement(n.TextControl,{label:(0,l.__)("Titel","blockbite-icon"),value:h,onChange:function(e){return d(e)},help:(0,l.__)("Change your button title...","blockbite-icon")}),React.createElement(n.TextControl,{label:(0,l.__)("Url","blockbite-icon"),value:b,onChange:function(e){return m(e)},help:(0,l.__)("Change your button url...","blockbite-icon")}),React.createElement(n.Button,{variant:"secondary",onClick:function(){var e=_({},E());e.linkTitle="",e.linkUrl="",m(""),d(""),u(e)}},"Clear link"))),React.createElement(n.PanelRow,null,React.createElement(n.ToggleControl,{label:"Open in tab",help:w?"Open in tab":"Within site",checked:w,onChange:function(e){return k(e)}})),c&&React.createElement(n.PanelRow,null,React.createElement(n.ToggleControl,{label:"Link as Tile",help:j?"Make the whole area clickable":"Make only the button clickable",checked:j,onChange:function(e){return C(e)}})))}var C=r(1448),E=r.n(C),S=r(6449),P=r.n(S),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e[0];return P()(e)||(e=T(e)),E()(r,"id")?e.map((function(e){var r=null;return E()(e,"icon")&&(r=e.icon),{label:e.label,value:e.id,active:!1,icon:r,type:t}})):e.map((function(r){if(null==r)throw console.log("Blockbite mapOptions step is undefined",e,t),new Error("Blockbite mapOptions step is undefined");return{label:r.toString(),value:r,active:!1,type:t,icon:null}}))},T=function(e){var t=[];for(var r in e)t.push(r);return t};const A=window.React;function L(){return L=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},L.apply(null,arguments)}const H=function(e){return A.createElement("svg",L({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),A.createElement("line",{x1:9,y1:14,x2:23,y2:14,stroke:"currentColor",strokeWidth:4}),A.createElement("path",{d:"M3 14L11 7L11 21L3 14Z",fill:"currentColor"}))};function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(null,arguments)}const N=function(e){return A.createElement("svg",I({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),A.createElement("line",{x1:18,y1:14,x2:4,y2:14,stroke:"currentColor",strokeWidth:4}),A.createElement("path",{d:"M24 14L16 21L16 7L24 14Z",fill:"currentColor"}))};function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(null,arguments)}const B=function(e){return A.createElement("svg",z({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),A.createElement("line",{x1:14,y1:9,x2:14,y2:23,stroke:"currentColor",strokeWidth:4}),A.createElement("path",{d:"M14 3L21 11H7L14 3Z",fill:"currentColor"}))};function M(){return M=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},M.apply(null,arguments)}const U=function(e){return A.createElement("svg",M({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),A.createElement("line",{y1:-2,x2:14,y2:-2,transform:"matrix(-4.37114e-08 -1 -1 4.37114e-08 12 18)",stroke:"currentColor",strokeWidth:4}),A.createElement("path",{d:"M14 24L21 16H7L14 24Z",fill:"currentColor"}))};function V(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?$(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var D=[0,8,16,32,48,64,128,144,160,192,224,256,288,320,384,448],F=((0,l.__)("Shrink","blockbite"),(0,l.__)("Shrink item or not","blockbite"),(0,l.__)("Shrink","blockbite"),V(R([0,1],"shrink")),{id:"position",icon:null,label:(0,l.__)("Position","blockbite"),helper:(0,l.__)("Position item","blockbite"),optionClass:"",optionHooks:[],supports:{hover:!1},modifiers:[{id:"position",label:(0,l.__)("Position","blockbite"),selector:null,options:V(R(["fixed","absolute","relative","sticky top-0"],"position")),icon:null,className:"icon"}]});(0,l.__)("Overflow","blockbite"),(0,l.__)("Overflow item","blockbite"),(0,l.__)("Overflow","blockbite"),V(R([{label:"Clip",id:"clip"},{label:"Hidden",id:"hidden"},{label:"Visible",id:"visible"},{label:"Hide X",id:"x-hidden"},{label:"Hide Y",id:"y-hidden"},{label:"Scroll X",id:"x-scroll"},{label:"Scroll Y",id:"y-scroll"}],"overflow")),(0,l.__)("Top & Left","blockbite"),(0,l.__)("Move absolute positioned items","blockbite"),(0,l.__)("Left","blockbite"),V(R(D,"posl")),(0,l.__)("Right","blockbite"),V(R(D,"posr")),(0,l.__)("Top","blockbite"),V(R(D)),(0,l.__)("Bottom","blockbite"),V(R(D)),(0,l.__)("Min Left","blockbite"),V(R(D,"minposl")),(0,l.__)("Min Right","blockbite"),V(R(D,"minposr")),(0,l.__)("Min Top","blockbite"),V(R(D,"minpost")),(0,l.__)("Min Bottom","blockbite"),V(R(D,"minposb")),(0,l.__)("Anchor Position","blockbite"),(0,l.__)("Anchor position","blockbite"),(0,l.__)("Anchor Position","blockbite"),V(R([{label:"Top Center",id:"anchor-top-center"},{label:"Top Left",id:"anchor-top-left"},{label:"Top Right",id:"anchor-top-right"},{label:"Center Center",id:"anchor-center-center"},{label:"Center Left",id:"anchor-center-left"},{label:"Center Right",id:"anchor-center-right"},{label:"Bottom Center",id:"anchor-bottom-center"},{label:"Bottom Left",id:"anchor-bottom-left"},{label:"Bottom Right",id:"anchor-bottom-right"}],"anchorposition")),(0,l.__)("Group","blockbite"),(0,l.__)("Group","blockbite"),(0,l.__)("group","blockbite"),V(R([{label:"Group",id:"group"}],"group"));function Z(e){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Z(e)}(0,l.__)("Advanced Styles","blockbite");var G=["children"];function W(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function X(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=Z(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==Z(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var J=["children"];const q=JSON.parse('{"UU":"blockbite/group"}');function K(){return K=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(null,arguments)}(0,e.registerBlockType)(q.UU,{example:{attributes:{message:"Group"}},edit:function(e){var r=e.attributes,o=e.setAttributes,l=r.media,c=(r.imageProps,r.mediaStyle,r.mediaClass),u=(r.flexStyle,r.flexClass),s=r.linkUrl,p=r.linkTitle,f=r.linkTarget,b=(r.bitePreset,r.biteStyle),m=r.biteClass,v=(0,t.useBlockProps)({className:"wp-block-group"}),h=(0,t.useInnerBlocksProps)({className:"group--content ".concat(u)},{template:[["core/paragraph"]]}),y=h.children,d=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(h,G);return React.createElement("div",v,React.createElement(t.InspectorControls,null,React.createElement(n.PanelBody,{title:"Link",initialOpen:!1},React.createElement(j,{parentCallback:function(e){if(!function(){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=!1;return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).map((function(r){e.map((function(e){r.id===e.id&&(t=!0)}))})),t}(b,F.modifiers)){var t=function(){var e=arguments.length>1?arguments[1]:void 0,t=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:"").split(" ");return t.push(e),t.join(" ")}(m,"relative");o({biteClass:t}),o({biteStyle:[].concat((r=b,function(e){if(Array.isArray(e))return Y(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return Y(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Y(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),[{id:"position",screen:"all",value:"relative"}])})}var r;o(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?W(Object(r),!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):W(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e))},linkUrl:s,linkTitle:p,linkTarget:f,showLinkTile:!1}))),l.id?React.createElement("div",{className:"group--visual absolute left-0 top-0 w-full h-full z-0 overflow-hidden"},"video"===l.type?React.createElement(a,{media:l,mediaClass:"".concat(c),extraClass:"absolute left-0 top-0 w-full h-full z-0"}):React.createElement(i,{media:l,mediaClass:"".concat(c),extraClass:"absolute left-0 top-0 w-full h-full z-0"})):null,React.createElement("div",d,y))},icon:function(e){return A.createElement("svg",K({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),A.createElement("rect",{width:50,height:50,fill:"currentColor"}),A.createElement("path",{d:"M33.6667 21.75C33.954 21.75 34.2295 21.6359 34.4327 21.4327C34.6359 21.2295 34.75 20.954 34.75 20.6667V16.3333C34.75 16.046 34.6359 15.7705 34.4327 15.5673C34.2295 15.3641 33.954 15.25 33.6667 15.25H29.3333C29.046 15.25 28.7705 15.3641 28.5673 15.5673C28.3641 15.7705 28.25 16.046 28.25 16.3333V17.4167H21.75V16.3333C21.75 16.046 21.6359 15.7705 21.4327 15.5673C21.2295 15.3641 20.954 15.25 20.6667 15.25H16.3333C16.046 15.25 15.7705 15.3641 15.5673 15.5673C15.3641 15.7705 15.25 16.046 15.25 16.3333V20.6667C15.25 20.954 15.3641 21.2295 15.5673 21.4327C15.7705 21.6359 16.046 21.75 16.3333 21.75H17.4167V28.25H16.3333C16.046 28.25 15.7705 28.3641 15.5673 28.5673C15.3641 28.7705 15.25 29.046 15.25 29.3333V33.6667C15.25 33.954 15.3641 34.2295 15.5673 34.4327C15.7705 34.6359 16.046 34.75 16.3333 34.75H20.6667C20.954 34.75 21.2295 34.6359 21.4327 34.4327C21.6359 34.2295 21.75 33.954 21.75 33.6667V32.5833H28.25V33.6667C28.25 33.954 28.3641 34.2295 28.5673 34.4327C28.7705 34.6359 29.046 34.75 29.3333 34.75H33.6667C33.954 34.75 34.2295 34.6359 34.4327 34.4327C34.6359 34.2295 34.75 33.954 34.75 33.6667V29.3333C34.75 29.046 34.6359 28.7705 34.4327 28.5673C34.2295 28.3641 33.954 28.25 33.6667 28.25H32.5833V21.75H33.6667ZM30.4167 28.25H29.3333C29.046 28.25 28.7705 28.3641 28.5673 28.5673C28.3641 28.7705 28.25 29.046 28.25 29.3333V30.4167H21.75V29.3333C21.75 29.046 21.6359 28.7705 21.4327 28.5673C21.2295 28.3641 20.954 28.25 20.6667 28.25H19.5833V21.75H20.6667C20.954 21.75 21.2295 21.6359 21.4327 21.4327C21.6359 21.2295 21.75 20.954 21.75 20.6667V19.5833H28.25V20.6667C28.25 20.954 28.3641 21.2295 28.5673 21.4327C28.7705 21.6359 29.046 21.75 29.3333 21.75H30.4167V28.25Z",fill:"#F5F5F5"}))},styles:[{name:"card",label:"card",isDefault:!0},{name:"outline",label:"outline"},{name:"default",label:"default"}],save:function(e){var r=e.attributes,n=r.linkUrl,o=r.linkTitle,l=r.linkTarget,c=(r.linkTile,r.media),u=r.mediaClass,s=r.flexClass,p=(r.metadata,t.useBlockProps.save({className:"wp-block-group"})),f=t.useInnerBlocksProps.save({className:"group--content ".concat(s)}),b=f.children,m=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(f,J);return React.createElement("div",p,c.id?React.createElement("div",{className:"group--visual absolute left-0 top-0 w-full h-full z-0 overflow-hidden"},"video"===c.type?React.createElement(a,{media:c,mediaClass:"".concat(u),extraClass:"absolute left-0 top-0 w-full h-full z-0"}):React.createElement(i,{media:c,mediaClass:"".concat(u),extraClass:"absolute left-0 top-0 w-full h-full z-0"})):null,n?React.createElement("a",{rel:"noopener noreferrer",target:l,href:n,title:o,className:"tile"}):null,React.createElement("div",m,b))}})})()})();