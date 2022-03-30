const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    alias: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    picture: {
         type: String,
    },
    bio: {
        type: String,
    },
    socials: {
        instagram: {
            type: String,
        },
        facebook: {
            type: String,
        },
        other: {
            type: String,
        },
    },
    categories: [
        {
            type: String,
        }
    ],
    following: [
        {
          user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
          },
        },
      ],
    favorites: [
    {
        post: {
            type: Schema.Types.ObjectId,
            ref: 'posts',
        },
    },
    ],
  });
  
  module.exports = User = mongoose.model('user', UserSchema);
  