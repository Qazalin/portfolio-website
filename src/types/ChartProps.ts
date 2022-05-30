import { VennDiagramData } from "reaviz";
import { NFTGoNFTAttribute } from "@qazalin/types";
import { ReactElement, JSXElementConstructor } from "react";

export interface RVennData extends VennDiagramData {
  attrs: NFTGoNFTAttribute[];
}

/**
 * The data used by the tooltip
 */
export type FocusedVennPart = { x: string; y: string };

/** All the supported charts */
export type ChartType =
  | "RPie"
  | "RLine"
  | "RBar"
  | "RArea"
  | "RScatter"
  | "RVenn";

export interface ChartProps {
  data: Record<string, string>[];
  dataKey: string;
  nameKey: string;
  colors: string[];
  title: string;
}
export interface ChartWrapperProps {
  title: string;
  children: ReactElement<any, string | JSXElementConstructor<any>>;
}
