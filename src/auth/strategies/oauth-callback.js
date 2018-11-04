const OAuthProvider = require('../../models/oauth-provider');
const User = require('../../models/user');


module.exports = async function(accessToken, refreshToken, profile, done) {
  try {
    var oauth = await OAuthProvider.findOne(
      { providerUserId: profile.id }
    ).exec();
    if (!oauth) {
      // Create new User and OAuthProvider
      // User
      var user = new User({
        email: profile.emails[0].value,
        name: {
          first: profile.name.givenName,
          last: profile.name.familyName
        }
      });
      user.save();
      // OAuth method
      oauth = new OAuthProvider({
        provider: profile.provider,
        providerUserId: profile.id,
        accessToken,
        user: user._id
      });
      oauth.save();
      // Return new user
      done(null, user);
    } else {
      // Find existing user
      oauth.populate('user');
      done(null, oauth.user);
    }
  } catch(err) {
    done(err)
  }
}