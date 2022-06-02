import { Image, HStack, Box, Stack, Center, Text } from "@chakra-ui/react";
import { ResearchType } from "@qazalin/types";
import { formatDate } from "@qazalin/utils";
import { RPie, RBar } from "@qazalin/components";
import { MDXRemote } from "next-mdx-remote";
import { CollapseCode, RH2, RH3, RImage, RText } from "../mdx";
import { RLink } from "../mdx/Link";
import { Test } from "../mdx/Test";
import { Another } from "../mdx/Another";

export const ResearchPost: React.FC<ResearchType> = ({
  image,
  title,
  category,
  mdxSource,
  createdAt,
  usedCharts,
}) => {
  const charts = Object.fromEntries(usedCharts.map((k) => [k, k]));
  console.log(charts);
  const defaultComponents = {
    p: RText,
    h2: RH2,
    h3: RH3,
    a: RLink,
    img: RImage,
    li: RText, // TODO: change this to a real list element
    code: CollapseCode,
  };
  const components = {
    ...defaultComponents,
    Another,
    Test,
    // save up on performance
    RPie: usedCharts.includes("RPie") ? RPie : null,
    RBar: usedCharts.includes("RBar") ? RBar : null,
  };
  // console.log(components);
  return (
    <Stack maxW="840px" m="auto" w="100%" h="100%">
      <Image
        src={image.url}
        objectFit="contain"
        top={0}
        left={0}
        right={0}
        pos="absolute"
        w="100%"
        maxW="480px"
        m="auto"
        zIndex="revert"
      />
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
      <Box w="100%" display="block" bottom={0}>
        <MDXRemote {...mdxSource} components={components} />
      </Box>
    </Stack>
  );
};
