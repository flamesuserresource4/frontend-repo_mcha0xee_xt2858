import React, { useMemo } from 'react';
import Spline from '@splinetool/react-spline';
import { useInView, usePrefersReducedMotion, trackCTA } from './hooks';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

export default function Hero() {
  const reduced = usePrefersReducedMotion();
  const { ref, inView } = useInView();

  const particles = useMemo(() => Array.from({ length: 8 }, (_, i) => i), []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      aria-label="Optivo hero section"
      style={{ background: '#F7FBFD' }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full blur-3xl"
          style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)', opacity: 0.18 }}
        />
        {!reduced && (
          <div className="absolute inset-0">
            {particles.map((p) => (
              <span
                key={p}
                className="absolute h-24 w-24 rounded-full"
                style={{
                  left: `${(p * 13) % 100}%`,
                  top: `${(p * 17) % 100}%`,
                  background: 'radial-gradient( circle at 30% 30%, rgba(0,179,166,0.25), rgba(0,179,166,0) 60%)',
                  filter: 'blur(10px)',
                  transform: 'translateZ(0)',
                  animation: `float ${6 + (p % 5)}s ease-in-out ${(p % 3) * 0.7}s infinite alternate`,
                }}
              />
            ))}
          </div>
        )}
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-20 pb-8 md:pt-28 md:pb-12 lg:grid-cols-2">
        <div className={`relative z-10 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} transition-all duration-500 [transition-timing-function:cubic-bezier(.2,.9,.3,1)]`}
          style={{ color: '#0B2545' }}
        >
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Optivo — AI automations that feel personal and drive results.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: '#6B7A90' }}>
            I’m Vukašin Stojic. I help small and medium-sized teams automate repetitive work with AI receptionists,
            voice agents, and custom workflows — so your people can focus on what matters.
          </p>

          <div
            className="mt-6 w-full max-w-xl rounded-2xl border shadow-lg"
            style={{
              background: 'rgba(255,255,255,0.08)',
              borderColor: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(8px)'
            }}
          >
            <div className="flex flex-col items-start gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div>
                <p className="text-sm" style={{ color: '#0B2545' }}>You’ll speak directly with me, Vukašin.</p>
                <p className="text-xs" style={{ color: '#6B7A90' }}>No preset packages — we’ll decide together on the call.</p>
              </div>
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                onClick={() => trackCTA('Hero CTA')}
                className="group inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg focus:outline-none focus-visible:ring-2"
                style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)', boxShadow: '0 10px 30px rgba(6,22,68,0.18)' }}
              >
                Book a meeting
                <span className="ml-2 inline-block transform transition-transform duration-200 group-hover:translate-x-0.5">→</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative h-[380px] w-full sm:h-[440px] md:h-[520px]">
          <div className="absolute inset-0 rounded-2xl border shadow-2xl"
            style={{ background: 'rgba(255,255,255,0.10)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
          >
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            <div className="pointer-events-none absolute inset-0 rounded-2xl" style={{ background: 'linear-gradient(180deg, rgba(247,251,253,0) 0%, rgba(247,251,253,0.6) 100%)' }} />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float { from { transform: translateY(0) translateZ(0); } to { transform: translateY(-14px) translateZ(0); } }
      `}</style>
    </section>
  );
}
