"use strict";
(() => {
var exports = {};
exports.id = 537;
exports.ids = [537];
exports.modules = {

/***/ 648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 673:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

async function handler(req, res) {
    console.log("Received request:", req.url);
    try {
        // Fetch the external JSON file
        const response = await axios__WEBPACK_IMPORTED_MODULE_0__["default"].get("https://demo.kctcs.edu/untitled/data.json");
        // Extract the data from the response
        const jsonData = response.data;
        // Send the JSON data as the response
        res.status(200).json(jsonData);
    } catch (error) {
        console.error("Error fetching data:", error);
        res.status(500).json({
            error: "Unable to fetch data"
        });
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(673));
module.exports = __webpack_exports__;

})();