(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor,n=window.wp.components,r=window.wp.data,o=window.wp.element,i=window.React,l=window.wp.primitives,a=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})),c=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})),u=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"})),s=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z"})),p=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M5 13.5h3v-3H5v3zm5 0h3v-3h-3v3zM17 9l-1 1 2 2-2 2 1 1 3-3-3-3z"})),w=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M4 13.5h6v-3H4v3zm8.2-2.5.8-.3V14h1V9.3l-2.2.7.4 1zm7.1-1.2c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3-.1-.8-.3-1.1z"})),b=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})),f=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})),v=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),m=(0,i.createElement)(l.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,i.createElement)(l.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),g=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"})),d=(0,i.createElement)(l.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,i.createElement)(l.Path,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}));function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}var h=["children"];function C(){return C=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},C.apply(this,arguments)}function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){var r,o,i,l;r=e,o=t,i=n[t],l=function(e,t){if("object"!=y(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=y(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o),(o="symbol"==y(l)?l:String(l))in r?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,l,a=[],c=!0,u=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=i.call(n)).done)&&(a.push(r.value),a.length!==t);c=!0);}catch(e){u=!0,o=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(u)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return P(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?P(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var S=["children"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}const x=JSON.parse('{"UU":"blockbite/carousel"}');function A(){return A=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},A.apply(this,arguments)}(0,e.registerBlockType)(x.UU,{example:{attributes:{message:"Carousel"}},icon:function(e){return i.createElement("svg",A({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),i.createElement("rect",{width:50,height:50,fill:"currentColor"}),i.createElement("rect",{x:9,y:10,width:13,height:13,fill:"#F5F5F5"}),i.createElement("rect",{x:27,y:10,width:13,height:13,fill:"#F5F5F5"}),i.createElement("rect",{x:9,y:28,width:13,height:13,fill:"#F5F5F5"}),i.createElement("rect",{x:27,y:28,width:13,height:13,fill:"#F5F5F5"}))},edit:function(e){var i=e.attributes,l=e.setAttributes,y=e.clientId,O=(i.flexStyle,i.flexClass),P=i.carouselSettings,S=(0,o.useRef)(null),j=k((0,o.useState)(P),2),x=j[0],A=j[1],L=["carousel--content",O].join(" "),M=(0,t.useInnerBlocksProps)({className:"".concat(L)},{allowedBlocks:["blockbite/carousel-slide"],template:[["blockbite/carousel-slide",{},[["core/image",{url:"https://picsum.photos/800/640"}]]]]}),V=M.children,B=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(M,h),z=(0,t.useBlockProps)(),R=(0,r.useSelect)((function(e){var t;return(null===(t=e("core/block-editor").getBlock(y))||void 0===t?void 0:t.innerBlocks)||[]}),[y]);return(0,o.useEffect)((function(){l(E(E({},i),{},{carouselSettings:x}));var e=S.current,t=E({},x);if(t.autoplay||delete t.autoplay,t.pagination||delete t.pagination,e.swiper)for(var n=0,r=Object.entries(x);n<r.length;n++){var o=k(r[n],2),a=o[0],c=o[1];switch(a){case"pagination":null===c?(e.removeAttribute("pagination"),e.removeAttribute("pagination-type"),e.removeAttribute("pagination-clickable")):(e.setAttribute("pagination","true"),e.setAttribute("pagination-type",c.type),e.setAttribute("pagination-clickable",c.clickable));break;case"autoplay":null===c?(e.removeAttribute("autoplay"),e.removeAttribute("autoplay-delay"),e.removeAttribute("autoplay-disable-on-interaction")):(e.setAttribute("autoplay","true"),e.setAttribute("autoplay-delay",c.delay),e.setAttribute("autoplay-disable-on-interaction",c.disableOnInteraction?"true":"false"));break;case"slidesPerView":e.setAttribute("slides-per-view",c);break;default:null===c?e.removeAttribute(a):e.setAttribute(a,c)}}else Object.assign(e,t),e.initialize();x.autoplay?e.swiper.autoplay.start():e.swiper.autoplay.stop(),x.pagination?(e.swiper.pagination&&(e.swiper.pagination.destroy(),e.setAttribute("pagination","true"),e.setAttribute("pagination-type",x.pagination.type),e.setAttribute("pagination-clickable",x.pagination.clickable)),e.swiper.pagination.init(),e.swiper.pagination.render(),e.swiper.pagination.update()):e.swiper.pagination&&e.swiper.pagination.destroy()}),[R,x]),React.createElement(React.Fragment,null,React.createElement(t.BlockControls,{group:"other"},React.createElement(n.ToolbarGroup,null,React.createElement(n.ToolbarDropdownMenu,{icon:a,label:"Show navigation",controls:[{title:"Show navigation",icon:c,onClick:function(){return A(E(E({},x),{},{navigation:!0}))}},{title:"Hide navigation",icon:u,onClick:function(){return A(E(E({},x),{},{navigation:!1}))}}]}),React.createElement(n.ToolbarDropdownMenu,{icon:s,label:"Pagination",controls:[{title:"Pagination on",icon:p,onClick:function(){return A(E(E({},x),{},{pagination:{type:"bullets",clickable:!0}}))}},{title:"Pagination on – numbers",icon:w,onClick:function(){return A(E(E({},x),{},{pagination:{type:"fraction",clickable:!0}}))}},{title:"Pagination off",icon:b,onClick:function(){return A(E(E({},x),{},{pagination:null}))}}]}),React.createElement(n.ToolbarDropdownMenu,{icon:f,label:"Slides per view",controls:[{title:"1 slide per view",icon:null,onClick:function(){return A(E(E({},x),{},{slidesPerView:1}))}},{title:"2 slides per view",icon:null,onClick:function(){return A(E(E({},x),{},{slidesPerView:2}))}},{title:"3 slides per view",icon:null,onClick:function(){return A(E(E({},x),{},{slidesPerView:3}))}}]}),React.createElement(n.ToolbarDropdownMenu,{icon:v,label:"Animation",controls:[{title:"Animation on",icon:m,onClick:function(){return A(E(E({},x),{},{speed:500}))}},{title:"Animation off",icon:b,onClick:function(){return A(E(E({},x),{},{speed:0}))}}]}),React.createElement(n.ToolbarDropdownMenu,{icon:g,label:"Loop",controls:[{title:"Loop on",icon:m,onClick:function(){return A(E(E({},x),{},{loop:!0}))}},{title:"Loop off",icon:b,onClick:function(){return A(E(E({},x),{},{loop:!1}))}}]}),React.createElement(n.ToolbarDropdownMenu,{icon:d,label:"Autoplay",controls:[{title:"Autoplay on – 3s delay",icon:m,onClick:function(){return A(E(E({},x),{},{autoplay:{delay:3e3,disableOnInteraction:!1}}))}},{title:"Autoplay on – 5s delay",icon:m,onClick:function(){return A(E(E({},x),{},{autoplay:{delay:5e3,disableOnInteraction:!1}}))}},{title:"Autoplay off",icon:b,onClick:function(){return A(E(E({},x),{},{autoplay:null}))}}]}))),React.createElement("div",z,React.createElement("swiper-container",C({},B,{ref:S,init:"false","css-mode":"true"}),V)))},save:function(e){var n=e.attributes,r=(e.clientId,n.flexClass),o=n.carouselSettings,i=["canvas--content",r],l=t.useBlockProps.save(),a=i.join(" "),c=t.useInnerBlocksProps.save({className:"".concat(a)}),u=c.children,s=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(c,S);return React.createElement("div",l,React.createElement("swiper-container",j({},s,{navigation:!0===(null==o?void 0:o.navigation)?"true":"false","slides-per-view":(null==o?void 0:o.slidesPerView)||1,speed:null==(null==o?void 0:o.speed)?500:o.speed,"css-mode":"true"},null!=o&&o.loop?{loop:"true"}:{},null!=o&&o.autoplay?{"autoplay-delay":o.autoplay.delay,"autoplay-disable-on-interaction":!0===o.autoplay.disableOnInteraction?"true":"false"}:{},null!=o&&o.pagination?{pagination:"true","pagination-type":o.pagination.type,"pagination-clickable":o.pagination.clickable}:{}),u))}})})();