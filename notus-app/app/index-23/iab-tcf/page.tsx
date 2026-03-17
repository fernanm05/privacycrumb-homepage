"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight, Layers, Globe, Lock, Settings, Database, CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const features = [
  { icon: Layers, title: "TCF 2.2 Certified CMP", desc: "PrivacyCrumb is a registered IAB TCF 2.2 Consent Management Platform, ensuring your consent signals are recognized by the advertising ecosystem." },
  { icon: Shield, title: "Purpose-Based Consent", desc: "Present all IAB-defined purposes and special features to users. Consent is collected per purpose, per vendor — fully transparent." },
  { icon: Globe, title: "Global Vendor List (GVL)", desc: "Automatically sync with the IAB's Global Vendor List so users can review and consent to individual advertising vendors." },
  { icon: Settings, title: "TC String Generation", desc: "PrivacyCrumb generates and manages the Transparency & Consent (TC) string, passing consent signals to all participating vendors." },
  { icon: Database, title: "Consent Signal Storage", desc: "TC strings and consent records are stored securely with timestamps, enabling audit trails and compliance verification." },
  { icon: Lock, title: "Publisher Restrictions", desc: "Define publisher-level restrictions to override vendor consent requirements. Control exactly which vendors can operate on your site." },
];

const faqs = [
  { q: "What is the IAB Transparency & Consent Framework?", a: "The IAB TCF is an industry standard developed by IAB Europe to help digital publishers, advertisers, and technology vendors comply with GDPR and ePrivacy requirements. It standardizes how consent is collected, stored, and communicated across the advertising supply chain." },
  { q: "What is TCF 2.2?", a: "TCF 2.2 is the latest version of the framework, released in 2023. Key changes include removing legitimate interest for certain purposes (like creating personalized ads profiles) and requiring vendors to disclose their data retention periods." },
  { q: "Do I need TCF if I show ads?", a: "If you work with programmatic advertising in the EU/UK, TCF compliance is strongly recommended. Major ad platforms like Google require TCF-compatible consent signals to serve personalized ads in Europe." },
  { q: "How does the TC string work?", a: "The TC string is an encoded string that captures user consent choices for each IAB-defined purpose and vendor. It's passed through the ad supply chain via the CMP API, allowing all vendors to check whether they have consent." },
];

export default function IabTcfPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">IAB TCF 2.2{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Compliance</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">IAB Transparency & Consent Framework integration for programmatic advertising compliance across the EU and UK.</p></FadeIn>
            <FadeIn delay={0.3}><div className="flex flex-col sm:flex-row gap-3 justify-center mt-8"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Get TCF Compliant <ArrowRight size={16} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn>
          </div>
        </section>
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="TCF Features" title="Full IAB TCF 2.2 integration" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">{features.map((f, i) => (<FadeIn key={f.title} delay={i * 0.06}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><f.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p></motion.div></FadeIn>))}</div></div></section>
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="FAQ" title="Common TCF questions" subtitle="" /></FadeIn><div className="space-y-3 mt-2">{faqs.map((f, i) => (<FadeIn key={i} delay={i * 0.05}><details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4"><summary className="text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between"><span>{f.q}</span><span className="text-coral text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">{f.a}</p></details></FadeIn>))}</div></div></section>
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Get IAB TCF compliant today</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">Start free. Full TCF 2.2 integration in minutes.</p><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
