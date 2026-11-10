import React from 'react';
import { INDUSTRIAL_DEVELOPMENT_STEPS } from '../data/content';
import { ArrowRight, ClipboardList, UsersRound } from 'lucide-react';
import modernAgroProcessingPlant from '../assets/images/modern_agro_processing_plant_1793907568983.jpg';

const ProgrammeStepIcon: React.FC<{ step: string }> = ({ step }) => {
  const gradientId = `programme-step-${step}-gold`;

  const illustration = (() => {
    switch (step) {
      case '01':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m25 11 19 10v27L25 38z" fill="#fffdf7" />
            <path d="m44 21 7-4v27l-7 4z" fill="#d8e2d9" />
            <path d="m25 11 7-4 19 10-7 4z" fill="#e7c77f" />
            <path d="m31 23 8 4m-8 2 8 4" fill="none" stroke="#82968a" />
            <path d="m31 34 5 3" fill="none" stroke="#c59b4e" strokeWidth="2" />
          </g>
        );
      case '02':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m16 24 12-7 12 7-12 7z" fill="#e7c77f" />
            <path d="m16 24v16l12 7V31z" fill="#fffdf7" />
            <path d="m28 31 12-7v16l-12 7z" fill="#d8e2d9" />
            <path d="m28 30v-9m0 4c-6 0-7-5-7-7 5 0 7 2 7 7Zm0-2c0-5 4-7 8-7 0 4-2 7-8 8Z" fill="#6d9a68" />
          </g>
        );
      case '03':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="M40 9c-9 0-15 6-15 14 0 6 4 9 7 13h16c3-4 7-7 7-13 0-8-6-14-15-14Z" fill="#f3d994" />
            <path d="m33 36 2 8h10l2-8" fill="#e4bd67" />
            <path d="M35 44v4h10v-4m-9 4 2 4h5l2-4" fill="#d8e2d9" />
            <path d="M40 3v3m-20 4 3 3m34-3-3 3M17 24h4m38 0h4" fill="none" stroke="#c59b4e" strokeWidth="2" />
          </g>
        );
      case '04':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m16 28 24-14 24 14-24 14z" fill="#e7c77f" />
            <path d="M16 28v11l24 14V42z" fill="#d8e2d9" />
            <path d="M40 42v11l24-14V28z" fill="#6c8d70" />
            <path d="m25 29 8-5 8 5-8 5z" fill="#fffdf7" />
            <path d="M25 29v5l8 5v-5m0 0 8-5v5l-8 5" fill="#b9cbbd" />
            <path d="m45 29 7-4 7 4-7 4z" fill="#fffdf7" />
            <path d="M45 29v4l7 4v-4m0 0 7-4v4l-7 4" fill="#b9cbbd" />
          </g>
        );
      case '05':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m17 18 25-14 23 13-25 15z" fill="#dce8df" />
            <path d="m17 18 23 14v19L17 37z" fill="#fffdf7" />
            <path d="m40 32 25-15v20L40 51z" fill="#b9cbbd" />
            <path d="m25 20 17-10m-9 18 17-10M25 27v7m8-2v7m8-10 15-9m-15 17 15-9" fill="none" stroke="#789080" />
            <path d="m32 28 9-5 9 5-9 6z" fill={`url(#${gradientId})`} />
          </g>
        );
      case '06':
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m18 21 22-13 22 13-22 13z" fill="#e7c77f" />
            <path d="m18 21 22 13v5L18 26z" fill="#c59b4e" />
            <path d="m40 34 22-13v5L40 39z" fill="#a87932" />
            <path d="m23 29 17 10 17-10v18L40 58 23 47z" fill="#fffdf7" />
            <path d="m23 29 17 10v19L23 48z" fill="#d8e2d9" />
            <path d="m40 39 17-10v19L40 58z" fill="#b9cbbd" />
            <path d="m28 34 4 2v12l-4-2zm10 6 4 2v12l-4-2zm10-6 4-2v13l-4 2z" fill="#c59b4e" />
          </g>
        );
      default:
        return (
          <g stroke="#174632" strokeLinejoin="round" strokeWidth="1.5">
            <path d="m15 27 25-14 25 14-25 15z" fill="#e7c77f" />
            <path d="m15 27 25 15v15L15 42z" fill="#d8e2d9" />
            <path d="m40 42 25-15v15L40 57z" fill="#6c8d70" />
            <path d="m24 29 11-7v12l-11 7zm19-1 13-8v13l-13 8z" fill="#fffdf7" />
            <path d="m24 29 5 3v12l-5-3zm19-1 5 3v12l-5-3z" fill="#b9cbbd" />
            <path d="M29 24v-9l10-6v15m0-14 5 3v9" fill="#c59b4e" />
          </g>
        );
    }
  })();

  return (
    <svg
      aria-hidden="true"
      focusable="false"
      viewBox="0 0 80 80"
      className="h-[68px] w-[68px] shrink-0 drop-shadow-[0_8px_7px_rgba(15,46,32,0.16)]"
      fill="none"
    >
      <defs>
        <linearGradient id={gradientId} x1="30" y1="23" x2="50" y2="35" gradientUnits="userSpaceOnUse">
          <stop stopColor="#e9ca82" />
          <stop offset="1" stopColor="#b3843c" />
        </linearGradient>
      </defs>
      <ellipse cx="40" cy="68" rx="29" ry="7" fill="#0d3124" fillOpacity=".12" />
      <path d="m10 48 30-17 30 17-30 17z" fill="#e6ece5" stroke="#174632" strokeLinejoin="round" />
      <path d="M10 48v7l30 17v-7z" fill="#174632" />
      <path d="m40 65 30-17v7L40 72z" fill="#0b2e22" />
      {illustration}
    </svg>
  );
};

interface CustomerDevProgramProps {
  onDiscussPartnership: () => void;
}

export const CustomerDevProgram: React.FC<CustomerDevProgramProps> = ({
  onDiscussPartnership,
}) => {
  return (
    <section id="cdp" className="py-12 sm:py-16 bg-white border-b border-slate-100">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            Industrial development &amp; partnership programme
          </h2>
          <p className="text-sm text-slate-600">
            Partner with KSR Groups. Develop your own agro-processing industry.
          </p>
        </div>

        {/* Top 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">
          {/* Left Visual Container */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-black shadow-2xs group bg-slate-900">
              <img
                src={modernAgroProcessingPlant}
                alt="Agro-processing facility"
                className="w-full h-[360px] sm:h-[400px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1 bg-black rounded-sm text-[11px] font-bold uppercase tracking-wider text-white border border-white/20">
                <span>Proposed partner programme</span>
              </div>

              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[10px] uppercase tracking-widest text-[#c59b4e] font-bold">
                  Project planning
                </div>
                <div className="text-sm font-bold mt-0.5">
                  Technical guidance and machinery selection
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Heading, Copy, Checklist & CTA */}
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              Explore an industry opportunity for your region.
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              Through a proposed programme, KSR Groups aims to help individuals, farmers, entrepreneurs and groups explore agro-processing and related industrial opportunities. Depending on local resources, support may include industry identification, preliminary research, project planning, technical guidance, machinery selection, project documentation and coordination with banks or relevant government departments. All projects are subject to feasibility, approvals, finance and mutually agreed terms.
            </p>

            <div className="space-y-3 mb-8">
              {[
                'Review local resources and potential industry opportunities',
                'Explore preliminary research and project planning',
                'Discuss technical guidance, machinery selection and documentation',
                'Coordinate eligible proposals with relevant institutions, subject to appraisal and approvals',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm sm:text-base font-medium text-slate-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onDiscussPartnership}
              className="inline-flex items-center gap-2 bg-[#c59b4e] hover:bg-[#b48a3d] text-slate-950 font-bold text-xs uppercase tracking-wider px-6 py-3.5 rounded-sm transition-all shadow-xs cursor-pointer"
            >
              <span>Apply for Industrial Partnership</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
            </button>
          </div>
        </div>

        {/* Programme steps */}
        <div className="pt-10 border-t border-neutral-500">
          <div className="text-[11px] font-bold tracking-widest uppercase text-slate-400 mb-6">
            How the programme works
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {INDUSTRIAL_DEVELOPMENT_STEPS.map((step) => (
              <div
                key={step.step}
                className="min-h-[236px] rounded-xl border border-slate-200 bg-gradient-to-br from-white to-[#f8f7f2] p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-[#c59b4e]/60 hover:shadow-lg"
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="rounded-full bg-[#f2ead8] px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider text-[#8e6d34]">
                    STEP {step.step}
                  </div>
                  <ProgrammeStepIcon step={step.step} />
                </div>
                <h4 className="font-extrabold text-slate-900 text-sm tracking-tight mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-10 pt-8 border-t border-slate-200">
            <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f8f7f2] p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2ead8] text-[#8e6d34]">
                  <UsersRound className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a7436]">
                    Eligibility
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900">Who can apply?</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                The programme is for people and groups interested in exploring a locally relevant agro-processing or manufacturing opportunity. You may approach us with an early-stage idea; the suitability of any opportunity depends on local resources, feasibility, approvals and agreed terms.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-slate-700">
                {[
                  'Farmers and landowners',
                  'Individual and women entrepreneurs',
                  'Self-Help Groups and rural business groups',
                  'Existing businesses exploring a processing unit',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-[#f8f7f2] p-6 sm:p-7">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#f2ead8] text-[#8e6d34]">
                  <ClipboardList className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#9a7436]">
                    Getting started
                  </p>
                  <h3 className="text-base font-extrabold text-slate-900">What to include in your enquiry</h3>
                </div>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-5">
                Share enough detail for an initial discussion about your proposed project and its local context. If a preference or estimate is not yet known, note that; the information helps frame next steps and is not a confirmation of feasibility, finance or approval.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs font-medium text-slate-700">
                {[
                  'Name and contact details',
                  'Village, mandal, district and state',
                  'Land availability and approximate area',
                  'Locally available crops or raw materials',
                  'Preferred industry, if known',
                  'Investment capacity or support required',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#c59b4e] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
          <p className="mt-5 rounded-lg border border-amber-200/80 bg-amber-50/70 px-4 py-3 text-xs text-slate-600 leading-relaxed">
            Support is subject to feasibility, scheme rules, bank appraisal, statutory approvals and a written agreement. No funding, subsidy or approval is guaranteed.
          </p>
        </div>
      </div>
    </section>
  );
};
