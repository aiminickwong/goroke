"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require("next/node_modules/babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _styles = require("material-ui/styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/rhio/Works/my/goroke/hoc/withRoot.js";


var theme = (0, _styles.createMuiTheme)({});

function withRoot(BaseComponent) {
  var WithRoot = function (_React$Component) {
    (0, _inherits3.default)(WithRoot, _React$Component);

    function WithRoot() {
      (0, _classCallCheck3.default)(this, WithRoot);

      return (0, _possibleConstructorReturn3.default)(this, (WithRoot.__proto__ || (0, _getPrototypeOf2.default)(WithRoot)).apply(this, arguments));
    }

    (0, _createClass3.default)(WithRoot, [{
      key: "render",
      value: function render() {
        return _react2.default.createElement(_styles.MuiThemeProvider, { theme: theme, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
          }
        }, _react2.default.createElement(BaseComponent, (0, _extends3.default)({}, this.props, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 21
          }
        })));
      }
    }], [{
      key: "getInitialProps",
      value: function getInitialProps(ctx) {
        if (BaseComponent.getInitialProps) {
          return BaseComponent.getInitialProps(ctx);
        }

        return {};
      }
    }]);

    return WithRoot;
  }(_react2.default.Component);

  return WithRoot;
}

exports.default = withRoot;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvYy93aXRoUm9vdC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIk11aVRoZW1lUHJvdmlkZXIiLCJjcmVhdGVNdWlUaGVtZSIsInRoZW1lIiwid2l0aFJvb3QiLCJCYXNlQ29tcG9uZW50IiwiV2l0aFJvb3QiLCJwcm9wcyIsImN0eCIsImdldEluaXRpYWxQcm9wcyIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQVMsQUFBa0I7Ozs7Ozs7QUFJM0IsSUFBTSxRQUFRLDRCQUFkLEFBQWMsQUFBZTs7QUFFN0IsU0FBQSxBQUFTLFNBQVQsQUFBa0IsZUFBZTtNQUFBLEFBQ3pCLHVDQUR5QjtzQ0FBQTs7d0JBQUE7MENBQUE7O3dJQUFBO0FBQUE7OztXQUFBOytCQVVwQixBQUNQOytCQUNFLEFBQUMsMENBQWlCLE9BQWxCLEFBQXlCO3NCQUF6Qjt3QkFBQSxBQUNFO0FBREY7U0FBQSxnQ0FDRSxBQUFDLDBDQUFrQixLQUFuQixBQUF3Qjs7c0JBQXhCO3dCQUZKLEFBQ0UsQUFDRSxBQUdMO0FBSEs7QUFBQTtBQWJ1QjtBQUFBO1dBQUE7c0NBQUEsQUFFTixLQUFLLEFBQzFCO1lBQUksY0FBSixBQUFrQixpQkFBaUIsQUFDakM7aUJBQU8sY0FBQSxBQUFjLGdCQUFyQixBQUFPLEFBQThCLEFBQ3RDO0FBRUQ7O2VBQUEsQUFBTyxBQUNSO0FBUjRCO0FBQUE7O1dBQUE7SUFDUixnQkFEUSxBQUNGLEFBa0I3Qjs7U0FBQSxBQUFPLEFBQ1I7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3aXRoUm9vdC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmhpby9Xb3Jrcy9teS9nb3Jva2UifQ==