!function(){if(window.__opt_lut=0,window.__opt_halfres=0,window.__opt_fbm_octaves=2,window.__render_scale=1,window.__opt_show_debug=1,window.__opt_prebake_fbm=1,window.__opt_fbm_256=1,!new URLSearchParams(location.search).has("debug"))return
const e=document.createElement("div")
e.style.cssText="position:fixed;top:8px;right:8px;z-index:99999;font:11px/1.35 ui-monospace,Menlo,Consolas,monospace;color:#0f0;background:rgba(0,0,0,.72);padding:10px 12px;border-radius:4px;margin:0;pointer-events:auto;user-select:none;display:flex;flex-direction:column;gap:6px;min-width:180px;"
const t=document.createElement("div")
t.style.cssText="font-weight:700;border-bottom:1px solid #0f0;padding-bottom:4px;margin-bottom:2px;",t.textContent="OPT PANEL "
const n=document.createElement("span")
n.textContent="[\u2212]",n.style.cssText="float:right;cursor:pointer;",t.appendChild(n),e.appendChild(t)
const o=document.createElement("div")
function d(e){const t=document.createElement("label")
t.style.cssText="display:flex;justify-content:space-between;align-items:center;gap:6px;"
const n=document.createElement("span")
return n.textContent=e,t.appendChild(n),o.appendChild(t),t}function i(e,t){const n=d(e),o=document.createElement("input")
return o.type="checkbox",o.checked=!!t,n.appendChild(o),o}function c(e){const t=document.createElement("button")
return t.textContent=e,t.style.cssText="background:#000;color:#0f0;border:1px solid #0f0;font:inherit;padding:3px 6px;cursor:pointer;",o.appendChild(t),t}o.style.cssText="display:flex;flex-direction:column;gap:6px;",e.appendChild(o)
const s=i("LUT color",0),a=i("Half-res feedback",0),l=i("Prebake FBM (res/4)",1),r=i("FBM tex 256x256",1),_=function(){const e=d("FBM octaves"),t=document.createElement("select")
t.style.cssText="background:#000;color:#0f0;border:1px solid #0f0;font:inherit;"
for(const[e,n]of[[1,"1"],[2,"2 (original)"],[3,"3"],[4,"4"]]){const o=document.createElement("option")
o.value=String(e),o.textContent=n,2===e&&(o.selected=1),t.appendChild(o)}return e.appendChild(t),t}(),p=i("Debug strip + GUI",1),[w,u]=function(){const e=d("Render scale"),t=document.createElement("input")
t.type="range",t.min=String(.3),t.max=String(1),t.step=String(.05),t.value=String(1),t.style.width="80px"
const n=document.createElement("span")
return n.style.cssText="min-width:2.5em;text-align:right;",n.textContent=1..toFixed(2),e.appendChild(t),e.appendChild(n),[t,n]}(),m=c("\u23f8 Pause"),f=c("GPU sync: OFF"),h=c("All OFF (original)"),x=c("All ON (optimized)"),b=c("Show fallback page")
window.__opt_lut=0,window.__opt_halfres=0,window.__opt_prebake_fbm=1,window.__opt_fbm_octaves=2,window.__render_scale=1
const g=()=>{window.dispatchEvent(new Event("resize")),window.__text_dirty=1}
function v(e){window.__opt_show_debug=e,p.checked=e
const t=window.gui
if(!t)return
const n=e?"":"none"
t.ctrls_html_elem&&(t.ctrls_html_elem.style.display=n),t.html_elem_time&&(t.html_elem_time.style.display=n)}s.addEventListener("change",()=>{window.__opt_lut=s.checked}),a.addEventListener("change",()=>{window.__opt_halfres=a.checked}),l.addEventListener("change",()=>{window.__opt_prebake_fbm=l.checked}),r.addEventListener("change",()=>{window.__opt_fbm_256=r.checked,window.dispatchEvent(new Event("resize"))}),p.addEventListener("change",()=>v(p.checked)),window.addEventListener("keydown",e=>{"`"===e.key&&v(!p.checked)}),_.addEventListener("change",()=>{window.__opt_fbm_octaves=parseInt(_.value,10)}),w.addEventListener("input",()=>{window.__render_scale=parseFloat(w.value),u.textContent=(+w.value).toFixed(2),g()}),f.addEventListener("click",()=>{window.__perf_sync=!window.__perf_sync,f.textContent="GPU sync: "+(window.__perf_sync?"ON":"OFF")})
const y=e=>{window.__opt_lut=e.lut,window.__opt_halfres=e.halfres,window.__opt_fbm_octaves=e.fbm,window.__render_scale=e.scale,s.checked=e.lut,a.checked=e.halfres,_.value=String(e.fbm),w.value=String(e.scale),u.textContent=e.scale.toFixed(2),g()}
h.addEventListener("click",()=>y({lut:0,halfres:0,fbm:2,scale:1})),x.addEventListener("click",()=>y({lut:1,halfres:0,fbm:1,scale:.75})),m.addEventListener("click",()=>{const e=!window.is_paused
window.is_paused=e,m.textContent=e?"\u25b6 Play":"\u23f8 Pause"}),b.addEventListener("click",()=>{window.__sf_show_fallback&&window.__sf_show_fallback(null)}),n.addEventListener("click",()=>{const e="none"===o.style.display
o.style.display=e?"flex":"none",n.textContent=e?"[\u2212]":"[+]"}),e.addEventListener("click",e=>e.stopPropagation())
const E=()=>document.body&&document.body.appendChild(e)
"loading"===document.readyState?document.addEventListener("DOMContentLoaded",E):E()}()
