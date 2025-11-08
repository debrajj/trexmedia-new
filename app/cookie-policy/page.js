"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const CookiePolicy = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="h1 mb-4">Cookie Policy</h1>
              <p className="text-n-3">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">What Are Cookies</h2>
                <p className="text-n-3 mb-4">
                  Cookies are small text files stored on your device when you visit our website. 
                  They help us provide a better user experience and improve our services.
                </p>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Types of Cookies We Use</h2>
                
                <div className="mb-6">
                  <h3 className="text-n-1 font-semibold mb-2">Essential Cookies</h3>
                  <p className="text-n-3 mb-2">Required for basic website functionality:</p>
                  <ul className="text-n-3 space-y-1">
                    <li>• Session management</li>
                    <li>• Security features</li>
                    <li>• Load balancing</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-n-1 font-semibold mb-2">Performance Cookies</h3>
                  <p className="text-n-3 mb-2">Help us understand how visitors use our site:</p>
                  <ul className="text-n-3 space-y-1">
                    <li>• Page views and traffic sources</li>
                    <li>• Site performance metrics</li>
                    <li>• Error tracking</li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h3 className="text-n-1 font-semibold mb-2">Functional Cookies</h3>
                  <p className="text-n-3 mb-2">Remember your preferences:</p>
                  <ul className="text-n-3 space-y-1">
                    <li>• Language settings</li>
                    <li>• Theme preferences</li>
                    <li>• Login information</li>
                  </ul>
                </div>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Third-Party Cookies</h2>
                <p className="text-n-3 mb-4">We may use third-party services that set cookies:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Google Analytics for website analytics</li>
                  <li>• Social media integration</li>
                  <li>• Customer support chat widgets</li>
                  <li>• Payment processing services</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Managing Cookies</h2>
                <p className="text-n-3 mb-4">You can control cookies through:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Browser settings (disable/delete cookies)</li>
                  <li>• Our cookie consent banner</li>
                  <li>• Opt-out links for third-party services</li>
                  <li>• Private/incognito browsing mode</li>
                </ul>
                <p className="text-n-3 mt-4">
                  Note: Disabling essential cookies may affect website functionality.
                </p>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Cookie Retention</h2>
                <ul className="text-n-3 space-y-2">
                  <li>• Session cookies: Deleted when you close your browser</li>
                  <li>• Persistent cookies: Stored for up to 2 years</li>
                  <li>• Analytics cookies: Retained for 26 months</li>
                  <li>• Preference cookies: Stored for 1 year</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8">
                <h2 className="h3 text-n-1 mb-4">Contact Us</h2>
                <p className="text-n-3">
                  Questions about our cookie policy? Contact us:
                </p>
                <div className="mt-4 text-n-3">
                  <p>Email: privacy@trexxnetworks.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Address: Trexx Networks, Guwahati, Assam, India</p>
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

export default CookiePolicy;