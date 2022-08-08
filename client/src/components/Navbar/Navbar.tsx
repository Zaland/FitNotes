import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";
import { signOut } from "supertokens-auth-react/recipe/emailpassword";

import { NavLink } from "./NavLink";

const Links = [{ label: "Home", path: "/" }];

export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    await signOut();
    window.location.href = "/auth/signin";
  };

  return (
    <>
      <Box bg={useColorModeValue("purple.400", "purple.600")} px={4}>
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            bg="purple.400"
            color="white"
            _hover={{
              bg: useColorModeValue("purple.300", "purple.500"),
            }}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box color="white" fontWeight="bold" letterSpacing={2}>
              FitNotes
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} path={link.path} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <Menu>
              <MenuButton
                as={Button}
                rounded="full"
                variant="link"
                cursor="pointer"
                minW={0}
              >
                <Avatar size="sm" />
              </MenuButton>
              <MenuList>
                <MenuItem as={RouterLink} to="/settings">
                  Settings
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Sign out</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as="nav" spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.label} label={link.label} path={link.path} />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};
