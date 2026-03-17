"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Shield, AlertTriangle, Globe, Settings } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const fallbackStrategies = [
  {
    title: "Strict (GDPR) — Recommended",
    tag: "Safest",
    desc: "Use your most restrictive rule as the fallback. Block all non-essential cookies and require opt-in consent. This is the safest option since it complies with the strictest global regulations.",
    pros: ["Maximum legal protection", "Works for any jurisdiction", "No risk of non-compliance"],
    cons: ["May reduce consent rates in less-regulated regions", "Slightly more intrusive for non-EU visitors"],
  },
  {
    title: "Moderate (Notice + Opt-Out)",
    tag: "Balanced",
    desc: "Show an informational notice with an opt-out option. Cookies load by default but users can opt out. Suitable for regions without strict consent requirements.",
    pros: ["Higher consent/acceptance rates", "Less intrusive user experience", "Good for US-focused sites"],
    cons: ["May not satisfy GDPR if an EU visitor's location isn't detected", "Some legal risk for edge cases"],
  },
  {
    title: "Minimal (Notice Only)",
    tag: "Least Intrusive",
    desc: "Show a simple cookie notice without blocking any cookies. No consent mechanism — just an acknowledgment. Only appropriate if you're confident no regulated visitors use your site.",
    pros: ["Zero impact on user experience", "No drop in analytics data", "Simplest implementation"],
    cons: ["Not compliant with GDPR, LGPD, or most modern privacy laws", "High legal risk", "Not recommended for international sites"],
  },
];

const failureScenarios = [
  { scenario: "VPN or proxy users", desc: "Visitors using VPNs may appear to be in a different country. The fallback rule handles cases where detected location differs from actual location." },
  { scenario: "Corporate firewalls", desc: "Some corporate networks route traffic through centralized IP addresses, making geolocation inaccurate." },
  { scenario: "Mobile networks", desc: "Mobile carriers sometimes route traffic through centralized gateways. An EU visitor's traffic might appear from a US IP." },
  { scenario: "Geolocation service downtime", desc: "If the geolocation API is temporarily unavailable, the fallback rule ensures visitors still see a consent banner." },
  { scenario: "Tor / anonymous browsing", desc: "Tor exit nodes can be in any country. The fallback rule covers visitors whose location can't be reliably determined." },
];

const configSteps = [
  { num: "1", title: "Go to Settings → Geo-Targeting → Fallback Rule", content: "Open your domain's geo-targeting settings and scroll to the 'Default / Fallback Rule' section." },
  { num: "2", title: "Choose a strategy", content: "Select Strict, Moderate, or Minimal based on your risk tolerance and audience. For international sites, Strict (GDPR) is strongly recommended." },
  { num: "3", title: "Configure the fallback banner", content: "Set the banner layout, text, language, and blocking behavior for the fallback rule. It should be a standalone, complete consent experience." },
  { num: "4", title: "Test the fallback", content: "In the dashboard, use 'Preview as Region → Unknown' to see the fallback experience. Verify it works as expected." },
];

export default function FallbackRulesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500">Geo-Targeting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 3 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Fallback & Default Rules</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Set up fallback rules for visitors whose location can&apos;t be determined.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">The fallback rule is your safety net. It kicks in when PrivacyCrumb can&apos;t determine a visitor&apos;s location, or when no regional rule matches. Choosing the right fallback strategy is critical for compliance.</p></FadeIn>

            {/* Strategies */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Fallback strategies</h2></FadeIn>
            <div className="space-y-4 mb-10">
              {fallbackStrategies.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{s.title}</h3><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{s.tag}</span></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{s.desc}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] font-semibold text-emerald-500 uppercase mb-1">Pros</p>
                        {s.pros.map((p) => (<div key={p} className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mb-1"><CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{p}</div>))}
                      </div>
                      <div>
                        <p className="text-[10px] font-semibold text-amber-500 uppercase mb-1">Cons</p>
                        {s.cons.map((c) => (<div key={c} className="flex items-start gap-1.5 text-[11px] text-neutral-500 dark:text-neutral-400 mb-1"><AlertTriangle size={10} className="text-amber-500 shrink-0 mt-0.5" />{c}</div>))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Failure scenarios */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">When does the fallback trigger?</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {failureScenarios.map((f, i) => (
                <FadeIn key={f.scenario} delay={i * 0.03}>
                  <div className="flex gap-3 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <Globe size={14} className="text-teal-500 shrink-0 mt-0.5" />
                    <div><span className="text-[12px] font-semibold text-neutral-900 dark:text-white">{f.scenario}</span><span className="text-[12px] text-neutral-500 dark:text-neutral-400"> — {f.desc}</span></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Config Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Configuration</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {configSteps.map((s, i) => (
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
                <a href="/index-23/knowledge-base/custom-regional-rules" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Custom Regional Rules</p></div>
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
