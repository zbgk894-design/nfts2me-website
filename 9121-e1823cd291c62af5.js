(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9121],{31:(e,t)=>{let r="[0-9]+",o="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",n="(?:(?![A-Z0-9 $%*+\\-./:]|"+(o=o.replace(/u/g,"\\u"))+")(?:.|[\r\n]))+";t.KANJI=RegExp(o,"g"),t.BYTE_KANJI=RegExp("[^A-Z0-9 $%*+\\-./:]+","g"),t.BYTE=RegExp(n,"g"),t.NUMERIC=RegExp(r,"g"),t.ALPHANUMERIC=RegExp("[A-Z $%*+\\-./:]+","g");let i=RegExp("^"+o+"$"),a=RegExp("^"+r+"$"),s=RegExp("^[A-Z0-9 $%*+\\-./:]+$");t.testKanji=function(e){return i.test(e)},t.testNumeric=function(e){return a.test(e)},t.testAlphanumeric=function(e){return s.test(e)}},5105:(e,t)=>{let r,o=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];t.getSymbolSize=function(e){if(!e)throw Error('"version" cannot be null or undefined');if(e<1||e>40)throw Error('"version" should be in range from 1 to 40');return 4*e+17},t.getSymbolTotalCodewords=function(e){return o[e]},t.getBCHDigit=function(e){let t=0;for(;0!==e;)t++,e>>>=1;return t},t.setToSJISFunction=function(e){if("function"!=typeof e)throw Error('"toSJISFunc" is not a valid function.');r=e},t.isKanjiModeEnabled=function(){return void 0!==r},t.toSJIS=function(e){return r(e)}},6710:(e,t,r)=>{let o=r(36168);t.mul=function(e,t){let r=new Uint8Array(e.length+t.length-1);for(let n=0;n<e.length;n++)for(let i=0;i<t.length;i++)r[n+i]^=o.mul(e[n],t[i]);return r},t.mod=function(e,t){let r=new Uint8Array(e);for(;r.length-t.length>=0;){let e=r[0];for(let n=0;n<t.length;n++)r[n]^=o.mul(t[n],e);let n=0;for(;n<r.length&&0===r[n];)n++;r=r.slice(n)}return r},t.generateECPolynomial=function(e){let r=new Uint8Array([1]);for(let n=0;n<e;n++)r=t.mul(r,new Uint8Array([1,o.exp(n)]));return r}},9480:(e,t,r)=>{let o=r(5105),n=r(80737),i=r(73986),a=r(13099),s=r(11637),l=o.getBCHDigit(7973);function c(e,t){return a.getCharCountIndicator(e,t)+4}t.from=function(e,t){return s.isValid(e)?parseInt(e,10):t},t.getCapacity=function(e,t,r){if(!s.isValid(e))throw Error("Invalid QR Code version");void 0===r&&(r=a.BYTE);let i=(o.getSymbolTotalCodewords(e)-n.getTotalCodewordsCount(e,t))*8;if(r===a.MIXED)return i;let l=i-c(r,e);switch(r){case a.NUMERIC:return Math.floor(l/10*3);case a.ALPHANUMERIC:return Math.floor(l/11*2);case a.KANJI:return Math.floor(l/13);case a.BYTE:default:return Math.floor(l/8)}},t.getBestVersionForData=function(e,r){let o,n=i.from(r,i.M);if(Array.isArray(e)){if(e.length>1){for(let r=1;r<=40;r++)if(function(e,t){let r=0;return e.forEach(function(e){let o=c(e.mode,t);r+=o+e.getBitsLength()}),r}(e,r)<=t.getCapacity(r,n,a.MIXED))return r;return}if(0===e.length)return 1;o=e[0]}else o=e;return function(e,r,o){for(let n=1;n<=40;n++)if(r<=t.getCapacity(n,o,e))return n}(o.mode,o.getLength(),n)},t.getEncodedBits=function(e){if(!s.isValid(e)||e<7)throw Error("Invalid QR Code version");let t=e<<12;for(;o.getBCHDigit(t)-l>=0;)t^=7973<<o.getBCHDigit(t)-l;return e<<12|t}},11386:(e,t,r)=>{let o=r(13099);function n(e){this.mode=o.NUMERIC,this.data=e.toString()}n.getBitsLength=function(e){return 10*Math.floor(e/3)+(e%3?e%3*3+1:0)},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){let t,r;for(t=0;t+3<=this.data.length;t+=3)r=parseInt(this.data.substr(t,3),10),e.put(r,10);let o=this.data.length-t;o>0&&(r=parseInt(this.data.substr(t),10),e.put(r,3*o+1))},e.exports=n},11637:(e,t)=>{t.isValid=function(e){return!isNaN(e)&&e>=1&&e<=40}},13020:e=>{"use strict";var t={single_source_shortest_paths:function(e,r,o){var n,i,a,s,l,c,u,p={},d={};d[r]=0;var f=t.PriorityQueue.make();for(f.push(r,0);!f.empty();)for(a in i=(n=f.pop()).value,s=n.cost,l=e[i]||{})l.hasOwnProperty(a)&&(c=s+l[a],u=d[a],(void 0===d[a]||u>c)&&(d[a]=c,f.push(a,c),p[a]=i));if(void 0!==o&&void 0===d[o])throw Error("Could not find a path from "+r+" to "+o+".");return p},extract_shortest_path_from_predecessor_list:function(e,t){for(var r=[],o=t;o;)r.push(o),e[o],o=e[o];return r.reverse(),r},find_path:function(e,r,o){var n=t.single_source_shortest_paths(e,r,o);return t.extract_shortest_path_from_predecessor_list(n,o)},PriorityQueue:{make:function(e){var r,o=t.PriorityQueue,n={};for(r in e=e||{},o)o.hasOwnProperty(r)&&(n[r]=o[r]);return n.queue=[],n.sorter=e.sorter||o.default_sorter,n},default_sorter:function(e,t){return e.cost-t.cost},push:function(e,t){this.queue.push({value:e,cost:t}),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return 0===this.queue.length}}};e.exports=t},13099:(e,t,r)=>{let o=r(11637),n=r(31);t.NUMERIC={id:"Numeric",bit:1,ccBits:[10,12,14]},t.ALPHANUMERIC={id:"Alphanumeric",bit:2,ccBits:[9,11,13]},t.BYTE={id:"Byte",bit:4,ccBits:[8,16,16]},t.KANJI={id:"Kanji",bit:8,ccBits:[8,10,12]},t.MIXED={bit:-1},t.getCharCountIndicator=function(e,t){if(!e.ccBits)throw Error("Invalid mode: "+e);if(!o.isValid(t))throw Error("Invalid version: "+t);return t>=1&&t<10?e.ccBits[0]:t<27?e.ccBits[1]:e.ccBits[2]},t.getBestModeForData=function(e){return n.testNumeric(e)?t.NUMERIC:n.testAlphanumeric(e)?t.ALPHANUMERIC:n.testKanji(e)?t.KANJI:t.BYTE},t.toString=function(e){if(e&&e.id)return e.id;throw Error("Invalid mode")},t.isValid=function(e){return e&&e.bit&&e.ccBits},t.from=function(e,r){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"numeric":return t.NUMERIC;case"alphanumeric":return t.ALPHANUMERIC;case"kanji":return t.KANJI;case"byte":return t.BYTE;default:throw Error("Unknown mode: "+e)}}catch(e){return r}}},15889:(e,t,r)=>{"use strict";r.d(t,{UE:()=>O,ll:()=>T,rD:()=>B,__:()=>A,UU:()=>R,cY:()=>W,BN:()=>S,Ej:()=>I});var o=r(16926);function n(e,t,r){let n,{reference:i,floating:a}=e,s=(0,o.TV)(t),l=(0,o.Dz)(t),c=(0,o.sq)(l),u=(0,o.C0)(t),p="y"===s,d=i.x+i.width/2-a.width/2,f=i.y+i.height/2-a.height/2,h=i[c]/2-a[c]/2;switch(u){case"top":n={x:d,y:i.y-a.height};break;case"bottom":n={x:d,y:i.y+i.height};break;case"right":n={x:i.x+i.width,y:f};break;case"left":n={x:i.x-a.width,y:f};break;default:n={x:i.x,y:i.y}}switch((0,o.Sg)(t)){case"start":n[l]-=h*(r&&p?-1:1);break;case"end":n[l]+=h*(r&&p?-1:1)}return n}async function i(e,t){var r;void 0===t&&(t={});let{x:n,y:i,platform:a,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:p="viewport",elementContext:d="floating",altBoundary:f=!1,padding:h=0}=(0,o._3)(t,e),m=(0,o.nI)(h),w=l[f?"floating"===d?"reference":"floating":d],y=(0,o.B1)(await a.getClippingRect({element:null==(r=await (null==a.isElement?void 0:a.isElement(w)))||r?w:w.contextElement||await (null==a.getDocumentElement?void 0:a.getDocumentElement(l.floating)),boundary:u,rootBoundary:p,strategy:c})),g="floating"===d?{x:n,y:i,width:s.floating.width,height:s.floating.height}:s.reference,b=await (null==a.getOffsetParent?void 0:a.getOffsetParent(l.floating)),v=await (null==a.isElement?void 0:a.isElement(b))&&await (null==a.getScale?void 0:a.getScale(b))||{x:1,y:1},x=(0,o.B1)(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:g,offsetParent:b,strategy:c}):g);return{top:(y.top-x.top+m.top)/v.y,bottom:(x.bottom-y.bottom+m.bottom)/v.y,left:(y.left-x.left+m.left)/v.x,right:(x.right-y.right+m.right)/v.x}}let a=async(e,t,r)=>{let{placement:o="bottom",strategy:a="absolute",middleware:s=[],platform:l}=r,c=l.detectOverflow?l:{...l,detectOverflow:i},u=await (null==l.isRTL?void 0:l.isRTL(t)),p=await l.getElementRects({reference:e,floating:t,strategy:a}),{x:d,y:f}=n(p,o,u),h=o,m=0,w={};for(let r=0;r<s.length;r++){let i=s[r];if(!i)continue;let{name:y,fn:g}=i,{x:b,y:v,data:x,reset:k}=await g({x:d,y:f,initialPlacement:o,placement:h,strategy:a,middlewareData:w,rects:p,platform:c,elements:{reference:e,floating:t}});d=null!=b?b:d,f=null!=v?v:f,w[y]={...w[y],...x},k&&m<50&&(m++,"object"==typeof k&&(k.placement&&(h=k.placement),k.rects&&(p=!0===k.rects?await l.getElementRects({reference:e,floating:t,strategy:a}):k.rects),{x:d,y:f}=n(p,h,u)),r=-1)}return{x:d,y:f,placement:h,strategy:a,middlewareData:w}},s=new Set(["left","top"]);async function l(e,t){let{placement:r,platform:n,elements:i}=e,a=await (null==n.isRTL?void 0:n.isRTL(i.floating)),l=(0,o.C0)(r),c=(0,o.Sg)(r),u="y"===(0,o.TV)(r),p=s.has(l)?-1:1,d=a&&u?-1:1,f=(0,o._3)(t,e),{mainAxis:h,crossAxis:m,alignmentAxis:w}="number"==typeof f?{mainAxis:f,crossAxis:0,alignmentAxis:null}:{mainAxis:f.mainAxis||0,crossAxis:f.crossAxis||0,alignmentAxis:f.alignmentAxis};return c&&"number"==typeof w&&(m="end"===c?-1*w:w),u?{x:m*d,y:h*p}:{x:h*p,y:m*d}}var c=r(88796);function u(e){let t=(0,c.L9)(e),r=parseFloat(t.width)||0,n=parseFloat(t.height)||0,i=(0,c.sb)(e),a=i?e.offsetWidth:r,s=i?e.offsetHeight:n,l=(0,o.LI)(r)!==a||(0,o.LI)(n)!==s;return l&&(r=a,n=s),{width:r,height:n,$:l}}function p(e){return(0,c.vq)(e)?e:e.contextElement}function d(e){let t=p(e);if(!(0,c.sb)(t))return(0,o.Jx)(1);let r=t.getBoundingClientRect(),{width:n,height:i,$:a}=u(t),s=(a?(0,o.LI)(r.width):r.width)/n,l=(a?(0,o.LI)(r.height):r.height)/i;return s&&Number.isFinite(s)||(s=1),l&&Number.isFinite(l)||(l=1),{x:s,y:l}}let f=(0,o.Jx)(0);function h(e){let t=(0,c.zk)(e);return(0,c.Tc)()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:f}function m(e,t,r,n){var i;void 0===t&&(t=!1),void 0===r&&(r=!1);let a=e.getBoundingClientRect(),s=p(e),l=(0,o.Jx)(1);t&&(n?(0,c.vq)(n)&&(l=d(n)):l=d(e));let u=(void 0===(i=r)&&(i=!1),n&&(!i||n===(0,c.zk)(s))&&i)?h(s):(0,o.Jx)(0),f=(a.left+u.x)/l.x,m=(a.top+u.y)/l.y,w=a.width/l.x,y=a.height/l.y;if(s){let e=(0,c.zk)(s),t=n&&(0,c.vq)(n)?(0,c.zk)(n):n,r=e,o=(0,c._m)(r);for(;o&&n&&t!==r;){let e=d(o),t=o.getBoundingClientRect(),n=(0,c.L9)(o),i=t.left+(o.clientLeft+parseFloat(n.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(n.paddingTop))*e.y;f*=e.x,m*=e.y,w*=e.x,y*=e.y,f+=i,m+=a,r=(0,c.zk)(o),o=(0,c._m)(r)}}return(0,o.B1)({width:w,height:y,x:f,y:m})}function w(e,t){let r=(0,c.CP)(e).scrollLeft;return t?t.left+r:m((0,c.ep)(e)).left+r}function y(e,t){let r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-w(e,r),y:r.top+t.scrollTop}}function g(e,t,r){var n;let i;if("viewport"===t)i=function(e,t){let r=(0,c.zk)(e),o=(0,c.ep)(e),n=r.visualViewport,i=o.clientWidth,a=o.clientHeight,s=0,l=0;if(n){i=n.width,a=n.height;let e=(0,c.Tc)();(!e||e&&"fixed"===t)&&(s=n.offsetLeft,l=n.offsetTop)}let u=w(o);if(u<=0){let e=o.ownerDocument,t=e.body,r=getComputedStyle(t),n="CSS1Compat"===e.compatMode&&parseFloat(r.marginLeft)+parseFloat(r.marginRight)||0,a=Math.abs(o.clientWidth-t.clientWidth-n);a<=25&&(i-=a)}else u<=25&&(i+=u);return{width:i,height:a,x:s,y:l}}(e,r);else if("document"===t){let t,r,a,s,l,u,p;n=(0,c.ep)(e),t=(0,c.ep)(n),r=(0,c.CP)(n),a=n.ownerDocument.body,s=(0,o.T9)(t.scrollWidth,t.clientWidth,a.scrollWidth,a.clientWidth),l=(0,o.T9)(t.scrollHeight,t.clientHeight,a.scrollHeight,a.clientHeight),u=-r.scrollLeft+w(n),p=-r.scrollTop,"rtl"===(0,c.L9)(a).direction&&(u+=(0,o.T9)(t.clientWidth,a.clientWidth)-s),i={width:s,height:l,x:u,y:p}}else if((0,c.vq)(t)){let e,n,a,s,l,u;n=(e=m(t,!0,"fixed"===r)).top+t.clientTop,a=e.left+t.clientLeft,s=(0,c.sb)(t)?d(t):(0,o.Jx)(1),l=t.clientWidth*s.x,u=t.clientHeight*s.y,i={width:l,height:u,x:a*s.x,y:n*s.y}}else{let r=h(e);i={x:t.x-r.x,y:t.y-r.y,width:t.width,height:t.height}}return(0,o.B1)(i)}function b(e){return"static"===(0,c.L9)(e).position}function v(e,t){if(!(0,c.sb)(e)||"fixed"===(0,c.L9)(e).position)return null;if(t)return t(e);let r=e.offsetParent;return(0,c.ep)(e)===r&&(r=r.ownerDocument.body),r}function x(e,t){let r=(0,c.zk)(e);if((0,c.Tf)(e))return r;if(!(0,c.sb)(e)){let t=(0,c.$4)(e);for(;t&&!(0,c.eu)(t);){if((0,c.vq)(t)&&!b(t))return t;t=(0,c.$4)(t)}return r}let o=v(e,t);for(;o&&(0,c.Lv)(o)&&b(o);)o=v(o,t);return o&&(0,c.eu)(o)&&b(o)&&!(0,c.sQ)(o)?r:o||(0,c.gJ)(e)||r}let k=async function(e){let t=this.getOffsetParent||x,r=this.getDimensions,n=await r(e.floating);return{reference:function(e,t,r){let n=(0,c.sb)(t),i=(0,c.ep)(t),a="fixed"===r,s=m(e,!0,a,t),l={scrollLeft:0,scrollTop:0},u=(0,o.Jx)(0);if(n||!n&&!a)if(("body"!==(0,c.mq)(t)||(0,c.ZU)(i))&&(l=(0,c.CP)(t)),n){let e=m(t,!0,a,t);u.x=e.x+t.clientLeft,u.y=e.y+t.clientTop}else i&&(u.x=w(i));a&&!n&&i&&(u.x=w(i));let p=!i||n||a?(0,o.Jx)(0):y(i,l);return{x:s.left+l.scrollLeft-u.x-p.x,y:s.top+l.scrollTop-u.y-p.y,width:s.width,height:s.height}}(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}},C={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:r,offsetParent:n,strategy:i}=e,a="fixed"===i,s=(0,c.ep)(n),l=!!t&&(0,c.Tf)(t.floating);if(n===s||l&&a)return r;let u={scrollLeft:0,scrollTop:0},p=(0,o.Jx)(1),f=(0,o.Jx)(0),h=(0,c.sb)(n);if((h||!h&&!a)&&(("body"!==(0,c.mq)(n)||(0,c.ZU)(s))&&(u=(0,c.CP)(n)),h)){let e=m(n);p=d(n),f.x=e.x+n.clientLeft,f.y=e.y+n.clientTop}let w=!s||h||a?(0,o.Jx)(0):y(s,u);return{width:r.width*p.x,height:r.height*p.y,x:r.x*p.x-u.scrollLeft*p.x+f.x+w.x,y:r.y*p.y-u.scrollTop*p.y+f.y+w.y}},getDocumentElement:c.ep,getClippingRect:function(e){let{element:t,boundary:r,rootBoundary:n,strategy:i}=e,a=[..."clippingAncestors"===r?(0,c.Tf)(t)?[]:function(e,t){let r=t.get(e);if(r)return r;let o=(0,c.v9)(e,[],!1).filter(e=>(0,c.vq)(e)&&"body"!==(0,c.mq)(e)),n=null,i="fixed"===(0,c.L9)(e).position,a=i?(0,c.$4)(e):e;for(;(0,c.vq)(a)&&!(0,c.eu)(a);){let t=(0,c.L9)(a),r=(0,c.sQ)(a);r||"fixed"!==t.position||(n=null),(i?r||n:!(!r&&"static"===t.position&&n&&("absolute"===n.position||"fixed"===n.position)||(0,c.ZU)(a)&&!r&&function e(t,r){let o=(0,c.$4)(t);return!(o===r||!(0,c.vq)(o)||(0,c.eu)(o))&&("fixed"===(0,c.L9)(o).position||e(o,r))}(e,a)))?n=t:o=o.filter(e=>e!==a),a=(0,c.$4)(a)}return t.set(e,o),o}(t,this._c):[].concat(r),n],s=g(t,a[0],i),l=s.top,u=s.right,p=s.bottom,d=s.left;for(let e=1;e<a.length;e++){let r=g(t,a[e],i);l=(0,o.T9)(r.top,l),u=(0,o.jk)(r.right,u),p=(0,o.jk)(r.bottom,p),d=(0,o.T9)(r.left,d)}return{width:u-d,height:p-l,x:d,y:l}},getOffsetParent:x,getElementRects:k,getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){let{width:t,height:r}=u(e);return{width:t,height:r}},getScale:d,isElement:c.vq,isRTL:function(e){return"rtl"===(0,c.L9)(e).direction}};function E(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function T(e,t,r,n){let i;void 0===n&&(n={});let{ancestorScroll:a=!0,ancestorResize:s=!0,elementResize:l="function"==typeof ResizeObserver,layoutShift:u="function"==typeof IntersectionObserver,animationFrame:d=!1}=n,f=p(e),h=a||s?[...f?(0,c.v9)(f):[],...t?(0,c.v9)(t):[]]:[];h.forEach(e=>{a&&e.addEventListener("scroll",r,{passive:!0}),s&&e.addEventListener("resize",r)});let w=f&&u?function(e,t){let r,n=null,i=(0,c.ep)(e);function a(){var e;clearTimeout(r),null==(e=n)||e.disconnect(),n=null}return!function s(l,c){void 0===l&&(l=!1),void 0===c&&(c=1),a();let u=e.getBoundingClientRect(),{left:p,top:d,width:f,height:h}=u;if(l||t(),!f||!h)return;let m={rootMargin:-(0,o.RI)(d)+"px "+-(0,o.RI)(i.clientWidth-(p+f))+"px "+-(0,o.RI)(i.clientHeight-(d+h))+"px "+-(0,o.RI)(p)+"px",threshold:(0,o.T9)(0,(0,o.jk)(1,c))||1},w=!0;function y(t){let o=t[0].intersectionRatio;if(o!==c){if(!w)return s();o?s(!1,o):r=setTimeout(()=>{s(!1,1e-7)},1e3)}1!==o||E(u,e.getBoundingClientRect())||s(),w=!1}try{n=new IntersectionObserver(y,{...m,root:i.ownerDocument})}catch(e){n=new IntersectionObserver(y,m)}n.observe(e)}(!0),a}(f,r):null,y=-1,g=null;l&&(g=new ResizeObserver(e=>{let[o]=e;o&&o.target===f&&g&&t&&(g.unobserve(t),cancelAnimationFrame(y),y=requestAnimationFrame(()=>{var e;null==(e=g)||e.observe(t)})),r()}),f&&!d&&g.observe(f),t&&g.observe(t));let b=d?m(e):null;return d&&function t(){let o=m(e);b&&!E(b,o)&&r(),b=o,i=requestAnimationFrame(t)}(),r(),()=>{var e;h.forEach(e=>{a&&e.removeEventListener("scroll",r),s&&e.removeEventListener("resize",r)}),null==w||w(),null==(e=g)||e.disconnect(),g=null,d&&cancelAnimationFrame(i)}}let A=i,W=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var r,o;let{x:n,y:i,placement:a,middlewareData:s}=t,c=await l(t,e);return a===(null==(r=s.offset)?void 0:r.placement)&&null!=(o=s.arrow)&&o.alignmentOffset?{}:{x:n+c.x,y:i+c.y,data:{...c,placement:a}}}}},S=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){let{x:r,y:n,placement:i,platform:a}=t,{mainAxis:s=!0,crossAxis:l=!1,limiter:c={fn:e=>{let{x:t,y:r}=e;return{x:t,y:r}}},...u}=(0,o._3)(e,t),p={x:r,y:n},d=await a.detectOverflow(t,u),f=(0,o.TV)((0,o.C0)(i)),h=(0,o.PG)(f),m=p[h],w=p[f];if(s){let e="y"===h?"top":"left",t="y"===h?"bottom":"right",r=m+d[e],n=m-d[t];m=(0,o.qE)(r,m,n)}if(l){let e="y"===f?"top":"left",t="y"===f?"bottom":"right",r=w+d[e],n=w-d[t];w=(0,o.qE)(r,w,n)}let y=c.fn({...t,[h]:m,[f]:w});return{...y,data:{x:y.x-r,y:y.y-n,enabled:{[h]:s,[f]:l}}}}}},R=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var r,n,i,a,s;let{placement:l,middlewareData:c,rects:u,initialPlacement:p,platform:d,elements:f}=t,{mainAxis:h=!0,crossAxis:m=!0,fallbackPlacements:w,fallbackStrategy:y="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:b=!0,...v}=(0,o._3)(e,t);if(null!=(r=c.arrow)&&r.alignmentOffset)return{};let x=(0,o.C0)(l),k=(0,o.TV)(p),C=(0,o.C0)(p)===p,E=await (null==d.isRTL?void 0:d.isRTL(f.floating)),T=w||(C||!b?[(0,o.bV)(p)]:(0,o.WJ)(p)),A="none"!==g;!w&&A&&T.push(...(0,o.lP)(p,b,g,E));let W=[p,...T],S=await d.detectOverflow(t,v),R=[],I=(null==(n=c.flip)?void 0:n.overflows)||[];if(h&&R.push(S[x]),m){let e=(0,o.w7)(l,u,E);R.push(S[e[0]],S[e[1]])}if(I=[...I,{placement:l,overflows:R}],!R.every(e=>e<=0)){let e=((null==(i=c.flip)?void 0:i.index)||0)+1,t=W[e];if(t&&("alignment"!==m||k===(0,o.TV)(t)||I.every(e=>(0,o.TV)(e.placement)!==k||e.overflows[0]>0)))return{data:{index:e,overflows:I},reset:{placement:t}};let r=null==(a=I.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0])?void 0:a.placement;if(!r)switch(y){case"bestFit":{let e=null==(s=I.filter(e=>{if(A){let t=(0,o.TV)(e.placement);return t===k||"y"===t}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0])?void 0:s[0];e&&(r=e);break}case"initialPlacement":r=p}if(l!==r)return{reset:{placement:r}}}return{}}}},I=function(e){return void 0===e&&(e={}),{name:"size",options:e,async fn(t){var r,n;let i,a,{placement:s,rects:l,platform:c,elements:u}=t,{apply:p=()=>{},...d}=(0,o._3)(e,t),f=await c.detectOverflow(t,d),h=(0,o.C0)(s),m=(0,o.Sg)(s),w="y"===(0,o.TV)(s),{width:y,height:g}=l.floating;"top"===h||"bottom"===h?(i=h,a=m===(await (null==c.isRTL?void 0:c.isRTL(u.floating))?"start":"end")?"left":"right"):(a=h,i="end"===m?"top":"bottom");let b=g-f.top-f.bottom,v=y-f.left-f.right,x=(0,o.jk)(g-f[i],b),k=(0,o.jk)(y-f[a],v),C=!t.middlewareData.shift,E=x,T=k;if(null!=(r=t.middlewareData.shift)&&r.enabled.x&&(T=v),null!=(n=t.middlewareData.shift)&&n.enabled.y&&(E=b),C&&!m){let e=(0,o.T9)(f.left,0),t=(0,o.T9)(f.right,0),r=(0,o.T9)(f.top,0),n=(0,o.T9)(f.bottom,0);w?T=y-2*(0!==e||0!==t?e+t:(0,o.T9)(f.left,f.right)):E=g-2*(0!==r||0!==n?r+n:(0,o.T9)(f.top,f.bottom))}await p({...t,availableWidth:T,availableHeight:E});let A=await c.getDimensions(u.floating);return y!==A.width||g!==A.height?{reset:{rects:!0}}:{}}}},O=e=>({name:"arrow",options:e,async fn(t){let{x:r,y:n,placement:i,rects:a,platform:s,elements:l,middlewareData:c}=t,{element:u,padding:p=0}=(0,o._3)(e,t)||{};if(null==u)return{};let d=(0,o.nI)(p),f={x:r,y:n},h=(0,o.Dz)(i),m=(0,o.sq)(h),w=await s.getDimensions(u),y="y"===h,g=y?"clientHeight":"clientWidth",b=a.reference[m]+a.reference[h]-f[h]-a.floating[m],v=f[h]-a.reference[h],x=await (null==s.getOffsetParent?void 0:s.getOffsetParent(u)),k=x?x[g]:0;k&&await (null==s.isElement?void 0:s.isElement(x))||(k=l.floating[g]||a.floating[m]);let C=k/2-w[m]/2-1,E=(0,o.jk)(d[y?"top":"left"],C),T=(0,o.jk)(d[y?"bottom":"right"],C),A=k-w[m]-T,W=k/2-w[m]/2+(b/2-v/2),S=(0,o.qE)(E,W,A),R=!c.arrow&&null!=(0,o.Sg)(i)&&W!==S&&a.reference[m]/2-(W<E?E:T)-w[m]/2<0,I=R?W<E?W-E:W-A:0;return{[h]:f[h]+I,data:{[h]:S,centerOffset:W-S-I,...R&&{alignmentOffset:I}},reset:R}}}),B=(e,t,r)=>{let o=new Map,n={platform:C,...r},i={...n.platform,_c:o};return a(e,t,{...n,platform:i})}},16926:(e,t,r)=>{"use strict";r.d(t,{B1:()=>W,C0:()=>p,Dz:()=>w,Jx:()=>s,LI:()=>i,PG:()=>f,RI:()=>a,Sg:()=>d,T9:()=>n,TV:()=>m,WJ:()=>g,_3:()=>u,bV:()=>T,jk:()=>o,lP:()=>E,nI:()=>A,qE:()=>c,sq:()=>h,w7:()=>y});let o=Math.min,n=Math.max,i=Math.round,a=Math.floor,s=e=>({x:e,y:e}),l={left:"right",right:"left",bottom:"top",top:"bottom"};function c(e,t,r){return n(e,o(t,r))}function u(e,t){return"function"==typeof e?e(t):e}function p(e){return e.split("-")[0]}function d(e){return e.split("-")[1]}function f(e){return"x"===e?"y":"x"}function h(e){return"y"===e?"height":"width"}function m(e){let t=e[0];return"t"===t||"b"===t?"y":"x"}function w(e){return f(m(e))}function y(e,t,r){void 0===r&&(r=!1);let o=d(e),n=w(e),i=h(n),a="x"===n?o===(r?"end":"start")?"right":"left":"start"===o?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=T(a)),[a,T(a)]}function g(e){let t=T(e);return[b(e),t,b(t)]}function b(e){return e.includes("start")?e.replace("start","end"):e.replace("end","start")}let v=["left","right"],x=["right","left"],k=["top","bottom"],C=["bottom","top"];function E(e,t,r,o){let n=d(e),i=function(e,t,r){switch(e){case"top":case"bottom":if(r)return t?x:v;return t?v:x;case"left":case"right":return t?k:C;default:return[]}}(p(e),"start"===r,o);return n&&(i=i.map(e=>e+"-"+n),t&&(i=i.concat(i.map(b)))),i}function T(e){let t=p(e);return l[t]+e.slice(t.length)}function A(e){return"number"!=typeof e?{top:0,right:0,bottom:0,left:0,...e}:{top:e,right:e,bottom:e,left:e}}function W(e){let{x:t,y:r,width:o,height:n}=e;return{width:o,height:n,top:r,left:t,right:t+o,bottom:r+n,x:t,y:r}}},17798:(e,t,r)=>{"use strict";r.d(t,{_:()=>c});var o='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',n={rounded:`SFRounded, ui-rounded, "SF Pro Rounded", ${o}`,system:o},i={large:{actionButton:"9999px",connectButton:"12px",modal:"24px",modalMobile:"28px"},medium:{actionButton:"10px",connectButton:"8px",modal:"16px",modalMobile:"18px"},none:{actionButton:"0px",connectButton:"0px",modal:"0px",modalMobile:"0px"},small:{actionButton:"4px",connectButton:"4px",modal:"8px",modalMobile:"8px"}},a={large:{modalOverlay:"blur(20px)"},none:{modalOverlay:"blur(0px)"},small:{modalOverlay:"blur(4px)"}},s={blue:{accentColor:"#0E76FD",accentColorForeground:"#FFF"},green:{accentColor:"#1DB847",accentColorForeground:"#FFF"},orange:{accentColor:"#FF801F",accentColorForeground:"#FFF"},pink:{accentColor:"#FF5CA0",accentColorForeground:"#FFF"},purple:{accentColor:"#5F5AFA",accentColorForeground:"#FFF"},red:{accentColor:"#FA423C",accentColorForeground:"#FFF"}},l=s.blue,c=({accentColor:e=l.accentColor,accentColorForeground:t=l.accentColorForeground,...r}={})=>({...(({borderRadius:e="large",fontStack:t="rounded",overlayBlur:r="none"})=>({blurs:{modalOverlay:a[r].modalOverlay},fonts:{body:n[t]},radii:{actionButton:i[e].actionButton,connectButton:i[e].connectButton,menuButton:i[e].connectButton,modal:i[e].modal,modalMobile:i[e].modalMobile}}))(r),colors:{accentColor:e,accentColorForeground:t,actionButtonBorder:"rgba(0, 0, 0, 0.04)",actionButtonBorderMobile:"rgba(0, 0, 0, 0.06)",actionButtonSecondaryBackground:"rgba(0, 0, 0, 0.06)",closeButton:"rgba(60, 66, 66, 0.8)",closeButtonBackground:"rgba(0, 0, 0, 0.06)",connectButtonBackground:"#FFF",connectButtonBackgroundError:"#FF494A",connectButtonInnerBackground:"linear-gradient(0deg, rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.06))",connectButtonText:"#25292E",connectButtonTextError:"#FFF",connectionIndicator:"#30E000",downloadBottomCardBackground:"linear-gradient(126deg, rgba(255, 255, 255, 0) 9.49%, rgba(171, 171, 171, 0.04) 71.04%), #FFFFFF",downloadTopCardBackground:"linear-gradient(126deg, rgba(171, 171, 171, 0.2) 9.49%, rgba(255, 255, 255, 0) 71.04%), #FFFFFF",error:"#FF494A",generalBorder:"rgba(0, 0, 0, 0.06)",generalBorderDim:"rgba(0, 0, 0, 0.03)",menuItemBackground:"rgba(60, 66, 66, 0.1)",modalBackdrop:"rgba(0, 0, 0, 0.3)",modalBackground:"#FFF",modalBorder:"transparent",modalText:"#25292E",modalTextDim:"rgba(60, 66, 66, 0.3)",modalTextSecondary:"rgba(60, 66, 66, 0.6)",profileAction:"#FFF",profileActionHover:"rgba(255, 255, 255, 0.5)",profileForeground:"rgba(60, 66, 66, 0.06)",selectedOptionBorder:"rgba(60, 66, 66, 0.1)",standby:"#FFD641"},shadows:{connectButton:"0px 4px 12px rgba(0, 0, 0, 0.1)",dialog:"0px 8px 32px rgba(0, 0, 0, 0.32)",profileDetailsAction:"0px 2px 6px rgba(37, 41, 46, 0.04)",selectedOption:"0px 2px 6px rgba(0, 0, 0, 0.24)",selectedWallet:"0px 2px 6px rgba(0, 0, 0, 0.12)",walletLogo:"0px 2px 16px rgba(0, 0, 0, 0.16)"}});c.accentColors=s},17866:(e,t,r)=>{let o=r(5105),n=r(73986),i=r(62428),a=r(28123),s=r(46830),l=r(87015),c=r(49995),u=r(80737),p=r(35115),d=r(9480),f=r(62954),h=r(13099),m=r(98922);function w(e,t,r){let o,n,i=e.size,a=f.getEncodedBits(t,r);for(o=0;o<15;o++)n=(a>>o&1)==1,o<6?e.set(o,8,n,!0):o<8?e.set(o+1,8,n,!0):e.set(i-15+o,8,n,!0),o<8?e.set(8,i-o-1,n,!0):o<9?e.set(8,15-o-1+1,n,!0):e.set(8,15-o-1,n,!0);e.set(i-8,8,1,!0)}t.create=function(e,t){let r,f;if(void 0===e||""===e)throw Error("No input text");let y=n.M;return void 0!==t&&(y=n.from(t.errorCorrectionLevel,n.M),r=d.from(t.version),f=c.from(t.maskPattern),t.toSJISFunc&&o.setToSJISFunction(t.toSJISFunc)),function(e,t,r,n){let f;if(Array.isArray(e))f=m.fromArray(e);else if("string"==typeof e){let o=t;if(!o){let t=m.rawSplit(e);o=d.getBestVersionForData(t,r)}f=m.fromString(e,o||40)}else throw Error("Invalid data");let y=d.getBestVersionForData(f,r);if(!y)throw Error("The amount of data is too big to be stored in a QR Code");if(t){if(t<y)throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: "+y+".\n")}else t=y;let g=function(e,t,r){let n=new i;r.forEach(function(t){n.put(t.mode.bit,4),n.put(t.getLength(),h.getCharCountIndicator(t.mode,e)),t.write(n)});let a=(o.getSymbolTotalCodewords(e)-u.getTotalCodewordsCount(e,t))*8;for(n.getLengthInBits()+4<=a&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(0);let s=(a-n.getLengthInBits())/8;for(let e=0;e<s;e++)n.put(e%2?17:236,8);return function(e,t,r){let n,i,a=o.getSymbolTotalCodewords(t),s=a-u.getTotalCodewordsCount(t,r),l=u.getBlocksCount(t,r),c=a%l,d=l-c,f=Math.floor(a/l),h=Math.floor(s/l),m=h+1,w=f-h,y=new p(w),g=0,b=Array(l),v=Array(l),x=0,k=new Uint8Array(e.buffer);for(let e=0;e<l;e++){let t=e<d?h:m;b[e]=k.slice(g,g+t),v[e]=y.encode(b[e]),g+=t,x=Math.max(x,t)}let C=new Uint8Array(a),E=0;for(n=0;n<x;n++)for(i=0;i<l;i++)n<b[i].length&&(C[E++]=b[i][n]);for(n=0;n<w;n++)for(i=0;i<l;i++)C[E++]=v[i][n];return C}(n,e,t)}(t,r,f),b=new a(o.getSymbolSize(t));!function(e,t){let r=e.size,o=l.getPositions(t);for(let t=0;t<o.length;t++){let n=o[t][0],i=o[t][1];for(let t=-1;t<=7;t++)if(!(n+t<=-1)&&!(r<=n+t))for(let o=-1;o<=7;o++)i+o<=-1||r<=i+o||(t>=0&&t<=6&&(0===o||6===o)||o>=0&&o<=6&&(0===t||6===t)||t>=2&&t<=4&&o>=2&&o<=4?e.set(n+t,i+o,!0,!0):e.set(n+t,i+o,!1,!0))}}(b,t);let v=b.size;for(let e=8;e<v-8;e++){let t=e%2==0;b.set(e,6,t,!0),b.set(6,e,t,!0)}return!function(e,t){let r=s.getPositions(t);for(let t=0;t<r.length;t++){let o=r[t][0],n=r[t][1];for(let t=-2;t<=2;t++)for(let r=-2;r<=2;r++)-2===t||2===t||-2===r||2===r||0===t&&0===r?e.set(o+t,n+r,!0,!0):e.set(o+t,n+r,!1,!0)}}(b,t),w(b,r,0),t>=7&&function(e,t){let r,o,n,i=e.size,a=d.getEncodedBits(t);for(let t=0;t<18;t++)r=Math.floor(t/3),o=t%3+i-8-3,n=(a>>t&1)==1,e.set(r,o,n,!0),e.set(o,r,n,!0)}(b,t),!function(e,t){let r=e.size,o=-1,n=r-1,i=7,a=0;for(let s=r-1;s>0;s-=2)for(6===s&&s--;;){for(let r=0;r<2;r++)if(!e.isReserved(n,s-r)){let o=!1;a<t.length&&(o=(t[a]>>>i&1)==1),e.set(n,s-r,o),-1==--i&&(a++,i=7)}if((n+=o)<0||r<=n){n-=o,o=-o;break}}}(b,g),isNaN(n)&&(n=c.getBestMask(b,w.bind(null,b,r))),c.applyMask(n,b),w(b,r,n),{modules:b,version:t,errorCorrectionLevel:r,maskPattern:n,segments:f}}(e,r,y,f)}},17934:(e,t,r)=>{"use strict";r.d(t,{n:()=>o});var o=`{
  "connect_wallet": {
    "label": "Connect Wallet",
    "wrong_network": {
      "label": "Wrong network"
    }
  },

  "intro": {
    "title": "What is a Wallet?",
    "description": "A wallet is used to send, receive, store, and display digital assets. It's also a new way to log in, without needing to create new accounts and passwords on every website.",
    "digital_asset": {
      "title": "A Home for your Digital Assets",
      "description": "Wallets are used to send, receive, store, and display digital assets like Ethereum and NFTs."
    },
    "login": {
      "title": "A New Way to Log In",
      "description": "Instead of creating new accounts and passwords on every website, just connect your wallet."
    },
    "get": {
      "label": "Get a Wallet"
    },
    "learn_more": {
      "label": "Learn More"
    }
  },

  "sign_in": {
    "label": "Verify your account",
    "description": "To finish connecting, you must sign a message in your wallet to verify that you are the owner of this account.",
    "message": {
      "send": "Sign message",
      "preparing": "Preparing message...",
      "cancel": "Cancel",
      "preparing_error": "Error preparing message, please retry!"
    },
    "signature": {
      "waiting": "Waiting for signature...",
      "verifying": "Verifying signature...",
      "signing_error": "Error signing message, please retry!",
      "verifying_error": "Error verifying signature, please retry!",
      "oops_error": "Oops, something went wrong!"
    }
  },

  "connect": {
    "label": "Connect",
    "title": "Connect a Wallet",
    "new_to_ethereum": {
      "description": "New to Ethereum wallets?",
      "learn_more": {
        "label": "Learn More"
      }
    },
    "learn_more": {
      "label": "Learn more"
    },
    "recent": "Recent",
    "status": {
      "opening": "Opening %{wallet}...",
      "connecting": "Connecting",
      "connect_mobile": "Continue in %{wallet}",
      "not_installed": "%{wallet} is not installed",
      "not_available": "%{wallet} is not available",
      "confirm": "Confirm connection in the extension",
      "confirm_mobile": "Accept connection request in the wallet"
    },
    "secondary_action": {
      "get": {
        "description": "Don't have %{wallet}?",
        "label": "GET"
      },
      "install": {
        "label": "INSTALL"
      },
      "retry": {
        "label": "RETRY"
      }
    },
    "walletconnect": {
      "description": {
        "full": "Need the official WalletConnect modal?",
        "compact": "Need the WalletConnect modal?"
      },
      "open": {
        "label": "OPEN"
      }
    }
  },

  "connect_scan": {
    "title": "Scan with %{wallet}",
    "fallback_title": "Scan with your phone"
  },

  "connector_group": {
    "installed": "Installed",
    "recommended": "Recommended",
    "other": "Other",
    "popular": "Popular",
    "more": "More",
    "others": "Others"
  },

  "get": {
    "title": "Get a Wallet",
    "action": {
      "label": "GET"
    },
    "mobile": {
      "description": "Mobile Wallet"
    },
    "extension": {
      "description": "Browser Extension"
    },
    "mobile_and_extension": {
      "description": "Mobile Wallet and Extension"
    },
    "mobile_and_desktop": {
      "description": "Mobile and Desktop Wallet"
    },
    "looking_for": {
      "title": "Not what you're looking for?",
      "mobile": {
        "description": "Select a wallet on the main screen to get started with a different wallet provider."
      },
      "desktop": {
        "compact_description": "Select a wallet on the main screen to get started with a different wallet provider.",
        "wide_description": "Select a wallet on the left to get started with a different wallet provider."
      }
    }
  },

  "get_options": {
    "title": "Get started with %{wallet}",
    "short_title": "Get %{wallet}",
    "mobile": {
      "title": "%{wallet} for Mobile",
      "description": "Use the mobile wallet to explore the world of Ethereum.",
      "download": {
        "label": "Get the app"
      }
    },
    "extension": {
      "title": "%{wallet} for %{browser}",
      "description": "Access your wallet right from your favorite web browser.",
      "download": {
        "label": "Add to %{browser}"
      }
    },
    "desktop": {
      "title": "%{wallet} for %{platform}",
      "description": "Access your wallet natively from your powerful desktop.",
      "download": {
        "label": "Add to %{platform}"
      }
    }
  },

  "get_mobile": {
    "title": "Install %{wallet}",
    "description": "Scan with your phone to download on iOS or Android",
    "continue": {
      "label": "Continue"
    }
  },

  "get_instructions": {
    "mobile": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "extension": {
      "refresh": {
        "label": "Refresh"
      },
      "learn_more": {
        "label": "Learn More"
      }
    },
    "desktop": {
      "connect": {
        "label": "Connect"
      },
      "learn_more": {
        "label": "Learn More"
      }
    }
  },

  "chains": {
    "title": "Switch Networks",
    "wrong_network": "Wrong network detected, switch or disconnect to continue.",
    "confirm": "Confirm in Wallet",
    "switching_not_supported": "Your wallet does not support switching networks from %{appName}. Try switching networks from within your wallet instead.",
    "switching_not_supported_fallback": "Your wallet does not support switching networks from this app. Try switching networks from within your wallet instead.",
    "disconnect": "Disconnect",
    "connected": "Connected"
  },

  "profile": {
    "disconnect": {
      "label": "Disconnect"
    },
    "copy_address": {
      "label": "Copy Address",
      "copied": "Copied!"
    },
    "explorer": {
      "label": "View more on explorer"
    },
    "transactions": {
      "description": "%{appName} transactions will appear here...",
      "description_fallback": "Your transactions will appear here...",
      "recent": {
        "title": "Recent Transactions"
      },
      "clear": {
        "label": "Clear All"
      }
    }
  },

  "wallet_connectors": {
    "argent": {
      "qr_code": {
        "step1": {
          "description": "Put Argent on your home screen for faster access to your wallet.",
          "title": "Open the Argent app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "berasig": {
      "extension": {
        "step1": {
          "title": "Install the BeraSig extension",
          "description": "We recommend pinning BeraSig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "best": {
      "qr_code": {
        "step1": {
          "title": "Open the Best Wallet app",
          "description": "Add Best Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bifrost": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bifrost Wallet on your home screen for quicker access.",
          "title": "Open the Bifrost Wallet app"
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "bitget": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bitget Wallet on your home screen for quicker access.",
          "title": "Open the Bitget Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Bitget Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitget Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitski": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Bitski to your taskbar for quicker access to your wallet.",
          "title": "Install the Bitski extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "bitverse": {
      "qr_code": {
        "step1": {
          "title": "Open the Bitverse Wallet app",
          "description": "Add Bitverse Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "bloom": {
      "desktop": {
        "step1": {
          "title": "Open the Bloom Wallet app",
          "description": "We recommend putting Bloom Wallet on your home screen for quicker access."
        },
        "step2": {
          "description": "Create or import a wallet using your recovery phrase.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you have a wallet, click on Connect to connect via Bloom. A connection prompt in the app will appear for you to confirm the connection.",
          "title": "Click on Connect"
        }
      }
    },

    "bybit": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Bybit on your home screen for faster access to your wallet.",
          "title": "Open the Bybit app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Bybit Wallet for easy access.",
          "title": "Install the Bybit Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Bybit Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "binance": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Binance on your home screen for faster access to your wallet.",
          "title": "Open the Binance app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "coin98": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coin98 Wallet on your home screen for faster access to your wallet.",
          "title": "Open the Coin98 Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "Click at the top right of your browser and pin Coin98 Wallet for easy access.",
          "title": "Install the Coin98 Wallet extension"
        },
        "step2": {
          "description": "Create a new wallet or import an existing one.",
          "title": "Create or Import a wallet"
        },
        "step3": {
          "description": "Once you set up Coin98 Wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "coinbase": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Coinbase Wallet on your home screen for quicker access.",
          "title": "Open the Coinbase Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Coinbase Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Coinbase Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "compass": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Compass Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Compass Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "core": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Core on your home screen for faster access to your wallet.",
          "title": "Open the Core app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Core to your taskbar for quicker access to your wallet.",
          "title": "Install the Core extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "fox": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting FoxWallet on your home screen for quicker access.",
          "title": "Open the FoxWallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    },

    "frontier": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Frontier Wallet on your home screen for quicker access.",
          "title": "Open the Frontier Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Frontier Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Frontier Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "im_token": {
      "qr_code": {
        "step1": {
          "title": "Open the imToken app",
          "description": "Put imToken app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "iopay": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting ioPay on your home screen for faster access to your wallet.",
          "title": "Open the ioPay app"
        },
        "step2": {
          "description": "You can easily backup your wallet using our backup feature on your phone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the WalletConnect button"
        }
      }
    },

    "kaikas": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaikas to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaikas extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaikas app",
          "description": "Put Kaikas app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kaia": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Kaia to your taskbar for quicker access to your wallet.",
          "title": "Install the Kaia extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Kaia app",
          "description": "Put Kaia app on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap Scanner Icon in top right corner",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "kraken": {
      "qr_code": {
        "step1": {
          "title": "Open the Kraken Wallet app",
          "description": "Add Kraken Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "kresus": {
      "qr_code": {
        "step1": {
          "title": "Open the Kresus Wallet app",
          "description": "Add Kresus Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "magicEden": {
      "extension": {
        "step1": {
          "title": "Install the Magic Eden extension",
          "description": "We recommend pinning Magic Eden to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "metamask": {
      "qr_code": {
        "step1": {
          "title": "Open the MetaMask app",
          "description": "We recommend putting MetaMask on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the MetaMask extension",
          "description": "We recommend pinning MetaMask to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "nestwallet": {
      "extension": {
        "step1": {
          "title": "Install the NestWallet extension",
          "description": "We recommend pinning NestWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "okx": {
      "qr_code": {
        "step1": {
          "title": "Open the OKX Wallet app",
          "description": "We recommend putting OKX Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the OKX Wallet extension",
          "description": "We recommend pinning OKX Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "omni": {
      "qr_code": {
        "step1": {
          "title": "Open the Omni app",
          "description": "Add Omni to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your home screen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "1inch": {
      "qr_code": {
        "step1": {
          "description": "Put 1inch Wallet on your home screen for faster access to your wallet.",
          "title": "Open the 1inch Wallet app"
        },
        "step2": {
          "description": "Create a wallet and username, or import an existing wallet.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "token_pocket": {
      "qr_code": {
        "step1": {
          "title": "Open the TokenPocket app",
          "description": "We recommend putting TokenPocket on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the TokenPocket extension",
          "description": "We recommend pinning TokenPocket to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "trust": {
      "qr_code": {
        "step1": {
          "title": "Open the Trust Wallet app",
          "description": "Put Trust Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Trust Wallet extension",
          "description": "Click at the top right of your browser and pin Trust Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up Trust Wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "uniswap": {
      "qr_code": {
        "step1": {
          "title": "Open the Uniswap app",
          "description": "Add Uniswap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "zerion": {
      "qr_code": {
        "step1": {
          "title": "Open the Zerion app",
          "description": "We recommend putting Zerion on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },

      "extension": {
        "step1": {
          "title": "Install the Zerion extension",
          "description": "We recommend pinning Zerion to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rainbow": {
      "qr_code": {
        "step1": {
          "title": "Open the Rainbow app",
          "description": "We recommend putting Rainbow on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "You can easily backup your wallet using our backup feature on your phone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "enkrypt": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Enkrypt Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Enkrypt Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "frame": {
      "extension": {
        "step1": {
          "description": "We recommend pinning Frame to your taskbar for quicker access to your wallet.",
          "title": "Install Frame & the companion extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "one_key": {
      "extension": {
        "step1": {
          "title": "Install the OneKey Wallet extension",
          "description": "We recommend pinning OneKey Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "paraswap": {
      "qr_code": {
        "step1": {
          "title": "Open the ParaSwap app",
          "description": "Add ParaSwap Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      }
    },

    "phantom": {
      "extension": {
        "step1": {
          "title": "Install the Phantom extension",
          "description": "We recommend pinning Phantom to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "rabby": {
      "extension": {
        "step1": {
          "title": "Install the Rabby extension",
          "description": "We recommend pinning Rabby to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "ronin": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting Ronin Wallet on your home screen for quicker access.",
          "title": "Open the Ronin Wallet app"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      },

      "extension": {
        "step1": {
          "description": "We recommend pinning Ronin Wallet to your taskbar for quicker access to your wallet.",
          "title": "Install the Ronin Wallet extension"
        },
        "step2": {
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension.",
          "title": "Refresh your browser"
        }
      }
    },

    "ramper": {
      "extension": {
        "step1": {
          "title": "Install the Ramper extension",
          "description": "We recommend pinning Ramper to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safeheron": {
      "extension": {
        "step1": {
          "title": "Install the Core extension",
          "description": "We recommend pinning Safeheron to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "taho": {
      "extension": {
        "step1": {
          "title": "Install the Taho extension",
          "description": "We recommend pinning Taho to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "wigwam": {
      "extension": {
        "step1": {
          "title": "Install the Wigwam extension",
          "description": "We recommend pinning Wigwam to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "talisman": {
      "extension": {
        "step1": {
          "title": "Install the Talisman extension",
          "description": "We recommend pinning Talisman to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import an Ethereum Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xdefi": {
      "extension": {
        "step1": {
          "title": "Install the XDEFI Wallet extension",
          "description": "We recommend pinning XDEFI Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "zeal": {
      "qr_code": {
        "step1": {
          "title": "Open the Zeal app",
          "description": "Add Zeal Wallet to your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the QR icon and scan",
          "description": "Tap the QR icon on your homescreen, scan the code and confirm the prompt to connect."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Zeal extension",
          "description": "We recommend pinning Zeal to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "safepal": {
      "extension": {
        "step1": {
          "title": "Install the SafePal Wallet extension",
          "description": "Click at the top right of your browser and pin SafePal Wallet for easy access."
        },
        "step2": {
          "title": "Create or Import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up SafePal Wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SafePal Wallet app",
          "description": "Put SafePal Wallet on your home screen for faster access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Choose New Connection, then scan the QR code and confirm the prompt to connect."
        }
      }
    },

    "desig": {
      "extension": {
        "step1": {
          "title": "Install the Desig extension",
          "description": "We recommend pinning Desig to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "subwallet": {
      "extension": {
        "step1": {
          "title": "Install the SubWallet extension",
          "description": "We recommend pinning SubWallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the SubWallet app",
          "description": "We recommend putting SubWallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "clv": {
      "extension": {
        "step1": {
          "title": "Install the CLV Wallet extension",
          "description": "We recommend pinning CLV Wallet to your taskbar for quicker access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the CLV Wallet app",
          "description": "We recommend putting CLV Wallet on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret phrase with anyone."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "okto": {
      "qr_code": {
        "step1": {
          "title": "Open the Okto app",
          "description": "Add Okto to your home screen for quick access"
        },
        "step2": {
          "title": "Create an MPC Wallet",
          "description": "Create an account and generate a wallet"
        },
        "step3": {
          "title": "Tap WalletConnect in Settings",
          "description": "Tap the Scan QR icon at the top right and confirm the prompt to connect."
        }
      }
    },

    "ledger": {
      "desktop": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "Set up a new Ledger or connect to an existing one."
        },
        "step3": {
          "title": "Connect",
          "description": "A connection prompt will appear for you to connect your wallet."
        }
      },
      "qr_code": {
        "step1": {
          "title": "Open the Ledger Live app",
          "description": "We recommend putting Ledger Live on your home screen for quicker access."
        },
        "step2": {
          "title": "Set up your Ledger",
          "description": "You can either sync with the desktop app or connect your Ledger."
        },
        "step3": {
          "title": "Scan the code",
          "description": "Tap WalletConnect then Switch to Scanner. After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "valora": {
      "qr_code": {
        "step1": {
          "title": "Open the Valora app",
          "description": "We recommend putting Valora on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or import a wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      }
    },

    "gate": {
      "qr_code": {
        "step1": {
          "title": "Open the Gate app",
          "description": "We recommend putting Gate on your home screen for quicker access."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Create a new wallet or import an existing one."
        },
        "step3": {
          "title": "Tap the scan button",
          "description": "After you scan, a connection prompt will appear for you to connect your wallet."
        }
      },
      "extension": {
        "step1": {
          "title": "Install the Gate extension",
          "description": "We recommend pinning Gate to your taskbar for easier access to your wallet."
        },
        "step2": {
          "title": "Create or Import a Wallet",
          "description": "Be sure to back up your wallet using a secure method. Never share your secret recovery phrase with anyone."
        },
        "step3": {
          "title": "Refresh your browser",
          "description": "Once you set up your wallet, click below to refresh the browser and load up the extension."
        }
      }
    },

    "xportal": {
      "qr_code": {
        "step1": {
          "description": "Put xPortal on your home screen for faster access to your wallet.",
          "title": "Open the xPortal app"
        },
        "step2": {
          "description": "Create a wallet or import an existing one.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the Scan QR button"
        }
      }
    },

    "mew": {
      "qr_code": {
        "step1": {
          "description": "We recommend putting MEW Wallet on your home screen for quicker access.",
          "title": "Open the MEW Wallet app"
        },
        "step2": {
          "description": "You can easily backup your wallet using the cloud backup feature.",
          "title": "Create or Import a Wallet"
        },
        "step3": {
          "description": "After you scan, a connection prompt will appear for you to connect your wallet.",
          "title": "Tap the scan button"
        }
      }
    }
  },

  "zilpay": {
    "qr_code": {
      "step1": {
        "title": "Open the ZilPay app",
        "description": "Add ZilPay to your home screen for faster access to your wallet."
      },
      "step2": {
        "title": "Create or Import a Wallet",
        "description": "Create a new wallet or import an existing one."
      },
      "step3": {
        "title": "Tap the scan button",
        "description": "After you scan, a connection prompt will appear for you to connect your wallet."
      }
    }
  }
}
`},18306:(e,t,r)=>{"use strict";e.exports=r(84406)},19941:(e,t,r)=>{"use strict";function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach(function(t){!function(e,t,r){var o;(t="symbol"==typeof(o=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!=typeof o)return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(t,"string"))?o:String(o))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}r.d(t,{U:()=>a});var i=e=>e,a=function(){return function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var o=Object.assign({},...t.map(e=>e.styles)),a=Object.keys(o),s=a.filter(e=>"mappings"in o[e]);return Object.assign(e=>{var t=[],r={},a=n({},e),l=!1;for(var c of s){var u=e[c];if(null!=u)for(var p of(l=!0,o[c].mappings))r[p]=u,null==a[p]&&delete a[p]}var d=l?n(n({},r),a):e;for(var f in d)if(function(){var e=d[f],r=o[f];try{if(r.mappings)return 1;if("string"==typeof e||"number"==typeof e)t.push(r.values[e].defaultClass);else if(Array.isArray(e))for(var n=0;n<e.length;n++){var i=e[n];if(null!=i){var a=r.responsiveArray[n];t.push(r.values[i].conditions[a])}}else for(var s in e){var l=e[s];null!=l&&t.push(r.values[l].conditions[s])}}catch(e){throw e}}())continue;return i(t.join(" "))},{properties:new Set(a)})}(...arguments)}},20029:(e,t)=>{function r(e){if("number"==typeof e&&(e=e.toString()),"string"!=typeof e)throw Error("Color should be defined as hex string");let t=e.slice().replace("#","").split("");if(t.length<3||5===t.length||t.length>8)throw Error("Invalid hex color: "+e);(3===t.length||4===t.length)&&(t=Array.prototype.concat.apply([],t.map(function(e){return[e,e]}))),6===t.length&&t.push("F","F");let r=parseInt(t.join(""),16);return{r:r>>24&255,g:r>>16&255,b:r>>8&255,a:255&r,hex:"#"+t.slice(0,6).join("")}}t.getOptions=function(e){e||(e={}),e.color||(e.color={});let t=void 0===e.margin||null===e.margin||e.margin<0?4:e.margin,o=e.width&&e.width>=21?e.width:void 0,n=e.scale||4;return{width:o,scale:o?4:n,margin:t,color:{dark:r(e.color.dark||"#000000ff"),light:r(e.color.light||"#ffffffff")},type:e.type,rendererOpts:e.rendererOpts||{}}},t.getScale=function(e,t){return t.width&&t.width>=e+2*t.margin?t.width/(e+2*t.margin):t.scale},t.getImageWidth=function(e,r){let o=t.getScale(e,r);return Math.floor((e+2*r.margin)*o)},t.qrToImageData=function(e,r,o){let n=r.modules.size,i=r.modules.data,a=t.getScale(n,o),s=Math.floor((n+2*o.margin)*a),l=o.margin*a,c=[o.color.light,o.color.dark];for(let t=0;t<s;t++)for(let r=0;r<s;r++){let u=(t*s+r)*4,p=o.color.light;t>=l&&r>=l&&t<s-l&&r<s-l&&(p=c[+!!i[Math.floor((t-l)/a)*n+Math.floor((r-l)/a)]]),e[u++]=p.r,e[u++]=p.g,e[u++]=p.b,e[u]=p.a}}},28123:e=>{function t(e){if(!e||e<1)throw Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}t.prototype.set=function(e,t,r,o){let n=e*this.size+t;this.data[n]=r,o&&(this.reservedBit[n]=!0)},t.prototype.get=function(e,t){return this.data[e*this.size+t]},t.prototype.xor=function(e,t,r){this.data[e*this.size+t]^=r},t.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]},e.exports=t},31834:(e,t,r)=>{"use strict";r.d(t,{A:()=>u});var o=r(62544),n={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function i(e){if("number"==typeof e)return{value:e,unit:"px"};var t,r=(e.match(/^[0-9.]*/)||"").toString();t=r.includes(".")?parseFloat(r):parseInt(r,10);var o=(e.match(/[^0-9]*$/)||"").toString();return n[o]?{value:t,unit:o}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}function a(e){var t=i(e);return"".concat(t.value).concat(t.unit)}var s=function(){return(s=Object.assign||function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},l=function(e,t){var r={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&0>t.indexOf(o)&&(r[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var n=0,o=Object.getOwnPropertySymbols(e);n<o.length;n++)0>t.indexOf(o[n])&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(r[o[n]]=e[o[n]]);return r},c=function(e,t,r){var o="react-spinners-".concat(e,"-").concat(r);if("u"<typeof window||!window.document)return o;var n=document.createElement("style");document.head.appendChild(n);var i=n.sheet,a="\n    @keyframes ".concat(o," {\n      ").concat(t,"\n    }\n  ");return i&&i.insertRule(a,0),o}("CircleLoader","0% {transform: rotate(0deg)} 50% {transform: rotate(180deg)} 100% {transform: rotate(360deg)}","circle");let u=function(e){var t=e.loading,r=e.color,n=void 0===r?"#000000":r,u=e.speedMultiplier,p=void 0===u?1:u,d=e.cssOverride,f=e.size,h=void 0===f?50:f,m=l(e,["loading","color","speedMultiplier","cssOverride","size"]),w=s({display:"inherit",position:"relative",width:a(h),height:a(h)},void 0===d?{}:d),y=function(e){var t=i(h),r=t.value,o=t.unit;return{position:"absolute",height:"".concat(r*(1-e/10)).concat(o),width:"".concat(r*(1-e/10)).concat(o),borderTop:"1px solid ".concat(n),borderBottom:"none",borderLeft:"1px solid ".concat(n),borderRight:"none",borderRadius:"100%",transition:"2s",top:"".concat(.7*e*2.5,"%"),left:"".concat(.35*e*2.5,"%"),animation:"".concat(c," ").concat(1/p,"s ").concat(.2*e/p,"s infinite linear")}};return void 0===t||t?o.createElement("span",s({style:w},m),o.createElement("span",{style:y(0)}),o.createElement("span",{style:y(1)}),o.createElement("span",{style:y(2)}),o.createElement("span",{style:y(3)}),o.createElement("span",{style:y(4)})):null}},33022:(e,t,r)=>{"use strict";r.d(t,{RS:()=>P,gR:()=>_,N:()=>ee,yV:()=>et,YE:()=>F,nd:()=>j,vF:()=>G,CM:()=>function e(t,r,o){return void 0===o&&(o=!0),t.filter(e=>{var t;return e.parentId===r&&(!o||(null==(t=e.context)?void 0:t.open))}).flatMap(r=>[r,...e(t,r.id,o)])},XJ:()=>Z,EW:()=>M,F2:()=>L,cX:()=>B,Go:()=>z,Qp:()=>X,O_:()=>U,tZ:()=>q,nr:()=>O,$u:()=>D,em:()=>$,Jt:()=>K,SE:()=>H,OS:()=>V});var o=r(88796),n=r(62544),i=r.t(n,2),a='input:not([inert]):not([inert] *),select:not([inert]):not([inert] *),textarea:not([inert]):not([inert] *),a[href]:not([inert]):not([inert] *),button:not([inert]):not([inert] *),[tabindex]:not(slot):not([inert]):not([inert] *),audio[controls]:not([inert]):not([inert] *),video[controls]:not([inert]):not([inert] *),[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *),details>summary:first-of-type:not([inert]):not([inert] *),details:not([inert]):not([inert] *)',s="u"<typeof Element,l=s?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,c=!s&&Element.prototype.getRootNode?function(e){var t;return null==e||null==(t=e.getRootNode)?void 0:t.call(e)}:function(e){return null==e?void 0:e.ownerDocument},u=function(e,t){void 0===t&&(t=!0);var r,o=null==e||null==(r=e.getAttribute)?void 0:r.call(e,"inert");return""===o||"true"===o||t&&e&&("function"==typeof e.closest?e.closest("[inert]"):u(e.parentNode))},p=function(e){var t,r=null==e||null==(t=e.getAttribute)?void 0:t.call(e,"contenteditable");return""===r||"true"===r},d=function(e,t,r){if(u(e))return[];var o=Array.prototype.slice.apply(e.querySelectorAll(a));return t&&l.call(e,a)&&o.unshift(e),o=o.filter(r)},f=function(e,t,r){for(var o=[],n=Array.from(e);n.length;){var i=n.shift();if(!u(i,!1))if("SLOT"===i.tagName){var s=i.assignedElements(),c=f(s.length?s:i.children,!0,r);r.flatten?o.push.apply(o,c):o.push({scopeParent:i,candidates:c})}else{l.call(i,a)&&r.filter(i)&&(t||!e.includes(i))&&o.push(i);var p=i.shadowRoot||"function"==typeof r.getShadowRoot&&r.getShadowRoot(i),d=!u(p,!1)&&(!r.shadowRootFilter||r.shadowRootFilter(i));if(p&&d){var h=f(!0===p?i.children:p.children,!0,r);r.flatten?o.push.apply(o,h):o.push({scopeParent:i,candidates:h})}else n.unshift.apply(n,i.children)}}return o},h=function(e){return!isNaN(parseInt(e.getAttribute("tabindex"),10))},m=function(e){if(!e)throw Error("No node provided");return e.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName)||p(e))&&!h(e)?0:e.tabIndex},w=function(e,t){var r=m(e);return r<0&&t&&!h(e)?0:r},y=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},g=function(e){return"INPUT"===e.tagName},b=function(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]},v=function(e){if(!e.name)return!0;var t,r=e.form||c(e),o=function(e){return r.querySelectorAll('input[type="radio"][name="'+e+'"]')};if("u">typeof window&&void 0!==window.CSS&&"function"==typeof window.CSS.escape)t=o(window.CSS.escape(e.name));else try{t=o(e.name)}catch(e){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",e.message),!1}var n=b(t,e.form);return!n||n===e},x=function(e){return g(e)&&"radio"===e.type&&!v(e)},k=function(e){var t,r,o,n,i,a,s,l=e&&c(e),u=null==(t=l)?void 0:t.host,p=!1;if(l&&l!==e)for(p=!!(null!=(r=u)&&null!=(o=r.ownerDocument)&&o.contains(u)||null!=e&&null!=(n=e.ownerDocument)&&n.contains(e));!p&&u;)p=!!(null!=(a=u=null==(i=l=c(u))?void 0:i.host)&&null!=(s=a.ownerDocument)&&s.contains(u));return p},C=function(e){var t=e.getBoundingClientRect(),r=t.width,o=t.height;return 0===r&&0===o},E=function(e,t){var r=t.displayCheck,o=t.getShadowRoot;if("full-native"===r&&"checkVisibility"in e)return!e.checkVisibility({checkOpacity:!1,opacityProperty:!1,contentVisibilityAuto:!0,visibilityProperty:!0,checkVisibilityCSS:!0});if("hidden"===getComputedStyle(e).visibility)return!0;var n=l.call(e,"details>summary:first-of-type")?e.parentElement:e;if(l.call(n,"details:not([open]) *"))return!0;if(r&&"full"!==r&&"full-native"!==r&&"legacy-full"!==r){if("non-zero-area"===r)return C(e)}else{if("function"==typeof o){for(var i=e;e;){var a=e.parentElement,s=c(e);if(a&&!a.shadowRoot&&!0===o(a))return C(e);e=e.assignedSlot?e.assignedSlot:a||s===e.ownerDocument?a:s.host}e=i}if(k(e))return!e.getClientRects().length;if("legacy-full"!==r)return!0}return!1},T=function(e){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))for(var t=e.parentElement;t;){if("FIELDSET"===t.tagName&&t.disabled){for(var r=0;r<t.children.length;r++){var o=t.children.item(r);if("LEGEND"===o.tagName)return!!l.call(t,"fieldset[disabled] *")||!o.contains(e)}return!0}t=t.parentElement}return!1},A=function(e,t){return!(t.disabled||g(t)&&"hidden"===t.type||E(t,e)||"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(e){return"SUMMARY"===e.tagName})||T(t))},W=function(e,t){return!(x(t)||0>m(t))&&!!A(e,t)},S=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return!!isNaN(t)||!!(t>=0)},R=function(e){var t=[],r=[];return e.forEach(function(e,o){var n=!!e.scopeParent,i=n?e.scopeParent:e,a=w(i,n),s=n?R(e.candidates):i;0===a?n?t.push.apply(t,s):t.push(i):r.push({documentOrder:o,tabIndex:a,item:e,isScope:n,content:s})}),r.sort(y).reduce(function(e,t){return t.isScope?e.push.apply(e,t.content):e.push(t.content),e},[]).concat(t)},I=function(e,t){return R((t=t||{}).getShadowRoot?f([e],t.includeContainer,{filter:W.bind(null,t),flatten:!1,getShadowRoot:t.getShadowRoot,shadowRootFilter:S}):d(e,t.includeContainer,W.bind(null,t)))};function O(){return/apple/i.test(navigator.vendor)}function B(){let e;return(null!=(e=navigator.userAgentData)&&e.platform?e.platform:navigator.platform).toLowerCase().startsWith("mac")&&!navigator.maxTouchPoints}let N="data-floating-ui-focusable";function P(e){let t=e.activeElement;for(;(null==(r=t)||null==(r=r.shadowRoot)?void 0:r.activeElement)!=null;){var r;t=t.shadowRoot.activeElement}return t}function _(e,t){if(!e||!t)return!1;let r=null==t.getRootNode?void 0:t.getRootNode();if(e.contains(t))return!0;if(r&&(0,o.Ng)(r)){let r=t;for(;r;){if(e===r)return!0;r=r.parentNode||r.host}}return!1}function M(e){return"composedPath"in e?e.composedPath()[0]:e.target}function L(e,t){return null!=t&&("composedPath"in e?e.composedPath().includes(t):null!=e.target&&t.contains(e.target))}function q(e){return e.matches("html,body")}function F(e){return(null==e?void 0:e.ownerDocument)||document}function D(e){return(0,o.sb)(e)&&e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")}function $(e){let t;if(!e||((t=navigator.userAgentData)&&Array.isArray(t.brands)?t.brands.map(e=>{let{brand:t,version:r}=e;return t+"/"+r}).join(" "):navigator.userAgent).includes("jsdom/"))return!0;try{return e.matches(":focus-visible")}catch(e){return!0}}function j(e){return e?e.hasAttribute(N)?e:e.querySelector("["+N+"]")||e:null}function U(e){return"nativeEvent"in e}function z(e,t){let r=["mouse","pen"];return t||r.push("",void 0),r.includes(e)}var V="u">typeof document?n.useLayoutEffect:function(){};function H(e){let t=n.useRef(e);return V(()=>{t.current=e}),t}let Y={...i}.useInsertionEffect||(e=>e());function K(e){let t=n.useRef(()=>{});return Y(()=>{t.current=e}),n.useCallback(function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return null==t.current?void 0:t.current(...r)},[])}let Q=()=>({getShadowRoot:!0,displayCheck:"function"==typeof ResizeObserver&&ResizeObserver.toString().includes("[native code]")?"full":"none"});function J(e,t){let r=I(e,Q()),o=r.length;if(0===o)return;let n=P(F(e)),i=r.indexOf(n);return r[-1===i?1===t?0:o-1:i+t]}function G(e){return J(F(e).body,1)||e}function Z(e){return J(F(e).body,-1)||e}function X(e,t){let r=t||e.currentTarget,o=e.relatedTarget;return!o||!_(r,o)}function ee(e){I(e,Q()).forEach(e=>{e.dataset.tabindex=e.getAttribute("tabindex")||"",e.setAttribute("tabindex","-1")})}function et(e){e.querySelectorAll("[data-tabindex]").forEach(e=>{let t=e.dataset.tabindex;delete e.dataset.tabindex,t?e.setAttribute("tabindex",t):e.removeAttribute("tabindex")})}},33833:(e,t,r)=>{let o=r(13099);function n(e){this.mode=o.BYTE,"string"==typeof e?this.data=new TextEncoder().encode(e):this.data=new Uint8Array(e)}n.getBitsLength=function(e){return 8*e},n.prototype.getLength=function(){return this.data.length},n.prototype.getBitsLength=function(){return n.getBitsLength(this.data.length)},n.prototype.write=function(e){for(let t=0,r=this.data.length;t<r;t++)e.put(this.data[t],8)},e.exports=n},35115:(e,t,r)=>{let o=r(6710);function n(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}n.prototype.initialize=function(e){this.degree=e,this.genPoly=o.generateECPolynomial(this.degree)},n.prototype.encode=function(e){if(!this.genPoly)throw Error("Encoder not initialized");let t=new Uint8Array(e.length+this.degree);t.set(e);let r=o.mod(t,this.genPoly),n=this.degree-r.length;if(n>0){let e=new Uint8Array(this.degree);return e.set(r,n),e}return r},e.exports=n},36168:(e,t)=>{let r=new Uint8Array(512),o=new Uint8Array(256),n=1;for(let e=0;e<255;e++)r[e]=n,o[n]=e,256&(n<<=1)&&(n^=285);for(let e=255;e<512;e++)r[e]=r[e-255];t.log=function(e){if(e<1)throw Error("log("+e+")");return o[e]},t.exp=function(e){return r[e]},t.mul=function(e,t){return 0===e||0===t?0:r[o[e]+o[t]]}},46830:(e,t,r)=>{let o=r(5105).getSymbolSize;t.getRowColCoords=function(e){if(1===e)return[];let t=Math.floor(e/7)+2,r=o(e),n=145===r?26:2*Math.ceil((r-13)/(2*t-2)),i=[r-7];for(let e=1;e<t-1;e++)i[e]=i[e-1]-n;return i.push(6),i.reverse()},t.getPositions=function(e){let r=[],o=t.getRowColCoords(e),n=o.length;for(let e=0;e<n;e++)for(let t=0;t<n;t++)(0!==e||0!==t)&&(0!==e||t!==n-1)&&(e!==n-1||0!==t)&&r.push([o[e],o[t]]);return r}},49995:(e,t)=>{t.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};t.isValid=function(e){return null!=e&&""!==e&&!isNaN(e)&&e>=0&&e<=7},t.from=function(e){return t.isValid(e)?parseInt(e,10):void 0},t.getPenaltyN1=function(e){let t=e.size,r=0,o=0,n=0,i=null,a=null;for(let s=0;s<t;s++){o=n=0,i=a=null;for(let l=0;l<t;l++){let t=e.get(s,l);t===i?o++:(o>=5&&(r+=3+(o-5)),i=t,o=1),(t=e.get(l,s))===a?n++:(n>=5&&(r+=3+(n-5)),a=t,n=1)}o>=5&&(r+=3+(o-5)),n>=5&&(r+=3+(n-5))}return r},t.getPenaltyN2=function(e){let t=e.size,r=0;for(let o=0;o<t-1;o++)for(let n=0;n<t-1;n++){let t=e.get(o,n)+e.get(o,n+1)+e.get(o+1,n)+e.get(o+1,n+1);(4===t||0===t)&&r++}return 3*r},t.getPenaltyN3=function(e){let t=e.size,r=0,o=0,n=0;for(let i=0;i<t;i++){o=n=0;for(let a=0;a<t;a++)o=o<<1&2047|e.get(i,a),a>=10&&(1488===o||93===o)&&r++,n=n<<1&2047|e.get(a,i),a>=10&&(1488===n||93===n)&&r++}return 40*r},t.getPenaltyN4=function(e){let t=0,r=e.data.length;for(let o=0;o<r;o++)t+=e.data[o];return 10*Math.abs(Math.ceil(100*t/r/5)-10)},t.applyMask=function(e,r){let o=r.size;for(let n=0;n<o;n++)for(let i=0;i<o;i++)r.isReserved(i,n)||r.xor(i,n,function(e,r,o){switch(e){case t.Patterns.PATTERN000:return(r+o)%2==0;case t.Patterns.PATTERN001:return r%2==0;case t.Patterns.PATTERN010:return o%3==0;case t.Patterns.PATTERN011:return(r+o)%3==0;case t.Patterns.PATTERN100:return(Math.floor(r/2)+Math.floor(o/3))%2==0;case t.Patterns.PATTERN101:return r*o%2+r*o%3==0;case t.Patterns.PATTERN110:return(r*o%2+r*o%3)%2==0;case t.Patterns.PATTERN111:return(r*o%3+(r+o)%2)%2==0;default:throw Error("bad maskPattern:"+e)}}(e,i,n))},t.getBestMask=function(e,r){let o=Object.keys(t.Patterns).length,n=0,i=1/0;for(let a=0;a<o;a++){r(a),t.applyMask(a,e);let o=t.getPenaltyN1(e)+t.getPenaltyN2(e)+t.getPenaltyN3(e)+t.getPenaltyN4(e);t.applyMask(a,e),o<i&&(i=o,n=a)}return n}},52818:(e,t,r)=>{let o=r(13099),n=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function i(e){this.mode=o.ALPHANUMERIC,this.data=e}i.getBitsLength=function(e){return 11*Math.floor(e/2)+e%2*6},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t+2<=this.data.length;t+=2){let r=45*n.indexOf(this.data[t]);r+=n.indexOf(this.data[t+1]),e.put(r,11)}this.data.length%2&&e.put(n.indexOf(this.data[t]),6)},e.exports=i},55674:e=>{e.exports=function(){return"function"==typeof Promise&&Promise.prototype&&Promise.prototype.then}},58378:(e,t,r)=>{"use strict";r.d(t,{BN:()=>f,Ej:()=>m,UE:()=>w,UU:()=>h,cY:()=>d,we:()=>p});var o=r(15889),n=r(62544),i=r(63672),a="u">typeof document?n.useLayoutEffect:function(){};function s(e,t){let r,o,n;if(e===t)return!0;if(typeof e!=typeof t)return!1;if("function"==typeof e&&e.toString()===t.toString())return!0;if(e&&t&&"object"==typeof e){if(Array.isArray(e)){if((r=e.length)!==t.length)return!1;for(o=r;0!=o--;)if(!s(e[o],t[o]))return!1;return!0}if((r=(n=Object.keys(e)).length)!==Object.keys(t).length)return!1;for(o=r;0!=o--;)if(!({}).hasOwnProperty.call(t,n[o]))return!1;for(o=r;0!=o--;){let r=n[o];if(("_owner"!==r||!e.$$typeof)&&!s(e[r],t[r]))return!1}return!0}return e!=e&&t!=t}function l(e){return"u"<typeof window?1:(e.ownerDocument.defaultView||window).devicePixelRatio||1}function c(e,t){let r=l(e);return Math.round(t*r)/r}function u(e){let t=n.useRef(e);return a(()=>{t.current=e}),t}function p(e){void 0===e&&(e={});let{placement:t="bottom",strategy:r="absolute",middleware:p=[],platform:d,elements:{reference:f,floating:h}={},transform:m=!0,whileElementsMounted:w,open:y}=e,[g,b]=n.useState({x:0,y:0,strategy:r,placement:t,middlewareData:{},isPositioned:!1}),[v,x]=n.useState(p);s(v,p)||x(p);let[k,C]=n.useState(null),[E,T]=n.useState(null),A=n.useCallback(e=>{e!==I.current&&(I.current=e,C(e))},[]),W=n.useCallback(e=>{e!==O.current&&(O.current=e,T(e))},[]),S=f||k,R=h||E,I=n.useRef(null),O=n.useRef(null),B=n.useRef(g),N=null!=w,P=u(w),_=u(d),M=u(y),L=n.useCallback(()=>{if(!I.current||!O.current)return;let e={placement:t,strategy:r,middleware:v};_.current&&(e.platform=_.current),(0,o.rD)(I.current,O.current,e).then(e=>{let t={...e,isPositioned:!1!==M.current};q.current&&!s(B.current,t)&&(B.current=t,i.flushSync(()=>{b(t)}))})},[v,t,r,_,M]);a(()=>{!1===y&&B.current.isPositioned&&(B.current.isPositioned=!1,b(e=>({...e,isPositioned:!1})))},[y]);let q=n.useRef(!1);a(()=>(q.current=!0,()=>{q.current=!1}),[]),a(()=>{if(S&&(I.current=S),R&&(O.current=R),S&&R){if(P.current)return P.current(S,R,L);L()}},[S,R,L,P,N]);let F=n.useMemo(()=>({reference:I,floating:O,setReference:A,setFloating:W}),[A,W]),D=n.useMemo(()=>({reference:S,floating:R}),[S,R]),$=n.useMemo(()=>{let e={position:r,left:0,top:0};if(!D.floating)return e;let t=c(D.floating,g.x),o=c(D.floating,g.y);return m?{...e,transform:"translate("+t+"px, "+o+"px)",...l(D.floating)>=1.5&&{willChange:"transform"}}:{position:r,left:t,top:o}},[r,m,D.floating,g.x,g.y]);return n.useMemo(()=>({...g,update:L,refs:F,elements:D,floatingStyles:$}),[g,L,F,D,$])}let d=(e,t)=>{let r=(0,o.cY)(e);return{name:r.name,fn:r.fn,options:[e,t]}},f=(e,t)=>{let r=(0,o.BN)(e);return{name:r.name,fn:r.fn,options:[e,t]}},h=(e,t)=>{let r=(0,o.UU)(e);return{name:r.name,fn:r.fn,options:[e,t]}},m=(e,t)=>{let r=(0,o.Ej)(e);return{name:r.name,fn:r.fn,options:[e,t]}},w=(e,t)=>{let r={name:"arrow",options:e,fn(t){let{element:r,padding:n}="function"==typeof e?e(t):e;return r&&({}).hasOwnProperty.call(r,"current")?null!=r.current?(0,o.UE)({element:r.current,padding:n}).fn(t):{}:r?(0,o.UE)({element:r,padding:n}).fn(t):{}}};return{name:r.name,fn:r.fn,options:[e,t]}}},58618:(e,t,r)=>{let o=r(13099),n=r(5105);function i(e){this.mode=o.KANJI,this.data=e}i.getBitsLength=function(e){return 13*e},i.prototype.getLength=function(){return this.data.length},i.prototype.getBitsLength=function(){return i.getBitsLength(this.data.length)},i.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let r=n.toSJIS(this.data[t]);if(r>=33088&&r<=40956)r-=33088;else if(r>=57408&&r<=60351)r-=49472;else throw Error("Invalid SJIS character: "+this.data[t]+"\nMake sure your charset is UTF-8");r=(r>>>8&255)*192+(255&r),e.put(r,13)}},e.exports=i},61077:(e,t,r)=>{"use strict";r.d(t,{A:()=>z});var o=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)==0&&this._insertTag(((t=document.createElement("style")).setAttribute("data-emotion",this.key),void 0!==this.nonce&&t.setAttribute("nonce",this.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t));var t,r=this.tags[this.tags.length-1];if(this.isSpeedy){var o=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(r);try{o.insertRule(e,o.cssRules.length)}catch(e){}}else r.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach(function(e){var t;return null==(t=e.parentNode)?void 0:t.removeChild(e)}),this.tags=[],this.ctr=0},e}(),n=Math.abs,i=String.fromCharCode,a=Object.assign;function s(e,t,r){return e.replace(t,r)}function l(e,t){return e.indexOf(t)}function c(e,t){return 0|e.charCodeAt(t)}function u(e,t,r){return e.slice(t,r)}function p(e){return e.length}function d(e,t){return t.push(e),e}var f=1,h=1,m=0,w=0,y=0,g="";function b(e,t,r,o,n,i,a){return{value:e,root:t,parent:r,type:o,props:n,children:i,line:f,column:h,length:a,return:""}}function v(e,t){return a(b("",null,null,"",null,null,0),e,{length:-e.length},t)}function x(){return y=w<m?c(g,w++):0,h++,10===y&&(h=1,f++),y}function k(){return c(g,w)}function C(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){return f=h=1,m=p(g=e),w=0,[]}function T(e){var t,r;return(t=w-1,r=function e(t){for(;x();)switch(y){case t:return w;case 34:case 39:34!==t&&39!==t&&e(y);break;case 40:41===t&&e(t);break;case 92:x()}return w}(91===e?e+2:40===e?e+1:e),u(g,t,r)).trim()}var A="-ms-",W="-moz-",S="-webkit-",R="comm",I="rule",O="decl",B="@keyframes";function N(e,t){for(var r="",o=e.length,n=0;n<o;n++)r+=t(e[n],n,e,t)||"";return r}function P(e,t,r,o){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case O:return e.return=e.return||e.value;case R:return"";case B:return e.return=e.value+"{"+N(e.children,o)+"}";case I:e.value=e.props.join(",")}return p(r=N(e.children,o))?e.return=e.value+"{"+r+"}":""}function _(e,t,r,o,i,a,l,c,p,d,f){for(var h=i-1,m=0===i?a:[""],w=m.length,y=0,g=0,v=0;y<o;++y)for(var x=0,k=u(e,h+1,h=n(g=l[y])),C=e;x<w;++x)(C=(g>0?m[x]+" "+k:s(k,/&\f/g,m[x])).trim())&&(p[v++]=C);return b(e,t,r,0===i?I:c,p,d,f)}function M(e,t,r,o){return b(e,t,r,O,u(e,0,o),u(e,o+1,-1),o)}var L=function(e,t,r){for(var o=0,n=0;o=n,n=k(),38===o&&12===n&&(t[r]=1),!C(n);)x();return u(g,e,w)},q=function(e,t){var r=-1,o=44;do switch(C(o)){case 0:38===o&&12===k()&&(t[r]=1),e[r]+=L(w-1,t,r);break;case 2:e[r]+=T(o);break;case 4:if(44===o){e[++r]=58===k()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=i(o)}while(o=x());return e},F=function(e,t){var r;return r=q(E(e),t),g="",r},D=new WeakMap,$=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,o=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||D.get(r))&&!o){D.set(e,!0);for(var n=[],i=F(t,n),a=r.props,s=0,l=0;s<i.length;s++)for(var c=0;c<a.length;c++,l++)e.props[l]=n[s]?i[s].replace(/&\f/g,a[c]):a[c]+" "+i[s]}}},j=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},U=[function(e,t,r,o){if(e.length>-1&&!e.return)switch(e.type){case O:e.return=function e(t,r){switch(45^c(t,0)?(((r<<2^c(t,0))<<2^c(t,1))<<2^c(t,2))<<2^c(t,3):0){case 5103:return S+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return S+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return S+t+W+t+A+t+t;case 6828:case 4268:return S+t+A+t+t;case 6165:return S+t+A+"flex-"+t+t;case 5187:return S+t+s(t,/(\w+).+(:[^]+)/,S+"box-$1$2"+A+"flex-$1$2")+t;case 5443:return S+t+A+"flex-item-"+s(t,/flex-|-self/,"")+t;case 4675:return S+t+A+"flex-line-pack"+s(t,/align-content|flex-|-self/,"")+t;case 5548:return S+t+A+s(t,"shrink","negative")+t;case 5292:return S+t+A+s(t,"basis","preferred-size")+t;case 6060:return S+"box-"+s(t,"-grow","")+S+t+A+s(t,"grow","positive")+t;case 4554:return S+s(t,/([^-])(transform)/g,"$1"+S+"$2")+t;case 6187:return s(s(s(t,/(zoom-|grab)/,S+"$1"),/(image-set)/,S+"$1"),t,"")+t;case 5495:case 3959:return s(t,/(image-set\([^]*)/,S+"$1$`$1");case 4968:return s(s(t,/(.+:)(flex-)?(.*)/,S+"box-pack:$3"+A+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+S+t+t;case 4095:case 3583:case 4068:case 2532:return s(t,/(.+)-inline(.+)/,S+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(p(t)-1-r>6)switch(c(t,r+1)){case 109:if(45!==c(t,r+4))break;case 102:return s(t,/(.+:)(.+)-([^]+)/,"$1"+S+"$2-$3$1"+W+(108==c(t,r+3)?"$3":"$2-$3"))+t;case 115:return~l(t,"stretch")?e(s(t,"stretch","fill-available"),r)+t:t}break;case 4949:if(115!==c(t,r+1))break;case 6444:switch(c(t,p(t)-3-(~l(t,"!important")&&10))){case 107:return s(t,":",":"+S)+t;case 101:return s(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+S+(45===c(t,14)?"inline-":"")+"box$3$1"+S+"$2$3$1"+A+"$2box$3")+t}break;case 5936:switch(c(t,r+11)){case 114:return S+t+A+s(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return S+t+A+s(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return S+t+A+s(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return S+t+A+t+t}return t}(e.value,e.length);break;case B:return N([v(e,{value:s(e.value,"@","@"+S)})],o);case I:if(e.length){var n,i;return n=e.props,i=function(t){var r;switch(r=t,(r=/(::plac\w+|:read-\w+)/.exec(r))?r[0]:r){case":read-only":case":read-write":return N([v(e,{props:[s(t,/:(read-\w+)/,":"+W+"$1")]})],o);case"::placeholder":return N([v(e,{props:[s(t,/:(plac\w+)/,":"+S+"input-$1")]}),v(e,{props:[s(t,/:(plac\w+)/,":"+W+"$1")]}),v(e,{props:[s(t,/:(plac\w+)/,A+"input-$1")]})],o)}return""},n.map(i).join("")}}}],z=function(e){var t,r,n,a,m,v=e.key;if("css"===v){var A=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(A,function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))})}var W=e.stylisPlugins||U,S={},I=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+v+' "]'),function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)S[t[r]]=!0;I.push(e)});var O=(r=(t=[$,j].concat(W,[P,(n=function(e){m.insert(e)},function(e){!e.root&&(e=e.return)&&n(e)})])).length,function(e,o,n,i){for(var a="",s=0;s<r;s++)a+=t[s](e,o,n,i)||"";return a}),B=function(e){var t,r;return N((r=function e(t,r,o,n,a,m,v,E,A){for(var W,S=0,I=0,O=v,B=0,N=0,P=0,L=1,q=1,F=1,D=0,$="",j=a,U=m,z=n,V=$;q;)switch(P=D,D=x()){case 40:if(108!=P&&58==c(V,O-1)){-1!=l(V+=s(T(D),"&","&\f"),"&\f")&&(F=-1);break}case 34:case 39:case 91:V+=T(D);break;case 9:case 10:case 13:case 32:V+=function(e){for(;y=k();)if(y<33)x();else break;return C(e)>2||C(y)>3?"":" "}(P);break;case 92:V+=function(e,t){for(var r;--t&&x()&&!(y<48)&&!(y>102)&&(!(y>57)||!(y<65))&&(!(y>70)||!(y<97)););return r=w+(t<6&&32==k()&&32==x()),u(g,e,r)}(w-1,7);continue;case 47:switch(k()){case 42:case 47:d((W=function(e,t){for(;x();)if(e+y===57)break;else if(e+y===84&&47===k())break;return"/*"+u(g,t,w-1)+"*"+i(47===e?e:x())}(x(),w),b(W,r,o,R,i(y),u(W,2,-2),0)),A);break;default:V+="/"}break;case 123*L:E[S++]=p(V)*F;case 125*L:case 59:case 0:switch(D){case 0:case 125:q=0;case 59+I:-1==F&&(V=s(V,/\f/g,"")),N>0&&p(V)-O&&d(N>32?M(V+";",n,o,O-1):M(s(V," ","")+";",n,o,O-2),A);break;case 59:V+=";";default:if(d(z=_(V,r,o,S,I,a,E,$,j=[],U=[],O),m),123===D)if(0===I)e(V,r,z,z,j,m,O,E,U);else switch(99===B&&110===c(V,3)?100:B){case 100:case 108:case 109:case 115:e(t,z,z,n&&d(_(t,z,z,0,0,a,E,$,a,j=[],O),U),a,U,O,E,n?j:U);break;default:e(V,z,z,z,[""],U,0,E,U)}}S=I=N=0,L=F=1,$=V="",O=v;break;case 58:O=1+p(V),N=P;default:if(L<1){if(123==D)--L;else if(125==D&&0==L++&&125==(y=w>0?c(g,--w):0,h--,10===y&&(h=1,f--),y))continue}switch(V+=i(D),D*L){case 38:F=I>0?1:(V+="\f",-1);break;case 44:E[S++]=(p(V)-1)*F,F=1;break;case 64:45===k()&&(V+=T(x())),B=k(),I=O=p($=V+=function(e){for(;!C(k());)x();return u(g,e,w)}(w)),D++;break;case 45:45===P&&2==p(V)&&(L=0)}}return m}("",null,null,null,[""],t=E(t=e),0,[0],t),g="",r),O)},L={key:v,sheet:new o({key:v,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:S,registered:{},insert:function(e,t,r,o){m=r,B(e?e+"{"+t.styles+"}":t.styles),o&&(L.inserted[t.name]=!0)}};return L.sheet.hydrate(I),L}},62204:(e,t,r)=>{"use strict";r.d(t,{q:()=>i,f:()=>n});var o=function(e,t){return Object.defineProperty(e,"__recipe__",{value:t,writable:!1}),e};function n(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");return o(function(e){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return{[t.defaultCondition]:e}}if(Array.isArray(e)){if(!("responsiveArray"in t))throw Error("Responsive arrays are not supported");var r={};for(var o in t.responsiveArray)null!=e[o]&&(r[t.responsiveArray[o]]=e[o]);return r}return e},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createNormalizeValueFn",args:[{conditions:e.conditions}]})}function i(e){var{conditions:t}=e;if(!t)throw Error("Styles have no conditions");var r=n(e);return o(function(e,o){if("string"==typeof e||"number"==typeof e||"boolean"==typeof e){if(!t.defaultCondition)throw Error("No default condition");return o(e,t.defaultCondition)}var n=Array.isArray(e)?r(e):e,i={};for(var a in n)null!=n[a]&&(i[a]=o(n[a],a));return i},{importPath:"@vanilla-extract/sprinkles/createUtils",importName:"createMapValueFn",args:[{conditions:e.conditions}]})}},62428:e=>{function t(){this.buffer=[],this.length=0}t.prototype={get:function(e){let t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)==1},put:function(e,t){for(let r=0;r<t;r++)this.putBit((e>>>t-r-1&1)==1)},getLengthInBits:function(){return this.length},putBit:function(e){let t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}},e.exports=t},62954:(e,t,r)=>{let o=r(5105),n=o.getBCHDigit(1335);t.getEncodedBits=function(e,t){let r=e.bit<<3|t,i=r<<10;for(;o.getBCHDigit(i)-n>=0;)i^=1335<<o.getBCHDigit(i)-n;return(r<<10|i)^21522}},69964:(e,t,r)=>{let o=r(55674),n=r(17866),i=r(80308),a=r(84899);function s(e,t,r,i,a){let s=[].slice.call(arguments,1),l=s.length,c="function"==typeof s[l-1];if(!c&&!o())throw Error("Callback required as last argument");if(c){if(l<2)throw Error("Too few arguments provided");2===l?(a=r,r=t,t=i=void 0):3===l&&(t.getContext&&void 0===a?(a=i,i=void 0):(a=i,i=r,r=t,t=void 0))}else{if(l<1)throw Error("Too few arguments provided");return 1===l?(r=t,t=i=void 0):2!==l||t.getContext||(i=r,r=t,t=void 0),new Promise(function(o,a){try{let a=n.create(r,i);o(e(a,t,i))}catch(e){a(e)}})}try{let o=n.create(r,i);a(null,e(o,t,i))}catch(e){a(e)}}t.create=n.create,t.toCanvas=s.bind(null,i.render),t.toDataURL=s.bind(null,i.renderToDataURL),t.toString=s.bind(null,function(e,t,r){return a.render(e,r)})},73986:(e,t)=>{t.L={bit:1},t.M={bit:0},t.Q={bit:3},t.H={bit:2},t.isValid=function(e){return e&&void 0!==e.bit&&e.bit>=0&&e.bit<4},t.from=function(e,r){if(t.isValid(e))return e;try{if("string"!=typeof e)throw Error("Param is not a string");switch(e.toLowerCase()){case"l":case"low":return t.L;case"m":case"medium":return t.M;case"q":case"quartile":return t.Q;case"h":case"high":return t.H;default:throw Error("Unknown EC Level: "+e)}}catch(e){return r}}},78910:(e,t,r)=>{"use strict";var o=r(18306),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},s={};function l(e){return o.isMemo(e)?a:s[e.$$typeof]||n}s[o.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},s[o.Memo]=a;var c=Object.defineProperty,u=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,f=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,r,o){if("string"!=typeof r){if(h){var n=f(r);n&&n!==h&&e(t,n,o)}var a=u(r);p&&(a=a.concat(p(r)));for(var s=l(t),m=l(r),w=0;w<a.length;++w){var y=a[w];if(!i[y]&&!(o&&o[y])&&!(m&&m[y])&&!(s&&s[y])){var g=d(r,y);try{c(t,y,g)}catch(e){}}}}return t}},79894:(e,t,r)=>{"use strict";r.d(t,{E:()=>m,T:()=>u,c:()=>f,h:()=>p,w:()=>c});var o=r(62544),n=r(61077),i=r(90062),a=r(81450),s=r(94237),l=o.createContext("u">typeof HTMLElement?(0,n.A)({key:"css"}):null);l.Provider;var c=function(e){return(0,o.forwardRef)(function(t,r){return e(t,(0,o.useContext)(l),r)})},u=o.createContext({}),p={}.hasOwnProperty,d="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",f=function(e,t){var r={};for(var o in t)p.call(t,o)&&(r[o]=t[o]);return r[d]=e,r},h=function(e){var t=e.cache,r=e.serialized,o=e.isStringTag;return(0,i.SF)(t,r,o),(0,s.s)(function(){return(0,i.sk)(t,r,o)}),null},m=c(function(e,t,r){var n=e.css;"string"==typeof n&&void 0!==t.registered[n]&&(n=t.registered[n]);var s=e[d],l=[n],c="";"string"==typeof e.className?c=(0,i.Rk)(t.registered,l,e.className):null!=e.className&&(c=e.className+" ");var f=(0,a.J)(l,void 0,o.useContext(u));c+=t.key+"-"+f.name;var m={};for(var w in e)p.call(e,w)&&"css"!==w&&w!==d&&(m[w]=e[w]);return m.className=c,r&&(m.ref=r),o.createElement(o.Fragment,null,o.createElement(h,{cache:t,serialized:f,isStringTag:"string"==typeof s}),o.createElement(s,m))})},80308:(e,t,r)=>{let o=r(20029);t.render=function(e,t,r){var n;let i=r,a=t;void 0!==i||t&&t.getContext||(i=t,t=void 0),t||(a=function(){try{return document.createElement("canvas")}catch(e){throw Error("You need to specify a canvas element")}}()),i=o.getOptions(i);let s=o.getImageWidth(e.modules.size,i),l=a.getContext("2d"),c=l.createImageData(s,s);return o.qrToImageData(c.data,e,i),n=a,l.clearRect(0,0,n.width,n.height),n.style||(n.style={}),n.height=s,n.width=s,n.style.height=s+"px",n.style.width=s+"px",l.putImageData(c,0,0),a},t.renderToDataURL=function(e,r,o){let n=o;void 0!==n||r&&r.getContext||(n=r,r=void 0),n||(n={});let i=t.render(e,r,n),a=n.type||"image/png",s=n.rendererOpts||{};return i.toDataURL(a,s.quality)}},80737:(e,t,r)=>{let o=r(73986),n=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],i=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];t.getBlocksCount=function(e,t){switch(t){case o.L:return n[(e-1)*4+0];case o.M:return n[(e-1)*4+1];case o.Q:return n[(e-1)*4+2];case o.H:return n[(e-1)*4+3];default:return}},t.getTotalCodewordsCount=function(e,t){switch(t){case o.L:return i[(e-1)*4+0];case o.M:return i[(e-1)*4+1];case o.Q:return i[(e-1)*4+2];case o.H:return i[(e-1)*4+3];default:return}}},81450:(e,t,r)=>{"use strict";r.d(t,{J:()=>h});var o,n={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},i=r(89535),a=/[A-Z]|^ms/g,s=/_EMO_([^_]+?)_([^]*?)_EMO_/g,l=function(e){return 45===e.charCodeAt(1)},c=function(e){return null!=e&&"boolean"!=typeof e},u=(0,i.A)(function(e){return l(e)?e:e.replace(a,"-$&").toLowerCase()}),p=function(e,t){switch(e){case"animation":case"animationName":if("string"==typeof t)return t.replace(s,function(e,t,r){return o={name:t,styles:r,next:o},t})}return 1===n[e]||l(e)||"number"!=typeof t||0===t?t:t+"px"};function d(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return o={name:r.name,styles:r.styles,next:o},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)o={name:n.name,styles:n.styles,next:o},n=n.next;return r.styles+";"}return function(e,t,r){var o="";if(Array.isArray(r))for(var n=0;n<r.length;n++)o+=d(e,t,r[n])+";";else for(var i in r){var a=r[i];if("object"!=typeof a)null!=t&&void 0!==t[a]?o+=i+"{"+t[a]+"}":c(a)&&(o+=u(i)+":"+p(i,a)+";");else if(Array.isArray(a)&&"string"==typeof a[0]&&(null==t||void 0===t[a[0]]))for(var s=0;s<a.length;s++)c(a[s])&&(o+=u(i)+":"+p(i,a[s])+";");else{var l=d(e,t,a);switch(i){case"animation":case"animationName":o+=u(i)+":"+l+";";break;default:o+=i+"{"+l+"}"}}}return o}(e,t,r);case"function":if(void 0!==e){var i=o,a=r(e);return o=i,d(e,t,a)}}if(null==t)return r;var s=t[r];return void 0!==s?s:r}var f=/label:\s*([^\s;{]+)\s*(;|$)/g;function h(e,t,r){if(1===e.length&&"object"==typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var n,i=!0,a="";o=void 0;var s=e[0];null==s||void 0===s.raw?(i=!1,a+=d(r,t,s)):a+=s[0];for(var l=1;l<e.length;l++)a+=d(r,t,e[l]),i&&(a+=s[l]);f.lastIndex=0;for(var c="";null!==(n=f.exec(a));)c+="-"+n[1];return{name:function(e){for(var t,r=0,o=0,n=e.length;n>=4;++o,n-=4)t=(65535&(t=255&e.charCodeAt(o)|(255&e.charCodeAt(++o))<<8|(255&e.charCodeAt(++o))<<16|(255&e.charCodeAt(++o))<<24))*0x5bd1e995+((t>>>16)*59797<<16),t^=t>>>24,r=(65535&t)*0x5bd1e995+((t>>>16)*59797<<16)^(65535&r)*0x5bd1e995+((r>>>16)*59797<<16);switch(n){case 3:r^=(255&e.charCodeAt(o+2))<<16;case 2:r^=(255&e.charCodeAt(o+1))<<8;case 1:r^=255&e.charCodeAt(o),r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16)}return r^=r>>>13,(((r=(65535&r)*0x5bd1e995+((r>>>16)*59797<<16))^r>>>15)>>>0).toString(36)}(a)+c,styles:a,next:o}}},82156:function(e,t,r){var o;!function(n){"use strict";var i="function",a="undefined",s="object",l="string",c="major",u="model",p="name",d="type",f="vendor",h="version",m="architecture",w="console",y="mobile",g="tablet",b="smarttv",v="wearable",x="embedded",k="Amazon",C="Apple",E="ASUS",T="BlackBerry",A="Browser",W="Chrome",S="Firefox",R="Google",I="Huawei",O="Microsoft",B="Motorola",N="Opera",P="Samsung",_="Sharp",M="Sony",L="Xiaomi",q="Zebra",F="Facebook",D="Chromium OS",$="Mac OS",j=" Browser",U=function(e,t){var r={};for(var o in e)t[o]&&t[o].length%2==0?r[o]=t[o].concat(e[o]):r[o]=e[o];return r},z=function(e){for(var t={},r=0;r<e.length;r++)t[e[r].toUpperCase()]=e[r];return t},V=function(e,t){return typeof e===l&&-1!==H(t).indexOf(H(e))},H=function(e){return e.toLowerCase()},Y=function(e,t){if(typeof e===l)return e=e.replace(/^\s\s*/,""),typeof t===a?e:e.substring(0,500)},K=function(e,t){for(var r,o,n,a,l,c,u=0;u<t.length&&!l;){var p=t[u],d=t[u+1];for(r=o=0;r<p.length&&!l&&p[r];)if(l=p[r++].exec(e))for(n=0;n<d.length;n++)c=l[++o],typeof(a=d[n])===s&&a.length>0?2===a.length?typeof a[1]==i?this[a[0]]=a[1].call(this,c):this[a[0]]=a[1]:3===a.length?typeof a[1]!==i||a[1].exec&&a[1].test?this[a[0]]=c?c.replace(a[1],a[2]):void 0:this[a[0]]=c?a[1].call(this,c,a[2]):void 0:4===a.length&&(this[a[0]]=c?a[3].call(this,c.replace(a[1],a[2])):void 0):this[a]=c||void 0;u+=2}},Q=function(e,t){for(var r in t)if(typeof t[r]===s&&t[r].length>0){for(var o=0;o<t[r].length;o++)if(V(t[r][o],e))return"?"===r?void 0:r}else if(V(t[r],e))return"?"===r?void 0:r;return t.hasOwnProperty("*")?t["*"]:e},J={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},G={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[h,[p,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[h,[p,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[p,h],[/opios[\/ ]+([\w\.]+)/i],[h,[p,N+" Mini"]],[/\bop(?:rg)?x\/([\w\.]+)/i],[h,[p,N+" GX"]],[/\bopr\/([\w\.]+)/i],[h,[p,N]],[/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],[h,[p,"Baidu"]],[/\b(?:mxbrowser|mxios|myie2)\/?([-\w\.]*)\b/i],[h,[p,"Maxthon"]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,/(avant|iemobile|slim(?:browser|boat|jet))[\/ ]?([\d\.]*)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio|(?=comodo_)?dragon)\/([-\w\.]+)/i,/(heytap|ovi|115)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[p,h],[/quark(?:pc)?\/([-\w\.]+)/i],[h,[p,"Quark"]],[/\bddg\/([\w\.]+)/i],[h,[p,"DuckDuckGo"]],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[h,[p,"UC"+A]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i,/micromessenger\/([\w\.]+)/i],[h,[p,"WeChat"]],[/konqueror\/([\w\.]+)/i],[h,[p,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[h,[p,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[h,[p,"Yandex"]],[/slbrowser\/([\w\.]+)/i],[h,[p,"Smart Lenovo "+A]],[/(avast|avg)\/([\w\.]+)/i],[[p,/(.+)/,"$1 Secure "+A],h],[/\bfocus\/([\w\.]+)/i],[h,[p,S+" Focus"]],[/\bopt\/([\w\.]+)/i],[h,[p,N+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[h,[p,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[h,[p,"Dolphin"]],[/coast\/([\w\.]+)/i],[h,[p,N+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[h,[p,"MIUI"+j]],[/fxios\/([\w\.-]+)/i],[h,[p,S]],[/\bqihoobrowser\/?([\w\.]*)/i],[h,[p,"360"]],[/\b(qq)\/([\w\.]+)/i],[[p,/(.+)/,"$1Browser"],h],[/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],[[p,/(.+)/,"$1"+j],h],[/samsungbrowser\/([\w\.]+)/i],[h,[p,P+" Internet"]],[/metasr[\/ ]?([\d\.]+)/i],[h,[p,"Sogou Explorer"]],[/(sogou)mo\w+\/([\d\.]+)/i],[[p,"Sogou Mobile"],h],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|2345(?=browser|chrome|explorer))\w*[\/ ]?v?([\w\.]+)/i],[p,h],[/(lbbrowser|rekonq)/i,/\[(linkedin)app\]/i],[p],[/ome\/([\w\.]+) \w* ?(iron) saf/i,/ome\/([\w\.]+).+qihu (360)[es]e/i],[h,p],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[p,F],h],[/(Klarna)\/([\w\.]+)/i,/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(alipay)client\/([\w\.]+)/i,/(twitter)(?:and| f.+e\/([\w\.]+))/i,/(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i],[p,h],[/\bgsa\/([\w\.]+) .*safari\//i],[h,[p,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[h,[p,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[h,[p,W+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[p,W+" WebView"],h],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[h,[p,"Android "+A]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[p,h],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[h,[p,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[h,p],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[p,[h,Q,{"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"}]],[/(webkit|khtml)\/([\w\.]+)/i],[p,h],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[p,"Netscape"],h],[/(wolvic|librewolf)\/([\w\.]+)/i],[p,h],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[h,[p,S+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i],[p,[h,/_/g,"."]],[/(cobalt)\/([\w\.]+)/i],[p,[h,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[m,"amd64"]],[/(ia32(?=;))/i],[[m,H]],[/((?:i[346]|x)86)[;\)]/i],[[m,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[m,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[m,"armhf"]],[/windows (ce|mobile); ppc;/i],[[m,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[m,/ower/,"",H]],[/(sun4\w)[;\)]/i],[[m,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[m,H]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[u,[f,P],[d,g]],[/\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]((?!sm-[lr])[-\w]+)/i,/sec-(sgh\w+)/i],[u,[f,P],[d,y]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[u,[f,C],[d,y]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[u,[f,C],[d,g]],[/(macintosh);/i],[u,[f,C]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[u,[f,_],[d,y]],[/(?:honor)([-\w ]+)[;\)]/i],[u,[f,"Honor"],[d,y]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[u,[f,I],[d,g]],[/(?:huawei)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[u,[f,I],[d,y]],[/\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i],[[u,/_/g," "],[f,L],[d,y]],[/oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[u,/_/g," "],[f,L],[d,g]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[u,[f,"OPPO"],[d,y]],[/\b(opd2\d{3}a?) bui/i],[u,[f,"OPPO"],[d,g]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[u,[f,"Vivo"],[d,y]],[/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],[u,[f,"Realme"],[d,y]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[u,[f,B],[d,y]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[u,[f,B],[d,g]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[u,[f,"LG"],[d,g]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[u,[f,"LG"],[d,y]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[u,[f,"Lenovo"],[d,g]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[u,/_/g," "],[f,"Nokia"],[d,y]],[/(pixel c)\b/i],[u,[f,R],[d,g]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[u,[f,R],[d,y]],[/droid.+; (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[u,[f,M],[d,y]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[u,"Xperia Tablet"],[f,M],[d,g]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[u,[f,"OnePlus"],[d,y]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[u,[f,k],[d,g]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[u,/(.+)/g,"Fire Phone $1"],[f,k],[d,y]],[/(playbook);[-\w\),; ]+(rim)/i],[u,f,[d,g]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[u,[f,T],[d,y]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[u,[f,E],[d,g]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[u,[f,E],[d,y]],[/(nexus 9)/i],[u,[f,"HTC"],[d,g]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[f,[u,/_/g," "],[d,y]],[/droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i],[u,[f,"TCL"],[d,g]],[/(itel) ((\w+))/i],[[f,H],u,[d,Q,{tablet:["p10001l","w7001"],"*":"mobile"}]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[u,[f,"Acer"],[d,g]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[u,[f,"Meizu"],[d,y]],[/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],[u,[f,"Ulefone"],[d,y]],[/; (energy ?\w+)(?: bui|\))/i,/; energizer ([\w ]+)(?: bui|\))/i],[u,[f,"Energizer"],[d,y]],[/; cat (b35);/i,/; (b15q?|s22 flip|s48c|s62 pro)(?: bui|\))/i],[u,[f,"Cat"],[d,y]],[/((?:new )?andromax[\w- ]+)(?: bui|\))/i],[u,[f,"Smartfren"],[d,y]],[/droid.+; (a(?:015|06[35]|142p?))/i],[u,[f,"Nothing"],[d,y]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno|micromax|advan)[-_ ]?([-\w]*)/i,/; (imo) ((?!tab)[\w ]+?)(?: bui|\))/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[f,u,[d,y]],[/(imo) (tab \w+)/i,/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[f,u,[d,g]],[/(surface duo)/i],[u,[f,O],[d,g]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[u,[f,"Fairphone"],[d,y]],[/(u304aa)/i],[u,[f,"AT&T"],[d,y]],[/\bsie-(\w*)/i],[u,[f,"Siemens"],[d,y]],[/\b(rct\w+) b/i],[u,[f,"RCA"],[d,g]],[/\b(venue[\d ]{2,7}) b/i],[u,[f,"Dell"],[d,g]],[/\b(q(?:mv|ta)\w+) b/i],[u,[f,"Verizon"],[d,g]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[u,[f,"Barnes & Noble"],[d,g]],[/\b(tm\d{3}\w+) b/i],[u,[f,"NuVision"],[d,g]],[/\b(k88) b/i],[u,[f,"ZTE"],[d,g]],[/\b(nx\d{3}j) b/i],[u,[f,"ZTE"],[d,y]],[/\b(gen\d{3}) b.+49h/i],[u,[f,"Swiss"],[d,y]],[/\b(zur\d{3}) b/i],[u,[f,"Swiss"],[d,g]],[/\b((zeki)?tb.*\b) b/i],[u,[f,"Zeki"],[d,g]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[f,"Dragon Touch"],u,[d,g]],[/\b(ns-?\w{0,9}) b/i],[u,[f,"Insignia"],[d,g]],[/\b((nxa|next)-?\w{0,9}) b/i],[u,[f,"NextBook"],[d,g]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[f,"Voice"],u,[d,y]],[/\b(lvtel\-)?(v1[12]) b/i],[[f,"LvTel"],u,[d,y]],[/\b(ph-1) /i],[u,[f,"Essential"],[d,y]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[u,[f,"Envizen"],[d,g]],[/\b(trio[-\w\. ]+) b/i],[u,[f,"MachSpeed"],[d,g]],[/\btu_(1491) b/i],[u,[f,"Rotor"],[d,g]],[/(shield[\w ]+) b/i],[u,[f,"Nvidia"],[d,g]],[/(sprint) (\w+)/i],[f,u,[d,y]],[/(kin\.[onetw]{3})/i],[[u,/\./g," "],[f,O],[d,y]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[u,[f,q],[d,g]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[u,[f,q],[d,y]],[/smart-tv.+(samsung)/i],[f,[d,b]],[/hbbtv.+maple;(\d+)/i],[[u,/^/,"SmartTV"],[f,P],[d,b]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[f,"LG"],[d,b]],[/(apple) ?tv/i],[f,[u,C+" TV"],[d,b]],[/crkey/i],[[u,W+"cast"],[f,R],[d,b]],[/droid.+aft(\w+)( bui|\))/i],[u,[f,k],[d,b]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[u,[f,_],[d,b]],[/(bravia[\w ]+)( bui|\))/i],[u,[f,M],[d,b]],[/(mitv-\w{5}) bui/i],[u,[f,L],[d,b]],[/Hbbtv.*(technisat) (.*);/i],[f,u,[d,b]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[f,Y],[u,Y],[d,b]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[d,b]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[f,u,[d,w]],[/droid.+; (shield) bui/i],[u,[f,"Nvidia"],[d,w]],[/(playstation [345portablevi]+)/i],[u,[f,M],[d,w]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[u,[f,O],[d,w]],[/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],[u,[f,P],[d,v]],[/((pebble))app/i],[f,u,[d,v]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[u,[f,C],[d,v]],[/droid.+; (glass) \d/i],[u,[f,R],[d,v]],[/droid.+; (wt63?0{2,3})\)/i],[u,[f,q],[d,v]],[/droid.+; (glass) \d/i],[u,[f,R],[d,v]],[/(pico) (4|neo3(?: link|pro)?)/i],[f,u,[d,v]],[/; (quest( \d| pro)?)/i],[u,[f,F],[d,v]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[f,[d,x]],[/(aeobc)\b/i],[u,[f,k],[d,x]],[/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],[u,[d,y]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[u,[d,g]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[d,g]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[d,y]],[/(android[-\w\. ]{0,9});.+buil/i],[u,[f,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[h,[p,"EdgeHTML"]],[/(arkweb)\/([\w\.]+)/i],[p,h],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[h,[p,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna|servo)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[p,h],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[h,p]],os:[[/microsoft (windows) (vista|xp)/i],[p,h],[/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],[p,[h,Q,J]],[/windows nt 6\.2; (arm)/i,/windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,/(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[h,Q,J],[p,"Windows"]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[h,/_/g,"."],[p,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[p,$],[h,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[h,p],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish|openharmony)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[p,h],[/\(bb(10);/i],[h,[p,T]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[h,[p,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[h,[p,S+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[h,[p,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[h,[p,"watchOS"]],[/crkey\/([\d\.]+)/i],[h,[p,W+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[p,D],h],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[p,h],[/(sunos) ?([\w\.\d]*)/i],[[p,"Solaris"],h],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[p,h]]},Z=function(e,t){if(typeof e===s&&(t=e,e=void 0),!(this instanceof Z))return new Z(e,t).getResult();var r=typeof n!==a&&n.navigator?n.navigator:void 0,o=e||(r&&r.userAgent?r.userAgent:""),w=r&&r.userAgentData?r.userAgentData:void 0,b=t?U(G,t):G,v=r&&r.userAgent==o;return this.getBrowser=function(){var e,t={};return t[p]=void 0,t[h]=void 0,K.call(t,o,b.browser),t[c]=typeof(e=t[h])===l?e.replace(/[^\d\.]/g,"").split(".")[0]:void 0,v&&r&&r.brave&&typeof r.brave.isBrave==i&&(t[p]="Brave"),t},this.getCPU=function(){var e={};return e[m]=void 0,K.call(e,o,b.cpu),e},this.getDevice=function(){var e={};return e[f]=void 0,e[u]=void 0,e[d]=void 0,K.call(e,o,b.device),v&&!e[d]&&w&&w.mobile&&(e[d]=y),v&&"Macintosh"==e[u]&&r&&typeof r.standalone!==a&&r.maxTouchPoints&&r.maxTouchPoints>2&&(e[u]="iPad",e[d]=g),e},this.getEngine=function(){var e={};return e[p]=void 0,e[h]=void 0,K.call(e,o,b.engine),e},this.getOS=function(){var e={};return e[p]=void 0,e[h]=void 0,K.call(e,o,b.os),v&&!e[p]&&w&&w.platform&&"Unknown"!=w.platform&&(e[p]=w.platform.replace(/chrome os/i,D).replace(/macos/i,$)),e},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return o},this.setUA=function(e){return o=typeof e===l&&e.length>500?Y(e,500):e,this},this.setUA(o),this};Z.VERSION="1.0.40",Z.BROWSER=z([p,h,c]),Z.CPU=z([m]),Z.DEVICE=z([u,f,d,w,y,b,g,v,x]),Z.ENGINE=Z.OS=z([p,h]),typeof t!==a?(e.exports&&(t=e.exports=Z),t.UAParser=Z):r.amdO?void 0===(o=(function(){return Z}).call(t,r,t,e))||(e.exports=o):typeof n!==a&&(n.UAParser=Z);var X=typeof n!==a&&(n.jQuery||n.Zepto);if(X&&!X.ua){var ee=new Z;X.ua=ee.getResult(),X.ua.get=function(){return ee.getUA()},X.ua.set=function(e){ee.setUA(e);var t=ee.getResult();for(var r in t)X.ua[r]=t[r]}}}("object"==typeof window?window:this)},82953:(e,t,r)=>{"use strict";r.d(t,{FD:()=>a,Y:()=>i});var o=r(10940),n=r(79894);r(62544),r(61077),r(78910),r(81450),r(94237),o.Fragment;var i=function(e,t,r){return n.h.call(t,"css")?o.jsx(n.E,(0,n.c)(e,t),r):o.jsx(e,t,r)},a=function(e,t,r){return n.h.call(t,"css")?o.jsxs(n.E,(0,n.c)(e,t),r):o.jsxs(e,t,r)}},84406:(e,t)=>{"use strict";var r="function"==typeof Symbol&&Symbol.for,o=r?Symbol.for("react.element"):60103,n=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,s=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,c=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,p=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,f=r?Symbol.for("react.suspense"):60113,h=r?Symbol.for("react.suspense_list"):60120,m=r?Symbol.for("react.memo"):60115,w=r?Symbol.for("react.lazy"):60116,y=r?Symbol.for("react.block"):60121,g=r?Symbol.for("react.fundamental"):60117,b=r?Symbol.for("react.responder"):60118,v=r?Symbol.for("react.scope"):60119;function x(e){if("object"==typeof e&&null!==e){var t=e.$$typeof;switch(t){case o:switch(e=e.type){case u:case p:case i:case s:case a:case f:return e;default:switch(e=e&&e.$$typeof){case c:case d:case w:case m:case l:return e;default:return t}}case n:return t}}}function k(e){return x(e)===p}t.AsyncMode=u,t.ConcurrentMode=p,t.ContextConsumer=c,t.ContextProvider=l,t.Element=o,t.ForwardRef=d,t.Fragment=i,t.Lazy=w,t.Memo=m,t.Portal=n,t.Profiler=s,t.StrictMode=a,t.Suspense=f,t.isAsyncMode=function(e){return k(e)||x(e)===u},t.isConcurrentMode=k,t.isContextConsumer=function(e){return x(e)===c},t.isContextProvider=function(e){return x(e)===l},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return x(e)===d},t.isFragment=function(e){return x(e)===i},t.isLazy=function(e){return x(e)===w},t.isMemo=function(e){return x(e)===m},t.isPortal=function(e){return x(e)===n},t.isProfiler=function(e){return x(e)===s},t.isStrictMode=function(e){return x(e)===a},t.isSuspense=function(e){return x(e)===f},t.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===i||e===p||e===s||e===a||e===f||e===h||"object"==typeof e&&null!==e&&(e.$$typeof===w||e.$$typeof===m||e.$$typeof===l||e.$$typeof===c||e.$$typeof===d||e.$$typeof===g||e.$$typeof===b||e.$$typeof===v||e.$$typeof===y)},t.typeOf=x},84899:(e,t,r)=>{let o=r(20029);function n(e,t){let r=e.a/255,o=t+'="'+e.hex+'"';return r<1?o+" "+t+'-opacity="'+r.toFixed(2).slice(1)+'"':o}function i(e,t,r){let o=e+t;return void 0!==r&&(o+=" "+r),o}t.render=function(e,t,r){let a=o.getOptions(t),s=e.modules.size,l=e.modules.data,c=s+2*a.margin,u=a.color.light.a?"<path "+n(a.color.light,"fill")+' d="M0 0h'+c+"v"+c+'H0z"/>':"",p="<path "+n(a.color.dark,"stroke")+' d="'+function(e,t,r){let o="",n=0,a=!1,s=0;for(let l=0;l<e.length;l++){let c=Math.floor(l%t),u=Math.floor(l/t);c||a||(a=!0),e[l]?(s++,l>0&&c>0&&e[l-1]||(o+=a?i("M",c+r,.5+u+r):i("m",n,0),n=0,a=!1),c+1<t&&e[l+1]||(o+=i("h",s),s=0)):n++}return o}(l,s,a.margin)+'"/>',d='<svg xmlns="http://www.w3.org/2000/svg" '+(a.width?'width="'+a.width+'" height="'+a.width+'" ':"")+('viewBox="0 0 '+c+" ")+c+'" shape-rendering="crispEdges">'+u+p+"</svg>\n";return"function"==typeof r&&r(null,d),d}},87015:(e,t,r)=>{let o=r(5105).getSymbolSize;t.getPositions=function(e){let t=o(e);return[[0,0],[t-7,0],[0,t-7]]}},88796:(e,t,r)=>{"use strict";let o;function n(){return"u">typeof window}function i(e){return l(e)?(e.nodeName||"").toLowerCase():"#document"}function a(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function s(e){var t;return null==(t=(l(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function l(e){return!!n()&&(e instanceof Node||e instanceof a(e).Node)}function c(e){return!!n()&&(e instanceof Element||e instanceof a(e).Element)}function u(e){return!!n()&&(e instanceof HTMLElement||e instanceof a(e).HTMLElement)}function p(e){return!(!n()||"u"<typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof a(e).ShadowRoot)}function d(e){let{overflow:t,overflowX:r,overflowY:o,display:n}=k(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+r)&&"inline"!==n&&"contents"!==n}function f(e){return/^(table|td|th)$/.test(i(e))}function h(e){try{if(e.matches(":popover-open"))return!0}catch(e){}try{return e.matches(":modal")}catch(e){return!1}}r.d(t,{$4:()=>E,CP:()=>C,L9:()=>k,Ll:()=>l,Lv:()=>f,Ng:()=>p,Tc:()=>v,Tf:()=>h,ZU:()=>d,_m:()=>T,ep:()=>s,eu:()=>x,gJ:()=>b,mq:()=>i,sQ:()=>g,sb:()=>u,v9:()=>function e(t,r,o){var n;void 0===r&&(r=[]),void 0===o&&(o=!0);let i=function e(t){let r=E(t);return x(r)?t.ownerDocument?t.ownerDocument.body:t.body:u(r)&&d(r)?r:e(r)}(t),s=i===(null==(n=t.ownerDocument)?void 0:n.body),l=a(i);if(!s)return r.concat(i,e(i,[],o));{let t=T(l);return r.concat(l,l.visualViewport||[],d(i)?i:[],t&&o?e(t):[])}},vq:()=>c,zk:()=>a});let m=/transform|translate|scale|rotate|perspective|filter/,w=/paint|layout|strict|content/,y=e=>!!e&&"none"!==e;function g(e){let t=c(e)?k(e):e;return y(t.transform)||y(t.translate)||y(t.scale)||y(t.rotate)||y(t.perspective)||!v()&&(y(t.backdropFilter)||y(t.filter))||m.test(t.willChange||"")||w.test(t.contain||"")}function b(e){let t=E(e);for(;u(t)&&!x(t);){if(g(t))return t;if(h(t))break;t=E(t)}return null}function v(){return null==o&&(o="u">typeof CSS&&CSS.supports&&CSS.supports("-webkit-backdrop-filter","none")),o}function x(e){return/^(html|body|#document)$/.test(i(e))}function k(e){return a(e).getComputedStyle(e)}function C(e){return c(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function E(e){if("html"===i(e))return e;let t=e.assignedSlot||e.parentNode||p(e)&&e.host||s(e);return p(t)?t.host:t}function T(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}},89535:(e,t,r)=>{"use strict";function o(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}r.d(t,{A:()=>o})},90062:(e,t,r)=>{"use strict";function o(e,t,r){var o="";return r.split(" ").forEach(function(r){void 0!==e[r]?t.push(e[r]+";"):r&&(o+=r+" ")}),o}r.d(t,{Rk:()=>o,SF:()=>n,sk:()=>i});var n=function(e,t,r){var o=e.key+"-"+t.name;!1===r&&void 0===e.registered[o]&&(e.registered[o]=t.styles)},i=function(e,t,r){n(e,t,r);var o=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var i=t;do e.insert(t===i?"."+o:"",i,e.sheet,!0),i=i.next;while(void 0!==i)}}},94237:(e,t,r)=>{"use strict";r.d(t,{s:()=>a});var o,n=r(62544),i=!!(o||(o=r.t(n,2))).useInsertionEffect&&(o||(o=r.t(n,2))).useInsertionEffect,a=i||function(e){return e()};i||n.useLayoutEffect},98922:(e,t,r)=>{let o=r(13099),n=r(11386),i=r(52818),a=r(33833),s=r(58618),l=r(31),c=r(5105),u=r(13020);function p(e){return unescape(encodeURIComponent(e)).length}function d(e,t,r){let o,n=[];for(;null!==(o=e.exec(r));)n.push({data:o[0],index:o.index,mode:t,length:o[0].length});return n}function f(e){let t,r,n=d(l.NUMERIC,o.NUMERIC,e),i=d(l.ALPHANUMERIC,o.ALPHANUMERIC,e);return c.isKanjiModeEnabled()?(t=d(l.BYTE,o.BYTE,e),r=d(l.KANJI,o.KANJI,e)):(t=d(l.BYTE_KANJI,o.BYTE,e),r=[]),n.concat(i,t,r).sort(function(e,t){return e.index-t.index}).map(function(e){return{data:e.data,mode:e.mode,length:e.length}})}function h(e,t){switch(t){case o.NUMERIC:return n.getBitsLength(e);case o.ALPHANUMERIC:return i.getBitsLength(e);case o.KANJI:return s.getBitsLength(e);case o.BYTE:return a.getBitsLength(e)}}function m(e,t){let r,l=o.getBestModeForData(e);if((r=o.from(t,l))!==o.BYTE&&r.bit<l.bit)throw Error('"'+e+'" cannot be encoded with mode '+o.toString(r)+".\n Suggested mode is: "+o.toString(l));switch(r===o.KANJI&&!c.isKanjiModeEnabled()&&(r=o.BYTE),r){case o.NUMERIC:return new n(e);case o.ALPHANUMERIC:return new i(e);case o.KANJI:return new s(e);case o.BYTE:return new a(e)}}t.fromArray=function(e){return e.reduce(function(e,t){return"string"==typeof t?e.push(m(t,null)):t.data&&e.push(m(t.data,t.mode)),e},[])},t.fromString=function(e,r){let n=function(e,t){let r={},n={start:{}},i=["start"];for(let a=0;a<e.length;a++){let s=e[a],l=[];for(let e=0;e<s.length;e++){let c=s[e],u=""+a+e;l.push(u),r[u]={node:c,lastCount:0},n[u]={};for(let e=0;e<i.length;e++){let a=i[e];r[a]&&r[a].node.mode===c.mode?(n[a][u]=h(r[a].lastCount+c.length,c.mode)-h(r[a].lastCount,c.mode),r[a].lastCount+=c.length):(r[a]&&(r[a].lastCount=c.length),n[a][u]=h(c.length,c.mode)+4+o.getCharCountIndicator(c.mode,t))}}i=l}for(let e=0;e<i.length;e++)n[i[e]].end=0;return{map:n,table:r}}(function(e){let t=[];for(let r=0;r<e.length;r++){let n=e[r];switch(n.mode){case o.NUMERIC:t.push([n,{data:n.data,mode:o.ALPHANUMERIC,length:n.length},{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.ALPHANUMERIC:t.push([n,{data:n.data,mode:o.BYTE,length:n.length}]);break;case o.KANJI:t.push([n,{data:n.data,mode:o.BYTE,length:p(n.data)}]);break;case o.BYTE:t.push([{data:n.data,mode:o.BYTE,length:p(n.data)}])}}return t}(f(e,c.isKanjiModeEnabled())),r),i=u.find_path(n.map,"start","end"),a=[];for(let e=1;e<i.length-1;e++)a.push(n.table[i[e]].node);return t.fromArray(a.reduce(function(e,t){let r=e.length-1>=0?e[e.length-1]:null;return r&&r.mode===t.mode?e[e.length-1].data+=t.data:e.push(t),e},[]))},t.rawSplit=function(e){return t.fromArray(f(e,c.isKanjiModeEnabled()))}}}]);