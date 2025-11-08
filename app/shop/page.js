"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const ShopPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="py-20">
          <div className="container">
            <div className="max-w-4xl mx-auto text-center">
              
              {/* Launching Soon Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-color-1/10 to-purple-500/10 border border-color-1/20 rounded-full mb-8">
                <div className="w-3 h-3 bg-color-1 rounded-full animate-pulse"></div>
                <span className="text-color-1 text-sm font-medium">LAUNCHING SOON</span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl font-bold text-n-1 mb-6">
                Premium Shop
                <span className="block bg-gradient-to-r from-color-1 to-purple-500 bg-clip-text text-transparent">
                  Launching Soon
                </span>
              </h1>

              {/* Subtitle */}
              <h2 className="text-2xl md:text-3xl font-semibold text-n-2 mb-4">
                Next-Gen Network Equipment
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-n-3 mb-12 max-w-2xl mx-auto">
                Professional-grade hardware engineered for the future of connectivity. 
                Our premium shop will feature cutting-edge networking solutions for modern businesses.
              </p>

              {/* Features Preview */}
              <div className="grid md:grid-cols-3 gap-8 mb-16">
                <div className="bg-n-8 border border-n-6 rounded-2xl p-6 text-center hover:border-color-1/50 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-n-1 mb-2">Enterprise Routers</h3>
                  <p className="text-n-3 text-sm">Next-generation routing solutions with AI-powered optimization</p>
                </div>

                <div className="bg-n-8 border border-n-6 rounded-2xl p-6 text-center hover:border-color-1/50 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-color-1 to-purple-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-n-1 mb-2">Smart Security Systems</h3>
                  <p className="text-n-3 text-sm">Advanced surveillance with cloud integration and AI analytics</p>
                </div>

                <div className="bg-n-8 border border-n-6 rounded-2xl p-6 text-center hover:border-color-1/50 transition-colors">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-n-1 mb-2">Professional Accessories</h3>
                  <p className="text-n-3 text-sm">Premium cables, adapters, and networking components</p>
                </div>
              </div>

              {/* Notify Me Section */}
              <div className="bg-gradient-to-r from-color-1/10 to-purple-500/10 border border-color-1/20 rounded-3xl p-8 md:p-12">
                <h3 className="text-2xl font-bold text-n-1 mb-4">Get Notified When We Launch</h3>
                <p className="text-n-3 mb-6">Be the first to access our premium collection of next-generation network equipment.</p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <a 
                    href="tel:+919876543210" 
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-color-1 to-purple-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call Us: +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Launch Timeline */}
              <div className="mt-16 text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-n-7/50 border border-n-6/50 rounded-full">
                  <svg className="w-4 h-4 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-n-3 text-sm">Expected Launch: Q2 2025</span>
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

export default ShopPage;