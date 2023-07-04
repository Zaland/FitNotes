import { BrowserRouter, useNavigate } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Auth0Provider, AppState } from "@auth0/auth0-react";

import { Pages } from "./components/Pages";

const Auth0ProviderWithRedirectCallback = ({ children, ...props }: any) => {
  const navigate = useNavigate();

  const onRedirectCallback = (appState: AppState) => {
    navigate((appState && appState.returnTo) || window.location.pathname);
  };

  return (
    <Auth0Provider onRedirectCallback={onRedirectCallback} {...props}>
      {children}
    </Auth0Provider>
  );
};

const queryClient = new QueryClient();

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <BrowserRouter>
        <Auth0ProviderWithRedirectCallback
          domain={process.env.REACT_APP_AUTH0_DOMAIN || ""}
          clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ""}
          authorizationParams={{
            redirect_uri: window.location.origin,
            audience: process.env.REACT_APP_AUTH0_AUDIENCE,
            scope: process.env.REACT_APP_AUTH0_SCOPE,
          }}
        >
          <Pages />
        </Auth0ProviderWithRedirectCallback>
      </BrowserRouter>
    </ChakraProvider>
  </QueryClientProvider>
);
