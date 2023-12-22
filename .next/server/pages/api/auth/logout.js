"use strict";
(() => {
var exports = {};
exports.id = 1845;
exports.ids = [1845];
exports.modules = {

/***/ 84802:
/***/ ((module) => {

module.exports = require("cookie");

/***/ }),

/***/ 34454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84802);
/* harmony import */ var cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cookie__WEBPACK_IMPORTED_MODULE_0__);

async function handler(req, res) {
    try {
        const { myToken  } = req.cookies;
        if (!myToken) {
            return res.status(401).json({
                isError: false,
                message: "Not logged in"
            });
        }
        const serialized = (0,cookie__WEBPACK_IMPORTED_MODULE_0__.serialize)("myToken", null, {
            httpOnly: true,
            secure: "production" === "production",
            maxAge: 0,
            path: "/"
        });
        res.setHeader("Set-Cookie", serialized);
        res.json({
            isError: false,
            message: "Logout successfully"
        });
    } catch (error) {
        res.json({
            isError: true,
            message: error.message
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(34454));
module.exports = __webpack_exports__;

})();