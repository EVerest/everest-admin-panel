if(!self.define){let e,i={};const s=(s,t)=>(s=new URL(s+".js",t).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(t,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(n(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-tHV66sbh.css",revision:null},{url:"index.html",revision:"f0dfc50b445db0a3a456cdce86fa2e59"},{url:"registerSW.js",revision:"e87d65b271b14f712fd4cffd78550681"},{url:"manifest.webmanifest",revision:"e34f547b74c787c9661ab0cad0338f94"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));