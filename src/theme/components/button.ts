import { ComponentStyleConfig } from "@chakra-ui/react";

export const buttonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {
    fontsize: "1rem",
    fontFamily: "body",
    minW: "50px",
    ":focus": {
      outline: "none",
      boxShadow: "none",
    },
    maxH: "60px",
    maxW: "150px",
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "15px",
    },
    primaryGhost: {
      bg: "trasnparent",
      border: "2px solid",
      borderColor: "primary",
      color: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "13px",
      _hover: {
        bg: "primary",
        color: "inherit",
      },
    },
    // wallet connect button
    connect: {
      bg: "primary",
      borderRadius: "10px",
      textTransform: "capitalize",
      p: "15px",
    },
    secondary: {
      bg: "secondary",
      borderRadius: "2px",
      textTransform: "capitalize",
      p: "10px",
      boxShadow: "none",
      shadow: "none",
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: "",
    variant: "",
  },
};
