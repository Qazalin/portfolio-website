import { Grid, GridItem } from "@chakra-ui/react";
import { SkillCard } from "@qazalin/components";

export const SkillsGrid = () => {
  return (
    <Grid
      w="100%"
      h="100%"
      templateColumns={[
        "repeat(4, minmax(0, 1fr))",
        "repeat(8, minmax(0, 1fr))",
        "repeat(12, minmax(0, 1fr))",
      ]}
      gap={["1rem", "1.5rem"]}
    >
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
      <GridItem colSpan={4}>
        <SkillCard />
      </GridItem>
    </Grid>
  );
};
