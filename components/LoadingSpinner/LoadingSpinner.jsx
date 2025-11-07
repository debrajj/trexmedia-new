"use client";
import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-n-8">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-n-6 border-t-color-1 rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-n-6 border-t-color-2 rounded-full animate-spin" style={{ animationDirection: "reverse" }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
