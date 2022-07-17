import { getSuperTokensRoutesForReactRouterDom } from "supertokens-auth-react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { redirectToAuth } from "supertokens-auth-react/recipe/emailpassword";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import * as reactRouterDom from "react-router-dom";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { SignIn } from "./Auth/SignIn";

export const Pages = () => {
  const { doesSessionExist } = useSessionContext();

  // if (!doesSessionExist && window.location.pathname !== "/auth") {
  //   redirectToAuth();
  // }

  return (
    <BrowserRouter>
      {doesSessionExist && <Navbar />}

      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Routes>
          {/* {getSuperTokensRoutesForReactRouterDom(reactRouterDom)} */}

          {doesSessionExist ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/settings" element={<Settings />} />
            </>
          ) : (
            <>
              <Route path="/auth/signin" element={<SignIn />} />
            </>
          )}
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};
