import { use } from 'passport';
import { Strategy } from 'passport-local';

import User from '../../models/user';

use(new Strategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  async function(email: string, password: string, done) {
    try {
      var user = await User.findOne({ email }).exec()
      if (!user || !user.validatePassword(password)) {
        return done(null, false, { message: 'Email or password is invalid' });
      }
      return done(null, user);
    } 
    catch(err) {
      done(err);
    }
  }
));