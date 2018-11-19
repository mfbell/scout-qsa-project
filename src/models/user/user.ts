import { prop, Typegoose, instanceMethod } from 'typegoose';

import jwt from 'jsonwebtoken';

import Password, { Facebook, Twitter } from './auth'
import UuidId from '../properties/uuid-id';

const required = true;
const unique = true;

export class Name extends Typegoose {
  @prop({ required })
  first!: string;
  @prop()
  last?: string;
}

class AuthJSON {
  constructor(
    public id: string,
    public email: string,
    public token: string
  ) {}
}

export class User extends UuidId {
  @prop({
    required,
    unique,
    validate: validator.isEmail
  })
  email!: string;
  @prop({ required })
  password!: Password;
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
      'secret' //// needs changing
    );
  }

  @instanceMethod
  toAuthJSON() {
    return new AuthJSON(this.id, this.email, this.generateJWT());
  }
}

export default new User().getModelForClass(User);