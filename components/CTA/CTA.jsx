"use client";
import React from "react";
import Section from "../Section";
import Button from "../Button/Button";

const CTA = () => {
  return (
    <Section className="py-20">
      <div className="container">
        <div className="bg-n-8 rounded-[1rem] p-6 md:p-12 lg:p-20 text-center border-2 animate-glow" style={{borderColor: '#03BFFF'}}>
          <h2 className="h2 mb-4">Ready to Get Connected?</h2>
          <p className="body-1 text-n-3 mb-8 max-w-3xl mx-auto">
            Join thousands of satisfied customers experiencing the future of connectivity. 
            Get started today with our flexible plans and expert support.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button white href="/pricing">View Plans</Button>
            <Button href="/contact">Contact Sales</Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default CTA;
