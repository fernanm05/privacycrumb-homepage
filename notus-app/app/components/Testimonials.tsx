"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeIn from "./FadeIn";
import { ShoppingCart, Globe, Building2, GraduationCap, Newspaper, HeartPulse, Landmark, Laptop } from "lucide-react";

interface TestimonialData {
  brand: string;
  brandIcon: React.ReactNode;
  quote: string;
  name: string;
  title: string;
  image: string;
  stats: { value: string; label: string }[];
}

const testimonials: TestimonialData[] = [
  {
    brand: "Shopify Plus",
    brandIcon: <ShoppingCart size={18} />,
    quote: "\u201cPrivacyCrumb made GDPR compliance effortless for our 200+ storefronts. The auto cookie scanner detected trackers we didn\u2019t even know existed, and the consent banner deployed in minutes.\u201d",
    name: "Rachel Green",
    title: "Head of Compliance, Shopify Plus Agency",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "200+", label: "Stores Protected" }, { value: "5 min", label: "Setup Time" }, { value: "100%", label: "GDPR Compliant" }],
  },
  {
    brand: "MedPortal",
    brandIcon: <HeartPulse size={18} />,
    quote: "\u201cAs a healthcare platform, cookie compliance isn\u2019t optional \u2014 it\u2019s critical. PrivacyCrumb\u2019s HIPAA-aware cookie blocking and consent logging gave us peace of mind from day one.\u201d",
    name: "Dr. Sarah Chen",
    title: "VP of Engineering, MedPortal",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "0", label: "Violations" }, { value: "48", label: "Cookies Blocked" }, { value: "99.9%", label: "Uptime" }],
  },
  {
    brand: "WebFlow Studio",
    brandIcon: <Globe size={18} />,
    quote: "\u201cWe manage 50+ client websites and PrivacyCrumb\u2019s multi-domain dashboard lets us handle consent policies for all of them from one place. It\u2019s a game-changer for agencies.\u201d",
    name: "Marcus Webb",
    title: "CTO, WebFlow Studio",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "50+", label: "Domains" }, { value: "10x", label: "Faster Setup" }, { value: "24/7", label: "Monitoring" }],
  },
  {
    brand: "FinEdge",
    brandIcon: <Landmark size={18} />,
    quote: "\u201cOur fintech platform handles sensitive financial data. PrivacyCrumb\u2019s audit-ready consent logs and automatic cookie blocking ensure we\u2019re always regulation-ready.\u201d",
    name: "Emily Torres",
    title: "Lead Compliance Officer, FinEdge",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "100%", label: "Audit Ready" }, { value: "3x", label: "Faster Audits" }, { value: "0", label: "Penalties" }],
  },
  {
    brand: "CloudSaaS",
    brandIcon: <Laptop size={18} />,
    quote: "\u201cIntegrating PrivacyCrumb into our SaaS product was seamless. The API-first approach let us embed consent management directly into our onboarding flow.\u201d",
    name: "James Liu",
    title: "Head of Product, CloudSaaS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "5 min", label: "Integration" }, { value: "98%", label: "Consent Rate" }, { value: "12", label: "Regulations" }],
  },
  {
    brand: "MediaHouse",
    brandIcon: <Newspaper size={18} />,
    quote: "\u201cWith millions of monthly visitors, cookie compliance was a nightmare. PrivacyCrumb\u2019s smart scanner handles our ad-tech cookies and keeps consent rates high.\u201d",
    name: "Alex Morgan",
    title: "Director of Engineering, MediaHouse",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "10M+", label: "Visitors/mo" }, { value: "95%", label: "Consent Rate" }, { value: "150+", label: "Cookies Managed" }],
  },
  {
    brand: "EduLearn",
    brandIcon: <GraduationCap size={18} />,
    quote: "\u201cProtecting student privacy is our top priority. PrivacyCrumb\u2019s COPPA and FERPA compliance features were exactly what our LMS platform needed.\u201d",
    name: "Priya Sharma",
    title: "Co-founder, EduLearn",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "500K", label: "Students Safe" }, { value: "100%", label: "COPPA Ready" }, { value: "3 mo", label: "ROI" }],
  },
  {
    brand: "ScaleUp HQ",
    brandIcon: <Building2 size={18} />,
    quote: "\u201cAs we expanded into the EU market, PrivacyCrumb handled our entire cookie compliance strategy. The auto-updating regulation engine means we never fall behind.\u201d",
    name: "David Park",
    title: "VP Operations, ScaleUp HQ",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=500&fit=crop&crop=face",
    stats: [{ value: "30+", label: "Countries" }, { value: "Auto", label: "Updates" }, { value: "∞", label: "Scalability" }],
  },
];

const allBrands = [
  ["Shopify Plus", "MedPortal", "WebFlow Studio", "FinEdge"],
  ["CloudSaaS", "MediaHouse", "EduLearn", "ScaleUp HQ"],
];

function renderBrandLabel(n: string) {
  const t = testimonials.find(t => t.brand === n);
  if (t?.brandIcon) return <span className="flex items-center gap-1.5">{t.brandIcon}{n}</span>;
  return n;
}

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = testimonials[activeIdx];

  return (
    <section className="py-12">
      <p className="text-xs text-center uppercase tracking-[0.2em] text-neutral-400 font-medium mb-6">Trusted by privacy-first companies</p>
      <FadeIn>
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_auto] md:min-h-[420px] md:h-[420px]">
              {/* Photo */}
              <div className="bg-neutral-100 dark:bg-neutral-800 h-48 md:h-full relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active.image}
                    src={active.image}
                    alt={active.name}
                    className="w-full h-full object-cover absolute inset-0"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
              {/* Quote */}
              <div className="p-10 flex flex-col justify-center overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.brand}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="mb-6">
                      <span className="text-lg font-bold tracking-tight flex items-center gap-1 dark:text-white">
                        {active.brandIcon}
                        {active.brand}
                      </span>
                    </div>
                    <blockquote className="text-xl md:text-2xl font-medium text-neutral-800 dark:text-neutral-200 leading-relaxed mb-8">
                      {active.quote}
                    </blockquote>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{active.name}</div>
                      <div className="text-sm text-neutral-500">{active.title}</div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              {/* Stats */}
              <div className="border-t md:border-t-0 md:border-l border-neutral-100 dark:border-neutral-800 flex flex-row md:flex-col justify-center gap-6 md:gap-0 p-6 md:p-8 md:min-w-[160px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.brand + "-stats"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {active.stats.map((s, i) => (
                      <div key={s.label} className={i < active.stats.length - 1 ? "border-b border-neutral-100 dark:border-neutral-800 pb-6 mb-6" : ""}>
                        <div className="text-5xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                        <div className="text-sm text-neutral-500 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
      {/* Logo grid below testimonial - clickable */}
      <FadeIn className="mt-6">
        <div className="max-w-5xl mx-auto px-6">
          <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
            {allBrands.map((row, ri) => (
              <div key={ri} className="grid grid-cols-2 md:grid-cols-4">
                {row.map((n) => {
                  const idx = testimonials.findIndex(t => t.brand === n);
                  const isActive = idx === activeIdx;
                  return (
                    <button
                      key={n}
                      onClick={() => setActiveIdx(idx)}
                      className={`${ri === 0 ? "border-b" : ""} border-r border-neutral-100 dark:border-neutral-800 last:border-r-0 flex items-center justify-center h-[80px] text-base font-bold transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "bg-neutral-900 text-white"
                          : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800"
                      }`}
                    >
                      {renderBrandLabel(n)}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
