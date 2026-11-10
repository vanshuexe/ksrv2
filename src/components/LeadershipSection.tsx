import React from 'react';
import { UsersRound } from 'lucide-react';
import { DIRECTORS } from '../data/content';

export const LeadershipSection: React.FC = () => {
  return (
    <section className="py-14 sm:py-20 bg-[#f7f6f2] border-b border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#9a7436] mb-3">
            People &amp; governance
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            Leadership
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            This section will introduce the people guiding KSR Groups' business areas and development initiatives. Clear profiles help visitors understand each leader's role, area of responsibility and professional background.
          </p>
        </div>

        {DIRECTORS.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-3 sm:gap-x-10 gap-y-10 max-w-[1400px] mx-auto">
            {DIRECTORS.map((director) => (
            <article key={director.id} className="text-center">
              {director.photo ? (
                <img
                  src={director.photo}
                  alt={`${director.designation} portrait`}
                  className="w-full aspect-square object-cover border border-slate-200"
                />
              ) : (
                <div
                  role="img"
                  aria-label={`${director.designation} photo not provided`}
                  className="w-full aspect-square bg-[#e8edf3] flex items-center justify-center text-4xl font-extrabold text-slate-500"
                >
                  {director.code}
                </div>
              )}

              <h3 className="text-[11px] sm:text-base font-extrabold text-slate-900 tracking-tight mt-2 sm:mt-4 mb-1 leading-tight">
                {director.name}
              </h3>
              <div className="text-[9px] sm:text-xs font-semibold uppercase tracking-wider text-slate-600 leading-tight">
                {director.designation}
              </div>
              <p className="text-[10px] sm:text-xs text-slate-500 leading-snug sm:leading-relaxed max-w-xs mx-auto mt-2">
                {director.bio}
              </p>
            </article>
            ))}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-200 bg-white p-6 sm:p-9 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-start gap-5 sm:gap-6">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f2ead8] text-[#8e6d34]">
                <UsersRound className="h-7 w-7" aria-hidden="true" />
              </span>
              <div>
                <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500 mb-3">
                  Profiles in preparation
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-2">
                  Meet the people behind KSR Groups
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Director and management profiles will include confirmed names, designations, areas of responsibility, biographies and approved photographs. We are holding these details until they have been reviewed, so the information published here is accurate and authorized to share.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
