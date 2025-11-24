"use client";

import Footer from "@/components/shared/footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeadNavigation from "../components/shared/head_navi";
import styles from "../styles/Home.module.css";

const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Parallax effect: เมื่อ scroll ลง background จะเลื่อนช้ากว่า content
  // ใช้ clamp เพื่อจำกัดค่าและทำให้ smooth ขึ้น
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);

  // Optional: เพิ่ม opacity effect เมื่อ scroll (ลด complexity)
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.85, 0.7]);

  return (
    <div
      ref={containerRef}
      className={`${styles.container} bg-white relative min-h-screen overflow-x-hidden`}
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
          src="/fond_ecran_haut.svg"
          alt="bg gradient"
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{
            y,
            opacity,
            scale: 1.05, // ลด scale เพื่อลดการ render
            willChange: "transform", // GPU acceleration
            transform: "translateZ(0)", // Force GPU layer
          }}
        />
      </div>
      {/* Content on top */}
      <div className="relative z-10 pt-0">
        <div className="fixed top-0 left-0 right-0 w-full z-20 p-4">
          <HeadNavigation />
        </div>
        <main className={styles.main}>
          {/* เพิ่ม content เพื่อให้ scroll ได้ */}
          <div className="min-h-[200vh] pt-32 px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-8"
              >
                <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Welcome to KimisryDev
                </h1>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Scroll down to see the parallax effect
                </p>
              </motion.div>

              {/* Content sections เพื่อให้ scroll ได้ */}
              {[1, 2, 3, 4, 6, 7, 8, 9, 10].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-lg p-8 mb-8 shadow-lg"
                >
                  <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
                    Section {item}
                  </h2>
                  <p className="text-gray-700 dark:text-gray-300">
                    This is a sample content section. Scroll down to see the
                    parallax background effect. The background image moves
                    slower than the content, creating a depth effect.
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
