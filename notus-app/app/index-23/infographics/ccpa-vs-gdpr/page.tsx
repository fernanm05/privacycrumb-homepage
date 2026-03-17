"use client";
import { ArrowLeft, ArrowRight, Clock, Scale, CheckCircle, X } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const comparisons = [
  { aspect: "Scope", gdpr: "Anyone processing EU/EEA residents' data", ccpa: "For-profit businesses meeting revenue/data thresholds in California" },
  { aspect: "Consent Model", gdpr: "Opt-in — cookies blocked until consent", ccpa: "Opt-out — cookies allowed, users can opt out" },
  { aspect: "Who It Protects", gdpr: "All 'data subjects' (any person)", ccpa: "California 'consumers' (residents)" },
  { aspect: "Right to Delete", gdpr: "Yes — 'Right to Erasure'", ccpa: "Yes — 'Right to Deletion'" },
  { aspect: "Right to Access", gdpr: "Yes — within 30 days", ccpa: "Yes — within 45 days" },
  { aspect: "Data Portability", gdpr: "Yes — machine-readable format", ccpa: "Yes — but less specific requirements" },
  { aspect: "Opt-Out Mechanism", gdpr: "Withdraw consent (same ease as giving it)", ccpa: "'Do Not Sell or Share My Personal Information' link" },
  { aspect: "Children's Data", gdpr: "Parental consent for under 16 (varies by country)", ccpa: "Opt-in consent for under 16; parental for under 13" },
  { aspect: "Penalties", gdpr: "Up to €20M or 4% of global annual turnover", ccpa: "$2,500 per violation; $7,500 per intentional violation" },
  { aspect: "Private Right of Action", gdpr: "No (enforced by DPAs)", ccpa: "Yes (for data breaches only)" },
  { aspect: "Global Privacy Control", gdpr: "Not explicitly mentioned", ccpa: "Must honor GPC browser signals" },
  { aspect: "Cookie Consent Banner", gdpr: "Required before any non-essential cookies", ccpa: "Not required (but 'Do Not Sell' link is)" },
];

const keyTakeaways = [
  "GDPR is stricter — when in doubt, following GDPR means you likely comply with CCPA too",
  "CCPA focuses on the 'sale' of data; GDPR covers all 'processing' (much broader)",
  "GDPR requires opt-in consent; CCPA allows cookies by default with opt-out",
  "If you have both EU and California visitors, implement both — PrivacyCrumb handles this with geo-targeting",
];

export default function CcpaVsGdprPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Regulations</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">CCPA vs GDPR — Key Differences</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Side-by-side comparison of the two major privacy regulations and what each requires for cookie consent.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Aspect</th><th className="px-4 py-3 font-semibold text-blue-500">GDPR (EU)</th><th className="px-4 py-3 font-semibold text-amber-500">CCPA (California)</th></tr></thead>
                  <tbody>
                    {comparisons.map((c, i) => (
                      <tr key={c.aspect} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white whitespace-nowrap">{c.aspect}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{c.gdpr}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{c.ccpa}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Key takeaways</h2>
              <div className="space-y-2 mb-10">
                {keyTakeaways.map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{t}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/cookie-types" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Cookie Types & Categories</p></div>
                </a>
                <a href="/index-23/infographics/consent-flow" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">The Cookie Consent Flow</p></div>
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
