const mongoose = require('mongoose');

const TwoFAUserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    // required: true,
  },
});

module.exports = TwoFAUser = mongoose.model('twofauser', TwoFAUserSchema);
