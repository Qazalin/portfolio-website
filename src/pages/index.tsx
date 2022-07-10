import { HStack, Box, Stack, Text } from "@chakra-ui/react";
import { AllResearchRes } from "@qazalin/types";
import { gql } from "@apollo/client";
import { client } from "@qazalin/gql";
import { GetStaticProps } from "next";
import {
  Hero,
  ResearchView,
  BraintrustLogo,
  NFTGoLogo,
  SkillsTab,
} from "@qazalin/components";
import { useRouter } from "next/router";

const Index = ({ latestResearch, me }) => {
  console.log(me);
  const router = useRouter();
  return (
    <Stack w="100%" spacing="50px">
      <Box w="100%">
        <Hero />
      </Box>
      <Box w="100%" py="10px">
        <ResearchView {...latestResearch.researchs[0]} />
      </Box>
      <Box w="100%">
        <SkillsTab />
      </Box>
      <Box mb="20px" textAlign="center">
        <Text variant="h1" mb="10px">
          Trusted By
        </Text>
        <HStack spacing={4} alignItems="center" justifyContent="center">
          <NFTGoLogo />
          <BraintrustLogo />
        </HStack>
      </Box>
    </Stack>
  );
};

export default Index;

export const getStaticProps: GetStaticProps = async () => {
  const { data: latestResearch } = await client.query<AllResearchRes>({
    query: gql`
      {
        researchs(last: 1) {
          title
          image {
            url
          }
          slug
          category
          createdAt
          slug
        }
      }
    `,
  });

  const res = await fetch(
    `https://api.twitter.com/2/users/${process.env.NEXT_PUBLIC_TWITTER_ID}/tweets?tweet.fields=attachments,created_at&media.fields=preview_image_url,url&expansions=attachments.media_keys`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`,
      },
    }
  );
  const me = await res.json();

  return { props: { latestResearch, me } };
};
