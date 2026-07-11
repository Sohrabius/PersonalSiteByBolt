import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, FolderGit2, ExternalLink } from 'lucide-react';
import { projects, type Project } from '../data';
import { useReveal } from '../hooks';

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))];

const statusStyles: Record<Project['status'], string> = {
  Live: 'bg-accent-500/15 text-accent-400 ring-accent-500/30',
  'Case Study': 'bg-brand-500/15 text-brand-300 ring-brand-500/30',
  Demo: 'bg-amber-500/15 text-amber-300 ring-amber-500/30',
  Internal: 'bg-ink-700/40 text-ink-300 ring-ink-600/40',
};

export default function Portfolio() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink-900/30 to-transparent" />
      <div className="section-shell relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <FolderGit2 className="h-3.5 w-3.5" />
            Portfolio
          </p>
          <h2 className="section-title mt-4">Selected projects & case studies</h2>
          <p className="mt-4 max-w-2xl text-ink-400">
            A mix of enterprise CRM work, system integrations, and full-stack freelance deliveries —
            plus the R&D experiments I'm exploring on the side.
          </p>
        </div>

        <div className={`mt-10 flex flex-wrap gap-2 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                filter === cat
                  ? 'bg-brand-500 text-ink-950'
                  : 'border border-ink-700 text-ink-300 hover:border-brand-500/40 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {filtered.map((project, i) => (
            <article
              key={project.name}
              className={`card-surface group flex flex-col p-6 sm:p-7 reveal ${visible ? 'is-visible' : ''}`}
              style={{ transitionDelay: `${0.06 * i + 0.15}s` }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span
                    className={`inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-mono uppercase tracking-wider ring-1 ${statusStyles[project.status]}`}
                  >
                    {project.status}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-white group-hover:text-brand-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="mt-1 text-xs font-mono text-ink-400">{project.category}</p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-ink-800/60 text-ink-400 ring-1 ring-ink-700 transition-colors group-hover:bg-brand-500/15 group-hover:text-brand-400">
                  <FolderGit2 className="h-5 w-5" />
                </span>
              </div>

              <p className="mt-4 text-sm text-ink-300 leading-relaxed">{project.description}</p>

              <ul className="mt-5 space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm text-ink-300 leading-relaxed">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-500/70" />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-ink-700/70 bg-ink-800/40 px-2.5 py-1 text-[11px] font-mono text-ink-400"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-6 text-sm font-semibold"
                >
                  {project.linkLabel ?? 'View project'}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </article>
          ))}
        </div>

        <div className={`mt-10 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <a
            href="https://linkedin.com/in/sohrabius"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-ink-700 p-5 text-sm text-ink-400 transition-colors hover:border-brand-500/40 hover:text-brand-300"
          >
            <ExternalLink className="h-4 w-4" />
            See more of my work on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
