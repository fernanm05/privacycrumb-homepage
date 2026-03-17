"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Phone } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  sub: string;
  m: number;
  y: number;
  btn: string;
  btnIcon: React.ReactNode;
  btnCls: string;
  featured?: boolean;
  features: Feature[];
}

const plans: Plan[] = [
  {
    name: "Free", sub: "For personal sites and testing", m: 0, y: 0,
    btn: "Get Started Free", btnIcon: <ArrowRight size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "3 domains", included: true },
      { text: "5,000 pageviews/month", included: true },
      { text: "2 scans/month", included: true },
      { text: "Basic banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (30 days)", included: true },
      { text: "Multi-language support", included: false },
      { text: "Geo-targeting", included: false },
      { text: "Scheduled scans", included: false },
      { text: "Team members", included: false },
      { text: "Remove branding", included: false },
    ],
  },
  {
    name: "Starter", sub: "For small businesses", m: 9, y: 90,
    btn: "Select Plan", btnIcon: <ArrowRight size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "3 domains", included: true },
      { text: "50,000 pageviews/month", included: true },
      { text: "10 scans/month", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (90 days)", included: true },
      { text: "Multi-language (10 languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "Team members", included: false },
      { text: "Remove branding", included: false },
    ],
  },
  {
    name: "Pro", sub: "For growing businesses & agencies", m: 29, y: 290,
    btn: "Select Plan", btnIcon: <ArrowRight size={14} />,
    btnCls: "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100",
    featured: true,
    features: [
      { text: "10 domains", included: true },
      { text: "500,000 pageviews/month", included: true },
      { text: "Unlimited scans", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (1 year)", included: true },
      { text: "Multi-language (all languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "5 team members", included: true },
      { text: "Remove branding", included: true },
    ],
  },
  {
    name: "Enterprise", sub: "For large organizations", m: 79, y: 790,
    btn: "Contact Sales", btnIcon: <Phone size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "Unlimited domains", included: true },
      { text: "Unlimited pageviews", included: true },
      { text: "Unlimited scans", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (unlimited)", included: true },
      { text: "Multi-language (all languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Remove branding", included: true },
    ],
  },
];

function RollingDigit({ digit }: { digit: string }) {
  return (
    <span className="inline-block overflow-hidden h-[1em] relative">
      <AnimatePresence mode="wait">
        <motion.span key={digit} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }} className="block">
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function RollingPrice({ price }: { price: number }) {
  const digits = String(price).split("");
  return (
    <span className="inline-flex text-4xl font-bold dark:text-white">
      <span>$</span>{digits.map((d, i) => <RollingDigit key={`${i}-${d}`} digit={d} />)}
    </span>
  );
}

export default function Pricing() {
  const [yearly, setYearly] = useState(false);
  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950 stripe-bg" id="pricing">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader label="Pricing" title="Simple, transparent pricing" subtitle="" />
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-1 gap-1">
              <button onClick={() => setYearly(false)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${!yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>Monthly</button>
              <button onClick={() => setYearly(true)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>Yearly</button>
            </div>
            <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
              <span className="font-semibold">Save 30%</span>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1} className="h-full">
              <div className={`p-8 h-full relative flex flex-col ${i < 3 ? "md:border-r border-b md:border-b-0 border-neutral-100 dark:border-neutral-800" : ""} ${p.featured ? "rounded-3xl z-10 bg-white dark:bg-neutral-900 shadow-[0_0_0_2px_rgb(23,23,23)] dark:shadow-[0_0_0_2px_white]" : ""}`}>
                <h3 className="text-lg font-bold mb-0.5 dark:text-white">{p.name}</h3>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">{p.sub}</p>
                <div className="mb-5">
                  <RollingPrice price={yearly ? p.y : p.m} />
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/ {yearly ? "year" : "month"}</span>
                </div>
                {p.featured && (
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-coral bg-coral/10 px-2.5 py-1 rounded-full mb-5">Most Popular</span>
                )}
                <div className="flex flex-col gap-3.5 mb-6">
                  {p.features.map((f) => (
                    <div key={f.text} className={`flex items-start gap-2.5 text-sm ${f.included ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-600 line-through"}`}>
                      {f.included ? (
                        <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.featured ? "text-coral" : "text-neutral-400 dark:text-neutral-500"}`} />
                      ) : (
                        <X size={16} className="flex-shrink-0 mt-0.5 text-neutral-300 dark:text-neutral-700" />
                      )}
                      {f.text}
                    </div>
                  ))}
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 mt-auto ${p.btnCls}`}>
                  {p.btn} {p.btnIcon}
                </motion.button>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
