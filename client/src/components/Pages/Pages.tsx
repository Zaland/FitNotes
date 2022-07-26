import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Flex, useColorModeValue } from "@chakra-ui/react";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { SignIn, SignUp, PrivateRoute } from "./Auth";

export const Pages = () => {
  const { doesSessionExist } = useSessionContext();

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
          <Route path="/auth/signin" element={<SignIn />} />
          <Route path="/auth/signup" element={<SignUp />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route index element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Flex>
    </BrowserRouter>
  );
};
