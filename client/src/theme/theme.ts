import { extendTheme } from "@chakra-ui/react";
import { switchTheme } from "../components/Reusable";

export const theme = extendTheme({
  components: { Switch: switchTheme },
});
