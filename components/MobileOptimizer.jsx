"use client";
import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    // Detect mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (!isMobile) return; // Only run on mobile
    
    console.log('Mobile Optimizer: Running on mobile device');
    
    // Disable heavy animations on mobile
    document.documentElement.classList.add('mobile-optimized');
    
    // Reduce animation complexity
    const style = document.createElement('style');
    style.innerHTML = `
      /* Disable pixel card animations */
      .mobile-optimized .pixel-canvas {
        display: none !important;
      }
      
      /* Speed up all animations */
      .mobile-optimized * {
        animation-duration: 0.1s !important;
        transition-duration: 0.1s !important;
      }
      
      /* Disable specific heavy animations */
      .mobile-optimized [class*="animate-pulse"],
      .mobile-optimized [class*="animate-spin"],
      .mobile-optimized [class*="animate-bounce"],
      .mobile-optimized [class*="animate-ping"],
      .mobile-optimized [class*="animate-"] {
        animation: none !important;
      }
      
      /* Ensure scrolling always works */
      html, body {
        overflow-x: hidden !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior-y: contain !important;
      }
      
      /* Prevent any element from blocking scroll */
      * {
        touch-action: pan-y !important;
      }
      
      /* Disable framer-motion animations */
      [data-framer-component-type] {
        animation: none !important;
        transition: none !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force enable scrolling immediately
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    document.body.style.touchAction = 'pan-y';
    
    console.log('Mobile Optimizer: Scroll enabled');
    
  }, []);
  
  return null;
}
