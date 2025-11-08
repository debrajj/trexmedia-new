"use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { benefits } from "@/constants";

import PixelCard from "../ui/PixelCard";

const BenefitIcon = ({ type, id }) => {
  const gradientId = `benefit-gradient-${type}-${id}`;
  
  const icons = {
    // Lightning Fast
    lightning: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M35 8L20 36H32L29 56L48 28H36L35 8Z" fill={`url(#${gradientId})`} stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="35" cy="8" r="3" fill="#FFD700" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FFA500" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // 24/7 Support
    support: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="32" cy="32" r="20" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <path d="M32 12V16M32 48V52M52 32H48M16 32H12" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" />
          <circle cx="32" cy="28" r="8" stroke={`url(#${gradientId})`} strokeWidth="2" fill="none" />
          <path d="M26 42C26 42 28 38 32 38C36 38 38 42 38 42" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
          <circle cx="29" cy="27" r="1.5" fill="#03BFFF" />
          <circle cx="35" cy="27" r="1.5" fill="#03BFFF" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // Reliable Connection
    connection: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="16" cy="32" r="6" fill={`url(#${gradientId})`} />
          <circle cx="48" cy="32" r="6" fill={`url(#${gradientId})`} />
          <path d="M22 32H42" stroke={`url(#${gradientId})`} strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
          <circle cx="32" cy="32" r="3" fill="#03BFFF" />
          <path d="M16 20L16 44M48 20L48 44" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // Secure Network
    security: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="M32 8L16 16V28C16 40 24 50 32 56C40 50 48 40 48 28V16L32 8Z" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M32 8L16 16V28C16 40 24 50 32 56C40 50 48 40 48 28V16L32 8Z" fill={`url(#${gradientId})`} fillOpacity="0.2" />
          <path d="M26 30L30 34L38 26" stroke="#03BFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // Scalable Solutions
    scalable: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <rect x="12" y="36" width="10" height="16" rx="2" fill={`url(#${gradientId})`} className="animate-[pulse_2s_ease-in-out_infinite]" />
          <rect x="27" y="28" width="10" height="24" rx="2" fill={`url(#${gradientId})`} className="animate-[pulse_2s_ease-in-out_infinite_0.2s]" />
          <rect x="42" y="16" width="10" height="36" rx="2" fill={`url(#${gradientId})`} className="animate-[pulse_2s_ease-in-out_infinite_0.4s]" />
          <path d="M48 12L52 16L48 20" stroke="#03BFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="animate-bounce" />
        </g>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#03BFFF" />
            <stop offset="100%" stopColor="#8a5cff" />
          </linearGradient>
        </defs>
      </svg>
    ),
    // Smart Technology
    smart: (
      <svg className="w-full h-full" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="32" cy="32" r="16" stroke={`url(#${gradientId})`} strokeWidth="3" fill="none" />
          <circle cx="32" cy="32" r="8" fill={`url(#${gradientId})`} />
          <circle cx="32" cy="12" r="3" fill="#03BFFF" />
          <circle cx="52" cy="32" r="3" fill="#03BFFF" />
          <circle cx="32" cy="52" r="3" fill="#03BFFF" />
          <circle cx="12" cy="32" r="3" fill="#03BFFF" />
          <path d="M32 20V24M32 40V44M44 32H40M24 32H20" stroke={`url(#${gradientId})`} strokeWidth="2" strokeLinecap="round" />
        </g>
        <defs>
          <radialGradient id={gradientId}>
            <stop offset="0%" stopColor="#8a5cff" />
            <stop offset="100%" stopColor="#03BFFF" />
          </radialGradient>
        </defs>
      </svg>
    ),
  };

  return icons[type] || icons.lightning;
};

const Benefits = () => {
  const variants = ['blue', 'yellow', 'pink', 'default', 'blue', 'yellow'];
  const iconTypes = ['lightning', 'support', 'connection', 'security', 'scalable', 'smart'];

  return (
    <>
      <Section id="features">
        <div className="container relative z-2">
          <Heading
            className="md:text-center md:max-w-md lg:max-w-2xl"
            title="Chat Smarter, Not Harder with Trexx IT Pro"
          />
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
            {benefits.map((item, index) => (
              <PixelCard
                key={item.id}
                variant={variants[index]}
                className="bg-n-8 border border-n-6 hover:border-n-5 transition-colors group"
              >
                <div className="flex flex-col p-4 md:p-[2.4rem] h-full">
                  <div className="w-8 h-8 md:w-16 md:h-16 mb-3 md:mb-5 group-hover:scale-110 transition-transform duration-300">
                    <BenefitIcon type={iconTypes[index]} id={item.id} />
                  </div>
                  <h5 className="text-sm md:h5 mb-2 md:mb-5">{item.title}</h5>
                  <p className="text-xs md:body-2 text-n-3">{item.text}</p>
                </div>
              </PixelCard>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Benefits;
