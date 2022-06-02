import {
  Flex,
  HStack,
  LinkOverlay,
  Box,
  Center,
  Image as ChakraImage,
  LinkBox,
  Text,
  AspectRatio,
} from "@chakra-ui/react";
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
  slug,
}) => {
  console.log(category, title, imageUrl, createdAt, slug);
  return (
    <LinkBox
      w="100%"
      pos="relative"
      h="100%"
      maxW="500px"
      bg="bg3"
      as={motion.div}
      variants={fadeUpIn}
      initial="exit"
      animate="enter"
      exit="exit"
      whileHover={{ scale: 1.05 }}
      p="20px"
      borderRadius="lg"
      _hover={{
        borderColor: "primary",
        borderWidth: "2px",
        boxShadow: "2px",
      }}
    >
      <LinkOverlay href={`/research/${slug}`} w="100%" h="100%">
        <ChakraImage
          src={imageUrl}
          borderRadius="lg"
          objectFit="cover"
          mb="20px"
        />
        <Box mb="30px">
          <Text fontWeight="bold" variant="h2">
            {title}
          </Text>
        </Box>
        <Box>
          <Text pos="absolute" bottom={2} variant="h4" mb="10px" color="text2">
            {formatDate(createdAt)}
          </Text>
        </Box>
      </LinkOverlay>
    </LinkBox>
  );
};
