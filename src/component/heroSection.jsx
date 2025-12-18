import React from "react";
import { GoDotFill } from "react-icons/go";

const HeroSection = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-[url('/heroBackround.png')] bg-cover bg-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 sm:px-5 py-1.5 rounded-full bg-[#183412]/80 backdrop-blur-md border border-[#53D22D] text-[#53D22D] text-xs sm:text-sm font-medium">
          <GoDotFill className="text-[#53D22D]" />
          <span>Now Open for Reservations</span>
        </div>

        {/* Headings */}
        <h1 className="font-semibold text-white leading-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Freshness Redefined.
        </h1>
        <h2 className="font-semibold text-white mt-2 text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
          Authentic Italian.
        </h2>

        {/* Description */}
        <p className="mt-5 sm:mt-6 text-gray-200 max-w-xl sm:max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
          Experience the garden-to-table difference with our sustainably sourced
          ingredients and masterfully crafted traditional recipes.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <button onClick={() => scrollToSection("menu")} className="w-full sm:w-auto px-7 sm:px-8 py-3 rounded-full bg-[#53D22D] border-2 border-[#53D22D] text-black text-sm sm:text-base font-medium transition hover:bg-[#47bb27]">
            View Menu
          </button>

          <button onClick={() => scrollToSection("reservation")} className="w-full sm:w-auto px-7 sm:px-8 py-3 rounded-full border-2 border-white text-white text-sm sm:text-base bg-[#454229]/80 backdrop-blur-md transition hover:bg-[#595741]">
            Book a Table
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
