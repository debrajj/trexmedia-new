"use client";
import React from "react";
import PixelCard from "./ui/PixelCard";
import { benefits } from "@/constants";

const BenefitsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="h2 text-white mb-4">
            Chat Smarter, Not Harder with Trexx IT Pro
          </h2>
          <p className="text-gray-400 text-lg">
            Experience the future of connectivity with our cutting-edge solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => {
            const variants = ['blue', 'yellow', 'pink', 'default'];
            const variant = variants[index % variants.length];
            
            return (
              <PixelCard
                key={benefit.id}
                variant={variant}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <img 
                      src={benefit.iconUrl} 
                      alt={benefit.title}
                      className="w-12 h-12"
                    />
                  </div>
                  <h3 className="h3 text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.text}
                  </p>
                </div>
              </PixelCard>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
