"use strict";
exports.id = 6828;
exports.ids = [6828];
exports.modules = {

/***/ 86828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Datatable)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@tanstack/react-table/build/lib/index.mjs
var lib = __webpack_require__(54738);
// EXTERNAL MODULE: ./node_modules/@tanstack/table-core/build/lib/index.mjs
var build_lib = __webpack_require__(50157);
;// CONCATENATED MODULE: ./src/mocks/data.json
const data_namespaceObject = JSON.parse('[{"name":"Tanner","lastName":"Linsley","age":24,"status":"Activo"},{"name":"Marcus","lastName":"Lawos","age":18,"status":"Inactivo"},{"name":"Bertha","lastName":"Clegain","age":18,"status":"Inactivo"},{"name":"Martha","lastName":"Gordom","age":18,"status":"Inactivo"},{"name":"Luis","lastName":"Foxcius","age":18,"status":"Activo"},{"name":"Jerom","lastName":"Maison","age":18,"status":"Activo"},{"name":"Clara","lastName":"Valezca","age":18,"status":"Activo"},{"name":"Lei","lastName":"Doggerti","age":18,"status":"Inactivo"},{"name":"Lei","lastName":"Valezca","age":18,"status":"Activo"},{"name":"Luis","lastName":"Doggerti","age":18,"status":"Activo"},{"name":"Jerom","lastName":"Maison","age":18,"status":"Activo"},{"name":"Pedro","lastName":"Wen","age":18,"status":"Inactivo"},{"name":"Tanner","lastName":"Linsley","age":24,"status":"Activo"},{"name":"Marcus","lastName":"Lawos","age":18,"status":"Activo"},{"name":"Bertha","lastName":"Clegain","age":18,"status":"Inactivo"},{"name":"Martha","lastName":"Gordom","age":18,"status":"Inactivo"},{"name":"Luis","lastName":"Foxcius","age":18,"status":"Activo"},{"name":"Jerom","lastName":"Maison","age":18,"status":"Activo"},{"name":"Clara","lastName":"Valezca","age":18,"status":"Activo"},{"name":"Lei","lastName":"Doggerti","age":18,"status":"Activo"},{"name":"Lei","lastName":"Valezca","age":18,"status":"Activo"},{"name":"Luis","lastName":"Doggerti","age":18,"status":"Activo"},{"name":"Jerom","lastName":"Maison","age":18,"status":"Inactivo"},{"name":"Pedro","lastName":"Wen","age":18,"status":"Activo"}]');
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(71198);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);
// EXTERNAL MODULE: ./node_modules/@tanstack/match-sorter-utils/build/lib/index.mjs
var match_sorter_utils_build_lib = __webpack_require__(96330);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/MagnifyingGlassIcon.js
var MagnifyingGlassIcon = __webpack_require__(46827);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChevronDoubleLeftIcon.js
var ChevronDoubleLeftIcon = __webpack_require__(93704);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChevronLeftIcon.js
var ChevronLeftIcon = __webpack_require__(71052);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChevronRightIcon.js
var ChevronRightIcon = __webpack_require__(65938);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/solid/esm/ChevronDoubleRightIcon.js
var ChevronDoubleRightIcon = __webpack_require__(65353);
// EXTERNAL MODULE: ./src/components/dropdown/index.js
var dropdown = __webpack_require__(561);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BarsArrowUpIcon.js
var BarsArrowUpIcon = __webpack_require__(66746);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/BarsArrowDownIcon.js
var BarsArrowDownIcon = __webpack_require__(5483);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/ChevronUpDownIcon.js
var ChevronUpDownIcon = __webpack_require__(28037);
// EXTERNAL MODULE: ./src/components/button/index.js
var components_button = __webpack_require__(39950);
;// CONCATENATED MODULE: ./src/components/datatable/Datatable.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 









const COLUMNS_DEFAULT = [
    {
        accessorKey: "name",
        header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Nombre"
            }),
        cell: (info)=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-bold",
                children: info.getValue()
            })
    },
    {
        accessorKey: "lastName",
        header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Apellidos"
            })
    },
    {
        accessorKey: "age",
        header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Edad"
            })
    },
    {
        accessorKey: "status",
        header: ()=>/*#__PURE__*/ jsx_runtime_.jsx("span", {
                children: "Estado"
            }),
        cell: (info)=>{
            const inactivo = "Inactivo";
            const activo = "Activo";
            return /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: classnames_default()({
                    "text-xs text-slate-50 font-medium mr-2 px-2.5 py-0.5 rounded border": true,
                    "bg-red-100  text-red-400 border-red-400": inactivo === info.getValue(),
                    "bg-green-100 text-green-400 border-green-400": activo === info.getValue()
                }),
                children: info.getValue()
            });
        },
        enableSorting: true
    },
    {
        accessorKey: "id",
        header: "Acciones",
        cell: (info)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "space-x-2",
                children: /*#__PURE__*/ jsx_runtime_.jsx(dropdown/* default */.Z, {
                    linkEdit: `account/roles/e${info.getValue()}`
                })
            });
        },
        enableSorting: false
    }
];
const fuzzyFilter = (row, columnId, value, addMeta)=>{
    const itemRank = (0,match_sorter_utils_build_lib/* rankItem */.O4)(row.getValue(columnId), value);
    addMeta({
        itemRank
    });
    return itemRank.passed;
};
const DebouncedInput = ({ value: keyWord , onChange , ...props })=>{
    const [value, setValue] = (0,react_.useState)(keyWord);
    (0,react_.useEffect)(()=>{
        const timeout = setTimeout(()=>{
            onChange(value);
        }, 500);
        return ()=>clearTimeout(timeout);
    }, [
        value,
        100
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("input", {
        ...props,
        value: value,
        onChange: (e)=>setValue(e.target.value)
    });
};
const DataTable = ({ title ="Not title" , subtitle ="Not subtitle" , data =data_namespaceObject , columns =COLUMNS_DEFAULT , linkRefActionAdd ="/account/roles/a"  })=>{
    const [globalFilter, setGlobalFilter] = (0,react_.useState)("");
    const [sorting, setSorting] = (0,react_.useState)([]);
    const getStateTable = ()=>{
        const totalRows = table.getFilteredRowModel().rows.length;
        const pageSize = table.getState().pagination.pageSize;
        const pageIndex = table.getState().pagination.pageIndex;
        const rowsPerPage = table.getRowModel().rows.length;
        const firstIndex = pageIndex * pageSize + 1;
        const lastIndex = pageIndex * pageSize + rowsPerPage;
        return {
            totalRows,
            firstIndex,
            lastIndex
        };
    };
    const table = (0,lib/* useReactTable */.b7)({
        data,
        columns,
        state: {
            globalFilter,
            sorting
        },
        initialState: {
            pagination: {
                pageSize: 10
            }
        },
        getCoreRowModel: (0,build_lib/* getCoreRowModel */.sC)(),
        getPaginationRowModel: (0,build_lib/* getPaginationRowModel */.G_)(),
        getFilteredRowModel: (0,build_lib/* getFilteredRowModel */.vL)(),
        globalFilterFn: fuzzyFilter,
        getSortedRowModel: (0,build_lib/* getSortedRowModel */.tj)(),
        onSortingChange: setSorting
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "w-full rounded overflow-hidden bg-white",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-6 flex flex-col justify-between gap-8 md:flex-row md:items-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                                className: "text-2xl text-blue-gray",
                                children: title
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                                className: "mt-1 font-normal",
                                children: subtitle
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                        label: "Agregar",
                        location: linkRefActionAdd
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-3",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DebouncedInput, {
                            type: "text",
                            value: globalFilter ?? "",
                            onChange: (value)=>setGlobalFilter(String(value)),
                            className: "py-2 pr-3 pl-8 pb-3 text-gray-600 border rounded outline-primary w-full",
                            placeholder: "Buscar..."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(MagnifyingGlassIcon/* default */.Z, {
                            className: "w-4 h-4 absolute top-3 left-2.5"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-auto h-[500px]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("table", {
                    className: "w-full min-w-max table-auto text-left",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("thead", {
                            children: table.getHeaderGroups().map((headerGroup)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    children: headerGroup.headers.map((header)=>/*#__PURE__*/ jsx_runtime_.jsx("th", {
                                            className: "border-y border-blue-gray-100 bg-blue-gray-50/50 p-4",
                                            children: header.isPlaceholder ? null : /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: classnames_default()({
                                                    "font-normal leading-none opacity-70 text-start flex items-center space-x-1 cursor-pointer": header.column.getCanSort()
                                                }),
                                                onClick: header.column.getToggleSortingHandler(),
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                        className: "font-normal leading-none opacity-70 text-blue-gray",
                                                        children: (0,lib/* flexRender */.ie)(header.column.columnDef.header, header.getContext())
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: {
                                                            asc: /*#__PURE__*/ jsx_runtime_.jsx(BarsArrowUpIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            }),
                                                            desc: /*#__PURE__*/ jsx_runtime_.jsx(BarsArrowDownIcon/* default */.Z, {
                                                                className: "w-4 h-4"
                                                            })
                                                        }[header.column.getIsSorted()] ?? (header.column.getCanSort() ? /*#__PURE__*/ jsx_runtime_.jsx(ChevronUpDownIcon/* default */.Z, {
                                                            className: "w-4 h-4"
                                                        }) : null)
                                                    })
                                                ]
                                            })
                                        }, header.id))
                                }, headerGroup.id))
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("tbody", {
                            children: table.getRowModel().rows.map((row)=>/*#__PURE__*/ jsx_runtime_.jsx("tr", {
                                    className: "text-gray-600 hover:bg-slate-100",
                                    children: row.getVisibleCells().map((cell)=>/*#__PURE__*/ jsx_runtime_.jsx("td", {
                                            className: "py-2 px-4",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("small", {
                                                className: "font-normal leading-none text-blue-gray",
                                                children: (0,lib/* flexRender */.ie)(cell.column.columnDef.cell, cell.getContext())
                                            })
                                        }, cell.id))
                                }, row.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-4 py-6 flex flex-col md:flex-row items-center justify-between gap-5 text-center",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex align-center justify-center gap-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300   disabled:hover:bg-white disabled:hover:text-gray-300",
                                onClick: ()=>table.setPageIndex(0),
                                disabled: !table.getCanPreviousPage(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronDoubleLeftIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300   disabled:hover:bg-white disabled:hover:text-gray-300",
                                onClick: ()=>table.previousPage(),
                                disabled: !table.getCanPreviousPage(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronLeftIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            }),
                            table.getPageOptions().map((value, key)=>/*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: classnames_default()({
                                        "inline-flex items-center justify-center text-sm rounded border border-gray-300 disabled:hover:bg-white disabled:hover:text-gray-500 w-7 h-7": true,
                                        "bg-gray-300 ": value === table.getState().pagination.pageIndex
                                    }),
                                    onClick: ()=>table.setPageIndex(value),
                                    children: value + 1
                                }, key)),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "text-sm text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300   disabled:hover:bg-white disabled:hover:text-gray-300",
                                onClick: ()=>table.nextPage(),
                                disabled: !table.getCanNextPage(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronRightIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "text-gray-600 bg-gray-200 py-0.5 px-1 rounded border border-gray-300   disabled:hover:bg-white disabled:hover:text-gray-300",
                                onClick: ()=>table.setPageIndex(table.getPageCount() - 1),
                                disabled: !table.getCanNextPage(),
                                children: /*#__PURE__*/ jsx_runtime_.jsx(ChevronDoubleRightIcon/* default */.Z, {
                                    className: "w-4 h-4"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("small", {
                        className: "m-0",
                        children: [
                            "Mostrando de ",
                            getStateTable().firstIndex,
                            "\xa0 a",
                            " ",
                            getStateTable().lastIndex,
                            "\xa0 del total de",
                            " ",
                            getStateTable().totalRows,
                            " registros"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("select", {
                        className: "w-full md:w-36 border-0 px-3 py-3 m-0 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring  ease-linear transition-all duration-150",
                        onChange: (e)=>{
                            table.setPageSize(Number(e.target.value));
                        },
                        defaultValue: "10",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "5",
                                children: "5 p\xe1g."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "10",
                                children: "10 p\xe1g."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "20",
                                children: "20 p\xe1g."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "25",
                                children: "25 p\xe1g."
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("option", {
                                value: "50",
                                children: "50 p\xe1g."
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Datatable = (DataTable);


/***/ }),

/***/ 561:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(74845);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(86235);
/* harmony import */ var _heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(18644);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);





function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
function Dropdown({ linkEdit ="" , linkDelete =""  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Menu */ .v, {
        as: "div",
        className: "relative inline-block text-left",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Button */ .v.Button, {
                    className: "inline-flex w-full justify-center align-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold text-gray-900 rounded hover:bg-gray-50",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_20_solid__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                        className: "-mr-1 h-5 w-5 text-gray-400",
                        "aria-hidden": "true"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                enter: "transition ease-out duration-100",
                enterFrom: "transform opacity-0 scale-95",
                enterTo: "transform opacity-100 scale-100",
                leave: "transition ease-in duration-75",
                leaveFrom: "transform opacity-100 scale-100",
                leaveTo: "transform opacity-0 scale-95",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Items */ .v.Items, {
                    className: "absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "py-1",
                        children: [
                            linkEdit && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: linkEdit,
                                        className: classNames(active ? "bg-green-100 text-green-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                        children: "Editar"
                                    })
                            }),
                            linkDelete && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_3__/* .Menu.Item */ .v.Item, {
                                children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        href: linkDelete,
                                        className: classNames(active ? "bg-red-100 text-red-900" : "text-gray-700", "block px-4 py-2 text-sm"),
                                        children: "Deshabilitar"
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Dropdown));


/***/ })

};
;