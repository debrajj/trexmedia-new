'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Speedometer = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const stats = [
    { 
      value: '180+', 
      label: 'Active FTTH Users', 
      color: '#00D4FF',
      icon: (
        <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2L12 8M12 8C10.5 8 9 9 9 10.5V12M12 8C13.5 8 15 9 15 10.5V12" />
          <circle cx="12" cy="2" r="1" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12C9 13.5 7.5 15 6 15C4.5 15 3 13.5 3 12C3 10.5 4.5 9 6 9" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12C15 13.5 16.5 15 18 15C19.5 15 21 13.5 21 12C21 10.5 19.5 9 18 9" />
          <circle cx="6" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <circle cx="12" cy="20" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <circle cx="18" cy="18" r="2.5" stroke="currentColor" strokeWidth={1.5} fill="none" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 15.5L6 15.5M12 15L12 17.5M18 15.5L18 15.5" />
        </svg>
      )
    },
    { 
      value: '98.33%', 
      label: 'Uptime', 
      color: '#00FF88',
      icon: (
        <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <rect x="3" y="4" width="18" height="16" rx="2" strokeWidth={1.5} />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9h18M3 14h18" />
          <circle cx="6.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="6.5" cy="11.5" r="0.5" fill="currentColor" />
          <circle cx="8.5" cy="11.5" r="0.5" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 17l2 2 4-4" />
        </svg>
      )
    },
    { 
      value: '1Gbps', 
      label: 'Max Speed', 
      color: '#FF00FF',
      icon: (
        <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V12L16 14" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 8L17 10L19 10L17 13" fill="currentColor" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 4.5L8.5 6M16 4.5L15.5 6M4.5 8L6 8.5M4.5 16L6 15.5" />
        </svg>
      )
    },
    { 
      value: '24/7', 
      label: 'Support', 
      color: '#FFD700',
      icon: (
        <svg className="w-8 h-8 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2C6.5 2 2 6.5 2 12V16C2 17.1 2.9 18 4 18H6C7.1 18 8 17.1 8 16V13C8 11.9 7.1 11 6 11H4C4 6.5 7.5 3 12 3C16.5 3 20 6.5 20 11H18C16.9 11 16 11.9 16 13V16C16 17.1 16.9 18 18 18H20C21.1 18 22 17.1 22 16V12C22 6.5 17.5 2 12 2Z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 22C10.9 22 10 21.1 10 20H14C14 21.1 13.1 22 12 22Z" />
          <circle cx="12" cy="8" r="0.5" fill="currentColor" />
          <circle cx="15" cy="9" r="0.5" fill="currentColor" />
          <circle cx="9" cy="9" r="0.5" fill="currentColor" />
        </svg>
      )
    }
  ];

  // Speedometer needle angle (0-180 degrees, where 180 is max speed)
  const maxSpeed = 1000; // 1Gbps = 1000Mbps
  const currentSpeed = 1000;
  const needleAngle = (currentSpeed / maxSpeed) * 180;

  return (
    <div className="relative w-full max-w-4xl mx-auto py-12">
      {/* Speedometer Container */}
      <div className="relative flex items-center justify-center">
        {/* Main Speedometer Circle */}
        <div className="relative w-80 h-80 md:w-96 md:h-96">
          {/* Background Circle */}
          <svg className="w-full h-full" viewBox="0 0 200 200">
            {/* Outer Ring */}
            <circle
              cx="100"
              cy="100"
              r="90"
              fill="none"
              stroke="url(#gradient1)"
              strokeWidth="8"
              opacity="0.3"
            />
            
            {/* Speed Arc */}
            <motion.path
              d="M 20 100 A 80 80 0 0 1 180 100"
              fill="none"
              stroke="url(#speedGradient)"
              strokeWidth="12"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={mounted ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />

            {/* Speed Markers */}
            {[0, 250, 500, 750, 1000].map((speed, i) => {
              const angle = (i * 45 - 90) * (Math.PI / 180);
              const x1 = 100 + 70 * Math.cos(angle);
              const y1 = 100 + 70 * Math.sin(angle);
              const x2 = 100 + 80 * Math.cos(angle);
              const y2 = 100 + 80 * Math.sin(angle);
              
              return (
                <g key={speed}>
                  <line
                    x1={x1}
                    y1={y1}
                    x2={x2}
                    y2={y2}
                    stroke="#fff"
                    strokeWidth="2"
                    opacity="0.6"
                  />
                  <text
                    x={100 + 60 * Math.cos(angle)}
                    y={100 + 60 * Math.sin(angle)}
                    fill="#fff"
                    fontSize="8"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    opacity="0.8"
                  >
                    {speed}
                  </text>
                </g>
              );
            })}

            {/* Needle */}
            <motion.g
              initial={{ rotate: -90 }}
              animate={mounted ? { rotate: needleAngle - 90 } : { rotate: -90 }}
              transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
              style={{ transformOrigin: '100px 100px' }}
            >
              <line
                x1="100"
                y1="100"
                x2="100"
                y2="30"
                stroke="#FF00FF"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <circle cx="100" cy="100" r="6" fill="#FF00FF" />
            </motion.g>

            {/* Center Display */}
            <circle cx="100" cy="100" r="25" fill="rgba(0,0,0,0.5)" />
            
            {/* Gradients */}
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#FF00FF" />
              </linearGradient>
              <linearGradient id="speedGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FF88" />
                <stop offset="50%" stopColor="#00D4FF" />
                <stop offset="100%" stopColor="#FF00FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={mounted ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5, delay: 1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#FF00FF] to-[#00D4FF] bg-clip-text text-transparent">
                1Gbps
              </div>
              <div className="text-xs md:text-sm text-gray-400 mt-1">Max Speed</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={mounted ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
            className="relative group"
          >
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-4 text-center hover:border-gray-600 transition-all hover:scale-105 duration-300">
              {/* Icon */}
              <div className="flex justify-center items-center group-hover:scale-110 transition-transform duration-300" style={{ color: stat.color }}>
                {stat.icon}
              </div>
              
              <div
                className="text-2xl md:text-3xl font-bold mb-1"
                style={{ color: stat.color }}
              >
                {stat.value}
              </div>
              <div className="text-xs md:text-sm text-gray-400">{stat.label}</div>
              
              {/* Glow Effect */}
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity blur-xl"
                style={{ backgroundColor: stat.color }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Speedometer;
