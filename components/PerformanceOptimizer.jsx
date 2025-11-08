"use client";
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Detect low-end devices and reduce animations
    const isLowEndDevice = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g');
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 4;
      const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 4;
      
      return slowConnection || lowMemory || lowCores;
    };

    // Reduce animations for low-end devices
    if (isLowEndDevice()) {
      document.documentElement.style.setProperty('--animation-duration', '0.1s');
      document.documentElement.style.setProperty('--transition-duration', '0.1s');
      
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
      } else {
        lottieElements.forEach(el => {
          if (el.play && !isLowEndDevice()) el.play();
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;