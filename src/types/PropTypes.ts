import { BoxProps } from "@chakra-ui/react";
import { HTMLMotionProps } from "framer-motion";

export type LayoutPropType = {
  children?: React.ReactNode;
};
export interface WavyTextProps extends BoxProps {
  text: string;
  delay?: number;
  shouldAnimate: boolean;
  duration?: number;
}

/**
 * Since next-mdx-remote does not support ts,
 * we need to cast all props as any
 * however, this can be changed later and
 * the changes will impact all components in
 * the components/mdx dir */
export type MDXCustomComponent = (props: any) => React.DOMElement;
