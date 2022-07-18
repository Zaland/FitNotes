import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  Stack,
  Link,
  Button,
  Heading,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";

import { Input } from "../../Reusable/Input";
import { AuthService } from "../../../services";
import { Colors } from "../../../theme";

export const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      await AuthService.signin(email, password);
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
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Stack spacing={5}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align="start"
              justify="space-between"
            >
              <Link
                color={Colors.purple}
                _hover={{ textDecoration: "none" }}
                href="/auth/forgot-password"
              >
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
          <Stack>
            <Text align="center">
              No account?{" "}
              <Link
                color={Colors.purple}
                _hover={{ textDecoration: "none" }}
                href="/auth/signup"
              >
                Sign up!
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
