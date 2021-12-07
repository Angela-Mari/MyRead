"use strict";

var express = require('express');

var router = express.Router();

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');

var config = require('config');

var _require = require('express-validator'),
    check = _require.check,
    validationResult = _require.validationResult;

var auth = require('../../middleware/auth');

var User = require('../../models/User'); // @route   GET api/users
// @desc    Register user
// @access  Public


router.post('/', [check('firstName', 'First Name is required').not().isEmpty(), check('lastName', 'Last Name is required').not().isEmpty(), check('alias', 'Alias is required').not().isEmpty(), check('email', 'Please include a valid email').isEmail(), check('password', 'Please enter a password with 6 or more characters').isLength({
  min: 6
})], function _callee(req, res) {
  var errors, _req$body, firstName, lastName, email, alias, password, phoneNumber, user, bio, categories, salt, payload;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          errors = validationResult(req);

          if (errors.isEmpty()) {
            _context.next = 3;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errors: errors.array()
          }));

        case 3:
          _req$body = req.body, firstName = _req$body.firstName, lastName = _req$body.lastName, email = _req$body.email, alias = _req$body.alias, password = _req$body.password, phoneNumber = _req$body.phoneNumber;
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 7:
          user = _context.sent;

          if (!user) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("return", res.status(400).json({
            errors: [{
              msg: 'User already exists'
            }]
          }));

        case 10:
          bio = "Enter a bio here";
          categories = ["Other"];
          user = new User({
            firstName: firstName,
            lastName: lastName,
            email: email,
            alias: alias,
            password: password,
            phoneNumber: phoneNumber,
            bio: bio,
            categories: categories
          }); // Encrypt password

          _context.next = 15;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 15:
          salt = _context.sent;
          _context.next = 18;
          return regeneratorRuntime.awrap(bcrypt.hash(password, salt));

        case 18:
          user.password = _context.sent;
          _context.next = 21;
          return regeneratorRuntime.awrap(user.save());

        case 21:
          // Return jsonWebToken
          payload = {
            user: {
              id: user._id
            }
          };
          //jwt.sign(payload, config.get('jwtSecret'), //FOR LOCALHOST
          process.env.JWTSECRET, //FOR HEROKU
          {
            expiresIn: 360000
          }, function (err, token) {
            if (err) throw err;
            res.json({
              token: token
            });
          });
          _context.next = 29;
          break;

        case 25:
          _context.prev = 25;
          _context.t0 = _context["catch"](4);
          console.error(_context.t0.message);
          res.status(500).send('Server Error');

        case 29:
          console.log(req.body);

        case 30:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 25]]);
}); // @route   GET api/users/category
// @desc    Add a category to a user
// @access  Private

router.put('/category', auth, function _callee2(req, res) {
  var newCategory, user;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          newCategory = req.body.category;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            _id: req.user.id
          }));

        case 4:
          user = _context2.sent;
          user.categories.unshift(newCategory);
          _context2.next = 8;
          return regeneratorRuntime.awrap(user.save());

        case 8:
          res.json(user);
          _context2.next = 15;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);
          console.error(_context2.t0.message);
          res.status(500).send('Server error');

        case 15:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 11]]);
}); // @route   GET api/users/bio
// @desc    Add or update a users bio
// @access  Private

router.put('/bio', auth, function _callee3(req, res) {
  var newBio, user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          newBio = req.body.bio;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(User.findOneAndUpdate({
            user: req.user.id
          }, {
            $set: {
              bio: newBio
            }
          }));

        case 4:
          user = _context3.sent;
          return _context3.abrupt("return", res.json(user));

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](1);
          console.error(_context3.t0.message);
          return _context3.abrupt("return", res.status(500).send('Server Error'));

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;