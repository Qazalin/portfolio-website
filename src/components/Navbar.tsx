import { Flex, HStack, Link, LinkBox } from "@chakra-ui/react";
import { MyLogo, DarkModeSwitch } from "@qazalin/components";
import { useWindowSize } from "@qazalin/hooks";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { NavigationDrawer } from "./NavigationDrawer";

export const Navbar = () => {
  const sections = ["code", "media", "research"];
  const { width } = useWindowSize();
  const router = useRouter();
  return (
    <Flex justifyContent="space-between">
      <Link href="/">
        <MyLogo
          props={{
            w: "150px",
            m: "auto",
            mr: "20px",
          }}
          svgFill="var(--chakra-colors-primary)"
        />
      </Link>
      <HStack w="100%" h="100%" spacing={10} zIndex="dropdown">
        {width > 700 ? (
          sections.map((s, i) => (
            <Link
              as={motion.a}
              whileHover={{ scale: router.route === `/${s}` ? 1 : 1.1 }}
              variant="navbar"
              key={i}
              href={`/${s}`}
              color={router.route === `/${s}` ? "primary" : "text1"}
            >
              {s}
            </Link>
          ))
        ) : (
          <NavigationDrawer sections={sections} />
        )}
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
};
