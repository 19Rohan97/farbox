import { site } from '../content/site';

export function Marquee() {
  const items = site.marquee;
  const loop = [...items, ...items];
  return (
    <section aria-label="Capabilities" className="relative border-y border-gray-100 bg-white py-4 dark:border-gray-800 dark:bg-neutral-950">
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-neutral-950 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-neutral-950 pointer-events-none" />
      <div className="marquee">
        <div className="marquee__track">
          {loop.map((text, i) => (
            <div
              key={i}
              className="flex items-center gap-12 whitespace-nowrap text-sm font-semibold tracking-wide text-gray-900 dark:text-gray-100"
              aria-hidden={i >= items.length}
            >
              <span className="uppercase opacity-80">{text}</span>
              <span className="h-1 w-1 rounded-full bg-brand-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
