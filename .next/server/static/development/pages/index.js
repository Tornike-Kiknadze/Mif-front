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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

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

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/Header.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/PostItem/PostItem.js":
/*!*****************************************!*\
  !*** ./components/PostItem/PostItem.js ***!
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
/* harmony import */ var _globals_breakpoints__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globals/breakpoints */ "./globals/breakpoints.js");
/* harmony import */ var _static_svg_Dash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/svg/Dash */ "./static/svg/Dash.js");
/* harmony import */ var _static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svg/RightArrow */ "./static/svg/RightArrow.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\components\\PostItem\\PostItem.js";







var PostItem = function PostItem() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Top, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "1"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Time, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "May 10th 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dashes, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Dash__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Tips for using colour effectively in web illustration "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "Finding and settling on a way to use colour within your illustrations is a fun challenge. Once you do, it becomes much easier going forward to make your illustrations. In this post, I\u2019ll share the things I have found worked for me."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "Design"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Dash__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContinueReading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, " Continue Reading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 15,
    height: 15,
    fill: "#27cba4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }))))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Container",
  componentId: "t83s2k-0"
})(["flex:1 0 350px;max-width:388px;height:auto;margin:10px;"]);
var Top = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Top",
  componentId: "t83s2k-1"
})(["width:100%;height:300px;background-image:url(\"../../static/img/Selection_003.jpg\");background-size:cover;background-repeat:no-repeat;border-radius:10px;"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Date",
  componentId: "t83s2k-2"
})(["width:100%;height:20px;display:flex;align-items:center;margin-top:30px;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Time",
  componentId: "t83s2k-3"
})(["color:#543243;font-weight:800;"]);
var Dashes = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Dashes",
  componentId: "t83s2k-4"
})(["display:flex;align-items:center;justify-content:space-between;overflow:hidden;"]);
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Bottom",
  componentId: "t83s2k-5"
})(["width:100%;height:300px;margin-top:10px;display:flex;flex-direction:column;"]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Title",
  componentId: "t83s2k-6"
})(["width:100%;color:#ff7e6d;font-weight:bold;font-size:24px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Content",
  componentId: "t83s2k-7"
})(["color:#7f6371;font-size:16px;margin-top:10px;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Footer",
  componentId: "t83s2k-8"
})(["width:100%;margin-top:20px;display:flex;justify-content:space-between;align-items:center;font-size:14px;"]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Category",
  componentId: "t83s2k-9"
})(["color:#543243;cursor:pointer;transition:0.2s;&:hover{color:#27cba4;}"]);
var ContinueReading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__ContinueReading",
  componentId: "t83s2k-10"
})(["color:#543243;cursor:pointer;transition:0.3s;display:flex;&:hover{color:#27cba4;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "PostItem__Text",
  componentId: "t83s2k-11"
})(["margin-right:5px;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Icon",
  componentId: "t83s2k-12"
})(["display:flex;align-items:center;transition:0.3s;", ":hover &{transform:translateX(5px);}"], ContinueReading);
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ }),

/***/ "./components/PostItem/index.js":
/*!**************************************!*\
  !*** ./components/PostItem/index.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PostItem */ "./components/PostItem/PostItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _PostItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Header, PostItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostItem */ "./components/PostItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostItem", function() { return _PostItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });




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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/svg/RightArrow */ "./static/svg/RightArrow.js");
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\pages\\index.js";

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
      lineNumber: 8
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MainContainerCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Svg Illustration Here"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsHeaderLeft, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Latest News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsHeaderRight, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "All News", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 15,
    height: 15,
    fill: "#27cba4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Posts, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__["PostItem"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })), " "))));
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100%;"]);
var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;height:80vh;background:#fff5f3;"]);
var MainContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__MainContainerCenter",
  componentId: "sc-1wbo52z-2"
})(["width:1224px;height:100%;margin:auto;display:flex;align-items:center;justify-content:center;font-size:16px;"]);
var News = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__News",
  componentId: "sc-1wbo52z-3"
})(["width:100%;height:100vh;background:#ffffff;margin:30px 0;"]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NewsHeader",
  componentId: "sc-1wbo52z-4"
})(["width:100%;margin-top:50px;color:#543243;font-weight:800;font-size:18px;padding-left:10px;display:flex;justify-content:space-between;"]);
var NewsHeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NewsHeaderLeft",
  componentId: "sc-1wbo52z-5"
})([""]);
var NewsHeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NewsHeaderRight",
  componentId: "sc-1wbo52z-6"
})(["display:flex;align-items:center;cursor:pointer;&:hover{color:#27cba4;}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Icon",
  componentId: "sc-1wbo52z-7"
})(["margin-left:8px;transition:0.3s;", ":hover &{transform:translateX(5px);}"], NewsHeaderRight);
var Posts = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__Posts",
  componentId: "sc-1wbo52z-8"
})(["width:100%;margin-top:30px;display:flex;align-items:center;flex-wrap:wrap;"]);
var NewsCenter = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "pages__NewsCenter",
  componentId: "sc-1wbo52z-9"
})(["width:1224px;height:100%;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./static/svg/Dash.js":
/*!****************************!*\
  !*** ./static/svg/Dash.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\static\\svg\\Dash.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Dash = function Dash(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    width: 120,
    height: 2
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M100 1H1",
    fill: "none",
    stroke: "#f2f2f0",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    strokeDasharray: "12 6 4 8 8 12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Dash);

/***/ }),

/***/ "./static/svg/RightArrow.js":
/*!**********************************!*\
  !*** ./static/svg/RightArrow.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\User\\Desktop\\React\\MIF\\mif\\static\\svg\\RightArrow.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var RightArrow = function RightArrow(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 492.004 492.004"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M484.14 226.886L306.46 49.202c-5.072-5.072-11.832-7.856-19.04-7.856-7.216 0-13.972 2.788-19.044 7.856l-16.132 16.136c-5.068 5.064-7.86 11.828-7.86 19.04 0 7.208 2.792 14.2 7.86 19.264L355.9 207.526H26.58C11.732 207.526 0 219.15 0 234.002v22.812c0 14.852 11.732 27.648 26.58 27.648h330.496L252.248 388.926c-5.068 5.072-7.86 11.652-7.86 18.864 0 7.204 2.792 13.88 7.86 18.948l16.132 16.084c5.072 5.072 11.828 7.836 19.044 7.836 7.208 0 13.968-2.8 19.04-7.872l177.68-177.68c5.084-5.088 7.88-11.88 7.86-19.1.016-7.244-2.776-14.04-7.864-19.12z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (RightArrow);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map