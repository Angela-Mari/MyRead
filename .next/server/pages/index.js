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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/_authenticationModal.js":
/*!***************************************!*\
  !*** ./pages/_authenticationModal.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/angelageorge/Desktop/Software Engineering/MyRead/pages/_authenticationModal.js\";\n\n\n\n\n\n\nfunction AuthenticationModal({\n  show,\n  handleClose,\n  type\n}) {\n  function handleSubmit(e) {\n    console.log(email);\n    console.log(password);\n  }\n\n  const {\n    0: email,\n    1: setEmail\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  const {\n    0: password,\n    1: setPassword\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal, {\n    size: \"lg\",\n    \"aria-labelledby\": \"contained-modal-title-vcenter\",\n    show: show,\n    onHide: handleClose,\n    centered: true,\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Header, {\n      closeButton: true,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Title, {\n        id: \"contained-modal-title-vcenter\",\n        children: type\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {\n          className: \"mb-3\",\n          controlId: \"formBasicEmail\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {\n            children: \"Email address\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {\n            value: email,\n            type: \"email\",\n            placeholder: \"Enter email\",\n            onChange: e => setEmail(e.currentTarget.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 29,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {\n          className: \"mb-3\",\n          controlId: \"formBasicPassword\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Label, {\n            children: \"Password\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 21\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Control, {\n            value: password,\n            type: \"password\",\n            placeholder: \"Password\",\n            onChange: e => setPassword(e.currentTarget.value)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 21\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Group, {\n          className: \"mb-3\",\n          controlId: \"formBasicCheckbox\",\n          children: type == \"Register\" ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Form.Check, {\n            type: \"checkbox\",\n            label: \"I accept the terms and conditions\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 42\n          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {}, void 0, false)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 17\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n          variant: \"primary\",\n          type: \"submit\",\n          onClick: e => handleSubmit(e.currentTarget),\n          children: \"Submit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 17\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 9\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Modal.Footer, {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n        onClick: handleClose,\n        children: \"Close\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 13\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthenticationModal);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpBLGVBaUNBLDhEQUFDLHlEQUFEO0FBQUEsNkJBQ0ksOERBQUMsbURBQUQ7QUFBUSxlQUFPLEVBQUVWLFdBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQXVDSDs7QUFFRCxpRUFBZUYsbUJBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1yZWFkLy4vcGFnZXMvX2F1dGhlbnRpY2F0aW9uTW9kYWwuanM/NTEyYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgeyBNb2RhbCwgQnV0dG9uLCBGb3JtfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiBBdXRoZW50aWNhdGlvbk1vZGFsKHtzaG93LCBoYW5kbGVDbG9zZSwgdHlwZX0pIHtcbiAgICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKGVtYWlsKVxuICAgICAgICBjb25zb2xlLmxvZyhwYXNzd29yZClcbiAgICB9XG5cbiAgICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IFtwYXNzd29yZCwgc2V0UGFzc3dvcmRdID0gdXNlU3RhdGUoXCJcIik7XG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgICAgPE1vZGFsXG4gICAgICAgIHNpemU9XCJsZ1wiXG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCJcbiAgICAgICAgc2hvdz17c2hvd30gXG4gICAgICAgIG9uSGlkZT17aGFuZGxlQ2xvc2V9XG4gICAgICAgIGNlbnRlcmVkXG4gICAgICAgID5cbiAgICAgICAgPE1vZGFsLkhlYWRlciBjbG9zZUJ1dHRvbj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZSBpZD1cImNvbnRhaW5lZC1tb2RhbC10aXRsZS12Y2VudGVyXCI+XG4gICAgICAgICAgIHt0eXBlfVxuICAgICAgICAgICAgPC9Nb2RhbC5UaXRsZT5cbiAgICAgICAgPC9Nb2RhbC5IZWFkZXI+XG4gICAgICAgIDxNb2RhbC5Cb2R5PlxuICAgICAgICAgICAgPEZvcm0+XG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0VtYWlsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkxhYmVsPkVtYWlsIGFkZHJlc3M8L0Zvcm0uTGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxGb3JtLkNvbnRyb2wgdmFsdWU9e2VtYWlsfSB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCIgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLmN1cnJlbnRUYXJnZXQudmFsdWUpfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgIDxGb3JtLkdyb3VwIGNsYXNzTmFtZT1cIm1iLTNcIiBjb250cm9sSWQ9XCJmb3JtQmFzaWNQYXNzd29yZFwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9ybS5MYWJlbD5QYXNzd29yZDwvRm9ybS5MYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPEZvcm0uQ29udHJvbCB2YWx1ZT17cGFzc3dvcmR9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIiBvbkNoYW5nZT17KGUpID0+IHNldFBhc3N3b3JkKGUuY3VycmVudFRhcmdldC52YWx1ZSl9IC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtLkdyb3VwPlxuXG4gICAgICAgICAgICAgICAgPEZvcm0uR3JvdXAgY2xhc3NOYW1lPVwibWItM1wiIGNvbnRyb2xJZD1cImZvcm1CYXNpY0NoZWNrYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIHt0eXBlID09IFwiUmVnaXN0ZXJcIj8gPEZvcm0uQ2hlY2sgdHlwZT1cImNoZWNrYm94XCIgbGFiZWw9XCJJIGFjY2VwdCB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnNcIi8+IDogPD48Lz4gfVxuICAgICAgICAgICAgICAgIDwvRm9ybS5Hcm91cD5cblxuICAgICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIiB0eXBlPVwic3VibWl0XCIgb25DbGljaz17KGUpPT5oYW5kbGVTdWJtaXQoZS5jdXJyZW50VGFyZ2V0KX0+XG4gICAgICAgICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvRm9ybT5cbiAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuICAgICAgICA8TW9kYWwuRm9vdGVyPlxuICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Q2xvc2U8L0J1dHRvbj5cbiAgICAgICAgPC9Nb2RhbC5Gb290ZXI+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXV0aGVudGljYXRpb25Nb2RhbCJdLCJuYW1lcyI6WyJNb2RhbCIsIkJ1dHRvbiIsIkZvcm0iLCJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aGVudGljYXRpb25Nb2RhbCIsInNob3ciLCJoYW5kbGVDbG9zZSIsInR5cGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwiY29uc29sZSIsImxvZyIsImVtYWlsIiwicGFzc3dvcmQiLCJzZXRFbWFpbCIsInNldFBhc3N3b3JkIiwiY3VycmVudFRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_authenticationModal.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ \"react-bootstrap\");\n/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ \"./node_modules/bootstrap/dist/css/bootstrap.min.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _authenticationModal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_authenticationModal */ \"./pages/_authenticationModal.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/angelageorge/Desktop/Software Engineering/MyRead/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home() {\n  const {\n    0: show,\n    1: setShow\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n  const {\n    0: authentication,\n    1: setAuthentication\n  } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"Register\");\n\n  function handleClose() {\n    setShow(false);\n  }\n\n  function handleClick(name) {\n    console.log(name);\n    setAuthentication(name);\n    setShow(true);\n  }\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"MyRead Welcome Page\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Landing page for unauthenticated users\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 9\n      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Row, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Col, {\n          className: \"text-center\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n            children: \"Welcome to MyRead\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 9\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().description),\n            children: \"Register or log in to get started.\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 9\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            variant: \"primary\",\n            name: \"Register\",\n            onClick: e => handleClick(e.currentTarget.name),\n            children: \"Register\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 13\n          }, this), ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__.Button, {\n            variant: \"primary\",\n            name: \"Log in\",\n            onClick: e => handleClick(e.currentTarget.name),\n            children: \"Log in\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_authenticationModal__WEBPACK_IMPORTED_MODULE_3__.default, {\n            show: show,\n            handleClose: handleClose,\n            type: authentication\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 53,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 7\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 7\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"footer\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n      children: \"Your own blog in seconds.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, this);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBR2UsU0FBU1EsSUFBVCxHQUFnQjtBQUU3QixRQUFNO0FBQUEsT0FBQ0MsSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JILCtDQUFRLENBQUMsS0FBRCxDQUFoQztBQUNBLFFBQU07QUFBQSxPQUFDSSxjQUFEO0FBQUEsT0FBaUJDO0FBQWpCLE1BQXNDTCwrQ0FBUSxDQUFDLFVBQUQsQ0FBcEQ7O0FBRUEsV0FBU00sV0FBVCxHQUFzQjtBQUNwQkgsSUFBQUEsT0FBTyxDQUFDLEtBQUQsQ0FBUDtBQUNEOztBQUVELFdBQVNJLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTBCO0FBQ3hCQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUNBSCxJQUFBQSxpQkFBaUIsQ0FBQ0csSUFBRCxDQUFqQjtBQUNBTCxJQUFBQSxPQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0Q7O0FBRUQsc0JBQ0U7QUFBSyxhQUFTLEVBQUVULDBFQUFoQjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQU0sV0FBRyxFQUFDLE1BQVY7QUFBaUIsWUFBSSxFQUFDO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU9FO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSw2QkFDQSw4REFBQyxnREFBRDtBQUFBLCtCQUNBLDhEQUFDLGdEQUFEO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsa0NBQ0U7QUFBSSxxQkFBUyxFQUFFQSxzRUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERixlQUtFO0FBQUcscUJBQVMsRUFBRUEsNEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBTEYsZUFRTSw4REFBQyxtREFBRDtBQUNFLG1CQUFPLEVBQUMsU0FEVjtBQUVFLGdCQUFJLEVBQUMsVUFGUDtBQUdFLG1CQUFPLEVBQUdxQixDQUFELElBQU9SLFdBQVcsQ0FBQ1EsQ0FBQyxDQUFDQyxhQUFGLENBQWdCUixJQUFqQixDQUg3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFSTixFQWFnQixHQWJoQixlQWNNLDhEQUFDLG1EQUFEO0FBQVEsbUJBQU8sRUFBQyxTQUFoQjtBQUNFLGdCQUFJLEVBQUMsUUFEUDtBQUVFLG1CQUFPLEVBQUdPLENBQUQsSUFBT1IsV0FBVyxDQUFDUSxDQUFDLENBQUNDLGFBQUYsQ0FBZ0JSLElBQWpCLENBRjdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQWROLGVBbUJNLDhEQUFDLHlEQUFEO0FBQXFCLGdCQUFJLEVBQUVOLElBQTNCO0FBQWlDLHVCQUFXLEVBQUVJLFdBQTlDO0FBQTJELGdCQUFJLEVBQUVGO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBbkJOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFpQ0U7QUFBUSxlQUFTLEVBQUVWLHVFQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXVDRCIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJlYWQvLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IEJ1dHRvbiwgQ29sLCBSb3d9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAubWluLmNzcyc7XG5pbXBvcnQgQXV0aGVudGljYXRpb25Nb2RhbCBmcm9tICcuL19hdXRoZW50aWNhdGlvbk1vZGFsJztcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuXG4gIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2F1dGhlbnRpY2F0aW9uLCBzZXRBdXRoZW50aWNhdGlvbl0gPSB1c2VTdGF0ZShcIlJlZ2lzdGVyXCIpO1xuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsb3NlKCl7XG4gICAgc2V0U2hvdyhmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKG5hbWUpe1xuICAgIGNvbnNvbGUubG9nKG5hbWUpXG4gICAgc2V0QXV0aGVudGljYXRpb24obmFtZSlcbiAgICBzZXRTaG93KHRydWUpXG4gIH1cbiAgXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NeVJlYWQgV2VsY29tZSBQYWdlPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkxhbmRpbmcgcGFnZSBmb3IgdW5hdXRoZW50aWNhdGVkIHVzZXJzXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgIDxSb3c+XG4gICAgICA8Q29sIGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgV2VsY29tZSB0byBNeVJlYWRcbiAgICAgICAgPC9oMT5cblxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgUmVnaXN0ZXIgb3IgbG9nIGluIHRvIGdldCBzdGFydGVkLlxuICAgICAgICA8L3A+XG4gICAgICAgICAgICA8QnV0dG9uIFxuICAgICAgICAgICAgICB2YXJpYW50PVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJSZWdpc3RlclwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBoYW5kbGVDbGljayhlLmN1cnJlbnRUYXJnZXQubmFtZSl9PlxuICAgICAgICAgICAgICBSZWdpc3RlclxuICAgICAgICAgICAgPC9CdXR0b24+eycgJ31cbiAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBuYW1lPVwiTG9nIGluXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IGhhbmRsZUNsaWNrKGUuY3VycmVudFRhcmdldC5uYW1lKX0+XG4gICAgICAgICAgICAgIExvZyBpblxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8QXV0aGVudGljYXRpb25Nb2RhbCBzaG93PXtzaG93fSBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2V9IHR5cGU9e2F1dGhlbnRpY2F0aW9ufT48L0F1dGhlbnRpY2F0aW9uTW9kYWw+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz4gXG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgWW91ciBvd24gYmxvZyBpbiBzZWNvbmRzLlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwiQnV0dG9uIiwiQ29sIiwiUm93IiwiQXV0aGVudGljYXRpb25Nb2RhbCIsIlJlYWN0IiwidXNlU3RhdGUiLCJIb21lIiwic2hvdyIsInNldFNob3ciLCJhdXRoZW50aWNhdGlvbiIsInNldEF1dGhlbnRpY2F0aW9uIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVDbGljayIsIm5hbWUiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJlIiwiY3VycmVudFRhcmdldCIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__1EcsU\",\n\t\"main\": \"Home_main__1x8gC\",\n\t\"footer\": \"Home_footer__1WdhD\",\n\t\"title\": \"Home_title__3DjR7\",\n\t\"description\": \"Home_description__17Z4F\",\n\t\"code\": \"Home_code__axx2Y\",\n\t\"grid\": \"Home_grid__2Ei2F\",\n\t\"card\": \"Home_card__2SdtB\",\n\t\"logo\": \"Home_logo__1YbrH\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXJlYWQvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2UwY2EiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfXzFFY3NVXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fMXg4Z0NcIixcblx0XCJmb290ZXJcIjogXCJIb21lX2Zvb3Rlcl9fMVdkaERcIixcblx0XCJ0aXRsZVwiOiBcIkhvbWVfdGl0bGVfXzNEalI3XCIsXG5cdFwiZGVzY3JpcHRpb25cIjogXCJIb21lX2Rlc2NyaXB0aW9uX18xN1o0RlwiLFxuXHRcImNvZGVcIjogXCJIb21lX2NvZGVfX2F4eDJZXCIsXG5cdFwiZ3JpZFwiOiBcIkhvbWVfZ3JpZF9fMkVpMkZcIixcblx0XCJjYXJkXCI6IFwiSG9tZV9jYXJkX18yU2R0QlwiLFxuXHRcImxvZ29cIjogXCJIb21lX2xvZ29fXzFZYnJIXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./node_modules/bootstrap/dist/css/bootstrap.min.css":
/*!***********************************************************!*\
  !*** ./node_modules/bootstrap/dist/css/bootstrap.min.css ***!
  \***********************************************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-bootstrap");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();