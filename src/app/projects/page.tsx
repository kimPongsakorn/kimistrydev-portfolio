"use client";

import Footer from "@/components/shared/footer";
import HeadNavigation from "@/components/shared/head_navi";
import ParallaxLayout from "@/components/shared/parallax-layout";
import { Card, CardContent } from "@/components/ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsPage() {
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <div className="fixed top-0 left-0 right-0 w-full z-20 p-4">
        <HeadNavigation />
      </div>
      <main className="pt-32 px-4 pb-20 flex-1">
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
      </main>
      <Footer />
    </ParallaxLayout>
  );
}
function useWindowSize(): { width: any; height: any } {
  throw new Error("Function not implemented.");
}
