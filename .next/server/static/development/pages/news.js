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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
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
var _jsxFileName = "/home/reziko/projects/mif/client/components/Footer/Footer.js";




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
var _jsxFileName = "/home/reziko/projects/mif/client/components/Header/Header.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header(props) {
    var _this;

    _classCallCheck(this, Header);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Header).call(this, props));
    _this.state = {
      lastScroll: 0,
      isScroollingUp: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function (e) {
        if (window.scrollY < _this2.state.lastScroll) {
          _this2.setState({
            isScroollingUp: true
          });
        } else {
          _this2.setState({
            isScroollingUp: false
          });
        }

        _this2.setState({
          lastScroll: window.scrollY
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainer, {
        isUp: this.state.isScroollingUp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainerCenter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "mif")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "news")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "projects")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "about")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "contact")))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-1hc63ty-0"
})(["width:100%;height:50px;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;position:fixed;top:", ";transition:0.4s;z-index:200;"], function (props) {
  return props.isUp ? "0" : "-100px";
});
var HeaderContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainerCenter",
  componentId: "sc-1hc63ty-1"
})(["width:1024px;height:40px;margin:auto;display:flex;align-items:center;justify-content:space-between;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1hc63ty-2"
})(["color:#ff7e6d;font-size:24px;font-weight:800;cursor:pointer;"]);
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
})(["cursor:pointer;text-decoration:none;"]);
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
var _jsxFileName = "/home/reziko/projects/mif/client/components/PostItem/PostItem.js";






var BackUrl = 'http://localhost:1337';

var PostItem = function PostItem(_ref) {
  var data = _ref.data;
  var id = data.id,
      Title = data.Title,
      category = data.category,
      date = data.date,
      mainImage = data.mainImage,
      content = data.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/blogpage',
      query: {
        id: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, mainImage && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Top, {
    image: "".concat(BackUrl).concat(mainImage.url),
    className: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContinueReading, {
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
    fill: '#27cba4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })))))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Container",
  componentId: "t83s2k-0"
})(["display:flex;flex-direction:column;position:relative;cursor:pointer;top:0;transition:all 0.3s ease-in;box-shadow:9px 10px 9px -10px #777;border-radius:4px;overflow:hidden;&:hover{top:-2px;box-shadow:0 25px 25px rgba(0,0,0,0.16);transform:translate(0,-8px);}"]);
var Top = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Top",
  componentId: "t83s2k-1"
})(["width:100%;padding-bottom:60%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center center;"], function (props) {
  return props.image;
});
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
})(["width:100%;display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:20px;box-sizing:border-box;background:#ffffff;min-height:350px;"]);
var BottomTop = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__BottomTop",
  componentId: "t83s2k-6"
})([""]);
var PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__PostTitle",
  componentId: "t83s2k-7"
})(["width:100%;color:#ff7e6d;font-weight:bold;font-size:20px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Content",
  componentId: "t83s2k-8"
})(["color:#7f6371;font-size:14px;font-weight:bold;margin-top:10px;max-height:15ch;overflow:hidden;text-align:justify;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Footer",
  componentId: "t83s2k-9"
})(["width:100%;margin-top:20px;display:flex;justify-content:space-between;align-items:center;font-size:14px;"]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Category",
  componentId: "t83s2k-10"
})(["color:#543243;cursor:pointer;transition:0.2s;&:hover{color:#27cba4;}"]);
var ContinueReading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__ContinueReading",
  componentId: "t83s2k-11"
})(["color:#543243;cursor:pointer;transition:0.3s;display:flex;&:hover{color:#27cba4;}", ":hover &{color:#27cba4;}"], Container);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.p.withConfig({
  displayName: "PostItem__Text",
  componentId: "t83s2k-12"
})(["margin-right:5px;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "PostItem__Icon",
  componentId: "t83s2k-13"
})(["display:flex;align-items:center;transition:0.3s;", ":hover &{transform:translateX(5px);}", ":hover &{transform:translateX(5px);}"], ContinueReading, Container);
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

/***/ "./components/ProjectItem/ProjectItem.js":
/*!***********************************************!*\
  !*** ./components/ProjectItem/ProjectItem.js ***!
  \***********************************************/
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
var _jsxFileName = "/home/reziko/projects/mif/client/components/ProjectItem/ProjectItem.js";






var BackUrl = 'http://localhost:1337';

var ProjectItem = function ProjectItem(_ref) {
  var data = _ref.data;
  var id = data.id,
      Title = data.Title,
      category = data.category,
      date = data.date,
      mainImage = data.mainImage,
      content = data.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Info, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Mountain"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Lorem Ipsum is simply dummy text from the printing and typeseting industry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/projectpage',
      query: {
        id: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoButton, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Read More"))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Container",
  componentId: "sc-14mpx99-0"
})(["margin:20px;display:block;width:280px;height:360px;border-radius:15px;padding:1.5rem;box-sizing:border-box;background:white;position:relative;display:flex;align-items:flex-end;transition:0.4s ease-out;box-shadow:0px 7px 10px rgba(0,0,0,0.5);&:before{content:'';position:absolute;top:0;left:0;display:block;width:100%;height:100%;border-radius:15px;background:rgba(0,0,0,0.6);z-index:2;transition:0.5s;opacity:0;}&:hover{-webkit-transform:translateY(20px);transform:translateY(20px);}&:hover:before{opacity:1;}h1{margin:0px;}p{letter-spacing:1px;font-size:15px;margin-top:8px;}"]);
var InfoButton = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.button.withConfig({
  displayName: "ProjectItem__InfoButton",
  componentId: "sc-14mpx99-1"
})(["margin-top:10px;padding:0.6rem;outline:none;border:none;border-radius:3px;background:white;color:black;font-weight:bold;cursor:pointer;transition:0.4s ease;&:hover{background:#27cba4;color:white;}"]);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Info",
  componentId: "sc-14mpx99-2"
})(["position:relative;z-index:3;color:white;opacity:0;-webkit-transform:translateY(30px);transform:translateY(30px);transition:0.5s;", ":hover &{opacity:1;transform:translateY(0px);}"], Container);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "ProjectItem__Img",
  componentId: "sc-14mpx99-3"
})(["width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;border-radius:15px;"]);
/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

/***/ }),

/***/ "./components/ProjectItem/index.js":
/*!*****************************************!*\
  !*** ./components/ProjectItem/index.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectItem */ "./components/ProjectItem/ProjectItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ProjectItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/Responsive/Assets/AboutSvg.js":
/*!**************************************************!*\
  !*** ./components/Responsive/Assets/AboutSvg.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/components/Responsive/Assets/AboutSvg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgAbout = function SvgAbout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 482.9 482.9"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M239.7 260.2h3.2c29.3-.5 53-10.8 70.5-30.5 38.5-43.4 32.1-117.8 31.4-124.9-2.5-53.3-27.7-78.8-48.5-90.7C280.8 5.2 262.7.4 242.5 0H240.8c-11.1 0-32.9 1.8-53.8 13.7-21 11.9-46.6 37.4-49.1 91.1-.7 7.1-7.1 81.5 31.4 124.9 17.4 19.7 41.1 30 70.4 30.5zm-75.1-152.9c0-.3.1-.6.1-.8 3.3-71.7 54.2-79.4 76-79.4H241.9c27 .6 72.9 11.6 76 79.4 0 .3 0 .6.1.8.1.7 7.1 68.7-24.7 104.5-12.6 14.2-29.4 21.2-51.5 21.4h-1c-22-.2-38.9-7.2-51.4-21.4-31.7-35.6-24.9-103.9-24.8-104.5z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M446.8 383.6v-.3c0-.8-.1-1.6-.1-2.5-.6-19.8-1.9-66.1-45.3-80.9-.3-.1-.7-.2-1-.3-45.1-11.5-82.6-37.5-83-37.8-6.1-4.3-14.5-2.8-18.8 3.3-4.3 6.1-2.8 14.5 3.3 18.8 1.7 1.2 41.5 28.9 91.3 41.7 23.3 8.3 25.9 33.2 26.6 56 0 .9 0 1.7.1 2.5.1 9-.5 22.9-2.1 30.9-16.2 9.2-79.7 41-176.3 41-96.2 0-160.1-31.9-176.4-41.1-1.6-8-2.3-21.9-2.1-30.9 0-.8.1-1.6.1-2.5.7-22.8 3.3-47.7 26.6-56 49.8-12.8 89.6-40.6 91.3-41.7 6.1-4.3 7.6-12.7 3.3-18.8-4.3-6.1-12.7-7.6-18.8-3.3-.4.3-37.7 26.3-83 37.8-.4.1-.7.2-1 .3-43.4 14.9-44.7 61.2-45.3 80.9 0 .9 0 1.7-.1 2.5v.3c-.1 5.2-.2 31.9 5.1 45.3 1 2.6 2.8 4.8 5.2 6.3 3 2 74.9 47.8 195.2 47.8s192.2-45.9 195.2-47.8c2.3-1.5 4.2-3.7 5.2-6.3 5-13.3 4.9-40 4.8-45.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgAbout);

/***/ }),

/***/ "./components/Responsive/Assets/BlogSvg.js":
/*!*************************************************!*\
  !*** ./components/Responsive/Assets/BlogSvg.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/components/Responsive/Assets/BlogSvg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgBlog = function SvgBlog(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    height: "511pt",
    viewBox: "0 0 511 512",
    width: "511pt"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M444.465 4.395c-5.856-5.86-15.356-5.86-21.211 0L307.648 120H45.5c-24.812 0-45 20.188-45 45v209.996c0 24.816 20.188 45 45 45h16v77a15 15 0 0 0 25.723 10.492l85.586-87.492H347.5c24.813 0 45-20.184 45-45V204.852L508.105 89.246c5.856-5.86 5.856-15.355 0-21.215zM306.578 248.344l-42.426-42.426L391.434 78.641l42.425 42.425zm-58.406-15.98l31.96 31.96-54.78 22.82zM362.5 374.995c0 8.274-6.73 15-15 15h-181a15.006 15.006 0 0 0-10.723 4.512L91.5 460.215v-55.219c0-8.281-6.715-15-15-15h-31c-8.27 0-15-6.726-15-15V165c0-8.273 6.73-15 15-15h232.145l-45.313 45.312a15.329 15.329 0 0 0-3.312 5.012L187.5 300h-81c-8.285 0-15 6.715-15 15 0 8.281 6.715 14.988 15 14.988h91.004c1.93 0 4-.394 5.894-1.207l108.774-45.304c1.812-.707 3.64-1.938 5.015-3.313l45.313-45.312zm92.57-275.144l-42.425-42.426 21.214-21.211 42.426 42.426zm0 0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgBlog);

/***/ }),

/***/ "./components/Responsive/Assets/ContactSvg.js":
/*!****************************************************!*\
  !*** ./components/Responsive/Assets/ContactSvg.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/components/Responsive/Assets/ContactSvg.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgContact = function SvgContact(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 44 44"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M43 6H1a1 1 0 0 0-1 1v30a1 1 0 0 0 1 1h42a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1zm-1 27.581L29.612 21.194l-1.414 1.414L41.59 36H2.41l13.392-13.392-1.414-1.414L2 33.581V8h40v25.581z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M39.979 8L22 25.979 4.021 8H2v.807L21.293 28.1a.999.999 0 0 0 1.414 0L42 8.807V8h-2.021z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgContact);

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
var _jsxFileName = "/home/reziko/projects/mif/client/components/Responsive/Assets/HomeSvg.js";

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
/* harmony import */ var _Assets_BlogSvg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Assets/BlogSvg */ "./components/Responsive/Assets/BlogSvg.js");
/* harmony import */ var _Assets_AboutSvg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Assets/AboutSvg */ "./components/Responsive/Assets/AboutSvg.js");
/* harmony import */ var _Assets_ContactSvg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/ContactSvg */ "./components/Responsive/Assets/ContactSvg.js");
var _jsxFileName = "/home/reziko/projects/mif/client/components/Responsive/Footer.js";








var Responsive = function Responsive() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerText, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_HomeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 40,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_AboutSvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 40,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "about")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_BlogSvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
    width: 40,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_ContactSvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: 40,
    height: 40,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "contact"))));
};

var ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__ContainerText",
  componentId: "sc-1u71pxo-0"
})(["display:flex;justify-content:space-around;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1u71pxo-1"
})(["width:100%;height:auto;align-items:bottom;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:white;"]);
var SvgItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__SvgItem",
  componentId: "sc-1u71pxo-2"
})(["text-align:center;"]);
/* harmony default export */ __webpack_exports__["default"] = (Responsive);

/***/ }),

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_svg_Right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svg/Right */ "./static/svg/Right.js");
/* harmony import */ var _static_svg_Left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/svg/Left */ "./static/svg/Left.js");
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProjectItem */ "./components/ProjectItem/index.js");
var _jsxFileName = "/home/reziko/projects/mif/client/components/Slider/Slider.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "Slider__Img",
  componentId: "m8xi2w-0"
})(["display:block;cursor:pointer;z-index:1;height:30px;position:absolute;margin-top:20px;", ";"], function (p) {
  return p.right && "right: ".concat(p.right, "px");
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Slider__Container",
  componentId: "m8xi2w-1"
})(["min-height:600px;.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{margin:auto;margin-top:64.2px;display:flex;overflow:hidden;padding:0;}.slick-list:focus{outline:none;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:flex;margin-left:auto;margin-right:auto;max-height:950px !important;}.slick-track:before,.slick-track:after{display:table;content:'';}.slick-track:after{clear:both;}.slick-loading .slick-track{visibility:hidden;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}[dir='rtl'] .slick-slide{float:right;}.slick-slide img{display:block;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-loading .slick-slide{visibility:hidden;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-prev,.slick-next{font-size:0;line-height:0;position:absolute;top:0%;width:20px;height:20px;padding:0;cursor:pointer;color:transparent;border:none;outline:none;background:transparent;}.slick-next{left:100%;}.slick-prev{position:absolute;left:97% !important;}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{color:transparent;outline:none;background:transparent;}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1;}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:0.25;}.slick-prev:before,.slick-next:before{font-family:'slick';font-size:20px;line-height:1;opacity:0.75;color:white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-prev{left:-25px;}[dir='rtl'] .slick-prev{right:-25px;left:auto;}.slick-prev:before{content:'\u2190';}[dir='rtl'] .slick-prev:before{content:'\u2192';}.slick-next{right:-25px;}[dir='rtl'] .slick-next{right:auto;left:-25px;}.slick-next:before{content:'\u2192';}[dir='rtl'] .slick-next:before{content:'\u2190';}.slick-dotted.slick-slider{margin-bottom:30px;}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center;}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer;}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent;}.slick-dots li button:hover,.slick-dots li button:focus{outline:none;}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1;}.slick-dots li button:before{font-family:'slick';font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'\u2022';text-align:center;opacity:0.25;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-dots li.slick-active button:before{opacity:0.75;color:black;}"]);
var Override = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Slider__Override",
  componentId: "m8xi2w-2"
})([".slick-slider{display:flex;justify-content:space-between;align-items:flex-start;margin:auto;max-width:1200px;@media screen and (max-width:1154px){width:1000px;}@media screen and (max-width:1050px){width:700px;}@media screen and (max-width:751px){width:400px;}@media screen and (max-width:500px){width:350px;}}.slick-slide{display:flex !important;@media screen and (max-width:1154px){justify-content:center;}}.slick-initialized .slick-slide{max-width:1200px !important;}.slick-current ~ .slick-slide{justify-content:center;}.slick-current ~ .slick-slide ~ .slick-slide{justify-content:flex-end;}.slick-current{justify-content:flex-start !important;}"]);

var SliderComponent = function SliderComponent(_ref) {
  var children = _ref.children,
      settings = _ref.settings;
  var innerSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 1,
    centerMode: true,
    slidesPerRow: 1,
    centerPadding: '100px',
    nextArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Right__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349
      },
      __self: this
    }),
    prevArrow: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Left__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350
      },
      __self: this
    })
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Override, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, innerSettings && children && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_slick__WEBPACK_IMPORTED_MODULE_1___default.a, _extends({}, innerSettings, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }), children)));
};

/* harmony default export */ __webpack_exports__["default"] = (SliderComponent);

/***/ }),

/***/ "./components/Slider/index.js":
/*!************************************!*\
  !*** ./components/Slider/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Slider */ "./components/Slider/Slider.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Slider__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./components/index.js":
/*!*****************************!*\
  !*** ./components/index.js ***!
  \*****************************/
/*! exports provided: Header, PostItem, Slider, Footer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./components/Header/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Header", function() { return _Header__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _PostItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PostItem */ "./components/PostItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PostItem", function() { return _PostItem__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Slider */ "./components/Slider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return _Slider__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/Footer/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Footer", function() { return _Footer__WEBPACK_IMPORTED_MODULE_3__["default"]; });






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

/***/ "./node_modules/slick-carousel/slick/slick-theme.css":
/*!***********************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick-theme.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.css":
/*!*****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
var _jsxFileName = "/home/reziko/projects/mif/client/pages/Assets/Category.js";

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
var _jsxFileName = "/home/reziko/projects/mif/client/pages/Assets/Svg.js";

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

/***/ "./pages/news.js":
/*!***********************!*\
  !*** ./pages/news.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _Assets_Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/Svg */ "./pages/Assets/Svg.js");
/* harmony import */ var _Assets_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Assets/Category */ "./pages/Assets/Category.js");
/* harmony import */ var _components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Responsive/Footer */ "./components/Responsive/Footer.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "strapi-sdk-javascript/build/main");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components */ "./components/index.js");

var _jsxFileName = "/home/reziko/projects/mif/client/pages/news.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin:0\n  }\n  body{\n    font-family:Averta\n  }\n  @font-face {\n    font-family: Averta;\n    src: url('../static/fonts/Averta.otf');\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var strapiApi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default.a('http://localhost:1337');

var News =
/*#__PURE__*/
function (_Component) {
  _inherits(News, _Component);

  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));
    _this.state = {
      news: []
    };
    return _this;
  }

  _createClass(News, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var news;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return strapiApi.getEntries('News');

              case 3:
                news = _context.sent;
                this.setState({
                  news: news
                });
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                alert(_context.t0);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 7]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var news = this.state.news;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftArrow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, "Left"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, "News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightArrow, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Right")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, news && news.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_10__["PostItem"], {
          data: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }));
    }
  }]);

  return News;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (News);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Container",
  componentId: "sc-1ahwsme-0"
})([""]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__NewsHeader",
  componentId: "sc-1ahwsme-1"
})(["width:100%;height:80px;background:#fff5f3;margin-top:80px;display:flex;justify-content:space-around;align-items:center;padding:0 50px;box-sizing:border-box;"]);
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Heading",
  componentId: "sc-1ahwsme-2"
})(["color:#301d28;font-size:24px;font-weight:800;"]);
var LeftArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__LeftArrow",
  componentId: "sc-1ahwsme-3"
})([""]);
var RightArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__RightArrow",
  componentId: "sc-1ahwsme-4"
})([""]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Content",
  componentId: "sc-1ahwsme-5"
})(["width:1024px;display:grid;margin:auto;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-gap:20px;padding:30px 0;box-sizing:border-box;@media (min-width:30em){grid-template-columns:1fr 1fr;}@media (min-width:60em){grid-template-columns:repeat(3,1fr);}"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

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
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/Dash.js";

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

/***/ "./static/svg/Left.js":
/*!****************************!*\
  !*** ./static/svg/Left.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/Left.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgComponent = function SvgComponent(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 492 492"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M464.344 207.418l.768.168H135.888l103.496-103.724c5.068-5.064 7.848-11.924 7.848-19.124 0-7.2-2.78-14.012-7.848-19.088L223.28 49.538c-5.064-5.064-11.812-7.864-19.008-7.864-7.2 0-13.952 2.78-19.016 7.844L7.844 226.914C2.76 231.998-.02 238.77 0 245.974c-.02 7.244 2.76 14.02 7.844 19.096l177.412 177.412c5.064 5.06 11.812 7.844 19.016 7.844 7.196 0 13.944-2.788 19.008-7.844l16.104-16.112c5.068-5.056 7.848-11.808 7.848-19.008 0-7.196-2.78-13.592-7.848-18.652L134.72 284.406h329.992c14.828 0 27.288-12.78 27.288-27.6v-22.788c0-14.82-12.828-26.6-27.656-26.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

/***/ }),

/***/ "./static/svg/Right.js":
/*!*****************************!*\
  !*** ./static/svg/Right.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/Right.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var SvgComponent = function SvgComponent(props) {
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

/* harmony default export */ __webpack_exports__["default"] = (SvgComponent);

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
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/RightArrow.js";

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

/***/ 7:
/*!*****************************!*\
  !*** multi ./pages/news.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/news.js */"./pages/news.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "strapi-sdk-javascript/build/main":
/*!***************************************************!*\
  !*** external "strapi-sdk-javascript/build/main" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("strapi-sdk-javascript/build/main");

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
//# sourceMappingURL=news.js.map