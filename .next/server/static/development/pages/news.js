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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_img_tengo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/img/tengo.png */ "./static/img/tengo.png");
/* harmony import */ var _static_img_tengo_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_static_img_tengo_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_img_sandro_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/img/sandro.png */ "./static/img/sandro.png");
/* harmony import */ var _static_img_sandro_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_img_sandro_png__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/home/reziko/projects/mif/client/components/Footer/Footer.js";
 // import Link from 'next/link';





var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MifLogo, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Mif"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "We Are Mif written by Steve McKinney, focusing on the design and build of websites. The aim is to bridge the gap between the two in building your design. It started\u2009\u2014\u2009and remains\u2009\u2014\u2009a way to encourage self learning and sharing, through a mixture of in depth tutorials and quick tips."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(YCFU, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "You Can Find Us elsewhere"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Links, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Facebook"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "YouTube"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Link, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "LinkedIn")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(C, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "\xA9 Media Inovations Foundation 2019"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dude, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DudeTengo, {
    img: _static_img_tengo_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "Tengo K. Guali")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Dude, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(DudeSandro, {
    img: _static_img_sandro_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Sandro Gviandadze")))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1ny8j1g-0"
})(["width:100%;display:flex;align-items:center;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:#e1f2f2;"]);
var Center = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Center",
  componentId: "sc-1ny8j1g-1"
})(["width:1228px;margin:auto;display:flex;height:330px;"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Left",
  componentId: "sc-1ny8j1g-2"
})(["display:flex;flex-direction:column;height:100%;flex:1;"]);
var MifLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__MifLogo",
  componentId: "sc-1ny8j1g-3"
})(["color:#ff7e6d;font-size:24px;font-weight:800;cursor:pointer;font-family:Pacifico;"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Text",
  componentId: "sc-1ny8j1g-4"
})(["width:70%;margin-top:20px;color:#62535c;line-height:1.5;"]);
var YCFU = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__YCFU",
  componentId: "sc-1ny8j1g-5"
})(["flex:1;display:flex;flex-direction:column;justify-content:space-between;margin-top:20px;span{font-weight:600;font-size:16px;color:#62535c;}"]);
var Links = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Links",
  componentId: "sc-1ny8j1g-6"
})(["flex:1;margin-top:6px;"]);
var Link = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.a.withConfig({
  displayName: "Footer__Link",
  componentId: "sc-1ny8j1g-7"
})(["flex:1;margin-right:15px;&:nth-child(1){color:#3c5a99;}&:nth-child(2){color:#bf2626;}&:nth-child(3){color:#0077b5;}"]);
var C = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__C",
  componentId: "sc-1ny8j1g-8"
})(["margin-top:50px;font-size:16px;color:#938a8f;font-weight:600;"]);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Right",
  componentId: "sc-1ny8j1g-9"
})(["flex:1;display:flex;justify-content:flex-end;"]);
var Dude = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__Dude",
  componentId: "sc-1ny8j1g-10"
})(["display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:40px;"]);
var DudeTengo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__DudeTengo",
  componentId: "sc-1ny8j1g-11"
})(["width:150px;height:200px;background-size:cover;background-image:url(", ");background-repeat:no-repeat;"], function (props) {
  return props.img;
});
var DudeSandro = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "Footer__DudeSandro",
  componentId: "sc-1ny8j1g-12"
})(["width:130px;height:196px;background-size:cover;background-image:url(", ");background-repeat:no-repeat;"], function (props) {
  return props.img;
});
var Img = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "Footer__Img",
  componentId: "sc-1ny8j1g-13"
})([""]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.span.withConfig({
  displayName: "Footer__Span",
  componentId: "sc-1ny8j1g-14"
})(["font-weight:600;font-size:16px;color:#62535c;margin-top:15px;"]);
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
/* harmony import */ var _static_svg_About__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/svg/About */ "./static/svg/About.js");
/* harmony import */ var _static_svg_Projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svg/Projects */ "./static/svg/Projects.js");
/* harmony import */ var _static_svg_Contact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/svg/Contact */ "./static/svg/Contact.js");
/* harmony import */ var _static_svg_News__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../static/svg/News */ "./static/svg/News.js");
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
      isScroollingUp: true,
      isOnTop: true
    };
    return _this;
  }

  _createClass(Header, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.addEventListener('scroll', function (e) {
        if (window.scrollY <= _this2.state.lastScroll) {
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
      var isOnTop = this.state.isOnTop;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainer, {
        isOnTop: isOnTop,
        isUp: this.state.isScroollingUp,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HeaderContainerCenter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, "Mif")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/news",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_News__WEBPACK_IMPORTED_MODULE_7__["default"], {
        fill: "#ff7e6d",
        width: 17,
        height: 17,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Txt, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, "News"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Projects__WEBPACK_IMPORTED_MODULE_5__["default"], {
        fill: "#ff7e6d",
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Txt, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "projects"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/about",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_About__WEBPACK_IMPORTED_MODULE_4__["default"], {
        fill: "#ff7e6d",
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Txt, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, "about"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledLink, {
        href: "/contact",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MenuItem, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Contact__WEBPACK_IMPORTED_MODULE_6__["default"], {
        fill: "#ff7e6d",
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Txt, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "contact"))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-1hc63ty-0"
})(["width:100%;height:50px;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;position:fixed;top:", ";transition:0.4s;z-index:9999;"], function (props) {
  return props.isUp ? "0" : "-100px";
});
var HeaderContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__HeaderContainerCenter",
  componentId: "sc-1hc63ty-1"
})(["width:1024px;height:40px;margin:auto;display:flex;align-items:center;justify-content:space-between;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1hc63ty-2"
})(["color:#ff7e6d;font-size:24px;font-weight:800;cursor:pointer;font-family:Pacifico;"]);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.ul.withConfig({
  displayName: "Header__Menu",
  componentId: "sc-1hc63ty-3"
})(["display:flex;"]);
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a.withConfig({
  displayName: "Header__MenuItem",
  componentId: "sc-1hc63ty-4"
})(["display:flex;align-items:center;color:#ff7e6d;margin:13px;font-size:18px;font-weight:800;cursor:pointer;&:hover{transform:scale(1.1);transition:0.1s;}svg{margin-bottom:4px;}"]);
var Txt = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "Header__Txt",
  componentId: "sc-1hc63ty-5"
})(["margin-left:2px;"]);
var StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-1hc63ty-6"
})(["display:block;cursor:pointer;text-decoration:none;"]);
var LanguageSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__LanguageSwitcher",
  componentId: "sc-1hc63ty-7"
})(["color:#fff;font-size:20px;"]);
var SubMenuLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__SubMenuLink",
  componentId: "sc-1hc63ty-8"
})(["text-decoration:none;"]);
var SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Header__SubMenuItem",
  componentId: "sc-1hc63ty-9"
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






var BackUrl = "http://localhost:1337";

var ProjectItem = function ProjectItem(_ref) {
  var color = _ref.color,
      id = _ref.id,
      data = _ref.data;
  var title = data.title,
      subtitle = data.subtitle,
      category = data.category,
      date = data.date,
      mainImage = data.mainImage,
      content = data.content;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/blogpage/".concat(data && data._id),
    href: "/blogpage/?id=".concat(data && data._id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImgContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ImageWrapper, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/blogpage/".concat(data && data._id),
    href: "/blogpage/?id=".concat(data && data._id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Category, {
    color: color
  }, category)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Date, {
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Day, null, "12"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Month, null, "Sep")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Img, {
    src: "".concat(BackUrl, "/").concat(mainImage && mainImage.url && mainImage.url)
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContainer, {
    color: color
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TextContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blogpage/?id=".concat(data && data._id),
    as: "/blogpage/".concat(data && data._id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Title, {
    color: color
  }, title && title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Subtitle, {
    color: color
  }, subtitle && subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    as: "/blogpage/".concat(data && data._id),
    href: "/blogpage/?id=".concat(data && data._id)
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    color: color
  }, content && content)))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Container",
  componentId: "sc-14mpx99-0"
})(["display:flex;overflow:hidden;flex:1 0 380px;max-width:369px;height:460px;margin:20px;box-sizing:border-box;flex-direction:column;background:white;text-align:justify;transition:0.4s ease-out;border-radius:6px;box-shadow:0px 1px 35px 0px rgba(0,0,0,0.3);a{background-image:linear-gradient(to bottom,transparent 90%,#000 25%);background-size:0% 100%;background-repeat:no-repeat;text-decoration:none;text-decoration:none;color:#464242;position:relative;text-align:center;font-size:1.5rem;transition:background-size 0.4s ease;&:hover,&:focus{background-size:100% 100%;cursor:pointer;}}"]);
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Date",
  componentId: "sc-14mpx99-1"
})(["width:50px;height:50px;background-color:", ";border-radius:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;position:absolute;right:15px;top:20px;z-index:9999;color:#fff;font-weight:800;"], function (props) {
  return props.color ? props.color : "#ff7e6d";
});
var Day = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Day",
  componentId: "sc-14mpx99-2"
})([""]);
var Month = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Month",
  componentId: "sc-14mpx99-3"
})([""]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Category",
  componentId: "sc-14mpx99-4"
})(["width:120px;height:30px;background-color:", ";position:absolute;bottom:0;left:0;font-weight:800;display:flex;align-items:center;justify-content:center;color:#fff;"], function (props) {
  return props.color ? props.color : "#ff7e6d";
});
var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__ImgContainer",
  componentId: "sc-14mpx99-5"
})(["width:100%;flex:2;object-fit:cover;overflow:hidden;align-self:flex-start;position:relative;transition:0.5s;cursor:pointer;", ":hover &{flex:1;}"], Container);
var ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__ImageWrapper",
  componentId: "sc-14mpx99-6"
})(["width:100%;height:100%;background-color:rgba(0,0,0,0);position:absolute;", ":hover &{background-color:rgba(0,0,0,0.4);}"], Container);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "ProjectItem__Img",
  componentId: "sc-14mpx99-7"
})(["width:100%;height:100%;object-fit:cover;transition:transform 200ms ease;cursor:pointer;"]);
var TextContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__TextContainer",
  componentId: "sc-14mpx99-8"
})(["flex:1;padding:20px;box-sizing:border-box;transition:0.5s;background:#fcfcfc;border-bottom:5px solid;border-color:", ";color:#62535c;", ":hover &{flex:1.5;cursor:pointer;background:#fff;}position:relative;overflow:hidden;"], function (props) {
  return props.color ? props.color : "#ff7e6d";
}, Container);
var TextContent = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__TextContent",
  componentId: "sc-14mpx99-9"
})([""]);
var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.span.withConfig({
  displayName: "ProjectItem__Title",
  componentId: "sc-14mpx99-10"
})(["font-size:26px;font-weight:800;&:hover{color:#7a7a7a;}"]);
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Subtitle",
  componentId: "sc-14mpx99-11"
})(["font-size:16px;color:#ff7e6d;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProjectItem__Content",
  componentId: "sc-14mpx99-12"
})(["margin-top:20px;overflow:hidden;transition:0.5s;max-height:0;overflow:hidden;", ":hover &{max-height:16ch;}"], Container);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Responsive; });
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Responsive =
/*#__PURE__*/
function (_Component) {
  _inherits(Responsive, _Component);

  function Responsive(props) {
    var _this;

    _classCallCheck(this, Responsive);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Responsive).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleWindowSizeChange", function () {
      _this.setState({
        width: window.innerWidth
      });
    });

    _this.state = {
      width: 0 // or your default width here

    };
    return _this;
  }

  _createClass(Responsive, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleWindowSizeChange(); // Set width

      window.addEventListener("resize", this.handleWindowSizeChange);
    }
  }, {
    key: "componentWillMount",
    value: function componentWillMount() {} // Don’t use this as the API is deprecated
    // make sure to remove the listener
    // when the component is not mounted anymore

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener("resize", this.handleWindowSizeChange);
    }
  }, {
    key: "render",
    value: function render() {
      var width = this.state.width;
      var isMobile = width <= 500;

      if (isMobile) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerText, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_HomeSvg__WEBPACK_IMPORTED_MODULE_3__["default"], {
          width: 40,
          height: 40
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_AboutSvg__WEBPACK_IMPORTED_MODULE_5__["default"], {
          width: 40,
          height: 40
        }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "about")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_BlogSvg__WEBPACK_IMPORTED_MODULE_4__["default"], {
          width: 40,
          height: 40
        }), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "blog")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SvgItem, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Assets_ContactSvg__WEBPACK_IMPORTED_MODULE_6__["default"], {
          width: 40,
          height: 40
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "contact"))));
      } else return null;
    }
  }]);

  return Responsive;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


var ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__ContainerText",
  componentId: "sc-1u71pxo-0"
})(["display:flex;justify-content:space-around;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1u71pxo-1"
})(["width:100%;position:fixed;height:auto;align-items:bottom;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:white;"]);
var SvgItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "Footer__SvgItem",
  componentId: "sc-1u71pxo-2"
})(["text-align:center;"]);

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
})(["min-height:600px;.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{margin:auto;margin-top:64.2px;display:flex;overflow:hidden;padding:0;}.slick-list:focus{outline:none;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:flex;margin-left:auto;margin-right:auto;max-height:950px !important;}.slick-track:before,.slick-track:after{display:table;content:\"\";}.slick-track:after{clear:both;}.slick-loading .slick-track{visibility:hidden;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}[dir=\"rtl\"] .slick-slide{float:right;}.slick-slide img{display:block;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-loading .slick-slide{visibility:hidden;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-prev,.slick-next{font-size:0;line-height:0;position:absolute;top:0%;width:20px;height:20px;padding:0;cursor:pointer;color:transparent;border:none;outline:none;background:transparent;}.slick-next{left:100%;}.slick-prev{position:absolute;left:97% !important;}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{color:transparent;outline:none;background:transparent;}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1;}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:0.25;}.slick-prev:before,.slick-next:before{font-family:\"slick\";font-size:20px;line-height:1;opacity:0.75;color:white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-prev{left:-25px;}[dir=\"rtl\"] .slick-prev{right:-25px;left:auto;}.slick-prev:before{content:\"\u2190\";}[dir=\"rtl\"] .slick-prev:before{content:\"\u2192\";}.slick-next{right:-25px;}[dir=\"rtl\"] .slick-next{right:auto;left:-25px;}.slick-next:before{content:\"\u2192\";}[dir=\"rtl\"] .slick-next:before{content:\"\u2190\";}.slick-dotted.slick-slider{margin-bottom:30px;}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center;}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer;}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent;}.slick-dots li button:hover,.slick-dots li button:focus{outline:none;}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1;}.slick-dots li button:before{font-family:\"slick\";font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:\"\u2022\";text-align:center;opacity:0.25;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-dots li.slick-active button:before{opacity:0.75;color:black;}"]);
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
    centerPadding: "100px",
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
/*! exports provided: Header, PostItem, Slider, Footer, ProjectItem */
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

/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProjectItem */ "./components/ProjectItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProjectItem", function() { return _ProjectItem__WEBPACK_IMPORTED_MODULE_4__["default"]; });







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
/* harmony import */ var _static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/svg/RightArrow */ "./static/svg/RightArrow.js");
/* harmony import */ var _static_svg_Left__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/svg/Left */ "./static/svg/Left.js");
/* harmony import */ var _components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Responsive/Footer */ "./components/Responsive/Footer.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "strapi-sdk-javascript/build/main");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _components_ProjectItem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ProjectItem */ "./components/ProjectItem/index.js");

var _jsxFileName = "/home/reziko/projects/mif/client/pages/news.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin:0\n  }\n  body{\n    font-family:Averta\n  }\n  @font-face {\n    font-family: Averta;\n    src: url('../static/fonts/Averta.otf');\n  }\n  @font-face {\n    font-family: Pacifico;\n    src: url('../static/fonts/Pacifico-Regular.ttf');\n  }\n"]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












var strapiApi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default.a("http://localhost:1337");

var News =
/*#__PURE__*/
function (_Component) {
  _inherits(News, _Component);

  function News(props) {
    var _this;

    _classCallCheck(this, News);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(News).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleNext",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.setState({
                start: _this.state.start + 8
              });

              _context.next = 3;
              return _this.getData();

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handlePrev",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this.setState({
                start: _this.state.start - 8
              });

              _context2.next = 3;
              return _this.getData();

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getData",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
      var _this$state, limit, start, news;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _this$state = _this.state, limit = _this$state.limit, start = _this$state.start;
              _context3.prev = 1;
              _context3.next = 4;
              return strapiApi.getEntries("News?_start=".concat(start, "&_limit=").concat(limit));

            case 4:
              news = _context3.sent;

              _this.setState({
                news: news
              });

              _context3.next = 11;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](1);
              alert(_context3.t0);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[1, 8]]);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getCount",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var count;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return strapiApi.getEntries("News/count");

            case 3:
              count = _context4.sent;

              _this.setState({
                count: count
              });

              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              alert(_context4.t0);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this, [[0, 7]]);
    })));

    _this.state = {
      news: [],
      start: 0,
      limit: 8,
      count: 0
    };
    return _this;
  }

  _createClass(News, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.getData();

              case 2:
                _context5.next = 4;
                return this.getCount();

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          news = _this$state2.news,
          start = _this$state2.start,
          count = _this$state2.count;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LeftArrow, {
        onClick: this.handlePrev,
        start: start,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_svg_Left__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: 20,
        height: 20,
        fill: "#301d28",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Newer")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightArrow, {
        onClick: this.handleNext,
        count: count,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, "Older"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ri, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: 20,
        height: 20,
        fill: "#301d28",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, news && news.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProjectItem__WEBPACK_IMPORTED_MODULE_11__["default"], {
          color: "#66D7D1",
          data: item,
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90
          },
          __self: this
        });
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
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
})(["color:#62535c;font-size:24px;font-weight:800;"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Li",
  componentId: "sc-1ahwsme-3"
})(["transition:0.4s;"]);
var LeftArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__LeftArrow",
  componentId: "sc-1ahwsme-4"
})(["display:flex;cursor:pointer;transition:0.3s;pointer-events:", ";opacity:", ";color:", ";&:hover ", "{transform:translateX(-10px);}"], function (props) {
  return props.start === 1 ? "none" : "inherit";
}, function (props) {
  return props.start === 1 ? "0.4" : "1";
}, function (props) {
  return props.start === 1 ? "#ffcbc7" : "#62535c";
}, Li);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Span",
  componentId: "sc-1ahwsme-5"
})(["margin:0 10px;transition:transform 200ms ease;color:#301d28;font-weight:800;"]);
var Ri = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Ri",
  componentId: "sc-1ahwsme-6"
})(["transition:transform 200ms ease;"]);
var RightArrow = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__RightArrow",
  componentId: "sc-1ahwsme-7"
})(["display:flex;cursor:pointer;color:#62535c;&:hover ", "{transform:translateX(10px);}"], Ri);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "news__Content",
  componentId: "sc-1ahwsme-8"
})(["width:80%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;margin:auto;padding:30px 0;box-sizing:border-box;@media (min-width:1024px){width:90%;}@media (min-width:998px){width:100%;}"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());

/***/ }),

/***/ "./static/img/sandro.png":
/*!*******************************!*\
  !*** ./static/img/sandro.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANAAAAE3CAMAAADsTD/IAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkqKCkquRRraAAAAQB0Uk5TAC9mBidJa42tze3//vTp3tPIuqaSfWlVPhBo+l4old/ktYZXAo89BUvzfAcErx8t7vnERgkDsSR3zve2bCtSovU6uNiORFH4cO+w8JoBOU5F/ReYhBTrNiwLNebKbRIpGecKmZ9lz91ACOg/h8t4DSB/D/JqetbxiepYFmDgqQyb2zN1E7kOvkp2qrd0HfwaTftPW9FIHtIjneFz0Ewx9oO7NHm/4hyLvbwhQ9qogYDZZGGIoYU4OyJx13KTQZHjR5yWMrTVN8eXXKWynmJ+GBFjoKcV7IyrZ1QulDxQycIlJm/GX66jWsXckDCs5YLDilOzWcBCzBuk1MF7XSpWbvlk6RcAAB3OSURBVHic7V0JfA7X2p/aOW+oLaRqDxEJFSSxXDsN0iBiubFGbIm4YomiKWoptYWorbWENrUUTS2NUiWhG1qqVO1yS2kVve1NUW6/+83MOzPvnG3mzPK+4/t+/f9+JJl5zjnP874zZ3lWjvsL/3/xVBHKjaLFipcoWap0GcDD5Ve23NPlK1SsVNm/StUAn/JnFM9Uexa/WN2/RoWaLkBDrdp16lYP9D2vDAisB0B9+FJQg4plqKKoEFyhYdUQZ7imI7QRz1lj9ZXnajRhkUZCWNM6zZo7xTwB4RECV56PObJFSwPSSGjV+m+NNcbwDdq0FX+0ExhqL1/s0NG4NBI6de4S5JQsAp6PKiH86Coy0819LbK7aXFERL9QP8YpeXpUAz35H71iRU78hEu946pZk0dAzT6RjsjTtx8A/Tnu734SH/EcN2CgdXFEDBo8xPcC1eYHHsolDJOZqJI4nL7kGEbYiGI+lmekMGxkyCiFhVaj7RNHgKt2ki/lSR4jDJoy1l4hEPyjiu/2Ef7iiANtfMiIGF3CVwvuKH1m7EG/cam+kGe8r+Th0WTCRO8LVMSHAgEwqY53Z/HUNG6ETwXiN1Yle3tRoMllmr/oY4EAiOrstXdp4hQwNcznAgEw7SUvCVQJgFgH5OFRKt0b8nRwRhgR0S/bL0/8dAcFAmDGTLsFesVReQCYNdteeZo5LA8A1ebYeQKcO81peXi8Os82eWLmOy2MiFnV7RJostOiSAh+zR55eji0/uCIXWCHPAG1nJZDhYXJ1gVa5LQQEAbNtSrPYqdFQDBriTV5qmY4LQGKgZYmu6VMtgTfolt/8/KElHaaexL86utzTkENp3knI6q4SXmWOc05DZnLTckTGew041TEvm5CnuYrnGZbAxkmJGrkNNOacBmWaJzTLOvAqES9vK3AtozYlUbkWRXtNL/6aGVghQ1Z7TS3LOi2hlmgN5zmlQ1vsqqK1zrNKSvWsRmS1j/xE4KCCBZl0IYsp9k0gI368kx802kmDaGKrkCbnGbRGKLe0pHnbac5NIpa2mqGLk+M0ooZ2VpuAGuinWbPBDbS5Ul/x2nmzMDVjCZP/NNO82YO3TZTBNriNGdmsZUi0DanGTONkWSByjnNl2n4EV1Xw584NSk7mpIEetdprqzAnyDQdiMduHbsfC+Hx8aF7z8Rm/NJfXGBdjG3zojYrfIsCu+wx2bHRjPYiwv0AWNTvy34vJ/buZNX2WXAPoypvUztXHspviof7m/q6MN3IBzliMna3UlL15Kwq5SD+uOPUHZmMTQ6GKohj4Cgjw8d9jrrZExCNQwMy9B7OuK4MWCPM5vcZTAbffVbdGWSh0dM/TgjoTc2oR3MxAbdBnNY5REQlJfva5nGwBz01KM/YkQeAaHNhk/yhSAKjkLD++tQN8WmRQYk1/3EhzvEFtDYOdrEUxJMyCMgfa3X9xGtpJ+boIHjtBtZcZRMqehdB9wMSZcYBUUqapvssi3IwyNg8KfelGih9PMz9Zifa7WIeteaQDwGfOG9GWJ1hPtnCfWAmufVHMvy8Gh+bJu3dnu73frE4+rhtCLpysTbIRCPVZW9M0PsFaM2wWjVUKla9IaWVB0knfCCQFG57p+qWWGNBnk3eyOUhn5pQ1wlgq9qiz9US+tnGtQnbZWHx6nOU2wWaFuS+OOYZ4zX6MRRX9stEMclnrY3XsyVLoZuj/WM8CydmHBctwP9v4myUaIFLwv/n/F0v59Oi5/WbcLZLe1tE2hdyLf8/597OqerSMp5Sx4e6edaUcc1iEhBgnc8XdO3cg29KBAvUj2bvqUJm/lVO8zT8XdUSuu7Hm0MafitHQK1FF2yPSESW+mEXkfyeTv2DwkX+P9WKZ1SHWZt2cbpIaaudb3K34KCAbiodEn9jGwORqIhZI7VzXgFbriYHEECzUW7n2/k4dH3krXTesbEHgBcVrqjbexf8ZlAHFfsE0sSXeAOgKpyX9TN9hUfCsRx2w9YEGgENwfkyj0toRC5bI9Q1EboYHPavKv8v2nceKB4yjxHIRzlW3l4fF3JzKtU+jj/XxvuWoHczWUKYSWfC8Rx1ZsaFyi2IEtQKZxXDHHFKYTeisXWxkvGU9F0WAzAd9xZxSOwCoVuvCMCcYlTjXpRLQ5fDb5V9fAVmcx3qxCKz1jMVSpEcHkA/NPT/nsyWWvHBOKalzT0JR3muKbgtKd5QzLZB84JxHEdDG1Z53IbXDU8jaeSqS44Jw6P+OEGBOrCcW9c97SlRHP5OrcTipXsceiLOa63alYgO9OHOZ5NcS7z9k5Q5WzxODEdJxKtcE4SBV2ZtJIukdel25VmpYhkM5yTw4MNLG5vO0CUYGFMVFq1JpL1cU4MFVLp+g4Fm7IAHLJLdiO54ZAIKCiLigrlfgBtoSbXiWSXKQP4HK/rvkjfg8lQC3JST5q7re+REq0j0HpwE2pA9HCu5lhySxzVdTbgSf2uQ/TExFc1HWKeiAJtiW7NKAuRv08i+tEh3sko0Nw1LBgMEtXUP5GIFjrFOxlDtbIhTN3An8BVqEkiuu0U6xT87Efi0o38wCkN1LRETezbTnFOQy+6/uQO1xFydb5LIjpN69gx7KYKtIirfE9NScx2s4zWr3OgnNsE3/rt+WpCoqNoLq1b5xBDizi5yk2srSYkZpArcIhrLfQdRuJUNGNBLppEHQvB/d55XCbrTkZxHGTJIu4UHD+vElGZKNAgjoNiWkmb0yynWNZGOPFp4nc1F9VUvxBopjnFsg6IauttHBekzgVG0kU8UXtTNV4lMHsHoblJoFntCLcMiMzEmc1HaOoRBCrvCLcsqIgz+y+EhJR3zaLjrBfxM85sGkJCyhvV0RFmmYCbxNAMjn0JntUnHOGVCb9izGJK6864QKWcYJUNRVGPJ3zNnNcNE+iJ0JtSgLrNEwJZ8XymFX3PJzNOI7x2xklmRv9fEugUwut2Ag32FR0nED0xgJVa7UmxQKmoO9QZAtETA3jivkmk6YMItNPHPBoCHHWbQqSZiLxFT/C0zXEn1Zy+SSFCcuD85lMODSJ1sUqvs5tGBL9FFXzKoWEE7ZKzxr1PPVrDb9E1X7LHI/ndfb+mnczJObnY/0aV16o+t1S3WlnuCMHtO5Y0Z7sxBDpokP2Bkzf/3OXfg+998d38QgHzP1k4osa/Tvq3vVxgPgv7xN8X3FlH0FwHTy+9KP+9Ig2eoqpr5ub0w4PAVWin7k7tUh/auP6tcUda35+uoV4GU+5XzLnVP8GQVSm92YKKnfQDv6LKNZ1Rb/G/6z/AOg95Xqv7i0oP3UYVfiNeOlt/17nfZhnxu6lWbtu5l1jyDTY+/9BwRYmsPyJKpnV5wPyB1ah4L2fyy9uHJvJfyj97znnjR9OBPv3uDG6jNVL4ldYWIvKaPLpUpAdzIF3i0Vsb73xqQxhWuTpnKUPMy6FoQA2h1vzha5cV00yJkNxjcLsDNsYy+k0mTqkdbAl3kFBtVL5/f2L10JBzpe2P3N5KGCrB/sQYGaNu47lF2um3MwGCYZPsiGMVmAfzWeapLKvf9D+uXiv9fq1uLE2wPBmPtelb9av5dPnCbB6F5f+oOY09CSZaj/JnHXrXO1vjxu0ufvQBdvgo2ji3bYl7h0aUmk80bTa9olrzQ5c/ItEcfjU/53Sv/kOXBGAvXeDMU5FP1b9x+5FeuMdnSMOhGrS19h5rUxR/dnAM+X3tGdy1skmpeyerJCUlFX+8EzfOZ7Ve3IWppFrMmtdHaKVw+Rmhpxa6+zTNoGfjkLrU+CoUfkdWGitvHJm2ifaco4/cWTLZjrbEjnVQrBJLUOenaWZiKx5QUiWcQuiSiVQN9VL50ND7oN6MseKCWWeirsT+ElEy0nxiJUayuGZMZ8ZjC75RCwgdhmFUBNv+fAvycNwAjQU0y1rp1dp4j3cxItwuWe1DS6Nyxem7KIuRVkvwVxQ/v+GOp2T1kAFUoskz3GrPX2Jd4nENL2A0ll0vlhKMbQIyLVc4xzNFxUH311e4CauGBHSzOirHlScLVNp6z9j5Qz1/vftIUJRiKQgaWR/2DlmgCOs9z0D7VJWCSBJ2SWe4fSjJHuvDPiQL9J31nu+hfeb2OHnSvaWJF5zL1nXh5qIk560P+xtZIBt0fpir2byrsqlVUMeJBhZ0IdJPoK6Lq2SBbIi+XI50WSuQX8d/F+7E8F9QEzExDHrwsqGWHiUF/jDrPfdCuoyoDiR/qx78L/VEmi7IOphnedQgsjwAWC9p9zHcoSvvJQDcrs7/4f/s5SZadt8FyhYWylsGhlJMbaosKHKZXvP6IiqIjAFE8qAOz467tYHp4KW4/Iwq5J8wV8u23L/kV1Mw3cFBAaskWr0o1sQ+ZUW6TVQKqpMoKd9j451u4/Z+JoGel3p6Tr6wVQ6nKYk9ATGS8mewdpcD5AM36sbhATXVCcH4tF/enq3C7xHwDPrwRsuPlDDJIWoCyR+wjmaPyxRnDeH7nfcUiYaacbcMRnpQvtVJ+Ouirlp0gpv6J/nvxkD2wSzB/4YcHE+4iTX3pheV49P7/F9DVkwnsKCR8vpPhNRzZhMmqMuTvtQTSNqdKg48bRVLnvB2JcDEkl+JVvBDoCeghd9QTFyBO0Rx8Mky88VR6p0qkhFtvEfFWZXjZgfT7KYeZLupldjV9xSnOSFx2QaYuIib+FuODtXGL5dLF4xprXArjscp+dpp/gsMmu1Z6RDntZ3KjW9juH3CVuyqjkDSLuBv8t8nxNBPEfzc0hMmlrMRJND782jXxsQscYdOtEBpAuSPPUxRtPgrSx2ULyjVYxr4klvvnh2eQ7uD+5bIFfPdYQDkqoyF2EwpK4DoVQ6HeNbgL96VAg2wz1R2YHGt91yrIj93i9WUtzzf97ILknJlgqZA2yVy2VT0NQCxch68sfgB0r2+aGSW+9nDwW45LnMKSiSHKo5TX5R9DaEX1OPGknVBlljb8UMqbBcs/90MgPvy7z1xA7H08NfmaPAUC3eNUX5F9jNLpW+xO3Q1Rt6vqhfz20ofwxTll7ZH5Q9uon/If/MfyUH5d/4Ba4+QSwPQ8yn0ADgyEL1UC/flaKSizt+lr6Cy6tpGQnfax0vJwvSN/Hcj9QmvE+YROFLq9J8cBaQ0My8iNFJOG2wnI31aaqP0eUJ357TkkVc4pRQ1v2vx2HXzAXgWpu8g0X9F7ZGgNT8EU/R3Xx2IuRvMlcwIqlKxfxIEytMS6BhCNBFaZP6DZViaKdE/pPZ4EOcASRUo7eMIx17p9Kx2yMMDvvtpbrplLVaC9HcX6Fh/yr19UUM6mNHDBTZjRmXkWB3idml4h+DKFu92sshUVeZDXRT18q9LK4US6zkHgO9Vt/mnHbFQygp+ZAuhQh2EgWCkIPQN9+XFpLbSdPHYcyUQVduO0vyCZFuWMg1XhI9YhzCPJllHRw8sDISDrTLXI/fdeT/9AkhtE90Jo6arpsUlsCXscIKWPOKGWsBG+cIskKk2k7yGeZhekVpoeDAldlcx0KQDcjfFfZ2yNEtvUZ7qUqQ69LQlpVyGDHlPKKtx5gHwi/p+SBSIhhcR+dCaqWVf84+WqFzfYAy4C+q1p3g09XWfPRaprwXEyWvqpDk6jljhst+2bLTrBcAWiKICAD3gNrIfd55Wx3OLLCzMvjP1Fv55SnP2K7SWkhYfCmLi/pzcunDrw5w83dzEv0vMKf7n41AFyAIsvcUiqc0lvc7J+NHdmjqnbHZ/GyYddeU4AKV610IAYLvzUSyjijwrDDQ14gV341fpFNJerCqdQgOytm+jfOEnbJvCz+tLoQvytypkADKM5pL6RCNlhrQZrGkmN/kAmTe5sHEq/nAPV5393DzJb6gZX9oI5IkgQZr1G5mwtB6RBZKnnC54/pQG2EovVzp3GU9FK0dmaj5Puehjw4wEWd10QL7SEI8iLjoJZMCv1SH5YzBq+giX4990EkzIm5EaRmt+KFmVlPwInxDUHw8B2AVd8Gj3jUXtD1G8SOgHeBHF5Id6Ps1NkIxjCmO95EtlwA8Y2RXUhh8SLbdz0Q8ROPYpNplHeqSKO9uw+nqkKqQoCq8m8ldbAMBajK5oFnDB85zyzAFXH9Y3t/cIRXmSqa214RHp2bDf1NnqKIi5oXzOniP3DaJ5+w68Aee48Sq94OplLCIVHFSFklXWp9/joW7/Bep6RMTSbE+TWMWSHgdaEfZKtwCAU+PAOdpmLT6qKVPo7HHl1eal6wyh8c3V+1HXoMlvaW/hAtIqqA9hHkX1ClBIIJ+YgagQEtIRX50pmz545kruh6lIw9TIFP/hV5EwS2qRVAhDEb/2sEGvpFUlueivWn4yfxs8RNRS+QCWHEvOvbgINjfEjPmTXrwwqtaowuzs6z/R3Loze5FGwJFEccwAwaN/zM4ubHmY7mxd4qnD0ovHL6sNSJ2/DsezJ4C71cm5C/QR+zppABL+x6wfcp+VreSt7z11ancVmgdDipgN/DPWy1xZ7fZ5rPJw3MfmXJ4nJIUpWWAKPUYiGHuhMDXByhK7+HUTn+A1Qz5cxYhZn7SR8WwR4Vl9RuwgMQyMIHctqHc9Xmzu5LQ5jfMNxgwMO0bunYqAewb97DPzP3QnmnUf4ZZRQ7zCy/Bve135L0l/fi5w/Az2pyKj6WkTBvvklyn+GST4zVgjpwR054m5Qy/lMFagai29arIm8bdwLvyzjxoRUxlBiGo6daXpfON/7rlOm/BUKNtoTm4o11zWzoganJUATKf1muBeFhalSIK7McO93KX3zDlRWPho9Rj1W5VR9o9HhYWvtpva9X8G6EaY6SB0yb4q3+/ZW2HdMMT7NmPM01t3Hnp7d557bZurFMYRbKovZ2lZfZKkjCxPt0hQhb5eZd1o+QQBnhIVmUENCvkfsah/swqBK3O6i2rmag9Vir8nKnOeOsGN++V+Rq9JYv+kpKT6qifLzxeMsgIzezBmY52pbuNdFo0BiabMusXYrkDdyorvVJEIpoMBMyD/5sybBaztqqrbMQWPkLHZBcYQvWZMIkbN1zoDzsV11Q3ZwywxNOf3XFM+Vl+5QPdGY0Cimi8jilcoXqLAAgeCDihji/zQzty1+ntNcj1ApYp/0adXACUPREONjCBeVPCNyZmdyiX+OiOLvTIyGavUfFG3CARA2bJQ448h9F6h6inLahp8KA4t04DatYK6YTNLPCR6Aph2FFjqiVPptUVo7BFQQOmQrRbtOZYtrOmxi6pY3e8hsy/QKiSPADqj/NsyH9zm+vtQ7YoprIQE+pW5XSjUbqQdrNgDOC0Wm7+tANj1xeLMZCduQIzVY27XH2o3Tr+Br1AEYgzX0dMAF3K/p9/AV4ADJNnjkGD3KE3HKN8CznjFnulzAtTuiBc5NAg4s42LOcoWLizzjX4DXwFJj8mS+0QEnPjUZEBW35TLpPLByQOSNNOVaAKJfGSOhoVLDosRlQXGRi54fF0wr0zf2wDaHsyeuk443M/qbMRqx0P+KpCUoMxazTFQM9G6GGfk3LpkhkcX9ZPH/zNeFcLW0lCs8QvSz+4QY8xp6GPg0CjRIzvisV4rD85Dhh+/POnyEii4w3WI/SP6TPahhjbN7NMV4iP7qXCtUVgBY+t0NFK7lVsbm4oGq+wgx0XhCN0xSfrtR7gHVreQXLiZeJB6CHaw6RaK48r3aaLlHq+hk9mC6UQTs1OJ2lsHd8Aanfg83Ex0azgHwAoGdUBMSYxt4HZjImZBmE90eUTAT23rpF+RGiJa8SZqpMHNRId8wS1ylK6PRDIltrgn15ecXuGAbjXEQCG6Vw4JQ9O4YFkhyEDzNQrXxJCV6TqKo4s7yPLwz8ZYyp0pOuGyyWIWAVkhjz7O1TXbKkCD+wVHzeaiiq+f5uk1j17luxixWIYILPOPGkPdynk5rAZNy8Fone6INBNnA2nG7E41RsTf1kirtYd+C2QvoXUZdNJtNmovez2jTRnddv5AmomWGdm3uNtG8vi/a9bCJiVmV+C3luinMbOIPNHLB59EtKV2lJGCaKSZuNYHKNbWjIjXUHVH+IVrWhzzLGnfnj4YM80PuOSxhcplT9LRdmhudzKwz8FdHVztKxPc6LRnxgup2kc3X9w4PYKsV5Z7pvDm6+PU2XPflL9ALO6SLc15AdrM7Twaidj4y6xelL9xS8VfprPY/tvQJwUFrjHlfzj43qVGg+4iVknlTcHCWD5lEuhjtJmkadzCwDgFAzkjtTsRlFb2E2+ht9ozCYQl85BSVSYaThKpYCNX33Tb2KMKZynYTSZbBuYRI/vubDfLU3AArXogA1Q+VXhZjr+zCIRFO52m3mGEUHqGVqtbD+rIm7bYXaYsFlh6sP/KdwIXmeLpruhvTtnm6eAd9UJ+DLvNlDjlH2grj6YxmVwYVAduf7b0aBNND0OuUCOx+zkcAzDTuUrTGLrQOFNy6D2t/LgGDiRAnO3HCF7gGIA5YJVU3YwhBZ1qYrUShGT4FeyI7B/w4gcsdtavsVZI3iljCXc7eYIHQ88Yaumqgx5oP8BoWJI4rcJatYS3bg+ImTApWH2qWIP9OTk1FhUWFlY4sk6/gYJaWPBEeDZGxCIQIZ9mBSRrSVf6wQfl6g57plIIrjhsuxq+EyejeDNC+JDQ/W9IyMUDhkrDAvBzdxOWdJQArMDNjTEEeUhFOTDg7xCPM+iJpepxfc5qienYMmt/X3zklkWzMoDrcMfTzT9keGBn3SAckL4gUbJkkQwkHjwfYkNMTFtNIlQ1mfdcxKa43aj2K3AtoTqQCq5txMiEI0RinRgYN8YQm35JGCV3L/VrynqDHs6RMIF6fnJd70o21hMqCgnkTF6hlMyoJIm4mesrkertlk7T3gaHLo8gnKKmHb9B01iQyowBYqEeAvD1WJKIQn/qytj5ygEz6nDLGSNZsicFPH/k89FKRuPgz4/c0EjhS1OCaebgV7CGlkRWSzce3z8pKeWt8UYdg4suvZiSlNRBxyeEtjs5wOgcQ5ofRbzhTGltyvMGglnTMv9JfdUXms0dbAExb1CYyUBTBNBxi9IFACes57oziNDjFFZi6+o3VoDvAmXc763fGsGQLuPYcqyR8PWPFEb82CYEGfSd/t2L+q09eKvytX78qcV0cddIYolvHgcKDPbUlRqM0J45G2XIR2Iceifz6SuTaEeV2sbjLOjlJjLRyGsKjolbjtjORmOJPdhN+1TrmZluC+jKzgX6rTlus0i6Fc2Nx47Ac7Txt+g3JmEVzXwFwEGGTyjoUmHHnH36dDTM3EQb3XTS3yGY/kfBb+YLKDFi6dO0scea7zS5O61T8JN5/xYmbChLG5kxfIOMGPIpRECWqQIKrFhOS+HfymoKY3+6seSS13YNQVQLZs3ZljtPaUKVaAc91ZQlDKUehRuZDvNTYcnnVIkyJ3hhsxrzEe2I3t7fnhFC99DN2/cNFlbRx3hS2XURLS2WbVDhd7oNNYxc1sosYgbT9HgZfex8GgJOUCWy9Usaj1eUljDaQFwAE76ia7TD3jNWc4eK0HFUNWsco1ePASR8QhsMgHL6Z8dw3RxeXFVq9udhK3Ubm8Gv1MUbgI56XlXf1NZ51x5gpRwUnGBxQjODiXg5EgVhw7VOpTFbAKihtaF9cJta3cdvl0Y7q0iiHSB5ZO6lRnh+LW6ccW2yjPFx9CwHg+ybrElIvK1R+Sn2hwbEw1yu5Ne0jrhvCexyhr69qtbQ1lWBhLeo23oBw6Zik3izCGVddrVLQO+uuaflxfWHl/f0IkLnaNuwalb8b3/Z5Bd49G34lNiqXYqyPoYeTWtHP0PyyPjAepAbExqjHoIYMt9semZPjdovkt50v01xOTl7jl+rqZcT4qr507th/GpH/VFtNDnvU71z6iEjZXRNoN1cfSbsxcVBXhTnrpnckFYROFivXqVp3LQlRtQ4Huh4kprEMCbDqXfQYKA+f0aRbylBgVXMi7OxBrKA0QZDpexHLl6A1Twy69h0tLKCkBa2TQ5XbddQmMPZL2xZlJqMdMaES0IbuqqLGa2NJTz1MmJGRlsTZ5I3j3GmkE4pS8iGbdQIFQfRTKsotCa+fVa/dycQ39lUEknXK3gxpicF1amKQjruWzcoeBPLSM5ZGsja/+TM1WSE9zHgZXq4HXPAvYOIL+4/IUfG4696JSUlCTlj4nP5X3rdeCzdeHt3Xht9bepf+At/waf4X0w7V2YVjYQRAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./static/img/tengo.png":
/*!******************************!*\
  !*** ./static/img/tengo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./static/svg/About.js":
/*!*****************************!*\
  !*** ./static/svg/About.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/About.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var About = function About(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 502.643 502.643"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M251.256 237.591c37.166 0 67.042-30.048 67.042-66.977.043-37.037-29.876-66.999-67.042-66.999-36.908 0-66.869 29.962-66.869 66.999 0 36.973 29.962 66.977 66.869 66.977zM305.032 248.506H197.653c-19.198 0-34.923 17.602-34.923 39.194v107.854c0 1.186.604 2.243.669 3.473h175.823c.129-1.229.626-2.286.626-3.473V287.7c.064-21.592-15.661-39.194-34.816-39.194zM431.588 269.559c29.832 0 53.754-24.008 53.754-53.668s-23.922-53.711-53.754-53.711c-29.617 0-53.582 24.051-53.582 53.711-.064 29.639 23.966 53.668 53.582 53.668zM474.708 278.317h-86.046c-15.445 0-28.064 14.107-28.064 31.472v86.413c0 .928.453 1.812.518 2.826h141.03c.065-1.014.496-1.898.496-2.826v-86.413c.065-17.365-12.532-31.472-27.934-31.472zM71.011 269.559c29.789 0 53.733-24.008 53.733-53.668S100.8 162.18 71.011 162.18c-29.638 0-53.603 24.051-53.603 53.711s23.965 53.668 53.603 53.668zM114.109 278.317H27.977C12.576 278.317 0 292.424 0 309.789v86.413c0 .928.453 1.812.539 2.826h141.03c.065-1.014.475-1.898.475-2.826v-86.413c.043-17.365-12.555-31.472-27.935-31.472z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./static/svg/Contact.js":
/*!*******************************!*\
  !*** ./static/svg/Contact.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/Contact.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Contact = function Contact(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 511.882 511.882"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M389.898 430.449l-86.29-57.527a8.887 8.887 0 0 0-11.886 1.929l-25.125 32.302c-8.143 10.612-22.839 13.641-34.514 7.113l-4.645-2.551c-16.759-9.143-37.623-20.517-79.04-61.934-41.417-41.417-52.8-62.281-61.934-79.049l-2.56-4.645c-6.527-11.672-3.498-26.366 7.113-34.505l32.293-25.134a8.878 8.878 0 0 0 1.929-11.886l-57.518-86.299a8.842 8.842 0 0 0-11.886-2.679l-36.105 21.65a34.738 34.738 0 0 0-15.899 20.489c-11.858 43.182-1.883 118.793 112.96 233.646s190.437 124.846 233.655 112.978a34.74 34.74 0 0 0 20.489-15.909l21.641-36.105a8.83 8.83 0 0 0-2.678-11.884z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M510.425 15.156a4.973 4.973 0 0 0-3.572-1.456H123.767a4.973 4.973 0 0 0-5.028 5.028V151.83l21.723 32.585c7.835 11.838 5.26 27.708-5.915 36.462l-32.265 25.134a8.723 8.723 0 0 0-2.359 11.173l2.633 4.8a230.534 230.534 0 0 0 30.51 44.471h373.787a4.993 4.993 0 0 0 5.029-4.919V18.728a4.97 4.97 0 0 0-1.457-3.572zM250.661 181.434v-.046l-93.659 100.343a9.144 9.144 0 0 1-13.376-12.47l93.659-100.297a9.144 9.144 0 0 1 13.376 12.47zm64.649-7.204a30.305 30.305 0 0 1-18.286-6.034L144.211 52.319a9.16 9.16 0 0 1 11.1-14.574l152.75 115.877a12.336 12.336 0 0 0 14.501 0L475.356 37.745a9.147 9.147 0 0 1 11.054 14.574L333.596 168.196a30.303 30.303 0 0 1-18.286 6.034zm171.813 107.95a9.142 9.142 0 0 1-12.928-.448l-93.65-100.343a9.143 9.143 0 0 1 13.394-12.425l93.632 100.297a9.143 9.143 0 0 1-.448 12.919z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

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

/***/ "./static/svg/News.js":
/*!****************************!*\
  !*** ./static/svg/News.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/News.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var News = function News(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 477.867 477.867"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M460.8 119.467h-85.333v-102.4C375.467 7.641 367.826 0 358.4 0H17.067C7.641 0 0 7.641 0 17.067V409.6c0 37.703 30.564 68.267 68.267 68.267H409.6c37.703 0 68.267-30.564 68.267-68.267V136.533c0-9.425-7.641-17.066-17.067-17.066zM136.533 85.333h102.4c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067h-102.4c-9.426 0-17.067-7.641-17.067-17.067s7.642-17.067 17.067-17.067zm153.6 324.267h-204.8c-9.426 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h204.8c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm0-68.267h-204.8c-9.426 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h204.8c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm0-68.266h-204.8c-9.426 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h204.8c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm0-68.267h-204.8c-9.426 0-17.067-7.641-17.067-17.067s7.641-17.067 17.067-17.067h204.8c9.426 0 17.067 7.641 17.067 17.067s-7.641 17.067-17.067 17.067zm153.6 204.8c0 18.851-15.282 34.133-34.133 34.133s-34.133-15.282-34.133-34.133v-256h68.267v256z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (News);

/***/ }),

/***/ "./static/svg/Projects.js":
/*!********************************!*\
  !*** ./static/svg/Projects.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/Projects.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var Projects = function Projects(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    viewBox: "0 0 465.987 465.987"
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M372.735 236.547a8 8 0 0 0-14.32 3.672l-4.44 31.12c-.107.4-.247.79-.416 1.168a143.811 143.811 0 0 0 19.56-35.448l-.384-.512zM346.047 278.203c-.377 0-.754-.024-1.128-.072l-47.52-6.792a8 8 0 0 1-6.784-9.054v-.002l4.44-31.12a8 8 0 0 0-12.712-7.528l-25.152 18.856a8 8 0 0 1-11.2-1.6l-28.8-38.4a8 8 0 0 1 1.6-11.2l25.144-18.856a8 8 0 0 0-3.672-14.32l-31.12-4.448a8 8 0 0 1-6.793-9.047l.001-.009 6.792-47.512a8 8 0 0 1 9.047-6.793l.009.001 31.12 4.448a7.952 7.952 0 0 0 8-3.848 7.832 7.832 0 0 0-.48-8.88l-18.84-25.136a8 8 0 0 1 1.6-11.2l4.536-3.4a146.69 146.69 0 0 0-22.032.592C143.087 51.905 86.347 123.274 95.369 202.29a143.998 143.998 0 0 0 65.438 104.945 45.871 45.871 0 0 1 21.696 38.424v32.328c0 13.255 10.745 24 24 24h64c13.255 0 24-10.745 24-24v-31.664a47.127 47.127 0 0 1 22.16-39.376 144.964 144.964 0 0 0 33.384-29.92 7.99 7.99 0 0 1-4 1.176zm-99.544 99.784h-16v-24h16v24zm-16-40c-.005-21.152-13.048-40.112-32.8-47.68-57.609-22.526-86.049-87.487-63.523-145.096a111.999 111.999 0 0 1 44.635-53.992l8.488 13.536c-44.875 28.237-58.362 87.505-30.125 132.38a96.002 96.002 0 0 0 46.301 38.284c25.928 9.917 43.044 34.808 43.024 62.568h-16zM206.503 441.987v8c0 8.837 7.163 16 16 16h32c8.837 0 16-7.163 16-16v-8h-64z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M156.487 313.987a151.402 151.402 0 0 1-13.672-9.992c-12.077 23.51-40.925 32.778-64.435 20.702a47.857 47.857 0 0 1-25.989-42.71c.037-24.187 18.05-44.575 42.048-47.592a152.348 152.348 0 0 1-6.336-27.128l-1.4 6.656c-1.818 8.647-10.303 14.183-18.95 12.365a15.983 15.983 0 0 1-5.778-2.477l-16.64-11.424-14.576 14.544 11.456 16.656c5.014 7.276 3.18 17.24-4.096 22.254a16.003 16.003 0 0 1-5.784 2.482l-19.944 4.2v19.008l19.944 4.2c8.647 1.821 14.181 10.307 12.36 18.954a15.994 15.994 0 0 1-2.488 5.79l-11.448 16.568 14.576 14.544 16.624-11.456c7.276-5.014 17.24-3.18 22.254 4.096a16.003 16.003 0 0 1 2.482 5.784l4.192 19.976h19.016l4.192-19.944c1.82-8.647 10.305-14.182 18.952-12.362a16.003 16.003 0 0 1 5.784 2.482l16.616 11.424 17.16-17.16a39.05 39.05 0 0 0-16.12-20.44zM206.503 409.987h64v16h-64zM438.255 137.915c-13.121-1.876-22.237-14.035-20.361-27.156a23.997 23.997 0 0 1 9.361-15.804l18.744-14.064-19.2-25.6-18.744 14.056c-10.602 7.956-25.646 5.81-33.601-4.791a24.002 24.002 0 0 1-4.567-17.769l3.312-23.2-31.672-4.52-3.312 23.2c-1.877 13.121-14.035 22.237-27.156 20.361a23.997 23.997 0 0 1-15.804-9.361l-14.064-18.776-25.6 19.2 14.056 18.744c7.954 10.603 5.807 25.646-4.796 33.601a23.998 23.998 0 0 1-17.804 4.559l-23.2-3.312-4.544 31.68 23.2 3.312c13.121 1.877 22.237 14.035 20.361 27.156a23.997 23.997 0 0 1-9.361 15.804l-18.736 14.064 19.2 25.6 18.744-14.056c10.603-7.954 25.646-5.807 33.601 4.796a24 24 0 0 1 4.559 17.804l-3.312 23.2 31.744 4.544 3.312-23.2c1.877-13.121 14.035-22.237 27.156-20.361a23.997 23.997 0 0 1 15.804 9.361l14.064 18.736 25.6-19.2-14.104-18.776c-7.951-10.605-5.8-25.648 4.805-33.599a24 24 0 0 1 17.763-4.561l23.2 3.312 4.52-31.672-23.168-3.312zm-97.864 50.184c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48c-.031 26.497-21.503 47.969-48 48zM390.503 297.987h56v16h-56zM377.383 352.128l10.242-12.293 48.003 39.994-10.241 12.293zM342.503 361.987h16v56h-16zM4.56 138.22l63.996-15.998 3.878 15.514-63.996 15.998zM17.849 56.5l9.294-13.012L83.14 83.483l-9.295 13.013zM86.394 3.958l15.5-3.963 16.363 63.995-15.5 3.963z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Projects);

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

/***/ 5:
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