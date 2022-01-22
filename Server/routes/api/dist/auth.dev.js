"use strict";

var express = require('express');

var router = express.Router();

var bcrypt = require('bcryptjs');

var auth = require('../../middleware/auth');

var jwt = require('jsonwebtoken');

var config = require('config');

var _require = require('express-validator'),
    check = _require.check,
    validationResult = _require.validationResult;

var User = require('../../models/User'); // @route    GET api/auth
// @desc     Get user by token
// @access   Private


router.get('/', auth, function _callee(req, res) {
  var gotUser, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          gotUser = false;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findById(req.user.id).select('-password'));

        case 4:
          user = _context.sent;
          gotUser = true;
          res.json(user);
          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          console.error(_context.t0.message);
          res.status(500).send('Server Error');

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
}); // @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public

router.post('/', check('email', 'Please include a valid email').isEmail(), check('password', 'Password is required').exists(), function _callee2(req, res) {
  var errors, _req$body, email, password, gotUser, user, isMatch, payload;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context2.next = 3;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          gotUser = false;
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 8:
          user = _context2.sent;

          if (user) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.status(400).json({
            errors: [{
              msg: 'Invalid Credentials'
            }]
          }));

        case 11:
          _context2.next = 13;
          return regeneratorRuntime.awrap(bcrypt.compare(password, user.password));

        case 13:
          isMatch = _context2.sent;

          if (isMatch) {
            _context2.next = 17;
            break;
          }

          gotUser = true;
          return _context2.abrupt("return", res.status(400).json({
            errors: [{
              msg: 'Invalid Credentials'
            }]
          }));

        case 17:
          payload = {
            user: {
              id: user._id
            }
          };
          jwt.sign(payload, config.get('jwtSecret'), //FOR LOCALHOST
          // process.env.JWTSECRET, //FOR HEROKU
          {
            expiresIn: '5 days'
          }, function (err, token) {
            if (err) throw err;
            res.json({
              token: token
            }).end();
            console.log(res);
          });
          _context2.next = 25;
          break;

        case 21:
          _context2.prev = 21;
          _context2.t0 = _context2["catch"](5);
          console.error(_context2.t0.message);
          res.status(500).send('Server error');

        case 25:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 21]]);
});
module.exports = router;