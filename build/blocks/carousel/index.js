/*! For license information please see index.js.LICENSE.txt */
(()=>{var e={8530:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.ToggleSwitch=void 0;const i=r(n(1609)),a=r(n(6942)),l=n(6427);t.ToggleSwitch=({label:e,className:t,onChange:n,checked:r})=>i.default.createElement("div",{className:(0,a.default)(t,"flex gap-2 items-center")},i.default.createElement(l.ToggleControl,{checked:r,label:e,onChange:e=>n(e)}))},1609:e=>{"use strict";e.exports=window.React},6427:e=>{"use strict";e.exports=window.wp.components},6942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=l(e,a(n)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=l(t,n));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r].call(a.exports,a,a.exports,n),a.exports}(()=>{"use strict";const e=window.wp.blocks,t=window.wp.blockEditor;var r=n(6427);const i=window.wp.data,a=window.wp.element;var l=n(1609);const o=window.wp.primitives,c=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M20.8 10.7l-4.3-4.3-1.1 1.1 4.3 4.3c.1.1.1.3 0 .4l-4.3 4.3 1.1 1.1 4.3-4.3c.7-.8.7-1.9 0-2.6zM4.2 11.8l4.3-4.3-1-1-4.3 4.3c-.7.7-.7 1.8 0 2.5l4.3 4.3 1.1-1.1-4.3-4.3c-.2-.1-.2-.3-.1-.4z"})),s=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M3.99961 13C4.67043 13.3354 4.6703 13.3357 4.67017 13.3359L4.67298 13.3305C4.67621 13.3242 4.68184 13.3135 4.68988 13.2985C4.70595 13.2686 4.7316 13.2218 4.76695 13.1608C4.8377 13.0385 4.94692 12.8592 5.09541 12.6419C5.39312 12.2062 5.84436 11.624 6.45435 11.0431C7.67308 9.88241 9.49719 8.75 11.9996 8.75C14.502 8.75 16.3261 9.88241 17.5449 11.0431C18.1549 11.624 18.6061 12.2062 18.9038 12.6419C19.0523 12.8592 19.1615 13.0385 19.2323 13.1608C19.2676 13.2218 19.2933 13.2686 19.3093 13.2985C19.3174 13.3135 19.323 13.3242 19.3262 13.3305L19.3291 13.3359C19.3289 13.3357 19.3288 13.3354 19.9996 13C20.6704 12.6646 20.6703 12.6643 20.6701 12.664L20.6697 12.6632L20.6688 12.6614L20.6662 12.6563L20.6583 12.6408C20.6517 12.6282 20.6427 12.6108 20.631 12.5892C20.6078 12.5459 20.5744 12.4852 20.5306 12.4096C20.4432 12.2584 20.3141 12.0471 20.1423 11.7956C19.7994 11.2938 19.2819 10.626 18.5794 9.9569C17.1731 8.61759 14.9972 7.25 11.9996 7.25C9.00203 7.25 6.82614 8.61759 5.41987 9.9569C4.71736 10.626 4.19984 11.2938 3.85694 11.7956C3.68511 12.0471 3.55605 12.2584 3.4686 12.4096C3.42484 12.4852 3.39142 12.5459 3.36818 12.5892C3.35656 12.6108 3.34748 12.6282 3.34092 12.6408L3.33297 12.6563L3.33041 12.6614L3.32948 12.6632L3.32911 12.664C3.32894 12.6643 3.32879 12.6646 3.99961 13ZM11.9996 16C13.9326 16 15.4996 14.433 15.4996 12.5C15.4996 10.567 13.9326 9 11.9996 9C10.0666 9 8.49961 10.567 8.49961 12.5C8.49961 14.433 10.0666 16 11.9996 16Z"})),u=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M4.67 10.664s-2.09 1.11-2.917 1.582l.494.87 1.608-.914.002.002c.343.502.86 1.17 1.563 1.84.348.33.742.663 1.185.976L5.57 16.744l.858.515 1.02-1.701a9.1 9.1 0 0 0 4.051 1.18V19h1v-2.263a9.1 9.1 0 0 0 4.05-1.18l1.021 1.7.858-.514-1.034-1.723c.442-.313.837-.646 1.184-.977.703-.669 1.22-1.337 1.563-1.839l.002-.003 1.61.914.493-.87c-1.75-.994-2.918-1.58-2.918-1.58l-.003.005a8.29 8.29 0 0 1-.422.689 10.097 10.097 0 0 1-1.36 1.598c-1.218 1.16-3.042 2.293-5.544 2.293-2.503 0-4.327-1.132-5.546-2.293a10.099 10.099 0 0 1-1.359-1.599 8.267 8.267 0 0 1-.422-.689l-.003-.005Z"})),p=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M4 13.5h6v-3H4v3zm8 0h3v-3h-3v3zm5-3v3h3v-3h-3z"})),d=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M5 13.5h3v-3H5v3zm5 0h3v-3h-3v3zM17 9l-1 1 2 2-2 2 1 1 3-3-3-3z"})),m=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M4 13.5h6v-3H4v3zm8.2-2.5.8-.3V14h1V9.3l-2.2.7.4 1zm7.1-1.2c-.5-.6-1.2-.5-1.7-.4-.3.1-.5.2-.7.3l.1 1.1c.2-.2.5-.4.8-.5.3-.1.6 0 .7.1.2.3 0 .8-.2 1.1-.5.8-.9 1.6-1.4 2.5h2.7v-1h-.9c.3-.6.8-1.4.9-2.1 0-.3-.1-.8-.3-1.1z"})),f=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M13 11.8l6.1-6.3-1-1-6.1 6.2-6.1-6.2-1 1 6.1 6.3-6.5 6.7 1 1 6.5-6.6 6.5 6.6 1-1z"})),w=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M16.375 4.5H4.625a.125.125 0 0 0-.125.125v8.254l2.859-1.54a.75.75 0 0 1 .68-.016l2.384 1.142 2.89-2.074a.75.75 0 0 1 .874 0l2.313 1.66V4.625a.125.125 0 0 0-.125-.125Zm.125 9.398-2.75-1.975-2.813 2.02a.75.75 0 0 1-.76.067l-2.444-1.17L4.5 14.583v1.792c0 .069.056.125.125.125h11.75a.125.125 0 0 0 .125-.125v-2.477ZM4.625 3C3.728 3 3 3.728 3 4.625v11.75C3 17.273 3.728 18 4.625 18h11.75c.898 0 1.625-.727 1.625-1.625V4.625C18 3.728 17.273 3 16.375 3H4.625ZM20 8v11c0 .69-.31 1-.999 1H6v1.5h13.001c1.52 0 2.499-.982 2.499-2.5V8H20Z",fillRule:"evenodd",clipRule:"evenodd"})),v=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M6.6 6L5.4 7l4.5 5-4.5 5 1.1 1 5.5-6-5.4-6zm6 0l-1.1 1 4.5 5-4.5 5 1.1 1 5.5-6-5.5-6z"})),b=(0,l.createElement)(o.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,l.createElement)(o.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),g=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M18.1823 11.6392C18.1823 13.0804 17.0139 14.2487 15.5727 14.2487C14.3579 14.2487 13.335 13.4179 13.0453 12.2922L13.0377 12.2625L13.0278 12.2335L12.3985 10.377L12.3942 10.3785C11.8571 8.64997 10.246 7.39405 8.33961 7.39405C5.99509 7.39405 4.09448 9.29465 4.09448 11.6392C4.09448 13.9837 5.99509 15.8843 8.33961 15.8843C8.88499 15.8843 9.40822 15.781 9.88943 15.5923L9.29212 14.0697C8.99812 14.185 8.67729 14.2487 8.33961 14.2487C6.89838 14.2487 5.73003 13.0804 5.73003 11.6392C5.73003 10.1979 6.89838 9.02959 8.33961 9.02959C9.55444 9.02959 10.5773 9.86046 10.867 10.9862L10.8772 10.9836L11.4695 12.7311C11.9515 14.546 13.6048 15.8843 15.5727 15.8843C17.9172 15.8843 19.8178 13.9837 19.8178 11.6392C19.8178 9.29465 17.9172 7.39404 15.5727 7.39404C15.0287 7.39404 14.5066 7.4968 14.0264 7.6847L14.6223 9.20781C14.9158 9.093 15.2358 9.02959 15.5727 9.02959C17.0139 9.02959 18.1823 10.1979 18.1823 11.6392Z"})),y=(0,l.createElement)(o.SVG,{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},(0,l.createElement)(o.Path,{d:"M18.7 3H5.3C4 3 3 4 3 5.3v13.4C3 20 4 21 5.3 21h13.4c1.3 0 2.3-1 2.3-2.3V5.3C21 4 20 3 18.7 3zm.8 15.7c0 .4-.4.8-.8.8H5.3c-.4 0-.8-.4-.8-.8V5.3c0-.4.4-.8.8-.8h13.4c.4 0 .8.4.8.8v13.4zM10 15l5-3-5-3v6z"}));var h=n(8530);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}var P=["children"];function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},E.apply(null,arguments)}function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function k(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?x(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return(t=function(e){var t=function(e,t){if("object"!=C(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=C(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==C(t)?t:t+""}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,i,a,l,o=[],c=!0,s=!1;try{if(a=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=a.call(n)).done)&&(o.push(r.value),o.length!==t);c=!0);}catch(e){s=!0,i=e}finally{try{if(!c&&null!=n.return&&(l=n.return(),Object(l)!==l))return}finally{if(s)throw i}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return V(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?V(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var A=["children"];function j(){return j=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(null,arguments)}const R=JSON.parse('{"UU":"blockbite/carousel"}');function B(){return B=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},B.apply(null,arguments)}(0,e.registerBlockType)(R.UU,{example:{attributes:{message:"Carousel"}},icon:function(e){return l.createElement("svg",B({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),l.createElement("rect",{width:50,height:50,fill:"currentColor"}),l.createElement("rect",{x:9,y:10,width:13,height:13,fill:"#F5F5F5"}),l.createElement("rect",{x:27,y:10,width:13,height:13,fill:"#F5F5F5"}),l.createElement("rect",{x:9,y:28,width:13,height:13,fill:"#F5F5F5"}),l.createElement("rect",{x:27,y:28,width:13,height:13,fill:"#F5F5F5"}))},edit:function(e){var n=e.attributes,l=e.setAttributes,o=e.clientId,C=(n.flexStyle,n.flexClass),x=n.carouselSettings,V=(0,a.useRef)(null),A=S((0,a.useState)(x),2),j=A[0],R=A[1],B=S((0,a.useState)(!1),2),M=(B[0],B[1],Array.from({length:3},(function(e,t){return t+1}))),L=S((0,a.useState)(!1),2),z=L[0],I=L[1],N=S((0,a.useState)({xs:!M.includes(x.slidesPerView.xs),md:!M.includes(x.slidesPerView.md),lg:!M.includes(x.slidesPerView.lg)}),2),T=N[0],F=N[1],G=["carousel--content",C].join(" "),D=(0,t.useInnerBlocksProps)({className:"".concat(G)},{allowedBlocks:["blockbite/carousel-slide"],template:[["blockbite/carousel-slide",{},[["core/image",{url:"https://picsum.photos/800/640"}]]]]}),H=D.children,_=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(D,P),Z=(0,t.useBlockProps)(),U=(0,i.useSelect)((function(e){var t;return(null===(t=e("core/block-editor").getBlock(o))||void 0===t?void 0:t.innerBlocks)||[]}),[o]);return(0,a.useEffect)((function(){l(k(k({},n),{},{carouselSettings:j}));var e=V.current,t=k({},j);if(t.autoplay||delete t.autoplay,t.pagination||delete t.pagination,e.swiper)for(var r=0,i=Object.entries(j);r<i.length;r++){var a=S(i[r],2),o=a[0],c=a[1];switch(o){case"pagination":null===c?(e.removeAttribute("pagination"),e.removeAttribute("pagination-type"),e.removeAttribute("pagination-clickable")):(e.setAttribute("pagination","true"),e.setAttribute("pagination-type",c.type),e.setAttribute("pagination-clickable",c.clickable));break;case"autoplay":null===c?(e.removeAttribute("autoplay"),e.removeAttribute("autoplay-delay"),e.removeAttribute("autoplay-disable-on-interaction")):(e.setAttribute("autoplay","true"),e.setAttribute("autoplay-delay",c.delay),e.setAttribute("autoplay-disable-on-interaction",c.disableOnInteraction?"true":"false"));break;case"slidesPerView":e.setAttribute("slides-per-view",c.xs);var s={768:{slidesPerView:c.md},1024:{slidesPerView:c.lg}};e.setAttribute("breakpoints",JSON.stringify(s)),e.swiper.params.breakpoints=s,e.swiper.currentBreakpoint=!1;break;case"spaceBetween":null===c?e.removeAttribute("space-between"):e.setAttribute("space-between",c);break;default:null===c?e.removeAttribute(o):e.setAttribute(o,c)}}else{var u=k(k({},t),{},{slidesPerView:t.slidesPerView.xs,breakpoints:{768:{slidesPerView:t.slidesPerView.md},1024:{slidesPerView:t.slidesPerView.lg}}});Object.assign(e,u),e.initialize()}j.autoplay?e.swiper.autoplay.start():e.swiper.autoplay.stop(),j.pagination?(e.swiper.pagination&&(e.swiper.pagination.destroy(),e.setAttribute("pagination","true"),e.setAttribute("pagination-type",j.pagination.type),e.setAttribute("pagination-clickable",j.pagination.clickable)),e.swiper.pagination.init(),e.swiper.pagination.render(),e.swiper.pagination.update()):e.swiper.pagination&&e.swiper.pagination.destroy()}),[U,j]),React.createElement(React.Fragment,null,React.createElement(t.InspectorControls,null,React.createElement(r.PanelBody,{title:"Advanced Carousel Settings",initialOpen:!1},React.createElement(h.ToggleSwitch,{checked:j.cssMode,onChange:function(e){return R(k(k({},j),{},{cssMode:e}))},label:"Css Mode"}))),React.createElement(t.BlockControls,{group:"other"},React.createElement(r.ToolbarGroup,null,React.createElement(r.ToolbarDropdownMenu,{icon:c,label:"Show navigation",controls:[{title:"Show navigation",icon:s,onClick:function(){return R(k(k({},j),{},{navigation:!0}))}},{title:"Hide navigation",icon:u,onClick:function(){return R(k(k({},j),{},{navigation:!1}))}}]}),React.createElement(r.ToolbarDropdownMenu,{icon:p,label:"Pagination",controls:[{title:"Pagination on",icon:d,onClick:function(){return R(k(k({},j),{},{pagination:{type:"bullets",clickable:!0}}))}},{title:"Pagination on – numbers",icon:m,onClick:function(){return R(k(k({},j),{},{pagination:{type:"fraction",clickable:!0}}))}},{title:"Pagination off",icon:f,onClick:function(){return R(k(k({},j),{},{pagination:null}))}}]}),React.createElement(r.ToolbarButton,{icon:w,label:"Slides per view",onClick:function(){I((function(e){return!e}))}},z&&React.createElement(r.Popover,{variant:"toolbar",onClose:function(e){setTimeout((function(){return I(!1)}),100)},onClick:function(e){return e.stopPropagation()}},React.createElement("h3",{className:"px-4 pt-4 font-medium text-nowrap"},"Slides per view"),React.createElement("div",{className:"overflow-auto px-4 pb-1 w-[270px]"},React.createElement("ul",{role:"list",className:"divide-y divide-gray-light"},[{title:"Mobile",id:"xs"},{title:"Tablet",id:"md"},{title:"Desktop",id:"lg"}].map((function(e){return React.createElement("li",{key:e.id,className:"py-3 mb-0"},React.createElement("div",{className:"font-medium uppercase opacity-50 text-[10px] mb-2.5"},e.title),React.createElement("div",{className:"flex items-center"},React.createElement(r.ButtonGroup,null,M.map((function(t){return React.createElement(r.Button,{key:t,isPrimary:j.slidesPerView[e.id]===t,onClick:function(){F(k(k({},T),{},O({},e.id,!1))),R(k(k({},j),{},{slidesPerView:k(k({},j.slidesPerView),{},O({},e.id,t))}))}},t)})),React.createElement(r.Button,{isPrimary:!0===T[e.id],onClick:function(){R(k(k({},j),{},{slidesPerView:k(k({},j.slidesPerView),{},O({},e.id,4))})),F(k(k({},T),{},O({},e.id,!0)))}},"Custom")),T[e.id]&&React.createElement(r.__experimentalInputControl,{type:"number",value:j.slidesPerView[e.id],className:"w-12 ml-2",onChange:function(t){t&&R(k(k({},j),{},{slidesPerView:k(k({},j.slidesPerView),{},O({},e.id,parseFloat(t)))}))}})))})),React.createElement("li",{className:"py-3 mb-0"},React.createElement("div",{className:"font-medium uppercase opacity-50 text-[10px] mb-2.5"},"Space between slides"),React.createElement(r.__experimentalInputControl,{type:"number",value:(null==j?void 0:j.spaceBetween)||0,className:"w-20",onChange:function(e){R(k(k({},j),{},{spaceBetween:e?parseInt(e):0}))},suffix:"px"})))))),React.createElement(r.ToolbarDropdownMenu,{icon:v,label:"Animation",controls:[{title:"Animation on",icon:b,onClick:function(){return R(k(k({},j),{},{speed:500}))}},{title:"Animation off",icon:f,onClick:function(){return R(k(k({},j),{},{speed:0}))}}]}),React.createElement(r.ToolbarDropdownMenu,{icon:g,label:"Loop",controls:[{title:"Loop on",icon:b,onClick:function(){return R(k(k({},j),{},{loop:!0}))}},{title:"Loop off",icon:f,onClick:function(){return R(k(k({},j),{},{loop:!1}))}}]}),React.createElement(r.ToolbarDropdownMenu,{icon:y,label:"Autoplay",controls:[{title:"Autoplay on – 3s delay",icon:b,onClick:function(){return R(k(k({},j),{},{autoplay:{delay:3e3,disableOnInteraction:!1}}))}},{title:"Autoplay on – 5s delay",icon:b,onClick:function(){return R(k(k({},j),{},{autoplay:{delay:5e3,disableOnInteraction:!1}}))}},{title:"Autoplay off",icon:f,onClick:function(){return R(k(k({},j),{},{autoplay:null}))}}]}))),React.createElement("div",Z,React.createElement("swiper-container",E({},_,{ref:V,init:"false","css-mode":j.cssMode?"true":"false"}),H)))},save:function(e){var n,r,i,a=e.attributes,l=(e.clientId,a.flexClass),o=a.carouselSettings,c=["canvas--content",l],s=t.useBlockProps.save(),u=c.join(" "),p=t.useInnerBlocksProps.save({className:"".concat(u)}),d=p.children,m=function(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}(p,A);return React.createElement("div",s,React.createElement("swiper-container",j({},m,{navigation:!0===(null==o?void 0:o.navigation)?"true":"false","slides-per-view":(null==o||null===(n=o.slidesPerView)||void 0===n?void 0:n.xs)||1,speed:null==(null==o?void 0:o.speed)?500:o.speed,"css-mode":o.cssMode?"true":"false",breakpoints:'{"768": {"slidesPerView": '.concat((null==o||null===(r=o.slidesPerView)||void 0===r?void 0:r.md)||1,'}, "1024": {"slidesPerView": ').concat((null==o||null===(i=o.slidesPerView)||void 0===i?void 0:i.lg)||1,"}}")},null!=o&&o.loop?{loop:"true"}:{},null!=o&&o.autoplay?{"autoplay-delay":o.autoplay.delay,"autoplay-disable-on-interaction":!0===o.autoplay.disableOnInteraction?"true":"false"}:{},null!=o&&o.pagination?{pagination:"true","pagination-type":o.pagination.type,"pagination-clickable":o.pagination.clickable}:{},null!=o&&o.spaceBetween?{"space-between":o.spaceBetween}:{}),d))}})})()})();