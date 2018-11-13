import { Schema } from "mongoose";

import Equipment from './equipment';

export default interface Activity {
  title: string,
  updated: Date,
  contributors: Schema.Types.ObjectId[],
  image: string,
  alt: string,
  description: string,
  instructions: string[],
  equipment: Equipment[],
  riskAssessment: Schema.Types.ObjectId[]
};