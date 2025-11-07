"use client";
import React, { useState } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section";
import Heading from "@/components/Heading";
import Button from "@/components/Button/Button";
import { shopProducts } from "@/constants";
import ButtonGradient from "../assets/svg/ButtonGradient";

const ShopPage = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Routers", "Security", "Switches", "Mesh Systems", "Access Points", "Cables"];
  
  const filteredProducts = selectedCategory === "All" 
    ? shopProducts 
    : shopProducts.filter(product => product.category === selectedCategory);

  const handleWhatsAppRedirect = (product) => {
    const message = `Hi! I'm interested in purchasing the ${product.title} for ₹${product.price}. 

Product Details:
- ${product.description}
- Category: ${product.category}
- Rating: ${product.rating}/5 (${product.reviews} reviews)

Please provide more information about availability and delivery.`;
    
    const whatsappNumber = "919876543210"; // Replace with your actual WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappURL, '_blank');
  };

  const StarRating = ({ rating, reviews }) => (
    <div className="flex items-center gap-1 mb-2">
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-sm ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-n-4'}`}>
            ★
          </span>
        ))}
      </div>
      <span className="text-xs text-n-3">({reviews})</span>
    </div>
  );

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        
        <Section className="pt-[8rem]" crosses>
          <div className="container">
            <Heading
              tag="Premium Shop"
              title="Next-Gen Network Equipment"
              text="Professional-grade hardware engineered for the future of connectivity"
            />

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-color-1 text-n-1 glow'
                      : 'bg-n-7 text-n-3 hover:bg-n-6 hover:text-n-1'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-gradient-to-br from-n-8 to-n-7 rounded-2xl border border-n-6 overflow-hidden transition-all duration-500 hover:border-color-1/50 hover:glow"
                  onMouseEnter={() => setHoveredId(product.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Stock Badge */}
                  {!product.inStock && (
                    <div className="absolute top-4 left-4 z-10 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                      Out of Stock
                    </div>
                  )}
                  
                  {/* Sale Badge */}
                  {product.originalPrice && (
                    <div className="absolute top-4 right-4 z-10 bg-color-1 text-n-1 px-3 py-1 rounded-full text-xs font-bold">
                      SALE
                    </div>
                  )}

                  {/* Product Image */}
                  <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-n-6 to-n-7">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-n-8/80 via-transparent to-transparent transition-opacity duration-300 ${
                        hoveredId === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    
                    {/* Quick View Button */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                        hoveredId === product.id ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <button className="bg-color-1 text-n-1 px-6 py-2 rounded-full font-medium hover:bg-color-1/90 transition-colors">
                        Quick View
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <div className="text-xs text-color-1 font-medium mb-2 uppercase tracking-wider">
                      {product.category}
                    </div>
                    
                    <h3 className="h6 mb-3 group-hover:text-color-1 transition-colors">
                      {product.title}
                    </h3>
                    
                    <StarRating rating={product.rating} reviews={product.reviews} />
                    
                    <p className="body-2 text-n-3 mb-4 line-clamp-2">
                      {product.description}
                    </p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-2xl font-bold text-color-1">
                        ₹{product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-lg text-n-4 line-through">
                          ₹{product.originalPrice}
                        </span>
                      )}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button 
                        className="flex-1" 
                        disabled={!product.inStock}
                        onClick={() => handleWhatsAppRedirect(product)}
                      >
                        {product.inStock ? 'Shop Now' : 'Notify on WhatsApp'}
                      </Button>
                      <button 
                        className="p-3 border border-n-6 rounded-lg hover:border-color-1 transition-colors"
                        onClick={() => handleWhatsAppRedirect(product)}
                        title="Contact on WhatsApp"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.690z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Features Section */}
            <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t border-n-6">
              <div className="text-center p-8 bg-gradient-to-br from-n-8 to-n-7 rounded-2xl border border-n-6 group hover:border-color-1/50 transition-all duration-300">
                <div className="w-16 h-16 bg-color-1/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-color-1/20 transition-colors">
                  <svg className="w-8 h-8 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h4 className="h6 mb-3 group-hover:text-color-1 transition-colors">Free Shipping</h4>
                <p className="body-2 text-n-3">Complimentary shipping on all orders over ₹15,000 with express delivery options</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-n-8 to-n-7 rounded-2xl border border-n-6 group hover:border-color-1/50 transition-all duration-300">
                <div className="w-16 h-16 bg-color-1/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-color-1/20 transition-colors">
                  <svg className="w-8 h-8 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="h6 mb-3 group-hover:text-color-1 transition-colors">Expert Installation</h4>
                <p className="body-2 text-n-3">Professional setup and configuration by certified network engineers</p>
              </div>
              
              <div className="text-center p-8 bg-gradient-to-br from-n-8 to-n-7 rounded-2xl border border-n-6 group hover:border-color-1/50 transition-all duration-300">
                <div className="w-16 h-16 bg-color-1/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-color-1/20 transition-colors">
                  <svg className="w-8 h-8 text-color-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="h6 mb-3 group-hover:text-color-1 transition-colors">Extended Warranty</h4>
                <p className="body-2 text-n-3">Comprehensive 3-year warranty with 24/7 technical support included</p>
              </div>
            </div>
          </div>
        </Section>

        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default ShopPage;
