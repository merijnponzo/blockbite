(()=>{var e={1549:(e,t,r)=>{var n=r(2032),o=r(3862),i=r(6721),l=r(2749),a=r(5749);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=l,c.prototype.set=a,e.exports=c},79:(e,t,r)=>{var n=r(3702),o=r(80),i=r(4739),l=r(8655),a=r(1175);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=l,c.prototype.set=a,e.exports=c},8223:(e,t,r)=>{var n=r(6110)(r(9325),"Map");e.exports=n},3661:(e,t,r)=>{var n=r(3040),o=r(7670),i=r(289),l=r(4509),a=r(2949);function c(e){var t=-1,r=null==e?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=l,c.prototype.set=a,e.exports=c},1873:(e,t,r)=>{var n=r(9325).Symbol;e.exports=n},4932:e=>{e.exports=function(e,t){for(var r=-1,n=null==e?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}},6025:(e,t,r)=>{var n=r(5288);e.exports=function(e,t){for(var r=e.length;r--;)if(n(e[r][0],t))return r;return-1}},2552:(e,t,r)=>{var n=r(1873),o=r(659),i=r(9350),l=n?n.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":l&&l in Object(e)?o(e):i(e)}},426:e=>{var t=Object.prototype.hasOwnProperty;e.exports=function(e,r){return null!=e&&t.call(e,r)}},7534:(e,t,r)=>{var n=r(2552),o=r(346);e.exports=function(e){return o(e)&&"[object Arguments]"==n(e)}},5083:(e,t,r)=>{var n=r(1882),o=r(7296),i=r(3805),l=r(7473),a=/^\[object .+?Constructor\]$/,c=Function.prototype,s=Object.prototype,u=c.toString,b=s.hasOwnProperty,f=RegExp("^"+u.call(b).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");e.exports=function(e){return!(!i(e)||o(e))&&(n(e)?f:a).test(l(e))}},7556:(e,t,r)=>{var n=r(1873),o=r(4932),i=r(6449),l=r(4394),a=n?n.prototype:void 0,c=a?a.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(l(t))return c?c.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r}},1769:(e,t,r)=>{var n=r(6449),o=r(8586),i=r(1802),l=r(3222);e.exports=function(e,t){return n(e)?e:o(e,t)?[e]:i(l(e))}},5481:(e,t,r)=>{var n=r(9325)["__core-js_shared__"];e.exports=n},4840:(e,t,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=n},2651:(e,t,r)=>{var n=r(4218);e.exports=function(e,t){var r=e.__data__;return n(t)?r["string"==typeof t?"string":"hash"]:r.map}},6110:(e,t,r)=>{var n=r(5083),o=r(392);e.exports=function(e,t){var r=o(e,t);return n(r)?r:void 0}},659:(e,t,r)=>{var n=r(1873),o=Object.prototype,i=o.hasOwnProperty,l=o.toString,a=n?n.toStringTag:void 0;e.exports=function(e){var t=i.call(e,a),r=e[a];try{e[a]=void 0;var n=!0}catch(e){}var o=l.call(e);return n&&(t?e[a]=r:delete e[a]),o}},392:e=>{e.exports=function(e,t){return null==e?void 0:e[t]}},9326:(e,t,r)=>{var n=r(1769),o=r(2428),i=r(6449),l=r(361),a=r(294),c=r(7797);e.exports=function(e,t,r){for(var s=-1,u=(t=n(t,e)).length,b=!1;++s<u;){var f=c(t[s]);if(!(b=null!=e&&r(e,f)))break;e=e[f]}return b||++s!=u?b:!!(u=null==e?0:e.length)&&a(u)&&l(f,u)&&(i(e)||o(e))}},2032:(e,t,r)=>{var n=r(1042);e.exports=function(){this.__data__=n?n(null):{},this.size=0}},3862:e=>{e.exports=function(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}},6721:(e,t,r)=>{var n=r(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;if(n){var r=t[e];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(t,e)?t[e]:void 0}},2749:(e,t,r)=>{var n=r(1042),o=Object.prototype.hasOwnProperty;e.exports=function(e){var t=this.__data__;return n?void 0!==t[e]:o.call(t,e)}},5749:(e,t,r)=>{var n=r(1042);e.exports=function(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=n&&void 0===t?"__lodash_hash_undefined__":t,this}},361:e=>{var t=/^(?:0|[1-9]\d*)$/;e.exports=function(e,r){var n=typeof e;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&t.test(e))&&e>-1&&e%1==0&&e<r}},8586:(e,t,r)=>{var n=r(6449),o=r(4394),i=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,l=/^\w*$/;e.exports=function(e,t){if(n(e))return!1;var r=typeof e;return!("number"!=r&&"symbol"!=r&&"boolean"!=r&&null!=e&&!o(e))||l.test(e)||!i.test(e)||null!=t&&e in Object(t)}},4218:e=>{e.exports=function(e){var t=typeof e;return"string"==t||"number"==t||"symbol"==t||"boolean"==t?"__proto__"!==e:null===e}},7296:(e,t,r)=>{var n,o=r(5481),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";e.exports=function(e){return!!i&&i in e}},3702:e=>{e.exports=function(){this.__data__=[],this.size=0}},80:(e,t,r)=>{var n=r(6025),o=Array.prototype.splice;e.exports=function(e){var t=this.__data__,r=n(t,e);return!(r<0||(r==t.length-1?t.pop():o.call(t,r,1),--this.size,0))}},4739:(e,t,r)=>{var n=r(6025);e.exports=function(e){var t=this.__data__,r=n(t,e);return r<0?void 0:t[r][1]}},8655:(e,t,r)=>{var n=r(6025);e.exports=function(e){return n(this.__data__,e)>-1}},1175:(e,t,r)=>{var n=r(6025);e.exports=function(e,t){var r=this.__data__,o=n(r,e);return o<0?(++this.size,r.push([e,t])):r[o][1]=t,this}},3040:(e,t,r)=>{var n=r(1549),o=r(79),i=r(8223);e.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},7670:(e,t,r)=>{var n=r(2651);e.exports=function(e){var t=n(this,e).delete(e);return this.size-=t?1:0,t}},289:(e,t,r)=>{var n=r(2651);e.exports=function(e){return n(this,e).get(e)}},4509:(e,t,r)=>{var n=r(2651);e.exports=function(e){return n(this,e).has(e)}},2949:(e,t,r)=>{var n=r(2651);e.exports=function(e,t){var r=n(this,e),o=r.size;return r.set(e,t),this.size+=r.size==o?0:1,this}},2224:(e,t,r)=>{var n=r(104);e.exports=function(e){var t=n(e,(function(e){return 500===r.size&&r.clear(),e})),r=t.cache;return t}},1042:(e,t,r)=>{var n=r(6110)(Object,"create");e.exports=n},9350:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},9325:(e,t,r)=>{var n=r(4840),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();e.exports=i},1802:(e,t,r)=>{var n=r(2224),o=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,i=/\\(\\)?/g,l=n((function(e){var t=[];return 46===e.charCodeAt(0)&&t.push(""),e.replace(o,(function(e,r,n,o){t.push(n?o.replace(i,"$1"):r||e)})),t}));e.exports=l},7797:(e,t,r)=>{var n=r(4394);e.exports=function(e){if("string"==typeof e||n(e))return e;var t=e+"";return"0"==t&&1/e==-1/0?"-0":t}},7473:e=>{var t=Function.prototype.toString;e.exports=function(e){if(null!=e){try{return t.call(e)}catch(e){}try{return e+""}catch(e){}}return""}},5288:e=>{e.exports=function(e,t){return e===t||e!=e&&t!=t}},1448:(e,t,r)=>{var n=r(426),o=r(9326);e.exports=function(e,t){return null!=e&&o(e,t,n)}},2428:(e,t,r)=>{var n=r(7534),o=r(346),i=Object.prototype,l=i.hasOwnProperty,a=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(e){return o(e)&&l.call(e,"callee")&&!a.call(e,"callee")};e.exports=c},6449:e=>{var t=Array.isArray;e.exports=t},1882:(e,t,r)=>{var n=r(2552),o=r(3805);e.exports=function(e){if(!o(e))return!1;var t=n(e);return"[object Function]"==t||"[object GeneratorFunction]"==t||"[object AsyncFunction]"==t||"[object Proxy]"==t}},294:e=>{e.exports=function(e){return"number"==typeof e&&e>-1&&e%1==0&&e<=9007199254740991}},3805:e=>{e.exports=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)}},346:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}},4394:(e,t,r)=>{var n=r(2552),o=r(346);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==n(e)}},104:(e,t,r)=>{var n=r(3661);function o(e,t){if("function"!=typeof e||null!=t&&"function"!=typeof t)throw new TypeError("Expected a function");var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var l=e.apply(this,n);return r.cache=i.set(o,l)||i,l};return r.cache=new(o.Cache||n),r}o.Cache=n,e.exports=o},3222:(e,t,r)=>{var n=r(7556);e.exports=function(e){return null==e?"":n(e)}}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,n=window.wp.components,o=window.wp.element,i=window.wp.i18n;function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=l(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==l(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}function b(e){var r=e.mediaProps,l=e.mediaCallback,a=function(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i,l,a=[],c=!0,s=!1;try{if(i=(r=r.call(e)).next,0===t){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=i.call(r)).done)&&(a.push(n.value),a.length!==t);c=!0);}catch(e){s=!0,o=e}finally{try{if(!c&&null!=r.return&&(l=r.return(),Object(l)!==l))return}finally{if(s)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return u(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?u(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((0,o.useState)({id:null,url:"",sizes:[],alt:"",type:"",width:0,height:0}),2),s=a[0],b=a[1];(0,o.useEffect)((function(){r&&b(c({},r))}),[r]);var f=function(e){var t=["large","medium","thumbnail"],r=[];for(var n in e.sizes)t.includes(n)&&(r[n]=e.sizes[n].url);var o={id:e.id,url:e.url,sizes:r,alt:e.alt,type:e.type,width:e.width,height:e.height};l(c({},o))};return React.createElement(React.Fragment,null,React.createElement(n.PanelRow,null,null!==s.id&&React.createElement(t.MediaUploadCheck,null,React.createElement(t.MediaUpload,{onSelect:f,value:s.id,allowedTypes:["image","video"],render:function(e){var t=e.open;return React.createElement(n.Button,{className:0==s.id?"editor-post-featured-image__toggle":"editor-post-featured-image__preview",onClick:t},0==s.id&&(0,i.__)("Choose an image or video","blockbite"),s.id&&"video"!==s.type?React.createElement("div",{className:"blockbite--editor-visual-image"},React.createElement("img",{src:s.url})):"Video")}})),0!=s.id&&React.createElement(t.MediaUploadCheck,null,React.createElement(t.MediaUpload,{title:(0,i.__)("Replace media","blockbite"),value:s.id,onSelect:f,allowedTypes:["image"],render:function(e){var t=e.open;return React.createElement(n.Button,{onClick:t},(0,i.__)("Replace media","blockbite"))}})),0!=s.id&&React.createElement(t.MediaUploadCheck,null,React.createElement(n.Button,{onClick:function(){l(c({},{mediaId:0,mediaUrl:""}))},isDestructive:!0},(0,i.__)("Remove media","blockbite")))))}const f=window.wp.data;function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=p(e)||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==p(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function h(e){var t=(0,f.useSelect)((function(e){return e("core/block-editor").getBlocks()})),r=(0,f.useSelect)((function(e){return(0,e("core/block-editor").getSelectedBlock)()}),[]),o=(0,f.useDispatch)(),i=["biteClass","biteStyle","biteMotion","biteMotionClass","mediaClass","imageProps","backgroundColor","textColor","style","verticalAlignment","isStackedOnMobile","width","height","className","animationsForBlocks","fontFamily","fontSize","level","desktopProps","tabletProps","mobileProps","gridClass","svgSize","gapX","gapY","innerClass","flexStyle","flexClass"],l=function e(t){return t.map((function(t){var r=function(e){var t={};if(e.attributes)for(var r in e.attributes)i.includes(r)&&(t[r]=e.attributes[r]);return t}(t);if(t.innerBlocks.length>0){var n=e(t.innerBlocks);return{name:t.name,attributes:r,innerBlocks:n}}return{name:t.name,attributes:r,innerBlocks:[]}}))},a=function e(t,r){var n=t.map((function(t,n){var l,a;if(r[n]){if(r[n].name===t.name){var c=t,s=r[n];if(c.innerBlocks.length>0&&s.innerBlocks.length>0&&e(c.innerBlocks,s.innerBlocks),c.name===s.name){var u=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},t.attributes);for(var b in t.attributes)i.includes(b)&&(console.log(b,"is copied",s.attributes[b]),u[b]=s.attributes[b]);l=t.clientId,a=u,o("core/block-editor").updateBlockAttributes(l,a)}}}else console.log("the structure of the copied blocks is not the same as the original")}));return n};return React.createElement(n.PanelBody,{title:e.title,initialOpen:!1},React.createElement("div",null,React.createElement("p",{className:"my-16 block"},"Only works if the type & amount of elements within this layout are the same"),React.createElement("div",{className:"flex gap-8"},React.createElement(n.Button,{variant:"secondary",onClick:function(){return e=l(t),r=JSON.stringify(e),void localStorage.setItem("blockbite_copy",r);var e,r}},"Copy All"),React.createElement(n.Button,{variant:"secondary",onClick:function(){return e=JSON.parse(localStorage.getItem("blockbite_copy")),void a(t,e);var e}},"Paste All")),React.createElement("div",null,React.createElement("p",null,"Copy Single Block Style"),React.createElement("div",{className:"flex gap-8"},React.createElement(n.Button,{variant:"secondary",onClick:function(){return function(){var e=[];e.push(r);var t=l(e),n=JSON.stringify(t);localStorage.setItem("blockbite_copy",n)}()}},"Copy Block Style"),React.createElement(n.Button,{variant:"secondary",onClick:function(){return function(){var e=[];e.push(r);var t=JSON.parse(localStorage.getItem("blockbite_copy"));a(e,t)}()}},"Paste Block Style")))))}function v(e){var t=e.media,r=e.mediaClass,n=e.extraClass,o=t.url,i=t.alt,l=(t.width,t.height,t.sizes),a=o,c=o,s=o;return void 0!==l&&l.length>0&&(l.thumbnail,l.medium,l.large),React.createElement("picture",{className:"w-full h-full"},a?React.createElement("source",{media:"(max-width: 576px)",srcSet:a,className:"".concat(r," ").concat(n)}):null,c?React.createElement("source",{media:"(min-width: 768px)",srcSet:c,className:"".concat(r," ").concat(n)}):null,s?React.createElement("source",{media:"(min-width: 1200px)",srcSet:s,className:"".concat(r," ").concat(n)}):null,c?React.createElement("img",{src:c,alt:i,className:"".concat(r," ").concat(n)}):null)}function y(e){var t=e.media,r=e.mediaClass,n=(e.extraClass,t.url),o=(t.alt,n),i=r?"responsive-video ".concat(r):"responsive-video";return React.createElement("video",{className:i,preload:"none",playsInline:!0,controls:!0,autoPlay:!0,muted:!0,loop:!0},React.createElement("source",{src:o,type:"video/mp4"}))}var _=r(1448),g=r.n(_),w=r(6449),k=r.n(w),O=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=e[0];return k()(e)||(e=x(e)),g()(r,"id")?e.map((function(e){var r=null;return g()(e,"icon")&&(r=e.icon),{label:e.label,value:e.id,active:!1,icon:r,type:t}})):e.map((function(r){if(null==r)throw console.log("Blockbite mapOptions step is undefined",e,t),new Error("Blockbite mapOptions step is undefined");return{label:r.toString(),value:r,active:!1,type:t,icon:null}}))},x=function(e){var t=[];for(var r in e)t.push(r);return t};const j=window.React;function S(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(null,arguments)}function C(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},C.apply(null,arguments)}function E(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(null,arguments)}function P(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},P.apply(null,arguments)}function R(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},R.apply(null,arguments)}function A(e){return function(e){if(Array.isArray(e))return B(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return B(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var L=A(O(["md","lg","xl","2xl","3xl","full"],"unitsrounded")),H=(A(O(["sm","md","lg","xl","2xl","inner"],"unitsshadow")),[{label:"Sepia",id:"sepia"},{label:"Grayscale",id:"grayscale"},{label:"Invert",id:"invert"}]);(0,i.__)("Rounded","blockbite"),(0,i.__)("Create a rounded item","blockbite"),(0,i.__)("Around","blockbite"),(0,i.__)("Top Left","blockbite"),(0,i.__)("Top Right","blockbite"),(0,i.__)("Bottom Left","blockbite"),(0,i.__)("Bottom Right","blockbite"),(0,i.__)("Shadow","blockbite"),(0,i.__)("Create a shadow item","blockbite"),(0,i.__)("Shadow","blockbite"),(0,i.__)("Visibility","blockbite"),(0,i.__)("Create a visibility item","blockbite"),(0,i.__)("Visibility","blockbite"),A(O(["hidden","visible"],"visibility")),(0,i.__)("Effect Filters","blockbite"),(0,i.__)("Set the filters","blockbite"),(0,i.__)("Effect Filters","blockbite"),A(O(H,"effectfilters")),(0,i.__)("Blur Filters","blockbite"),(0,i.__)("Set the blur filters of the image","blockbite"),(0,i.__)("Blur Filters","blockbite"),A(O([{label:"blur small",id:"blur-sm"},{label:"blur",id:"blur"},{label:"blur large",id:"blur-lg"},{label:"blur x large",id:"blur-xl"},{label:"blur 2x large",id:"blur-2xl"},{label:"blur 3x large",id:"blur-3xl"}],"blurfilters")),(0,i.__)("Mix Blend Filters","blockbite"),(0,i.__)("Set the mix blend filters","blockbite"),(0,i.__)("Mix Blend Filters","blockbite"),A(O([{label:"Normal",id:"normal"},{label:"Multiply",id:"multiply"},{label:"Screen",id:"screen"},{label:"Overlay",id:"overlay"},{label:"Darken",id:"darken"},{label:"Lighten",id:"lighten"}],"mixblendfilters")),(0,i.__)("Opacity","blockbite"),(0,i.__)("Create opacity item","blockbite"),(0,i.__)("Opacity","blockbite"),A(O([25,50,75,100],"opacity"));function I(){return I=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},I.apply(null,arguments)}const M=function(e){return j.createElement("svg",I({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("line",{x1:9,y1:14,x2:23,y2:14,stroke:"currentColor",strokeWidth:4}),j.createElement("path",{d:"M3 14L11 7L11 21L3 14Z",fill:"currentColor"}))};function z(){return z=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},z.apply(null,arguments)}const T=function(e){return j.createElement("svg",z({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("line",{x1:18,y1:14,x2:4,y2:14,stroke:"currentColor",strokeWidth:4}),j.createElement("path",{d:"M24 14L16 21L16 7L24 14Z",fill:"currentColor"}))};function V(){return V=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},V.apply(null,arguments)}const N=function(e){return j.createElement("svg",V({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("line",{x1:14,y1:9,x2:14,y2:23,stroke:"currentColor",strokeWidth:4}),j.createElement("path",{d:"M14 3L21 11H7L14 3Z",fill:"currentColor"}))};function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},F.apply(null,arguments)}const $=function(e){return j.createElement("svg",F({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 28 28",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("line",{y1:-2,x2:14,y2:-2,transform:"matrix(-4.37114e-08 -1 -1 4.37114e-08 12 18)",stroke:"currentColor",strokeWidth:4}),j.createElement("path",{d:"M14 24L21 16H7L14 24Z",fill:"currentColor"}))};function U(e){return function(e){if(Array.isArray(e))return Z(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?Z(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var D=[0,8,16,32,48,64,128,144,160,192,224,256,288,320,384,448];(0,i.__)("Position","blockbite"),(0,i.__)("Position item","blockbite"),(0,i.__)("Position","blockbite"),U(O(["fixed","absolute","relative","sticky top-0"],"position")),(0,i.__)("Overflow","blockbite"),(0,i.__)("Overflow item","blockbite"),(0,i.__)("Overflow","blockbite"),U(O([{label:"Clip",id:"clip"},{label:"Hidden",id:"hidden"},{label:"Visible",id:"visible"},{label:"Hide X",id:"x-hidden"},{label:"Hide Y",id:"y-hidden"},{label:"Scroll X",id:"x-scroll"},{label:"Scroll Y",id:"y-scroll"}],"overflow")),(0,i.__)("Top & Left","blockbite"),(0,i.__)("Move absolute positioned items","blockbite"),(0,i.__)("Left","blockbite"),U(O(D,"posl")),(0,i.__)("Right","blockbite"),U(O(D,"posr")),(0,i.__)("Top","blockbite"),U(O(D)),(0,i.__)("Bottom","blockbite"),U(O(D)),(0,i.__)("Min Left","blockbite"),U(O(D,"minposl")),(0,i.__)("Min Right","blockbite"),U(O(D,"minposr")),(0,i.__)("Min Top","blockbite"),U(O(D,"minpost")),(0,i.__)("Min Bottom","blockbite"),U(O(D,"minposb")),(0,i.__)("Anchor Position","blockbite"),(0,i.__)("Anchor position","blockbite"),(0,i.__)("Anchor Position","blockbite"),U(O([{label:"Top Center",id:"anchor-top-center"},{label:"Top Left",id:"anchor-top-left"},{label:"Top Right",id:"anchor-top-right"},{label:"Center Center",id:"anchor-center-center"},{label:"Center Left",id:"anchor-center-left"},{label:"Center Right",id:"anchor-center-right"},{label:"Bottom Center",id:"anchor-bottom-center"},{label:"Bottom Left",id:"anchor-bottom-left"},{label:"Bottom Right",id:"anchor-bottom-right"}],"anchorposition")),(0,i.__)("Group","blockbite"),(0,i.__)("Group","blockbite"),(0,i.__)("group","blockbite"),U(O([{label:"Group",id:"group"}],"group"));(0,i.__)("Advanced Styles","blockbite");const W=(e="")=>function(e){const t={},r=[0,1,2,4,6,8,10,12,14,18,20,22,24,32];for(let n=0;n<r.length;n++){let o=r[n];t[`${e}${o}`]=o/16+"rem"}for(let r=1;r<80;r++)t[`${e}${16*r}`]=r+"rem";return t}(e),G=(e="")=>{const t=function(e){const t={};return[{size:"0px",slug:"0",name:"0"},{size:"clamp(16px, 1vw, 32px)",slug:"1",name:"1"},{size:"clamp(32px, 1vw, 48px)",slug:"2",name:"2"},{size:"clamp(40px, 1vw, 50px)",slug:"3",name:"3"},{size:"clamp(64px, 1vw, 80px)",slug:"4",name:"4"},{size:"clamp(128px, 1vw, 144px)",slug:"5",name:"5"},{size:"clamp(144px, 1vw, 164px)",slug:"6",name:"6"},{slug:"8",size:"clamp(16px, 1vw, 32px)",name:"8"},{slug:"9",size:"clamp(16px, 1vw, 32px)",name:"9"},{slug:"10",size:"clamp(16px, 1vw, 32px)",name:"10"}].forEach((r=>{t[e+"clamp-"+r.slug]=r.size})),t}(e);return t},J=()=>function(){const e={};return["b_screen-10","b_screen-20","b_screen-30","b_screen-40","b_screen-50","b_screen-60","b_screen-70","b_screen-80","b_screen-90","b_screen-100"].forEach((t=>{e[t]=t})),e}();function X(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},X.apply(null,arguments)}function Y(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y.apply(null,arguments)}function q(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},q.apply(null,arguments)}function K(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},K.apply(null,arguments)}function Q(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Q.apply(null,arguments)}function ee(e){return function(e){if(Array.isArray(e))return te(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return te(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?te(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var re=[].concat(ee(O([0,"px",.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96],"native")),ee(O(["1/2","1/3","2/3","1/4","2/4","3/4","1/5","2/5","3/5","4/5","1/6","2/6","3/6","4/6","5/6","1/12","2/12","3/12","4/12","5/12","6/12","7/12","8/12","9/12","10/12","11/12","full"],"percent")),ee(O(J(),"screen")),ee(O(G(),"clamp")),ee(O(W(),"grid"))),ne=[0,12,45,90,180],oe=[0,50,75,90,95,100,110,125,150],ie=[1,2,3,4,5,6,7,8,9,10,11,12],le=Array.from({length:97},(function(e,t){return t}));(0,i.__)("Rotate","blockbite"),(0,i.__)("Rotate an item","blockbite"),(0,i.__)("Rotate Left","blockbite"),ee(O(ne,"rotate")),(0,i.__)("Rotate Right","blockbite"),ee(O(ne,"rotate")),(0,i.__)("Position (xy)","blockbite"),(0,i.__)("Create space within the item","blockbite"),(0,i.__)("Left","blockbite"),(0,i.__)("Right","blockbite"),(0,i.__)("Top","blockbite"),(0,i.__)("Bottom","blockbite"),(0,i.__)("Position Grid (x,y)","blockbite"),(0,i.__)("Only for items in grid","blockbite"),(0,i.__)("Left","blockbite"),ee(O(ie,"span")),(0,i.__)("Top","blockbite"),ee(O(ie,"span")),(0,i.__)("Scale","blockbite"),(0,i.__)("Scale an item","blockbite"),(0,i.__)("Scale","blockbite"),ee(O(oe,"scale")),(0,i.__)("Scale X","blockbite"),ee(O(oe,"scale")),(0,i.__)("Scale Y","blockbite"),ee(O(oe,"scale"));function ae(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ae.apply(null,arguments)}(0,i.__)("Area (xy)","blockbite"),(0,i.__)("Create space within the item","blockbite"),(0,i.__)("Init","blockbite"),(0,i.__)("Left","blockbite"),ee(O(le,"b_area")),(0,i.__)("Top","blockbite"),ee(O(le,"b_area")),(0,i.__)("Width","blockbite"),ee(O(le,"b_area")),(0,i.__)("Height","blockbite"),ee(O(le,"b_area"));function ce(){return Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ce.apply(null,arguments)}function se(){return se=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},se.apply(null,arguments)}const ue=function(e){return j.createElement("svg",se({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("path",{d:"M1 5H2.3668L3.8104 8.35938H3.87183L5.31542 5H6.68222V10H5.60721V6.74561H5.56369L4.20713 9.97559H3.47509L2.11853 6.7334H2.07501V10H1V5Z",fill:"currentColor"}),j.createElement("path",{d:"M8.70363 5V10H7.59534V5H8.70363Z",fill:"currentColor"}),j.createElement("path",{d:"M14 5V10H13.0427L10.7622 6.85303H10.7238V10H9.61548V5H10.5881L12.8508 8.14453H12.8968V5H14Z",fill:"currentColor"}))};function be(){return be=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},be.apply(null,arguments)}const fe=function(e){return j.createElement("svg",be({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("path",{d:"M1 5H2.07858L3.21775 8.35938H3.26623L4.4054 5H5.48398V10H4.63566V6.74561H4.60132L3.53082 9.97559H2.95316L1.88266 6.7334H1.84832V10H1V5Z",fill:"currentColor"}),j.createElement("path",{d:"M6.91754 10H5.98035L7.40835 5H8.5354L9.96139 10H9.0242L7.98804 6.14258H7.95572L6.91754 10ZM6.85896 8.03467H9.07267V8.85986H6.85896V8.03467Z",fill:"currentColor"}),j.createElement("path",{d:"M11.2793 5L12.1135 6.7041H12.1458L12.984 5H13.9717L12.7093 7.5L14 10H12.9941L12.1458 8.29346H12.1135L11.2652 10H10.2634L11.5581 7.5L10.2876 5H11.2793Z",fill:"currentColor"}))};function pe(e){return function(e){if(Array.isArray(e))return de(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return de(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?de(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}var me=[].concat(pe(O([0,"px",.5,1,1.5,2,2.5,3,3.5,4,5,6,7,8,9,10,11,12,14,16,20,24,28,32,36,40,44,48,52,56,60,64,72,80,96],"native")),pe(O(G("b_"),"clamp")),pe(O(W("b_"),"grid")),pe(O(["1/2","1/3","2/3","1/4","2/4","3/4","1/5","2/5","3/5","4/5","1/6","2/6","3/6","4/6","5/6","1/12","2/12","3/12","4/12","5/12","6/12","7/12","8/12","9/12","10/12","11/12","full"],"percent")),pe(O(J(),"screen")));(0,i.__)("Width","blockbite"),(0,i.__)("Create width for your items","blockbite"),(0,i.__)("Exact Width","blockbite"),(0,i.__)("Min Width","blockbite"),(0,i.__)("Max Width","blockbite"),(0,i.__)("Height","blockbite"),(0,i.__)("Create height for your items","blockbite"),(0,i.__)("Exact Height","blockbite"),(0,i.__)("Min Height","blockbite"),(0,i.__)("Max Height","blockbite"),(0,i.__)("Container","blockbite"),(0,i.__)("Use this element as a centered container with a max width","blockbite"),(0,i.__)("Container Width","blockbite"),O([].concat(["container","b_container-fluid","b_container-fluid-half-l","b_container-fluid-half-r"])),(0,i.__)("Aspect Ratio","blockbite"),(0,i.__)("Set an aspect ratio (proportional width and height) to an item","blockbite"),(0,i.__)("Aspect Ratio","blockbite"),O([].concat(["video","landscape","portrait","square"]));function he(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=Array(t);r<t;r++)n[r]=e[r];return n}(0,i.__)("Grid Span","blockbite"),(0,i.__)("Span the item on a grid, if if the parent item is a grid","blockbite"),(0,i.__)("Horizontal Span","blockbite"),pe(O([1,2,3,4,5,6,7,8,9,10,11,12],"span"));var ve;(0,i.__)("Image Position","blockbite"),(0,i.__)("Set media orientation","blockbite"),(0,i.__)("Image Position","blockbite"),O([].concat([{label:"Center",id:"center"},{label:"Bottom",id:"bottom"},{label:"Top",id:"top"},{label:"Left",id:"left"},{label:"Left Bottom",id:"left-bottom"},{label:"Left Top",id:"left-top"},{label:"Right",id:"right"},{label:"Right Bottom",id:"right-bottom"},{label:"Right Top",id:"right-top"}]),"mediaposition"),(0,i.__)("Image fit","blockbite"),(0,i.__)("Set the fitting of the media","blockbite"),(0,i.__)("Image fit","blockbite"),O([].concat([{label:"Fill",id:"fill"},{label:"Contain",id:"contain"},{label:"Cover",id:"cover"},{label:"None",id:"none"},{label:"Scale Down",id:"scale-down"}]),"mediafit"),(0,i.__)("Effect Filters","blockbite"),(0,i.__)("Set the filters of the media","blockbite"),(0,i.__)("Image Filters","blockbite"),O((ve=H,function(e){if(Array.isArray(e))return he(e)}(ve)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(ve)||function(e,t){if(e){if("string"==typeof e)return he(e,t);var r={}.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?he(e,t):void 0}}(ve)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),"mediafilters");(0,i.__)("Image Layout","blockbite");var ye=["children"];const _e=JSON.parse('{"UU":"blockbite/visual"}');function ge(){return ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ge.apply(null,arguments)}(0,e.registerBlockType)(_e.UU,{example:{attributes:{message:"Visual"}},icon:function(e){return j.createElement("svg",ge({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),j.createElement("rect",{width:50,height:50,fill:"currentColor"}),j.createElement("path",{d:"M35.5 15.6667H14.5C14.1906 15.6667 13.8938 15.7896 13.6751 16.0084C13.4563 16.2272 13.3333 16.5239 13.3333 16.8333V33.1667C13.3333 33.4761 13.4563 33.7728 13.6751 33.9916C13.8938 34.2104 14.1906 34.3333 14.5 34.3333H35.5C35.8094 34.3333 36.1062 34.2104 36.325 33.9916C36.5438 33.7728 36.6667 33.4761 36.6667 33.1667V16.8333C36.6667 16.5239 36.5438 16.2272 36.325 16.0084C36.1062 15.7896 35.8094 15.6667 35.5 15.6667ZM19.1667 19.1667C19.6282 19.1667 20.0793 19.3035 20.463 19.5599C20.8467 19.8163 21.1458 20.1807 21.3224 20.6071C21.499 21.0334 21.5452 21.5026 21.4552 21.9552C21.3651 22.4078 21.1429 22.8236 20.8166 23.1499C20.4903 23.4762 20.0745 23.6985 19.6219 23.7885C19.1693 23.8785 18.7001 23.8323 18.2737 23.6557C17.8474 23.4791 17.483 23.18 17.2266 22.7963C16.9702 22.4126 16.8333 21.9615 16.8333 21.5C16.8333 20.8812 17.0792 20.2877 17.5168 19.8501C17.9543 19.4125 18.5478 19.1667 19.1667 19.1667ZM34.3333 32H15.6667V30.0552L20.3333 26.1667L23.6665 28.6668L29.6667 22.6667L34.3333 28.8885V32Z",fill:"#F5F5F5"}))},edit:function(e){var r=e.attributes,i=e.setAttributes,l=e.clientId,a=r.blockId,c=r.media,s=(r.mediaStyle,r.mediaClass),u=r.isBanner;(0,o.useEffect)((function(){a||i({blockId:l})}),[]);var f=(0,t.useBlockProps)({className:"overflow-hidden"});return React.createElement("div",f,React.createElement(t.InspectorControls,null,React.createElement(n.PanelBody,{title:"Visual",initialOpen:!0},React.createElement(b,{title:"Image",mediaProps:c,mediaCallback:function(e){return function(e){i({media:e})}(e)}}),React.createElement(n.PanelRow,null,React.createElement(n.ToggleControl,{label:"Create banner",help:u?"Place text on visual":"Only visual",checked:u,onChange:function(){i({isBanner:!u})}}))),React.createElement(h,{title:"Copy & Paste Styles"})),"video"===c.type?React.createElement(y,{media:c,mediaClass:"".concat(s),key:"visual_video__".concat(a)}):React.createElement(v,{media:c,mediaClass:"".concat(s),key:"visual_image__".concat(a)}))},save:function(e){var r=e.attributes,n=r.media,o=r.mediaClass,i=t.useBlockProps.save({className:"overflow-hidden"}),l=t.useInnerBlocksProps.save({className:"z-10 absolute top-0 left-0 w-full h-full flex items-center justify-center"});return l.children,function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||{}.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}}(l,ye),React.createElement("div",i,"video"===n.type?React.createElement(y,{media:n,mediaClass:"".concat(o)}):React.createElement(v,{media:n,mediaClass:"".concat(o)}))}})})()})();