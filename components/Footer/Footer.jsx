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

  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div className="flex items-center gap-5">
          <Image src={assets.newlogo} width={110} height={28} alt="TrexMedia Logo" />
        </div>

        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <Image src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
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