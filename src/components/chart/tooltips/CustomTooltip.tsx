import { Box, Text } from "@chakra-ui/react";
import { TooltipProps } from "recharts";

export const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  payload,
  active,
}) => {
  if (active) {
    return (
      <Box
        bg="bg2"
        color="text2"
        p="12px"
        borderRadius={"md"}
        maxW="300px"
        w="100%"
      >
        <Text textTransform="capitalize">{`${payload[0].payload.name} : ${payload[0].value}`}</Text>
      </Box>
    );
  }
  return null;
};
