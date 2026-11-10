import React from 'react';
import { BUSINESS_VERTICALS } from '../data/content';
import { ArrowUpRight } from 'lucide-react';
import { BusinessVertical } from '../types';
import realEstateImage from '../assets/images/real-estate-land-development.jpg';
import infrastructureImage from '../assets/images/industrial_facility.jpg';
import agroImage from '../assets/images/modern_agro_processing_plant_1793907568983.jpg';
import exportImage from '../assets/images/export_global_maritime_trade_1793907568942.jpg';
import poultryFeedImage from '../assets/images/poultry_feed_grain_ingredients_1793907569488.jpg';
import industrialClusterImage from '../assets/images/about_industrial_agro_facility_1793907567951.jpg';

const verticalImages: Record<string, string> = {
  'real-estate': realEstateImage,
  'civil-infrastructure': infrastructureImage,
  'organic-agro': agroImage,
  'export-import': exportImage,
  'poultry-feed': poultryFeedImage,
  'industrial-cluster': industrialClusterImage,
};

interface BusinessVerticalsProps {
  onSelectVertical: (vertical: BusinessVertical) => void;
}

export const BusinessVerticals: React.FC<BusinessVerticalsProps> = ({
  onSelectVertical,
}) => {
  return (
    <section id="businesses" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Our business verticals
          </h2>
          <p className="text-sm text-slate-600">
            Explore the sectors and activities represented across KSR GROUPS.
          </p>
        </div>

        {/* 6 Core Verticals - Architectural Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {BUSINESS_VERTICALS.map((vertical, idx) => (
            <div
              key={vertical.id}
              onClick={() => onSelectVertical(vertical)}
              className="group bg-white rounded-xl overflow-hidden border border-slate-300 shadow-2xs hover:border-[#c59b4e]/70 hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer"
            >
              <div className="relative h-44 overflow-hidden bg-slate-100">
                <img
                  src={verticalImages[vertical.id]}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-slate-950/5" />
                <div className="absolute inset-x-0 top-0 flex items-center justify-between p-5">
                  <span className="text-xs font-mono font-bold tracking-wider text-white">
                    0{idx + 1}
                  </span>
                  <span className="text-white group-hover:text-[#f3d28f] transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="text-lg font-extrabold text-slate-900 tracking-tight mb-2.5 group-hover:text-amber-950 transition-colors">
                    {vertical.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {vertical.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-[10px] font-bold tracking-wider text-slate-400 uppercase group-hover:text-slate-600 transition-colors">
                    {vertical.tags.join(' · ')}
                  </span>
                  <span className="text-[11px] font-semibold text-[#c59b4e] opacity-0 group-hover:opacity-100 transition-opacity">
                    Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
