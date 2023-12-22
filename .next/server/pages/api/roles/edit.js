"use strict";
(() => {
var exports = {};
exports.id = 8437;
exports.ids = [8437];
exports.modules = {

/***/ 23365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _settings_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94226);
/* harmony import */ var _utils_errorInAPI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65706);
/* harmony import */ var _utils_headers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(93198);



async function handler(req, res) {
    try {
        const { headers  } = (0,_utils_headers__WEBPACK_IMPORTED_MODULE_2__/* .getHeadersFromAPI */ .y)(req);
        const id = req.query.id;
        const body = req.body;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/role/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_utils_errorInAPI__WEBPACK_IMPORTED_MODULE_1__/* .handleErrorWithCause */ .a)(error, res);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3425], () => (__webpack_exec__(23365)));
module.exports = __webpack_exports__;

})();