"use client";

import { FixedNav } from "@/components/shared/fixed-nav";
import Footer from "@/components/shared/footer";
import ParallaxLayout from "@/components/shared/parallax-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useScrollVisibility } from "@/hooks/use-scroll-visibility";
import { useRef } from "react";

export default function ProjectsPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isVisible = useScrollVisibility(scrollContainerRef);

  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <FixedNav isVisible={isVisible} />

      <div
        ref={scrollContainerRef}
        className="snap-y snap-mandatory overflow-y-scroll h-screen w-full"
      >
        <section className="snap-always snap-center w-full min-h-screen flex items-center justify-center ">
          <div className="max-w-7xl mx-auto w-full px-4">
            <div className="flex justify-start items-start max-w-7xl mx-auto">
              <div className="text-left mb-12">
                <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  ผลงานของฉัน
                </h1>
                <p className="text-lg sm:text-lg text-gray-600 dark:text-gray-400">
                  โปรเจคที่ผมได้พัฒนาและมีส่วนร่วม
                </p>
              </div>
            </div>
            <Carousel className="w-full max-w-xs">
              <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <span className="text-4xl font-semibold">
                            {index + 1}
                          </span>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
            <div className="w-full max-w-7xl mx-auto">
              {/* ใช้ Tailwind responsive classes */}
              <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12">
                {/* content */}
              </div>
            </div>
          </div>
        </section>
        <section className="snap-always snap-start w-full">
          <Footer />
        </section>
      </div>
    </ParallaxLayout>
  );
}
function useWindowSize(): { width: any; height: any } {
  throw new Error("Function not implemented.");
}
