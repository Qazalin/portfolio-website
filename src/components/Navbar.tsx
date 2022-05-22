import { HStack, Link } from "@chakra-ui/react";
import { DarkModeSwitch } from "@qazalin/components";
import { motion } from "framer-motion";

export const Navbar = () => {
  const sections = ["work", "research", "contact"];
  return (
    <HStack w="100%" h="100%" spacing={10}>
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
  );
};
