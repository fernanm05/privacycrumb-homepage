"use client";
import { motion } from "framer-motion";
import { ShoppingCart, Laptop, HeartPulse, Newspaper, Landmark, GraduationCap } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const cases = [
  { Icon: ShoppingCart, t: "E-commerce", d: "Stay compliant across all storefronts — auto-scan product pages, manage cookie consent for checkout flows, and handle GDPR for EU shoppers" },
  { Icon: Laptop, t: "SaaS Platforms", d: "Embed consent banners directly into your app, track third-party scripts, and ensure compliance across multiple customer-facing domains" },
  { Icon: HeartPulse, t: "Healthcare", d: "Meet HIPAA and GDPR requirements for patient portals — block non-essential cookies by default and maintain detailed audit logs" },
  { Icon: Newspaper, t: "Publishing & Media", d: "Handle ad-tech cookies, analytics trackers, and consent for personalized content across high-traffic editorial sites" },
  { Icon: Landmark, t: "Financial Services", d: "Comply with strict financial privacy regulations — manage cookie consent for banking portals, trading platforms, and fintech apps" },
  { Icon: GraduationCap, t: "Education", d: "Protect student privacy on LMS platforms — auto-block tracking cookies and comply with FERPA, COPPA, and GDPR requirements" },
];

export default function UseCases() {
  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950 stripe-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Use Cases" title="Built for every industry" subtitle="PrivacyCrumb helps businesses of all sizes stay compliant with cookie privacy laws — no matter the industry" />
        <div className="grid md:grid-cols-3 gap-4">
          {cases.map((c, idx) => (
            <FadeIn key={c.t} delay={idx * 0.08}>
              <motion.div whileHover={{ y: -3 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm cursor-default transition-shadow hover:shadow-sm h-full">
                <c.Icon size={24} className="text-coral mb-4" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold mb-2 text-neutral-900 dark:text-white">{c.t}</h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{c.d}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
