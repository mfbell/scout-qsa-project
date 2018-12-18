import { Profile } from 'passport';

export default function normaliseProfile(profile: Profile) {
  if (!profile.emails || !profile.name) {
    throw Error(`${profile.provider} failed to provide email or name.`);
  }
  return {
    email: profile.emails[0].value,
    name: {
      first: profile.name.givenName,
      last: profile.name.familyName
    }
  };
}