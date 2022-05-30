import { Collapse, Box, Button, useDisclosure } from "@chakra-ui/react";
import { MDXCustomComponent } from "@qazalin/types";
import { IoCodeSlash } from "react-icons/io5";

/**
 * Collapsable technical specifications
 */
export const CollapseCode: MDXCustomComponent = (props) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button
        leftIcon={<IoCodeSlash />}
        my="20px"
        variant="secondary"
        onClick={onToggle}
      >
        {isOpen ? "Hide Code" : "Show Code"}
      </Button>
      <Collapse in={isOpen} animateOpacity>
        <Box p="40px" my="5" rounded="md" shadow="md" {...props}></Box>
      </Collapse>
    </>
  );
};
