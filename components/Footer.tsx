import { Container } from './Container';
import { site } from '../content/site';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white border-t-2 border-brand-500">
      <Container className="pt-14 pb-28 md:pb-14">
        <div className="grid gap-10 sm:grid-cols-3">
          <div>
            <div className="text-lg font-semibold">Farbox Creative</div>
            <p className="mt-2 text-sm text-white/70">Experienced web design agency crafting fast, on‑brand websites.</p>
          </div>
          <nav className="grid grid-cols-2 gap-2 text-sm">
            <a href="#services" className="text-white/80 hover:text-white">Services</a>
            <a href="#process" className="text-white/80 hover:text-white">Process</a>
            <a href="#case-studies" className="text-white/80 hover:text-white">Case Studies</a>
            <a href="#about" className="text-white/80 hover:text-white">About</a>
            <a href="#contact" className="text-white/80 hover:text-white">Contact</a>
          </nav>
          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16v16H4z"/><path d="M22 6l-10 7L2 6"/></svg>
              <a href={`mailto:${site.contact?.email ?? 'hello@example.com'}`} className="hover:text-white">{site.contact?.email ?? 'hello@example.com'}</a>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.62-3.07 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.6 12.6 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.6 12.6 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <a href={`tel:${(site.contact?.phone ?? '').replace(/\s/g, '')}`} className="hover:text-white">{site.contact?.phone ?? ''}</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="Instagram" className="text-white/80 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-white/80 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Email" className="text-white/80 hover:text-white">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 6l-10 7L2 6"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/60 flex items-center justify-between">
          <p>Farbox Creative ©2012-{new Date().getFullYear()}</p>
          <a href="#home" className="hover:text-white">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
}
