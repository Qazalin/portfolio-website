import { Flex, Center, Button, Text, Box } from "@chakra-ui/react";
import { heroAnimationVariant, primaryGradient } from "@qazalin/theme";
import { motion } from "framer-motion";

export const Hero = ({ title, subtitle, desc }) => (
  <Center flexDir="column" w="100%" h="100%">
    <Text variant="heading">{title}</Text>
    <Text
      variant="heading"
      bgGradient={primaryGradient}
      bgClip="text"
      fontWeight="bold"
    >
      {subtitle}
    </Text>
    <Text>{desc}</Text>
    <Flex mt="10px" justifyContent="end">
      <Button mr="10px" variant="primary">
        work
      </Button>
      <Button variant="primaryGhost">Skills</Button>
    </Flex>
  </Center>
);

Hero.defaultProps = {
  title: "I craft",
  subtitle: "products",
  desc: "Utilizing data to democratize access to next-generation technology",
};
