"use strict";

var jwt = require('jsonwebtoken');

var config = require('config');

module.exports = function (req, res, next) {
  // Get token from header
  var token = req.header('x-auth-token'); // Check if not token

  if (!token) {
    return res.status(401).json({
      msg: 'No token, authorization denied'
    });
  } // Verify token


  try {
    var decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid'
    });
  }
};