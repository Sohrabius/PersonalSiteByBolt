import {
  Bot,
  Database,
  GitBranch,
  LayoutTemplate,
  Server,
  Sparkles,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { skillGroups } from '../data';
import { useReveal } from '../hooks';

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Server,
  Database,
  LayoutTemplate,
  GitBranch,
  Sparkles,
  Bot,
};

export default function Skills() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/30 to-transparent" />
      <div className="section-shell relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <Sparkles className="h-3.5 w-3.5" />
            Skills
          </p>
          <h2 className="section-title mt-4">Tools & technologies I work with</h2>
          <p className="mt-4 max-w-2xl text-ink-400">
            A blend of enterprise-grade CRM engineering, full-stack .NET delivery, and a growing
            focus on AI-assisted development.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Sparkles;
            return (
              <div
                key={group.title}
                className={`card-surface group p-6 reveal ${visible ? 'is-visible' : ''}`}
                style={{ transitionDelay: `${0.05 * i + 0.1}s` }}
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-white">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-lg border border-ink-700/70 bg-ink-800/40 px-3 py-1.5 text-xs font-medium text-ink-300 transition-colors group-hover:border-ink-600 group-hover:text-ink-100"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
