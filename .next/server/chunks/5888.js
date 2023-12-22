"use strict";
exports.id = 5888;
exports.ids = [5888];
exports.modules = {

/***/ 3486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ ListWithFilters)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
// EXTERNAL MODULE: ./node_modules/styled-jsx/style.js
var style = __webpack_require__(2970);
var style_default = /*#__PURE__*/__webpack_require__.n(style);
// EXTERNAL MODULE: ./src/components/button/index.js
var components_button = __webpack_require__(39950);
// EXTERNAL MODULE: ./src/hooks/useParamsFromQuery.js
var useParamsFromQuery = __webpack_require__(99762);
;// CONCATENATED MODULE: ./src/components/products/Filters.js





// function FiltersCategories() {
//   return (
//     <div className="flex flex-wrap -m-1">
//       <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
//         diet-nutrition
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 512 512"
//           className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
//         </svg>
//       </div>
//       <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
//         whole-eggs
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 512 512"
//           className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
//         </svg>
//       </div>
//       <div className="group flex shrink-0 m-1 items-center border border-border-base rounded-lg text-[13px] px-2.5 py-1.5 capitalize text-dark cursor-pointer transition duration-200 ease-in-out hover:border-brand">
//         boiled-potatoes
//         <svg
//           stroke="currentColor"
//           fill="currentColor"
//           strokeWidth="0"
//           viewBox="0 0 512 512"
//           className="text-sm text-body ltr:ml-2 rtl:mr-2 shrink-0 ltr:-mr-0.5 rtl:-ml-0.5 mt-0.5 transition duration-200 ease-in-out group-hover:text-heading"
//           height="1em"
//           width="1em"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"></path>
//         </svg>
//       </div>
//     </div>
//   )
// }
const InputRange = ({ slug  })=>{
    const minPriceFilterId = (0,react_.useId)();
    const { searchtext , order , maxprice: rangePrice  } = (0,useParamsFromQuery/* useParamsFromQuery */.P)();
    const [maxprice, setMaxprice] = (0,react_.useState)(rangePrice);
    const url = `/${slug}?search_text=${searchtext}&order=${order}&maxprice=${maxprice}`;
    const handleChangeMinPrice = (event)=>{
        const maxRange = event.target.value;
        setMaxprice(maxRange);
    // setFilters((prevState) => {
    //   return {
    //     ...prevState,
    //     rangePrice: maxRange,
    //   }
    // })
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "shrink-0 text-[15px] mr-3 flex flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                htmlFor: minPriceFilterId,
                children: "Por precio: "
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex gap-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "range",
                        id: minPriceFilterId,
                        min: "0",
                        max: "1000",
                        className: "pr-6 accent-primary w-[220px] mb-1",
                        onChange: handleChangeMinPrice,
                        value: maxprice
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                        label: "Filtrar",
                        location: url
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                children: [
                    "S/",
                    maxprice,
                    ".00"
                ]
            })
        ]
    });
};
function Filters({ slug  }) {
    // const { rangePrice = 1000 } = useFilteredProducts()
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-70fadb47ee9ac5e" + " " + "block mb-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "jsx-70fadb47ee9ac5e" + " " + "flex items-center justify-between mb-4 -mt-1",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
                        className: "jsx-70fadb47ee9ac5e" + " " + "filters",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "jsx-70fadb47ee9ac5e" + " " + "text-dark text-15px sm:text-base font-semibold",
                                children: "Filtros"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(InputRange, {
                                slug: slug
                            })
                        ]
                    })
                })
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "70fadb47ee9ac5e",
                children: ".filters.jsx-70fadb47ee9ac5e{-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:1em 0;min-width:300px;gap:1em}.filters__minprice.jsx-70fadb47ee9ac5e{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:200px;color:var(--dark)}"
            })
        ]
    });
}

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(48421);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./src/components/cart/CartValueAddOrRest.js
var CartValueAddOrRest = __webpack_require__(45954);
;// CONCATENATED MODULE: ./src/components/products/CardProduct.js






function CardProduct({ id , name ="" , price , priceBefore =0 , images =[]  }) {
    const urlImage = images[0]?.url || "/storage/no-image-placeholder.png";
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/product-detail/" + id,
                className: "flex flex-col shadow group overflow-hidden rounded-md cursor-pointer transition-all duration-300 shadow-card hover:shadow-cardHover relative h-full",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-1f59e83008de1edc" + " " + "relative shrink-0",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-1f59e83008de1edc" + " " + "overflow-hidden mx-auto w-full sm:w-[180px] h-[180px] md:w-[200px] md:h-[200px] transition duration-200 ease-in-out transform group-hover:scale-105 relative",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: urlImage,
                                    alt: "Producto",
                                    width: 750,
                                    height: 500,
                                    quality: 75
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-1f59e83008de1edc" + " " + "w-full h-full absolute top-0 left-4 pt-2.5 md:pt-3.5 px-3 md:px-4 lg:px-[18px] z-10 -mx-0.5 sm:-mx-1",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "jsx-1f59e83008de1edc" + " " + "block product-count-button-position",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(CartValueAddOrRest/* default */.Z, {
                                        id: id,
                                        name: name,
                                        price: price,
                                        urlImage: urlImage
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "jsx-1f59e83008de1edc" + " " + "flex flex-col px-3 md:px-4 lg:px-[18px] pb-5 lg:pb-6 lg:pt-1.5 mt-3 h-full",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-1f59e83008de1edc" + " " + "mb-1 lg:mb-1.5 -mx-1",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                    className: "jsx-1f59e83008de1edc" + " " + "inline-block mx-1 text-sm font-semibold sm:text-15px lg:text-base text-brand-dark",
                                    children: [
                                        "S/.",
                                        price,
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "jsx-1f59e83008de1edc" + " " + "ml-2 text-xs text-gray-600",
                                            children: priceBefore > 0 && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("del", {
                                                className: "jsx-1f59e83008de1edc",
                                                children: [
                                                    "S/.",
                                                    priceBefore
                                                ]
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "jsx-1f59e83008de1edc" + " " + "text-brand-dark text-13px sm:text-sm lg:text-15px leading-5 sm:leading-6 mb-1.5 ",
                                children: name
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "jsx-1f59e83008de1edc" + " " + "mt-auto text-13px sm:text-sm",
                                children: "1 Bag"
                            })
                        ]
                    })
                ]
            }),
            jsx_runtime_.jsx((style_default()), {
                id: "1f59e83008de1edc",
                children: ".product-count-button-position.jsx-1f59e83008de1edc{position:absolute;bottom:-1.3rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;right:30px}"
            })
        ]
    });
}
/* harmony default export */ const products_CardProduct = (/*#__PURE__*/react_default().memo(CardProduct));

;// CONCATENATED MODULE: ./src/components/products/List.js



function ListOfProducts({ products =[]  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 gap-3 md:gap-4 2xl:gap-5 z-5",
        children: products.map(({ id , ...restProduct })=>/*#__PURE__*/ jsx_runtime_.jsx(products_CardProduct, {
                id: id,
                ...restProduct
            }, id))
    });
}

// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
;// CONCATENATED MODULE: ./src/components/form/SelectFilterOrder.js




const OPTIONS = [
    {
        value: "todos",
        label: "Seleccionar"
    },
    {
        value: "minprice",
        label: "Menor precio"
    },
    {
        value: "maxprice",
        label: "Mayor precio"
    },
    {
        value: "az",
        label: "A - Z"
    },
    {
        value: "za",
        label: "Z - A"
    }
];
function SelectFilterOrder({ slug ="search"  }) {
    const router = (0,navigation.useRouter)();
    const { searchtext , order: orderFromQuery , maxprice  } = (0,useParamsFromQuery/* useParamsFromQuery */.P)();
    const [order, setOrder] = (0,react_.useState)("todos");
    (0,react_.useEffect)(()=>{
        setOrder(orderFromQuery);
    }, [
        orderFromQuery
    ]);
    const redirectToProducts = (order)=>{
        router.push(`/${slug}?search_text=${searchtext}&order=${order}&maxprice=${maxprice}`);
    };
    const handleChange = (event)=>{
        const { value  } = event.target;
        redirectToProducts(value);
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `w-full`,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "relative w-full mb-3",
            children: /*#__PURE__*/ jsx_runtime_.jsx("select", {
                className: "border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring ease-linear transition-all duration-150 sm:w-5 lg:w-[150px]",
                onChange: handleChange,
                value: order,
                children: OPTIONS.map(({ value , label  }, index)=>{
                    return /*#__PURE__*/ jsx_runtime_.jsx("option", {
                        value: value,
                        className: "p-1",
                        children: label
                    }, index);
                })
            })
        })
    });
}

;// CONCATENATED MODULE: ./src/components/pagination/Pagination.js



function ButtonPagination({ url , children , classes ="" , isDisabled =false  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("li", {
            children: !isDisabled ? /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: url,
                className: `flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 ${classes} hover:bg-gray-100 hover:text-gray-700`,
                children: children
            }) : /*#__PURE__*/ jsx_runtime_.jsx("span", {
                href: url,
                className: `flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-400
            bg-gray-200 border border-gray-300 ${classes} cursor-default`,
                children: children
            })
        })
    });
}
function Pagination({ totalPages =0 , slug ="search"  }) {
    const pages = Array.from({
        length: totalPages
    });
    const { searchtext , order , maxprice , page =1  } = (0,useParamsFromQuery/* useParamsFromQuery */.P)();
    const getUrl = ({ page =1  })=>{
        return `/${slug}?page=${page}&search_text=${searchtext}&order=${order}&maxprice=${maxprice}`;
    };
    const firstUrl = getUrl({
        page: 1
    });
    const lastUrl = getUrl({
        page: totalPages
    });
    const prevUrl = getUrl({
        page: parseInt(page) - 1
    });
    const nextUrl = getUrl({
        page: parseInt(page) + 1
    });
    // const currentPage = getUrl({ page: parseInt(page) })
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        "aria-label": "Page navigation example",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "inline-flex -space-x-px text-sm",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPagination, {
                    url: firstUrl,
                    classes: "rounded-l-lg",
                    isDisabled: page <= 1,
                    children: "<<"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPagination, {
                    url: prevUrl,
                    isDisabled: page <= 1,
                    children: "<"
                }),
                pages.map((pageKey, index)=>{
                    const url = `/${slug}?page=${index + 1}&search_text=${searchtext}&order=${order}&maxprice=${maxprice}`;
                    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: url,
                            className: `flex items-center justify-center px-3 h-8 leading-tight text-black ${index + 1 === page ? "bg-gray-100 " : "bg-white"} border border-gray-300 hover:bg-gray-100 hover:text-gray-700`,
                            children: index + 1
                        })
                    }, index);
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPagination, {
                    url: nextUrl,
                    isDisabled: page === totalPages,
                    children: ">"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(ButtonPagination, {
                    url: lastUrl,
                    classes: "rounded-r-lg",
                    isDisabled: page === totalPages,
                    children: ">>"
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/products/ListWithFilters.js






function SectionFilters({ slug  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "sticky hidden h-full lg:pt-4 shrink-0 pr-8 xl:pr-16 lg:block w-80 xl:w-96 top-5",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "space-y-10",
            children: /*#__PURE__*/ jsx_runtime_.jsx(Filters, {
                slug: slug
            })
        })
    });
}
function ListWithFilters({ filteredProducts , totalPages , totalProducts , slug  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(SectionFilters, {
                slug: slug
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "w-full",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex flex-col mb-6",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex items-center w-full lg:justify-between ",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "shrink-0 text-dark font-medium text-[15px] leading-4 md:mr-6  hidden lg:block mt-0.5",
                                    children: [
                                        totalProducts,
                                        " Productos encontrados"
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "relative mr-2 lg:ml-0 lg:mr-0 min-w-[160px]",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "shrink-0 text-[15px] mr-2 text-dark text-opacity-70",
                                                children: "Ordenado por:"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(SelectFilterOrder, {
                                                slug: slug
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(ListOfProducts, {
                        products: filteredProducts
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-center mt-5",
                        children: totalProducts === 0 ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-2xl font-semibold text-gray-500",
                            children: "No se encontraron productos"
                        }) : /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                            totalPages: totalPages,
                            slug: slug
                        })
                    })
                ]
            })
        ]
    });
}


/***/ }),

/***/ 94071:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ 85192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ useFilteredProducts)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_FilteredProductsContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98305);
/* harmony import */ var _useError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(69242);
/* harmony import */ var _utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9767);




function useFilteredProducts() {
    const { tryCatch  } = (0,_useError__WEBPACK_IMPORTED_MODULE_2__/* .useError */ .V)();
    const { filteredProducts , setFilteredProducts , totalPages , setTotalPages , totalProducts , setTotalProducts  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_contexts_FilteredProductsContext__WEBPACK_IMPORTED_MODULE_1__.FilteredProductsContext);
    const getProductsForSearchFetch = async ({ searchtext , page , limit , order , idcategory , maxprice  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/productsForSearchParameters?searchtext=${searchtext}&page=${page}&limit=${limit}&order=${order}&idcategory=${idcategory}&maxprice=${maxprice}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getProductsForFamilyFetch = async ({ page , limit , order , idfamily , maxprice  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/productsForFamily?page=${page}&limit=${limit}&order=${order}&idfamily=${idfamily}&maxprice=${maxprice}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getProductsForSearch = async ({ searchtext =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.searchtext */ .t.searchtext , page =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.page */ .t.page , limit =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.limit */ .t.limit , order =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.order */ .t.order , idcategory =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.idcategory */ .t.idcategory , idfamily =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.idfamily */ .t.idfamily , maxprice =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.maxprice */ .t.maxprice  })=>{
        const parameters = {
            searchtext,
            page,
            limit,
            order,
            idcategory,
            maxprice,
            idfamily
        };
        const { products , totalPages , totalProducts  } = await getProductsForSearchFetch(parameters);
        setTotalPages(totalPages);
        setFilteredProducts(products);
        setTotalProducts(totalProducts);
        return {
            parameters
        };
    };
    const getProductsForFamily = async ({ page =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.page */ .t.page , limit =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.limit */ .t.limit , order =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.order */ .t.order , idfamily =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.idfamily */ .t.idfamily , maxprice =_utils_paramsDefault__WEBPACK_IMPORTED_MODULE_3__/* .DEFAULT_PARAMS.maxprice */ .t.maxprice  })=>{
        const parameters = {
            page,
            limit,
            order,
            maxprice,
            idfamily
        };
        const { products , totalPages , totalProducts  } = await getProductsForFamilyFetch(parameters);
        setTotalPages(totalPages);
        setFilteredProducts(products);
        setTotalProducts(totalProducts);
        return {
            products,
            totalPages,
            totalProducts
        };
    };
    return {
        filteredProducts,
        totalPages,
        totalProducts,
        getProductsForFamily,
        getProductsForSearch
    };
}


/***/ }),

/***/ 99762:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ useParamsFromQuery)
/* harmony export */ });
const { useSearchParams  } = __webpack_require__(59483);
const useParamsFromQuery = ()=>{
    const searchParams = useSearchParams();
    const searchtext = searchParams.get("search_text");
    const page = parseInt(searchParams.get("page"));
    const limit = searchParams.get("limit");
    const order = searchParams.get("order");
    const maxprice = searchParams.get("maxprice");
    return {
        searchtext: searchtext ?? "",
        page: page || 1,
        limit: limit ?? 12,
        order: order ?? "",
        maxprice: maxprice ?? 1000,
        searchParams
    };
};


/***/ }),

/***/ 9767:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ DEFAULT_PARAMS)
/* harmony export */ });
const DEFAULT_PARAMS = {
    limit: 10,
    page: 1,
    order: "",
    searchtext: "",
    maxprice: 10000,
    idcategory: "",
    idfamily: "",
    urlImgDefault: "/storage/icon-image-not-found.jpg"
};


/***/ })

};
;