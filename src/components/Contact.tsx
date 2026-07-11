import { useState, type FormEvent } from 'react';
import { AlertCircle, CheckCircle2, Linkedin, Loader2, Mail, MapPin, Phone, Send } from 'lucide-react';
import { profile } from '../data';
import { supabase } from '../lib/supabase';
import { useReveal } from '../hooks';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMsg('');

    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !message) {
      setStatus('error');
      setErrorMsg('Please fill in your name, email, and message.');
      return;
    }

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      subject: subject || null,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again or email me directly.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 radial-glow opacity-50" />
      <div className="section-shell relative">
        <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''}`}>
          <p className="eyebrow">
            <Mail className="h-3.5 w-3.5" />
            Contact
          </p>
          <h2 className="section-title mt-4">Let's build something together</h2>
          <p className="mt-4 max-w-2xl text-ink-400">
            Have a project, a role, or just want to say hi? Drop me a message and I'll get back to you.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <div className={`lg:col-span-2 space-y-4 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.1s' }}>
            <a
              href={`mailto:${profile.email}`}
              className="card-surface group flex items-center gap-4 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-400">Email</p>
                <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {profile.email}
                </p>
              </div>
            </a>

            <a href={`tel:${profile.phone}`} className="card-surface group flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                <Phone className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-400">Phone</p>
                <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {profile.phone}
                </p>
              </div>
            </a>

            <div className="card-surface flex items-center gap-4 p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20">
                <MapPin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-400">Location</p>
                <p className="mt-0.5 text-sm font-semibold text-white">{profile.location}</p>
              </div>
            </div>

            <a
              href={profile.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="card-surface group flex items-center gap-4 p-5"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 ring-1 ring-brand-500/20 transition-colors group-hover:bg-brand-500/20">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-ink-400">LinkedIn</p>
                <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-brand-300 transition-colors">
                  {profile.linkedin}
                </p>
              </div>
            </a>
          </div>

          <div className={`lg:col-span-3 reveal ${visible ? 'is-visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="card-surface p-6 sm:p-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" required />
                <Field label="Email" name="email" type="email" placeholder="you@example.com" required />
              </div>
              <Field label="Subject" name="subject" placeholder="What's this about?" />
              <div>
                <label htmlFor="message" className="mb-2 block text-xs font-mono uppercase tracking-wider text-ink-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me a bit about what you have in mind..."
                  className="w-full rounded-xl border border-ink-700 bg-ink-800/40 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
                />
              </div>

              {status === 'error' && (
                <div className="flex items-center gap-2.5 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMsg}
                </div>
              )}

              {status === 'success' && (
                <div className="flex items-center gap-2.5 rounded-xl border border-accent-500/30 bg-accent-500/10 px-4 py-3 text-sm text-accent-400">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thanks! Your message has been sent — I'll be in touch soon.
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-mono uppercase tracking-wider text-ink-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-ink-700 bg-ink-800/40 px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-brand-500/50 focus:outline-none focus:ring-2 focus:ring-brand-500/20"
      />
    </div>
  );
}


