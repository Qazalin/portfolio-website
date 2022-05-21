import { Center, Flex, Image, Box, Text } from "@chakra-ui/react";
import { LayoutPropType } from "@qazalin/types";
import { Navbar } from "@qazalin/components";

/**
 * The primary layout used in the _app.tsx page
 */
export const Layout: React.FC<LayoutPropType> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh" p="40px">
      <Center w="100%" h="100px" justifyContent="flex-start">
        <Navbar />
      </Center>
      <Box mt="10px" w="100%" h="85%">
        {children}
      </Box>
    </Box>
  );
};
