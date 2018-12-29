webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/PostItem/PostItem.js":
/*!*****************************************!*\
  !*** ./components/PostItem/PostItem.js ***!
  \*****************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Top, {
    image: "".concat(BackUrl).concat(mainImage.url),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, content), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_Dash__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/blog',
      query: {
        id: id
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContinueReading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, " Continue Reading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 15,
    height: 15,
    fill: '#27cba4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })))))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Container",
  componentId: "t83s2k-0"
})(["flex:1 0 350px;max-width:388px;height:auto;margin:10px;box-sizing:border-box;border-radius:10px;box-shadow:0 1px 3px rgba(0,0,0,0.12),0 1px 2px rgba(0,0,0,0.24);cursor:pointer;overflow:hidden;transition:all 0.3s cubic-bezier(0.25,0.8,0.25,1);&:hover{box-shadow:0 14px 28px rgba(0,0,0,0.25),0 10px 10px rgba(0,0,0,0.22);}"]);
var Top = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Top",
  componentId: "t83s2k-1"
})(["width:100%;height:200px;background-image:url(", ");background-size:cover;background-repeat:no-repeat;"], function (props) {
  return props.image;
});
var Date = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Date",
  componentId: "t83s2k-2"
})(["width:100%;height:20px;display:flex;align-items:center;margin-top:30px;"]);
var Time = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Time",
  componentId: "t83s2k-3"
})(["color:#543243;font-weight:800;"]);
var Dashes = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Dashes",
  componentId: "t83s2k-4"
})(["display:flex;align-items:center;justify-content:space-between;overflow:hidden;"]);
var Bottom = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Bottom",
  componentId: "t83s2k-5"
})(["width:100%;height:auto;padding-top:10px;display:flex;flex-direction:column;padding:20px;box-sizing:border-box;background:#ffffff;"]);
var PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__PostTitle",
  componentId: "t83s2k-6"
})(["width:100%;color:#ff7e6d;font-weight:bold;font-size:20px;text-align:center;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Content",
  componentId: "t83s2k-7"
})(["color:#7f6371;font-size:14px;font-weight:bold;margin-top:10px;max-height:8ch;overflow:hidden;text-align:justify;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Footer",
  componentId: "t83s2k-8"
})(["width:100%;margin-top:20px;display:flex;justify-content:space-between;align-items:center;font-size:14px;"]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Category",
  componentId: "t83s2k-9"
})(["color:#543243;cursor:pointer;transition:0.2s;&:hover{color:#27cba4;}"]);
var ContinueReading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__ContinueReading",
  componentId: "t83s2k-10"
})(["color:#543243;cursor:pointer;transition:0.3s;display:flex;&:hover{color:#27cba4;}"]);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "PostItem__Text",
  componentId: "t83s2k-11"
})(["margin-right:5px;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Icon",
  componentId: "t83s2k-12"
})(["display:flex;align-items:center;transition:0.3s;", ":hover &{transform:translateX(5px);}"], ContinueReading);
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ })

})
//# sourceMappingURL=index.js.aa23c9a1ef77a76f9a97.hot-update.js.map