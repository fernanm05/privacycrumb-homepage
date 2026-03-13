"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const plans = [
  {
    name: "Growth", sub: "Early stage teams", m: 8, y: 6, btn: "Start building", btnCls: "border border-neutral-200 text-neutral-900 hover:bg-neutral-50",
    features: ["Up to 5 active agents","50 simulation runs","Visual builder access","GitHub + Zapier integration","Basic support","1 team workspace","Workflow APIs","Community Slack access"],
  },
  {
    name: "Scale", sub: "Fast moving startups", m: 12, y: 10, btn: "Start for free", btnCls: "bg-coral text-white hover:bg-coral/90", featured: true,
    features: ["Up to 25 active agents","150 simulation runs","Visual builder access","GitHub + Zapier integration","Priority support","3 team workspace","Workflow APIs","Priority Slack access"],
  },
  {
    name: "Enterprise", sub: "Large enterprises", m: 25, y: 20, btn: "Contact sales", btnCls: "border border-neutral-200 text-neutral-900 hover:bg-neutral-50",
    features: ["Unlimited active agents","Unlimited simulation runs","Visual builder access","GitHub + Zapier integration","Priority support","Unlimited team workspace","Workflow APIs","Priority Slack access","Access to Fight Club"],
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
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Pricing" title="Simple and Feasible Pricing" subtitle="" />
        <div className="flex justify-center mb-12">
          <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-1 gap-1">
            <button onClick={() => setYearly(false)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${!yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>Monthly</button>
            <button onClick={() => setYearly(true)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>
              Yearly <span className="text-[11px] text-coral font-semibold">Save 20%</span>
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-0 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
          {plans.map((p, i) => (
            <FadeIn key={p.name} delay={i * 0.1}>
              <div className={`p-8 h-full relative ${i < 2 ? "border-r border-neutral-100 dark:border-neutral-800" : ""}`}>
                {p.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-wider text-coral bg-coral/10 px-2.5 py-1 rounded-full">Most Popular</span>
                )}
                <h3 className="text-lg font-bold mb-0.5 dark:text-white">{p.name}</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-5">{p.sub}</p>
                <div className="mb-5">
                  <RollingPrice price={yearly ? p.y : p.m} />
                  <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/seat</span>
                </div>
                <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-xl text-sm font-medium transition-colors mb-8 ${p.btnCls}`}>
                  {p.btn}
                </motion.button>
                <div className="flex flex-col gap-3.5">
                  {p.features.map((f) => (
                    <div key={f} className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                      <Check size={16} className={`flex-shrink-0 ${p.featured ? "text-coral" : "text-neutral-400"}`} />
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
