import React from 'react';
import Spline from '@splinetool/react-spline';

const CALENDLY_URL = 'https://calendly.com/vstojic22/let-s-start-working-together?month=2025-11&date=2025-11-05';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-3 py-1 text-xs text-zinc-300">
              <span className="inline-block h-2 w-2 rounded-full bg-amber-400" />
              Human-first AI automation
            </div>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              Optivo — AI automations that feel personal and drive results
            </h1>
            <p className="mt-5 max-w-xl text-zinc-300">
              I’m Vukašin Stojic. I help small and medium-sized teams automate repetitive work with
              AI receptionists, voice agents, and custom workflows — so your people can focus on what
              matters.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center justify-center rounded-md bg-amber-500 px-5 py-3 text-sm font-medium text-black shadow transition hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-black"
              >
                Book a meeting
              </a>
              <p className="text-sm text-zinc-400">
                No packages listed. We’ll discuss the right approach on the call.
              </p>
            </div>
          </div>
          <div className="relative h-[340px] w-full sm:h-[420px] md:h-[520px]">
            <div className="absolute inset-0 rounded-xl border border-zinc-800/60 bg-gradient-to-b from-zinc-900 to-black/60">
              <Spline
                scene="https://prod.spline.design/AeAqaKLmGsS-FPBN/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
