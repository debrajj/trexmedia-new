"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ispServices } from "@/constants";

const ServiceCard = ({ service, index }) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Local Lottie files
  const lottieUrls = {
    "0": "/lottie/wifi.json", // WiFi
    "1": "/lottie/camera.lottie", // Camera
    "2": "/lottie/cloud.json", // Cloud
    "3": "/lottie/server.json", // Server
    "4": "/lottie/code.json", // Code
    "5": "/lottie/desktop.json", // Desktop
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="group relative cursor-target"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-color-1/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Card */}
      <div className="relative bg-n-8/80 backdrop-blur-sm border border-n-6 rounded-2xl p-8 h-full transition-all duration-300 group-hover:border-color-1/50">
        {/* Launching Soon Badge */}
        {service.comingSoon && (
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-block bg-yellow-500 text-white pl-4 pr-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-sm">
              Launching Soon
            </span>
          </div>
        )}

        {/* Lottie Animation */}
        <div className="w-24 h-24 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
          {isMounted && (
            <DotLottieReact
              src={lottieUrls[service.id]}
              loop={false}
              autoplay={false}
              className="w-full h-full"
              useFrameInterpolation={false}
              renderConfig={{
                devicePixelRatio: 1
              }}
            />
          )}
        </div>
        
        {/* Title */}
        <h3 className="h5 text-n-1 mb-3 text-center group-hover:text-color-1 transition-colors duration-300">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="body-2 text-n-3 text-center">
          {service.description}
        </p>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-color-1/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  );
};

const ServicesWithLottie = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-2 bg-n-7 border border-n-6 rounded-full mb-4">
            <span className="tagline text-color-1">OUR SERVICES</span>
          </div>
          <h2 className="h2 text-n-1 mb-4">
            Complete Network Solutions
          </h2>
          <p className="body-1 text-n-3 max-w-3xl mx-auto">
            From high-speed internet to enterprise hosting, we provide comprehensive technology solutions for your business
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ispServices.map((service, index) => (
            <ServiceCard key={`${service.id}-v2`} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-color-1/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none" />
    </section>
  );
};

export default ServicesWithLottie;
