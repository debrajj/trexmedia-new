import { Rajdhani, Nunito_Sans } from "next/font/google";
import "./globals.css";
import ColorBends from "@/components/ColorBends";
import PerformanceMonitor from "@/components/PerformanceMonitor";

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

export const metadata = {
  title: "Trexx IT Pro - Future of Connectivity",
  description: "Experience lightning-fast fiber optic internet, enterprise-grade security, and 24/7 support with next-generation network solutions.",
};

export default function RootLayout({ children }) {
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
        <PerformanceMonitor />
        <ColorBends
          colors={["#ff5c7a", "#8a5cff", "#03BFFF"]}
          rotation={30}
          speed={0.3}
          scale={1.2}
          frequency={1.4}
          warpStrength={1.2}
          mouseInfluence={0.8}
          parallax={0.6}
          noise={0.08}
          transparent
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          {children}
        </div>
      </body>
    </html>
  );
}
