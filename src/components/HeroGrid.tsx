import { Grid, Image, GridItem, Center, Text, Box } from "@chakra-ui/react";
import { heroAnimationVariant, primaryGradient } from "@qazalin/theme";
import { motion } from "framer-motion";

export const Hero = ({ title, subtitle, desc }) => (
  <Grid
    templateColumns={["repeat(4, minmax(0, 1fr))", "repeat(8, minmax(0, 1fr))"]}
    w="100%"
    h="100%"
    textAlign="center"
  >
    <GridItem colSpan={4}>
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
    </GridItem>
    <GridItem display="flex" alignItems="center" colSpan={4}>
      <Image w="100%" maxH="500px" objectFit="contain" src="me.png" />
    </GridItem>
  </Grid>
);

Hero.defaultProps = {
  title: "I craft",
  subtitle: "products & research",
};
