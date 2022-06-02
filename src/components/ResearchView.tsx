import { Box, Text } from "@chakra-ui/react";
import { ResearchPreview } from "@qazalin/components";

export const ResearchView = () => {
  return (
    <Box
      w="100%"
      h="100%"
      maxH="400px"
      display="flex"
      flexDir="column"
      alignItems="center"
    >
      <Text variant="h1" mb="10px">
        Latest Research
      </Text>
      <ResearchPreview
        category={"analysis"}
        title="another"
        imageUrl="https://media.graphassets.com/iTex9021T6a4zdEDpeIb"
        createdAt={"2022-05-23T06:13:40.904727+00:00 "}
        slug="another"
      />
    </Box>
  );
};
