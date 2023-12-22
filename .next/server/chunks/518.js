"use strict";
exports.id = 518;
exports.ids = [518];
exports.modules = {

/***/ 10518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Hd": () => (/* binding */ getOne),
/* harmony export */   "T5": () => (/* binding */ editOne),
/* harmony export */   "cn": () => (/* binding */ deleteOne),
/* harmony export */   "go": () => (/* binding */ getAll),
/* harmony export */   "vC": () => (/* binding */ addOne)
/* harmony export */ });
/* harmony import */ var _settings_envs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94226);
/* harmony import */ var _headers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93198);
/* harmony import */ var _errorInAPI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65706);



const getAll = async function handler({ request , res , moduleRoute  }) {
    try {
        const { headers  } = (0,_headers__WEBPACK_IMPORTED_MODULE_1__/* .getHeadersFromAPI */ .y)(request);
        const state = request.query.state;
        let query = "";
        if (state) query = `state=${state}`;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/${moduleRoute}?${query}`;
        const response = await fetch(url, {
            method: "GET",
            headers
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
};
const getOne = async function handler({ request , res , moduleRoute  }) {
    try {
        const { headers  } = (0,_headers__WEBPACK_IMPORTED_MODULE_1__/* .getHeadersFromAPI */ .y)(request);
        const id = request.query.id;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/${moduleRoute}/${id}`;
        const response = await fetch(url, {
            method: "GET",
            headers
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
};
const addOne = async function handler({ request , res , moduleRoute  }) {
    try {
        const { headers  } = (0,_headers__WEBPACK_IMPORTED_MODULE_1__/* .getHeadersFromAPI */ .y)(request);
        const body = request.body;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/${moduleRoute}`;
        const response = await fetch(url, {
            method: "POST",
            headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
};
const editOne = async function handler({ request , res , moduleRoute  }) {
    try {
        const { headers  } = (0,_headers__WEBPACK_IMPORTED_MODULE_1__/* .getHeadersFromAPI */ .y)(request);
        const id = request.query.id;
        const body = request.body;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/${moduleRoute}/${id}`;
        const response = await fetch(url, {
            method: "PUT",
            headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
};
const deleteOne = async function handler({ request , res , moduleRoute  }) {
    try {
        const { headers  } = (0,_headers__WEBPACK_IMPORTED_MODULE_1__/* .getHeadersFromAPI */ .y)(request);
        const id = request.query.id;
        const body = request.body;
        const url = `${_settings_envs__WEBPACK_IMPORTED_MODULE_0__/* .API_URL_SERVER_BACKEND */ .Bj}/${moduleRoute}/${id}`;
        const response = await fetch(url, {
            method: "DELETE",
            headers,
            body: JSON.stringify(body)
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        (0,_errorInAPI__WEBPACK_IMPORTED_MODULE_2__/* .handleErrorWithCause */ .a)(error, res);
    }
};



/***/ })

};
;