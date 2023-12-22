"use strict";
exports.id = 3811;
exports.ids = [3811];
exports.modules = {

/***/ 73811:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ useCategories)
/* harmony export */ });
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69242);
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85338);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const useCategories = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_0__/* .useError */ .V)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getAllCategories = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/getAll`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getActivedCategories = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/getAll?state=1`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getOneCategory = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/getOne?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getOneActivedCategory = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/getOneActived?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const addNewCategory = async (body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/add`;
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
                message: "\xa1Categor\xeda agregado!"
            });
            router.push("/account/categories");
        });
    };
    const editCategory = async (id, body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/categories/edit?id=${id}`;
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
                message: "\xa1Categor\xeda editada!"
            });
            router.push("/account/categories");
        });
    };
    return {
        getAllCategories,
        getActivedCategories,
        getOneCategory,
        getOneActivedCategory,
        addNewCategory,
        editCategory
    };
};


/***/ })

};
;