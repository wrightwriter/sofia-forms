!function(){function n(){if(window.__promo_mode)return
const n=document.getElementById("sf-backdrop")
if(!n)return
let e=0
function t(){n.classList.add("open"),history.pushState({sfPanel:1},""),window.innerHeight>window.innerWidth&&(e=1,window.is_paused=1,window.q5?.noLoop())}function o(){n.classList.remove("open"),e&&(e=0,window.is_paused=0,window.q5?.loop())}n.addEventListener("click",e=>{e.target===n&&o()}),document.getElementById("sf-close").addEventListener("click",o)
let s=!(navigator.maxTouchPoints>0)
document.addEventListener("click",e=>{if(!s)return void(s=1)
if(n.classList.contains("open"))return
const o=e.target
o&&(o.closest("#sf-backdrop")||o.closest("#sf-logos"))||t()}),document.addEventListener("keydown",e=>{"Escape"===e.key&&n.classList.contains("open")&&o()}),window.addEventListener("popstate",e=>{n.classList.contains("open")&&o()}),window.__sf_open_panel=t,window.__sf_close_panel=o}"loading"===document.readyState?document.addEventListener("DOMContentLoaded",n):n()}()
