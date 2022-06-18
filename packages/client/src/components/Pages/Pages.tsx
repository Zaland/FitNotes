import { ThemeProvider } from "@mui/material";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import { Navbar } from "../Navbar";
import { theme } from "./styles";

export const Pages = () => (
  <ThemeProvider theme={theme}>
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
  </ThemeProvider>
);
