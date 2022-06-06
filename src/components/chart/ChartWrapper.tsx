import { Image, Box, Text } from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { ChartProps, ChartWrapperProps } from "@qazalin/types";
import { MyLogo, NFTGoLogo } from "../logo";

export const ChartWrapper: React.FC<ChartWrapperProps> = ({
  title,
  children,
}) => {
  return (
    <Box p="10px" my="20px" minW="500px">
      <Text variant="h2" fontWeight="bold" textAlign="center">
        {title}
      </Text>
      {/* 

          <MyLogo
          opacity="0.5"
          props={{
pos: "absolute",
top: "50%",
right: "50%",
zIndex: 2,
transform: "translate(-42%, -50%)",
justifyContent: "center",
alignItems: "center",
}}
/>
*/}

      <ResponsiveContainer
        maxHeight={400}
        width="100%"
        height="100%"
        aspect={3}
      >
        {children}
      </ResponsiveContainer>
    </Box>
  );
};
