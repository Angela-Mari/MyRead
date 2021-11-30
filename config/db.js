const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI'); //FOR LOCALHOST
// const db = process.env.MONGOURI; //FOR HEROKU

// We are using async await...
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (err) {
    console.log(err.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;
