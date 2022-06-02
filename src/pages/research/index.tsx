import { ResearchLayout } from "@qazalin/components";
import { gql } from "@apollo/client";
import { client } from "@qazalin/gql";
import { AllResearchRes } from "@qazalin/types";
import { GetStaticProps } from "next";

export const Index: React.FC<{ data: AllResearchRes }> = ({ data }) => {
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
