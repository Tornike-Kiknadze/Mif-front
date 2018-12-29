webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components */ "./components/index.js");
/* harmony import */ var _static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/svg/RightArrow */ "./static/svg/RightArrow.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "./node_modules/strapi-sdk-javascript/build/main/index.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_svg_MainIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/svg/MainIcon */ "./static/svg/MainIcon.js");

var _jsxFileName = "/home/reziko/projects/mif/client/pages/index.js";

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







var strapiApi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_5___default.a('http://localhost:1337');

var HomePage =
/*#__PURE__*/
function (_Component) {
  _inherits(HomePage, _Component);

  function HomePage(props) {
    var _this;

    _classCallCheck(this, HomePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HomePage).call(this, props));
    _this.state = {
      posts: [],
      news: []
    };
    return _this;
  }

  _createClass(HomePage, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var news, projects;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return strapiApi.getEntries('News');

              case 3:
                news = _context.sent;
                _context.next = 6;
                return strapiApi.getEntries('Projects');

              case 6:
                projects = _context.sent;
                this.setState({
                  news: news,
                  projects: projects
                });
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                alert(_context.t0);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          news = _this$state.news,
          projects = _this$state.projects;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainContainerCenter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, "Svg Illustration Here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(News, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsCenter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeaderLeft, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, "Latest News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeaderRight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "All News", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        width: 15,
        height: 15,
        fill: '#27cba4',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Posts, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, news.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostItem"], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        });
      })), ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsSlider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsBG, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
        data: projects,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))))));
    }
  }]);

  return HomePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (HomePage);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Container",
  componentId: "sc-1wbo52z-0"
})(["width:100%;height:100%;"]);
var MainContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__MainContainer",
  componentId: "sc-1wbo52z-1"
})(["width:100%;height:80vh;background:#fff5f3;"]);
var MainContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__MainContainerCenter",
  componentId: "sc-1wbo52z-2"
})(["width:1224px;height:100%;margin:auto;display:flex;align-items:center;justify-content:center;font-size:16px;"]);
var News = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__News",
  componentId: "sc-1wbo52z-3"
})(["width:100%;background:#ffffff;margin:30px 0;"]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsHeader",
  componentId: "sc-1wbo52z-4"
})(["width:100%;margin-top:50px;color:#543243;font-weight:800;font-size:18px;padding-left:10px;display:flex;justify-content:space-between;"]);
var ProjectsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsHeader",
  componentId: "sc-1wbo52z-5"
})(["width:100%;margin-top:30px;color:#301d28;font-size:18px;font-weight:bold;position:relative;"]);
var ProjectsBG = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsBG",
  componentId: "sc-1wbo52z-6"
})(["width:80px;height:80%;position:absolute;top:10px;background:rgba(255,255,255,0.6);z-index:-1;"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Span",
  componentId: "sc-1wbo52z-7"
})([""]);
var NewsHeaderLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsHeaderLeft",
  componentId: "sc-1wbo52z-8"
})([""]);
var NewsHeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsHeaderRight",
  componentId: "sc-1wbo52z-9"
})(["display:flex;align-items:center;cursor:pointer;&:hover{color:#27cba4;}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Icon",
  componentId: "sc-1wbo52z-10"
})(["margin-left:8px;transition:0.3s;", ":hover &{transform:translateX(5px);}"], NewsHeaderRight);
var Posts = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Posts",
  componentId: "sc-1wbo52z-11"
})(["width:100%;margin-top:30px;display:flex;align-items:center;flex-wrap:wrap;"]);
var ProjectsSlider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsSlider",
  componentId: "sc-1wbo52z-12"
})(["width:100%;"]);
var NewsCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsCenter",
  componentId: "sc-1wbo52z-13"
})(["width:1224px;height:100%;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./static/svg/MainIcon.js":
/*!********************************!*\
  !*** ./static/svg/MainIcon.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/reziko/projects/mif/client/static/svg/MainIcon.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



var MainIcon = function MainIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", _extends({
    "data-name": "Layer 1",
    width: 1177.82,
    height: 836.94
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("defs", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__a",
    x1: 232.43,
    y1: 292.26,
    x2: 232.43,
    y2: 247.6,
    gradientUnits: "userSpaceOnUse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0,
    stopColor: "gray",
    stopOpacity: 0.25,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 0.54,
    stopColor: "gray",
    stopOpacity: 0.12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("stop", {
    offset: 1,
    stopColor: "gray",
    stopOpacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__b",
    x1: 408.15,
    y1: 247.13,
    x2: 408.15,
    y2: 202.46,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__c",
    x1: 616.5,
    y1: 333.84,
    x2: 616.5,
    y2: 289.17,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__d",
    x1: 829.09,
    y1: 363.41,
    x2: 829.09,
    y2: 318.75,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__e",
    x1: 886.06,
    y1: 392.32,
    x2: 886.06,
    y2: 347.66,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__f",
    x1: 957.49,
    y1: 315.08,
    x2: 957.49,
    y2: 270.41,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__g",
    x1: 943.03,
    y1: 377.73,
    x2: 943.03,
    y2: 333.07,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__h",
    x1: 471.08,
    y1: 247.13,
    x2: 471.08,
    y2: 202.46,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__i",
    x1: 255.53,
    y1: 355.4,
    x2: 255.53,
    y2: 310.73,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__j",
    x1: 441.44,
    y1: 311.5,
    x2: 441.44,
    y2: 266.84,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__k",
    x1: 681.87,
    y1: 284.81,
    x2: 681.87,
    y2: 240.15,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__l",
    x1: 925.27,
    y1: 253.49,
    x2: 925.27,
    y2: 208.83,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__m",
    x1: 742.73,
    y1: 247.13,
    x2: 742.73,
    y2: 202.46,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__n",
    x1: 740.12,
    y1: 333.84,
    x2: 740.12,
    y2: 289.17,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__o",
    x1: 533.02,
    y1: 268.69,
    x2: 533.02,
    y2: 224.03,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__p",
    x1: 287.92,
    y1: 283.06,
    x2: 287.92,
    y2: 238.4,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__q",
    x1: 310.98,
    y1: 333.84,
    x2: 310.98,
    y2: 289.17,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__r",
    x1: 502.32,
    y1: 341.08,
    x2: 502.32,
    y2: 296.42,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__s",
    x1: 839.93,
    y1: 253.49,
    x2: 839.93,
    y2: 208.83,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__t",
    x1: 880.75,
    y1: 315.08,
    x2: 880.75,
    y2: 270.41,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__u",
    x1: 620.53,
    y1: 247.13,
    x2: 620.53,
    y2: 202.46,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__v",
    x1: 676.65,
    y1: 377.73,
    x2: 676.65,
    y2: 333.07,
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__w",
    x1: 378.28,
    y1: 850.01,
    x2: 378.28,
    y2: 245.95,
    gradientTransform: "matrix(-1 0 0 1 1188.16 0)",
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("linearGradient", {
    id: "prefix__x",
    x1: 499.11,
    y1: 829.74,
    x2: 499.11,
    y2: 228.24,
    gradientTransform: "matrix(-1 0 0 1 1014.03 0)",
    xlinkHref: "#prefix__a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, 'scrum board'), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1177.82 537.54a320.15 320.15 0 0 1-7.07 67.29q-2.38 11.11-5.53 21.78-3.9 13.3-8.92 25.79-2.55 6.36-5.39 12.5a190.7 190.7 0 0 1-12.17 67.57c-14.35 38-40.48 69-73.18 87.11a137 137 0 0 1-66.65 17.36H223.59c-41.44 0-79.85-14.73-111.34-39.83a205.27 205.27 0 0 1-25.57-24.35 217.49 217.49 0 0 1-28.11-40.29c-18.14-33.35-28.59-72.61-28.59-114.63C11.03 579.47 0 533.47 0 483.97c0-62.39 17.56-119.29 46.41-162.38a222.06 222.06 0 0 1 19.71-25.33 192.82 192.82 0 0 1 22.54-21.32 171.51 171.51 0 0 1 20-13.86c2.89-1.7 5.79-3.3 8.74-4.79q3.88-2 7.86-3.73 4.77-2.1 9.66-3.85t9.65-3.07a136.49 136.49 0 0 1 14.25-3.17c4-.69 8-1.2 12-1.53q4.77-.39 9.62-.45h1.75c3.56 0 7.1.17 10.61.44.37-.86.77-1.72 1.14-2.58a427.9 427.9 0 0 1 4.31-9.16.35.35 0 0 0 0-.08c.25-.52.5-1 .76-1.55 1.18-2.46 2.41-4.9 3.67-7.32.58-1.12 1.15-2.23 1.74-3.34.13-.26.26-.51.41-.77.6-1.15 1.21-2.29 1.83-3.43q4.63-8.53 9.63-16.8c.29-.47.56-.94.85-1.4.52-.85 1-1.7 1.58-2.54 1.38-2.24 2.8-4.47 4.23-6.68 1-1.56 2-3.12 3.08-4.66q3.9-5.85 8-11.55t8.52-11.4c.4-.52.8-1 1.22-1.55l4.27-5.37.59-.73 1.55-1.89c2.29-2.79 4.64-5.55 7-8.28a402.78 402.78 0 0 1 38.3-38.55c.53-.49 1.07-1 1.6-1.42a428.7 428.7 0 0 1 7.7-6.53 403.55 403.55 0 0 1 44.41-32c1.06-.68 2.14-1.34 3.23-2a403.86 403.86 0 0 1 42.49-22.6q12-5.52 24.25-10.22c5.42-2.06 10.86-4 16.37-5.84q12.78-4.22 25.88-7.65A404.94 404.94 0 0 1 539.65.72q12-.72 24.27-.72a406.42 406.42 0 0 1 116.99 17.09 4.08 4.08 0 0 0 3.63 2.18h3.37c1.46.46 2.91.94 4.37 1.42q12.23 4.06 24.11 8.89l2 .82a405.55 405.55 0 0 1 104.56 62.86q3.51 2.89 6.92 5.87 4.14-3.07 8.42-5.87a154 154 0 0 1 34.88-17.18 138.67 138.67 0 0 1 78.24-3.54c33.25 8.15 63.35 28.37 87.66 57.12a234.54 234.54 0 0 1 26.29 38.56c.55 1 1.1 2 1.63 3a271.55 271.55 0 0 1 16.74 38.55c.17.48.34 1 .49 1.44a298.58 298.58 0 0 1 10.3 38.53c.12.66.26 1.33.38 2a317.85 317.85 0 0 1 4.92 38.55c0 .47 0 .94.08 1.41q.63 10.06.64 20.34 0 9.2-.51 18.22c0 .67-.08 1.35-.13 2-.09 1.75-.22 3.5-.35 5.24a205.42 205.42 0 0 1 21.38 23.28q4.37 5.53 8.46 11.45a249.89 249.89 0 0 1 21.8 38.55c16.91 36.95 26.63 80.33 26.63 126.76z",
    fill: "tomato",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M1072.82 798.3c0 14.85-45.92 28.4-121.38 38.64h-708c-75.45-10.24-121.37-23.79-121.37-38.64 0-11.31 26.64-21.87 72.7-30.79l1.3-.25c13-2.49 27.53-4.85 43.41-7.06l1.21-.17q18.9-2.61 40.21-4.93l1.34-.14q8.22-.9 16.78-1.74l2.2-.21c41.55-4 88.78-7.24 140-9.41h.06q10.76-.45 21.75-.84 12.22-.45 24.74-.8c6.37-.19 12.82-.35 19.29-.5h.15c29.19-.69 59.35-1.05 90.19-1.05 76.26 0 148.34 2.19 212.21 6.08h.18c9.82.6 19.46 1.23 28.86 1.91l8 .59q15.91 1.2 31 2.54c118.33 10.53 195.17 27.56 195.17 46.77z",
    fill: "tomato",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M316.91 105.32v30.33a4.1 4.1 0 0 1-4.1 4.11h-55.52a402.78 402.78 0 0 1 38.3-38.55h17.23a4.1 4.1 0 0 1 4.09 4.11z",
    fill: "none",
    stroke: "#fff",
    strokeMiterlimit: 10,
    opacity: 0.03,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M996.31 105.26v455.62a12 12 0 0 1-12 12H170.82a12 12 0 0 1-12-12V242.47c4-.69 8-1.2 12-1.53q4.77-.39 9.62-.45h1.75c3.56 0 7.1.17 10.61.44.37-.86.77-1.72 1.14-2.58a427.9 427.9 0 0 1 4.31-9.16.35.35 0 0 0 0-.08c.25-.52.5-1 .76-1.55 1.18-2.46 2.41-4.9 3.67-7.32.58-1.12 1.15-2.23 1.74-3.34.13-.26.26-.51.41-.77.6-1.15 1.21-2.29 1.83-3.43q4.63-8.53 9.63-16.8c.29-.47.56-.94.85-1.4.52-.85 1-1.7 1.58-2.54 1.38-2.24 2.8-4.47 4.23-6.68 1-1.56 2-3.12 3.08-4.66q3.9-5.85 8-11.55t8.52-11.4c.4-.52.8-1 1.22-1.55l4.27-5.37.59-.73 1.55-1.89c2.29-2.79 4.64-5.55 7-8.28a402.78 402.78 0 0 1 38.3-38.55c.53-.49 1.07-1 1.6-1.42a428.7 428.7 0 0 1 7.7-6.53h518.2q3.51 2.89 6.92 5.87 4.14-3.07 8.42-5.87h146a12 12 0 0 1 11.99 11.91z",
    fill: "#fff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M948.34 180.56v11.34H218.79c1.38-2.24 2.8-4.47 4.24-6.68 1-1.56 2-3.12 3.07-4.66z",
    fill: "#3f3d56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#3f3d56",
    d: "M791.86 125.16v431.85h-11.34V125.16zM583.23 125.16v431.85h-11.34V125.16zM374.6 125.16v431.85h-11.34V125.16z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M255.49 247.6v44.66h-46.12v-31.6-.08c.25-.52.5-1 .76-1.55 1.19-2.46 2.41-4.9 3.68-7.32.57-1.12 1.14-2.23 1.73-3.34.13-.26.27-.51.41-.77z",
    transform: "translate(-11.09 -31.53)",
    fill: "url(#prefix__a)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 235
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M243.61 216.84v43.12h-44.53v-32.49c1.19-2.46 2.41-4.9 3.68-7.32.57-1.12 1.14-2.23 1.73-3.34z",
    fill: "#7cfcff",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__b)",
    d: "M385.08 202.46h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M385.88 203.23h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__c)",
    d: "M593.43 289.17h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M594.23 289.94h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__d)",
    d: "M806.03 318.75h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M806.82 319.52h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__e)",
    d: "M862.99 347.66h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M863.79 348.43h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__f)",
    d: "M934.43 270.41h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M935.22 271.18h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__g)",
    d: "M919.97 333.07h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M920.76 333.84h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__h)",
    d: "M448.01 202.46h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#7cfcff",
    d: "M448.81 203.23h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 257
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__i)",
    d: "M232.47 310.73h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 258
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M233.26 311.5h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__j)",
    d: "M418.37 266.84h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M419.17 267.61h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__k)",
    d: "M658.81 240.15h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M659.6 240.92h44.54v43.12H659.6z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__l)",
    d: "M902.2 208.83h46.13v44.66H902.2z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M903 209.6h44.54v43.12H903z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__m)",
    d: "M719.67 202.46h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 266
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M720.46 203.23H765v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__n)",
    d: "M717.05 289.17h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M717.85 289.94h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__o)",
    d: "M509.95 224.03h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ffffa5",
    d: "M510.75 224.79h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__p)",
    d: "M264.85 238.4h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M265.65 239.17h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 273
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__q)",
    d: "M287.92 289.17h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M288.71 289.94h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__r)",
    d: "M479.26 296.42h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M480.05 297.19h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__s)",
    d: "M816.86 208.83h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M817.66 209.6h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__t)",
    d: "M857.68 270.41h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M858.48 271.18h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__u)",
    d: "M597.46 202.46h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 282
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M598.26 203.23h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 283
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "url(#prefix__v)",
    d: "M653.59 333.07h46.13v44.66h-46.13z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 284
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    fill: "#ff69b4",
    d: "M654.38 333.84h44.54v43.12h-44.54z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M930.21 373.5a8.83 8.83 0 0 0-3.52-5.92 35.06 35.06 0 0 0-6.12-3.54 5 5 0 0 1-1.78-1.27 15.91 15.91 0 0 1-1-1.92c-1.2-2.09-3.8-2.75-5.84-4-3.64-2.21-5.32-6.13-6.83-10.25-.1-.26-.18-.52-.28-.77-1.47-4.08-2.87-8.26-5.92-11.12a12.7 12.7 0 0 0-15.88-.85 3.74 3.74 0 0 1-2.24 1.11 4.23 4.23 0 0 1-2.15-1.16 8.77 8.77 0 0 0-5.36-1.48 51.08 51.08 0 0 1-1.51-11.15v-.1a.15.15 0 0 1 0-.07v-2.78h.63a7.15 7.15 0 0 0 2.21-.25 6 6 0 0 0 .87-.32c2.69-1.27 4.32-4.27 5.53-7.11.8-1.88 1.54-3.81 2.17-5.78.08-.25.15-.5.24-.76.11-.4.24-.81.34-1.22 0-.13.07-.26.1-.39s.07-.25.1-.38l.09-.42.51.36.09.05 1.1.77c5.16 3.53 10.58 6.86 12.82 6.94a1.16 1.16 0 0 0 .66-.13c1.45-.8-1.33-3.78-4.82-6.81-.29-.26-.6-.51-.91-.77-2.59-2.19-5.38-4.31-7-5.53l-1.5-1.09c2-1.83 3.16-5.11 3.68-8a62.07 62.07 0 0 0 .94-8.39v-.14a33.85 33.85 0 0 0-.81-9c-1.36-5.72-4.8-11.18-10-13.86-1.5-.78-3.21-1.39-4.69-2.23-.28-.16-.53-.33-.79-.5a6.94 6.94 0 0 1-1.3-1.11 4.53 4.53 0 0 1-.66-.9 2.68 2.68 0 0 1-.26-.47 6.06 6.06 0 0 0-.74-1.43c-1-1.11-2.68-.78-4.13-.6H865c-5.19.12-10.2-2.78-15.45-2.78-5.74 0-10.63 3.33-15.69 5.61-1 .47-2 .89-2.89 1.32-.76.36-1.47.72-2.16 1.11a9.21 9.21 0 0 0-.78.49 11.1 11.1 0 0 0-4.28 5 10.3 10.3 0 0 0-2.11 4.07 10.06 10.06 0 0 0-.27 2.09 34.67 34.67 0 0 0-10.37 24.7v1.51a34.7 34.7 0 0 0 24.69 31.76c.39.12.79.24 1.2.34.1.34.24.68.34 1 .21.65.41 1.29.56 1.94.1.32.17.65.24 1a27.07 27.07 0 0 1 .72 6.79V335.38a26.36 26.36 0 0 0-7.5 3 14.47 14.47 0 0 0-6.31 7.77 6.23 6.23 0 0 0-.2.73 20.08 20.08 0 0 0-5.71-1c-1.77-.06-3.75.13-4.92 1.47a4.44 4.44 0 0 0-.91 1.89c-.68.61-.8 1.68-1.27 2.5-1.46 2.56-5.26 1.72-8.12 2.42a5.63 5.63 0 0 0-.85.28c-2.71 1-5 3.4-7.88 3.42a20.13 20.13 0 0 0-3.45-.19l-.21.05c-1.19.3-2.14 1.94-1.22 2.76-1.41-.32-2.79.63-3.69 1.77s-1.45 2.5-2.42 3.57a3.74 3.74 0 0 0-3.79-1.47 13.74 13.74 0 0 0-4 1.58 5.49 5.49 0 0 1-1.77.62 7.66 7.66 0 0 1-2.13-.19 17.2 17.2 0 0 0-10.09 1.41c-2.76 1.31-5.43-1.1-8.48-1.29a4.7 4.7 0 0 1-3.1-1 1.34 1.34 0 0 1-.23-.25 4.51 4.51 0 0 1-.44-.77c-.2-.46-.33-1-.5-1.43a12.15 12.15 0 0 0-8.39-7.76l-.5-.12a8.85 8.85 0 0 0 .42-1.76 10.39 10.39 0 0 0-6.51-11 11 11 0 0 0-3.8-9.63 16.84 16.84 0 0 1-1.82-1.43l-.1-.08a4.64 4.64 0 0 1-.69-.91 14.07 14.07 0 0 1-1.06-2.33c-.89-2.38-1.8-4.76-2.69-7.14-1.2-.24-2.13-.74-3.27-.93v-.73a23.72 23.72 0 0 0-1.23-7.17 33.1 33.1 0 0 0-3.89-7.72c-.25-.4-.51-.79-.78-1.18-.34-.53-.71-1-1.07-1.56-2.58-3.59-5.45-7.14-9.27-9.31a36.14 36.14 0 0 0-3.95-1.82l-7-2.87a3.29 3.29 0 0 0-1.25-.34c-1.68 0-2.13 2.31-1.46 3.9a3.94 3.94 0 0 0 .29.54c2.13 3.12 6.9 4 8.23 7.53a4.81 4.81 0 0 0-1.83.39 5.3 5.3 0 0 0-3.13 3.48 2.87 2.87 0 0 1-.66 1.56c-.63.49-1.58.21-2.27.59-1.24.66-.71 2.51-.84 3.91-.12 1.25-.89 2.33-1.27 3.52a6.2 6.2 0 0 0-.15 2.84l.06.3a3.43 3.43 0 0 0 .09.44A9.06 9.06 0 0 0 691 319a22.43 22.43 0 0 0 4.56 4.62c1.14.94 2.3 1.89 3.52 2.75.35.24.69.47 1 .7a1.18 1.18 0 0 0-.11.19c0 .14-.11.28-.17.43a2.2 2.2 0 0 0-.12 1.24 2 2 0 0 0 .39.82 7.47 7.47 0 0 0 .88.9 18 18 0 0 1 5.48 9.9 6.06 6.06 0 0 1-.08 2.24 18.42 18.42 0 0 0-.89 4.54 7.14 7.14 0 0 0 .14 1.12 23.74 23.74 0 0 0 1.58 5.17c1.86 4.72 3.83 9.6 7.54 13a42.1 42.1 0 0 0 8.46 20.83c3.89 5 9.1 8.78 14.25 12.49a26.68 26.68 0 0 0 5.26 3.3 30.26 30.26 0 0 0 5.22 1.41 268 268 0 0 0 43.65 5.1l2 .07h.1c0 .77.07 1.54.1 2.31q.51 11.53.47 23.08V437.28a11.59 11.59 0 0 1-.62 4.43 12.83 12.83 0 0 1-2.08 3c-.19.24-.4.49-.59.74-3 4-3.58 9.33-3.48 14.47v.09c0 .77 0 1.54.08 2.3A157.19 157.19 0 0 0 790 482.8c1.18 6.42.68 13.34 1.6 19.84a32 32 0 0 0 1.6 6.52q1.81 4.87 3.62 9.73a8.54 8.54 0 0 1 .72 2.87 4.8 4.8 0 0 1-.07.93c-.32 1.73-1.49 3.27-2.39 4.83a16.72 16.72 0 0 0-2.11 8.84v.25a1.44 1.44 0 0 0 .24.72c.39.54 1.21.49 1.86.39a74.12 74.12 0 0 1 7.85-.73h.28c-.09.11-.19.22-.28.34-.3.41-.6.85-.89 1.33l-.14.24a30 30 0 0 0-1.73 3.54 33.47 33.47 0 0 0-2.3 6.35 5.8 5.8 0 0 0-.23 1c-.16.66-.3 1.32-.4 2a63.51 63.51 0 0 0-.72 10.4V563.63c-.08 1.55-.16 3.12-.25 4.64-.29 5.56-.63 10.55-1.19 12.28a10.1 10.1 0 0 0-.34 3.4v.05a27.84 27.84 0 0 0 .64 4.53c.31 1.58.72 3.21 1.13 4.82v.16c0 .6.06 1.19.12 1.78v.08a29.36 29.36 0 0 0 1.59 7.73v1.31a1.34 1.34 0 0 0 0 .2c0 .72.09 1.45.16 2.17.22 2.11.57 4.21 1 6.31v.35q3 16.66 6.1 33.31c.12.67.25 1.33.38 2q3.36 17.82 7 35.59c.21 1 .4 2 .62 3 .11.47.21.95.33 1.42s.28 1.15.42 1.72a49.45 49.45 0 0 0 9.11 18 82.34 82.34 0 0 1 9.5 15.22c0 .15-.07.29-.11.44-.22 1.06-.46 2.11-.71 3.16l-.06.24c-2.66 11.29-6.21 22.42-7.44 34-.09.83-.16 1.66-.24 2.5-.36 3.79-.71 7.6-2.2 11.08-.43 1-.95 1.95-1.4 2.94a10.69 10.69 0 0 0-1.07 3.63 2.79 2.79 0 0 0 0 .5.57.57 0 0 0 0 .13.43.43 0 0 0 0 .05 7.22 7.22 0 0 0 1 3.54l-.13.1c-.27.21-.53.41-.78.62l-.5.42c-3.45 2.74-8.07 3.3-12.34 4.41s-8.83 3.36-10.15 7.58c-.08.27-.14.54-.2.82a2.76 2.76 0 0 0-.06.4 7.28 7.28 0 0 0-.09 1.23v.09a1.23 1.23 0 0 0 0 .19 11.39 11.39 0 0 0 5 8.35c3.54 2.43 8 3.19 12.2 3.74s8.64 1 12.5 2.87c3.32 1.65 6.13 4.36 9.65 5.55.21.07.42.11.64.17l-.19.11c-.48.29-1 .57-1.45.83l-.78.43a36.56 36.56 0 0 1-11.65 3.71c-4.12.57-9 .84-11.13 4.42a.71.71 0 0 0-.08.18 2.38 2.38 0 0 0-.23.55v.08a1.17 1.17 0 0 0-.09.24 1.43 1.43 0 0 0-.09.27 1.89 1.89 0 0 1 0 .23 4.28 4.28 0 0 0-.17.79 6.62 6.62 0 0 0 .07 2.08 9.32 9.32 0 0 0 2.69 4.87c2.5 2.35 6 3.37 9.28 4.1 7.59 1.67 15.35 2.27 23.1 2.87l7.53.58c2.69.21 5.39.41 8.08.6 1.91.12 3.82.24 5.73.33s3.64.15 5.46.19h2.84q7 0 13.91-.59c4.47-.4 8.89-1 13.29-1.78a3 3 0 0 0 2.16-1 2 2 0 0 0 .13-.25.85.85 0 0 0 .06-.17.36.36 0 0 0 0-.09 1.29 1.29 0 0 0 0-.19 2.54 2.54 0 0 0 0-.29v-.09-.62c0-.95 0-1.89-.07-2.84V840.84l-.06-1.17c-.07-1.14-.14-2.29-.24-3.43l-.12-1.36v-.45c0-.34-.06-.68-.1-1 0-.19 0-.39-.07-.59l-.18-1.61c-.14-1.18-.3-2.35-.47-3.52q-.55-3.84-1.35-7.63v-.07-.06c-.19-.86-.38-1.71-.56-2.56-.63-2.7-4.31 1-6.37 3.31-.27-1.29-.55-2.57-.89-3.82s0-.1 0-.15c.55-.25 1.09-.51 1.62-.77a5.76 5.76 0 0 0 3-2.48 4.31 4.31 0 0 0 .32-1.34 5.87 5.87 0 0 0 0-.84v-.66c-.3-5.94-.66-12.09-3.48-17.3a36.8 36.8 0 0 0-6.87-8.38c0-.64-.07-1.28-.1-1.92-.3-6.36-.73-12.72-1.33-19.07a278 278 0 0 0-5.31-34.47c-.71-3.07-1.43-6.14-2.32-9.17A60 60 0 0 0 872.1 703c-.67-1-1.39-2-2.12-3q-.32-5.62-1-11.26c-.6-5.16-1.4-10.3-2.25-15.39-.07-.48-.16-1-.21-1.47v-.08a4.84 4.84 0 0 1 .24-2 11.83 11.83 0 0 1 2-2.69 11.37 11.37 0 0 0 2.11-7 2.81 2.81 0 0 0 0-.29c0-2.65-.39-5.45-.57-8.08 0-.74-.07-1.47-.07-2.21v-.08-.33c0-.77 0-1.53.05-2.29.28-5.9 1.68-11.76 3-17.52 1.43-6 2.88-11.91 4.3-17.87.57-2.32 1.13-4.65 1.67-7 .21-.83.41-1.65.6-2.48a43.88 43.88 0 0 1 2.32-7.57c1.52-3.43 3.89-6.4 5.92-9.55a53.55 53.55 0 0 0 8.35-28.43.17.17 0 0 0 0-.07v-.12a1.34 1.34 0 0 0 0-.2v-2c0-.52 0-1-.09-1.58 1.24.44 2.49.89 3.72 1.37a21.08 21.08 0 0 0 .16-2.26v-.08c.1-4.63-.91-9.55-1-14.21a.66.66 0 0 1 0-.14v-.13a24.61 24.61 0 0 1 .31-4.57 18.39 18.39 0 0 1 .51-2.07c.35-.28.7-.56 1-.85a28.73 28.73 0 0 0 8.25-10.22c1.8-4 2.32-8.57 4.2-12.57 1.06-2.25 2.56-4.33 3.19-6.75a10.82 10.82 0 0 0 .33-2.26v-.12a74.36 74.36 0 0 0-.5-7.54v-1.21c.1-6.94 4.42-13.44 4.9-20.21v-.09a16.22 16.22 0 0 0-.16-3.4c-.53-3.37-2.32-6.52-2.65-9.88a8 8 0 0 1-.06-1.29 19.64 19.64 0 0 1 1.57-6.07c3.49-9.23 6.94-18.94 7.2-28.67a.27.27 0 0 0 0-.09v-.21a36.09 36.09 0 0 0-.61-7.95c-.46-2.55-1.21-5.07-1.41-7.63a16.36 16.36 0 0 1 0-2c.16-2.81 1.19-5.56 1.46-8.32a11.36 11.36 0 0 0 0-2.67 8.42 8.42 0 0 0-.9-2.64 8.37 8.37 0 0 0-.76-1.2 45.55 45.55 0 0 0 4.07-7.8 14.6 14.6 0 0 0 1-3.2 7.41 7.41 0 0 0 .04-2.01zm-68.42 441.22l-.1-.06a12.49 12.49 0 0 0-3.33-.95c-.28 0-.57-.06-.85-.08h-.06a16.57 16.57 0 0 0 .33-2.83v-1.7-.79-.32c0-.56-.05-1.13-.09-1.69s-.11-1.22-.15-1.83a2.62 2.62 0 0 1 0-.28c.13.38.27.76.43 1.14q1.85 4.82 4 9.49zm23.15-519.36z",
    transform: "translate(-11.09 -31.53)",
    fill: "url(#prefix__w)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M827.7 305.87c-.13 5.07-1.85 10-2.12 15.06 15 .74 29.69-6.51 44.48-4.29-4.13-2.67-6.34-7.5-7.64-12.25a50.61 50.61 0 0 1-1.46-18.82 7.59 7.59 0 0 1 .18-1c.55-2.48 2-6 1.59-7.95-.5-2.58-2.94-2.07-5.13-1.92a194.12 194.12 0 0 0-19.94 2.57c-1.72.3-18.47 4.48-18.72 4.05 2.76 4.77 5.57 9.73 7.25 14.93a29.09 29.09 0 0 1 1.51 9.62zM679.91 290.19a21.66 21.66 0 0 0 4.57 4.6c1.13.93 2.29 1.88 3.51 2.73a15 15 0 0 0 7.47 3c3.56.24 11.12-1.85 13.33-4.9a8.82 8.82 0 0 0 1.27-5.1 23.64 23.64 0 0 0-1.22-7.14 39.71 39.71 0 0 0-5.77-10.42c-2.57-3.58-5.43-7.1-9.26-9.27a35.92 35.92 0 0 0-3.94-1.81l-7-2.86a3.51 3.51 0 0 0-1.27-.33c-1.87 0-2.21 2.87-1.15 4.41 2.12 3.11 6.89 4 8.23 7.5a5.34 5.34 0 0 0-5 3.84 2.74 2.74 0 0 1-.67 1.56c-.61.49-1.57.21-2.27.58-1.23.66-.69 2.5-.82 3.9-.12 1.24-.9 2.31-1.28 3.5a7.44 7.44 0 0 0 1.27 6.21z",
    fill: "#ee8e9e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M885.91 798.99c-1.15-1.15-3-.95-4.64-.7a172.4 172.4 0 0 1-26.07 2.11c-1.09-5.34 2.08-10.53 3.1-15.88a14 14 0 0 1 1-4c1.22-2.36 4-3.44 6.6-4 4.7-1 12-2.74 14.67 2 3.19 5.71 4.2 14.13 5.34 20.47z",
    fill: "#65617d",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M790.4 778.83c3.54 2.42 7.94 3.17 12.2 3.72s8.64.95 12.5 2.85c3.33 1.64 6.13 4.34 9.66 5.52 3.2 1.07 6.7.78 10 .16 4-.74 8.18-2.19 10.32-5.61 1.91-3 1.7-6.89 1.44-10.47-.31-4-.6-8.1-.9-12.15a5.93 5.93 0 0 0-.75-2.94c-2.87-4.17-9.83 1.75-13.55 1.74-5.91 0-12.25-3.2-16.5-7.12a5 5 0 0 0-1.28-1c-1.69-.76-3.37.64-4.87 1.86-.16.14-.33.27-.5.4-3.45 2.74-8.07 3.29-12.33 4.4s-8.83 3.34-10.15 7.54a6 6 0 0 0-.2.81c-.76 3.93 1.6 8.02 4.91 10.29z",
    fill: "#3f3d56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 299
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M790.4 778.83c3.54 2.42 7.94 3.17 12.2 3.72s8.64.95 12.5 2.85c3.33 1.64 6.13 4.34 9.66 5.52 3.2 1.07 6.7.78 10 .16 4-.74 8.18-2.19 10.32-5.61 1.91-3 1.7-6.89 1.44-10.47-.31-4-.6-8.1-.9-12.15a5.93 5.93 0 0 0-.75-2.94c-2.87-4.17-9.83 1.75-13.55 1.74-5.91 0-12.25-3.2-16.5-7.12a5 5 0 0 0-1.28-1c-1.69-.76-3.37.64-4.87 1.86-.16.14-.33.27-.5.4-3.45 2.74-8.07 3.29-12.33 4.4s-8.83 3.34-10.15 7.54a6 6 0 0 0-.2.81c-.76 3.93 1.6 8.02 4.91 10.29z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M790.4 780.19c3.54 2.42 7.94 3.17 12.2 3.72s8.64.95 12.5 2.85c3.33 1.65 6.13 4.34 9.66 5.52 3.2 1.07 6.7.78 10 .16a16.56 16.56 0 0 0 10.32-7c1.91-3 1.7-6.89 1.44-10.47-.31-4-.6-8.1-.9-12.15a5.93 5.93 0 0 0-.75-2.94c-2.87-4.17-9.83 1.75-13.55 1.74-5.91 0-12.25-3.2-16.5-7.12a5 5 0 0 0-1.28-1c-1.69-.76-3.37.64-4.87 1.86a35 35 0 0 0 4.15 8.56c3 4.39 7.72 7.75 13 8.14 2.64.19 5.35-.33 7.9.35s4.93 3.29 4 5.77-4 3-6.58 3.09c-3.61.19-7.31.37-10.73-.75-2.09-.7-4-1.85-6-2.7-8.65-3.59-19.58-1.58-26.73-7.64a15.19 15.19 0 0 0-2.18-1.67c-1.87 3.96 1.59 9.41 4.9 11.68z",
    fill: "#e8eaf2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M790.4 780.19c3.54 2.42 7.94 3.17 12.2 3.72s8.64.95 12.5 2.85c3.33 1.65 6.13 4.34 9.66 5.52 3.2 1.07 6.7.78 10 .16a16.56 16.56 0 0 0 10.32-7c1.91-3 1.7-6.89 1.44-10.47-.31-4-.6-8.1-.9-12.15a5.93 5.93 0 0 0-.75-2.94c-2.87-4.17-9.83 1.75-13.55 1.74-5.91 0-12.25-3.2-16.5-7.12a5 5 0 0 0-1.28-1c-1.69-.76-3.37.64-4.87 1.86a35 35 0 0 0 4.15 8.56c3 4.39 7.72 7.75 13 8.14 2.64.19 5.35-.33 7.9.35s4.93 3.29 4 5.77-4 3-6.58 3.09c-3.61.19-7.31.37-10.73-.75-2.09-.7-4-1.85-6-2.7-8.65-3.59-19.58-1.58-26.73-7.64a15.19 15.19 0 0 0-2.18-1.67c-1.87 3.96 1.59 9.41 4.9 11.68z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M884.3 515.4a53.18 53.18 0 0 1-7.3 39.26c-2 3.14-4.4 6.09-5.92 9.5a43.83 43.83 0 0 0-2.32 7.54l-6.56 27.19c-1.78 7.34-3.56 14.82-3 22.35.37 5.25 1.69 11.15-1.54 15.3a11.25 11.25 0 0 0-2 2.68 6.85 6.85 0 0 0 0 3.54c3.32 19.74 5.79 40.37-.21 59.47-5.44 17.31-5.76 36.49-10.38 54-.57 2.18-1.23 4.47-2.88 6a9.39 9.39 0 0 1-4.3 2c-6.82 1.63-14-.28-20.38-3.22-4.47-2.07-9.28-5.7-8.9-10.61.19-2.34 1.55-4.39 2.48-6.54 1.81-4.22 2-8.93 2.45-13.5 1.23-11.48 4.77-22.55 7.44-33.78s4.49-22.95 2.23-34.27a299.55 299.55 0 0 0-22-67.82 8.07 8.07 0 0 0-2-3c-.9-.74-2.09-1.08-2.86-2s-1-2.32-1.3-3.55c-1-3.58-3.95-6.22-5.93-9.37-5-7.94-3.42-18.12-3.23-27.5.18-9.13-1.13-18.34.36-27.34s6.65-18.2 15.33-21c4.3-1.39 8.95-1.08 13.45-.63 23.74 2.37 46.88 6.74 69.27 15.3z",
    fill: "#303d5c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M884.3 515.4a53.18 53.18 0 0 1-7.3 39.26c-2 3.14-4.4 6.09-5.92 9.5a43.83 43.83 0 0 0-2.32 7.54l-6.56 27.19c-1.78 7.34-3.56 14.82-3 22.35.37 5.25 1.69 11.15-1.54 15.3a11.25 11.25 0 0 0-2 2.68 6.85 6.85 0 0 0 0 3.54c3.32 19.74 5.79 40.37-.21 59.47-5.44 17.31-5.76 36.49-10.38 54-.57 2.18-1.23 4.47-2.88 6a9.39 9.39 0 0 1-4.3 2c-6.82 1.63-14-.28-20.38-3.22-4.47-2.07-9.28-5.7-8.9-10.61.19-2.34 1.55-4.39 2.48-6.54 1.81-4.22 2-8.93 2.45-13.5 1.23-11.48 4.77-22.55 7.44-33.78s4.49-22.95 2.23-34.27a299.55 299.55 0 0 0-22-67.82 8.07 8.07 0 0 0-2-3c-.9-.74-2.09-1.08-2.86-2s-1-2.32-1.3-3.55c-1-3.58-3.95-6.22-5.93-9.37-5-7.94-3.42-18.12-3.23-27.5.18-9.13-1.13-18.34.36-27.34s6.65-18.2 15.33-21c4.3-1.39 8.95-1.08 13.45-.63 23.74 2.37 46.88 6.74 69.27 15.3z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M787.22 572.63a57.7 57.7 0 0 0 1.2 10.54q6.3 35.35 13.43 70.54c.42 2 .83 4.07 1.38 6.07a49.31 49.31 0 0 0 9.1 17.9c19.8 24.68 21.51 60.53 32.26 90.3.72 2 1.45 4 2.22 6a147.28 147.28 0 0 0 6.63 14.79 4.2 4.2 0 0 0 1.36 1.77 4.09 4.09 0 0 0 2.16.42 63 63 0 0 0 27.95-6.33 5.81 5.81 0 0 0 3-2.46 6.05 6.05 0 0 0 .31-2.84c-.3-5.9-.66-12-3.47-17.2a36.9 36.9 0 0 0-6.88-8.34c-.84-18.52-2.67-37.08-6.74-55.17-2.09-9.25-4.68-18.6-10-26.42-4-5.77-9.64-11.46-8.94-18.43.31-3 1.59-6.86-.9-8.66-1.09-.79-2.7-.89-3.43-2a3.79 3.79 0 0 1-.48-1.72 42.66 42.66 0 0 1 .88-14.29c.72-3.1 1.8-6.14 2.13-9.31s-.23-6.62-2.34-9c-.13-6.36 0-13-.09-19.3-.06-3.63-.13-7.31.89-10.78.49-1.67 1.22-3.26 1.59-5 1.33-6.1-2-13.42 2-18.26 1.65-2 4.19-3 6.34-4.46 4.31-2.88 7.13-7.58 8.7-12.51s2-10.15 2.47-15.32a15.94 15.94 0 0 0 0-3.31 5.93 5.93 0 0 0-.44-1.65c-1.23-2.76-4.53-3.83-7.47-4.54a241.41 241.41 0 0 0-57-6.66c-7.1-4.84-11.1-3.11-14.11 2a53.21 53.21 0 0 0-4 9.81c-1.38 4.15-1.46 27.41-2.8 31.58-1.87 5.46 3.16 16.54 3.09 22.24z",
    fill: "#303d5c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M915.61 361.01c.53 3.66-1.23 7.26-1.43 10.95-.17 3.22.86 6.37 1.45 9.55 2.29 12.4-2.11 24.95-6.6 36.73a18.9 18.9 0 0 0-1.56 6c-.12 3.85 2.09 7.37 2.7 11.17 1.27 8-4.61 15.49-4.74 23.58 0 3.72 1.12 7.51.19 11.11-.62 2.41-2.12 4.47-3.19 6.72-1.89 4-2.39 8.49-4.2 12.5-3.25 7.26-10.25 12-16.9 16.35-3.79-1.26-7.89-2.76-10-6.17a15.19 15.19 0 0 1-1.73-5.41c-1.44-8.27-1.39-16.71-1.34-25.1a155.85 155.85 0 0 1 1.18-21.52c1.34-9.12 4.3-17.91 6.42-26.88 2.68-11.31 4-23 8.22-33.85 3.66-9.54 9.37-18.1 15.38-26.29 2.29-3.13 4.1-7.6 8.55-6.88a9.32 9.32 0 0 1 7.6 7.44z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M915.61 361.01c.53 3.66-1.23 7.26-1.43 10.95-.17 3.22.86 6.37 1.45 9.55 2.29 12.4-2.11 24.95-6.6 36.73a18.9 18.9 0 0 0-1.56 6c-.12 3.85 2.09 7.37 2.7 11.17 1.27 8-4.61 15.49-4.74 23.58 0 3.72 1.12 7.51.19 11.11-.62 2.41-2.12 4.47-3.19 6.72-1.89 4-2.39 8.49-4.2 12.5-3.25 7.26-10.25 12-16.9 16.35-3.79-1.26-7.89-2.76-10-6.17a15.19 15.19 0 0 1-1.73-5.41c-1.44-8.27-1.39-16.71-1.34-25.1a155.85 155.85 0 0 1 1.18-21.52c1.34-9.12 4.3-17.91 6.42-26.88 2.68-11.31 4-23 8.22-33.85 3.66-9.54 9.37-18.1 15.38-26.29 2.29-3.13 4.1-7.6 8.55-6.88a9.32 9.32 0 0 1 7.6 7.44z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M818.91 281.28c2.76 4.77 5.57 9.73 7.25 14.93a34.41 34.41 0 0 0 8.23 1c10.77 0 18.4-6.13 24.73-13.87.55-2.49 4-4.8 3.58-6.76-.5-2.58-2.94-2.07-5.13-1.92a194.12 194.12 0 0 0-19.94 2.57c-1.72.3-18.44 4.48-18.72 4.05z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 834.42,
    cy: 261.76,
    r: 34.51,
    fill: "#ee8e9e",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 339
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M790.81 509.03c6-.35 12-.11 18 .13a60.54 60.54 0 0 1 11.16 1.15c4.53 1 8.77 3.09 13.24 4.38 7.16 2.09 14.72 2.18 22.13 2.91a126.53 126.53 0 0 1 14.49 2.27 5.93 5.93 0 0 0-.44-1.65c-1.23-2.76-4.53-3.83-7.47-4.54a241.41 241.41 0 0 0-57-6.66c-7.1-4.84-11.1-3.11-14.11 2.01z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 340
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M814.33 318.26c1.51 1.74 3.53 3.66 5.76 3.1a8.09 8.09 0 0 0 2.24-1.2c4-2.57 8.86-3.17 13.54-3.87a200 200 0 0 0 27.89-6.27 28.38 28.38 0 0 1 8.25-1.68c5.85 0 11 3.92 14.7 8.48s6.26 9.89 9.86 14.5c2.56 3.29 5.61 6.19 8 9.6 6 8.61 7.34 19.85 5.78 30.26s-5.72 20.21-9.84 29.9c-2.36 5.55-4.74 11.13-8 16.19 1.39 7.91.66 16.95-3.1 24-1.23 2.31-2.73 4.56-3.13 7.15a17.75 17.75 0 0 0 .21 5.24l1.76 12.49c.53 3.81 1.07 7.61 1.76 11.39 1.27 6.92 3 14.43-.21 20.69-3.84 7.49.19 17.1-.82 25.46a128.07 128.07 0 0 0-33.63-8c-7.42-.73-15-.82-22.13-2.9-4.47-1.3-8.7-3.36-13.24-4.4a61.33 61.33 0 0 0-11.17-1.14c-8.27-.33-16.6-.66-24.78.56-.67.1-1.47.15-1.87-.39a1.79 1.79 0 0 1-.25-1 16.45 16.45 0 0 1 2.12-8.78c1-1.84 2.49-3.65 2.45-5.76a8.66 8.66 0 0 0-.72-2.86l-3.62-9.68c-3.07-8.16-1.61-17.65-3.2-26.22a154 154 0 0 1-2.38-20.29c-.3-5.82-.11-12.13 3.4-16.78a19 19 0 0 0 2.65-3.69 11.09 11.09 0 0 0 .63-4.41q.12-17.46-1-34.91c3.07-5.5 6.26-11.13 9.32-16.63 3.56-6.4 7.18-12.93 8.62-20.11 1-4.76.92-9.65 1.6-14.45a6.25 6.25 0 0 1 1.22-3.38c1.17-1.32 3.14-1.51 4.91-1.46a21.54 21.54 0 0 1 6.42 1.25z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M687.98 297.52a15 15 0 0 0 7.47 3c3.56.24 11.12-1.85 13.33-4.9a8.82 8.82 0 0 0 1.27-5.1 6.17 6.17 0 0 0-1.48-.29c-3.87-.23-7.82-.46-11.58.47s-7.4 3.21-9 6.75z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 348
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M802.81 372.17c-2.11 2.61-4.29 5.31-7.27 6.85-3.43 1.78-7.47 1.82-11.33 1.74a270.92 270.92 0 0 1-47.35-5.2 29.25 29.25 0 0 1-5.21-1.4 27.75 27.75 0 0 1-5.27-3.28c-5.13-3.69-10.34-7.45-14.25-12.43a41.83 41.83 0 0 1-8.44-20.71c-3.72-3.42-5.69-8.29-7.55-13a20.08 20.08 0 0 1-1.72-6.31c-.1-2.23 1.38-4.57 1-6.77a17.9 17.9 0 0 0-5.47-9.85 3.57 3.57 0 0 1-1.31-1.73 2.8 2.8 0 0 1 .32-1.69c1.58-3.54 5.22-5.82 9-6.75s7.71-.69 11.58-.46c1.4.09 2.42.74 3.79 1l2.7 7.11a9.22 9.22 0 0 0 1.77 3.24 17.52 17.52 0 0 0 1.91 1.5 11 11 0 0 1 3.8 9.58 10.29 10.29 0 0 1 6.09 12.7 12.14 12.14 0 0 1 8.9 7.84 5.88 5.88 0 0 0 1.16 2.44 4.76 4.76 0 0 0 3.11 1c3 .19 5.71 2.59 8.48 1.29a17.19 17.19 0 0 1 10.03-1.41 7.43 7.43 0 0 0 2.15.19 5.84 5.84 0 0 0 1.76-.61 14.45 14.45 0 0 1 4-1.58 3.74 3.74 0 0 1 3.79 1.47c1-1.06 1.55-2.42 2.43-3.55a3.88 3.88 0 0 1 3.68-1.76c-.92-.82 0-2.45 1.21-2.75s2.45.14 3.68.14c3.19 0 5.64-2.92 8.74-3.68 2.85-.69 6.65.14 8.11-2.41.52-.9.62-2.12 1.5-2.67a2.87 2.87 0 0 1 1.92-.23 18.93 18.93 0 0 1 5.83 1.77c3 11.69 1.42 23.83-.86 35.68-1.09 5.63-2.81 10.19-6.41 14.69z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 352
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M802.91 414.06l14.86 30c-1.61-2.77-5-3.85-7.67-5.62a20.32 20.32 0 0 1-7.33-9.85 60.47 60.47 0 0 1-2.86-12.18c-.3-1.9-.93-4.57 0-6.29 1.73.35 2.29 2.53 3 3.94zM845.66 439.47c3.35 3.32 7.46 5.76 11.15 8.7 8.62 6.86 14.76 16.28 20.76 25.52a40.4 40.4 0 0 1 4.24 7.78c-.7.61-1.75 0-2.44-.63l-11.68-10.26a26.35 26.35 0 0 1-3.89-3.94c-2-2.72-2.92-6.13-4.76-9s-4.52-5-7.09-7.23-15-12.71-12-16.75c2.17 1.08 3.96 4.08 5.71 5.81z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M820.16 309.6c3.7-2.31 8.06-3.28 12.35-4.07a26 26 0 0 1 7.86-.56c2.43.3 4.76 1.24 7.21 1.37 3.43.2 6.72-1.2 10-2.1s7.15-1.26 9.94.75a4.31 4.31 0 0 0 2.16 1.15 3.76 3.76 0 0 0 2.23-1.1 12.74 12.74 0 0 1 15.87.84c6.33 5.93 5.62 17.52 13 22 2.05 1.24 4.66 1.9 5.85 4a13.88 13.88 0 0 0 1 1.91 5.14 5.14 0 0 0 1.78 1.27 34.92 34.92 0 0 1 6.12 3.51 8.76 8.76 0 0 1 3.52 5.9 11 11 0 0 1-1.09 5 46.52 46.52 0 0 1-45.22 28.92c-1.69-.08-3.52-.31-4.74-1.48a8.92 8.92 0 0 1-1.66-2.73c-3.48-7.31-10-12.71-14.19-19.66-2.48-4.14-4.07-8.77-6.65-12.85-3.84-6.2-9.79-10.81-15.59-15.2-3.28-2.5-6.93-5.12-11.06-4.95-3.67.16-6.35.36-5-4.15a14.41 14.41 0 0 1 6.31-7.77z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M820.16 309.6c3.7-2.31 8.06-3.28 12.35-4.07a26 26 0 0 1 7.86-.56c2.43.3 4.76 1.24 7.21 1.37 3.43.2 6.72-1.2 10-2.1s7.15-1.26 9.94.75a4.31 4.31 0 0 0 2.16 1.15 3.76 3.76 0 0 0 2.23-1.1 12.74 12.74 0 0 1 15.87.84c6.33 5.93 5.62 17.52 13 22 2.05 1.24 4.66 1.9 5.85 4a13.88 13.88 0 0 0 1 1.91 5.14 5.14 0 0 0 1.78 1.27 34.92 34.92 0 0 1 6.12 3.51 8.76 8.76 0 0 1 3.52 5.9 11 11 0 0 1-1.09 5 46.52 46.52 0 0 1-45.22 28.92c-1.69-.08-3.52-.31-4.74-1.48a8.92 8.92 0 0 1-1.66-2.73c-3.48-7.31-10-12.71-14.19-19.66-2.48-4.14-4.07-8.77-6.65-12.85-3.84-6.2-9.79-10.81-15.59-15.2-3.28-2.5-6.93-5.12-11.06-4.95-3.67.16-6.35.36-5-4.15a14.41 14.41 0 0 1 6.31-7.77z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 364
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M802.2 809.82c2.5 2.33 5.94 3.35 9.27 4.08 7.59 1.66 15.35 2.25 23.09 2.85l7.54.58c7.36.55 14.73 1.12 22.12 1.15a152.17 152.17 0 0 0 27.2-2.35 2.3 2.3 0 0 0 2.49-2.76 131.44 131.44 0 0 0-3.34-27.31c-.86-3.68-7.46 4.57-7.75 4.92-1.83 2.08-3.22 3-6 3.18-7.59.42-16.1-4.2-22.13-8.3a27.65 27.65 0 0 0-4.1-2.54 11.81 11.81 0 0 0-3.31-1 20.05 20.05 0 0 0-11.3 2.29c-4.53 2.25-8.51 5.48-13 7.79a36.27 36.27 0 0 1-11.65 3.69c-4.11.57-9 .84-11.13 4.4-1.75 2.98-.49 6.98 2 9.33z",
    fill: "#3f3d56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 368
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M802.2 811.18c2.5 2.33 5.94 3.35 9.27 4.08 7.59 1.66 15.35 2.25 23.09 2.85l7.54.58c7.36.55 14.73 1.12 22.12 1.15a152.17 152.17 0 0 0 27.2-2.35 3 3 0 0 0 2.16-1c.32-.5 1.69-2.49 1.68-3.08-.15-9.19-2.64-18.36-4.7-27.31-.86-3.68-7.46 4.57-7.75 4.92-1.83 2.08-3.22 3-6 3.18-7.59.42-16.1-4.2-22.13-8.3a27.65 27.65 0 0 0-4.1-2.54 11.81 11.81 0 0 0-3.31-1c1 5.46 8.81 12.06 12.85 14.07 8.18 4.06 17.9 2 27 2.51a3.71 3.71 0 0 1 1.91.47c1.1.72 1.16 2.27 1.13 3.58-.08 2.18-.36 4.73-2.24 5.84a6.38 6.38 0 0 1-3 .63 427.54 427.54 0 0 1-67.4-2.36 37.25 37.25 0 0 1-11-2.44 28.15 28.15 0 0 1-6.37-4.1c-2.84 2.27-.44 8.29 2.05 10.62z",
    fill: "#e8eaf2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M820.99 261.39c.13 3.57-2.3 10.49 4.37 8.56 4-1.16 5.1-5.87 10.15-4.82s6.21 7.27 7.92 11.34a21.69 21.69 0 0 0 15.72 12.71 9.45 9.45 0 0 0 4.33 0c3.26-.93 5.12-4.29 6.45-7.4a59.18 59.18 0 0 0 2.85-8.12 34.57 34.57 0 0 0 1-6 27 27 0 0 0 0-4.12c-.61-8.11-5.22-15.51-11.14-21.11s-13.09-9.63-20.18-13.62a29.38 29.38 0 0 0-7.45-3.32 24.94 24.94 0 0 0-7.86-.32 27.12 27.12 0 0 0-10 2.35 14.15 14.15 0 0 0-3.52 2.47 10.54 10.54 0 0 0-3 5.09c-1.28 5.25 2.06 10 4.78 14.11 2.41 3.7 5.4 7.61 5.58 12.2z",
    fill: "#3f3d56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M708.68 337.98c1.43-3.59 7.43-13.53 5.69-16.95a45.2 45.2 0 0 0-4.56 8.15c-1.13 2.78-.21 6.51-1.13 8.8zM815.26 249.21c-2.72-4.15-6.07-8.87-4.79-14.11a11.11 11.11 0 0 1 3.88-5.81 9.66 9.66 0 0 0-1 2.45c-1.28 5.24 2.07 10 4.79 14.11 2.41 3.68 5.4 7.59 5.58 12.18.13 3.56-2.31 10.49 4.37 8.56 4-1.15 5.1-5.87 10.15-4.81s6.2 7.26 7.91 11.33a21.73 21.73 0 0 0 15.76 12.71 9.45 9.45 0 0 0 4.33 0 6.47 6.47 0 0 0 2-1 8.78 8.78 0 0 1-4.94 4.36 9.45 9.45 0 0 1-4.33 0 21.73 21.73 0 0 1-15.7-12.71c-1.71-4.07-2.82-10.27-7.91-11.34s-6.17 3.67-10.15 4.82c-6.68 1.93-4.24-5-4.37-8.56-.17-4.59-3.17-8.5-5.58-12.18z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M813.78 242.12a31.13 31.13 0 0 0 2 2.92 35.77 35.77 0 0 0 4.72 4.89c1 .89 2.09 1.72 3.19 2.5a51.2 51.2 0 0 0 6.44 3.85c6.53 3.29 13.59 5.35 20.62 7.38l13.78 4c1.69 1.28 4.79 3.59 8.21 6a34.57 34.57 0 0 0 1-6 27 27 0 0 0 0-4.12c-.61-8.11-5.22-15.51-11.14-21.11s-13.09-9.63-20.18-13.62a29.38 29.38 0 0 0-7.45-3.32 24.94 24.94 0 0 0-7.86-.32 27.12 27.12 0 0 0-10 2.35 14.15 14.15 0 0 0-3.52 2.47 13.14 13.14 0 0 0-1.77 3.74c-.78 2.84.42 5.88 1.96 8.39z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 384
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M813.78 241.19a31.13 31.13 0 0 0 2 2.92 35.77 35.77 0 0 0 4.72 4.89c1 .89 2.09 1.72 3.19 2.5a51.2 51.2 0 0 0 6.44 3.85c6.53 3.29 13.59 5.35 20.62 7.39l13.78 4c4.81 3.64 20.9 15.56 23.61 14.07 3.19-1.75-14.28-14.12-14.28-14.12l-.81.61c2.56-1.61 3.9-5.34 4.48-8.56 1-5.77 1.5-11.77.13-17.47s-4.79-11.13-10-13.8c-2.32-1.19-5.13-2-6.8-3.83a4.89 4.89 0 0 1-.66-.89 4.31 4.31 0 0 1-.26-.47 6.14 6.14 0 0 0-.73-1.42c-1-1.11-2.7-.78-4.15-.6l-.46.05h-.78c-5.18.12-10.2-2.77-15.44-2.77-5.75 0-10.63 3.32-15.69 5.59-1 .46-2 .88-2.9 1.31-3.65 1.7-6.4 3.51-7.91 8.35-.84 2.85.36 5.89 1.9 8.4z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M853.85 220.34a2.35 2.35 0 0 0 .54 3 4.29 4.29 0 0 0 2.18.78 15.82 15.82 0 0 0 1.69.13 4.65 4.65 0 0 0 2.24-.39 2 2 0 0 0 .39-.25 4.89 4.89 0 0 1-.66-.89c-.13.1-.26.08-.78 0a12 12 0 0 1-2.79-.48 2.74 2.74 0 0 1-2-2zM873.55 266.55a6.4 6.4 0 0 1-2.38.89 9.65 9.65 0 0 1-1.85.3 10.25 10.25 0 0 1-4.51-1.27z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 392
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M453.3 406.32l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1v-.44a1 1 0 0 1 0-.17v-.07c0-.02 0 0 0 0a1.74 1.74 0 0 0 .05-.22.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.29.29 0 0 1 0-.09.17.17 0 0 1 0-.07 5.45 5.45 0 0 1 .43-1.19c.1-.19.19-.37.3-.54a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm0 0h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.29.29 0 0 1 0-.09.17.17 0 0 1 0-.07 5.45 5.45 0 0 1 .43-1.19c.1-.19.19-.37.3-.54a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08v-.05a.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.29.29 0 0 1 0-.09.17.17 0 0 1 0-.07 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08v-.05a.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a.64.64 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.41.41 0 0 1 0-.16.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.22-.36.09-.14.15-.24a1.78 1.78 0 0 1-.51.31zm-2.2-6.21c.05-.14.1-.29.16-.43s.05-.14.08-.2a1.39 1.39 0 0 1 .12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9l-11.13-24-1.35-2.89-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .62.62 0 0 1 0-.13v-.14a2.17 2.17 0 0 1 0-.25l.06-.3v-.25l.12-.43c.12-.11.16-.22.25-.34zm150.51-140.17a8.46 8.46 0 0 0-4.76-3.05 7.14 7.14 0 0 0-5.47 1.26c.45-.49 2.93-3.19 5-5.86 2.46-3.13 4.41-6.23 2-5.72-4.65 1-13.24 11.39-13.24 11.39l-1.76 3.14-5.1 9.11-.54 1a27.43 27.43 0 0 0-5.11.63l-.58.77c-.87 1.19-2.43 3.5-2.6 4.93-.24 2-8.59 5.69-12 7.67s-6.62 8.42-6.62 8.42-11.29 1-14.48 4c-2.23 2.08-7.68 2.1-10.77 1.92l-.79-.05c-.88-.06-1.43-.13-1.43-.13s-3.19-3.47-5.64-3.72a24.52 24.52 0 0 0-4.66 0s-1.29-.43-3.16-1l-.52-.15c-.44-.12-.91-.25-1.41-.37l-.38-.1a6 6 0 0 0 .51-.63 5.91 5.91 0 0 0 .67-1.23 5 5 0 0 0 .31-2.62 7.54 7.54 0 0 0-1.05-2.64c-.31-.49-.63-1-.93-1.47a23.07 23.07 0 0 1-3.08-8.7 23.66 23.66 0 0 1 2.26-14.34 34.32 34.32 0 0 1 2-3.33l1.13-1.59.71-1 .79-1.11.76-1.07a28.07 28.07 0 0 0 2.89-5.05c.16-.35.28-.71.42-1.07 0-.12.07-.25.11-.37s.16-.49.22-.73.08-.29.11-.44a5.58 5.58 0 0 0 .16-.68c0-.16.07-.32.1-.47s.08-.45.11-.67 0-.32.07-.49l.06-.67a3.75 3.75 0 0 0 0-.47v-1.14-1.11-.47c0-.16 0-.44-.07-.67s0-.37-.07-.56-.06-.38-.08-.57l-.12-.58c0-.18-.07-.36-.11-.53l-.15-.6c0-.17-.09-.34-.13-.5s-.13-.41-.19-.6a4.59 4.59 0 0 0-.17-.48c-.07-.2-.13-.4-.22-.6s-.12-.29-.17-.43a18.35 18.35 0 0 0-2.1-3.71l-1.46-1.82-.39-.49a2.15 2.15 0 0 0-.14-.26 8.4 8.4 0 0 1-.26-.52c-.74-1.46-1.34-3-1.95-4.53-.17-.47-.37-.93-.56-1.4 0-.1-.08-.2-.11-.3-.3-.72-.61-1.42-.94-2.12-.25-.52-.52-1-.79-1.54-.09-.16-.18-.31-.26-.47l-.63-1-.31-.5-.67-1-.3-.43c-.32-.45-.64-.89-1-1.33-.35-.46-.73-.91-1.09-1.36l-.3-.34-.87-1-.34-.38-.91-1-.31-.32a94.915 94.915 0 0 0-4.45-4.28l-.79-.71-2.78-2.47-1-.83c-.29-.26-.61-.52-.91-.77a25 25 0 0 0-7-4.52 22.33 22.33 0 0 0-10.34-1.06 35.19 35.19 0 0 0-15.76 5.51c-.38.24-.74.5-1.11.77a29.25 29.25 0 0 0-5.61 5.23c-.28.33-.54.67-.8 1s-.44.61-.66.93c-2.46 3.63-4 7.79-5.59 11.9-5.43 14.39-10.94 29.25-11.71 44.48 0 .26 0 .51-.05.77-.08 1.92-.08 3.85 0 5.79a.76.76 0 0 0 0 .15c0 .38 0 .75.06 1.13.36 5.74 1.5 11.48 2.36 17.2l-.59.21c-7 2.66-8.3 8-8.3 8a.12.12 0 0 1 0 .05 8.54 8.54 0 0 1 .1 1.33 18.63 18.63 0 0 1-2.61 9.24l-.44.74c-2.19 3.6-2.61 6-2.56 7.49a4.19 4.19 0 0 0 .34 1.66v.09a1.21 1.21 0 0 0 0 .18v.09a20 20 0 0 1-3.55 6.3c-2.45 2.73-9.08 29.72-9.08 29.72a5.21 5.21 0 0 1 .44 2.16 4.23 4.23 0 0 1-.41 1.72 3.09 3.09 0 0 0 .36 2.77 10.4 10.4 0 0 0 1.6 2.16s1.48-.49-1 2.23l-.15.18a2.87 2.87 0 0 0 .19 3.59 9.72 9.72 0 0 0 2.19 2.18s20.11 34.65 24.28 38.37 8.34 13.37 8.34 13.37.42-.67 1.11-1.71c.32-.52.74-1.13 1.17-1.79l1.28 1.67 2.59 3.39-1 1.95a45.57 45.57 0 0 0-2.67 6 1.49 1.49 0 0 0-.07.55 2.18 2.18 0 0 0 .66 1.42c-5 6.56-16.9 24.8-16 47.26v.76a60.24 60.24 0 0 0 5.82 22.62 48.37 48.37 0 0 1 .5 6.79 3.07 3.07 0 0 1-.26 1.34 7.17 7.17 0 0 0 .09 2.76c.66 4.93 2.87 14.55 2.87 14.55v5.07c.11 8.59.29 25.45-.07 29.1-.21 2.1-.42 3.79-.59 5-.24 1.72-.39 2.63-.39 2.63s-.09.63-.23 1.77c0 .41-.11.88-.17 1.42-.82 6.76-2.71 23.17-3.83 38.55 0 .67-.1 1.34-.14 2-.57 8.2-.88 16-.66 21.64v.85c.06 1.44.17 2.73.32 3.84.5 3.6.94 7.83 1.3 12.22 0 .47.08.95.13 1.42.64 8 1.11 16.4 1.39 22.46v1.18a1.1 1.1 0 0 0 0 .26.37.37 0 0 0 0 .11v4.07c0 .63 0 1.21.06 1.73 0 .82.06 1.27.06 1.27v.14a.17.17 0 0 1 0 .07v.12l.84 7 4.34 35.34 1.32 11.13 2.82 24.07 10.1-1.91.1 1.1.34 3.73 2.82-.27c0 .36-.05.72-.07 1.08-.48 8.36-.32 16.82-.32 16.82h.11c3.09.57 6.07 1 9 1.26v8.72H482l-.61-7.49-.08-.91h.09a98.68 98.68 0 0 0 18.65-.66l.56-.07.75.86 7.14 8.18s14 .74 26.25-2c9.23-2 18.87-11.09 19.21-14.51.12-1.12-.78-1.63-3-1.08-6.6 1.62-17.86 0-23.51-1-1.25-2.88-4.85-11.15-7.65-17.74l-.43-1c4.13-3.12 7.3-7.1 7.72-9.18.27-1.24-.44-1.8-2.5-1.09a28.84 28.84 0 0 1-7.57 1.24h-1a1.27 1.27 0 0 0 .13-.19c2-2.76 2.35-6.55 2.12-10.11a34.41 34.41 0 0 0-.48-3.84v-.21a45.64 45.64 0 0 0-1.2-4.92c0-.11-.06-.22-.09-.31-.19-.57-.31-.89-.31-.89s2.79-19.52 3.7-33.49a77.26 77.26 0 0 0 .16-10.87.13.13 0 0 0 0-.06 6 6 0 0 0-.66-2.62 5.42 5.42 0 0 1-.83-2 .17.17 0 0 0 0-.07c-1.24-5.54 1.55-17 3-20a25.69 25.69 0 0 0 1.21-3c1.39-4 2.73-9.46 2.73-12.15a30.86 30.86 0 0 1 1.47-7.92c4.55-6.54 5.85-15.65 6.16-21.9a60.14 60.14 0 0 0 0-7.08 273.9 273.9 0 0 1 1.52-31.23c.22-2 .48-4 .77-6.06.45-3.14 1-6.26 1.64-9.26 1.94-9 1.12-25.13-.4-40.48 0-.45-.09-.89-.13-1.33a.38.38 0 0 1 0-.1c-1.52-14.9-3.67-28.8-4.55-34.32-.27-1.59-.42-2.49-.42-2.49a47.15 47.15 0 0 0 1.76-10.74 9.78 9.78 0 0 0-.91-4.81 4.41 4.41 0 0 1-.55-1.47 1.15 1.15 0 0 1 0-.19 24 24 0 0 1-.2-5.59c0-.66.09-1.32.16-2v-.1-.1l.12-1.2c.09-.7.16-1.39.26-2.08a8.39 8.39 0 0 0 .85-.42 6.6 6.6 0 0 0 1.33-.93c4.45-4 5-14.25 4.31-24.66a.38.38 0 0 1 0-.1v-.29a197.78 197.78 0 0 0-4-26 1.7 1.7 0 0 0 0-.22c-.16-.54-.25-.89-.25-.89s0-7.32-.43-14.36a.49.49 0 0 1 0-.12v-.18c-.37-5.8-1-11.32-2.25-12.33-.72-.6-1.16-2.27-1.42-4.41v-.07a1 1 0 0 1 0-.17 99.59 99.59 0 0 1 0-14.67 29 29 0 0 0 3.85-12.63 20.52 20.52 0 0 0-.07-2.41c0-.16 0-.32-.06-.47a6.2 6.2 0 0 0-.11-.77 13.9 13.9 0 0 0-.68-2.69q1.26-.22 2.67-.57l.79-.2c13.1-3.36 33.64-13 37.76-14.41 5.65-2 7.36-10.15 7.36-10.15s.52-.44 1.38-1.24a68 68 0 0 0 11.33-13.77 40.74 40.74 0 0 0 3.79-7.9 29.34 29.34 0 0 0 1.15-4.3 13.59 13.59 0 0 0 .2-1.43v-.18l.95-.85c4.4-4 10.74-10.34 12.43-15.11.42-1.99.41-3.53-.57-4.66zM482.26 657.12c-.08 2.29-.24 4.41-.38 6.22-.31 3.57-.64 5.92-.64 5.92a4.1 4.1 0 0 0-.71.77 9.82 9.82 0 0 0-1.09 2.18l-.24-5.93s1.53-3.81 3.06-9.16zm-34.8-252.69c-.07-.23-.15-.45-.22-.68l1.1-.22c.93-.18 1.83-.41 2.75-.67l.35.74 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21a1.66 1.66 0 0 0 1.44-.34 8.39 8.39 0 0 0-1 1.86 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94 4.32 4.32 0 0 1 .66 1.94v.07a5.24 5.24 0 0 1 0 .55v.32l-1.31-.39-2.89-.86a3.54 3.54 0 0 1 1.56-1.12l-8.92-19.6s-1.89-8.44-4.36-16.78zm20 394.64l-.19-1-.05-.3.39-.07a3 3 0 0 0 0 .31c-.11.33-.15.69-.18 1.06zM453.3 406.32l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.09.09 0 0 1 0-.05.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12.88.88 0 0 0 0-.16v-.14-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43s.05-.14.08-.2a1.39 1.39 0 0 1 .12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.41.41 0 0 1 0-.16.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.31zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.25.25 0 0 1 0-.08.24.24 0 0 1 0-.08 5.45 5.45 0 0 1 .43-1.19l.21-.41.09-.13a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.29.29 0 0 1 0-.09.17.17 0 0 1 0-.07 5.45 5.45 0 0 1 .43-1.19c.1-.19.19-.37.3-.54a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29zm-10.9-34.6l-1.3-2.86-.52.14 1.36 2.85 9.8 20.65c-.21.27-3.1 3.73-3 7a4.71 4.71 0 0 0 .25 1.49c.5 1.46 1.12 2.05 1.68 2.21v-.25a6.16 6.16 0 0 1 0-1 .53.53 0 0 1 0-.13v-.14a.22.22 0 0 0 0-.08v-.05a.25.25 0 0 1 0-.08.56.56 0 0 1 0-.12 1.55 1.55 0 0 1 .05-.23.22.22 0 0 1 0-.08v-.1l.12-.43.05-.12.06-.22c.05-.14.1-.29.16-.43a1.19 1.19 0 0 1 .08-.2l.12-.28c.12-.28.26-.55.39-.82s.27-.5.41-.73a17.45 17.45 0 0 1 1.32-1.9zm10.9 34.6h-.06a1.24 1.24 0 0 1-.61 0h-.1a1.27 1.27 0 0 1-.18-.06 1.41 1.41 0 0 1-.41-.25l-.15-.14a3.74 3.74 0 0 1-.72-1.14 3.67 3.67 0 0 0-.22 1.17 1.87 1.87 0 0 0 .91 1.75 3.4 3.4 0 0 1 .95.94.07.07 0 0 0 0-.06.29.29 0 0 1 0-.09.17.17 0 0 1 0-.07 5.45 5.45 0 0 1 .43-1.19c.1-.19.19-.37.3-.54a1.71 1.71 0 0 1 .13-.23l.09-.14.15-.24a1.78 1.78 0 0 1-.51.29z",
    transform: "translate(-11.09 -31.53)",
    fill: "url(#prefix__x)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M491.51 752.33s15 1.84 22.23-.66-2.24 10.75-12.07 13.89a93.88 93.88 0 0 1-21.34 3.62l-11.56-10.87-12.27.94 2.14 12-3.81.36-1.48-15.74z",
    fill: "#444053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 401
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M491.51 752.33s15 1.84 22.23-.66-2.24 10.75-12.07 13.89a93.88 93.88 0 0 1-21.34 3.62l-11.56-10.87-12.27.94 2.14 12-3.81.36-1.48-15.74z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M513.12 779.81s17.95 3.93 27 1.72-3.93 12.79-16.23 15.49-26.32 2-26.32 2l-12.73-14.55-15-.25 1.23 14.85h-4.67v-19.26z",
    fill: "#444053",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M513.12 779.81s17.95 3.93 27 1.72-3.93 12.79-16.23 15.49-26.32 2-26.32 2l-12.73-14.55-15-.25 1.23 14.85h-4.67v-19.26z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M446.72 438.22s-30.74 34.18-12.3 72.79c0 0 1 6.89.25 8.12s2.95 17.21 2.95 17.21.5 29 0 33.94-1 7.62-1 7.62-6.87 53.57-4.66 69.57 3.2 44.51 3.2 44.51l9.1 76.73 47.22-8.85-21.4-105.26-.74-18.69s8.86-22.87 4.92-34.43 1-158.87 1-158.87z",
    fill: "#303d5c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 417
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M446.72 438.22s-30.74 34.18-12.3 72.79c0 0 1 6.89.25 8.12s2.95 17.21 2.95 17.21.5 29 0 33.94-1 7.62-1 7.62-6.87 53.57-4.66 69.57 3.2 44.51 3.2 44.51l9.1 76.73 47.22-8.85-21.4-105.26-.74-18.69s8.86-22.87 4.92-34.43 1-158.87 1-158.87z",
    opacity: 0.05,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M469.34 603.47c5.41 10.33 2 35.41 2 35.41-7.13 6.15-3.2 59.76-3.2 59.76s-4.92 52.88-8.11 59-2.71 31.48-2.71 31.48c36.15 6.64 59.76-7.62 59.76-7.62s-11.56-26.32-11.8-27.54c-.14-.69-1.67 1.18-2.13 1.72.24-.33.87-1.19 2.13-3 4.92-6.89 0-20.17 0-20.17s6.15-42.79 3.2-46.73.49-18.44 2.21-21.88 3.93-11.56 3.93-15a30.28 30.28 0 0 1 1.48-7.86c7.62-10.83 6.15-28.78 6.15-28.78s-.49-25.82 3.93-46.23-5.52-78.21-5.52-78.21 3.31-11.31.85-15.49c-1.11-1.88-1-6.31-.48-10.6.6-5.25 1.71-10.3 1.71-10.3l-67.09-11.91c-1.41 2.35-2.7 4.63-3.89 6.82-22.19 41-7.23 56.24-7.23 56.24l14.24 43.89s5.14 46.68 10.57 57z",
    fill: "#303d5c",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M575.83 282.54l9.59 8.14s1.88-1.5 4.4-3.75c6-5.42 15.72-15.23 12.08-19.39-5-5.68-10-2-10.31-1.74.54-.57 11.67-12.5 7.11-11.54s-13.28 11.32-13.28 11.32l-6.89 12.17zM447.21 415.35l11.31 3.44-8.6 15-9.84-12.79 7.13-5.65z",
    fill: "#efb7b9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 429
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("circle", {
    cx: 473.77,
    cy: 242.21,
    r: 32.22,
    fill: "#efb7b9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 433
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M492.71 254.02s-29.27 46.45-1.48 50.45-37.38 32.22-37.38 32.22L429.5 312.1s25.33-43.78 21.4-60.5 41.81 2.42 41.81 2.42z",
    fill: "#efb7b9",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M451.73 446.41a152.29 152.29 0 0 0 19.83 4.59s36.24 16.09 49.44 10.8c.6-5.25 1.71-10.3 1.71-10.3l-67.09-11.91c-1.41 2.35-2.71 4.63-3.89 6.82z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M418.44 324.84l6.55 13.55 7.4 15.26 1 2.18 8.77 19 11.15 24.08s-3.94 4.67-2.71 8.36c1.15 3.45 2.95 1.95 3.18 1.74-.21.29-2.59 3.49-.47 4.9s1.47 4.67 1.47 4.67-9.1 15-10.82 20.41 27.55 10.09 27.55 10.09 41.56 18.44 51.89 9.34 0-51.89 0-51.89 0-24.59-2.71-26.8-1.42-19.26-1.42-19.26c7.13-13 2.21-20.41 2.21-20.41l2-33.44s-3.2-3.45-5.66-3.69a24.6 24.6 0 0 0-4.67 0s-1.3-.44-3.17-1c-3.94-1.12-10.48-2.67-12.82-1.5-3.44 1.72-25.57-2.71-25.57-2.71a270.7 270.7 0 0 0-28.78-2.7 28.48 28.48 0 0 0-9.76 1.06c-8 2.47-9.42 8.28-9.42 8.28s1 4.92-2.95 11.31-2.24 9.17-2.24 9.17z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 442
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M575.83 282.54l9.59 8.14s1.88-1.5 4.4-3.75c.76-8.3-6.31-9.4-11.29-9.18z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 446
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M519.27 306.4l4.18.25s9.83 1.22 13-1.73 14.51-3.93 14.51-3.93 3.2-6.4 6.64-8.36 11.81-5.66 12-7.63 3.2-5.65 3.2-5.65 18.44-4.43 15.74 10.08-17.63 27.04-17.63 27.04-1.72 8.12-7.38 10.09-42.3 19.18-48.2 14.75 3.94-34.91 3.94-34.91z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 450
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M420.65 315.66c3.93-6.39 2.95-11.31 2.95-11.31s1.42-5.81 9.42-8.28a24.33 24.33 0 0 1 4.79-.94c-7.88 2.5-9.29 8.24-9.29 8.24s1 4.92-2.95 11.31-2.22 9.1-2.22 9.1l6.56 13.55 7.39 15.25 1.06 2.19 8.77 18.95 11.15 24.08s-3.94 4.68-2.71 8.37c1.15 3.45 2.95 1.94 3.18 1.74-.21.28-2.59 3.49-.47 4.9s1.47 4.67 1.47 4.67-9.1 15-10.82 20.41 27.55 10.08 27.55 10.08 28.86 12.81 44.46 11.81c-13.26 5.2-49.38-10.82-49.38-10.82s-29.27-4.68-27.55-10.09 10.82-20.4 10.82-20.4.74-3.2-1.47-4.67.26-4.61.47-4.9c-.23.21-2 1.71-3.18-1.74-1.23-3.69 2.71-8.36 2.71-8.36l-11.15-24.09-8.77-19-1-2.18-7.4-15.26-6.55-13.55s-1.78-2.66 2.16-9.06z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 454
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M422.91 321.15l-4.42 3.69a20.31 20.31 0 0 1-3.69 6.64c-2.46 2.71-9.1 29.51-9.1 29.51a4.78 4.78 0 0 1 0 3.94c-1 2 2 4.92 2 4.92s1.47-.49-1 2.21 2.22 5.92 2.22 5.92 20.16 34.41 24.34 38.1 8.36 13.28 8.36 13.28 8.76-13.74 10.82-14l-8.6-19.42s-5.91-27.06-10.33-32 2.21-21.9 2.21-21.9z",
    fill: "tomato",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M420.03 371.32c3.7 4.44 10.19 5.38 15.93 4.73.84-.1 1.69-.23 2.52-.39a36.68 36.68 0 0 0 3.73-.87 38.88 38.88 0 0 0 12.22-6 8.4 8.4 0 0 1 2.74-1.58c2.3-.58 4.58 1.13 5.83 3.13s1.84 4.36 3.12 6.34c2.52 3.93 7.4 5.82 12.08 5.93s9.22-1.29 13.68-2.68c-3.61-4.44-7.31-9.06-8.78-14.59a34.55 34.55 0 0 1-.69-11c1.06-17.4 7.1-35.74 21.29-45.88 2.46-1.75 5.43-3.82 6.25-6.48-3.94-1.12-10.48-2.67-12.82-1.5-3.44 1.72-25.57-2.71-25.57-2.71a270.7 270.7 0 0 0-28.78-2.7 28.48 28.48 0 0 0-9.76 1.06c1.21 7.39 2.26 14.74.81 22a49.27 49.27 0 0 1-4.87 12.95c-1.26 2.45-2.62 4.86-4 7.28-3.74 6.73-7.31 13.48-8 21-.29 4.25.39 8.74 3.07 11.96zM468.66 405.92c-1.92-.25-3.86-.9-5.76-.5a10.6 10.6 0 0 0-4.31 2.51l12.64.07c3.25 0 8.15.2 10.64-2.1-2.28-2.26-9.96.44-13.21.02z",
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 462
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M512.47 238.47a19.09 19.09 0 0 1 2.19 18.52c-2 4.75-5.93 8.47-8.32 13.05a23.52 23.52 0 0 0 .8 22.78 11.5 11.5 0 0 1 2 4.09c.57 3.75-3.31 6.44-6.4 8.65-14.2 10.12-20.23 28.47-21.29 45.88a34.5 34.5 0 0 0 .68 11c1.47 5.53 5.18 10.15 8.79 14.59-4.46 1.39-9 2.79-13.69 2.68s-9.55-2-12.08-5.93c-1.28-2-1.88-4.34-3.12-6.34s-3.53-3.7-5.81-3.13a8.12 8.12 0 0 0-2.75 1.57 38.91 38.91 0 0 1-18.48 7.27c-5.74.66-12.23-.29-15.92-4.73-2.68-3.23-3.37-7.71-3-11.89 1.28-14.89 13.89-26.6 16.81-41.26 2.36-11.88-1.92-24-2.7-36.06-1.17-17.87 5.32-35.26 11.71-52a55.19 55.19 0 0 1 5.6-11.82c5.35-7.84 14.6-12.54 24-13.48a22.47 22.47 0 0 1 10.37 1c3.36 1.3 6.16 3.72 8.89 6.09 6.1 5.29 12.37 10.8 15.88 18.08 1.43 3 2.37 6.17 4 9.06z",
    fill: "#3f3d56",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 466
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("g", {
    opacity: 0.1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 470
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M506.67 231.94c-1.6-2.89-2.53-6.09-4-9.06a36.31 36.31 0 0 0-5.1-7.69 43.17 43.17 0 0 1 9 11.89c1.39 2.88 2.32 6 3.83 8.81l-1.94-1.64a16.35 16.35 0 0 1 1.36 2.13 22 22 0 0 1-3.15-4.44zM431.03 368.89a38.75 38.75 0 0 0 18.48-7.26 8.32 8.32 0 0 1 2.75-1.57c2.29-.58 4.57 1.13 5.82 3.13.26.42.49.87.71 1.32a4 4 0 0 0-2.59-.25 8.12 8.12 0 0 0-2.75 1.57 38.91 38.91 0 0 1-18.48 7.27c-5.74.66-12.23-.29-15.92-4.73a12.39 12.39 0 0 1-1.22-1.83c3.72 2.39 8.69 2.87 13.2 2.35zM473.28 375.47c4.67.11 9.22-1.29 13.68-2.68-3.61-4.44-7.31-9.06-8.78-14.59a34.51 34.51 0 0 1-.69-11c1.06-17.41 7.1-35.76 21.3-45.88 3.09-2.21 7-4.9 6.4-8.66a11.71 11.71 0 0 0-2-4.08 23.52 23.52 0 0 1-.81-22.78c2.4-4.58 6.3-8.3 8.33-13.06a19.16 19.16 0 0 0-.84-16.38 22.94 22.94 0 0 0 2.16 2 22 22 0 0 0 1.78 2.18 19.15 19.15 0 0 1 .83 16.39c-2 4.75-5.93 8.47-8.32 13.05a23.52 23.52 0 0 0 .8 22.78 11.5 11.5 0 0 1 2 4.09c.57 3.75-3.31 6.44-6.4 8.65-14.2 10.12-20.23 28.47-21.29 45.88a34.5 34.5 0 0 0 .68 11c1.47 5.53 5.18 10.15 8.79 14.59-4.46 1.39-9 2.79-13.69 2.68s-9.55-2-12.08-5.93c-.17-.26-.32-.53-.47-.8a16.77 16.77 0 0 0 8.62 2.55z",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M325.28 148.04v21H234.1q4.17-5.78 8.52-11.4c.4-.52.8-1 1.22-1.55l4.27-5.37.59-.73 1.55-1.89zM418.13 148.04h95.81v20.98h-95.81zM638.18 148.04h95.81v20.98h-95.81zM824.29 148.04h95.81v20.98h-95.81z",
    fill: "tomato",
    opacity: 0.2,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 473
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (MainIcon);

/***/ })

})
//# sourceMappingURL=index.js.b64c70e999c650cd0c54.hot-update.js.map