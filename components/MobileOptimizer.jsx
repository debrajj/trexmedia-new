"use client";
import { useCallback, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function MobileOptimizer() {
  const pathname = usePathname();

  const unlockPageScroll = useCallback(() => {
    document.documentElement.style.removeProperty('overflow');
    document.body.style.removeProperty('overflow');
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('height');
    document.body.style.removeProperty('touch-action');
  }, []);

  useEffect(() => {
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    if (!isMobile) return;

    document.documentElement.classList.add('mobile-optimized');

    const style = document.createElement('style');
    style.setAttribute('data-mobile-optimizer', 'true');
    style.textContent = `
      .mobile-optimized .pixel-canvas {
        display: none !important;
      }

      html.mobile-optimized,
      html.mobile-optimized body {
        overflow-x: hidden !important;
        -webkit-overflow-scrolling: touch;
      }
    `;

    document.head.appendChild(style);
    unlockPageScroll();

    return () => {
      document.documentElement.classList.remove('mobile-optimized');
      unlockPageScroll();
      document.head.removeChild(style);
    };
  }, [unlockPageScroll]);

  useEffect(() => {
    unlockPageScroll();
  }, [pathname, unlockPageScroll]);
  
  return null;
}
