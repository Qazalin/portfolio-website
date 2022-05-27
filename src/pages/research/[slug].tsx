import { client } from "@qazalin/gql";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  GQLResearchRes,
  ResearchSSRParams,
  ResearchType,
} from "@qazalin/types";
import { GetServerSideProps, GetServerSidePropsResult } from "next";
import { ResearchPost } from "@qazalin/components";
import { serialize } from "next-mdx-remote/serialize";

const Research: React.FC<{ research: ResearchType }> = ({ research }) => {
  console.log(research);

  return <div />;
  /* const router = useRouter();
  if (router.isFallback || !research) {
    return <div>loading</div>;
  }
  return (
    <ResearchPost
      image={research.image}
      title={research.title}
      category={research.category}
      mdxSource={research.mdxSource}
      createdAt={research.createdAt}
    />
  ); */
};

export default Research;

export const getServerSideProps: GetServerSideProps<
  {
    research: ResearchType;
  },
  ResearchSSRParams
> = async ({ params }) => {
  let research: ResearchType = null;
  const { data, error, loading } = await client.query<{
    research: GQLResearchRes;
  }>({
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

  if (error) {
    throw new Error("Error in fetching blog posts");
  }
  if (data) {
    const mdxSource = await serialize(data.research.content);
    research = {
      title: data.research.title,
      category: data.research.category,
      mdxSource,
      createdAt: data.research.createdAt,
      image: data.research.image,
    };
  }
  return {
    props: {
      research,
      error,
      loading,
    },
  };
};
