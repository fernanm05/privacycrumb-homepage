"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, FileText, Shield, Search, AlertTriangle, Database } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const logFields = [
  { field: "Consent ID", desc: "Unique identifier for each consent record. Use this to look up specific visitor consent.", example: "pc_abc123def456" },
  { field: "Timestamp", desc: "ISO 8601 timestamp of when consent was given or updated.", example: "2024-01-15T14:30:00Z" },
  { field: "Visitor ID", desc: "Anonymous, hashed visitor identifier. Does not contain PII.", example: "v_7f8e9d0c..." },
  { field: "Action", desc: "The consent action: given, updated, or withdrawn.", example: "given" },
  { field: "Categories", desc: "JSON object showing consent status per category.", example: '{"necessary":true,"analytics":true}' },
  { field: "Region", desc: "Detected visitor region (country + state if available).", example: "EU-DE (Germany)" },
  { field: "Banner Version", desc: "The version of the banner configuration active at the time.", example: "v2.3" },
  { field: "User Agent", desc: "Browser and device information (anonymized).", example: "Chrome 120, Windows" },
  { field: "Consent Method", desc: "How consent was given: banner, API, or programmatic.", example: "banner" },
];

const auditFeatures = [
  { icon: Database, title: "Immutable Records", desc: "Consent records cannot be modified or deleted. Every consent action creates a new record with a timestamp, ensuring a complete audit trail." },
  { icon: Shield, title: "Compliance Proof", desc: "When a regulator asks 'Can you prove this user gave consent?', you can look up their consent record by ID, showing exactly what they consented to and when." },
  { icon: Search, title: "Search & Filter", desc: "Search logs by consent ID, visitor ID, date range, region, or action type. Find any consent record in seconds." },
  { icon: FileText, title: "Retention Policy", desc: "PrivacyCrumb retains consent records for the duration of your plan. Enterprise plans offer unlimited retention. Records can be exported at any time." },
];

const regulatoryRequirements = [
  { regulation: "GDPR (Article 7)", requirement: "Controllers must be able to demonstrate that the data subject has consented. Records must show what was consented to, when, and by whom." },
  { regulation: "CCPA (§1798.135)", requirement: "Businesses must maintain records of consumer opt-out requests for at least 24 months." },
  { regulation: "ePrivacy", requirement: "Prior consent must be recorded for audit purposes. National DPAs may request proof during investigations." },
  { regulation: "LGPD (Article 8)", requirement: "Consent must be documented. The burden of proof that consent was obtained lies with the controller." },
];

export default function ConsentLogPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">Analytics & Reporting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Consent Log & Audit Trail</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">How PrivacyCrumb records every consent action for regulatory audits and compliance proof.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">Every time a visitor interacts with your consent banner — accepting, rejecting, or modifying their choices — PrivacyCrumb creates an immutable consent record. These records serve as your proof of consent for regulatory audits.</p></FadeIn>

            {/* Log Fields */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What&apos;s recorded</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Field</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Example</th></tr></thead>
                  <tbody>
                    {logFields.map((f, i) => (
                      <tr key={f.field} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white whitespace-nowrap">{f.field}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{f.desc}</td>
                        <td className="px-4 py-3 font-mono text-[11px] text-neutral-400">{f.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Audit Features */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Audit features</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {auditFeatures.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center"><f.icon size={14} className="text-indigo-500" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{f.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Regulatory Requirements */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Regulatory requirements for consent records</h2>
              <div className="space-y-2 mb-10">
                {regulatoryRequirements.map((r) => (
                  <div key={r.regulation} className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h4 className="text-[12px] font-semibold text-coral mb-1">{r.regulation}</h4>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{r.requirement}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/consent-analytics" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Consent Analytics Dashboard</p></div>
                </a>
                <a href="/index-23/knowledge-base/exporting-data" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Exporting Consent Data</p></div>
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
