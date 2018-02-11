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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_components_inputbox__ = __webpack_require__("./src/components/inputbox.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_components_text_container__ = __webpack_require__("./src/components/text_container.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_components_ui_container__ = __webpack_require__("./src/components/ui_container.js");
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/pages/index.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }








//Thinking in React Guide:
//https://reactjs.org/docs/thinking-in-react.html

var App = function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    _classCallCheck(this, App);

    //If you don’t use something in render(),
    //it shouldn’t be in the state.
    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      value: '',
      searchTerm: ''
    };

    //use bind for event handling and
    //any METHODs passed without () after it, such as onChange={this.handleChange}
    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  //use setState to re-render the component


  _createClass(App, [{
    key: 'handleChange',
    value: function handleChange(newText) {
      this.setState({
        value: newText
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      this.setState({
        submittedText: this.state.value
      });
      event.preventDefault(); //prevents default behavior i.e. page re-loading
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(newTerm) {
      this.setState({
        searchTerm: newTerm
      });
    }

    //CSS is a stylesheet link placed in menu.js

  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          }
        },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_5__src_components_ui_container__["a" /* default */],
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 50
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"],
            { columns: 2, divided: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Row,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 52
                }
              },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 53
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__src_components_inputbox__["a" /* default */], {
                  value: this.state.value,
                  submittedText: this.state.submittedText,
                  onChange: this.handleChange,
                  onSubmit: this.handleSubmit,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 54
                  }
                })
              ),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Grid"].Column,
                {
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 61
                  }
                },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__src_components_text_container__["a" /* default */], {
                  submittedText: this.state.submittedText,
                  __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                  }
                })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./routes.js":
/***/ (function(module, exports, __webpack_require__) {

var routes = __webpack_require__("next-routes")(); //imports and runs the function

//this is from udemy ethereum course
routes.add('/articles/:articleName', '/articles/article_template');

module.exports = routes;

/***/ }),

/***/ "./src/components/inputbox.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/inputbox.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var InputBox = function (_React$Component) {
  _inherits(InputBox, _React$Component);

  function InputBox(props) {
    _classCallCheck(this, InputBox);

    var _this = _possibleConstructorReturn(this, (InputBox.__proto__ || Object.getPrototypeOf(InputBox)).call(this, props));

    _this.extractValue = _this.extractValue.bind(_this);
    return _this;
  }

  _createClass(InputBox, [{
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
            'Enter Information:',
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('br', {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              }
            }),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["TextArea"], {
              type: 'text',
              rows: 20,
              cols: '70',
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
              lineNumber: 30
            }
          }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"],
            { primary: true, type: 'submit', value: 'Submit', __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              }
            },
            'Submit'
          )
        )
      );
    }
  }]);

  return InputBox;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InputBox);

/***/ }),

/***/ "./src/components/menu.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes__ = __webpack_require__("./routes.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__routes___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__routes__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_bar__ = __webpack_require__("./src/components/search_bar.js");
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/menu.js';

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
            { name: 'signup', active: activeItem === 'signup', onClick: this.handleItemClick, __source: {
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
              lineNumber: 26
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
            { name: 'login', active: activeItem === 'login', onClick: this.handleItemClick, __source: {
                fileName: _jsxFileName,
                lineNumber: 27
              }
            },
            'Login'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__search_bar__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Menu,
          { position: 'right', __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
            { href: '/create_article', __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: 'createArticle', active: activeItem === 'createArticle', onClick: this.handleItemClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 36
                }
              },
              'Create Article'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2__routes__["Link"],
            { href: '/', __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              }
            },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Menu"].Item,
              { name: '/mainPage', active: activeItem === 'mainPage', onClick: this.handleItemClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 42
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

/***/ "./src/components/search_bar.js":
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

var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/search_bar.js';

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
            lineNumber: 42
          }
        },
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Grid"].Column,
          { width: 8, __source: {
              fileName: _jsxFileName,
              lineNumber: 43
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
              lineNumber: 44
            }
          }))
        ),
        __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_semantic_ui_react__["Grid"].Column, { width: 8, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        })
      );
    }
  }]);

  return SearchExampleStandard;
}(__WEBPACK_IMPORTED_MODULE_2_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (SearchExampleStandard);

/***/ }),

/***/ "./src/components/sidebarleftpush.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/sidebarleftpush.js';

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

/***/ "./src/components/text_container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/text_container.js';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var ContainerExampleContainer = function (_Component) {
  _inherits(ContainerExampleContainer, _Component);

  function ContainerExampleContainer() {
    _classCallCheck(this, ContainerExampleContainer);

    return _possibleConstructorReturn(this, (ContainerExampleContainer.__proto__ || Object.getPrototypeOf(ContainerExampleContainer)).apply(this, arguments));
  }

  _createClass(ContainerExampleContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Container"],
        { text: true, style: { width: '600px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
          }
        },
        this.props.submittedText
      );
    }
  }]);

  return ContainerExampleContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ContainerExampleContainer);

/***/ }),

/***/ "./src/components/ui_container.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu__ = __webpack_require__("./src/components/menu.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebarleftpush__ = __webpack_require__("./src/components/sidebarleftpush.js");
var _jsxFileName = '/Users/chenyu/Documents/practice_apps/first_react_app/src/components/ui_container.js';

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
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__menu__["a" /* default */], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 10
          }
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2__sidebarleftpush__["a" /* default */],
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

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


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
//# sourceMappingURL=index.js.map