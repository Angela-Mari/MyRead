const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
const auth = require('../../middleware/auth');

const User = require('../../models/User');

// @route   GET api/users
// @desc    Register user
// @access  Public
router.post(
  '/',
  [
    check('firstName', 'First Name is required').not().isEmpty(),
    check('lastName', 'Last Name is required').not().isEmpty(),
    check('alias', 'Alias is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { firstName, lastName, email, alias, password, phoneNumber } = req.body;

    try {
      // See if the user exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      var bio = "Enter a bio here";
      var categories = ["Other"];

      user = new User({
        firstName,
        lastName,
        email,
        alias,
        password,
        phoneNumber,
        bio,
        categories,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      // Place await in front of anything that returns a promise
      await user.save();

      // Return jsonWebToken
      const payload = {
        user: {
          id: user._id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'), //FOR LOCALHOST
        //process.env.JWTSECRET, //FOR HEROKU
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }

    console.log(req.body);
  }
);

// @route   GET api/users/category
// @desc    Add a category to a user
// @access  Private
router.put('/category', auth, async (req, res) => {
    const newCategory = req.body.category;
    try {
      const user = await User.findOne({ _id: req.user.id });
      user.categories.unshift(newCategory);
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users/bio
// @desc    Add or update a users bio
// @access  Private
router.put('/bio', auth, async (req, res) => {
  const newBio = req.body.bio;
  try {
    // Using upsert option
    let user = await User.findOneAndUpdate(
      { _id: req.user.id },
      { $set: { bio : newBio }},
    );
    return res.json(user);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
}
);

module.exports = router;
