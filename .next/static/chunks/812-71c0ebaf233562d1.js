(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[812],{83707:function(e){e.exports={style:{fontFamily:"'__Inter_0ec1f4', '__Inter_Fallback_0ec1f4'",fontStyle:"normal"},className:"__className_0ec1f4"}},17703:function(e,t,n){"use strict";let r,o;n.d(t,{V:function(){return eE}});var l,a,i,u,s,c,d=n(86006),f=n.t(d,2),p=n(59325),m=n(42810),v=n(68496),h=n(68277),g=n(24373),E=n(53858),w=n(11405),b=n(45106),y=n(32243),T=n(3562),k=n(58257),C=((l=C||{})[l.Forwards=0]="Forwards",l[l.Backwards=1]="Backwards",l),P=n(58260),M=n(29101),S=n(1485);function R(e,t,n,r){let o=(0,S.E)(n);(0,d.useEffect)(()=>{function n(e){o.current(e)}return(e=null!=e?e:window).addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)},[e,t,r])}var L=n(10670);function D(e,t){let n=(0,d.useRef)([]),r=(0,T.z)(e);(0,d.useEffect)(()=>{let e=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let o=r(t,e);return n.current=t,o}},[r,...t])}var O=n(48807);function x(e){let t=(0,T.z)(e),n=(0,d.useRef)(!1);(0,d.useEffect)(()=>(n.current=!1,()=>{n.current=!0,(0,L.Y)(()=>{n.current&&t()})}),[t])}function A(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var I=((a=I||{})[a.None=1]="None",a[a.InitialFocus=2]="InitialFocus",a[a.TabLock=4]="TabLock",a[a.FocusLock=8]="FocusLock",a[a.RestoreFocus=16]="RestoreFocus",a[a.All=30]="All",a);let F=Object.assign((0,m.yV)(function(e,t){let n,r=(0,d.useRef)(null),o=(0,v.T)(r,t),{initialFocus:l,containers:a,features:i=30,...u}=e;(0,w.H)()||(i=1);let s=(0,M.i)(r);!function({ownerDocument:e},t){let n=function(e=!0){let t=(0,d.useRef)(N.slice());return D(([e],[n])=>{!0===n&&!1===e&&(0,L.Y)(()=>{t.current.splice(0)}),!1===n&&!0===e&&(t.current=N.slice())},[e,N,t]),(0,T.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);D(()=>{t||(null==e?void 0:e.activeElement)===(null==e?void 0:e.body)&&(0,y.C5)(n())},[t]),x(()=>{t&&(0,y.C5)(n())})}({ownerDocument:s},!!(16&i));let c=function({ownerDocument:e,container:t,initialFocus:n},r){let o=(0,d.useRef)(null),l=(0,P.t)();return D(()=>{if(!r)return;let a=t.current;a&&(0,L.Y)(()=>{if(!l.current)return;let t=null==e?void 0:e.activeElement;if(null!=n&&n.current){if((null==n?void 0:n.current)===t){o.current=t;return}}else if(a.contains(t)){o.current=t;return}null!=n&&n.current?(0,y.C5)(n.current):(0,y.jA)(a,y.TO.First)===y.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=null==e?void 0:e.activeElement})},[r]),o}({ownerDocument:s,container:r,initialFocus:l},!!(2&i));!function({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let l=(0,P.t)();R(null==e?void 0:e.defaultView,"focus",e=>{if(!o||!l.current)return;let a=A(n);t.current instanceof HTMLElement&&a.add(t.current);let i=r.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?H(a,u)?(r.current=u,(0,y.C5)(u)):(e.preventDefault(),e.stopPropagation(),(0,y.C5)(i)):(0,y.C5)(r.current)},!0)}({ownerDocument:s,container:r,containers:a,previousActiveElement:c},!!(8&i));let f=(n=(0,d.useRef)(0),(0,k.s)("keydown",e=>{"Tab"===e.key&&(n.current=e.shiftKey?1:0)},!0),n),h=(0,T.z)(e=>{let t=r.current;t&&(0,p.E)(f.current,{[C.Forwards]:()=>{(0,y.jA)(t,y.TO.First,{skipElements:[e.relatedTarget]})},[C.Backwards]:()=>{(0,y.jA)(t,y.TO.Last,{skipElements:[e.relatedTarget]})}})}),g=(0,O.G)(),E=(0,d.useRef)(!1);return d.createElement(d.Fragment,null,!!(4&i)&&d.createElement(b._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:b.A.Focusable}),(0,m.sY)({ourProps:{ref:o,onKeyDown(e){"Tab"==e.key&&(E.current=!0,g.requestAnimationFrame(()=>{E.current=!1}))},onBlur(e){let t=A(a);r.current instanceof HTMLElement&&t.add(r.current);let n=e.relatedTarget;n instanceof HTMLElement&&"true"!==n.dataset.headlessuiFocusGuard&&(H(t,n)||(E.current?(0,y.jA)(r.current,(0,p.E)(f.current,{[C.Forwards]:()=>y.TO.Next,[C.Backwards]:()=>y.TO.Previous})|y.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,y.C5)(e.target)))}},theirProps:u,defaultTag:"div",name:"FocusTrap"}),!!(4&i)&&d.createElement(b._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:h,features:b.A.Focusable}))}),{features:I}),N=[];function H(e,t){for(let n of e)if(n.contains(t))return!0;return!1}!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&N[0]!==e.target&&(N.unshift(e.target),(N=N.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});var z=n(8431),V=n(60961);let B=(0,d.createContext)(!1);function j(e){return d.createElement(B.Provider,{value:e.force},e.children)}var Y=n(30028);let _=d.Fragment,W=d.Fragment,Z=(0,d.createContext)(null),$=(0,d.createContext)(null),U=Object.assign((0,m.yV)(function(e,t){let n=(0,d.useRef)(null),r=(0,v.T)((0,v.h)(e=>{n.current=e}),t),o=(0,M.i)(n),l=function(e){let t=(0,d.useContext)(B),n=(0,d.useContext)(Z),r=(0,M.i)(e),[o,l]=(0,d.useState)(()=>{if(!t&&null!==n||Y.O.isServer)return null;let e=null==r?void 0:r.getElementById("headlessui-portal-root");if(e)return e;if(null===r)return null;let o=r.createElement("div");return o.setAttribute("id","headlessui-portal-root"),r.body.appendChild(o)});return(0,d.useEffect)(()=>{null!==o&&(null!=r&&r.body.contains(o)||null==r||r.body.appendChild(o))},[o,r]),(0,d.useEffect)(()=>{t||null!==n&&l(n.current)},[n,l,t]),o}(n),[a]=(0,d.useState)(()=>{var e;return Y.O.isServer?null:null!=(e=null==o?void 0:o.createElement("div"))?e:null}),i=(0,d.useContext)($),u=(0,w.H)();return(0,V.e)(()=>{!l||!a||l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a))},[l,a]),(0,V.e)(()=>{if(a&&i)return i.register(a)},[i,a]),x(()=>{var e;l&&a&&(a instanceof Node&&l.contains(a)&&l.removeChild(a),l.childNodes.length<=0&&(null==(e=l.parentElement)||e.removeChild(l)))}),u&&l&&a?(0,z.createPortal)((0,m.sY)({ourProps:{ref:r},theirProps:e,defaultTag:_,name:"Portal"}),a):null}),{Group:(0,m.yV)(function(e,t){let{target:n,...r}=e,o={ref:(0,v.T)(t)};return d.createElement(Z.Provider,{value:n},(0,m.sY)({ourProps:o,theirProps:r,defaultTag:W,name:"Popover.Group"}))})}),q=(0,d.createContext)(null),G=Object.assign((0,m.yV)(function(e,t){let n=(0,E.M)(),{id:r=`headlessui-description-${n}`,...o}=e,l=function e(){let t=(0,d.useContext)(q);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),a=(0,v.T)(t);(0,V.e)(()=>l.register(r),[r,l.register]);let i={ref:a,...l.props,id:r};return(0,m.sY)({ourProps:i,theirProps:o,slot:l.slot||{},defaultTag:"p",name:l.name||"Description"})}),{});var K=n(10546);let J=(0,d.createContext)(()=>{});J.displayName="StackContext";var Q=((i=Q||{})[i.Add=0]="Add",i[i.Remove=1]="Remove",i);function X({children:e,onUpdate:t,type:n,element:r,enabled:o}){let l=(0,d.useContext)(J),a=(0,T.z)((...e)=>{null==t||t(...e),l(...e)});return(0,V.e)(()=>{let e=void 0===o||!0===o;return e&&a(0,n,r),()=>{e&&a(1,n,r)}},[a,n,r,o]),d.createElement(J.Provider,{value:a},e)}var ee=n(45880);let{useState:et,useEffect:en,useLayoutEffect:er,useDebugValue:eo}=f;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let el=f.useSyncExternalStore;var ea=n(70650);let ei=(u={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,ea.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r,o;let l={doc:e,d:t,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(n)},a=[/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0?{before(){r=window.pageYOffset},after({doc:e,d:t,meta:n}){function o(e){return n.containers.flatMap(e=>e()).some(t=>t.contains(e))}t.style(e.body,"marginTop",`-${r}px`),window.scrollTo(0,0);let l=null;t.addEventListener(e,"click",t=>{if(t.target instanceof HTMLElement)try{let n=t.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),a=e.querySelector(r);a&&!o(a)&&(l=a)}catch{}},!0),t.addEventListener(e,"touchmove",e=>{e.target instanceof HTMLElement&&!o(e.target)&&e.preventDefault()},{passive:!1}),t.add(()=>{window.scrollTo(0,window.pageYOffset+r),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})}}:{},{before({doc:e}){var t;let n=e.documentElement;o=(null!=(t=e.defaultView)?t:window).innerWidth-n.clientWidth},after({doc:e,d:t}){let n=e.documentElement,r=o-(n.clientWidth-n.offsetWidth);t.style(n,"paddingRight",`${r}px`)}},{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}];a.forEach(({before:e})=>null==e?void 0:e(l)),a.forEach(({after:e})=>null==e?void 0:e(l))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}},r=new Map,o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e,...t){let n=u[e].call(r,...t);n&&(r=n,o.forEach(e=>e()))}});ei.subscribe(()=>{let e=ei.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&ei.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&ei.dispatch("TEARDOWN",n)}});let eu=new Map,es=new Map;function ec(e,t=!0){(0,V.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=es.get(r))?n:0;return es.set(r,o+1),0!==o||(eu.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=es.get(r))?e:1;if(1===t?es.delete(r):es.set(r,t-1),1!==t)return;let n=eu.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,eu.delete(r))}},[e,t])}var ed=((s=ed||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),ef=((c=ef||{})[c.SetTitleId=0]="SetTitleId",c);let ep={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},em=(0,d.createContext)(null);function ev(e){let t=(0,d.useContext)(em);if(null===t){let t=Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,ev),t}return t}function eh(e,t){return(0,p.E)(t.type,ep,e,t)}em.displayName="DialogContext";let eg=m.AN.RenderStrategy|m.AN.Static,eE=Object.assign((0,m.yV)(function(e,t){var n;let r,o,l,a,i;let u=(0,E.M)(),{id:s=`headlessui-dialog-${u}`,open:c,onClose:f,initialFocus:g,__demoMode:y=!1,...k}=e,[C,P]=(0,d.useState)(0),S=(0,K.oJ)();void 0===c&&null!==S&&(c=(S&K.ZM.Open)===K.ZM.Open);let L=(0,d.useRef)(null),D=(0,v.T)(L,t),O=(0,M.i)(L),x=e.hasOwnProperty("open")||null!==S,A=e.hasOwnProperty("onClose");if(!x&&!A)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!x)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!A)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof c)throw Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`);if("function"!=typeof f)throw Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${f}`);let I=c?0:1,[N,H]=(0,d.useReducer)(eh,{titleId:null,descriptionId:null,panelRef:(0,d.createRef)()}),z=(0,T.z)(()=>f(!1)),B=(0,T.z)(e=>H({type:0,id:e})),Y=!!(0,w.H)()&&!y&&0===I,_=C>1,W=null!==(0,d.useContext)(em),[Z,G]=(r=(0,d.useContext)($),o=(0,d.useRef)([]),l=(0,T.z)(e=>(o.current.push(e),r&&r.register(e),()=>a(e))),a=(0,T.z)(e=>{let t=o.current.indexOf(e);-1!==t&&o.current.splice(t,1),r&&r.unregister(e)}),i=(0,d.useMemo)(()=>({register:l,unregister:a,portals:o}),[l,a,o]),[o,(0,d.useMemo)(()=>function({children:e}){return d.createElement($.Provider,{value:i},e)},[i])]),{resolveContainers:J,mainTreeNodeRef:et,MainTreeNode:en}=function({defaultContainers:e=[],portals:t}={}){let n=(0,d.useRef)(null),r=(0,M.i)(n),o=(0,T.z)(()=>{var o;let l=[];for(let t of e)null!==t&&(t instanceof HTMLElement?l.push(t):"current"in t&&t.current instanceof HTMLElement&&l.push(t.current));if(null!=t&&t.current)for(let e of t.current)l.push(e);for(let e of null!=(o=null==r?void 0:r.querySelectorAll("html > *, body > *"))?o:[])e!==document.body&&e!==document.head&&e instanceof HTMLElement&&"headlessui-portal-root"!==e.id&&(e.contains(n.current)||l.some(t=>e.contains(t))||l.push(e));return l});return{resolveContainers:o,contains:(0,T.z)(e=>o().some(t=>t.contains(e))),mainTreeNodeRef:n,MainTreeNode:(0,d.useMemo)(()=>function(){return d.createElement(b._,{features:b.A.Hidden,ref:n})},[n])}}({portals:Z,defaultContainers:[null!=(n=N.panelRef.current)?n:L.current]}),er=_?"parent":"leaf",eo=null!==S&&(S&K.ZM.Closing)===K.ZM.Closing,ea=!W&&!eo&&Y;ec((0,d.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==O?void 0:O.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(et.current)&&e instanceof HTMLElement))?t:null},[et]),ea);let eu=!!_||Y;ec((0,d.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==O?void 0:O.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(et.current)&&e instanceof HTMLElement))?t:null},[et]),eu);let es=!(!Y||_);(0,ee.O)(J,z,es);let ed=!(_||0!==I);R(null==O?void 0:O.defaultView,"keydown",e=>{ed&&(e.defaultPrevented||e.key===h.R.Escape&&(e.preventDefault(),e.stopPropagation(),z()))}),function(e,t,n=()=>[document.body]){var r;let o,l;r=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],n]}},o=el(ei.subscribe,ei.getSnapshot,ei.getSnapshot),(l=e?o.get(e):void 0)&&l.count,(0,V.e)(()=>{if(!(!e||!t))return ei.dispatch("PUSH",e,r),()=>ei.dispatch("POP",e,r)},[t,e])}(O,!(eo||0!==I||W),J),(0,d.useEffect)(()=>{if(0!==I||!L.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&z()}});return e.observe(L.current),()=>e.disconnect()},[I,L,z]);let[ef,ep]=function(){let[e,t]=(0,d.useState)([]);return[e.length>0?e.join(" "):void 0,(0,d.useMemo)(()=>function(e){let n=(0,T.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),r=(0,d.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return d.createElement(q.Provider,{value:r},e.children)},[t])]}(),ev=(0,d.useMemo)(()=>[{dialogState:I,close:z,setTitleId:B},N],[I,N,z,B]),eE=(0,d.useMemo)(()=>({open:0===I}),[I]),ew={ref:D,id:s,role:"dialog","aria-modal":0===I||void 0,"aria-labelledby":N.titleId,"aria-describedby":ef};return d.createElement(X,{type:"Dialog",enabled:0===I,element:L,onUpdate:(0,T.z)((e,t)=>{"Dialog"===t&&(0,p.E)(e,{[Q.Add]:()=>P(e=>e+1),[Q.Remove]:()=>P(e=>e-1)})})},d.createElement(j,{force:!0},d.createElement(U,null,d.createElement(em.Provider,{value:ev},d.createElement(U.Group,{target:L},d.createElement(j,{force:!1},d.createElement(ep,{slot:eE,name:"Dialog.Description"},d.createElement(F,{initialFocus:g,containers:J,features:Y?(0,p.E)(er,{parent:F.features.RestoreFocus,leaf:F.features.All&~F.features.FocusLock}):F.features.None},d.createElement(G,null,(0,m.sY)({ourProps:ew,theirProps:k,slot:eE,defaultTag:"div",features:eg,visible:0===I,name:"Dialog"}))))))))),d.createElement(en,null))}),{Backdrop:(0,m.yV)(function(e,t){let n=(0,E.M)(),{id:r=`headlessui-dialog-backdrop-${n}`,...o}=e,[{dialogState:l},a]=ev("Dialog.Backdrop"),i=(0,v.T)(t);(0,d.useEffect)(()=>{if(null===a.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let u=(0,d.useMemo)(()=>({open:0===l}),[l]);return d.createElement(j,{force:!0},d.createElement(U,null,(0,m.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,m.yV)(function(e,t){let n=(0,E.M)(),{id:r=`headlessui-dialog-panel-${n}`,...o}=e,[{dialogState:l},a]=ev("Dialog.Panel"),i=(0,v.T)(t,a.panelRef),u=(0,d.useMemo)(()=>({open:0===l}),[l]),s=(0,T.z)(e=>{e.stopPropagation()});return(0,m.sY)({ourProps:{ref:i,id:r,onClick:s},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,m.yV)(function(e,t){let n=(0,E.M)(),{id:r=`headlessui-dialog-overlay-${n}`,...o}=e,[{dialogState:l,close:a}]=ev("Dialog.Overlay"),i=(0,v.T)(t),u=(0,T.z)(e=>{if(e.target===e.currentTarget){if((0,g.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}}),s=(0,d.useMemo)(()=>({open:0===l}),[l]);return(0,m.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:s,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,m.yV)(function(e,t){let n=(0,E.M)(),{id:r=`headlessui-dialog-title-${n}`,...o}=e,[{dialogState:l,setTitleId:a}]=ev("Dialog.Title"),i=(0,v.T)(t);(0,d.useEffect)(()=>(a(r),()=>a(null)),[r,a]);let u=(0,d.useMemo)(()=>({open:0===l}),[l]);return(0,m.sY)({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:G})},29538:function(e,t,n){"use strict";n.d(t,{p:function(){return R}});var r,o,l,a=n(86006),i=n(59325),u=n(42810),s=n(68496),c=n(53858),d=n(68277),f=n(24373),p=n(10546),m=n(51795),v=n(53432),h=n(3562);let g=null!=(l=a.startTransition)?l:function(e){e()};var E=((r=E||{})[r.Open=0]="Open",r[r.Closed=1]="Closed",r),w=((o=w||{})[o.ToggleDisclosure=0]="ToggleDisclosure",o[o.CloseDisclosure=1]="CloseDisclosure",o[o.SetButtonId=2]="SetButtonId",o[o.SetPanelId=3]="SetPanelId",o[o.LinkPanel=4]="LinkPanel",o[o.UnlinkPanel=5]="UnlinkPanel",o);let b={0:e=>({...e,disclosureState:(0,i.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},y=(0,a.createContext)(null);function T(e){let t=(0,a.useContext)(y);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,T),t}return t}y.displayName="DisclosureContext";let k=(0,a.createContext)(null);k.displayName="DisclosureAPIContext";let C=(0,a.createContext)(null);function P(e,t){return(0,i.E)(t.type,b,e,t)}C.displayName="DisclosurePanelContext";let M=a.Fragment,S=u.AN.RenderStrategy|u.AN.Static,R=Object.assign((0,u.yV)(function(e,t){let{defaultOpen:n=!1,...r}=e,o=(0,a.useRef)(null),l=(0,s.T)(t,(0,s.h)(e=>{o.current=e},void 0===e.as||e.as===a.Fragment)),c=(0,a.useRef)(null),d=(0,a.useRef)(null),f=(0,a.useReducer)(P,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:d,panelRef:c,buttonId:null,panelId:null}),[{disclosureState:m,buttonId:g},E]=f,w=(0,h.z)(e=>{E({type:1});let t=(0,v.r)(o);if(!t||!g)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(g):t.getElementById(g);null==n||n.focus()}),b=(0,a.useMemo)(()=>({close:w}),[w]),T=(0,a.useMemo)(()=>({open:0===m,close:w}),[m,w]);return a.createElement(y.Provider,{value:f},a.createElement(k.Provider,{value:b},a.createElement(p.up,{value:(0,i.E)(m,{0:p.ZM.Open,1:p.ZM.Closed})},(0,u.sY)({ourProps:{ref:l},theirProps:r,slot:T,defaultTag:M,name:"Disclosure"}))))}),{Button:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-button-${n}`,...o}=e,[l,i]=T("Disclosure.Button"),p=(0,a.useContext)(C),v=null!==p&&p===l.panelId,g=(0,a.useRef)(null),E=(0,s.T)(g,t,v?null:l.buttonRef);(0,a.useEffect)(()=>{if(!v)return i({type:2,buttonId:r}),()=>{i({type:2,buttonId:null})}},[r,i,v]);let w=(0,h.z)(e=>{var t;if(v){if(1===l.disclosureState)return;switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0}),null==(t=l.buttonRef.current)||t.focus()}}else switch(e.key){case d.R.Space:case d.R.Enter:e.preventDefault(),e.stopPropagation(),i({type:0})}}),b=(0,h.z)(e=>{e.key===d.R.Space&&e.preventDefault()}),y=(0,h.z)(t=>{var n;(0,f.P)(t.currentTarget)||e.disabled||(v?(i({type:0}),null==(n=l.buttonRef.current)||n.focus()):i({type:0}))}),k=(0,a.useMemo)(()=>({open:0===l.disclosureState}),[l]),P=(0,m.f)(e,g),M=v?{ref:E,type:P,onKeyDown:w,onClick:y}:{ref:E,id:r,type:P,"aria-expanded":e.disabled?void 0:0===l.disclosureState,"aria-controls":l.linkedPanel?l.panelId:void 0,onKeyDown:w,onKeyUp:b,onClick:y};return(0,u.sY)({ourProps:M,theirProps:o,slot:k,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,u.yV)(function(e,t){let n=(0,c.M)(),{id:r=`headlessui-disclosure-panel-${n}`,...o}=e,[l,i]=T("Disclosure.Panel"),{close:d}=function e(t){let n=(0,a.useContext)(k);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),f=(0,s.T)(t,l.panelRef,e=>{g(()=>i({type:e?4:5}))});(0,a.useEffect)(()=>(i({type:3,panelId:r}),()=>{i({type:3,panelId:null})}),[r,i]);let m=(0,p.oJ)(),v=null!==m?(m&p.ZM.Open)===p.ZM.Open:0===l.disclosureState,h=(0,a.useMemo)(()=>({open:0===l.disclosureState,close:d}),[l,d]);return a.createElement(C.Provider,{value:l.panelId},(0,u.sY)({ourProps:{ref:f,id:r},theirProps:o,slot:h,defaultTag:"div",features:S,visible:v,name:"Disclosure.Panel"}))})})},45106:function(e,t,n){"use strict";n.d(t,{A:function(){return l},_:function(){return a}});var r,o=n(42810),l=((r=l||{})[r.None=1]="None",r[r.Focusable=2]="Focusable",r[r.Hidden=4]="Hidden",r);let a=(0,o.yV)(function(e,t){let{features:n=1,...r}=e,l={ref:t,"aria-hidden":(2&n)==2||void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(4&n)==4&&(2&n)!=2&&{display:"none"}}};return(0,o.sY)({ourProps:l,theirProps:r,slot:{},defaultTag:"div",name:"Hidden"})})},94724:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"}))});t.Z=o},89540:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))});t.Z=o},53993:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"}))});t.Z=o},62634:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"}))});t.Z=o},65197:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"}))});t.Z=o},72499:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18L18 6M6 6l12 12"}))});t.Z=o},76369:function(e,t,n){"use strict";var r=n(86006);let o=r.forwardRef(function({title:e,titleId:t,...n},o){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:o,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z",clipRule:"evenodd"}))});t.Z=o}}]);