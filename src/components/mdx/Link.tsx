import { MDXCustomComponent } from "@qazalin/types";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

export const RLink: MDXCustomComponent = (props) => {
  return (
    <NextLink href="sample.com" {...props}>
      <Link color="blue1" />
    </NextLink>
  );
};
