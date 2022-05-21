import { Flex, Text, Box } from "@chakra-ui/react";

export const Hero = ({ title }: { title: string }) => (
  <Box>
    <Text variant="heading">{title}</Text>
  </Box>
);

Hero.defaultProps = {
  title: "I craft products",
};
