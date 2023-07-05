import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  thumb: {
    _checked: {
      bg: "white",
    },
  },
  track: {
    _checked: {
      bg: "purple.500",
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
