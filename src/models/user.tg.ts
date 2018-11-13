import { prop, Typegoose, instanceMethod } from 'typegoose';
import UuidProps from './properties/uuid';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';

// Crypto settings
const HASHLEN = 128;
const ITERATIONS = 1000;
const KEYLEN = 512;
const DIGEST = 'sha512';

const required = true;
const unique = true;

class Password {
  @prop({ required })
  hash!: string;
  @prop({ required })
  salt!: string;
  @prop(UuidProps)
  resetToken?: Buffer;
  @prop({ default: Date })
  resetExpires?: Date;

  @instanceMethod
  set(password: string): void {
    this.salt = crypto.randomBytes(HASHLEN).toString('hex');
    crypto.pbkdf2(
      password, this.salt, ITERATIONS, KEYLEN, DIGEST, 
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        this.hash = hash.toString('hex');
      }
    );
  }

  @instanceMethod
  validate(password: string): boolean {
    crypto.pbkdf2(
      password, this.salt, ITERATIONS, KEYLEN, DIGEST,
      (err: Error | null, hash: Buffer) => {
        if (err) throw err;
        return crypto.timingSafeEqual(this.hash, hash);
      }
    );
  }
}

export class Name {
  @prop({ required })
  first!: string;
  @prop()
  last?: string;
}

class OAuth {
  @prop({ required })
  id!: String;
  // Need to auto added
  @prop({ required })
  dateAdded!: Date;
}

class Facebook extends OAuth {
  @prop({ required })
  accessToken!: string;
  @prop({ required })
  refreshToken!: string;
}

class Twitter extends OAuth {
  @prop({ required })
  token!: string;
  @prop({ required })
  tokenSecret!: string;
}

class AuthJSON {
  constructor(
    public id: string,
    public email: string,
    public token: string
  ) {}
}

export class User extends Typegoose {
  @prop({
    required,
    unique,
    validate: validator.isEmail
  })
  email!: string;
  @prop()
  password?: Password;
  @prop(UuidProps)
  publicId!: Buffer;
  @prop()
  name?: Name;
  @prop()
  facebook?: Facebook;
  @prop()
  twitter?: Twitter;

  @instanceMethod
  generateJWT() {
    const today = new Date();
    const expirationDate = new Date(today.getTime() + 60);  
    return jwt.sign({
        email: this.email,
        id: this.id,
        exp: parseInt((expirationDate.getTime() / 1000).toString(), 10)
      }, 
      'secret'
    );
  }

  @instanceMethod
  toAuthJSON() {
    return new AuthJSON(this.id, this.email, this.generateJWT());
  }
}

export default new User().getModelForClass(User);