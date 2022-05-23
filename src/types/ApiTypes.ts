export type Category = "analysis" | "crypto";

/** Interface for research preview in the index file */
export interface ResearchPreview {
  category: Category;
  publishedAt: string;
  image: {
    url: string;
  };
  title: string;
}

/** Interface for the full research */
export interface Research extends ResearchPreview {
  content: string; // The markdown content
}
