import { Grid, GridItem } from "@chakra-ui/react";
import { ResearchPreview } from "./research";
export const ProjectGrid = () => {
  return (
    <Grid
      templateColumns={[
        "repeat(4, minmax(0, 1fr))",
        "repeat(8, minmax(0, 1fr))",
      ]}
      templateRows={["repeat(12, minmax(0, 1fr))", "repeat(8, minmax(0, 1fr))"]}
      w="100%"
      h="100%"
      p="20px"
      gap="10px"
    >
      <GridItem colSpan={4} rowSpan={[4, 8]}>
        <ResearchPreview
          category={"analysis"}
          title="another"
          imageUrl="https://media.graphassets.com/iTex9021T6a4zdEDpeIb"
          createdAt={"2022-05-23T06:13:40.904727+00:00 "}
          slug="another"
        />
      </GridItem>
      <GridItem colSpan={4} rowSpan={4} bg="bg3"></GridItem>
      <GridItem colSpan={4} rowSpan={4} bg="bg3" />
    </Grid>
  );
};
