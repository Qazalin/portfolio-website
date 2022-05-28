export interface NFTGoCollectionRes extends Response {
  slug: string;
  name: string;
  logo: string;
}

export type NFTGoNFTAttribute = {
  type: string;
  value: string;
};
