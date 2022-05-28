import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import { Box, Text } from "@chakra-ui/react";
import { ResearchPreview, ResearchLayout, RText } from "@qazalin/components";
import { gql } from "@apollo/client";
import { client } from "@qazalin/gql";
import { AllResearchRes, ResearchPreviewType } from "@qazalin/types";
import { GetServerSideProps, GetStaticProps } from "next";

const components = { p: RText };
export const Index: React.FC<{ data: AllResearchRes }> = ({ data }) => {
  console.log(data.researchs);
  return <ResearchLayout posts={data.researchs} />;
};
export default Index;

export const getStaticProps: GetStaticProps = async () => {
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

  return { props: { data } };
};
