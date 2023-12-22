exports.id = 7970;
exports.ids = [7970];
exports.modules = {

/***/ 35454:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 90125, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 86249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 97844, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 61522, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 13100, 23))

/***/ }),

/***/ 48424:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 70332));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 57079));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98793));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 82479));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 39243));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 98305));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 17668));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7649, 23))

/***/ }),

/***/ 17668:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(86235);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44094);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11966);
/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9712);
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(85902);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _CartValueAddOrRest__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(45954);
/* __next_internal_client_entry_do_not_use__ default auto */ 







// const products = [
//   {
//     id: 1,
//     name: 'Throwback Hip Bag',
//     href: '#',
//     color: 'Salmon',
//     price: 'S/.90.00',
//     quantity: 1,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
//     imageAlt:
//       'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: 'S/.32.00',
//     quantity: 1,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
//   {
//     id: 2,
//     name: 'Medium Stuff Satchel',
//     href: '#',
//     color: 'Blue',
//     price: 'S/.32.00',
//     quantity: 1,
//     imageSrc:
//       'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
//     imageAlt:
//       'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
//   },
// ]
function ButtonFloat({ showCart , total  }) {
    const showProducts = (event)=>{
        event.preventDefault();
        showCart();
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
        className: "cursor-pointer fixed top-2/4 right-0 p-3 py-4 rounded-l-lg flex flex-col justify-items-center items-center gap-2 transition ease-in-out delay-150 bg-primary z-10",
        onClick: showProducts,
        type: "button",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex gap-1 mb-2",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                        className: "h-5 w-5 text-white font-bold "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "text-white font-semibold text-sm",
                        children: "Tu carrito"
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "inline-block text-center text-primary w-30 px-3 py-2 bg-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800",
                children: [
                    "S/.",
                    total
                ]
            })
        ]
    });
}
function Cart() {
    const [open, setOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { getTotal , removeOfCart , products  } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_2__/* .useCart */ .j)();
    const removeProduct = ({ id  })=>{
        removeOfCart({
            idProduct: id
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonFloat, {
                showCart: ()=>setOpen(true),
                total: getTotal()
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Root */ .u.Root, {
                show: open,
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__/* .Dialog */ .V, {
                    as: "div",
                    className: "z-10",
                    onClose: setOpen,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Child */ .u.Child, {
                            as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                            enter: "ease-in-out duration-500",
                            enterFrom: "opacity-0",
                            enterTo: "opacity-100",
                            leave: "ease-in-out duration-500",
                            leaveFrom: "opacity-100",
                            leaveTo: "opacity-0",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "fixed z-10 inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "fixed z-10 inset-0 overflow-hidden",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "absolute inset-0 overflow-hidden",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "pointer-events-none fixed z-9 inset-y-0 right-0 flex max-w-full pl-10",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__/* .Transition.Child */ .u.Child, {
                                        as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                                        enter: "transform transition ease-in-out duration-500 sm:duration-700",
                                        enterFrom: "translate-x-full",
                                        enterTo: "translate-x-0",
                                        leave: "transform transition ease-in-out duration-500 sm:duration-700",
                                        leaveFrom: "translate-x-0",
                                        leaveTo: "translate-x-full",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__/* .Dialog.Panel */ .V.Panel, {
                                            className: "pointer-events-auto w-screen max-w-md",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex items-start justify-between",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_7__/* .Dialog.Title */ .V.Title, {
                                                                        className: "text-lg font-medium text-gray-900",
                                                                        children: "Carrito de compras"
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: "ml-3 flex h-7 items-center",
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                            type: "button",
                                                                            className: "-m-2 p-2 text-gray-400 hover:text-gray-500",
                                                                            onClick: ()=>setOpen(false),
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    className: "sr-only",
                                                                                    children: "Close panel"
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                                                                    className: "h-6 w-6",
                                                                                    "aria-hidden": "true"
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-8",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    className: "flow-root",
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                                                        role: "list",
                                                                        className: "-my-6 divide-y divide-gray-200",
                                                                        children: products.map((product)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                                                                className: "flex py-6",
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: product.urlImage,
                                                                                            alt: product.name,
                                                                                            className: "h-full w-full object-cover object-center"
                                                                                        })
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        className: "ml-4 flex flex-1 flex-col",
                                                                                        children: [
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                        className: "flex justify-between text-base font-medium text-gray-900",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                                                                    href: product.href,
                                                                                                                    children: product.name
                                                                                                                })
                                                                                                            }),
                                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                                                className: "ml-4",
                                                                                                                children: [
                                                                                                                    "S/",
                                                                                                                    product.price
                                                                                                                ]
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                                                        className: "mt-1 text-sm text-gray-500",
                                                                                                        children: product.color
                                                                                                    })
                                                                                                ]
                                                                                            }),
                                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                                className: "flex flex-1 items-end justify-between text-sm",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                                                        className: "text-gray-500",
                                                                                                        children: [
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                                                className: "text-xs",
                                                                                                                children: "Cantidad"
                                                                                                            }),
                                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_CartValueAddOrRest__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                                                                                id: product.id,
                                                                                                                name: product.name,
                                                                                                                price: product.price,
                                                                                                                urlImage: product.urlImage
                                                                                                            })
                                                                                                        ]
                                                                                                    }),
                                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                                        className: "flex",
                                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                                                                            type: "button",
                                                                                                            className: "font-medium text-indigo-600 hover:text-indigo-500",
                                                                                                            onClick: ()=>removeProduct({
                                                                                                                    id: product.id
                                                                                                                }),
                                                                                                            children: "Eliminar"
                                                                                                        })
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            }, product.id))
                                                                    })
                                                                })
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "border-t border-gray-200 px-4 py-6 sm:px-6",
                                                        children: [
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                className: "flex justify-between text-base font-medium text-gray-900",
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                        children: "Subtotal"
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                        children: [
                                                                            "S/",
                                                                            getTotal()
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                                className: "mt-0.5 text-sm text-gray-500",
                                                                children: "Env\xedo calculado al momento de pagar."
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-6",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                                    href: "checkout",
                                                                    className: "flex items-center justify-center rounded-md border border-transparent bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-secondary",
                                                                    onClick: ()=>setOpen(false),
                                                                    children: "Comprar ahora"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "mt-6 flex justify-center text-center text-sm text-gray-500",
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                                    children: [
                                                                        "o",
                                                                        " ",
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                                                            type: "button",
                                                                            className: "font-medium text-indigo-600 hover:text-indigo-500",
                                                                            onClick: ()=>setOpen(false),
                                                                            children: [
                                                                                "Continuar comprando",
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                                    "aria-hidden": "true",
                                                                                    children: " →"
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    ]
                })
            })
        ]
    });
}


/***/ }),

/***/ 45954:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ CartValueAddOrRest)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85902);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30503);



function ButtonAddOrRest({ quantity , handleClickAddProductToCart , handleClickRestProductToCart  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        class: "block  bg-gray-300 rounded-3xl text-white",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            class: "flex items-center justify-between  overflow-hidden shrink-0 md:h-8 w-30 h-10",
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    class: "inline-flex items-center justify-center w-8 h-8 text-4xl bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10 rounded-3xl",
                    onClick: handleClickRestProductToCart,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            class: "sr-only",
                            children: "button-minus"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .RestIcon */ .Kh, {})
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    class: "font-semibold text-brand-dark flex items-center justify-center h-full transition-colors duration-250 ease-in-out cursor-default shrink-0 text-sm md:text-base w-6",
                    children: quantity
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                    class: "inline-flex items-center justify-center w-8 h-8 text-4xl  bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none z-10 rounded-3xl",
                    onClick: handleClickAddProductToCart,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            class: "sr-only",
                            children: "button-plus"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .AddIcon */ .dt, {})
                    ]
                })
            ]
        })
    });
}
function CartValueAddOrRest({ id , name , price , urlImage  }) {
    const { addToCart , restToCart , findProduct  } = (0,_hooks_useCart__WEBPACK_IMPORTED_MODULE_1__/* .useCart */ .j)();
    const handleClickAddProductToCart = (event)=>{
        event.preventDefault();
        addToCart({
            id,
            name,
            price,
            urlImage
        });
    };
    const handleClickRestProductToCart = (event)=>{
        event.preventDefault();
        restToCart({
            id,
            name,
            price,
            urlImage
        });
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: findProduct(id) <= 0 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            className: "inline-flex items-center justify-center w-8 h-8 text-4xl rounded-full bg-gray-300 hover:bg-primary lg:w-10 lg:h-10 text-white focus:outline-none focus-visible:outline-none relative z-2",
            onClick: handleClickAddProductToCart,
            type: "button",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_icons__WEBPACK_IMPORTED_MODULE_2__/* .AddIcon */ .dt, {})
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ButtonAddOrRest, {
            quantity: findProduct(id),
            handleClickAddProductToCart: handleClickAddProductToCart,
            handleClickRestProductToCart: handleClickRestProductToCart
        })
    });
}


/***/ }),

/***/ 30503:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kh": () => (/* binding */ RestIcon),
/* harmony export */   "W1": () => (/* binding */ SearchIcon),
/* harmony export */   "XH": () => (/* binding */ TrashIcon),
/* harmony export */   "dt": () => (/* binding */ AddIcon),
/* harmony export */   "i4": () => (/* binding */ ArrowToBottomIcon),
/* harmony export */   "tB": () => (/* binding */ UserIcon)
/* harmony export */ });
/* unused harmony exports DashboardIcon, CloseIcon, BarIcon, ViewIcon, CheckCircleIcon */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CloseIcon() {
    return /*#__PURE__*/ _jsx("svg", {
        "aria-hidden": "true",
        className: "w-5 h-5",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ _jsx("path", {
            fillRule: "evenodd",
            d: "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z",
            clipRule: "evenodd"
        })
    });
}
function SearchIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        "aria-hidden": "true",
        className: "w-5 h-5 text-gray-500 dark:text-gray-400",
        fill: "none",
        stroke: "currentColor",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: "2",
            d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        })
    });
}
function BarIcon() {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        })
    });
}
function DashboardIcon() {
    return /*#__PURE__*/ _jsxs("svg", {
        "aria-hidden": "true",
        className: "w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white",
        fill: "currentColor",
        viewBox: "0 0 20 20",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ _jsx("path", {
                d: "M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"
            }),
            /*#__PURE__*/ _jsx("path", {
                d: "M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"
            })
        ]
    });
}
function UserIcon() {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
        width: "22",
        height: "22",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "w-5 md:w-[22px] h-5 md:h-[22px]",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M20.9001 10.9996C20.9001 5.52799 16.4723 1.09961 11.0001 1.09961C5.52848 1.09961 1.1001 5.52739 1.1001 10.9996C1.1001 16.4227 5.49087 20.8996 11.0001 20.8996C16.4867 20.8996 20.9001 16.4477 20.9001 10.9996ZM11.0001 2.25977C15.8193 2.25977 19.7399 6.18043 19.7399 10.9996C19.7399 12.7625 19.2156 14.457 18.2432 15.8922C14.3386 11.6921 7.66873 11.6845 3.75698 15.8922C2.78459 14.457 2.26025 12.7625 2.26025 10.9996C2.26025 6.18043 6.18092 2.25977 11.0001 2.25977ZM4.48056 16.8197C7.95227 12.9256 14.0488 12.9266 17.5195 16.8197C14.0361 20.7168 7.96541 20.718 4.48056 16.8197Z",
                fill: "#8C969F",
                stroke: "#8C969F",
                strokeWidth: "0.2"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M11 11.5801C12.9191 11.5801 14.4805 10.0187 14.4805 8.09961V6.93945C14.4805 5.02036 12.9191 3.45898 11 3.45898C9.08091 3.45898 7.51953 5.02036 7.51953 6.93945V8.09961C7.51953 10.0187 9.08091 11.5801 11 11.5801ZM8.67969 6.93945C8.67969 5.65996 9.7205 4.61914 11 4.61914C12.2795 4.61914 13.3203 5.65996 13.3203 6.93945V8.09961C13.3203 9.3791 12.2795 10.4199 11 10.4199C9.7205 10.4199 8.67969 9.3791 8.67969 8.09961V6.93945Z",
                fill: "#8C969F",
                stroke: "#8C969F",
                strokeWidth: "0.2"
            })
        ]
    });
}
function ViewIcon() {
    return /*#__PURE__*/ _jsxs("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        width: "19",
        height: "19",
        opacity: "1",
        children: [
            /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            }),
            /*#__PURE__*/ _jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            })
        ]
    });
}
function AddIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        width: "19",
        height: "19",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            opacity: "1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M10.174 11.8439L3.15109 11.8438C2.69416 11.8439 2.32486 11.4746 2.32496 11.0177C2.32496 10.5608 2.69427 10.1915 3.15109 10.1915L10.1741 10.1915L10.174 3.16858C10.1741 2.71165 10.5433 2.34245 11.0002 2.34245C11.4571 2.34234 11.8264 2.71165 11.8263 3.16858L11.8264 10.1915L18.8493 10.1916C19.3062 10.1915 19.6755 10.5608 19.6754 11.0177C19.6755 11.2455 19.5831 11.4524 19.4335 11.602C19.284 11.7515 19.0772 11.8439 18.8493 11.8439L11.8264 11.8438L11.8264 18.8668C11.8264 19.0947 11.734 19.3015 11.5845 19.451C11.4349 19.6006 11.2281 19.6929 11.0002 19.6929C10.5433 19.693 10.174 19.3237 10.1741 18.8668L10.174 11.8439Z",
                fill: "currentColor",
                stroke: "currentColor",
                strokeWidth: "0.5"
            })
        })
    });
}
function RestIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        class: "transition-all",
        width: "14",
        height: "14",
        viewBox: "0 0 22 22",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("g", {
            opacity: "1",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                d: "M3.15109 11.8438L10.174 11.8439L11.8264 11.8438L18.8493 11.8439C19.0772 11.8439 19.284 11.7515 19.4335 11.602C19.5831 11.4524 19.6755 11.2455 19.6754 11.0177C19.6755 10.5608 19.3062 10.1915 18.8493 10.1916L11.8264 10.1915L10.1741 10.1915L3.15109 10.1915C2.69427 10.1915 2.32496 10.5608 2.32496 11.0177C2.32486 11.4746 2.69416 11.8439 3.15109 11.8438Z",
                fill: "currentColor",
                stroke: "currentColor",
                "stroke-width": "0.5"
            })
        })
    });
}
function ArrowToBottomIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        stroke: "currentColor",
        fill: "currentColor",
        strokeWidth: "0",
        viewBox: "0 0 448 512",
        className: "w-3 md:w-3.5 h-3 md:h-3.5 text-brand-dark text-opacity-70",
        "aria-hidden": "true",
        height: "1em",
        width: "1em",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
        })
    });
}
function TrashIcon() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
        })
    });
}
function CheckCircleIcon() {
    return /*#__PURE__*/ _jsx("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        className: "w-6 h-6",
        children: /*#__PURE__*/ _jsx("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        })
    });
}



/***/ }),

/***/ 39243:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/hooks/useAuth.js
var useAuth = __webpack_require__(38493);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/disclosure/disclosure.js + 1 modules
var disclosure = __webpack_require__(94702);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/brand/index.js



function Brand({ size =200  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
            href: "/",
            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                src: "/storage/logoDiomedic.jpg",
                alt: "BoroBazar",
                width: "200",
                height: "200",
                className: "brand",
                quality: 75
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(2970);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/menu/menu.js + 5 modules
var menu = __webpack_require__(74845);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(86235);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/RectangleGroupIcon.js
var RectangleGroupIcon = __webpack_require__(73741);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/HomeIcon.js
var HomeIcon = __webpack_require__(36484);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/UserCircleIcon.js
var UserCircleIcon = __webpack_require__(2234);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ArrowLeftOnRectangleIcon.js
var ArrowLeftOnRectangleIcon = __webpack_require__(55218);
;// CONCATENATED MODULE: ./src/components/button/ButtonLogout.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ButtonLogout() {
    const { logout  } = (0,useAuth/* useAuth */.a)();
    const handleClick = async ()=>{
        await logout();
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
        children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                onClick: handleClick,
                className: `${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ArrowLeftOnRectangleIcon/* default */.Z, {
                        className: "mr-2 h-5 w-5",
                        "aria-hidden": "true"
                    }),
                    "Cerrar sesi\xf3n"
                ]
            })
    });
}

;// CONCATENATED MODULE: ./src/components/dropdown/DropdownUser.js







function DropdownUser() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v, {
                as: "div",
                className: "relative inline-block text-left",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "jsx-9f6c9ddb705839f3",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Button */.v.Button, {
                            className: "inline-flex w-full justify-center align-center gap-x-1.5 py-2 text-lg font-semibold text-gray-900 rounded ",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(RectangleGroupIcon/* default */.Z, {
                                className: "h-8 w-8 bg-primary rounded-lg  p-1 text-white hover:bg-secondary transition duration-300 ease-in-out",
                                "aria-hidden": "true"
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u, {
                        as: react_.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu.Items */.v.Items, {
                            className: "items absolute right-0 z-50 mt-2 w-[200px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-9f6c9ddb705839f3" + " " + "px-1 py-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                href: "/account",
                                                className: `${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(HomeIcon/* default */.Z, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Home"
                                                ]
                                            })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-9f6c9ddb705839f3" + " " + "px-1 py-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(menu/* Menu.Item */.v.Item, {
                                        children: ({ active  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                                className: "jsx-9f6c9ddb705839f3" + " " + `${active ? "bg-primary text-white" : "text-gray-900"} group flex w-full items-center rounded-md px-2 py-2 text-sm`,
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(UserCircleIcon/* default */.Z, {
                                                        className: "mr-2 h-5 w-5",
                                                        "aria-hidden": "true"
                                                    }),
                                                    "Perfil"
                                                ]
                                            })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-9f6c9ddb705839f3" + " " + "px-1 py-1",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(ButtonLogout, {})
                                })
                            ]
                        })
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "9f6c9ddb705839f3",
                children: ".items.jsx-9f6c9ddb705839f3{background-color:red!important}"
            })
        ]
    });
}
/* harmony default export */ const dropdown_DropdownUser = (/*#__PURE__*/react_default().memo(DropdownUser));

;// CONCATENATED MODULE: ./src/components/navbar/AdminNavbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 



function ClientNavbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-slate-50 drop-shadow-sm z-10 relative",
        children: ({ open  })=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex h-20 items-center justify-between z-50",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "max-w-[110px] text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Brand, {})
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "relative inset-y-0 right-0 flex items-center sm:static sm:inset-auto sm:ml-6 sm:pr-0 z-50",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown_DropdownUser, {})
                            })
                        ]
                    })
                })
            })
    });
}

// EXTERNAL MODULE: ./src/components/icons/index.js
var icons = __webpack_require__(30503);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/form/SearchInput.js




function Search() {
    const [searchText, setSearchText] = (0,react_.useState)("");
    const router = (0,navigation.useRouter)();
    const handleChange = (event)=>{
        const { value  } = event.target;
        setSearchText(value);
    };
    const redirectToProducts = (searchText = "")=>{
        router.push(`/search?search_text=${searchText}`);
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        redirectToProducts(searchText);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        className: "w-full transition-all duration-200 ease-in-out hidden lg:flex lg:max-w-[650px] 2xl:max-w-[800px] lg:ltr:ml-7 lg:rtl:mr-7 lg:ltr:mr-5 lg:rtl:ml-5",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overlay cursor-pointer invisible w-full h-full opacity-0 flex top-0 ltr:left-0 rtl:right-0 transition-all duration-300 fixed input-focus-overlay-open"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative z-30 flex flex-col justify-center w-full shrink-0",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "flex flex-col w-full mx-auto",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative flex w-full rounded-md",
                        role: "search",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                htmlFor: "top-bar-search",
                                className: "flex flex-1 items-center py-0.5",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    id: "top-bar-search",
                                    className: "px-5 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-brand-dark text-sm lg:text-15px rounded-md transition-all duration-200 focus:border-primary focus:ring-0 placeholder:text-brand-dark/50 border border-border-base",
                                    placeholder: "Qu\xe9 estas buscando...",
                                    onChange: handleChange,
                                    name: "search"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "absolute top-0 right-0 flex items-center justify-center h-full w-14 md:w-16 ltr:right-0 rtl:left-0 shrink-0 focus:outline-none",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* SearchIcon */.W1, {})
                                })
                            })
                        ]
                    })
                })
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/navbar/SearchNavbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





const SearchNavbar_navigation = [];
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function SearchNavbar() {
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-slate-50 drop-shadow-sm",
        children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 py-1 ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex h-20 items-center justify-between ",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative inset-y-0 left-0 flex items-center sm:hidden"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center justify-between gap-5 w-full h-16 py-3 top-bar lg:h-auto mx-auto max-w-[1920px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "max-w-[110px] text-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(Brand, {})
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx(Search, {}),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "hidden sm:block ml-auto mt-1.5",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "flex space-x-4 align-center",
                                                children: SearchNavbar_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                        href: item.href,
                                                        className: classNames(item.current ? "" : "", "text-gray-800 rounded-md px-3 py-2 text-sm font-short hover:text-primary"),
                                                        "aria-current": item.current ? "page" : undefined,
                                                        children: item.name
                                                    }, item.name))
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/login",
                                        className: "p-1 text-gray-400 hover:text-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(UserCircleIcon/* default */.Z, {
                                            className: "h-8 w-8",
                                            "aria-hidden": "true"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                        className: "sm:hidden absolute w-full bg-slate-50 shadow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-1 px-2 pb-3 ",
                            children: SearchNavbar_navigation.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Button */.p.Button, {
                                    as: "a",
                                    href: item.href,
                                    className: classNames(item.current ? "bg-primary text-white" : "text-gray-800 hover:bg-gray-700 hover:text-white", "block rounded-md px-3 py-2 text-sm "),
                                    "aria-current": item.current ? "page" : undefined,
                                    children: item.name
                                }, item.name))
                        })
                    })
                ]
            })
    });
}

// EXTERNAL MODULE: ./src/hooks/useFamilies.js
var useFamilies = __webpack_require__(4727);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/XMarkIcon.js
var XMarkIcon = __webpack_require__(11966);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/Bars3Icon.js
var Bars3Icon = __webpack_require__(74832);
;// CONCATENATED MODULE: ./src/components/navbar/CollectionsNavbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





const MenuItem = ({ family: { id , name ="" , categories =[]  }  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "relative pt-3 pb-3 cursor-pointer menuItem group mr-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    className: "relative inline-flex items-center pt-2 pb-2.5  text-sm font-normal lg:text-15px text-dark group-hover:text-secondary before:absolute before:w-0 before:right-0 left-0 before:bg-primary before:h-[3px] before:transition-all before:duration-300 before:-bottom-[14px] group-hover:before:w-full group-hover:before:right-auto group-hover:before:left-auto w-full",
                    href: `/product-family/${id}`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "w-full",
                            children: name
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "text-xs mt-1 xl:mt-0.5 w-4 flex justify-end text-dark opacity-40 group-hover:text-primary",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                stroke: "currentColor",
                                fill: "currentColor",
                                strokeWidth: "0",
                                viewBox: "0 0 448 512",
                                className: "transition duration-300 ease-in-out transform group-hover:-rotate-180",
                                height: "1em",
                                width: "1em",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "absolute opacity-0 subMenu shadow transition-opacity duration-300 invisible bg-primary-light left-0 right-0 top-16 w-[220px] xl:w-[240px] group-hover:opacity-100 group-hover:visible z-20",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "py-5 text-sm text-muted bg-white z-20",
                        children: categories.map((category, index)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                className: "relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    className: "flex items-center justify-between py-2 pr-3 pl-3 xl:pr-3.5 xl:pl-3.5 hover:bg-slate-100 hover:text-primary ",
                                    href: `/product-category/${category?.id}`,
                                    children: category.name
                                })
                            }, index))
                    })
                })
            ]
        })
    });
};
function CollectionsNavbar() {
    const [families, setFamilies] = (0,react_.useState)([]);
    const { getActivedFamilies  } = (0,useFamilies/* useFamilies */.L)();
    (0,react_.useEffect)(()=>{
        getActivedFamilies().then((familiesData)=>{
            setFamilies(familiesData);
        });
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure */.p, {
        as: "nav",
        className: "bg-white shadow z-9 relative",
        children: ({ open  })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "mx-auto max-w-7xl px-2 sm:px-6 lg:px-5 z-20 ",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "relative flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative inset-y-0 left-0 flex items-center sm:hidden py-1",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(disclosure/* Disclosure.Button */.p.Button, {
                                        className: "inline-flex items-center justify-center rounded-md p-2 bg-primary text-white hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white mr-3",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "sr-only",
                                                children: "Open main menu"
                                            }),
                                            open ? /*#__PURE__*/ jsx_runtime_.jsx(XMarkIcon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            }) : /*#__PURE__*/ jsx_runtime_.jsx(Bars3Icon/* default */.Z, {
                                                className: "block h-6 w-6",
                                                "aria-hidden": "true"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "sm:flex hidden items-center gap-5 w-full py-1 top-bar lg:h-auto mx-auto max-w-[1920px]",
                                    children: families?.map((family, index)=>/*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                            family: family
                                        }, index))
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(disclosure/* Disclosure.Panel */.p.Panel, {
                        className: "sm:hidden absolute w-full bg-white shadow",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "space-y-1",
                            children: families?.map((family, index)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "w-full px-2",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(MenuItem, {
                                        family: family
                                    })
                                }, index))
                        })
                    })
                ]
            })
    });
}

;// CONCATENATED MODULE: ./src/components/navbar/Navbar.js
/* __next_internal_client_entry_do_not_use__ default auto */ 




function Navbar() {
    const { isLogged  } = (0,useAuth/* useAuth */.a)();
    if (isLogged) return /*#__PURE__*/ jsx_runtime_.jsx(ClientNavbar, {});
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SearchNavbar, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CollectionsNavbar, {})
        ]
    });
}


/***/ }),

/***/ 82479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PortalLoading": () => (/* binding */ PortalLoading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2970);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useLoading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45579);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(98704);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* __next_internal_client_entry_do_not_use__ PortalLoading auto */ 




const PortalLoading = ({ children  })=>{
    const ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)(null);
    const { isLoading  } = (0,_hooks_useLoading__WEBPACK_IMPORTED_MODULE_2__/* .useLoading */ .r)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        ref.current = document.querySelector("#portal-loading");
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            isLoading && ref.current ? /*#__PURE__*/ (0,react_dom__WEBPACK_IMPORTED_MODULE_4__.createPortal)(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "jsx-76bbcf791d940900" + " " + "overlay",
                children: children
            }), ref.current) : null,
            react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {
                id: "76bbcf791d940900",
                children: ".overlay.jsx-76bbcf791d940900{display:block;position:fixed;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);z-index:50}"
            })
        ]
    });
};


/***/ }),

/***/ 70332:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "AuthContext": () => (/* binding */ Context),
  "default": () => (/* binding */ AuthContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/hooks/useLocaleStorage.js

function useLocalStorage(key, initalState) {
    const [state, setState] = (0,react_.useState)(initalState);
    (0,react_.useDebugValue)(state);
    (0,react_.useEffect)(()=>{
        const item = localStorage.getItem(key);
        if (item) setState(parse(item));
    }, []);
    (0,react_.useEffect)(()=>{
        if (state) {
            localStorage.setItem(key, JSON.stringify(state));
        }
    }, [
        state
    ]);
    return [
        state,
        setState
    ];
}
function parse(obj) {
    try {
        return JSON.parse(obj);
    } catch  {
        return obj;
    }
}

;// CONCATENATED MODULE: ./src/contexts/AuthContext.js
/* __next_internal_client_entry_do_not_use__ default,AuthContext auto */ 


const Context = /*#__PURE__*/ react_default().createContext({});
function AuthContext({ children  }) {
    const [jwt, setJwt] = useLocalStorage("jwt", "");
    const [user, setUser] = useLocalStorage("user", {});
    return /*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
        value: {
            jwt,
            setJwt,
            user,
            setUser
        },
        children: children
    });
}



/***/ }),

/***/ 98793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CartContext": () => (/* binding */ Context),
  "default": () => (/* binding */ CartContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/reducers/cartReducer.js
const DICTIONARY = {
    CART_INIT_STORED: "CART_INIT_STORED",
    CART_ADD_OR_REST: "CART_ADD_OR_REST",
    CART_REMOVE: "CART_REMOVE",
    CART_UPDATE: "CART_UPDATE"
};
const reducer = (state, action)=>{
    const { type , payload  } = action;
    switch(type){
        case DICTIONARY.CART_INIT_STORED:
            {
                return payload;
            }
        case DICTIONARY.CART_ADD_OR_REST:
            {
                const { product , isAdd  } = payload;
                const { id  } = product;
                const productInCartIndex = state.findIndex((item)=>item.id === id);
                if (productInCartIndex >= 0) {
                    const newState = structuredClone(state);
                    if (isAdd) newState[productInCartIndex].quantity += 1;
                    else newState[productInCartIndex].quantity -= 1;
                    // SI LA CANTIDA ES CERO QUE LO ELIMINE DEL CARRITO
                    if (newState[productInCartIndex].quantity <= 0) return newState.filter((item, index)=>index !== productInCartIndex);
                    return newState;
                }
                return [
                    ...state,
                    {
                        ...product,
                        quantity: 1
                    }
                ];
            }
        case DICTIONARY.CART_REMOVE:
            {
                const { id  } = payload;
                return state.filter((item)=>item.id !== id);
            }
        default:
            return state;
    }
};


;// CONCATENATED MODULE: ./src/contexts/CartContext.js
/* __next_internal_client_entry_do_not_use__ default,CartContext auto */ 


const Context = /*#__PURE__*/ react_default().createContext({});
const KEY_LOCALSTORAGE = "CART";
const INITIAL_STATE = [];
function CartContext({ children  }) {
    const [products, dispatch] = (0,react_.useReducer)(reducer, INITIAL_STATE);
    (0,react_.useEffect)(()=>{
        if (JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE))) {
            const productsInStorage = JSON.parse(localStorage.getItem(KEY_LOCALSTORAGE));
            initStorage(productsInStorage);
        }
    }, []);
    (0,react_.useEffect)(()=>{
        if (products !== INITIAL_STATE) {
            localStorage.setItem(KEY_LOCALSTORAGE, JSON.stringify(products));
        }
    }, [
        products
    ]);
    const initStorage = (products)=>{
        dispatch({
            type: "CART_INIT_STORED",
            payload: products
        });
    };
    const addOrRestToCart = ({ product , isAdd  })=>{
        dispatch({
            type: "CART_ADD_OR_REST",
            payload: {
                product,
                isAdd
            }
        });
    };
    const removeOfCart = ({ idProduct  })=>{
        dispatch({
            type: "CART_REMOVE",
            payload: {
                id: idProduct
            }
        });
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(Context.Provider, {
        value: {
            products,
            addOrRestToCart,
            removeOfCart
        },
        children: children
    });
}



/***/ }),

/***/ 98305:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilteredProductsContext": () => (/* binding */ Context),
/* harmony export */   "default": () => (/* binding */ FilteredProductsContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default,FilteredProductsContext auto */ 

const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
function FilteredProductsContext({ children  }) {
    const [filteredProducts, setFilteredProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [totalPages, setTotalPages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [totalProducts, setTotalProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            filteredProducts,
            setFilteredProducts,
            totalPages,
            setTotalPages,
            totalProducts,
            setTotalProducts
        },
        children: children
    });
}



/***/ }),

/***/ 57079:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadingContext": () => (/* binding */ Context),
/* harmony export */   "default": () => (/* binding */ LoadingContext)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default,LoadingContext auto */ 

const Context = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({});
function LoadingContext({ children  }) {
    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Context.Provider, {
        value: {
            loading,
            setLoading
        },
        children: children
    });
}



/***/ }),

/***/ 38493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ useAuth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(70332);
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(69242);




const HEADERS = {
    "Content-Type": "application/json"
};
const useAuth = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_3__/* .useError */ .V)();
    const { jwt , setJwt , user , setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthContext);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();
    const login = async ({ email , password  })=>{
        tryCatch(async ()=>{
            const URL = `/api/auth/login`;
            const response = await fetch(URL, {
                method: "POST",
                headers: HEADERS,
                body: JSON.stringify({
                    email,
                    password
                })
            });
            const data = await response.json();
            return data;
        }, ({ token ="" , user ={}  })=>{
            setJwt(token);
            setUser(user);
            router.push("/account");
        });
    };
    const logout = async ()=>{
        tryCatch(async ()=>{
            const URL = `/api/auth/logout`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, ()=>{
            window.localStorage.clear();
            setJwt("");
            router.push("/login");
        });
    };
    return {
        isLogged: Boolean(jwt),
        jwt,
        setJwt,
        idUser: user?.id,
        login,
        logout,
        HEADERS: {
            ...HEADERS,
            Authorization: `Bearer ${jwt}`
        }
    };
};


/***/ }),

/***/ 85902:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ useCart)
/* harmony export */ });
/* harmony import */ var _contexts_CartContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98793);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function useCart() {
    const { products =[] , addOrRestToCart , removeOfCart  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_CartContext__WEBPACK_IMPORTED_MODULE_0__.CartContext);
    const addToCart = (product)=>{
        addOrRestToCart({
            product,
            isAdd: true
        });
    };
    const restToCart = (product)=>addOrRestToCart({
            product,
            isAdd: false
        });
    const findProduct = (idProduct)=>{
        const findedProduct = products?.find((product)=>product.id === idProduct);
        const quantity = findedProduct?.quantity || 0;
        return quantity;
    };
    const getTotal = ()=>{
        let total = 0;
        products.forEach((product)=>{
            total += product.price * product.quantity;
        });
        return total;
    };
    return {
        products,
        addToCart,
        restToCart,
        removeOfCart,
        findProduct,
        getTotal
    };
}


/***/ }),

/***/ 69242:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "V": () => (/* binding */ useError)
});

// EXTERNAL MODULE: ./src/utils/alerts.js
var alerts = __webpack_require__(85338);
;// CONCATENATED MODULE: ./src/utils/error.js

const handleError = (responseInJson)=>{
    const { message ="Error de conexion no mapeado" , isError  } = responseInJson;
    if (isError) (0,alerts/* setMessageError */.G)({
        message
    });
    return {
        isError
    };
};

// EXTERNAL MODULE: ./src/hooks/useLoading.js
var useLoading = __webpack_require__(45579);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/hooks/useError.js



const useError = ()=>{
    const { showLoading , hideLoading  } = (0,useLoading/* useLoading */.r)();
    const router = (0,navigation.useRouter)();
    const isTokenError = (name = "")=>{
        return name === "TokenExpiredError" || name === "JsonWebTokenError" || name === "NotBeforeError";
    };
    const tryCatch = async (firstCallback, secondCallback = null)=>{
        showLoading();
        try {
            let response = await firstCallback();
            const { name  } = response;
            hideLoading();
            if (isTokenError(name)) router.push("/logout");
            const { isError  } = handleError(response);
            if (!isError) {
                response = await secondCallback(response);
            }
            return response;
        } catch (error) {
            hideLoading();
            handleError({
                isError: true
            });
        }
    };
    /**
   * Busca un recurso y retorna la respuesta
   * @param {*} callback Función que busca un recurso
   * @returns  Respuesta de la búsqueda
   */ const tryCatchReturnResponse = async (callback)=>{
        showLoading();
        try {
            const response = await callback();
            handleError(response);
            hideLoading();
            return response;
        } catch (error) {
            hideLoading();
            handleError({
                isError: true
            });
        }
    };
    /**
   * Busca un recurso y ejecuta una acción si no hay error
   * @param {*} firstCallback Función que busca un recurso
   * @param {*} secondCallback Función que ejecuta una acción si no hay error
   */ const tryCatchOnlyActions = async (firstCallback, secondCallback)=>{
        showLoading();
        try {
            const response = await firstCallback();
            hideLoading();
            const { isError  } = handleError(response);
            if (!isError) secondCallback(response);
        } catch (error) {
            hideLoading();
            handleError({
                isError: true
            });
        }
    };
    return {
        tryCatchReturnResponse,
        tryCatchOnlyActions,
        tryCatch
    };
};


/***/ }),

/***/ 4727:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useFamilies)
/* harmony export */ });
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69242);
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85338);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const useFamilies = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_0__/* .useError */ .V)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getAllFamilies = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/families/getAll`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getActivedFamilies = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/families/getActivedFamilies`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getOneFamily = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/families/getOne?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const addNewFamily = async (body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/families/add`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        }, ()=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Familia agregado!"
            });
            router.push("/account/families");
        });
    };
    const editFamily = async (id, body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/families/edit?id=${id}`;
            const response = await fetch(URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        }, ()=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Familia editada!"
            });
            router.push("/account/families");
        });
    };
    return {
        getAllFamilies,
        getActivedFamilies,
        getOneFamily,
        addNewFamily,
        editFamily
    };
};


/***/ }),

/***/ 45579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useLoading)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(57079);


const useLoading = ()=>{
    const { loading , setLoading  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_LoadingContext__WEBPACK_IMPORTED_MODULE_1__.LoadingContext);
    const showLoading = ()=>setLoading(true);
    const hideLoading = ()=>setLoading(false);
    return {
        isLoading: Boolean(loading),
        showLoading,
        hideLoading
    };
};


/***/ }),

/***/ 85338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ setMessageError),
/* harmony export */   "w": () => (/* binding */ setMessageSuccess)
/* harmony export */ });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);

const setMessageError = ({ message  })=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: "error",
        html: `<h4>${message}</h4>`,
        timer: 3000,
        showConfirmButton: false,
        width: 400,
        padding: "2em 3em",
        background: "#fff url(/images/trees.png)",
        backdrop: `
    rgba(123, 0, 0, 0.4)
    left top
    no-repeat
  `
    });
};
const setMessageSuccess = ({ message  })=>{
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
        icon: "success",
        html: `<h4>${message}</h4>`,
        timer: 3000,
        showConfirmButton: false,
        width: 400,
        padding: "2em 3em",
        backdrop: `
    rgba(129, 233, 121, 0.4)
    left top
    no-repeat
  `
    });
};


/***/ }),

/***/ 52123:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  "metadata": () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(32220);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
;// CONCATENATED MODULE: ./src/components/button/ButtonWhatsApp.js

function Button() {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        type: "button",
        className: "mb-2 inline-block rounded-full p-3 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg bg-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-10 w-10",
            fill: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                d: "M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
            })
        })
    });
}
function ButtonWhatsApp() {
    const LINK_WHATSAPP = process.env.LINK_WHATSAPP;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "fixed bottom-14 right-6 z-10",
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: "p-2.5",
                target: "_blank",
                href: `https://${LINK_WHATSAPP}`,
                rel: "noopener noreferrer",
                children: /*#__PURE__*/ jsx_runtime_.jsx(Button, {})
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21313);
;// CONCATENATED MODULE: ./src/contexts/AuthContext.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\contexts\AuthContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const AuthContext = (__default__);
const e0 = proxy["AuthContext"];

;// CONCATENATED MODULE: ./src/contexts/LoadingContext.js

const LoadingContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\contexts\LoadingContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: LoadingContext_esModule, $$typeof: LoadingContext_$$typeof } = LoadingContext_proxy;
const LoadingContext_default_ = LoadingContext_proxy.default;


/* harmony default export */ const LoadingContext = (LoadingContext_default_);
const LoadingContext_e0 = LoadingContext_proxy["LoadingContext"];

;// CONCATENATED MODULE: ./src/contexts/CartContext.js

const CartContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\contexts\CartContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: CartContext_esModule, $$typeof: CartContext_$$typeof } = CartContext_proxy;
const CartContext_default_ = CartContext_proxy.default;


/* harmony default export */ const CartContext = (CartContext_default_);
const CartContext_e0 = CartContext_proxy["CartContext"];

;// CONCATENATED MODULE: ./src/components/portal/PortalLoading.js

const PortalLoading_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\components\portal\PortalLoading.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: PortalLoading_esModule, $$typeof: PortalLoading_$$typeof } = PortalLoading_proxy;
const PortalLoading_default_ = PortalLoading_proxy.default;

const PortalLoading_e0 = PortalLoading_proxy["PortalLoading"];

;// CONCATENATED MODULE: ./src/components/spinner/index.js

function Spinner() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "spinner",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "spinner-content",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "double-bounce1 bg-primary"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "double-bounce2 bg-primary"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("style", {
                children: `
            .spinner {
                position: fixed;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                margin: 100px auto;
                display: flex;  
                justify-content: center;
                align-items: center;
                backdrop-filter: blur(2px);
                z-index: 100;
            }
            .spinner-content {
                position: relative;
                --size: 80px;
                width: var(--size);
                height: var(--size);
            }

            .double-bounce1, .double-bounce2 {
                width: 100%;
                height: 100%;
                border-radius: 50%;
                opacity: 0.6;
                position: absolute;
                top: 0;
                left: 0;
            
                -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
                animation: sk-bounce 2.0s infinite ease-in-out;
            }

            .double-bounce2 {
            -webkit-animation-delay: -1.0s;
            animation-delay: -1.0s;
            }

            @-webkit-keyframes sk-bounce {
            0%, 100% { -webkit-transform: scale(0.0) }
            50% { -webkit-transform: scale(1.0) }
            }

            @keyframes sk-bounce {
            0%, 100% { 
                transform: scale(0.0);
                -webkit-transform: scale(0.0);
            } 50% { 
                transform: scale(1.0);
                -webkit-transform: scale(1.0);
            }
            }
            `
            })
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/navbar/Navbar.js

const Navbar_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\components\navbar\Navbar.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Navbar_esModule, $$typeof: Navbar_$$typeof } = Navbar_proxy;
const Navbar_default_ = Navbar_proxy.default;


/* harmony default export */ const Navbar = (Navbar_default_);
;// CONCATENATED MODULE: ./src/components/banner/BannerTop.js

function BannerTop() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full bg-primary",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "mx-auto max-w-7xl px-3 sm:px-6 lg:px-5 py-3",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex justify-between align-center p-0 my-0",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-center text-white text-sm m-0 uppercase font-bold",
                        children: "\uD83D\uDE32 Delivery Lima y Provincia \uD83D\uDE32"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-center text-white text-sm m-0 uppercase font-bold",
                        children: "✨ Env\xedos de 24 - 48 horas ✨"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-center text-white text-sm m-0 uppercase font-bold",
                        children: "Cont\xe1ctanos \uD83E\uDD33"
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/contexts/FilteredProductsContext.js

const FilteredProductsContext_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\contexts\FilteredProductsContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: FilteredProductsContext_esModule, $$typeof: FilteredProductsContext_$$typeof } = FilteredProductsContext_proxy;
const FilteredProductsContext_default_ = FilteredProductsContext_proxy.default;


/* harmony default export */ const FilteredProductsContext = (FilteredProductsContext_default_);
const FilteredProductsContext_e0 = FilteredProductsContext_proxy["FilteredProductsContext"];

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(7887);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(10993);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/components/section/index.js
var section = __webpack_require__(7087);
;// CONCATENATED MODULE: ./src/components/banner/BannerDelivery.js



function BannerDelivery() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full px-2 py-4 mb-1 flex justify-center align-center bg-light",
        children: /*#__PURE__*/ jsx_runtime_.jsx(section/* default */.Z, {
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "w-full flex flex-row flex-wrap gap-12",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "text-center flex-1 flex flex-col items-center  max-w-xs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/storage/garantia.webp",
                                alt: "Garantia",
                                width: "50",
                                height: "50"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "mt-3 font-bold",
                                children: "100% GARANTIA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center text-sm m-0",
                                children: "La calidad de nuestros Productos esta garantizada por todos Nuestros Clientes"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "text-center flex-1 flex flex-col items-center  max-w-xs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/storage/PAGOCONTRAENTREGA_x50.webp",
                                width: "80",
                                height: "80",
                                alt: "Pago Contraentrega"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-bold",
                                children: "PAGO CONTRAENTREGA"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center text-sm m-0",
                                children: "Pide tu producto con nosotros y Paga con Seguridad en tu Domicilio"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                        className: "text-center flex-1 flex flex-col items-center max-w-xs",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                src: "/storage/DELIVERY_x50.webp",
                                width: "80",
                                height: "80",
                                alt: "Delivery"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "font-bold",
                                children: "Delivery a Nivel Nacional"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-center text-sm m-0",
                                children: "Envios a todo el Per\xfa, por Olva Courier, Shalom, Marvisur o alguna agencia de su Preferencia"
                            })
                        ]
                    })
                ]
            })
        })
    });
}

// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/EnvelopeIcon.js
var EnvelopeIcon = __webpack_require__(72827);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js
var PhoneIcon = __webpack_require__(89709);
;// CONCATENATED MODULE: ./src/components/banner/BannerFooter.js



function BannerFooter() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "w-full py-4 mb-1 bg-primary text-white",
        children: /*#__PURE__*/ jsx_runtime_.jsx(section/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "w-full flex flex-row flex-wrap gap-12 px-6 ",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: " flex-1 flex flex-col max-w-xs gap-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "mt-3 font-bold text-2xl ",
                            children: "Acerca de Nosotros"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-sm",
                            children: "Puedes contactarnos en los siguientes"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm flex gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(EnvelopeIcon/* default */.Z, {
                                    width: "18"
                                }),
                                " mybonlineshopping@gmail.com"
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm flex gap-3",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PhoneIcon/* default */.Z, {
                                    width: "18"
                                }),
                                " 912 841 209"
                            ]
                        })
                    ]
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/footer/index.js




function Footer() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(BannerDelivery, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(BannerFooter, {})
        ]
    });
}

;// CONCATENATED MODULE: ./src/components/cart/Cart.js

const Cart_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\mesol\Documents\lenguajes\mundo html\proyectos\react\ecommerce\frontend-ecommerce\src\components\cart\Cart.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Cart_esModule, $$typeof: Cart_$$typeof } = Cart_proxy;
const Cart_default_ = Cart_proxy.default;


/* harmony default export */ const Cart = (Cart_default_);
;// CONCATENATED MODULE: ./src/app/layout.js














const metadata = {
    title: "Diomedic",
    description: "Somos una empresa dedicada a la venta de productos de ortopedia, rehabilitaci\xf3n y cuidado de la salud."
};
function Content({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "bg-slate-50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(BannerTop, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {})
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("main", {
                className: "min-h-screen bg-white",
                children: [
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(PortalLoading_e0, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(Spinner, {})
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
                className: "bg-slate-50",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(ButtonWhatsApp, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Cart, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(Footer, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "portal-modal",
                        className: "z-20"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        id: "portal-loading",
                        className: "z-30"
                    })
                ]
            })
        ]
    });
}
function RootLayout({ children  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ jsx_runtime_.jsx(LoadingContext, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthContext, {
                    children: /*#__PURE__*/ jsx_runtime_.jsx(CartContext, {
                        children: /*#__PURE__*/ jsx_runtime_.jsx(FilteredProductsContext, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(Content, {
                                children: children
                            })
                        })
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 7087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Section)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Section({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "mx-auto max-w-7xl px-3 sm:px-6 lg:px-5 py-5 ",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "",
            children: children
        })
    });
}


/***/ }),

/***/ 41764:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93180);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;