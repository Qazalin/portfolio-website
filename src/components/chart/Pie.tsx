import { Image, Box, Text } from "@chakra-ui/react";
import {
  PieChart,
  Pie,
  ResponsiveContainer,
  Tooltip,
  Cell,
  Legend,
} from "recharts";
import { CustomTooltip } from "./tooltips";
import { ChartWrapper } from "./ChartWrapper";
import { ChartProps } from "@qazalin/types";

export const RPie: React.FC<ChartProps> = ({
  data,
  dataKey,
  nameKey,
  colors,
  title,
}) => {
  return (
    <ChartWrapper title={title}>
      <PieChart width={400} height={400}>
        <Pie data={data} dataKey={dataKey} nameKey={nameKey} maxRadius={50}>
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </ChartWrapper>
  );
};
