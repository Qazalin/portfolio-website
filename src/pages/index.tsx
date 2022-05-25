import {
  Link as ChakraLink,
  Text,
  Box,
  Code,
  List,
  ListIcon,
  ListItem,
} from "@chakra-ui/react";
import {
  Hero,
  NFTSearchBar,
  CollectionView,
  NFTCollections,
  NFTRarityView,
} from "@qazalin/components";
import { NFTCollectionType } from "@qazalin/types";

const Index = ({ collections }) => {
  console.log(collections);
  return (
    <Box>
      <Hero />
      <NFTRarityView />
    </Box>
  );
};

export default Index;

interface NFTGoCollectionRes extends Response {
  slug: string;
  name: string;
  logo: string;
}
/* 
export async function getServerSideProps() {
  const collections: NFTCollectionType[] = [];
  for (const [name, addr] of Object.entries(NFTCollections)) {
    const res = await fetch(
      `https://api.nftgo.dev/eth/v1/collection/${addr}/info`,
      {
        headers: {
          "X-API-KEY": process.env.NFTGO_API_KEY,
        },
      }
    );
    const data: NFTGoCollectionRes = await res.json();
    collections.push({
      imageUrl: data.logo,
      slug: data.slug,
      name: data.name,
    });
  }
  return {
    props: {
      collections,
    },
  };
}
*/
