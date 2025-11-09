"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";

import Pricing from "@/components/Pricing/Pricing";
import ButtonGradient from "../assets/svg/ButtonGradient";

const PricingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="pt-0" crosses>
          <div className="container">
            <Pricing />

            {/* Direct Call CTA */}
            <div className="mt-16 mb-20">
              <div className="max-w-4xl mx-auto">
                <div className="relative bg-gradient-to-r from-color-1/10 to-purple-500/10 border border-color-1/20 rounded-3xl p-8 md:p-12 text-center overflow-hidden">
                  {/* Background decoration */}
                  <div className="absolute inset-0 bg-gradient-to-r from-color-1/5 to-purple-500/5 rounded-3xl"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-color-1/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-color-1/20 border border-color-1/30 rounded-full mb-6">
                      <div className="w-2 h-2 bg-color-1 rounded-full animate-pulse"></div>
                      <span className="text-color-1 text-sm font-medium">INSTANT SETUP AVAILABLE</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-n-1 mb-4">
                      Need Help Choosing? 
                      <span className="block text-color-1">Talk to Our Experts</span>
                    </h3>
                    
                    <p className="text-n-3 mb-8 max-w-2xl mx-auto">
                      Get personalized recommendations and instant quotes. Our network specialists are standing by to help you find the perfect plan for your needs.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      {/* Primary Call Button */}
                      <a 
                        href="tel:+919876543210" 
                        className="group inline-flex items-center gap-3 bg-gradient-to-r from-color-1 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-color-1/25"
                      >
                        <svg className="w-6 h-6 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call Now: +91 98765 43210
                      </a>
                      
                      {/* Secondary WhatsApp Button */}
                      <a 
                        href="https://wa.me/919876543210?text=Hi, I'm interested in your internet plans" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 bg-green-500 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-green-600 hover:scale-105"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                        </svg>
                        WhatsApp Us
                      </a>
                    </div>
                    
                    {/* Additional Info */}
                    <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-n-4">
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Available 24/7</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <span>Instant Activation</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Free Consultation</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* All Plans Include Section */}
            <div className="mt-20">
              <div className="text-center mb-16">
                <h3 className="h3 mb-4">All Plans Include</h3>
                <div className="w-20 h-1 bg-gradient-to-r from-color-1 to-purple-500 rounded-full mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    ),
                    title: "Advanced Security",
                    desc: "DDoS protection & firewall"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    title: "24/7 Support",
                    desc: "Expert help anytime"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: "No Data Caps",
                    desc: "Unlimited usage"
                  },
                  {
                    icon: (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: "Easy Setup",
                    desc: "Professional installation"
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative"
                  >
                    {/* Background with glassmorphism */}
                    <div className="absolute inset-0 bg-gradient-to-br from-color-1/10 to-purple-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl"></div>
                    
                    {/* Main card */}
                    <div className="relative glass border border-n-6 rounded-2xl p-8 text-center transition-all duration-500 group-hover:border-color-1/50 group-hover:transform group-hover:scale-105">
                      {/* Icon container */}
                      <div className="relative mb-6">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-br from-color-1 to-purple-500 rounded-xl flex items-center justify-center text-white transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
                          {feature.icon}
                        </div>
                        {/* Glow effect */}
                        <div className="absolute inset-0 w-16 h-16 mx-auto bg-gradient-to-br from-color-1/40 to-purple-500/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-md"></div>
                      </div>
                      
                      {/* Content */}
                      <h4 className="h6 mb-3 text-n-1 group-hover:text-color-1 transition-colors duration-300">
                        {feature.title}
                      </h4>
                      <p className="body-2 text-n-3 leading-relaxed">
                        {feature.desc}
                      </p>
                      
                      {/* Bottom accent */}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-color-1 to-purple-500 rounded-full group-hover:w-12 transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Bottom CTA */}
              <div className="text-center mt-16">
                <div className="inline-flex items-center gap-2 px-6 py-3 bg-n-7/30 border border-n-6/50 rounded-full">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-n-3 caption">All plans backed by our 99.9% uptime guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default PricingPage;
