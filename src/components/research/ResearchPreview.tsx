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
import { keyframes, css } from "@emotion/react";
import { CategoryCard } from "./CategoryCard";
import { formatDate } from "@qazalin/utils";

const fadeUpIn = keyframes`
    from {
    opacity: 0;
        transform: translateY(-10%);
    }

    to {
    opacity: 1;
        transform: none;
    }
`;

const goUp = keyframes`
    from {
        transform: none;
    }   
    to {
        transform: translateY(-4%);
    }
`;
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
      bg="bg2"
      p="20px"
      borderRadius="lg"
      border="2px solid"
      borderColor={"transparent"}
      _hover={{
        borderColor: "primary",
        transform: "translateY(-10px)",
        transition: "transform 310ms",
      }}
      // transition={"border transform 0.2s ease-in-out"}
      transition="transform 450ms"
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
