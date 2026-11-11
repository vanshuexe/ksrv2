import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ksrGroupsLogo from '../assets/images/ksr-groups-logo.png';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'businesses', label: 'Businesses' },
    { id: 'products', label: 'Products' },
    { id: 'projects', label: 'Projects' },
    { id: 'cdp', label: 'Industrial Development' },
    { id: 'partnership', label: 'Partner With Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`sticky top-0 z-40 bg-white transition-all duration-200 ${
          isScrolled
            ? 'shadow-xs border-b border-slate-200/80 bg-white/98 backdrop-blur-md'
            : 'border-b border-slate-100 bg-white'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-4 sm:px-8">
          <div className="flex items-center justify-between h-18">
            <div
              onClick={() => handleLinkClick('home')}
              className="flex items-center cursor-pointer select-none shrink-0"
            >
              <img
                src={ksrGroupsLogo}
                alt="KSR winged logo"
                className="h-14 sm:h-16 w-auto object-contain"
              />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-7">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-[13px] font-semibold tracking-tight transition-colors cursor-pointer py-1.5 relative whitespace-nowrap ${
                      isActive
                        ? 'text-slate-950 font-bold'
                        : 'text-slate-600 hover:text-slate-950'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#c59b4e]" />
                    )}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-700 hover:text-slate-950 hover:bg-slate-100 rounded-md transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={2.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={2.5} />
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 z-50 max-h-[calc(100vh-72px)] overflow-y-auto lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-6 shadow-xl animate-in fade-in duration-150">
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleLinkClick(item.id)}
                    className={`text-left px-3 py-2.5 text-sm font-semibold transition-colors rounded-sm ${
                      isActive
                        ? 'bg-[#111111] text-white border-l-2 border-[#c59b4e] shadow-md shadow-black/30'
                        : 'text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </nav>

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-x-0 bottom-0 top-[72px] z-30 bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}
    </>
  );
};
