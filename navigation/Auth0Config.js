import Auth0 from 'react-native-auth0';

const auth0 = new Auth0({
  domain: 'dev-k84ve77a5zlmkfed.us.auth0.com',
  clientId: 'Fw8n9qfXsWBArhgxgtv6ByiIY274JmjH'
});

const authorizeUrl = async ({ scope, redirectUri }) => {
  return auth0.webAuth.authorize({
    scope: scope,
    redirectUri: redirectUri
  });
};

export { auth0, authorizeUrl };
