import { Center, Image as ChakraImage, Text } from "@chakra-ui/react";
import { ResearchPreviewProps } from "@qazalin/types";
import { motion } from "framer-motion";
import { CategoryCard } from "./CategoryCard";
import { formatDate } from "@qazalin/utils";
import { fadeUpIn } from "@qazalin/theme";

export const ResearchPreview: React.FC<ResearchPreviewProps> = ({
  category,
  title,
  imageUrl,
  createdAt,
}) => {
  return (
    <Center
      as={motion.div}
      variants={fadeUpIn}
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={{ scale: 1.05 }}
      flexDir="column"
      p="20px"
      bg="bg3"
      w="400px"
      h="500px"
      borderRadius="lg"
      _hover={{
        borderColor: "primary",
        borderWidth: "2px",
        boxShadow: "2px",
      }}
    >
      <ChakraImage
        src={imageUrl}
        w="100%"
        h="70%"
        borderRadius="lg"
        objectFit="cover"
      />
      <Text fontWeight="bold" variant="h2">
        {title}
      </Text>
      <Text variant="h4" mb="10px" color="text2">
        {formatDate(createdAt)}
      </Text>
      <CategoryCard category={category} />
    </Center>
  );
};
