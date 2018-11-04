const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const callback = require('./oauth-callback');

passport.use(new FacebookStrategy({
  // https://developers.facebook.com/docs/facebook-login/web
    clientID: null, // fill
    clientSecret: null, // fill
    callbackURL: null // fill
  },
  callback
));