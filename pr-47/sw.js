if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,t)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let o={};const f=e=>s(e,r),c={module:{uri:r},exports:o,require:f};i[r]=Promise.all(n.map((e=>c[e]||f(e)))).then((e=>(t(...e),o)))}}define(["./workbox-f3e6b16a"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-OI7MFXS-.css",revision:null},{url:"index.html",revision:"8cbfe3d0df2d3661292eb57a4b9ccbc1"},{url:"registerSW.js",revision:"ee1748a17c94e947fefdf443ac53e83f"},{url:"manifest.webmanifest",revision:"6ff106fd7a23839b9d772e73b073550d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));