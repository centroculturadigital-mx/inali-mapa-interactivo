!function(){"use strict";const e=["client/index.5e1fcb53.js","client/about.5d817ada.js","client/index.f6ab863e.js","client/[slug].87a8886f.js","client/agrupaciones.98b3ae11.js","client/index.bd95bf1a.js","client/letra.2f817d11.js","client/svg.intersections.040ed797.js","client/client.28e2156d.js","client/familias.dd64d586.js","client/svg.77c21260.js","client/index.f6c67d2d.js","client/FondoLineas.f2b11092.js"].concat(["service-worker-index.html","cerrar.svg","estilos/elementos/botones.css","estilos/elementos/formularios.css","estilos/formularios.css","estilos/reset.css","estilos/tipografia.css","favicon.png","global.css","great-success.png","icono-info.svg","leon-portilla.png","logo-192.png","logo-512.png","logo-mapafinal.svg","logoCcd.svg","logoCultura.svg","logoGobierno.svg","logoInah.svg","logoInali.svg","logosGobiernoCulturaInah.svg","manifest.json","mili.logo.svg","ocultar.derecha.svg","ocultar.izquierda.svg"]),s=new Set(e);self.addEventListener("install",s=>{s.waitUntil(caches.open("cache1632337908136").then(s=>s.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)"cache1632337908136"!==s&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const t=new URL(e.request.url);t.protocol.startsWith("http")&&(t.hostname===self.location.hostname&&t.port!==self.location.port||(t.host===self.location.host&&s.has(t.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1632337908136").then(async s=>{try{const t=await fetch(e.request);return s.put(e.request,t.clone()),t}catch(t){const n=await s.match(e.request);if(n)return n;throw t}}))))})}();