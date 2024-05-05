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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n// Inside /pages/api/getTests.ts\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    try {\n        const tests = await prisma.test.findMany();\n        res.status(200).json(tests);\n    } catch (error) {\n        res.status(500).json({\n            error: \"Unable to fetch tests\"\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGVzdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsZ0NBQWdDO0FBQ2M7QUFFL0IsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUM5QyxJQUFJRCxHQUFHLENBQUNFLE1BQU0sS0FBSyxLQUFLLEVBQUU7UUFDeEIsT0FBT0QsR0FBRyxDQUFDRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsb0JBQW9CO1NBQUUsQ0FBQyxDQUFDO0tBQ2hFO0lBRUQsTUFBTUMsTUFBTSxHQUFHLElBQUlSLHdEQUFZLEVBQUU7SUFFakMsSUFBSTtRQUNGLE1BQU1TLEtBQUssR0FBRyxNQUFNRCxNQUFNLENBQUNFLElBQUksQ0FBQ0MsUUFBUSxFQUFFO1FBQzFDUixHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQztLQUM3QixDQUFDLE9BQU9HLEtBQUssRUFBRTtRQUNkVCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVNLEtBQUssRUFBRSx1QkFBdUI7U0FBRSxDQUFDLENBQUM7S0FDMUQsUUFBUztRQUNSLE1BQU1KLE1BQU0sQ0FBQ0ssV0FBVyxFQUFFLENBQUM7S0FDNUI7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtc3FsaXRlLy4vcGFnZXMvYXBpL2dldFRlc3RzLnRzPzA4YTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW5zaWRlIC9wYWdlcy9hcGkvZ2V0VGVzdHMudHNcbmltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSAnR0VUJykge1xuICAgIHJldHVybiByZXMuc3RhdHVzKDQwNSkuanNvbih7IG1lc3NhZ2U6ICdNZXRob2Qgbm90IGFsbG93ZWQnIH0pO1xuICB9XG5cbiAgY29uc3QgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgdGVzdHMgPSBhd2FpdCBwcmlzbWEudGVzdC5maW5kTWFueSgpO1xuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRlc3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiAnVW5hYmxlIHRvIGZldGNoIHRlc3RzJyB9KTtcbiAgfSBmaW5hbGx5IHtcbiAgICBhd2FpdCBwcmlzbWEuJGRpc2Nvbm5lY3QoKTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSIsInByaXNtYSIsInRlc3RzIiwidGVzdCIsImZpbmRNYW55IiwiZXJyb3IiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTests.ts\n");

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