if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),c={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-e1498109"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-zCiBx0oA.css",revision:null},{url:"index.html",revision:"40f33a6f4e6db8e6f7157edcb363b526"},{url:"registerSW.js",revision:"cea37d0e40f6182a108aed3ca9cf75d1"},{url:"manifest.webmanifest",revision:"22696ed1dc9f19f5a0c67412a4dfab68"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));