"use client";
import React from "react";
import Section from "../Section";
import Button from "../Button/Button";
import PixelCard from "../ui/PixelCard";

const CTA = () => {
  const packages = [
    {
      id: "1",
      name: "X-Fiber Ignite",
      price: "3999",
      speed: "40 Mbps",
      duration: "6 Months",
      router: "Free Router",
      description: "Perfect for streaming, online classes & work-from-home",
    },
    {
      id: "2",
      name: "X-Fiber Blaze",
      price: "4999",
      speed: "75 Mbps",
      duration: "6 Months",
      router: "Free Router",
      description: "Smooth gaming & 4K streaming experience",
    },
    {
      id: "3",
      name: "X-Fiber Thunder",
      price: "5499",
      speed: "100 Mbps",
      duration: "6 Months",
      router: "Free Router",
      description: "Ultimate speed for power users & large families",
    },
  ];

  return (
    <Section className="py-20" id="get-started">
      <div className="container">
        <div className="text-center mb-12">
          <h5 className="tagline mb-4 text-color-1">GET STARTED</h5>
          <h2 className="h2 mb-4">Term Data Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <PixelCard
              key={pkg.id}
              variant={index === 0 ? 'blue' : index === 1 ? 'yellow' : 'pink'}
              className="bg-n-8 border border-n-6 hover:border-color-1/50 transition-colors"
            >
              <div className="p-6 md:p-8 text-center">
                <h4 className="h5 mb-4 text-color-1">{pkg.name}</h4>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-4xl md:text-5xl font-bold">₹{pkg.price}</span>
                    <span className="text-n-3 ml-2">/-</span>
                  </div>
                  <p className="text-xs text-n-4">INC TAX</p>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center gap-2">
                    <svg className="w-5 h-5 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span className="text-lg font-semibold">{pkg.speed}</span>
                  </div>
                  <p className="text-n-3 text-sm">{pkg.duration}</p>
                  <p className="text-n-3 text-sm">{pkg.router}</p>
                  {pkg.description && (
                    <p className="text-n-4 text-xs mt-4 leading-relaxed">{pkg.description}</p>
                  )}
                </div>

                <Button href="/pricing" className="w-full">
                  Choose Plan
                </Button>
              </div>
            </PixelCard>
          ))}
        </div>

        <div className="text-center">
          <Button white href="/pricing">View All Plans</Button>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
