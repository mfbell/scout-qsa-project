import { prop, Typegoose, instanceMethod } from 'typegoose';
import UuidProps from './properties/uuid';
import bcrypt from 'bcrypt';
//import jwt from 'jsonwebtoken';

// Bcrypt settings
const saltRounds = 10;

const required = true;
const unique = true;

class Password {
  @prop({ required })
  hash!: string;
  @prop(UuidProps)
  resetToken?: Buffer;
  @prop({ default: Date })
  resetExpires?: Date;

  @instanceMethod
  async set(password: string): Promise<void> {
    this.hash = await bcrypt.hash(password, saltRounds);
  }

  @instanceMethod
  async validate(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.hash);
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
  @prop({ required, default: Date })
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
/*
class AuthJSON {
  constructor(
    public id: string,
    public email: string,
    public token: string
  ) {}
}
*/
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
/*
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
  }*/
}

export default new User().getModelForClass(User);