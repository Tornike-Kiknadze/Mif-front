webpackHotUpdate("static/development/pages/news.js",{

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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: {
      pathname: '/blog',
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Top, {
    image: "".concat(BackUrl).concat(mainImage.url),
    className: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bottom, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BottomTop, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, Title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, content)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContinueReading, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, " Continue Reading"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_static_svg_RightArrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    width: 15,
    height: 15,
    fill: '#27cba4',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })))))));
};

var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Container",
  componentId: "t83s2k-0"
})(["display:flex;flex-direction:column;position:relative;cursor:pointer;top:0;transition:all 0.1s ease-in;box-shadow:0 2px 5px rgba(0,0,0,0.1);&:hover{top:-2px;box-shadow:0 4px 5px rgba(0,0,0,0.2);}"]);
var Top = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Top",
  componentId: "t83s2k-1"
})(["width:100%;padding-bottom:60%;background-image:url(", ");background-size:cover;background-repeat:no-repeat;background-position:center center;"], function (props) {
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
})(["width:100%;display:flex;flex:1;flex-direction:column;justify-content:space-between;padding:20px;box-sizing:border-box;background:#ffffff;"]);
var BottomTop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__BottomTop",
  componentId: "t83s2k-6"
})([""]);
var PostTitle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__PostTitle",
  componentId: "t83s2k-7"
})(["width:100%;color:#ff7e6d;font-weight:bold;font-size:20px;"]);
var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Content",
  componentId: "t83s2k-8"
})(["color:#7f6371;font-size:14px;font-weight:bold;margin-top:10px;max-height:15ch;overflow:hidden;text-align:justify;"]);
var Footer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Footer",
  componentId: "t83s2k-9"
})(["width:100%;margin-top:20px;display:flex;justify-content:space-between;align-items:center;font-size:14px;"]);
var Category = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Category",
  componentId: "t83s2k-10"
})(["color:#543243;cursor:pointer;transition:0.2s;&:hover{color:#27cba4;}"]);
var ContinueReading = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__ContinueReading",
  componentId: "t83s2k-11"
})(["color:#543243;cursor:pointer;transition:0.3s;display:flex;&:hover{color:#27cba4;}", ":hover &{color:#27cba4;}"], Container);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p.withConfig({
  displayName: "PostItem__Text",
  componentId: "t83s2k-12"
})(["margin-right:5px;"]);
var Icon = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "PostItem__Icon",
  componentId: "t83s2k-13"
})(["display:flex;align-items:center;transition:0.3s;", ":hover &{transform:translateX(5px);}", ":hover &{transform:translateX(5px);}"], ContinueReading, Container);
/* harmony default export */ __webpack_exports__["default"] = (PostItem);

/***/ })

})
//# sourceMappingURL=news.js.2379e995a1fa455c609f.hot-update.js.map