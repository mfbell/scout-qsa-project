import { Typegoose, prop } from "typegoose";
import { Binary } from 'mongodb';

import uuid from './uuid';

export default class UuidId extends Typegoose {
  @prop({ 
    required: true, 
    unique: true, 
    default: uuid.bsonUuid 
  })
  _id!: Binary;

  @prop()
  get id() {
    return uuid.unparse(this._id)
  }
  set id(stringUuid) {
    this._id = uuid.parse(stringUuid);
  }
}