import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";

import { AuthService } from "../../../services";
import { Colors } from "../../../theme";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const result = await AuthService.signin(email, password);
      console.log({ result });
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">Sign in to your account</Heading>
      </Stack>
      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={8}
      >
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
              _focusVisible={{
                borderColor: Colors.purple,
                boxShadow: `0 0 0 1px ${Colors.purple}`,
              }}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
              _focusVisible={{
                borderColor: Colors.purple,
                boxShadow: `0 0 0 1px ${Colors.purple}`,
              }}
            />
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align="start"
              justify="space-between"
            >
              <Link color={Colors.purple} _hover={{ textDecoration: "none" }}>
                Forgot password?
              </Link>
            </Stack>
            <Button
              onClick={handleSignIn}
              bg={Colors.purple}
              color="white"
              pt={1}
              _hover={{
                bg: Colors.purpleHover,
              }}
            >
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
