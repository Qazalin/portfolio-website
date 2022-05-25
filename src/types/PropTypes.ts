import { BoxProps } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";
import { Category } from "./ApiTypes";

// * Layout * //
export type LayoutPropType = {
  children?: React.ReactNode;
};

// * Theme * //
export interface WavyTextProps extends BoxProps {
  text: string;
  delay?: number;
  shouldAnimate: boolean;
  duration?: number;
}

// * MDX * //
/**
 * Since next-mdx-remote does not support ts,
 * we need to cast all props as any
 * however, this can be changed later and
 * the changes will impact all components in
 * the components/mdx dir */
export type MDXCustomComponent = (props: any) => React.ReactElement;

// * Research * //
export type CategoryCardProps = {
  category: Category;
};

export interface ResearchPreviewProps extends CategoryCardProps {
  title: string;
  imageUrl: string;
  createdAt: string;
  slug: string;
}

/**
 * Information for viewing an NFT collections */
export interface NFTCollectionType {
  imageUrl: string;
  name: string;
  slug: string;
}
