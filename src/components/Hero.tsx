import { Grid, GridItem, Center, Button, Text, Box } from "@chakra-ui/react";
import { heroAnimationVariant, primaryGradientCss } from "@qazalin/theme";
import { motion } from "framer-motion";
import Image from "next/image";

export const Hero = () => (
  <Grid
    w="100%"
    h="100%"
    templateColumns={{ sm: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
  >
    <GridItem display="flex" alignItems="center">
      <Text variant="heading">Shaping the future with products</Text>
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
