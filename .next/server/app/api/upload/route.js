"use strict";
(() => {
var exports = {};
exports.id = 5998;
exports.ids = [5998];
exports.modules = {

/***/ 97783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 28530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 54426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 40252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 60670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "headerHooks": () => (/* binding */ headerHooks),
  "originalPathname": () => (/* binding */ originalPathname),
  "requestAsyncStorage": () => (/* binding */ requestAsyncStorage),
  "routeModule": () => (/* binding */ routeModule),
  "serverHooks": () => (/* binding */ serverHooks),
  "staticGenerationAsyncStorage": () => (/* binding */ staticGenerationAsyncStorage),
  "staticGenerationBailout": () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/upload/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  "POST": () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(35387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(29267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
;// CONCATENATED MODULE: ./src/settings/envs.js
const envs = {
    development: "http://localhost:3001",
    test: process.env.DATABASE_CONECTION_TEST,
    production: "https://backend-ecommerce-92xo.onrender.com"
};
const API_URL_SERVER_BACKEND = `${envs["production"]}/api`;
const API_URL_API_FRONTEND = "/api";
const LINK_WHATSAPP = process.env.LINK_WHATSAPP;


;// CONCATENATED MODULE: ./src/app/api/upload/route.js

async function POST(request) {
    const formData = await request.formData();
    const file = formData.get("file");
    const ext = file.name.split(".").pop();
    const fileName = file.name + "-" + Date.now() + "." + ext;
    const url = `${API_URL_SERVER_BACKEND}/product/image`;
    const response = await fetch(url, {
        method: "POST",
        body: formData
    });
    if (response.ok) {
        const data = await response.json();
        return new Response(JSON.stringify({
            message: `¡Imagen ${fileName} subida con éxito!`,
            data
        }));
    } else {
        const data = await response.json();
        return new Response(JSON.stringify({
            ...data
        }));
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fupload%2Froute&name=app%2Fapi%2Fupload%2Froute&pagePath=private-next-app-dir%2Fapi%2Fupload%2Froute.js&appDir=C%3A%5CUsers%5Cmesol%5CDocuments%5Clenguajes%5Cmundo%20html%5Cproyectos%5Creact%5Cecommerce%5Cfrontend-ecommerce%5Csrc%5Capp&appPaths=%2Fapi%2Fupload%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=!

    

    

    

    const routeModule = new (module_default())({
    userland: route_namespaceObject,
    pathname: "/api/upload",
    resolvedPagePath: "C:\\Users\\mesol\\Documents\\lenguajes\\mundo html\\proyectos\\react\\ecommerce\\frontend-ecommerce\\src\\app\\api\\upload\\route.js",
    nextConfigOutput: undefined,
  })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/upload/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [9405,5981], () => (__webpack_exec__(60670)));
module.exports = __webpack_exports__;

})();