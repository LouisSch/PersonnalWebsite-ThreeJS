/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

/***/ }),

/***/ "./public/resources/scripts/Kernel.ts":
/*!********************************************!*\
  !*** ./public/resources/scripts/Kernel.ts ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**\n * @author Louis Schirra <louissch.off@gmail.com>\n */\n!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, Three) {\n    \"use strict\";\n    Object.defineProperty(exports, \"__esModule\", ({ value: true }));\n    var Kernel = /** @class */ (function () {\n        function Kernel() {\n            this.scene = new Three.Scene();\n            this.camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n            this.renderer = new Three.WebGLRenderer();\n            //this.controler = new OrbitControls(this.camera, this.renderer.domElement);\n        }\n        Kernel.prototype.start = function () {\n            this.initMainAnimation();\n        };\n        Kernel.prototype.initMainAnimation = function () {\n            this.renderer.setSize(window.innerWidth, window.innerHeight);\n            document.body.appendChild(this.renderer.domElement);\n            var meshFunc = function (u0, v0, target) {\n                var x = 40 * u0;\n                var z = 40 * v0;\n                var y = 2.45 * Math.sin(10 * (x ^ 2 + z ^ 2)) / 10;\n                target.set(x, y, z);\n            };\n            this.geometry = new Three.ParametricGeometry(meshFunc, 150, 150);\n            this.geometry.center();\n            var material = new Three.MeshBasicMaterial({ color: 0x2ce1c6, wireframe: true, side: Three.DoubleSide });\n            var fig = new Three.Mesh(this.geometry, material);\n            fig.rotateOnAxis(new Three.Vector3(1, 0, 0), -0.9);\n            this.scene.add(fig);\n            this.camera.position.set(0, 3, 0);\n            //this.controler.update();\n            this.animate();\n        };\n        Kernel.prototype.animate = function () {\n            var _this = this;\n            requestAnimationFrame(function () {\n                _this.animate();\n            });\n            this.geometry.rotateY(0.0005);\n            this.renderer.render(this.scene, this.camera);\n        };\n        return Kernel;\n    }());\n    exports.default = Kernel;\n    var kernel = new Kernel();\n    kernel.start();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n\n//# sourceURL=webpack://portfolio/./public/resources/scripts/Kernel.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./public/resources/scripts/Kernel.ts");
/******/ 	
/******/ })()
;