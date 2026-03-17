"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Shield, EyeOff, Fingerprint, FileText } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const ccpaRequirements = [
  { title: "Do Not Sell or Share Link", desc: "Display a clear 'Do Not Sell or Share My Personal Information' link accessible from every page. PrivacyCrumb auto-adds this for California visitors." },
  { title: "Opt-Out Mechanism", desc: "Provide a simple, one-step opt-out process. Users must be able to refuse the sale of personal information without creating an account." },
  { title: "Privacy Notice", desc: "Maintain a comprehensive privacy policy listing the categories of personal information collected, purposes of collection, and categories of third parties with whom data is shared." },
  { title: "Consumer Rights Fulfillment", desc: "Respond to consumer requests (access, deletion, opt-out) within 45 days. PrivacyCrumb's consent logs help you verify and process these requests." },
  { title: "12-Month Look-Back", desc: "Your privacy policy must disclose the categories of personal information collected, sold, or disclosed in the preceding 12 months." },
  { title: "Non-Discrimination", desc: "You cannot discriminate against consumers who exercise their CCPA rights — e.g., by charging different prices or providing a different service level." },
];

const cpraAdditions = [
  { icon: Fingerprint, title: "Sensitive Personal Information", desc: "CPRA introduces a new category — sensitive personal information (SSN, precise geolocation, racial data, etc.). Users can limit its use and disclosure." },
  { icon: EyeOff, title: "Right to Correct", desc: "Consumers can now request correction of inaccurate personal information, in addition to existing rights to access and delete." },
  { icon: Shield, title: "Data Minimization", desc: "Businesses must limit collection to what is 'reasonably necessary and proportionate' to the disclosed purpose." },
  { icon: FileText, title: "CPPA Enforcement", desc: "The California Privacy Protection Agency (CPPA) is a new dedicated enforcement body with rulemaking authority, replacing the Attorney General as primary enforcer." },
];

const thresholds = [
  "Annual gross revenue exceeding $25 million",
  "Annually buys, sells, or shares personal information of 100,000+ consumers or households",
  "Derives 50% or more of annual revenue from selling or sharing personal information",
];

export default function CcpaCpraPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Compliance Guides</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 8 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">CCPA / CPRA Requirements</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">California privacy law requirements for cookie consent, opt-out mechanisms, Do Not Sell compliance, and the CPRA amendments.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Who it applies to */}
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Who must comply?</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">CCPA/CPRA applies to for-profit businesses that collect personal data of California residents and meet <strong className="text-neutral-900 dark:text-white">any one</strong> of these thresholds:</p>
                <ul className="space-y-2">
                  {thresholds.map((t) => (
                    <li key={t} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{t}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* CCPA Requirements */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">CCPA core requirements</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {ccpaRequirements.map((r, i) => (
                <FadeIn key={r.title} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-1" />
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{r.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{r.desc}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* CPRA Additions */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What CPRA adds</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {cpraAdditions.map((a, i) => (
                <FadeIn key={a.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><a.icon size={14} className="text-coral" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{a.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{a.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Penalties */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-amber-500" /> Penalties</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">CCPA: up to <strong>$2,500 per unintentional violation</strong> and <strong>$7,500 per intentional violation</strong>. CPRA extends this to cover violations involving minors&apos; data at the $7,500 rate regardless of intent.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/gdpr-compliance-checklist" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">GDPR Compliance Checklist</p></div>
                </a>
                <a href="/index-23/knowledge-base/eprivacy-directive" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">ePrivacy Directive Explained</p></div>
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
