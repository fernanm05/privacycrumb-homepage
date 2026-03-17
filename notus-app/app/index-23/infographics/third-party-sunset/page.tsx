"use client";
import { ArrowLeft, ArrowRight, Clock, MonitorSmartphone, AlertTriangle, CheckCircle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const timeline = [
  { year: "2020", event: "Google announces plan to phase out third-party cookies in Chrome within 2 years.", status: "Announced", color: "bg-blue-500" },
  { year: "2021", event: "Safari (ITP) and Firefox (ETP) already block third-party cookies by default.", status: "Completed", color: "bg-emerald-500" },
  { year: "2022", event: "Google delays deprecation to 2024. Privacy Sandbox APIs enter testing.", status: "Delayed", color: "bg-amber-500" },
  { year: "2023", event: "Chrome starts testing 'Tracking Protection' with 1% of users. Topics API and Attribution Reporting API trials.", status: "Testing", color: "bg-purple-500" },
  { year: "2024", event: "Google reverses course — won't deprecate third-party cookies. Instead, offers users a new 'informed choice' prompt.", status: "Reversed", color: "bg-red-500" },
  { year: "2025+", event: "Third-party cookies remain in Chrome but face increasing user awareness and opt-out. Privacy-first alternatives gain adoption.", status: "Evolving", color: "bg-teal-500" },
];

const alternatives = [
  { name: "Google Topics API", desc: "Browser observes browsing activity locally and shares interest topics (not granular history) with advertisers.", status: "Active" },
  { name: "Attribution Reporting API", desc: "Measures ad conversions without cross-site tracking. Uses aggregated, delayed reporting.", status: "Active" },
  { name: "First-Party Data", desc: "Collect consented data directly from users — email signups, preferences, purchase history.", status: "Best Practice" },
  { name: "Server-Side Tracking", desc: "Move tracking from client (browser) to server. Reduces cookie dependency but still requires consent.", status: "Growing" },
  { name: "Contextual Advertising", desc: "Target ads based on page content, not user history. Privacy-friendly and doesn't require cookies.", status: "Growing" },
  { name: "Data Clean Rooms", desc: "Secure environments where advertisers and publishers share data without exposing individual records.", status: "Enterprise" },
];

const impacts = [
  "Retargeting campaigns will become less effective without cookie-based tracking",
  "First-party data strategies become essential for personalized marketing",
  "Google Consent Mode v2 enables conversion modeling even without cookies",
  "Cross-site measurement shifts to privacy-preserving APIs",
  "Cookie consent management remains critical — first-party cookies still require consent under GDPR",
];

export default function ThirdPartySunsetPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Technical</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Third-Party Cookie Sunset Timeline</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Visual timeline of the deprecation of third-party cookies and what it means for your website.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Timeline */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5">Timeline</h2></FadeIn>
            <div className="relative mb-10">
              <div className="absolute left-[19px] top-8 bottom-8 w-px bg-neutral-200 dark:bg-neutral-800" />
              <div className="space-y-4">
                {timeline.map((t, i) => (
                  <FadeIn key={t.year} delay={i * 0.04}>
                    <div className="flex gap-4 relative">
                      <div className={`w-10 h-10 rounded-xl ${t.color} flex items-center justify-center shrink-0 z-10`}><span className="text-white text-[10px] font-bold">{t.year}</span></div>
                      <div className="flex-1 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                        <div className="flex items-center gap-2 mb-1"><span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${t.status === "Completed" ? "bg-emerald-500/10 text-emerald-500" : t.status === "Reversed" ? "bg-red-500/10 text-red-500" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500"}`}>{t.status}</span></div>
                        <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">{t.event}</p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Alternatives */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Privacy-first alternatives</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {alternatives.map((a, i) => (
                <FadeIn key={a.name} delay={i * 0.04}>
                  <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-1"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{a.name}</h3><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium ml-auto">{a.status}</span></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{a.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Impact */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">What this means for you</h2>
              <div className="space-y-2 mb-10">
                {impacts.map((impact) => (
                  <div key={impact} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><AlertTriangle size={14} className="text-amber-500 shrink-0 mt-0.5" />{impact}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/banner-best-practices" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Banner Best Practices</p></div>
                </a>
                <a href="/index-23/infographics/roi-compliance" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">ROI of Compliance</p></div>
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
