import { Box, Center, Text } from "@chakra-ui/react";
import Image from "next/image";
const img =
  "https://images.unsplash.com/photo-1653076362668-a717e53fe8f9?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069";
export const BlogPost = () => {
  return (
    <Box w="100%" h="100%">
      <Box
        w="100%"
        h="40%"
        bg="bg2"
        position="absolute"
        top={0}
        left={0}
        right={0}
        m="auto"
        zIndex="base"
        maxW="1400px"
      >
        <Image src={img} layout="fill" objectFit="cover" />
      </Box>
      <Center flexDir="column" pos="relative" textAlign="center" mt="24px">
        <Text m="10px" variant="mono" opacity="0.5">
          Crypto research
        </Text>
        <Text maxW="650px" variant="h1">
          the economics of rollups
        </Text>
        <Text variant="mono" opacity="0.8" my="10px">
          September 28, 2018
        </Text>
      </Center>
    </Box>
  );
};
