"use client";
import React from 'react';
import LogoLoop from './ui/LogoLoop';
import { assets } from '../app/assets';

const TechLogos = ({ className }) => {
  const basePartners = [
    {
      src: assets.bikes.src,
      alt: "Bikes",
      title: "Bikes"
    },
    {
      src: assets.fgtech.src,
      alt: "FG Tech",
      title: "FG Tech"
    },
    {
      src: assets.kiotel.src,
      alt: "Kiotel", 
      title: "Kiotel"
    },
    {
      src: assets.webzyra.src,
      alt: "Webzyra",
      title: "Webzyra"
    },
  ];

  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Trusted by Top Tech Innovators and Industry Leaders
      </h5>
      <div className="py-8">
        <LogoLoop
          logos={basePartners}
          speed={40}
          direction="left"
          logoHeight={40}
          gap={40}
          pauseOnHover={false}
          scaleOnHover={true}
          fadeOut={true}
          fadeOutColor="#000000"
          ariaLabel="Technology partners carousel"
          className="opacity-80"
        />
      </div>
    </div>
  );
};

export default TechLogos;
