"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("next/node_modules/babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("next/node_modules/babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("next/node_modules/babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("next/node_modules/babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("next/node_modules/babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _List = require("material-ui/List");

var _List2 = _interopRequireDefault(_List);

var _Divider = require("material-ui/Divider");

var _Divider2 = _interopRequireDefault(_Divider);

var _Drawer = require("material-ui/Drawer");

var _Drawer2 = _interopRequireDefault(_Drawer);

var _head = require("./head");

var _head2 = _interopRequireDefault(_head);

var _nav = require("./nav");

var _nav2 = _interopRequireDefault(_nav);

var _navData = require("./navData");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/rhio/Works/my/goroke/components/layout.js";


var sideList = _react2.default.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  }
}, _react2.default.createElement(_List2.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  }
}, _navData.mailFolderListItems), _react2.default.createElement(_Divider2.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  }
}), _react2.default.createElement(_List2.default, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  }
}, _navData.otherMailFolderListItems));

var Layout = function (_React$Component) {
  (0, _inherits3.default)(Layout, _React$Component);

  function Layout() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Layout);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      drawer: true
    }, _this.toggleDrawer = function (open) {
      return function () {
        _this.setState({
          drawer: open
        });
      };
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Layout, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          children = _props.children,
          className = _props.className,
          title = _props.title;

      return _react2.default.createElement("div", { className: className, __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement(_head2.default, { title: title, __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }), _react2.default.createElement(_nav2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_Drawer2.default, { open: this.state.drawer, onRequestClose: this.toggleDrawer(false), __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, _react2.default.createElement("div", { tabIndex: 0, role: "button", onClick: this.toggleDrawer(false), __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, sideList)), children);
    }
  }]);

  return Layout;
}(_react2.default.Component);

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbGF5b3V0LmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIkxpc3QiLCJEaXZpZGVyIiwiRHJhd2VyIiwiSGVhZCIsIk5hdiIsIm1haWxGb2xkZXJMaXN0SXRlbXMiLCJvdGhlck1haWxGb2xkZXJMaXN0SXRlbXMiLCJzaWRlTGlzdCIsIkxheW91dCIsInN0YXRlIiwiZHJhd2VyIiwidG9nZ2xlRHJhd2VyIiwib3BlbiIsInNldFN0YXRlIiwicHJvcHMiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInRpdGxlIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLEFBQU87Ozs7QUFFUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQXFCOzs7Ozs7O0FBUTlCLElBQU0sMkJBQ0osY0FBQTs7Y0FBQTtnQkFBQSxBQUNFO0FBREY7QUFBQSxDQUFBLGtCQUNFLEFBQUM7O2NBQUQ7Z0JBREYsQUFDRSxBQUFPLEFBQ1A7QUFEQTtBQUFBLGtEQUNBLEFBQUM7O2NBQUQ7Z0JBRkYsQUFFRSxBQUNBO0FBREE7QUFBQSxvQkFDQSxBQUFDOztjQUFEO2dCQUpKLEFBQ0UsQUFHRSxBQUFPO0FBQVA7QUFBQTs7SUFJRSxBOzs7Ozs7Ozs7Ozs7Ozs0TSxBQUNKO2NBQVEsQUFDRSxBO0FBREYsQUFDTixhLEFBR0YsZUFBZSxVQUFBLEFBQUMsTUFBRDthQUFtQixZQUFNLEFBQ3RDO2NBQUEsQUFBSztrQkFBTCxBQUFjLEFBQ0osQUFFWDtBQUhlLEFBQ1o7QUFGVztBOzs7Ozs2QkFNTjttQkFDZ0MsS0FEaEMsQUFDcUM7VUFEckMsQUFDQyxrQkFERCxBQUNDO1VBREQsQUFDVyxtQkFEWCxBQUNXO1VBRFgsQUFDc0IsZUFEdEIsQUFDc0IsQUFDN0I7OzZCQUNFLGNBQUEsU0FBSyxXQUFMLEFBQWdCO29CQUFoQjtzQkFBQSxBQUNFO0FBREY7T0FBQSxrQkFDRSxBQUFDLGdDQUFLLE9BQU4sQUFBYTtvQkFBYjtzQkFERixBQUNFLEFBRUE7QUFGQTswQkFFQSxBQUFDOztvQkFBRDtzQkFIRixBQUdFLEFBQ0E7QUFEQTtBQUFBLDBCQUNBLEFBQUMsa0NBQU8sTUFBTSxLQUFBLEFBQUssTUFBbkIsQUFBeUIsUUFBUSxnQkFBZ0IsS0FBQSxBQUFLLGFBQXRELEFBQWlELEFBQWtCO29CQUFuRTtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsY0FBQSxTQUFLLFVBQUwsQUFBZSxHQUFHLE1BQWxCLEFBQXVCLFVBQVMsU0FBUyxLQUFBLEFBQUssYUFBOUMsQUFBeUMsQUFBa0I7b0JBQTNEO3NCQUFBLEFBQ0c7QUFESDtTQUxKLEFBSUUsQUFDRSxBQUtELFlBWEwsQUFDRSxBQWFIOzs7OztFQTNCa0IsZ0JBQU0sQSxBQThCM0I7O2tCQUFBLEFBQWUiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9yaGlvL1dvcmtzL215L2dvcm9rZSJ9