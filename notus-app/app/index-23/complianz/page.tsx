"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle, ArrowRight, Shield, Zap, Globe, DollarSign
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

type Row = { feature: string; pc: string | true; cz: string | true };

const comparisonData: { category: string; rows: Row[] }[] = [
  {
    category: "Pricing",
    rows: [
      { feature: "Free plan", pc: "Yes — 3 domains, 5K pageviews", cz: "Free WordPress plugin (limited)" },
      { feature: "Cheapest paid plan", pc: "$9/mo (Starter)", cz: "$59/year for 1 site (Personal)" },
      { feature: "Multi-site pricing", pc: "All plans support multiple domains", cz: "$179/yr for 5 sites, $399/yr for 25" },
      { feature: "Monthly billing option", pc: true, cz: "Annual only" },
      { feature: "Platform independence", pc: "Works on any website", cz: "WordPress only (plugin-based)" },
    ],
  },
  {
    category: "Cookie Scanning",
    rows: [
      { feature: "Cookie scanning", pc: true, cz: "Hybrid cookie scan" },
      { feature: "Automatic categorization", pc: true, cz: true },
      { feature: "Unlimited scans (paid)", pc: "Pro & Enterprise", cz: "All paid plans" },
      { feature: "Scheduled scans", pc: true, cz: true },
      { feature: "Works on non-WordPress sites", pc: true, cz: "Not supported" },
    ],
  },
  {
    category: "Consent Banner",
    rows: [
      { feature: "Banner customization", pc: "Advanced (all paid plans)", cz: "All paid plans" },
      { feature: "Remove branding", pc: "Pro & Enterprise", cz: "All paid plans" },
      { feature: "Multi-language support", pc: "All languages (Pro+)", cz: "All paid plans" },
      { feature: "Geo-targeting", pc: true, cz: "Compliant in multiple regions" },
      { feature: "A/B testing & statistics", pc: "Analytics dashboard", cz: true },
    ],
  },
  {
    category: "Compliance & Consent",
    rows: [
      { feature: "GDPR & ePrivacy", pc: true, cz: true },
      { feature: "CCPA / CPRA", pc: true, cz: true },
      { feature: "LGPD, POPIA & more", pc: true, cz: "Compliant in multiple regions" },
      { feature: "Google Consent Mode v2", pc: true, cz: true },
      { feature: "IAB TCF 2.2 Framework", pc: true, cz: "Advertising frameworks" },
      { feature: "Cookie blocking", pc: true, cz: true },
      { feature: "Consent logging", pc: "Up to unlimited", cz: "Records of Consent" },
      { feature: "Data request processing", pc: "Not included", cz: true },
    ],
  },
  {
    category: "Legal Documents",
    rows: [
      { feature: "Privacy policy generator", pc: true, cz: true },
      { feature: "Cookie policy generator", pc: true, cz: true },
      { feature: "All required legal documents", pc: "Privacy & Cookie policies", cz: "All required legal documents" },
    ],
  },
  {
    category: "Platform & Integrations",
    rows: [
      { feature: "Works on any website", pc: true, cz: "WordPress only" },
      { feature: "Shopify support", pc: true, cz: "Not supported" },
      { feature: "Webflow support", pc: true, cz: "Not supported" },
      { feature: "Custom / headless sites", pc: true, cz: "Not supported" },
      { feature: "WordPress plugin", pc: true, cz: true },
      { feature: "WordPress multisite", pc: "Via script tag", cz: "Agency plan only ($399/yr)" },
      { feature: "REST API access", pc: true, cz: "Not available" },
      { feature: "Webhooks", pc: true, cz: "Not available" },
    ],
  },
  {
    category: "Team & Support",
    rows: [
      { feature: "Multi-site dashboard", pc: true, cz: "WordPress admin only" },
      { feature: "Team members", pc: "Up to unlimited", cz: "WordPress user roles" },
      { feature: "Analytics dashboard", pc: true, cz: "A/B testing & statistics" },
      { feature: "Email support", pc: true, cz: true },
      { feature: "Priority support", pc: "Pro & Enterprise", cz: "Not specified" },
    ],
  },
];

const advantages = [
  { icon: Globe, title: "Works on Any Platform", desc: "PrivacyCrumb works on any website — WordPress, Shopify, Webflow, custom sites. Complianz is a WordPress-only plugin." },
  { icon: DollarSign, title: "Flexible Monthly Billing", desc: "Pay monthly or annually. Complianz only offers annual billing with no monthly option." },
  { icon: Zap, title: "Full API & Developer Tools", desc: "REST API, webhooks, and JavaScript SDK for custom integrations. Complianz has no API access." },
  { icon: Shield, title: "Cloud-Based Dashboard", desc: "Manage all your sites from a single cloud dashboard. No WordPress admin access required." },
];

const Cell = ({ value }: { value: string | true }) => {
  if (value === true) return <CheckCircle size={16} className="text-emerald-500 mx-auto" />;
  if (value === "Not supported" || value === "Not available" || value === "WordPress only" || value === "Not included" || value === "Annual only")
    return <span className="text-red-400 text-xs">{value}</span>;
  return <span className="text-xs text-neutral-600 dark:text-neutral-400">{value}</span>;
};

export default function ComplianzComparePage() {
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
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Complianz</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                See how PrivacyCrumb compares to Complianz across platform support, pricing, features, and developer tools.
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
              <SectionHeader label="Why PrivacyCrumb" title="Key advantages over Complianz" subtitle="" />
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
                  <thead>
                    <tr>
                      <th className="text-left px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tl-xl font-medium text-neutral-700 dark:text-neutral-300 w-[45%]">Feature</th>
                      <th className="text-center px-4 py-3 bg-coral/5 border border-neutral-200 dark:border-neutral-800 font-semibold text-coral w-[27.5%]">
                        <span className="flex items-center justify-center gap-1.5">PrivacyCrumb</span>
                      </th>
                      <th className="text-center px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tr-xl font-medium text-neutral-700 dark:text-neutral-300 w-[27.5%]">Complianz</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((section) => (
                      <Fragment key={section.category}>
                        <tr>
                          <td colSpan={3} className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800/50 font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider border-x border-neutral-200 dark:border-neutral-800">
                            {section.category}
                          </td>
                        </tr>
                        {section.rows.map((row) => (
                          <tr key={row.feature} className="group">
                            <td className="px-4 py-2.5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors text-[13px]">
                              {row.feature}
                            </td>
                            <td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-coral/[0.03] group-hover:bg-coral/[0.06] transition-colors">
                              <Cell value={row.pc} />
                            </td>
                            <td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors">
                              <Cell value={row.cz} />
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
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
                Ready to switch from Complianz?
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">
                Get started with PrivacyCrumb for free. Works on any website — not just WordPress. No credit card required.
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
