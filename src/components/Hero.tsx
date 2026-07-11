import { ArrowDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { profile, stats } from '../data';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute inset-0 radial-glow" />
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl animate-float" />
      <div
        className="absolute bottom-0 -left-32 h-80 w-80 rounded-full bg-accent-500/5 blur-3xl animate-float"
        style={{ animationDelay: '2s' }}
      />

      <div className="section-shell relative w-full py-20">
        <div className="max-w-3xl">
          <p className="eyebrow animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <span className="h-px w-8 bg-brand-400" />
            {profile.location}
          </p>

          <h1 className="mt-6 font-display text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white text-balance animate-fade-up">
            {profile.name}
            <span className="block text-brand-400 text-3xl sm:text-4xl md:text-5xl mt-3 font-semibold">
              {profile.role}
            </span>
          </h1>

          <p className="mt-4 font-mono text-sm text-ink-400 animate-fade-up" style={{ animationDelay: '0.15s' }}>
            {profile.subrole}
          </p>

          <p className="mt-8 max-w-2xl text-lg text-ink-300 leading-relaxed animate-fade-up" style={{ animationDelay: '0.25s' }}>
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: '0.35s' }}>
            <a href="#portfolio" className="btn-primary">
              View my work
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href="#contact" className="btn-ghost">
              <Mail className="h-4 w-4" />
              Contact me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5 animate-fade-up" style={{ animationDelay: '0.45s' }}>
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:-translate-y-0.5"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400 hover:-translate-y-0.5"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="hidden sm:flex items-center gap-1.5 text-sm text-ink-400 font-mono">
              <MapPin className="h-4 w-4" />
              {profile.location}
            </span>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-3xl animate-fade-up" style={{ animationDelay: '0.55s' }}>
          {stats.map((s) => (
            <div key={s.label} className="card-surface p-5">
              <p className="font-display text-3xl sm:text-4xl font-bold text-brand-400">{s.value}</p>
              <p className="mt-1 text-xs sm:text-sm text-ink-400 font-mono uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-500 hover:text-brand-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-ink-700 p-1">
          <span className="h-2 w-1 rounded-full bg-current animate-bounce" />
        </span>
      </a>
    </section>
  );
}
