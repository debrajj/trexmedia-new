"use client";
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileOptimizer() {
  const pathname = usePathname();
  
  useEffect(() => {
    // Detect mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || window.innerWidth < 768;
    
    if (!isMobile) return; // Only run on mobile
    
    console.log('Mobile Optimizer: Running on mobile device');
    
    // FORCE FULL PAGE RELOAD ON NAVIGATION (disable Next.js client-side routing)
    const handleClick = (e) => {
      const target = e.target.closest('a');
      if (target && target.href && target.href.startsWith(window.location.origin)) {
        // Check if it's an internal link
        const url = new URL(target.href);
        if (url.pathname !== window.location.pathname) {
          console.log('Forcing full page reload for:', url.pathname);
          // Let the browser handle it naturally (full page reload)
          // Don't prevent default - this will cause a full page reload
        }
      }
    };
    
    document.addEventListener('click', handleClick, true);
    
    // Disable heavy animations on mobile
    document.documentElement.classList.add('mobile-optimized');
    
    // Reduce animation complexity
    const style = document.createElement('style');
    style.innerHTML = `
      /* Disable only pixel card animations (heavy) */
      .mobile-optimized .pixel-canvas {
        display: none !important;
      }
      
      /* Keep animations but make them faster */
      .mobile-optimized * {
        animation-duration: 0.3s !important;
        transition-duration: 0.3s !important;
      }
      
      /* Disable only the heaviest animations */
      .mobile-optimized [class*="animate-spin"],
      .mobile-optimized [class*="animate-ping"] {
        animation: none !important;
      }
      
      /* Keep pulse and bounce but speed them up */
      .mobile-optimized [class*="animate-pulse"] {
        animation-duration: 1s !important;
      }
      
      .mobile-optimized [class*="animate-bounce"] {
        animation-duration: 0.5s !important;
      }
      
      /* Ensure scrolling always works */
      html, body {
        overflow-x: hidden !important;
        overflow-y: auto !important;
        -webkit-overflow-scrolling: touch !important;
        overscroll-behavior-y: contain !important;
        height: auto !important;
        min-height: 100vh !important;
      }
      
      /* Prevent any element from blocking scroll */
      * {
        touch-action: pan-y !important;
      }
      
      /* Speed up framer-motion animations instead of disabling */
      [data-framer-component-type] {
        transition-duration: 0.3s !important;
      }
    `;
    document.head.appendChild(style);
    
    // Force enable scrolling immediately
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.position = 'relative';
    document.body.style.touchAction = 'pan-y';
    document.body.style.height = 'auto';
    
    console.log('Mobile Optimizer: Scroll enabled, full page reload mode activated');
    
    return () => {
      document.removeEventListener('click', handleClick, true);
    };
    
  }, []);
  
  // Re-enable scroll on every route change
  useEffect(() => {
    console.log('Route changed to:', pathname);
    
    // Immediately enable scroll
    document.documentElement.style.overflow = 'auto';
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'pan-y';
    document.body.style.height = 'auto';
    window.scrollTo(0, 0);
    console.log('Scroll re-enabled after navigation');
    
  }, [pathname]);
  
  return null;
}
