webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/sections/Projects/Projects.js":
/*!*********************************************!*\
  !*** ./pages/sections/Projects/Projects.js ***!
  \*********************************************/
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  * {\n    margin:0\n  }\n\n  body{\n    font-family: Averta\n  }\n\n  @font-face {\n    font-family: Averta;\n    src: url('../static/fonts/Averta.otf');\n  }\n  \n  @font-face {\n    font-family: Pacifico;\n    src: url('../static/fonts/Pacifico-Regular.ttf');\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var projects = _ref.projects;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Projects, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Header, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Left, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, null, "HELLO."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WeAre, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, null, "WE ARE"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(H2, null, "MIF"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Right, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, null, "Technology moves fast. Luckily so do we. Because technology is what we do. And we\u2019re here to help. We are Dept. One agency uniting creativity, technology and data. Helping reinvent & accelerate your digital reality by creating experiences that people want and businesses need."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Span, null, "Check out some of our favourite projects below."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonContent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightPlay__WEBPACK_IMPORTED_MODULE_3__["default"], {
    width: 15,
    height: 15
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BtnText, {
    href: "/projects"
  }, "ALL PROJECTS "))), " ", "width: 95%;")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProjectItems, null, projects && projects.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_4__["ProjectItem"], {
      data: item
    });
  })));
});
var Projects = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects",
  componentId: "yydpma-0"
})(["padding:50px 0;background-color:#f5f5f5;@media (max-width:900px){height:80vh;}"]);
var Header = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__Header",
  componentId: "yydpma-1"
})(["display:flex;max-width:1224px;align-items:center;margin:auto;padding:20px;align-items:flex-start;box-sizing:border-box;@media screen and (max-width:1036px){flex-direction:column;}"]);
var Left = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__Left",
  componentId: "yydpma-2"
})(["display:flex;flex:1;flex-direction:column;align-items:flex-start;font-size:52px !important;@media screen (max-width:1036px){flex-direction:column;width:100%;margin-bottom:50px;}"]);
var H2 = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].h2.withConfig({
  displayName: "Projects__H2",
  componentId: "yydpma-3"
})(["margin-right:10px;color:#2d2c32;"]);
var Span = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].span.withConfig({
  displayName: "Projects__Span",
  componentId: "yydpma-4"
})(["letter-spacing:1.1px;line-height:1.6;font-size:17px;margin-bottom:20px;text-align:justify;color:#62535c;@media (max-width:900px){width:90%;}"]);
var WeAre = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__WeAre",
  componentId: "yydpma-5"
})(["display:flex;font-size:36px !important;", ":nth-child(2){color:#ff7e6d;}"], H2);
var Right = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__Right",
  componentId: "yydpma-6"
})(["flex:2;display:flex;flex-direction:column;width:300px;@media (max-width:1300px){align-items:center;}"]);
var ProjectItems = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__ProjectItems",
  componentId: "yydpma-7"
})(["display:flex;justify-content:flex-start;flex-wrap:wrap;margin:auto;"]);
var Button = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__Button",
  componentId: "yydpma-8"
})(["margin-bottom:40px;"]);
var ButtonContent = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "Projects__ButtonContent",
  componentId: "yydpma-9"
})(["display:flex;align-items:center;a{text-decoration:none;margin-left:10px;font-weight:bold;font-size:13px;margin-top:5px;cursor:pointer;transition:color 200ms ease;transition:transform 200ms ease;color:#62535c;a{text-decoration:none;}&:hover{color:#ff7e6d;transform:translateX(10px);}}"]);
var BtnText = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a).withConfig({
  displayName: "Projects__BtnText",
  componentId: "yydpma-10"
})([""]);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/sections/Projects/Projects")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=index.js.2e2409f9416417777b87.hot-update.js.map