webpackHotUpdate("static/development/pages/blogpage.js",{

/***/ "./node_modules/react-parallax/dist/index.js":
/*!***************************************************!*\
  !*** ./node_modules/react-parallax/dist/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t(__webpack_require__(/*! react */ "./node_modules/react/index.js"),__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js")):undefined}(this,function(e,t){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=5)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(1),u=r(l),c=n(0),f=r(c),d=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){return f.default.createElement("div",{className:"react-parallax-background "+this.props.className},this.props.children)}}],[{key:"isParallaxBackground",value:function(){return!0}}]),t}(f.default.Component);d.propTypes={children:u.default.node,className:u.default.string},d.defaultProps={className:""},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),c=r(u),f=n(0),d=r(f),g=n(6),p=n(4),h=r(p),b={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},m=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.onWindowResize=function(){n.parentHeight=(0,g.getNodeHeight)(n.canUseDOM,n.parent),n.updatePosition()},n.onWindowLoad=function(){n.updatePosition()},n.onScroll=function(e){if(n.canUseDOM){var t=Date.now();t-n.timestamp>=10&&(0,g.isScrolledIntoView)(n.node,100,n.canUseDOM)&&(window.requestAnimationFrame(n.updatePosition),n.timestamp=t)}},n.onContentMount=function(e){n.content=e},n.updatePosition=function(){if(n.content){var e=!1;n.contentHeight=n.content.getBoundingClientRect().height,n.contentWidth=n.node.getBoundingClientRect().width,n.img&&n.img.naturalWidth/n.img.naturalHeight<n.contentWidth/n.getImageHeight()&&(e=!0);var t=(0,g.getRelativePosition)(n.node,n.canUseDOM,n.parent);n.img&&n.setImagePosition(t,e),n.bg&&n.splitChildren.bgChildren.length>0&&n.setBackgroundPosition(t)}},n.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:b,bgStyle:s({},b,n.getCustomBgStyle(e)),percentage:0},n.canUseDOM=(0,g.canUseDOM)(),n.node=null,n.content=null,n.splitChildren=(0,g.getSplitChildren)(e),n.bgImageLoaded=!1,n.bgImageRef=void 0,n.parent=e.parent,n.parentHeight=(0,g.getNodeHeight)(n.canUseDOM,n.parent),n.timestamp=Date.now(),n.dynamicBlur=!(!e.blur||void 0===e.blur.min||void 0===e.blur.max),n}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,r=t.bgImageSrcSet,i=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,r,i):this.updatePosition(),this.setParallaxStyle()}},{key:"componentWillReceiveProps",value:function(e){var t=e.parent,n=e.bgImage,r=e.bgImageSrcSet,i=e.bgImageSizes;this.splitChildren=(0,g.getSplitChildren)(e),t&&this.parent!==t&&(this.parent=t,this.removeListeners(),this.addListeners()),this.parentHeight=(0,g.getNodeHeight)(this.canUseDOM,this.parent),this.state.bgImage!==n&&this.loadImage(n,r,i)}},{key:"shouldComponentUpdate",value:function(e,t){return e.bgImage===this.props.bgImage||t.bgImage!==this.state.bgImage}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setParallaxStyle",value:function(){this.node&&(this.node.style.position="relative",this.node.style.overflow="hidden")}},{key:"getCustomBgStyle",value:function(e){var t=this,n={};return this.props.bgStyle&&Object.keys(this.props.bgStyle).forEach(function(e){n[e]=t.props.bgStyle[e]}),n}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,r=t.strength;if(!0!==n){var i=r<0,o=(i?r:0)-r*e,a="translate3d(-50%, "+o+"px, 0)";this.setState({bgStyle:s({},this.state.bgStyle,{WebkitTransform:a,transform:a}),percentage:e})}}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,r=n.bgHeight,i=n.bgWidth,o=n.disabled,a=n.strength,l=n.blur,u=r||(t?"auto":this.getImageHeight()+"px"),c=i||(t?this.contentWidth+"px":"auto");if(!0!==o){var f=a<0,d=(f?a:0)-a*e,g="translate3d(-50%, "+d+"px, 0)",p="none";l&&(p="blur("+(this.dynamicBlur?l.min+(1-e)*l.max:l)+"px)"),this.setState({imgStyle:s({},this.state.imgStyle,{height:u,width:c,WebkitTransform:g,transform:g,WebkitFilter:p,filter:p}),percentage:e})}}},{key:"getImageHeight",value:function(){var e=this.props.strength<0,t=e?2.5:1,n=t*Math.abs(this.props.strength);return Math.floor(this.contentHeight+n)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"loadImage",value:function(e,t,n){var r=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(i){r.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},function(){return r.updatePosition()})},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"log",value:function(){if(this.props.log){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];console.log(t)}}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,r=t.style,i=t.bgClassName,o=t.contentClassName,a=t.bgImageAlt,s=t.renderLayer,l=this.state,u=l.bgImage,c=l.bgImageSrcSet,f=l.bgImageSizes,g=l.percentage;return d.default.createElement("div",{className:"react-parallax "+n,style:r,ref:function(t){return e.node=t}},u?d.default.createElement("img",{className:i,src:u,srcSet:c,sizes:f,ref:function(t){return e.img=t},alt:a,style:this.state.imgStyle}):null,s?s(Math.min(-(g-1),1)):null,this.splitChildren.bgChildren.length>0?d.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){return e.bg=t},style:this.state.bgStyle},this.splitChildren.bgChildren):null,d.default.createElement(h.default,{onMount:this.onContentMount,className:o},this.splitChildren.children))}}]),t}(d.default.Component);m.propTypes={bgClassName:c.default.string,bgHeight:c.default.string,bgImage:c.default.string,bgImageAlt:c.default.string,bgImageSizes:c.default.string,bgImageSrcSet:c.default.string,bgStyle:c.default.object,bgWidth:c.default.string,blur:c.default.oneOfType([c.default.number,c.default.object]),className:c.default.string,contentClassName:c.default.string,disabled:c.default.bool,log:c.default.bool,parent:c.default.any,renderLayer:c.default.func,strength:c.default.number,style:c.default.object},m.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",disabled:!1,log:!1,strength:100},t.default=m},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(0),u=r(l),c=n(1),f=r(c),d=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),s(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.onMount,r=e.className;return u.default.createElement("div",{ref:function(e){return n(e)},className:r||"react-parallax-content",style:{position:"relative"}},t)}}]),t}(l.PureComponent);d.propTypes={children:f.default.node,className:f.default.string,onMount:f.default.func},d.propTypes={},t.default=d},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var i=n(3),o=r(i),a=n(2),s=r(a);t.Parallax=o.default,t.Background=s.default},function(e,t,n){"use strict";function r(e){if(!e)return 0;var t=window,n=document,r=n.documentElement,i=n.getElementsByTagName("body")[0];return t.innerHeight||r.clientHeight||i.clientHeight}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments[2];if(!n)return!1;var i=e.getBoundingClientRect().top-t,o=e.getBoundingClientRect().bottom+t;return i<=r(n)&&o>=0}function o(e,t){return e?t?t.clientHeight:r(e):0}function a(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function s(e,t,n){return(n-e)/(t-e)||0}function l(e,t,n){if(!t)return 0;var r=e,i=r.getBoundingClientRect(),a=i.top,l=i.height,u=o(t),c=l>u?l:u;return s(-l,c,Math.round(a>c?c:a),l)}function u(e){var t=[],n=d.default.Children.toArray(e.children);return n.forEach(function(e,r){e.type&&e.type.isParallaxBackground&&(t=t.concat(n.splice(r,1)))}),{bgChildren:t,children:n}}function c(e,t){e.style.WebkitFilter="blur("+t+"px)",e.style.filter="blur("+t+"px)"}Object.defineProperty(t,"__esModule",{value:!0}),t.getWindowHeight=r,t.isScrolledIntoView=i,t.getNodeHeight=o,t.canUseDOM=a,t.getPercentage=s,t.getRelativePosition=l,t.getSplitChildren=u,t.setBlur=c;var f=n(0),d=function(e){return e&&e.__esModule?e:{default:e}}(f)}])});

/***/ }),

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
          lineNumber: 46
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(GlobalStyle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_parallax__WEBPACK_IMPORTED_MODULE_10__["Parallax"], {
        strength: 500,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          height: 500,
          background: red
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        },
        __self: this
      }, mainImage && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MainImage, {
        image: "".concat(BackUrl, "/").concat(mainImage.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }))), ")}", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Section, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionContentDate, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ul, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Assets_Svg__WEBPACK_IMPORTED_MODULE_6__["default"], {
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, date, "dasdasdasd")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Li, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Assets_Category__WEBPACK_IMPORTED_MODULE_7__["default"], {
        width: 20,
        height: 20,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Design")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Wrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SectionContent, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlogTitle, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }, "Title"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, paragraph1), media1 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media1.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, paragraph2), media2 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media2.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Paragraph, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident..", ' ', paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident.. ", paragraph3, " Elit dolor culpa officia sunt labore deserunt culpa Lorem enim dolore labore do Laboris fugiat mollit pariatur ea ex proident..", ' '), media3 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Media, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MediaImage, {
        src: "".concat(BackUrl, "/").concat(media3.url),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Ending, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, ending)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_5__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
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
//# sourceMappingURL=blogpage.js.809544a92032ac96dd3e.hot-update.js.map