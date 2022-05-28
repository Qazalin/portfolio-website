import { Text, TextProps } from "@chakra-ui/react";
export const Another: React.FC<{
  index?: number;
  chartProps?: TextProps[];
}> = ({ index, chartProps }) => {
  return (
    <Text {...(chartProps ? { ...chartProps[index] } : null)}>Im another</Text>
  );
};
