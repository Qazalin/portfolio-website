import { Box, Progress, Image, Text } from "@chakra-ui/react";
import { SkillType } from "@qazalin/types";

export const SkillCard: React.FC<SkillType> = ({ svgImg, title, value }) => {
  return (
    <Box
      w="100%"
      h="100%"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      p="20px"
    >
      <Box
        display="flex"
        flexDir="column"
        justifyContent="space-between"
        alignItems="center"
        w="100%"
        h="100%"
      >
        {svgImg}
        <Text verticalAlign="bottom" variant="h3" mt="10px">
          {title}
        </Text>
      </Box>
      <Progress value={value} rounded="lg" colorScheme="blue" mt="10px" />
    </Box>
  );
};
