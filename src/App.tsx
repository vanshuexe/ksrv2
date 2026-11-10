import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PurposeVisionMission } from './components/PurposeVisionMission';
import { BusinessVerticals } from './components/BusinessVerticals';
import { AgroPortfolio } from './components/AgroPortfolio';
import { ExportImportSection } from './components/ExportImportSection';
import { PoultryFeedSection } from './components/PoultryFeedSection';
import { CustomerDevProgram } from './components/CustomerDevProgram';
import { ProjectPortfolio } from './components/ProjectPortfolio';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { EnquiryModal } from './components/EnquiryModal';
import { DetailModal } from './components/DetailModal';
import { Toast } from './components/Toast';
import { CookieConsent } from './components/CookieConsent';
import { LegalPage, LegalPageId } from './components/LegalPage';
import { BusinessVertical, AgroProduct, OngoingProject } from './types';

const COOKIE_CONSENT_KEY = 'ksr-cookie-consent';

const getLegalPageFromHash = (): LegalPageId | null => {
  const page = window.location.hash.slice(1);
  switch (page) {
    case 'privacy-policy':
    case 'terms-of-use':
    case 'cookie-policy':
      return page;
    default:
      return null;
  }
};

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeLegalPage, setActiveLegalPage] = useState<LegalPageId | null>(
    getLegalPageFromHash
  );
  const [showCookieConsent, setShowCookieConsent] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [selectedItemForModal, setSelectedItemForModal] = useState<
    BusinessVertical | AgroProduct | OngoingProject | null
  >(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [prefilledArea, setPrefilledArea] = useState<string>('Real Estate & Land Development');

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'businesses',
      'products',
      'export',
      'cdp',
      'projects',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (activeLegalPage) {
      window.history.pushState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`
      );
      setActiveLegalPage(null);
      const targetId = sectionId === 'partnership' ? 'cdp' : sectionId;
      window.requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else if (sectionId === 'home') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
      return;
    }

    if (sectionId === 'partnership') {
      const el = document.getElementById('cdp');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }

    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenEnquiryWithArea = (area: string) => {
    setPrefilledArea(area);
    setIsEnquiryModalOpen(true);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  useEffect(() => {
    const handleLocationChange = () => setActiveLegalPage(getLegalPageFromHash());
    window.addEventListener('hashchange', handleLocationChange);
    window.addEventListener('popstate', handleLocationChange);
    return () => {
      window.removeEventListener('hashchange', handleLocationChange);
      window.removeEventListener('popstate', handleLocationChange);
    };
  }, []);

  useEffect(() => {
    try {
      const savedPreference = window.localStorage.getItem(COOKIE_CONSENT_KEY);
      setShowCookieConsent(
        savedPreference !== 'essential-only' &&
          savedPreference !== 'all' &&
          savedPreference !== 'accepted'
      );
    } catch (error) {
      console.error('Unable to read the saved cookie preference.', error);
      setShowCookieConsent(true);
    }
  }, []);

  const handleOpenLegalPage = (page: LegalPageId) => {
    const nextHash = `#${page}`;
    if (window.location.hash !== nextHash) {
      window.history.pushState(null, '', nextHash);
    }
    setActiveLegalPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToWebsite = () => {
    window.history.pushState(
      null,
      '',
      `${window.location.pathname}${window.location.search}`
    );
    setActiveLegalPage(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCookieChoice = (preference: 'essential-only' | 'all') => {
    try {
      window.localStorage.setItem(COOKIE_CONSENT_KEY, preference);
      setShowCookieConsent(false);
    } catch (error) {
      console.error('Unable to save the cookie preference.', error);
      showToast('Could not save your cookie preference. Please check your browser settings.');
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-[#c59b4e]/30 selection:text-slate-900">
      {/* Main Sticky Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {activeLegalPage ? (
          <LegalPage page={activeLegalPage} onBack={handleBackToWebsite} />
        ) : (
          <>
            {/* Hero Section with Sector KPI strip */}
            <HeroSection
              onExploreBusinesses={() => handleNavigate('businesses')}
              onViewProjects={() => handleNavigate('projects')}
              onPartnerClick={() => handleNavigate('cdp')}
              onContactUs={() => handleNavigate('contact')}
            />

            {/* 4. About Our Groups */}
            <AboutSection />

            {/* 5. Purpose, Vision & Mission */}
            <PurposeVisionMission />

            {/* 6. Our Business Verticals */}
            <BusinessVerticals
              onSelectVertical={(vert) => setSelectedItemForModal(vert)}
            />

            {/* 7. Agro Portfolio - Products & Processing Categories */}
            <AgroPortfolio
              onSelectProduct={(prod) => setSelectedItemForModal(prod)}
            />

            {/* 8. Export & Import Opportunities */}
            <ExportImportSection
              onCountrySelect={(country) => {
                showToast(`Selected destination: ${country}`);
              }}
            />

            {/* 9. Poultry Feed Supply */}
            <PoultryFeedSection
              onEnquireFeed={() => handleOpenEnquiryWithArea('Poultry Feed Supply')}
            />

            {/* Industrial development and partnership programme */}
            <CustomerDevProgram
              onDiscussPartnership={() => handleOpenEnquiryWithArea('Industrial Development Partnership')}
            />

            {/* 11. Project Portfolio - Ongoing Projects */}
            <ProjectPortfolio
              onSelectProject={(proj) => setSelectedItemForModal(proj)}
            />

            {/* 12. Leadership - Board of Directors */}
            <LeadershipSection />

            {/* 14. Get In Touch - Contact KSR GROUPS & Form */}
            <ContactSection
              onShowToast={showToast}
              prefilledArea={prefilledArea}
            />
          </>
        )}
      </main>

      {/* 15. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalPage={handleOpenLegalPage}
      />

      {showCookieConsent && (
        <CookieConsent
          onEssentialOnly={() => handleCookieChoice('essential-only')}
          onAcceptAll={() => handleCookieChoice('all')}
          onOpenPolicy={() => handleOpenLegalPage('cookie-policy')}
        />
      )}

      {/* Interactive Modals */}
      <EnquiryModal
        isOpen={isEnquiryModalOpen}
        onClose={() => setIsEnquiryModalOpen(false)}
        defaultArea={prefilledArea}
        onShowToast={showToast}
      />

      <DetailModal
        item={selectedItemForModal}
        onClose={() => setSelectedItemForModal(null)}
        onEnquireItem={(title) => {
          handleOpenEnquiryWithArea(title);
        }}
      />

      {/* Feedback Toast */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />
    </div>
  );
}
