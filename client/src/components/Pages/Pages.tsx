import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Box, Flex, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";

import { Navbar } from "../Navbar";
import { Home } from "./Home";
import { Settings } from "./Settings";
import { ProtectedRoute } from "./Auth";
import { UserService } from "../../services";

export const Pages = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { setColorMode } = useColorMode();
  const { user } = useAuth0();
  const userId = user?.sub?.split("|")[1] || "";

  const { isFetching } = useQuery(
    ["settings"],
    () => UserService.getSettings(userId),
    {
      initialData: {},
      onSettled: ({ dark_mode }) => {
        setDarkMode(dark_mode);
      },
      enabled: !!userId,
    }
  );

  useEffect(() => {
    setColorMode(darkMode ? "dark" : "light");
  }, [setColorMode, darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box bg={useColorModeValue("gray.100", "gray.800")} h="100vh">
      {!isFetching && (
        <>
          <Navbar />

          <Flex align="center" justify="center">
            <Routes>
              <Route path="/" element={<ProtectedRoute component={Home} />} />
              <Route
                path="/settings"
                element={
                  <ProtectedRoute
                    component={Settings}
                    darkMode={darkMode}
                    toggleDarkMode={toggleDarkMode}
                  />
                }
              />
            </Routes>
          </Flex>
        </>
      )}
    </Box>
  );
};
