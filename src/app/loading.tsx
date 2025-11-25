"use client";

import ParallaxLayout from "@/components/shared/parallax-layout";

export default function Loading() {
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <div className="flex items-center justify-center min-h-screen px-4">
        <h1 className="text-2xl sm:text-2xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Loading...
        </h1>
      </div>
    </ParallaxLayout>
  );
}

