"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight, FileText, Globe, Lock, Users, EyeOff, Fingerprint } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const features = [
  { icon: Fingerprint, title: "Sensitive Data Controls", desc: "Let users limit the use and disclosure of sensitive personal information — a new right introduced by the CPRA." },
  { icon: EyeOff, title: "Do Not Sell or Share", desc: "Expanded from CCPA: cover both the sale AND sharing of personal information for cross-context behavioral advertising." },
  { icon: Shield, title: "Right to Correction", desc: "Support the new CPRA right allowing consumers to correct inaccurate personal information held by your business." },
  { icon: Globe, title: "California-Only Targeting", desc: "Geo-detect California visitors and show CPRA-specific consent flows with all required disclosures and opt-out options." },
  { icon: Lock, title: "Data Minimization", desc: "PrivacyCrumb helps ensure you only collect personal information that is reasonably necessary for the disclosed purpose." },
  { icon: Users, title: "CPPA Audit-Ready", desc: "Store consent records and opt-out requests to satisfy requirements from the California Privacy Protection Agency (CPPA)." },
];

const faqs = [
  { q: "What is the CPRA?", a: "The California Privacy Rights Act (CPRA) amended and expanded the CCPA, effective January 1, 2023. It created the California Privacy Protection Agency (CPPA), added new consumer rights, and introduced the concept of 'sensitive personal information.'" },
  { q: "How is CPRA different from CCPA?", a: "CPRA expands CCPA with: a right to correct data, a right to limit use of sensitive personal information, opt-out of 'sharing' (not just 'sale'), data minimization requirements, and a dedicated enforcement agency (CPPA)." },
  { q: "Do I need to update my CCPA compliance?", a: "Yes. If you were CCPA-compliant, you need to update for CPRA. Key changes include adding a 'Limit the Use of My Sensitive Personal Information' link and updating your privacy policy to address new categories." },
  { q: "Does PrivacyCrumb handle both?", a: "Absolutely. PrivacyCrumb provides combined CCPA/CPRA compliance in a single setup — including the expanded 'Do Not Sell or Share' link, sensitive data controls, and updated privacy disclosures." },
];

export default function CpraPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">CPRA California Privacy{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Rights Act</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">Comply with the expanded California Privacy Rights Act — sensitive data controls, right to correction, and data minimization.</p></FadeIn>
            <FadeIn delay={0.3}><div className="flex flex-col sm:flex-row gap-3 justify-center mt-8"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Get CPRA Compliant <ArrowRight size={16} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn>
          </div>
        </section>
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="CPRA Features" title="What CPRA adds beyond CCPA" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">{features.map((f, i) => (<FadeIn key={f.title} delay={i * 0.06}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><f.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p></motion.div></FadeIn>))}</div></div></section>
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="FAQ" title="Common CPRA questions" subtitle="" /></FadeIn><div className="space-y-3 mt-2">{faqs.map((f, i) => (<FadeIn key={i} delay={i * 0.05}><details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4"><summary className="text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between"><span>{f.q}</span><span className="text-coral text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">{f.a}</p></details></FadeIn>))}</div></div></section>
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Get CPRA compliant today</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">Start free. Meet all CPRA requirements in minutes.</p><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
