"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, MapPin, Globe, Shield, Settings, Zap, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const ruleOptions = [
  { title: "Region Scope", desc: "Define the geographic scope: entire country, state/province, or custom region group. You can create rules for individual US states (e.g., California, Virginia, Colorado) or EU member states." },
  { title: "Consent Model", desc: "Choose between opt-in (cookies blocked until consent — GDPR), opt-out (cookies allowed until user opts out — CCPA), or notice-only (informational banner, no blocking)." },
  { title: "Banner Content", desc: "Customize the banner title, description, button text, and cookie policy link for each region. Use different wording for EU ('We use cookies…') vs US ('Your privacy choices')." },
  { title: "Cookie Blocking", desc: "Configure which cookie categories are blocked by default. GDPR regions should block Analytics and Marketing. CCPA regions may allow all with opt-out controls." },
  { title: "Language", desc: "Override the banner language for a region. Show French for France, German for Germany, Portuguese for Brazil — regardless of the visitor's browser language." },
  { title: "Banner Layout", desc: "Use different banner layouts per region. A modal for EU (highest consent rates), a bottom bar for US (less intrusive)." },
];

const exampleRules = [
  {
    name: "EU GDPR Rule",
    scope: "EU + EEA + UK (31 countries)",
    settings: ["Consent model: Opt-in (strict)", "Block: Analytics, Marketing, Functional", "Layout: Center Modal", "Language: Auto-detect", "Accept/Reject buttons: Equal prominence"],
  },
  {
    name: "California CCPA Rule",
    scope: "US — California only",
    settings: ["Consent model: Opt-out", "Block: None (allow by default)", "Show: 'Do Not Sell or Share' link", "Layout: Bottom Bar", "Honor GPC (Global Privacy Control) signal"],
  },
  {
    name: "US State Privacy Laws",
    scope: "Virginia, Colorado, Connecticut, Utah, Iowa",
    settings: ["Consent model: Opt-out", "Block: None (allow by default)", "Show: Privacy preferences link", "Layout: Bottom Bar", "Provide targeted advertising opt-out"],
  },
];

const setupSteps = [
  { num: "1", title: "Go to Settings → Geo-Targeting → Rules", content: "Navigate to your domain's geo-targeting settings and click '+ New Rule'." },
  { num: "2", title: "Name your rule", content: "Give the rule a descriptive name (e.g., 'EU GDPR — Strict Opt-In' or 'California CCPA — Opt-Out')." },
  { num: "3", title: "Select regions", content: "Use the region picker to select countries, states, or pre-built region groups (EU, EEA, US, APAC). You can select multiple regions for one rule." },
  { num: "4", title: "Configure consent behavior", content: "Set the consent model, blocking behavior, banner layout, language, and custom text for this rule." },
  { num: "5", title: "Set rule priority", content: "If a visitor matches multiple rules (e.g., EU + France-specific), the most specific rule takes precedence. Drag rules to reorder priority." },
  { num: "6", title: "Save and test", content: "Save the rule and use 'Preview as Region' to verify it works correctly for visitors from that region." },
];

export default function CustomRegionalRulesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500">Geo-Targeting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 7 min read</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">Pro</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Custom Regional Rules</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Create custom consent rules per country, state, or region with different banner content and blocking behavior.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* What you can configure */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What you can configure per rule</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {ruleOptions.map((o, i) => (
                <FadeIn key={o.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2">{o.title}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{o.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Example Rules */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Example rule configurations</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {exampleRules.map((r, i) => (
                <FadeIn key={r.name} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-1"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{r.name}</h3></div>
                    <p className="text-[11px] text-neutral-400 mb-3">Scope: {r.scope}</p>
                    <div className="space-y-1.5">
                      {r.settings.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-[12px] text-neutral-600 dark:text-neutral-400"><CheckCircle size={10} className="text-emerald-500 shrink-0" />{s}</div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Setup */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Creating a custom rule</h2></FadeIn>
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

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/geo-targeting-setup" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Geo-Targeting Setup Guide</p></div>
                </a>
                <a href="/index-23/knowledge-base/fallback-rules" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Fallback & Default Rules</p></div>
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
