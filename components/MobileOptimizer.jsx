"use client";
import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    // Detect mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (isMobile) {
      // Disable heavy animations on mobile
      document.documentElement.classList.add('mobile-optimized');
      
      // Reduce animation complexity
      const style = document.createElement('style');
      style.innerHTML = `
        .mobile-optimized * {
          animation-duration: 0.2s !important;
          transition-duration: 0.2s !important;
        }
        .mobile-optimized .pixel-canvas {
          display: none !important;
        }
        .mobile-optimized [class*="animate-"] {
          animation: none !important;
        }
      `;
      document.head.appendChild(style);
      
      // Prevent scroll blocking during navigation
      let isNavigating = false;
      const links = document.querySelectorAll('a[href^="/"]');
      
      links.forEach(link => {
        link.addEventListener('click', () => {
          if (!isNavigating) {
            isNavigating = true;
            document.body.style.pointerEvents = 'none';
            setTimeout(() => {
              document.body.style.pointerEvents = '';
              isNavigating = false;
            }, 1000);
          }
        });
      });
    }
  }, []);
  
  return null;
}
