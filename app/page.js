"use client";
import React, { Suspense } from "react";
import dynamic from "next/dynamic";
import Head from "next/head";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats/Stats";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

// Dynamic imports for better code splitting
const Benefits = dynamic(() => import("@/components/Benefits/Benefits"), {
  loading: () => <div className="h-32 animate-pulse bg-n-8 rounded-lg" />
});
const ServicesShowcase = dynamic(() => import("@/components/ServicesShowcase/ServicesShowcase"), {
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
        <link rel="preload" href="/desktop_hero.lottie" as="fetch" />
        <link rel="preload" href="/mobile_hero.lottie" as="fetch" />
        <link rel="preload" href="/lottie/camera.lottie" as="fetch" />
      </Head>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Stats />
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <ServicesShowcase />
        </Suspense>
        <Suspense fallback={<div className="h-32 animate-pulse bg-n-8 rounded-lg" />}>
          <Benefits />
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

      <PerformanceOptimizer />
      <ButtonGradient />
    </>
  );
};

export default Home;
