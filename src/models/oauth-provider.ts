import { Schema } from 'mongoose';

const OAuthSchema = new Schema({
  provider: {
    type: String,
    required: true
  },
  providerUserId: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  dateAdded: {
    type: Date,
    default: new Date
  }
});

export default mongoose.model('OAuth', OAuthSchema);