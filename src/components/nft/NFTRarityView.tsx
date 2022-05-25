import { Code, Grid, GridItem, Text, Box, Image } from "@chakra-ui/react";

export const NFTRarityView = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, minmax(0, 1fr))",
        "repeat(2, minmax(0, 1fr))",
      ]}
      gap={["1rem", "1.5rem"]}
      w="100%"
      minH="400px"
      bg="bg2"
      p="20px"
    >
      <Image
        objectFit="contain"
        src="https://static.nftgo.io/asset/metadata/9df1a90be3e8a7ea1f525d4df565d3ca.png"
      />
      <Box ml="20px" w="100%">
        <Text variant="h2" maxW="100%">
          Bored Ape Yacht Club{" "}
          <Code m="auto" fontSize="xl">
            #2488
          </Code>
        </Text>
      </Box>
    </Grid>
  );
};
