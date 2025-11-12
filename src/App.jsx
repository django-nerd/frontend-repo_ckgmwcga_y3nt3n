import { useState } from 'react'
import Spline from '@splinetool/react-spline'
import { Dumbbell, ShieldCheck, TimerReset, HeartPulse, ChevronRight, CheckCircle2 } from 'lucide-react'

function HoverCTA({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-emerald-500 px-6 py-3 font-semibold text-black transition-transform duration-300 hover:scale-[1.03] focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-0"
    >
      <span className="absolute inset-0 bg-gradient-to-r from-emerald-400 via-emerald-500 to-emerald-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="absolute -inset-1 rounded-full blur-md bg-emerald-500/40 opacity-0 transition-all duration-300 group-hover:opacity-100" />
      <span className="relative z-10 flex items-center gap-2 text-black">
        {children}
        <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
      </span>
    </button>
  )
}

function Feature({ icon: Icon, title, desc }) {
  return (
    <div className="group rounded-xl border border-emerald-500/20 bg-black/40 p-6 backdrop-blur-sm transition hover:border-emerald-500/40 hover:bg-black/50">
      <div className="mb-4 inline-flex rounded-lg border border-emerald-500/30 bg-black/60 p-3 text-emerald-400">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-white">{title}</h3>
      <p className="text-sm text-emerald-100/70">{desc}</p>
    </div>
  )
}

function PricingCard({ label, price, features, highlight }) {
  return (
    <div className={`relative rounded-2xl border ${highlight ? 'border-emerald-500/60' : 'border-emerald-500/20'} bg-black/50 p-6 shadow-[0_0_40px_-12px_rgba(16,185,129,0.35)]`}>
      {highlight && (
        <div className="absolute -top-3 left-6 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-black">Most Popular</div>
      )}
      <div className="mb-4 text-emerald-300">{label}</div>
      <div className="mb-6 flex items-end gap-1">
        <span className="text-4xl font-extrabold text-white">${price}</span>
        <span className="pb-1 text-sm text-emerald-100/70">/mo</span>
      </div>
      <ul className="mb-6 space-y-3">
        {features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-emerald-100/80">
            <CheckCircle2 className="h-4 w-4 text-emerald-400" />
            {f}
          </li>
        ))}
      </ul>
      <HoverCTA onClick={() => window.alert('Membership selected!')}>Choose plan</HoverCTA>
    </div>
  )
}

function App() {
  const [ctaClicks, setCtaClicks] = useState(0)

  return (
    <div className="min-h-screen bg-black text-emerald-100">
      {/* Navbar */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-emerald-500/10 bg-black/60 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-emerald-600 text-black font-extrabold">G</div>
            <span className="text-sm font-semibold tracking-wider text-emerald-300">GRID GYM</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-emerald-100/80 md:flex">
            <a href="#programs" className="hover:text-white">Programs</a>
            <a href="#coaches" className="hover:text-white">Coaches</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </nav>
          <div className="hidden md:block">
            <HoverCTA onClick={() => setCtaClicks((c) => c + 1)}>Join now</HoverCTA>
          </div>
        </div>
      </header>

      {/* Hero with Spline cover */}
      <section className="relative h-[90vh] w-full" aria-label="Hero">
        <div className="absolute inset-0">
          <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        {/* overlay for readability; pointer events disabled so Spline remains interactive */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-black/50 px-3 py-1 text-xs text-emerald-300">
            Elite training • Green + Black Vibes
          </div>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight text-white sm:text-5xl md:text-6xl">
            Build strength. Boost endurance. Own your grid.
          </h1>
          <p className="mt-4 max-w-2xl text-emerald-100/80">
            High-performance gym and sports club with science-backed programming and world-class coaches. Designed to move you—fast.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <HoverCTA onClick={() => setCtaClicks((c) => c + 1)}>Start free trial</HoverCTA>
            <a href="#programs" className="inline-flex items-center text-sm text-emerald-200 underline-offset-4 hover:underline">
              Explore programs
            </a>
          </div>
          <p className="mt-3 text-xs text-emerald-200/60">CTA clicked {ctaClicks} times</p>
        </div>
      </section>

      {/* Programs */}
      <section id="programs" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Programs tailored to your goals</h2>
          <p className="mt-2 text-emerald-100/70">Strength, conditioning, recovery — optimized for results.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Feature icon={Dumbbell} title="Strength Lab" desc="Progressive overload cycles, barbell mastery, and accessory work for raw power." />
          <Feature icon={TimerReset} title="HIIT Engine" desc="Metabolic intervals and mixed-modality circuits for stamina and fat loss." />
          <Feature icon={HeartPulse} title="Athlete Flow" desc="Mobility, agility, and movement quality for sport-ready performance." />
          <Feature icon={ShieldCheck} title="Recovery Zone" desc="Guided cooldowns, breathwork, and assisted stretching to bounce back fast." />
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="relative bg-gradient-to-b from-black to-black px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10">
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Coaches that push limits</h2>
            <p className="mt-2 text-emerald-100/70">Certified pros with championship experience and a results-first mindset.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {["Ava Stone", "Noah Reed", "Mia Park"].map((name, idx) => (
              <div key={idx} className="group overflow-hidden rounded-xl border border-emerald-500/20 bg-black/50 p-6">
                <div className="mb-4 h-40 w-full rounded-lg bg-gradient-to-br from-emerald-600/30 to-emerald-400/10" />
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-white">{name}</div>
                    <div className="text-sm text-emerald-100/70">Performance Coach</div>
                  </div>
                  <HoverCTA onClick={() => window.alert(`${name} booked!`)}>Book</HoverCTA>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">Memberships built for momentum</h2>
          <p className="mt-2 text-emerald-100/70">Simple, transparent pricing. Cancel anytime.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <PricingCard label="Starter" price={29} highlight={false} features={["Gym floor access", "Locker rooms", "Open gym hours"]} />
          <PricingCard label="Pro" price={59} highlight features={["All Starter features", "Unlimited classes", "Coach check-ins"]} />
          <PricingCard label="Elite" price={99} highlight={false} features={["All Pro features", "1:1 coaching", "Recovery sessions"]} />
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-emerald-500/10 bg-black/80 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
          <div className="text-sm text-emerald-100/70">© {new Date().getFullYear()} Grid Gym. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm">
            <a className="text-emerald-200 hover:text-white" href="#">Privacy</a>
            <a className="text-emerald-200 hover:text-white" href="#">Terms</a>
            <a className="text-emerald-200 hover:text-white" href="#">Support</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
