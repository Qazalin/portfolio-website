import { NFTCollectionType } from "@qazalin/types";
import { Box } from "@chakra-ui/react";
import { CollectionView } from ".";

export const CollectionSearchCard: React.FC<{
  collections: NFTCollectionType[];
}> = ({ collections }) => {
  return (
    <Box w="100%" h="100%" overflow="auto">
      {collections.map((c, i) => (
        <CollectionView key={`c-${i}`} {...c} />
      ))}
    </Box>
  );
};
