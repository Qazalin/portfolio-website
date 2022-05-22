import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text } from "@chakra-ui/react";
import { BlogPost, RText } from "@qazalin/components";

const components = { p: RText };
export const Index = ({ source }) => {
  return <MDXRemote {...source} components={components} />;
};
export default Index;

export async function getStaticProps() {
  // MDX text - can be from a local file, database, anywhere
  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
}
