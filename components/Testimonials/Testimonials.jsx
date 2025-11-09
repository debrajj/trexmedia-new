"use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A very good person with tremendous knowledge of computer engineering. He can fix all pc related issues be it software or hardware... I bet you will never get disappointed by his service. Must visit.",
      name: "Abhijit Nath",
      title: "Local Guide",
      rating: 5,
    },
    {
      quote: "I've been impressed with Trexx network's affordable internet service. They not only offer budget-friendly plans but also deliver reliable and commendable service. It's a great balance of affordability and quality that keeps me satisfied as a customer.",
      name: "Jahid Laskar",
      title: "Google Review",
      rating: 5,
    },
    {
      quote: "Just installed Railwire service! For me ping is necessary and railwire gives constant ping. And the promised speed is there always. No lag nothing. Plus the provider is friendly and very good in nature so easy to connect with him.",
      name: "Chemin Strix",
      title: "Local Guide",
      rating: 5,
    },
    {
      quote: "Nice to know that internet service provider is now available in our small town umednagar lala area. 2 years back I was struggling with BSNL lala as I was doing work from home and lots of problem was there in the line connection. Now if I come home I will surely use this service provider 👍👍👍",
      name: "Jmz crez",
      title: "Google Review",
      rating: 5,
    },
    {
      quote: "Both are shayari, everything is ready to help... They fixed my PC easily... I don't know about the rest, thank God I got shayari...",
      name: "Queen Nath",
      title: "Google Review",
      rating: 5,
    },
  ];

  return (
    <Section className="py-20">
      <div className="container">
        <Heading
          tag="Testimonials"
          title="What Our Customers Say"
          text="Join thousands of satisfied customers who trust us for their connectivity needs"
        />

        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </Section>
  );
};

export default Testimonials;
