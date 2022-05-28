import { client } from "@qazalin/gql";
import { gql } from "@apollo/client";
import { useRouter } from "next/router";
import {
  AllResearchRes,
  GQLResearchRes,
  ResearchSSRParams,
  ResearchType,
} from "@qazalin/types";
import { GetStaticPaths, GetStaticProps } from "next";
import { ResearchPost } from "@qazalin/components";
import { serialize } from "next-mdx-remote/serialize";
import { Spinner, Box } from "@chakra-ui/react";

const Research: React.FC<{ research: ResearchType }> = ({ research }) => {
  const router = useRouter();
  console.log(router.isFallback);
  if (router.isFallback) {
    return (
      <Box w="100%" h="100%" bg="red">
        <Spinner />
      </Box>
    );
  }
  return (
    <ResearchPost
      image={research.image}
      title={research.title}
      category={research.category}
      mdxSource={research.mdxSource}
      createdAt={research.createdAt}
    />
  );
};

export default Research;

export const getStaticProps: GetStaticProps<
  {
    research: ResearchType;
    componentNames: string[];
  },
  ResearchSSRParams
> = async ({ params }) => {
  // return at least null when no data was found after the query
  let research: ResearchType = null;
  let componentNames: string[] = null;

  // query gql
  const { data, error, loading } = await client.query<{
    research: GQLResearchRes;
  }>({
    query: gql`
      query getOneResearch($slug: String) {
        research(where: { slug: $slug }) {
          title
          category
          content
          createdAt
          image {
            url
          }
          chartProps
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
  if (!data) {
    return {
      notFound: true,
    };
  }

  // avoid rendering heavy components
  componentNames = [
    /<Another/.test(data.research.content) ? "Another" : null,
  ].filter(Boolean);
  const mdxSource = await serialize(data.research.content, {
    scope: { chartProps: data.research.chartProps }, // extract the chart props array
  });
  research = {
    title: data.research.title,
    category: data.research.category,
    mdxSource,
    createdAt: data.research.createdAt,
    image: data.research.image,
  };

  return {
    props: {
      research,
      componentNames,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const { data } = await client.query<AllResearchRes>({
    query: gql`
      {
        researchs {
          title
          slug
        }
      }
    `,
  });

  return {
    paths: data.researchs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: true,
  };
};
