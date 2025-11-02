import React from 'react';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-zinc-100">
      <header className="sticky top-0 z-40 border-b border-zinc-900/80 bg-black/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded bg-amber-500" />
            <span className="font-semibold tracking-tight">Optivo</span>
          </div>
          <a
            href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
            target="_blank"
            rel="noreferrer noopener"
            className="hidden rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-amber-400 sm:inline-block"
          >
            Book a meeting
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <SocialProof />
        <Services />
        <HowItWorks />
      </main>

      <footer className="border-t border-zinc-800 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-sm text-zinc-400">
              © {new Date().getFullYear()} Optivo — AI automation by Vukašin Stojic.
            </p>
            <a
              href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-black shadow transition hover:bg-amber-400"
            >
              Book a meeting
            </a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-amber-500/20 bg-black/70 p-3 backdrop-blur sm:hidden">
        <a
          href="https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05"
          target="_blank"
          rel="noreferrer noopener"
          className="block w-full rounded-md bg-amber-500 px-4 py-3 text-center text-sm font-semibold text-black shadow"
        >
          Book a meeting
        </a>
      </div>
    </div>
  );
}
