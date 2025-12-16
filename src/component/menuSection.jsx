import React from "react";
import { FaStar, FaStarHalfAlt, FaArrowRight } from "react-icons/fa";

const menuItems = [
  {
    title: "Pesto Gnocchi",
    price: "$24",
    rating: 4.5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBWZM7bO61QUkhUnPXAY8OWYWHNsn4x1IDmtxVhHTjjVzo5SOpAJhb0HyzMIanUPye-SXKwIugLk7SXyoBtiY4Tf4ZGbuVQNbAL2ILD3gQ2RlKtLVuhD5X2TCUxM2az-al8EM8wg-JpDWtaNfep9y87oUbCJKvXzbI0sYZlnh5p-9g8DMJ1L9PrtXozGEXiVsUeCyWtXbuNqaVltHeA35zzQhRDwYDKsfr4Cy2_lD_ucSiIBKezyYXCHn2jaNx6Zn05rPi7Tk_tBBj1",
    description:
      "Handmade potato gnocchi tossed in our signature basil pesto with toasted pine nuts and parmigiano.",
  },
  {
    title: "Margherita D.O.P",
    price: "$28",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_eAuovET8WTwEc1r7kTfFctSyjvQ9ySw_zbbU3fxb-VGtqskhG2rvFYyj2fQL-qM4zgfStyxo1OxcgXrCmOcjjWFJ2xVja2NKtTLweb5saRSwlReznLiwMCo6yyC6Ak7NPB8anxCHVYyFgQtbWyr5a2DLwxSZNL8GXJS5dW2ND5aVHxdV7j3OPAFrlzy-OpeCXe3j5zIlY109UFOOORMETwkJGDbtmNekrKkHyvo7KSz0BQ6ncv-NWAqcF_2dXtL5jDEbDGLZpcVS",
    description:
      "San Marzano tomato sauce, buffalo mozzarella, fresh basil, and extra virgin olive oil.",
  },
  {
    title: "Truffle Risotto",
    price: "$32",
    rating: 5,
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAc7V1-aNXhD-VlG-XmpGbb5e-fKW7wpM7tvLfjCmDKPJTg-6W5wpN0-YiEpU49u1IN3KeSG4Tr3wSxuysqgSMhTAEF5JeUGMYpAonpN47LJL8og8YuthtPisuEBbVmSuiX3A20N8fYCV6XFfCCQMYw2XO0peqX_MB4Txr2ej0o51JYKx-_PitEg2Ll5DUtUV-7OBgIsy0pgIgLmJaPwCjzChOXNFQ1qFqUgNWzTNmujGncxq6jvf5DcoziJbpayAIAz4YZLMsekXpr",
    description:
      "Arborio rice slow-cooked with wild mushrooms, black truffle shavings, and aged parmesan cream.",
  },
];

const MenuSection = () => {
  return (
    <section
      id="menu"
      className="bg-[#1b241c] py-16 sm:py-20 lg:py-28 px-4 sm:px-6 lg:px-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-green-400 text-sm font-bold tracking-widest uppercase">
              Our Menu
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold mt-2">
              Curated Classics
            </h2>
            <p className="text-gray-400 mt-4 text-base sm:text-lg">
              Selected dishes that define our culinary philosophy. Explore the
              taste of Italy.
            </p>
          </div>

          <a
            href="#"
            className="hidden lg:flex items-center gap-2 text-green-400 font-semibold hover:text-white transition"
          >
            View Full Menu <FaArrowRight />
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="group rounded-[2rem] bg-[#202820] border border-[#2d372a] p-4 hover:bg-[#252c23] hover:border-green-400/40 transition"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-[1.75rem] overflow-hidden mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full text-white text-sm font-bold">
                  {item.price}
                </span>
              </div>

              {/* Content */}
              <div className="px-1 pb-3 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-white text-lg sm:text-xl font-bold group-hover:text-green-400 transition">
                    {item.title}
                  </h3>
                  <div className="flex gap-1 text-yellow-500">
                    {[...Array(Math.floor(item.rating))].map((_, i) => (
                      <FaStar key={i} size={14} />
                    ))}
                    {item.rating % 1 !== 0 && <FaStarHalfAlt size={14} />}
                  </div>
                </div>

                <p className="text-gray-400 text-sm leading-relaxed line-clamp-2">
                  {item.description}
                </p>

                <button className="mt-3 h-10 w-full rounded-full border border-[#42513e] text-white text-sm font-semibold hover:bg-green-400 hover:text-[#1b241c] hover:border-green-400 transition">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button */}
        <a
          href="#"
          className="lg:hidden flex items-center justify-center gap-2 text-green-400 font-semibold border border-[#2d372a] rounded-full py-3 hover:text-white hover:border-green-400 transition"
        >
          View Full Menu <FaArrowRight />
        </a>
      </div>
    </section>
  );
};

export default MenuSection;