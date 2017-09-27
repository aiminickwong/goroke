"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("next/dist/lib/link.js");

var _link2 = _interopRequireDefault(_link);

var _styles = require("material-ui/styles");

var _AppBar = require("material-ui/AppBar");

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = require("material-ui/Toolbar");

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = require("material-ui/Typography");

var _Typography2 = _interopRequireDefault(_Typography);

var _Button = require("material-ui/Button");

var _Button2 = _interopRequireDefault(_Button);

var _IconButton = require("material-ui/IconButton");

var _IconButton2 = _interopRequireDefault(_IconButton);

var _Menu = require("material-ui-icons/Menu");

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/rhio/Works/my/goroke/components/nav.js";


var styles = function styles(theme) {
  return {
    root: {
      marginTop: theme.spacing.unit * 0,
      width: "100%"
    },
    flex: {
      flex: 1
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20
    }
  };
};

function ButtonAppBar(props) {
  var classes = props.classes;
  return _react2.default.createElement("div", { className: classes.root, __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_AppBar2.default, { position: "static", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_Toolbar2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement(_IconButton2.default, { className: classes.menuButton, color: "contrast", "aria-label": "Menu", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_Menu2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  })), _react2.default.createElement(_Typography2.default, { type: "title", color: "inherit", className: classes.flex, __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, props.title), _react2.default.createElement(_Button2.default, { color: "contrast", __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, "Login"))));
}

exports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbmF2LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJ3aXRoU3R5bGVzIiwiQXBwQmFyIiwiVG9vbGJhciIsIlR5cG9ncmFwaHkiLCJCdXR0b24iLCJJY29uQnV0dG9uIiwiTWVudUljb24iLCJzdHlsZXMiLCJyb290IiwibWFyZ2luVG9wIiwidGhlbWUiLCJzcGFjaW5nIiwidW5pdCIsIndpZHRoIiwiZmxleCIsIm1lbnVCdXR0b24iLCJtYXJnaW5MZWZ0IiwibWFyZ2luUmlnaHQiLCJCdXR0b25BcHBCYXIiLCJwcm9wcyIsImNsYXNzZXMiLCJ0aXRsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFPOzs7O0FBQ1AsQUFBTzs7Ozs7Ozs7O0FBSVAsSUFBTSxTQUFTLFNBQVQsQUFBUyxjQUFBOzs7aUJBRUEsTUFBQSxBQUFNLFFBQU4sQUFBYyxPQURyQixBQUM0QixBQUNoQzthQUhxQixBQUNqQixBQUVHLEFBRVQ7QUFKTSxBQUNKOztZQUZxQixBQUtqQixBQUNFLEFBRVI7QUFITSxBQUNKOztrQkFHWSxDQURGLEFBQ0csQUFDYjttQkFWVyxBQUFVLEFBUVgsQUFFRztBQUZILEFBQ1Y7QUFUcUIsQUFDdkI7QUFERjs7QUFjQSxTQUFBLEFBQVMsYUFBVCxBQUFzQixPQUFjLEFBQ2xDO01BQU0sVUFBVSxNQUFoQixBQUFzQixBQUN0Qjt5QkFDRSxjQUFBLFNBQUssV0FBVyxRQUFoQixBQUF3QjtnQkFBeEI7a0JBQUEsQUFDRTtBQURGO0dBQUEsa0JBQ0UsQUFBQyxrQ0FBTyxVQUFSLEFBQWlCO2dCQUFqQjtrQkFBQSxBQUNFO0FBREY7cUJBQ0UsQUFBQzs7Z0JBQUQ7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsQUFBQyxzQ0FBVyxXQUFXLFFBQXZCLEFBQStCLFlBQVksT0FBM0MsQUFBaUQsWUFBVyxjQUE1RCxBQUF1RTtnQkFBdkU7a0JBQUEsQUFDRTtBQURGO3FCQUNFLEFBQUM7O2dCQUFEO2tCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7QUFBQSx1QkFFRixBQUFDLHNDQUFXLE1BQVosQUFBaUIsU0FBUSxPQUF6QixBQUErQixXQUFVLFdBQVcsUUFBcEQsQUFBNEQ7Z0JBQTVEO2tCQUFBLEFBQ0c7QUFESDtXQUpGLEFBSUUsQUFDUyxBQUVULHdCQUFBLEFBQUMsa0NBQU8sT0FBUixBQUFjO2dCQUFkO2tCQUFBO0FBQUE7S0FWUixBQUNFLEFBQ0UsQUFDRSxBQU9FLEFBS1Q7QUFFRDs7a0JBQWUsd0JBQUEsQUFBVyxRQUExQixBQUFlLEFBQW1CIiwiZmlsZSI6Im5hdi5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvcmhpby9Xb3Jrcy9teS9nb3Jva2UifQ==