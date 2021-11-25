"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteComment = exports.addComment = exports.getPost = exports.addPost = exports.deletePost = exports.removeLike = exports.addLike = exports.getPosts = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _alert = require("./alert");

var _types = require("./types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isDev = process.env.NODE_ENV == null;
var devPrefix = "";

if (isDev) {
  devPrefix = "http://localhost:5000";
} else {
  devPrefix = "";
} // Get Posts


var getPosts = function getPosts() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(devPrefix + '/api/posts'));

          case 3:
            res = _context.sent;
            dispatch({
              type: _types.GET_POSTS,
              payload: res.data
            });
            return _context.abrupt("return", res);

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context.t0.response.statusText,
                status: _context.t0.response.status
              }
            });
            return _context.abrupt("return", _context.t0);

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
}; // Add like


exports.getPosts = getPosts;

var addLike = function addLike(id) {
  return function _callee2(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].put(devPrefix + "/api/posts/like/".concat(id)));

          case 3:
            res = _context2.sent;
            dispatch({
              type: _types.UPDATE_LIKES,
              payload: {
                id: id,
                likes: res.data
              }
            });
            _context2.next = 10;
            break;

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context2.t0.response.statusText,
                status: _context2.t0.response.status
              }
            });

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; // Remove like


exports.addLike = addLike;

var removeLike = function removeLike(id) {
  return function _callee3(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].put(devPrefix + "/api/posts/unlike/".concat(id)));

          case 3:
            res = _context3.sent;
            dispatch({
              type: _types.UPDATE_LIKES,
              payload: {
                id: id,
                likes: res.data
              }
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context3.t0.response.statusText,
                status: _context3.t0.response.status
              }
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; // Delete post


exports.removeLike = removeLike;

var deletePost = function deletePost(id) {
  return function _callee4(dispatch) {
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return regeneratorRuntime.awrap(_axios["default"]["delete"](devPrefix + "/api/posts/".concat(id)));

          case 3:
            dispatch({
              type: _types.DELETE_POST,
              payload: id
            });
            dispatch((0, _alert.setAlert)('Post Removed', 'success'));
            _context4.next = 10;
            break;

          case 7:
            _context4.prev = 7;
            _context4.t0 = _context4["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context4.t0.response.statusText,
                status: _context4.t0.response.status
              }
            });

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; // Add post


exports.deletePost = deletePost;

var addPost = function addPost(formData) {
  return function _callee5(dispatch) {
    var config, res;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post(devPrefix + '/api/posts', formData, config));

          case 4:
            res = _context5.sent;
            dispatch({
              type: _types.ADD_POST,
              payload: res.data
            });
            dispatch((0, _alert.setAlert)('Post Created', 'success'));
            _context5.next = 12;
            break;

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](1);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context5.t0.response.statusText,
                status: _context5.t0.response.status
              }
            });

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
}; // Get Post


exports.addPost = addPost;

var getPost = function getPost(id) {
  return function _callee6(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.prev = 0;
            _context6.next = 3;
            return regeneratorRuntime.awrap(_axios["default"].get(devPrefix + "/api/posts/".concat(id)));

          case 3:
            res = _context6.sent;
            dispatch({
              type: _types.GET_POST,
              payload: res.data
            });
            _context6.next = 10;
            break;

          case 7:
            _context6.prev = 7;
            _context6.t0 = _context6["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context6.t0.response.statusText,
                status: _context6.t0.response.status
              }
            });

          case 10:
          case "end":
            return _context6.stop();
        }
      }
    }, null, null, [[0, 7]]);
  };
}; // Add comment


exports.getPost = getPost;

var addComment = function addComment(postId, formData) {
  return function _callee7(dispatch) {
    var config, res;
    return regeneratorRuntime.async(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context7.prev = 1;
            _context7.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].post(devPrefix + "/api/posts/comment/".concat(postId), formData, config));

          case 4:
            res = _context7.sent;
            dispatch({
              type: _types.ADD_COMMENT,
              payload: res.data
            });
            dispatch((0, _alert.setAlert)('Comment Added', 'success'));
            _context7.next = 12;
            break;

          case 9:
            _context7.prev = 9;
            _context7.t0 = _context7["catch"](1);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context7.t0.response.statusText,
                status: _context7.t0.response.status
              }
            });

          case 12:
          case "end":
            return _context7.stop();
        }
      }
    }, null, null, [[1, 9]]);
  };
}; // Delete comment


exports.addComment = addComment;

var deleteComment = function deleteComment(postId, commentId) {
  return function _callee8(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.prev = 0;
            _context8.next = 3;
            return regeneratorRuntime.awrap(_axios["default"]["delete"](devPrefix + "/api/posts/comment/".concat(postId, "/").concat(commentId)));

          case 3:
            res = _context8.sent;
            dispatch({
              type: _types.REMOVE_COMMENT,
              payload: commentId
            });
            dispatch((0, _alert.setAlert)('Comment Removed', 'success'));
            _context8.next = 11;
            break;

          case 8:
            _context8.prev = 8;
            _context8.t0 = _context8["catch"](0);
            dispatch({
              type: _types.POST_ERROR,
              payload: {
                msg: _context8.t0.response.statusText,
                status: _context8.t0.response.status
              }
            });

          case 11:
          case "end":
            return _context8.stop();
        }
      }
    }, null, null, [[0, 8]]);
  };
};

exports.deleteComment = deleteComment;