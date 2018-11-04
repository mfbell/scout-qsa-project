import { Schema, model } from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import { UUID } from './custom-properties';

const HASHLEN = 128;
const ITERATIONS = 1000;
const KEYLEN = 512;
const DIGEST = 'sha512';

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: (value: string) => validator.isEmail(value)
  },
  hash: String,
  salt: String,
  publicID: UUID,
  name: {
    first: String,
    last: String
  },
  oauths: [{
    type: Schema.Types.ObjectId,
    ref: 'OAuth'
  }]
});

userSchema.methods = {
  setPassword(password: string) {
    this.salt = crypto.randomBytes(HASHLEN).toString('hex');
    crypto.pbkdf2(password, this.salt, ITERATIONS, KEYLEN, DIGEST, 
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        this.hash = hash.toString('hex');
      }
    );
  },

  validatePassword(password: string) {
    crypto.pbkdf2(password, this.salt, ITERATIONS, KEYLEN, DIGEST,
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        crypto.timingSafeEqual(this.hash, hash);
      }
    );
  },

  generateJWT() {
    const today: Date = new Date();
    const expirationDate = new Date(today.getTime());
    expirationDate.setDate(today.getDate() + 60);
  
    return jwt.sign({
      email: this.email,
      id: this._id,
      exp: parseInt((expirationDate.getTime() / 1000).toString(), 10)
    }, 'secret');
  },

  toAuthJSON() {
    return {
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  }
};

export default model('User', userSchema);