import React from 'react';
import { Bot, PhoneCall, RefreshCw, Settings2, Calendar, Rocket, Wrench } from 'lucide-react';
import { useInView, trackCTA } from './hooks';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

const services = [
  { icon: PhoneCall, title: 'AI Receptionists', desc: 'Friendly first response for calls/messages — routing, scheduling, FAQs, intake 24/7.' },
  { icon: Bot, title: 'Voice Agents', desc: 'Natural-sounding follow-ups, qualification, and updates that feel human.' },
  { icon: Settings2, title: 'Workflow Automations', desc: 'Connect tools so work moves automatically across your stack.' },
  { icon: RefreshCw, title: 'Lead Reactivation', desc: 'Revive cold leads with respectful SMS, email, and voice outreach.' },
];

const steps = [
  { icon: Calendar, title: 'Quick call', desc: 'Clarify goals, tools you use, and your best automation opportunities.' },
  { icon: Wrench, title: 'Tailored setup', desc: 'A lightweight solution designed for your workflow. Clear timelines.' },
  { icon: Rocket, title: 'Launch & iterate', desc: 'Deploy, measure impact, refine. Training and simple documentation included.' },
];

export default function ServicesAndProcess() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative" style={{ background: '#F7FBFD' }}>
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl" style={{ color: '#0B2545' }}>What we do</h2>
            <p className="mt-2 max-w-2xl text-sm" style={{ color: '#6B7A90' }}>
              Every business is different. We’ll design the right mix to save time, reduce errors, and create a smoother customer experience.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => trackCTA('Services CTA')}
            className="hidden shrink-0 rounded-xl px-4 py-2 text-sm font-medium text-white md:inline-block"
            style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)' }}
          >
            Book a meeting
          </a>
        </div>

        <div className={`mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 ${inView ? '' : ''}`}>
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border p-5 transition duration-200 hover:scale-[1.03] hover:shadow-xl"
              style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(255,255,255,0.10)' }}>
                <Icon className="h-5 w-5" style={{ color: '#00B3A6' }} />
              </div>
              <h3 className="mt-3 text-base font-semibold" style={{ color: '#0B2545' }}>{title}</h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#6B7A90' }}>{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold" style={{ color: '#0B2545' }}>How we’ll work together</h3>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border p-6" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg" style={{ background: 'rgba(255,255,255,0.10)' }}>
                  <Icon className="h-5 w-5" style={{ color: '#00B3A6' }} />
                </div>
                <h4 className="mt-3 text-base font-semibold" style={{ color: '#0B2545' }}>{title}</h4>
                <p className="mt-2 text-sm" style={{ color: '#6B7A90' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            onClick={() => trackCTA('Mid-page CTA')}
            className="inline-flex w-full items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-white shadow-lg sm:w-auto"
            style={{ background: 'linear-gradient(90deg,#0066FF 0%,#00C2FF 100%)', boxShadow: '0 10px 30px rgba(6,22,68,0.18)' }}
          >
            Book a meeting — no pressure, just possibilities
          </a>
        </div>
      </div>
    </section>
  );
}
