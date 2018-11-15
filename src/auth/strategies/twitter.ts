import { Profile, use } from 'passport';
import { Strategy } from 'passport-twitter';

import User from '../../models/user';
import normaliseProfile from './normaliseProfile';

use(new Strategy({
    // https://developer.twitter.com/en/docs/twitter-for-websites/log-in-with-twitter/guides/browser-sign-in-flow
    consumerKey: "",
    consumerSecret: "",
    callbackURL: ""
  },
  async function(token: string, tokenSecret: string, profile: Profile, done) {
    try {
      // Find user if they exist
      var user = await User.findOne( 
        { twitter: { id: profile.id } } ).exec();
      if (!user) {
        // Create user
        user = new User({
          ...normaliseProfile(profile),
          twitter: {
            token,
            tokenSecret,
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