import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import { Navbar } from "../Navbar";

export const Pages = () => (
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
