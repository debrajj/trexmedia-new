import React from "react";
import Link from "next/link";

const PricingList = () => {
  const plans = [
    {
      id: "0",
      name: "Starter",
      subtitle: "For Home & Small Office",
      price: "3,499",
      originalPrice: "4,788",
      period: "/year",
      monthlyPrice: "291",
      popular: false,
      savings: "27%",
      features: [
        { name: "Internet Speed", value: "50 Mbps", included: true },
        { name: "Data Usage", value: "Unlimited", included: true },
        { name: "Customer Support", value: "24/7 Chat & Email", included: true },
        { name: "Installation", value: "Free Professional Setup", included: true },
        { name: "Security", value: "Basic Firewall", included: true },
        { name: "Static IP", value: "1 Address", included: true },
        { name: "Priority Support", value: "Business Hours", included: false },
        { name: "SLA Guarantee", value: "99.5% Uptime", included: false }
      ],
      color: "blue",
      badge: "Best Value"
    },
    {
      id: "1",
      name: "Professional",
      subtitle: "For Growing Businesses",
      price: "5,499",
      originalPrice: "8,388",
      period: "/year",
      monthlyPrice: "458",
      popular: true,
      savings: "34%",
      features: [
        { name: "Internet Speed", value: "500 Mbps", included: true },
        { name: "Data Usage", value: "Unlimited", included: true },
        { name: "Customer Support", value: "24/7 Priority Support", included: true },
        { name: "Installation", value: "Free Professional Setup", included: true },
        { name: "Security", value: "Advanced Security Suite", included: true },
        { name: "Static IP", value: "5 Addresses", included: true },
        { name: "Priority Support", value: "Dedicated Account Manager", included: true },
        { name: "SLA Guarantee", value: "99.9% Uptime", included: true }
      ],
      color: "purple",
      badge: "Most Popular"
    },
    {
      id: "2",
      name: "Enterprise",
      subtitle: "For Large Organizations",
      price: "Custom",
      originalPrice: null,
      period: "",
      monthlyPrice: null,
      popular: false,
      savings: null,
      features: [
        { name: "Internet Speed", value: "Up to 1 Gbps", included: true },
        { name: "Data Usage", value: "Unlimited with SLA", included: true },
        { name: "Customer Support", value: "24/7 On-site Support", included: true },
        { name: "Installation", value: "Custom Network Design", included: true },
        { name: "Security", value: "Enterprise Security", included: true },
        { name: "Static IP", value: "Multiple Addresses", included: true },
        { name: "Priority Support", value: "Dedicated Team", included: true },
        { name: "SLA Guarantee", value: "99.99% Uptime", included: true }
      ],
      color: "emerald",
      badge: "Enterprise"
    }
  ];

  const getColorClasses = (color, popular = false) => {
    const colors = {
      blue: {
        badge: 'bg-blue-500',
        border: popular ? 'border-blue-500' : 'border-n-6 hover:border-blue-500/50',
        price: popular ? 'text-blue-500' : 'text-n-1 group-hover:text-blue-500',
        button: popular ? 'bg-blue-500 hover:bg-blue-600' : 'border-blue-500/20 hover:bg-blue-500',
        glow: 'shadow-blue-500/20'
      },
      purple: {
        badge: 'bg-gradient-to-r from-color-1 to-purple-500',
        border: popular ? 'border-color-1' : 'border-n-6 hover:border-color-1/50',
        price: popular ? 'bg-gradient-to-r from-color-1 to-purple-500 bg-clip-text text-transparent' : 'text-n-1 group-hover:bg-gradient-to-r group-hover:from-color-1 group-hover:to-purple-500 group-hover:bg-clip-text group-hover:text-transparent',
        button: popular ? 'bg-gradient-to-r from-color-1 to-purple-500 hover:shadow-lg hover:shadow-color-1/25' : 'border-color-1/20 hover:bg-gradient-to-r hover:from-color-1 hover:to-purple-500',
        glow: 'shadow-color-1/20'
      },
      emerald: {
        badge: 'bg-emerald-500',
        border: popular ? 'border-emerald-500' : 'border-n-6 hover:border-emerald-500/50',
        price: popular ? 'text-emerald-500' : 'text-n-1 group-hover:text-emerald-500',
        button: popular ? 'bg-emerald-500 hover:bg-emerald-600' : 'border-emerald-500/20 hover:bg-emerald-500',
        glow: 'shadow-emerald-500/20'
      }
    };
    return colors[color] || colors.purple;
  };

  return (
    <div className="max-w-7xl mx-auto">


      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {plans.map((plan, index) => {
          const colorClasses = getColorClasses(plan.color, plan.popular);
          
          return (
            <div
              key={plan.id}
              className={`relative group ${plan.popular ? 'md:col-span-2 lg:col-span-1 lg:scale-105 lg:-mt-4' : ''}`}
            >
              {/* Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className={`${colorClasses.badge} text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold shadow-lg`}>
                  {plan.badge}
                </div>
              </div>

              {/* Card */}
              <div className={`relative bg-n-8 border-2 ${colorClasses.border} rounded-2xl md:rounded-3xl p-6 md:p-8 h-full transition-all duration-300 ${plan.popular ? `shadow-2xl ${colorClasses.glow}` : 'group-hover:shadow-xl'}`}>
                
                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                  <h3 className="text-xl md:text-2xl font-bold text-n-1 mb-2">{plan.name}</h3>
                  <p className="text-n-3 text-xs md:text-sm mb-4 md:mb-6">{plan.subtitle}</p>
                  
                  {/* Price */}
                  <div className="mb-4 md:mb-6">
                    {plan.price === "Custom" ? (
                      <div>
                        <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent mb-2">
                          Custom Quote
                        </div>
                        <p className="text-n-3 text-xs md:text-sm">Tailored to your needs</p>
                      </div>
                    ) : (
                      <div>
                        {/* Savings Badge */}
                        {plan.savings && (
                          <div className="inline-block bg-green-500/20 text-green-400 px-2 py-1 rounded-full text-xs font-medium mb-3 md:mb-4">
                            Save {plan.savings}
                          </div>
                        )}
                        
                        {/* Main Price */}
                        <div className="flex items-baseline justify-center mb-2">
                          <span className="text-lg md:text-2xl font-semibold text-n-3">₹</span>
                          <span className={`text-3xl md:text-5xl font-black ${colorClasses.price}`}>
                            {plan.price}
                          </span>
                          <span className="text-sm md:text-lg text-n-3 ml-1">{plan.period}</span>
                        </div>
                        
                        {/* Original Price */}
                        {plan.originalPrice && (
                          <div className="text-n-4 text-xs md:text-sm line-through mb-1 md:mb-2">
                            ₹{plan.originalPrice}/year
                          </div>
                        )}
                        
                        {/* Monthly Equivalent */}
                        {plan.monthlyPrice && (
                          <div className="text-n-3 text-xs md:text-sm">
                            ₹{plan.monthlyPrice}/month when paid annually
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 md:gap-3">
                      <div className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 mt-0.5">
                        {feature.included ? (
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-4 h-4 md:w-5 md:h-5 text-n-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className={`text-xs md:text-sm font-medium ${feature.included ? 'text-n-1' : 'text-n-4'}`}>
                          {feature.name}
                        </div>
                        <div className={`text-xs ${feature.included ? 'text-n-3' : 'text-n-5'}`}>
                          {feature.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={plan.price === "Custom" ? "/contact" : "/pricing"} className="block">
                  <button className={`w-full py-3 md:py-4 px-4 md:px-6 rounded-lg md:rounded-xl text-sm md:text-base font-semibold transition-all duration-300 ${
                    plan.popular
                      ? `${colorClasses.button} text-white hover:scale-105`
                      : `bg-n-7 text-n-1 border-2 ${colorClasses.button} hover:text-white hover:scale-105`
                  }`}>
                    {plan.price === "Custom" ? "Get Custom Quote" : "Choose Plan"}
                  </button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PricingList;
