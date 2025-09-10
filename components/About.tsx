import Image from 'next/image';
import { Container } from './Container';
import { site } from '../content/site';

export function About() {
  return (
    <section id="about" className="py-24 border-t border-gray-100 dark:border-gray-800">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-brand-500/15 blur-3xl anim-float-y" />
            <div className="pointer-events-none absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-brand-500/10 blur-2xl anim-float-x anim-delay-1000" />
            <div className="pointer-events-none absolute -left-10 bottom-10 h-16 w-16 rotate-12 rounded-xl border-2 border-brand-500/20 anim-spin-slow" />
            <div className="pointer-events-none absolute left-12 -bottom-8 h-10 w-10 rounded-full bg-brand-500/20 blur-md anim-float-y anim-delay-1500" />
            <div className="pointer-events-none absolute right-1/3 -top-6 h-8 w-8 rounded-full border-2 border-brand-500/30 anim-float-x anim-delay-500" />
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 shadow-sm dark:border-gray-800">
              <div className="relative aspect-[16/16] bg-gray-50 dark:bg-neutral-900">
                <Image src={site.about.photo} alt={site.about.ceoName ?? 'Team'} fill className="object-cover" />
              </div>
            </div>
          </div>

          <div className="max-w-xl">
            <span className="chip-brand">About</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{site.about.title}</h2>
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-lg">{site.about.body}</p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-sm text-gray-700 dark:text-gray-300">
              {site.about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-brand-500" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {site.about.ceoNote && (
              <blockquote className="mt-8 rounded-2xl border border-gray-200 bg-white/60 p-5 italic text-gray-800 backdrop-blur dark:border-gray-800 dark:bg-white/5 dark:text-gray-200">
                “{site.about.ceoNote}”
                <footer className="mt-3 text-sm not-italic text-gray-600 dark:text-gray-400">
                  — {site.about.ceoName}, {site.about.ceoTitle}
                </footer>
              </blockquote>
            )}

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={site.tidycal} target="_blank" rel="noreferrer" className="btn-primary">Book a call</a>
              <a href="#contact" className="btn-secondary">Contact</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
