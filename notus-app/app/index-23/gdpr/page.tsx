"use client";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, FileText, Globe, Lock, Users, Database, Bell } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const features = [
  { icon: Shield, title: "Prior Consent Required", desc: "Collect explicit opt-in consent before setting non-essential cookies, as required by GDPR Article 7." },
  { icon: FileText, title: "Granular Cookie Categories", desc: "Let users accept or reject individual cookie categories — analytics, marketing, functional — not just all-or-nothing." },
  { icon: Globe, title: "Geo-Targeted Banners", desc: "Show GDPR-compliant banners only to EU/UK visitors. Other regions get the appropriate consent flow." },
  { icon: Lock, title: "Consent Proof & Logging", desc: "Automatically store timestamped consent records with user ID, consent preferences, and IP metadata." },
  { icon: Database, title: "Automated Cookie Scanning", desc: "PrivacyCrumb scans your site, categorizes cookies, and keeps your cookie declaration always up to date." },
  { icon: Bell, title: "Re-consent on Changes", desc: "When new cookies are detected, users are automatically prompted to update their consent preferences." },
];

const steps = [
  { num: "01", title: "Add the Script", desc: "Drop a single JavaScript snippet into your site. Works with WordPress, Shopify, Webflow, and any custom site." },
  { num: "02", title: "Automatic Scanning", desc: "PrivacyCrumb scans all pages, detects cookies & trackers, and categorizes them by purpose." },
  { num: "03", title: "Banner Goes Live", desc: "A fully customizable, GDPR-compliant consent banner appears for EU/UK visitors with granular controls." },
  { num: "04", title: "Stay Compliant", desc: "Scheduled scans detect new cookies. Consent logs are stored securely. You're always audit-ready." },
];

const faqs = [
  { q: "What is GDPR?", a: "The General Data Protection Regulation (GDPR) is a comprehensive data privacy law enacted by the European Union in 2018. It regulates how organizations collect, store, and process personal data of EU residents — including through cookies and trackers." },
  { q: "Do I need cookie consent for GDPR?", a: "Yes. Under the GDPR and the ePrivacy Directive, you must obtain explicit, informed consent before placing non-essential cookies on a visitor's device. Strictly necessary cookies (like session cookies) are exempt." },
  { q: "What are the penalties for non-compliance?", a: "GDPR fines can reach up to €20 million or 4% of annual global turnover, whichever is higher. Data protection authorities across the EU actively enforce these regulations." },
  { q: "Does PrivacyCrumb handle UK GDPR too?", a: "Yes. The UK GDPR mirrors the EU GDPR after Brexit. PrivacyCrumb's geo-targeting ensures UK visitors see the correct consent flow and your site stays compliant with both jurisdictions." },
  { q: "How does consent logging work?", a: "Every time a user interacts with the consent banner, PrivacyCrumb stores a timestamped record including the user's anonymous ID, consent choices, banner version, and geographic region. These logs are available for export and audit." },
];

export default function GdprPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">GDPR EU & UK{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Compliance</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">Full GDPR cookie consent compliance with automated scanning, granular consent controls, and audit-ready consent logging.</p></FadeIn>
            <FadeIn delay={0.3}><div className="flex flex-col sm:flex-row gap-3 justify-center mt-8"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Get GDPR Compliant <ArrowRight size={16} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn>
          </div>
        </section>
        {/* Features */}
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="GDPR Features" title="Everything you need for GDPR compliance" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">{features.map((f, i) => (<FadeIn key={f.title} delay={i * 0.06}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><f.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p></motion.div></FadeIn>))}</div></div></section>
        {/* How It Works */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-4xl mx-auto"><FadeIn><SectionHeader label="How It Works" title="GDPR compliant in 4 steps" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 gap-4 mt-2">{steps.map((s, i) => (<FadeIn key={s.num} delay={i * 0.08}><div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900"><span className="text-coral font-bold text-lg">{s.num}</span><h3 className="text-sm font-semibold mt-2 mb-1 text-neutral-900 dark:text-white">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p></div></FadeIn>))}</div></div></section>
        {/* FAQ */}
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="FAQ" title="Common GDPR questions" subtitle="" /></FadeIn><div className="space-y-3 mt-2">{faqs.map((f, i) => (<FadeIn key={i} delay={i * 0.05}><details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4"><summary className="text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between"><span>{f.q}</span><span className="text-coral text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">{f.a}</p></details></FadeIn>))}</div></div></section>
        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Get GDPR compliant today</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">Start free. No credit card required. Be fully GDPR compliant in under 5 minutes.</p><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
