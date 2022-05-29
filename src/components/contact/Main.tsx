import { Flex, Grid, GridItem, Box, Center, Text } from "@chakra-ui/react";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { Calendly, SocialIcon } from "@qazalin/components";
import { useWindowSize } from "@qazalin/hooks";

export const Main = () => {
  const windowSize = useWindowSize();

  return (
    <Grid
      templateColumns={[
        "repeat(1, minmax(0, 1fr))",
        "repeat(2, minmax(0, 1fr))",
      ]}
      w="100%"
      h="100%"
      m="auto"
      gap={5}
    >
      <GridItem
        textAlign="center"
        display="flex"
        justifyContent="center"
        alignItems="center"
        colSpan={1}
        flexDir="column"
      >
        <Text variant="h1">Let's team-up!</Text>
        <Text variant="h3">
          You can contact me via calendly {windowSize.width > 487 ? "👉🏻" : "👇🏻"}
        </Text>
        <Text mt="10px">I'm also on the following social platforms:</Text>
        <Flex>
          <SocialIcon
            icon={<AiOutlineTwitter />}
            ariaLabel="twitter-icon"
            link="twitter.com"
          />
          <SocialIcon
            icon={<AiFillLinkedin />}
            ariaLabel="linkedin-icon"
            link="twitter.com"
          />
          <SocialIcon
            icon={<AiFillGithub />}
            ariaLabel="github-icon"
            link="twitter.com"
          />
        </Flex>
      </GridItem>
      <GridItem colSpan={1}>
        <Calendly />
      </GridItem>
    </Grid>
  );
};
