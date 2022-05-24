import { client } from "@qazalin/gql";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import { ResearchRes, ResearchSSRParams } from "@qazalin/types";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { ResearchPost } from "@qazalin/components";

const Research: React.FC<{ data: ResearchRes }> = ({ data }) => {
  console.log(data);
  const router = useRouter();
  if (router.isFallback || !data) {
    return <div>loading</div>;
  }
  const research = data.research;
  return (
    <ResearchPost
      image={research.image}
      title={research.title}
      category={research.category}
      content={research.content}
    />
  );
};

export default Research;

export const getServerSideProps: GetServerSideProps<
  {
    data: ResearchRes;
  },
  ResearchSSRParams
> = async ({ params }) => {
  const { data } = await client.query<ResearchRes>({
    query: gql`
      query getOneResearch($slug: String) {
        research(where: { slug: $slug }) {
          category
          content
          createdAt
          image {
            url
          }
        }
      }
    `,
    variables: {
      slug: params.slug,
    },
  });
  return {
    props: {
      data,
    },
  };
};
