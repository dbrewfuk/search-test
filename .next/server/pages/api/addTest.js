"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/addTest";
exports.ids = ["pages/api/addTest"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/addTest.ts":
/*!******************************!*\
  !*** ./pages/api/addTest.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Inside /pages/api/addTest.ts\n\nasync function handle(req, res) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const { name , email  } = req.body;\n    try {\n        const createdTest = await prisma.test.create({\n            data: {\n                name: name,\n                email: email\n            }\n        });\n        res.status(200).json(createdTest);\n    } catch (e) {\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    } finally{\n        async ()=>{\n            await prisma.$disconnect();\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSwrQkFBK0I7QUFDZTtBQUcvQixlQUFlQyxNQUFNLENBQ2xDQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUosd0RBQVksRUFBRTtJQUVqQyxNQUFNLEVBQUVLLElBQUksR0FBRUMsS0FBSyxHQUFFLEdBQUdKLEdBQUcsQ0FBQ0ssSUFBSTtJQUVoQyxJQUFJO1FBQ0YsTUFBTUMsV0FBVyxHQUFHLE1BQU1KLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDQyxNQUFNLENBQUM7WUFDM0NDLElBQUksRUFBRTtnQkFDSk4sSUFBSSxFQUFFQSxJQUFJO2dCQUNWQyxLQUFLLEVBQUVBLEtBQUs7YUFDYjtTQUNGLENBQUM7UUFFRkgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsV0FBVyxDQUFDLENBQUM7S0FDbkMsQ0FBQyxPQUFPTSxDQUFDLEVBQUU7UUFDVlgsR0FBRyxDQUFDUyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFRSxLQUFLLEVBQUUsc0JBQXNCO1NBQUUsQ0FBQyxDQUFDO0tBQ3pELFFBQVM7UUFDUixVQUFZO1lBQ1YsTUFBTVgsTUFBTSxDQUFDWSxXQUFXLEVBQUUsQ0FBQztTQUM1QixDQUFDO0tBQ0g7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvYXBpL2FkZFRlc3QudHM/YWFiNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnNpZGUgL3BhZ2VzL2FwaS9hZGRUZXN0LnRzXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gIGNvbnN0IHsgbmFtZSwgZW1haWwgfSA9IHJlcS5ib2R5O1xuXG4gIHRyeSB7XG4gICAgY29uc3QgY3JlYXRlZFRlc3QgPSBhd2FpdCBwcmlzbWEudGVzdC5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY3JlYXRlZFRlc3QpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIH07XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGUiLCJyZXEiLCJyZXMiLCJwcmlzbWEiLCJuYW1lIiwiZW1haWwiLCJib2R5IiwiY3JlYXRlZFRlc3QiLCJ0ZXN0IiwiY3JlYXRlIiwiZGF0YSIsInN0YXR1cyIsImpzb24iLCJlIiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTest.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/addTest.ts"));
module.exports = __webpack_exports__;

})();