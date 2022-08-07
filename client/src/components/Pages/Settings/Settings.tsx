import { useState } from "react";
import { useSessionContext } from "supertokens-auth-react/recipe/session";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  CircularProgress,
} from "@chakra-ui/react";

import { UserService } from "../../../services";
import { Colors } from "../../../theme";
import { Setting } from "../../../../../types";

export const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { userId } = useSessionContext();

  const { isFetching } = useQuery(
    ["settings"],
    () => UserService.getSettings(userId),
    {
      initialData: {},
      onSettled: ({ dark_mode }) => setDarkMode(dark_mode),
    }
  );

  const { mutate: onUpdateSettings } = useMutation(
    (data: Setting) => UserService.updateSettings(userId, data),
    {
      onSettled: () => setDarkMode((darkMode) => !darkMode),
    }
  );

  return isFetching ? (
    <CircularProgress isIndeterminate />
  ) : (
    <Stack spacing={8} mx="auto" maxW="lg" minW="md" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">Settings</Heading>
      </Stack>
      <Box rounded="lg" bg={Colors.grey} boxShadow="lg" p={8}>
        <Stack spacing={4}>
          <FormControl display="flex" alignItems="center">
            <Switch
              colorScheme="purple"
              id="dark-mode"
              isChecked={darkMode}
              onChange={() => onUpdateSettings({ dark_mode: !darkMode })}
            />
            <FormLabel htmlFor="dark-mode" ml={3} mb={-1}>
              Dark mode
            </FormLabel>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  );
};
