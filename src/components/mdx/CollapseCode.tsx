import { Collapse, Box, Button, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
/**
 * Collapsable technical specifications
 */
export const CollapseCode = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>View the code</Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          text
        </Box>
      </Collapse>
    </>
  );
};
