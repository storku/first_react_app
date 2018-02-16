module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/create_article.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_components_Article_creation_input__ = __webpack_require__("./src/components/Article_creation_input.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_UI_container__ = __webpack_require__("./src/components/UI_container.js");
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/pages/create_article.js';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






//create test links
var PostLink = function PostLink(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
    'li',
    {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      }
    },
    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_1__routes__["Link"],
      { as: '/p/' + props.id, href: '/post?title=' + props.title, __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        }
      },
      __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'a',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        },
        props.title
      )
    )
  );
};

var CreateArticle = function (_Component) {
  _inherits(CreateArticle, _Component);

  function CreateArticle(props) {
    _classCallCheck(this, CreateArticle);

    var _this = _possibleConstructorReturn(this, (CreateArticle.__proto__ || Object.getPrototypeOf(CreateArticle)).call(this, props));

    _this.state = {
      value: ''
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(CreateArticle, [{
    key: 'handleChange',
    value: function handleChange(newText) {
      this.setState({
        value: newText
      });
      console.log(newText);
    }

    /*
    //This routing method is from udemy ethereum course
    async handleSubmit(event) {
      let linkText = this.state.value;
      linkText = '/articles/'+linkText
      linkText = linkText.replace(/ /g,'_')
      Router.push(linkText);
      event.preventDefault();
    }
    */

  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      var linkText = this.state.value;
      var href = '/post?title=' + linkText;
      var as = linkText.split(' ').join('_');
      as = '/p/' + as;
      __WEBPACK_IMPORTED_MODULE_1__routes__["Router"].push(href, as);
      event.preventDefault();
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3__src_components_UI_container__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__src_components_Article_creation_input__["a" /* default */], {
            value: this.state.value,
            submittedText: this.state.submittedText,
            onChange: this.handleChange,
            onSubmit: this.handleSubmit,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'h4',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              }
            },
            'Test Links'
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PostLink, { id: 'hello_nextjs', title: 'Hello Next.js', __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PostLink, { id: 'bye_bye', title: 'Bye bye', __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(PostLink, { id: 'test_abc', title: 'Test ABC', __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            }
          })
        )
      );
    }
  }]);

  return CreateArticle;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateArticle);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")(); //imports and runs the function

//this is from udemy ethereum course
routes.add('/articles/:articleName', '/articles/article_template');

module.exports = routes;

/***/ }),

/***/ "./src/components/Article_creation_input.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/Article_creation_input.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ArticleCreationInput = function (_React$Component) {
  _inherits(ArticleCreationInput, _React$Component);

  function ArticleCreationInput(props) {
    _classCallCheck(this, ArticleCreationInput);

    var _this = _possibleConstructorReturn(this, (ArticleCreationInput.__proto__ || Object.getPrototypeOf(ArticleCreationInput)).call(this, props));

    _this.extractValue = _this.extractValue.bind(_this);
    return _this;
  }

  _createClass(ArticleCreationInput, [{
    key: 'extractValue',
    value: function extractValue(e) {
      var newText = e.target.value;
      this.props.onChange(newText);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'form',
          { onSubmit: this.props.onSubmit, __source: {
              fileName: _jsxFileName,
              lineNumber: 18
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'label',
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              }
            },
            'Create New Article:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Input"], {
              type: 'text',
              value: this.props.value,
              onChange: this.extractValue,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              }
            })
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
            { primary: true, type: 'submit', value: 'Submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              }
            },
            'Submit'
          )
        )
      );
    }
  }]);

  return ArticleCreationInput;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (ArticleCreationInput);

/***/ }),

/***/ "./src/components/Menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Search_bar__ = __webpack_require__("./src/components/Search_bar.js");
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/Menu.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






//menu is imported into the ui_container.js file

var MenuExampleMenus = function (_Component) {
  _inherits(MenuExampleMenus, _Component);

  function MenuExampleMenus() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, MenuExampleMenus);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = MenuExampleMenus.__proto__ || Object.getPrototypeOf(MenuExampleMenus)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.handleItemClick = function (e, _ref2) {
      var name = _ref2.name;
      return _this.setState({ activeItem: name });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(MenuExampleMenus, [{
    key: 'render',

    //<Link> tags enables client rendering (faster than server side rendering)
    value: function render() {
      var activeItem = this.state.activeItem;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 15
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', {
          rel: 'stylesheet',
          href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 16
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
          { href: '/signup', __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
            {
              name: 'signup',
              active: activeItem === 'signup',
              onClick: this.handleItemClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            },
            'Signup'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
          { href: '/login', __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
            {
              name: 'login',
              active: activeItem === 'login',
              onClick: this.handleItemClick,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            'Login'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Search_bar__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu,
          { position: 'right', __source: {
              fileName: _jsxFileName,
              lineNumber: 42
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
            { href: '/create_article', __source: {
                fileName: _jsxFileName,
                lineNumber: 43
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              {
                name: 'createArticle',
                active: activeItem === 'createArticle',
                onClick: this.handleItemClick,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 44
                }
              },
              'Create Article'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 53
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              {
                name: '/mainPage',
                active: activeItem === 'mainPage',
                onClick: this.handleItemClick,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              },
              'Main Page'
            )
          )
        )
      );
    }
  }]);

  return MenuExampleMenus;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (MenuExampleMenus);

/***/ }),

/***/ "./src/components/Search_bar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("lodash");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker__ = __webpack_require__("faker");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_faker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_faker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/Search_bar.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var source = __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.times(5, function () {
  return {
    title: __WEBPACK_IMPORTED_MODULE_1_faker___default.a.company.companyName(),
    description: __WEBPACK_IMPORTED_MODULE_1_faker___default.a.company.catchPhrase(),
    image: __WEBPACK_IMPORTED_MODULE_1_faker___default.a.internet.avatar(),
    price: __WEBPACK_IMPORTED_MODULE_1_faker___default.a.finance.amount(0, 100, 2, '$')
  };
});

var SearchExampleStandard = function (_Component) {
  _inherits(SearchExampleStandard, _Component);

  function SearchExampleStandard() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchExampleStandard);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SearchExampleStandard.__proto__ || Object.getPrototypeOf(SearchExampleStandard)).call.apply(_ref, [this].concat(args))), _this), _this.resetComponent = function () {
      return _this.setState({ isLoading: false, results: [], value: '' });
    }, _this.handleResultSelect = function (e, _ref2) {
      var result = _ref2.result;
      return _this.setState({ value: result.title });
    }, _this.handleSearchChange = function (e, _ref3) {
      var value = _ref3.value;

      _this.setState({ isLoading: true, value: value });

      setTimeout(function () {
        if (_this.state.value.length < 1) return _this.resetComponent();

        var re = new RegExp(__WEBPACK_IMPORTED_MODULE_0_lodash___default.a.escapeRegExp(_this.state.value), 'i');
        var isMatch = function isMatch(result) {
          return re.test(result.title);
        };

        _this.setState({
          isLoading: false,
          results: __WEBPACK_IMPORTED_MODULE_0_lodash___default.a.filter(source, isMatch)
        });
      }, 500);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchExampleStandard, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.resetComponent();
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          isLoading = _state.isLoading,
          value = _state.value,
          results = _state.results;


      return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Grid"],
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Grid"].Column,
          { width: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 45
            }
          },
          __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Search"], _extends({
            loading: isLoading,
            onResultSelect: this.handleResultSelect,
            onSearchChange: this.handleSearchChange,
            results: results,
            value: value
          }, this.props, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Grid"].Column, { width: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 55
          }
        })
      );
    }
  }]);

  return SearchExampleStandard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchExampleStandard);

/***/ }),

/***/ "./src/components/Sidebarleftpush.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/Sidebarleftpush.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




//sidebar is imported into the ui_container.js file

var SidebarLeftSlideAlong = function (_Component) {
  _inherits(SidebarLeftSlideAlong, _Component);

  function SidebarLeftSlideAlong() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, SidebarLeftSlideAlong);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = SidebarLeftSlideAlong.__proto__ || Object.getPrototypeOf(SidebarLeftSlideAlong)).call.apply(_ref, [this].concat(args))), _this), _this.state = { visible: true }, _this.toggleVisibility = function () {
      return _this.setState({ visible: !_this.state.visible });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SidebarLeftSlideAlong, [{
    key: 'render',
    value: function render() {
      var visible = this.state.visible;

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
          { onClick: this.toggleVisibility, __source: {
              fileName: _jsxFileName,
              lineNumber: 22
            }
          },
          'Menu Toggle'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Sidebar"].Pushable,
          { as: __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"], __source: {
              fileName: _jsxFileName,
              lineNumber: 23
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Sidebar"],
            {
              as: __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"],
              animation: 'slide along',
              width: 'thin',
              visible: visible,
              icon: 'labeled',
              vertical: true,
              inverted: true,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 24
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'home', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 33
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: 'home', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 34
                }
              }),
              'Home'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'wikis', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 37
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 38
                }
              }),
              'Wikis'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'articles', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 41
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
                }
              }),
              'Articles'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'peerReview', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 45
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                }
              }),
              'Peer Review'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'fansTokens', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 49
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                }
              }),
              'FANS Tokens'
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'faqs', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 53
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Icon"], { name: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 54
                }
              }),
              'FAQs'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Sidebar"].Pusher,
            {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 58
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"],
              { basic: true, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                }
              },
              this.props.children
            )
          )
        )
      );
    }
  }]);

  return SidebarLeftSlideAlong;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SidebarLeftSlideAlong);

/***/ }),

/***/ "./src/components/UI_container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Menu__ = __webpack_require__("./src/components/Menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Sidebarleftpush__ = __webpack_require__("./src/components/Sidebarleftpush.js");
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/UI_container.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





//currently contains sidebarleftpush.js, menu.js

var UIContainer = function (_Component) {
  _inherits(UIContainer, _Component);

  function UIContainer() {
    _classCallCheck(this, UIContainer);

    return _possibleConstructorReturn(this, (UIContainer.__proto__ || Object.getPrototypeOf(UIContainer)).apply(this, arguments));
  }

  _createClass(UIContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 9
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__Menu__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__Sidebarleftpush__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            }
          },
          this.props.children
        )
      );
    }
  }]);

  return UIContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (UIContainer);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/create_article.js");


/***/ }),

/***/ "faker":
/***/ (function(module, exports) {

module.exports = require("faker");

/***/ }),

/***/ "lodash":
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next-routes":
/***/ (function(module, exports) {

module.exports = require("next-routes");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=create_article.js.map