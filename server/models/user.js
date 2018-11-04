const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const customProperties = require('./custom-properties');

const HASHLEN = 128;
const ITERATIONS = 1000;
const KEYLEN = 512;
const DIGEST = 'sha512';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: value => validator.isEmail(value)
  },
  hash: String,
  salt: String,
  publicID: customProperties.UUID,
  name: {
    first: String,
    last: String
  },
});

userSchema.methods = {
  setPassword(password) {
    this.salt = crypto.randomBytes(HASHLEN).toString('hex');
    crypto.pbkdf2(password, this.salt, ITERATIONS, KEYLEN, DIGEST)
      .then(hash => this.hash = hash.toString('hex'));
  },

  validatePassword(password) {
    crypto.pbkdf2(password, this.salt, ITERATIONS, KEYLEN, DIGEST)
      .then(hash => crypto.timingSafeEqual(this.hash, hash.toString('hex')))
  },

  generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today);
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt(expirationDate.getTime() / 1000, 10),
    }, 'secret');
  },

  toAuthJSON() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  }
}

module.exports = mongoose.model('User', userSchema);