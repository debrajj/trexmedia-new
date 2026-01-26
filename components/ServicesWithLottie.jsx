"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { ispServices } from "../constants";

const ServiceCard = ({ service, index }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [shouldPlay, setShouldPlay] = useState(false);
  const cardRef = useState(null);
  
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
  
  useEffect(() => {
    if (isInView) {
      // Delay animation to reduce CPU load
      const timer = setTimeout(() => setShouldPlay(true), 200);
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "100px" }}
      transition={{ duration: 0.2, delay: index * 0.03 }}
      onViewportEnter={() => setIsInView(true)}
      className="group relative cursor-target"
    >
      {/* Card */}
      <div className="relative bg-n-8/80 backdrop-blur-sm border border-n-6 rounded-2xl p-8 h-full transition-colors duration-200 group-hover:border-color-1/50">
        {/* Launching Soon Badge */}
        {service.comingSoon && (
          <div className="absolute top-3 right-3 z-20">
            <span className="inline-block bg-yellow-500 text-white pl-4 pr-2 py-1 rounded-md text-xs font-medium whitespace-nowrap shadow-sm">
              Launching Soon
            </span>
          </div>
        )}

        {/* Lottie Animation - Only load when in view and play once */}
        <div className="w-24 h-24 mx-auto mb-6">
          {isMounted && shouldPlay && (
            <DotLottieReact
              src={lottieUrls[service.id]}
              loop={false}
              autoplay={true}
              className="w-full h-full"
              speed={2}
              useFrameInterpolation={false}
              renderConfig={{
                devicePixelRatio: 1
              }}
            />
          )}
        </div>
        
        {/* Title */}
        <h3 className="h5 text-n-1 mb-3 text-center group-hover:text-color-1 transition-colors duration-200">
          {service.title}
        </h3>
        
        {/* Description */}
        <p className="body-2 text-n-3 text-center">
          {service.description}
        </p>
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
