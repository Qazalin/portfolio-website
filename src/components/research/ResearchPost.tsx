import { Box, Stack, Center, Text } from "@chakra-ui/react";
import { ResearchType } from "@qazalin/types";
import { formatDate } from "@qazalin/utils";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";

export const ResearchPost: React.FC<ResearchType> = ({
  image,
  title,
  category,
  mdxSource,
  createdAt,
}) => {
  return (
    <Stack w="100%" h="100%">
      <Box
        w="100%"
        h="40%"
        position="absolute"
        top={0}
        left={0}
        right={0}
        m="auto"
        zIndex="base"
        maxW="1400px"
      >
        <Image src={image.url} layout="fill" objectFit="cover" />
      </Box>
      <Center flexDir="column" pos="relative" textAlign="center" mt="24px">
        <Text m="10px" variant="mono" opacity="0.5">
          {category}
        </Text>
        <Text maxW="650px" variant="h1">
          {title}
        </Text>
        <Text variant="mono" opacity="0.8" my="10px">
          {formatDate(createdAt)}
        </Text>
      </Center>
      <Box w="100%" h="calc(100% - 40%)" position="absolute" bottom={0}>
        <MDXRemote {...mdxSource} />
      </Box>
    </Stack>
  );
};
