import ParallaxLayout from "@/components/shared/parallax-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import "../styles/globals.css";

export default function GlobalNotFound() {
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
            <Link href="/">
              <Button
                variant="outline"
                className="text-lg md:text-xl font-light text-gray-500 dark:text-gray-400 "
              >
                <IoHomeOutline className="w-6 h-6" />
                กลับสู่หน้าหลัก
              </Button>
            </Link>
          </div>
        </ParallaxLayout>
      </body>
    </html>
  );
}
