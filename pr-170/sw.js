if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const c=e=>s(e,r),f={module:{uri:r},exports:o,require:c};i[r]=Promise.all(n.map((e=>f[e]||c(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-gqSusk0z.css",revision:null},{url:"index.html",revision:"3aa3294187689e8d5e86d3a8da51cbcf"},{url:"registerSW.js",revision:"8fa03f402a7fe1b051c1e086a059e206"},{url:"manifest.webmanifest",revision:"17cf8cfbc0bd4f838ab0ab3e7f544114"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));