import type { Transition } from "framer-motion";

type FloatingResult = {
  animate: { y: number[]; rotate: number[]; scale: number[] };
  transition: Transition;
};

export function useFloating(delay = 0): FloatingResult {
  return {
    animate: {
      y: [0, -8, 0],
      rotate: [-3, 3, -3],
      scale: [1, 1.015, 1],
    },
    transition: {
      duration: 4.2,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    },
  };
}
