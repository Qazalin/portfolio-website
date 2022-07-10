import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { breakpoints } from "./breakPoints";
import { ThemeColors } from "./themeColors";
import { textStyles } from "./components/text";
import { linkStyles } from "./components/link";
import { buttonStyles } from "./components/button";

const colors = COLORS;
const semanticTokens = ThemeColors.semanticTokens;

const config = {
  initialColorMode: "dark",
};

export const theme: ThemeConfig = extendTheme({
  colors,
  semanticTokens,
  config,
  fonts: {
    heading: "Oswald, sans-serif",
    body: "Quattrocento Sans, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        overflowX: "hidden",
        fontFamily: "body",
        bg: "bg0",
        lineHeight: "base",
        color: "text1",
      },
    }),
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
    Link: linkStyles,
  },
});
