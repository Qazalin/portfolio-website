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

const Index = ({ latestResearch }) => {
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

// At the bottom have:
// Trusted by ["NFTGo", "Braintrust"]

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

  return { props: { latestResearch } };
};
