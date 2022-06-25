import { Text } from "@chakra-ui/react";
import { MDXCustomComponent } from "@qazalin/types";

/**
 * Custom paragraph text component for MDX
 */
let maxW: string | number | undefined;
export const RText: MDXCustomComponent = (props) => {
  return <Text variant="p" {...props} />;
};

export const RH2: MDXCustomComponent = (props) => {
  return <Text maxW={maxW} mt="20px" mb="10px" variant="h2" {...props} />;
};

export const RH3: MDXCustomComponent = (props) => {
  return (
    <Text mx="auto" maxW={maxW} mt="10px" mb="5px" variant="h3" {...props} />
  );
};
