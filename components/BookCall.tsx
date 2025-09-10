import { Container } from './Container';
import { site } from '../content/site';
import { ShapesBackdrop } from './ShapesBackdrop';

export function BookCall() {
  return (
    <section id="call" className="overflow-hidden py-24 border-t border-gray-100 dark:border-gray-800">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-white px-6 py-10 text-gray-900 shadow-md sm:p-12 dark:bg-neutral-950 dark:text-gray-100">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-brand-500/5 to-transparent" />
          <ShapesBackdrop />
          {/* Inner subtle shapes */}
          <div className="pointer-events-none absolute right-6 top-6 hidden sm:block">
            <div className="flex -translate-y-2 translate-x-1 rotate-12 gap-1 opacity-60">
              <span className="block h-2 w-2 rounded-full bg-brand-500/40 anim-float-y" />
              <span className="block h-2 w-2 rounded-full bg-brand-500/30 anim-float-y anim-delay-500" />
              <span className="block h-2 w-2 rounded-full bg-brand-500/20 anim-float-y anim-delay-1000" />
            </div>
          </div>
          <div className="pointer-events-none absolute -left-4 bottom-6 hidden sm:block">
            <div className="h-10 w-10 rounded-full border-2 border-brand-500/25 anim-spin-slow" />
          </div>
          <div className="pointer-events-none absolute left-1/3 -bottom-3 hidden sm:block">
            <div className="h-8 w-8 rotate-45 rounded-md border border-brand-500/20 anim-float-x anim-delay-1500" />
          </div>
          <div className="grid items-center gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <span className="chip-brand">Let’s talk</span>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{site.book.title}</h2>
              <ul className="mt-6 grid gap-3">
                {site.book.paragraphs.map((p, i) => (
                  <li key={i} className="inline-flex items-start gap-3 text-gray-800 dark:text-gray-200">
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href={site.tidycal} target="_blank" rel="noreferrer" className="btn-primary">Book a call</a>
                <a href="#case-studies" className="btn-secondary">See case studies</a>
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 backdrop-blur dark:border-gray-800 dark:bg-white/5">
              <div className="text-sm text-gray-600 dark:text-gray-400">Prefer email?</div>
              <p className="mt-2 text-gray-800 dark:text-gray-200">Use the form below to tell us about your project.</p>
              <a href="#contact" className="mt-6 inline-flex btn-secondary">Go to contact form</a>
              <div className="mt-6 grid grid-cols-2 gap-3 text-center text-xs text-gray-600 dark:text-gray-400">
                <div className="rounded-lg border border-gray-200 bg-white/70 px-3 py-2 dark:border-gray-800 dark:bg-white/5">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">30 min</div>
                  <div>Initial chat</div>
                </div>
                <div className="rounded-lg border border-gray-200 bg-white/70 px-3 py-2 dark:border-gray-800 dark:bg-white/5">
                  <div className="text-lg font-semibold text-gray-900 dark:text-white">5 spots</div>
                  <div>Active clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
