import Image from 'next/image';
import { Container } from './Container';
import { site } from '../content/site';

export function Clients() {
  return (
    <section id="clients" className="overflow-hidden py-20 border-t border-gray-100 dark:border-gray-800">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{site.clients.title}</h2>
        </div>
        <div className="relative mt-10">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent dark:from-neutral-950" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent dark:from-neutral-950" />
          <div className="logo-marquee">
            <div className="logo-marquee__track">
              {[...site.clientLogos, ...site.clientLogos].map((logo, i) => (
                <div key={i} className="flex items-center justify-center opacity-80 transition hover:opacity-100">
                  <div className="relative h-40 w-40 overflow-hidden rounded-full border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-neutral-900">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      fill
                      className="object-contain p-6 grayscale hover:grayscale-0"
                      sizes="10rem"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
