"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const PrivacyPolicy = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="h1 mb-4">Privacy Policy</h1>
              <p className="text-n-3">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Information We Collect</h2>
                <p className="text-n-3 mb-4">
                  At Trexx Networks, we collect information to provide better services to our users. 
                  We collect information in the following ways:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• Personal information you provide (name, email, phone number, address)</li>
                  <li>• Service usage data and network performance metrics</li>
                  <li>• Device information and technical specifications</li>
                  <li>• Payment and billing information</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">How We Use Your Information</h2>
                <p className="text-n-3 mb-4">We use the information we collect to:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Provide and maintain our internet services</li>
                  <li>• Process payments and manage your account</li>
                  <li>• Improve network performance and troubleshoot issues</li>
                  <li>• Send service updates and technical notifications</li>
                  <li>• Comply with legal obligations and prevent fraud</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Data Security</h2>
                <p className="text-n-3 mb-4">
                  We implement industry-standard security measures to protect your personal information:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• End-to-end encryption for data transmission</li>
                  <li>• Secure servers with regular security audits</li>
                  <li>• Limited access to personal information</li>
                  <li>• Regular security training for our staff</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Your Rights</h2>
                <p className="text-n-3 mb-4">You have the right to:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Access your personal information</li>
                  <li>• Correct inaccurate information</li>
                  <li>• Request deletion of your data</li>
                  <li>• Opt-out of marketing communications</li>
                  <li>• Data portability</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8">
                <h2 className="h3 text-n-1 mb-4">Contact Us</h2>
                <p className="text-n-3">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;