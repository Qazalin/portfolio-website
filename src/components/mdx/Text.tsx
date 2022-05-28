import { Text } from "@chakra-ui/react";
import { MDXCustomComponent } from "@qazalin/types";

/**
 * Custom paragraph text component for MDX
 */
export const RText: MDXCustomComponent = (props) => {
  return <Text variant="p" maxW="1000px" {...props} />;
};

export const RH2: MDXCustomComponent = (props) => {
  return <Text mt="20px" mb="10px" variant="h2" {...props} />;
};

export const RH3: MDXCustomComponent = (props) => {
  return <Text mt="10px" mb="5px" variant="h3" {...props} />;
};
