import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

export function RouteTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.32, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
