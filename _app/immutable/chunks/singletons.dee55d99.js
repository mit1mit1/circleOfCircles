import{H as d,s as k}from"./index.9fc21f1b.js";const u=[];function b(t,e=d){let n;const s=new Set;function o(a){if(k(t,a)&&(t=a,n)){const c=!u.length;for(const l of s)l[1](),u.push(l,t);if(c){for(let l=0;l<u.length;l+=2)u[l][0](u[l+1]);u.length=0}}}function r(a){o(a(t))}function i(a,c=d){const l=[a,c];return s.add(l),s.size===1&&(n=e(o)||d),a(t),()=>{s.delete(l),s.size===0&&(n(),n=null)}}return{set:o,update:r,subscribe:i}}var h;const E=((h=globalThis.__sveltekit_1gtgmmv)==null?void 0:h.base)??"";var m;const w=((m=globalThis.__sveltekit_1gtgmmv)==null?void 0:m.assets)??E,A="1713840369547",I="sveltekit:snapshot",y="sveltekit:scroll",x="sveltekit:index",p={tap:1,hover:2,viewport:3,eager:4,off:-1};function O(t){let e=t.baseURI;if(!e){const n=t.getElementsByTagName("base");e=n.length?n[0].href:t.URL}return e}function U(){return{x:pageXOffset,y:pageYOffset}}function f(t,e){return t.getAttribute(`data-sveltekit-${e}`)}const _={...p,"":p.hover};function v(t){let e=t.assignedSlot??t.parentNode;return(e==null?void 0:e.nodeType)===11&&(e=e.host),e}function L(t,e){for(;t&&t!==e;){if(t.nodeName.toUpperCase()==="A"&&t.hasAttribute("href"))return t;t=v(t)}}function N(t,e){let n;try{n=new URL(t instanceof SVGAElement?t.href.baseVal:t.href,document.baseURI)}catch{}const s=t instanceof SVGAElement?t.target.baseVal:t.target,o=!n||!!s||S(n,e)||(t.getAttribute("rel")||"").split(/\s+/).includes("external")||t.hasAttribute("download");return{url:n,external:o,target:s}}function V(t){let e=null,n=null,s=null,o=null,r=t;for(;r&&r!==document.documentElement;)n===null&&(n=f(r,"preload-code")),s===null&&(s=f(r,"preload-data")),e===null&&(e=f(r,"noscroll")),o===null&&(o=f(r,"reload")),r=v(r);return{preload_code:_[n??"off"],preload_data:_[s??"off"],noscroll:e==="off"?!1:e===""?!0:null,reload:o==="off"?!1:o===""?!0:null}}function g(t){const e=b(t);let n=!0;function s(){n=!0,e.update(i=>i)}function o(i){n=!1,e.set(i)}function r(i){let a;return e.subscribe(c=>{(a===void 0||n&&c!==a)&&i(a=c)})}return{notify:s,set:o,subscribe:r}}function R(){const{set:t,subscribe:e}=b(!1);let n;async function s(){clearTimeout(n);const o=await fetch(`${w}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(o.ok){const i=(await o.json()).version!==A;return i&&(t(!0),clearTimeout(n)),i}else throw new Error(`Version check failed: ${o.status}`)}return{subscribe:e,check:s}}function S(t,e){return t.origin!==location.origin||!t.pathname.startsWith(e)}function P(t){t.client}const Y={url:g({}),page:g({}),navigating:b(null),updated:R()};export{x as I,p as P,y as S,I as a,N as b,V as c,U as d,E as e,L as f,O as g,P as h,S as i,Y as s};
