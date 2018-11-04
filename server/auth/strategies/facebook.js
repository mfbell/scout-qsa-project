const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;

passport.use(new FacebookStrategy({
  // https://developers.facebook.com/docs/facebook-login/web
    clientID: null, // fill
    clientSecret: null, // fill
    callbackURL: null // fill
  },
  function(accessToken, refreshToken, profile, done) {
    User.findOrCreate(null /* user */, function(err, user) {
      if (err) { return done(err); }
      done(null, user);
    });
  }
));