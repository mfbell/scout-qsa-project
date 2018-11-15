import { prop, } from 'typegoose';

const required = true;

export class OAuth {
  @prop({ required })
  id!: String;
  @prop({ required, default: Date })
  dateAdded!: Date;
}

export class Facebook extends OAuth {
  @prop({ required })
  accessToken!: string;
  @prop({ required })
  refreshToken!: string;
}

export class Twitter extends OAuth {
  @prop({ required })
  token!: string;
  @prop({ required })
  tokenSecret!: string;
}