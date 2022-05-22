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
    h3: {
      fontSize: ["1.2rem", "1.5rem"],
      fontWeight: "light",
    },
    h4: {
      fontSize: ["0.85rem", "0.9rem", "0.95rem", "1rem", "1.3rem"],
      fontWeight: "light",
    },
    p: {
      fontSize: ["1rem", "1.25rem"],
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "p",
  },
};
