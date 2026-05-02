!function(){if(!new URLSearchParams(location.search).has("debug"))return
const e=document.createElement("pre")
e.style.cssText="position:fixed;top:8px;left:8px;z-index:99999;font:12px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#0f0;background:rgba(0,0,0,.7);padding:8px 10px;border-radius:4px;margin:0;pointer-events:auto;white-space:pre;mix-blend-mode:normal;user-select:none;",e.textContent="perf: waiting for draw\u2026"
const t=()=>document.body&&document.body.appendChild(e)
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",t):t()
let n=null
const o=document.createElement("button")
o.textContent="vsync: ON",o.style.cssText="display:block;margin-top:6px;width:100%;background:#000;color:#0f0;border:1px solid #0f0;font:12px ui-monospace,Menlo,Consolas,monospace;padding:3px 6px;cursor:pointer;text-align:left;"
let r=0
o.addEventListener("click",()=>{r=!r,o.textContent=r?"vsync: OFF (uncapped)":"vsync: ON",r?(window.q5&&window.q5.noLoop(),n=setInterval(()=>window.q5&&window.q5.redraw(),1)):(clearInterval(n),n=null,window.q5&&window.q5.loop())})
const d=document.createElement("button")
d.textContent="GPU sync: OFF",d.style.cssText=o.style.cssText,d.addEventListener("click",()=>{window.__perf_sync=!window.__perf_sync,d.textContent="GPU sync: "+(window.__perf_sync?"ON (slow!)":"OFF")})
const a=document.createElement("div")
a.style.cssText="pointer-events:auto;",a.appendChild(e),a.appendChild(o),a.appendChild(d)
const i=()=>document.body&&document.body.appendChild(a)
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",i):i()
const s=new Float32Array(90),l=new Float32Array(90)
let w=0,c=0,p=null,u=performance.now(),_=null,m=null,x=0,f=[]
const E=e=>x?_.getQueryParameter(e,_.QUERY_RESULT_AVAILABLE):m.getQueryObjectEXT(e,m.QUERY_RESULT_AVAILABLE_EXT),y=e=>x?_.getQueryParameter(e,_.QUERY_RESULT):m.getQueryObjectEXT(e,m.QUERY_RESULT_EXT),$=e=>x?_.deleteQuery(e):m.deleteQueryEXT(e)
let g=0,T=null
const b=Object.create(null)
let h=null,F=0
window.__perf={section:function(e){const t=performance.now()
if(window.__perf_sync&&_)try{_.finish()}catch(e){}if(h){const e=(window.__perf_sync&&_?performance.now():t)-F,n=b[h]||(b[h]={ewma:e,last:e})
n.ewma=.9*n.ewma+.1*e,n.last=e}h=e,F=window.__perf_sync&&_?performance.now():t},start(){var e
g=performance.now(),(_||window.q5&&window.q5.drawingContext&&(_=window.q5.drawingContext,x=!!_.createQuery,m=_.getExtension("EXT_disjoint_timer_query_webgl2")||_.getExtension("EXT_disjoint_timer_query"),1))&&m&&(T=x?_.createQuery():m.createQueryEXT(),T&&(e=T,x?_.beginQuery(m.TIME_ELAPSED_EXT,e):m.beginQueryEXT(m.TIME_ELAPSED_EXT,e)))},end(){const t=performance.now()
if(l[w]=t-g,s[w]=t-u,u=t,m&&T)for(x?_.endQuery(m.TIME_ELAPSED_EXT):m.endQueryEXT(m.TIME_ELAPSED_EXT),f.push(T),T=null;f.length;){if(_.getParameter(m.GPU_DISJOINT_EXT)){f.forEach($),f.length=0
break}if(!E(f[0]))break
const e=y(f[0])/1e6
p=null==p?e:.85*p+.15*e,$(f.shift())}w=(w+1)%90,c<90&&c++,w%10==0&&function(){const t=c||1
let n=0,o=0
for(let e=0;e<t;e++)n+=s[e],o+=l[e]
n/=t,o/=t
const r=1e3/Math.max(n,.01),d=window.__render_scale??.75,a=0==window.__text_dirty?"clean":"DIRTY",i=window.realres?`${window.realres[0]}\xd7${window.realres[1]}`:"\u2014",w=window.res?`${window.res[0]}\xd7${window.res[1]}`:"\u2014",u=(e,t)=>String(e).padStart(t),_=null==p?m?"pending":"n/a (no timer ext)":`${u(p.toFixed(2),6)} ms`,x=["text","fb_shader","composite","tail","logo","debug"].map(e=>{return`${e}=${b[e]?(t=b[e].ewma,("number"==typeof t?t.toFixed(2):"  \u2014  ").padStart(5)):"  \u2014  "}`
var t}).join("  ")
e.textContent=`fps       ${u(r.toFixed(1),6)}\nframe     ${u(n.toFixed(2),6)} ms   (rAF\u2192rAF)\njs+submit ${u(o.toFixed(2),6)} ms   (inside draw)\ngpu       ${_}\ntext      ${a}\nscale     ${d}   canvas ${w} \u2192 ${i}\n\nsections (ms ewma):\n${x}`}()}},setInterval(()=>{if(!c)return
const e=c
let t=0,n=0
for(let o=0;o<e;o++)t+=s[o],n+=l[o]
t/=e,n/=e
const o=1e3/Math.max(t,.01),d=window.__render_scale??.75,a=0==window.__text_dirty?"clean":"DIRTY",i=window.devicePixelRatio||1,w=window.res?`${window.res[0]}\xd7${window.res[1]}`:"\u2014",u=window.realres?`${window.realres[0]}\xd7${window.realres[1]}`:"\u2014",_=window.draw_state&&window.draw_state.color_lut_fb,m=_?`ON (${_.width}\xd7${_.height})`:"off",x=window.realres?(window.realres[0]*window.realres[1]/1e6).toFixed(2):"\u2014",f=["text","fb_shader","composite","tail","logo","debug"].map(e=>{return`${e}=${b[e]?(t=b[e].ewma,t.toFixed(2).padStart(5)):"  \u2014  "}`
var t}).join(" ")
console.log(`[sofia] ${o.toFixed(1).padStart(5)} fps \u2502 frame ${t.toFixed(2).padStart(5)} ms \u2502 js ${n.toFixed(2).padStart(5)} ms \u2502 gpu ${null==p?"   \u2014  ":p.toFixed(2).padStart(5)+" ms"} \u2502 ${w}\u2192${u} (${x} Mpx) \u2502 scale ${d} \u2502 dpr ${i} \u2502 text ${a} \u2502 lut ${m}${window.__perf_sync?" \u2502 SYNC":""}${r?" \u2502 UNCAPPED":""}\n         sections (ms): ${f}`)},1e3)}()
