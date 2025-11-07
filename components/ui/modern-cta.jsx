"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const ModernCTA = ({ 
  title, 
  description, 
  primaryButton, 
  secondaryButton,
  className 
}) => {
  return (
    <section className={cn("relative py-20", className)}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-color-1/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl" />
          
          {/* Content */}
          <div className="relative bg-n-8/90 backdrop-blur-sm border border-n-6 rounded-3xl p-12 md:p-16 text-center overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-color-1/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
            
            {/* Text content */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="h2 text-n-1 mb-6 font-heading"
              >
                {title}
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="body-1 text-n-3 mb-10"
              >
                {description}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {primaryButton && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-color-1 to-purple-500 rounded-xl text-n-1 font-semibold hover:shadow-lg hover:shadow-color-1/50 transition-all duration-300"
                    onClick={primaryButton.onClick}
                  >
                    {primaryButton.text}
                  </motion.button>
                )}
                
                {secondaryButton && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-n-7 border border-n-6 rounded-xl text-n-1 font-semibold hover:bg-n-6 hover:border-color-1 transition-all duration-300"
                    onClick={secondaryButton.onClick}
                  >
                    {secondaryButton.text}
                  </motion.button>
                )}
              </motion.div>
            </div>

            {/* Animated grid background */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `linear-gradient(rgba(3, 191, 255, 0.1) 1px, transparent 1px),
                                 linear-gradient(90deg, rgba(3, 191, 255, 0.1) 1px, transparent 1px)`,
                backgroundSize: '50px 50px'
              }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
