import React from 'react';
import { Auth0Provider } from 'react-native-auth0';
import Navigation from './navigation/Navigation'; // Your main navigation component

const auth0Config = {
  domain: 'dev-k84ve77a5zlmkfed.us.auth0.com',
  clientId: 'Fw8n9qfXsWBArhgxgtv6ByiIY274JmjH',
};

export default function App() {
  return (
    <Auth0Provider
      domain={auth0Config.domain}
      clientId={auth0Config.clientId}
    >
      <Navigation />
    </Auth0Provider>
  );
}
