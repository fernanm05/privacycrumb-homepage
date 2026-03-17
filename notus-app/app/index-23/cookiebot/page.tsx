"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, X, ArrowRight, Shield, Zap, Globe, DollarSign, Star
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA from Compare (1).xlsx ====== */

type Row = { feature: string; pc: string | true; cb: string | true };

const comparisonData: { category: string; rows: Row[] }[] = [
  {
    category: "Pricing",
    rows: [
      { feature: "Free plan", pc: "Yes — 3 domains, 5K pageviews", cb: "Yes — 1 domain, 50 subpages" },
      { feature: "Paid plans start at", pc: "$9/mo", cb: "$8/mo (50 subpages only)" },
      { feature: "Unlimited pageviews", pc: "Enterprise ($79/mo)", cb: "All paid plans" },
      { feature: "Unlimited domains", pc: "Enterprise ($79/mo)", cb: "Not offered (per-domain pricing)" },
      { feature: "Transparent pricing", pc: true, cb: "Complex per-domain tiers" },
    ],
  },
  {
    category: "Cookie Scanning",
    rows: [
      { feature: "Cookie scanning", pc: true, cb: true },
      { feature: "Automatic categorization", pc: true, cb: true },
      { feature: "Unlimited scans (paid)", pc: "Pro & Enterprise", cb: "All Premium" },
      { feature: "Scheduled scans", pc: true, cb: true },
      { feature: "Scan frequency (free)", pc: "2 scans/month", cb: "Initial scan only" },
    ],
  },
  {
    category: "Consent Banner",
    rows: [
      { feature: "Banner customization", pc: "Advanced (all paid plans)", cb: "Premium only" },
      { feature: "Custom HTML/CSS/JS banner", pc: true, cb: true },
      { feature: "Remove branding", pc: "Pro & Enterprise", cb: "All Premium" },
      { feature: "Multi-language support", pc: "All languages (Pro+)", cb: "47+ languages" },
      { feature: "Geo-targeting", pc: true, cb: true },
      { feature: "Banner auto-translation", pc: true, cb: true },
    ],
  },
  {
    category: "Compliance & Consent",
    rows: [
      { feature: "GDPR & ePrivacy", pc: true, cb: true },
      { feature: "CCPA / CPRA", pc: true, cb: true },
      { feature: "LGPD, POPIA & more", pc: true, cb: true },
      { feature: "Google Consent Mode", pc: true, cb: true },
      { feature: "IAB TCF 2.2 Framework", pc: true, cb: "TCF 2.3" },
      { feature: "Cookie blocking", pc: true, cb: true },
      { feature: "Consent logging", pc: "Up to unlimited", cb: "Not specified" },
      { feature: "Cross-domain consent sharing", pc: true, cb: true },
    ],
  },
  {
    category: "Team & Management",
    rows: [
      { feature: "Multi-site dashboard", pc: true, cb: "Multiple domain handling" },
      { feature: "Team members (free)", pc: "1 user", cb: "Unlimited users" },
      { feature: "Team members (paid)", pc: "Up to unlimited", cb: "Multi-user (Premium)" },
      { feature: "White-label / agency mode", pc: true, cb: "Add logo & branding" },
      { feature: "Analytics dashboard", pc: true, cb: true },
      { feature: "CSV export", pc: true, cb: true },
    ],
  },
  {
    category: "Integrations",
    rows: [
      { feature: "WordPress plugin", pc: true, cb: true },
      { feature: "Google Tag Manager", pc: true, cb: true },
      { feature: "Shopify integration", pc: true, cb: "Via CMS integrations" },
      { feature: "Webflow integration", pc: true, cb: "Via CMS integrations" },
      { feature: "REST API access", pc: true, cb: "Not publicly documented" },
      { feature: "Webhooks", pc: true, cb: "Not available" },
    ],
  },
  {
    category: "Support",
    rows: [
      { feature: "Help center / guides", pc: true, cb: true },
      { feature: "Email support", pc: true, cb: true },
      { feature: "Priority support", pc: "Pro & Enterprise", cb: "Not specified" },
      { feature: "Dedicated account manager", pc: "Enterprise", cb: "Not specified" },
      { feature: "Implementation services", pc: true, cb: true },
    ],
  },
];

const advantages = [
  { icon: DollarSign, title: "Simpler, More Affordable Pricing", desc: "PrivacyCrumb offers transparent per-plan pricing. Cookiebot charges per domain with subpage limits — costs scale quickly for larger sites." },
  { icon: Globe, title: "Unlimited Domains on Enterprise", desc: "PrivacyCrumb's Enterprise plan includes unlimited domains. Cookiebot charges per domain on every tier." },
  { icon: Zap, title: "More Generous Free Plan", desc: "3 domains and 5,000 pageviews free vs. Cookiebot's 1 domain with a 50-subpage limit." },
  { icon: Shield, title: "API & Webhook Access", desc: "Full REST API and webhook support for developers. Cookiebot's API is not publicly documented." },
];

const Cell = ({ value }: { value: string | true }) => {
  if (value === true) return <CheckCircle size={16} className="text-emerald-500 mx-auto" />;
  if (value === "Not available" || value === "Not offered (per-domain pricing)")
    return <span className="text-red-400 text-xs">{value}</span>;
  return <span className="text-xs text-neutral-600 dark:text-neutral-400">{value}</span>;
};

export default function CookiebotComparePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Compare</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                PrivacyCrumb vs{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Cookiebot</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                See how PrivacyCrumb compares to Cookiebot across pricing, features, integrations, and support.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <motion.a
                href="https://app.privacycrumb.com/register"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
              >
                Try PrivacyCrumb Free <ArrowRight size={16} />
              </motion.a>
            </FadeIn>
          </div>
        </section>

        {/* Why Switch */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Why PrivacyCrumb" title="Key advantages over Cookiebot" subtitle="" />
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {advantages.map((a, i) => (
                <FadeIn key={a.title} delay={i * 0.08}>
                  <motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3">
                      <a.icon className="text-coral" size={20} />
                    </div>
                    <h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{a.title}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{a.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Feature Comparison" title="Side-by-side breakdown" subtitle="A detailed look at features, pricing, and capabilities." />
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="mt-4 overflow-x-auto">
                <table className="w-full text-sm border-separate border-spacing-0">
                  {/* Sticky Header */}
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tl-xl font-medium text-neutral-700 dark:text-neutral-300 w-[45%]">Feature</th>
                      <th className="text-center px-4 py-3 bg-coral/5 border border-neutral-200 dark:border-neutral-800 font-semibold text-coral w-[27.5%]">
                        <span className="flex items-center justify-center gap-1.5">PrivacyCrumb</span>
                      </th>
                      <th className="text-center px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tr-xl font-medium text-neutral-700 dark:text-neutral-300 w-[27.5%]">Cookiebot</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((section, si) => (
                      <Fragment key={section.category}>
                        {/* Category Header */}
                        <tr key={`cat-${si}`}>
                          <td colSpan={3} className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800/50 font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider border-x border-neutral-200 dark:border-neutral-800">
                            {section.category}
                          </td>
                        </tr>
                        {/* Rows */}
                        {section.rows.map((row, ri) => (
                          <tr key={`row-${si}-${ri}`} className="group">
                            <td className="px-4 py-2.5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors text-[13px]">
                              {row.feature}
                            </td>
                            <td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-coral/[0.03] group-hover:bg-coral/[0.06] transition-colors">
                              <Cell value={row.pc} />
                            </td>
                            <td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors">
                              <Cell value={row.cb} />
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                    {/* Bottom rounded corners */}
                    <tr>
                      <td className="h-0 border-b border-l border-neutral-200 dark:border-neutral-800 rounded-bl-xl" />
                      <td className="h-0 border-b border-neutral-200 dark:border-neutral-800" />
                      <td className="h-0 border-b border-r border-neutral-200 dark:border-neutral-800 rounded-br-xl" />
                    </tr>
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                Ready to switch from Cookiebot?
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
                Get started with PrivacyCrumb for free. No credit card required. Migration from Cookiebot takes less than 5 minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Start Free <ArrowRight size={14} />
                </motion.a>
                <motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  View Pricing
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
