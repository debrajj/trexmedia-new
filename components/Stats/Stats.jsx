"use client";
import React, { useEffect, useRef, useState } from "react";
import Section from "../Section";

const CountUp = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime;
    const endValue = parseFloat(end);

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      setCount(Math.floor(progress * endValue));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const stats = [
    { 
      value: "180", 
      suffix: "+", 
      label: "Active FTTH Users", 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {/* Fiber optic cable with users */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L12 8M12 8C10.5 8 9 9 9 10.5V12M12 8C13.5 8 15 9 15 10.5V12" />
          <circle cx="12" cy="2" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12C9 13.5 7.5 15 6 15C4.5 15 3 13.5 3 12C3 10.5 4.5 9 6 9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12C15 13.5 16.5 15 18 15C19.5 15 21 13.5 21 12C21 10.5 19.5 9 18 9" />
          <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <circle cx="12" cy="20" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 15.5L6 15.5M12 15L12 17.5M18 15.5L18 15.5" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      value: "98.33", 
      suffix: "%", 
      label: "Uptime", 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {/* Server with checkmark and uptime indicator */}
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9h18M3 14h18" />
          <circle cx="6.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="11.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="11.5" r="0.5" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 17l2 2 4-4" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500"
    },
    { 
      value: "1", 
      suffix: "Gbps", 
      label: "Max Speed", 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {/* Speedometer/gauge with lightning */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V12L16 14" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 8L17 10L19 10L17 13" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4.5L8.5 6M16 4.5L15.5 6M4.5 8L6 8.5M4.5 16L6 15.5" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      value: "24", 
      suffix: "/7", 
      label: "Support", 
      icon: (
        <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          {/* Headset with 24/7 clock */}
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.5 2 2 6.5 2 12V16C2 17.1 2.9 18 4 18H6C7.1 18 8 17.1 8 16V13C8 11.9 7.1 11 6 11H4C4 6.5 7.5 3 12 3C16.5 3 20 6.5 20 11H18C16.9 11 16 11.9 16 13V16C16 17.1 16.9 18 18 18H20C21.1 18 22 17.1 22 16V12C22 6.5 17.5 2 12 2Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z" />
          <circle cx="12" cy="8" r="0.5" fill="currentColor" />
          <circle cx="15" cy="9" r="0.5" fill="currentColor" />
          <circle cx="9" cy="9" r="0.5" fill="currentColor" />
        </svg>
      ),
      gradient: "from-yellow-500 to-orange-500"
    },
  ];

  return (
    <Section className="py-4 pb-8 md:py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-0.5 rounded-2xl bg-gradient-to-br from-n-6 to-n-7 hover:from-color-1/50 hover:to-color-2/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-color-1/20"
              style={{ 
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                opacity: 0 
              }}
            >
              <div className="relative bg-n-8 rounded-[1rem] p-4 md:p-8 text-center h-full overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Icon with animation */}
                <div className="mb-2 md:mb-4 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 relative z-10 flex justify-center items-center text-n-1">
                  {React.cloneElement(stat.icon, { className: "w-6 h-6 md:w-12 md:h-12" })}
                </div>
                
                {/* Counter */}
                <div className={`text-xl md:text-4xl lg:text-5xl font-medium bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2 relative z-10`}>
                  <CountUp end={stat.value} duration={2000} suffix={stat.suffix} />
                </div>
                
                {/* Label */}
                <div className="text-xs md:text-sm text-n-3 font-semibold uppercase tracking-wider relative z-10">
                  {stat.label}
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-color-1/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-color-2/10 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Stats;
