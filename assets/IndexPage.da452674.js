import{c as u,h as _}from"./render.9c1cfe0b.js";import{c as m,h,g as f,U as p,F as r,O as l,Y as a,Q as g,R as q,S as v,G as d,I as c,J as k,N as i,K as x}from"./index.27743c2d.js";import{u as C,a as y}from"./use-dark.e8e9fcfd.js";import{e as B}from"./links.f12d60e2.js";const w=u({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:o}){const s=m(()=>`q-card__section q-card__section--${e.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(e.tag,{class:s.value},_(o.default))}}),S=u({name:"QCard",props:{...C,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:o}){const{proxy:{$q:s}}=f(),n=y(e,s),t=m(()=>"q-card"+(n.value===!0?" q-card--dark q-dark":"")+(e.bordered===!0?" q-card--bordered":"")+(e.square===!0?" q-card--square no-border-radius":"")+(e.flat===!0?" q-card--flat no-shadow":""));return()=>h(e.tag,{class:t.value},_(o.default))}}),b={class:"row"},Q={class:"col-md-10 col-sm-12 offset-md-1"},D=a("h2",null,"Welcome to the LRF Tools Page",-1),N=a("h4",null,"Please select a tool",-1),P={class:"q-pa-md row items-start q-gutter-md"},z={class:"text-h6"},F={class:"text-subtitle2"},$={__name:"IndexPage",setup(e){return(o,s)=>{const n=p("router-link");return r(),l("div",b,[a("div",Q,[D,N,a("div",P,[(r(!0),l(g,null,q(v(B),t=>(r(),d(n,{key:t.title,to:t.link,style:{"text-decoration":"none",color:"inherit"}},{default:c(()=>[t.title!=="Homepage"?(r(),d(S,{key:0},{default:c(()=>[k(w,{class:"bg-primary text-white"},{default:c(()=>[a("div",z,i(t.title),1),a("div",F,i(t.caption),1)]),_:2},1024)]),_:2},1024)):x("",!0)]),_:2},1032,["to"]))),128))])])])}}};export{$ as default};