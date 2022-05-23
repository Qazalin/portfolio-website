import { Variants } from "framer-motion";

export const heroAnimationVariant: Variants = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
  hidden: { opacity: 0, scale: 0 },
};

const fadeTransition = {
  duration: 1,
  ease: [0.43, 0.13, 0.23, 0.96],
};

/* Used in the research section, smoothly shows the component come up */
export const fadeUpIn = {
  exit: { y: "50%", opacity: 0, transition: fadeTransition },
  enter: {
    y: "0%",
    opacity: 1,
    transition: fadeTransition,
  },
};
