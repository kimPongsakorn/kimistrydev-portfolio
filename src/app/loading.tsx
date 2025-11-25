"use client";

import ParallaxLayout from "@/components/shared/parallax-layout";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <ParallaxLayout backgroundImage="/fond_ecran_haut.svg">
      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          {/* Animated Logo/Icon */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border-8 border-t-purple-600 border-r-pink-500 border-b-orange-400 border-l-transparent"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute inset-4 rounded-full border-8 border-t-transparent border-r-purple-400 border-b-pink-400 border-l-orange-300"
              animate={{
                rotate: -360,
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </motion.div>

          {/* Loading Text */}
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 mb-4"
          >
            กำลังโหลด...
          </motion.h2>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2 mb-8">
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-3 h-3 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full"
                animate={{
                  y: [0, -15, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            กรุณารอสักครู่...
          </motion.p>

          {/* Floating Elements */}
          <div className="mt-12 relative h-20">
            <motion.div
              className="absolute left-1/4 text-4xl"
              animate={{
                y: [0, -20, 0],
                x: [-10, 10, -10],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              💎
            </motion.div>
            <motion.div
              className="absolute right-1/4 text-4xl"
              animate={{
                y: [0, -25, 0],
                x: [10, -10, 10],
                rotate: [0, -180, -360],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            >
              ✨
            </motion.div>
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 text-3xl"
              animate={{
                y: [0, -30, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            >
              🚀
            </motion.div>
          </div>

          {/* Progress Bar */}
          <motion.div
            className="max-w-xs mx-auto mt-8 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: "50%" }}
            />
          </motion.div>
        </motion.div>
      </div>
    </ParallaxLayout>
  );
}

