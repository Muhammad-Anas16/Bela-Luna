import React from "react";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="relative bg-[#0b120d] px-3 sm:px-4 py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden"
    >
      <div className="mx-auto max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-5">
          <span className="text-[#7CFF3B] text-xs font-bold tracking-[0.25em] uppercase">
            Our Story
          </span>

          <h2 className="text-white text-2xl sm:text-2xl md:text-4xl font-bold leading-tight">
            From Our Garden to <br className="hidden sm:block" /> Your Plate
          </h2>

          <div className="w-14 h-1 bg-[#7CFF3B] rounded-full" />

          <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed max-w-lg">
            Bella Luna was born from a simple passion: to bring the authentic
            flavors of Tuscany to the heart of the city, without compromising on
            sustainability.
          </p>

          <p className="text-[#9ca3af] text-base sm:text-lg leading-relaxed max-w-lg">
            We partner with local organic farms to source 90% of our vegetables.
            Our pasta is handmade daily, and our herbs are picked fresh from our
            rooftop garden just moments before they reach your plate.
          </p>

          {/* STATS */}
          <div className="grid grid-cols-2 gap-5 mt-4 max-w-sm">
            <div>
              <p className="text-white text-3xl font-bold">20+</p>
              <p className="text-sm text-[#9ca3af] mt-1">
                Years of Tradition
              </p>
            </div>
            <div>
              <p className="text-white text-3xl font-bold">100%</p>
              <p className="text-sm text-[#9ca3af] mt-1">
                Organic Sourcing
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex justify-center lg:justify-end">
          
          {/* Image Card */}
          <div className="relative z-10 w-full max-w-sm aspect-[4/5] rounded-[2.25rem] overflow-hidden shadow-2xl">
            <img
              src="/chefPlating.png"
              alt="Chef plating food"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </div>

          {/* Floating Glow (Reduced) */}
          <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#7CFF3B]/20 rounded-full blur-3xl -z-10" />
          <div className="absolute top-6 -right-6 w-28 h-28 bg-[#7CFF3B]/10 rounded-full blur-3xl -z-10" />

          {/* CHEF BADGE (Tightened) */}
          <div className="absolute bottom-3 right-3 sm:-bottom-4 sm:-right-4 z-20 bg-[#101810] border border-[#27331f] rounded-xl px-3 py-2 flex items-center gap-3 shadow-xl">
            <div className="h-10 w-10 rounded-full bg-[#7CFF3B] flex items-center justify-center text-[#0b120d] font-bold">
              🍽
            </div>
            <div>
              <p className="text-white text-sm font-semibold">
                Chef Giovanni
              </p>
              <p className="text-xs text-[#9ca3af]">
                Head Chef & Founder
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
