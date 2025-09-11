import Image from "next/image";
import { Container } from "./Container";
import { ShapesBackdrop } from "./ShapesBackdrop";
import { site } from "../content/site";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pb-20 pt-24 sm:pt-32"
      id="home"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-500/5 via-white to-white dark:via-neutral-950 dark:to-neutral-950" />
      <div className="pointer-events-none absolute right-[-8rem] top-[-6rem] -z-10 h-96 w-96 rounded-full bg-brand-500/30 blur-3xl dark:opacity-30" />
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <span className="chip-brand">{site.hero.subhead}</span>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-7xl">
              {site.hero.title}
            </h1>
            <p className="mt-6 text-lg text-gray-600 dark:text-gray-300">
              {site.hero.body}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={site.tidycal}
                target="_blank"
                rel="noreferrer"
                className="btn-primary"
              >
                Book a call
              </a>
              <a href="#case-studies" className="btn-secondary">
                See case studies
                <svg
                  aria-hidden
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="mt-10 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
              {site.hero.stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-gray-200 bg-white/70 p-4 text-center backdrop-blur dark:border-gray-800 dark:bg-white/5"
                >
                  <div className="text-xl font-semibold sm:text-2xl">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <ShapesBackdrop />
            <div className="relative overflow-hidden rounded-2xl border border-gray-200 shadow-sm dark:border-gray-800">
              <div className="relative aspect-[8/10] bg-white">
                <Image
                  src="/images/hero-man.png"
                  alt="Hand drawn man sketch"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
