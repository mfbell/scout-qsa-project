import { Strategy } from 'passport-facebook';
import { Profile, use } from 'passport';

import User from '../../models/user';
import normaliseProfile from './normaliseProfile';

use(new Strategy({
  // https://developers.facebook.com/docs/facebook-login/web
    clientID: "", // fill
    clientSecret: "", // fill
    callbackURL: "", // fill
    enableProof: true
  },
  async function(accessToken: string, refreshToken: string, profile: Profile, done) {
    try {
      // Find user if they exist
      var user = await User.findOne( 
        { facebook: { id: profile.id } } ).exec();
      if (!user) {
        // Create user
        user = new User({
          ...normaliseProfile(profile),
          facebook: {
            accessToken,
            refreshToken,
            id: profile.id
          }
        });
        user.save();
      }
      // Return user
      done(null, user);
    }
    catch(err) {
      // Return any error
      done(err)
    }
  }
));