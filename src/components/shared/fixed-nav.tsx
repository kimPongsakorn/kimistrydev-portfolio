"use client";

import { motion } from "framer-motion";
import HeadNavigation from "./head_navi";

interface FixedNavProps {
  isVisible: boolean;
}

export function FixedNav({ isVisible }: FixedNavProps) {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -100,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 0.5,
      }}
      className="fixed top-0 left-0 right-0 w-full z-20 p-4"
    >
      <HeadNavigation />
    </motion.div>
  );
}