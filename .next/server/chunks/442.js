exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 72689:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 21830));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 14009))

/***/ }),

/***/ 21830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Routes)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/utils/routes.js

const { ClipboardDocumentIcon , Bars3BottomLeftIcon  } = __webpack_require__(25430);
const ROUTES = [
    {
        title: "Permisos",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(ClipboardDocumentIcon, {}),
        href: "/account/permissions"
    },
    {
        title: "Roles",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/roles"
    },
    {
        title: "Usuarios",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/users"
    },
    {
        title: "Familias",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/families"
    },
    {
        title: "Categor\xedas",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/categories"
    },
    {
        title: "Productos",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/products"
    },
    {
        title: "Reestablecer contrase\xf1a",
        icon: /*#__PURE__*/ jsx_runtime_.jsx(Bars3BottomLeftIcon, {}),
        href: "/account/changepassword"
    }
];

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/sidebar/Routes.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function Routes() {
    const pathname = (0,navigation.usePathname)();
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: ROUTES.map(({ href , title , icon  }, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${pathname === href ? "bg-gray-100" : ""} hover:bg-gray-200`,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    className: "flex items-center cursor-pointer text-sm lg:text-15px text-brand-dark py-3.5 px-3.5 xl:px-4 2xl:px-5 mb-1 bg-fill-base font-medium",
                    href: href,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: `w-9 xl:w-10 shrink-0 flex justify-center`,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-5 md:w-[22px] h-5 md:h-[22px]",
                                children: icon
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "ltr:pl-1 lg:rtl:pr-1.5",
                            children: title
                        })
                    ]
                })
            }, index))
    });
}


/***/ }),

/***/ 14009:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SidebarHidden)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30503);
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(21830);
/* __next_internal_client_entry_do_not_use__ default auto */ 



function SidebarHidden() {
    const [isVisible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "lg:hidden",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "relative w-full font-body",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    className: "relative flex items-center w-full p-4 border rounded cursor-pointer text-brand-dark md:p-5 text-right focus:outline-none border-border-base",
                    id: "headlessui-listbox-button-:rt:",
                    type: "button",
                    "aria-haspopup": "listbox",
                    "aria-expanded": "false",
                    "data-headlessui-state": "",
                    onClick: ()=>setVisible(!isVisible),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .UserIcon */ .tB, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "flex truncate items-center text-sm md:text-15px font-medium pl-2.5 pr-2.5 relative",
                            children: "M\xf3dulos de cuenta"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            className: "absolute inset-y-0 flex items-center pointer-events-none right-4 md:right-5",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .ArrowToBottomIcon */ .i4, {})
                        })
                    ]
                }),
                isVisible && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: "absolute bg-white z-20 w-full py-2.5 mt-1.5 overflow-auto rounded-md shadow-dropDown max-h-72 focus:outline-none text-sm md:text-15px shadow",
                    "aria-labelledby": "headlessui-listbox-button-:rt:",
                    "aria-orientation": "vertical",
                    id: "headlessui-listbox-options-:r2d:",
                    role: "listbox",
                    tabindex: "0",
                    "data-headlessui-state": "open",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Routes__WEBPACK_IMPORTED_MODULE_3__["default"], {})
                })
            ]
        })
    });
}


/***/ }),

/***/ 44824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/section/index.js
var section = __webpack_require__(7087);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/components/sidebar/Routes.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\components\sidebar\Routes.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Routes = (__default__);
;// CONCATENATED MODULE: ./src/components/sidebar/Sidebar.js


function Sidebar() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "hidden lg:block shrink-0 w-56 xl:w-72 2xl:w-[385px] mr-7 ml-7 xl:mr-8 xl:ml-8",
        children: /*#__PURE__*/ jsx_runtime_.jsx("nav", {
            className: "flex flex-col pb-2 md:pb-6 border border-border-base rounded-md overflow-hidden",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Routes, {})
        })
    });
}

;// CONCATENATED MODULE: ./src/components/sidebar/SidebarHidden.js

const SidebarHidden_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\components\sidebar\SidebarHidden.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: SidebarHidden_esModule, $$typeof: SidebarHidden_$$typeof } = SidebarHidden_proxy;
const SidebarHidden_default_ = SidebarHidden_proxy.default;


/* harmony default export */ const SidebarHidden = (SidebarHidden_default_);
;// CONCATENATED MODULE: ./src/app/account/layout.js




function layout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "border-t border-b border-border-base",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-[1920px] px-4 md:px-6 lg:px-8 2xl:px-10",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pt-10 2xl:pt-12 pb-12 lg:pb-14 xl:pb-16 2xl:pb-20 xl:max-w-screen-xl 2xl:max-w-[1300px] mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-col w-full lg:flex-row",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(SidebarHidden, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "w-full p-4 mt-4 border rounded-md lg:mt-0 border-border-base sm:p-5 lg:py-8 2xl:py-10 lg:px-7 2xl:px-12 overflow-x-auto",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(section/* default */.Z, {
                                children: children
                            })
                        })
                    ]
                })
            })
        })
    });
}


/***/ })

};
;