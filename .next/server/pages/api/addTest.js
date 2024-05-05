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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Inside /pages/api/addTest.ts \n\nasync function handle(req, res) {\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    const { name , email  } = req.body;\n    try {\n        const createdTest = await prisma.test.create({\n            data: {\n                name: name,\n                email: email\n            }\n        });\n        res.status(200).json(createdTest);\n    } catch (e) {\n        res.status(500).json({\n            error: \"Something went wrong\"\n        });\n    } finally{\n        async ()=>{\n            await prisma.$disconnect();\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWRkVGVzdC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxnQ0FBZ0M7QUFDYztBQUcvQixlQUFlQyxNQUFNLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDOUUsTUFBTUMsTUFBTSxHQUFHLElBQUlKLHdEQUFZLEVBQUU7SUFFakMsTUFBTSxFQUFFSyxJQUFJLEdBQUVDLEtBQUssR0FBRSxHQUFJSixHQUFHLENBQUNLLElBQUk7SUFFakMsSUFBSTtRQUNGLE1BQU1DLFdBQVcsR0FBRyxNQUFNSixNQUFNLENBQUNLLElBQUksQ0FBQ0MsTUFBTSxDQUFDO1lBQzNDQyxJQUFJLEVBQUU7Z0JBQ0pOLElBQUksRUFBRUEsSUFBSTtnQkFDVkMsS0FBSyxFQUFFQSxLQUFLO2FBQ2I7U0FDRixDQUFDO1FBRUZILEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNMLFdBQVcsQ0FBQyxDQUFDO0tBQ25DLENBQUMsT0FBT00sQ0FBQyxFQUFFO1FBQ1ZYLEdBQUcsQ0FBQ1MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7WUFBRUUsS0FBSyxFQUFFLHNCQUFzQjtTQUFFLENBQUMsQ0FBQztLQUN6RCxRQUFTO1FBQ1IsVUFBWTtZQUNWLE1BQU1YLE1BQU0sQ0FBQ1ksV0FBVyxFQUFFLENBQUM7U0FDNUI7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1zcWxpdGUvLi9wYWdlcy9hcGkvYWRkVGVzdC50cz9hYWI3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEluc2lkZSAvcGFnZXMvYXBpL2FkZFRlc3QudHMgXG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcbmltcG9ydCB0eXBlIHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZShyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBjb25zdCBwcmlzbWEgPSBuZXcgUHJpc21hQ2xpZW50KCk7XG4gIFxuICBjb25zdCB7IG5hbWUsIGVtYWlsIH0gID0gcmVxLmJvZHk7XG4gIFxuICB0cnkge1xuICAgIGNvbnN0IGNyZWF0ZWRUZXN0ID0gYXdhaXQgcHJpc21hLnRlc3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oY3JlYXRlZFRlc3QpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBlcnJvcjogXCJTb21ldGhpbmcgd2VudCB3cm9uZ1wiIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGFzeW5jICgpID0+IHtcbiAgICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImhhbmRsZSIsInJlcSIsInJlcyIsInByaXNtYSIsIm5hbWUiLCJlbWFpbCIsImJvZHkiLCJjcmVhdGVkVGVzdCIsInRlc3QiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsImUiLCJlcnJvciIsIiRkaXNjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/addTest.ts\n");

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