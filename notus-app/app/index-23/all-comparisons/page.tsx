"use client";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, X, ArrowRight, ExternalLink
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== ALL COMPETITOR DATA from Compare (1).xlsx ====== */

type Competitor = {
  name: string;
  slug: string;
  plans: string;
  freePlan: string;
  pageviews: string;
  domains: string;
  scanning: string;
  bannerCustom: string;
  removeBranding: string;
  multiLang: string;
  geoTargeting: string;
  gdpr: boolean;
  ccpa: boolean;
  gcm: boolean;
  iabTcf: string;
  legalDocs: string;
  api: string;
  wordpress: boolean;
  platformScope: string;
  support: string;
};

const privacyCrumb: Competitor = {
  name: "PrivacyCrumb",
  slug: "",
  plans: "Free / $9 / $29 / $79 mo",
  freePlan: "Yes — 3 domains, 5K views",
  pageviews: "5K – Unlimited",
  domains: "3 – Unlimited",
  scanning: "2/mo – Unlimited",
  bannerCustom: "Advanced (all paid)",
  removeBranding: "Pro & Enterprise",
  multiLang: "All languages (Pro+)",
  geoTargeting: "Yes",
  gdpr: true,
  ccpa: true,
  gcm: true,
  iabTcf: "TCF 2.2",
  legalDocs: "Privacy & Cookie policies",
  api: "REST API + Webhooks",
  wordpress: true,
  platformScope: "Any website",
  support: "Email + Priority (Pro+)",
};

const competitors: Competitor[] = [
  {
    name: "Cookiebot",
    slug: "/index-23/cookiebot",
    plans: "Free / $8 – $96 mo",
    freePlan: "Yes — 1 domain, 50 pages",
    pageviews: "Limited by subpages",
    domains: "1 (per-domain pricing)",
    scanning: "Initial scan (free)",
    bannerCustom: "Premium only",
    removeBranding: "All Premium",
    multiLang: "47+ languages",
    geoTargeting: "Yes",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "TCF 2.3",
    legalDocs: "Cookie declaration only",
    api: "Not documented",
    wordpress: true,
    platformScope: "Any website",
    support: "Email support",
  },
  {
    name: "iubenda",
    slug: "/index-23/lubenda",
    plans: "$6.99 – $119.99 mo/site",
    freePlan: "No",
    pageviews: "25K – 150K",
    domains: "Per-site pricing",
    scanning: "Monthly – Hourly",
    bannerCustom: "Mild (Essentials)",
    removeBranding: "Ultimate only ($120/mo)",
    multiLang: "Advanced & Ultimate",
    geoTargeting: "Advanced & Ultimate",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "TCF 2.2",
    legalDocs: "Full legal suite",
    api: "Not documented",
    wordpress: true,
    platformScope: "Any website",
    support: "Email support",
  },
  {
    name: "Complianz",
    slug: "/index-23/complianz",
    plans: "$59 – $399 /year",
    freePlan: "Free WP plugin (limited)",
    pageviews: "Unlimited",
    domains: "1 – 25 sites",
    scanning: "Hybrid cookie scan",
    bannerCustom: "All paid plans",
    removeBranding: "All paid plans",
    multiLang: "All paid plans",
    geoTargeting: "Yes",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "Advertising frameworks",
    legalDocs: "All required docs",
    api: "Not available",
    wordpress: true,
    platformScope: "WordPress only",
    support: "Ticket support",
  },
  {
    name: "CookieYes",
    slug: "/index-23/CookieYes",
    plans: "Free / $10 – $55 mo",
    freePlan: "Yes — 100 pages, 5K views",
    pageviews: "5K – Unlimited",
    domains: "Not specified",
    scanning: "100 – 8000 pages",
    bannerCustom: "Basic (free) / Advanced",
    removeBranding: "Ultimate only ($55/mo)",
    multiLang: "Not specified",
    geoTargeting: "Pro & Ultimate",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "Not specified",
    legalDocs: "Not specified",
    api: "Not specified",
    wordpress: true,
    platformScope: "Any website",
    support: "Not specified",
  },
  {
    name: "Consently",
    slug: "/index-23/Consently",
    plans: "$8.25 – $41.50 mo",
    freePlan: "No",
    pageviews: "100K – 3M",
    domains: "1 – 10 domains",
    scanning: "Weekly scheduled",
    bannerCustom: "Advanced (all plans)",
    removeBranding: "Not specified",
    multiLang: "All plans",
    geoTargeting: "Not specified",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "TCF 2.2",
    legalDocs: "Privacy, Cookie, Terms",
    api: "Script integration",
    wordpress: false,
    platformScope: "Any website",
    support: "Not specified",
  },
  {
    name: "ConsentManager",
    slug: "/index-23/ConsentManager",
    plans: "Free / $25 – $237 mo",
    freePlan: "Yes — 3K views",
    pageviews: "3K – 10M+",
    domains: "1 – 20+ sites",
    scanning: "1/week – unlimited",
    bannerCustom: "Premade (free) / Custom",
    removeBranding: "Ultimate (contact sales)",
    multiLang: "Not specified",
    geoTargeting: "Not specified",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "TCF + GPP",
    legalDocs: "Privacy Policy generator",
    api: "Not specified",
    wordpress: false,
    platformScope: "Any website",
    support: "Tickets – Phone + Manager",
  },
  {
    name: "Termly",
    slug: "/index-23/Termly",
    plans: "Free / ~$14 – $20 mo",
    freePlan: "Yes — 1 policy, 10K views",
    pageviews: "10K – Unlimited",
    domains: "Per-website pricing",
    scanning: "Quarterly – Weekly",
    bannerCustom: "Pro+ only",
    removeBranding: "Pro+ only",
    multiLang: "Pro+ only",
    geoTargeting: "Pro+ (Regional rules)",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "TCF 2.3 (Pro+)",
    legalDocs: "Full legal suite",
    api: "Not specified",
    wordpress: true,
    platformScope: "Any website",
    support: "Not specified",
  },
  {
    name: "CookiePal",
    slug: "/index-23/CookiePal",
    plans: "Free / $3 – $22 mo/domain",
    freePlan: "Yes — 10K views",
    pageviews: "10K – 1M+",
    domains: "Per-domain pricing",
    scanning: "Weekly scheduled",
    bannerCustom: "All plans (full)",
    removeBranding: "All plans",
    multiLang: "All plans (auto-translate)",
    geoTargeting: "All plans",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "Not specified",
    legalDocs: "Cookie + Privacy policies",
    api: "Not specified",
    wordpress: false,
    platformScope: "Any website",
    support: "Email + Chat + Dev support",
  },
  {
    name: "GetTerms",
    slug: "/index-23/GetTerms",
    plans: "$9 – $12 mo/website",
    freePlan: "No",
    pageviews: "50K – Unlimited",
    domains: "Per-website + Partner plan",
    scanning: "Automated scans",
    bannerCustom: "Business plan",
    removeBranding: "Business plan",
    multiLang: "Business plan",
    geoTargeting: "Both plans",
    gdpr: true, ccpa: true, gcm: true,
    iabTcf: "Not specified",
    legalDocs: "Full legal suite",
    api: "Not specified",
    wordpress: true,
    platformScope: "Any website",
    support: "Standard + Priority",
  },
];

type FeatureKey = keyof Competitor;

const featureRows: { label: string; key: FeatureKey }[] = [
  { label: "Plans", key: "plans" },
  { label: "Free plan", key: "freePlan" },
  { label: "Pageviews", key: "pageviews" },
  { label: "Domains", key: "domains" },
  { label: "Cookie scanning", key: "scanning" },
  { label: "Banner customization", key: "bannerCustom" },
  { label: "Remove branding", key: "removeBranding" },
  { label: "Multi-language", key: "multiLang" },
  { label: "Geo-targeting", key: "geoTargeting" },
  { label: "GDPR", key: "gdpr" },
  { label: "CCPA / CPRA", key: "ccpa" },
  { label: "Google Consent Mode", key: "gcm" },
  { label: "IAB TCF", key: "iabTcf" },
  { label: "Legal documents", key: "legalDocs" },
  { label: "API access", key: "api" },
  { label: "WordPress plugin", key: "wordpress" },
  { label: "Platform scope", key: "platformScope" },
  { label: "Support", key: "support" },
];

const CellValue = ({ value }: { value: string | boolean }) => {
  if (value === true) return <CheckCircle size={14} className="text-emerald-500 mx-auto" />;
  if (value === false) return <X size={14} className="text-neutral-300 dark:text-neutral-600 mx-auto" />;
  if (typeof value === "string" && (value === "No" || value === "Not available" || value === "Not documented" || value === "WordPress only"))
    return <span className="text-red-400">{value}</span>;
  return <span className="text-neutral-600 dark:text-neutral-400">{String(value)}</span>;
};

export default function AllComparisonsPage() {
  const [selected, setSelected] = useState<number[]>([0, 1, 2]);

  const toggleCompetitor = (index: number) => {
    if (selected.includes(index)) {
      if (selected.length > 1) setSelected(selected.filter((i) => i !== index));
    } else {
      setSelected([...selected, index]);
    }
  };

  const visibleCompetitors = selected.map((i) => competitors[i]);

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">All Comparisons</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                PrivacyCrumb vs{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Everyone</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                Compare PrivacyCrumb against 9 leading cookie consent platforms. Select competitors below to see a side-by-side breakdown.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Competitor Selector */}
        <section className="px-6 pb-4">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-3">Select competitors to compare:</p>
              <div className="flex flex-wrap gap-2">
                {competitors.map((c, i) => (
                  <button
                    key={c.name}
                    onClick={() => toggleCompetitor(i)}
                    className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${selected.includes(i) ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`}
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="py-8 px-6">
          <div className="max-w-6xl mx-auto">
            <FadeIn delay={0.1}>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
                <table className="w-full text-[12px] border-collapse min-w-[700px]">
                  {/* Header */}
                  <thead>
                    <tr className="bg-neutral-50 dark:bg-neutral-900">
                      <th className="text-left px-4 py-3 font-medium text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800 sticky left-0 bg-neutral-50 dark:bg-neutral-900 z-10 min-w-[140px]">Feature</th>
                      <th className="text-center px-3 py-3 font-semibold text-coral border-b border-neutral-200 dark:border-neutral-800 bg-coral/5 min-w-[120px]">PrivacyCrumb</th>
                      {visibleCompetitors.map((c) => (
                        <th key={c.name} className="text-center px-3 py-3 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800 min-w-[120px]">
                          {c.slug ? (
                            <a href={c.slug} className="hover:text-coral transition-colors inline-flex items-center gap-1">
                              {c.name} <ExternalLink size={10} />
                            </a>
                          ) : c.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {featureRows.map((row, ri) => (
                      <tr key={row.key} className={`group ${ri % 2 === 0 ? "bg-white dark:bg-neutral-950" : "bg-neutral-50/50 dark:bg-neutral-900/30"}`}>
                        <td className={`px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-100 dark:border-neutral-800/50 sticky left-0 z-10 ${ri % 2 === 0 ? "bg-white dark:bg-neutral-950" : "bg-neutral-50 dark:bg-neutral-900"}`}>
                          {row.label}
                        </td>
                        <td className="px-3 py-2.5 text-center border-b border-neutral-100 dark:border-neutral-800/50 bg-coral/[0.02]">
                          <CellValue value={privacyCrumb[row.key]} />
                        </td>
                        {visibleCompetitors.map((c) => (
                          <td key={c.name} className="px-3 py-2.5 text-center border-b border-neutral-100 dark:border-neutral-800/50">
                            <CellValue value={c[row.key]} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Individual Comparison Cards */}
        <section className="py-12 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Detailed Comparisons" title="Dive deeper into each competitor" subtitle="" />
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {competitors.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.05}>
                  <motion.div whileHover={{ y: -2 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex flex-col transition-shadow hover:shadow-md">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{c.name}</h3>
                    <div className="space-y-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 flex-1">
                      <p><span className="font-medium text-neutral-700 dark:text-neutral-300">Plans:</span> {c.plans}</p>
                      <p><span className="font-medium text-neutral-700 dark:text-neutral-300">Free:</span> {c.freePlan}</p>
                      <p><span className="font-medium text-neutral-700 dark:text-neutral-300">Platform:</span> {c.platformScope}</p>
                    </div>
                    {c.slug ? (
                      <a href={c.slug} className="mt-3 inline-flex items-center gap-1 text-xs text-coral font-medium hover:underline">
                        Full comparison <ArrowRight size={12} />
                      </a>
                    ) : (
                      <span className="mt-3 text-[11px] text-neutral-400 dark:text-neutral-500">No detailed page yet</span>
                    )}
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                Ready to try the best cookie consent platform?
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
                Start free with 3 domains and 5,000 pageviews. No credit card required. Migrate from any platform in under 5 minutes.
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
