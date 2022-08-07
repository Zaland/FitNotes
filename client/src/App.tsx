import SuperTokens from "supertokens-auth-react";
import EmailPassword, {
  EmailPasswordAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { ChakraProvider } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Pages } from "./components/Pages";

const queryClient = new QueryClient();

SuperTokens.init({
  appInfo: {
    appName: "FitNotes",
    apiDomain: process.env.REACT_APP_API_DOMAIN || "",
    websiteDomain: process.env.REACT_APP_CLIENT_DOMAIN || "",
    apiBasePath: "/auth",
    websiteBasePath: "/auth",
  },
  recipeList: [
    EmailPassword.init({
      signInAndUpFeature: {
        disableDefaultUI: true,
      },
    }),
    Session.init(),
  ],
});

export const App = () => (
  <QueryClientProvider client={queryClient}>
    <ChakraProvider>
      <EmailPasswordAuth requireAuth={false}>
        <Pages />
      </EmailPasswordAuth>
    </ChakraProvider>
  </QueryClientProvider>
);
