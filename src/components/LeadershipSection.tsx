import React from 'react';
import managingDirectorPhoto from '../assets/images/managing_director.png';

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
            Meet the Managing Director of KSR Groups.
          </p>
        </div>

        <article className="mx-auto max-w-sm text-center">
          <img
            src={managingDirectorPhoto}
            alt="Managing Director of KSR Groups"
            className="aspect-square w-full border border-slate-200 object-cover"
          />
          <h3 className="mt-4 text-base font-extrabold tracking-tight text-slate-900">
            Managing Director
          </h3>
        </article>
      </div>
    </section>
  );
};
