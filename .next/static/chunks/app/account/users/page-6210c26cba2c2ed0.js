(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{27166:function(e,a,t){Promise.resolve().then(t.bind(t,40113))},40113:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return h}});var n=t(9268),s=t(8683),r=t.n(s),o=t(97944),c=t(84272);let i=[{accessorKey:"username",header:()=>(0,n.jsx)("span",{children:"Nombre de usuario"}),cell:e=>(0,n.jsx)("span",{className:"font-bold",children:e.getValue()})},{accessorKey:"email",header:()=>(0,n.jsx)("span",{children:"Correo electr\xf3nico"})},{accessorKey:"rolename",header:()=>(0,n.jsx)("span",{children:"Rol"})},{accessorKey:"state",header:()=>(0,n.jsx)("span",{children:"Estado"}),cell:e=>(0,n.jsx)("span",{className:r()({"text-xs text-gray-600 font-medium mr-2 px-2.5 py-0.5 rounded border":!0,"bg-red-100 border-red-400":0===e.getValue(),"bg-green-100 border-green-400":1===e.getValue()}),children:e.getValue()?"Activo":"Inactivo"}),enableSorting:!0},{accessorKey:"id",header:"Acciones",cell:e=>{let a=e.getValue();return(0,n.jsx)("div",{className:"space-x-2",children:(0,n.jsx)(o.Z,{linkEdit:"/account/users/e".concat(a)})})},enableSorting:!1}];function u(e){let{data:a=[]}=e;return(0,n.jsx)(c.Z,{title:"Usuarios",subtitle:"Lista de usuarios registrados en el sistema",columns:i,data:a,linkRefActionAdd:"/account/users/a"})}var l=t(28605),d=t(86006);function h(){let[e,a]=(0,d.useState)([]),{getAllUsers:t}=(0,l.U)();return(0,d.useEffect)(()=>{t().then(e=>{a(e)})},[]),(0,n.jsx)(u,{data:e})}},28605:function(e,a,t){"use strict";t.d(a,{U:function(){return o}});var n=t(19124),s=t(69799),r=t(56008);let o=()=>{let{tryCatch:e}=(0,n.V)(),a=(0,r.useRouter)(),t=async()=>e(async()=>{let e=await fetch("/api/users/getAll"),a=await e.json();return a},e=>{let a=e.map(e=>{var a;return{...e,rolename:null==e?void 0:null===(a=e.role)||void 0===a?void 0:a.name}});return a}),o=async()=>e(async()=>{let e=await fetch("/api/users/getAll?state=1"),a=await e.json();return a},e=>{let a=e.map(e=>{var a;return{...e,rolename:null==e?void 0:null===(a=e.role)||void 0===a?void 0:a.name}});return a}),c=async a=>{let{id:t}=a;return e(async()=>{let e=await fetch("/api/users/getOne?id=".concat(t)),a=await e.json();return a},e=>{let{role:a={}}=e,t={...e,idRole:a};return t})},i=async t=>e(async()=>{let e=await fetch("/api/users/add",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),a=await e.json();return a},()=>{(0,s.w)({message:"\xa1Usuario agregado!"}),a.push("/account/users")}),u=async(t,n)=>e(async()=>{let e=await fetch("/api/users/edit?id=".concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}),a=await e.json();return a},()=>{(0,s.w)({message:"\xa1Usuario editado!"}),a.push("/account/users")}),l=async t=>{let{id:n,body:r}=t;return e(async()=>{let e=await fetch("/api/users/changePassword?id=".concat(n),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)}),a=await e.json();return a},()=>{(0,s.w)({message:"\xa1Contrase\xf1a reestablecida!"}),a.push("/account/users")})};return{getAllUsers:t,getActivedUsers:o,getOneUser:c,addNewUser:i,editUser:u,changePassword:l}}}},function(e){e.O(0,[377,846,769,171,530,667,488,744],function(){return e(e.s=27166)}),_N_E=e.O()}]);