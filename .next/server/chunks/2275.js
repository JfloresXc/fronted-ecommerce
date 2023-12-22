"use strict";
exports.id = 2275;
exports.ids = [2275];
exports.modules = {

/***/ 45903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fM": () => (/* binding */ getNameAction),
/* harmony export */   "w8": () => (/* binding */ getValidateAction)
/* harmony export */ });
/* unused harmony exports ACTTIONS, VALIDATE_ACTIONS, getParams */
const ACTTIONS = {
    a: "Add",
    e: "Edit",
    p: "Preview",
    c: "Clone",
    r: "Read",
    d: "Delete"
};
const VALIDATE_ACTIONS = {
    isActionEdit: (action)=>action === "e",
    isActionAdd: (action)=>action === "a",
    isActionPreview: (action)=>action === "p",
    isActionClone: (action)=>action === "c"
};
const getParams = (info)=>{
    const action = info?.substring(0, 1);
    const id = info?.substring(1);
    return {
        action,
        id
    };
};
const getNameAction = ({ action  })=>{
    switch(action){
        case "a":
            return "Agregar";
        case "e":
            return "Editar";
        case "c":
            return "Clonar";
        default:
            return "Action not found";
    }
};
const getValidateAction = ({ action  })=>{
    return {
        isActionEdit: action === "e",
        isActionAdd: action === "a",
        isActionPreview: action === "p",
        isActionClone: action === "c"
    };
};


/***/ }),

/***/ 68717:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Qf": () => (/* binding */ getParams)
/* harmony export */ });
/* unused harmony exports ACTTIONS, VALIDATE_ACTIONS, getNameAction, getValidateAction */
const ACTTIONS = {
    a: "Add",
    e: "Edit",
    p: "Preview",
    c: "Clone",
    r: "Read",
    d: "Delete"
};
const VALIDATE_ACTIONS = {
    isActionEdit: (action)=>action === "e",
    isActionAdd: (action)=>action === "a",
    isActionPreview: (action)=>action === "p",
    isActionClone: (action)=>action === "c"
};
const getParams = (info)=>{
    const action = info?.substring(0, 1);
    const id = info?.substring(1);
    return {
        action,
        id
    };
};
const getNameAction = ({ action  })=>{
    switch(action){
        case "a":
            return "Agregar";
        case "e":
            return "Editar";
        case "c":
            return "Clonar";
        default:
            return "Action not found";
    }
};
const getValidateAction = ({ action  })=>{
    return {
        isActionEdit: action === "e",
        isActionAdd: action === "a",
        isActionPreview: action === "p",
        isActionClone: action === "c"
    };
};


/***/ })

};
;