import { Image, Box, Text } from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { PieTooltip } from "./tooltips";
import { PieChartProps } from "@qazalin/types";
import { MyLogo, NFTGoLogo } from "../logo";

const data01 = [
  {
    name: "Group A",
    value: 400,
  },
  {
    name: "Group B",
    value: 300,
  },
  {
    name: "Group C",
    value: 300,
  },
  {
    name: "Group D",
    value: 200,
  },
  {
    name: "Group E",
    value: 278,
  },
  {
    name: "Group F",
    value: 189,
  },
];
export const RPie: React.FC<PieChartProps> = ({
  data,
  dataKey,
  nameKey,
  colors,
}) => {
  return (
    <Box p="10px" my="20px" pos="relative">
      <Text variant="h2" fontWeight="bold" textAlign="center">
        Relative percentage of diamond hands
      </Text>
      <MyLogo
        pos="absolute"
        top="50%"
        right="50%"
        zIndex={2}
        transform="translate(-42%, -50%)"
        justifyContent="center"
        alignItems="center"
      />

      <ResponsiveContainer
        maxHeight={400}
        width="100%"
        height="100%"
        aspect={3}
      >
        <PieChart width={400} height={400}>
          <Pie data={data} dataKey={dataKey} nameKey={nameKey} maxRadius={50}>
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<PieTooltip />} />
          <Legend verticalAlign="bottom" height={36} />
        </PieChart>
      </ResponsiveContainer>
    </Box>
  );
};
