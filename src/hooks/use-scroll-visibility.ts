"use client";

import { useMotionValueEvent, useScroll } from "framer-motion";
import { RefObject, useState } from "react";

export function useScrollVisibility(
  containerRef: RefObject<HTMLElement>,
  threshold = 0.1
) {
  const { scrollYProgress } = useScroll({
    container: containerRef,
  });
  const [isVisible, setIsVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest < threshold);
  });

  return isVisible;
}

