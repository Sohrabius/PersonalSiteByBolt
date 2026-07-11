import { GraduationCap, User } from 'lucide-react';
import { profile, education } from '../data';
import { useReveal } from '../hooks';

export default function About() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <User className="h-3.5 w-3.5" />
            About
          </p>
          <h2 className="section-title mt-4">The person behind the code</h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <div className={`lg:col-span-3 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <p className="text-lg text-ink-200 leading-relaxed">{profile.summary}</p>
            <p className="mt-6 text-ink-400 leading-relaxed">
              I believe great software comes from understanding the business behind it. Whether I'm
              architecting a Dynamics 365 plugin, wiring up an integration pipeline, or mentoring a
              teammate, I care about building things that last and delivering value that's visible.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn-primary text-xs">
                Let's work together
              </a>
              <a href="#experience" className="btn-ghost text-xs">
                See my experience
              </a>
            </div>
          </div>

          <div className={`lg:col-span-2 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="card-surface p-6">
              <div className="flex items-center gap-3 border-b border-ink-800 pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-500/15 text-brand-400">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-white">Education</h3>
              </div>
              <ul className="mt-5 space-y-5">
                {education.map((e) => (
                  <li key={e.degree} className="group">
                    <p className="text-sm font-semibold text-ink-100 leading-snug group-hover:text-white transition-colors">
                      {e.degree}
                    </p>
                    <p className="mt-1 text-sm text-ink-400 font-mono">{e.institution}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
