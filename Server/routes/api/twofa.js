const express = require('express');
const request = require('request');
const config = require('config');
const router = express.Router();
const auth = require('../../middleware/auth');
const accountSid = config.get('twilio.sid');
const authToken = config.get('twilio.token');
const client = require('twilio')(accountSid, authToken);

const TwoFAUser = require('../../models/TwoFAUser');

// @route   POST api/textmessage
// @desc    Get current users profile
// @access  Private
router.post('/', async (req, res) => {
  const randomCode = Math.floor(100000 + Math.random() * 900000);

  const { email, phoneNumber } = req.body;

  try {
    // See if the user exists
    // Using upsert option (creates new doc if no match is found):
    await TwoFAUser.findOneAndUpdate(
      { email: email },
      { code: randomCode },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );
    var message = await client.messages
      .create({
        body: `Your security code is ${randomCode} for MyRead authentication`,
        from: config.get('twilio.from'),
        to: `+${phoneNumber}`,
      });
    console.log(message.sid);

    res.status(200).end();
  } catch (err) {
    console.error(err.message);
    return res.status(500).send('Server Error');
  }
});

// @route   GET api/twofa
// @desc    Get current users code and check if correct
// @access  Private
router.post('/verify', async (req, res) => {
  const { email, code } = req.body;

  try {
    let tfuser = await TwoFAUser.findOne({ email });

    if (!tfuser) {
      return res.status(400).json({ errors: [{ msg: 'Invalid user' }] });
    }

    if (code == tfuser.code) {
      res.status(200).end();
      console.log(tfuser.code);
    } else {
      res.status(401).send('Invalid Security Code').end();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
