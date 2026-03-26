"use client";
import { useEffect } from 'react';

const PerformanceOptimizer = () => {
  useEffect(() => {
    const isConstrainedDevice = () => {
      const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
      const slowConnection =
        connection &&
        (connection.effectiveType === 'slow-2g' ||
          connection.effectiveType === '2g');
      const lowMemory =
        typeof navigator.deviceMemory === 'number' && navigator.deviceMemory <= 2;
      const lowCores =
        typeof navigator.hardwareConcurrency === 'number' &&
        navigator.hardwareConcurrency <= 2;

      return slowConnection || lowMemory || lowCores;
    };

    if (!isConstrainedDevice()) return;

    document.documentElement.style.setProperty('--transition-duration', '0.15s');
    document.documentElement.classList.add('reduce-motion');

    return () => {
      document.documentElement.style.removeProperty('--transition-duration');
      document.documentElement.classList.remove('reduce-motion');
    };
  }, []);

  return null;
};

export default PerformanceOptimizer;
