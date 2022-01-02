const mongoose = require('mongoose');

const userInfoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  userGroups: {
    type: mongoose.Schema.ObjectId,
    ref: 'UserGroups',
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserInfo', userInfoSchema);
