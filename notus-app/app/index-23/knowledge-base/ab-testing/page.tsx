"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, BarChart3, Zap, Target, TrendingUp, AlertTriangle, FlaskConical } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const testableElements = [
  { icon: Target, title: "Banner Layout", desc: "Compare bottom bar vs center modal vs corner popup. Layout has the biggest impact on consent rates — modal layouts typically achieve 20-40% higher opt-in." },
  { icon: Zap, title: "Button Text & Colors", desc: "Test 'Accept All' vs 'I Agree' vs 'Allow Cookies'. Try different button colors, sizes, and contrast ratios. Small wording changes can move consent rates by 5-15%." },
  { icon: TrendingUp, title: "Copy & Messaging", desc: "Test friendly vs formal tone. Try shorter vs longer descriptions. Test whether mentioning specific benefits ('personalized experience') increases consent." },
  { icon: BarChart3, title: "Button Arrangement", desc: "Test side-by-side vs stacked buttons. Test whether adding a 'Manage Preferences' link alongside Accept/Reject changes behavior." },
];

const setupSteps = [
  { num: "1", title: "Go to Banner Settings → A/B Testing", content: "Navigate to your domain's Banner Settings tab and open A/B Testing. This feature is available on Pro and Enterprise plans." },
  { num: "2", title: "Create a new test", content: "Click 'New Test'. Name your test (e.g., 'Modal vs Bottom Bar') and select the element you want to test: layout, button text, colors, or copy." },
  { num: "3", title: "Configure variants", content: "Set up your A variant (control — your current banner) and B variant (the change you want to test). You can preview both variants before starting." },
  { num: "4", title: "Set traffic split", content: "Choose the traffic split — 50/50 is recommended for fastest results. You can also try 80/20 if you want to minimize exposure to the test variant." },
  { num: "5", title: "Set duration & sample size", content: "Define how long the test should run. PrivacyCrumb recommends a minimum of 1,000 visitors per variant for statistically significant results." },
  { num: "6", title: "Start the test", content: "Click 'Start Test'. PrivacyCrumb will randomly assign visitors to variant A or B and track consent rate, interactions, and time to decision." },
];

const metrics = [
  { name: "Consent Rate", desc: "Percentage of visitors who click 'Accept All'. The primary metric for most tests." },
  { name: "Reject Rate", desc: "Percentage of visitors who click 'Reject All'. Lower reject rates mean better banner experience." },
  { name: "Interaction Rate", desc: "Percentage of visitors who interact with the banner at all (vs. ignoring it)." },
  { name: "Time to Decision", desc: "Average time between banner display and user action. Shorter = better UX." },
  { name: "Custom Consent Rate", desc: "Percentage who click 'Manage Preferences' and make granular choices." },
  { name: "Statistical Significance", desc: "PrivacyCrumb calculates confidence level — aim for 95%+ before declaring a winner." },
];

export default function AbTestingPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500">Banner Customization</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 7 min read</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">Pro</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">A/B Testing Consent Rates</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Test different banner designs, copy, and positions to maximize consent rates while staying compliant.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* What to Test */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What you can test</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {testableElements.map((t, i) => (
                <FadeIn key={t.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><t.icon size={14} className="text-coral" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{t.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Setup Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">How to run an A/B test</h2></FadeIn>
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

            {/* Metrics */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Metrics tracked</h2></FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Metric</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th></tr></thead>
                  <tbody>
                    {metrics.map((m, i) => (
                      <tr key={m.name} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white whitespace-nowrap">{m.name}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{m.desc}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Compliance Note */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-amber-500" /> Compliance note</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">While optimizing consent rates is valuable, all test variants must remain GDPR-compliant. Both Accept and Reject buttons must have equal prominence. Cookie walls (blocking access until consent) are not permitted in most EU jurisdictions. PrivacyCrumb validates all test variants for compliance before starting.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/multi-language-banners" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Multi-Language Banners</p></div>
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
