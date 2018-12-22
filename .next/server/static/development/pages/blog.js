module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer/Footer.js":
/*!*************************************!*\
  !*** ./components/Footer/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\components\\Footer\\Footer.js";




var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "iamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials and quick tips. You can find me elsewhere dribbble, twitter, behance and linkedin."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerPhoto, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "iamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials and quick tips. You can find me elsewhere dribbble, twitter, behance and linkedin."));
};

var ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__ContainerText",
  componentId: "sc-1ny8j1g-0"
})(["flex-basis:40%;text-align:justify;line-height:2rem;"]);
var ContainerPhoto = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__ContainerPhoto",
  componentId: "sc-1ny8j1g-1"
})(["flex-basis:40%;text-align:justify;line-height:2rem;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1ny8j1g-2"
})(["width:100%;height:auto;display:flex;align-items:center;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:#f7fbfb;"]);
/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Footer/index.js":
/*!************************************!*\
  !*** ./components/Footer/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./components/Footer/Footer.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Footer__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _globals_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/breakpoints */ "./globals/breakpoints.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\components\\Header\\Header.js";





var Header = function Header() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainerCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    to: "\\",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "mif")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "work")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "services")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "about")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
    href: "blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "blog")))));
};

var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-1hc63ty-0"
})(["width:100%;height:100px;display:flex;align-items:center;justify-content:space-between;padding:0 40px;box-sizing:border-box;position:fixed;z-index:200;font-family:Averta;"]);
var HeaderContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainerCenter",
  componentId: "sc-1hc63ty-1"
})(["width:1024px;height:100px;margin:auto;display:flex;align-items:center;justify-content:space-between;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1hc63ty-2"
})(["color:#ff7e6d;font-size:24px;font-weight:800;"]);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Header__Menu",
  componentId: "sc-1hc63ty-3"
})(["display:flex;"]);
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.li.withConfig({
  displayName: "Header__MenuItem",
  componentId: "sc-1hc63ty-4"
})(["list-style:none;color:#ff7e6d;margin-left:15px;font-size:18px;font-weight:800;cursor:pointer;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-1hc63ty-5"
})(["text-decoration:none;"]);
var LanguageSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__LanguageSwitcher",
  componentId: "sc-1hc63ty-6"
})(["color:#fff;font-size:20px;"]);
var SubMenuLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__SubMenuLink",
  componentId: "sc-1hc63ty-7"
})(["text-decoration:none;"]);
var SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__SubMenuItem",
  componentId: "sc-1hc63ty-8"
})(["list-style:none;color:#fff;font-size:10px;font-weight:800;padding:15px 20px;box-sizing:border-box;&:hover{background-color:#333;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Responsive/Assets/HomeSvg.js":
/*!*************************************************!*\
  !*** ./components/Responsive/Assets/HomeSvg.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\components\\Responsive\\Assets\\HomeSvg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgHome = function SvgHome(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 1000 1000"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M979.8 527.7L525.4 73.3c-3.6-3.6-7.8-6.3-12.3-8-12.7-5.2-27.8-2.7-38 7.6L20.2 527.7c-13.7 13.7-13.7 35.8 0 49.5s35.8 13.7 49.5 0L500 146.8l430.3 430.3c13.7 13.7 35.8 13.7 49.5 0 13.6-13.6 13.6-35.8 0-49.4z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M782.7 542.2c-19.3 0-35 15.7-35 35v290.2H252V577.2c0-19.3-15.7-35-35-35s-35 15.7-35 35v325.2c0 18.7 14.7 34 33.2 34.9h567.5c.7 0 1.4 0 2.1-.1 1.7-.1 3.4-.3 5-.6 5.4-1.1 10.4-3.5 14.6-6.8 1.1-.9 2.1-1.8 3.1-2.7.1-.1.2-.2.3-.4 1.1-1.1 2-2.2 3-3.4 1.7-2.2 3.1-4.7 4.2-7.3.1-.2.2-.4.2-.6.1-.4.3-.7.4-1.1.3-.8.5-1.6.8-2.4.2-.6.3-1.2.5-1.8.1-.3.2-.7.2-1.1.4-2.1.6-4.3.6-6.6V577.2c0-19.3-15.7-35-35-35z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgHome);

/***/ }),

/***/ "./components/Responsive/Footer.js":
/*!*****************************************!*\
  !*** ./components/Responsive/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Assets_HomeSvg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Assets/HomeSvg */ "./components/Responsive/Assets/HomeSvg.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\components\\Responsive\\Footer.js";





var Responsive = function Responsive() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Responsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Responsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Responsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Responsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Responsive, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_HomeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 40,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  })));
};

var ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__ContainerText",
  componentId: "sc-1u71pxo-0"
})(["display:flex;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1u71pxo-1"
})(["width:100%;display:flex;height:auto;align-items:bottom;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:tomato;"]);
/* harmony default export */ __webpack_exports__["default"] = (Responsive);

/***/ }),

/***/ "./globals/breakpoints.js":
/*!********************************!*\
  !*** ./globals/breakpoints.js ***!
  \********************************/
/*! exports provided: media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "media", function() { return media; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

var sizes = {
  desktop: 992,
  tablet: 768,
  phone: 576
}; // Iterate through the sizes and create a media template

var media = Object.keys(sizes).reduce(function (acc, label) {
  acc[label] = function () {
    return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["css"])(["@media (max-width:", "em){", "}"], sizes[label] / 16, styled_components__WEBPACK_IMPORTED_MODULE_0__["css"].apply(void 0, arguments));
  };

  return acc;
}, {});

/***/ }),

/***/ "./pages/Assets/Category.js":
/*!**********************************!*\
  !*** ./pages/Assets/Category.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\pages\\Assets\\Category.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgCategory = function SvgCategory(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 1000 1000"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M523.8 974.7L871 624.9s31.4-26.8 31.4-65.3V344.4l-42.3 24.3v116s2.3 40-47.1 85.9c-45.3 44.6-345.5 347-345.5 347l56.3 57.1zm98-643.5S690.9 29.7 828.3 25.4c135.8-4.2 164.9 100 161.4 165.5-4.1 78-80.7 136.6-129.6 145.7 0-39.3.2-55.2.2-55.2s80-21.6 80.3-92.3c.2-54.7-29.9-125.7-112.3-116.6-97.3 10.7-166.6 286-166.6 286l-14.5 14.6-25.4-41.9zM765.2 175h38.1v298.7c.9 25.4-29 56.5-29 56.5L332.4 971 10 643.2S403 249.7 446.5 206c30.8-31 50.7-31 50.7-31h230.5L675 309.2l5.6 26c2.2 10.2 1.4 27.6 1.4 27.6-5.4 22.4-25.4 39-49.3 39-28 0-51.9-24.1-51.9-52.2 0-14.4 15.9-44.1 40.2-49.1l14.9-49.1c-65.2 13.4-99.8 55.3-99.8 99.4 0 54.1 43.6 98 97.4 98 53.8 0 97.4-43.9 97.4-98-1.2-19.2-3-22.9-9.4-42.7-5.3-17.5 26.2-93.1 26.2-93.1l17.5-40z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCategory);

/***/ }),

/***/ "./pages/Assets/Svg.js":
/*!*****************************!*\
  !*** ./pages/Assets/Svg.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\pages\\Assets\\Svg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgCalendar = function SvgCalendar(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    height: 640,
    viewBox: "0 0 480 480",
    width: 640
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M399.832 54.398c-.062-.277-.23-.496-.312-.757a7.369 7.369 0 0 0-.536-1.297 7.668 7.668 0 0 0-.894-1.336 8.164 8.164 0 0 0-.914-.961 7.263 7.263 0 0 0-1.313-.879 8 8 0 0 0-1.246-.61 7.986 7.986 0 0 0-1.601-.328A8.133 8.133 0 0 0 392 48h-40.336C349.602 20.152 336.68 0 320 0s-29.602 20.152-31.664 48h-16.672C269.602 20.152 256.68 0 240 0s-29.602 20.152-31.664 48h-16.672C189.602 20.152 176.68 0 160 0s-29.602 20.152-31.664 48h-16.672C109.602 20.152 96.68 0 80 0S50.398 20.152 48.336 48H8a8 8 0 0 0-8 8v416a8 8 0 0 0 8 8h384a8 8 0 0 0 8-8v-24h72a8 8 0 0 0 7.832-9.602zM320 16c5.777 0 13.84 12.258 15.617 32h-31.203c1.746-19.742 9.809-32 15.586-32zm-80 0c5.777 0 13.84 12.258 15.617 32h-31.203c1.746-19.742 9.809-32 15.586-32zm-80 0c5.777 0 13.84 12.258 15.617 32h-31.203c1.746-19.742 9.809-32 15.586-32zm-80 0c5.777 0 13.84 12.258 15.617 32H64.414C66.16 28.258 74.223 16 80 16zM16 64h32.336C50.398 91.848 63.32 112 80 112a8 8 0 0 0 0-16c-5.777 0-13.84-12.258-15.617-32h63.953c2.09 27.848 14.984 48 31.664 48a8 8 0 0 0 0-16c-5.777 0-13.84-12.258-15.617-32h63.953c2.09 27.848 14.984 48 31.664 48a8 8 0 0 0 0-16c-5.777 0-13.84-12.258-15.617-32h63.953c2.09 27.848 14.984 48 31.664 48a8 8 0 0 0 0-16c-5.777 0-13.84-12.258-15.617-32H384v80H16zm368 400H16V160h368zm16-32V133.602L462.168 432zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M176 288h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M256 288h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M96 288H64a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32H72v-16h16zm0 0M176 368h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M256 368h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M96 368H64a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32H72v-16h16zm0 0M176 208h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M256 208h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M336 288h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M336 368h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M336 208h-32a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32h-16v-16h16zm0 0M96 208H64a8 8 0 0 0-8 8v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 0-8-8zm-8 32H72v-16h16zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgCalendar);

/***/ }),

/***/ "./pages/blog.js":
/*!***********************!*\
  !*** ./pages/blog.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _Assets_Svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Assets/Svg */ "./pages/Assets/Svg.js");
/* harmony import */ var _Assets_Category__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/Category */ "./pages/Assets/Category.js");
/* harmony import */ var _components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Responsive/Footer */ "./components/Responsive/Footer.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\pages\\blog.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin:0\n  }\n  body{\n    font-family:Averta\n  }\n  @font-face {\n    font-family: Averta;\n    src: url('../static/fonts/Averta.otf');\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Section, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContentDate, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Ul, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_Svg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 20,
    height: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "May 10th 2018")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Li, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_Category__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: 20,
    height: 20,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, "Design")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SectionContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, " ", "iamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, iamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andiamsteve is a blog written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials andthrough a mixture of in depth tutorials and quick tips. You can find me elsewhere dribbble, twitter, behance and", " ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }));
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__Container",
  componentId: "sc-1gx8z8c-0"
})(["width:100%;height:100vh;"]);
var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__SectionHeader",
  componentId: "sc-1gx8z8c-1"
})(["width:100%;height:90vh;padding-top:6rem;box-sizing:border-box;background-color:#eafaf6;"]);
var Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__Section",
  componentId: "sc-1gx8z8c-2"
})(["width:100%;height:auto;background-color:#fff;text-align:justify;font-size:1.2rem;padding:6rem 0 6rem 0;display:flex;line-height:2rem;align-items:center;box-sizing:border-box;"]);
var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__SectionContent",
  componentId: "sc-1gx8z8c-3"
})(["width:100%;height:auto;align-content:center;flex:0 0 55%;box-sizing:border-box;display:flex;"]);
var SectionContentDate = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__SectionContentDate",
  componentId: "sc-1gx8z8c-4"
})(["height:50%;padding-left:3rem;align-self:flex-start;flex:0 0 5%;color:#c0b3b9;text-align:justify;list-style:none;"]);
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul.withConfig({
  displayName: "blog__Ul",
  componentId: "sc-1gx8z8c-5"
})(["list-style:none;font-size:0.9rem;display:flex;flex-wrap:wrap;width:210px;"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li.withConfig({
  displayName: "blog__Li",
  componentId: "sc-1gx8z8c-6"
})(["flex:1 1 100%;display:flex;align-items:center;margin:0.4rem;position:relative;& > *{margin:0.2rem;}"]);
var SectionContentMessage = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__SectionContentMessage",
  componentId: "sc-1gx8z8c-7"
})(["height:50%;flex:1;padding:2rem 2rem 2rem 0;text-align:justify;"]);
var Form = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.form.withConfig({
  displayName: "blog__Form",
  componentId: "sc-1gx8z8c-8"
})(["display:flex;flex-wrap:wrap;"]);
var InputGroup = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "blog__InputGroup",
  componentId: "sc-1gx8z8c-9"
})(["width:100%;display:flex;flex-direction:column;"]);
var Input = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.input.withConfig({
  displayName: "blog__Input",
  componentId: "sc-1gx8z8c-10"
})(["flex:1;height:2.5rem;background:linear-gradient(to bottom,#ebe1e6,#fbf9fa 6px,#fff);box-shadow:inset 0 2px #c5b9c0,inset 0 0 0 2px #d4cbd0,0 2px 2px rgba(255,255,255,0.8);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;max-width:100%;color:#301d28;line-height:normal;width:100%;border-radius:0.3rem;font-size:1.1rem;padding-left:0.5rem;"]);
var Label = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.label.withConfig({
  displayName: "blog__Label",
  componentId: "sc-1gx8z8c-11"
})(["margin:1.2rem 0 0.8rem 0;font-weight:600;"]);
var Textarea = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.textarea.withConfig({
  displayName: "blog__Textarea",
  componentId: "sc-1gx8z8c-12"
})(["flex:1;padding:0.5rem 0 0 0.5rem;font-size:1.5rem;background:linear-gradient(to bottom,#ebe1e6,#fbf9fa 6px,#fff);box-shadow:inset 0 2px #c5b9c0,inset 0 0 0 2px #d4cbd0,0 2px 2px rgba(255,255,255,0.8);-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;outline:none;max-width:100%;color:#301d28;line-height:normal;width:100%;border-radius:0.3rem;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.button.withConfig({
  displayName: "blog__Button",
  componentId: "sc-1gx8z8c-13"
})(["user-select:none;-webkit-appearance:none;-moz-appearance:none;border:none;background-clip:padding-box;position:relative;cursor:pointer;line-height:normal;font-weight:700;display:inline-block;vertical-align:top;padding:14px 24px;border-radius:4px;color:currentcolor;font-size:18px !important;margin-top:1rem;outline:none;color:#543243;transition:all ease 0.2s;background-color:#ffdd74;box-shadow:inset 0 0 0 2px #dba758,0 1px 3px rgba(190,216,216,0.6);&:hover{background-color:#ffcc33;outline:none;box-shadow:inset 0 0 0 2px #dba758,1px 5px 10px rgba(190,216,216,1);}&:active{box-shadow:inset 0 0 0 2px #dba758,0px 3px 5px rgba(190,216,216,0.61);outline:none;background-color:#ffdd74;}"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ 4:
/*!*****************************!*\
  !*** multi ./pages/blog.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/blog.js */"./pages/blog.js");


/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=blog.js.map