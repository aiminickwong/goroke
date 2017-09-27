"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _head = require("next/dist/lib/head.js");

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/rhio/Works/my/goroke/components/head.js";


var defaultDescription = "";
var defaultOGURL = "";
var defaultOGImage = "";

var Head = function Head(props) {
  return _react2.default.createElement(_head2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, _react2.default.createElement("meta", { charSet: "UTF-8", __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }), _react2.default.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, props.title || ""), _react2.default.createElement("meta", { name: "description", content: props.description || defaultDescription, __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1", __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement("link", { href: "//fonts.googleapis.com/css?family=Rubik|Unica+One", rel: "stylesheet", __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }), _react2.default.createElement("link", { rel: "icon", sizes: "192x192", href: "/static/touch-icon.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", href: "/static/touch-icon.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "57x57", href: "/static/images/apple-icon-57x57.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "60x60", href: "/static/images/apple-icon-60x60.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "72x72", href: "/static/images/apple-icon-72x72.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "76x76", href: "/static/images/apple-icon-76x76.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "114x114", href: "/static/images/apple-icon-114x114.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "120x120", href: "/static/images/apple-icon-120x120.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "144x144", href: "/static/images/apple-icon-144x144.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "152x152", href: "/static/images/apple-icon-152x152.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }), _react2.default.createElement("link", { rel: "apple-touch-icon", sizes: "180x180", href: "/static/images/apple-icon-180x180.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }), _react2.default.createElement("link", { rel: "icon", type: "image/png", sizes: "192x192", href: "/static/images/android-icon-192x192.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }), _react2.default.createElement("link", { rel: "icon", type: "image/png", sizes: "32x32", href: "/static/images/favicon-32x32.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }), _react2.default.createElement("link", { rel: "icon", type: "image/png", sizes: "96x96", href: "/static/images/favicon-96x96.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), _react2.default.createElement("link", { rel: "icon", type: "image/png", sizes: "16x16", href: "/static/images/favicon-16x16.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }), _react2.default.createElement("link", { rel: "icon", href: "/static/images/favicon.ico", __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }), _react2.default.createElement("meta", { name: "msapplication-TileColor", content: "#ffffff", __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }), _react2.default.createElement("meta", { name: "msapplication-TileImage", content: "/ms-icon-144x144.png", __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }), _react2.default.createElement("meta", { name: "theme-color", content: "#ffffff", __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }), _react2.default.createElement("meta", { property: "og:url", content: props.url || defaultOGURL, __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }), _react2.default.createElement("meta", { property: "og:title", content: props.title || "", __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), _react2.default.createElement("meta", { property: "og:description", content: props.description || defaultDescription, __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }), _react2.default.createElement("meta", { name: "twitter:site", content: props.url || defaultOGURL, __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }), _react2.default.createElement("meta", { name: "twitter:card", content: "summary_large_image", __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }), _react2.default.createElement("meta", { name: "twitter:image", content: props.ogImage || defaultOGImage, __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }), _react2.default.createElement("meta", { property: "og:image", content: props.ogImage || defaultOGImage, __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    }
  }), _react2.default.createElement("meta", { property: "og:image:width", content: "1200", __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    }
  }), _react2.default.createElement("meta", { property: "og:image:height", content: "630", __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    }
  }), _react2.default.createElement("link", { rel: "stylesheet", href: "/static/css/main.css", __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    }
  }));
};

exports.default = Head;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaGVhZC5qcyJdLCJuYW1lcyI6WyJOZXh0SGVhZCIsImRlZmF1bHREZXNjcmlwdGlvbiIsImRlZmF1bHRPR1VSTCIsImRlZmF1bHRPR0ltYWdlIiwiSGVhZCIsInByb3BzIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInVybCIsIm9nSW1hZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLHFCQUFOLEFBQW1DO0FBQ25DLElBQU0sZUFBTixBQUE2QjtBQUM3QixJQUFNLGlCQUFOLEFBQStCOztBQVMvQixJQUFNLE9BQU8sU0FBUCxBQUFPLEtBQUEsQUFBQyxPQUFEO3lCQUNYLEFBQUM7O2dCQUFEO2tCQUFBLEFBQ0U7QUFERjtBQUFBLEdBQUEsMENBQ1EsU0FBTixBQUFjO2dCQUFkO2tCQURGLEFBQ0UsQUFDQTtBQURBO3NCQUNBLGNBQUE7O2dCQUFBO2tCQUFBLEFBQVE7QUFBUjtBQUFBLFdBQVEsQUFBTSxTQUZoQixBQUVFLEFBQXVCLEFBQ3ZCLDZDQUFNLE1BQU4sQUFBVyxlQUFjLFNBQVMsTUFBQSxBQUFNLGVBQXhDLEFBQXVEO2dCQUF2RDtrQkFIRixBQUdFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4QjtnQkFBOUI7a0JBSkYsQUFJRSxBQUVBO0FBRkE7OENBRU0sTUFBTixBQUFXLHFEQUFvRCxLQUEvRCxBQUFtRTtnQkFBbkU7a0JBTkYsQUFNRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLFFBQU8sT0FBakIsQUFBdUIsV0FBVSxNQUFqQyxBQUFzQztnQkFBdEM7a0JBUEYsQUFPRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLG9CQUFtQixNQUE3QixBQUFrQztnQkFBbEM7a0JBUkYsQUFRRSxBQUVBO0FBRkE7OENBRU0sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxTQUFRLE1BQTNDLEFBQWdEO2dCQUFoRDtrQkFWRixBQVVFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFNBQVEsTUFBM0MsQUFBZ0Q7Z0JBQWhEO2tCQVhGLEFBV0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsU0FBUSxNQUEzQyxBQUFnRDtnQkFBaEQ7a0JBWkYsQUFZRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxTQUFRLE1BQTNDLEFBQWdEO2dCQUFoRDtrQkFiRixBQWFFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFdBQVUsTUFBN0MsQUFBa0Q7Z0JBQWxEO2tCQWRGLEFBY0UsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsV0FBVSxNQUE3QyxBQUFrRDtnQkFBbEQ7a0JBZkYsQUFlRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLG9CQUFtQixPQUE3QixBQUFtQyxXQUFVLE1BQTdDLEFBQWtEO2dCQUFsRDtrQkFoQkYsQUFnQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxvQkFBbUIsT0FBN0IsQUFBbUMsV0FBVSxNQUE3QyxBQUFrRDtnQkFBbEQ7a0JBakJGLEFBaUJFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsb0JBQW1CLE9BQTdCLEFBQW1DLFdBQVUsTUFBN0MsQUFBa0Q7Z0JBQWxEO2tCQWxCRixBQWtCRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsYUFBWSxPQUFsQyxBQUF3QyxXQUFVLE1BQWxELEFBQXVEO2dCQUF2RDtrQkFuQkYsQUFtQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCLGFBQVksT0FBbEMsQUFBd0MsU0FBUSxNQUFoRCxBQUFxRDtnQkFBckQ7a0JBcEJGLEFBb0JFLEFBQ0E7QUFEQTs4Q0FDTSxLQUFOLEFBQVUsUUFBTyxNQUFqQixBQUFzQixhQUFZLE9BQWxDLEFBQXdDLFNBQVEsTUFBaEQsQUFBcUQ7Z0JBQXJEO2tCQXJCRixBQXFCRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLFFBQU8sTUFBakIsQUFBc0IsYUFBWSxPQUFsQyxBQUF3QyxTQUFRLE1BQWhELEFBQXFEO2dCQUFyRDtrQkF0QkYsQUFzQkUsQUFDQTtBQURBOzhDQUNNLEtBQU4sQUFBVSxRQUFPLE1BQWpCLEFBQXNCO2dCQUF0QjtrQkF2QkYsQUF1QkUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVywyQkFBMEIsU0FBckMsQUFBNkM7Z0JBQTdDO2tCQXhCRixBQXdCRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLDJCQUEwQixTQUFyQyxBQUE2QztnQkFBN0M7a0JBekJGLEFBeUJFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsZUFBYyxTQUF6QixBQUFpQztnQkFBakM7a0JBMUJGLEFBMEJFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsVUFBUyxTQUFTLE1BQUEsQUFBTSxPQUF2QyxBQUE4QztnQkFBOUM7a0JBM0JGLEFBMkJFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsWUFBVyxTQUFTLE1BQUEsQUFBTSxTQUF6QyxBQUFrRDtnQkFBbEQ7a0JBNUJGLEFBNEJFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsa0JBQWlCLFNBQVMsTUFBQSxBQUFNLGVBQS9DLEFBQThEO2dCQUE5RDtrQkE3QkYsQUE2QkUsQUFDQTtBQURBOzhDQUNNLE1BQU4sQUFBVyxnQkFBZSxTQUFTLE1BQUEsQUFBTSxPQUF6QyxBQUFnRDtnQkFBaEQ7a0JBOUJGLEFBOEJFLEFBQ0E7QUFEQTs4Q0FDTSxNQUFOLEFBQVcsZ0JBQWUsU0FBMUIsQUFBa0M7Z0JBQWxDO2tCQS9CRixBQStCRSxBQUNBO0FBREE7OENBQ00sTUFBTixBQUFXLGlCQUFnQixTQUFTLE1BQUEsQUFBTSxXQUExQyxBQUFxRDtnQkFBckQ7a0JBaENGLEFBZ0NFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsWUFBVyxTQUFTLE1BQUEsQUFBTSxXQUF6QyxBQUFvRDtnQkFBcEQ7a0JBakNGLEFBaUNFLEFBQ0E7QUFEQTs4Q0FDTSxVQUFOLEFBQWUsa0JBQWlCLFNBQWhDLEFBQXdDO2dCQUF4QztrQkFsQ0YsQUFrQ0UsQUFDQTtBQURBOzhDQUNNLFVBQU4sQUFBZSxtQkFBa0IsU0FBakMsQUFBeUM7Z0JBQXpDO2tCQW5DRixBQW1DRSxBQUNBO0FBREE7OENBQ00sS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7Z0JBQTVCO2tCQXJDUyxBQUNYLEFBb0NFO0FBQUE7O0FBckNKLEFBeUNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImhlYWQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL3JoaW8vV29ya3MvbXkvZ29yb2tlIn0=