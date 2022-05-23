import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text } from "@chakra-ui/react";
import {
  ResearchPreview,
  BlogPost,
  CategoryCard,
  RText,
} from "@qazalin/components";
import { gql } from "@apollo/client";
import { client } from "@qazalin/gql";
import { AllResearchRes, ResearchPreviewType } from "@qazalin/types";
import { GetServerSideProps } from "next";

const components = { p: RText };
export const Index: React.FC<{ data: AllResearchRes }> = ({ data }) => {
  console.log(data);
  return (
    <Box>
      {data.researchs.map((r, i) => (
        <ResearchPreview
          key={`r-${i}`}
          category={r.category}
          title={r.title}
          imageUrl={r.image.url}
          createdAt={r.createdAt}
          slug={r.slug}
        />
      ))}
    </Box>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<AllResearchRes>({
    query: gql`
      {
        researchs {
          category
          createdAt
          image {
            url
          }
          title
          slug
        }
      }
    `,
  });

  /* const data: AllResearchRes = {
    researchs: [
      {
        category: "analysis",
        createdAt: "2022-05-23T06:13:40.904727+00:00",
        image: {
          url: "https://media.graphassets.com/uK3K6VlOQpi3Obe59gB9",
        },
        title: "The economics of crypto",
        slug: "the-economics-of-crypto",
      },
      {
        category: "analysis",
        createdAt: "2022-05-23T06:13:40.904727+00:00",
        image: {
          url: "https://media.graphassets.com/iTex9021T6a4zdEDpeIb",
        },
        title: "another",
        slug: "another",
      },
    ],
  }; */

  /*  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  */
  return { props: { data } };
};
