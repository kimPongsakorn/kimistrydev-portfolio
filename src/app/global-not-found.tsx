"use client";

import ParallaxLayout from "@/components/shared/parallax-layout";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import "../styles/globals.css";

export default function GlobalNotFound() {
  const handleGoHome = () => {
    window.location.href = "/";
  };

  return (
    <html lang="en">
      <body>
        <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
          <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <h1 className="text-xl md:text-6xl font-bold pb-12">
              404 - Page Not Found
            </h1>
            <p className="text-lg md:text-xl pb-12 font-light">
              This page does not exist.
            </p>
            <Button
              variant="outline"
              className="text-lg md:text-xl font-light text-gray-500 dark:text-gray-400 gap-3"
              onClick={handleGoHome}
            >
              <Home className="w-6 h-6" />
              กลับสู่หน้าหลัก
            </Button>
          </div>
        </ParallaxLayout>
      </body>
    </html>
  );
}
