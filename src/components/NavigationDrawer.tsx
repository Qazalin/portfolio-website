import {
  Stack,
  useDisclosure,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Link,
} from "@chakra-ui/react";
import { primaryGradient } from "@qazalin/theme";
import { useRef } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

export const NavigationDrawer = ({ sections }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <IconButton
        ref={btnRef}
        aria-label="icon-menu"
        icon={<HiOutlineMenuAlt1 />}
        fontSize="2rem"
        bgGradient={primaryGradient}
        p="5px"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg="bg2">
          <DrawerCloseButton
            mt="10px"
            _focus={{ outline: "none" }}
            _hover={{ color: "text1", bg: "secondary" }}
          />
          <DrawerBody>
            <Stack mt="50px" textAlign="center">
              {sections.map((s, i) => (
                <Link variant="navbar" key={i} href={`/${s}`}>
                  {s}
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
