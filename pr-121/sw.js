if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let o={};const f=e=>s(e,t),l={module:{uri:t},exports:o,require:f};i[t]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(r(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-FrWqMQ3D.css",revision:null},{url:"index.html",revision:"4f0a1e2117c888a0ff7524f7d8db4a58"},{url:"registerSW.js",revision:"dd42779becb4b03750a9d6afeaf35256"},{url:"manifest.webmanifest",revision:"275f6653e2159a6306062e671342c11c"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));