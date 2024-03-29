import { motion, Variants, HTMLMotionProps } from "framer-motion";
import { WavyTextProps } from "@qazalin/types";
import { Box } from "@chakra-ui/react";

/**
 * Renders a wave-like animation of a text
 * https://dev.to/harshhhdev/create-a-satisfying-wavy-text-animation-with-framer-motion-3hb5 with modifications
 */
const WavyText: React.FC<WavyTextProps> = ({
  text,
  delay = 0,
  duration = 0.05,
  shouldAnimate,
  ...props
}) => {
  const letters = Array.from(text);

  const container: Variants = {
    hidden: {
      opacity: 0,
    },
    visible: (i: number = 1) => ({
      opacity: 1,
      transition: { staggerChildren: duration, delayChildren: i * delay },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <Box
      display="flex"
      overflow="hidden"
      variants={container}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      {...props}
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </Box>
  );
};

export default WavyText;
