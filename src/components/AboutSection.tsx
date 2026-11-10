import React from 'react';
import { Building2 } from 'lucide-react';
import industrialAgroFacility from '../assets/images/about_industrial_agro_facility_1793907567951.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Media / Architectural Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200/90 shadow-sm group bg-slate-100">
              <img
                src={industrialAgroFacility}
                alt="Industrial and agro-processing facility"
                className="w-full h-[360px] sm:h-[400px] object-cover transition-transform duration-700 group-hover:scale-102"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Minimal floating badge */}
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-[#0b1728]/95 backdrop-blur-sm rounded-sm text-[11px] font-bold uppercase tracking-wider text-white border border-slate-700/80">
                <Building2 className="w-3 h-3 text-[#c59b4e]" />
                <span>Agro-processing</span>
              </div>

              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-widest text-[#c59b4e] font-bold">
                  Business sectors
                </div>
                <div className="text-sm font-bold text-white mt-0.5">
                  Connecting resources and opportunities
                </div>
              </div>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="lg:col-span-7">
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight mb-5">
              A diversified business group focused on growth opportunities.
            </h2>

            {/* Paragraphs - Minimal words, pure clarity */}
            <div className="space-y-3.5 text-slate-600 text-sm sm:text-base leading-relaxed">
              <p>
                KSR Groups is a diversified business group with interests and development initiatives across real estate, civil works and infrastructure, organic agriculture, agro-processing, export and import, poultry feed supply and industrial development.
              </p>
              <p>
                We aim to build business opportunities by connecting resources, project capabilities, suppliers, partners and markets.
              </p>
            </div>

            {/* Enterprise Editorial List */}
            <div className="mt-7 pt-6 border-t border-slate-100 space-y-3">
              {[
                'Connect resources, people, technology and market access',
                'Explore opportunities across agriculture, processing and trade',
                'Develop responsible partnerships and strengthen value chains',
                'Support projects that create long-term value',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
