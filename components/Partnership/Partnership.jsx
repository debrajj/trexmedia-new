"use client";
import React from "react";
import Section from "../Section";
import { assets } from "@/app/assets";
import Image from "next/image";

const Partnership = () => {
  return (
    <Section className="py-16 relative overflow-hidden">
      <div className="container">
        <div className="max-w-6xl mx-auto">
          
          {/* Railway Track Background */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-n-4 to-transparent"></div>
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-n-4 to-transparent mt-4"></div>
            {/* Railway Sleepers */}
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute top-1/2 w-2 h-8 bg-n-6/30 -mt-4"
                style={{ left: `${8 + i * 8}%` }}
              ></div>
            ))}
          </div>
          
          {/* Section Heading with Railway Theme */}
          <div className="text-center mb-16 relative z-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-8 h-1 bg-color-1"></div>
              <h2 className="h1">Partnership</h2>
              <div className="w-8 h-1 bg-color-1"></div>
            </div>
            <p className="body-1 text-n-3 max-w-2xl mx-auto">
              Connected through India's railway infrastructure network
            </p>
          </div>

          {/* Railway Station Style Layout */}
          <div className="relative bg-gradient-to-br from-n-8/80 to-n-7/60 backdrop-blur-sm rounded-3xl border border-n-6/40 p-8 lg:p-12">
            
            {/* Station Platform Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-n-6/50 via-n-5/50 to-n-6/50 rounded-b-3xl"></div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
              
              {/* Left: RailWire Logo - Train Station Style */}
              <div className="relative">
                <div className="relative flex justify-center">
                  {/* Train Car Style Container */}
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl border-4 border-n-6/20">
                    {/* Train Car Details */}
                    <div className="absolute -top-2 left-4 right-4 h-4 bg-gradient-to-r from-n-6/30 via-n-5/30 to-n-6/30 rounded-t-lg"></div>
                    <div className="absolute -bottom-3 left-8 w-6 h-6 bg-n-7 rounded-full border-2 border-n-6"></div>
                    <div className="absolute -bottom-3 right-8 w-6 h-6 bg-n-7 rounded-full border-2 border-n-6"></div>
                    
                    <Image 
                      src={assets.railwire} 
                      alt="RailWire" 
                      width={220} 
                      height={140}
                      className="object-contain relative z-10"
                    />
                  </div>
                </div>
              </div>

              {/* Right: Railway Network Info */}
              <div className="space-y-8">
                <div className="space-y-6">
                  
                  {/* Network Coverage - Railway Style */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-color-1 to-color-2 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute left-2 top-6 w-0.5 h-8 bg-gradient-to-b from-color-1/50 to-transparent"></div>
                    <h4 className="h5 text-n-1 mb-2">🚄 Nationwide Network</h4>
                    <p className="body-2 text-n-4">67,000+ km railway infrastructure coverage across India</p>
                  </div>
                  
                  {/* Security - Signal Style */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div className="absolute left-2 top-6 w-0.5 h-8 bg-gradient-to-b from-green-500/50 to-transparent"></div>
                    <h4 className="h5 text-n-1 mb-2">🔒 Enterprise Security</h4>
                    <p className="body-2 text-n-4">Military-grade encryption & railway-standard protocols</p>
                  </div>
                  
                  {/* Reliability - Station Clock Style */}
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-2 w-4 h-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <h4 className="h5 text-n-1 mb-2">⏰ 99.9% Uptime</h4>
                    <p className="body-2 text-n-4">Railway-grade reliability & guaranteed service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Partnership;