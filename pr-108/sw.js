if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const l=e=>s(e,r),d={module:{uri:r},exports:o,require:l};i[r]=Promise.all(n.map((e=>d[e]||l(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-GWiwyBL0.css",revision:null},{url:"index.html",revision:"4160d48848032d5a009582451973ebf7"},{url:"registerSW.js",revision:"d8131156819505ceeb4fce5fb326151b"},{url:"manifest.webmanifest",revision:"d638000e9f9643e2d4de848e19905a39"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));