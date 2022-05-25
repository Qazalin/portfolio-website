import {
  HStack,
  Avatar,
  SkeletonCircle,
  Text,
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
    <HStack>
      <LinkOverlay href={`https://nftgo.io/${slug}`}>
        <SkeletonCircle
          display={isImageLoading ? "initial" : "none"}
          size="10"
        />
        <Avatar
          size="10"
          display={isImageLoading ? "none" : "initial"}
          src={imageUrl}
          onLoad={() => setIsImageLoading(false)}
        />
        <Text>{name}</Text>
      </LinkOverlay>
    </HStack>
  );
};
