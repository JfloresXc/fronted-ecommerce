"use strict";
(() => {
var exports = {};
exports.id = 7339;
exports.ids = [7339];
exports.modules = {

/***/ 47087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _utils_methodsInAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10518);

async function handler(req, res) {
    const { searchtext , page , limit , order , idcategory , maxprice  } = req.query;
    const url = `product/search?searchtext=${searchtext}&page=${page}&order=${order}&idcategory=${idcategory}&maxprice=${maxprice}&limit=${limit}`;
    return await (0,_utils_methodsInAPI__WEBPACK_IMPORTED_MODULE_0__/* .getAll */ .go)({
        request: req,
        res,
        moduleRoute: url
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [3425,518], () => (__webpack_exec__(47087)));
module.exports = __webpack_exports__;

})();