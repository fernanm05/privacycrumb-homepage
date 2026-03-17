"use client";
import { motion } from "framer-motion";
import { Shield, ArrowRight, BarChart3, Globe, Lock, Settings, Zap, CheckCircle } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const features = [
  { icon: Settings, title: "Consent Mode v2 Ready", desc: "PrivacyCrumb implements Google Consent Mode v2 out of the box — including the new ad_user_data and ad_personalization parameters." },
  { icon: BarChart3, title: "Conversion Modeling", desc: "With Consent Mode, Google can model conversions from users who declined cookies, helping you maintain accurate analytics and ad measurement." },
  { icon: Zap, title: "Automatic Signal Passing", desc: "PrivacyCrumb automatically passes consent signals to Google tags (GA4, Google Ads, GTM) — no manual code changes needed." },
  { icon: Globe, title: "Region-Based Defaults", desc: "Set default consent states per region. Deny by default in EEA (GDPR), grant by default elsewhere, or customize per country." },
  { icon: Shield, title: "Google-Certified CMP", desc: "PrivacyCrumb is a Google-certified Consent Management Platform, meeting all requirements for EEA consent signal integration." },
  { icon: Lock, title: "Tag Behavior Control", desc: "Google tags automatically adjust their behavior based on consent state — blocked when denied, full functionality when granted." },
];

const consentTypes = [
  { name: "ad_storage", desc: "Enables storage for advertising (e.g., cookies for ad targeting)." },
  { name: "analytics_storage", desc: "Enables storage for analytics (e.g., visit duration cookies)." },
  { name: "ad_user_data", desc: "Controls sending user data to Google for advertising purposes." },
  { name: "ad_personalization", desc: "Controls personalized advertising (remarketing)." },
  { name: "functionality_storage", desc: "Enables storage for site functionality (e.g., language preferences)." },
  { name: "personalization_storage", desc: "Enables storage for personalization (e.g., video recommendations)." },
  { name: "security_storage", desc: "Enables storage for security (e.g., authentication, fraud prevention)." },
];

const faqs = [
  { q: "What is Google Consent Mode?", a: "Google Consent Mode is a feature that lets you adjust how Google tags (Analytics, Ads, etc.) behave based on user consent. When a user declines cookies, tags can still run in a limited, cookieless mode that respects privacy while enabling conversion modeling." },
  { q: "What changed in Consent Mode v2?", a: "Consent Mode v2 added two new parameters: ad_user_data (controls whether user data is sent to Google for ads) and ad_personalization (controls remarketing). From March 2024, these are required for advertisers serving ads to EEA users." },
  { q: "Why is Consent Mode required for EU ads?", a: "Google requires certified CMPs to send consent signals via Consent Mode v2 for any EEA user interactions. Without it, you lose remarketing audiences and may see reduced ad performance in European markets." },
  { q: "Does PrivacyCrumb work with GTM?", a: "Yes. PrivacyCrumb integrates with Google Tag Manager, automatically setting the consent state before any tags fire. No manual consent template configuration needed." },
  { q: "What is Advanced vs Basic mode?", a: "In Advanced mode, Google tags load before consent and adjust behavior dynamically. In Basic mode, tags are completely blocked until consent is given. PrivacyCrumb supports both, with Advanced mode recommended for conversion modeling." },
];

export default function GoogleConsentModePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Solutions</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">Google Consent{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Mode v2</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">Maintain accurate analytics and ad measurement while respecting privacy. Google Consent Mode v2 integration built in.</p></FadeIn>
            <FadeIn delay={0.3}><div className="flex flex-col sm:flex-row gap-3 justify-center mt-8"><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Get Started Free <ArrowRight size={16} /></motion.a><motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">View Pricing</motion.a></div></FadeIn>
          </div>
        </section>
        {/* Features */}
        <section className="py-16 px-6"><div className="max-w-5xl mx-auto"><FadeIn><SectionHeader label="Features" title="Built-in Google Consent Mode v2" subtitle="" /></FadeIn><div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2">{features.map((f, i) => (<FadeIn key={f.title} delay={i * 0.06}><motion.div whileHover={{ y: -4 }} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"><div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-3"><f.icon className="text-coral" size={20} /></div><h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{f.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p></motion.div></FadeIn>))}</div></div></section>
        {/* Consent Types */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="Consent Types" title="All 7 consent parameters supported" subtitle="" /></FadeIn><div className="space-y-2 mt-2">{consentTypes.map((c, i) => (<FadeIn key={c.name} delay={i * 0.04}><div className="flex items-start gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900"><CheckCircle className="text-emerald-500 mt-0.5 shrink-0" size={16} /><div><p className="text-sm font-semibold font-mono text-coral">{c.name}</p><p className="text-[12px] text-neutral-500 dark:text-neutral-400 mt-0.5">{c.desc}</p></div></div></FadeIn>))}</div></div></section>
        {/* FAQ */}
        <section className="py-16 px-6"><div className="max-w-3xl mx-auto"><FadeIn><SectionHeader label="FAQ" title="Google Consent Mode questions" subtitle="" /></FadeIn><div className="space-y-3 mt-2">{faqs.map((f, i) => (<FadeIn key={i} delay={i * 0.05}><details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-5 py-4"><summary className="text-sm font-semibold text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between"><span>{f.q}</span><span className="text-coral text-lg group-open:rotate-45 transition-transform">+</span></summary><p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mt-3">{f.a}</p></details></FadeIn>))}</div></div></section>
        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950"><div className="max-w-3xl mx-auto text-center"><FadeIn><h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Set up Google Consent Mode today</h2><p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">Start free. Consent Mode v2 signals are sent automatically. No code changes needed.</p><motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Start Free <ArrowRight size={14} /></motion.a></FadeIn></div></section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
