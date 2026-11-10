import React from 'react';
import { ArrowRight } from 'lucide-react';
import { SITE_METADATA } from '../data/content';
import industrialFacility from '../assets/images/industrial_facility.jpg';

interface HeroSectionProps {
  onExploreBusinesses: () => void;
  onViewProjects: () => void;
  onPartnerClick: () => void;
  onContactUs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreBusinesses,
  onViewProjects,
  onPartnerClick,
  onContactUs,
}) => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#f7f6f2] text-slate-950">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-10 lg:gap-14">
          <div className="max-w-2xl">
              <p className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-[#9a7436] mb-5">
                KSR GROUPS <span className="text-slate-400 mx-2">/</span> INDUSTRY · AGRO · TRADE
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-slate-950 leading-[1.04] mb-6">
                Building businesses.
                <br />
                <span className="text-[#a77e3d]">Developing industries.</span>
                <br />
                <span>Creating opportunities.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-800 font-semibold mb-3">
                {SITE_METADATA.subtitle}
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl mb-8">
                {SITE_METADATA.heroDescription}
              </p>

              <div className="flex flex-wrap items-stretch gap-3">
                <button
                  onClick={onExploreBusinesses}
                  className="inline-flex items-center justify-center gap-2 bg-[#c59b4e] hover:bg-[#b48a3d] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all shadow-sm cursor-pointer"
                >
                  <span>Explore Our Businesses</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                </button>

                <button
                  onClick={onViewProjects}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all cursor-pointer"
                >
                  <span>View Our Projects</span>
                </button>

                <button
                  onClick={onPartnerClick}
                  className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 hover:border-slate-400 font-semibold text-xs uppercase tracking-wider px-6 py-4 rounded-md transition-all cursor-pointer"
                >
                  <span>Partner With KSR GROUPS</span>
                </button>

                <button
                  onClick={onContactUs}
                  className="inline-flex items-center justify-center gap-2 text-slate-700 hover:text-slate-950 font-semibold text-xs uppercase tracking-wider px-4 py-4 rounded-md transition-all cursor-pointer"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
          </div>

          <div className="relative w-full max-w-[800px] mx-auto">
            <img
              src={industrialFacility}
              alt="Industrial manufacturing facility"
              fetchPriority="high"
              className="w-full aspect-[1.32] object-cover rounded-2xl shadow-xl shadow-slate-900/10"
            />
            <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-5 sm:p-7 pt-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-3 py-1.5 text-[10px] sm:text-xs font-semibold tracking-wide text-white backdrop-blur-sm">
                Integrated industrial ecosystems
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
