import { Box, Text } from "@chakra-ui/react";
import { CategoryCardProps } from "@qazalin/types";

export const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Box bg="bg2" p="10px" maxW="100px" borderRadius="md">
      <Text
        variant="h4"
        textAlign="center"
        textTransform="capitalize"
        color="text2"
      >
        {category}
      </Text>
    </Box>
  );
};
