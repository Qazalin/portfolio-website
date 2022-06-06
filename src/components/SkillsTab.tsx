import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import {
  Hero,
  ResearchView,
  SkillsGrid,
  SolidityLogo,
  NextJsLogo,
  PythonLogo,
  GQLLogo,
  CSSLogo,
  TSLogo,
  ChakraLogo,
  ReactLogo,
} from "@qazalin/components";
import { SkillType } from "@qazalin/types";

const langs: SkillType[] = [
  { title: "TypeScript", svgImg: <TSLogo />, value: 95 },
  { title: "Python", svgImg: <PythonLogo />, value: 90 },
  { title: "GraphQl", svgImg: <GQLLogo />, value: 85 },
  { title: "CSS", svgImg: <CSSLogo />, value: 80 },
  { title: "Solidity", svgImg: <SolidityLogo />, value: 70 },
];
const libs: SkillType[] = [
  { title: "NextJs", svgImg: <NextJsLogo />, value: 90 },
  { title: "Chakra UI", svgImg: <ChakraLogo />, value: 95 },
  { title: "React", svgImg: <ReactLogo />, value: 80 },
];
export const SkillsTab = () => {
  return (
    <>
      <Tabs>
        <TabList>
          <Tab
            _focus={{ outline: "none" }}
            _hover={{ bg: "bg3" }}
            borderTopRadius="10px"
          >
            Languages
          </Tab>
          <Tab
            borderTopRadius="10px"
            _focus={{ outline: "none" }}
            _hover={{ bg: "bg3" }}
          >
            Frame Works and Libraries
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <SkillsGrid skills={langs} />
          </TabPanel>
          <TabPanel>
            <SkillsGrid skills={libs} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  );
};
