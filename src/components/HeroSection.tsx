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
    <section id="home" className="relative isolate flex min-h-[min(760px,calc(100svh-72px))] overflow-hidden bg-slate-950 text-white">
      <img
        src={industrialFacility}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-slate-950/95 via-slate-950/75 to-slate-950/25" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/10" />

      <div className="mx-auto flex w-full max-w-[1600px] items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="max-w-4xl">
          <p className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.24em] text-white/85 sm:text-xs">
            <span className="h-px w-9 bg-[#d1a64f]" />
            KSR GROUPS <span className="text-[#d1a64f]">/</span> INDUSTRY · AGRO · TRADE
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-[1.04] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Building businesses.
            <br />
            <span className="text-[#e2bb70]">Developing industries.</span>
            <br />
            Creating opportunities.
          </h1>

          <p className="mb-3 max-w-2xl text-base font-semibold text-white/95 sm:text-lg">
            {SITE_METADATA.subtitle}
          </p>
          <p className="mb-9 max-w-2xl text-sm leading-relaxed text-white/75 sm:text-base">
            {SITE_METADATA.heroDescription}
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onExploreBusinesses}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#d1a64f] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-lg shadow-black/20 transition-colors hover:bg-[#e2bb70] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e2bb70]"
            >
              <span>Explore Our Businesses</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>

            <button
              onClick={onViewProjects}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md border border-white/45 bg-white/5 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View Our Projects
            </button>

            <button
              onClick={onPartnerClick}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Partner With Us</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>

            <button
              onClick={onContactUs}
              className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white/85 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span>Contact Us</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
