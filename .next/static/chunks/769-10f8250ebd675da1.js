"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[769],{68277:function(e,t,n){n.d(t,{R:function(){return u}});var r,u=((r=u||{}).Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r)},1121:function(e,t,n){n.d(t,{v:function(){return _}});var r,u,i,o,l=n(86006),a=n(59325),s=n(42810),c=n(70650),f=n(48807),d=n(60961),m=n(68496),v=n(53858),p=n(68277),h=((r=h||{})[r.First=0]="First",r[r.Previous=1]="Previous",r[r.Next=2]="Next",r[r.Last=3]="Last",r[r.Specific=4]="Specific",r[r.Nothing=5]="Nothing",r),g=n(24373),E=n(32243),b=n(45880),y=n(53432),I=n(10546),w=n(51795),R=n(29101),F=n(3562);function S(e){return[e.screenX,e.screenY]}let x=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function T(e){var t,n;let r=null!=(t=e.innerText)?t:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return r;let i=!1;for(let e of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))e.remove(),i=!0;let o=i?null!=(n=u.innerText)?n:"":r;return x.test(o)&&(o=o.replace(x,"")),o}var P=((u=P||{})[u.Open=0]="Open",u[u.Closed=1]="Closed",u),O=((i=O||{})[i.Pointer=0]="Pointer",i[i.Other=1]="Other",i),M=((o=M||{})[o.OpenMenu=0]="OpenMenu",o[o.CloseMenu=1]="CloseMenu",o[o.GoToItem=2]="GoToItem",o[o.Search=3]="Search",o[o.ClearSearch=4]="ClearSearch",o[o.RegisterItem=5]="RegisterItem",o[o.UnregisterItem=6]="UnregisterItem",o);function N(e,t=e=>e){let n=null!==e.activeItemIndex?e.items[e.activeItemIndex]:null,r=(0,E.z2)(t(e.items.slice()),e=>e.dataRef.current.domRef.current),u=n?r.indexOf(n):null;return -1===u&&(u=null),{items:r,activeItemIndex:u}}let A={1:e=>1===e.menuState?e:{...e,activeItemIndex:null,menuState:1},0:e=>0===e.menuState?e:{...e,__demoMode:!1,menuState:0},2:(e,t)=>{var n;let r=N(e),u=function(e,t){let n=t.resolveItems();if(n.length<=0)return null;let r=t.resolveActiveIndex(),u=null!=r?r:-1,i=(()=>{switch(e.focus){case 0:return n.findIndex(e=>!t.resolveDisabled(e));case 1:{let e=n.slice().reverse().findIndex((e,n,r)=>(-1===u||!(r.length-n-1>=u))&&!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 2:return n.findIndex((e,n)=>!(n<=u)&&!t.resolveDisabled(e));case 3:{let e=n.slice().reverse().findIndex(e=>!t.resolveDisabled(e));return -1===e?e:n.length-1-e}case 4:return n.findIndex(n=>t.resolveId(n)===e.id);case 5:return null;default:!function(e){throw Error("Unexpected object: "+e)}(e)}})();return -1===i?r:i}(t,{resolveItems:()=>r.items,resolveActiveIndex:()=>r.activeItemIndex,resolveId:e=>e.id,resolveDisabled:e=>e.dataRef.current.disabled});return{...e,...r,searchQuery:"",activeItemIndex:u,activationTrigger:null!=(n=t.trigger)?n:1}},3:(e,t)=>{let n=""!==e.searchQuery?0:1,r=e.searchQuery+t.value.toLowerCase(),u=(null!==e.activeItemIndex?e.items.slice(e.activeItemIndex+n).concat(e.items.slice(0,e.activeItemIndex+n)):e.items).find(e=>{var t;return(null==(t=e.dataRef.current.textValue)?void 0:t.startsWith(r))&&!e.dataRef.current.disabled}),i=u?e.items.indexOf(u):-1;return -1===i||i===e.activeItemIndex?{...e,searchQuery:r}:{...e,searchQuery:r,activeItemIndex:i,activationTrigger:1}},4:e=>""===e.searchQuery?e:{...e,searchQuery:"",searchActiveItemIndex:null},5:(e,t)=>{let n=N(e,e=>[...e,{id:t.id,dataRef:t.dataRef}]);return{...e,...n}},6:(e,t)=>{let n=N(e,e=>{let n=e.findIndex(e=>e.id===t.id);return -1!==n&&e.splice(n,1),e});return{...e,...n,activationTrigger:1}}},C=(0,l.createContext)(null);function L(e){let t=(0,l.useContext)(C);if(null===t){let t=Error(`<${e} /> is missing a parent <Menu /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,L),t}return t}function D(e,t){return(0,a.E)(t.type,A,e,t)}C.displayName="MenuContext";let k=l.Fragment,j=s.AN.RenderStrategy|s.AN.Static,H=l.Fragment,_=Object.assign((0,s.yV)(function(e,t){let{__demoMode:n=!1,...r}=e,u=(0,l.useReducer)(D,{__demoMode:n,menuState:n?0:1,buttonRef:(0,l.createRef)(),itemsRef:(0,l.createRef)(),items:[],searchQuery:"",activeItemIndex:null,activationTrigger:1}),[{menuState:i,itemsRef:o,buttonRef:c},f]=u,d=(0,m.T)(t);(0,b.O)([c,o],(e,t)=>{var n;f({type:1}),(0,E.sP)(t,E.tJ.Loose)||(e.preventDefault(),null==(n=c.current)||n.focus())},0===i);let v=(0,F.z)(()=>{f({type:1})}),p=(0,l.useMemo)(()=>({open:0===i,close:v}),[i,v]);return l.createElement(C.Provider,{value:u},l.createElement(I.up,{value:(0,a.E)(i,{0:I.ZM.Open,1:I.ZM.Closed})},(0,s.sY)({ourProps:{ref:d},theirProps:r,slot:p,defaultTag:k,name:"Menu"})))}),{Button:(0,s.yV)(function(e,t){var n;let r=(0,v.M)(),{id:u=`headlessui-menu-button-${r}`,...i}=e,[o,a]=L("Menu.Button"),c=(0,m.T)(o.buttonRef,t),d=(0,f.G)(),E=(0,F.z)(e=>{switch(e.key){case p.R.Space:case p.R.Enter:case p.R.ArrowDown:e.preventDefault(),e.stopPropagation(),a({type:0}),d.nextFrame(()=>a({type:2,focus:h.First}));break;case p.R.ArrowUp:e.preventDefault(),e.stopPropagation(),a({type:0}),d.nextFrame(()=>a({type:2,focus:h.Last}))}}),b=(0,F.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),y=(0,F.z)(t=>{if((0,g.P)(t.currentTarget))return t.preventDefault();e.disabled||(0===o.menuState?(a({type:1}),d.nextFrame(()=>{var e;return null==(e=o.buttonRef.current)?void 0:e.focus({preventScroll:!0})})):(t.preventDefault(),a({type:0})))}),I=(0,l.useMemo)(()=>({open:0===o.menuState}),[o]),R={ref:c,id:u,type:(0,w.f)(e,o.buttonRef),"aria-haspopup":"menu","aria-controls":null==(n=o.itemsRef.current)?void 0:n.id,"aria-expanded":e.disabled?void 0:0===o.menuState,onKeyDown:E,onKeyUp:b,onClick:y};return(0,s.sY)({ourProps:R,theirProps:i,slot:I,defaultTag:"button",name:"Menu.Button"})}),Items:(0,s.yV)(function(e,t){var n,r;let u=(0,v.M)(),{id:i=`headlessui-menu-items-${u}`,...o}=e,[a,g]=L("Menu.Items"),b=(0,m.T)(a.itemsRef,t),w=(0,R.i)(a.itemsRef),S=(0,f.G)(),x=(0,I.oJ)(),T=null!==x?(x&I.ZM.Open)===I.ZM.Open:0===a.menuState;(0,l.useEffect)(()=>{let e=a.itemsRef.current;e&&0===a.menuState&&e!==(null==w?void 0:w.activeElement)&&e.focus({preventScroll:!0})},[a.menuState,a.itemsRef,w]),function({container:e,accept:t,walk:n,enabled:r=!0}){let u=(0,l.useRef)(t),i=(0,l.useRef)(n);(0,l.useEffect)(()=>{u.current=t,i.current=n},[t,n]),(0,d.e)(()=>{if(!e||!r)return;let t=(0,y.r)(e);if(!t)return;let n=u.current,o=i.current,l=Object.assign(e=>n(e),{acceptNode:n}),a=t.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,l,!1);for(;a.nextNode();)o(a.currentNode)},[e,r,u,i])}({container:a.itemsRef.current,enabled:0===a.menuState,accept:e=>"menuitem"===e.getAttribute("role")?NodeFilter.FILTER_REJECT:e.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT,walk(e){e.setAttribute("role","none")}});let P=(0,F.z)(e=>{var t,n;switch(S.dispose(),e.key){case p.R.Space:if(""!==a.searchQuery)return e.preventDefault(),e.stopPropagation(),g({type:3,value:e.key});case p.R.Enter:if(e.preventDefault(),e.stopPropagation(),g({type:1}),null!==a.activeItemIndex){let{dataRef:e}=a.items[a.activeItemIndex];null==(n=null==(t=e.current)?void 0:t.domRef.current)||n.click()}(0,E.wI)(a.buttonRef.current);break;case p.R.ArrowDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Next});case p.R.ArrowUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Previous});case p.R.Home:case p.R.PageUp:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.First});case p.R.End:case p.R.PageDown:return e.preventDefault(),e.stopPropagation(),g({type:2,focus:h.Last});case p.R.Escape:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{var e;return null==(e=a.buttonRef.current)?void 0:e.focus({preventScroll:!0})});break;case p.R.Tab:e.preventDefault(),e.stopPropagation(),g({type:1}),(0,c.k)().nextFrame(()=>{(0,E.EO)(a.buttonRef.current,e.shiftKey?E.TO.Previous:E.TO.Next)});break;default:1===e.key.length&&(g({type:3,value:e.key}),S.setTimeout(()=>g({type:4}),350))}}),O=(0,F.z)(e=>{e.key===p.R.Space&&e.preventDefault()}),M=(0,l.useMemo)(()=>({open:0===a.menuState}),[a]),N={"aria-activedescendant":null===a.activeItemIndex||null==(n=a.items[a.activeItemIndex])?void 0:n.id,"aria-labelledby":null==(r=a.buttonRef.current)?void 0:r.id,id:i,onKeyDown:P,onKeyUp:O,role:"menu",tabIndex:0,ref:b};return(0,s.sY)({ourProps:N,theirProps:o,slot:M,defaultTag:"div",features:j,visible:T,name:"Menu.Items"})}),Item:(0,s.yV)(function(e,t){let n,r,u,i=(0,v.M)(),{id:o=`headlessui-menu-item-${i}`,disabled:a=!1,...f}=e,[p,g]=L("Menu.Item"),b=null!==p.activeItemIndex&&p.items[p.activeItemIndex].id===o,y=(0,l.useRef)(null),I=(0,m.T)(t,y);(0,d.e)(()=>{if(p.__demoMode||0!==p.menuState||!b||0===p.activationTrigger)return;let e=(0,c.k)();return e.requestAnimationFrame(()=>{var e,t;null==(t=null==(e=y.current)?void 0:e.scrollIntoView)||t.call(e,{block:"nearest"})}),e.dispose},[p.__demoMode,y,b,p.menuState,p.activationTrigger,p.activeItemIndex]);let w=(n=(0,l.useRef)(""),r=(0,l.useRef)(""),(0,F.z)(()=>{let e=y.current;if(!e)return"";let t=e.innerText;if(n.current===t)return r.current;let u=(function(e){let t=e.getAttribute("aria-label");if("string"==typeof t)return t.trim();let n=e.getAttribute("aria-labelledby");if(n){let e=n.split(" ").map(e=>{let t=document.getElementById(e);if(t){let e=t.getAttribute("aria-label");return"string"==typeof e?e.trim():T(t).trim()}return null}).filter(Boolean);if(e.length>0)return e.join(", ")}return T(e).trim()})(e).trim().toLowerCase();return n.current=t,r.current=u,u})),R=(0,l.useRef)({disabled:a,domRef:y,get textValue(){return w()}});(0,d.e)(()=>{R.current.disabled=a},[R,a]),(0,d.e)(()=>(g({type:5,id:o,dataRef:R}),()=>g({type:6,id:o})),[R,o]);let x=(0,F.z)(()=>{g({type:1})}),P=(0,F.z)(e=>{if(a)return e.preventDefault();g({type:1}),(0,E.wI)(p.buttonRef.current)}),O=(0,F.z)(()=>{if(a)return g({type:2,focus:h.Nothing});g({type:2,focus:h.Specific,id:o})}),M=(u=(0,l.useRef)([-1,-1]),{wasMoved(e){let t=S(e);return(u.current[0]!==t[0]||u.current[1]!==t[1])&&(u.current=t,!0)},update(e){u.current=S(e)}}),N=(0,F.z)(e=>M.update(e)),A=(0,F.z)(e=>{M.wasMoved(e)&&(a||b||g({type:2,focus:h.Specific,id:o,trigger:0}))}),C=(0,F.z)(e=>{M.wasMoved(e)&&(a||b&&g({type:2,focus:h.Nothing}))}),D=(0,l.useMemo)(()=>({active:b,disabled:a,close:x}),[b,a,x]);return(0,s.sY)({ourProps:{id:o,ref:I,role:"menuitem",tabIndex:!0===a?void 0:-1,"aria-disabled":!0===a||void 0,disabled:void 0,onClick:P,onFocus:O,onPointerEnter:N,onMouseEnter:N,onPointerMove:A,onMouseMove:A,onPointerLeave:C,onMouseLeave:C},theirProps:f,slot:D,defaultTag:H,name:"Menu.Item"})})})},59738:function(e,t,n){n.d(t,{u:function(){return A}});var r,u=n(86006),i=n(42810),o=n(10546),l=n(59325),a=n(58260),s=n(60961),c=n(1485),f=n(11405),d=n(68496),m=n(70650);function v(e,...t){e&&t.length>0&&e.classList.add(...t)}function p(e,...t){e&&t.length>0&&e.classList.remove(...t)}var h=n(48807),g=n(3562),E=n(34339);function b(e=""){return e.split(" ").filter(e=>e.trim().length>1)}let y=(0,u.createContext)(null);y.displayName="TransitionContext";var I=((r=I||{}).Visible="visible",r.Hidden="hidden",r);let w=(0,u.createContext)(null);function R(e){return"children"in e?R(e.children):e.current.filter(({el:e})=>null!==e.current).filter(({state:e})=>"visible"===e).length>0}function F(e,t){let n=(0,c.E)(e),r=(0,u.useRef)([]),o=(0,a.t)(),s=(0,h.G)(),f=(0,g.z)((e,t=i.l4.Hidden)=>{let u=r.current.findIndex(({el:t})=>t===e);-1!==u&&((0,l.E)(t,{[i.l4.Unmount](){r.current.splice(u,1)},[i.l4.Hidden](){r.current[u].state="hidden"}}),s.microTask(()=>{var e;!R(r)&&o.current&&(null==(e=n.current)||e.call(n))}))}),d=(0,g.z)(e=>{let t=r.current.find(({el:t})=>t===e);return t?"visible"!==t.state&&(t.state="visible"):r.current.push({el:e,state:"visible"}),()=>f(e,i.l4.Unmount)}),m=(0,u.useRef)([]),v=(0,u.useRef)(Promise.resolve()),p=(0,u.useRef)({enter:[],leave:[],idle:[]}),E=(0,g.z)((e,n,r)=>{m.current.splice(0),t&&(t.chains.current[n]=t.chains.current[n].filter(([t])=>t!==e)),null==t||t.chains.current[n].push([e,new Promise(e=>{m.current.push(e)})]),null==t||t.chains.current[n].push([e,new Promise(e=>{Promise.all(p.current[n].map(([e,t])=>t)).then(()=>e())})]),"enter"===n?v.current=v.current.then(()=>null==t?void 0:t.wait.current).then(()=>r(n)):r(n)}),b=(0,g.z)((e,t,n)=>{Promise.all(p.current[t].splice(0).map(([e,t])=>t)).then(()=>{var e;null==(e=m.current.shift())||e()}).then(()=>n(t))});return(0,u.useMemo)(()=>({children:r,register:d,unregister:f,onStart:E,onStop:b,wait:v,chains:p}),[d,f,r,E,b,p,v])}function S(){}w.displayName="NestingContext";let x=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function T(e){var t;let n={};for(let r of x)n[r]=null!=(t=e[r])?t:S;return n}let P=i.AN.RenderStrategy,O=(0,i.yV)(function(e,t){let{show:n,appear:r=!1,unmount:l,...a}=e,c=(0,u.useRef)(null),m=(0,d.T)(c,t);(0,f.H)();let v=(0,o.oJ)();if(void 0===n&&null!==v&&(n=(v&o.ZM.Open)===o.ZM.Open),![!0,!1].includes(n))throw Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,h]=(0,u.useState)(n?"visible":"hidden"),E=F(()=>{h("hidden")}),[b,I]=(0,u.useState)(!0),S=(0,u.useRef)([n]);(0,s.e)(()=>{!1!==b&&S.current[S.current.length-1]!==n&&(S.current.push(n),I(!1))},[S,n]);let x=(0,u.useMemo)(()=>({show:n,appear:r,initial:b}),[n,r,b]);(0,u.useEffect)(()=>{if(n)h("visible");else if(R(E)){let e=c.current;if(!e)return;let t=e.getBoundingClientRect();0===t.x&&0===t.y&&0===t.width&&0===t.height&&h("hidden")}else h("hidden")},[n,E]);let T={unmount:l},O=(0,g.z)(()=>{var t;b&&I(!1),null==(t=e.beforeEnter)||t.call(e)}),N=(0,g.z)(()=>{var t;b&&I(!1),null==(t=e.beforeLeave)||t.call(e)});return u.createElement(w.Provider,{value:E},u.createElement(y.Provider,{value:x},(0,i.sY)({ourProps:{...T,as:u.Fragment,children:u.createElement(M,{ref:m,...T,...a,beforeEnter:O,beforeLeave:N})},theirProps:{},defaultTag:u.Fragment,features:P,visible:"visible"===p,name:"Transition"})))}),M=(0,i.yV)(function(e,t){var n;let r,{beforeEnter:I,afterEnter:S,beforeLeave:x,afterLeave:O,enter:M,enterFrom:N,enterTo:A,entered:C,leave:L,leaveFrom:D,leaveTo:k,...j}=e,H=(0,u.useRef)(null),_=(0,d.T)(H,t),z=j.unmount?i.l4.Unmount:i.l4.Hidden,{show:U,appear:V,initial:Z}=function(){let e=(0,u.useContext)(y);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),[B,G]=(0,u.useState)(U?"visible":"hidden"),K=function(){let e=(0,u.useContext)(w);if(null===e)throw Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}(),{register:Y,unregister:$}=K,q=(0,u.useRef)(null);(0,u.useEffect)(()=>Y(H),[Y,H]),(0,u.useEffect)(()=>{if(z===i.l4.Hidden&&H.current){if(U&&"visible"!==B){G("visible");return}return(0,l.E)(B,{hidden:()=>$(H),visible:()=>Y(H)})}},[B,H,Y,$,U,z]);let Q=(0,c.E)({enter:b(M),enterFrom:b(N),enterTo:b(A),entered:b(C),leave:b(L),leaveFrom:b(D),leaveTo:b(k)}),J=(n={beforeEnter:I,afterEnter:S,beforeLeave:x,afterLeave:O},r=(0,u.useRef)(T(n)),(0,u.useEffect)(()=>{r.current=T(n)},[n]),r),W=(0,f.H)();(0,u.useEffect)(()=>{if(W&&"visible"===B&&null===H.current)throw Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[H,B,W]);let X=Z&&!V,ee=!W||X||q.current===U?"idle":U?"enter":"leave",et=function(e=0){let[t,n]=(0,u.useState)(e),r=(0,a.t)(),i=(0,u.useCallback)(e=>{r.current&&n(t=>t|e)},[t,r]),o=(0,u.useCallback)(e=>!!(t&e),[t]);return{flags:t,addFlag:i,hasFlag:o,removeFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t&~e)},[n,r]),toggleFlag:(0,u.useCallback)(e=>{r.current&&n(t=>t^e)},[n])}}(0),en=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.addFlag(o.ZM.Opening),J.current.beforeEnter()},leave:()=>{et.addFlag(o.ZM.Closing),J.current.beforeLeave()},idle:()=>{}})),er=(0,g.z)(e=>(0,l.E)(e,{enter:()=>{et.removeFlag(o.ZM.Opening),J.current.afterEnter()},leave:()=>{et.removeFlag(o.ZM.Closing),J.current.afterLeave()},idle:()=>{}})),eu=F(()=>{G("hidden"),$(H)},K);(function({container:e,direction:t,classes:n,onStart:r,onStop:u}){let i=(0,a.t)(),o=(0,h.G)(),f=(0,c.E)(t);(0,s.e)(()=>{let t=(0,m.k)();o.add(t.dispose);let a=e.current;if(a&&"idle"!==f.current&&i.current){var s,c,d;let e,i,o,h,g,E,b;return t.dispose(),r.current(f.current),t.add((s=n.current,c="enter"===f.current,d=()=>{t.dispose(),u.current(f.current)},i=c?"enter":"leave",o=(0,m.k)(),h=void 0!==d?(e={called:!1},(...t)=>{if(!e.called)return e.called=!0,d(...t)}):()=>{},"enter"===i&&(a.removeAttribute("hidden"),a.style.display=""),g=(0,l.E)(i,{enter:()=>s.enter,leave:()=>s.leave}),E=(0,l.E)(i,{enter:()=>s.enterTo,leave:()=>s.leaveTo}),b=(0,l.E)(i,{enter:()=>s.enterFrom,leave:()=>s.leaveFrom}),p(a,...s.enter,...s.enterTo,...s.enterFrom,...s.leave,...s.leaveFrom,...s.leaveTo,...s.entered),v(a,...g,...b),o.nextFrame(()=>{p(a,...b),v(a,...E),function(e,t){let n=(0,m.k)();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:u}=getComputedStyle(e),[i,o]=[r,u].map(e=>{let[t=0]=e.split(",").filter(Boolean).map(e=>e.includes("ms")?parseFloat(e):1e3*parseFloat(e)).sort((e,t)=>t-e);return t}),l=i+o;if(0!==l){n.group(n=>{n.setTimeout(()=>{t(),n.dispose()},l),n.addEventListener(e,"transitionrun",e=>{e.target===e.currentTarget&&n.dispose()})});let r=n.addEventListener(e,"transitionend",e=>{e.target===e.currentTarget&&(t(),r())})}else t();n.add(()=>t()),n.dispose}(a,()=>(p(a,...g),v(a,...s.entered),h()))}),o.dispose)),t.dispose}},[t])})({container:H,classes:Q,direction:ee,onStart:(0,c.E)(e=>{eu.onStart(H,e,en)}),onStop:(0,c.E)(e=>{eu.onStop(H,e,er),"leave"!==e||R(eu)||(G("hidden"),$(H))})}),(0,u.useEffect)(()=>{X&&(z===i.l4.Hidden?q.current=null:q.current=U)},[U,X,B]);let ei=j;return V&&U&&Z&&(ei={...ei,className:(0,E.A)(j.className,...Q.current.enter,...Q.current.enterFrom)}),u.createElement(w.Provider,{value:eu},u.createElement(o.up,{value:(0,l.E)(B,{visible:o.ZM.Open,hidden:o.ZM.Closed})|et.flags},(0,i.sY)({ourProps:{ref:_},theirProps:ei,defaultTag:"div",features:P,visible:"visible"===B,name:"Transition.Child"})))}),N=(0,i.yV)(function(e,t){let n=null!==(0,u.useContext)(y),r=null!==(0,o.oJ)();return u.createElement(u.Fragment,null,!n&&r?u.createElement(O,{ref:t,...e}):u.createElement(M,{ref:t,...e}))}),A=Object.assign(O,{Child:N,Root:O})},48807:function(e,t,n){n.d(t,{G:function(){return i}});var r=n(86006),u=n(70650);function i(){let[e]=(0,r.useState)(u.k);return(0,r.useEffect)(()=>()=>e.dispose(),[e]),e}},3562:function(e,t,n){n.d(t,{z:function(){return i}});var r=n(86006),u=n(1485);let i=function(e){let t=(0,u.E)(e);return r.useCallback((...e)=>t.current(...e),[t])}},53858:function(e,t,n){n.d(t,{M:function(){return a}});var r,u=n(86006),i=n(60961),o=n(11405),l=n(30028);let a=null!=(r=u.useId)?r:function(){let e=(0,o.H)(),[t,n]=u.useState(e?()=>l.O.nextId():null);return(0,i.e)(()=>{null===t&&n(l.O.nextId())},[t]),null!=t?""+t:void 0}},58260:function(e,t,n){n.d(t,{t:function(){return i}});var r=n(86006),u=n(60961);function i(){let e=(0,r.useRef)(!1);return(0,u.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}},60961:function(e,t,n){n.d(t,{e:function(){return i}});var r=n(86006),u=n(30028);let i=(e,t)=>{u.O.isServer?(0,r.useEffect)(e,t):(0,r.useLayoutEffect)(e,t)}},1485:function(e,t,n){n.d(t,{E:function(){return i}});var r=n(86006),u=n(60961);function i(e){let t=(0,r.useRef)(e);return(0,u.e)(()=>{t.current=e},[e]),t}},45880:function(e,t,n){n.d(t,{O:function(){return a}});var r=n(86006),u=n(32243),i=n(1485);function o(e,t,n){let u=(0,i.E)(t);(0,r.useEffect)(()=>{function t(e){u.current(e)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}var l=n(58257);function a(e,t,n=!0){let i=(0,r.useRef)(!1);function a(n,r){if(!i.current||n.defaultPrevented)return;let o=r(n);if(null!==o&&o.getRootNode().contains(o)){for(let t of function e(t){return"function"==typeof t?e(t()):Array.isArray(t)||t instanceof Set?t:[t]}(e)){if(null===t)continue;let e=t instanceof HTMLElement?t:t.current;if(null!=e&&e.contains(o)||n.composed&&n.composedPath().includes(e))return}return(0,u.sP)(o,u.tJ.Loose)||-1===o.tabIndex||n.preventDefault(),t(n,o)}}(0,r.useEffect)(()=>{requestAnimationFrame(()=>{i.current=n})},[n]);let s=(0,r.useRef)(null);o("mousedown",e=>{var t,n;i.current&&(s.current=(null==(n=null==(t=e.composedPath)?void 0:t.call(e))?void 0:n[0])||e.target)},!0),o("click",e=>{s.current&&(a(e,()=>s.current),s.current=null)},!0),(0,l.s)("blur",e=>a(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}},29101:function(e,t,n){n.d(t,{i:function(){return i}});var r=n(86006),u=n(53432);function i(...e){return(0,r.useMemo)(()=>(0,u.r)(...e),[...e])}},51795:function(e,t,n){n.d(t,{f:function(){return o}});var r=n(86006),u=n(60961);function i(e){var t;if(e.type)return e.type;let n=null!=(t=e.as)?t:"button";if("string"==typeof n&&"button"===n.toLowerCase())return"button"}function o(e,t){let[n,o]=(0,r.useState)(()=>i(e));return(0,u.e)(()=>{o(i(e))},[e.type,e.as]),(0,u.e)(()=>{n||t.current&&t.current instanceof HTMLButtonElement&&!t.current.hasAttribute("type")&&o("button")},[n,t]),n}},11405:function(e,t,n){n.d(t,{H:function(){return i}});var r=n(86006),u=n(30028);function i(){let[e,t]=(0,r.useState)(u.O.isHandoffComplete);return e&&!1===u.O.isHandoffComplete&&t(!1),(0,r.useEffect)(()=>{!0!==e&&t(!0)},[e]),(0,r.useEffect)(()=>u.O.handoff(),[]),e}},68496:function(e,t,n){n.d(t,{T:function(){return l},h:function(){return o}});var r=n(86006),u=n(3562);let i=Symbol();function o(e,t=!0){return Object.assign(e,{[i]:t})}function l(...e){let t=(0,r.useRef)(e);(0,r.useEffect)(()=>{t.current=e},[e]);let n=(0,u.z)(e=>{for(let n of t.current)null!=n&&("function"==typeof n?n(e):n.current=e)});return e.every(e=>null==e||(null==e?void 0:e[i]))?void 0:n}},58257:function(e,t,n){n.d(t,{s:function(){return i}});var r=n(86006),u=n(1485);function i(e,t,n){let i=(0,u.E)(t);(0,r.useEffect)(()=>{function t(e){i.current(e)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}},10546:function(e,t,n){n.d(t,{ZM:function(){return o},oJ:function(){return l},up:function(){return a}});var r,u=n(86006);let i=(0,u.createContext)(null);i.displayName="OpenClosedContext";var o=((r=o||{})[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r);function l(){return(0,u.useContext)(i)}function a({value:e,children:t}){return u.createElement(i.Provider,{value:e},t)}},24373:function(e,t,n){function r(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(null==t?void 0:t.getAttribute("disabled"))==="";return!(r&&function(e){if(!e)return!1;let t=e.previousElementSibling;for(;null!==t;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}(n))&&r}n.d(t,{P:function(){return r}})},34339:function(e,t,n){n.d(t,{A:function(){return r}});function r(...e){return e.filter(Boolean).join(" ")}},70650:function(e,t,n){n.d(t,{k:function(){return function e(){let t=[],n={addEventListener:(e,t,r,u)=>(e.addEventListener(t,r,u),n.add(()=>e.removeEventListener(t,r,u))),requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return n.add(()=>cancelAnimationFrame(t))},nextFrame:(...e)=>n.requestAnimationFrame(()=>n.requestAnimationFrame(...e)),setTimeout(...e){let t=setTimeout(...e);return n.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return(0,r.Y)(()=>{t.current&&e[0]()}),n.add(()=>{t.current=!1})},style(e,t,n){let r=e.style.getPropertyValue(t);return Object.assign(e.style,{[t]:n}),this.add(()=>{Object.assign(e.style,{[t]:r})})},group(t){let n=e();return t(n),this.add(()=>n.dispose())},add:e=>(t.push(e),()=>{let n=t.indexOf(e);if(n>=0)for(let e of t.splice(n,1))e()}),dispose(){for(let e of t.splice(0))e()}};return n}}});var r=n(10670)},30028:function(e,t,n){n.d(t,{O:function(){return o}});var r=Object.defineProperty,u=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,i=(e,t,n)=>(u(e,"symbol"!=typeof t?t+"":t,n),n);let o=new class{constructor(){i(this,"current",this.detect()),i(this,"handoffState","pending"),i(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return"server"===this.current}get isClient(){return"client"===this.current}detect(){return"undefined"==typeof window||"undefined"==typeof document?"server":"client"}handoff(){"pending"===this.handoffState&&(this.handoffState="complete")}get isHandoffComplete(){return"complete"===this.handoffState}}},32243:function(e,t,n){n.d(t,{C5:function(){return y},EO:function(){return w},TO:function(){return d},fE:function(){return m},jA:function(){return R},sP:function(){return g},tJ:function(){return h},wI:function(){return E},z2:function(){return I}});var r,u,i,o,l,a=n(70650),s=n(59325),c=n(53432);let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var d=((r=d||{})[r.First=1]="First",r[r.Previous=2]="Previous",r[r.Next=4]="Next",r[r.Last=8]="Last",r[r.WrapAround=16]="WrapAround",r[r.NoScroll=32]="NoScroll",r),m=((u=m||{})[u.Error=0]="Error",u[u.Overflow=1]="Overflow",u[u.Success=2]="Success",u[u.Underflow=3]="Underflow",u),v=((i=v||{})[i.Previous=-1]="Previous",i[i.Next=1]="Next",i);function p(e=document.body){return null==e?[]:Array.from(e.querySelectorAll(f)).sort((e,t)=>Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(t.tabIndex||Number.MAX_SAFE_INTEGER)))}var h=((o=h||{})[o.Strict=0]="Strict",o[o.Loose=1]="Loose",o);function g(e,t=0){var n;return e!==(null==(n=(0,c.r)(e))?void 0:n.body)&&(0,s.E)(t,{0:()=>e.matches(f),1(){let t=e;for(;null!==t;){if(t.matches(f))return!0;t=t.parentElement}return!1}})}function E(e){let t=(0,c.r)(e);(0,a.k)().nextFrame(()=>{t&&!g(t.activeElement,0)&&y(e)})}var b=((l=b||{})[l.Keyboard=0]="Keyboard",l[l.Mouse=1]="Mouse",l);function y(e){null==e||e.focus({preventScroll:!0})}function I(e,t=e=>e){return e.slice().sort((e,n)=>{let r=t(e),u=t(n);if(null===r||null===u)return 0;let i=r.compareDocumentPosition(u);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function w(e,t){return R(p(),t,{relativeTo:e})}function R(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:u=[]}={}){var i,o,l;let a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?n?I(e):e:p(e);u.length>0&&s.length>1&&(s=s.filter(e=>!u.includes(e))),r=null!=r?r:a.activeElement;let c=(()=>{if(5&t)return 1;if(10&t)return -1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),f=(()=>{if(1&t)return 0;if(2&t)return Math.max(0,s.indexOf(r))-1;if(4&t)return Math.max(0,s.indexOf(r))+1;if(8&t)return s.length-1;throw Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=32&t?{preventScroll:!0}:{},m=0,v=s.length,h;do{if(m>=v||m+v<=0)return 0;let e=f+m;if(16&t)e=(e+v)%v;else{if(e<0)return 3;if(e>=v)return 1}null==(h=s[e])||h.focus(d),m+=c}while(h!==a.activeElement);return 6&t&&null!=(l=null==(o=null==(i=h)?void 0:i.matches)?void 0:o.call(i,"textarea,input"))&&l&&h.select(),2}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{1===e.detail?delete document.documentElement.dataset.headlessuiFocusVisible:0===e.detail&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0))},59325:function(e,t,n){n.d(t,{E:function(){return r}});function r(e,t,...n){if(e in t){let r=t[e];return"function"==typeof r?r(...n):r}let u=Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(u,r),u}},10670:function(e,t,n){n.d(t,{Y:function(){return r}});function r(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch(e=>setTimeout(()=>{throw e}))}},53432:function(e,t,n){n.d(t,{r:function(){return u}});var r=n(30028);function u(e){return r.O.isServer?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}},42810:function(e,t,n){n.d(t,{AN:function(){return a},l4:function(){return s},sY:function(){return c},yV:function(){return m}});var r,u,i=n(86006),o=n(34339),l=n(59325),a=((r=a||{})[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r),s=((u=s||{})[u.Unmount=0]="Unmount",u[u.Hidden=1]="Hidden",u);function c({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:u,visible:i=!0,name:o}){let a=d(t,e);if(i)return f(a,n,r,o);let s=null!=u?u:0;if(2&s){let{static:e=!1,...t}=a;if(e)return f(t,n,r,o)}if(1&s){let{unmount:e=!0,...t}=a;return(0,l.E)(e?0:1,{0:()=>null,1:()=>f({...t,hidden:!0,style:{display:"none"}},n,r,o)})}return f(a,n,r,o)}function f(e,t={},n,r){let{as:u=n,children:l,refName:a="ref",...s}=p(e,["unmount","static"]),c=void 0!==e.ref?{[a]:e.ref}:{},f="function"==typeof l?l(t):l;"className"in s&&s.className&&"function"==typeof s.className&&(s.className=s.className(t));let m={};if(t){let e=!1,n=[];for(let[r,u]of Object.entries(t))"boolean"==typeof u&&(e=!0),!0===u&&n.push(r);e&&(m["data-headlessui-state"]=n.join(" "))}if(u===i.Fragment&&Object.keys(v(s)).length>0){if(!(0,i.isValidElement)(f)||Array.isArray(f)&&f.length>1)throw Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(e=>`  - ${e}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(e=>`  - ${e}`).join(`
`)].join(`
`));let e=f.props,t="function"==typeof(null==e?void 0:e.className)?(...t)=>(0,o.A)(null==e?void 0:e.className(...t),s.className):(0,o.A)(null==e?void 0:e.className,s.className),n=t?{className:t}:{};return(0,i.cloneElement)(f,Object.assign({},d(f.props,v(p(s,["ref"]))),m,c,function(...e){return{ref:e.every(e=>null==e)?void 0:t=>{for(let n of e)null!=n&&("function"==typeof n?n(t):n.current=t)}}}(f.ref,c.ref),n))}return(0,i.createElement)(u,Object.assign({},p(s,["ref"]),u!==i.Fragment&&c,u!==i.Fragment&&m),f)}function d(...e){if(0===e.length)return{};if(1===e.length)return e[0];let t={},n={};for(let r of e)for(let e in r)e.startsWith("on")&&"function"==typeof r[e]?(null!=n[e]||(n[e]=[]),n[e].push(r[e])):t[e]=r[e];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(e=>[e,void 0])));for(let e in n)Object.assign(t,{[e](t,...r){for(let u of n[e]){if((t instanceof Event||(null==t?void 0:t.nativeEvent)instanceof Event)&&t.defaultPrevented)return;u(t,...r)}}});return t}function m(e){var t;return Object.assign((0,i.forwardRef)(e),{displayName:null!=(t=e.displayName)?t:e.name})}function v(e){let t=Object.assign({},e);for(let e in t)void 0===t[e]&&delete t[e];return t}function p(e,t=[]){let n=Object.assign({},e);for(let e of t)e in n&&delete n[e];return n}}}]);