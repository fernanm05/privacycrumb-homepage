"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface BrandItem {
  name: string;
  display: string;
  icon?: "shopify" | "webflow" | "notion" | "vercel" | "linear" | "stripe" | "framer" | "squarespace";
}

const allBrands: BrandItem[] = [
  { name: "Shopify", display: "Shopify", icon: "shopify" },
  { name: "Webflow", display: "Webflow", icon: "webflow" },
  { name: "Notion", display: "Notion", icon: "notion" },
  { name: "Vercel", display: "Vercel", icon: "vercel" },
  { name: "Linear", display: "Linear", icon: "linear" },
  { name: "Stripe", display: "Stripe", icon: "stripe" },
  { name: "Framer", display: "Framer", icon: "framer" },
  { name: "Squarespace", display: "Squarespace", icon: "squarespace" },
];

function BrandIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "shopify":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.337 3.199c-.147-.047-.31 0-.387.16-.062.128-1.073 2.036-1.073 2.036s-1.201-.53-1.36-.593c-.497-.21-1.201-.257-1.809-.13-.624.13-1.176.498-1.616 1.024-.816 1.005-1.153 2.426-1.153 2.426l-2.09.643S6.016 8.828 5.923 8.86c-.093.032-.155.097-.186.193L3.92 16.04l8.29 1.56L17.83 4.367c0-.032-.016-.065-.032-.097a.253.253 0 00-.129-.128c-.367-.193-1.504-.66-2.332-.943zM12.73 6.327l-.56 1.78s-.608-.304-1.376-.24c-1.12.08-1.136.768-1.12.96.064.96 2.594 1.168 2.738 3.424.112 1.776-1.04 2.992-2.642 3.088-1.921.112-2.977-1.008-2.977-1.008l.417-1.712s1.072.768 1.936.72c.56-.032.768-.48.752-.8-.08-1.248-2.13-1.168-2.258-3.248-.112-1.744 1.04-3.52 3.568-3.68.976-.064 1.472.192 1.472.192l.05.524z"/></svg>;
    case "webflow":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.802 8.56s-1.946 5.99-2.06 6.34c-.047-.47-.794-6.34-.794-6.34C13.2 4.5 9.5 4.56 8.138 8.56c0 0-2.178 5.67-2.3 5.99-.016-.36-.432-5.04-.432-5.04C5.134 4.94 1.5 4.62.5 8.62L2.988 19.5s3.93.14 5.394-3.86c0 0 1.628-4.14 1.7-4.34.032.2.7 4.34.7 4.34s3.898.14 5.394-3.86L19.5 2.5c-3.63.14-1.698 6.06-1.698 6.06z"/></svg>;
    case "notion":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L18.2 2.18c-.42-.327-.98-.7-2.055-.607L3.32 2.66c-.466.047-.56.28-.374.466l1.513 1.082zm.793 3.22v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.84-.047.933-.56.933-1.167V6.382c0-.606-.233-.933-.747-.886l-15.177.886c-.56.047-.746.327-.746.886v.16zm14.337.42c.093.42 0 .84-.42.887l-.7.14v10.264c-.607.327-1.167.513-1.634.513-.746 0-.933-.233-1.493-.933l-4.574-7.186v6.953l1.447.327s0 .84-1.167.84l-3.22.187c-.093-.187 0-.654.327-.747l.84-.213V8.28L7.83 8.094c-.094-.42.14-1.027.793-1.074l3.453-.233 4.76 7.28V7.848l-1.213-.14c-.094-.513.28-.886.746-.933l3.22-.187z"/></svg>;
    case "vercel":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L1 22h22L12 1z"/></svg>;
    case "linear":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M2.215 15.979a.37.37 0 00.596.318l5.19-5.19a10.847 10.847 0 00-.928-1.167L2.215 15.94v.04zM2.025 13.88c-.016.1.084.18.18.14A10.98 10.98 0 019.96 2.025a.13.13 0 00-.14-.18A10.98 10.98 0 002.025 13.88zM4.265 18.94a.37.37 0 00.556.376 10.98 10.98 0 005.79-3.55l-1.73-1.73a10.98 10.98 0 00-4.616 4.904z"/><path d="M12 2a10 10 0 0110 10c0 5.523-4.477 10-10 10a.13.13 0 01-.08-.236A10.98 10.98 0 0021.96 12 10.02 10.02 0 0012 2.04.13.13 0 0112 2z"/></svg>;
    case "stripe":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-7.076-2.19l-.916 5.574C4.858 22.88 7.87 24 11.422 24c2.584 0 4.713-.636 6.178-1.828 1.634-1.328 2.443-3.252 2.443-5.726.032-4.138-2.506-5.799-6.067-7.296z"/></svg>;
    case "framer":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4 0h16v8H12l8 8H12v8l-8-8V8l8-8H4z"/></svg>;
    case "squarespace":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.025 4.378l-7.07 7.07a2.005 2.005 0 000 2.83l4.768 4.768a2.005 2.005 0 002.829 0l7.07-7.07a2.005 2.005 0 000-2.83L14.854 4.38a2.005 2.005 0 00-2.829 0zm1.414 1.414l4.768 4.768a.502.502 0 010 .708l-7.07 7.07a.502.502 0 01-.708 0L5.661 13.57a.502.502 0 010-.708l7.07-7.07a.502.502 0 01.708 0z"/></svg>;
    default:
      return null;
  }
}

function BrandLabel({ brand }: { brand: BrandItem }) {
  if (brand.icon) {
    return (
      <span className="flex items-center gap-1.5">
        <BrandIcon icon={brand.icon} />
        {brand.display}
      </span>
    );
  }
  return <span className="font-bold text-lg">{brand.display}</span>;
}

export default function LogosGrid() {
  const [brands, setBrands] = useState(allBrands);
  const [swappingSet, setSwappingSet] = useState<Set<number>>(new Set());

  const swapPair = useCallback(() => {
    // Pick two random cells to swap
    const idx1 = Math.floor(Math.random() * 8);
    let idx2 = Math.floor(Math.random() * 8);
    while (idx2 === idx1) idx2 = Math.floor(Math.random() * 8);

    // Fade out BOTH cells
    setSwappingSet(new Set([idx1, idx2]));

    // After fade-out, swap and fade both back in
    setTimeout(() => {
      setBrands((prev) => {
        const copy = [...prev];
        [copy[idx1], copy[idx2]] = [copy[idx2], copy[idx1]];
        return copy;
      });
      setSwappingSet(new Set());
    }, 800);
  }, []);

  useEffect(() => {
    const interval = setInterval(swapPair, 3500);
    return () => clearInterval(interval);
  }, [swapPair]);

  return (
    <section className="py-12 bg-neutral-50/50 dark:bg-neutral-950">
      <p className="text-xs text-center uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">Trusted by privacy-first companies</p>
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
            {/* Row 1 */}
            <div className="grid grid-cols-4">
              {brands.slice(0, 4).map((brand, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="border-b border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[100px] text-neutral-800 dark:text-neutral-200 font-bold text-lg tracking-tight cursor-default transition-colors duration-300 hover:bg-[#fef0f0] dark:hover:bg-neutral-800"
                >
                  <motion.div
                    animate={{ 
                      opacity: swappingSet.has(idx) ? 0 : 1,
                      y: swappingSet.has(idx) ? 6 : 0
                    }}
                    transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                    <BrandLabel brand={brand} />
                  </motion.div>
                </div>
              ))}
            </div>
            {/* Row 2 */}
            <div className="grid grid-cols-4">
              {brands.slice(4, 8).map((brand, idx) => (
                <div
                  key={`r2-${idx}`}
                  className="border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[100px] text-neutral-800 dark:text-neutral-200 font-bold text-lg tracking-tight cursor-default transition-colors duration-300 hover:bg-[#fef0f0] dark:hover:bg-neutral-800"
                >
                  <motion.div
                    animate={{ 
                      opacity: swappingSet.has(idx + 4) ? 0 : 1,
                      y: swappingSet.has(idx + 4) ? 6 : 0
                    }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                  >
                    <BrandLabel brand={brand} />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
