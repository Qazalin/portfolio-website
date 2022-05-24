import { MDXCustomComponent } from "@qazalin/types";
import NextLink from "next/link";

export const Link: MDXCustomComponent = () => {
  return (
    <>
      <NextLink href="sample.com">
        <a />
      </NextLink>
    </>
  );
};
