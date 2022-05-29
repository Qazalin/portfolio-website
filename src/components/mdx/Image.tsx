import { Image } from "@chakra-ui/react";
import { MDXCustomComponent } from "@qazalin/types";

export const RImage: MDXCustomComponent = (props) => {
  return <Image borderRadius="sm" m="auto" my="20px" maxH="650px" {...props} />;
};
