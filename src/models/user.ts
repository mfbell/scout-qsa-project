import { Schema, model, Document } from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import UUID from './properties/uuid';
import User from '../interfaces/user';

// Crypto settings
const HASHLEN = 128;
const ITERATIONS = 1000;
const KEYLEN = 512;
const DIGEST = 'sha512';

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail
  },
  password: {
    hash: String,
    salt: String,
    resetToken: UUID,
    resetExpires: Date,
  },
  publicId: UUID,
  name: {
    first: String,
    last: String
  },
  facebook: {
    accessToken: String,
    refreshToken: String,
    id: String,
    // Need to auto added
    dateAdded: Date
  },
  twitter: {
    token: String, 
    tokenSecret: String,
    id: String,
    // Need to auto added
    dateAdded: Date
  }
});

class AuthJSON {
  constructor(
    public id: string,
    public email: string,
    public token: string
  ) {}
}

export interface UserModel extends User, Document {
  setPassword(password: string): void,
  validatePassword(password: string): boolean,
  generateJWT(): string,
  toAuthJSON(): AuthJSON
}

userSchema.methods.setPassword = 
  function setPassword(password: string): void {
    this.password.salt = crypto.randomBytes(HASHLEN).toString('hex');
    crypto.pbkdf2(
      password, this.password.salt, ITERATIONS, KEYLEN, DIGEST, 
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        this.password.hash = hash.toString('hex');
      }
    );
}

userSchema.methods.validatePassword = 
  function validatePassword(password: string) {
    crypto.pbkdf2(
      password, this.password.salt, ITERATIONS, KEYLEN, DIGEST,
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        return crypto.timingSafeEqual(this.password.hash, hash);
      }
    );
  },

userSchema.methods.generateJWT = function generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today.getTime() + 60);  
    return jwt.sign({
        email: this.email,
        id: this.id,
        exp: parseInt((expirationDate.getTime() / 1000).toString(), 10)
      }, 
      'secret'
    );
  },

userSchema.methods.toAuthJSON = function toAuthJSON() {
  return new AuthJSON(this.id, this.email, this.generateJWT());
};

export default model<UserModel>('User', userSchema);
