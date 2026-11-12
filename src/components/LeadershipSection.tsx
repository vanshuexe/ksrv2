import React from 'react';
import managingDirectorPhoto from '../assets/images/managing_director.png';

export const LeadershipSection: React.FC = () => {
  const experience = [
    {
      area: 'Real Estate & Land Development',
      years: '10 years',
      description: 'Experience in real estate operations, land development, and property-related ventures.',
    },
    {
      area: 'Contracting & Civil Works',
      years: '6 years',
      description: 'Experience in the contracting sector, with exposure to construction and infrastructure-related activities.',
    },
    {
      area: 'Polymers Industry',
      years: '5 years',
      description: 'Experience contributing to industrial business operations and development.',
    },
    {
      area: 'Agriculture & Agro Sector',
      years: '3 years',
      description: 'Experience in the agricultural sector, with an interest in agro-based business opportunities and development.',
    },
  ];

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
            Experience, perspective, and a commitment to building lasting value.
          </p>
        </div>

        <article className="mx-auto grid max-w-6xl grid-cols-1 gap-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:grid-cols-[minmax(240px,0.8fr)_2fr] lg:gap-10 lg:p-10">
          <div>
            <img
              src={managingDirectorPhoto}
              alt="Kalasani Sanjay Reddy, Managing Director of KSR Groups"
              className="mx-auto aspect-square w-full max-w-sm rounded-xl border border-slate-200 object-cover lg:max-w-none"
            />
            <div className="mt-5">
              <h3 className="text-xl font-extrabold tracking-tight text-slate-900 sm:text-2xl">
                Kalasani Sanjay Reddy
              </h3>
              <p className="mt-1 text-sm font-semibold text-[#9a7436]">
                Managing Director – KSR Groups
              </p>
            </div>
          </div>

          <div className="min-w-0">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
              Kalasani Sanjay Reddy is an experienced business professional with over 10 years of expertise in the real estate and land development sector, supported by extensive experience across multiple industries, including construction contracting, polymers, and agriculture.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              With a strong understanding of business operations, project development, and industry practices, he brings a diverse combination of technical knowledge, commercial insight, and entrepreneurial vision to KSR Groups.
            </p>

            <h4 className="mt-7 text-xs font-bold uppercase tracking-[0.16em] text-slate-900">
              Professional experience
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {experience.map((item) => (
                <li
                  key={item.area}
                  className="rounded-lg border border-slate-200 border-l-2 border-l-[#c59b4e] bg-[#fbfaf7] p-4"
                >
                  <p className="text-xs font-bold uppercase tracking-wide text-slate-800">
                    {item.area}
                  </p>
                  <p className="mt-1 text-sm font-extrabold text-[#9a7436]">
                    {item.years}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-slate-700 sm:text-base">
              As the Managing Director of KSR Groups, he is committed to driving sustainable business growth, exploring new opportunities, maintaining professional standards, and building long-term relationships with clients, partners, and stakeholders.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-700 sm:text-base">
              His diverse industry experience and forward-looking approach contribute to the group's vision of delivering quality, reliability, and value across its business sectors.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};
