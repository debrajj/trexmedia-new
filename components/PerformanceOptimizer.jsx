"use client";
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    // Aggressive device detection - treat ALL devices as needing optimization
    const isLowEndDevice = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection = connection && (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g' || connection.effectiveType === '3g');
      const lowMemory = navigator.deviceMemory && navigator.deviceMemory < 8;
      const lowCores = navigator.hardwareConcurrency && navigator.hardwareConcurrency < 8;
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const isWindows = /Windows/i.test(navigator.userAgent);
      
      // Treat most devices as low-end to prevent heating
      return slowConnection || lowMemory || lowCores || isMobile || isWindows;
    };

    const isLowEnd = isLowEndDevice();

    // Aggressive performance optimizations for low-end devices
    if (isLowEnd) {
      // Don't override --animation-duration as it affects scroll animations
      document.documentElement.style.setProperty('--transition-duration', '0.15s');
      
      // Add reduced motion class
      document.documentElement.classList.add('reduce-motion');
      
      // Disable all Lottie animations
      const disableLottie = () => {
        const lottieElements = document.querySelectorAll('[data-testid="lottie"]');
        lottieElements.forEach(el => {
          if (el.pause) el.pause();
          if (el.stop) el.stop();
        });
      };
      
      disableLottie();
      
      // Recheck after DOM updates
      setTimeout(disableLottie, 1000);
      setTimeout(disableLottie, 3000);
    }

    // Pause ALL animations when tab is not visible
    const handleVisibilityChange = () => {
      const lottieElements = document.querySelectorAll('[data-testid="lottie"]');
      
      if (document.hidden) {
        // Pause everything
        lottieElements.forEach(el => {
          if (el.pause) el.pause();
          if (el.stop) el.stop();
        });
        
        // Stop WebGL rendering
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
          canvas.style.display = 'none';
        });
      } else {
        // Resume only if not low-end
        if (!isLowEnd) {
          lottieElements.forEach(el => {
            if (el.play) el.play();
          });
        }
        
        const canvases = document.querySelectorAll('canvas');
        canvases.forEach(canvas => {
          canvas.style.display = '';
        });
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Aggressive scroll throttling
    let scrollTimeout;
    const handleScroll = () => {
      if (scrollTimeout) return;
      scrollTimeout = setTimeout(() => {
        scrollTimeout = null;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Disable smooth scrolling on low-end devices
    if (isLowEnd) {
      document.documentElement.style.scrollBehavior = 'auto';
    }

    // Cleanup
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;