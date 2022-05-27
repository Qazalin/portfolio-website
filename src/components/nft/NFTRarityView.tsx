import {
  Input,
  Stack,
  Grid,
  GridItem,
  Text,
  Box,
  Image,
  Flex,
} from "@chakra-ui/react";
import { useState, KeyboardEvent } from "react";
import { RarityCard } from "@qazalin/components";

/**
 * Signle NFT rarity view
 * @param imagePos: optionally determine the position of the image "left" or "right"
 */
export const NFTRarityView: React.FC<{ imagePos?: "left" | "right" }> = ({
  imagePos,
}) => {
  const [tokenId, setTokenId] = useState<string>("");

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      if (document.activeElement instanceof HTMLElement) {
        document.activeElement.blur();
        console.log(tokenId); // call the api
      }
    }
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, minmax(0, 1fr))",
        "repeat(2, minmax(0, 1fr))",
      ]}
      gap={["1rem", "1.5rem"]}
      maxW="600px"
      minH="400px"
      bg="bg2"
      p="20px"
      borderRadius="md"
      shadow="lg"
    >
      {imagePos == "left" || !imagePos ? (
        <Image
          objectFit="contain"
          src="https://static.nftgo.io/asset/metadata/9df1a90be3e8a7ea1f525d4df565d3ca.png"
        />
      ) : null}
      <Stack>
        <Flex>
          <Text variant="h3" textAlign="center">
            Bored Ape Yacht Club
          </Text>
          <Input
            placeholder="Id"
            textAlign="center"
            type="number"
            // state
            value={tokenId}
            onChange={(e) => setTokenId(e.target.value)}
            onKeyDown={(e) => handleKeyDown(e)}
            // style
            mx="10px"
            maxW="70px"
            borderColor="secondary"
          />
        </Flex>
        {imagePos == "right" ? (
          <Image
            objectFit="contain"
            src="https://static.nftgo.io/asset/metadata/9df1a90be3e8a7ea1f525d4df565d3ca.png"
          />
        ) : null}
        <RarityCard />
      </Stack>
    </Grid>
  );
};
