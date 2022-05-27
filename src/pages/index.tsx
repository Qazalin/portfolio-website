import { Box } from "@chakra-ui/react";
import useSWR from "swr";
import {
  Hero,
  NFTSearchBar,
  CollectionView,
  NFTCollections,
  NFTRarityView,
} from "@qazalin/components";
import { fetchNFTGoData } from "@qazalin/lib/fetcher";
import { NFTCollectionType } from "@qazalin/types";

const Index = () => {
  /*  const { data, error } = useSWR(
    "https://api.nftgo.dev/eth/v1/market/metrics",
    fetchNFTGoData
  );
  */
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
          //       "Content-Type": "application/json",
        },
      }
    );
    console.log("res");
    const data: NFTGoCollectionRes = await res.json();
    collections.push({
      imageUrl: data.logo,
      slug: data.slug,
      name: data.name,
    });
  }
  let data = null;
  try {
    const res = await fetch("https://api.nftgo.dev/eth/v1/market/metrics", {
      headers: {
        "X-API-KEY": process.env.NFTGO_API_KEY,
      },
    });
    data = await res.json();
  } catch (e: unknown) {
    console.log(e);
  }
  return {
    props: {
      collections,
      data,
    },
  };
  }
*/
