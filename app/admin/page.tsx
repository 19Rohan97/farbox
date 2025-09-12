"use client";
import { useEffect, useMemo, useState } from 'react';

type SectionKey =
  | 'hero' | 'marquee' | 'services' | 'process' | 'beliefs' | 'clients' | 'clientLogos'
  | 'caseStudies' | 'about' | 'book' | 'contact';

const SECTIONS: { key: SectionKey; label: string }[] = [
  { key: 'hero', label: 'Hero' },
  { key: 'marquee', label: 'Capabilities' },
  { key: 'services', label: 'Services' },
  { key: 'process', label: 'Process' },
  { key: 'beliefs', label: 'Beliefs' },
  { key: 'clients', label: 'Clients (heading)' },
  { key: 'clientLogos', label: 'Client Logos' },
  { key: 'caseStudies', label: 'Case Studies' },
  { key: 'about', label: 'About' },
  { key: 'book', label: 'Book a Call' },
  { key: 'contact', label: 'Contact' },
];

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [data, setData] = useState<any>(null);
  const [tab, setTab] = useState<SectionKey>('hero');
  const [json, setJson] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const res = await fetch('/api/admin/content', { cache: 'no-store' });
      const j = await res.json();
      setData(j);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    if (!data) return;
    const section = (data as any)[tab];
    setJson(JSON.stringify(section ?? {}, null, 2));
    setError(null);
    setMessage(null);
  }, [tab, data]);

  const onSave = async () => {
    setError(null); setMessage(null);
    let parsed: any;
    try { parsed = JSON.parse(json); } catch (e: any) { setError('Invalid JSON'); return; }
    setSaving(true);
    const res = await fetch('/api/admin/content', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ section: tab, data: parsed }) });
    const j = await res.json();
    setSaving(false);
    if (!j.ok) { setError(j.error || 'Failed to save (filesystem may be read-only on host).'); return; }
    setMessage('Saved!');
    setData((prev: any) => ({ ...(prev || {}), [tab]: parsed }));
  };

  const current = useMemo(() => {
    try { return JSON.stringify(JSON.parse(json), null, 2); } catch { return json; }
  }, [json]);

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-neutral-950 text-gray-900 dark:text-gray-100">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-2xl font-semibold">Admin</h1>
        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Edit site content by section. Basic Auth protected via middleware (env ADMIN_USER / ADMIN_PASS).</p>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <aside className="rounded-xl border border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-white/5">
            <ul className="space-y-1 text-sm">
              {SECTIONS.map((s) => (
                <li key={s.key}>
                  <button onClick={() => setTab(s.key)} className={`w-full rounded-md px-3 py-2 text-left ${tab === s.key ? 'bg-brand-500 text-white' : 'hover:bg-gray-100 dark:hover:bg-white/10'}`}>
                    {s.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>
          <section className="md:col-span-3">
            <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-white/5">
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{SECTIONS.find(s => s.key === tab)?.label}</h2>
                <div className="text-xs text-gray-500">Section key: <code>{tab}</code></div>
              </div>
              <div className="mt-4">
                {loading ? (
                  <div className="text-sm text-gray-600">Loading…</div>
                ) : (
                  <textarea value={json} onChange={(e) => setJson(e.target.value)} rows={20} className="w-full resize-y rounded-md border border-gray-300 bg-white p-3 font-mono text-xs leading-5 dark:border-gray-700 dark:bg-neutral-900" />
                )}
              </div>
              <div className="mt-3 flex items-center gap-3">
                <button onClick={onSave} disabled={saving} className="btn-cta">
                  {saving ? 'Saving…' : 'Save'}
                </button>
                {message && <span className="text-xs text-green-600">{message}</span>}
                {error && <span className="text-xs text-red-600">{error}</span>}
              </div>
            </div>
          </section>
        </div>
        <div className="mt-6 text-xs text-gray-500 dark:text-gray-400">
          Note: On platforms with read-only filesystems (e.g., Vercel), saving writes to a local JSON file that may not persist. Hook up a DB (KV/Supabase) for production use.
        </div>
      </div>
    </main>
  );
}

