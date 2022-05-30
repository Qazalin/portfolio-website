import { Box } from "@chakra-ui/react";
import useSWR from "swr";
import {
  Hero,
  NFTSearchBar,
  CollectionView,
  NFTCollections,
  NFTRarityView,
  RPie,
  RVenn,
  CollapseCode,
  RBar,
} from "@qazalin/components";
import { fetchNFTGoData } from "@qazalin/lib/fetcher";
import { NFTCollectionType, NFTGoCollectionRes } from "@qazalin/types";
import { AttributeView } from "@qazalin/components/chart/tooltips";

const Index = () => {
  /*  const { data, error } = useSWR(
    "https://api.nftgo.dev/eth/v1/market/metrics",
    fetchNFTGoData
  );
  */
  return (
    <Box>
      <Hero />
    </Box>
  );
};

export default Index;

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

/*
export async function getServerSideProps() {
  const contractAddress = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB";
  const allAttrs = [];
  const tokenIds = ["6089", "3100"];
  for (const tokenId of tokenIds) {
    const data = await fetchNFTGoData(
      `https://api.nftgo.dev/eth/v1/nft/${contractAddress}/${tokenId}/info`
    );
    allAttrs.push(data);
  }

  return {
    props: {
      data: allAttrs,
    },
  };
  }
  */
