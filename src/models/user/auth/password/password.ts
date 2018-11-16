import { prop, instanceMethod, arrayProp, Typegoose } from 'typegoose';
import bcrypt from 'bcrypt';

import PasswordResetTokens from './reset-tokens';

// cryptography settings
const saltRounds = process.env.saltRounds || 16;

export default class Password extends Typegoose {
  @prop()
  hash?: string;
  @prop({ required: true, default: PasswordResetTokens })
  resetTokens!: PasswordResetTokens;

  @instanceMethod
  async set(password: string): Promise<void> {
    this.hash = await bcrypt.hash(password, saltRounds);
  }

  @instanceMethod
  async validate(password: string): Promise<boolean> {
    if (!this.hash) return false;
    return await bcrypt.compare(password, this.hash);
  }
}