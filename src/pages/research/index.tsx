import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text } from "@chakra-ui/react";
import { BlogPost, RText } from "@qazalin/components";
import { gql } from "@apollo/client";
import { client } from "@qazalin/gql";

const components = { p: RText };
export const Index = ({ source, data }) => {
  console.log(data);
  return <MDXRemote {...source} components={components} />;
};
export default Index;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        posts {
          title
          category
          createdAt
          publishedAt
          createdBy {
            name
          }
        }
      }
    `,
  });

  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, data } };
}
