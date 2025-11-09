"use client";
import React from "react";
import Section from "../Section";
import { socials } from "@/constants";
import Image from "next/image";
import { assets } from "@/app/assets";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms of Service", href: "/terms-of-service" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ];

  return (
    <Section crosses className="!px-0 !py-16">
      <div className="container">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
          {/* Company Info */}
          <div className="flex flex-col">
            <div className="mb-4">
              <Image src={assets.r1} width={220} height={55} alt="Trexx Networks Logo" />
            </div>
            <p className="text-n-3 text-left max-w-sm text-sm">
              Next-generation internet service provider delivering lightning-fast fiber optic connectivity across India.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex gap-4">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 bg-n-7 border border-n-6 rounded-full transition-all hover:bg-n-6 hover:border-color-1 hover:scale-110"
              >
                <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-n-6 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-4">
            <div className="flex flex-wrap justify-start gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-n-4 hover:text-color-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <p className="text-n-4 text-sm text-left md:text-right" suppressHydrationWarning>
              © {new Date().getFullYear()} Trexx Networks. All rights reserved.
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-12 h-12 bg-n-7 border border-n-6 rounded-full transition-all hover:bg-n-6 hover:scale-110 group"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6 text-n-1 transition-transform group-hover:-translate-y-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>
    </Section>
  );
};

export default Footer;