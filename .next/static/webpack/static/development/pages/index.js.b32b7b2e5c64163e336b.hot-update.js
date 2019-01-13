webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var HeaderContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__HeaderContainer",
  componentId: "sc-1hc63ty-0"
})(["width:100%;height:50px;overflow:hidden;display:flex;align-items:center;justify-content:space-between;padding:0 20px;box-sizing:border-box;position:fixed;top:", ";transition:0.4s;z-index:200;"], function (props) {
  return props.isUp ? "0" : "-100px";
});
var HeaderContainerCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__HeaderContainerCenter",
  componentId: "sc-1hc63ty-1"
})(["width:1024px;height:40px;margin:auto;display:flex;align-items:center;justify-content:space-between;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__Logo",
  componentId: "sc-1hc63ty-2"
})(["color:#ff7e6d;font-size:24px;font-weight:800;cursor:pointer;"]);
var Menu = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "Header__Menu",
  componentId: "sc-1hc63ty-3"
})(["display:flex;"]);
var MenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "Header__MenuItem",
  componentId: "sc-1hc63ty-4"
})(["list-style:none;color:#ff7e6d;margin-left:15px;font-size:18px;font-weight:800;cursor:pointer;"]);
var StyledLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__StyledLink",
  componentId: "sc-1hc63ty-5"
})(["cursor:pointer;text-decoration:none;"]);
var LanguageSwitcher = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__LanguageSwitcher",
  componentId: "sc-1hc63ty-6"
})(["color:#fff;font-size:20px;"]);
var SubMenuLink = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a).withConfig({
  displayName: "Header__SubMenuLink",
  componentId: "sc-1hc63ty-7"
})(["text-decoration:none;"]);
var SubMenuItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Header__SubMenuItem",
  componentId: "sc-1hc63ty-8"
})(["list-style:none;color:#fff;font-size:10px;font-weight:800;padding:15px 20px;box-sizing:border-box;&:hover{background-color:#333;}"]);
/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/ProjectItem/ProjectItem.js":
/*!***********************************************!*\
  !*** ./components/ProjectItem/ProjectItem.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectItem__Container",
  componentId: "sc-14mpx99-0"
})(["margin:20px;display:block;width:280px;height:360px;border-radius:15px;padding:1.5rem;box-sizing:border-box;background:white;position:relative;display:flex;align-items:flex-end;transition:0.4s ease-out;box-shadow:0px 7px 10px rgba(0,0,0,0.5);&:before{content:'';position:absolute;top:0;left:0;display:block;width:100%;height:100%;border-radius:15px;background:rgba(0,0,0,0.6);z-index:2;transition:0.5s;opacity:0;}&:hover{-webkit-transform:translateY(20px);transform:translateY(20px);}&:hover:before{opacity:1;}h1{margin:0px;}p{letter-spacing:1px;font-size:15px;margin-top:8px;}"]);
var InfoButton = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].button.withConfig({
  displayName: "ProjectItem__InfoButton",
  componentId: "sc-14mpx99-1"
})(["margin-top:10px;padding:0.6rem;outline:none;border:none;border-radius:3px;background:white;color:black;font-weight:bold;cursor:pointer;transition:0.4s ease;&:hover{background:#27cba4;color:white;}"]);
var Info = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "ProjectItem__Info",
  componentId: "sc-14mpx99-2"
})(["position:relative;z-index:3;color:white;opacity:0;-webkit-transform:translateY(30px);transform:translateY(30px);transition:0.5s;", ":hover &{opacity:1;transform:translateY(0px);}"], Container);
var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "ProjectItem__Img",
  componentId: "sc-14mpx99-3"
})(["width:100%;height:100%;object-fit:cover;position:absolute;top:0;left:0;border-radius:15px;"]);
/* harmony default export */ __webpack_exports__["default"] = (ProjectItem);

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
/* harmony import */ var _static_svg_mainIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/svg/mainIcon.svg */ "./static/svg/mainIcon.svg");
/* harmony import */ var _static_svg_mainIcon_svg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_svg_mainIcon_svg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_ProjectItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ProjectItem */ "./components/ProjectItem/index.js");
/* harmony import */ var _static_svg_Right__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/svg/Right */ "./static/svg/Right.js");

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
                return strapiApi.getEntries('News?_limit=9');

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
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Header"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadContainer, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadContainerLeft, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, "Media Inovation Foundation"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, "This is a such a great slogan that, when kyle mynouge saw it she become waffle, This is a such a great slogan that, when kyle mynouge saw it she become waffle,This is a such a great slogan that, when kyle mynouge saw it she become waffle, This is a such a great slogan that, when kyle mynouge saw it she become waffle")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(HeadContainerRight, {
        img: _static_svg_mainIcon_svg__WEBPACK_IMPORTED_MODULE_6___default.a,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(News, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsCenter, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsTitleLeft, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, "In The News")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsTitleRight, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_svg_Right__WEBPACK_IMPORTED_MODULE_9__["default"], {
        width: 15,
        height: 15,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NewsItems, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, news.map(function (item, index) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["PostItem"], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewAllNews, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ViewAllNewsContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_7___default.a, {
        href: {
          pathname: '/news'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, "All News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Icon, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_4__["default"], {
        width: 20,
        height: 20,
        fill: '#27cba4',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsSlider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsHeader, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ProjectsBG, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Span, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Projects")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Slider"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }, projects && projects.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ProjectItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          data: item,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83
          },
          __self: this
        });
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_3__["Footer"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      })));
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
})(["width:100%;height:100vh;background:#fff5f3;"]);
var HeadContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__HeadContainer",
  componentId: "sc-1wbo52z-2"
})(["width:100%;height:100%;margin:auto;padding:0 120px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;font-size:16px;"]);
var HeadContainerLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__HeadContainerLeft",
  componentId: "sc-1wbo52z-3"
})(["flex:1;height:100%;display:flex;justify-content:center;font-size:26px;color:#ff7e6d;font-weight:bold;flex-direction:column;text-align:left;h1{width:400px;line-height:55px;letter-spacing:7px;}span{margin-top:20px;font-size:16px;color:#444053;font-weight:bold;line-height:25px;letter-spacing:2px;}"]);
var HeadContainerRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__HeadContainerRight",
  componentId: "sc-1wbo52z-4"
})(["flex:1;height:100%;background-image:url(", ");background-size:contain;background-position:center center;background-repeat:no-repeat;"], function (props) {
  return props.img;
});
var News = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__News",
  componentId: "sc-1wbo52z-5"
})(["width:100%;background:#ffffff;padding:80px 0 120px 0;background:#f7fbfb;"]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsHeader",
  componentId: "sc-1wbo52z-6"
})(["width:100%;height:50px;display:flex;margin-bottom:55px;font-weight:800;font-size:18px;padding-left:10px;color:#fff;background:#ff7e6d;transition:0.2s;box-shadow:0 10px 12px -9px #777;cursor:pointer;h1{font-size:18px;}span{margin-top:10px;}&:hover{background:#543243;}"]);
var NewsTitleLeft = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsTitleLeft",
  componentId: "sc-1wbo52z-7"
})(["flex:1;height:100%;display:flex;align-items:center;justify-content:center;"]);
var NewsTitleRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsTitleRight",
  componentId: "sc-1wbo52z-8"
})(["width:50px;height:100%;display:flex;align-items:center;justify-content:center;background:#543243;transition:0.1s;svg{fill:#fff;}", ":hover &{background:#27cba4;transform:scale(1.1);box-shadow:0 25px 25px rgba(0,0,0,0.16);}"], NewsHeader);
var ProjectsHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsHeader",
  componentId: "sc-1wbo52z-9"
})(["width:100%;display:flex;align-items:center;color:#301d28;font-weight:bold;position:relative;color:#ff7e6d;font-size:2em;"]);
var ProjectsBG = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsBG",
  componentId: "sc-1wbo52z-10"
})(["width:80px;height:80%;position:absolute;top:10px;background:rgba(255,255,255,0.6);z-index:-1;"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Span",
  componentId: "sc-1wbo52z-11"
})(["color:#543243;font-size:18px;"]);
var NewsHeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsHeaderRight",
  componentId: "sc-1wbo52z-12"
})(["display:flex;align-items:center;cursor:pointer;&:hover{color:#27cba4;}"]);
var NewsItems = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsItems",
  componentId: "sc-1wbo52z-13"
})(["width:100%;margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-gap:35px;@media (min-width:30em){grid-template-columns:1fr 1fr;}@media (min-width:60em){grid-template-columns:repeat(3,1fr);}"]);
var ViewAllNews = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ViewAllNews",
  componentId: "sc-1wbo52z-14"
})(["display:flex;justify-content:center;align-items:center;"]);
var ViewAllNewsContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ViewAllNewsContent",
  componentId: "sc-1wbo52z-15"
})(["display:flex;a{text-decoration:none;font-size:26px;font-weight:800;color:#543243;transition:0.2s;&:hover{color:#27cba4;}}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Icon",
  componentId: "sc-1wbo52z-16"
})(["display:flex;align-items:center;transition:0.3s;margin-left:5px;", ":hover &{transform:translateX(5px);}"], ViewAllNewsContent);
var ProjectsSlider = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__ProjectsSlider",
  componentId: "sc-1wbo52z-17"
})(["width:1224px;margin:auto;background:#fff;display:flex;flex-direction:column;padding:80px 0 0 0;"]);
var NewsCenter = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__NewsCenter",
  componentId: "sc-1wbo52z-18"
})(["width:1224px;height:100%;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
var Space = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "pages__Space",
  componentId: "sc-1wbo52z-19"
})(["margin:0 5px;"]);
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

/***/ "./pages/sections/News/News.js":
false,

/***/ "./pages/sections/News/index.js":
false,

/***/ "./pages/sections/Projects/Projects.js":
false,

/***/ "./pages/sections/Projects/index.js":
false,

/***/ "./pages/sections/index.js":
false,

/***/ "./static/svg/RightPlay.js":
false

})
//# sourceMappingURL=index.js.b32b7b2e5c64163e336b.hot-update.js.map