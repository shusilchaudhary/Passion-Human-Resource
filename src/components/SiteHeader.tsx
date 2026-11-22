import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { AGENCY_PROFILE, JOB_CATEGORIES } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';

export type AppView = 'home' | 'category' | 'compliance' | 'design-system';

interface SiteHeaderProps {
  activeView: AppView;
  onNavigateView: (
    view: 'home' | 'compliance' | 'design-system',
    sectionId?: string
  ) => void;
  onSelectCategory: (slug: string) => void;
  onOpenQuotation: () => void;
}

type DropdownKey = 'services' | 'sectors' | null;

export function SiteHeader({
  activeView,
  onNavigateView,
  onSelectCategory,
  onOpenQuotation,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownKey>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownKey>('sectors');
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const navigateHomeSection = (sectionId: string) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    onNavigateView('home', sectionId);
  };

  const navigateCategory = (slug: string) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    onSelectCategory(slug);
  };

  const navigateCompliance = () => {
    setOpenDropdown(null);
    setMobileOpen(false);
    onNavigateView('compliance');
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#/"
          onClick={(e) => {
            e.preventDefault();
            navigateHomeSection('top');
          }}
          className="font-[var(--font-display)] text-base sm:text-lg font-bold tracking-tight text-[#0B1F3A] whitespace-nowrap shrink-0 hover:text-[#132B4D] transition-colors"
        >
          {AGENCY_PROFILE.brandName}
        </a>

        {/* Zone 2: 5 Single-Line Navigation Links with Multi-Page Dropdowns */}
        <nav
          ref={navRef}
          aria-label="Primary Navigation"
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600"
        >
          {/* 1. About */}
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              navigateHomeSection('about');
            }}
            className="relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#B8860B] after:transition-all after:duration-150 hover:after:w-full"
          >
            About
          </a>

          {/* 2. Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('services')}
            onMouseLeave={() => setOpenDropdown((prev) => (prev === 'services' ? null : prev))}
          >
            <button
              type="button"
              aria-expanded={openDropdown === 'services'}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown((prev) => (prev === 'services' ? null : 'services'))
              }
              className={`relative py-1 inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#0B1F3A] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#B8860B] after:transition-all after:duration-150 ${
                openDropdown === 'services' ? 'text-[#0B1F3A] after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              <span>Services</span>
              <ChevronDown
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${
                  openDropdown === 'services' ? 'rotate-180 text-[#B8860B]' : ''
                }`}
              />
            </button>

            {openDropdown === 'services' && (
              <div className="absolute left-0 top-full pt-2.5 w-72 z-50">
                <div className="bg-white border border-slate-200 rounded-[3px] shadow-xl py-2">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="text-[11px] font-semibold text-[#9A6F04]">
                      Recruitment &amp; Mobility Services
                    </p>
                  </div>
                  <div className="py-1">
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateHomeSection('services');
                      }}
                      className="block px-4 py-2.5 hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="block text-xs font-semibold text-[#0B1F3A]">
                        All 8 Agency Services
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Consultation, trade tests, GAMCA, visas &amp; travel
                      </span>
                    </a>
                    <a
                      href="#services"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateHomeSection('services');
                      }}
                      className="block px-4 py-2.5 hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="block text-xs font-semibold text-[#0B1F3A]">
                        35-Day Deployment Workflow
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        Demand attestation to pre-departure orientation
                      </span>
                    </a>
                    <a
                      href="#/compliance"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateCompliance();
                      }}
                      className="block px-4 py-2.5 hover:bg-[#F8FAFC] transition-colors"
                    >
                      <span className="block text-xs font-semibold text-[#0B1F3A]">
                        Compliance &amp; Legal Dossier
                      </span>
                      <span className="block text-[11px] text-slate-500 mt-0.5">
                        DOFE license, ISO 9001:2015 &amp; ethical charters
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 3. Sectors Multi-Page Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown('sectors')}
            onMouseLeave={() => setOpenDropdown((prev) => (prev === 'sectors' ? null : prev))}
          >
            <button
              type="button"
              aria-expanded={openDropdown === 'sectors'}
              aria-haspopup="true"
              onClick={() =>
                setOpenDropdown((prev) => (prev === 'sectors' ? null : 'sectors'))
              }
              className={`relative py-1 inline-flex items-center gap-1 whitespace-nowrap shrink-0 cursor-pointer transition-colors hover:text-[#0B1F3A] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#B8860B] after:transition-all after:duration-150 ${
                activeView === 'category' || openDropdown === 'sectors'
                  ? 'text-[#0B1F3A] after:w-full'
                  : 'after:w-0 hover:after:w-full'
              }`}
            >
              <span>Sectors</span>
              <ChevronDown
                className={`w-3.5 h-3.5 shrink-0 transition-transform duration-150 ${
                  openDropdown === 'sectors' ? 'rotate-180 text-[#B8860B]' : ''
                }`}
              />
            </button>

            {openDropdown === 'sectors' && (
              <div className="absolute left-0 top-full pt-2.5 w-80 z-50">
                <div className="bg-white border border-slate-200 rounded-[3px] shadow-xl py-2">
                  <div className="px-4 py-2 border-b border-slate-100 flex items-center justify-between gap-2">
                    <span className="text-[11px] font-semibold text-[#9A6F04]">
                      Workforce Categories
                    </span>
                    <a
                      href="#sectors"
                      onClick={(e) => {
                        e.preventDefault();
                        navigateHomeSection('sectors');
                      }}
                      className="text-[11px] font-semibold text-[#0B1F3A] hover:text-[#9A6F04] underline underline-offset-4"
                    >
                      Overview
                    </a>
                  </div>
                  <div className="py-1 divide-y divide-slate-100">
                    {JOB_CATEGORIES.map((category) => {
                      const openings = category.jobs.reduce((sum, j) => sum + j.openings, 0);
                      return (
                        <a
                          key={category.slug}
                          href={`#/sectors/${category.slug}`}
                          onClick={(e) => {
                            e.preventDefault();
                            navigateCategory(category.slug);
                          }}
                          className="flex items-center justify-between gap-3 px-4 py-2.5 hover:bg-[#F8FAFC] transition-colors group"
                        >
                          <div className="min-w-0">
                            <span className="block text-xs font-semibold text-[#0B1F3A] group-hover:text-[#9A6F04] truncate">
                              {category.title}
                            </span>
                            <span className="block text-[11px] text-slate-500 mt-0.5">
                              {category.jobs.length} active roles
                            </span>
                          </div>
                          <span className="tabular-figures text-[11px] font-medium text-slate-500 shrink-0 inline-flex items-center gap-1">
                            <span>{openings}</span>
                            <ArrowRight className="w-3 h-3 text-[#B8860B]" />
                          </span>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* 4. Compliance Page */}
          <a
            href="#/compliance"
            onClick={(e) => {
              e.preventDefault();
              navigateCompliance();
            }}
            className={`relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#B8860B] after:transition-all after:duration-150 hover:after:w-full ${
              activeView === 'compliance' ? 'text-[#0B1F3A] after:w-full' : 'after:w-0'
            }`}
          >
            Compliance
          </a>

          {/* 5. Contact */}
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              navigateHomeSection('contact');
            }}
            className="relative py-1 whitespace-nowrap shrink-0 transition-colors hover:text-[#0B1F3A] after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:w-0 after:bg-[#B8860B] after:transition-all after:duration-150 hover:after:w-full"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Primary CTA + Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden sm:block">
            <ActionButton variant="primary" size="sm" onClick={onOpenQuotation}>
              Book a Free Consultation
            </ActionButton>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-[3px] border border-slate-200 text-[#0B1F3A] hover:bg-slate-50"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-6 py-5 space-y-4 max-h-[82vh] overflow-y-auto">
          <nav className="flex flex-col divide-y divide-slate-100" aria-label="Mobile Navigation">
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                navigateHomeSection('about');
              }}
              className="text-sm font-medium text-slate-700 hover:text-[#0B1F3A] py-3"
            >
              About
            </a>

            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                navigateHomeSection('services');
              }}
              className="text-sm font-medium text-slate-700 hover:text-[#0B1F3A] py-3"
            >
              Services &amp; Process
            </a>

            {/* Collapsible Sectors List on Mobile */}
            <div className="py-2">
              <button
                type="button"
                onClick={() =>
                  setMobileExpanded((prev) => (prev === 'sectors' ? null : 'sectors'))
                }
                aria-expanded={mobileExpanded === 'sectors'}
                className="w-full py-2 flex items-center justify-between text-sm font-medium text-[#0B1F3A]"
              >
                <span>Sectors &amp; Open Vacancies</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#B8860B] transition-transform ${
                    mobileExpanded === 'sectors' ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {mobileExpanded === 'sectors' && (
                <div className="pl-3 pt-1 pb-2 space-y-2 border-l border-slate-200">
                  {JOB_CATEGORIES.map((category) => (
                    <a
                      key={category.slug}
                      href={`#/sectors/${category.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        navigateCategory(category.slug);
                      }}
                      className="block py-1 text-xs font-medium text-slate-600 hover:text-[#9A6F04]"
                    >
                      {category.title}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#/compliance"
              onClick={(e) => {
                e.preventDefault();
                navigateCompliance();
              }}
              className="text-sm font-medium text-slate-700 hover:text-[#0B1F3A] py-3"
            >
              Compliance &amp; Legal
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                navigateHomeSection('contact');
              }}
              className="text-sm font-medium text-slate-700 hover:text-[#0B1F3A] py-3"
            >
              Contact
            </a>
          </nav>

          <div className="pt-2 border-t border-slate-100">
            <ActionButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileOpen(false);
                onOpenQuotation();
              }}
            >
              Book a Free Consultation
            </ActionButton>
          </div>
        </div>
      )}
    </header>
  );
}

