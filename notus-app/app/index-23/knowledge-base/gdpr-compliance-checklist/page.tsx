"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Shield, FileText, Globe, Users, Lock, Bell } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const checklist = [
  { category: "Lawful Basis for Cookies", items: [
    { text: "Obtain explicit opt-in consent before placing non-essential cookies", done: true },
    { text: "Provide clear, specific information about each cookie's purpose", done: true },
    { text: "Allow users to consent to individual cookie categories (granular consent)", done: true },
    { text: "Do not pre-tick any consent checkboxes", done: true },
    { text: "Treat silence or inactivity as non-consent", done: true },
  ]},
  { category: "Cookie Banner Requirements", items: [
    { text: "Display a visible cookie banner before any non-essential cookies are set", done: true },
    { text: "Include clear 'Accept' and 'Reject' buttons with equal prominence", done: true },
    { text: "Link to your full cookie policy from the banner", done: true },
    { text: "Allow users to change their preferences at any time", done: true },
    { text: "Show banner again when new cookie categories are detected", done: true },
  ]},
  { category: "Consent Records", items: [
    { text: "Store timestamped proof of each user's consent choices", done: true },
    { text: "Record the version of the banner/policy at time of consent", done: true },
    { text: "Include geographic region in consent records", done: true },
    { text: "Retain consent records for the duration required by your DPA", done: true },
    { text: "Make records available for export and audit", done: true },
  ]},
  { category: "Cookie Inventory", items: [
    { text: "Maintain an up-to-date inventory of all cookies on your site", done: true },
    { text: "Categorize each cookie: Necessary, Functional, Analytics, Marketing", done: true },
    { text: "Document purpose, duration, and type (1st/3rd party) for each cookie", done: true },
    { text: "Re-scan periodically to detect new cookies from code changes", done: true },
  ]},
  { category: "User Rights", items: [
    { text: "Allow users to withdraw consent as easily as they gave it", done: true },
    { text: "Provide a mechanism to access, correct, and delete personal data", done: true },
    { text: "Honor data portability requests", done: true },
    { text: "Respond to rights requests within 30 days", done: true },
  ]},
];

const penalties = [
  { level: "Lower tier", amount: "Up to €10 million or 2% of global turnover", desc: "For violations of technical/organizational measures, record-keeping, or certification requirements." },
  { level: "Upper tier", amount: "Up to €20 million or 4% of global turnover", desc: "For violations of consent requirements, data processing principles, or data subject rights." },
];

export default function GdprChecklistPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Compliance Guides</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 10 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">GDPR Compliance Checklist</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Everything you need to know about GDPR cookie consent — lawful basis, opt-in requirements, consent records, and penalties.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">The General Data Protection Regulation (GDPR) requires explicit, informed consent before placing non-essential cookies on visitors&apos; devices. Below is a comprehensive checklist — PrivacyCrumb handles all of these automatically.</p></FadeIn>

            {checklist.map((section, si) => (
              <FadeIn key={section.category} delay={si * 0.04}>
                <div className="mb-8">
                  <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-3">{section.category}</h2>
                  <div className="space-y-2">
                    {section.items.map((item) => (
                      <div key={item.text} className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                        <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-[13px] text-neutral-700 dark:text-neutral-300">{item.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* Penalties */}
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2"><AlertTriangle size={16} className="text-amber-500" /> Penalties for non-compliance</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {penalties.map((p) => (
                    <div key={p.level} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                      <p className="text-[11px] text-neutral-400 uppercase tracking-wide mb-1">{p.level}</p>
                      <p className="text-base font-bold text-coral mb-1">{p.amount}</p>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/ccpa-cpra-requirements" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">CCPA / CPRA Requirements</p></div>
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
