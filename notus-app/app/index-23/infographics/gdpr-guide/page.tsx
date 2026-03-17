"use client";
import { ArrowLeft, ArrowRight, Clock, Shield, CheckCircle, AlertTriangle, Users, FileText, Scale, Globe } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const keyPrinciples = [
  { title: "Lawfulness, Fairness & Transparency", desc: "Cookie usage must have a legal basis. Users must be informed clearly about what cookies you use and why." },
  { title: "Purpose Limitation", desc: "Cookies can only be used for the specific purposes disclosed to the user at the time of consent." },
  { title: "Data Minimization", desc: "Only collect the minimum data necessary. Don't set 40 marketing cookies when 5 would suffice." },
  { title: "Storage Limitation", desc: "Cookies should have a reasonable expiry. Session cookies are preferred where possible." },
  { title: "Integrity & Confidentiality", desc: "Cookie data must be protected against unauthorized access with appropriate security measures." },
  { title: "Accountability", desc: "You must be able to demonstrate compliance — consent records, audit trails, and documentation." },
];

const consentRequirements = [
  { req: "Prior Consent", desc: "Non-essential cookies must NOT be set until the user gives explicit consent.", status: "Required" },
  { req: "Freely Given", desc: "Consent must be a genuine choice. No cookie walls blocking access to the site.", status: "Required" },
  { req: "Specific", desc: "Users must be able to consent to individual cookie categories, not just 'all or nothing'.", status: "Required" },
  { req: "Informed", desc: "Users must know what they're consenting to — cookie names, purposes, durations, third parties.", status: "Required" },
  { req: "Unambiguous", desc: "Consent requires a clear affirmative action (clicking 'Accept'). Pre-ticked boxes are not valid.", status: "Required" },
  { req: "Withdrawable", desc: "Users must be able to withdraw consent as easily as they gave it.", status: "Required" },
];

const fines = [
  { company: "Meta (Facebook)", amount: "€1.2 billion", year: "2023", reason: "Transferring EU user data to US without adequate safeguards" },
  { company: "Amazon", amount: "€746 million", year: "2021", reason: "Processing personal data without proper consent for advertising" },
  { company: "WhatsApp", amount: "€225 million", year: "2021", reason: "Lack of transparency about data sharing with Meta" },
  { company: "Google (France)", amount: "€150 million", year: "2022", reason: "Making cookie rejection more difficult than acceptance" },
  { company: "TikTok", amount: "€345 million", year: "2023", reason: "Children's data processing and privacy settings" },
];

export default function GdprVisualGuidePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Regulations</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 8 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">GDPR Cookie Consent — The Complete Visual Guide</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Everything you need to know about GDPR cookie consent requirements, lawful basis, and penalties in one visual guide.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Key Principles */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">6 key GDPR principles for cookies</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {keyPrinciples.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-blue-500/10 flex items-center justify-center"><Shield size={14} className="text-blue-500" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{p.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Consent Requirements */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Valid consent checklist</h2></FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Requirement</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th><th className="px-4 py-3 font-semibold text-emerald-500">Status</th></tr></thead>
                  <tbody>
                    {consentRequirements.map((c, i) => (
                      <tr key={c.req} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white whitespace-nowrap">{c.req}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{c.desc}</td>
                        <td className="px-4 py-3"><span className="flex items-center gap-1 text-emerald-500 font-medium"><CheckCircle size={10} />{c.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Fines */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Largest GDPR fines</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {fines.map((f, i) => (
                <FadeIn key={f.company} delay={i * 0.03}>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="text-right shrink-0 w-28"><span className="text-base font-bold text-red-500">{f.amount}</span><br/><span className="text-[10px] text-neutral-400">{f.year}</span></div>
                    <div className="flex-1 border-l border-neutral-200/80 dark:border-neutral-800 pl-4">
                      <h4 className="text-[13px] font-semibold text-neutral-900 dark:text-white">{f.company}</h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{f.reason}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Warning */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-amber-500" /> Don&apos;t wait for enforcement</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">GDPR enforcement is accelerating. DPAs issued 1,800+ fines totaling over €4.4 billion since 2018. Cookie consent violations are among the most common triggers for investigations.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Infographics</p></div>
                </a>
                <a href="/index-23/infographics/cookie-types" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Cookie Types & Categories</p></div>
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
