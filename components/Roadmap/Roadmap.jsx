import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { roadmap } from "@/constants";
import Image from "next/image";
import { assets } from "@/app/assets";

const Roadmap = () => {
  return (
    <>
      <Section className="overflow-hidden" id="roadmap">
        <div className="container md:pb-10">
          <Heading title="What we're working on" tag="READY TO GET STARTED" />

          <div className="relative grid md:grid-cols-2 gap-6 md:gap-4 md:pb-[7rem]">
            {roadmap.map((item) => {
              const status = item.status === "done" ? "Done" : "In progress";
              return (
                <div
                  key={item.id}
                  className="md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] hover:scale-105 transition-transform duration-300"
                >
                  <div className="relative p-8 bg-n-8 rounded-[2rem] overflow-hidden xl:p-15 border border-n-6 hover:border-color-1/50 transition-colors duration-300">
                    <div className="absolute top-0 left-0 opacity-30">
                      <Image
                        src={assets.grid}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    {/* Status badge */}
                    <div className="absolute top-6 right-6 z-10">
                      <div className={`px-3 py-1 rounded-full text-xs font-medium
                        ${status === "Done" 
                          ? "bg-green-500/20 text-green-400" 
                          : "bg-color-1/20 text-color-1"
                        }`}>
                        {status}
                      </div>
                    </div>

                    <div className="relative z-1">
                      <div className="mb-10 -my-10 -mx-15 rounded-xl overflow-hidden">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          width={630}
                          height={420}
                          className="w-full h-auto"
                        />
                      </div>
                      <h4 className="h4 mb-4">{item.title}</h4>
                      <p className="body-2 text-n-4 mb-6">{item.text}</p>
                      
                      {/* Date */}
                      <div className="text-sm text-color-1 font-medium">
                        {item.date}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Roadmap;
