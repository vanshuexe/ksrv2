import React, { useState } from 'react';
import { TARGET_EXPORT_COUNTRIES } from '../data/content';
import { Globe2 } from 'lucide-react';
import globalMaritimeTrade from '../assets/images/export_global_maritime_trade_1793907568942.jpg';

interface ExportImportSectionProps {
  onCountrySelect?: (countryName: string) => void;
}

export const ExportImportSection: React.FC<ExportImportSectionProps> = ({
  onCountrySelect,
}) => {
  const [selectedCountry, setSelectedCountry] = useState<string>('Dubai / UAE');

  return (
    <section id="export" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Information & Commodity Checklist */}
          <div className="lg:col-span-7">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Export &amp; import
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6 max-w-2xl">
              KSR Groups aims to develop domestic and international trade opportunities for agricultural commodities, rice and value-added agro products. Trade activities are subject to applicable registrations, product standards and export requirements.
            </p>

            <div className="space-y-3 mb-7">
              {[
                'Rice and rice products',
                'Chilli and chilli powder, maize, ginger and millets',
                'Spices, cereals and other agricultural products',
                'Other suitable agro products, subject to quality and market requirements',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-100 text-xs text-slate-500 font-medium">
              Sourcing, product preparation, buyer connections and trade facilitation can be discussed through an enquiry.
            </div>
          </div>

          {/* Right Column: Photo + Country Grid matching screenshot */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-white border border-black p-5 sm:p-6 shadow-2xs">
              {/* Maritime Ocean Ship Photo */}
              <div className="relative rounded-lg overflow-hidden mb-4 border border-slate-200 bg-slate-900 group">
                <img
                  src={globalMaritimeTrade}
                  alt="Cargo vessel representing international trade"
                  className="w-full h-44 sm:h-48 object-cover transition-transform duration-500 group-hover:scale-103"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#c59b4e] block">
                      Trade opportunities
                    </span>
                    <span className="text-xs font-semibold">Agricultural commodities and agro products</span>
                  </div>
                  <span className="text-[10px] bg-white/90 text-slate-800 font-extrabold px-2 py-0.5 rounded-xs uppercase">
                    Enquiries
                  </span>
                </div>
              </div>

              {/* Destination Specs */}
              <div className="bg-slate-50 rounded-lg p-3.5 border border-slate-100 mb-4 text-xs">
                <div className="flex items-center gap-2 text-slate-900 font-bold mb-1">
                  <Globe2 className="w-3.5 h-3.5 text-[#c59b4e]" />
                  <span>Target Market: {selectedCountry}</span>
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  These are target markets. Trade is subject to confirmed buyer relationships, registrations, product standards and applicable export requirements.
                </p>
              </div>

              {/* Country Badges */}
              <div>
                <div className="text-[10px] font-bold tracking-widest text-slate-400 uppercase mb-2.5">
                  Target Export Markets
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {TARGET_EXPORT_COUNTRIES.map((country) => {
                    const isSelected = selectedCountry === country.name;
                    return (
                      <button
                        key={country.code}
                        onClick={() => {
                          setSelectedCountry(country.name);
                          if (onCountrySelect) onCountrySelect(country.name);
                        }}
                        className={`px-3 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                          isSelected
                            ? 'bg-[#0b1728] text-white border border-black shadow-xs'
                            : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-black'
                        }`}
                      >
                        <span className="text-xs">{country.flag}</span>
                        <span className="truncate">{country.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
