"use strict";
exports.id = 1181;
exports.ids = [1181];
exports.modules = {

/***/ 41181:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ useRoles)
/* harmony export */ });
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69242);
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85338);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const useRoles = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_0__/* .useError */ .V)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getAllRoles = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/roles/getAll`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getActivedRoles = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/roles/getAll?state=1`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getOneRole = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/roles/getOne?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const addNewRole = async (body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/roles/add`;
            const response = await fetch(URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        }, ()=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Rol agregado!"
            });
            router.push("/account/roles");
        });
    };
    const editRole = async (id, body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/roles/edit?id=${id}`;
            const response = await fetch(URL, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            });
            const data = await response.json();
            return data;
        }, ()=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Rol editado!"
            });
            router.push("/account/roles");
        });
    };
    return {
        getAllRoles,
        getActivedRoles,
        getOneRole,
        addNewRole,
        editRole
    };
};


/***/ })

};
;