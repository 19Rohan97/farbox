import { NextResponse } from 'next/server';
import { createAnonServerClient, createServiceServerClient } from '../../../../utils/supabase/server';
import { site as fallback } from '../../../../content/site';

export async function GET() {
  try {
    const supabase = createAnonServerClient();
    const { data, error } = await supabase.from('sections').select('id, data');
    if (error) throw error;
    if (!data || data.length === 0) {
      return NextResponse.json(fallback);
    }
    const obj: any = {};
    for (const row of data) obj[row.id] = row.data ?? null;
    return NextResponse.json(obj);
  } catch (e) {
    // Fallback to static content if DB not reachable
    return NextResponse.json(fallback);
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { section, data } = body || {};
    if (!section) return NextResponse.json({ ok: false, error: 'Missing section' }, { status: 400 });
    const supabase = createServiceServerClient();
    const { error } = await supabase
      .from('sections')
      .upsert({ id: section, data, updated_at: new Date().toISOString() }, { onConflict: 'id' });
    if (error) return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e: any) {
    return NextResponse.json({ ok: false, error: e?.message || 'Invalid JSON' }, { status: 400 });
  }
}
