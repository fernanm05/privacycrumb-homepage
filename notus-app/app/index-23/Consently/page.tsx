"use client";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Shield, Zap, Globe, DollarSign } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

type Row = { feature: string; pc: string | true; comp: string | true };

const comparisonData: { category: string; rows: Row[] }[] = [
  {
    category: "Pricing",
    rows: [
      { feature: "Free plan", pc: "Yes — 3 domains, 5K pageviews", comp: "No free plan" },
      { feature: "Cheapest paid plan", pc: "$9/mo (Starter)", comp: "$8.25/mo ($99/yr) — 1 domain" },
      { feature: "Domains included", pc: "3 – Unlimited", comp: "1 – 10 domains" },
      { feature: "Pageviews included", pc: "5K – Unlimited", comp: "100K – 3M" },
      { feature: "Monthly billing", pc: true, comp: "Annual only" },
    ],
  },
  {
    category: "Cookie Scanning",
    rows: [
      { feature: "Cookie scanning", pc: true, comp: true },
      { feature: "Scan schedule", pc: "On-demand + scheduled", comp: "Weekly scheduled" },
      { feature: "Manual scanning", pc: true, comp: true },
      { feature: "Advanced scan reports", pc: true, comp: true },
    ],
  },
  {
    category: "Consent Banner",
    rows: [
      { feature: "Banner customization", pc: "Advanced (all paid plans)", comp: "Advanced (all plans)" },
      { feature: "Built-in banner layouts", pc: true, comp: true },
      { feature: "Custom colors", pc: true, comp: true },
      { feature: "Live banner preview", pc: true, comp: true },
      { feature: "Multi-language support", pc: "All languages (Pro+)", comp: "All plans" },
      { feature: "Remove branding", pc: "Pro & Enterprise", comp: "Not specified" },
    ],
  },
  {
    category: "Compliance & Consent",
    rows: [
      { feature: "GDPR opt-in template", pc: true, comp: true },
      { feature: "CCPA / US state laws", pc: true, comp: true },
      { feature: "Google Consent Mode v2", pc: true, comp: true },
      { feature: "IAB TCF 2.2", pc: true, comp: true },
      { feature: "Cookie auto-blocking", pc: true, comp: true },
      { feature: "Consent logs", pc: "Up to unlimited", comp: true },
      { feature: "Geo-targeting", pc: true, comp: "Not specified" },
    ],
  },
  {
    category: "Legal Documents",
    rows: [
      { feature: "Privacy policy generator", pc: true, comp: true },
      { feature: "Terms & conditions generator", pc: "Not included", comp: true },
      { feature: "Policies embedded in website", pc: true, comp: true },
    ],
  },
  {
    category: "Integrations & Support",
    rows: [
      { feature: "Script-based integration", pc: true, comp: true },
      { feature: "Google Tag Manager", pc: true, comp: "Via HTML" },
      { feature: "WordPress plugin", pc: true, comp: "Not specified" },
      { feature: "REST API access", pc: true, comp: "Not specified" },
      { feature: "Platform scope", pc: "Any website", comp: "Any website" },
    ],
  },
];

const advantages = [
  { icon: DollarSign, title: "Free Plan Available", desc: "PrivacyCrumb offers a generous free plan. Consently has no free tier — starts at $8.25/month." },
  { icon: Zap, title: "Monthly Billing Option", desc: "Pay monthly or annually with PrivacyCrumb. Consently only offers annual billing." },
  { icon: Globe, title: "More Domains per Plan", desc: "Up to unlimited domains on Enterprise. Consently caps at 10 domains on their highest plan." },
  { icon: Shield, title: "Full API Access", desc: "REST API and webhooks for custom integrations. Consently relies on script-based integration only." },
];

const Cell = ({ value }: { value: string | true }) => {
  if (value === true) return <CheckCircle size={16} className="text-emerald-500 mx-auto" />;
  if (value === "No free plan" || value === "Not specified" || value === "Not included" || value === "Annual only") return <span className="text-red-400 text-xs">{value}</span>;
  return <span className="text-xs text-neutral-600 dark:text-neutral-400">{value}</span>;
};

export default function ConsentlyComparePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Compare</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">PrivacyCrumb vs <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Consently</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">See how PrivacyCrumb compares to Consently across pricing, consent management, legal documents, and integrations.</p></FadeIn>
            <FadeIn delay={0.3}><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="mt-8 inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Try PrivacyCrumb Free <ArrowRight size={16} /></motion.a></FadeIn>
          </div>
        </section>
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="Why PrivacyCrumb" title="Key advantages over Consently" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">{advantages.map((a, i) => (<FadeIn key={a.title} delay={i * 0.08}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><a.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{a.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{a.desc}</p></motion.div></FadeIn>))}</div></div></section>
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-4xl mx-auto"><FadeIn><SectionHeader label="Feature Comparison" title="Side-by-side breakdown" subtitle="A detailed look at features, pricing, and capabilities." /></FadeIn><FadeIn delay={0.1}><div className="mt-4 overflow-x-auto"><table className="w-full text-sm border-separate border-spacing-0"><thead><tr><th className="text-left px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tl-xl font-medium text-neutral-700 dark:text-neutral-300 w-[45%]">Feature</th><th className="text-center px-4 py-3 bg-coral/5 border border-neutral-200 dark:border-neutral-800 font-semibold text-coral w-[27.5%]">PrivacyCrumb</th><th className="text-center px-4 py-3 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-tr-xl font-medium text-neutral-700 dark:text-neutral-300 w-[27.5%]">Consently</th></tr></thead><tbody>{comparisonData.map((section) => (<Fragment key={section.category}><tr><td colSpan={3} className="px-4 py-2.5 bg-neutral-100 dark:bg-neutral-800/50 font-semibold text-neutral-900 dark:text-white text-xs uppercase tracking-wider border-x border-neutral-200 dark:border-neutral-800">{section.category}</td></tr>{section.rows.map((row) => (<tr key={row.feature} className="group"><td className="px-4 py-2.5 text-neutral-700 dark:text-neutral-300 border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors text-[13px]">{row.feature}</td><td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-coral/[0.03] group-hover:bg-coral/[0.06] transition-colors"><Cell value={row.pc} /></td><td className="px-4 py-2.5 text-center border border-neutral-200/60 dark:border-neutral-800/60 bg-white dark:bg-neutral-900 group-hover:bg-neutral-50 dark:group-hover:bg-neutral-800/30 transition-colors"><Cell value={row.comp} /></td></tr>))}</Fragment>))}<tr><td className="h-0 border-b border-l border-neutral-200 dark:border-neutral-800 rounded-bl-xl" /><td className="h-0 border-b border-neutral-200 dark:border-neutral-800" /><td className="h-0 border-b border-r border-neutral-200 dark:border-neutral-800 rounded-br-xl" /></tr></tbody></table></div></FadeIn></div></section>
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Ready to switch from Consently?</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">Get started with PrivacyCrumb for free. No credit card required.</p><div className="flex flex-col sm:flex-row gap-3 justify-center"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
