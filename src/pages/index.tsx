import { Box, Stack } from "@chakra-ui/react";
import { Hero, ResearchView, SkillsTab } from "@qazalin/components";

const Index = () => {
  return (
    <Stack w="100%" bg="bg1" spacing="50px">
      <Box w="100%">
        <Hero />
      </Box>
      <Box w="100%" h="50vh" py="10px">
        <ResearchView />
      </Box>
      <Box w="100%" h="50vh">
        <SkillsTab />
      </Box>
    </Stack>
  );
};

// frameworks and libs = ["NextJs", "React", "Apollo", "Chakra UI", "Foundry", "Hardhat", "EthersJs", "Pandas", "Plotly"]
// At the bottom have:
// Trusted by ["NFTGo", "Braintrust"]

export default Index;
