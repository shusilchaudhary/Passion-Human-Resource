import React, { useEffect, useState } from 'react';
import { AboutBannerSection } from './components/AboutBannerSection';
import { CategoryJobsView } from './components/CategoryJobsView';
import { ComplianceLegalView } from './components/ComplianceLegalView';
import { DesignSystemView } from './components/DesignSystemView';
import { FaqSection } from './components/FaqSection';
import { GlobalCorridorsSection } from './components/GlobalCorridorsSection';
import { HeroSection } from './components/HeroSection';
import { InquirySection } from './components/InquirySection';
import { QuotationModal } from './components/QuotationModal';
import { RecruitmentProcessSection } from './components/RecruitmentProcessSection';
import { SiteFooter } from './components/SiteFooter';
import { SiteHeader } from './components/SiteHeader';
import { SuccessStoriesSection } from './components/SuccessStoriesSection';
import { JOB_CATEGORIES } from './data/recruitmentData';

type ActiveRoute =
  | { view: 'home' }
  | { view: 'compliance' }
  | { view: 'design-system' }
  | { view: 'category'; slug: string };

function parseHashRoute(): ActiveRoute {
  const hash = window.location.hash || '';
  if (hash === '#/design-system') {
    return { view: 'design-system' };
  }
  if (hash === '#/compliance') {
    return { view: 'compliance' };
  }
  if (hash.startsWith('#/sectors/')) {
    const slug = hash.replace('#/sectors/', '').trim();
    const exists = JOB_CATEGORIES.some((c) => c.slug === slug);
    if (exists) {
      return { view: 'category', slug };
    }
  }
  return { view: 'home' };
}

export default function App() {
  const [route, setRoute] = useState<ActiveRoute>(() => parseHashRoute());
  const [quotationOpen, setQuotationOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'consultation' | 'quotation'>('consultation');
  const [preselectedSector, setPreselectedSector] = useState<string | undefined>(undefined);

  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const handleOpenModal = (
    sector?: string,
    mode: 'consultation' | 'quotation' = 'quotation'
  ) => {
    setPreselectedSector(sector);
    setModalMode(mode);
    setQuotationOpen(true);
  };

  const handleSelectCategory = (slug: string) => {
    window.location.hash = `#/sectors/${slug}`;
    setRoute({ view: 'category', slug });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigateView = (
    view: 'home' | 'compliance' | 'design-system',
    sectionId?: string
  ) => {
    if (view === 'design-system') {
      window.location.hash = '#/design-system';
      setRoute({ view: 'design-system' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (view === 'compliance') {
      window.location.hash = '#/compliance';
      setRoute({ view: 'compliance' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (
      window.location.hash.startsWith('#/sectors/') ||
      window.location.hash === '#/design-system' ||
      window.location.hash === '#/compliance'
    ) {
      window.location.hash = '#/';
    }
    setRoute({ view: 'home' });

    if (sectionId) {
      requestAnimationFrame(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const target = document.getElementById(sectionId);
          target?.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0F172A]">
      <SiteHeader
        activeView={route.view}
        onNavigateView={handleNavigateView}
        onSelectCategory={handleSelectCategory}
        onOpenQuotation={() => handleOpenModal(undefined, 'consultation')}
      />

      <main className="flex-1">
        {route.view === 'design-system' ? (
          <DesignSystemView onBackHome={() => handleNavigateView('home', 'top')} />
        ) : route.view === 'compliance' ? (
          <ComplianceLegalView
            onBackHome={() => handleNavigateView('home', 'top')}
            onOpenConsultation={() => handleOpenModal(undefined, 'consultation')}
          />
        ) : route.view === 'category' ? (
          <CategoryJobsView
            categorySlug={route.slug}
            onSelectCategory={handleSelectCategory}
            onBackHome={() => handleNavigateView('home', 'top')}
            onOpenQuotation={(sector) => handleOpenModal(sector, 'quotation')}
          />
        ) : (
          <>
            <HeroSection
              onOpenQuotation={(sector) => handleOpenModal(sector, 'quotation')}
              onExploreProcess={() => handleNavigateView('home', 'services')}
              onSelectCategory={handleSelectCategory}
              onOpenCompliance={() => handleNavigateView('compliance')}
            />
            <AboutBannerSection
              onOpenCompliance={() => handleNavigateView('compliance')}
              onExploreServices={() => handleNavigateView('home', 'services')}
            />
            <RecruitmentProcessSection
              onOpenQuotation={() => handleOpenModal(undefined, 'quotation')}
              onBookConsultation={() => handleOpenModal(undefined, 'consultation')}
            />
            <GlobalCorridorsSection
              onOpenQuotation={(sector) => handleOpenModal(sector, 'quotation')}
              onSelectCategory={handleSelectCategory}
            />
            <SuccessStoriesSection
              onOpenQuotation={(sector) => handleOpenModal(sector, 'quotation')}
            />
            <FaqSection onOpenQuotation={() => handleOpenModal(undefined, 'consultation')} />
            <InquirySection />
          </>
        )}
      </main>

      <SiteFooter
        activeView={route.view}
        onNavigateView={handleNavigateView}
        onSelectCategory={handleSelectCategory}
      />

      <QuotationModal
        isOpen={quotationOpen}
        initialSector={preselectedSector}
        initialMode={modalMode}
        onClose={() => setQuotationOpen(false)}
      />
    </div>
  );
}
