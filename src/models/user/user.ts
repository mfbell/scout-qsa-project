import { prop, Typegoose, instanceMethod } from 'typegoose';
import { Document } from 'mongoose';
import { Binary } from 'mongodb';

import jwt from 'jsonwebtoken';

import { Password, Facebook, Twitter } from './authentication'
import * as uuid from '../properties/uuid';

const required = true;
const unique = true;

export class Name {
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

export class User extends Typegoose {
  @prop({ 
    required, 
    unique, 
    default: uuid.bsonUuid 
  })
  _id!: Binary;
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

  @prop()
  get id() {
    return uuid.unparse(this._id)
  }
  set id(stringUuid) {
    this._id = uuid.parse(stringUuid);
  }

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