import {
  BookOpen,
  Bot,
  FlaskConical,
  Gamepad2,
  PenLine,
  RefreshCw,
  Sparkles,
  Users,
  Wrench,
  type LucideIcon,
} from 'lucide-react';
import { otherWork, entertainment } from '../data';
import { useReveal } from '../hooks';

const iconMap: Record<string, LucideIcon> = {
  Users,
  FlaskConical,
  Bot,
  RefreshCw,
  PenLine,
  Wrench,
  Gamepad2,
  BookOpen,
};

export default function BeyondCode() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="beyond" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Beyond Code
          </p>
          <h2 className="section-title mt-4">Other things I do & how I recharge</h2>
          <p className="mt-4 max-w-2xl text-ink-400">
            The work that happens around the codebase — and the things that keep me curious outside
            of it.
          </p>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
            Other work & focus areas
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {otherWork.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className={`card-surface group flex gap-4 p-6 reveal ${visible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.08 * i + 0.1}s` }}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="font-display text-base font-semibold text-white">{item.title}</h4>
                    <p className="mt-1.5 text-sm text-ink-300 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink-400">
            Entertainment & interests
          </h3>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {entertainment.map((item, i) => {
              const Icon = iconMap[item.icon] ?? Sparkles;
              return (
                <div
                  key={item.title}
                  className={`card-surface group p-6 text-center reveal ${visible ? 'is-visible' : ''}`}
                  style={{ transitionDelay: `${0.08 * i + 0.1}s` }}
                >
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-accent-500/10 text-accent-400 ring-1 ring-accent-500/20 transition-colors group-hover:bg-accent-500/20">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h4 className="mt-4 font-display text-base font-semibold text-white">{item.title}</h4>
                  <p className="mt-2 text-sm text-ink-400 leading-relaxed">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
