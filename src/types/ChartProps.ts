import { VennDiagramData } from "reaviz";
import { NFTGoNFTAttribute } from "@qazalin/types";

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

export interface PieChartProps {
  data: Record<string, string>[];
  dataKey: string;
  nameKey: string;
  colors: string[];
}
