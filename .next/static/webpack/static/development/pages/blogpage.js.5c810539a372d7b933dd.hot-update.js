webpackHotUpdate("static/development/pages/blogpage.js",{

/***/ "./pages/blogpage.js":
/*!***************************!*\
  !*** ./pages/blogpage.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer/index.js");
/* harmony import */ var _Assets_Svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Assets/Svg */ "./pages/Assets/Svg.js");
/* harmony import */ var _Assets_Category__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Assets/Category */ "./pages/Assets/Category.js");
/* harmony import */ var _components_Responsive_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Responsive/Footer */ "./components/Responsive/Footer.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! strapi-sdk-javascript/build/main */ "./node_modules/strapi-sdk-javascript/build/main/index.js");
/* harmony import */ var strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-parallax */ "./node_modules/react-parallax/dist/index.js");
/* harmony import */ var react_parallax__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_parallax__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "/home/reziko/projects/mif/client/pages/blogpage.js";

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











var BackUrl = 'http://localhost:1337';
var strapiApi = new strapi_sdk_javascript_build_main__WEBPACK_IMPORTED_MODULE_9___default.a(BackUrl);
var insideStyles = {
  background: 'white',
  padding: 20,
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)'
};

var Blog =
/*#__PURE__*/
function (_Component) {
  _inherits(Blog, _Component);

  function Blog(props) {
    var _this;

    _classCallCheck(this, Blog);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Blog).call(this, props));
    _this.state = {
      post: {}
    };
    return _this;
  }

  _createClass(Blog, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var id, post;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                id = this.props.url.query.id;
                _context.next = 3;
                return strapiApi.getEntries("News/".concat(id));

              case 3:
                post = _context.sent;
                this.setState({
                  post: post
                });

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _this$state$post = this.state.post,
          Title = _this$state$post.Title,
          category = _this$state$post.category,
          content = _this$state$post.content,
          createdAt = _this$state$post.createdAt,
          date = _this$state$post.date,
          ending = _this$state$post.ending,
          mainImage = _this$state$post.mainImage,
          media1 = _this$state$post.media1,
          media2 = _this$state$post.media2,
          media3 = _this$state$post.media3,
          paragraph1 = _this$state$post.paragraph1,
          paragraph2 = _this$state$post.paragraph2,
          paragraph3 = _this$state$post.paragraph3;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }), mainImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_10__["Parallax"], {
        bgImage: "".concat(BackUrl, "/").concat(mainImage.url),
        bgStyle: {
          backgroundposition: 'center center'
        },
        strength: 900,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: 700,
          background: 'rgba(254, 251, 237, 0.6)'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: insideStyles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, "HTML inside the parallax"))), ")}", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionContentDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ul, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Assets_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, date, "dasdasdasd")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Assets_Category__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Design")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94
        },
        __self: this
      }, paragraph1), media1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media1.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, paragraph2), media2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media2.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident..", ' ', paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident..", ' '), media3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media3.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ending, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, ending)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }));
    }
  }]);

  return Blog;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Blog);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Container",
  componentId: "sc-1mknfz0-0"
})(["width:100%;height:auto;"]);
var SectionHeader = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__SectionHeader",
  componentId: "sc-1mknfz0-1"
})(["width:100%;height:90vh;padding-top:6rem;box-sizing:border-box;background-color:#eafaf6;display:flex;align-items:center;justify-content:center;"]);
var MainImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__MainImage",
  componentId: "sc-1mknfz0-2"
})(["width:300px;height:300px;background-image:url(", ");background-size:cover;background-position:center center;border-radius:100%;box-shadow:0 5px 15px rgba(0,0,0,0.47),0 10px 23px rgba(0,0,0,0.2);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);"], function (props) {
  return props.image;
});
var Section = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Section",
  componentId: "sc-1mknfz0-3"
})(["width:70%;max-width:1825px;margin:auto;background-color:#fff;text-align:justify;font-size:1.2rem;padding:1rem 0 6rem 0;display:flex;line-height:2rem;align-items:center;justify-content:center;box-sizing:border-box;position:relative;"]);
var Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Wrapper",
  componentId: "sc-1mknfz0-4"
})(["width:100%;display:flex;padding:1.5rem 6rem 6rem 6rem;position:relative;justify-content:center;"]);
var SectionContent = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__SectionContent",
  componentId: "sc-1mknfz0-5"
})([""]);
var BlogTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__BlogTitle",
  componentId: "sc-1mknfz0-6"
})(["color:#ff7e6d;width:1rem;font-size:48px;font-weight:800;text-align:center;width:100%;"]);
var Paragraph = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Paragraph",
  componentId: "sc-1mknfz0-7"
})(["margin-top:24px;font-size:21px;letter-spacing:-1px;"]);
var Media = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Media",
  componentId: "sc-1mknfz0-8"
})(["width:100%;height:auto;margin-top:25px;"]);
var MediaImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "blogpage__MediaImage",
  componentId: "sc-1mknfz0-9"
})(["width:100%;object-fit:cover;"]);
var Ending = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__Ending",
  componentId: "sc-1mknfz0-10"
})(["margin-top:24px;font-size:21px;letter-spacing:-1px;color:#62535c;"]);
var SectionContentDate = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "blogpage__SectionContentDate",
  componentId: "sc-1mknfz0-11"
})(["padding-top:1rem;color:#c0b3b9;position:absolute;top:4rem;left:-5rem;"]);
var Ul = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].ul.withConfig({
  displayName: "blogpage__Ul",
  componentId: "sc-1mknfz0-12"
})(["list-style:none;font-size:0.9rem;display:flex;flex-wrap:wrap;width:210px;padding:0;"]);
var Li = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].li.withConfig({
  displayName: "blogpage__Li",
  componentId: "sc-1mknfz0-13"
})(["flex:1 1 100%;display:flex;align-items:center;margin:0.4rem;position:relative;& > *{margin:0.2rem;}"]);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/blogpage")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=blogpage.js.5c810539a372d7b933dd.hot-update.js.map