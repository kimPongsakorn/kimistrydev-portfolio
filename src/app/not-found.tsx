"use client";

import ParallaxLayout from "@/components/shared/parallax-layout";
import { motion } from "framer-motion";
import Link from "next/link";

// Note: metadata export doesn't work with "use client", 
// but Next.js automatically adds <meta name="robots" content="noindex" /> for 404 pages

export default function NotFound() {
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl"
        >
          {/* 404 Number */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-[180px] md:text-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 leading-none">
              404
            </h1>
            <motion.div
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-8 -right-8 md:-top-12 md:-right-12 text-6xl md:text-8xl"
            >
              🔍
            </motion.div>
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-8 space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              ไม่พบหน้าที่คุณค้นหา
            </h2>
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300">
              ขออภัย หน้าที่คุณกำลังมองหาอาจถูกย้าย ลบ หรือไม่เคยมีอยู่จริง
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                กลับสู่หน้าหลัก
              </motion.button>
            </Link>
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border-2 border-gray-200 dark:border-gray-700"
              >
                ดูโปรเจค
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-16 flex justify-center gap-8 text-4xl md:text-5xl opacity-50">
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0 }}
            >
              💫
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              ✨
            </motion.span>
            <motion.span
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
            >
              🌟
            </motion.span>
          </div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
}

