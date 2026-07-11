import { Briefcase, MapPin } from 'lucide-react';
import { experiences } from '../data';
import { useReveal } from '../hooks';

export default function Experience() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <Briefcase className="h-3.5 w-3.5" />
            Experience
          </p>
          <h2 className="section-title mt-4">Where I've built my craft</h2>
        </div>

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-ink-700 to-transparent" />

          <div className="space-y-10">
            {experiences.map((exp, ei) => (
              <div
                key={exp.company}
                className={`relative pl-14 sm:pl-20 reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.1 * ei + 0.1}s` }}
              >
                <span className="absolute left-0 top-1 flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-ink-900 ring-2 ring-brand-500/40 text-brand-400">
                  <Briefcase className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>

                <div className="card-surface p-6 sm:p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-white">{exp.company}</h3>
                    <span className="flex items-center gap-1.5 text-xs font-mono text-ink-400">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <div className="mt-5 space-y-6">
                    {exp.roles.map((role) => (
                      <div key={role.title} className="border-l-2 border-ink-700 pl-4">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <h4 className="font-semibold text-brand-300">{role.title}</h4>
                          <span className="text-xs font-mono text-ink-400">{role.period}</span>
                        </div>
                        <ul className="mt-3 space-y-2">
                          {role.bullets.map((b) => (
                            <li key={b} className="flex gap-2.5 text-sm text-ink-300 leading-relaxed">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500/60" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
