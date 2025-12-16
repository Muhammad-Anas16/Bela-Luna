import React from "react";

const ReservationSection = () => {
  return (
    <section
      id="reservation"
      className="relative bg-[#162413] py-24 px-6 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[700px] h-[700px] bg-[#6aff3d]/10 blur-[160px] rounded-full -top-40 absolute" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-white text-4xl md:text-5xl font-semibold mb-4">
          Reserve Your Table
        </h2>
        <p className="text-[#9aa59a] max-w-xl mx-auto mb-12 text-sm md:text-base">
          Book a table online for an unforgettable dining experience. For
          parties larger than 8, please contact us directly.
        </p>

        {/* Form Card */}
        <form className="bg-[#1a2017] border border-[#2d372a] rounded-[2.8rem] p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Full Name */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white text-sm font-semibold ml-4">
                Full Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="h-14 rounded-full bg-[#162413] border border-[#2d372a] px-6 text-white placeholder-[#6f7c6f] focus:border-[#6aff3d] focus:ring-1 focus:ring-[#6aff3d] outline-none"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white text-sm font-semibold ml-4">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="(555) 000-0000"
                className="h-14 rounded-full bg-[#162413] border border-[#2d372a] px-6 text-white placeholder-[#6f7c6f] focus:border-[#6aff3d] focus:ring-1 focus:ring-[#6aff3d] outline-none"
              />
            </div>

            {/* Date */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white text-sm font-semibold ml-4">
                Date
              </label>
              <input
                type="date"
                className="h-14 rounded-full bg-[#162413] border border-[#2d372a] px-6 text-white focus:border-[#6aff3d] focus:ring-1 focus:ring-[#6aff3d] outline-none [color-scheme:dark]"
              />
            </div>

            {/* Time */}
            <div className="flex flex-col gap-2 text-left">
              <label className="text-white text-sm font-semibold ml-4">
                Time
              </label>
              <input
                type="time"
                className="h-14 rounded-full bg-[#162413] border border-[#2d372a] px-6 text-white focus:border-[#6aff3d] focus:ring-1 focus:ring-[#6aff3d] outline-none [color-scheme:dark]"
              />
            </div>

            {/* Guests */}
            <div className="flex flex-col gap-2 text-left md:col-span-2">
              <label className="text-white text-sm font-semibold ml-4">
                Number of Guests
              </label>
              <select className="h-14 rounded-full bg-[#162413] border border-[#2d372a] px-6 text-white focus:border-[#6aff3d] focus:ring-1 focus:ring-[#6aff3d] outline-none appearance-none">
                <option>2 People</option>
                <option>3 People</option>
                <option>4 People</option>
                <option>5 People</option>
                <option>6+ People</option>
              </select>
            </div>
          </div>

          {/* Button */}
          <button
            type="button"
            className="w-full h-14 rounded-full bg-[#6aff3d] text-[#162413] font-semibold text-lg hover:bg-[#58e632] transition shadow-lg shadow-[#6aff3d]/20"
          >
            Confirm Reservation
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReservationSection;