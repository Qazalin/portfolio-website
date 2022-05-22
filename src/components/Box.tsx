import { Box, Text } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const exampleVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const boxVariant = {
  visible: { opacity: 1, scale: 2 },
  hidden: { opacity: 0, scale: 0 },
};

export const TestBox = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) control.start("visible");
    else control.start("hidden");
  }, [control, inView]);
  return (
    <Box
      ref={ref}
      as={motion.div}
      variants={boxVariant}
      w="100%"
      h="300px"
      bg="primary"
      initial="hidden"
      animate={control}
    >
      <Text>hello</Text>
    </Box>
  );
};
