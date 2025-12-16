import { FaLeaf, FaUtensils, FaWineGlassAlt } from "react-icons/fa";
import { GiHerbsBundle } from "react-icons/gi";

const FeaturesSection = () => {
  const features = [
    {
      icon: FaLeaf,
      title: "Sustainable Sourcing",
      description:
        "Ingredients sourced from local eco-conscious farms.",
    },
    {
      icon: FaUtensils,
      title: "Authentic Recipes",
      description:
        "Time-honored recipes passed down through generations.",
    },
    {
      icon: FaWineGlassAlt,
      title: "Curated Wines",
      description:
        "An extensive collection of fine Italian wines.",
    },
    {
      icon: GiHerbsBundle,
      title: "Cozy Ambience",
      description:
        "Warm, inviting atmosphere perfect for any occasion.",
    },
  ];

  return (
    <section className="bg-[#1b241c] py-16 sm:py-20 md:_toggle lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 sm:h-16 sm:w-16 lg:h-18 lg:w-18 items-center justify-center rounded-full bg-[#0f1510] shadow-[0_0_25px_rgba(34,197,94,0.35)] transition-transform duration-300 hover:scale-110">
                  <Icon className="text-green-400 text-xl sm:text-2xl lg:text-3xl" />
                </div>

                {/* Title */}
                <h3 className="mb-2 text-base sm:text-lg font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="max-w-xs text-sm sm:text-[15px] leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;