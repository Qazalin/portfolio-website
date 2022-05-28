import { HStack, Box, BoxProps, Text, Flex } from "@chakra-ui/react";
import { FocusedVennPart, NFTGoNFTAttribute, RVennData } from "@qazalin/types";
import { VennDiagramData } from "reaviz";

type VennTooltipProps = {
  sx?: BoxProps;
  data: RVennData[];
  focusedPart: FocusedVennPart;
};

export const VennTooltip: React.FC<VennTooltipProps> = ({
  sx,
  data,
  focusedPart,
}) => {
  const focusedData = data.find((d) => d.key[0] === focusedPart.x);
  const intersectionData = data.find((d) => d.key.length === 2);
  console.log("data: ", data);
  return (
    <Box w="120px" h="50px" {...sx}>
      {focusedData
        ? focusedData.attrs.map((a, i) => (
            <AttributeView key={`att-${i}`} type={a.type} value={a.value} />
          ))
        : intersectionData.attrs.map((a, i) => (
            <AttributeView key={`att-${i}`} type={a.type} value={a.value} />
          ))}
    </Box>
  );
};

export const AttributeView: React.FC<NFTGoNFTAttribute> = ({ type, value }) => {
  return (
    <HStack maxW="10px:" textTransform="capitalize">
      <Text
        border="2px solid"
        borderColor="secondary"
        p="5px"
        borderRadius="md"
      >
        {type}:{" "}
      </Text>
      <Text bg="secondary" p="5px" borderRadius="md">
        {value}
      </Text>
    </HStack>
  );
};
