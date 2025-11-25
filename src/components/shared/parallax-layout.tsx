"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ParallaxLayoutProps {
  children: ReactNode;
  backgroundImage?: string;
  className?: string;
}

export default function ParallaxLayout({
  children,
  backgroundImage = "/fond_ecran_haut.svg",
  className = "",
}: ParallaxLayoutProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: เมื่อ scroll ลง background จะเลื่อนช้ากว่า content
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.85, 0.7]);

  return (
    <div
      ref={containerRef}
      className={`bg-white relative min-h-screen overflow-x-hidden flex flex-col ${className}`}
    >
      {/* Parallax Background */}
      <div
        className="absolute inset-0 w-full h-full object-cover z-1
          transition-colors duration-300
          dark:opacity-90
          dark:mix-blend-multiply
          overflow-hidden
          will-change-transform
        "
      >
        <motion.img
          src={backgroundImage}
          alt="bg gradient"
          className="absolute inset-0 w-full h-full object-cover z-0 dark:grayscale-25"
          style={{
            y,
            opacity,
            scale: 1.05,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
        />
      </div>

      {/* Content on top */}
      <div className="relative z-10 pt-0 flex flex-col flex-1">{children}</div>
    </div>
  );
}

