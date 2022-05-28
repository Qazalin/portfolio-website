import { Box } from "@chakra-ui/react";
import { findObjectIntersection, getObjectIntersections } from "@qazalin/lib";
import { COLORS, ThemeColors } from "@qazalin/theme";
import {
  VennDiagram,
  VennArc,
  VennSeries,
  ChartTooltip,
  VennDiagramData,
} from "reaviz";
import { FocusedVennPart, NFTGoNFTAttribute, RVennData } from "@qazalin/types";
import { VennTooltip } from "./tooltips";

export const RVenn = () => {
  const a1 = [
    {
      type: "gender",
      value: "Alien",
    },
    {
      type: "accessory",
      value: "Headband",
    },
  ];
  const a2 = [
    {
      type: "gender",
      value: "Alien",
    },
    {
      type: "accessory",
      value: "Earring",
    },
    {
      type: "accessory",
      value: "Knitted Cap",
    },
  ];
  const k1 = "NFT 1";
  const k2 = "NFT 2";

  const intersection = getObjectIntersections(a1, a2);
  const rData: RVennData[] = [
    { key: [k1], data: a1.length, attrs: a1 },
    { key: [k2], data: a2.length, attrs: a2 },
    { key: [k1, k2], data: intersection.length, attrs: intersection },
  ];

  return (
    <Box w="100%" h="200px">
      <VennDiagram
        data={rData}
        series={
          <VennSeries
            arc={
              <VennArc
                strokeWidth={5}
                tooltip={
                  <ChartTooltip
                    content={(f: FocusedVennPart) => (
                      <VennTooltip data={rData} focusedPart={f} />
                    )}
                  />
                }
                fill={ThemeColors.semanticTokens.colors.primary.default}
              />
            }
          />
        }
      />
    </Box>
  );
};
