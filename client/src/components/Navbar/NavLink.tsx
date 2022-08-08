import { Link, useColorModeValue } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

type NavLinkProps = {
  label: string;
  path: string;
};

export const NavLink = ({ label, path }: NavLinkProps) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    color="white"
    fontWeight="bold"
    letterSpacing={2}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("purple.300", "purple.500"),
    }}
    as={RouterLink}
    to={path}
  >
    {label}
  </Link>
);
