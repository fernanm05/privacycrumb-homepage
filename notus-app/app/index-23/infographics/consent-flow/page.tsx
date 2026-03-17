"use client";
import { ArrowLeft, ArrowRight, Clock, BarChart3, CheckCircle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const flowSteps = [
  { num: "1", title: "Visitor arrives", desc: "A new or returning visitor loads your webpage. PrivacyCrumb script initializes and checks for an existing consent cookie.", color: "bg-blue-500" },
  { num: "2", title: "Check for existing consent", desc: "If the visitor has previously consented and the consent hasn't expired, their saved preferences are applied. No banner is shown.", color: "bg-teal-500" },
  { num: "3", title: "Display consent banner", desc: "If no valid consent exists, the cookie consent banner is shown. All non-essential cookies are blocked until the user acts.", color: "bg-purple-500" },
  { num: "4", title: "User makes a choice", desc: "The visitor can Accept All, Reject All, or click 'Manage Preferences' to choose specific categories (Functional, Analytics, Marketing).", color: "bg-amber-500" },
  { num: "5", title: "Consent is recorded", desc: "PrivacyCrumb stores the consent choice in a first-party cookie and sends it to the consent log. A unique Consent ID is generated.", color: "bg-coral" },
  { num: "6", title: "Cookies are loaded/blocked", desc: "Based on the consent, PrivacyCrumb unblocks approved cookie categories. Blocked scripts remain inactive. Google Consent Mode signals are sent.", color: "bg-emerald-500" },
  { num: "7", title: "Ongoing management", desc: "Visitors can change preferences at any time via a 'Cookie Settings' link. Each change creates a new consent record in the audit trail.", color: "bg-indigo-500" },
  { num: "8", title: "Consent renewal", desc: "After the configured expiry period (default: 12 months), consent expires. The banner is shown again on the next visit for re-consent.", color: "bg-pink-500" },
];

const outcomes = [
  { choice: "Accept All", result: "All cookie categories are unblocked. Analytics, marketing, and functional scripts load. Full tracking enabled." },
  { choice: "Reject All", result: "Only necessary cookies remain. No analytics or marketing scripts load. GA4 uses conversion modeling." },
  { choice: "Custom Selection", result: "Only selected categories are unblocked. Partial tracking based on user choices." },
  { choice: "Ignore Banner", result: "Non-essential cookies remain blocked. Banner persists on current and subsequent pages." },
];

export default function ConsentFlowPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500">Technical</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">The Cookie Consent Flow</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Step-by-step visual walkthrough of how cookie consent works — from first visit to preference management.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Flow Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5">The consent flow</h2></FadeIn>
            <div className="relative mb-10">
              <div className="absolute left-[19px] top-8 bottom-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-4">
                {flowSteps.map((s, i) => (
                  <FadeIn key={s.num} delay={i * 0.04}>
                    <div className="flex gap-4 relative">
                      <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center shrink-0 z-10`}><span className="text-white text-sm font-bold">{s.num}</span></div>
                      <div className="flex-1 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                        <h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-1">{s.title}</h3>
                        <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Outcomes */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">User choice outcomes</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {outcomes.map((o, i) => (
                <FadeIn key={o.choice} delay={i * 0.04}>
                  <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <h3 className="text-sm font-semibold text-coral mb-1">{o.choice}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{o.result}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/ccpa-vs-gdpr" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">CCPA vs GDPR</p></div>
                </a>
                <a href="/index-23/infographics/privacy-map" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Global Privacy Map</p></div>
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
