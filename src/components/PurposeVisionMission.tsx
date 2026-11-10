import React from 'react';
import { PURPOSE_VISION_MISSION } from '../data/content';

export const PurposeVisionMission: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-[#0b0b0b] border-b border-neutral-800">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-2">
            Purpose, vision &amp; mission
          </h2>
          <p className="text-sm text-neutral-300">
            A shared direction for sustainable business development and industrial opportunity.
          </p>
        </div>

        {/* Unified 3-Column Architectural Panel with Hairline Dividers */}
        <div className="bg-[#151515] rounded-xl border border-neutral-700 shadow-2xs divide-y md:divide-y-0 md:divide-x divide-neutral-700">
          <div className="grid grid-cols-1 md:grid-cols-3">
            {PURPOSE_VISION_MISSION.map((item, idx) => (
              <div
                key={idx}
                className="p-8 sm:p-10 flex flex-col justify-between hover:bg-white/[0.03] transition-colors group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono font-bold tracking-widest text-neutral-500 group-hover:text-[#c59b4e] transition-colors">
                      {item.number}
                    </span>
                    <span className="text-[10px] font-bold tracking-widest text-[#c59b4e] uppercase">
                      {item.label}
                    </span>
                  </div>

                  <h3 className="text-xl font-extrabold text-white tracking-tight mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-neutral-700 flex items-center justify-between text-[11px] text-neutral-500">
                  <span className="font-semibold text-neutral-400 uppercase tracking-wider text-[10px]">
                    Core Pillar
                  </span>
                  <span className="text-neutral-500 group-hover:text-neutral-200 transition-colors font-mono">
                    KSR / 0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
