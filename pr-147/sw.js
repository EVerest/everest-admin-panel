if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const d=e=>i(e,r),f={module:{uri:r},exports:o,require:d};s[r]=Promise.all(n.map((e=>f[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-wsIsUYos.css",revision:null},{url:"index.html",revision:"ecafbad90bd128822a239a8ad6b72313"},{url:"registerSW.js",revision:"f9d4757a3eff371f1a5a0277b35efebe"},{url:"manifest.webmanifest",revision:"dd3270da17182a4d9c7e1ffcebacc497"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));