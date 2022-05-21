import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { BREAKPOINTS } from "./breakPoints";
import { ThemeColors } from "./themeColors";
import { textStyles } from "./components/text";
import { linkStyles } from "./components/link";
import { buttonStyles } from "./components/button";

const colors = COLORS.colors;
const semanticTokens = ThemeColors.semanticTokens;

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};
export const theme = extendTheme({
  config,
  colors,
  BREAKPOINTS,
  semanticTokens,
  fonts: {
    heading: "Raleway, sans-serif",
    body: "Lato, sans-serif",
  },
  styles: {
    global: () => ({
      body: {
        overflow: "hidden",
        fontFamily: "body",
        bg: "bg1",
        lineHeight: "base",
      },
    }),
  },
  components: {
    Text: textStyles,
    Button: buttonStyles,
    Link: linkStyles,
  },
});
