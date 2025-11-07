"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroGeometric({
  badge = "New Release",
  title1 = "Build Better",
  title2 = "Products Faster",
  description = "Create stunning user experiences with our comprehensive design system and component library.",
  fullDescription,
  className,
}) {
  return (
    <div
      className={cn(
        "relative min-h-0 md:min-h-screen flex items-start justify-center overflow-hidden pt-20 md:pt-32",
        className
      )}
    >
      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-48 h-48 border border-purple-500/20"
          animate={{
            rotate: [0, -180, -360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-32 h-32 border border-pink-500/20 rotate-45"
          animate={{
            y: [0, -30, 0],
            rotate: [45, 225, 405],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/4 w-40 h-40 border border-cyan-500/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-2 md:px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-block mb-6"
        >
          <span className="inline-flex items-center px-2 md:px-4 py-1 md:py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 text-cyan-400 text-xs md:text-sm font-medium">
            {badge}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 font-heading"
        >
          <span className="block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {title1}
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {title2}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto px-2 md:px-8"
        >
          <span className="md:hidden">{description}</span>
          <span className="hidden md:block">{fullDescription || description}</span>
        </motion.p>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />
    </div>
  );
}
