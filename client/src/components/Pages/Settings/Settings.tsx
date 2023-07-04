import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "@tanstack/react-query";
import {
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import { UserService } from "../../../services";
import { Setting } from "../../../../../types";

interface SettingsProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const Settings = ({ darkMode, toggleDarkMode }: SettingsProps) => {
  const { toggleColorMode } = useColorMode();
  const { user } = useAuth0();
  const userId = user?.sub?.split("|")[1] || "";

  const { mutate: onUpdateSettings } = useMutation(
    (data: Setting) => UserService.updateSettings(userId, data),
    {
      onSettled: () => {
        toggleDarkMode();
        toggleColorMode();
      },
    }
  );

  return (
    <Stack spacing={8} mx="auto" maxW="lg" minW="md" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">Settings</Heading>
      </Stack>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={8}
      >
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
