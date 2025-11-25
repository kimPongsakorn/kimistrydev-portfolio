"use client";

import { menuList } from "@/config/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Logo from "./logo";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative overflow-hidden text-white w-full min-h-[260px] md:h-[260px]"
    >
      <img
        src="/fond_ecran_bas.svg"
        alt="bg gradient"
        className="pointer-events-none absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        style={{
          scale: 1.05,
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      />
      <div className="relative z-10 w-full h-full px-4 py-4 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <div className="flex items-center justify-center h-full">
            <Logo
              className="text-2xl"
              textClassName="text-gray-900 dark:text-gray-900"
            />
          </div>
          <div className="h-full flex flex-col items-start justify-center gap-2">
            <div className="text-gray-900 dark:text-gray-900 text-sm font-semibold mb-1">
              Menus
            </div>
            {menuList.map((menu) => (
              <Link
                key={menu.name}
                href={menu.href}
                className="text-gray-900 dark:text-gray-900 hover:opacity-70 transition-opacity text-sm"
              >
                {menu.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
