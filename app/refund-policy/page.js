"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import ButtonGradient from "../assets/svg/ButtonGradient";

const RefundPolicy = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="py-16">
          <div className="container max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="h1 mb-4">Refund Policy</h1>
              <p className="text-n-3">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>

            <div className="prose prose-invert max-w-none">
              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Service Satisfaction Guarantee</h2>
                <p className="text-n-3 mb-4">
                  At Trexx Networks, we stand behind our services. If you're not satisfied with our 
                  internet service within the first 30 days, we offer:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• Full refund of monthly service fees</li>
                  <li>• No questions asked cancellation</li>
                  <li>• Free equipment removal (if applicable)</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Refund Eligibility</h2>
                <p className="text-n-3 mb-4">Refunds are available for:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Monthly service fees within 30 days of activation</li>
                  <li>• Prepaid services not yet consumed</li>
                  <li>• Service outages exceeding our SLA commitments</li>
                  <li>• Billing errors and duplicate charges</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Non-Refundable Items</h2>
                <p className="text-n-3 mb-4">The following are non-refundable:</p>
                <ul className="text-n-3 space-y-2">
                  <li>• Installation and setup fees</li>
                  <li>• Equipment costs (routers, modems, cables)</li>
                  <li>• Third-party service charges</li>
                  <li>• Services used beyond the 30-day period</li>
                  <li>• Cancellation due to policy violations</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Refund Process</h2>
                <p className="text-n-3 mb-4">To request a refund:</p>
                <ol className="text-n-3 space-y-2 list-decimal list-inside">
                  <li>Contact our customer service team</li>
                  <li>Provide your account details and reason for refund</li>
                  <li>Allow 3-5 business days for review</li>
                  <li>Refunds processed within 7-10 business days</li>
                  <li>Refund issued to original payment method</li>
                </ol>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8 mb-8">
                <h2 className="h3 text-n-1 mb-4">Service Credits</h2>
                <p className="text-n-3 mb-4">
                  For service outages or performance issues, we may offer service credits instead of refunds:
                </p>
                <ul className="text-n-3 space-y-2">
                  <li>• Automatic credits for extended outages</li>
                  <li>• Pro-rated credits for partial service disruptions</li>
                  <li>• Credits applied to next billing cycle</li>
                </ul>
              </div>

              <div className="bg-n-8 border border-n-6 rounded-2xl p-8">
                <h2 className="h3 text-n-1 mb-4">Contact for Refunds</h2>
                <p className="text-n-3">
                  To request a refund or discuss service credits:
                </p>
                <div className="mt-4 text-n-3">
                  <p>Email: billing@trexxnetworks.com</p>
                  <p>Phone: +91 98765 43210</p>
                  <p>Support Hours: 24/7</p>
                  <p>Response Time: Within 24 hours</p>
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

export default RefundPolicy;