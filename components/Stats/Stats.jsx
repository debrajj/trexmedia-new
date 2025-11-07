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
      value: "50", 
      suffix: "K+", 
      label: "Active Users", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      value: "99.9", 
      suffix: "%", 
      label: "Uptime", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      value: "1", 
      suffix: "Gbps", 
      label: "Max Speed", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      gradient: "from-purple-500 to-pink-500"
    },
    { 
      value: "24", 
      suffix: "/7", 
      label: "Support", 
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
      gradient: "from-green-500 to-emerald-500"
    },
  ];

  return (
    <Section className="py-20 relative overflow-hidden">
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
