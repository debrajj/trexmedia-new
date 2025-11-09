"use client";
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Detect low-end devices and reduce animations
    const isLowEndDevice = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      
      return slowConnection || lowMemory || lowCores || isMobile;
    };

    const isLowEnd = isLowEndDevice();

    // Reduce animations for low-end devices
    if (isLowEnd) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
      
      // Add reduced motion class
      document.documentElement.classList.add('reduce-motion');
      
      // Disable Lottie autoplay
      const lottieElements = document.querySelectorAll('[data-testid="lottie"]');
      lottieElements.forEach(el => {
        if (el.pause) el.pause();
      });
    }

    // Pause animations when tab is not visible
    const handleVisibilityChange = () => {
      const lottieElements = document.querySelectorAll('[data-testid="lottie"]');
      
      if (document.hidden) {
        lottieElements.forEach(el => {
          if (el.pause) el.pause();
        });
      } else if (!isLowEnd) {
        lottieElements.forEach(el => {
          if (el.play) el.play();
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Throttle scroll events
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;