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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    try {\n        const tests = await prisma.test.findMany();\n        res.status(200).json(tests);\n    } catch (error) {\n        console.error(\"Error fetching tests:\", error);\n        res.status(500).json({\n            error: \"Unable to fetch tests\",\n            details: error.message\n        });\n    } finally{\n        await prisma.$disconnect();\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZ2V0VGVzdHMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQzhDO0FBRS9CLGVBQWVDLE9BQU8sQ0FDbkNDLEdBQW1CLEVBQ25CQyxHQUFvQixFQUNwQjtJQUNBLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEtBQUssRUFBRTtRQUN4QixPQUFPRCxHQUFHLENBQUNFLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUVDLE9BQU8sRUFBRSxvQkFBb0I7U0FBRSxDQUFDLENBQUM7S0FDaEU7SUFFRCxNQUFNQyxNQUFNLEdBQUcsSUFBSVIsd0RBQVksRUFBRTtJQUVqQyxJQUFJO1FBQ0YsTUFBTVMsS0FBSyxHQUFHLE1BQU1ELE1BQU0sQ0FBQ0UsSUFBSSxDQUFDQyxRQUFRLEVBQUU7UUFDMUNSLEdBQUcsQ0FBQ0UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDO0tBQzdCLENBQUMsT0FBT0csS0FBSyxFQUFFO1FBQ2RDLE9BQU8sQ0FBQ0QsS0FBSyxDQUFDLHVCQUF1QixFQUFFQSxLQUFLLENBQUMsQ0FBQztRQUM5Q1QsR0FBRyxDQUNBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQ1hDLElBQUksQ0FBQztZQUFFTSxLQUFLLEVBQUUsdUJBQXVCO1lBQUVFLE9BQU8sRUFBRUYsS0FBSyxDQUFDTCxPQUFPO1NBQUUsQ0FBQyxDQUFDO0tBQ3JFLFFBQVM7UUFDUixNQUFNQyxNQUFNLENBQUNPLFdBQVcsRUFBRSxDQUFDO0tBQzVCO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLXNxbGl0ZS8uL3BhZ2VzL2FwaS9nZXRUZXN0cy50cz8wOGE2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlLFxuKSB7XG4gIGlmIChyZXEubWV0aG9kICE9PSBcIkdFVFwiKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDA1KS5qc29uKHsgbWVzc2FnZTogXCJNZXRob2Qgbm90IGFsbG93ZWRcIiB9KTtcbiAgfVxuXG4gIGNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHRlc3RzID0gYXdhaXQgcHJpc21hLnRlc3QuZmluZE1hbnkoKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih0ZXN0cyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHRlc3RzOlwiLCBlcnJvcik7XG4gICAgcmVzXG4gICAgICAuc3RhdHVzKDUwMClcbiAgICAgIC5qc29uKHsgZXJyb3I6IFwiVW5hYmxlIHRvIGZldGNoIHRlc3RzXCIsIGRldGFpbHM6IGVycm9yLm1lc3NhZ2UgfSk7XG4gIH0gZmluYWxseSB7XG4gICAgYXdhaXQgcHJpc21hLiRkaXNjb25uZWN0KCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJwcmlzbWEiLCJ0ZXN0cyIsInRlc3QiLCJmaW5kTWFueSIsImVycm9yIiwiY29uc29sZSIsImRldGFpbHMiLCIkZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/getTests.ts\n");

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