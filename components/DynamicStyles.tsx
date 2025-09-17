"use client";

import { useEffect, useState } from "react";

export function DynamicStyles() {
  const [brandColor, setBrandColor] = useState<string | null>(null);

  useEffect(() => {
    // Get the current CSS variable value first (from server-side rendering)
    const currentColor = getComputedStyle(document.documentElement)
      .getPropertyValue("--brand-500")
      .trim();

    if (currentColor) {
      setBrandColor(currentColor);
    }

    // Fetch brand color from API only if needed
    const fetchBrandColor = async () => {
      try {
        const res = await fetch("/api/admin/content", { cache: "no-store" });
        const data = await res.json();
        if (
          data.settings?.brandColor &&
          data.settings.brandColor !== currentColor
        ) {
          setBrandColor(data.settings.brandColor);
        }
      } catch (error) {
        console.log("Could not fetch brand color, using current");
      }
    };

    // Only fetch if we don't have a color or after a short delay to avoid flash
    if (!currentColor) {
      fetchBrandColor();
    }

    // Listen for storage events (when admin panel updates colors)
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "brandColorUpdate") {
        fetchBrandColor();
      }
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  useEffect(() => {
    // Only update if we have a different color
    if (brandColor) {
      const currentColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--brand-500")
        .trim();

      if (currentColor !== brandColor) {
        document.documentElement.style.setProperty("--brand-500", brandColor);
      }
    }
  }, [brandColor]);

  return null; // This component doesn't render anything
}
