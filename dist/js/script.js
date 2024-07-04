/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/filter */ \"./src/js/modules/filter.js\");\n/* harmony import */ var _modules_galery_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/galery-video */ \"./src/js/modules/galery-video.js\");\n// import calcScroll from './modules/calcScroll';\r\n// import scrollUp from './modules/scrollUp';\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n'use stricti';\r\n\r\n(0,_modules_filter__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_galery_video__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n// scrollUp();\r\n// calcScroll();\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/filter.js":
/*!**********************************!*\
  !*** ./src/js/modules/filter.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst filter = () => {\r\n    const btns = document.querySelectorAll('.galery__filter-list'),\r\n          items = document.querySelectorAll('.galery__filter-item');\r\n\r\n    btns.forEach((btn, i) => {\r\n        btn.addEventListener('click', () => {\r\n            clearContent();\r\n            btn.classList.add('galery__filter-list_active');\r\n            if (i == 0) {\r\n                items.forEach(item => item.style.display = 'block');\r\n            }\r\n            items.forEach(item => {\r\n                if (item.dataset.order == i) {\r\n                    item.style.display = 'block';\r\n                }\r\n            })\r\n        })\r\n    })\r\n    \r\n    function clearContent() {\r\n        items.forEach(item => item.style.display = 'none');\r\n        btns.forEach(item => item.classList.remove('galery__filter-list_active'));\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (filter);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/filter.js?");

/***/ }),

/***/ "./src/js/modules/galery-video.js":
/*!****************************************!*\
  !*** ./src/js/modules/galery-video.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nconst galeryVideo = () => {\r\n    const trigger = document.querySelector('.galery__play-btn'),\r\n          overlay = document.querySelector('.galery__overlay'),\r\n          closeBtn = document.querySelector('.galery__video-close');\r\n\r\n    const tag = document.createElement('script');\r\n    let player;\r\n\r\n    tag.src = \"https://www.youtube.com/iframe_api\";\r\n    const firstScriptTag = document.getElementsByTagName('script')[0];\r\n    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);\r\n\r\n    function createPlayer() {\r\n        player = new YT.Player('player', {\r\n            height: '100%',\r\n            width: '100%',\r\n            videoId: 'LFDaKUHgK7E'\r\n        });\r\n\r\n        overlay.style.display = 'flex';\r\n    }\r\n\r\n    \r\n    trigger.addEventListener('click', () => {\r\n        if (document.querySelector('iframe#player')) {\r\n            overlay.style.display = 'flex';\r\n        } else {\r\n            createPlayer();\r\n        }\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        closeWindow();\r\n    });\r\n\r\n    overlay.addEventListener('click', (e) => {\r\n        if (e.target === overlay) {\r\n            closeWindow();\r\n        }\r\n    });\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n        if (e.code === 'Escape' && overlay.style.display === 'flex') {\r\n            closeWindow();\r\n        }\r\n    })\r\n\r\n    function closeWindow() {\r\n        overlay.style.display = 'none';\r\n        player.stopVideo();\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (galeryVideo);\n\n//# sourceURL=webpack://gulp-start/./src/js/modules/galery-video.js?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;