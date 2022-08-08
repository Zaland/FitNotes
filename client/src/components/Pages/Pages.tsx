import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { SignIn, SignUp, PrivateRoute } from "./Auth";
import { Colors } from "../../theme";

export const Pages = () => {
  const { doesSessionExist } = useSessionContext();

  return (
    <Box bg={Colors.grey} h="100vh">
      <BrowserRouter>
        {doesSessionExist && <Navbar />}

        <Flex align="center" justify="center">
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
    </Box>
  );
};
