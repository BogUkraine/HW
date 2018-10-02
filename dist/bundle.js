/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Todolist/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Todolist/button_add.js":
/*!********************************!*\
  !*** ./Todolist/button_add.js ***!
  \********************************/
/*! exports provided: add_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_button\", function() { return add_button; });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./Todolist/list.js\");\n\r\nconst btn = document.querySelector('.form_button');\r\n\r\nconst add_button = btn.addEventListener('click', () => {\r\n    Object(_list_js__WEBPACK_IMPORTED_MODULE_0__[\"createListItem\"])(\"\");\r\n}, false);\n\n//# sourceURL=webpack:///./Todolist/button_add.js?");

/***/ }),

/***/ "./Todolist/buttons.js":
/*!*****************************!*\
  !*** ./Todolist/buttons.js ***!
  \*****************************/
/*! exports provided: hide_button, show_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide_button\", function() { return hide_button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show_button\", function() { return show_button; });\nconst hide_but = document.querySelector(\".hide_button\");\r\nconst show_but = document.querySelector(\".show_button\");\r\n\r\nconst show_button = show_but.addEventListener('click', () => {\r\n    for(let i = 1; i < ul_checked.childNodes.length; i++){\r\n        ul_checked.childNodes[i].style.visibility = 'visible';\r\n    }\r\n    bool_hid_button = true;\r\n    show_but.style.visibility = 'hidden';\r\n    hide_but.style.visibility = 'visible';\r\n}, false);\r\n\r\nconst hide_button = hide_but.addEventListener('click', () => {\r\n    for(let i = 1; i < ul_checked.childNodes.length; i++){\r\n        ul_checked.childNodes[i].style.visibility = 'hidden';\r\n    }\r\n    bool_hid_button = false;\r\n    show_but.style.visibility = 'visible';\r\n    hide_but.style.visibility = 'hidden';\r\n}, false);\r\n\r\n\n\n//# sourceURL=webpack:///./Todolist/buttons.js?");

/***/ }),

/***/ "./Todolist/index.js":
/*!***************************!*\
  !*** ./Todolist/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button_add.js */ \"./Todolist/button_add.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.js */ \"./Todolist/buttons.js\");\n\r\n\r\n\r\nvar array = [\r\n    \"This is a list item\",\r\n    \"Another list item\",\r\n    \"Yup, another item\",\r\n    \"Another list item2\",\r\n    \"This is blablabla\"\r\n];\r\n\r\nwindow.addEventListener('load', () => {\r\n    Object(_button_add_js__WEBPACK_IMPORTED_MODULE_0__[\"add_button\"])();\r\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_1__[\"hide_button\"])();\r\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_1__[\"show_button\"])();\r\n\r\n    for(let i = 0; i < array.length; i++){\r\n        createListItem(array[i]);\r\n    }\r\n});\n\n//# sourceURL=webpack:///./Todolist/index.js?");

/***/ }),

/***/ "./Todolist/list.js":
/*!**************************!*\
  !*** ./Todolist/list.js ***!
  \**************************/
/*! exports provided: createListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListItem\", function() { return createListItem; });\nvar bool_hid_button = false;\r\nvar bool_checked = false;\r\n\r\nconst textBox = document.querySelector('.textBox');\r\nconst ul_checked = document.querySelector('.show_hide_buttons');\r\nconst ul_unchecked = document.querySelector('.check_elements_ul');\r\n\r\nconst createListItem = (textp) => {\r\n    const item = document.createElement('li');\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n    const span = document.createElement('span');\r\n    const p = document.createElement('p');\r\n    const delete_span = document.createElement('span');\r\n\r\n    item.setAttribute('class', 'checkbox_item_li');\r\n    label.setAttribute('class', 'radio');\r\n    input.setAttribute('class', 'checkbox_item_input');\r\n    input.setAttribute('type', 'checkbox');\r\n    span.setAttribute('class', 'check');\r\n    delete_span.setAttribute('class', 'delete_sp');\r\n\r\n    ul_unchecked.appendChild(item);\r\n    item.appendChild(label);\r\n    label.appendChild(delete_span);\r\n    label.appendChild(input);\r\n    label.appendChild(span);\r\n    label.appendChild(p);\r\n\r\n    if(textp != \"\")\r\n        p.innerHTML = textp;\r\n    else\r\n        p.innerHTML = textBox.value;\r\n    delete_span.innerHTML = '&times;';\r\n\r\n    delete_span.addEventListener('click', (event) => {\r\n        console.log(\"delete_span\");\r\n        item.remove();\r\n        if(ul_checked.childElementCount == 0){\r\n            hide_but.style.visibility = 'hidden';\r\n            show_but.style.visibility = 'hidden';\r\n            bool_hid_button = false;\r\n        }\r\n    }, false);\r\n\r\n    input.addEventListener('change', (event) => {\r\n        if(input.checked == true){\r\n            ul_checked.appendChild(item);\r\n            p.style.textDecoration = 'line-through';\r\n            p.style.opacity = '0.5';\r\n\r\n            if(!bool_hid_button){\r\n                show_but.style.visibility = 'visible';\r\n                item.style.visibility = \"hidden\";\r\n            }\r\n            else\r\n                item.style.visibility = \"visible\";\r\n        }\r\n        else{\r\n            ul_unchecked.appendChild(item);\r\n            item.style.visibility = \"visible\";\r\n            p.style.textDecoration = '';\r\n            p.style.opacity = '1';\r\n\r\n            if(ul_checked.childElementCount == 0){\r\n                hide_but.style.visibility = 'hidden';\r\n                show_but.style.visibility = 'hidden';\r\n                bool_hid_button = false;\r\n            }\r\n        }\r\n    }, false);\r\n}\r\n\n\n//# sourceURL=webpack:///./Todolist/list.js?");

/***/ })

/******/ });