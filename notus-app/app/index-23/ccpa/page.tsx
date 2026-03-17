"use client";
import { motion } from "framer-motion";
import { Shield, CheckCircle, ArrowRight, FileText, Globe, Lock, Users, EyeOff, Bell } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const features = [
  { icon: EyeOff, title: "Do Not Sell My Info", desc: "Automatically display a 'Do Not Sell or Share My Personal Information' link for California visitors as required by CCPA." },
  { icon: Shield, title: "Opt-Out Mechanism", desc: "Provide a clear, accessible opt-out flow so consumers can refuse the sale of their personal information at any time." },
  { icon: Globe, title: "California Geo-Targeting", desc: "Detect California visitors and show CCPA-specific consent flows while showing standard banners to other regions." },
  { icon: FileText, title: "Privacy Notice Integration", desc: "Link directly to your CCPA-compliant privacy notice with all required disclosures about data collection categories." },
  { icon: Lock, title: "Consent Record Keeping", desc: "Store opt-out requests with timestamps and verification details for at least 12 months as required by the CCPA." },
  { icon: Users, title: "Consumer Rights Support", desc: "Help fulfill consumer rights requests including access, deletion, and data portability under CCPA Sections 1798.100-125." },
];

const steps = [
  { num: "01", title: "Install PrivacyCrumb", desc: "Add a single script tag. PrivacyCrumb detects California visitors and activates CCPA-specific flows automatically." },
  { num: "02", title: "Configure Opt-Out Link", desc: "PrivacyCrumb adds a 'Do Not Sell or Share' link to your site footer. Fully customizable to match your brand." },
  { num: "03", title: "Manage Consent", desc: "Visitors can opt out of data sale. Their preferences are stored and respected across all cookies and trackers." },
  { num: "04", title: "Stay Audit-Ready", desc: "All opt-out requests and consent changes are logged with timestamps. Export reports anytime for compliance audits." },
];

const faqs = [
  { q: "What is CCPA?", a: "The California Consumer Privacy Act (CCPA) is a state privacy law that gives California residents rights over their personal information, including the right to know, delete, and opt out of the sale of personal data." },
  { q: "Who does the CCPA apply to?", a: "CCPA applies to for-profit businesses that collect personal data of California residents and meet any of these thresholds: annual gross revenue over $25 million, buy/sell data of 100,000+ consumers, or derive 50%+ of revenue from selling personal information." },
  { q: "How is CCPA different from GDPR?", a: "CCPA uses an opt-out model (users can refuse data sale) while GDPR uses an opt-in model (consent must be given before data collection). CCPA also focuses specifically on the 'sale' of personal information." },
  { q: "Does PrivacyCrumb handle CPRA too?", a: "Yes! The CPRA (California Privacy Rights Act) amended and expanded the CCPA. PrivacyCrumb supports both, including the new right to limit use of sensitive personal information. See our CPRA page for details." },
];

export default function CcpaPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">CCPA California{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Compliance</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">California Consumer Privacy Act compliance with automated Do Not Sell links, opt-out flows, and consent management.</p></FadeIn>
            <FadeIn delay={0.3}><div className="flex flex-col sm:flex-row gap-3 justify-center mt-8"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Get CCPA Compliant <ArrowRight size={16} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn>
          </div>
        </section>
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="CCPA Features" title="Everything you need for CCPA compliance" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">{features.map((f, i) => (<FadeIn key={f.title} delay={i * 0.06}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><f.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p></motion.div></FadeIn>))}</div></div></section>
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-4xl mx-auto"><FadeIn><SectionHeader label="How It Works" title="CCPA compliant in 4 steps" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 gap-4 mt-2">{steps.map((s, i) => (<FadeIn key={s.num} delay={i * 0.08}><div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900"><span className="text-coral font-bold text-lg">{s.num}</span><h3 className="text-sm font-semibold mt-2 mb-1 text-neutral-900 dark:text-white">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p></div></FadeIn>))}</div></div></section>
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="FAQ" title="Common CCPA questions" subtitle="" /></FadeIn><div className="space-y-3 mt-2">{faqs.map((f, i) => (<FadeIn key={i} delay={i * 0.05}><details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4"><summary className="text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between"><span>{f.q}</span><span className="text-coral text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">{f.a}</p></details></FadeIn>))}</div></div></section>
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Get CCPA compliant today</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">Start free. Add Do Not Sell links and opt-out flows in minutes.</p><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
