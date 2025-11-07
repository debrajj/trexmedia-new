"use client";
import React, { useEffect } from 'react';

const LogoLoop = ({
  logos = [],
  speed = 120,
  direction = 'left',
  logoHeight = 48,
  gap = 40,
  pauseOnHover = false,
  scaleOnHover = false,
  fadeOut = false,
  fadeOutColor = '#ffffff',
  ariaLabel = 'Logo carousel',
  className = ''
}) => {
  const animationDuration = `${speed}s`;
  const animationDirection = direction === 'right' ? 'reverse' : 'normal';

  useEffect(() => {
    // Inject keyframes animation
    const style = document.createElement('style');
    style.textContent = `
      @keyframes logoScroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-50%);
        }
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  const logoStyle = {
    height: `${logoHeight}px`,
    marginRight: `${gap}px`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    transition: scaleOnHover ? 'transform 0.3s ease' : 'none',
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    animation: `logoScroll ${animationDuration} linear infinite`,
    animationDirection,
    animationPlayState: 'running',
  };

  const wrapperStyle = {
    overflow: 'hidden',
    position: 'relative',
    width: '100%',
    height: `${logoHeight + 20}px`,
    display: 'flex',
    alignItems: 'center',
  };

  if (fadeOut) {
    wrapperStyle.maskImage = `linear-gradient(to right, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`;
    wrapperStyle.WebkitMaskImage = `linear-gradient(to right, transparent, ${fadeOutColor} 10%, ${fadeOutColor} 90%, transparent)`;
  }

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <div 
      className={`logo-loop-wrapper ${className}`}
      style={wrapperStyle}
      aria-label={ariaLabel}
      onMouseEnter={(e) => {
        if (pauseOnHover) {
          const container = e.currentTarget.querySelector('.logo-loop-container');
          if (container) container.style.animationPlayState = 'paused';
        }
      }}
      onMouseLeave={(e) => {
        if (pauseOnHover) {
          const container = e.currentTarget.querySelector('.logo-loop-container');
          if (container) container.style.animationPlayState = 'running';
        }
      }}
    >
      <div 
        className="logo-loop-container"
        style={containerStyle}
      >
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            style={logoStyle}
            className={scaleOnHover ? 'hover:scale-110 transition-transform' : ''}
          >
            {logo.href ? (
              <a 
                href={logo.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center h-full w-24 bg-white/20 hover:bg-white/30 transition-colors duration-300 border border-n-6 rounded-xl"
                title={logo.title || logo.alt}
              >
                {logo.node ? (
                  <div className="text-2xl text-gray-600 hover:text-gray-800 transition-colors">
                    {logo.node}
                  </div>
                ) : (
                  <img 
                    src={logo.src} 
                    alt={logo.alt || logo.title} 
                    className="max-h-[70%] max-w-[90%] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                )}
              </a>
            ) : (
              <div className="flex items-center justify-center h-full w-24 bg-white/20 hover:bg-white/30 transition-colors duration-300 border border-n-6 rounded-xl">
                {logo.node ? (
                  <div className="text-2xl text-gray-600">
                    {logo.node}
                  </div>
                ) : (
                  <img 
                    src={logo.src} 
                    alt={logo.alt || logo.title} 
                    className="max-h-[70%] max-w-[90%] object-contain opacity-80 hover:opacity-100 transition-all duration-300"
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoLoop;