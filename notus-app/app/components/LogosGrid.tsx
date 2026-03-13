"use client";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import FadeIn from "./FadeIn";

interface BrandItem {
  name: string;
  display: string;
  icon?: "hippocratic" | "attention" | "incident" | "modal" | "replicate";
}

const allBrands: BrandItem[] = [
  { name: "Hippocratic AI", display: "Hippocratic AI", icon: "hippocratic" },
  { name: "ARCH", display: "ARCH" },
  { name: "Primer", display: "Primer" },
  { name: "Attention", display: "Attention", icon: "attention" },
  { name: "incident.io", display: "incident.io", icon: "incident" },
  { name: "granola", display: "granola" },
  { name: "Modal", display: "Modal", icon: "modal" },
  { name: "Replicate", display: "Replicate", icon: "replicate" },
];

function BrandIcon({ icon }: { icon?: string }) {
  switch (icon) {
    case "hippocratic":
      return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2L2 19h20L12 2z"/><circle cx="12" cy="14" r="3"/></svg>;
    case "attention":
      return <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="8" height="8" rx="2"/><rect x="13" y="3" width="8" height="8" rx="2" opacity="0.5"/><rect x="3" y="13" width="8" height="8" rx="2" opacity="0.5"/><rect x="13" y="13" width="8" height="8" rx="2"/></svg>;
    case "incident":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4"/></svg>;
    case "modal":
      return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.132-8-12.356-8-4.236 0-4.236 8 0 8 5.224 0 7.26-8 12.356-8z"/></svg>;
    case "replicate":
      return <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M4 9h16"/><path d="M9 4v16"/></svg>;
    default:
      return null;
  }
}

function BrandLabel({ brand }: { brand: BrandItem }) {
  if (brand.name === "ARCH") {
    return <span className="tracking-[0.3em] font-bold text-lg">ARCH</span>;
  }
  if (brand.name === "granola") {
    return <span className="font-bold text-xl tracking-tight">granola</span>;
  }
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
      <p className="text-xs text-center uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">Trusted by fast growing startups</p>
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
            {/* Row 1 */}
            <div className="grid grid-cols-4">
              {brands.slice(0, 4).map((brand, idx) => (
                <div
                  key={`r1-${idx}`}
                  className="border-b border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[100px] text-neutral-800 dark:text-neutral-200 font-bold text-lg tracking-tight cursor-default transition-colors duration-300 hover:bg-[#faf8f5] dark:hover:bg-neutral-800"
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
                  className="border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[100px] text-neutral-800 dark:text-neutral-200 font-bold text-lg tracking-tight cursor-default transition-colors duration-300 hover:bg-[#faf8f5] dark:hover:bg-neutral-800"
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
