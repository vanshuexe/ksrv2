import React from 'react';
import poultryFeedIngredients from '../assets/images/poultry_feed_grain_ingredients_1793907569488.jpg';

interface PoultryFeedSectionProps {
  onEnquireFeed?: () => void;
}

export const PoultryFeedSection: React.FC<PoultryFeedSectionProps> = ({ onEnquireFeed }) => {
  return (
    <section className="py-12 sm:py-16 bg-[#0b0b0b] border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Container */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="rounded-xl overflow-hidden border border-neutral-700 shadow-2xs bg-[#151515]">
              <div className="relative">
                <img
                  src={poultryFeedIngredients}
                  alt="Agricultural raw materials used in poultry feed"
                  className="w-full h-52 sm:h-60 object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#c59b4e] block">
                    Proposed supply portfolio
                  </span>
                  <span className="text-sm font-bold">Maize · Soya · Broken Rice · Rice Bran</span>
                </div>
              </div>

              {/* Feed Ingredient Grid */}
              <div className="p-5 space-y-2">
                {[
                'Maize',
                'Soya / soybean products',
                'Broken rice',
                'Rice bran',
                ].map((item) => (
                  <div
                  key={item}
                    className="p-2.5 bg-[#202020] rounded-md border border-neutral-700 flex items-center justify-between text-xs"
                  >
                  <span className="font-bold text-neutral-100">{item}</span>
                  <span className="text-neutral-400 text-[11px]">Product enquiry</span>
                  </div>
                ))}

                <div className="pt-3 mt-2 border-t border-neutral-700 text-[11px] text-neutral-400">
                Product specifications, quantities, delivery locations and terms can be discussed on enquiry.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Copy & Checklist */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Poultry feed supply
            </h2>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
              KSR Groups aims to supply key agricultural raw materials used by poultry feed manufacturers and related businesses. The proposed supply portfolio includes maize, soya, broken rice and rice bran.
            </p>

            <p className="text-sm font-semibold text-neutral-100 mb-3">Potential customer groups</p>
            <div className="space-y-3 mb-6">
              {['Poultry feed manufacturers', 'Hatcheries and poultry businesses', 'Feed distributors and bulk buyers'].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm sm:text-base font-medium text-neutral-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-neutral-300 bg-amber-950/20 border border-amber-800/50 rounded-md p-3.5 leading-relaxed">
              Enquiries can be discussed based on product specifications, quantity, quality requirements, delivery location and commercial terms.
            </p>

            {onEnquireFeed && (
              <div className="mt-6">
                <button
                  onClick={onEnquireFeed}
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-100 hover:text-[#c59b4e] transition-colors cursor-pointer"
                >
                  <span>Request Feed Sourcing Specs →</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
