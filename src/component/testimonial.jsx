import React from "react";
import { MdStarOutline } from "react-icons/md";


const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-[#1F251D] border-t border-[#2d372a]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-10 lg:px-40">
        <h2 className="text-white text-3xl md:text-4xl font-bold text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Review 1 */}
          <div className="bg-background-dark p-8 rounded-[2.5rem] border border-[#2d372a]">
            <div className="flex gap-1 text-primary mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              "The best Italian food I've had outside of Rome. The atmosphere is
              enchanting and the pesto gnocchi is to die for!"
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-gray-600">
                <img
                  alt="Portrait of Sarah Jenkins"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCa64fwlWQQkPu2T2NhvjhzzMRCHJbtjBRzwMuCpEsD4MK_XTEkqWUPSemNf_18WZcABafu7bnGjV9cL7n596RniR8ZYCBSPvegdujQv00jYHEDuglnLqDAsEiULMus4oT11Twhx1N1wvyJNR-Lo5TNXimTbqJ7x-wuduEiQYgeultY3HRP7aSsN9BYOsVKEv5EkufeIg_8yZr-An5lW7wakhyy7PohKOXCZhzb9VcFzi5OgoEQk4Xep_vLvkA9mvLgVKPRjR5dkd-n"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Sarah Jenkins</p>
                <p className="text-text-muted text-xs">Food Critic</p>
              </div>
            </div>
          </div>
          {/* Review 2 */}
          <div className="bg-background-dark p-8 rounded-[2.5rem] border border-[#2d372a]">
            <div className="flex gap-1 text-primary mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              "A true gem. The staff was incredibly knowledgeable about the wine
              pairing, and the service was impeccable."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-gray-600">
                <img
                  alt="Portrait of Michael Ross"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCAdzREjH5r1il4IIEXnHrPBYYw0amCxftmZ1C35PBVd9SNd3thqclbSmYSLcrVkrRJYxk0Q16Z-pQpD9MAAMeVsWpfFTXY06z751vCapfngqAr3NyQwFwVyFpQrSV80AZVS37BTSu4Hh67YX938DIGDRT_xYaPdm7fdxJ3FkUwpqTze0BP02sPRXjmdey5hLZEijaTby6RE9umKasHOC9G5MGrTxbq3Bwnz29MnMOh6oog4oyx-b7um8rGtYRM5K1BMCPKcXgpdarr"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Michael Ross</p>
                <p className="text-text-muted text-xs">Local Guide</p>
              </div>
            </div>
          </div>
          {/* Review 3 */}
          <div className="bg-background-dark p-8 rounded-[2.5rem] border border-[#2d372a]">
            <div className="flex gap-1 text-primary mb-4">
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star</span>
              <span className="material-symbols-outlined">star_half</span>
            </div>
            <p className="text-white mb-6 leading-relaxed">
              "Lovely place for an anniversary dinner. It felt very intimate and
              the dessert was the perfect ending."
            </p>
            <div className="flex items-center gap-4">
              <div className="size-12 rounded-full overflow-hidden bg-gray-600">
                <img
                  alt="Portrait of Emily Chen"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOYEgkdG9VVMbfT-DpaUu8ny7QMv4iWAcOLau5pp22-RWWBdBVne-u9_wmhVSlC8q3cQHlhXw21SsQD2FuMim50QtA3gZSpypGzC68JIB7Mcui7BHJ7NHvMzn1gqWncnjgZJLZeLlhQ3Um2U4J_8b_PJ6q9WQV7fwU2zoL5TcVWA8rmbUk4OxCWbtHcMYaw36w29IkwoHYg1LfDvh7IhaPcUgJGRBAOTbRh31NDVXGKEcyFmix_0XYU9WPF31rE-Yicu32kc22WQ7H"
                />
              </div>
              <div>
                <p className="text-white font-bold text-sm">Emily Chen</p>
                <p className="text-text-muted text-xs">Verified Guest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
