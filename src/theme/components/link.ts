import { ComponentStyleConfig } from "@chakra-ui/react";

export const linkStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: "body",
    _focus: {
      outline: "none",
      boxShadow: "none",
    },
  },
  variants: {
    navbar: {
      fontSize: ["1.2rem", "1.5rem"],
      fontWeight: "light",
      _hover: {
        color: "text2",
        textDecor: "none",
      },
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
