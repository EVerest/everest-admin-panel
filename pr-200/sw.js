if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),l={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>l[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-OvIaxe21.css",revision:null},{url:"index.html",revision:"89621f4aea7a334d89920c2561926a20"},{url:"registerSW.js",revision:"1e5f701f750fa3e49d7d53e0847d63f8"},{url:"manifest.webmanifest",revision:"95d2a896b8f48c520ff5407c802a5545"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));