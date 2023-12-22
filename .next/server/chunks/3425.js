"use strict";
exports.id = 3425;
exports.ids = [3425];
exports.modules = {

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


/***/ }),

/***/ 93198:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ getHeadersFromAPI)
/* harmony export */ });
/* unused harmony export HEADERS_IN_CLIENT */
const getHeadersFromAPI = (request)=>{
    const { myToken: token  } = request.cookies;
    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
    };
    const headersWithFile = {
        Authorization: `Bearer ${token}`
    };
    return {
        headers,
        headersWithFile
    };
};
const HEADERS_IN_CLIENT = {
    "Content-Type": "application/json"
};


/***/ })

};
;