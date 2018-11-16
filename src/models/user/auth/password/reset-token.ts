import { prop, instanceMethod } from 'typegoose';
import bcrypt from 'bcrypt';
import crypto from 'crypto';

import UuidId from '../../../properties/uuid-id';

// cryptography settings
const saltRounds = process.env.saltRounds || 16;
const randomByteLen = 24;
// Pasword Reset Token Settings
const expireAfter = 60 * 60 * 1000;
const maxTokensIn = 12 * 60 * 60 * 1000;

export default class PasswordResetToken extends UuidId {
  @prop()
  hash?: string;
  @prop({ default: Date })
  created?: Date;

  @prop()
  get valid(): boolean {
    if (
      !this.hash ||
      !this.created ||
      new Date(
        this.created.getTime() + expireAfter
        ) >= new Date
    ) return false;
    return true;
  }

  @prop()
  get persists(): boolean {
    if (
      !this.created || 
      new Date(
        this.created.getTime() + maxTokensIn
        ) >= new Date
      ) return false
    return true
  }

  @instanceMethod
  async construct(): Promise<string> {
    this.created = new Date;
    let token = crypto.randomBytes(randomByteLen);
    this.hash = await bcrypt.hash(token, saltRounds);
    return [this.id, token.toString('hex')].join('-');
  }

  @instanceMethod
  async validate(userProvidedToken: string): Promise<boolean> {
    const [ id, token ] = userProvidedToken.split('-', 2)
    if ((id && this.id !== id) || !this.valid || !this.hash) return false
    let hash = await bcrypt.hash(token, saltRounds);
    return await bcrypt.compare(hash, this.hash);
  }
}