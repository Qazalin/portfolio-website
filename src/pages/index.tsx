import { Box, Stack } from "@chakra-ui/react";
import { Hero, ResearchView, SkillsGrid } from "@qazalin/components";

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
        <SkillsGrid />
      </Box>
    </Stack>
  );
};

export default Index;
