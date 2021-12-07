"use strict";

var mongoose = require('mongoose');

var config = require('config');

var db = config.get('mongoURI'); //FOR LOCALHOST
// const db = process.env.MONGOURI; //FOR HEROKU
// We are using async await...

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log('MongoDB Connected...');
          _context.next = 10;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0.message); // Exit process with failure

          process.exit(1);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module.exports = connectDB;