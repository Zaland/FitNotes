import SuperTokens from "supertokens-auth-react";
import EmailPassword, {
  EmailPasswordAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { ChakraProvider } from "@chakra-ui/react";

import { Pages } from "./components/Pages";

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
      emailVerificationFeature: {
        mode: "REQUIRED",
      },
    }),
    Session.init(),
  ],
});

export const App = () => (
  <ChakraProvider>
    <EmailPasswordAuth requireAuth={false}>
      <Pages />
    </EmailPasswordAuth>
  </ChakraProvider>
);
