import{S as t,c as s,s as e,e as o,q as r,d as l,f as n,u as a,g as h,h as c,j as p,x as f,G as u,r as i,v as g,n as d,O as m}from"./index.bd95bf1a.js";function v(t,s,e){const o=Object.create(t);return o.post=s[e],o}function b(t){var s,e,i,g,d=t.post.title+"";return{c(){s=o("li"),e=o("a"),i=r(d),this.h()},l(t){s=l(t,"LI",{},!1);var o=n(s);e=l(o,"A",{rel:!0,href:!0},!1);var r=n(e);i=a(r,d),r.forEach(h),o.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t.post.slug)},m(t,o){p(t,s,o),f(s,e),f(e,i)},p(t,s){t.posts&&d!==(d=s.post.title+"")&&u(i,d),t.posts&&g!==(g="blog/"+s.post.slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){var s,e,u,j,x;let E=t.posts,q=[];for(let s=0;s<E.length;s+=1)q[s]=b(v(t,E,s));return{c(){s=i(),e=o("h1"),u=r("Recent posts"),j=i(),x=o("ul");for(let t=0;t<q.length;t+=1)q[t].c();this.h()},l(t){s=g(t),e=l(t,"H1",{},!1);var o=n(e);u=a(o,"Recent posts"),o.forEach(h),j=g(t),x=l(t,"UL",{class:!0},!1);var r=n(x);for(let t=0;t<q.length;t+=1)q[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog",c(x,"class","svelte-1frg2tf")},m(t,o){p(t,s,o),p(t,e,o),f(e,u),p(t,j,o),p(t,x,o);for(let t=0;t<q.length;t+=1)q[t].m(x,null)},p(t,s){if(t.posts){let e;for(E=s.posts,e=0;e<E.length;e+=1){const o=v(s,E,e);q[e]?q[e].p(t,o):(q[e]=b(o),q[e].c(),q[e].m(x,null))}for(;e<q.length;e+=1)q[e].d(1);q.length=E.length}},i:d,o:d,d(t){t&&(h(s),h(e),h(j),h(x)),m(q,t)}}}function x({params:t,query:s}){return this.fetch("blog.json").then(t=>t.json()).then(t=>({posts:t}))}function E(t,s,e){let{posts:o}=s;return t.$set=(t=>{"posts"in t&&e("posts",o=t.posts)}),{posts:o}}export default class extends t{constructor(t){super(),s(this,t,E,j,e,["posts"])}}export{x as preload};
