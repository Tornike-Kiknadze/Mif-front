webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Slider/Slider.js":
/*!*************************************!*\
  !*** ./components/Slider/Slider.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! slick-carousel/slick/slick-theme.css */ "./node_modules/slick-carousel/slick/slick-theme.css");
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel/slick/slick.css */ "./node_modules/slick-carousel/slick/slick.css");
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_svg_Right__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/svg/Right */ "./static/svg/Right.js");
/* harmony import */ var _static_svg_Left__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../static/svg/Left */ "./static/svg/Left.js");
/* harmony import */ var _ProjectItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ProjectItem */ "./components/ProjectItem/index.js");
var _jsxFileName = "/home/reziko/projects/mif/client/components/Slider/Slider.js";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }









var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "Slider__Img",
  componentId: "m8xi2w-0"
})(["display:block;cursor:pointer;z-index:1;height:30px;position:absolute;margin-top:20px;", ";"], function (p) {
  return p.right && "right: ".concat(p.right, "px");
});
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Slider__Container",
  componentId: "m8xi2w-1"
})(["min-height:600px;.slick-slider{position:relative;display:block;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-touch-callout:none;-khtml-user-select:none;-ms-touch-action:pan-y;touch-action:pan-y;-webkit-tap-highlight-color:transparent;}.slick-list{margin:auto;margin-top:64.2px;display:flex;overflow:hidden;padding:0;}.slick-list:focus{outline:none;}.slick-list.dragging{cursor:pointer;cursor:hand;}.slick-slider .slick-track,.slick-slider .slick-list{-webkit-transform:translate3d(0,0,0);-moz-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);-o-transform:translate3d(0,0,0);transform:translate3d(0,0,0);}.slick-track{position:relative;top:0;left:0;display:flex;margin-left:auto;margin-right:auto;max-height:950px !important;}.slick-track:before,.slick-track:after{display:table;content:'';}.slick-track:after{clear:both;}.slick-loading .slick-track{visibility:hidden;}.slick-slide{display:none;float:left;height:100%;min-height:1px;}[dir='rtl'] .slick-slide{float:right;}.slick-slide img{display:block;}.slick-slide.slick-loading img{display:none;}.slick-slide.dragging img{pointer-events:none;}.slick-initialized .slick-slide{display:block;}.slick-loading .slick-slide{visibility:hidden;}.slick-vertical .slick-slide{display:block;height:auto;border:1px solid transparent;}.slick-arrow.slick-hidden{display:none;}.slick-prev,.slick-next{font-size:0;line-height:0;position:absolute;top:0%;width:20px;height:20px;padding:0;cursor:pointer;color:transparent;border:none;outline:none;background:transparent;}.slick-next{left:100%;}.slick-prev{position:absolute;left:97% !important;}.slick-prev:hover,.slick-prev:focus,.slick-next:hover,.slick-next:focus{color:transparent;outline:none;background:transparent;}.slick-prev:hover:before,.slick-prev:focus:before,.slick-next:hover:before,.slick-next:focus:before{opacity:1;}.slick-prev.slick-disabled:before,.slick-next.slick-disabled:before{opacity:0.25;}.slick-prev:before,.slick-next:before{font-family:'slick';font-size:20px;line-height:1;opacity:0.75;color:white;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-prev{left:-25px;}[dir='rtl'] .slick-prev{right:-25px;left:auto;}.slick-prev:before{content:'\u2190';}[dir='rtl'] .slick-prev:before{content:'\u2192';}.slick-next{right:-25px;}[dir='rtl'] .slick-next{right:auto;left:-25px;}.slick-next:before{content:'\u2192';}[dir='rtl'] .slick-next:before{content:'\u2190';}.slick-dotted.slick-slider{margin-bottom:30px;}.slick-dots{position:absolute;bottom:-25px;display:block;width:100%;padding:0;margin:0;list-style:none;text-align:center;}.slick-dots li{position:relative;display:inline-block;width:20px;height:20px;margin:0 5px;padding:0;cursor:pointer;}.slick-dots li button{font-size:0;line-height:0;display:block;width:20px;height:20px;padding:5px;cursor:pointer;color:transparent;border:0;outline:none;background:transparent;}.slick-dots li button:hover,.slick-dots li button:focus{outline:none;}.slick-dots li button:hover:before,.slick-dots li button:focus:before{opacity:1;}.slick-dots li button:before{font-family:'slick';font-size:6px;line-height:20px;position:absolute;top:0;left:0;width:20px;height:20px;content:'\u2022';text-align:center;opacity:0.25;color:black;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}.slick-dots li.slick-active button:before{opacity:0.75;color:black;}"]);
var Override = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
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

/***/ })

})
//# sourceMappingURL=index.js.13c1019753e9f65d81fa.hot-update.js.map