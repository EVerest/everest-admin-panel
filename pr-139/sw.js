if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),d={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>d[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-axEgo3w-.css",revision:null},{url:"index.html",revision:"6a03bf3d79d7ebf7115294c51a88227e"},{url:"registerSW.js",revision:"26d187a1a338601f01edfa2c56eed853"},{url:"manifest.webmanifest",revision:"908bf34aaaf6faeccdfd00830d205fff"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));