import { ComponentStyleConfig } from "@chakra-ui/react";

export const FONTS = {
  headingFont: '"Raleway", sans-serif',
  bodyFont: '"Lato", sans-serif',
};

export const textStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: "body",
  },
  variants: {
    heading: {
      fontSize: ["3rem", "4.375rem", "6.25rem"],
      fontFamily: "heading",
      textTransform: "capitalize",
    },
    subHeading: {
      fontSize: ["1.2rem", "1.5rem", "1.7rem", "2rem"],
      fontFamily: "body",
      fontWeight: "light",
    },
    h1: {
      fontSize: ["2rem", "3.5rem"],
      letterSpacing: ["-1.2px"],
      // lineHeight: ["2rem", "3.75rem"],
      fontFamily: "heading",
      textTransform: "capitalize",
    },
    h2: {
      fontSize: ["2xl", "3xl"],
      // letterSpacing: ["-1.2px"],
      // lineHeight: ["2rem", "3.75rem"],
      fontFamily: "heading",
      textTransform: "capitalize",
    },
    h3: {
      fontSize: ["1.2rem", "1.5rem"],
      fontWeight: "light",
    },
    h4: {
      fontSize: ["0.85rem", "1rem"],
    },
    p: {
      fontSize: ["1rem", "1.25rem"],
      lineHeight: ["1.5rem", "2rem"],
    },
    mono: {
      fontSize: ["0.85rem", "1rem"],
      fontWeight: "light",
      fontFamily: "DejaVu Mono, monospace",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "p",
  },
};
