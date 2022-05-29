import { Flex, HStack, Link, LinkBox } from "@chakra-ui/react";
import { MyLogo, DarkModeSwitch } from "@qazalin/components";
import { motion } from "framer-motion";

export const Navbar = () => {
  const sections = ["work", "research", "contact"];
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
        {sections.map((s, i) => (
          <Link
            as={motion.a}
            whileHover={{ scale: 1.2 }}
            variant="navbar"
            key={i}
            href={`/${s}`}
          >
            {s}
          </Link>
        ))}
        <DarkModeSwitch />
      </HStack>
    </Flex>
  );
};
