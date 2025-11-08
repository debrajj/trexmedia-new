"use client";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import { assets } from "@/app/assets";
import Image from "next/image";
import ButtonGradient from "../assets/svg/ButtonGradient";

const AboutPage = () => {
  const values = [
    {
      title: "Our Vision",
      description: "To make high-speed internet and IT infrastructure accessible to every corner of India.",
      icon: "🎯",
    },
    {
      title: "Our Mission",
      description: "To empower communities and businesses through reliable technology and customer-first service.",
      icon: "🚀",
    },
    {
      title: "Rural Empowerment",
      description: "Bringing world-class connectivity and technology solutions to the last mile.",
      icon: "🌾",
    },
  ];



  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        {/* Hero Section */}
        <Section className="pt-0" crosses>
          <div className="container">
            <Heading
              tag="About Us"
              title="Welcome to Trexx IT Pro"
              text="Your trusted partner in IT and networking solutions across Assam and beyond."
            />

            <div className="relative max-w-[60rem] mx-auto mb-12">
              <div className="bg-n-8 rounded-[1rem] p-8 border-2" style={{borderColor: '#03BFFF'}}>
                  <p className="body-2 text-n-3 mb-6">
                    Welcome to Trexx IT Pro, your trusted partner in IT and networking solutions across Assam and beyond. 
                    We specialize in three major service domains:
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="h6 text-color-1 mb-2">X-Fiber Internet Solutions</h4>
                      <p className="body-2 text-n-3">
                        Delivering fiber and air-fiber broadband to homes, businesses, and industries. Known for our low latency, 
                        high uptime, and affordability, X-Fiber is one of the fastest-growing ISPs in rural Assam, connecting people where it matters most.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="h6 text-color-1 mb-2">Smart Surveillance & Networking</h4>
                      <p className="body-2 text-n-3">
                        Providing IP camera installation, deployment, and integration for homes, businesses, industries, and even smart city projects.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="h6 text-color-1 mb-2">Co-location & Hosting Services</h4>
                      <p className="body-2 text-n-3">
                        Offering startups and businesses secure, power-backed infrastructure to host servers, routers, or other hardware 
                        with dedicated internet connectivity and uptime assurance.
                      </p>
                    </div>
                  </div>

                  <p className="body-2 text-n-3 mb-6">
                    We also extend our expertise into web development, crafting modern, full-stack websites for entrepreneurs, 
                    small businesses, and industrial clients who want to establish a strong online presence.
                  </p>

                  <p className="body-2 text-n-3 mb-6">
                    Our story began in rural Assam — where a young boy faced poor internet connectivity during the lockdown. 
                    What started as a personal mission to find fast, reliable internet for online classes soon evolved into a vision 
                    to bridge the digital gap in underserved regions. Partnering with RailWire, we laid the foundation for what is 
                    now Trexx Networks, the parent company of X-Fiber.
                  </p>

                  <p className="body-2 text-n-3">
                    Today, Trexx IT Pro stands as a symbol of innovation, reliability, and rural empowerment, bringing world-class 
                    connectivity and technology solutions to the last mile.
                  </p>
                </div>
            </div>

            {/* Values Section */}
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-n-8 rounded-[1rem] border-2 group hover:scale-105 transition-transform"
                  style={{borderColor: '#03BFFF'}}
                >
                  <div className="p-8 h-full">
                    <div className="text-5xl mb-4">{value.icon}</div>
                    <h3 className="h5 mb-3">{value.title}</h3>
                    <p className="body-2 text-n-3">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default AboutPage;
