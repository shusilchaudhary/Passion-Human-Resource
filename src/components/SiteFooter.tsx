import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone } from 'lucide-react';
import { AGENCY_PROFILE, SECTOR_VERTICALS } from '../data/recruitmentData';
import { ActionButton } from './ui/ActionButton';

import { AppView } from './SiteHeader';

interface SiteFooterProps {
  activeView: AppView;
  onNavigateView: (
    view: 'home' | 'compliance' | 'design-system',
    sectionId?: string
  ) => void;
  onSelectCategory: (slug: string) => void;
}

export function SiteFooter({
  activeView,
  onNavigateView,
  onSelectCategory,
}: SiteFooterProps) {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterError, setNewsletterError] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = newsletterEmail.trim();
    if (!trimmed || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setNewsletterError('Please enter a valid corporate email address.');
      return;
    }
    setNewsletterError('');
    setSubscribed(true);
    setNewsletterEmail('');
  };

  return (
    <footer className="bg-[#0B1F3A] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1: Brand & Institutional Credentials */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-lg font-bold tracking-tight text-white">
              {AGENCY_PROFILE.brandName}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              Government-licensed international manpower recruitment partner delivering trade-tested Nepalese talent to global operations since 2015.
            </p>
            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#E2B857] shrink-0" />
                <span>{AGENCY_PROFILE.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E2B857] shrink-0" />
                <span className="tabular-figures">{AGENCY_PROFILE.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E2B857] shrink-0" />
                <span>{AGENCY_PROFILE.email}</span>
              </div>
            </div>
            <p className="pt-2 text-xs text-[#E2B857] tabular-figures">
              {AGENCY_PROFILE.licenseLabel}
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {[
                { label: 'Home', id: 'top' },
                { label: 'About Us', id: 'about' },
                { label: 'Services & Process', id: 'services' },
                { label: 'Global Corridors', id: 'sectors' },
                { label: 'Success Stories', id: 'stories' },
                { label: 'FAQs', id: 'faq' },
                { label: 'Employer Inquiry', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigateView('home', link.id);
                    }}
                    className="hover:text-[#E2B857] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#/compliance"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigateView('compliance');
                  }}
                  className="hover:text-[#E2B857] transition-colors"
                >
                  Compliance &amp; Legal
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Sectors */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white">Core Sectors</h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              {SECTOR_VERTICALS.map((sector) => (
                <li key={sector.id}>
                  <a
                    href={`#/sectors/${sector.categorySlug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onSelectCategory(sector.categorySlug);
                    }}
                    className="hover:text-[#E2B857] transition-colors"
                  >
                    {sector.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Employer Briefing / Newsletter */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold text-white">Employer Briefings</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              Receive quarterly updates on Nepalese labor regulations, bilateral corridors, and sector availability.
            </p>

            {subscribed ? (
              <div className="p-3.5 border border-[#E2B857]/40 bg-[#132B4D] rounded-[3px] flex items-start gap-2.5 text-xs text-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#E2B857] shrink-0 mt-0.5" />
                <span>Subscription confirmed for quarterly employer briefings.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} noValidate className="space-y-2">
                <div className="flex gap-2">
                  <label htmlFor="footer-newsletter" className="sr-only">
                    Corporate Email Address
                  </label>
                  <input
                    id="footer-newsletter"
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      if (newsletterError) setNewsletterError('');
                    }}
                    placeholder="Corporate email"
                    className="w-full min-w-0 px-3.5 py-2 text-sm bg-[#132B4D] border border-white/15 rounded-[3px] text-white placeholder:text-slate-400 focus:border-[#E2B857] focus:outline-none"
                  />
                  <ActionButton type="submit" variant="gold" size="sm" aria-label="Subscribe">
                    <ArrowRight className="w-4 h-4" />
                  </ActionButton>
                </div>
                {newsletterError && (
                  <p className="text-xs text-[#E2B857]">{newsletterError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Quiet Bottom Legal & Design Foundation Bar */}
      <div className="border-t border-white/10 bg-[#071529]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>
            © {new Date().getFullYear()} {AGENCY_PROFILE.brandName}. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#/compliance"
              onClick={(e) => {
                e.preventDefault();
                onNavigateView('compliance');
              }}
              className="text-slate-300 hover:text-[#E2B857] transition-colors whitespace-nowrap"
            >
              Compliance &amp; Legal
            </a>
            <button
              type="button"
              onClick={() =>
                onNavigateView(activeView === 'design-system' ? 'home' : 'design-system', 'top')
              }
              className="text-slate-300 hover:text-[#E2B857] transition-colors cursor-pointer whitespace-nowrap"
            >
              {activeView === 'design-system'
                ? 'Return to Homepage'
                : 'Design Foundation & Tokens'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
