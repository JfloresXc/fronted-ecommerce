"use strict";
exports.id = 9918;
exports.ids = [9918];
exports.modules = {

/***/ 89918:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ useProducts)
/* harmony export */ });
/* harmony import */ var _hooks_useError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69242);
/* harmony import */ var _utils_alerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85338);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);



const useProducts = ()=>{
    const { tryCatch  } = (0,_hooks_useError__WEBPACK_IMPORTED_MODULE_0__/* .useError */ .V)();
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const getAllProducts = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/getAll`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            const newData = data.map((item)=>({
                    ...item,
                    nameCategory: item?.category?.name ?? ""
                }));
            return newData;
        });
    };
    const getActivedProducts = async ()=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/getAll?state=1`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getOneProduct = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/getOne?id=${id}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const getImagesForIdProduct = async ({ idProduct  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/imagesForIdProduct?id=${idProduct}`;
            const response = await fetch(URL);
            const data = await response.json();
            return data;
        }, (data)=>{
            return data;
        });
    };
    const addNewProduct = async (body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/add`;
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
                message: "\xa1Producto agregado!"
            });
            router.push("/account/products");
        });
    };
    const addOneImage = async (formData)=>{
        return tryCatch(async ()=>{
            const URL = `/api/upload`;
            const response = await fetch(URL, {
                method: "POST",
                body: formData
            });
            const data = await response.json();
            return data;
        }, (data)=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Imagen agregada!"
            });
        });
    };
    const editProduct = async (id, body)=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/edit?id=${id}`;
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
                message: "\xa1Producto editado!"
            });
            router.push("/account/products");
        });
    };
    const deleteImageOfProduct = async ({ id  })=>{
        return tryCatch(async ()=>{
            const URL = `/api/products/deleteImage?id=${id}`;
            const response = await fetch(URL, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            return data;
        }, ()=>{
            (0,_utils_alerts__WEBPACK_IMPORTED_MODULE_1__/* .setMessageSuccess */ .w)({
                message: "\xa1Imagen eliminada!"
            });
        });
    };
    return {
        getAllProducts,
        getActivedProducts,
        getOneProduct,
        getImagesForIdProduct,
        addNewProduct,
        addOneImage,
        editProduct,
        deleteImageOfProduct
    };
};


/***/ })

};
;