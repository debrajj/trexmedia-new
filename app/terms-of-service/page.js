"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const TermsOfService = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="h1 mb-4">Terms of Service</h1>
              <p className="text-n-3">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Service Agreement</h2>
                <p className="text-n-3 mb-4">
                  By using Trexx Networks services, you agree to these terms. Our services include:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• High-speed fiber optic internet connectivity</li>
                  <li>• CCTV and security camera installation</li>
                  <li>• Cloud hosting and co-location services</li>
                  <li>• Gaming PC setup and optimization</li>
                  <li>• 24/7 technical support</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Service Availability</h2>
                <p className="text-n-3 mb-4">
                  We strive to provide 99.9% uptime for our services. However, service may be temporarily 
                  unavailable due to:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• Scheduled maintenance (with advance notice)</li>
                  <li>• Network upgrades and improvements</li>
                  <li>• Force majeure events beyond our control</li>
                  <li>• Third-party infrastructure issues</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Fair Usage Policy</h2>
                <p className="text-n-3 mb-4">
                  To ensure optimal service for all users:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• No illegal activities or content distribution</li>
                  <li>• No network abuse or excessive bandwidth consumption</li>
                  <li>• No reselling of services without authorization</li>
                  <li>• Compliance with local laws and regulations</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Payment Terms</h2>
                <ul className="text-n-3 space-y-2">
                  <li>• Monthly plans are billed in advance</li>
                  <li>• Payment due within 7 days of invoice date</li>
                  <li>• Late payment may result in service suspension</li>
                  <li>• Installation fees are non-refundable</li>
                  <li>• Price changes with 30 days notice</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Limitation of Liability</h2>
                <p className="text-n-3 mb-4">
                  Trexx Networks shall not be liable for indirect, incidental, or consequential damages. 
                  Our total liability is limited to the amount paid for services in the preceding month.
                </p>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8">
                <h2 className="h3 text-n-1 mb-4">Contact Information</h2>
                <p className="text-n-3">
                  For questions about these terms, contact us:
                </p>
                <div className="mt-4 text-n-3">
                  <p>Email: legal@trexxnetworks.com</p>
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

export default TermsOfService;