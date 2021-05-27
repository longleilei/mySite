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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_textRotate_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/textRotate.js */ \"./src/js/textRotate.js\");\n/* harmony import */ var _js_textRotate_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_textRotate_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_scrollMenuService_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/scrollMenuService.js */ \"./src/js/scrollMenuService.js\");\n/* harmony import */ var _js_ProgressBars_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/ProgressBars.js */ \"./src/js/ProgressBars.js\");\n/* harmony import */ var _js_BarChart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/BarChart.js */ \"./src/js/BarChart.js\");\n\n\n\n\n // ADD/DELETE RESUME NAV WHEN SCROLLING\n\nvar menuEl = document.querySelector('.resume-nav');\nvar mainResumeEl = document.querySelector('.resume-main');\nvar contactEl = document.querySelector('.contact-me-title');\nvar footerEl = document.querySelector('footer');\nvar barStatusEl = document.querySelector('#barStatus');\nvar navTitleAll = document.querySelectorAll('.resume-nav-title');\nvar navTitle = document.querySelectorAll('.resume-nav-title a');\nvar scrollMenu = new _js_scrollMenuService_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n  menuEl: menuEl,\n  mainResumeEl: mainResumeEl,\n  footerEl: footerEl\n});\nvar barElems = [document.getElementById('barStatus-photoshop'), document.getElementById('barStatus-buffer'), document.getElementById('barStatus-writing'), document.getElementById('barStatus-chinese')];\nvar otherSkills = document.querySelector('.other-skills');\nvar showProgress = new _js_ProgressBars_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](barElems, otherSkills);\nvar showBarChart = new _js_BarChart_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\n/* navTitle.forEach((e)=>{ */\n\nmenuEl.addEventListener('click', function (e) {\n  e.preventDefault();\n  var eduEl = mainResumeEl.querySelector('#education'),\n      expEl = mainResumeEl.querySelector('#experience'),\n      scillsEl = mainResumeEl.querySelector('#skills'),\n      contactsEl = mainResumeEl.querySelector('#contact');\n  var target = e.target.hash;\n  var height = 0;\n\n  switch (target) {\n    case \"#education\":\n      height = eduEl.offsetTop;\n      break;\n\n    case \"#experience\":\n      height = expEl.offsetTop;\n      break;\n\n    case \"#skills\":\n      height = scillsEl.offsetTop;\n      break;\n\n    case \"#contact\":\n      height = contactsEl.offsetTop;\n      break;\n\n    default:\n      break;\n  }\n\n  window.scroll({\n    top: height + 10,\n    behavior: 'smooth'\n  });\n  /*   } ) */\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/js/BarChart.js":
/*!****************************!*\
  !*** ./src/js/BarChart.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar BarChart = function BarChart() {\n  _classCallCheck(this, BarChart);\n\n  var skills = ['HTML', 'CSS', 'SASS', 'Python', 'Javascript', 'ES6', 'Visualization', 'Machine Learning', 'Node-Red'];\n  var grades = [80, 70, 55, 30, 50, 50, 20, 25, 45];\n  var margin = {\n    top: 10,\n    right: 10,\n    bottom: 10,\n    left: 10\n  };\n  var svgHeight = 420 - margin.top - margin.bottom;\n  var svgWidth = window.innerWidth * 0.75 - margin.left - margin.right;\n  var barSpacing = 3;\n  var totalBarWidth = svgWidth / grades.length / 1.3;\n  var barWidth = totalBarWidth - barSpacing;\n  var svg = d3.select('svg').attr('width', svgWidth).attr('transform', 'translate(20,0)').attr('height', svgHeight + 200);\n  var scale = d3.scaleLinear().domain([0, d3.max(grades)]).range([0, svgHeight]);\n  var rainbow = d3.scaleSequential(d3.interpolateRainbow).domain([0, 10]);\n  var x = d3.scaleBand().domain(skills).range([0, svgWidth * 0.8]).paddingInner(0.1);\n  var y = d3.scaleLinear().domain([0, d3.max(grades)]).range([svgHeight, 0]);\n  var xAxis = d3.axisBottom(x);\n  var yAxis = d3.axisLeft().scale(y);\n  var chartGroup = svg.append('g').attr('transform', 'translate(30,' + margin.top + ')');\n  var barchart = chartGroup.selectAll('rect').data(grades).enter().append('rect').attr('fill', function (d, i) {\n    return rainbow(i);\n  }).attr('y', function (d) {\n    return svgHeight - scale(d);\n  }).attr('height', function (d) {\n    return scale(d);\n  }).attr('width', barWidth).attr('transform', function (d, i) {\n    var translateT = [totalBarWidth * i + 20, 0];\n    return \"translate(\".concat(translateT, \")\");\n  }).on('mousemove', function () {\n    this.style.fill = 'yellow';\n  }).on('mouseout', function (d, i) {\n    this.style.fill = rainbow(i);\n  });\n  ;\n  chartGroup.append('g').attr('class', 'x axis hidden').attr('transform', 'translate(0,410)').call(xAxis).selectAll('text').attr('y', 0).attr('x', 10).attr('dy', '.35em').attr('transform', 'rotate(45)').style('font', '16px Nouvelle Vague').style('fill', function (d, i) {\n    return rainbow(i);\n  }).style('text-anchor', 'start');\n  chartGroup.append('g').attr('class', 'y axis').text(\"tickValues\").call(yAxis);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\n\n//# sourceURL=webpack:///./src/js/BarChart.js?");

/***/ }),

/***/ "./src/js/ProgressBars.js":
/*!********************************!*\
  !*** ./src/js/ProgressBars.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ProgressBars =\n/*#__PURE__*/\nfunction () {\n  function ProgressBars(barElems, otherSkills) {\n    var _this = this;\n\n    _classCallCheck(this, ProgressBars);\n\n    this.barElems = barElems;\n    this.otherSkills = otherSkills;\n    document.addEventListener('scroll', function (e) {\n      if (document.documentElement.scrollTop > _this.otherSkills.offsetTop - 400 && document.documentElement.scrollTop < _this.otherSkills.offsetTop + _this.otherSkills.offsetHeight) {\n        _this.addHoverToBar();\n      } else {\n        _this.removeHoverFromBar();\n      }\n    });\n  }\n\n  _createClass(ProgressBars, [{\n    key: \"addHoverToBar\",\n    value: function addHoverToBar() {\n      this.barElems.forEach(function (element) {\n        element.classList.add('hover-now');\n      });\n    }\n  }, {\n    key: \"removeHoverFromBar\",\n    value: function removeHoverFromBar() {\n      this.barElems.forEach(function (element) {\n        element.classList.remove('hover-now');\n      });\n    }\n  }]);\n\n  return ProgressBars;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProgressBars);\n\n//# sourceURL=webpack:///./src/js/ProgressBars.js?");

/***/ }),

/***/ "./src/js/scrollMenuService.js":
/*!*************************************!*\
  !*** ./src/js/scrollMenuService.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar ScrollMenuService =\n/*#__PURE__*/\nfunction () {\n  function ScrollMenuService(_ref) {\n    var _this = this;\n\n    var menuEl = _ref.menuEl,\n        mainResumeEl = _ref.mainResumeEl,\n        footerEl = _ref.footerEl,\n        contactEl = _ref.contactEl;\n\n    _classCallCheck(this, ScrollMenuService);\n\n    this.elements = {\n      menuEl: menuEl,\n      mainResumeEl: mainResumeEl,\n      footerEl: footerEl,\n      contactEl: contactEl\n    };\n    document.addEventListener(\"scroll\", function (e) {\n      _this.menuEl;\n\n      if (document.documentElement.scrollTop > _this.elements.mainResumeEl.offsetTop - 50) {\n        _this.elements.menuEl.classList.add(\"visible\");\n\n        _this.changeMenuItems({\n          scrollTop: document.documentElement.scrollTop\n        });\n      }\n\n      if (document.documentElement.scrollTop < _this.elements.mainResumeEl.offsetTop - 50) {\n        _this.elements.menuEl.classList.remove(\"visible\");\n      }\n      /*if (document.documentElement.scrollTop > this.elements.contactEl.offsetTop-50){\n          this.elements.menuEl.classList.add(\"visible\");\n      } */\n\n\n      if (document.documentElement.scrollTop > _this.elements.footerEl.offsetTop - 250) {\n        _this.elements.menuEl.classList.remove(\"visible\");\n      }\n    });\n  }\n\n  _createClass(ScrollMenuService, [{\n    key: \"changeMenuItems\",\n    value: function changeMenuItems(_ref2) {\n      var scrollTop = _ref2.scrollTop;\n      //a href\n      var eduEl = this.elements.mainResumeEl.querySelector('#education'),\n          expEl = this.elements.mainResumeEl.querySelector('#experience'),\n          scillsEl = this.elements.mainResumeEl.querySelector('#skills'),\n          contactsEl = this.elements.mainResumeEl.querySelector('#contact'); //div resume-nav-title edu\n\n      var menuItems = {\n        edu: this.elements.menuEl.querySelector(\".edu\"),\n        exp: this.elements.menuEl.querySelector(\".exp\"),\n        skills: this.elements.menuEl.querySelector(\".skills\"),\n        contact: this.elements.menuEl.querySelector(\".contact\")\n      };\n      var allItems = this.elements.menuEl.querySelectorAll(\".resume-nav-title\");\n\n      switch (true) {\n        case scrollTop >= eduEl.offsetTop && scrollTop < eduEl.offsetTop + eduEl.offsetHeight:\n          var _iteratorNormalCompletion = true;\n          var _didIteratorError = false;\n          var _iteratorError = undefined;\n\n          try {\n            for (var _iterator = allItems[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n              var item = _step.value;\n              item.classList.remove(\"visible-now\");\n            }\n          } catch (err) {\n            _didIteratorError = true;\n            _iteratorError = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n                _iterator[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError) {\n                throw _iteratorError;\n              }\n            }\n          }\n\n          menuItems.edu.classList.add(\"visible-now\");\n          break;\n\n        case scrollTop >= expEl.offsetTop && scrollTop < expEl.offsetTop + expEl.offsetHeight:\n          var _iteratorNormalCompletion2 = true;\n          var _didIteratorError2 = false;\n          var _iteratorError2 = undefined;\n\n          try {\n            for (var _iterator2 = allItems[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n              var _item = _step2.value;\n\n              _item.classList.remove(\"visible-now\");\n            }\n          } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                _iterator2[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError2) {\n                throw _iteratorError2;\n              }\n            }\n          }\n\n          menuItems.exp.classList.add(\"visible-now\");\n          break;\n\n        case scrollTop >= scillsEl.offsetTop && scrollTop < scillsEl.offsetTop + scillsEl.offsetHeight:\n          var _iteratorNormalCompletion3 = true;\n          var _didIteratorError3 = false;\n          var _iteratorError3 = undefined;\n\n          try {\n            for (var _iterator3 = allItems[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {\n              var _item2 = _step3.value;\n\n              _item2.classList.remove(\"visible-now\");\n            }\n          } catch (err) {\n            _didIteratorError3 = true;\n            _iteratorError3 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion3 && _iterator3[\"return\"] != null) {\n                _iterator3[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError3) {\n                throw _iteratorError3;\n              }\n            }\n          }\n\n          menuItems.skills.classList.add(\"visible-now\");\n          break;\n\n        case scrollTop >= contactsEl.offsetTop && scrollTop < contactsEl.offsetTop + contactsEl.offsetHeight:\n          var _iteratorNormalCompletion4 = true;\n          var _didIteratorError4 = false;\n          var _iteratorError4 = undefined;\n\n          try {\n            for (var _iterator4 = allItems[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {\n              var _item3 = _step4.value;\n\n              _item3.classList.remove(\"visible-now\");\n            }\n          } catch (err) {\n            _didIteratorError4 = true;\n            _iteratorError4 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion4 && _iterator4[\"return\"] != null) {\n                _iterator4[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError4) {\n                throw _iteratorError4;\n              }\n            }\n          }\n\n          menuItems.contact.classList.add(\"visible-now\");\n          break;\n      }\n    }\n  }]);\n\n  return ScrollMenuService;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ScrollMenuService);\n\n//# sourceURL=webpack:///./src/js/scrollMenuService.js?");

/***/ }),

/***/ "./src/js/textRotate.js":
/*!******************************!*\
  !*** ./src/js/textRotate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//class TextRotate(){\n//constructor(){\nvar TxtRotate = function TxtRotate(el, toRotate, period) {\n  this.toRotate = toRotate;\n  this.el = el;\n  this.loopNum = 0;\n  this.period = parseInt(period, 10) || 2000;\n  this.txt = '';\n  this.tick();\n  this.isDeleting = false;\n};\n\nTxtRotate.prototype.tick = function () {\n  var i = this.loopNum % this.toRotate.length;\n  var fullTxt = this.toRotate[i];\n\n  if (this.isDeleting) {\n    this.txt = fullTxt.substring(0, this.txt.length - 1);\n  } else {\n    this.txt = fullTxt.substring(0, this.txt.length + 1);\n  }\n\n  this.el.innerHTML = '<span class=\"wrap\">' + this.txt + '</span>';\n  var that = this;\n  var delta = 300 - Math.random() * 100;\n\n  if (this.isDeleting) {\n    delta /= 2;\n  }\n\n  if (!this.isDeleting && this.txt === fullTxt) {\n    delta = this.period;\n    this.isDeleting = true;\n  } else if (this.isDeleting && this.txt === '') {\n    this.isDeleting = false;\n    this.loopNum++;\n    delta = 500;\n  }\n\n  setTimeout(function () {\n    that.tick();\n  }, delta);\n};\n\nwindow.onload = function () {\n  var elements = document.getElementsByClassName('txt-rotate');\n\n  for (var i = 0; i < elements.length; i++) {\n    var toRotate = elements[i].getAttribute('data-rotate');\n    var period = elements[i].getAttribute('data-period');\n\n    if (toRotate) {\n      new TxtRotate(elements[i], JSON.parse(toRotate), period);\n    }\n  } // INJECT CSS\n\n\n  var css = document.createElement(\"style\");\n  css.type = \"text/css\";\n  css.innerHTML = \".txt-rotate > .wrap { border-right: 0.08em solid #666 }\";\n  document.body.appendChild(css);\n}; //export default TextRotate;\n\n//# sourceURL=webpack:///./src/js/textRotate.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });