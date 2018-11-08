import { Schema, model, Document } from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import validator from 'validator';

import UUID from './properties/uuid';
import IUser from '../interfaces/user';

const HASHLEN = 128;
const ITERATIONS = 1000;
const KEYLEN = 512;
const DIGEST = 'sha512';

export const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: validator.isEmail
  },
  password: {
    hash: String,
    salt: String,
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

type AuthJSON = {
  _id: Schema.Types.ObjectId,
  email: string,
  token: string
}

export interface IUserModel extends IUser, Document {
  setPassword(password: string): void,
  validatePassword(password: string): boolean,
  generateJWT(): string,
  toAuthJSON(): AuthJSON
}

userSchema.methods = {
  setPassword(password: string) {
    this.password.salt = crypto.randomBytes(HASHLEN).toString('hex');
    crypto.pbkdf2(password, this.password.salt, ITERATIONS, KEYLEN, DIGEST, 
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        this.password.hash = hash.toString('hex');
      }
    );
  },

  validatePassword(password: string) {
    crypto.pbkdf2(password, this.password.salt, ITERATIONS, KEYLEN, DIGEST,
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        return crypto.timingSafeEqual(this.password.hash, hash);
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
    return <AuthJSON>{
      _id: this._id,
      email: this.email,
      token: this.generateJWT(),
    };
  }
};

export default model<IUserModel>('User', userSchema);
