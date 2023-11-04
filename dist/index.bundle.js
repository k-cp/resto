(()=>{"use strict";var e={727:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(81),o=n.n(a),r=n(645),i=n.n(r)()(o());i.push([e.id,'*{margin:0;box-sizing:border-box}body{height:100%}.header{align-items:center;padding:30px 15px;width:100%;display:flex;flex-direction:row;justify-content:space-between;font-family:"Courier New",Courier,monospace}.header ul{list-style:none;display:flex;flex-direction:row;gap:15px}#main #show{height:500px;padding:60px 80px 60px 200px}#main #show>*{margin:10px}#main #show h2,#main #show p{font-family:"Courier New",Courier,monospace;color:#fff;font-family:"Courier New",Courier,monospace}#main #show h2{font-size:50px}#main #show p{font-size:40px;color:#04e5e5;font-weight:700}#main #show button{padding:20px 60px;border-radius:8px;margin-top:80px;font-size:20px;font-weight:550;font-family:"Courier New",Courier,monospace}#main #menu{display:grid;grid-template-rows:auto;background-color:#f4c773}#main #menu>h2{text-align:center;padding:30px 0px 0px;font-family:"Courier New",Courier,monospace}#main #menu>*{display:grid;grid-template-columns:repeat(2, 50%)}#main #menu>*>*{margin:30px}#main #menu>* h2{font-family:"Courier New",Courier,monospace}#main #menu>* p{font-family:"Gill Sans","Gill Sans MT",Calibri,"Trebuchet MS",sans-serif}#main #menu .margheText,#main #menu .pugText{background-color:#fff;width:400px;height:400px;border-radius:10px;padding:30px}#main #menu:nth-child(2) h2{margin-bottom:25px}#main #menu .margheImg,#main #menu .puglieseImg{padding-right:10%;padding-left:10%}#main #menu .margheImg img,#main #menu .puglieseImg img{border-radius:15px}#main .menuList{padding:10px;background-color:#e48c38}#main .menuList .menuFood{display:grid;grid-template:1fr 5fr/2fr 5fr 5fr;gap:10px}#main .menuList .menuFood img{grid-row:1/3}.footer{text-align:center;padding:40px;background-color:gray}',""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",a=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),a&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),a&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,a,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var c=0;c<this.length;c++){var d=this[c][0];null!=d&&(i[d]=!0)}for(var s=0;s<e.length;s++){var p=[].concat(e[s]);a&&i[p[0]]||(void 0!==r&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=r),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function n(e){for(var n=-1,a=0;a<t.length;a++)if(t[a].identifier===e){n=a;break}return n}function a(e,a){for(var r={},i=[],c=0;c<e.length;c++){var d=e[c],s=a.base?d[0]+a.base:d[0],p=r[s]||0,l="".concat(s," ").concat(p);r[s]=p+1;var m=n(l),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)t[m].references++,t[m].updater(u);else{var h=o(u,a);a.byIndex=c,t.splice(c,0,{identifier:l,updater:h,references:1})}i.push(l)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=a(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=n(r[i]);t[c].references--}for(var d=a(e,o),s=0;s<r.length;s++){var p=n(r[s]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}r=d}}},569:e=>{var t={};e.exports=function(e,n){var a=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var a="";n.supports&&(a+="@supports (".concat(n.supports,") {")),n.media&&(a+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(a+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),a+=n.css,o&&(a+="}"),n.media&&(a+="}"),n.supports&&(a+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(a,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var r=t[a]={id:a,exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var a=t.getElementsByTagName("script");if(a.length)for(var o=a.length-1;o>-1&&!e;)e=a[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{var e=n(379),t=n.n(e),a=n(795),o=n.n(a),r=n(569),i=n.n(r),c=n(565),d=n.n(c),s=n(216),p=n.n(s),l=n(589),m=n.n(l),u=n(727),h={};h.styleTagTransform=m(),h.setAttributes=d(),h.insert=i().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),t()(u.Z,h),u.Z&&u.Z.locals&&u.Z.locals;const f=n.p+"9f447ef801771c09fb79.jpg",g=n.p+"5fb1d4056eb790b52f76.jpeg",v=n.p+"d13d5cee73db9539b4b9.jpeg",C=function(){document.querySelector(".footer")||document.getElementById("content").appendChild(function(){const e=document.createElement("div");return e.classList.add("footer"),e}())},x=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.id="main";const t=document.createElement("div");t.id="show",t.style.backgroundImage=`url(${f})`;const n=document.createElement("h2");n.textContent="Delicious";const a=document.createElement("p");a.textContent="Best pizza in your area";const o=document.createElement("button");o.textContent="Order now",t.appendChild(n),t.appendChild(a),t.appendChild(o);const r=document.createElement("div");r.id="menu";const i=document.createElement("h2");i.textContent="Our bests:",r.appendChild(i);const c=document.createElement("div");c.className="marghe";const d=document.createElement("div");d.className="margheImg";const s=document.createElement("img");s.alt="Margherita",s.className="margherita",s.src=g,s.style.width="100%",d.appendChild(s);const p=document.createElement("div");p.className="margheText";const l=document.createElement("h2");l.textContent="Margherita";const m=document.createElement("p");m.textContent="A popular contemporary legend holds that the archetypal pizza Margherita was    invented in June 1889, when the Royal Palace of Capodimonte commissioned the    Neapolitan pizzaiolo (pizza maker) Raffaele Esposito to create a pizza in honor of the visiting    Queen Margherita. Of the three different pizzas he created, the Queen strongly preferred    a pizza swathed in the colors of the Italian flag — red (tomato), green (basil),    and white (mozzarella).",p.appendChild(l),p.appendChild(m),c.appendChild(d),c.appendChild(p);const u=document.createElement("div");u.className="pug";const h=document.createElement("div");h.className="puglieseImg";const C=document.createElement("img");C.alt="Pugliese",C.className="pugliese",C.src=v,C.style.width="100%",h.appendChild(C);const x=document.createElement("div");x.className="pugText";const y=document.createElement("h2");y.textContent="Pugliese";const b=document.createElement("p");b.textContent='Pizza pugliese is a style of pizza    in Italian cuisine prepared with tomato, onion, and mozzarella.     It is named after the region of Apulia (called in Italian "Puglia").     It should not be confused with pizza barese, the local Barese variant of     preparing the pizza dough, which tends to be thinner and crispier than pizza napoletana.';const E=document.createElement("div");E.classList.add("footer");const w=document.createElement("div");return w.textContent="Links",E.appendChild(w),x.appendChild(y),x.appendChild(b),u.appendChild(h),u.appendChild(x),r.appendChild(c),r.appendChild(u),e.appendChild(t),e.appendChild(r),e}()),C()},y=function(){const e=document.getElementById("main");e.textContent="",e.appendChild(function(){const e=document.createElement("div");e.classList.add("menuList");const t=[];function n(e,n,a){const o={name:e,price:n,description:a};return t.push(o),o}return n("Peperoncino spaghetti",10.9,"A traditional dish from Naples,    Italy, flavoured with peperoncino"),n("Carbonara spaghetti",11.9,"A traditional Italian pasta dish     made with eggs, hard cheese, cured pork, and black pepper."),n("Carabrese spaghetti",11.9,"A traditional Italian pasta."),t.forEach((t=>{const n=document.createElement("div");n.classList.add("menuFood");const a=document.createElement("img");a.alt=`${t.name}`,t.src="#";const o=document.createElement("h2");o.textContent=t.name;const r=document.createElement("h4");r.textContent=`£ ${t.price}`;const i=document.createElement("p");i.textContent=t.description,n.appendChild(a),n.appendChild(o),n.appendChild(r),n.appendChild(i),e.appendChild(n)})),e}()),C()};!function(){const e=document.createElement("div");e.className="header";const t=document.createElement("div");t.className="name";const n=document.createElement("h1");n.textContent="Pizza",n.addEventListener("click",x),t.appendChild(n);const a=document.createElement("div");a.className="nav";const o=document.createElement("ul");["Menu","Group dining","Gift cards","Catering"].forEach((e=>{const t=document.createElement("li");t.textContent=e,t.classList.add(e.replace(/\s/g,"")+"Nav"),"Menu"===e&&t.addEventListener("click",y),o.appendChild(t)})),a.appendChild(o),e.appendChild(t),e.appendChild(a);const r=document.createElement("div");r.id="main",content.appendChild(e),content.appendChild(r)}(),x()})()})();