import{d as _,Q as h}from"./QBtn.f28fd060.js";import{Q as x,e as y}from"./export-file.37912b19.js";import{r as v,F as b,O as k,Y as d,J as c,I as m,Q as w}from"./index.27743c2d.js";import"./render.9c1cfe0b.js";import"./use-dark.e8e9fcfd.js";import"./format.8f2d0f18.js";const F=d("h2",null,"Literature Page",-1),Q={class:"q-pa-md q-gutter-sm"},U=d("span",{class:"q-ml-md"}," Upload ",-1),N={__name:"LiteraturePage",setup(V){const r=v(null),t=v({loading:!1,percentage:0}),f=()=>{t.value.loading=!0,t.value.percentage=0;let n={};var a=new FileReader;a.readAsText(r.value,"UTF-8"),a.onload=async u=>{let i=u.target.result.split(`
@`),o={};for(let e=1;e<i.length;e++){const l=i[e].split("{")[0];o[l]||(o[l]=[]),o[l].push(i[e])}o.all=i;const p=Object.keys(o);for(let e=0;e<p.length;e++){const l=p[e],g=await(await fetch("https://literature.logge.workers.dev/",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({input:o[l].join(`
@`),category:l})})).text();console.log(l,"Success:",g),t.value.percentage=e/p.length*100,n[l]=g}t.value.percentage=100,t.value.loading=!1;for(const e in n)y(`publish_${e}.mods`,n[e])},a.onerror=function(u){alert("error reading file")};const s=setInterval(()=>{t.value.percentage+=10,t.value.percentage>=100&&(clearInterval(s),t.value.loading=!1,t.value.percentage=0)},1e3)};return(n,a)=>(b(),k(w,null,[F,d("div",Q,[c(x,{modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=s=>r.value=s),label:"Upload Citavi Export",filled:"",append:"",style:{"max-width":"300px"},clearable:""},{prepend:m(()=>[c(h,{name:"attach_file"})]),_:1},8,["modelValue"]),c(_,{disable:!r.value,loading:t.value.loading,percentage:t.value.percentage,"dark-percentage":"",unelevated:"",color:"blue","text-color":"white",onClick:a[1]||(a[1]=s=>f()),icon:"cloud_upload"},{default:m(()=>[U]),_:1},8,["disable","loading","percentage"])])],64))}};export{N as default};
