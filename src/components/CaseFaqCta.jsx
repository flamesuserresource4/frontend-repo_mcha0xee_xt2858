import React from 'react';
import { useInView, trackCTA } from './hooks';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

export default function CaseFaqCta() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative" style={{ background: '#F7FBFD' }}>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-8 lg:grid-cols-2">
          <CaseStudy
            title="Faster lead response for a local service business"
            problem="Inbound requests were answered late, and follow-ups were inconsistent."
            solution="Deployed an AI receptionist and light workflow automations that routed, scheduled, and followed up."
            outcome="Response times cut to minutes, bookings increased, and the team reclaimed hours weekly."
          />
          <CaseStudy
            title="Reactivating cold leads without sounding robotic"
            problem="Thousands of old leads sat idle in the CRM."
            solution="Launched a respectful, value-first sequence using voice + SMS with human-style tone."
            outcome="Meaningful replies and new opportunities, with hands-off execution."
          />
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <FAQ />
          <FinalCTA />
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => trackCTA('Final CTA')}
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-lg"
            style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)', boxShadow: '0 10px 30px rgba(6,22,68,0.18)' }}
          >
            Book a meeting
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-2xl border p-6 shadow" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
      {children}
    </div>
  );
}

function CaseStudy({ title, problem, solution, outcome }) {
  return (
    <Card>
      <h3 className="text-lg font-semibold" style={{ color: '#0B2545' }}>{title}</h3>
      <ul className="mt-3 space-y-2 text-sm" style={{ color: '#6B7A90' }}>
        <li><span className="font-medium" style={{ color: '#0B2545' }}>Problem:</span> {problem}</li>
        <li><span className="font-medium" style={{ color: '#0B2545' }}>Solution:</span> {solution}</li>
        <li><span className="font-medium" style={{ color: '#0B2545' }}>Outcome:</span> {outcome}</li>
      </ul>
    </Card>
  );
}

function FAQ() {
  const faqs = [
    { q: 'How does pricing work?', a: 'We don’t publish preset offers. We’ll discuss scope and pricing on the call so it matches your needs.' },
    { q: 'How fast is the setup?', a: 'Most initial deployments are days, not weeks. We start small, launch quickly, then iterate.' },
    { q: 'Do we need new tools?', a: 'No. We plug into what already works — email, calendars, CRMs, and automation platforms.' },
    { q: 'Privacy & data handling?', a: 'Clear, secure flows with minimal data access. You stay in control and we document everything.' },
  ];
  return (
    <Card>
      <h3 className="text-lg font-semibold" style={{ color: '#0B2545' }}>FAQ</h3>
      <div className="mt-4 space-y-4">
        {faqs.map((f) => (
          <div key={f.q}>
            <p className="text-sm font-medium" style={{ color: '#0B2545' }}>{f.q}</p>
            <p className="mt-1 text-sm" style={{ color: '#6B7A90' }}>{f.a}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}

function FinalCTA() {
  return (
    <Card>
      <p className="text-sm" style={{ color: '#6B7A90' }}>Personal sign-off</p>
      <h3 className="mt-1 text-lg font-semibold" style={{ color: '#0B2545' }}>Ready when you are</h3>
      <p className="mt-2 text-sm" style={{ color: '#6B7A90' }}>
        You’ll speak directly with me, Vukašin. We’ll map the quickest path to value, without disrupting what already works.
      </p>
      <a
        href={CALENDLY_URL}
        target="_blank"
        rel="noreferrer noopener"
        onClick={() => trackCTA('Side CTA')}
        className="mt-4 inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg"
        style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)', boxShadow: '0 10px 30px rgba(6,22,68,0.18)' }}
      >
        Book a meeting
      </a>
    </Card>
  );
}
