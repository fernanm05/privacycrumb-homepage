"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, BarChart3, TrendingUp, PieChart, Users, Calendar, Globe } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const dashboardWidgets = [
  { icon: TrendingUp, title: "Consent Rate Over Time", desc: "A line chart showing your daily, weekly, or monthly consent rate (% of visitors who accepted at least one non-essential category). Track trends and measure the impact of banner changes." },
  { icon: PieChart, title: "Consent Breakdown", desc: "A donut chart showing the percentage of visitors who: Accepted All, Rejected All, Made Custom Choices, or Ignored the Banner. Aim for >70% interaction rate." },
  { icon: BarChart3, title: "Category Acceptance Rates", desc: "A bar chart showing opt-in rates per cookie category (Functional, Analytics, Marketing). Marketing cookies typically have the lowest acceptance rate (30-50%)." },
  { icon: Users, title: "Visitor Segments", desc: "Breakdown by new vs returning visitors. Returning visitors who already consented won't see the banner again, so they don't affect your current consent rate." },
  { icon: Globe, title: "Consent by Region", desc: "A map or table showing consent rates by country or region. EU visitors typically have lower acceptance rates than US visitors due to stricter GDPR banners." },
  { icon: Calendar, title: "Consent Expiry Tracker", desc: "Shows how many consent records are expiring in the next 30, 60, and 90 days. Expired consent means visitors will see the banner again." },
];

const keyMetrics = [
  { metric: "Overall Consent Rate", desc: "Percentage of visitors who gave any form of consent", benchmark: "60-80%" },
  { metric: "Full Accept Rate", desc: "Percentage who clicked 'Accept All'", benchmark: "40-65%" },
  { metric: "Full Reject Rate", desc: "Percentage who clicked 'Reject All'", benchmark: "10-25%" },
  { metric: "Custom Consent Rate", desc: "Percentage who used 'Manage Preferences'", benchmark: "5-15%" },
  { metric: "Bounce Rate Impact", desc: "How much the banner affects page bounce rate", benchmark: "<5% increase" },
  { metric: "Time to Decision", desc: "Average seconds between banner display and user action", benchmark: "3-8 seconds" },
  { metric: "Banner Ignore Rate", desc: "Visitors who navigated away without interacting", benchmark: "<20%" },
];

const tips = [
  "Check your consent analytics weekly to spot trends and issues early",
  "If your reject rate is above 30%, test a different banner layout or copy",
  "Compare consent rates before and after banner changes to measure impact",
  "Use region-level data to identify countries where consent rates are unusually low",
  "A/B test banner variants and use the analytics dashboard to pick the winner",
  "Monitor the consent expiry tracker to avoid sudden drops in consent coverage",
];

export default function ConsentAnalyticsDashboardPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500">Analytics & Reporting</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Consent Analytics Dashboard</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Understanding your consent rates, opt-in vs opt-out trends, and visitor interaction metrics.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Dashboard Widgets */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Dashboard widgets</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {dashboardWidgets.map((w, i) => (
                <FadeIn key={w.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center"><w.icon size={14} className="text-indigo-500" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{w.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{w.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Key Metrics Table */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Key metrics & benchmarks</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Metric</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th><th className="px-4 py-3 font-semibold text-coral">Industry Benchmark</th></tr></thead>
                  <tbody>
                    {keyMetrics.map((m, i) => (
                      <tr key={m.metric} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white whitespace-nowrap">{m.metric}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{m.desc}</td>
                        <td className="px-4 py-3 text-coral font-medium">{m.benchmark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Tips */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Tips</h2>
              <div className="space-y-2 mb-10">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/consent-log" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Consent Log & Audit Trail</p></div>
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
