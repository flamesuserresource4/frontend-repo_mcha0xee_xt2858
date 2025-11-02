import React from 'react';
import { CheckCircle2, ShieldCheck, Zap, User } from 'lucide-react';
import { useInView } from './hooks';

export default function ProofAndBenefits() {
  const { ref, inView } = useInView();
  return (
    <section ref={ref} className="relative" style={{ background: '#F7FBFD' }}>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className={`rounded-2xl border p-6 shadow-lg ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'} transition-all duration-500 [transition-timing-function:cubic-bezier(.2,.9,.3,1)]`}
          style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
        >
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <p className="text-base" style={{ color: '#0B2545' }}>
                "We replaced manual follow-ups with an AI workflow and reclaimed hours every week. It feels personal, not robotic."
              </p>
              <p className="mt-2 text-sm" style={{ color: '#6B7A90' }}>— Operations Lead, SMB client</p>
            </div>
            <div className="grid gap-3">
              <Stat icon={Zap} title="Time saved" desc="Hours back every week" />
              <Stat icon={CheckCircle2} title="Error reduction" desc="Fewer manual handoffs" />
              <Stat icon={ShieldCheck} title="Privacy-first" desc="Clear data handling" />
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          <Benefit icon={ShieldCheck} title="Trust & privacy" desc="Secure, transparent setups. You stay in control — I handle the heavy lifting." />
          <Benefit icon={Zap} title="Fast turnaround" desc="Quick iterations and clear timelines from call to launch." />
          <Benefit icon={User} title="Hands-on founder" desc="You’ll speak directly with me, Vukašin, throughout." />
          <Benefit icon={CheckCircle2} title="Use your tools" desc="We plug into your stack — no need to change what works." />
        </div>

        <div className="mt-10 rounded-2xl border p-4 shadow" style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}>
          <p className="text-center text-sm" style={{ color: '#6B7A90' }}>
            Integrates with tools you already use:
            <span className="ml-2 inline-flex flex-wrap items-center gap-4 align-middle">
              <Logo text="Gmail" />
              <Logo text="Google Sheets" />
              <Logo text="Calendly" />
              <Logo text="Make.com" />
              <Logo text="n8n" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function Stat({ icon: Icon, title, desc }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg" style={{ background: 'rgba(255,255,255,0.10)' }}>
        <Icon className="h-5 w-5" style={{ color: '#00B3A6' }} />
      </div>
      <div>
        <p className="text-sm font-medium" style={{ color: '#0B2545' }}>{title}</p>
        <p className="text-xs" style={{ color: '#6B7A90' }}>{desc}</p>
      </div>
    </div>
  );
}

function Benefit({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-2xl border p-5 transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl"
      style={{ background: 'rgba(255,255,255,0.08)', borderColor: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(8px)' }}
    >
      <Icon className="h-5 w-5" style={{ color: '#00B3A6' }} />
      <h3 className="mt-3 text-base font-semibold" style={{ color: '#0B2545' }}>{title}</h3>
      <p className="mt-1 text-sm" style={{ color: '#6B7A90' }}>{desc}</p>
    </div>
  );
}

function Logo({ text }) {
  return (
    <span className="rounded-md px-2 py-1 text-xs font-medium" style={{ color: '#0B2545', background: 'rgba(255,255,255,0.70)' }}>
      {text}
    </span>
  );
}
