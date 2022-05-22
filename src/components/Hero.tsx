import { Center, Text, Box } from "@chakra-ui/react";
import { primaryGradient } from "@qazalin/theme";

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
  </Center>
);

Hero.defaultProps = {
  title: "I craft",
  subtitle: "products",
  desc: "Utilizing data to democratize access to next-generation technology",
};
