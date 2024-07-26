(()=>{"use strict";var n={208:(n,e,t)=>{t.d(e,{A:()=>m});var r=t(354),o=t.n(r),a=t(314),i=t.n(a),c=t(417),s=t.n(c),A=new URL(t(539),t.b),d=new URL(t(887),t.b),l=i()(o()),p=s()(A),u=s()(d);l.push([n.id,`@font-face {\n  font-family: 'Philosopher';\n  src: url(${p});\n}\n\n:root {\n  --card-image-offset: 0px;\n  --red-color: rgb(198, 61, 47);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml {\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n}\n\nbody {\n  height: 101vh;\n  background: linear-gradient(\n      120deg,\n      rgba(233, 231, 220, 1) 0%,\n      rgba(222, 218, 207, 1) 100%\n    )\n    fixed;\n}\n\n.selected {\n  color: var(--red-color);\n}\n\nbutton {\n  background-color: rgb(242, 242, 242);\n  border: none;\n  border-radius: 1000px;\n  padding: 1vw 2vw;\n  font-size: min(2vw, 0.9rem);\n  font-weight: bold;\n\n  &:hover {\n    transition: 0.2s;\n    filter:brightness(1.05);\n  }\n}\n\nnav {\n  display: flex;\n  padding: 50px 200px 0px;\n}\n\n.logo {\n  font-family: 'Philosopher';\n  font-size: 3rem;\n  flex: 1;\n\n  span {\n    color: var(--red-color);\n  }\n}\n\n.nav-buttons {\n  flex: 3;\n}\n\n.nav-buttons > button {\n  background: none;\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n.nav-right {\n  display: flex;\n  justify-content: right;\n  flex: 1;\n}\n\n.shopping-bag {\n  width: 100px;\n  background: no-repeat center/35% url(${u});\n  transition: scale 0.25s;\n\n  &:hover {\n    scale: 1.2;\n  }\n}\n\n.home-container {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  gap: 2%;\n}\n\n.left-section {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: min(3vw, 30px);\n}\n\n.left-section > .slogan {\n  font-family: 'Philosopher';\n  font-size: max(5vw, 1rem);\n}\n\n.home-buttons {\n  display: flex;\n  gap: min(1vw, 20px);\n}\n\n.menu-button,\n#sign-up {\n  background-color: rgb(198, 61, 47);\n  color: rgb(224, 224, 224);\n}\n\n.hero-image {\n  width: 50%;\n}\n\n.card-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, 250px);\n  justify-content: center;\n  gap: 120px 90px;\n  padding: 150px min(200px, 1vw) 100px;\n}\n\n.card {\n  display: flex;\n  flex-direction: column;\n  width: 300px;\n  border-radius: 50px;\n  background: linear-gradient(\n    300deg,\n    rgba(233, 233, 233, 1) 0%,\n    rgba(190, 180, 170, 1) 100%\n  );\n  box-shadow: 0px 5px 10px rgba(180, 180, 180, 0.5);\n\n  .info {\n    padding: 150px 50px 30px;\n  }\n\n  & > img {\n    position: absolute;\n    align-self: center;\n    width: min(100%, 250px);\n    transform: translateY(-100px);\n  }\n\n  .name {\n    position: relative;\n    margin-bottom: 10px;\n  }\n\n  .description {\n    font-weight: normal;\n  }\n\n  .price {\n    margin-top: 50px;\n  }\n}\n\n.contact-container {\n  display: flex;\n  justify-content: stretch;\n  padding: 50px 10%;\n\n  h2 {\n    padding-bottom: 20px;\n  }\n}\n\n.address-section {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-section {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  form {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n}\n\n`,"",{version:3,sources:["webpack://./src/style.css"],names:[],mappings:"AAAA;EACE,0BAA0B;EAC1B,4CAAkC;AACpC;;AAEA;EACE,wBAAwB;EACxB,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,yCAAyC;EACzC,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb;;;;;SAKO;AACT;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,qBAAqB;EACrB,gBAAgB;EAChB,2BAA2B;EAC3B,iBAAiB;;EAEjB;IACE,gBAAgB;IAChB,uBAAuB;EACzB;AACF;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,OAAO;;EAEP;IACE,uBAAuB;EACzB;AACF;;AAEA;EACE,OAAO;AACT;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,OAAO;AACT;;AAEA;EACE,YAAY;EACZ,wEAA4D;EAC5D,uBAAuB;;EAEvB;IACE,UAAU;EACZ;AACF;;AAEA;EACE,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,OAAO;AACT;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,0BAA0B;EAC1B,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,kCAAkC;EAClC,yBAAyB;AAC3B;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,aAAa;EACb,8CAA8C;EAC9C,uBAAuB;EACvB,eAAe;EACf,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB;;;;GAIC;EACD,iDAAiD;;EAEjD;IACE,wBAAwB;EAC1B;;EAEA;IACE,kBAAkB;IAClB,kBAAkB;IAClB,uBAAuB;IACvB,6BAA6B;EAC/B;;EAEA;IACE,kBAAkB;IAClB,mBAAmB;EACrB;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,gBAAgB;EAClB;AACF;;AAEA;EACE,aAAa;EACb,wBAAwB;EACxB,iBAAiB;;EAEjB;IACE,oBAAoB;EACtB;AACF;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,OAAO;EACP,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;;EAEnB;IACE,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,uBAAuB;EACzB;AACF",sourcesContent:["@font-face {\r\n  font-family: 'Philosopher';\r\n  src: url('./Philosopher-Bold.ttf');\r\n}\r\n\r\n:root {\r\n  --card-image-offset: 0px;\r\n  --red-color: rgb(198, 61, 47);\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nhtml {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: bold;\r\n}\r\n\r\nbody {\r\n  height: 101vh;\r\n  background: linear-gradient(\r\n      120deg,\r\n      rgba(233, 231, 220, 1) 0%,\r\n      rgba(222, 218, 207, 1) 100%\r\n    )\r\n    fixed;\r\n}\r\n\r\n.selected {\r\n  color: var(--red-color);\r\n}\r\n\r\nbutton {\r\n  background-color: rgb(242, 242, 242);\r\n  border: none;\r\n  border-radius: 1000px;\r\n  padding: 1vw 2vw;\r\n  font-size: min(2vw, 0.9rem);\r\n  font-weight: bold;\r\n\r\n  &:hover {\r\n    transition: 0.2s;\r\n    filter:brightness(1.05);\r\n  }\r\n}\r\n\r\nnav {\r\n  display: flex;\r\n  padding: 50px 200px 0px;\r\n}\r\n\r\n.logo {\r\n  font-family: 'Philosopher';\r\n  font-size: 3rem;\r\n  flex: 1;\r\n\r\n  span {\r\n    color: var(--red-color);\r\n  }\r\n}\r\n\r\n.nav-buttons {\r\n  flex: 3;\r\n}\r\n\r\n.nav-buttons > button {\r\n  background: none;\r\n  font-weight: bold;\r\n  font-size: 1.3rem;\r\n}\r\n\r\n.nav-right {\r\n  display: flex;\r\n  justify-content: right;\r\n  flex: 1;\r\n}\r\n\r\n.shopping-bag {\r\n  width: 100px;\r\n  background: no-repeat center/35% url(\"img/shopping_bag.svg\");\r\n  transition: scale 0.25s;\r\n\r\n  &:hover {\r\n    scale: 1.2;\r\n  }\r\n}\r\n\r\n.home-container {\r\n  display: flex;\r\n  align-items: stretch;\r\n  justify-content: center;\r\n  gap: 2%;\r\n}\r\n\r\n.left-section {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: min(3vw, 30px);\r\n}\r\n\r\n.left-section > .slogan {\r\n  font-family: 'Philosopher';\r\n  font-size: max(5vw, 1rem);\r\n}\r\n\r\n.home-buttons {\r\n  display: flex;\r\n  gap: min(1vw, 20px);\r\n}\r\n\r\n.menu-button,\r\n#sign-up {\r\n  background-color: rgb(198, 61, 47);\r\n  color: rgb(224, 224, 224);\r\n}\r\n\r\n.hero-image {\r\n  width: 50%;\r\n}\r\n\r\n.card-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fit, 250px);\r\n  justify-content: center;\r\n  gap: 120px 90px;\r\n  padding: 150px min(200px, 1vw) 100px;\r\n}\r\n\r\n.card {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 300px;\r\n  border-radius: 50px;\r\n  background: linear-gradient(\r\n    300deg,\r\n    rgba(233, 233, 233, 1) 0%,\r\n    rgba(190, 180, 170, 1) 100%\r\n  );\r\n  box-shadow: 0px 5px 10px rgba(180, 180, 180, 0.5);\r\n\r\n  .info {\r\n    padding: 150px 50px 30px;\r\n  }\r\n\r\n  & > img {\r\n    position: absolute;\r\n    align-self: center;\r\n    width: min(100%, 250px);\r\n    transform: translateY(-100px);\r\n  }\r\n\r\n  .name {\r\n    position: relative;\r\n    margin-bottom: 10px;\r\n  }\r\n\r\n  .description {\r\n    font-weight: normal;\r\n  }\r\n\r\n  .price {\r\n    margin-top: 50px;\r\n  }\r\n}\r\n\r\n.contact-container {\r\n  display: flex;\r\n  justify-content: stretch;\r\n  padding: 50px 10%;\r\n\r\n  h2 {\r\n    padding-bottom: 20px;\r\n  }\r\n}\r\n\r\n.address-section {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.form-section {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n\r\n  form {\r\n    flex: 1;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n  }\r\n}\r\n\r\n"],sourceRoot:""}]);const m=l},314:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var A=0;A<n.length;A++){var d=[].concat(n[A]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},417:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},354:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */");return[e].concat([a]).join("\n")}return[e].join("\n")}},72:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],A=r.base?s[0]+r.base:s[0],d=a[A]||0,l="".concat(A," ").concat(d);a[A]=d+1;var p=t(l),u={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(u);else{var m=o(u,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),A=0;A<a.length;A++){var d=t(a[A]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=s}}},659:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},56:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},825:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},113:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},539:(n,e,t)=>{n.exports=t.p+"0f8966eaee9185b6062b.ttf"},887:(n,e,t)=>{n.exports=t.p+"c826914fada3d7b5de73.svg"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!n||!/^http(s?):/.test(n));)n=r[o--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0;const r=t.p+"2285b09bfdc31258f8b5.webp",o=function(){const n=document.createElement("div");n.classList.add("home-container");const e=document.createElement("div");e.classList.add("left-section");const t=document.createElement("h2");t.classList.add("slogan"),t.innerText="It's not just\nFood, It's an\nExperience.",e.appendChild(t);const o=document.createElement("div");o.classList.add("home-buttons");const a=document.createElement("button");a.classList.add("menu-button"),a.textContent="View Menu",o.appendChild(a);const i=document.createElement("button");i.textContent="Get in Touch",o.appendChild(i),e.appendChild(o),n.appendChild(e);const c=new Image;return c.src=r,c.classList.add("hero-image"),n.appendChild(c),n},a=t.p+"1374b1ee2d722fe32f42.webp",i=t.p+"b6be1532ac1769c6e8ac.webp",c=[{name:"Pappardelle",image:a,description:"With Vegetable",price:"$35.00"},{name:"Ravioli",image:i,description:"With Pesto Sauce",price:"$35.00"}];function s(n){const e=document.createElement("div");e.classList.add("card");const t=new Image;t.src=n.image,t.alt=`Bowl of ${n.name} pasta`,e.appendChild(t);const r=document.createElement("div");r.classList.add("info");const o=document.createElement("h3");o.classList.add("name"),o.textContent=n.name,r.appendChild(o);const a=document.createElement("p");a.textContent=n.description,a.classList.add("description"),r.appendChild(a);const i=document.createElement("p");return i.textContent=n.price,i.classList.add("price"),r.appendChild(i),e.appendChild(r),e}const A=t.p+"0690738650651c612a0c.webp";var d=t(72),l=t.n(d),p=t(825),u=t.n(p),m=t(659),f=t.n(m),E=t(56),C=t.n(E),g=t(540),h=t.n(g),B=t(113),b=t.n(B),x=t(208),v={};v.styleTagTransform=b(),v.setAttributes=C(),v.insert=f().bind(null,"head"),v.domAPI=u(),v.insertStyleElement=h(),l()(x.A,v),x.A&&x.A.locals&&x.A.locals;const y=Array.from(document.querySelector(".nav-buttons").children),w=document.querySelector("#home"),L=document.querySelector("#menu"),I=document.querySelector("#contact"),j=document.querySelector(".shopping-bag");w.addEventListener("click",(()=>{S.innerHTML="",S.appendChild(o()),y.forEach((n=>{n.classList.remove("selected")})),w.classList.add("selected")}));const k=()=>{S.innerHTML="",S.appendChild(function(){const n=document.createElement("div");n.classList.add("card-container");for(let e=0;e<10;e++){const t=s(c[e%2]);n.appendChild(t)}return n}()),y.forEach((n=>{n.classList.remove("selected")})),L.classList.add("selected")};L.addEventListener("click",k),j.addEventListener("click",k),I.addEventListener("click",(()=>{S.innerHTML="",S.appendChild(function(){const n=document.createElement("div");n.classList.add("contact-container");const e=document.createElement("div");e.classList.add("address-section");const t=document.createElement("h2");t.textContent="Address",e.appendChild(t);const r=document.createElement("p");r.textContent="697 Temple Road Pleasanton, CA 94566",e.appendChild(r);const o=new Image;o.src=A,o.alt="Location of the restaurant pinned on the map.",e.appendChild(o);const a=document.createElement("div");a.classList.add("form-section");const i=document.createElement("h2");i.textContent="Contact Form",a.appendChild(i);const c=document.createElement("form"),s=document.createElement("label");s.setAttribute("for","name"),s.textContent="Name",c.appendChild(s),c.appendChild(document.createElement("br"));const d=document.createElement("input");d.type="text",d.id="name",d.name="name",c.appendChild(d),c.appendChild(document.createElement("br"));const l=document.createElement("label");l.setAttribute("for","mail"),l.textContent="Mail",c.appendChild(l),a.appendChild(c),c.appendChild(document.createElement("br"));const p=document.createElement("input");p.setAttribute("for","mail"),p.type="mail",p.id="mail",p.name="mail",c.appendChild(p),c.appendChild(document.createElement("br"));const u=document.createElement("label");u.setAttribute("for","message"),u.textContent="Message",c.appendChild(u),a.appendChild(c),c.appendChild(document.createElement("br"));const m=document.createElement("textarea");m.setAttribute("for","message"),m.id="message",m.name="message",c.appendChild(m),c.appendChild(document.createElement("br"));const f=document.createElement("button");return f.type="submit",f.textContent="Send Message",c.appendChild(f),n.appendChild(e),n.appendChild(a),n}()),y.forEach((n=>{n.classList.remove("selected")})),I.classList.add("selected")}));const S=document.querySelector("#content");S.appendChild(o())})();
//# sourceMappingURL=main.bundle.js.map