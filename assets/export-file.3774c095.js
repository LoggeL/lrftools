import{c as ce,l as ge,m as be,f as pe,Q as L,n as he,R as ye,o as xe,h as H}from"./QBtn.b54b9205.js";import{u as de,a as fe,h as Ce}from"./format.68d54bab.js";import{c,h as v,g as E,s as Y,d as Se,w as U,o as ve,a as ne,Z as qe,r as k,_ as _e,$ as Fe,a0 as we,b as Re,m as ke,a1 as Ve,i as Ae,u as P,X as Be,v as ze,j as $e}from"./index.df07fd90.js";const Ee={xs:8,sm:10,md:14,lg:20,xl:24},De=ce({name:"QChip",props:{...de,...ge,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=E(),a=fe(e,n),u=be(e,Ee),d=c(()=>e.selected===!0||e.icon!==void 0),y=c(()=>e.selected===!0?e.iconSelected||n.iconSet.chip.selected:e.icon),S=c(()=>e.iconRemove||n.iconSet.chip.remove),p=c(()=>e.disable===!1&&(e.clickable===!0||e.selected!==null)),x=c(()=>{const f=e.outline===!0&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(e.outline===!1&&e.color!==void 0?` bg-${e.color}`:"")+(f?` text-${f} q-chip--colored`:"")+(e.disable===!0?" disabled":"")+(e.dense===!0?" q-chip--dense":"")+(e.outline===!0?" q-chip--outline":"")+(e.selected===!0?" q-chip--selected":"")+(p.value===!0?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(e.square===!0?" q-chip--square":"")+(a.value===!0?" q-chip--dark q-dark":"")}),w=c(()=>{const f=e.disable===!0?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},q={...f,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||n.lang.label.remove};return{chip:f,remove:q}});function $(f){f.keyCode===13&&V(f)}function V(f){e.disable||(o("update:selected",!e.selected),o("click",f))}function R(f){(f.keyCode===void 0||f.keyCode===13)&&(Y(f),e.disable===!1&&(o("update:modelValue",!1),o("remove")))}function m(){const f=[];p.value===!0&&f.push(v("div",{class:"q-focus-helper"})),d.value===!0&&f.push(v(L,{class:"q-chip__icon q-chip__icon--left",name:y.value}));const q=e.label!==void 0?[v("div",{class:"ellipsis"},[e.label])]:void 0;return f.push(v("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},he(t.default,q))),e.iconRight&&f.push(v(L,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),e.removable===!0&&f.push(v(L,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:S.value,...w.value.remove,onClick:R,onKeyup:R})),f}return()=>{if(e.modelValue===!1)return;const f={class:x.value,style:u.value};return p.value===!0&&Object.assign(f,w.value.chip,{onClick:V,onKeyup:$}),pe("div",f,m(),"ripple",e.ripple!==!1&&e.disable!==!0,()=>[[ye,e.ripple]])}}});function Oe({validate:e,resetValidation:t,requiresQForm:o}){const n=Se(qe,!1);if(n!==!1){const{props:a,proxy:u}=E();Object.assign(u,{validate:e,resetValidation:t}),U(()=>a.disable,d=>{d===!0?(typeof t=="function"&&t(),n.unbindComponent(u)):n.bindComponent(u)}),ve(()=>{a.disable!==!0&&n.bindComponent(u)}),ne(()=>{a.disable!==!0&&n.unbindComponent(u)})}else o===!0&&console.error("Parent QForm not found on useFormChild()!")}const oe=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,ie=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,re=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,K=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,Z=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,G={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>oe.test(e),hexaColor:e=>ie.test(e),hexOrHexaColor:e=>re.test(e),rgbColor:e=>K.test(e),rgbaColor:e=>Z.test(e),rgbOrRgbaColor:e=>K.test(e)||Z.test(e),hexOrRgbColor:e=>oe.test(e)||K.test(e),hexaOrRgbaColor:e=>ie.test(e)||Z.test(e),anyColor:e=>re.test(e)||K.test(e)||Z.test(e)},Ie=[!0,!1,"ondemand"],je={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>Ie.includes(e)}};function Te(e,t){const{props:o,proxy:n}=E(),a=k(!1),u=k(null),d=k(null);Oe({validate:R,resetValidation:V});let y=0,S;const p=c(()=>o.rules!==void 0&&o.rules!==null&&o.rules.length>0),x=c(()=>o.disable!==!0&&p.value===!0),w=c(()=>o.error===!0||a.value===!0),$=c(()=>typeof o.errorMessage=="string"&&o.errorMessage.length>0?o.errorMessage:u.value);U(()=>o.modelValue,()=>{m()}),U(()=>o.reactiveRules,q=>{q===!0?S===void 0&&(S=U(()=>o.rules,()=>{m(!0)})):S!==void 0&&(S(),S=void 0)},{immediate:!0}),U(e,q=>{q===!0?d.value===null&&(d.value=!1):d.value===!1&&(d.value=!0,x.value===!0&&o.lazyRules!=="ondemand"&&t.value===!1&&f())});function V(){y++,t.value=!1,d.value=null,a.value=!1,u.value=null,f.cancel()}function R(q=o.modelValue){if(x.value!==!0)return!0;const i=++y,F=t.value!==!0?()=>{d.value=!0}:()=>{},A=(r,g)=>{r===!0&&F(),a.value=r,u.value=g||null,t.value=!1},z=[];for(let r=0;r<o.rules.length;r++){const g=o.rules[r];let h;if(typeof g=="function"?h=g(q,G):typeof g=="string"&&G[g]!==void 0&&(h=G[g](q)),h===!1||typeof h=="string")return A(!0,h),!1;h!==!0&&h!==void 0&&z.push(h)}return z.length===0?(A(!1),!0):(t.value=!0,Promise.all(z).then(r=>{if(r===void 0||Array.isArray(r)===!1||r.length===0)return i===y&&A(!1),!0;const g=r.find(h=>h===!1||typeof h=="string");return i===y&&A(g!==void 0,g),g===void 0},r=>(i===y&&(console.error(r),A(!0)),!1)))}function m(q){x.value===!0&&o.lazyRules!=="ondemand"&&(d.value===!0||o.lazyRules!==!0&&q!==!0)&&f()}const f=_e(R,0);return ne(()=>{S!==void 0&&S(),f.cancel()}),Object.assign(n,{resetValidation:V,validate:R}),Fe(n,"hasError",()=>w.value),{isDirtyModel:d,hasRules:p,hasError:w,errorMessage:$,validate:R,resetValidation:V}}const ae=/^on[A-Z]/;function Pe(e,t){const o={listeners:k({}),attributes:k({})};function n(){const a={},u={};for(const d in e)d!=="class"&&d!=="style"&&ae.test(d)===!1&&(a[d]=e[d]);for(const d in t.props)ae.test(d)===!0&&(u[d]=t.props[d]);o.attributes.value=a,o.listeners.value=u}return we(n),n(),o}let J,W=0;const _=new Array(256);for(let e=0;e<256;e++)_[e]=(e+256).toString(16).substring(1);const Ue=(()=>{const e=typeof crypto<"u"?crypto:typeof window<"u"?window.crypto||window.msCrypto:void 0;if(e!==void 0){if(e.randomBytes!==void 0)return e.randomBytes;if(e.getRandomValues!==void 0)return t=>{const o=new Uint8Array(t);return e.getRandomValues(o),o}}return t=>{const o=[];for(let n=t;n>0;n--)o.push(Math.floor(Math.random()*256));return o}})(),ue=4096;function Le(){(J===void 0||W+16>ue)&&(W=0,J=Ue(ue));const e=Array.prototype.slice.call(J,W,W+=16);return e[6]=e[6]&15|64,e[8]=e[8]&63|128,_[e[0]]+_[e[1]]+_[e[2]]+_[e[3]]+"-"+_[e[4]]+_[e[5]]+"-"+_[e[6]]+_[e[7]]+"-"+_[e[8]]+_[e[9]]+"-"+_[e[10]]+_[e[11]]+_[e[12]]+_[e[13]]+_[e[14]]+_[e[15]]}let ee=[],Ne=[];function Me(e){Ne.length===0?e():ee.push(e)}function Qe(e){ee=ee.filter(t=>t!==e)}function te(e){return e===void 0?`f_${Le()}`:e}function le(e){return e!=null&&(""+e).length>0}const He={...de,...je,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},Ke=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function Ze(){const{props:e,attrs:t,proxy:o,vnode:n}=E();return{isDark:fe(e,o.$q),editable:c(()=>e.disable!==!0&&e.readonly!==!0),innerLoading:k(!1),focused:k(!1),hasPopupOpen:!1,splitAttrs:Pe(t,n),targetUid:k(te(e.for)),rootRef:k(null),targetRef:k(null),controlRef:k(null)}}function We(e){const{props:t,emit:o,slots:n,attrs:a,proxy:u}=E(),{$q:d}=u;let y;e.hasValue===void 0&&(e.hasValue=c(()=>le(t.modelValue))),e.emitValue===void 0&&(e.emitValue=l=>{o("update:modelValue",l)}),e.controlEvents===void 0&&(e.controlEvents={onFocusin:b,onFocusout:C}),Object.assign(e,{clearValue:D,onControlFocusin:b,onControlFocusout:C,focus:g}),e.computedCounter===void 0&&(e.computedCounter=c(()=>{if(t.counter!==!1){const l=typeof t.modelValue=="string"||typeof t.modelValue=="number"?(""+t.modelValue).length:Array.isArray(t.modelValue)===!0?t.modelValue.length:0,s=t.maxlength!==void 0?t.maxlength:t.maxValues;return l+(s!==void 0?" / "+s:"")}}));const{isDirtyModel:S,hasRules:p,hasError:x,errorMessage:w,resetValidation:$}=Te(e.focused,e.innerLoading),V=e.floatingLabel!==void 0?c(()=>t.stackLabel===!0||e.focused.value===!0||e.floatingLabel.value===!0):c(()=>t.stackLabel===!0||e.focused.value===!0||e.hasValue.value===!0),R=c(()=>t.bottomSlots===!0||t.hint!==void 0||p.value===!0||t.counter===!0||t.error!==null),m=c(()=>t.filled===!0?"filled":t.outlined===!0?"outlined":t.borderless===!0?"borderless":t.standout?"standout":"standard"),f=c(()=>`q-field row no-wrap items-start q-field--${m.value}`+(e.fieldClass!==void 0?` ${e.fieldClass.value}`:"")+(t.rounded===!0?" q-field--rounded":"")+(t.square===!0?" q-field--square":"")+(V.value===!0?" q-field--float":"")+(i.value===!0?" q-field--labeled":"")+(t.dense===!0?" q-field--dense":"")+(t.itemAligned===!0?" q-field--item-aligned q-item-type":"")+(e.isDark.value===!0?" q-field--dark":"")+(e.getControl===void 0?" q-field--auto-height":"")+(e.focused.value===!0?" q-field--focused":"")+(x.value===!0?" q-field--error":"")+(x.value===!0||e.focused.value===!0?" q-field--highlighted":"")+(t.hideBottomSpace!==!0&&R.value===!0?" q-field--with-bottom":"")+(t.disable===!0?" q-field--disabled":t.readonly===!0?" q-field--readonly":"")),q=c(()=>"q-field__control relative-position row no-wrap"+(t.bgColor!==void 0?` bg-${t.bgColor}`:"")+(x.value===!0?" text-negative":typeof t.standout=="string"&&t.standout.length>0&&e.focused.value===!0?` ${t.standout}`:t.color!==void 0?` text-${t.color}`:"")),i=c(()=>t.labelSlot===!0||t.label!==void 0),F=c(()=>"q-field__label no-pointer-events absolute ellipsis"+(t.labelColor!==void 0&&x.value!==!0?` text-${t.labelColor}`:"")),A=c(()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:V.value,modelValue:t.modelValue,emitValue:e.emitValue})),z=c(()=>{const l={for:e.targetUid.value};return t.disable===!0?l["aria-disabled"]="true":t.readonly===!0&&(l["aria-readonly"]="true"),l});U(()=>t.for,l=>{e.targetUid.value=te(l)});function r(){const l=document.activeElement;let s=e.targetRef!==void 0&&e.targetRef.value;s&&(l===null||l.id!==e.targetUid.value)&&(s.hasAttribute("tabindex")===!0||(s=s.querySelector("[tabindex]")),s&&s!==l&&s.focus({preventScroll:!0}))}function g(){Me(r)}function h(){Qe(r);const l=document.activeElement;l!==null&&e.rootRef.value.contains(l)&&l.blur()}function b(l){clearTimeout(y),e.editable.value===!0&&e.focused.value===!1&&(e.focused.value=!0,o("focus",l))}function C(l,s){clearTimeout(y),y=setTimeout(()=>{document.hasFocus()===!0&&(e.hasPopupOpen===!0||e.controlRef===void 0||e.controlRef.value===null||e.controlRef.value.contains(document.activeElement)!==!1)||(e.focused.value===!0&&(e.focused.value=!1,o("blur",l)),s!==void 0&&s())})}function D(l){Y(l),d.platform.is.mobile!==!0?(e.targetRef!==void 0&&e.targetRef.value||e.rootRef.value).focus():e.rootRef.value.contains(document.activeElement)===!0&&document.activeElement.blur(),t.type==="file"&&(e.inputRef.value.value=null),o("update:modelValue",null),o("clear",t.modelValue),Re(()=>{$(),d.platform.is.mobile!==!0&&(S.value=!1)})}function N(){const l=[];return n.prepend!==void 0&&l.push(v("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:P},n.prepend())),l.push(v("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},M())),x.value===!0&&t.noErrorIcon===!1&&l.push(I("error",[v(L,{name:d.iconSet.field.error,color:"negative"})])),t.loading===!0||e.innerLoading.value===!0?l.push(I("inner-loading-append",n.loading!==void 0?n.loading():[v(xe,{color:t.color})])):t.clearable===!0&&e.hasValue.value===!0&&e.editable.value===!0&&l.push(I("inner-clearable-append",[v(L,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||d.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:D})])),n.append!==void 0&&l.push(v("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:P},n.append())),e.getInnerAppend!==void 0&&l.push(I("inner-append",e.getInnerAppend())),e.getControlChild!==void 0&&l.push(e.getControlChild()),l}function M(){const l=[];return t.prefix!==void 0&&t.prefix!==null&&l.push(v("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),e.getShadowControl!==void 0&&e.hasShadow.value===!0&&l.push(e.getShadowControl()),e.getControl!==void 0?l.push(e.getControl()):n.rawControl!==void 0?l.push(n.rawControl()):n.control!==void 0&&l.push(v("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0},n.control(A.value))),i.value===!0&&l.push(v("div",{class:F.value},H(n.label,t.label))),t.suffix!==void 0&&t.suffix!==null&&l.push(v("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),l.concat(H(n.default))}function O(){let l,s;x.value===!0?w.value!==null?(l=[v("div",{role:"alert"},w.value)],s=`q--slot-error-${w.value}`):(l=H(n.error),s="q--slot-error"):(t.hideHint!==!0||e.focused.value===!0)&&(t.hint!==void 0?(l=[v("div",t.hint)],s=`q--slot-hint-${t.hint}`):(l=H(n.hint),s="q--slot-hint"));const B=t.counter===!0||n.counter!==void 0;if(t.hideBottomSpace===!0&&B===!1&&l===void 0)return;const j=v("div",{key:s,class:"q-field__messages col"},l);return v("div",{class:"q-field__bottom row items-start q-field__bottom--"+(t.hideBottomSpace!==!0?"animated":"stale"),onClick:P},[t.hideBottomSpace===!0?j:v(Be,{name:"q-transition--field-message"},()=>j),B===!0?v("div",{class:"q-field__counter"},n.counter!==void 0?n.counter():e.computedCounter.value):null])}function I(l,s){return s===null?null:v("div",{key:l,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},s)}let Q=!1;return ke(()=>{Q=!0}),Ve(()=>{Q===!0&&t.autofocus===!0&&u.focus()}),ve(()=>{Ae.value===!0&&t.for===void 0&&(e.targetUid.value=te()),t.autofocus===!0&&u.focus()}),ne(()=>{clearTimeout(y)}),Object.assign(u,{focus:g,blur:h}),function(){const s=e.getControl===void 0&&n.control===void 0?{...e.splitAttrs.attributes.value,"data-autofocus":t.autofocus===!0||void 0,...z.value}:z.value;return v("label",{ref:e.rootRef,class:[f.value,a.class],style:a.style,...s},[n.before!==void 0?v("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:P},n.before()):null,v("div",{class:"q-field__inner relative-position col self-stretch"},[v("div",{ref:e.controlRef,class:q.value,tabindex:-1,...e.controlEvents},N()),R.value===!0?O():null]),n.after!==void 0?v("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:P},n.after()):null])}}const Xe={name:String};function Ye(e){return c(()=>e.name||e.for)}function T(e,t,o,n){const a=[];return e.forEach(u=>{n(u)===!0?a.push(u):t.push({failedPropValidation:o,file:u})}),a}function X(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),Y(e)}const Ge={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},Je=["rejected"];function et({editable:e,dnd:t,getFileInput:o,addFilesToQueue:n}){const{props:a,emit:u,proxy:d}=E(),y=k(null),S=c(()=>a.accept!==void 0?a.accept.split(",").map(i=>(i=i.trim(),i==="*"?"*/":(i.endsWith("/*")&&(i=i.slice(0,i.length-1)),i.toUpperCase()))):null),p=c(()=>parseInt(a.maxFiles,10)),x=c(()=>parseInt(a.maxTotalSize,10));function w(i){if(e.value)if(i!==Object(i)&&(i={target:null}),i.target!==null&&i.target.matches('input[type="file"]')===!0)i.clientX===0&&i.clientY===0&&ze(i);else{const F=o();F&&F!==i.target&&F.click(i)}}function $(i){e.value&&i&&n(null,i)}function V(i,F,A,z){let r=Array.from(F||i.target.files);const g=[],h=()=>{g.length>0&&u("rejected",g)};if(a.accept!==void 0&&S.value.indexOf("*/")===-1&&(r=T(r,g,"accept",b=>S.value.some(C=>b.type.toUpperCase().startsWith(C)||b.name.toUpperCase().endsWith(C))),r.length===0))return h();if(a.maxFileSize!==void 0){const b=parseInt(a.maxFileSize,10);if(r=T(r,g,"max-file-size",C=>C.size<=b),r.length===0)return h()}if(a.multiple!==!0&&r.length>0&&(r=[r[0]]),r.forEach(b=>{b.__key=b.webkitRelativePath+b.lastModified+b.name+b.size}),z===!0){const b=A.map(C=>C.__key);r=T(r,g,"duplicate",C=>b.includes(C.__key)===!1)}if(r.length===0)return h();if(a.maxTotalSize!==void 0){let b=z===!0?A.reduce((C,D)=>C+D.size,0):0;if(r=T(r,g,"max-total-size",C=>(b+=C.size,b<=x.value)),r.length===0)return h()}if(typeof a.filter=="function"){const b=a.filter(r);r=T(r,g,"filter",C=>b.includes(C))}if(a.maxFiles!==void 0){let b=z===!0?A.length:0;if(r=T(r,g,"max-files",()=>(b++,b<=p.value)),r.length===0)return h()}if(h(),r.length>0)return r}function R(i){X(i),t.value!==!0&&(t.value=!0)}function m(i){Y(i),(i.relatedTarget!==null||$e.is.safari!==!0?i.relatedTarget!==y.value:document.elementsFromPoint(i.clientX,i.clientY).includes(y.value)===!1)===!0&&(t.value=!1)}function f(i){X(i);const F=i.dataTransfer.files;F.length>0&&n(null,F),t.value=!1}function q(i){if(t.value===!0)return v("div",{ref:y,class:`q-${i}__dnd absolute-full`,onDragenter:X,onDragover:X,onDragleave:m,onDrop:f})}return Object.assign(d,{pickFiles:w,addFiles:$}),{pickFiles:w,addFiles:$,onDragover:R,onDragleave:m,processFiles:V,getDndNode:q,maxFilesNumber:p,maxTotalSizeNumber:x}}function tt(e,t){function o(){const n=e.modelValue;try{const a="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(n)===n&&("length"in n?Array.from(n):[n]).forEach(u=>{a.items.add(u)}),{files:a.files}}catch{return{files:void 0}}}return t===!0?c(()=>{if(e.type==="file")return o()}):c(o)}const it=ce({name:"QFile",inheritAttrs:!1,props:{...He,...Xe,...Ge,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...Ke,...Je],setup(e,{slots:t,emit:o,attrs:n}){const{proxy:a}=E(),u=Ze(),d=k(null),y=k(!1),S=Ye(e),{pickFiles:p,onDragover:x,onDragleave:w,processFiles:$,getDndNode:V}=et({editable:u.editable,dnd:y,getFileInput:N,addFilesToQueue:M}),R=tt(e),m=c(()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[]),f=c(()=>le(m.value)),q=c(()=>m.value.map(l=>l.name).join(", ")),i=c(()=>Ce(m.value.reduce((l,s)=>l+s.size,0))),F=c(()=>({totalSize:i.value,filesNumber:m.value.length,maxFiles:e.maxFiles})),A=c(()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:S.value,...n,id:u.targetUid.value,disabled:u.editable.value!==!0})),z=c(()=>"q-file q-field--auto-height"+(y.value===!0?" q-file--dnd":"")),r=c(()=>e.multiple===!0&&e.append===!0);function g(l){const s=m.value.slice();s.splice(l,1),b(s)}function h(l){const s=m.value.findIndex(l);s>-1&&g(s)}function b(l){o("update:modelValue",e.multiple===!0?l:l[0])}function C(l){l.keyCode===13&&P(l)}function D(l){(l.keyCode===13||l.keyCode===32)&&p(l)}function N(){return d.value}function M(l,s){const B=$(l,s,m.value,r.value),j=N();j!=null&&(j.value=""),B!==void 0&&((e.multiple===!0?e.modelValue&&B.every(me=>m.value.includes(me)):e.modelValue===B[0])||b(r.value===!0?m.value.concat(B):B))}function O(){return[v("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function I(){if(t.file!==void 0)return m.value.length===0?O():m.value.map((s,B)=>t.file({index:B,file:s,ref:this}));if(t.selected!==void 0)return m.value.length===0?O():t.selected({files:m.value,ref:this});if(e.useChips===!0)return m.value.length===0?O():m.value.map((s,B)=>v(De,{key:"file-"+B,removable:u.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{g(B)}},()=>v("span",{class:"ellipsis",textContent:s.name})));const l=e.displayValue!==void 0?e.displayValue:q.value;return l.length>0?[v("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:O()}function Q(){const l={ref:d,...A.value,...R.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:M};return e.multiple===!0&&(l.multiple=!0),v("input",l)}return Object.assign(u,{fieldClass:z,emitValue:b,hasValue:f,inputRef:d,innerValue:m,floatingLabel:c(()=>f.value===!0||le(e.displayValue)),computedCounter:c(()=>{if(e.counterLabel!==void 0)return e.counterLabel(F.value);const l=e.maxFiles;return`${m.value.length}${l!==void 0?" / "+l:""} (${i.value})`}),getControlChild:()=>V("file"),getControl:()=>{const l={ref:u.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return u.editable.value===!0&&Object.assign(l,{onDragover:x,onDragleave:w,onKeydown:C,onKeyup:D}),v("div",l,[Q()].concat(I()))}}),Object.assign(a,{removeAtIndex:g,removeFile:h,getNativeElement:()=>d.value}),We(u)}});function se(e){setTimeout(()=>{window.URL.revokeObjectURL(e.href)},1e4),e.remove()}function rt(e,t,o={}){const{mimeType:n,byteOrderMark:a,encoding:u}=typeof o=="string"?{mimeType:o}:o,d=u!==void 0?new TextEncoder(u).encode([t]):t,y=a!==void 0?[a,d]:[d],S=new Blob(y,{type:n||"application/octet-stream"}),p=document.createElement("a");p.href=window.URL.createObjectURL(S),p.setAttribute("download",e),typeof p.download>"u"&&p.setAttribute("target","_blank"),p.classList.add("hidden"),p.style.position="fixed",document.body.appendChild(p);try{return p.click(),se(p),!0}catch(x){return se(p),x}}export{it as Q,Xe as a,Ke as b,Ye as c,tt as d,rt as e,Ze as f,We as g,le as h,Me as i,He as u};
