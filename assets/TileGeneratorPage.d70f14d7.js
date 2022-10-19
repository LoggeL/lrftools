import{d as oe,Q as re}from"./QBtn.f28fd060.js";import{u as ie,a as se,b as fe,c as de,d as ce,f as me,g as ge,h as J,i as ve,Q as he,e as ke}from"./export-file.37912b19.js";import{r as E,w as z,b as L,a2 as xe,j as we,c as B,a as ye,o as ne,h as D,g as Me,v as Y,F as be,O as Ce,Y as j,J as U,I as X,z as ee,a3 as te,Q as Ve}from"./index.27743c2d.js";import{c as Se}from"./render.9c1cfe0b.js";import"./use-dark.e8e9fcfd.js";import"./format.8f2d0f18.js";const ae={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},Q={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},ue=Object.keys(Q);ue.forEach(e=>{Q[e].regex=new RegExp(Q[e].pattern)});const Fe=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+ue.join("")+"])|(.)","g"),le=/[.*+?^${}()|[\]\\]/g,w=String.fromCharCode(1),Re={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function pe(e,b,k,y){let v,m,p,F;const C=E(null),x=E(s());function _(){return e.autogrow===!0||["textarea","text","search","url","tel","password"].includes(e.type)}z(()=>e.type+e.autogrow,d),z(()=>e.mask,t=>{if(t!==void 0)q(x.value,!0);else{const l=P(x.value);d(),e.modelValue!==l&&b("update:modelValue",l)}}),z(()=>e.fillMask+e.reverseFillMask,()=>{C.value===!0&&q(x.value,!0)}),z(()=>e.unmaskedValue,()=>{C.value===!0&&q(x.value)});function s(){if(d(),C.value===!0){const t=Z(P(e.modelValue));return e.fillMask!==!1?O(t):t}return e.modelValue}function c(t){if(t<v.length)return v.slice(-t);let l="",n=v;const u=n.indexOf(w);if(u>-1){for(let o=t-n.length;o>0;o--)l+=w;n=n.slice(0,u)+l+n.slice(u)}return n}function d(){if(C.value=e.mask!==void 0&&e.mask.length>0&&_(),C.value===!1){F=void 0,v="",m="";return}const t=ae[e.mask]===void 0?e.mask:ae[e.mask],l=typeof e.fillMask=="string"&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",n=l.replace(le,"\\$&"),u=[],o=[],r=[];let h=e.reverseFillMask===!0,i="",g="";t.replace(Fe,(S,T,a,M,I)=>{if(M!==void 0){const V=Q[M];r.push(V),g=V.negate,h===!0&&(o.push("(?:"+g+"+)?("+V.pattern+"+)?(?:"+g+"+)?("+V.pattern+"+)?"),h=!1),o.push("(?:"+g+"+)?("+V.pattern+")?")}else if(a!==void 0)i="\\"+(a==="\\"?"":a),r.push(a),u.push("([^"+i+"]+)?"+i+"?");else{const V=T!==void 0?T:I;i=V==="\\"?"\\\\\\\\":V.replace(le,"\\\\$&"),r.push(V),u.push("([^"+i+"]+)?"+i+"?")}});const A=new RegExp("^"+u.join("")+"("+(i===""?".":"[^"+i+"]")+"+)?"+(i===""?"":"["+i+"]*")+"$"),N=o.length-1,f=o.map((S,T)=>T===0&&e.reverseFillMask===!0?new RegExp("^"+n+"*"+S):T===N?new RegExp("^"+S+"("+(g===""?".":g)+"+)?"+(e.reverseFillMask===!0?"$":n+"*")):new RegExp("^"+S));p=r,F=S=>{const T=A.exec(S);T!==null&&(S=T.slice(1).join(""));const a=[],M=f.length;for(let I=0,V=S;I<M;I++){const H=f[I].exec(V);if(H===null)break;V=V.slice(H.shift().length),a.push(...H)}return a.length>0?a.join(""):S},v=r.map(S=>typeof S=="string"?S:w).join(""),m=v.split(w).join(l)}function q(t,l,n){const u=y.value,o=u.selectionEnd,r=u.value.length-o,h=P(t);l===!0&&d();const i=Z(h),g=e.fillMask!==!1?O(i):i,A=x.value!==g;u.value!==g&&(u.value=g),A===!0&&(x.value=g),document.activeElement===u&&L(()=>{if(g===m){const f=e.reverseFillMask===!0?m.length:0;u.setSelectionRange(f,f,"forward");return}if(n==="insertFromPaste"&&e.reverseFillMask!==!0){const f=o-1;R.right(u,f,f);return}if(["deleteContentBackward","deleteContentForward"].indexOf(n)>-1){const f=e.reverseFillMask===!0?o===0?g.length>i.length?1:0:Math.max(0,g.length-(g===m?0:Math.min(i.length,r)+1))+1:o;u.setSelectionRange(f,f,"forward");return}if(e.reverseFillMask===!0)if(A===!0){const f=Math.max(0,g.length-(g===m?0:Math.min(i.length,r+1)));f===1&&o===1?u.setSelectionRange(f,f,"forward"):R.rightReverse(u,f,f)}else{const f=g.length-r;u.setSelectionRange(f,f,"backward")}else if(A===!0){const f=Math.max(0,v.indexOf(w),Math.min(i.length,o)-1);R.right(u,f,f)}else{const f=o-1;R.right(u,f,f)}});const N=e.unmaskedValue===!0?P(g):g;String(e.modelValue)!==N&&k(N,!0)}function W(t,l,n){const u=Z(P(t.value));l=Math.max(0,v.indexOf(w),Math.min(u.length,l)),t.setSelectionRange(l,n,"forward")}const R={left(t,l,n,u){const o=v.slice(l-1).indexOf(w)===-1;let r=Math.max(0,l-1);for(;r>=0;r--)if(v[r]===w){l=r,o===!0&&l++;break}if(r<0&&v[l]!==void 0&&v[l]!==w)return R.right(t,0,0);l>=0&&t.setSelectionRange(l,u===!0?n:l,"backward")},right(t,l,n,u){const o=t.value.length;let r=Math.min(o,n+1);for(;r<=o;r++)if(v[r]===w){n=r;break}else v[r-1]===w&&(n=r);if(r>o&&v[n-1]!==void 0&&v[n-1]!==w)return R.left(t,o,o);t.setSelectionRange(u?l:n,n,"forward")},leftReverse(t,l,n,u){const o=c(t.value.length);let r=Math.max(0,l-1);for(;r>=0;r--)if(o[r-1]===w){l=r;break}else if(o[r]===w&&(l=r,r===0))break;if(r<0&&o[l]!==void 0&&o[l]!==w)return R.rightReverse(t,0,0);l>=0&&t.setSelectionRange(l,u===!0?n:l,"backward")},rightReverse(t,l,n,u){const o=t.value.length,r=c(o),h=r.slice(0,n+1).indexOf(w)===-1;let i=Math.min(o,n+1);for(;i<=o;i++)if(r[i-1]===w){n=i,n>0&&h===!0&&n--;break}if(i>o&&r[n-1]!==void 0&&r[n-1]!==w)return R.leftReverse(t,o,o);t.setSelectionRange(u===!0?l:n,n,"forward")}};function G(t){if(xe(t)===!0)return;const l=y.value,n=l.selectionStart,u=l.selectionEnd;if(t.keyCode===37||t.keyCode===39){const o=R[(t.keyCode===39?"right":"left")+(e.reverseFillMask===!0?"Reverse":"")];t.preventDefault(),o(l,n,u,t.shiftKey)}else t.keyCode===8&&e.reverseFillMask!==!0&&n===u?R.left(l,n,u,!0):t.keyCode===46&&e.reverseFillMask===!0&&n===u&&R.rightReverse(l,n,u,!0)}function Z(t){if(t==null||t==="")return"";if(e.reverseFillMask===!0)return K(t);const l=p;let n=0,u="";for(let o=0;o<l.length;o++){const r=t[n],h=l[o];if(typeof h=="string")u+=h,r===h&&n++;else if(r!==void 0&&h.regex.test(r))u+=h.transform!==void 0?h.transform(r):r,n++;else return u}return u}function K(t){const l=p,n=v.indexOf(w);let u=t.length-1,o="";for(let r=l.length-1;r>=0&&u>-1;r--){const h=l[r];let i=t[u];if(typeof h=="string")o=h+o,i===h&&u--;else if(i!==void 0&&h.regex.test(i))do o=(h.transform!==void 0?h.transform(i):i)+o,u--,i=t[u];while(n===r&&i!==void 0&&h.regex.test(i));else return o}return o}function P(t){return typeof t!="string"||F===void 0?typeof t=="number"?F(""+t):t:F(t)}function O(t){return m.length-t.length<=0?t:e.reverseFillMask===!0&&t.length>0?m.slice(0,-t.length)+t:t+m.slice(t.length)}return{innerValue:x,hasMask:C,moveCursorForPaste:W,updateMaskValue:q,onMaskedKeydown:G}}const _e=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Ae=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,Ee=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,Te=/[a-z0-9_ -]$/i;function Ie(e){return function(k){if(k.type==="compositionend"||k.type==="change"){if(k.target.qComposing!==!0)return;k.target.qComposing=!1,e(k)}else k.type==="compositionupdate"&&k.target.qComposing!==!0&&typeof k.data=="string"&&(we.is.firefox===!0?Te.test(k.data)===!1:_e.test(k.data)===!0||Ae.test(k.data)===!0||Ee.test(k.data)===!0)===!0&&(k.target.qComposing=!0)}}const $=Se({name:"QInput",inheritAttrs:!1,props:{...ie,...Re,...se,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...fe,"paste","change"],setup(e,{emit:b,attrs:k}){const{proxy:y}=Me(),{$q:v}=y,m={};let p=NaN,F,C,x,_;const s=E(null),c=de(e),{innerValue:d,hasMask:q,moveCursorForPaste:W,updateMaskValue:R,onMaskedKeydown:G}=pe(e,b,g,s),Z=ce(e,!0),K=B(()=>J(d.value)),P=Ie(i),O=me(),t=B(()=>e.type==="textarea"||e.autogrow===!0),l=B(()=>t.value===!0||["text","search","url","tel","password"].includes(e.type)),n=B(()=>{const a={...O.splitAttrs.listeners.value,onInput:i,onPaste:h,onChange:N,onBlur:f,onFocus:Y};return a.onCompositionstart=a.onCompositionupdate=a.onCompositionend=P,q.value===!0&&(a.onKeydown=G),e.autogrow===!0&&(a.onAnimationend=A),a}),u=B(()=>{const a={tabindex:0,"data-autofocus":e.autofocus===!0||void 0,rows:e.type==="textarea"?6:void 0,"aria-label":e.label,name:c.value,...O.splitAttrs.attributes.value,id:O.targetUid.value,maxlength:e.maxlength,disabled:e.disable===!0,readonly:e.readonly===!0};return t.value===!1&&(a.type=e.type),e.autogrow===!0&&(a.rows=1),a});z(()=>e.type,()=>{s.value&&(s.value.value=e.modelValue)}),z(()=>e.modelValue,a=>{if(q.value===!0){if(C===!0&&(C=!1,String(a)===p))return;R(a)}else d.value!==a&&(d.value=a,e.type==="number"&&m.hasOwnProperty("value")===!0&&(F===!0?F=!1:delete m.value));e.autogrow===!0&&L(A)}),z(()=>e.autogrow,a=>{a===!0?L(A):s.value!==null&&k.rows>0&&(s.value.style.height="auto")}),z(()=>e.dense,()=>{e.autogrow===!0&&L(A)});function o(){ve(()=>{const a=document.activeElement;s.value!==null&&s.value!==a&&(a===null||a.id!==O.targetUid.value)&&s.value.focus({preventScroll:!0})})}function r(){s.value!==null&&s.value.select()}function h(a){if(q.value===!0&&e.reverseFillMask!==!0){const M=a.target;W(M,M.selectionStart,M.selectionEnd)}b("paste",a)}function i(a){if(!a||!a.target)return;if(e.type==="file"){b("update:modelValue",a.target.files);return}const M=a.target.value;if(a.target.qComposing===!0){m.value=M;return}if(q.value===!0)R(M,!1,a.inputType);else if(g(M),l.value===!0&&a.target===document.activeElement){const{selectionStart:I,selectionEnd:V}=a.target;I!==void 0&&V!==void 0&&L(()=>{a.target===document.activeElement&&M.indexOf(a.target.value)===0&&a.target.setSelectionRange(I,V)})}e.autogrow===!0&&A()}function g(a,M){_=()=>{e.type!=="number"&&m.hasOwnProperty("value")===!0&&delete m.value,e.modelValue!==a&&p!==a&&(p=a,M===!0&&(C=!0),b("update:modelValue",a),L(()=>{p===a&&(p=NaN)})),_=void 0},e.type==="number"&&(F=!0,m.value=a),e.debounce!==void 0?(clearTimeout(x),m.value=a,x=setTimeout(_,e.debounce)):_()}function A(){requestAnimationFrame(()=>{const a=s.value;if(a!==null){const M=a.parentNode.style,{overflow:I}=a.style;v.platform.is.firefox!==!0&&(a.style.overflow="hidden"),a.style.height="1px",M.marginBottom=a.scrollHeight-1+"px",a.style.height=a.scrollHeight+"px",a.style.overflow=I,M.marginBottom=""}})}function N(a){P(a),clearTimeout(x),_!==void 0&&_(),b("change",a.target.value)}function f(a){a!==void 0&&Y(a),clearTimeout(x),_!==void 0&&_(),F=!1,C=!1,delete m.value,e.type!=="file"&&setTimeout(()=>{s.value!==null&&(s.value.value=d.value!==void 0?d.value:"")})}function S(){return m.hasOwnProperty("value")===!0?m.value:d.value!==void 0?d.value:""}ye(()=>{f()}),ne(()=>{e.autogrow===!0&&A()}),Object.assign(O,{innerValue:d,fieldClass:B(()=>`q-${t.value===!0?"textarea":"input"}`+(e.autogrow===!0?" q-textarea--autogrow":"")),hasShadow:B(()=>e.type!=="file"&&typeof e.shadowText=="string"&&e.shadowText.length>0),inputRef:s,emitValue:g,hasValue:K,floatingLabel:B(()=>K.value===!0||J(e.displayValue)),getControl:()=>D(t.value===!0?"textarea":"input",{ref:s,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...u.value,...n.value,...e.type!=="file"?{value:S()}:Z.value}),getShadowControl:()=>D("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(t.value===!0?"":" text-no-wrap")},[D("span",{class:"invisible"},S()),D("span",e.shadowText)])});const T=ge(O);return Object.assign(y,{focus:o,select:r,getNativeElement:()=>s.value}),T}});const qe=j("h2",null,"Tile Generator",-1),Oe={class:"row"},Pe={class:"col-3 q-pa-md q-gutter-sm"},Be=j("h4",{class:"q-mb-xs"},"Settings",-1),Ue=j("span",{class:"q-ml-md"}," Download ",-1),je={class:"col q-pa-md q-gutter-sm"},ze={class:"q-mb-xs"},Qe={__name:"TileGeneratorPage",setup(e){const b=E(null),k=E(null),y=E(null),v=E("LRF"),m=E(100),p=E("#005a8d"),F=E(75),C=E(800);ne(()=>{});const x=()=>{k.value=URL.createObjectURL(b.value);const s=y.value.getContext("2d"),c=new Image;c.onload=()=>{y.value.width=C.value,y.value.height=c.height*(C.value/c.width),s.drawImage(c,0,0,y.value.width,y.value.height),s.fillStyle=p.value,s.globalAlpha=F.value/100,s.fillRect(0,0,y.value.width,y.value.height),s.globalAlpha=1,s.font=`bold ${m.value}px Roboto`,s.fillStyle="white",s.textAlign="center",s.textBaseline="middle",s.fillText(v.value,y.value.width/2,y.value.height/2)},c.src=k.value},_=()=>{y.value.toBlob(s=>{ke(b.value.name,s)})};return b.value&&x(),(s,c)=>(be(),Ce(Ve,null,[qe,j("div",Oe,[j("div",Pe,[Be,U(he,{modelValue:b.value,"onUpdate:modelValue":[c[0]||(c[0]=d=>b.value=d),x],label:"Select Source Image",filled:"",append:"",accept:"image/*",clearable:""},{prepend:X(()=>[U(re,{name:"attach_file"})]),_:1},8,["modelValue"]),U($,{label:"Width",type:"number",filled:"",modelValue:C.value,"onUpdate:modelValue":[c[1]||(c[1]=d=>C.value=d),x],dense:""},null,8,["modelValue"]),U($,{label:"Fill Text",filled:"",modelValue:v.value,"onUpdate:modelValue":[c[2]||(c[2]=d=>v.value=d),x],dense:""},null,8,["modelValue"]),U($,{label:"Font Size",filled:"",modelValue:m.value,"onUpdate:modelValue":[c[3]||(c[3]=d=>m.value=d),x],dense:""},null,8,["modelValue"]),U($,{label:"Color",filled:"",modelValue:p.value,"onUpdate:modelValue":[c[4]||(c[4]=d=>p.value=d),x],dense:""},null,8,["modelValue"]),U($,{type:"number",label:"Opacity",max:"100",min:"0",filled:"",modelValue:F.value,"onUpdate:modelValue":[c[5]||(c[5]=d=>F.value=d),x],dense:""},null,8,["modelValue"]),U(oe,{disable:!b.value,"dark-percentage":"",unelevated:"",color:"blue","text-color":"white",onClick:c[6]||(c[6]=d=>_()),icon:"download"},{default:X(()=>[Ue]),_:1},8,["disable"])]),j("div",je,[ee(j("h4",ze,"Output",512),[[te,b.value]]),ee(j("canvas",{ref_key:"canvas",ref:y},null,512),[[te,b.value]])])])],64))}};export{Qe as default};
