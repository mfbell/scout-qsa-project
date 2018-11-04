import { Strategy } from 'passport-facebook';
import { Profile, use } from 'passport';

import User from '../../models/user';
import profileNormaliser from './profileNormaliser';

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
      var user: User = await User.findOne( 
        { facebook: { id: profile.id } } ).exec();
      if (!user) {
        // Create user
        user = new User({
          ...profileNormaliser(profile),
          facebook: {
            accessToken,
            refreshToken,
            id: profile.id,
            dateAdded: new Date()
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