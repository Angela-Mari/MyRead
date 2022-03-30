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
    const { firstName, lastName, email, alias, password, phoneNumber, socials } = req.body;

    try {
      // See if the user exists
      let user1 = await User.findOne({ email });
      let user2 = await User.findOne({ alias });

      if (user1 || user2) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }

      var bio = "Enter a bio here";
      var categories = ["Other"];
      var instagram = "https://www.instagram.com";
      var facebook = "https://www.facebook.com";
      var other = "https://www.google.com";
      if (socials) {
        if (socials.instagram) {
          instagram = socials.instagram;
        }
        if (socials.facebook) {
          facebook = socials.facebook;
        }
        if (!socials.other) {
          other = socials.other;
        }
      }

      user = new User({
        firstName,
        lastName,
        email,
        alias,
        password,
        phoneNumber,
        bio,
        socials: {instagram, facebook, other},
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
        // process.env.JWTSECRET, //FOR HEROKU
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

// @route   GET api/users/:user_id
// @desc    Get a single user from a given id
// @access  Private
router.get('/singleuser/:user_id', async (req, res) => {
  const userId = req.params.user_id;
  try {
    const user = await User.findOne({ _id: userId });

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

// @route   GET api/users/update
// @desc    Add a category to a user
// @access  Private
router.put('/update', auth, async (req, res) => {
    const newBio = req.body.bio;

    const instagram = req.body.instagram;
    const facebook = req.body.facebook;
    const other = req.body.other;
    
    try {
      let user = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: { bio : newBio, socials: { instagram, facebook, other } }},
      );
      return res.json(user);

    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users/category
// @desc    Add a category to a user
// @access  Private
router.put('/category', auth, async (req, res) => {
    const newCategorys = req.body.category;
    try {
      const user = await User.findOne({ _id: req.user.id });
      for(const category in newCategorys) {
        user.categories.unshift(newCategorys[category]);
      }
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   PUT api/users/following
// @desc    Add a user to a users following list
// @access  Private
router.put('/following', auth, async (req, res) => {
    const userToFollowId = req.body.followId;
    try {
      const user = await User.findOne({ _id: req.user.id });
      user.following.unshift(userToFollowId);
      
      await user.save();
      res.json(user);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   GET api/users/getfollowing
// @desc    Get a list of all users that a user is following
// @access  Private
router.get('/following', auth, async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user.id });
      const allFollowing = user.following;

      const usersFollowing = [];

      for(const userFollowing in allFollowing) {
        const currUserId = user.following[userFollowing]._id;
        const currUser = await User.findOne({ _id: currUserId }).select('-password');
        
        usersFollowing.unshift(currUser);
      }
      
      res.json(usersFollowing);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

// @route   DELETE api/users/following
// @desc    Delete a user from a users following list
// @access  Private
router.delete('/following/:follow_id', auth, async (req, res) => {
  const userToFollowId = req.params.follow_id;
  try {
    const user = await User.findOne({ _id: req.user.id });
    
    // Get remove index
    const removeIndex = user.following.find(
      (following) => following.id === req.params.follow_id
    ).__index;

    user.following.splice(removeIndex, 1);
    
    await user.save();
    res.json(user.following);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
}
);

// // @route   GET api/users/bio
// // @desc    Add or update a users bio
// // @access  Private
// router.put('/bio', auth, async (req, res) => {
//   const newBio = req.body.bio;
//   try {
//     // Using upsert option
//     let user = await User.findOneAndUpdate(
//       { _id: req.user.id },
//       { $set: { bio : newBio }},
//     );
//     return res.json(user);
//   } catch (err) {
//     console.error(err.message);
//     return res.status(500).send('Server Error');
//   }
// }
// );

module.exports = router;
