import {
  Flex,
  Box,
  Stack,
  Heading,
  FormControl,
  FormLabel,
  Switch,
  useColorModeValue,
} from "@chakra-ui/react";

export const Settings = () => (
  <Flex
    minH="100vh"
    justify="center"
    bg={useColorModeValue("gray.50", "gray.800")}
  >
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
            <Switch colorScheme="purple" id="dark-mode" />
            <FormLabel htmlFor="dark-mode" ml={3} mb={-1}>
              Dark mode
            </FormLabel>
          </FormControl>
        </Stack>
      </Box>
    </Stack>
  </Flex>
);
