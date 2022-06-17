import SuperTokens, {
  getSuperTokensRoutesForReactRouterDom,
} from "supertokens-auth-react";
import EmailPassword, {
  EmailPasswordAuth,
} from "supertokens-auth-react/recipe/emailpassword";
import Session from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import { Navbar } from "./components/Navbar";

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

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

        <Route
          path="/"
          element={
            <EmailPasswordAuth>
              <Navbar />
            </EmailPasswordAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
