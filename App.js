import React from "react";
import Navigation from "./navigation/Navigation";
import { Auth0Provider } from "@auth0/auth0-react";

export default function App() {
  return (
    <Auth0Provider
      domain="dev-k84ve77a5zlmkfed.us.auth0.com"
      clientId="Fw8n9qfXsWBArhgxgtv6ByiIY274JmjH"
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: "https://dev-k84ve77a5zlmkfed.us.auth0.com/api/v2/",
      }}
    >
      <Navigation />
    </Auth0Provider>
  );
}
