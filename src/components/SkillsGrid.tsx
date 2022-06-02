import { Grid, Button, GridItem } from "@chakra-ui/react";
import { SkillCard } from "@qazalin/components";
import { IoIosArrowDropup, IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
import { SkillType } from "@qazalin/types";

export const SkillsGrid: React.FC<{ skills: SkillType[] }> = ({ skills }) => {
  // if the user clicks on "show more", the grid should expand and show more info
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
      {skills.map((s, i) => (
        <GridItem
          key={`skill-${i}`}
          rowSpan={1}
          colSpan={4}
          bg="bg2"
          borderRadius="md"
        >
          <SkillCard {...s} />
        </GridItem>
      ))}
    </Grid>
  );
};
