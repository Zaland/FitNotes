import { Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

import { Colors } from "../../theme/colors";

type NavLinkProps = {
  label: string;
  path: string;
};

export const NavLink = ({ label, path }: NavLinkProps) => (
  <Link
    px={3}
    py={2}
    rounded="md"
    color={Colors.white}
    fontWeight="bold"
    letterSpacing={2}
    _hover={{
      textDecoration: "none",
      bg: Colors.darkPurple,
    }}
    as={RouterLink}
    to={path}
  >
    {label}
  </Link>
);
