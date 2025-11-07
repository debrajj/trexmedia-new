"use client";
import React from "react";
import Section from "../Section";
import Heading from "../Heading";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Switched to this ISP 6 months ago and haven't looked back. The fiber optic speed is incredible - downloads that used to take hours now finish in minutes. Their support team is always there when needed, even during festival seasons!",
      name: "Priya Sharma",
      title: "Small Business Owner, Mumbai",
    },
    {
      quote: "Their enterprise solution scaled perfectly with our startup's rapid growth. From 10 employees to 100, the network never skipped a beat. The dedicated account manager makes everything seamless and stress-free for our Bangalore operations.",
      name: "Rajesh Kumar",
      title: "Tech Startup CEO, Bangalore",
    },
    {
      quote: "Finally, an ISP that delivers on its promises. 99.9% uptime isn't just marketing - it's reality. As a remote worker from Pune, reliable internet is everything. This has been a complete game changer for my productivity.",
      name: "Ananya Patel",
      title: "Remote Software Developer, Pune",
    },
    {
      quote: "The IP camera installation service was professional and thorough. They set up our entire security system with cloud integration. Now I can monitor my restaurant chain across Delhi NCR from anywhere. Absolutely worth every rupee.",
      name: "Vikram Singh",
      title: "Restaurant Owner, Delhi",
    },
    {
      quote: "Their co-location hosting saved our company lakhs. The data center is state-of-the-art with redundant power and cooling. Our servers have never been more secure or reliable. Highly recommend for any serious business in India.",
      name: "Deepika Menon",
      title: "IT Director, Chennai",
    },
    {
      quote: "Best customer service I've ever experienced from an ISP in India. When we had an issue during monsoon, they had a technician at our Hyderabad office within 2 hours. The problem was fixed in 30 minutes. That's the kind of service that keeps customers for life.",
      name: "Arjun Reddy",
      title: "Marketing Agency Owner, Hyderabad",
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
