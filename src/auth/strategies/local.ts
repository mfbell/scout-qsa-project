import { use } from 'passport';
import { Strategy } from 'passport-local';

import User from '../../models/user';

use(new Strategy({
    usernameField: 'email',
    passwordField: 'password',
    session: false
  },
  async function(email: string, password: string, done) {
    try {
      var user = await User.findOne({ email }).exec()
      if (!user || !user.password || !user.password.validate(password)) {
        return done(null, false, { message: 'Invalid email or password' });
      }
      return done(null, user);
    } 
    catch(err) {
      done(err);
    }
  }
));