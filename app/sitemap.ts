import type { MetadataRoute } from 'next';
import { createAnonServerClient } from '../utils/supabase/server';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let base = process.env.NEXT_PUBLIC_SITE_URL || '';
  try {
    const supabase = createAnonServerClient();
    const { data, error } = await supabase
      .from('sections')
      .select('data')
      .eq('id', 'settings')
      .single();
    const canonical = (!error && data?.data?.canonicalUrl) ? (data.data.canonicalUrl as string) : undefined;
    if (canonical) base = canonical.replace(/\/$/, '');
  } catch {}
  if (!base) base = 'https://example.com';

  const urls: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: 'monthly', priority: 1.0 },
  ];
  return urls;
}

