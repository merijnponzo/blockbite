!function(){"use strict";var e,t,i={},n={};function o(e){var t=n[e];if(void 0!==t)return t.exports;var r=n[e]={exports:{}};return i[e].call(r.exports,r,r.exports,o),r.exports}o.m=i,o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,{a:t}),t},o.d=function(e,t){for(var i in t)o.o(t,i)&&!o.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,i){return o.f[i](e,t),t}),[]))},o.u=function(e){return e+".js"},o.miniCssF=function(e){},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="blockbite:",o.l=function(i,n,r,l){if(e[i])e[i].push(n);else{var s,a;if(void 0!==r)for(var c=document.getElementsByTagName("script"),d=0;d<c.length;d++){var p=c[d];if(p.getAttribute("src")==i||p.getAttribute("data-webpack")==t+r){s=p;break}}s||(a=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+r),s.src=i),e[i]=[n];var u=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[i];if(delete e[i],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),a&&document.head.appendChild(s)}},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e;o.g.importScripts&&(e=o.g.location+"");var t=o.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var i=t.getElementsByTagName("script");if(i.length)for(var n=i.length-1;n>-1&&!e;)e=i[n--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=e}(),function(){var e={925:0};o.f.j=function(t,i){var n=o.o(e,t)?e[t]:void 0;if(0!==n)if(n)i.push(n[2]);else{var r=new Promise((function(i,o){n=e[t]=[i,o]}));i.push(n[2]=r);var l=o.p+o.u(t),s=new Error;o.l(l,(function(i){if(o.o(e,t)&&(0!==(n=e[t])&&(e[t]=void 0),n)){var r=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,n[1](s)}}),"chunk-"+t,t)}};var t=function(t,i){var n,r,l=i[0],s=i[1],a=i[2],c=0;if(l.some((function(t){return 0!==e[t]}))){for(n in s)o.o(s,n)&&(o.m[n]=s[n]);a&&a(o)}for(t&&t(i);c<l.length;c++)r=l[c],o.o(e,r)&&e[r]&&e[r][0](),e[r]=0},i=self.webpackChunkblockbite=self.webpackChunkblockbite||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var r=window.wp.element,l=window.wp.hooks,s=window.wp.compose,a=window.wp.components,c=window.wp.blockEditor;function d(e,t){const{biteMotion:i,biteClass:n}=t;let o=n;void 0!==i&&i.length&&(o=[n,"has-motion"].join(" "));let r={};return lodash.has(e,"className")&&lodash.size(e.className)||lodash.size(o)?(o=[e.className,o].join(" "),r={...e,className:o}):r={...e},r}window.wp.data,window.wp.blocks;let p=[8,16,20,24,32,48,64],u=[80,96,128,144,192,256,320,336,352,368,384],f=[448,512,576,640,704,768,832,896,960,1024],m=["auto","1/3","1/2","1/4","2/3","3/4","1/5","2/5","3/5","4/5","full"],b=["md","lg","xl","2xl","3xl","full"],h=["sm","md","lg","xl","2xl","inner"],g=[0,12,45,90,180],x=[1,2,3,4,5],v=[0,8,16,24,32,48,64,80,96,128,144,192],y=[0,50,75,90,95,100,110,125,150],k=[1,2,3,4,5,6,"none"],w=[0,10,20,30,40,50],E=[0,8,16,24,32,48,64,80,96,128,144,192,256,320,336,352,368,384,448,512,"1/3","1/2","1/5","2/5","3/5","4/5","4/6","1/4","2/3","3/4"];const S=e=>e.map((e=>({label:e,id:e.toString(),active:!1})));p=S(p),u=S(u),f=S(f),m=S(m),b=S(b),g=S(g),h=S(h),x=S(x),v=S(v),y=S(y),k=S(k),w=S(w),E=S(E);const C={id:"dimension",units:[...m,...p,...u,...f],modifiers:{maxwidth:{label:"Max Width",prefix:"max-w-"},height:{label:"Exact Height",prefix:"h-"},minheight:{label:"Min Height",prefix:"min-h-"},width:{label:"Exact Width",prefix:"w-"}}},_={id:"padding",units:[...p,...u],modifiers:{around:{label:"Around",prefix:"p-"},left:{label:"Left",prefix:"pl-"},right:{label:"Right",prefix:"pr-"},top:{label:"Top",prefix:"pt-"},bottom:{label:"Bottom",prefix:"pb-"},x:{label:"Horizontal",prefix:"px-"},y:{label:"Vertical",prefix:"py-"}}},B={id:"margin",units:[...m,...p],modifiers:{around:{label:"Around",prefix:"m-"},left:{label:"Left",prefix:"ml-"},right:{label:"Right",prefix:"mr-"},top:{label:"Top",prefix:"mt-"},bottom:{label:"Bottom",prefix:"mb-"},x:{label:"Horizontal",prefix:"mx-"},y:{label:"Vertical",prefix:"my-"}}},P={id:"rounded",units:[...b],modifiers:{around:{label:"Around",prefix:"rounded-"},topleft:{label:"Top Left",prefix:"rounded-tl"},topright:{label:"Top Right",prefix:"rounded-tr"},bottomleft:{label:"Bottom Left",prefix:"rounded-bl"},bottomright:{label:"Bottom Right",prefix:"rounded-br"}}},N={id:"shadow",units:[...h],modifiers:{around:{label:"Shadow",prefix:"drop-shadow-"}}},T={id:"order",units:[...x],modifiers:{around:{label:"Order",prefix:"order-"}}},$={id:"aspectRatio",units:[{label:"Video",id:"video",active:!1},{label:"Landscape",id:"landscape",active:!1},{label:"Square",id:"square",active:!1},{label:"Portrait",id:"portrait",active:!1}],modifiers:{aspectratio:{label:"Aspect ratio",prefix:"aspect-"}}},O={id:"transformposition",units:[...v],modifiers:{transformx:{label:"Position X",prefix:"translate-x-"},transformy:{label:"Position Y",prefix:"translate-y-"},transform_x:{label:"-Position X",prefix:"-translate-x-"},transform_y:{label:"-Position Y",prefix:"-translate-y-"}}},j={id:"transformscale",units:[...y],modifiers:{scale:{label:"Scale",prefix:"scale-"},scale_x:{label:"Scale X",prefix:"scale-x-"},scale_y:{label:"Scale Y",prefix:"scale-y-"}}},R={id:"zindex",units:[...w],modifiers:{zindex:{label:"Z-Index",prefix:"z-"}}},z={id:"position",units:[{label:"Fixed",id:"fixed",active:!1},{label:"Absolute",id:"absolute",active:!1},{label:"Relative",id:"relative",active:!1},{label:"Sticky",id:"sticky top-0",active:!1}],modifiers:{position:{label:"Position",prefix:"position",skipPrefix:!0}}},A={id:"positionmove",units:[...E],modifiers:{left:{label:"Left",prefix:"left-"},right:{label:"Right",prefix:"right-"},top:{label:"Top",prefix:"top-"},bottom:{label:"Bottom",prefix:"bottom-"},minleft:{label:"-Left",prefix:"-left-"},minright:{label:"-Right",prefix:"-right-"},mintop:{label:"-Top",prefix:"-top-"},minbottom:{label:"-Bottom",prefix:"-bottom-"}}},L={id:"container",units:[{label:"Container",id:"container",active:!1}],modifiers:{container:{label:"Container",prefix:"container",skipPrefix:!0}}},I={id:"overflow",units:[{label:"Clip",id:"clip",active:!1},{label:"Hidden",id:"hidden",active:!1},{label:"Visible",id:"visible",active:!1},{label:"Hide X",id:"x-hidden",active:!1},{label:"Hide Y",id:"y-hidden",active:!1},{label:"Scroll X",id:"x-scroll",active:!1},{label:"Scroll Y",id:"y-scroll",active:!1}],modifiers:{overflow:{label:"Overflow",prefix:"overflow-"}}};window.wp.i18n;var M=window.React,F=({tags:e,tagClass:t,onTagClick:i})=>(0,r.createElement)("div",{className:"blockbite--editor-tags"},(0,r.createElement)((()=>{const n=[];let o=0;for(const l in e){o+=1;const s=e[l];n.push((0,r.createElement)("div",{key:`tagkey${s.id}--${o}`,onClick:()=>i(s),className:`blockbite--editor-tag ${t} ${s.active?"active":""}`},s.label))}return n}),null));function H(e){const[t,i]=(0,r.useState)(!1),[n,o]=(0,r.useState)([]);(0,r.useEffect)((()=>{l()}),[]);const l=()=>{const t=u(e.styleSettings);i({all:{id:"all",label:"All",active:!0,settings:{...t}},xl:{id:"xl",label:"Desktop",active:!1,settings:{...t}},md:{id:"md",label:"Tablet",active:!1,settings:{...t}},xs:{id:"xs",label:"Mobile",active:!1,settings:{...t}}})},s=t=>{const i=c(t),n=d(i);e.parentCallback(i,n),p(i)},c=t=>{const i=`${t.responsive}:${t.modifierPrefix}`,n=[...e.defaultStyle],o=n.findIndex((e=>e.id===i));return-1!==o&&n.splice(o,1),n},d=e=>{const t=[];for(const i in e){const n=e[i];t.push(n.tw)}return t.join(" ")},p=e=>{const t=[];e.forEach((e=>{t.push({...e})})),o([...t])},u=t=>{const i=[...e.defaultStyle];p(i);const n={};return t.forEach((e=>{n[e.id]={...e},n[e.id].modifiers={...e.modifiers},Object.keys(n[e.id].modifiers).forEach((t=>{n[e.id].modifiers[t].id=t,n[e.id].modifiers[t].value=null}))})),JSON.parse(JSON.stringify(n))},f=(e,t,n)=>{i((i=>{const o=JSON.parse(JSON.stringify(i));o[n.id].settings[e.id].modifiers[t.id].value=null;for(const t in o[n.id].settings[e.id].units)o[n.id].settings[e.id].units[t].active=!1;return o}));const o={responsive:n.id,modifierPrefix:t.prefix};s(o)},m=()=>{l(),e.parentCallback([],"")},b=(t,n,o,r)=>{i((e=>{const i=JSON.parse(JSON.stringify(e));i[r.id].settings[n.id].modifiers[o.id].value=t.id;for(const e in i[r.id].settings[n.id].units){const o=i[r.id].settings[n.id].units[e];o.active=!1,o.id===t.id&&(o.active=!0)}return i})),(t=>{const i=(e=>{let t=e.responsive;t="all"===e.responsive?"":`${e.responsive}:`;const i={...e},n=`${e.responsive}:${e.modifierPrefix}`;i.id=n;var o=e.modifierPrefix;return i.skipPrefix&&(o=""),i.tw=`${t}${o}${e.unit}`,i})(t),n=(t=>{const i=[...e.defaultStyle],n=i.findIndex((e=>e.id===t.id));return-1===n?i.push(t):i.splice(n,1,t),i})(i),o=d(n);p(n),e.parentCallback(n,o)})({responsive:r.id,modifier:o.id,modifierPrefix:o.prefix,unit:t.id,setting:n.id,skipPrefix:o.skipPrefix})},h=({setting:e,responsive:t})=>{const i=[];for(const n in e.modifiers){const o=e.modifiers[n],l=[];for(const i in e.units){const n=e.units[i],s=(0,r.createElement)("button",{key:`panelUnit__${t.id}__${o.id}__${n.id}`,className:"button button--unit "+(n.active?"active":""),onClick:()=>b(n,e,o,t)},n.label);l.push(s)}o.active&&i.push((0,r.createElement)("div",{key:`panelUnit__${t.id}__${o.id}`},(0,r.createElement)("div",{className:"buttons"},l),(0,r.createElement)(a.Button,{onClick:()=>f(e,o,t)},"Reset")))}return i};let g=null;return t&&(g=(()=>{let e=!1;for(const i in t){const n=t[i];n.active&&(e=n)}return e})()),(0,r.createElement)(a.PanelBody,{title:"Designer",initialOpen:!1},(0,r.createElement)("div",{className:"blockbite-stylehelper"},(0,r.createElement)("h4",null,"Current Styles"),(()=>{const e=[];return n.forEach((t=>{e.push((0,r.createElement)("div",{key:`styleList__${t.id}`},(0,r.createElement)("button",{onClick:()=>(e=>{s(e)})(t)},(0,r.createElement)("strong",null,t.responsive),"  ",t.setting," ",t.modifier," ",t.unit," ",t.value)))})),e})(),(0,r.createElement)("br",null),(0,r.createElement)("button",{className:"button button--reset mt-8",onClick:()=>m()},"Reset All Styles"),t?(0,r.createElement)("div",null,(0,r.createElement)("h4",null,"Viewport"),(0,r.createElement)(F,{key:"responsives",tagClass:"tag--tabs",tags:t,onTagClick:e=>(e=>{const n={...t};for(const t in n){const i=n[t];i.active=!1,i.id===e.id&&(i.active=!0)}i(n)})(e)}),(0,r.createElement)((({responsive:t})=>{const n=[];for(const o in t.settings){const l=t.settings[o];n.push((0,r.createElement)(a.PanelRow,{key:`panelModifier__${l.id}`},(0,r.createElement)("div",null,(0,r.createElement)("h4",{className:"blockbite--title"}," ",`${l.id} ${t.label}`),(0,r.createElement)(F,{tags:l.modifiers,key:`tagsModifier__${l.id}`,tagClass:"tag--small",onTagClick:n=>{return o=n,r=l,s=t,void i((t=>{const i=JSON.parse(JSON.stringify(t)),n=Object.keys(i[s.id].settings[r.id].modifiers);let l=null;n.forEach((e=>{e!==o.id?i[s.id].settings[r.id].modifiers[e].active=!1:(i[s.id].settings[r.id].modifiers[e].active=!0,i[s.id].settings[r.id].modifiers[e].value&&(l=i[s.id].settings[r.id].modifiers[e].value))}));const a=`${s.id}:${o.prefix}`,c=e.defaultStyle.findIndex((e=>e.id===a));let d=null;-1!==c&&(d=e.defaultStyle[c],l=d.unit);for(const e in i[s.id].settings[r.id].units){const t=i[s.id].settings[r.id].units[e];t.id===l?t.active=!0:t.active=!1}return i}));var o,r,s}}),(0,r.createElement)(h,{setting:l,responsive:t}),(0,r.createElement)(a.Button,{onClick:()=>m()},"Reset All"))))}return n}),{responsive:g})):null,(0,r.createElement)("p",{className:"my-16 block"},"Don't forget to check your layouts on mobile view")))}const J=e=>{if(console.log(e),"core/"===e.substring(0,5))return!(e.includes("query")||e.includes("reusable")||e.includes("template-part"));let t=e.substring(10);return blockbiteEditor.blocks.includes(t)},q=e=>!!(lodash.has(e,"biteStyle")||lodash.has(e,"biteClass")||lodash.has(e,"biteMotion")||lodash.has(e,"bitePreset"));const V=(0,s.createHigherOrderComponent)((e=>{const t=[T,C,$,_,B,j,O,P,N,R,z,A,L,I];return i=>{if(q(i.attributes)||J(i.name)){const{attributes:n,setAttributes:o}=i,{biteStyle:l,biteClass:s,biteMotion:d}=n,p=(e,t)=>{o({biteStyle:e,biteClass:t})},u=i.name.includes("blockbite/"),f=()=>(0,r.createElement)(r.Fragment,null,(0,r.createElement)(H,{defaultStyle:l,styleSettings:t,parentCallback:(e,t)=>p(e,t)}));return(0,r.createElement)(r.Fragment,null,(0,r.createElement)(e,{...i}),(0,r.createElement)(c.InspectorControls,null,u?f():(0,r.createElement)(a.PanelBody,{title:"Blockbite"},f())))}return(0,r.createElement)(e,{...i})}}),"withInspectorControl"),W=(0,s.createHigherOrderComponent)((e=>t=>{const{attributes:i}=t,{biteClass:n}=i,o=d(t,i);return(0,r.createElement)(e,{...o,className:n})}),"withBiteStyleClassName");var X=({isOpen:e,children:t,onClose:i})=>{const n=e?"flex":"hidden";return(0,r.createElement)("div",{className:`${n} blockbite--modal`},(0,r.createElement)("div",{className:"blockbite--modal__overlay"}),(0,r.createElement)("div",{className:"blockbite--modal__content"},(0,r.createElement)("button",{className:"blockbite--modal__close",onClick:()=>{i(!1)}},(0,r.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},(0,r.createElement)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M6 18L18 6M6 6l12 12"})),(0,r.createElement)("span",null," close")),(0,r.createElement)("div",{className:"blockbite--modal__scrollable"},t)))};const U=e=>e.map((e=>{const t=e;if(t.innerBlocks&&t.innerBlocks.length){const e=U(t.innerBlocks);e.some((e=>e.recovered))&&(t.innerBlocks=e,t.replacedClientId=t.clientId,t.recovered=!0)}if(!t.isValid){const e=(({name:e,attributes:t,innerBlocks:i})=>wp.blocks.createBlock(e,t,i))(t);return e.replacedClientId=t.clientId,e.recovered=!0,e}return t})),Y=()=>{const[e,t]=(0,M.useState)(!0);return(0,r.createElement)(X,{isOpen:e,onClose:e=>t(!1)},(0,r.createElement)("div",{className:"p-32 flex flex-col justify-center items-center h-full"},(0,r.createElement)("h2",null,"Blockbite Recovery"),(0,r.createElement)("button",{className:"button button-primary w-128",onClick:()=>{U(wp.data.select("core/editor").getEditorBlocks()).forEach((e=>{e.isReusable&&e.ref&&wp.data.dispatch("core").editEntityRecord("postType","wp_block",e.ref,{content:wp.blocks.serialize(e.blocks)}).then((()=>{})),e.recovered&&e.replacedClientId&&wp.data.dispatch("core/block-editor").replaceBlock(e.replacedClientId,e)})),t(!1)}},"Recover All Blocks")))};const D=["m-","mx-","my-","ml-","mr-","mt-","mb-","p-","px-","py-","pl-","pr-","pt-","pb-","max-w-","h-","w-","min-h-","min-w-","max-w-","gap-","gap-x-","gap-y-","h-auto"],Z=["","xs:","md:","xl:"],G=[];[2,4,8,16,20,24,32,48,64,80,96,128,144,160,192,256,320,384,448,512,576,640,704,768,832,896,"1/3","1/2","1/4","2/3","3/4","full","clamp-1","clamp-2","clamp-3","clamp-4","clamp-5","clamp-6","clamp-7","clamp-8","clamp-9","clamp-10"].forEach((e=>{Z.forEach((t=>{D.forEach((i=>{G.push(t+i+e)}))}))}));const K=["md","lg","xl","2xl","3xl","full"],Q=["tl-","tr-","bl-","br-",""],ee=[];Z.forEach((e=>{K.forEach((t=>{Q.forEach((i=>{ee.push(e+"rounded-"+i+t)}))}))}));const te=[0,12,45,90,180],ie=[];Z.forEach((e=>{te.forEach((t=>{ie.push(e+"rotate-"+t),ie.push(e+"-rotate-"+t)}))}));const ne=["sm","md","lg","xl","2xl","inner"],oe=[];Z.forEach((e=>{ne.forEach((t=>{oe.push(e+"drop-shadow-"+t)}))}));const re=["aspect-landscape","aspect-portrait","aspect-video","aspect-square"],le=[];Z.forEach((e=>{re.forEach((e=>{le.push(e)}))}));const se=[0,8,16,24,32,48,64,80,96,128,144,192],ae=["translate-x-","translate-y-","-translate-x-","-translate-y-"],ce=[];Z.forEach((e=>{ae.forEach((t=>{se.forEach((i=>{ce.push(e+t+i)}))}))}));const de=[1,2,3,4,5,6,"none"],pe=["line-clamp-"],ue=[];Z.forEach((e=>{pe.forEach((t=>{de.forEach((i=>{ue.push(e+t+i)}))}))}));const fe=["flex","flex-col","flex-row","flex-wrap","flex-nowrap","flex-wrap-reverse","items-start","items-center","items-end","items-stretch","justify-start","justify-center","justify-end","justify-between","shrink-0","shrink-1","flex-0","flex-1","order-1","order-2","order-3","order-4","flex-col-reverse","flex-row-reverse","grid-cols-1","grid-cols-2","grid-cols-3","grid-cols-4","grid-cols-5","grid-cols-6","grid-rows-1","grid-rows-2","grid-rows-3","grid-rows-4","grid-rows-5","grid-rows-6","items-stretch","place-content-center","place-content-start","place-content-end","place-content-between","place-content-around","place-content-evenly","place-content-stretch","place-items-center","place-items-start","place-items-end","place-items-stretch","place-items-baseline"],me=[];Z.forEach((e=>{fe.forEach((t=>{me.push(e+t)}))}));const be=[],he=[0,10,20,30,40,50],ge=["z-"];Z.forEach((e=>{ge.forEach((t=>{he.forEach((i=>{be.push(e+t+i)}))}))}));const xe=[],ve=["relative","absolute","sticky","fixed"];Z.forEach((e=>{ve.forEach((t=>{xe.push(e+t)}))}));const ye=[8,16,20,24,32,48,64,80,96,128,144,160,192,256,320,384,448,512,576,640,704],ke=["left-","top-","right-","bottom-","-left-","-top-","-right-","-bottom-"],we=[];Z.forEach((e=>{ke.forEach((t=>{ye.forEach((i=>{we.push(e+t+i)}))}))}));var Ee=window.wp.apiFetch,Se=o.n(Ee);const Ce=e=>{let t=[],i=[];return e.forEach((e=>{const{attributes:n,innerBlocks:o}=e,r={};["gridClass","biteClass","flexClass","imageClass"].forEach((e=>{void 0!==n[e]&&(r[e]=n[e])}));const{ref:l}=n;if(void 0!==l&&i.push(l),Object.keys(r).length>0&&t.push(r),o.length>0){const e=Ce(o);t=t.concat(e)}})),{properties:t,reusables:i}},_e=(e,t)=>{console.log(e.id,t),fetch(`${blockbiteEditor.apiUrl}/editor/references`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wpApiSettings.nonce},body:JSON.stringify({post_id:e.id,references:t})}).then((i=>{200===i.status?console.log("References are saved for the post",e.id,t):console.log("References not saved")}))},Be=(e,t)=>{Se()({path:`/wp/v2/blocks/${e}`}).then((e=>{t.id=e.id,t.content=e.content.raw,Pe(t)})).catch((e=>console.error(e)))},Pe=e=>{e.prefix=".style-"+e.id,async function(e){const t=function(e){const t=(()=>{const e=function(){const e={},t=[0,1,2,4,6,8,10,12,14,18,20,22,24,32];for(let i=0;i<t.length;i++){let n=t[i];e[n]=n/16+"rem"}for(let t=1;t<64.375;t++)e[16*t]=t+"rem";return e}(),t=function(){const e={};return[{size:"0px",slug:"0",name:"0"},{size:"clamp(16px, 1vw, 32px);",slug:"1",name:"1"},{size:"clamp(32px, 1vw, 48px);",slug:"2",name:"2"},{size:"clamp(40px, 1vw, 50px);",slug:"3",name:"3"},{size:"clamp(64px, 1vw, 80px);",slug:"4",name:"4"},{size:"clamp(128px, 1vw, 144px);",slug:"5",name:"5"},{size:"clamp(144px, 1vw, 164px);",slug:"6",name:"6"},{slug:"8",size:"clamp(16px, 1vw, 32px);",name:"8"},{slug:"9",size:"clamp(16px, 1vw, 32px);",name:"9"},{slug:"10",size:"clamp(16px, 1vw, 32px);",name:"10"}].forEach((t=>{e["clamp-"+t.slug]=t.size})),e}();return Object.assign(e,t)})();return{important:e,theme:{container:{center:!0,padding:{DEFAULT:"1.6rem",sm:"1rem",lg:"1rem"}},extend:{spacing:t,gap:t,minWidth:t,maxWidth:t,minHeight:t,maxHeight:t,aspectRatio:{portrait:"3 / 4",landscape:"4 / 3"},screens:{xs:{max:"767px"},md:{min:"768px",max:"1139px"},xl:{min:"1140px"}}}}}}(e.prefix),i=await e.tailwind.createTailwindcss({tailwindConfig:t});return await i.generateStylesFromContent("\n    @tailwind components;\n    @tailwind utilities;\n    ",[e.content])}(e).then((t=>{fetch(`${blockbiteEditor.apiUrl}/editor/styles`,{method:"POST",headers:{"Content-Type":"application/json","X-WP-Nonce":wpApiSettings.nonce},body:JSON.stringify({post_id:e.id,css:t})}).then((t=>{200===t.status?console.log("Blockbite styles saved for the post",e.id,e.postType):console.log("Styles not saved")}))}))};let Ne={hasBlocks:!1,isSaving:!1,init:!1,id:null,postType:null,templateId:null};(async function(){return await Promise.all([o.e(556),o.e(721)]).then(o.bind(o,6887))})().then((e=>{Ne.tailwind=e})),(0,l.addFilter)("blocks.registerBlockType","blockbite/extend-block-attributes",((e,t)=>"core/template-part"===e.name?e:!q(e.attributes)&&J(t)?lodash.assign({},e,{attributes:lodash.assign({},e.attributes,{biteStyle:{type:"array",default:[]},biteClass:{type:"string",default:""},biteMotion:{type:"array",default:[]},bitePreset:{type:"array",default:[]}})}):e),99),(0,l.addFilter)("editor.BlockEdit","blockbite/extend-block-props",V,100),(0,l.addFilter)("editor.BlockListBlock","blockbite/extend-block-list-props",W,101),(0,l.addFilter)("blocks.getSaveContent.extraProps","blockbite/extend-block-save-props",(function(e,t,i){if(q(i)&&J(t.name)){const t=d(e,i);return lodash.assign({},e,{...t})}return e}),102),(0,l.addFilter)("blocks.switchToBlockType.transformedBlock","blockbite/extend-block-attributes",(e=>{let t=e;return q(t.attributes)&&J(t.name)?lodash.isObject(t.attributes.biteStyle)&&(t.attributes.biteStyle=lodash.map(t.attributes.biteStyle,((e,t)=>({[t]:e})))):extend.bool&&(t=addBitetyleAttribute(t,t.name)),t}),103),wp.data.subscribe((()=>{(async e=>{e=await(async e=>{const{select:t}=wp.data;let i=e.id,n=e.postType;if(lodash(t)){if(void 0!==t("core/editor")){const o=t("core/editor"),r=t("core/block-editor"),l=o.isAutosavingPost(),s=o.isSavingNonPostEntityChanges();e.hasBlocks=r.getBlocks().length>0,(o.isSavingPost()||l||s)&&(e.isSaving=!0);const a=o.getCurrentPostId(),c=o.getCurrentPostType();a&&c&&a!==i&&(i=a,n=c)}if(t("core/edit-site")){const e=t("core/edit-site").getEditedPostType(),o=t("core/edit-site").getEditedPostId();"wp_template"===e&&o?(n=e,i=(await Se()({path:`/wp/v2/templates/${o}`})).wp_id):"wp_block"!==e||i&&i===o||(n=e,i=o)}}return i!==e.id&&(e.id=i,e.postType=n),e})(e)})(Ne),(e=>{if(e.isSaving){const t=wp.data.select("core/block-editor").getBlocks(),i=Ce(t),n=JSON.stringify(i.properties);e.content=n,Pe(e),i.reusables.length>0&&(i.reusables.forEach((t=>{Be(t,e)})),_e(e,i.reusables)),e.isSaving=!1}})(Ne),Ne.id&&!Ne.init&&(Ne.init=!0,console.log("Blockbite init, 🍫")),Ne.id&&Ne.init&&Ne.hasBlocks&&(()=>{let e=!1;const t=i=>{i.forEach((i=>{i.isValid||(e=!0),i.innerBlocks.length&&t(i.innerBlocks)}))},i=wp.data.select("core/editor").getEditorBlocks();t(i);const n=document.querySelector(".blockbite__library-modal");e&&!n&&(()=>{const e=document.querySelector(".block-editor");if(e){const t=document.createElement("div");t.classList.add("blockbite__library-modal"),e.append(t),(0,r.createRoot)(document.querySelector(".blockbite__library-modal")).render((0,r.createElement)(Y,null))}})()})()}))}();