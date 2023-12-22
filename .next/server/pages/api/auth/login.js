"use strict";
(() => {
var exports = {};
exports.id = 3908;
exports.ids = [3908];
exports.modules = {

/***/ 84802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 73531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _settings_envs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94226);
/* harmony import */ var _utils_errorInAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65706);



async function handler(req, res) {
    const { body  } = req;
    const { email , password  } = body;
    try {
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_1__/* .API_URL_SERVER_BACKEND */ .Bj}/auth/signin`;
        console.log(_settings_envs__WEBPACK_IMPORTED_MODULE_1__/* .API_URL_SERVER_BACKEND */ .Bj);
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        const { token , name =""  } = data;
        if (token) {
            const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)("myToken", token, {
                httpOnly: true,
                secure: "production" === "production",
                maxAge: 1000 * 60 * 60 * 24 * 30,
                path: "/"
            });
            res.setHeader("Set-Cookie", serialized);
        }
        res.json({
            isError: Boolean(name),
            ...data
        });
    } catch (error) {
        (0,_utils_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
}


/***/ }),

/***/ 94226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bj": () => (/* binding */ API_URL_SERVER_BACKEND)
/* harmony export */ });
/* unused harmony exports API_URL_API_FRONTEND, LINK_WHATSAPP */
const envs = {
    development: "http://localhost:3001",
    test: process.env.DATABASE_CONECTION_TEST,
    production: "https://backend-ecommerce-92xo.onrender.com"
};
const API_URL_SERVER_BACKEND = `${envs["production"]}/api`;
const API_URL_API_FRONTEND = "/api";
const LINK_WHATSAPP = process.env.LINK_WHATSAPP;



/***/ }),

/***/ 65706:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ handleErrorWithCause)
/* harmony export */ });
/* unused harmony export handleNewErrorWithCause */
const MESSAGES = {
    ECONNREFUSED: "\xa1Error de conexi\xf3n!"
};
const handleErrorWithCause = (responseInJson, res)=>{
    const { cause , message  } = responseInJson;
    const messageCode = MESSAGES[cause?.code] || message;
    res.json({
        isError: true,
        message: messageCode
    });
};
const handleNewErrorWithCause = (responseInJson, res)=>{
    const { cause , message  } = responseInJson;
    const messageCode = MESSAGES[cause?.code] || message;
    return new Response(JSON.stringify({
        isError: true,
        message: messageCode
    }));
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(73531));
module.exports = __webpack_exports__;

})();