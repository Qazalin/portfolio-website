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
