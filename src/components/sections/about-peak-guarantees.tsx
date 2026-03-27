"use client";
import React from "react";
import AboutPeakGuarantee from "./about-peak-guarantee";

const AboutPeakGuarantees = () => {
  return (
    <div className="col-span-2 relative group">
      <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-primary/5 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
      <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300">
        <div className="grid grid-cols-3 gap-6 text-center">
          <AboutPeakGuarantee
            title={"100%"}
            description={"Client Satisfaction"}
          />
          <AboutPeakGuarantee
            title={"24/7"}
            description={"Support Availability"}
          />
          <AboutPeakGuarantee
            title={"Fast"}
            description={"Timely Deliveries"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutPeakGuarantees;
