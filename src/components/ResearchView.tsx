import { Box, Text } from "@chakra-ui/react";
import { ResearchPreview } from "@qazalin/components";
import { ResearchPreviewType, ResearchType } from "@qazalin/types";

export const ResearchView: React.FC<ResearchPreviewType> = (props) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Text variant="h1" mb="10px">
        Latest Research
      </Text>
      <ResearchPreview
        category={props.category}
        title={props.title}
        imageUrl={props.image.url}
        createdAt={props.createdAt}
        slug={props.slug}
      />
    </Box>
  );
};
