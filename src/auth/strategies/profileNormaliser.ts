import { Profile } from 'passport';

function profileNormaliser(profile: Profile) {
  return {
    email: profile.emails[0].value,
    name: {
      first: profile.name.givenName,
      last: profile.name.familyName
    }
  };
}

export default profileNormaliser;