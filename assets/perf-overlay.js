!function(){if(!new URLSearchParams(location.search).has("debug"))return
const e=document.createElement("pre")
e.style.cssText="position:fixed;top:8px;left:8px;z-index:99999;font:12px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#0f0;background:rgba(0,0,0,.7);padding:8px 10px;border-radius:4px;margin:0;pointer-events:auto;white-space:pre;mix-blend-mode:normal;user-select:none;",e.textContent="perf: waiting for draw\u2026"
const n=()=>document.body&&document.body.appendChild(e)
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()
let t=null
const o=document.createElement("button")
o.textContent="vsync: ON",o.style.cssText="display:block;margin-top:6px;width:100%;background:#000;color:#0f0;border:1px solid #0f0;font:12px ui-monospace,Menlo,Consolas,monospace;padding:3px 6px;cursor:pointer;text-align:left;"
let r=0
o.addEventListener("click",()=>{r=!r,o.textContent=r?"vsync: OFF (uncapped)":"vsync: ON",r?(window.q5&&window.q5.noLoop(),t=setInterval(()=>window.q5&&window.q5.redraw(),1)):(clearInterval(t),t=null,window.q5&&window.q5.loop())})
const d=document.createElement("button")
d.textContent="GPU sync: OFF",d.style.cssText=o.style.cssText,d.addEventListener("click",()=>{window.__perf_sync=!window.__perf_sync,d.textContent="GPU sync: "+(window.__perf_sync?"ON (slow!)":"OFF")})
const a=document.createElement("div")
a.style.cssText="pointer-events:auto;",a.appendChild(e),a.appendChild(o),a.appendChild(d)
const i=()=>document.body&&document.body.appendChild(a)
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()
const s=new Float32Array(90),w=new Float32Array(90)
let c=0,l=0,p=null,u=performance.now(),_=null,m=null,E=0,x=[]
const f=e=>E?_.getQueryParameter(e,_.QUERY_RESULT_AVAILABLE):m.getQueryObjectEXT(e,m.QUERY_RESULT_AVAILABLE_EXT),y=e=>E?_.getQueryParameter(e,_.QUERY_RESULT):m.getQueryObjectEXT(e,m.QUERY_RESULT_EXT),g=e=>E?_.deleteQuery(e):m.deleteQueryEXT(e)
let T=0,b=null
const h=Object.create(null)
let L=null,v=0
window.__perf={section:function(e){const n=performance.now()
if(window.__perf_sync&&_)try{_.finish()}catch(e){}if(L){const e=(window.__perf_sync&&_?performance.now():n)-v,t=h[L]||(h[L]={ewma:e,last:e})
t.ewma=.9*t.ewma+.1*e,t.last=e}L=e,v=window.__perf_sync&&_?performance.now():n},start(){var e
T=performance.now(),(_||window.q5&&window.q5.drawingContext&&(_=window.q5.drawingContext,E=!!_.createQuery,m=_.getExtension("EXT_disjoint_timer_query_webgl2")||_.getExtension("EXT_disjoint_timer_query"),1))&&m&&(b=E?_.createQuery():m.createQueryEXT(),b&&(e=b,E?_.beginQuery(m.TIME_ELAPSED_EXT,e):m.beginQueryEXT(m.TIME_ELAPSED_EXT,e)))},end(){const n=performance.now()
if(w[c]=n-T,s[c]=n-u,u=n,m&&b)for(E?_.endQuery(m.TIME_ELAPSED_EXT):m.endQueryEXT(m.TIME_ELAPSED_EXT),x.push(b),b=null;x.length;){if(_.getParameter(m.GPU_DISJOINT_EXT)){x.forEach(g),x.length=0
break}if(!f(x[0]))break
const e=y(x[0])/1e6
p=null==p?e:.85*p+.15*e,g(x.shift())}c=(c+1)%90,l<90&&l++,c%10==0&&function(){const n=l||1
let t=0,o=0
for(let e=0;e<n;e++)t+=s[e],o+=w[e]
t/=n,o/=n
const r=1e3/Math.max(t,.01),d=window.__render_scale??.75,a=0==window.__text_dirty?"clean":"DIRTY",i=window.realres?`${window.realres[0]}\xd7${window.realres[1]}`:"\u2014",c=window.res?`${window.res[0]}\xd7${window.res[1]}`:"\u2014",u=(e,n)=>String(e).padStart(n),_=null==p?m?"pending":"n/a (no timer ext)":`${u(p.toFixed(2),6)} ms`,E=["text","fb_shader","composite","tail","logo","debug"].map(e=>{return`${e}=${h[e]?(n=h[e].ewma,("number"==typeof n?n.toFixed(2):"  \u2014  ").padStart(5)):"  \u2014  "}`
var n}).join("  ")
e.textContent=`fps       ${u(r.toFixed(1),6)}\nframe     ${u(t.toFixed(2),6)} ms   (rAF\u2192rAF)\njs+submit ${u(o.toFixed(2),6)} ms   (inside draw)\ngpu       ${_}\ntext      ${a}\nscale     ${d}   canvas ${c} \u2192 ${i}\n\nsections (ms ewma):\n${E}`}()}},setInterval(()=>{if(!l)return
const e=l
let n=0,t=0
for(let o=0;o<e;o++)n+=s[o],t+=w[o]
n/=e,t/=e,Math.max(n,.01),window.__render_scale,window.__text_dirty,window.devicePixelRatio,window.res&&(window.res[0],window.res[1]),window.realres&&(window.realres[0],window.realres[1])
const o=window.draw_state&&window.draw_state.color_lut_fb
o&&(o.width,o.height),window.realres&&(window.realres[0]*window.realres[1]/1e6).toFixed(2),["text","fb_shader","composite","tail","logo","debug"].map(e=>{return`${e}=${h[e]?(n=h[e].ewma,n.toFixed(2).padStart(5)):"  \u2014  "}`
var n}).join(" ")},1e3)}()
