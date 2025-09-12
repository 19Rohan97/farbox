import { createAnonServerClient } from "../utils/supabase/server";
import { site as fallback } from "../content/site";
import { Hero } from "../components/Hero";
import { Marquee } from "../components/Marquee";
import { Services } from "../components/Services";
import { Clients } from "../components/Clients";
import { Process } from "../components/Process";
import { Belief } from "../components/Belief";
import { CaseStudies } from "../components/CaseStudies";
import { About } from "../components/About";
import { BookCall } from "../components/BookCall";
import { Contact } from "../components/Contact";
import { site } from "../content/site";

export default async function Page() {
  const supabase = createAnonServerClient();
  let hero = fallback.hero;
  let marquee: string[] = Array.from(fallback.marquee);
  let services = fallback.services;
  let processContent = fallback.process;
  let aboutContent = fallback.about;
  let bookContent = fallback.book;
  let contactContent = fallback.contact;
  let caseStudiesContent = fallback.caseStudies;
  let clientsHeading = fallback.clients;
  let clientsLogos: { src: string; alt: string }[] = Array.from(fallback.clientLogos);
  let beliefs: { title: string; quote: string }[] = Array.from(fallback.beliefs);
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "hero")
      .single();
    if (!error && data?.data) {
      hero = { ...hero, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "clients")
      .single();
    if (!error && data?.data) {
      clientsHeading = { ...clientsHeading, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "clientLogos")
      .single();
    if (!error && Array.isArray(data?.data)) {
      clientsLogos = (data!.data as unknown) as { src: string; alt: string }[];
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "beliefs")
      .single();
    if (!error && Array.isArray(data?.data) && (data!.data as any[]).length > 0) {
      beliefs = (data!.data as unknown) as { title: string; quote: string }[];
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "caseStudies")
      .single();
    if (!error && data?.data) {
      caseStudiesContent = { ...caseStudiesContent, ...data.data };
      // Ensure items is an array
      if (!Array.isArray((caseStudiesContent as any).items)) {
        (caseStudiesContent as any).items = fallback.caseStudies.items;
      }
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "book")
      .single();
    if (!error && data?.data) {
      bookContent = { ...bookContent, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "contact")
      .single();
    if (!error && data?.data) {
      contactContent = { ...contactContent, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "services")
      .single();
    if (!error && data?.data) {
      services = { ...services, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "process")
      .single();
    if (!error && data?.data) {
      processContent = { ...processContent, ...data.data };
    }
  } catch {}
  try {
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "about")
      .single();
    if (!error && data?.data) {
      aboutContent = { ...aboutContent, ...data.data };
    }
  } catch {}
  try {
    const { data: data2, error: error2 } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "marquee")
      .single();
    if (
      !error2 &&
      Array.isArray(data2?.data) &&
      (data2!.data as any[]).length > 0
    ) {
      marquee = data2!.data as string[];
    }
  } catch {}
  return (
    <>
      <Hero hero={hero} />
      <Marquee marquee={marquee} />
      <Services services={services} />
      <Clients clients={clientsHeading} clientLogos={clientsLogos} />
      <Process process={processContent} />
      <Belief title={(beliefs[0] ?? fallback.beliefs[0]).title} quote={(beliefs[0] ?? fallback.beliefs[0]).quote} />
      <CaseStudies caseStudies={caseStudiesContent} />
      <About about={aboutContent} />
      <Belief title={(beliefs[1] ?? beliefs[0] ?? fallback.beliefs[1] ?? fallback.beliefs[0]).title} quote={(beliefs[1] ?? beliefs[0] ?? fallback.beliefs[1] ?? fallback.beliefs[0]).quote} />
      <BookCall book={bookContent} />
      <Contact contact={contactContent} />
    </>
  );
}
