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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(News, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsCenter, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsHeader, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, null, "IN OUR"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, null, "NEWS"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(NewsItems, null, news.map(function (item, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ProjectItem"], {
      color: "#66D7D1",
      data: item
    });
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAllNews, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ViewAllNewsContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: "/news"
    }
  }, "All News"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_6__["default"], {
    width: 20,
    height: 20,
    fill: "#27cba4"
  })))))));
});
var News = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News",
  componentId: "sc-7ygyd1-0"
})(["width:100%;background:#ffffff;padding:80px 0 120px 0;background:#f7fbfb;"]);
var NewsHeader = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsHeader",
  componentId: "sc-7ygyd1-1"
})(["max-width:1224px;@media screen and (max-width:1036px){flex-direction:column;}width:1%;display:flex;margin-bottom:55px;font-weight:800;padding-left:10px;h1{font-size:46px;}span{margin-top:10px;}"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__Span",
  componentId: "sc-7ygyd1-2"
})(["color:#2d2c32;font-size:52px !important;&:nth-child(2){font-size:36px !important;color:#ff7e6d;}"]);
var NewsTitleLeft = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsTitleLeft",
  componentId: "sc-7ygyd1-3"
})(["flex:1;height:100%;display:flex;align-items:center;justify-content:center;"]);
var NewsTitleRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsTitleRight",
  componentId: "sc-7ygyd1-4"
})(["width:50px;height:100%;display:flex;align-items:center;justify-content:center;background:#543243;transition:0.1s;svg{fill:#fff;}", ":hover &{background:#27cba4;transform:scale(1.1);box-shadow:0 25px 25px rgba(0,0,0,0.16);}"], NewsHeader);
var NewsHeaderRight = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsHeaderRight",
  componentId: "sc-7ygyd1-5"
})(["display:flex;align-items:center;cursor:pointer;&:hover{color:#27cba4;}"]);
var NewsItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "News__NewsItems",
  componentId: "sc-7ygyd1-6"
})(["width:100%;margin-top:20px;display:grid;grid-template-columns:repeat(3,1fr);grid-template-rows:auto;@media (min-width:30em){grid-template-columns:1fr 1fr;}@media (min-width:60em){grid-template-columns:repeat(3,1fr);}"]);
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
})(["height:100%;margin:auto;display:flex;flex-direction:column;align-items:center;justify-content:center;font-size:16px;"]);
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
//# sourceMappingURL=index.js.3d3e195b403d4c97733f.hot-update.js.map