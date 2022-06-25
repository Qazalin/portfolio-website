import { Grid, GridItem, Center, Button, Text, Box } from "@chakra-ui/react";
import { heroAnimationVariant, primaryGradient } from "@qazalin/theme";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = ({ title, subtitle }) => (
  <Grid
    w="100%"
    h="100%"
    templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
  >
    <GridItem
      flexDir="column"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text variant="heading">{title}</Text>
      <Text
        variant="heading"
        bgGradient={primaryGradient}
        bgClip="text"
        fontWeight="bold"
      >
        {subtitle}
      </Text>
    </GridItem>
    <GridItem display="flex" alignItems="center" justifyContent="center">
      <Image
        src="/main.png"
        width={511}
        height={511}
        style={{
          borderRadius: "10px",
        }}
      />
    </GridItem>
  </Grid>
);

Hero.defaultProps = {
  title: "Shaping the future with",
  subtitle: "products",
};
