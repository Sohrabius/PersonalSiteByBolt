import { ArrowUp, Heart, Linkedin, Mail, Terminal } from 'lucide-react';
import { navItems, profile } from '../data';

export default function Footer() {
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="relative border-t border-ink-800/60 bg-ink-950">
      <div className="section-shell py-14">
        <div className="flex flex-col items-center gap-8 text-center">
          <button onClick={() => go('home')} className="group flex items-center gap-2.5 font-display font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30 transition-colors group-hover:bg-brand-500/25">
              <Terminal className="h-5 w-5" />
            </span>
            <span className="text-lg">
              {profile.name}
            </span>
          </button>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className="text-sm text-ink-400 transition-colors hover:text-brand-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-ink-700 text-ink-300 transition-all hover:border-brand-500/50 hover:text-brand-400"
              aria-label="Email"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
          </div>

          <button
            onClick={() => go('home')}
            className="group flex items-center gap-2 rounded-full border border-ink-700 px-5 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-300 transition-colors hover:border-brand-500/40 hover:text-brand-300"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5" />
          </button>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-ink-800/60 pt-6 sm:flex-row">
          <p className="text-xs text-ink-500">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-ink-500">
            Built with
            <Heart className="h-3.5 w-3.5 text-brand-500/70" />
            using React, Tailwind & Supabase
          </p>
        </div>
      </div>
    </footer>
  );
}
