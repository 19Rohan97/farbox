import type { Metadata } from "next";
import "./globals.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { MobileNav } from "../components/MobileNav";
import { DynamicStyles } from "../components/DynamicStyles";
import { Montserrat } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";
import { createAnonServerClient } from "../utils/supabase/server";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const DEFAULT_TITLE = "Your Agency";
const DEFAULT_DESCRIPTION = "Professional web solutions for growing businesses";

export async function generateMetadata(): Promise<Metadata> {
  let icons: Metadata["icons"] | undefined = undefined;
  let title = DEFAULT_TITLE;
  let description = DEFAULT_DESCRIPTION;
  let siteName: string | undefined = undefined;
  let canonicalUrl: string | undefined = undefined;
  let ogTitle: string | undefined = undefined;
  let ogDescription: string | undefined = undefined;
  let ogImageUrl: string | undefined = undefined;
  let twitterCard: string | undefined = undefined;
  let twitterSite: string | undefined = undefined;
  try {
    const supabase = createAnonServerClient();
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "settings")
      .single();
    const settings: any = !error ? data?.data : undefined;
    const faviconUrl = settings?.faviconUrl as string | undefined;
    if (faviconUrl) {
      icons = {
        icon: [{ url: faviconUrl }],
        shortcut: [{ url: faviconUrl }],
        apple: [{ url: faviconUrl }],
      } as NonNullable<Metadata["icons"]>;
    }
    if (settings) {
      title = (settings.seoTitle as string) || title;
      description = (settings.seoDescription as string) || description;
      siteName = (settings.siteName as string) || undefined;
      canonicalUrl = (settings.canonicalUrl as string) || undefined;
      ogTitle = (settings.ogTitle as string) || title;
      ogDescription = (settings.ogDescription as string) || description;
      ogImageUrl = (settings.ogImageUrl as string) || undefined;
      twitterCard = (settings.twitterCard as string) || "summary_large_image";
      twitterSite = (settings.twitterSite as string) || undefined;
    }
  } catch {}
  // Normalize twitter card to allowed union
  const card: "summary" | "summary_large_image" | "player" | "app" =
    twitterCard === "summary" ||
    twitterCard === "player" ||
    twitterCard === "app"
      ? (twitterCard as any)
      : "summary_large_image";

  return {
    title,
    description,
    icons,
    openGraph: {
      title: ogTitle || title,
      description: ogDescription || description,
      siteName: siteName || title,
      url: canonicalUrl,
      images: ogImageUrl ? [{ url: ogImageUrl }] : undefined,
      type: "website",
    },
    twitter: {
      card,
      site: twitterSite,
      title: ogTitle || title,
      description: ogDescription || description,
      images: ogImageUrl ? [ogImageUrl] : undefined,
    },
    alternates: canonicalUrl ? { canonical: canonicalUrl } : undefined,
  } satisfies Metadata;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Load dynamic settings (e.g., logoUrl, brandColor)
  let logoUrl: string | undefined = undefined;
  let brandColor: string = "#f24711"; // Default brand color

  // Try to load from database with better error handling
  try {
    const supabase = createAnonServerClient();
    const { data, error } = await supabase
      .from("sections")
      .select("data")
      .eq("id", "settings")
      .single();

    if (!error && data?.data) {
      if (data.data.logoUrl) logoUrl = data.data.logoUrl as string;
      if (data.data.brandColor) {
        // Validate the color format before using it
        const color = data.data.brandColor as string;
        if (color && /^#[0-9A-Fa-f]{6}$/.test(color)) {
          brandColor = color;
        }
      }
    }
  } catch (error) {
    // Silently fall back to default color if database is unavailable
    console.log("Using default brand color - database unavailable");
  }

  return (
    <html lang="en" className={montserrat.variable}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `:root { --brand-500: ${brandColor}; }`,
          }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900 dark:bg-neutral-950 dark:text-gray-100">
        <Analytics />
        <DynamicStyles />
        <Header logoUrl={logoUrl} />
        <main className="md:pb-0">{children}</main>
        <Footer />
        <MobileNav />
      </body>
    </html>
  );
}
