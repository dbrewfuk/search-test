"use strict";
(() => {
var exports = {};
exports.id = 632;
exports.ids = [632];
exports.modules = {

/***/ 524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 193:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handle)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);
// Inside /pages/api/addTest.ts

async function handle(req, res) {
    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
    const { name , email  } = req.body;
    try {
        const createdTest = await prisma.test.create({
            data: {
                name: name,
                email: email
            }
        });
        res.status(200).json(createdTest);
    } catch (e) {
        res.status(500).json({
            error: "Something went wrong"
        });
    } finally{
        async ()=>{
            await prisma.$disconnect();
        };
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(193));
module.exports = __webpack_exports__;

})();