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
  /* const { data } = await client.query({
    query: gql`
      {
        posts {
          title
          category
          createdAt
          publishedAt
        }
      }
    `,
  }); */
  const res = {
    posts: [
      {
        __typename: "Post",
        title: "The economics of crypto",
        category: "analysis",
        createdAt: "2022-05-22T13:03:53.263248+00:00",
        publishedAt: "2022-05-22T13:30:00.366626+00:00",
        createdBy: {
          __typename: "User",
          name: "qazal",
        },
      },
    ],
  };

  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource, data } };
}
