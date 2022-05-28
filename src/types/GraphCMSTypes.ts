import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
import { ChartType } from "./ChartProps";
export type Category = "analysis" | "crypto";

/*--------------- GraphCMS ---------------*/
/** Interface for research preview in the index file */
export interface ResearchPreviewType {
  category: Category;
  createdAt: string;
  image: {
    url: string;
  };
  title: string;
  slug?: string;
  chartProps?: any[]; // change this later and build an interface for charts
}

/** Interface for the full research used in the UI with serialized content for MDX */
export interface ResearchType extends ResearchPreviewType {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>; // The markdown content
  usedCharts: ChartType[];
}

export type AllResearchRes = {
  researchs: ResearchPreviewType[];
};

/* Required for quering a single research */
export type ResearchQueryVars = {
  slug: string;
};
export interface ResearchSSRParams extends ParsedUrlQuery {
  slug: string;
}
export interface GQLResearchRes extends ResearchPreviewType {
  content: string;
}
