import { Grid, GridItem, Box, Center, Text } from "@chakra-ui/react";

export const Main = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(1, minmax(0, 1fr))",
        "repeat(2, minmax(0, 1fr))",
      ]}
      w="100%"
      h="100%"
      m="auto"
      gap={5}
    >
      <GridItem
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        colSpan={1}
        flexDir="column"
      >
        <Text variant="h1">Let's team-up!</Text>
      </GridItem>
      <GridItem colSpan={1}></GridItem>
    </Grid>
  );
};
