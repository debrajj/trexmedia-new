"use client";
import { Rajdhani, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ColorBends from "../components/ColorBends";
import PerformanceMonitor from "../components/PerformanceMonitor";
import MobileOptimizer from "../components/MobileOptimizer";
import { useState, useEffect } from "react";

const rajdhani = Rajdhani({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-rajdhani'
});

const nunitoSans = Nunito_Sans({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
  variable: '--font-nunito'
});

export default function RootLayout({ children }) {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent));
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    // Optimize for mobile performance
    if (isMobile) {
      // Reduce animation complexity on mobile - but don't affect scroll animations
      document.documentElement.style.setProperty('--transition-duration', '0.2s');
    }
    
    return () => window.removeEventListener('resize', checkMobile);
  }, [isMobile]);
  return (
    <html lang="en" className={`${rajdhani.variable} ${nunitoSans.variable}`}>
      <head>
        <meta name="google-site-verification" content="ks0fEJlmYyBRPIOJTAxltlt_4wzOv0ZoN5Aeijiyv7w" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#03BFFF" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js');
                });
              }
            `,
          }}
        />
      </head>
      <body className={nunitoSans.className}>
        <MobileOptimizer />
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        {/* ColorBends disabled to prevent CPU heating */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
