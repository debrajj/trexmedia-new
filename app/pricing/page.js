"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Pricing from "@/components/Pricing/Pricing";
import ButtonGradient from "../assets/svg/ButtonGradient";

const PricingPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="pt-[8rem]" crosses>
          <div className="container">
            <Heading
              tag="Pricing"
              title="Choose Your Perfect Plan"
              text="Flexible pricing options designed to scale with your needs. All plans include 24/7 support and our 99.9% uptime guarantee."
            />

            <Pricing />

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
