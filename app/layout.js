"use client";
import { Rajdhani, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ColorBends from "@/components/ColorBends";
import PerformanceMonitor from "@/components/PerformanceMonitor";
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
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  return (
    <html lang="en" className={`${rajdhani.variable} ${nunitoSans.variable}`}>
      <head>
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
        {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
        {!isMobile && (
          <ColorBends
            colors={["#ff0066", "#8800ff", "#00ccff"]}
            rotation={30}
            speed={0.15}
            scale={1.0}
            frequency={1.2}
            warpStrength={0.8}
            mouseInfluence={0.3}
            parallax={0.3}
            noise={0.05}
            transparent
          />
        )}
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
