"use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { ispServices } from "@/constants";
import Button from "../Button/Button";
import PixelCard from "../ui/PixelCard";

const ServiceIcon = ({ type, id }) => {
  const gradientId = `gradient-${type}-${id}`;
  
  const icons = {
    wifi: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-pulse">
          <path d="M32 48C33.1046 48 34 47.1046 34 46C34 44.8954 33.1046 44 32 44C30.8954 44 30 44.8954 30 46C30 47.1046 30.8954 48 32 48Z" fill={`url(#${gradientId})`} />
          <path d="M24 38C24 38 26 36 32 36C38 36 40 38 40 38" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" className="animate-[pulse_2s_ease-in-out_infinite]" />
          <path d="M18 30C18 30 22 26 32 26C42 26 46 30 46 30" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" className="animate-[pulse_2s_ease-in-out_infinite_0.2s]" />
          <path d="M12 22C12 22 18 16 32 16C46 16 52 22 52 22" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" className="animate-[pulse_2s_ease-in-out_infinite_0.4s]" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    camera: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="8" y="18" width="48" height="36" rx="4" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <circle cx="32" cy="36" r="10" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" className="animate-[spin_3s_linear_infinite]" />
          <circle cx="32" cy="36" r="6" fill={`url(#${gradientId})`} className="animate-pulse" />
          <rect x="20" y="10" width="24" height="8" rx="2" fill={`url(#${gradientId})`} />
          <circle cx="48" cy="24" r="2" fill="#03BFFF" className="animate-ping" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    cloud: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g className="animate-[float_3s_ease-in-out_infinite]">
          <path d="M48 32C48 28 45 24 40 24C40 18 36 14 30 14C24 14 20 18 20 24C15 24 12 28 12 32C12 36 15 40 20 40H48C52 40 56 36 56 32C56 28 52 24 48 24V32Z" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 40V48M28 44L32 48L36 44" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    server: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="12" y="12" width="40" height="12" rx="2" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <rect x="12" y="26" width="40" height="12" rx="2" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <rect x="12" y="40" width="40" height="12" rx="2" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <circle cx="18" cy="18" r="2" fill="#03BFFF" className="animate-pulse" />
          <circle cx="18" cy="32" r="2" fill="#03BFFF" className="animate-[pulse_2s_ease-in-out_infinite_0.2s]" />
          <circle cx="18" cy="46" r="2" fill="#03BFFF" className="animate-[pulse_2s_ease-in-out_infinite_0.4s]" />
          <line x1="26" y1="18" x2="46" y2="18" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="32" x2="46" y2="32" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
          <line x1="26" y1="46" x2="46" y2="46" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    code: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M20 24L12 32L20 40" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[-4px] transition-transform duration-300" />
          <path d="M44 24L52 32L44 40" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-[4px] transition-transform duration-300" />
          <path d="M36 16L28 48" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" className="animate-pulse" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    desktop: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="8" y="12" width="48" height="32" rx="2" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <rect x="12" y="16" width="40" height="24" fill={`url(#${gradientId})`} fillOpacity="0.2" className="animate-pulse" />
          <line x1="32" y1="44" x2="32" y2="50" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
          <line x1="20" y1="50" x2="44" y2="50" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="28" r="4" fill="#03BFFF" className="animate-ping" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
  };

  return icons[type] || icons.wifi;
};

const ServicesShowcase = () => {
  const variants = ['blue', 'yellow', 'pink', 'default', 'blue', 'yellow'];

  return (
    <Section id="services">
      <div className="container">
        <Heading
          tag="Our Services"
          text="Professional services designed to keep you connected and secure"
          className="[&_h2]:leading-tight [&_p]:leading-snug"
        />

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {ispServices.map((service, index) => (
            <PixelCard
              key={service.id}
              variant={variants[index]}
              className="bg-n-8 border border-n-6 hover:border-n-5 transition-colors group relative"
            >
              {/* Launching Soon Badge */}
              {service.comingSoon && (
                <div className="absolute top-2 right-2 z-20">
                  <span className="inline-block bg-yellow-500 text-white pl-3 pr-1.5 py-0.5 rounded text-xs font-medium whitespace-nowrap shadow-sm">
                    Launching Soon
                  </span>
                </div>
              )}
              
              <div className="relative p-4 md:p-8 h-full flex flex-col">
                <div className="w-12 h-12 md:w-20 md:h-20 mb-2 md:mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <ServiceIcon type={service.icon} id={service.id} />
                </div>
                <h3 className="text-sm md:h5 mb-2 md:mb-3 text-center">{service.title}</h3>
                <p className="text-xs md:body-2 text-n-3 text-center mb-4 flex-grow">{service.description}</p>
                
                {/* Action Button */}
                {service.buttonText && !service.comingSoon && (
                  <div className="flex justify-center mt-auto">
                    <Button 
                      href={service.buttonLink}
                      className="text-xs md:text-sm px-3 py-1.5 md:px-4 md:py-2"
                      white={service.isExternal}
                    >
                      {service.buttonText}
                    </Button>
                  </div>
                )}
              </div>
            </PixelCard>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button href="/services">View All Services</Button>
        </div>
      </div>
    </Section>
  );
};

export default ServicesShowcase;
