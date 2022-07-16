import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react/recipe/emailpassword";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";

export const Pages = () => {
  const { doesSessionExist } = useSessionContext();

  if (!doesSessionExist && window.location.pathname !== "/auth") {
    redirectToAuth();
  }

  return (
    <BrowserRouter>
      {doesSessionExist && <Navbar />}

      <Routes>
        {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

        {doesSessionExist && (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
};
