(()=>{var e={3274:e=>{self,e.exports=function(){var e={3:function(e,t,n){"use strict";function r(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}n.d(t,{Z:function(){return o}});var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.defaults={start:0,end:100,duration:2e3,delay:10,once:!0,pulse:!1,decimals:0,legacy:!0,filesizing:!1,currency:!1,separator:!1,formater:"us-US",selector:".purecounter"},this.configOptions=this.setOptions(t,this.defaults),this.elements=document.querySelectorAll(this.configOptions.selector),this.intersectionSupport=this.intersectionListenerSupported(),this.registerEventListeners()}var t,n;return t=e,n=[{key:"setOptions",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};for(var r in e)if(0===Object.keys(t).length||t.hasOwnProperty(r)){var a=this.parseValue(e[r]);n[r]=a,r.match(/duration|pulse/)&&(n[r]="boolean"!=typeof a?1e3*a:a)}return Object.assign({},t,n)}},{key:"registerEventListeners",value:function(){var e=this.elements;if(0!==e.length)if(this.intersectionSupport){var t=new IntersectionObserver(this.animateElements.bind(this),{root:null,rootMargin:"20px",threshold:.5});e.forEach((function(e){t.observe(e)}))}else window.addEventListener&&(this.animateLegacy(e),window.addEventListener("scroll",(function(t){this.animateLegacy(e)}),{passive:!0}))}},{key:"animateLegacy",value:function(e){var t=this;e.forEach((function(e){!0===t.parseConfig(e).legacy&&t.elementIsInView(e)&&t.animateElements([e])}))}},{key:"animateElements",value:function(e,t){var n=this;e.forEach((function(e){var r=e.target||e,a=n.parseConfig(r);if(a.duration<=0)return r.innerHTML=n.formatNumber(a.end,a);if(!t&&!n.elementIsInView(e)||t&&e.intersectionRatio<.5){var i=a.start>a.end?a.end:a.start;return r.innerHTML=n.formatNumber(i,a)}setTimeout((function(){return n.startCounter(r,a)}),a.delay)}))}},{key:"startCounter",value:function(e,t){var n=this,r=(t.end-t.start)/(t.duration/t.delay),a="inc";t.start>t.end&&(a="dec",r*=-1);var i=this.parseValue(t.start);e.innerHTML=this.formatNumber(i,t),!0===t.once&&e.setAttribute("data-purecounter-duration",0);var o=setInterval((function(){var s=n.nextNumber(i,r,a);e.innerHTML=n.formatNumber(s,t),((i=s)>=t.end&&"inc"===a||i<=t.end&&"dec"===a)&&(e.innerHTML=n.formatNumber(t.end,t),t.pulse&&(e.setAttribute("data-purecounter-duration",0),setTimeout((function(){e.setAttribute("data-purecounter-duration",t.duration/1e3)}),t.pulse)),clearInterval(o))}),t.delay)}},{key:"parseConfig",value:function(e){var t=this,n=[].filter.call(e.attributes,(function(e){return/^data-purecounter-/.test(e.name)})),a=0!=n.length?Object.assign.apply(Object,[{}].concat(r(n.map((function(e){var n=e.name,r=e.value;return function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n.replace("data-purecounter-","").toLowerCase(),t.parseValue(r))}))))):{};return this.setOptions(a,this.configOptions)}},{key:"nextNumber",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"inc";return e=this.parseValue(e),t=this.parseValue(t),parseFloat("inc"===n?e+t:e-t)}},{key:"convertNumber",value:function(e,t){if(t.filesizing||t.currency){e=Math.abs(Number(e));var n=1e3,r=t.currency&&"string"==typeof t.currency?t.currency:"",a=t.decimals||1,i=["","K","M","B","T"],o="";t.filesizing&&(n=1024,i=["bytes","KB","MB","GB","TB"]);for(var s=4;s>=0;s--)if(0===s&&(o="".concat(e.toFixed(a)," ").concat(i[s])),e>=this.getFilesizeThreshold(n,s)){o="".concat((e/this.getFilesizeThreshold(n,s)).toFixed(a)," ").concat(i[s]);break}return r+o}return parseFloat(e)}},{key:"getFilesizeThreshold",value:function(e,t){return Math.pow(e,t)}},{key:"applySeparator",value:function(e,t){if(t.formater){var n=t.separator?"string"==typeof t.separator?t.separator:",":"";return"en-US"!==t.formater&&!0===t.separator?e:(r=n,e.replace(/^(?:(\d{1,3},(?:\d{1,3},?)*)|(\d{1,3}\.(?:\d{1,3}\.?)*)|(\d{1,3}(?:\s\d{1,3})*))([\.,]?\d{0,2}?)$/gi,(function(e,t,n,a,i){var o="",s="";if(void 0!==t?(o=t.replace(new RegExp(/,/gi,"gi"),r),s=","):void 0!==n?o=n.replace(new RegExp(/\./gi,"gi"),r):void 0!==a&&(o=a.replace(new RegExp(/ /gi,"gi"),r)),void 0!==i){var l=","!==s&&","!==r?",":".";o+=i.replace(new RegExp(/\.|,/gi,"gi"),l)}return o})))}var r;return e}},{key:"formatNumber",value:function(e,t){var n={minimumFractionDigits:t.decimals,maximumFractionDigits:t.decimals},r="string"==typeof t.formater?t.formater:void 0;return e=this.convertNumber(e,t),e=t.formater?e.toLocaleString(r,n):parseInt(e).toString(),this.applySeparator(e,t)}},{key:"getLocaleSeparator",value:function(){}},{key:"parseValue",value:function(e){return/^[0-9]+\.[0-9]+$/.test(e)?parseFloat(e):/^[0-9]+$/.test(e)?parseInt(e):/^true|false/i.test(e)?/^true/i.test(e):e}},{key:"elementIsInView",value:function(e){for(var t=e.offsetTop,n=e.offsetLeft,r=e.offsetWidth,a=e.offsetHeight;e.offsetParent;)t+=(e=e.offsetParent).offsetTop,n+=e.offsetLeft;return t>=window.pageYOffset&&n>=window.pageXOffset&&t+a<=window.pageYOffset+window.innerHeight&&n+r<=window.pageXOffset+window.innerWidth}},{key:"intersectionListenerSupported",value:function(){return"IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype}}],n&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()},634:function(e,t,n){var r=n(3).Z;e.exports=r}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}return n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n(634)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}(()=>{"use strict";n(3274);const e=window.wp.blocks,t=window.React,r=window.wp.components,a=(window.wp.i18n,window.wp.blockEditor),i=JSON.parse('{"u2":"blockbite/heading"}');function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}(0,e.registerBlockType)(i.u2,{example:{attributes:{message:"Heading"}},icon:e=>t.createElement("svg",o({width:e.width||"1em",height:e.height||"1em",viewBox:"0 0 50 50",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img"},e),t.createElement("rect",{width:50,height:50,fill:"currentColor"}),t.createElement("path",{d:"M34.8941 14.1037C35.2447 14.4541 35.5228 14.8702 35.7126 15.3282C35.9023 15.7862 36 16.277 36 16.7728C36 17.2685 35.9023 17.7594 35.7126 18.2173C35.5228 18.6753 35.2447 19.0914 34.8941 19.4418L33.0496 21.2819L27.7167 15.9484L29.5612 14.1037C30.2687 13.397 31.2277 13 32.2276 13C33.2276 13 34.1866 13.397 34.8941 14.1037ZM21.3444 32.9942L31.3999 22.9364L26.0624 17.5983L16.0057 27.6549L15 34L21.3444 32.9942Z",fill:"#F5F5F5"})),edit:function({attributes:e,setAttributes:n}){const{content:i,contentString:o,contentTag:s,textAlign:l,textAlignDesktop:u}=e,c=(0,a.useBlockProps)({className:`wp-element-heading h-auto ${l} ${u}`,contentEditable:!1});return(0,t.createElement)(t.Fragment,null,o?(0,t.createElement)("span",{...c},i):(0,t.createElement)(a.RichText,{tagName:s,...c,value:i,onChange:e=>n({content:e}),allowedFormats:["core/italic","core/bold"],placeholder:"Enter your text here"}),(0,t.createElement)(a.InspectorControls,null,(0,t.createElement)(r.PanelBody,{title:"Richtext",initialOpen:!1},(0,t.createElement)(r.PanelRow,null,(0,t.createElement)(r.SelectControl,{label:"Tag",value:s,options:[{label:"paragraph",value:"p"},{label:"h1",value:"h1"},{label:"h2",value:"h2"},{label:"h3",value:"h3"},{label:"h4",value:"h4"},{label:"h5",value:"h5"}],onChange:e=>n({contentTag:e})})))))},save:function({attributes:e}){const{content:n,contentTag:r,contentString:i,textAlign:o,textAlignDesktop:s}=e,l=a.useBlockProps.save({className:`wp-element-heading h-auto ${o} ${s}`});return(0,t.createElement)(t.Fragment,null,i?(0,t.createElement)("span",{...l},n):(0,t.createElement)(a.RichText.Content,{...l,tagName:r,value:n}))}})})()})();