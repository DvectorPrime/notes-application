if(!self.define){let e,i={};const n=(n,r)=>(n=new URL(n+".js",r).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const d=e=>n(e,o),t={module:{uri:o},exports:c,require:d};i[o]=Promise.all(r.map((e=>t[e]||d(e)))).then((e=>(s(...e),c)))}}define(["./workbox-e3490c72"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index--t4wy_eD.js",revision:null},{url:"assets/index-DcLrOxVE.css",revision:null},{url:"index.html",revision:"29e0406fd1b716ae8701f04a769ec903"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"android-chrome-192x192.png",revision:"67af7171e16bce49ba740cd7c2b93780"},{url:"android-chrome-512x512.png",revision:"19b8032f70ea242143d9ed48de42cda0"},{url:"apple-touch-icon.png",revision:"861aaa77bc873004c5f0e8dbe43cafce"},{url:"maskable_icon.png",revision:"19b8032f70ea242143d9ed48de42cda0"},{url:"manifest.webmanifest",revision:"369c968f2dc379cdd651732b6ce6fe58"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
