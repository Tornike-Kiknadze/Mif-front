webpackHotUpdate("static/development/pages/projects.js",{

/***/ "./components/Responsive/Footer.js":
/*!*****************************************!*\
  !*** ./components/Responsive/Footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Responsive; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
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


var ContainerText = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__ContainerText",
  componentId: "sc-1u71pxo-0"
})(["display:flex;justify-content:space-around;"]);
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__Container",
  componentId: "sc-1u71pxo-1"
})(["width:100%;display:block;height:auto;align-items:bottom;justify-content:space-between;padding:3rem 8rem 3rem 6rem;box-sizing:border-box;background-color:white;@media (max-width:768px){display:none;}"]);
var SvgItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Footer__SvgItem",
  componentId: "sc-1u71pxo-2"
})(["text-align:center;"]);

/***/ })

})
//# sourceMappingURL=projects.js.d127c5fb53fa0beefe11.hot-update.js.map