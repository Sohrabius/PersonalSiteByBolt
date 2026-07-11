import { useEffect, useState } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { navItems, profile } from '../data';
import { useScrollSpy } from '../hooks';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useScrollSpy(navItems.map((n) => n.id));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-ink-950/80 backdrop-blur-xl border-b border-ink-800/60' : 'bg-transparent'
      }`}
    >
      <nav className="section-shell flex h-16 items-center justify-between">
        <button
          onClick={() => go('home')}
          className="group flex items-center gap-2.5 font-display font-bold text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400 ring-1 ring-brand-500/30 transition-colors group-hover:bg-brand-500/25">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="hidden sm:block text-lg">
            MS<span className="text-brand-400">.</span>
          </span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => go(item.id)}
                className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                  active === item.id ? 'text-white' : 'text-ink-300 hover:text-white'
                }`}
              >
                {active === item.id && (
                  <span className="absolute inset-0 rounded-full bg-ink-800/80 ring-1 ring-ink-700" />
                )}
                <span className="relative">{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={`mailto:${profile.email}`} className="btn-primary text-xs">
            Get in touch
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg text-ink-200 hover:bg-ink-800 hover:text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-ink-800/60 bg-ink-950/95 backdrop-blur-xl">
          <ul className="section-shell flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => go(item.id)}
                  className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                    active === item.id ? 'bg-ink-800 text-white' : 'text-ink-300 hover:bg-ink-900 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
            <li className="mt-2">
              <a href={`mailto:${profile.email}`} className="btn-primary w-full text-xs">
                Get in touch
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
