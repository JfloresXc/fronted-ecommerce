"use strict";
exports.id = 103;
exports.ids = [103];
exports.modules = {

/***/ 20103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Textarea)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function Textarea({ label ="Not label" , name , errors , validations  }) {
    const inputId = (0,react__WEBPACK_IMPORTED_MODULE_1__.useId)(1, "login-email-");
    const typeError = errors[name]?.type;
    const isRequired = typeError === "required";
    const isPatternValid = typeError === "pattern";
    const isInvalid = isRequired || isPatternValid;
    const colorValidation = isInvalid ? "red" : "gray";
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `mb-3`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: inputId,
                className: `block font-normal text-sm leading-none mb-3 cursor-pointer text-${colorValidation}-500`,
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                id: inputId,
                className: `px-5 py-4 text-heading outline-none w-full h-[52px] ltr:pl-5 rtl:pr-5 md:ltr:pl-6 md:rtl:pr-6 ltr:pr-14 rtl:pl-14 md:ltr:pr-16 md:rtl:pl-16 bg-brand-light text-sm lg:text-15px rounded-md transition-all duration-200 border border-${typeError ? colorValidation + "-500" : "gray-200"}`,
                ...validations
            }),
            isRequired && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-2 text-xs text-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-medium",
                        children: "Oops!"
                    }),
                    " Este campo es requerido"
                ]
            }),
            isPatternValid && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                className: "mt-2 text-xs text-red-500",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "font-medium",
                        children: "Oops!"
                    }),
                    " Ingresa un correo v\xe1lido"
                ]
            })
        ]
    });
}


/***/ })

};
;