import React from "react";
import Link from "next/link";

const PricingList = () => {
  const plans = [
    {
      id: "0",
      name: "Starter",
      description: "Perfect for home users and small offices",
      price: "3499",
      period: "/year",
      popular: false,
      features: [
        "50 Mbps download speed",
        "Unlimited data usage",
        "24/7 customer support",
        "Free router installation",
        "Basic security features",
        "1 static IP address"
      ],
      gradient: "from-blue-500 to-cyan-400",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      id: "1",
      name: "Professional",
      description: "Ideal for businesses and power users",
      price: "5499",
      period: "/year",
      popular: true,
      features: [
        "500 Mbps download speed",
        "Unlimited data usage",
        "Priority customer support",
        "Advanced security suite",
        "5 static IP addresses",
        "Free equipment upgrade",
        "Network monitoring tools",
        "Dedicated account manager"
      ],
      gradient: "from-color-1 to-purple-500",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: "2",
      name: "Enterprise",
      description: "Custom solutions for large organizations",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Up to 1 Gbps dedicated bandwidth",
        "Unlimited data with SLA guarantee",
        "Dedicated account manager",
        "Enterprise-grade security",
        "Multiple static IPs",
        "Co-location hosting options",
        "Custom network solutions",
        "24/7 on-site support"
      ],
      gradient: "from-purple-500 to-pink-500",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    }
  ];

  return (
    <div className="grid lg:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
      {plans.map((plan, index) => (
        <div
          key={plan.id}
          className={`relative group ${plan.popular ? 'lg:scale-105 lg:-mt-4' : ''}`}
        >
          {/* Popular Badge */}
          {plan.popular && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gradient-to-r from-color-1 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                Most Popular
              </div>
            </div>
          )}

          {/* Background Glow */}
          <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl blur-xl`}></div>

          {/* Main Card */}
          <div className={`relative glass border-2 rounded-3xl p-4 md:p-8 h-full transition-all duration-500 ${
            plan.popular 
              ? 'border-color-1 shadow-2xl shadow-color-1/20' 
              : 'border-n-6 group-hover:border-color-1/50'
          }`}>
            
            {/* Header */}
            <div className="text-center mb-6 md:mb-8">
              {/* Icon */}
              <div className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 bg-gradient-to-br ${plan.gradient} rounded-2xl flex items-center justify-center text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                {plan.icon}
              </div>
              
              {/* Plan Name */}
              <h3 className="h4 mb-2 text-n-1">{plan.name}</h3>
              <p className="body-2 text-n-3 mb-4 md:mb-6">{plan.description}</p>
              
              {/* Price */}
              <div className="mb-4 md:mb-6">
                {plan.price === "Custom" ? (
                  <div className="text-3xl md:text-4xl font-bold text-n-1">Custom</div>
                ) : (
                  <div className="flex items-baseline justify-center">
                    <span className="text-2xl font-semibold text-n-3">₹</span>
                    <span className="text-4xl md:text-5xl font-bold text-n-1">{plan.price}</span>
                    <span className="text-lg text-n-3 ml-1">{plan.period}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 mt-0.5">
                    <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="body-2 text-n-2">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Link
              href={plan.price === "Custom" ? "/contact" : "/pricing"}
              className="block"
            >
              <button className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-r from-color-1 to-purple-500 text-white hover:shadow-lg hover:shadow-color-1/25 hover:scale-105'
                  : 'bg-n-7 text-n-1 border border-n-6 hover:bg-gradient-to-r hover:from-color-1 hover:to-purple-500 hover:border-transparent hover:text-white hover:scale-105'
              }`}>
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </button>
            </Link>

            {/* Bottom Accent */}
            <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r ${plan.gradient} rounded-full group-hover:w-20 transition-all duration-500`}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
