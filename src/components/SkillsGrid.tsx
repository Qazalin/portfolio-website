import { Grid, Button, GridItem } from "@chakra-ui/react";
import { SkillCard } from "@qazalin/components";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";

export const SkillsGrid = () => {
  // if the user clicks on "show more", the grid should expand and show more info
  const [isExpand, setIsExpand] = useState(false);
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
      <GridItem
        rowSpan={isExpand ? 2 : 1}
        colSpan={4}
        bg="bg2"
        borderRadius="md"
      >
        <SkillCard />
        <Button
          variant="primaryGhost"
          rightIcon={isExpand ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
          onClick={() => setIsExpand(!isExpand)}
          w="120px"
        >
          {isExpand ? "Hide" : "Show more"}
        </Button>
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
