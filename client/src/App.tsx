import SuperTokens from "supertokens-auth-react";
import EmailPassword, {
  EmailPasswordAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";

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
      emailVerificationFeature: {
        mode: "REQUIRED",
      },
    }),
    Session.init(),
  ],
});

export const App = () => (
  <EmailPasswordAuth requireAuth={false}>
    <Pages />
  </EmailPasswordAuth>
);
