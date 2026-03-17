"use client";
import { ArrowLeft, ArrowRight, Clock, Code, CheckCircle, BarChart3, Shield, Zap, Eye } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const howItWorks = [
  { num: "1", title: "Set default consent to 'denied'", desc: "Before any Google tags load, set all consent signals to 'denied'. This tells Google tags to operate in restricted mode.", color: "bg-blue-500" },
  { num: "2", title: "Display consent banner", desc: "Show your cookie consent banner. PrivacyCrumb handles this automatically with the correct Consent Mode integration.", color: "bg-purple-500" },
  { num: "3", title: "User makes a choice", desc: "When the user accepts, rejects, or customizes consent, PrivacyCrumb sends a consent 'update' signal to Google tags.", color: "bg-amber-500" },
  { num: "4", title: "Google tags adjust behavior", desc: "Google tags immediately adjust: consented tags fire normally, denied tags switch to cookieless pings for conversion modeling.", color: "bg-emerald-500" },
  { num: "5", title: "Conversion modeling fills gaps", desc: "GA4 and Google Ads use machine learning to model conversions from users who denied consent. You retain ~70% of data.", color: "bg-coral" },
];

const signals = [
  { signal: "analytics_storage", denied: "GA4 sends cookieless pings. Behavioral modeling fills gaps.", granted: "Full GA4 tracking with cookies." },
  { signal: "ad_storage", denied: "No advertising cookies. Conversion modeling active.", granted: "Full ad tracking and conversion measurement." },
  { signal: "ad_user_data", denied: "No user data sent to Google for ads.", granted: "User data shared for ad optimization." },
  { signal: "ad_personalization", denied: "No remarketing. Lists not updated.", granted: "Full remarketing and personalization." },
];

const v1vsV2 = [
  { aspect: "Required signals", v1: "analytics_storage, ad_storage", v2: "analytics_storage, ad_storage, ad_user_data, ad_personalization" },
  { aspect: "EEA requirement", v1: "Optional", v2: "Required since March 2024" },
  { aspect: "Data modeling", v1: "Basic conversion modeling", v2: "Enhanced behavioral + conversion modeling" },
  { aspect: "DMA compliance", v1: "Not sufficient", v2: "Meets Digital Markets Act requirements" },
];

export default function ConsentModeV2Page() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">Technical</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Google Consent Mode v2 Explained</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Visual guide to implementing Google Consent Mode v2 — consent signals, tag behavior, and data modeling.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* How It Works */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5">How it works</h2></FadeIn>
            <div className="relative mb-10">
              <div className="absolute left-[19px] top-8 bottom-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-4">
                {howItWorks.map((s, i) => (
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

            {/* Signal Behavior */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Signal behavior</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Signal</th><th className="px-4 py-3 font-semibold text-red-500">When Denied</th><th className="px-4 py-3 font-semibold text-emerald-500">When Granted</th></tr></thead>
                  <tbody>
                    {signals.map((s, i) => (
                      <tr key={s.signal} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-mono text-coral">{s.signal}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{s.denied}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{s.granted}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* v1 vs v2 */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">v1 vs v2</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Aspect</th><th className="px-4 py-3 font-semibold text-neutral-400">v1</th><th className="px-4 py-3 font-semibold text-coral">v2</th></tr></thead>
                  <tbody>
                    {v1vsV2.map((c, i) => (
                      <tr key={c.aspect} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">{c.aspect}</td>
                        <td className="px-4 py-3 text-neutral-400">{c.v1}</td>
                        <td className="px-4 py-3 text-neutral-600 dark:text-neutral-300">{c.v2}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/roi-compliance" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">ROI of Compliance</p></div>
                </a>
                <a href="/index-23/infographics/compliant-banner-anatomy" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Compliant Banner Anatomy</p></div>
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
