import React from 'react';
import { Star, ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function SocialProof() {
  return (
    <section className="border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center gap-2 text-amber-400">
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
              <Star className="h-5 w-5 fill-amber-400" />
            </div>
            <p className="mt-3 text-sm text-zinc-300">
              "We replaced manual follow-ups with an AI workflow and reclaimed hours every week. It feels
              personal, not robotic."
            </p>
            <p className="mt-2 text-xs text-zinc-500">— Operations Lead, SMB client</p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center gap-2 text-emerald-400">
              <CheckCircle2 className="h-5 w-5" />
              <span className="text-sm font-medium text-zinc-200">Proven impact</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">
              Automations deployed across customer service, lead intake, and scheduling — without changing
              your existing tools.
            </p>
          </div>

          <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6">
            <div className="flex items-center gap-2 text-sky-400">
              <ShieldCheck className="h-5 w-5" />
              <span className="text-sm font-medium text-zinc-200">Trust & privacy</span>
            </div>
            <p className="mt-3 text-sm text-zinc-300">
              Clear, secure setups with transparent data handling. You stay in control — I handle the heavy
              lifting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
