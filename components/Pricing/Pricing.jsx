import React from "react";
import Section from "../Section";
import Image from "next/image";
import Link from "next/link";
import { assets } from "@/app/assets";
import Heading from "../Heading";
import PricingList from "../PricingList/PricingList";
import { LeftLine, RightLine } from "../design/Pricing";
const Pricing = () => {
  return (
    <>
      <Section className="overflow-hidden" id="pricing">
        <div className="container relative z-2">
          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>
        </div>
      </Section>
    </>
  );
};

export default Pricing;
