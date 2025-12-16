// import React, { useState } from "react";
// import { LuPizza, LuMenu, LuX } from "react-icons/lu";

// const Navbar = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0f1a0f]/80 backdrop-blur-md">
//       <div className="mx-auto max-w-7xl px-4 sm:px-6">
//         {/* Top Bar */}
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center gap-2 text-3xl cursor-pointer">
//             <LuPizza className="text-[#53D22D] font-bold" />
//             <span className="text-2xl font-semibold text-white">
//               Bella Luna
//             </span>
//           </div>

//           {/* Desktop Menu */}
//           <ul className="hidden md:flex items-center gap-8 font-medium text-white/80">
//             <li className="hover:text-[#53D22D] cursor-pointer">Home</li>
//             <li className="hover:text-[#53D22D] cursor-pointer">About</li>
//             <li className="hover:text-[#53D22D] cursor-pointer">Menu</li>
//             <li className="hover:text-[#53D22D] cursor-pointer">Gallery</li>
//             <li className="hover:text-[#53D22D] cursor-pointer">Contact</li>
//           </ul>

//           {/* Right Side (Mobile + Desktop) */}
//           <div className="flex items-center gap-3">
//             {/* Book Button (All screens) */}
//             <button className="rounded-full bg-[#53D22D] px-4 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-[#47bb27] transition">
//               Book a Table
//             </button>

//             {/* Hamburger (Mobile only) */}
//             <button
//               className="md:hidden text-white text-2xl"
//               onClick={() => setOpen(!open)}
//             >
//               {open ? <LuX /> : <LuMenu />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {open && (
//           <div className="md:hidden pb-4">
//             <ul className="mt-2 flex flex-col gap-4 rounded-xl bg-[#0f1a0f]/90 p-4 text-sm font-medium text-white cursor-pointer">
//               <li className="hover:bg-[#53D22D] py-1.5 px-1 rounded-md">Home</li>
//               <li className="hover:bg-[#53D22D] py-1.5 px-1 rounded-md">About</li>
//               <li className="hover:bg-[#53D22D] py-1.5 px-1 rounded-md">Menu</li>
//               <li className="hover:bg-[#53D22D] py-1.5 px-1 rounded-md">Gallery</li>
//               <li className="hover:bg-[#53D22D] py-1.5 px-1 rounded-md">Contact</li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { LuPizza, LuMenu, LuX } from "react-icons/lu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0f1a0f]/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top Bar */}
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <LuPizza className="text-[#53D22D] text-3xl font-bold" />

            {/* Desktop Logo Text */}
            <span className="hidden sm:block text-2xl font-semibold text-white">
              Bella Luna
            </span>

            {/* Mobile Logo Text */}
            <span className="block sm:hidden text-lg font-semibold leading-tight text-white">
              Bella <br /> Luna
            </span>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-8 font-medium text-white/80">
            <li className="hover:text-[#53D22D] cursor-pointer">Home</li>
            <li className="hover:text-[#53D22D] cursor-pointer">About</li>
            <li className="hover:text-[#53D22D] cursor-pointer">Menu</li>
            <li className="hover:text-[#53D22D] cursor-pointer">Gallery</li>
            <li className="hover:text-[#53D22D] cursor-pointer">Contact</li>
          </ul>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            {/* Book Button */}
            <button className="rounded-full bg-[#53D22D] px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold text-black hover:bg-[#47bb27] transition">
              Book a Table
            </button>

            {/* Hamburger */}
            <button
              className="md:hidden text-white text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? <LuX /> : <LuMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4">
            <ul className="mt-2 flex flex-col gap-4 rounded-xl bg-[#0f1a0f]/90 p-4 text-sm font-medium text-white">
              <li className="hover:bg-[#53D22D] py-1.5 px-2 rounded-md cursor-pointer">
                Home
              </li>
              <li className="hover:bg-[#53D22D] py-1.5 px-2 rounded-md cursor-pointer">
                About
              </li>
              <li className="hover:bg-[#53D22D] py-1.5 px-2 rounded-md cursor-pointer">
                Menu
              </li>
              <li className="hover:bg-[#53D22D] py-1.5 px-2 rounded-md cursor-pointer">
                Gallery
              </li>
              <li className="hover:bg-[#53D22D] py-1.5 px-2 rounded-md cursor-pointer">
                Contact
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;