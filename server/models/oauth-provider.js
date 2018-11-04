const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

const OAuthSchema = new mongoose.Schema({
  provider: {
    type: String,
    required: true
  },
  providerUserId: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  user: {
    type: ObjectId,
    ref: 'User'
  },
  dateAdded: {
    type: Date,
    default: new Date.now
  }
});

module.exports = mongoose.model('OAuth', OAuthSchema);