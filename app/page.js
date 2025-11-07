"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";

// Dynamic imports for better code splitting
const Benefits = dynamic(() => import("@/components/Benefits/Benefits"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const ServicesShowcase = dynamic(() => import("@/components/ServicesShowcase/ServicesShowcase"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const Roadmap = dynamic(() => import("@/components/Roadmap/Roadmap"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const Testimonials = dynamic(() => import("@/components/Testimonials/Testimonials"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const Partnership = dynamic(() => import("@/components/Partnership/Partnership"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const CTA = dynamic(() => import("@/components/CTA/CTA"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const Footer = dynamic(() => import("@/components/Footer/Footer"), {
  loading: () => <div className="h-16 animate-pulse bg-n-8" />
});

const Home = () => {
  return (
    <>
      <Head>
        <link rel="preload" href="https://lottie.host/19775748-e6a6-45a5-8a89-170ec98ea4fd/V6yXEhioHq.lottie" as="fetch" crossOrigin="anonymous" />
        <link rel="preload" href="https://lottie.host/a3b896b4-430c-4755-a470-7dc5b41f98c5/vJERKBqUhf.lottie" as="fetch" crossOrigin="anonymous" />
      </Head>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Stats />
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <Benefits />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <ServicesShowcase />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <Roadmap />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <Partnership />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <CTA />
        </Suspense>
        <Suspense fallback={<div className="h-16 animate-pulse bg-n-8" />}>
          <Footer />
        </Suspense>
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
