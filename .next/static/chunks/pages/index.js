/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["pages/index"],{

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspace%2Fpages%2Findex.tsx&page=%2F!":
/*!**********************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspace%2Fpages%2Findex.tsx&page=%2F! ***!
  \**********************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/\",\n      function () {\n        return __webpack_require__(/*! ./pages/index.tsx */ \"./pages/index.tsx\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWNsaWVudC1wYWdlcy1sb2FkZXIuanM/YWJzb2x1dGVQYWdlUGF0aD0lMkZ3b3Jrc3BhY2UlMkZwYWdlcyUyRmluZGV4LnRzeCZwYWdlPSUyRiEuanMiLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDMUM7QUFDQTtBQUNBLE9BQU8sSUFBVTtBQUNqQixNQUFNLFVBQVU7QUFDaEI7QUFDQSxPQUFPO0FBQ1A7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvP2ZhYjYiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL2luZGV4LnRzeFwiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspace%2Fpages%2Findex.tsx&page=%2F!\n");

/***/ }),

/***/ "./pages/addTest.tsx":
/*!***************************!*\
  !*** ./pages/addTest.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddTest; }\n/* harmony export */ });\n/* harmony import */ var _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n// Inside /pages/addTest.tsx\n\nvar _s = $RefreshSig$();\nfunction AddTest() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), name = ref[0], setName = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\"), email = ref1[0], setEmail = ref1[1];\n    // Inside /pages/addTest.tsx\n    var handleSubmit = function() {\n        var _ref = _asyncToGenerator(_workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(e) {\n            var response;\n            return _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        e.preventDefault();\n                        _ctx.next = 3;\n                        return fetch(\"/api/addTest\", {\n                            method: \"POST\",\n                            headers: {\n                                \"Content-Type\": \"application/json\"\n                            },\n                            body: JSON.stringify({\n                                name: name,\n                                email: email\n                            })\n                        });\n                    case 3:\n                        response = _ctx.sent;\n                        if (response.ok) {\n                            // handle successful submission here (maybe clear the form)\n                            setName(\"\");\n                            setEmail(\"\");\n                        } else {\n                        // handle errors here\n                        }\n                    case 5:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function handleSubmit(e) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: name,\n                onChange: function(e) {\n                    return setName(e.target.value);\n                },\n                placeholder: \"Name\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/addTest.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                value: email,\n                onChange: function(e) {\n                    return setEmail(e.target.value);\n                },\n                placeholder: \"Email\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/addTest.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Add Test\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/addTest.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/pages/addTest.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n};\n_s(AddTest, \"BtFn5yfL2Ky7GnvFbGyYRNPtux8=\");\n_c = AddTest;\nvar _c;\n$RefreshReg$(_c, \"AddTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hZGRUZXN0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQSw0QkFBNEI7QUFDSzs7QUFFbEIsU0FBU0MsT0FBTyxHQUFHOztJQUNoQyxJQUF3QkQsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUp0QyxJQUlhLEdBQWFBLEdBQVksR0FBekIsRUFKYixPQUlzQixHQUFJQSxHQUFZLEdBQWhCO0lBQ3BCLElBQTBCQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBTHhDLEtBS2MsR0FBY0EsSUFBWSxHQUExQixFQUxkLFFBS3dCLEdBQUlBLElBQVksR0FBaEI7SUFFdEIsNEJBQTRCO0lBQzlCLElBQU1NLFlBQVk7bUJBQUcseUpBQU9DLENBQUMsRUFBSztnQkFHeEJDLFFBQVE7Ozs7d0JBRmRELENBQUMsQ0FBQ0UsY0FBYyxFQUFFLENBQUM7OytCQUVJQyxLQUFLLENBQUMsY0FBYyxFQUFFOzRCQUMzQ0MsTUFBTSxFQUFFLE1BQU07NEJBQ2RDLE9BQU8sRUFBRTtnQ0FDUCxjQUFjLEVBQUUsa0JBQWtCOzZCQUNuQzs0QkFDREMsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQVMsQ0FBQztnQ0FBRWIsSUFBSSxFQUFKQSxJQUFJO2dDQUFFRSxLQUFLLEVBQUxBLEtBQUs7NkJBQUUsQ0FBQzt5QkFDdEMsQ0FBQzs7d0JBTklJLFFBQVEsWUFNWjt3QkFFRixJQUFJQSxRQUFRLENBQUNRLEVBQUUsRUFBRTs0QkFDZiwyREFBMkQ7NEJBQzNEYixPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ1pFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQzt5QkFDZCxNQUFNO3dCQUNMLHFCQUFxQjt5QkFDdEI7Ozs7OztTQUNGO3dCQWxCR0MsWUFBWSxDQUFVQyxDQUFDOzs7T0FrQjFCO0lBRUQscUJBQ0UsOERBQUNVLE1BQUk7UUFBQ0MsUUFBUSxFQUFFWixZQUFZOzswQkFDMUIsOERBQUNhLE9BQUs7Z0JBQUNDLEtBQUssRUFBRWxCLElBQUk7Z0JBQUVtQixRQUFRLEVBQUVkLFNBQUFBLENBQUM7MkJBQUlKLE9BQU8sQ0FBQ0ksQ0FBQyxDQUFDZSxNQUFNLENBQUNGLEtBQUssQ0FBQztpQkFBQTtnQkFBRUcsV0FBVyxFQUFDLE1BQU07Ozs7O29CQUFHOzBCQUNqRiw4REFBQ0osT0FBSztnQkFBQ0MsS0FBSyxFQUFFaEIsS0FBSztnQkFBRWlCLFFBQVEsRUFBRWQsU0FBQUEsQ0FBQzsyQkFBSUYsUUFBUSxDQUFDRSxDQUFDLENBQUNlLE1BQU0sQ0FBQ0YsS0FBSyxDQUFDO2lCQUFBO2dCQUFFRyxXQUFXLEVBQUMsT0FBTzs7Ozs7b0JBQUc7MEJBQ3BGLDhEQUFDQyxRQUFNO2dCQUFDQyxJQUFJLEVBQUMsUUFBUTswQkFBQyxVQUFROzs7OztvQkFBUzs7Ozs7O1lBQ2xDLENBQ1A7Q0FDSDtHQWhDdUJ4QixPQUFPO0FBQVBBLEtBQUFBLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYWRkVGVzdC50c3g/M2MxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbnNpZGUgL3BhZ2VzL2FkZFRlc3QudHN4XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWRkVGVzdCgpIHtcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCcnKTtcblxuICAvLyBJbnNpZGUgL3BhZ2VzL2FkZFRlc3QudHN4XG5jb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9hZGRUZXN0Jywge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBuYW1lLCBlbWFpbCB9KSwgLy8gc2VuZCB0aGUgbmFtZSBhbmQgZW1haWwgc3RhdGUgdG8gdGhlIEFQSSByb3V0ZVxuICAgIH0pO1xuICBcbiAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgIC8vIGhhbmRsZSBzdWNjZXNzZnVsIHN1Ym1pc3Npb24gaGVyZSAobWF5YmUgY2xlYXIgdGhlIGZvcm0pXG4gICAgICBzZXROYW1lKCcnKTtcbiAgICAgIHNldEVtYWlsKCcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gaGFuZGxlIGVycm9ycyBoZXJlXG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICA8aW5wdXQgdmFsdWU9e25hbWV9IG9uQ2hhbmdlPXtlID0+IHNldE5hbWUoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIk5hbWVcIiAvPlxuICAgICAgPGlucHV0IHZhbHVlPXtlbWFpbH0gb25DaGFuZ2U9e2UgPT4gc2V0RW1haWwoZS50YXJnZXQudmFsdWUpfSBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgLz5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkFkZCBUZXN0PC9idXR0b24+XG4gICAgPC9mb3JtPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQWRkVGVzdCIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsImhhbmRsZVN1Ym1pdCIsImUiLCJyZXNwb25zZSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJvayIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/addTest.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ HomePage; }\n/* harmony export */ });\n/* harmony import */ var _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var _addTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTest */ \"./pages/addTest.tsx\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n// inside /pages/index.tsx\n\n\nvar _s = $RefreshSig$();\nfunction fetcher(url) {\n    return _fetcher.apply(this, arguments);\n}\nfunction _fetcher() {\n    _fetcher = _asyncToGenerator(_workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(url) {\n        var res;\n        return _workspace_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return fetch(url);\n                case 2:\n                    res = _ctx.sent;\n                    if (res.ok) {\n                        _ctx.next = 5;\n                        break;\n                    }\n                    throw new Error(\"Failed to fetch\");\n                case 5:\n                    return _ctx.abrupt(\"return\", res.json());\n                case 6:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _fetcher.apply(this, arguments);\n}\nfunction HomePage() {\n    var _this = this;\n    _s();\n    var ref = (0,swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"/api/getTests\", fetcher), tests = ref.data, error = ref.error;\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Failed to load tests\"\n    }, void 0, false, {\n        fileName: \"/workspace/pages/index.tsx\",\n        lineNumber: 16,\n        columnNumber: 21\n    }, this);\n    if (!tests) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/workspace/pages/index.tsx\",\n        lineNumber: 17,\n        columnNumber: 22\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Prisma Test\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                children: tests.map(function(test) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                children: test.name\n                            }, void 0, false, {\n                                fileName: \"/workspace/pages/index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                children: test.email\n                            }, void 0, false, {\n                                fileName: \"/workspace/pages/index.tsx\",\n                                lineNumber: 26,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, test.id, true, {\n                        fileName: \"/workspace/pages/index.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_addTest__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/workspace/pages/index.tsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n};\n_s(HomePage, \"Iq9AGANY0QaKHtUHZB178SLQOdY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = HomePage;\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREEsMEJBQTBCO0FBQ0Q7QUFDTzs7U0FFakJFLE9BQU8sQ0FBQ0MsR0FBRztXQUFYRCxRQUFPOztTQUFQQSxRQUFPO0lBQVBBLFFBQU8sR0FBdEIseUpBQXVCQyxHQUFHLEVBQUU7WUFDcEJDLEdBQUc7Ozs7OzJCQUFTQyxLQUFLLENBQUNGLEdBQUcsQ0FBQzs7b0JBQXRCQyxHQUFHLFlBQW1CO3dCQUN2QkEsR0FBRyxDQUFDRSxFQUFFOzs7O29CQUNULE1BQU0sSUFBSUMsS0FBSyxDQUFDLGlCQUFpQixDQUFDLENBQUM7O2lEQUU5QkgsR0FBRyxDQUFDSSxJQUFJLEVBQUU7Ozs7OztLQUNsQjtXQU5jTixRQUFPOztBQVFQLFNBQVNPLFFBQVEsR0FBRzs7O0lBQ2pDLElBQStCVCxHQUFnQyxHQUFoQ0EsK0NBQU0sQ0FBQyxlQUFlLEVBQUVFLE9BQU8sQ0FBQyxFQUF2RFEsS0FBVyxHQUFZVixHQUFnQyxDQUF2RFUsSUFBSSxFQUFTRSxLQUFLLEdBQUtaLEdBQWdDLENBQTFDWSxLQUFLO0lBRTFCLElBQUlBLEtBQUssRUFBRSxxQkFBTyw4REFBQ0MsS0FBRztrQkFBQyxzQkFBb0I7Ozs7O1lBQU0sQ0FBQztJQUNsRCxJQUFJLENBQUNGLEtBQUssRUFBRSxxQkFBTyw4REFBQ0UsS0FBRztrQkFBQyxZQUFVOzs7OztZQUFNLENBQUM7SUFFekMscUJBQ0UsOERBQUNBLEtBQUc7OzBCQUNGLDhEQUFDQyxJQUFFOzBCQUFDLGFBQVc7Ozs7O29CQUFLOzBCQUNwQiw4REFBQ0MsSUFBRTswQkFDQUosS0FBSyxDQUFDSyxHQUFHLENBQUMsU0FBQ0MsSUFBSTt5Q0FDZCw4REFBQ0MsSUFBRTs7MENBQ0QsOERBQUNDLElBQUU7MENBQUVGLElBQUksQ0FBQ0csSUFBSTs7Ozs7cUNBQU07MENBQ3BCLDhEQUFDQyxHQUFDOzBDQUFFSixJQUFJLENBQUNLLEtBQUs7Ozs7O3FDQUFLOzt1QkFGWkwsSUFBSSxDQUFDTSxFQUFFOzs7OzZCQUdYO2lCQUNOLENBQUM7Ozs7O29CQUNDOzBCQUNMLDhEQUFDdEIsZ0RBQU87Ozs7b0JBQUc7Ozs7OztZQUNQLENBQ047Q0FDSDtHQXBCdUJRLFFBQVE7O1FBQ0NULDJDQUFNOzs7QUFEZlMsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbnNpZGUgL3BhZ2VzL2luZGV4LnRzeFxuaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InO1xuaW1wb3J0IEFkZFRlc3QgZnJvbSAnLi9hZGRUZXN0JztcblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hlcih1cmwpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCcpO1xuICB9XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSgpIHtcbiAgY29uc3QgeyBkYXRhOiB0ZXN0cywgZXJyb3IgfSA9IHVzZVNXUignL2FwaS9nZXRUZXN0cycsIGZldGNoZXIpO1xuXG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+RmFpbGVkIHRvIGxvYWQgdGVzdHM8L2Rpdj47XG4gIGlmICghdGVzdHMpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGgxPlByaXNtYSBUZXN0PC9oMT5cbiAgICAgIDx1bD5cbiAgICAgICAge3Rlc3RzLm1hcCgodGVzdCkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e3Rlc3QuaWR9PlxuICAgICAgICAgICAgPGgyPnt0ZXN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwPnt0ZXN0LmVtYWlsfTwvcD5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgICA8QWRkVGVzdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVNXUiIsIkFkZFRlc3QiLCJmZXRjaGVyIiwidXJsIiwicmVzIiwiZmV0Y2giLCJvayIsIkVycm9yIiwianNvbiIsIkhvbWVQYWdlIiwiZGF0YSIsInRlc3RzIiwiZXJyb3IiLCJkaXYiLCJoMSIsInVsIiwibWFwIiwidGVzdCIsImxpIiwiaDIiLCJuYW1lIiwicCIsImVtYWlsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=%2Fworkspace%2Fpages%2Findex.tsx&page=%2F!"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ _N_E = __webpack_exports__;
/******/ }
]);