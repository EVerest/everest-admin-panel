if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),c={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-6lgwUqQY.css",revision:null},{url:"index.html",revision:"bb52ccd7011345fed5d287ec4f385725"},{url:"registerSW.js",revision:"bb8d48b1d63e6fd95c05666bd8830a66"},{url:"manifest.webmanifest",revision:"778acbcb0c32b91dcdeaad08dfb98c7a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));