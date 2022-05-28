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
export type ChartType = "Pie" | "Line" | "Bar" | "Area" | "Scatter" | "Venn";
