import { Image, Box, Text } from "@chakra-ui/react";
import { ChartProps } from "@qazalin/types";
import { ChartWrapper } from "./ChartWrapper";
import {
  Cell,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  Bar,
  Legend,
} from "recharts";

export const RBar: React.FC<ChartProps> = ({
  data,
  dataKey,
  nameKey,
  colors,
  title,
}) => {
  return (
    <ChartWrapper title={title}>
      <BarChart width={730} height={250} data={data}>
        <CartesianGrid opacity={0.5} vertical={false} />
        <XAxis dataKey={nameKey} />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} maxBarSize={70}>
          {data.map((_entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Bar>
      </BarChart>
    </ChartWrapper>
  );
};
