const mongoose = require('mongoose');

const userGroupSchema = new mongoose.Schema({
  name: {
    type: String,
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('UserGroups', userGroupSchema);
