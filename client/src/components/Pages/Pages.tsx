import { ThemeProvider } from "@mui/material";
import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { theme } from "./styles";

export const Pages = () => {
  const { doesSessionExist } = useSessionContext();

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar>
          <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}

            {doesSessionExist && (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/settings" element={<Settings />} />
              </>
            )}
          </Routes>
        </Navbar>
      </BrowserRouter>
    </ThemeProvider>
  );
};
