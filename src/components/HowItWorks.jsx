import React from 'react';
import { Calendar, Rocket, Wrench } from 'lucide-react';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

const steps = [
  {
    icon: Calendar,
    title: '1) Quick call',
    desc: 'We clarify goals, tools you already use, and the best opportunities to automate. Friendly and jargon-free.'
  },
  {
    icon: Wrench,
    title: '2) Tailored setup',
    desc: 'I design and implement a lightweight solution that fits your workflow. Clear timelines, zero fluff.'
  },
  {
    icon: Rocket,
    title: '3) Launch & iterate',
    desc: 'We deploy, measure impact, and refine. You get training and simple documentation so your team feels confident.'
  }
];

export default function HowItWorks() {
  return (
    <section className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">How we’ll work together</h2>
        <p className="mt-2 max-w-2xl text-sm text-zinc-400">
          You’ll speak directly with me, Vukašin. Clear communication and quick turnarounds, from first call
          to live automation.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
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
            Book a meeting — no pressure, just possibilities
          </a>
        </div>
      </div>
    </section>
  );
}
