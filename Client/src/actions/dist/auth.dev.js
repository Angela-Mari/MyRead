"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.updateBio = exports.addCategory = exports.login = exports.register = exports.loadUser = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _alert = require("./alert");

var _fetch = require("fetch");

var _types = require("./types");

var _setAuthToken = _interopRequireDefault(require("../utils/setAuthToken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getDevPrefix() {
  var devPrefix = "http://localhost:5000";

  if (process === undefined) {
    console.log(">>> Process doesnt exist, dev mode activated");
    return devPrefix;
  } else if (process.env.NODE_ENV == null) {
    console.log(">>> NODE_ENV is null, dev mode activated");
    return devPrefix;
  } else if (process.env.NODE_ENV === undefined) {
    console.log(">>> NODE_ENV undefined, dev mode activated");
    return devPrefix;
  } else if (process.env.NODE_ENV === "development") {
    console.log(">>> NODE_ENV is set to development, dev mode activated");
    return devPrefix;
  } else {
    console.log(">>> No dev mode detected");
    return "";
  }
} // Load User


var loadUser = function loadUser() {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (localStorage.token) {
              (0, _setAuthToken["default"])(localStorage.token);
            }

            _context.prev = 1;
            _context.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].get(getDevPrefix() + '/api/auth'));

          case 4:
            res = _context.sent;
            dispatch({
              type: _types.USER_LOADED,
              payload: res.data
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            dispatch({
              type: _types.AUTH_ERROR
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
}; // Register User


exports.loadUser = loadUser;

var register = function register(firstName, lastName, email, alias, password, phoneNumber, idNum) {
  return function _callee2(dispatch) {
    var config, body, res, errors;
    return regeneratorRuntime.async(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            body = JSON.stringify({
              firstName: firstName,
              lastName: lastName,
              alias: alias,
              email: email,
              password: password,
              phoneNumber: phoneNumber,
              idNum: idNum
            }); // if (idNum) {
            //   body = JSON.stringify({ firstName, lastName, alias, email, password, phoneNumber, idNum });
            // } else {
            //   body = JSON.stringify({ firstName, lastName, alias, email, password, phoneNumber });
            // }

            _context2.prev = 2;
            _context2.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].post(getDevPrefix() + '/api/users', body, config));

          case 5:
            res = _context2.sent;
            dispatch({
              type: _types.REGISTER_SUCCESS,
              payload: res.data
            });
            dispatch(loadUser());
            _context2.next = 15;
            break;

          case 10:
            _context2.prev = 10;
            _context2.t0 = _context2["catch"](2);
            errors = _context2.t0.response.data.errors;

            if (errors) {
              errors.forEach(function (error) {
                return dispatch((0, _alert.setAlert)(error.msg, 'danger'));
              });
            }

            dispatch({
              type: _types.REGISTER_FAIL
            });

          case 15:
          case "end":
            return _context2.stop();
        }
      }
    }, null, null, [[2, 10]]);
  };
}; // Login User


exports.register = register;

var login = function login(email, password) {
  return function _callee3(dispatch) {
    var body, config, res, errors;
    return regeneratorRuntime.async(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            // export async function login(email, password) {
            body = JSON.stringify({
              email: email,
              password: password
            }); // body = { email: email, password: password };

            config = {
              headers: {
                'Content-Type': 'application/json'
              }
            };
            _context3.prev = 2;
            _context3.next = 5;
            return regeneratorRuntime.awrap(_axios["default"].post(getDevPrefix() + '/api/auth', body, config));

          case 5:
            res = _context3.sent;
            // const res = await axios.post('/api/auth', body);
            console.log(res);
            dispatch({
              type: _types.LOGIN_SUCCESS,
              payload: res.data
            });
            dispatch(loadUser());
            _context3.next = 16;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](2);
            errors = _context3.t0.response.data.errors;

            if (errors) {
              errors.forEach(function (error) {
                return dispatch((0, _alert.setAlert)(error.msg, 'danger'));
              });
            }

            dispatch({
              type: _types.LOGIN_FAIL
            });

          case 16:
          case "end":
            return _context3.stop();
        }
      }
    }, null, null, [[2, 11]]);
  };
}; // Add a User Category


exports.login = login;

var addCategory = function addCategory(category) {
  return function _callee4(dispatch) {
    var body, res;
    return regeneratorRuntime.async(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            // export async function login(email, password) {
            body = JSON.stringify({
              category: category
            }); // body = { email: email, password: password };

            _context4.prev = 1;
            _context4.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put(getDevPrefix() + '/api/users/category', body));

          case 4:
            res = _context4.sent;
            // const res = await axios.post('/api/auth', body);
            console.log(res);
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](1);
            console.log(_context4.t0.message);

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
}; // Update a User's Bio


exports.addCategory = addCategory;

var updateBio = function updateBio(bio) {
  return function _callee5(dispatch) {
    var body, res;
    return regeneratorRuntime.async(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            body = JSON.stringify({
              bio: bio
            });
            _context5.prev = 1;
            _context5.next = 4;
            return regeneratorRuntime.awrap(_axios["default"].put(getDevPrefix() + '/api/users/bio', body));

          case 4:
            res = _context5.sent;
            // const res = await axios.post('/api/auth', body);
            console.log(res);
            _context5.next = 11;
            break;

          case 8:
            _context5.prev = 8;
            _context5.t0 = _context5["catch"](1);
            console.log(_context5.t0.message);

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, null, null, [[1, 8]]);
  };
};

exports.updateBio = updateBio;

var logout = function logout() {
  return function _callee6(dispatch) {
    return regeneratorRuntime.async(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            dispatch({
              type: _types.LOGOUT
            });

          case 1:
          case "end":
            return _context6.stop();
        }
      }
    });
  };
};

exports.logout = logout;