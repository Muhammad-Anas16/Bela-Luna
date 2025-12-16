import React from "react";

const GallerySection = () => {
  return (
    <section
      id="gallery"
      className="bg-[#1b241c] py-16 sm:py-20 lg:py-28"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-green-400 text-sm font-bold tracking-widest uppercase">
            Gallery
          </span>
          <h2 className="mt-2 text-white text-3xl sm:text-4xl font-bold">
            A Glimpse of Bella Luna
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[160px] sm:auto-rows-[200px] md:auto-rows-[220px]">
          {/* Large Left Image */}
          <div className="col-span-2 row-span-2 rounded-[2rem] overflow-hidden group relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA42rCNROCKDe5y77sSpjRjJIQ7RGj6dLgJYD0MivNCzj-wv5cy2KEKxbpBft55dDAGLJT4_f8sAY1Nab7dx0gTkBxuy5_cyTppqD-YM_4vWmzWgpxdSzYSw2wFMjLyEfy8tdum0P766x0DpRP0yUfToUKquvpD_UnmRCUT-z8Hi6GdP2rg-OrdpoHHgDEN9DhBWFnwSwJYv09KQL_6avdOjG0lTVZ-jg2FC0pJI5aKqyX4FbD_ZUkGaV2afBOILDOpIAbJnH7ImrBB"
              alt="Warm and cozy restaurant interior"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
          </div>

          {/* Top Right – Ingredients */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBzCMEM6TQd2Y5lN6AbUwBIOPz_L-lQP-sLjnNzLP5V60OGaxJAcvUUBEkI8l0o--F0tQoqg6WT-192zQfz9fjcZnEdlqASWkjeizojjvlouMFkiBe29qc_9LHWENM0mp1_5Z7LY1bR1BzwUUSf4zoByTXG8D2DkEkVqK6qOdqiyf3Kcq_t1FXQzeA-ftET-u5d25cFbcn95O8jynfRDNwwlZH_dMMv7X1UIo0pvHiDKL8evZkeh5-fggUlm06ObF29w1j4a96ikjZM"
              alt="Fresh ingredients"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Top Right – Dessert */}
          <div className="rounded-[2rem] overflow-hidden group relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJT9CnPJJDpaz4w3ohQXM0em9aRCIWeehU3cuaxFSpf0c29ABpyah6FVXNhpUQGB3MWcA6b-Nqz4WrMsXZx9nYB0Hsj_JwmEUEesk059eieg85soYE4jwRgpyOTBFBUWYqDOOFv63FZFM9inQs26vscpDJbf1Yb80-cC_ByfOwnyeSLwmHOKKCwgVm6d1TLFrIMarRP5Z4hZBQcuTUGVVLHQ1AdTsPj5ds3CDUkstX_Glwob23ZKd2eUlnXP0DXpijwWfgstUXUqOJ"
              alt="Dessert"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Bottom Right – People */}
          <div className="col-span-2 rounded-[2rem] overflow-hidden group relative">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbbObyOucFJaxueRKLmHI6D5waqnVfNuYVU9S8fz0ZTAyfj2FEJewWbfPfgRVroURVa6HIw_jiAHzSmrpj3unpVFnBMdVXuz-MnnbPFRwCFZE70t8P9ohmNZ7ZOYpt86Am-KsLYJV0KGZw8hJHYvFf4X6MY4Gz8t1_YLn5_hCAmZZjgLawE0HkUeGFKkNB7dR-a-oWI8CuybO8HJRp0Bksn_hPALpl_gRJaDMpIqKvJ11XmFWjdGGW_gcowSzeWVaZ2HRyys-VGj6h"
              alt="Friends enjoying dinner"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;