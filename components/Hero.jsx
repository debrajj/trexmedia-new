"use client";
import React from "react";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import TechLogos from "./TechLogos";

const Hero = () => {
  const [shouldPlayAnimation, setShouldPlayAnimation] = React.useState(false);

  React.useEffect(() => {
    // Delay animation start to prioritize initial page load
    const timer = setTimeout(() => {
      setShouldPlayAnimation(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <HeroGeometric
        badge="Next-Gen Connectivity"
        title1="Experience the Future of"
        title2="Connectivity"
        description="Lightning-fast fiber optic internet, enterprise-grade security, and 24/7 support."
        fullDescription="Lightning-fast fiber optic internet, enterprise-grade security, and 24/7 support. Elevate your digital experience with next-generation network solutions."
        className="pb-0 mb-0"
      />

      {/* Mobile: Lottie at bottom */}
      <div className="relative z-10 px-0 pt-10 md:hidden">
        <div className="aspect-[16/9] w-full">
          {shouldPlayAnimation && (
            <DotLottieReact
              src="/mobile_hero.lottie"
              loop={false}
              autoplay={true}
              className="w-full h-full"
              speed={1}
              useFrameInterpolation={false}
              renderConfig={{
                devicePixelRatio: 1
              }}
            />
          )}
        </div>
      </div>

      {/* Desktop: Lottie after content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 -mt-96 hidden md:block">
        <div className="aspect-[16/9] w-full">
          {shouldPlayAnimation && (
            <DotLottieReact
              src="/desktop_hero.lottie"
              loop={false}
              autoplay={true}
              className="w-full h-full"
              speed={1}
              useFrameInterpolation={false}
              renderConfig={{
                devicePixelRatio: 1
              }}
            />
          )}
        </div>
      </div>

      <TechLogos className="relative z-10 pt-0" />
    </div>
  );
};

export default Hero;