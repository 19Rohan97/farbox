import Image from 'next/image';
import { Container } from './Container';
import { site } from '../content/site';
import { ShapesBackdrop } from './ShapesBackdrop';

function ServiceIcon({ title }: { title: string }) {
  const cls = 'h-5 w-5';
  const common = { stroke: 'currentColor', strokeWidth: 2, fill: 'none', strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  const t = title.toLowerCase();
  if (t.includes('design')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M14 3l7 7-7 7-7-7 7-7z" />
        <path d="M5 19h14" />
      </svg>
    );
  }
  if (t.includes('develop')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
        <path d="M12 8v8" />
      </svg>
    );
  }
  if (t.includes('product')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M21 16V8l-9-5-9 5v8l9 5 9-5z" />
        <path d="M3 8l9 5 9-5" />
        <path d="M12 13v8" />
      </svg>
    );
  }
  if (t.includes('podcast') || t.includes('content')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <rect x="9" y="3" width="6" height="11" rx="3" />
        <path d="M12 14v7" />
        <path d="M8 21h8" />
      </svg>
    );
  }
  if (t.includes('commerce') || t.includes('shopify')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M6 6h15l-1.5 9h-12z" />
        <path d="M6 6l-2-2" />
        <circle cx="9" cy="20" r="1" />
        <circle cx="18" cy="20" r="1" />
      </svg>
    );
  }
  if (t.includes('seo') || t.includes('analytic')) {
    return (
      <svg viewBox="0 0 24 24" className={cls} {...common}>
        <path d="M3 3v18h18" />
        <path d="M7 15l3-3 3 2 4-6" />
      </svg>
    );
  }
  // default: wrench/tool
  return (
    <svg viewBox="0 0 24 24" className={cls} {...common}>
      <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4l-6 6 3 3 6-6a4 4 0 0 0 5.4-5.4z" />
    </svg>
  );
}

export function Services() {
  return (
    <section id="services" className="relative py-24 border-t border-gray-100 dark:border-gray-800">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-brand-500/5 to-transparent dark:from-brand-500/10" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="max-w-xl">
            <span className="chip-brand">Services</span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{site.services.title}</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">{site.services.subtitle}</p>
          </div>
          <div className="hidden lg:block">
            <div className="relative">
              <ShapesBackdrop />
              <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
                <div className="relative aspect-[4/3]">
                  <Image src="/images/services-graphic.png" alt="Computer vector graphic" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.services.items.map((item) => (
            <div
              key={item.title}
              className="card group p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-500/10 text-brand-500">
                  <ServiceIcon title={item.title} />
                </div>
                <h3 className="font-semibold">{item.title}</h3>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
        {site.services.note && (
          <div className="mt-12">
            <div className="mx-auto max-w-3xl rounded-xl border border-brand-500/20 bg-white/70 px-5 py-4 text-center text-gray-700 backdrop-blur dark:border-brand-500/30 dark:bg-white/5 dark:text-gray-300">
              {site.services.note}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
