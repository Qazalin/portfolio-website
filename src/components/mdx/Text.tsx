import { Text } from "@chakra-ui/react";
import { MDXCustomComponent } from "@qazalin/types";

/**
 * Custom paragraph text component for MDX
 */
export const RText: MDXCustomComponent = (props) => {
  return <Text variant="p" {...props} />;
};
