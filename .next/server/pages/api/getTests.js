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
exports.id = "pages/api/getTests";
exports.ids = ["pages/api/getTests"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/getTests.ts":
/*!*******************************!*\
  !*** ./pages/api/getTests.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    try {\n        const tests = await prisma.test.findMany();\n        res.status(200).json(tests);\n    } catch (error) {\n        console.error(\"Error fetching tests:\", error);\n        res.status(500).json({\n            error: \"Unable to fetch tests\",\n            details: error.message\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGVzdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRThDO0FBRS9CLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDaEU7SUFFRCxNQUFNQyxNQUFNLEdBQUcsSUFBSVIsd0RBQVksRUFBRTtJQUVqQyxJQUFJO1FBQ0YsTUFBTVMsS0FBSyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDMUNSLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO0tBQzdCLENBQUMsT0FBT0csS0FBSyxFQUFPO1FBQ25CQyxPQUFPLENBQUNELEtBQUssQ0FBQyx1QkFBdUIsRUFBRUEsS0FBSyxDQUFDLENBQUM7UUFDOUNULEdBQUcsQ0FDQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUNYQyxJQUFJLENBQUM7WUFBRU0sS0FBSyxFQUFFLHVCQUF1QjtZQUFFRSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0wsT0FBTztTQUFFLENBQUMsQ0FBQztLQUNyRSxRQUFTO1FBQ1IsTUFBTUMsTUFBTSxDQUFDTyxXQUFXLEVBQUUsQ0FBQztLQUM1QjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1zcWxpdGUvLi9wYWdlcy9hcGkvZ2V0VGVzdHMudHM/MDhhNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnNpZGUgL3BhZ2VzL2FwaS9nZXRUZXN0cy50c1xuaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tIFwiQHByaXNtYS9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2UsXG4pIHtcbiAgaWYgKHJlcS5tZXRob2QgIT09IFwiR0VUXCIpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiBcIk1ldGhvZCBub3QgYWxsb3dlZFwiIH0pO1xuICB9XG5cbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdHMgPSBhd2FpdCBwcmlzbWEudGVzdC5maW5kTWFueSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlc3RzKTtcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB0ZXN0czpcIiwgZXJyb3IpO1xuICAgIHJlc1xuICAgICAgLnN0YXR1cyg1MDApXG4gICAgICAuanNvbih7IGVycm9yOiBcIlVuYWJsZSB0byBmZXRjaCB0ZXN0c1wiLCBkZXRhaWxzOiBlcnJvci5tZXNzYWdlIH0pO1xuICB9IGZpbmFsbHkge1xuICAgIGF3YWl0IHByaXNtYS4kZGlzY29ubmVjdCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwicHJpc21hIiwidGVzdHMiLCJ0ZXN0IiwiZmluZE1hbnkiLCJlcnJvciIsImNvbnNvbGUiLCJkZXRhaWxzIiwiJGRpc2Nvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTests.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/getTests.ts"));
module.exports = __webpack_exports__;

})();