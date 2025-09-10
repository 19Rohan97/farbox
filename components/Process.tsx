"use client";
import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { site } from '../content/site';
import { ShapesBackdrop } from './ShapesBackdrop';

function StepIcon({ title }: { title: string }) {
  const cls = 'h-5 w-5';
  const common = { stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const t = title.toLowerCase();
  if (t.includes('discover')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <circle cx="11" cy="11" r="7" />
        <path d="M21 21l-4.3-4.3" />
      </svg>
    );
  }
  if (t.includes('design')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
      </svg>
    );
  }
  if (t.includes('develop')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
      </svg>
    );
  }
  // deploy
  return (
    <svg viewBox="0 0 24 24" className={cls} {...common}>
      <path d="M5 13l4 4L19 7" />
      <path d="M12 19v3" />
      <path d="M7 22h10" />
    </svg>
  );
}

export function Process() {
  const [active, setActive] = useState(0);
  const images = ['/images/project-1.svg', '/images/project-2.svg', '/images/project-3.svg', '/images/project-4.svg'];

  return (
    <section id="process" className="relative py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-brand-500/5 to-transparent dark:from-brand-500/10" />
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <div className="max-w-2xl">
              <span className="chip-brand">Process</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{site.process.title}</h2>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{site.process.intro}</p>
            </div>

            <ol className="mt-8 space-y-4">
              {site.process.steps.map((s, idx) => (
                <li key={s.title}>
                  <button
                    type="button"
                    onMouseEnter={() => setActive(idx)}
                    onFocus={() => setActive(idx)}
                    className={'card w-full rounded-xl p-5 text-left transition hover:-translate-y-0.5 hover:shadow-md ' + (active === idx ? 'border-brand-500 ring-1 ring-brand-500/30' : '')}
                  >
                    <div className="flex items-start gap-3">
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
                        <StepIcon title={s.title} />
                      </div>
                      <div>
                        <h3 className="font-semibold">{s.title}</h3>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{s.description}</p>
                      </div>
                    </div>
                  </button>
                </li>
              ))}
            </ol>
          </div>

          <div className="sticky top-24 hidden lg:block">
            <div className="relative">
              <ShapesBackdrop />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
                <div className="relative aspect-[4/3] bg-gray-50 dark:bg-neutral-900">
                  {site.process.steps.map((s, idx) => (
                    <div key={s.title} className={'absolute inset-0 transition-opacity duration-500 ' + (active === idx ? 'opacity-100' : 'opacity-0')}>
                      <Image src={images[idx % images.length]} alt={s.title} fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/30 to-transparent p-4 text-white">
                  <div className="text-sm">{site.process.steps[active]?.title}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
