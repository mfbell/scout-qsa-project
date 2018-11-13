import { Schema, model, Document } from 'mongoose';
//import validator from 'validator';

import Activity from '../interfaces/activity';

export const activitySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  slug: {
    type: String,
    lowercase: true,
    trim: true,
    match: /^[a-z\d-]+$/,
    // maxlength: 100, May add
  },
  updated: Date,
  contributors: [Schema.Types.ObjectId],
  image: String,
  alt: String,
  description: String,
  instructions: [String],
  equipment: [{
    name: String, 
    quantity: Number, 
    per: String,
  }],
  riskAssessment: Schema.Types.ObjectId,
});

activitySchema.pre('save', (next) => {
  this.updated = new Date;
  next();
})

export interface ActivityModel extends Activity, Document {
}

export default model<ActivityModel>('Activity', activitySchema);
