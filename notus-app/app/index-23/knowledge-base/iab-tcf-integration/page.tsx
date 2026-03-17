"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Layers, Settings, Globe, Shield, Database, Lock, Zap } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const concepts = [
  { icon: Layers, title: "Purposes & Special Features", desc: "TCF defines 11 standard purposes (e.g., 'Store and/or access information on a device', 'Select personalized content') and 2 special features. Users consent to each separately." },
  { icon: Globe, title: "Global Vendor List (GVL)", desc: "The GVL is a list of all registered vendors (ad tech companies) with their declared purposes and legal bases. PrivacyCrumb syncs with the GVL automatically." },
  { icon: Settings, title: "TC String", desc: "The Transparency & Consent string is an encoded record of user consent. It's passed via the CMP API so all vendors in the supply chain can check their consent status." },
  { icon: Shield, title: "CMP API (__tcfapi)", desc: "The TCF CMP API (window.__tcfapi) lets vendors programmatically check consent status. PrivacyCrumb implements this API fully, ensuring all vendors can read consent signals." },
  { icon: Lock, title: "Publisher Restrictions", desc: "Publishers can override vendor consent requests — e.g., require consent for a purpose even if the vendor claims legitimate interest, or restrict a vendor entirely." },
  { icon: Database, title: "Consent Records", desc: "Every consent interaction generates a TC string that serves as the audit record. PrivacyCrumb stores these with timestamps for compliance verification." },
];

const tcf22Changes = [
  "Legitimate interest removed for Purposes 3, 4, 5, and 6 — explicit consent now required",
  "Vendors must disclose data retention periods for each purpose",
  "New Purpose 11: Use limited data to select content",
  "Vendors must provide an easy way for users to withdraw consent",
  "Enhanced disclosure requirements for cross-device linking",
  "URL-based consent (consent passed via URL parameter) is no longer permitted",
];

const setupSteps = [
  { num: "1", title: "Enable TCF in your dashboard", content: "Navigate to Settings → Compliance → IAB TCF and toggle it on. PrivacyCrumb will automatically sync with the latest Global Vendor List." },
  { num: "2", title: "Select your vendors", content: "Choose which GVL vendors are active on your site. PrivacyCrumb will include them in your consent UI so users can review and consent per vendor." },
  { num: "3", title: "Configure publisher restrictions", content: "Optionally set publisher-level restrictions to require consent (instead of legitimate interest) for specific purposes or restrict certain vendors entirely." },
  { num: "4", title: "Customize the TCF consent UI", content: "PrivacyCrumb displays a TCF-compliant 'layer 2' interface where users can view all purposes, special features, and individual vendors. Customize colors and text." },
  { num: "5", title: "Test and verify", content: "Use the IAB TCF validator tool to verify your TC string is correctly generated. PrivacyCrumb provides a built-in testing mode for this." },
];

export default function IabTcfIntegrationPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Compliance Guides</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 8 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">IAB TCF v2.2 Integration</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Implement the IAB Transparency & Consent Framework with PrivacyCrumb for compliant programmatic advertising.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">The IAB Transparency & Consent Framework (TCF) is an industry standard developed by IAB Europe. It standardizes how consent is collected, stored, and communicated between publishers, CMPs, and ad tech vendors. PrivacyCrumb is a registered TCF 2.2 CMP.</p></FadeIn>

            {/* Key Concepts */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Key TCF concepts</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {concepts.map((c, i) => (
                <FadeIn key={c.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><c.icon size={14} className="text-coral" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{c.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{c.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* TCF 2.2 Changes */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What changed in TCF 2.2</h2>
              <div className="space-y-2 mb-10">
                {tcf22Changes.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <Zap size={14} className="text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Setup Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setting up TCF in PrivacyCrumb</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {setupSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/lgpd-brazil" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">LGPD Brazil Compliance</p></div>
                </a>
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                  <ArrowRight size={14} className="text-neutral-400 group-hover:text-coral" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
