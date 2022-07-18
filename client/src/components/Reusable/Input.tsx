import { Input as ChakraInput, InputProps } from "@chakra-ui/react";
import { Colors } from "../../theme";

export const Input = (props: InputProps) => (
  <ChakraInput
    {...props}
    _focusVisible={{
      borderColor: Colors.purple,
      boxShadow: `0 0 0 1px ${Colors.purple}`,
    }}
  />
);
