if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const d=e=>s(e,r),l={module:{uri:r},exports:o,require:d};i[r]=Promise.all(n.map((e=>l[e]||d(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-gG4G4lXO.css",revision:null},{url:"index.html",revision:"d03b6c35226477fd99e749e316160b3a"},{url:"registerSW.js",revision:"939b6246c175a3a5bfbbe9d3f83ad3d4"},{url:"manifest.webmanifest",revision:"ad3f4d4906d9a53341598182075688c8"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));