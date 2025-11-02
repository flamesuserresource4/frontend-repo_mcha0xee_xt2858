import React from 'react';
import { Bot, PhoneCall, RefreshCw, Settings2 } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

const services = [
  {
    icon: PhoneCall,
    title: 'AI Receptionists',
    desc: 'Friendly, fast first response for calls and messages — routing, scheduling, FAQs, and intake 24/7.'
  },
  {
    icon: Bot,
    title: 'Voice Agents',
    desc: 'Natural-sounding agents for outbound follow-ups, qualification, and status updates that feel human.'
  },
  {
    icon: Settings2,
    title: 'Workflow Automations',
    desc: 'Connect your tools so work moves automatically — from forms to CRM, inbox to calendar, and beyond.'
  },
  {
    icon: RefreshCw,
    title: 'Lead Reactivation',
    desc: 'Revive cold leads with respectful, value-first outreach via SMS, email, and voice — hands-free.'
  }
];

export default function Services() {
  return (
    <section className="border-t border-zinc-800 bg-gradient-to-b from-black to-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold text-white sm:text-3xl">What we can set up for you</h2>
            <p className="mt-2 max-w-2xl text-sm text-zinc-400">
              Every business is different. We’ll design the right mix to save time, reduce errors, and create
              a smoother experience for your customers.
            </p>
          </div>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden shrink-0 rounded-md border border-amber-500/30 bg-amber-500/10 px-4 py-2 text-sm font-medium text-amber-400 transition hover:bg-amber-500/20 md:inline-block"
          >
            Book a meeting
          </a>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition hover:border-zinc-700">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-zinc-900 ring-1 ring-zinc-800">
                <Icon className="h-5 w-5 text-amber-400" />
              </div>
              <h3 className="mt-4 text-base font-medium text-white">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex w-full items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-medium text-black shadow transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black sm:w-auto"
          >
            Book a meeting — let’s explore what fits best
          </a>
        </div>
      </div>
    </section>
  );
}
