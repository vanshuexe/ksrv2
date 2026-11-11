import React from 'react';
import { SITE_METADATA } from '../data/content';
import logo from '../assets/images/ksr-groups-logo.png';
import { ArrowUp, Phone } from 'lucide-react';
import type { LegalPageId } from './LegalPage';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenLegalPage: (page: LegalPageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenLegalPage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080808] text-white border-t border-white/5">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12">
          {/* Left Column: Brand Lockup & Purpose */}
          <div className="md:col-span-6 lg:col-span-5">
            <img
              src={logo}
              alt="KSR winged logo"
              className="h-16 sm:h-20 w-auto object-contain mb-4"
            />

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm mb-5">
              {SITE_METADATA.tagline} {SITE_METADATA.subtitle}
            </p>

            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xs text-slate-500">
              <span>Corporate Desk: </span>
              <a
                href={`mailto:${SITE_METADATA.email}`}
                className="text-slate-300 hover:text-[#c59b4e] transition-colors"
              >
                {SITE_METADATA.email}
              </a>
              {SITE_METADATA.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="inline-flex items-center gap-1.5 text-slate-300 hover:text-[#c59b4e] transition-colors"
                >
                  <Phone className="h-3 w-3 text-[#c59b4e]" />
                  {phone.display}
                </a>
              ))}
            </div>
          </div>

          {/* Middle Column: Explore */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#c59b4e] uppercase mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('businesses')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Our Businesses
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('projects')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Projects
                </button>
              </li>
            </ul>
          </div>

          {/* Right Column: Connect */}
          <div className="md:col-span-3 lg:col-span-4">
            <h4 className="text-[11px] font-bold tracking-[0.2em] text-[#c59b4e] uppercase mb-4">
              Connect
            </h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  onClick={() => onNavigate('cdp')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Industrial Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('partnership')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Partnership
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('export')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Global Export
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_METADATA.email}`}
                  className="hover:text-white transition-colors cursor-pointer block"
                >
                  Email KSR GROUPS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Compliance Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            <p className="font-semibold text-slate-400">
              &copy; 2026 KSR GROUPS. All rights reserved.
            </p>
            <p className="mt-1 leading-relaxed text-slate-500 max-w-4xl text-[10px]">
              Project, product, trade, certification and regulatory details should be verified before publication or commercial use. Target international markets are proposed unless current activity and requirements are confirmed.
            </p>
            <nav aria-label="Legal pages" className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-[10px]">
              <button
                type="button"
                onClick={() => onOpenLegalPage('privacy-policy')}
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <button
                type="button"
                onClick={() => onOpenLegalPage('terms-of-use')}
                className="hover:text-white transition-colors"
              >
                Terms of Use
              </button>
              <button
                type="button"
                onClick={() => onOpenLegalPage('cookie-policy')}
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
            </nav>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors shrink-0 cursor-pointer border border-white/5"
            aria-label="Back to top"
            title="Back to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
