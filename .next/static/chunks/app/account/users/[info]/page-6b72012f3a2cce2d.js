(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[949],{45894:function(e,t,r){Promise.resolve().then(r.bind(r,38608))},91933:function(e,t,r){"use strict";var a=r(9268),n=r(35846),s=r.n(n),o=r(86006);let i={regular:"max-w-xs text-white bg-primary hover:opacity-2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center hover:bg-secondary text-[13px] md:text-sm lg:text-15px leading-4 h-11 md:h-[50px] px-5 lg:px-6 py-4 md:py-3.5 lg:py-4"};t.Z=o.memo(function(e){let{label:t,nameIcon:r,type:n="button",location:o="",design:l="regular",width:c="120px",handleClick:d=()=>{}}=e,u="".concat(i[l]," w-[").concat(c,"]");return o?(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s(),{className:"".concat(u),href:o,children:[(0,a.jsx)("i",{className:"fas ".concat(r)})," ",t]})}):(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("button",{className:"".concat(u),type:n,onClick:d,children:[(0,a.jsx)("i",{className:"fas ".concat(r)})," ",t]})})})},38608:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return x}});var a=r(9268),n=r(86006),s=r(19700),o=r(92664),i=r(91933),l=r(22202),c=r(42903),d=r(47994),u=r(28605),m=r(69799),f=r(6029),p=r(77948);function x(e){let{action:t="a",id:r=""}=e,{register:x,handleSubmit:h,formState:{errors:g},setValue:y}=(0,s.cI)({mode:"onChange"}),[b,w]=(0,n.useState)([]),{isActionEdit:j,isActionAdd:v}=(0,c.w8)({action:t}),{getActivedRoles:N}=(0,p.d)(),{addNewUser:C,editUser:k,getOneUser:A}=(0,u.U)();(0,n.useEffect)(()=>{N().then(e=>{w(e),j?E():v&&y("idRole",e[0].id)})},[]);let E=async()=>{let e=await A({id:r}),{username:t,email:a,idRole:n,state:s}=e;y("username",t),y("email",a),y("idRole",n),y("state",s)},Z=async e=>{let{password:t="password",confirmPassword:a="confirmPassword",state:n}=e;if(v&&t!==a){(0,m.G)({message:"Las contrase\xf1as no son iguales"});return}let s={...e,state:n?1:0};v?await C(s):j&&await k(r,s)};return(0,a.jsxs)("form",{className:"space-y-6",onSubmit:h(Z),children:[(0,a.jsx)("h2",{className:"text-brand-dark text-base lg:text-lg xl:text-[20px] font-semibold xl:leading-8 mb-5 md:mb-6 lg:mb-7 lg:-mt-1",children:"Datos del usuario"}),(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-5",children:[(0,a.jsx)(o.Z,{name:"username",label:"Nombre de usuario",type:"username",errors:g,validations:{...x("username",{required:!0})}}),(0,a.jsx)(o.Z,{name:"email",label:"Correo electr\xf3nico",type:"email",errors:g,validations:{...x("email",{required:!0,pattern:d.m.email})}}),(0,a.jsx)(f.Z,{label:"Rol",items:b,validations:{...x("idRole")}})]}),!j&&(0,a.jsxs)("div",{className:"grid lg:grid-cols-2 gap-5",children:[(0,a.jsx)(o.Z,{name:"password",label:"Contrase\xf1a",type:"password",errors:g,validations:{...x("password",{required:!0,minLength:5})}}),(0,a.jsx)(o.Z,{name:"confirmPassword",label:"Confirmar contrase\xf1a",type:"password",errors:g,validations:{...x("confirmPassword",{required:!0,minLength:5})}})]}),(0,a.jsx)("hr",{className:"mt-6 border-b-1 border-blueGray-300"}),(0,a.jsx)("div",{className:"grid w-full",children:(0,a.jsx)(l.Z,{validations:{...x("state")}})}),(0,a.jsx)("hr",{className:"mt-6 border-b-1 border-blueGray-300"}),(0,a.jsx)(i.Z,{label:"".concat((0,c.fM)({action:t})),type:"submit",full:!0})]})}},92664:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var a=r(9268),n=r(86006);function s(e){var t;let{label:r="Not label",name:s,type:o="text",errors:i,validations:l,amountMinLength:c=5}=e,d=(0,n.useId)(1,"login-email-"),u=null===(t=i[s])||void 0===t?void 0:t.type,m="required"===u,f="pattern"===u,p="minLength"===u,x=m||f||p?"red":"gray";return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("div",{className:"mb-3",children:[(0,a.jsx)("label",{htmlFor:d,className:"block font-normal text-sm leading-none mb-3 cursor-pointer text-".concat(x,"-500"),children:r}),(0,a.jsx)("input",{type:o,step:"any",id:d,className:"px-5 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-sm lg:text-15px rounded-md transition-all duration-200 border border-".concat(u?x+"-500":"gray-200"),...l}),m&&(0,a.jsxs)("p",{className:"mt-2 text-xs text-red-500",children:[(0,a.jsx)("span",{className:"font-medium",children:"Oops!"})," Este campo es requerido"]}),f&&(0,a.jsxs)("p",{className:"mt-2 text-xs text-red-500",children:[(0,a.jsx)("span",{className:"font-medium",children:"Oops!"})," Ingresa un correo v\xe1lido"]}),p&&(0,a.jsxs)("p",{className:"mt-2 text-xs text-red-500",children:[(0,a.jsx)("span",{className:"font-medium",children:"Oops!"})," Caract\xe9res m\xednimos es"," ",c]})]})})}},6029:function(e,t,r){"use strict";r.d(t,{Z:function(){return n}});var a=r(9268);function n(e){let{label:t,defaultValue:r="",items:n,validations:s={}}=e;return(0,a.jsx)("div",{className:"w-full",children:(0,a.jsxs)("div",{className:"relative w-full mb-3",children:[(0,a.jsx)("label",{className:"block font-normal text-sm leading-none mb-3 cursor-pointer text-gray-500",children:t}),(0,a.jsx)("select",{className:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",defaultValue:r,...s,children:n.map((e,t)=>(0,a.jsx)("option",{value:e.id,children:e.name},t))})]})})}},22202:function(e,t,r){"use strict";r.d(t,{Z:function(){return n},s:function(){return s}});var a=r(9268);function n(e){let{validations:t}=e;return(0,a.jsxs)("div",{className:"relative flex pt-6 md:pt-8 lg:pt-10",children:[(0,a.jsxs)("div",{className:"pr-2.5 rtl:pl-2.5",children:[(0,a.jsx)("h3",{className:"text-brand-dark text-15px sm:text-base font-semibold mb-1 font-medium",children:"Estado"}),(0,a.jsx)("p",{className:"text-brand-muted text-sm leading-7 lg:leading-[1.85em]",children:"Activa o desactiva en caso de uso"})]}),(0,a.jsx)("div",{className:"ml-auto rtl:mr-auto",children:(0,a.jsx)(s,{validations:t})})]})}function s(e){let{validations:t}=e;return(0,a.jsxs)("label",{className:"relative inline-flex items-center cursor-pointer ml-auto rtl:mr-auto",children:[(0,a.jsx)("input",{type:"checkbox",className:"sr-only peer",...t}),(0,a.jsx)("div",{className:"w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-secondary"})]})}},84894:function(e,t,r){"use strict";r.r(t),r.d(t,{LoadingContext:function(){return s},default:function(){return o}});var a=r(9268),n=r(86006);let s=n.createContext({});function o(e){let{children:t}=e,[r,o]=(0,n.useState)(!1);return(0,a.jsx)(s.Provider,{value:{loading:r,setLoading:o},children:t})}},19124:function(e,t,r){"use strict";r.d(t,{V:function(){return i}});var a=r(69799);let n=e=>{let{message:t="Error de conexion no mapeado",isError:r}=e;return r&&(0,a.G)({message:t}),{isError:r}};var s=r(16554),o=r(56008);let i=()=>{let{showLoading:e,hideLoading:t}=(0,s.r)(),r=(0,o.useRouter)(),a=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"TokenExpiredError"===e||"JsonWebTokenError"===e||"NotBeforeError"===e},i=async function(s){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e();try{let e=await s(),{name:i}=e;t(),a(i)&&r.push("/logout");let{isError:l}=n(e);return l||(e=await o(e)),e}catch(e){t(),n({isError:!0})}},l=async r=>{e();try{let e=await r();return n(e),t(),e}catch(e){t(),n({isError:!0})}},c=async(r,a)=>{e();try{let e=await r();t();let{isError:s}=n(e);s||a(e)}catch(e){t(),n({isError:!0})}};return{tryCatchReturnResponse:l,tryCatchOnlyActions:c,tryCatch:i}}},16554:function(e,t,r){"use strict";r.d(t,{r:function(){return s}});var a=r(86006),n=r(84894);let s=()=>{let{loading:e,setLoading:t}=(0,a.useContext)(n.LoadingContext);return{isLoading:!!e,showLoading:()=>t(!0),hideLoading:()=>t(!1)}}},77948:function(e,t,r){"use strict";r.d(t,{d:function(){return o}});var a=r(19124),n=r(69799),s=r(56008);let o=()=>{let{tryCatch:e}=(0,a.V)(),t=(0,s.useRouter)(),r=async()=>e(async()=>{let e=await fetch("/api/roles/getAll"),t=await e.json();return t},e=>e),o=async()=>e(async()=>{let e=await fetch("/api/roles/getAll?state=1"),t=await e.json();return t},e=>e),i=async t=>{let{id:r}=t;return e(async()=>{let e=await fetch("/api/roles/getOne?id=".concat(r)),t=await e.json();return t},e=>e)},l=async r=>e(async()=>{let e=await fetch("/api/roles/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),t=await e.json();return t},()=>{(0,n.w)({message:"\xa1Rol agregado!"}),t.push("/account/roles")}),c=async(r,a)=>e(async()=>{let e=await fetch("/api/roles/edit?id=".concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),t=await e.json();return t},()=>{(0,n.w)({message:"\xa1Rol editado!"}),t.push("/account/roles")});return{getAllRoles:r,getActivedRoles:o,getOneRole:i,addNewRole:l,editRole:c}}},28605:function(e,t,r){"use strict";r.d(t,{U:function(){return o}});var a=r(19124),n=r(69799),s=r(56008);let o=()=>{let{tryCatch:e}=(0,a.V)(),t=(0,s.useRouter)(),r=async()=>e(async()=>{let e=await fetch("/api/users/getAll"),t=await e.json();return t},e=>{let t=e.map(e=>{var t;return{...e,rolename:null==e?void 0:null===(t=e.role)||void 0===t?void 0:t.name}});return t}),o=async()=>e(async()=>{let e=await fetch("/api/users/getAll?state=1"),t=await e.json();return t},e=>{let t=e.map(e=>{var t;return{...e,rolename:null==e?void 0:null===(t=e.role)||void 0===t?void 0:t.name}});return t}),i=async t=>{let{id:r}=t;return e(async()=>{let e=await fetch("/api/users/getOne?id=".concat(r)),t=await e.json();return t},e=>{let{role:t={}}=e,r={...e,idRole:t};return r})},l=async r=>e(async()=>{let e=await fetch("/api/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),t=await e.json();return t},()=>{(0,n.w)({message:"\xa1Usuario agregado!"}),t.push("/account/users")}),c=async(r,a)=>e(async()=>{let e=await fetch("/api/users/edit?id=".concat(r),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(a)}),t=await e.json();return t},()=>{(0,n.w)({message:"\xa1Usuario editado!"}),t.push("/account/users")}),d=async r=>{let{id:a,body:s}=r;return e(async()=>{let e=await fetch("/api/users/changePassword?id=".concat(a),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}),t=await e.json();return t},()=>{(0,n.w)({message:"\xa1Contrase\xf1a reestablecida!"}),t.push("/account/users")})};return{getAllUsers:r,getActivedUsers:o,getOneUser:i,addNewUser:l,editUser:c,changePassword:d}}},69799:function(e,t,r){"use strict";r.d(t,{G:function(){return s},w:function(){return o}});var a=r(40856),n=r.n(a);let s=e=>{let{message:t}=e;n().fire({icon:"error",html:"<h4>".concat(t,"</h4>"),timer:3e3,showConfirmButton:!1,width:400,padding:"2em 3em",background:"#fff url(/images/trees.png)",backdrop:"\n    rgba(123, 0, 0, 0.4)\n    left top\n    no-repeat\n  "})},o=e=>{let{message:t}=e;n().fire({icon:"success",html:"<h4>".concat(t,"</h4>"),timer:3e3,showConfirmButton:!1,width:400,padding:"2em 3em",backdrop:"\n    rgba(129, 233, 121, 0.4)\n    left top\n    no-repeat\n  "})}},42903:function(e,t,r){"use strict";r.d(t,{fM:function(){return a},w8:function(){return n}});let a=e=>{let{action:t}=e;switch(t){case"a":return"Agregar";case"e":return"Editar";case"c":return"Clonar";default:return"Action not found"}},n=e=>{let{action:t}=e;return{isActionEdit:"e"===t,isActionAdd:"a"===t,isActionPreview:"p"===t,isActionClone:"c"===t}}},47994:function(e,t,r){"use strict";r.d(t,{m:function(){return a}});let a={names:/^[a-zA-ZÀ-ÿ\s]{1,40}$/,password:/^.{4,12}$/,email:/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,phone:/^\d{7,9}$/}}},function(e){e.O(0,[377,846,700,667,488,744],function(){return e(e.s=45894)}),_N_E=e.O()}]);