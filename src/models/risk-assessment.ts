import { Schema, model, Document } from 'mongoose';
import { prop, Typegoose, instanceMethod, Ref } from 'typegoose';
import UuidId from '../properties/uuid-id';
import { User } from '../user/user';
//import validator from 'validator';

const required = true;
const unique = true;

export default class Activity extends UuidId {}