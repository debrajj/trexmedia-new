import React, { useState } from "react";
import Link from "next/link";

const PricingList = () => {
  const [activeTab, setActiveTab] = useState("unlimited");

  // FUP Data Plans
  const fupPlans = [
    {
      id: "1",
      planId: "1",
      speed: "30",
      data: "2TB",
      validity: "30",
      price: "411.82",
      basePrice: "349",
      ott: false,
      popular: false
    },
    {
      id: "2",
      planId: "2",
      speed: "50",
      data: "1.5TB",
      validity: "30",
      price: "502",
      basePrice: "425",
      ott: false,
      popular: false
    },
    {
      id: "3",
      planId: "3",
      speed: "50",
      data: "2.5TB",
      validity: "30",
      price: "588.82",
      basePrice: "499",
      ott: true,
      popular: true
    },
    {
      id: "4",
      planId: "4",
      speed: "100",
      data: "1.5TB",
      validity: "30",
      price: "647.82",
      basePrice: "549",
      ott: false,
      popular: false
    },
    {
      id: "5",
      planId: "5",
      speed: "100",
      data: "3.3TB",
      validity: "30",
      price: "824.82",
      basePrice: "699",
      ott: true,
      popular: false
    }
  ];

  // Unlimited Data Plans
  const unlimitedPlans = [
    {
      id: "30287",
      planId: "30287",
      speed: "5",
      data: "UNLIMITED",
      validity: "30",
      price: "411.82",
      basePrice: "349",
      popular: false
    },
    {
      id: "30225",
      planId: "30225",
      speed: "10",
      data: "UNLIMITED",
      validity: "30",
      price: "588.82",
      basePrice: "499",
      popular: false
    },
    {
      id: "30229",
      planId: "30229",
      speed: "20",
      data: "UNLIMITED",
      validity: "30",
      price: "706.82",
      basePrice: "599",
      popular: true
    },
    {
      id: "30233",
      planId: "30233",
      speed: "50",
      data: "UNLIMITED",
      validity: "30",
      price: "942.82",
      basePrice: "799",
      popular: false
    },
    {
      id: "30237",
      planId: "30237",
      speed: "100",
      data: "UNLIMITED",
      validity: "30",
      price: "1178.82",
      basePrice: "999",
      popular: false
    }
  ];

  const currentPlans = activeTab === "unlimited" ? unlimitedPlans : fupPlans;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {/* Tab Switcher */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex bg-n-7 border border-n-6 rounded-2xl p-1.5">
          <button
            onClick={() => setActiveTab("unlimited")}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === "unlimited"
                ? "bg-gradient-to-r from-color-1 to-purple-500 text-white shadow-lg"
                : "text-n-3 hover:text-n-1"
            }`}
          >
            Unlimited Data Plans
          </button>
          <button
            onClick={() => setActiveTab("fup")}
            className={`px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 ${
              activeTab === "fup"
                ? "bg-gradient-to-r from-color-1 to-purple-500 text-white shadow-lg"
                : "text-n-3 hover:text-n-1"
            }`}
          >
            FUP Data Plans
          </button>
        </div>
      </div>

      {/* Section Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-n-1 mb-2">
          {activeTab === "unlimited" ? "Unlimited Data Plans" : "FUP Data Plans"}
        </h3>
        <p className="text-n-3 text-sm md:text-base">
          {activeTab === "unlimited" 
            ? "Truly unlimited internet with no data caps" 
            : "High-speed plans with generous data allowances"}
        </p>
      </div>

      {/* Horizontal Table - Desktop */}
      <div className="hidden lg:block overflow-x-auto">
        <div className="bg-n-8 border border-n-6 rounded-3xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-color-1/10 to-purple-500/10 border-b border-n-6">
                <th className="text-left py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Plan ID
                </th>
                <th className="text-left py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Internet Speed
                </th>
                <th className="text-left py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Data
                </th>
                <th className="text-left py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Validity
                </th>
                <th className="text-left py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Monthly Subscription
                </th>
                <th className="text-center py-6 px-6 text-n-1 font-bold text-sm uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPlans.map((plan, index) => (
                <tr 
                  key={plan.id}
                  className={`border-b border-n-6 transition-all duration-300 hover:bg-gradient-to-r hover:from-color-1/5 hover:to-purple-500/5 ${
                    plan.popular ? 'bg-gradient-to-r from-color-1/5 to-purple-500/5' : ''
                  }`}
                >
                  {/* Plan ID */}
                  <td className="py-6 px-6">
                    <div className="flex items-center gap-2">
                      <span className="text-n-1 font-semibold text-lg">{plan.planId}</span>
                      {plan.popular && (
                        <span className="bg-gradient-to-r from-color-1 to-purple-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                          Popular
                        </span>
                      )}
                      {plan.ott && (
                        <span className="bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full text-xs font-medium">
                          + OTT
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Speed */}
                  <td className="py-6 px-6">
                    <div className="flex items-baseline gap-1">
                      <span className="text-xs text-n-3">(upto)</span>
                      <span className="text-2xl font-bold text-n-1">{plan.speed}</span>
                      <span className="text-sm text-n-3">Mbps</span>
                    </div>
                  </td>

                  {/* Data */}
                  <td className="py-6 px-6">
                    <span className={`text-lg font-bold ${
                      plan.data === "UNLIMITED" 
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent' 
                        : 'text-n-1'
                    }`}>
                      {plan.data}
                    </span>
                  </td>

                  {/* Validity */}
                  <td className="py-6 px-6">
                    <span className="text-n-1 font-medium">{plan.validity} Days</span>
                  </td>

                  {/* Price */}
                  <td className="py-6 px-6">
                    <div>
                      <div className="flex items-baseline gap-1 mb-1">
                        <span className="text-lg font-semibold text-n-3">₹</span>
                        <span className="text-2xl font-black text-n-1">{plan.price}</span>
                        <span className="text-sm text-n-3">/mo</span>
                      </div>
                      <div className="text-xs text-n-4">
                        (inclusive 18% GST)
                      </div>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-6 px-6">
                    <Link href="/contact">
                      <button className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 whitespace-nowrap ${
                        plan.popular
                          ? 'bg-gradient-to-r from-color-1 to-purple-500 text-white hover:shadow-lg hover:shadow-color-1/25 hover:scale-105'
                          : 'bg-n-7 text-n-1 border-2 border-color-1/20 hover:bg-gradient-to-r hover:from-color-1 hover:to-purple-500 hover:text-white hover:scale-105'
                      }`}>
                        Get Started
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Horizontal Scrollable Table */}
      <div className="lg:hidden overflow-x-auto -mx-4 px-4">
        <div className="bg-n-8 border border-n-6 rounded-2xl overflow-hidden min-w-[800px]">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-color-1/10 to-purple-500/10 border-b border-n-6">
                <th className="text-left py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Plan ID
                </th>
                <th className="text-left py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Speed
                </th>
                <th className="text-left py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Data
                </th>
                <th className="text-left py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Validity
                </th>
                <th className="text-left py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Price
                </th>
                <th className="text-center py-4 px-4 text-n-1 font-bold text-xs uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {currentPlans.map((plan) => (
                <tr 
                  key={plan.id}
                  className={`border-b border-n-6 transition-all duration-300 ${
                    plan.popular ? 'bg-gradient-to-r from-color-1/5 to-purple-500/5' : ''
                  }`}
                >
                  {/* Plan ID */}
                  <td className="py-4 px-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-n-1 font-semibold text-base">{plan.planId}</span>
                      <div className="flex flex-wrap gap-1">
                        {plan.popular && (
                          <span className="bg-gradient-to-r from-color-1 to-purple-500 text-white px-1.5 py-0.5 rounded-full text-[10px] font-semibold">
                            Popular
                          </span>
                        )}
                        {plan.ott && (
                          <span className="bg-purple-500/20 text-purple-400 px-1.5 py-0.5 rounded-full text-[10px] font-medium">
                            OTT
                          </span>
                        )}
                      </div>
                    </div>
                  </td>

                  {/* Speed */}
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-1">
                        <span className="text-lg font-bold text-n-1">{plan.speed}</span>
                        <span className="text-xs text-n-3">Mbps</span>
                      </div>
                      <span className="text-[10px] text-n-4">(upto)</span>
                    </div>
                  </td>

                  {/* Data */}
                  <td className="py-4 px-4">
                    <span className={`text-sm font-bold ${
                      plan.data === "UNLIMITED" 
                        ? 'bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent' 
                        : 'text-n-1'
                    }`}>
                      {plan.data}
                    </span>
                  </td>

                  {/* Validity */}
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <span className="text-n-1 font-semibold text-base">{plan.validity}</span>
                      <span className="text-[10px] text-n-3">Days</span>
                    </div>
                  </td>

                  {/* Price */}
                  <td className="py-4 px-4">
                    <div className="flex flex-col">
                      <div className="flex items-baseline gap-0.5">
                        <span className="text-xs font-semibold text-n-3">₹</span>
                        <span className="text-lg font-black text-n-1">{plan.price}</span>
                      </div>
                      <span className="text-[10px] text-n-4">+18% GST</span>
                    </div>
                  </td>

                  {/* Action */}
                  <td className="py-4 px-4">
                    <Link href="/contact">
                      <button className={`px-4 py-2 rounded-lg font-semibold text-xs transition-all duration-300 whitespace-nowrap ${
                        plan.popular
                          ? 'bg-gradient-to-r from-color-1 to-purple-500 text-white'
                          : 'bg-n-7 text-n-1 border border-color-1/20'
                      }`}>
                        Get Started
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        {/* Scroll Hint */}
        <div className="flex items-center justify-center gap-2 mt-4 text-n-4">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span className="text-xs">Swipe to see all details</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Info Note */}
      <div className="mt-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-n-7/50 border border-n-6/50 rounded-full">
          <svg className="w-4 h-4 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs text-n-3">All prices include 18% GST • Free installation • 24/7 support</span>
        </div>
      </div>
    </div>
  );
};

export default PricingList;
