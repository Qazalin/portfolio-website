export type Category = "analysis" | "crypto";

/** Interface for research preview in the index file */
export interface ResearchPreviewType {
  category: Category;
  createdAt: string;
  image: {
    url: string;
  };
  title: string;
  slug: string;
}

/** Interface for the full research */
export interface Research extends ResearchPreviewType {
  content: string; // The markdown content
}

export type AllResearchRes = {
  researchs: ResearchPreviewType[];
};

export type ResearchRes = {
  research: Research;
};

/* Required for quering a single research */
export type ResearchQueryVars = {
  slug: string;
};
