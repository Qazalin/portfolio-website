import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { ParsedUrlQuery } from "querystring";
export type Category = "analysis" | "crypto";

/** Interface for research preview in the index file */
export interface ResearchPreviewType {
  category: Category;
  createdAt: string;
  image: {
    url: string;
  };
  title: string;
  slug?: string;
}

/** Interface for the full research used in the UI with serialized content for MDX */
export interface ResearchType extends ResearchPreviewType {
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>>; // The markdown content
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
