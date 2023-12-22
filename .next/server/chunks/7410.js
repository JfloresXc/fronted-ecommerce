"use strict";
exports.id = 7410;
exports.ids = [7410];
exports.modules = {

/***/ 47410:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ useUsers)
/* harmony export */ });
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69242);
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85338);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const useUsers = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_0__/* .useError */ .V)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getAllUsers = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/getAll`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            const dataAdded = data.map((item)=>{
                return {
                    ...item,
                    rolename: item?.role?.name
                };
            });
            return dataAdded;
        });
    };
    const getActivedUsers = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/getAll?state=1`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            const dataAdded = data.map((item)=>{
                return {
                    ...item,
                    rolename: item?.role?.name
                };
            });
            return dataAdded;
        });
    };
    const getOneUser = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/getOne?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            const { role ={}  } = data;
            const dataToSend = {
                ...data,
                idRole: role
            };
            return dataToSend;
        });
    };
    const addNewUser = async (body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/add`;
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
                message: "\xa1Usuario agregado!"
            });
            router.push("/account/users");
        });
    };
    const editUser = async (id, body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/edit?id=${id}`;
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
                message: "\xa1Usuario editado!"
            });
            router.push("/account/users");
        });
    };
    const changePassword = async ({ id , body  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/users/changePassword?id=${id}`;
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
                message: "\xa1Contrase\xf1a reestablecida!"
            });
            router.push("/account/users");
        });
    };
    return {
        getAllUsers,
        getActivedUsers,
        getOneUser,
        addNewUser,
        editUser,
        changePassword
    };
};


/***/ })

};
;