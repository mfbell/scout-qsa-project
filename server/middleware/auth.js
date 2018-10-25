const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: 'https://dev-430401.oktapreview.com/oauth2/default',
  clientId: '0oagxbu0rvFjK13qd0h7',
  assertClaims: {
    aud: 'api://default',
  },
});

function authenticationRequired(req, res, next) {
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);

  if (!match) {
    return res.status(401).end();
  }

  const accessToken = match[1];

  return oktaJwtVerifier.verifyAccessToken(accessToken)
    .then((jwt) => {
      req.jwt = jwt;
      next();
    })
    .catch(err => res.status(401).send(err.message));
}

module.exports = authenticationRequired;