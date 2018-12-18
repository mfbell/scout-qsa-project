import { prop } from 'typegoose';
import UuidId from '../properties/uuid-id';

const required = true;

export default class Activity extends UuidId {
  @prop({ required })
  name!: string;
  @prop({ required })
  quantity!: number;
  @prop({ required, enum: ["troop", "patrol", "scout"] })
  per!: string;
}