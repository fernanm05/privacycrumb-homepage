"use client";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Globe, Lock, Layers, BarChart3, Fingerprint, Scale, FileText, Eye } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const regulations = [
  {
    icon: Shield,
    name: "GDPR EU & UK",
    slug: "/index-23/gdpr",
    region: "Europe",
    tagColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    desc: "The General Data Protection Regulation — the world's most comprehensive data privacy law. Requires explicit opt-in consent before placing non-essential cookies on EU/UK visitors' devices.",
    features: ["Prior consent required", "Granular cookie categories", "Consent proof & logging", "Right to withdraw"],
  },
  {
    icon: Globe,
    name: "CCPA",
    slug: "/index-23/ccpa",
    region: "California, USA",
    tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    desc: "The California Consumer Privacy Act gives California residents the right to know, delete, and opt out of the sale of their personal information.",
    features: ["Do Not Sell link", "Opt-out mechanism", "Consumer rights support", "12-month record keeping"],
  },
  {
    icon: Fingerprint,
    name: "CPRA",
    slug: "/index-23/cpra",
    region: "California, USA",
    tagColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    desc: "The California Privacy Rights Act expanded the CCPA with new rights including sensitive data controls, right to correction, and data minimization requirements.",
    features: ["Sensitive data controls", "Right to correction", "Data minimization", "CPPA audit-ready"],
  },
  {
    icon: Layers,
    name: "IAB TCF 2.2",
    slug: "/index-23/iab-tcf",
    region: "Global (Ad Industry)",
    tagColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    desc: "The IAB Transparency & Consent Framework standardizes how consent is collected and communicated across the programmatic advertising supply chain.",
    features: ["TCF 2.2 certified CMP", "TC string generation", "Global Vendor List sync", "Publisher restrictions"],
  },
  {
    icon: BarChart3,
    name: "Google Consent Mode v2",
    slug: "/index-23/google-consent-mode",
    region: "Global (Google Ecosystem)",
    tagColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    desc: "Google Consent Mode lets your Google tags adjust behavior based on consent status, enabling conversion modeling while respecting user privacy choices.",
    features: ["All 7 consent parameters", "Conversion modeling", "GTM integration", "Region-based defaults"],
  },
];

const additionalRegulations = [
  { name: "ePrivacy Directive", region: "EU", desc: "The 'Cookie Law' — requires consent for non-essential cookies. PrivacyCrumb's GDPR compliance covers ePrivacy requirements." },
  { name: "LGPD", region: "Brazil", desc: "Lei Geral de Proteção de Dados — Brazil's general data protection law modeled after the GDPR." },
  { name: "POPIA", region: "South Africa", desc: "Protection of Personal Information Act — South Africa's data protection law with consent requirements." },
  { name: "PIPEDA", region: "Canada", desc: "Personal Information Protection and Electronic Documents Act — Canada's federal privacy law for the private sector." },
  { name: "FADP / nDSG", region: "Switzerland", desc: "The revised Federal Act on Data Protection — Switzerland's updated privacy law aligned with GDPR standards." },
  { name: "PDPA", region: "Thailand", desc: "Personal Data Protection Act — Thailand's comprehensive data privacy legislation with consent requirements." },
];

export default function AllRegulationsPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">All{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Regulations</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">PrivacyCrumb helps you comply with every major privacy regulation worldwide. One platform, global compliance.</p></FadeIn>
          </div>
        </section>

        {/* Primary Regulations */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn><SectionHeader label="Supported Regulations" title="Deep compliance coverage" subtitle="" /></FadeIn>
            <div className="space-y-4 mt-2">
              {regulations.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.06}>
                  <motion.a href={r.slug} whileHover={{ y: -2 }} className="block p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-shadow hover:shadow-lg group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-coral/10 flex items-center justify-center shrink-0">
                        <r.icon className="text-coral" size={22} />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{r.name}</h3>
                          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${r.tagColor}`}>{r.region}</span>
                        </div>
                        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{r.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {r.features.map((f) => (
                            <span key={f} className="text-[11px] px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{f}</span>
                          ))}
                        </div>
                      </div>
                      <div className="shrink-0 self-center">
                        <span className="inline-flex items-center gap-1 text-xs text-coral font-medium group-hover:underline">Learn more <ArrowRight size={12} /></span>
                      </div>
                    </div>
                  </motion.a>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Regulations */}
        <section className="py-12 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <FadeIn><SectionHeader label="Also Covered" title="Additional regulations supported" subtitle="PrivacyCrumb's geo-targeting and consent framework adapt to these regulations automatically." /></FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">
              {additionalRegulations.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.05}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <Scale className="text-coral shrink-0" size={16} />
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{r.name}</h3>
                    </div>
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">{r.region}</span>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-2">{r.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">One platform, global compliance</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">Start free with 3 domains. PrivacyCrumb auto-detects visitor location and applies the correct consent flow — GDPR, CCPA, CPRA, and beyond.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a>
                <motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
