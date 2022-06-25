import { Flex, Text, Box } from "@chakra-ui/react";
import { SoundWave } from "components";
import { MediaCard } from "components/media";

const Media = () => {
  return (
    <Box>
      <Flex>
        <Box w="90px" h="90px">
          <SoundWave />
        </Box>
        <Text variant="h1" m="auto" ml="10px">
          Media
        </Text>
      </Flex>
      <MediaCard />
    </Box>
  );
};

export default Media;
