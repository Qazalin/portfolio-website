import {
  HStack,
  Image,
  Flex,
  Avatar,
  SkeletonCircle,
  Text,
  Box,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import { NFTCollectionType } from "@qazalin/types";
import { useEffect, useState } from "react";

export const CollectionView: React.FC<NFTCollectionType> = ({
  imageUrl,
  name,
  slug,
}) => {
  const [isImageLoading, setIsImageLoading] = useState(true);

  return (
    <LinkBox my="25px">
      <LinkOverlay
        href={`https://nftgo.io/collection/${slug}`}
        display="flex"
        target="_blank"
      >
        <SkeletonCircle
          display={isImageLoading ? "initial" : "none"}
          w="100px"
          h="100px"
        />
        <Image
          w="100px"
          h="100px"
          borderRadius="50%"
          display={isImageLoading ? "none" : "initial"}
          src={imageUrl}
          onLoad={() => setIsImageLoading(false)}
        />
        <Text m="auto" ml="15px">
          {name}
        </Text>
      </LinkOverlay>
    </LinkBox>
  );
};
