"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Globe, Cookie, Shield, FileText } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const keyPoints = [
  { title: "Prior Consent Required", desc: "Article 5(3) of the ePrivacy Directive requires consent before storing or accessing information on a user's device (cookies, local storage, fingerprinting). Only strictly necessary cookies are exempt." },
  { title: "Clear & Comprehensive Information", desc: "Users must be told what cookies are being stored, for what purpose, and by whom — before consent is requested. Generic statements like 'we use cookies' are not sufficient." },
  { title: "Active Opt-In Only", desc: "Consent must be freely given, specific, and informed. Pre-checked boxes, cookie walls, and implied consent (scrolling, continued browsing) are not valid under ePrivacy + GDPR." },
  { title: "Applies to All Tracking", desc: "The ePrivacy Directive covers not just cookies but all forms of device tracking: local storage, session storage, fingerprinting, pixel tags, and similar technologies." },
  { title: "National Implementation Varies", desc: "Each EU/EEA member state implemented the Directive into national law. Requirements and enforcement can differ between countries (e.g., France's CNIL, Germany's BfDI, Italy's Garante)." },
];

const differences = [
  { aspect: "Scope", eprivacy: "Covers cookies and electronic communications", gdpr: "Covers all personal data processing" },
  { aspect: "Legal basis", eprivacy: "Consent (with limited exemptions)", gdpr: "6 lawful bases (consent, legitimate interest, etc.)" },
  { aspect: "Cookie-specific?", eprivacy: "Yes — specifically requires consent for cookies", gdpr: "Addresses cookies as part of broader data processing" },
  { aspect: "Enforcement", eprivacy: "National data protection authorities", gdpr: "Lead supervisory authority + local DPAs" },
  { aspect: "Penalties", eprivacy: "Varies by national implementation", gdpr: "Up to €20M or 4% of global turnover" },
];

export default function EprivacyDirectivePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Compliance Guides</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">ePrivacy Directive Explained</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">How the ePrivacy Directive (the &quot;Cookie Law&quot;) affects cookie consent and what you need to do to stay compliant.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">The ePrivacy Directive (2002/58/EC, amended by 2009/136/EC) is often called the &quot;Cookie Law.&quot; It complements the GDPR by specifically regulating electronic communications and the use of cookies and similar tracking technologies.</p></FadeIn>

            {/* Key Points */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Key requirements</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {keyPoints.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{p.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Comparison Table */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">ePrivacy vs. GDPR</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Aspect</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">ePrivacy Directive</th><th className="px-4 py-3 font-semibold text-coral">GDPR</th></tr></thead>
                  <tbody>
                    {differences.map((d, i) => (
                      <tr key={d.aspect} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">{d.aspect}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{d.eprivacy}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{d.gdpr}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Note about ePrivacy Regulation */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-blue-200/50 dark:border-blue-900/30 bg-blue-50/50 dark:bg-blue-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">Note: ePrivacy Regulation (upcoming)</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">The EU has been working on an ePrivacy Regulation to replace the Directive. Once adopted, it will be directly applicable across all EU member states (like GDPR) without requiring national transposition. PrivacyCrumb will support any new requirements automatically.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/ccpa-cpra-requirements" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">CCPA / CPRA Requirements</p></div>
                </a>
                <a href="/index-23/knowledge-base/lgpd-brazil" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">LGPD Brazil Compliance</p></div>
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
