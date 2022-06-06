import { GridItem, Box, Grid } from "@chakra-ui/react";
import { ResearchPreviewType, ResearchType } from "@qazalin/types";
import { ResearchPreview } from "./ResearchPreview";
export const ResearchLayout: React.FC<{ posts: ResearchPreviewType[] }> = ({
  posts,
}) => {
  return (
    <Grid
      templateColumns={[
        "repeat(4, minmax(0, 1fr))",
        "repeat(8, minmax(0, 1fr))",
        "repeat(12, minmax(0, 1fr))",
      ]}
      gap={["1rem", "1.5rem"]}
      mt="40px"
    >
      {posts.map((r, i) => (
        <GridItem key={i} colSpan={4}>
          <ResearchPreview
            key={`r-${i}`}
            category={r.category}
            title={r.title}
            imageUrl={r.image.url}
            createdAt={r.createdAt}
            slug={r.slug}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
