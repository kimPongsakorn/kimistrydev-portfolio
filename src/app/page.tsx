// src/app/page.tsx
"use client";

import { HeroSection } from "@/components/home";
import { FixedNav } from "@/components/shared/fixed-nav";
import Footer from "@/components/shared/footer";
import ParallaxLayout from "@/components/shared/parallax-layout";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import { useRef } from "react";

const Home = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollVisibility(scrollContainerRef);

  
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      {/* Fixed header */}
      <FixedNav isVisible={isVisible} />
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
