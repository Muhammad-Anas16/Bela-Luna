import React from "react";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    text: `"The best Italian food I've had outside of Rome. The atmosphere is enchanting and the pesto gnocchi is to die for!"`,
    name: "Sarah Jenkins",
    role: "Food Critic",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCa64fwlWQQkPu2T2NhvjhzzMRCHJbtjBRzwMuCpEsD4MK_XTEkqWUPSemNf_18WZcABafu7bnGjV9cL7n596RniR8ZYCBSPvegdujQv00jYHEDuglnLqDAsEiULMus4oT11Twhx1N1wvyJNR-Lo5TNXimTbqJ7x-wuduEiQYgeultY3HRP7aSsN9BYOsVKEv5EkufeIg_8yZr-An5lW7wakhyy7PohKOXCZhzb9VcFzi5OgoEQk4Xep_vLvkA9mvLgVKPRjR5dkd-n",
  },
  {
    text: `"A true gem. The staff was incredibly knowledgeable about the wine pairing, and the service was impeccable."`,
    name: "Michael Ross",
    role: "Local Guide",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCAdzREjH5r1il4IIEXnHrPBYYw0amCxftmZ1C35PBVd9SNd3thqclbSmYSLcrVkrRJYxk0Q16Z-pQpD9MAAMeVsWpfFTXY06z751vCapfngqAr3NyQwFwVyFpQrSV80AZVS37BTSu4Hh67YX938DIGDRT_xYaPdm7fdxJ3FkUwpqTze0BP02sPRXjmdey5hLZEijaTby6RE9umKasHOC9G5MGrTxbq3Bwnz29MnMOh6oog4oyx-b7um8rGtYRM5K1BMCPKcXgpdarr",
  },
  {
    text: `"Lovely place for an anniversary dinner. It felt very intimate and the dessert was the perfect ending."`,
    name: "Emily Chen",
    role: "Verified Guest",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAOYEgkdG9VVMbfT-DpaUu8ny7QMv4iWAcOLau5pp22-RWWBdBVne-u9_wmhVSlC8q3cQHlhXw21SsQD2FuMim50QtA3gZSpypGzC68JIB7Mcui7BHJ7NHvMzn1gqWncnjgZJLZeLlhQ3Um2U4J_8b_PJ6q9WQV7fwU2zoL5TcVWA8rmbUk4OxCWbtHcMYaw36w29IkwoHYg1LfDvh7IhaPcUgJGRBAOTbRh31NDVXGKEcyFmix_0XYU9WPF31rE-Yicu32kc22WQ7H",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#1F251D] py-24 border-t border-[#2d372a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-white text-4xl font-semibold text-center mb-16">
          What Our Guests Say
        </h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a2017] border border-[#2d372a] rounded-[2.5rem] p-8 flex flex-col justify-between"
            >
              {/* Stars */}
              <div className="flex gap-1 text-[#6AFF3D] mb-6">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} size={22} />
                ))}
              </div>

              {/* Text */}
              <p className="text-white text-base leading-relaxed mb-10">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {item.name}
                  </p>
                  <p className="text-[#9aa59a] text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;