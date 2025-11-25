// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/home";
import Footer from "@/components/shared/footer";
import ParallaxLayout from "@/components/shared/parallax-layout";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef, useState } from "react";
import HeadNavigation from "../components/shared/head_navi";

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
  });
  const [isVisible, setIsVisible] = useState(true);
  
  // ใช้ useMotionValueEvent เพื่อ trigger animation เมื่อ scroll เปลี่ยน
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setIsVisible(latest < 0.1);
  });
  
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      {/* Fixed header */}
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

      {/* Scroll snapping container (vertical) */}
      <div 
        ref={scrollContainerRef}
        className="snap-y snap-mandatory overflow-y-scroll h-screen w-full"
      >
        {/* Hero Section */}
        <section className="snap-always snap-center w-full min-h-screen flex items-center justify-center ">
          <div className="max-w-7xl mx-auto w-full px-4">
            <HeroSection />
          </div>
        </section>

        {/* About Section */}
        <section className="snap-always snap-center w-full min-h-screen flex items-center justify-center ">
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                เกี่ยวกับฉัน
              </h2>
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                ผมเป็น Flutter Developer ที่มีความหลงไหลในการพัฒนาแอปพลิเคชัน
                ที่มีคุณภาพและใช้งานได้จริง เนนการเขียนโค้ดที่สะอาด
                และมีประสิทธิภาพ
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="snap-always snap-center w-full min-h-screen flex items-center justify-center ">
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 shadow-lg">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                ทกษะของฉัน
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Flutter
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Dart
                  </p>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center">
                  <p className="text-gray-900 dark:text-white font-semibold">
                    Firebase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <section className="snap-always snap-start w-full">
          <Footer />
        </section>
      </div>
    </ParallaxLayout>
  );
};

export default Home;
