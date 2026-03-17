"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Globe, MapPin, Settings, Shield, Zap } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const setupSteps = [
  { num: "1", title: "Enable geo-targeting", content: "In your PrivacyCrumb dashboard, go to Settings → Geo-Targeting and toggle it on. This activates location-based banner behavior." },
  { num: "2", title: "Choose detection method", content: "PrivacyCrumb uses IP-based geolocation by default (no user permission required). Accuracy is country-level and state/province-level for major regions." },
  { num: "3", title: "Set up regional rules", content: "Create rules for specific regions. For example: show GDPR-style opt-in banners for EU visitors, CCPA-style opt-out for California, and a minimal notice for other regions." },
  { num: "4", title: "Configure banner per region", content: "Each regional rule can have its own banner layout, text, language, cookie categories, and blocking behavior. EU banners should block cookies by default; US banners may allow with opt-out." },
  { num: "5", title: "Set a fallback rule", content: "Define what happens when a visitor's location can't be determined. The safest approach is to use your strictest rule (usually GDPR) as the fallback." },
  { num: "6", title: "Test with location spoofing", content: "Use the dashboard's 'Preview as Region' tool to test how your banner appears for visitors from different locations. Verify each regional rule works correctly." },
];

const regionExamples = [
  { region: "EU / EEA", regulation: "GDPR + ePrivacy", behavior: "Opt-in required. Block all non-essential cookies until explicit consent. Show full category selection.", color: "text-blue-500 bg-blue-500/10" },
  { region: "California, USA", regulation: "CCPA / CPRA", behavior: "Opt-out model. Cookies can load by default. Show 'Do Not Sell or Share' link. Honor GPC signals.", color: "text-amber-500 bg-amber-500/10" },
  { region: "Brazil", regulation: "LGPD", behavior: "Consent-based. Show banner in Portuguese. Block non-essential cookies until consent. Display LGPD-compliant notices.", color: "text-green-500 bg-green-500/10" },
  { region: "Canada", regulation: "PIPEDA", behavior: "Implied consent with notice. Show informational banner. Provide opt-out mechanism for marketing cookies.", color: "text-red-500 bg-red-500/10" },
  { region: "Rest of World", regulation: "Varies", behavior: "Configurable fallback. Can match your strictest rule or show a simplified notice depending on your risk tolerance.", color: "text-neutral-500 bg-neutral-500/10" },
];

const benefits = [
  "Show the right consent experience for each visitor's jurisdiction",
  "Avoid over-blocking for regions with less strict requirements",
  "Display banners in the visitor's local language automatically",
  "Meet specific requirements like CCPA's 'Do Not Sell' link only for California",
  "Reduce consent fatigue by showing simpler banners where full opt-in isn't required",
  "Demonstrate compliance effort — regulators view geo-targeting favorably",
];

export default function GeoTargetingSetupPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500">Geo-Targeting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Geo-Targeting Setup Guide</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Configure location-based consent banners to show the right rules for each visitor&apos;s region.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setup steps</h2></FadeIn>
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

            {/* Region Examples */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Common regional configurations</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {regionExamples.map((r, i) => (
                <FadeIn key={r.region} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${r.color}`}><MapPin size={14} /></div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{r.region}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">{r.regulation}</span>
                    </div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{r.behavior}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Benefits */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Why use geo-targeting?</h2>
              <div className="space-y-2 mb-10">
                {benefits.map((b) => (
                  <div key={b} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{b}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/custom-regional-rules" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Custom Regional Rules</p></div>
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
