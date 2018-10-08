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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add_button\", function() { return add_button; });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./Todolist/list.js\");\n\r\nconst btn = document.querySelector('.form_button');\r\n\r\nconst add_button = () => { btn.addEventListener('click', () => {\r\n    Object(_list_js__WEBPACK_IMPORTED_MODULE_0__[\"createListItem\"])(\"\");\r\n}, false);\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Ub2RvbGlzdC9idXR0b25fYWRkLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVG9kb2xpc3QvYnV0dG9uX2FkZC5qcz9mZDNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlTGlzdEl0ZW19IGZyb20gXCIuL2xpc3QuanNcIjtcclxuY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvcm1fYnV0dG9uJyk7XHJcblxyXG5leHBvcnQgY29uc3QgYWRkX2J1dHRvbiA9ICgpID0+IHsgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgY3JlYXRlTGlzdEl0ZW0oXCJcIik7XHJcbn0sIGZhbHNlKTtcclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./Todolist/button_add.js\n");

/***/ }),

/***/ "./Todolist/buttons.js":
/*!*****************************!*\
  !*** ./Todolist/buttons.js ***!
  \*****************************/
/*! exports provided: show_button, hide_button */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"show_button\", function() { return show_button; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hide_button\", function() { return hide_button; });\nconst hide_but = document.querySelector(\".hide_button\");\r\nconst show_but = document.querySelector(\".show_button\");\r\n\r\nconst show_button = () => { show_but.addEventListener('click', () => {\r\n    for(let i = 1; i < ul_checked.childNodes.length; i++){\r\n        ul_checked.childNodes[i].style.visibility = 'visible';\r\n    }\r\n    bool_hid_button = true;\r\n    show_but.style.visibility = 'hidden';\r\n    hide_but.style.visibility = 'visible';\r\n}, false);\r\n}\r\n\r\nconst hide_button = () => { hide_but.addEventListener('click', () => {\r\n    for(let i = 1; i < ul_checked.childNodes.length; i++){\r\n        ul_checked.childNodes[i].style.visibility = 'hidden';\r\n    }\r\n    bool_hid_button = false; \r\n    show_but.style.visibility = 'visible';\r\n    hide_but.style.visibility = 'hidden';\r\n}, false);\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Ub2RvbGlzdC9idXR0b25zLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVG9kb2xpc3QvYnV0dG9ucy5qcz9kMDZiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhpZGVfYnV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oaWRlX2J1dHRvblwiKTtcclxuY29uc3Qgc2hvd19idXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNob3dfYnV0dG9uXCIpO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNob3dfYnV0dG9uID0gKCkgPT4geyBzaG93X2J1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCB1bF9jaGVja2VkLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHVsX2NoZWNrZWQuY2hpbGROb2Rlc1tpXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG4gICAgYm9vbF9oaWRfYnV0dG9uID0gdHJ1ZTtcclxuICAgIHNob3dfYnV0LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGhpZGVfYnV0LnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbn0sIGZhbHNlKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhpZGVfYnV0dG9uID0gKCkgPT4geyBoaWRlX2J1dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCB1bF9jaGVja2VkLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgIHVsX2NoZWNrZWQuY2hpbGROb2Rlc1tpXS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB9XHJcbiAgICBib29sX2hpZF9idXR0b24gPSBmYWxzZTsgXHJcbiAgICBzaG93X2J1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgaGlkZV9idXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG59LCBmYWxzZSk7XHJcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Todolist/buttons.js\n");

/***/ }),

/***/ "./Todolist/index.js":
/*!***************************!*\
  !*** ./Todolist/index.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _button_add_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button_add.js */ \"./Todolist/button_add.js\");\n/* harmony import */ var _buttons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons.js */ \"./Todolist/buttons.js\");\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ \"./Todolist/list.js\");\n\r\n\r\n\r\n/*\r\nvar array = [\r\n    \"This is a list item\",\r\n    \"Another list item\",\r\n    \"Yup, another item\",\r\n    \"Another list item2\",\r\n    \"This is blablabla\"\r\n];\r\n*/\r\nwindow.addEventListener('load', () => {\r\n    Object(_button_add_js__WEBPACK_IMPORTED_MODULE_0__[\"add_button\"])();\r\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_1__[\"hide_button\"])();\r\n    Object(_buttons_js__WEBPACK_IMPORTED_MODULE_1__[\"show_button\"])();\r\n\r\n    /*\r\n    for(let i = 0; i < array.length; i++){\r\n        createListItem(array[i]);\r\n    }\r\n    */\r\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Ub2RvbGlzdC9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL1RvZG9saXN0L2luZGV4LmpzP2UyN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthZGRfYnV0dG9ufSBmcm9tIFwiLi9idXR0b25fYWRkLmpzXCI7XHJcbmltcG9ydCB7aGlkZV9idXR0b24sIHNob3dfYnV0dG9ufSAgZnJvbSBcIi4vYnV0dG9ucy5qc1wiO1xyXG5pbXBvcnQge2NyZWF0ZUxpc3RJdGVtfSBmcm9tIFwiLi9saXN0LmpzXCJcclxuLypcclxudmFyIGFycmF5ID0gW1xyXG4gICAgXCJUaGlzIGlzIGEgbGlzdCBpdGVtXCIsXHJcbiAgICBcIkFub3RoZXIgbGlzdCBpdGVtXCIsXHJcbiAgICBcIll1cCwgYW5vdGhlciBpdGVtXCIsXHJcbiAgICBcIkFub3RoZXIgbGlzdCBpdGVtMlwiLFxyXG4gICAgXCJUaGlzIGlzIGJsYWJsYWJsYVwiXHJcbl07XHJcbiovXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgYWRkX2J1dHRvbigpO1xyXG4gICAgaGlkZV9idXR0b24oKTtcclxuICAgIHNob3dfYnV0dG9uKCk7XHJcblxyXG4gICAgLypcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgY3JlYXRlTGlzdEl0ZW0oYXJyYXlbaV0pO1xyXG4gICAgfVxyXG4gICAgKi9cclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Todolist/index.js\n");

/***/ }),

/***/ "./Todolist/list.js":
/*!**************************!*\
  !*** ./Todolist/list.js ***!
  \**************************/
/*! exports provided: createListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createListItem\", function() { return createListItem; });\nvar bool_hid_button = false;\r\nvar bool_checked = false;\r\n\r\nconst textBox = document.querySelector('.textBox');\r\nconst ul_checked = document.querySelector('.show_hide_buttons');\r\nconst ul_unchecked = document.querySelector('.check_elements_ul');\r\n\r\nconst createListItem = () => {(textp) => {\r\n    const item = document.createElement('li');\r\n    const label = document.createElement('label');\r\n    const input = document.createElement('input');\r\n    const span = document.createElement('span');\r\n    const p = document.createElement('p');\r\n    const delete_span = document.createElement('span');\r\n\r\n    item.setAttribute('class', 'checkbox_item_li');\r\n    label.setAttribute('class', 'radio');\r\n    input.setAttribute('class', 'checkbox_item_input');\r\n    input.setAttribute('type', 'checkbox');\r\n    span.setAttribute('class', 'check');\r\n    delete_span.setAttribute('class', 'delete_sp');\r\n\r\n    ul_unchecked.appendChild(item);\r\n    item.appendChild(label);\r\n    label.appendChild(delete_span);\r\n    label.appendChild(input);\r\n    label.appendChild(span);\r\n    label.appendChild(p);\r\n\r\n    if(textp != \"\")\r\n        p.innerHTML = textp;\r\n    else\r\n        p.innerHTML = textBox.value;\r\n    delete_span.innerHTML = '&times;';\r\n\r\n    delete_span.addEventListener('click', (event) => {\r\n        console.log(\"delete_span\");\r\n        item.remove();\r\n        if(ul_checked.childElementCount == 0){\r\n            hide_but.style.visibility = 'hidden';\r\n            show_but.style.visibility = 'hidden';\r\n            bool_hid_button = false;\r\n        }\r\n    }, false);\r\n\r\n    input.addEventListener('change', (event) => {\r\n        if(input.checked == true){\r\n            ul_checked.appendChild(item);\r\n            p.style.textDecoration = 'line-through';\r\n            p.style.opacity = '0.5';\r\n\r\n            if(!bool_hid_button){\r\n                show_but.style.visibility = 'visible';\r\n                item.style.visibility = \"hidden\";\r\n            }\r\n            else\r\n                item.style.visibility = \"visible\";\r\n        }\r\n        else{\r\n            ul_unchecked.appendChild(item);\r\n            item.style.visibility = \"visible\";\r\n            p.style.textDecoration = '';\r\n            p.style.opacity = '1';\r\n\r\n            if(ul_checked.childElementCount == 0){\r\n                hide_but.style.visibility = 'hidden';\r\n                show_but.style.visibility = 'hidden';\r\n                bool_hid_button = false;\r\n            }\r\n        }\r\n    }, false);\r\n}\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Ub2RvbGlzdC9saXN0LmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vVG9kb2xpc3QvbGlzdC5qcz9mMmYwIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBib29sX2hpZF9idXR0b24gPSBmYWxzZTtcclxudmFyIGJvb2xfY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuY29uc3QgdGV4dEJveCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50ZXh0Qm94Jyk7XHJcbmNvbnN0IHVsX2NoZWNrZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hvd19oaWRlX2J1dHRvbnMnKTtcclxuY29uc3QgdWxfdW5jaGVja2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoZWNrX2VsZW1lbnRzX3VsJyk7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTGlzdEl0ZW0gPSAoKSA9PiB7KHRleHRwKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY29uc3QgZGVsZXRlX3NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcblxyXG4gICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NoZWNrYm94X2l0ZW1fbGknKTtcclxuICAgIGxhYmVsLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAncmFkaW8nKTtcclxuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2tib3hfaXRlbV9pbnB1dCcpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICBzcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnY2hlY2snKTtcclxuICAgIGRlbGV0ZV9zcGFuLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnZGVsZXRlX3NwJyk7XHJcblxyXG4gICAgdWxfdW5jaGVja2VkLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgaXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChkZWxldGVfc3Bhbik7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICBsYWJlbC5hcHBlbmRDaGlsZChzcGFuKTtcclxuICAgIGxhYmVsLmFwcGVuZENoaWxkKHApO1xyXG5cclxuICAgIGlmKHRleHRwICE9IFwiXCIpXHJcbiAgICAgICAgcC5pbm5lckhUTUwgPSB0ZXh0cDtcclxuICAgIGVsc2VcclxuICAgICAgICBwLmlubmVySFRNTCA9IHRleHRCb3gudmFsdWU7XHJcbiAgICBkZWxldGVfc3Bhbi5pbm5lckhUTUwgPSAnJnRpbWVzOyc7XHJcblxyXG4gICAgZGVsZXRlX3NwYW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0ZV9zcGFuXCIpO1xyXG4gICAgICAgIGl0ZW0ucmVtb3ZlKCk7XHJcbiAgICAgICAgaWYodWxfY2hlY2tlZC5jaGlsZEVsZW1lbnRDb3VudCA9PSAwKXtcclxuICAgICAgICAgICAgaGlkZV9idXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICBzaG93X2J1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIGJvb2xfaGlkX2J1dHRvbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sIGZhbHNlKTtcclxuXHJcbiAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICBpZihpbnB1dC5jaGVja2VkID09IHRydWUpe1xyXG4gICAgICAgICAgICB1bF9jaGVja2VkLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICBwLnN0eWxlLnRleHREZWNvcmF0aW9uID0gJ2xpbmUtdGhyb3VnaCc7XHJcbiAgICAgICAgICAgIHAuc3R5bGUub3BhY2l0eSA9ICcwLjUnO1xyXG5cclxuICAgICAgICAgICAgaWYoIWJvb2xfaGlkX2J1dHRvbil7XHJcbiAgICAgICAgICAgICAgICBzaG93X2J1dC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBpdGVtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdWxfdW5jaGVja2VkLmFwcGVuZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgICAgICBpdGVtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgICAgICAgICAgcC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICBwLnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcblxyXG4gICAgICAgICAgICBpZih1bF9jaGVja2VkLmNoaWxkRWxlbWVudENvdW50ID09IDApe1xyXG4gICAgICAgICAgICAgICAgaGlkZV9idXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgc2hvd19idXQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAgICAgICAgICAgYm9vbF9oaWRfYnV0dG9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LCBmYWxzZSk7XHJcbn1cclxufVxyXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Todolist/list.js\n");

/***/ })

/******/ });