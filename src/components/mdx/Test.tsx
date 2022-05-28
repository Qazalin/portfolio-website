import { Box, BoxProps } from "@chakra-ui/react";
export const Test: React.FC<{ index?: number; chartProps?: BoxProps[] }> = ({
  index,
  chartProps,
}) => {
  return (
    <Box
      w="140px"
      h="140px"
      {...(chartProps ? { ...chartProps[index] } : null)}
    />
  );
};
