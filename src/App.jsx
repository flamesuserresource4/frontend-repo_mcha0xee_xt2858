import React from 'react';
import Hero from './components/Hero';
import ProofAndBenefits from './components/ProofAndBenefits';
import ServicesAndProcess from './components/ServicesAndProcess';
import CaseFaqCta from './components/CaseFaqCta';

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F7FBFD' }}>
      <a href="#main" className="sr-only focus:not-sr-only">Skip to content</a>
      <header className="sticky top-0 z-40 border-b/0 bg-[#F7FBFD]/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2" aria-label="Optivo brand">
            <div className="h-6 w-6 rounded" style={{ background: '#00B3A6' }} />
            <span className="font-semibold tracking-tight" style={{ color: '#0B2545' }}>Optivo</span>
          </div>
          <a
            href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-xl px-4 py-2 text-sm font-medium text-white shadow md:inline-block"
            style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)' }}
            aria-label="Book a meeting on Calendly"
          >
            Book a meeting
          </a>
        </div>
      </header>

      <main id="main">
        <Hero />
        <ProofAndBenefits />
        <ServicesAndProcess />
        <CaseFaqCta />
      </main>

      <footer className="border-t/0">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm" style={{ color: '#6B7A90' }}>
              © {new Date().getFullYear()} Optivo — AI automation by Vukašin Stojic. All rights reserved.
            </p>
            <a
              href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium text-white shadow"
              style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)' }}
            >
              Book a meeting
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t bg-[#F7FBFD]/80 p-3 backdrop-blur sm:hidden">
        <a
          href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
          target="_blank"
          rel="noreferrer noopener"
          className="block w-full rounded-xl px-4 py-3 text-center text-sm font-semibold text-white shadow"
          style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)' }}
        >
          Book a meeting
        </a>
      </div>
    </div>
  );
}
