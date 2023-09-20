!function(){var e={3274:function(e){self,e.exports=function(){var e={3:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return i(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?i(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:function(){return a}});var a=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.defaults={start:0,end:100,duration:2e3,delay:10,once:!0,pulse:!1,decimals:0,legacy:!0,filesizing:!1,currency:!1,separator:!1,formater:"us-US",selector:".purecounter"},this.configOptions=this.setOptions(t,this.defaults),this.elements=document.querySelectorAll(this.configOptions.selector),this.intersectionSupport=this.intersectionListenerSupported(),this.registerEventListeners()}var t,n;return t=e,n=[{key:"setOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};for(var r in e)if(0===Object.keys(t).length||t.hasOwnProperty(r)){var i=this.parseValue(e[r]);n[r]=i,r.match(/duration|pulse/)&&(n[r]="boolean"!=typeof i?1e3*i:i)}return Object.assign({},t,n)}},{key:"registerEventListeners",value:function(){var e=this.elements;if(0!==e.length)if(this.intersectionSupport){var t=new IntersectionObserver(this.animateElements.bind(this),{root:null,rootMargin:"20px",threshold:.5});e.forEach((function(e){t.observe(e)}))}else window.addEventListener&&(this.animateLegacy(e),window.addEventListener("scroll",(function(t){this.animateLegacy(e)}),{passive:!0}))}},{key:"animateLegacy",value:function(e){var t=this;e.forEach((function(e){!0===t.parseConfig(e).legacy&&t.elementIsInView(e)&&t.animateElements([e])}))}},{key:"animateElements",value:function(e,t){var n=this;e.forEach((function(e){var r=e.target||e,i=n.parseConfig(r);if(i.duration<=0)return r.innerHTML=n.formatNumber(i.end,i);if(!t&&!n.elementIsInView(e)||t&&e.intersectionRatio<.5){var l=i.start>i.end?i.end:i.start;return r.innerHTML=n.formatNumber(l,i)}setTimeout((function(){return n.startCounter(r,i)}),i.delay)}))}},{key:"startCounter",value:function(e,t){var n=this,r=(t.end-t.start)/(t.duration/t.delay),i="inc";t.start>t.end&&(i="dec",r*=-1);var l=this.parseValue(t.start);e.innerHTML=this.formatNumber(l,t),!0===t.once&&e.setAttribute("data-purecounter-duration",0);var a=setInterval((function(){var o=n.nextNumber(l,r,i);e.innerHTML=n.formatNumber(o,t),((l=o)>=t.end&&"inc"===i||l<=t.end&&"dec"===i)&&(e.innerHTML=n.formatNumber(t.end,t),t.pulse&&(e.setAttribute("data-purecounter-duration",0),setTimeout((function(){e.setAttribute("data-purecounter-duration",t.duration/1e3)}),t.pulse)),clearInterval(a))}),t.delay)}},{key:"parseConfig",value:function(e){var t=this,n=[].filter.call(e.attributes,(function(e){return/^data-purecounter-/.test(e.name)})),i=0!=n.length?Object.assign.apply(Object,[{}].concat(r(n.map((function(e){var n=e.name,r=e.value;return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n.replace("data-purecounter-","").toLowerCase(),t.parseValue(r))}))))):{};return this.setOptions(i,this.configOptions)}},{key:"nextNumber",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"inc";return e=this.parseValue(e),t=this.parseValue(t),parseFloat("inc"===n?e+t:e-t)}},{key:"convertNumber",value:function(e,t){if(t.filesizing||t.currency){e=Math.abs(Number(e));var n=1e3,r=t.currency&&"string"==typeof t.currency?t.currency:"",i=t.decimals||1,l=["","K","M","B","T"],a="";t.filesizing&&(n=1024,l=["bytes","KB","MB","GB","TB"]);for(var o=4;o>=0;o--)if(0===o&&(a="".concat(e.toFixed(i)," ").concat(l[o])),e>=this.getFilesizeThreshold(n,o)){a="".concat((e/this.getFilesizeThreshold(n,o)).toFixed(i)," ").concat(l[o]);break}return r+a}return parseFloat(e)}},{key:"getFilesizeThreshold",value:function(e,t){return Math.pow(e,t)}},{key:"applySeparator",value:function(e,t){if(t.formater){var n=t.separator?"string"==typeof t.separator?t.separator:",":"";return"en-US"!==t.formater&&!0===t.separator?e:(r=n,e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi,(function(e,t,n,i,l){var a="",o="";if(void 0!==t?(a=t.replace(new RegExp(/,/gi,"gi"),r),o=","):void 0!==n?a=n.replace(new RegExp(/\./gi,"gi"),r):void 0!==i&&(a=i.replace(new RegExp(/ /gi,"gi"),r)),void 0!==l){var c=","!==o&&","!==r?",":".";a+=l.replace(new RegExp(/\.|,/gi,"gi"),c)}return a})))}var r;return e}},{key:"formatNumber",value:function(e,t){var n={minimumFractionDigits:t.decimals,maximumFractionDigits:t.decimals},r="string"==typeof t.formater?t.formater:void 0;return e=this.convertNumber(e,t),e=t.formater?e.toLocaleString(r,n):parseInt(e).toString(),this.applySeparator(e,t)}},{key:"getLocaleSeparator",value:function(){}},{key:"parseValue",value:function(e){return/^[0-9]+\.[0-9]+$/.test(e)?parseFloat(e):/^[0-9]+$/.test(e)?parseInt(e):/^true|false/i.test(e)?/^true/i.test(e):e}},{key:"elementIsInView",value:function(e){for(var t=e.offsetTop,n=e.offsetLeft,r=e.offsetWidth,i=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t>=window.pageYOffset&&n>=window.pageXOffset&&t+i<=window.pageYOffset+window.innerHeight&&n+r<=window.pageXOffset+window.innerWidth}},{key:"intersectionListenerSupported",value:function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}}],n&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},634:function(e,t,n){var r=n(3).Z;e.exports=r}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(634)}()}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var l=t[r]={exports:{}};return e[r](l,l.exports,n),l.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(3274);var e=window.wp.blocks,t=window.wp.element,r=window.wp.components,i=window.wp.i18n,l=window.wp.blockEditor,a=(window.React,window.wp.apiFetch),o=n.n(a);function c(e){const[n,i]=(0,t.useState)(0),[l,a]=(0,t.useState)([{icon_url:"",icons:[]}]),[c,p]=(0,t.useState)("");return(0,t.useEffect)((()=>{o()({path:"/blockbite/v1/get-icons/"}).then((e=>{a({...e})}))}),[]),(0,t.useEffect)((()=>{o()({path:"/blockbite/v1/pick-icon/"+c}).then((t=>{(t=>{void 0!==t&&e.parentCallback(t)})(t),i(!1)}))}),[c]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("h2",null,"Pick Icon"),(0,t.createElement)(u,{title:"About",isActive:n,onClose:()=>i(!1)},(0,t.createElement)("p",null,"List of Svg found in blocktheme/resources/svg.."),(0,t.createElement)("div",{className:"blockbite--editor-icon-grid"},(0,t.createElement)(s,{icons:l,onActiveIcon:e=>p(e)}))),(0,t.createElement)(r.Button,{variant:"secondary",onClick:()=>i(!0)},"Open Icons"))}function s({icons:e,onActiveIcon:n}){const r=[];return void 0===e.icons?(0,t.createElement)("p",null,"loading..."):(e.icons.forEach((i=>{r.push((0,t.createElement)("div",{key:i},(0,t.createElement)("img",{className:"blockbite--editor-icon",width:"64px",height:"64px",src:`${e.icon_url}/${i}.svg`,onClick:()=>n(i)})))})),r)}function u({title:e,children:n,isActive:r,onClose:i}){return(0,t.createElement)("div",null,r?(0,t.createElement)("div",{className:"blockbite--editor-modal"},(0,t.createElement)("div",{className:"blockbite--editor-modalcontent"},(0,t.createElement)("div",{className:"blockbite--editor-modalnav"},(0,t.createElement)("button",{className:"blockbite--editor-close-button",onClick:i},"Close")),(0,t.createElement)("div",{className:"blockbite--editor-modalscroll"},n))):"")}function p(e){const[n,l]=(0,t.useState)(""),[a,c]=(0,t.useState)(null),[s,u]=(0,t.useState)({url:"",title:""});return(0,t.useEffect)((()=>{""!==n&&(c(null),o()({path:`/blockbite/v1/get-links/${n}`}).then((e=>{e.length?c([...e]):c([])})))}),[n]),(0,t.useEffect)((()=>{""!==s.url&&e.parentCallback(s)}),[s]),(0,t.createElement)(t.Fragment,null,(0,t.createElement)("div",{className:"blockbite--editor-linkwrap"},(0,t.createElement)(r.TextControl,{label:(0,i.__)("Search link","blockbitelinks"),value:n,placeholder:"Example: About",onChange:e=>l(e),help:(0,i.__)("Type a post, page, title","blockbitelinks")}),n?(0,t.createElement)("div",{className:"blockbite--editor-linklist"},(0,t.createElement)(f,{links:a,onActiveLink:e=>[u({...e}),l("")]})):null))}function f({links:e,onActiveLink:n}){const r=[];return null===e?(0,t.createElement)("p",null,"Loading..."):0===e.length?(0,t.createElement)("p",null,"No Results"):(e.forEach((e=>{r.push((0,t.createElement)("div",{key:e.id},(0,t.createElement)("span",{className:"blockbite--editor-link",onClick:()=>n(e)},(0,t.createElement)("span",null,e.title),(0,t.createElement)("span",{className:"blockbite--preview-link"},e.url),(0,t.createElement)("span",{className:"blockbite--preview-link"},e.post_type))))})),r)}function m({linkUrl:e,linkTitle:n,linkTarget:l,linkTile:a,showLinkTile:o,parentCallback:c}){const[s,u]=(0,t.useState)(!1),[f,m]=(0,t.useState)(""),[d,v]=(0,t.useState)(""),[b,g]=(0,t.useState)(""),[h,k]=(0,t.useState)(!1),[E,w]=(0,t.useState)(!1);(0,t.useEffect)((()=>{"_blank"===l&&k(!0),a&&w(!0),e&&m(e),n&&v(n)}),[]),(0,t.useEffect)((()=>{let e={...y()};c(e)}),[d,f]);const y=()=>{const e={linkUrl:f,linkTitle:d,linkTarget:l};return o&&(e.linkTile=a),e};return(0,t.createElement)(t.Fragment,null,(0,t.createElement)(r.PanelRow,null,s?(0,t.createElement)("span",{style:{color:"red"}},s):(0,t.createElement)("div",null,(0,t.createElement)("span",null,d),(0,t.createElement)("br",null),(0,t.createElement)("span",null,f))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(p,{parentCallback:e=>{const t={...y()};t.linkTitle=e.title,t.linkUrl=e.url,v(e.title),m(e.url),c(t)}}),(0,t.createElement)(r.TextControl,{label:(0,i.__)("Titel","blockbite-icon"),value:d,onChange:e=>v(e),help:(0,i.__)("Change your button title...","blockbite-icon")}),(0,t.createElement)(r.TextControl,{label:(0,i.__)("Url","blockbite-icon"),value:f,onChange:e=>m(e),help:(0,i.__)("Change your button url...","blockbite-icon")}),(0,t.createElement)(r.Button,{variant:"secondary",onClick:()=>{const e={...y()};e.linkTitle="",e.linkUrl="",m(""),v(""),c(e)}},"Clear link"))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Open in tab",help:h?"Open in tab":"Within site",checked:h,onChange:e=>(e=>{const t=e?"_blank":"_self";k(e),setLinkProps("linkTarget",t)})(e)})),o&&(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.ToggleControl,{label:"Link as Tile",help:E?"Make the whole area clickable":"Make only the button clickable",checked:E,onChange:e=>(e=>{w(e),setLinkProps("linkTile",e)})(e)})))}window.wp.url;var d=JSON.parse('{"u2":"blockbite/icon"}');(0,e.registerBlockType)(d.u2,{example:{attributes:{message:"Section"}},icon:function(){return(0,t.createElement)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg"},(0,t.createElement)("rect",{width:"50",height:"50",fill:"white"}),(0,t.createElement)("rect",{x:"2",y:"2",width:"46",height:"46",rx:"10",fill:"url(#paint0_linear_1_37)"}),(0,t.createElement)("path",{d:"M34.816 23.194C35.1018 24.6551 35.0474 26.1624 34.657 27.5991C34.2667 29.0358 33.5508 30.3634 32.565 31.479C30.5 33.789 27.828 34 25 34C22.172 34 19.491 33.789 17.432 31.479C16.4471 30.3629 15.7321 29.0352 15.3422 27.5985C14.9524 26.1619 14.8983 24.6549 15.184 23.194C16.5278 22.891 17.9293 22.9663 19.2329 23.4115C20.5365 23.8567 21.6912 24.6544 22.569 25.716C23.8094 27.1086 24.6495 28.8113 25 30.643C25.3463 28.8113 26.1842 27.1082 27.424 25.716C28.3034 24.6544 29.4594 23.8569 30.7641 23.4118C32.0687 22.9667 33.4711 22.8913 34.816 23.194ZM25 16C23.0385 17.3839 21.6928 19.477 21.248 21.836C22.3072 22.4079 23.2593 23.159 24.062 24.056C24.3984 24.4319 24.7117 24.828 25 25.242C25.2874 24.8275 25.6 24.4311 25.936 24.055C26.7405 23.1567 27.6947 22.4046 28.756 21.832C28.31 19.4735 26.9628 17.3816 25 16Z",fill:"white"}),(0,t.createElement)("defs",null,(0,t.createElement)("linearGradient",{id:"paint0_linear_1_37",x1:"53.5",y1:"11.5",x2:"25",y2:"48",gradientUnits:"userSpaceOnUse"},(0,t.createElement)("stop",{stopColor:"#414996"}),(0,t.createElement)("stop",{offset:"1",stopColor:"#B200F1"}))))},edit:function({attributes:e,setAttributes:n}){const{svgCode:a,svgSize:o,linkUrl:s,linkTitle:u,linkTarget:p}=e,f=e=>{n({svgCode:e})},d=(0,l.useBlockProps)({className:`wp-element-icon svg-size-${o}`});return(0,t.createElement)("div",{...d},(0,t.createElement)("span",{dangerouslySetInnerHTML:{__html:a}}),(0,t.createElement)(l.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:(0,i.__)("Svg Settings","blockbite-icon"),initialOpen:!0},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(c,{parentCallback:e=>{f(e)}})),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)("fieldset",null,(0,t.createElement)(r.TextControl,{label:(0,i.__)("Svg Code","blockbite-icon"),value:a,onChange:f,help:(0,i.__)("Add your Svg Code, make sure it starts with <svg ...","blockbite-icon")}))),(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.RangeControl,{label:"Svg Size",value:o,withInputField:!1,onChange:e=>{n({svgSize:e})},min:1,max:10}))),(0,t.createElement)(r.PanelBody,{title:"Link",initialOpen:!1},(0,t.createElement)(m,{parentCallback:e=>{n({...e})},linkUrl:s,linkTitle:u,linkTarget:p,showLinkTile:!1}))))},save:function({attributes:e}){const{svgCode:n,svgSize:r,linkTarget:i,linkUrl:a,linkTitle:o}=e,c=l.useBlockProps.save({className:`wp-element-icon svg-size-${r}`});return(0,t.createElement)("div",{...c},(0,t.createElement)("span",{dangerouslySetInnerHTML:{__html:n}}),a?(0,t.createElement)("a",{rel:"noopener noreferrer",target:i,href:a,title:o,className:"tile"}):null)}})}()}();