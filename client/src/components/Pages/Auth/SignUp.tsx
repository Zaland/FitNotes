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
  HStack,
  Alert,
  AlertIcon,
  CloseButton,
} from "@chakra-ui/react";

import { Input } from "../../Reusable/Input";
import { Colors } from "../../../theme";

export const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({ state: false, message: "" });

  const onSignUp = async () => {
    try {
    } catch (error) {
      console.log({ error });
    }
  };

  const onCloseAlert = () => setError({ state: false, message: "" });

  return (
    <Stack spacing={8} mx="auto" maxW="lg" py={12} px={6}>
      <Stack align="center">
        <Heading fontSize="4xl">Sign up for an account</Heading>
      </Stack>

      {error.state && (
        <Alert status="error" rounded={5}>
          <AlertIcon />
          <Box width="100%">There was an error processing your request</Box>
          <CloseButton
            alignSelf="flex-end"
            position="relative"
            onClick={onCloseAlert}
          />
        </Alert>
      )}

      <Box
        rounded="lg"
        bg={useColorModeValue("white", "gray.700")}
        boxShadow="lg"
        p={8}
      >
        <Stack spacing={4}>
          <HStack>
            <Box>
              <FormControl id="firstName" isRequired>
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </FormControl>
            </Box>
            <Box>
              <FormControl id="lastName">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  onChange={(event) => setLastName(event.target.value)}
                />
              </FormControl>
            </Box>
          </HStack>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>
          <Stack spacing={5}>
            <Button
              onClick={onSignUp}
              bg={Colors.purple}
              color="white"
              pt={1}
              _hover={{
                bg: Colors.purpleHover,
              }}
            >
              Sign up
            </Button>
          </Stack>
          <Stack>
            <Text align="center">
              Already a user?{" "}
              <Link
                color={Colors.purple}
                _hover={{ textDecoration: "none" }}
                href="/auth/signin"
              >
                Sign in!
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};
