webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/sections/News/News.js":
/*!*************************************!*\
  !*** ./pages/sections/News/News.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _static_svg_RightPlay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../static/svg/RightPlay */ "./static/svg/RightPlay.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components */ "./components/index.js");
/* harmony import */ var _static_svg_Right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../static/svg/Right */ "./static/svg/Right.js");
/* harmony import */ var _static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../static/svg/RightArrow */ "./static/svg/RightArrow.js");
var _jsxFileName = "/home/reziko/projects/mif/client/pages/sections/News/News.js";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin:0\n  }\n  body{\n    font-family:Averta\n  }\n  @font-face {\n    font-family: Averta;\n    src: url('../static/fonts/Averta.otf');\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








/* harmony default export */ __webpack_exports__["default"] = (function (props) {
  var news = props.news;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsCenter, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsHeader, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "IN OUR NEWS")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsItems, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, news.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["PostItem"], {
      data: item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAllNews, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAllNewsContent, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: '/news'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "All News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: 20,
    height: 20,
    fill: '#27cba4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })))))));
});
var News = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News",
  componentId: "sc-7ygyd1-0"
})(["width:100%;background:#ffffff;padding:80px 0 120px 0;background:#f7fbfb;"]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsHeader",
  componentId: "sc-7ygyd1-1"
})(["width:100%;display:flex;margin-bottom:55px;font-weight:800;padding-left:10px;h1{font-size:46px;}span{margin-top:10px;}&:hover{background:#543243;}"]);
var NewsTitleLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsTitleLeft",
  componentId: "sc-7ygyd1-2"
})(["flex:1;height:100%;display:flex;align-items:center;justify-content:center;"]);
var NewsTitleRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsTitleRight",
  componentId: "sc-7ygyd1-3"
})(["width:50px;height:100%;display:flex;align-items:center;justify-content:center;background:#543243;transition:0.1s;svg{fill:#fff;}", ":hover &{background:#27cba4;transform:scale(1.1);box-shadow:0 25px 25px rgba(0,0,0,0.16);}"], NewsHeader);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__Span",
  componentId: "sc-7ygyd1-4"
})(["color:#543243;font-size:18px;"]);
var NewsHeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsHeaderRight",
  componentId: "sc-7ygyd1-5"
})(["display:flex;align-items:center;cursor:pointer;&:hover{color:#27cba4;}"]);
var NewsItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsItems",
  componentId: "sc-7ygyd1-6"
})(["width:100%;margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;grid-gap:35px;@media (min-width:30em){grid-template-columns:1fr 1fr;}@media (min-width:60em){grid-template-columns:repeat(3,1fr);}"]);
var ViewAllNews = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__ViewAllNews",
  componentId: "sc-7ygyd1-7"
})(["display:flex;justify-content:center;align-items:center;"]);
var ViewAllNewsContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__ViewAllNewsContent",
  componentId: "sc-7ygyd1-8"
})(["display:flex;a{text-decoration:none;font-size:26px;font-weight:800;color:#543243;transition:0.2s;&:hover{color:#27cba4;}}"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__Icon",
  componentId: "sc-7ygyd1-9"
})(["display:flex;align-items:center;transition:0.3s;margin-left:5px;", ":hover &{transform:translateX(5px);}"], ViewAllNewsContent);
var NewsCenter = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsCenter",
  componentId: "sc-7ygyd1-10"
})(["width:1224px;height:100%;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;"]);
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["createGlobalStyle"])(_templateObject());
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sections/News/News")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.a90cc1556b590444489c.hot-update.js.map