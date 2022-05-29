import { Box } from "@chakra-ui/react";
import { InlineWidget } from "react-calendly";

export const Calendly = () => {
  return (
    <Box w="100%" h="100%">
      <InlineWidget
        url="https://calendly.com/qazal-sn/30min"
        styles={{
          width: "100%",
          height: "100%",
        }}
      />
    </Box>
  );
};
