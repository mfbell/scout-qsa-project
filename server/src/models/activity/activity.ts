import { prop, instanceMethod, Ref, pre } from 'typegoose';
import UuidId from '../properties/uuid-id';
import { User } from '../user/user';
import Equipment from '../../interfaces/equipment';
import RiskAssessment from '../risk-assessment';
//import validator from 'validator';

const required = true;
const unique = true;
const urlSlug = /^[a-z\d-]+$/
const noTrailingSpaces = /^[^ ]+.[^ ]+$/

@pre<Activity>('save', function (next) {
  this.updated = new Date;
  next();
})
export class Activity extends UuidId {
  @prop({ required, unique, validate: noTrailingSpaces })
  title!: string;
  @prop({ required, validate: urlSlug })
  slug!: string;
  @prop({ required })
  updated!: Date;
  @prop({ required, ref: User })
  contributors!: [Ref<User>];
  @prop({})
  image?: string;
  @prop({})
  alt?: string;
  @prop({ required })
  description!: string;
  @prop({ required })
  instructions!: [string];
  @prop({})
  equipment?: [Equipment];
  @prop({ ref: RiskAssessment})
  riskAssessment?: Ref<RiskAssessment>;
};