/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* Imports */\\r\\n\\r\\n/* Global */\\r\\n*,\\r\\n*::before,\\r\\n*::after {\\r\\n  padding: 0;\\r\\n  margin: 0;\\r\\n  box-sizing: inherit;\\r\\n}\\r\\n\\r\\nhtml {\\r\\n  box-sizing: border-box;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  background-color: rgba(240, 240, 240, 1);\\r\\n  font-family: Barlow, Arial, sans-serif;\\r\\n  color: rgba(50, 50, 50, 1);\\r\\n}\\r\\n\\r\\nbutton {\\r\\n  font-family: Barlow, Arial, sans-serif;\\r\\n  color: rgba(50, 50, 50, 1);\\r\\n  font-size: 1rem;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nh1 {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\np {\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\nform {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  border-bottom: 1px solid rgba(220, 220, 220, 1);\\r\\n}\\r\\n\\r\\nform i {\\r\\n  color: rgba(150, 150, 150, 1);\\r\\n  padding-right: 1.5rem;\\r\\n}\\r\\n\\r\\ninput {\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  font-size: 1rem;\\r\\n  color: rgba(50, 50, 50, 1);\\r\\n  background-color: transparent;\\r\\n}\\r\\n\\r\\ninput::placeholder {\\r\\n  font-style: italic;\\r\\n}\\r\\n\\r\\ninput:focus {\\r\\n  outline: none;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: none;\\r\\n}\\r\\n\\r\\n/* Main */\\r\\n.body {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  min-height: 100vh;\\r\\n}\\r\\n\\r\\n.hide {\\r\\n  display: none !important;\\r\\n}\\r\\n\\r\\n.todo-list-container {\\r\\n  width: 500px;\\r\\n  max-width: 500px;\\r\\n  background-color: white;\\r\\n  box-shadow: 0 0 30px rgba(150, 150, 150, 0.25);\\r\\n}\\r\\n\\r\\n.row {\\r\\n  display: flex;\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  padding: 1.5rem;\\r\\n  border-bottom: 1px solid rgba(220, 220, 220, 1);\\r\\n}\\r\\n\\r\\n.input-add-task {\\r\\n  padding: 1.5rem;\\r\\n}\\r\\n\\r\\n.todo-list i {\\r\\n  width: 20px;\\r\\n}\\r\\n\\r\\n.remove-button {\\r\\n  border: none;\\r\\n  height: 18px;\\r\\n}\\r\\n\\r\\n.button {\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  width: 100%;\\r\\n  border: none;\\r\\n  padding: 1.5rem;\\r\\n  border-bottom: 1px solid rgba(220, 220, 220, 1);\\r\\n  transition: background-color 500ms ease-out;\\r\\n}\\r\\n\\r\\n.button:active {\\r\\n  background-color: rgba(210, 210, 210, 1);\\r\\n}\\r\\n\\r\\n.font-awesome-icon {\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.checkbox {\\r\\n  width: fit-content;\\r\\n  margin-right: 1rem;\\r\\n}\\r\\n\\r\\n.strike-through {\\r\\n  text-decoration: line-through;\\r\\n  color: rgba(150, 150, 150, 1);\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://my-webpack-biolerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/add-elem.js */ \"./src/modules/add-elem.js\");\n/* harmony import */ var _modules_class_task_list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/class-task-list.js */ \"./src/modules/class-task-list.js\");\n/* harmony import */ var _modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/refresh-list.js */ \"./src/modules/refresh-list.js\");\n// ### 0. Imports\r\n\r\n\r\n\r\n\r\n\r\n// ### 1. Data\r\nconst taskList = new _modules_class_task_list_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\n// ### 2. DOM Manipulations\r\nconst mainContainer = document.querySelector('.todo-list-container');\r\n\r\n// 2.1. HTML skeleton\r\n// Header (Title and input)\r\nmainContainer.innerHTML = `<div class=\"row\">\r\n<h1>Today's To Do</h1>\r\n<i class=\"fa-solid fa-rotate fa-lg font-awesome-icon\"></i>\r\n</div>`;\r\nconst inputContainer = (0,_modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('form', [], mainContainer);\r\nconst inputText = (0,_modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('input', ['input-add-task'], inputContainer);\r\ninputText.setAttribute('placeholder', 'Add to your list...');\r\n(0,_modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('i', ['fa-solid', 'fa-arrow-right-to-bracket', 'fa-sm', 'font-awesome-icon'], inputContainer);\r\n// Main (list)\r\n// All of main's functionalities are handled by refreshList module\r\nconst listContainer = (0,_modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('div', [], mainContainer);\r\n// Bottom (button)\r\nconst clearButton = (0,_modules_add_elem_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('button', ['button'], mainContainer);\r\nclearButton.textContent = 'Clear all completed';\r\n\r\n// 2.1.1. Input functionalities\r\ninputContainer.onsubmit = (e) => {\r\n  e.preventDefault();\r\n  taskList.addTask(inputText.value);\r\n\r\n  inputContainer.reset();\r\n  (0,_modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskList, listContainer);\r\n};\r\n\r\n// 2.1.2. clear button\r\nclearButton.onclick = () => {\r\n  // console.log('clear');\r\n  taskList.clearCompleted();\r\n  (0,_modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskList, listContainer);\r\n};\r\n\r\n// On load\r\n(0,_modules_refresh_list_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(taskList, listContainer);\r\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/index.js?");

/***/ }),

/***/ "./src/modules/add-elem.js":
/*!*********************************!*\
  !*** ./src/modules/add-elem.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Shorthand function for creating a DOM element\r\n// elem = string, classes = array of string(s), parent = DOM element\r\nconst addElem = (elem, classes, parent) => {\r\n  const createdElem = document.createElement(elem);\r\n  if (classes !== undefined) {\r\n    classes.forEach((cl) => createdElem.classList.add(cl));\r\n  }\r\n  parent.appendChild(createdElem);\r\n\r\n  return createdElem;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addElem);\r\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/add-elem.js?");

/***/ }),

/***/ "./src/modules/class-task-list.js":
/*!****************************************!*\
  !*** ./src/modules/class-task-list.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ TaskList),\n/* harmony export */   \"storageName\": () => (/* binding */ storageName)\n/* harmony export */ });\n/* harmony import */ var _class_task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./class-task.js */ \"./src/modules/class-task.js\");\n/* harmony import */ var _local_storage_checker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-storage-checker.js */ \"./src/modules/local-storage-checker.js\");\n\n\n\nconst storageName = 'taskList';\n\nclass TaskList {\n  constructor() {\n    this.data = [];\n    this.id = 1;\n    this.initUpdate();\n  }\n\n  initUpdate() {\n    // If there's local data available,\n    if ((0,_local_storage_checker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('localStorage')) {\n      const data = JSON.parse(localStorage.getItem(storageName));\n      // and if it's not empty, update it\n      if (data && data.length !== 0) {\n        this.data = JSON.parse(localStorage.getItem(storageName));\n        // Update id according to the biggest one from storage\n        const lastItem = this.data.reduce((prev, current) => {\n          const val = prev.id > current.id ? prev : current;\n          return val;\n        });\n        this.id = lastItem.id + 1;\n      }\n    }\n  }\n\n  addTask(task) {\n    if (_local_storage_checker_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]) {\n      const taskObj = new _class_task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](task, this.id);\n\n      this.data.push(taskObj);\n      localStorage.setItem(storageName, JSON.stringify(this.data));\n\n      this.id += 1;\n    }\n  }\n\n  removeTask(taskID) {\n    this.data = this.data.filter((i) => i.id !== taskID);\n    this.resetIds();\n    localStorage.setItem(storageName, JSON.stringify(this.data));\n  }\n\n  updateStatus(taskID, status) {\n    this.data = this.data.map((obj) => {\n      if (obj.id === taskID) {\n        return { ...obj, completed: status };\n      }\n\n      return obj;\n    });\n    localStorage.setItem(storageName, JSON.stringify(this.data));\n  }\n\n  renameTask(taskID, newTask) {\n    this.data = this.data.map((obj) => {\n      if (obj.id === taskID) {\n        return { ...obj, description: newTask };\n      }\n\n      return obj;\n    });\n    localStorage.setItem(storageName, JSON.stringify(this.data));\n  }\n\n  clearCompleted() {\n    this.data = this.data.filter((i) => i.completed === false);\n    this.resetIds();\n    localStorage.setItem(storageName, JSON.stringify(this.data));\n  }\n\n  resetIds() {\n    let i = 1;\n    this.data.forEach((e) => {\n      e.id = i;\n      i += 1;\n    });\n    this.id = i;\n  }\n}\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/class-task-list.js?");

/***/ }),

/***/ "./src/modules/class-task.js":
/*!***********************************!*\
  !*** ./src/modules/class-task.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\r\n  constructor(_description, _id, _completed = false) {\r\n    this.description = _description;\r\n    this.id = _id;\r\n    this.completed = _completed;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/class-task.js?");

/***/ }),

/***/ "./src/modules/local-storage-checker.js":
/*!**********************************************!*\
  !*** ./src/modules/local-storage-checker.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Local storage checker from MDN\r\nconst isStorageAvailable = (type) => {\r\n  let storage;\r\n  try {\r\n    storage = window[type];\r\n    const x = '__storage_test__';\r\n    storage.setItem(x, x);\r\n    storage.removeItem(x);\r\n    return true;\r\n  } catch (e) {\r\n    return e instanceof DOMException && (\r\n      // 1) everything except Firefox\r\n      // 2) Firefox\r\n      // test name field too, because code might not be present\r\n      // 3) everything except Firefox\r\n      // 4) Firefox\r\n      // 5) acknowledge QuotaExceededError only if there's something already stored\r\n      e.code === 22 || e.code === 1014 || e.name === 'QuotaExceededError' || e.name === 'NS_ERROR_DOM_QUOTA_REACHED') && (storage && storage.length !== 0);\r\n  }\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isStorageAvailable);\r\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/local-storage-checker.js?");

/***/ }),

/***/ "./src/modules/refresh-list.js":
/*!*************************************!*\
  !*** ./src/modules/refresh-list.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _add_elem_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-elem.js */ \"./src/modules/add-elem.js\");\n/* harmony import */ var _class_task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./class-task.js */ \"./src/modules/class-task.js\");\n\r\n\r\n\r\n// Refresh/ update list\r\nconst refreshList = (_class, _container) => {\r\n  _container.innerHTML = '';\r\n\r\n  _class.data.forEach((e) => {\r\n    let isChecked;\r\n    let strikeThrough;\r\n    if (e.completed === true) {\r\n      isChecked = 'checked';\r\n      strikeThrough = 'strike-through';\r\n    }\r\n\r\n    const todoList = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', ['row', 'todo-list'], _container);\r\n    const listCheckBox = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', ['checkbox'], todoList);\r\n    listCheckBox.setAttribute('type', 'checkbox');\r\n    listCheckBox.setAttribute(isChecked, '');\r\n    const listText = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('input', ['list-text', strikeThrough], todoList);\r\n    listText.value = e.description;\r\n    const listIconDots = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', ['fa-solid', 'fa-ellipsis-vertical', 'fa-lg', 'font-awesome-icon'], todoList);\r\n    const removeButton = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', ['remove-button', 'hide'], todoList);\r\n    const listIconTrash = (0,_add_elem_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('i', ['fa-solid', 'fa-trash-can', 'fa-lg', 'font-awesome-icon'], removeButton);\r\n\r\n    // Event listeners\r\n    const elemID = e.id;\r\n    // Event listener for list appearance on click\r\n    document.body.addEventListener('click', () => {\r\n      if (listText === document.activeElement) {\r\n        listIconDots.classList.add('hide');\r\n        removeButton.classList.remove('hide');\r\n        todoList.style.backgroundColor = '#fffdcc';\r\n      } else {\r\n        listIconDots.classList.remove('hide');\r\n        removeButton.classList.add('hide');\r\n        todoList.style.backgroundColor = 'transparent';\r\n      }\r\n    });\r\n    // Event listener for remove button\r\n    removeButton.onclick = () => {\r\n      _class.removeTask(elemID);\r\n      refreshList(_class, _container);\r\n    };\r\n    // Event listener on checkbox (status change)\r\n    listCheckBox.addEventListener('click', () => {\r\n      _class.updateStatus(elemID, listCheckBox.checked);\r\n      refreshList(_class, _container);\r\n    });\r\n    // Event listener on list rename\r\n    listText.addEventListener('keypress', (e) => {\r\n      if (e.key === 'Enter') {\r\n        _class.renameTask(elemID, listText.value);\r\n        refreshList(_class, _container);\r\n      }\r\n    });\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (refreshList);\r\n\n\n//# sourceURL=webpack://my-webpack-biolerplate/./src/modules/refresh-list.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;