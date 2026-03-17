"use client";
import { ArrowLeft, ArrowRight, Clock, Lock, TrendingUp, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const topFines = [
  { rank: "1", company: "Meta (Facebook)", amount: "€1.2B", year: "2023", country: "Ireland", reason: "Unauthorized transfer of EU personal data to the US without adequate safeguards." },
  { rank: "2", company: "Amazon", amount: "€746M", year: "2021", country: "Luxembourg", reason: "Processing personal data for targeted advertising without valid consent." },
  { rank: "3", company: "TikTok", amount: "€345M", year: "2023", country: "Ireland", reason: "Children's data processing violations and default public privacy settings." },
  { rank: "4", company: "WhatsApp", amount: "€225M", year: "2021", country: "Ireland", reason: "Lack of transparency about how data is shared with Meta group companies." },
  { rank: "5", company: "Google (France)", amount: "€150M", year: "2022", country: "France", reason: "Making cookie rejection more difficult than acceptance on google.fr and youtube.com." },
  { rank: "6", company: "H&M", amount: "€35M", year: "2020", country: "Germany", reason: "Extensive employee surveillance and recording personal details about workers." },
  { rank: "7", company: "Clearview AI", amount: "€20M", year: "2022", country: "Italy/France/UK", reason: "Scraping facial images from the internet without consent for biometric processing." },
  { rank: "8", company: "British Airways", amount: "€22M", year: "2020", country: "UK", reason: "Data breach affecting 400,000+ customers' payment data." },
];

const enforcementTrends = [
  { stat: "€4.4B+", label: "Total fines since 2018" },
  { stat: "1,800+", label: "Enforcement actions" },
  { stat: "94%", label: "Increase in fines year-over-year (2022→2023)" },
  { stat: "Cookie consent", label: "Most common violation type" },
];

const whatTriggers = [
  "User complaints to Data Protection Authorities (most common trigger)",
  "Cookie consent violations — incorrect implementation or dark patterns",
  "Data breach notifications under Article 33",
  "Cross-border data transfers without adequate safeguards",
  "Failure to respond to data subject access requests (DSARs)",
  "Lack of Data Protection Impact Assessment (DPIA) for high-risk processing",
  "No Data Processing Agreement (DPA) with third-party processors",
];

export default function GdprFinesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-red-500/10 text-red-500">Regulations</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">GDPR Fines & Enforcement — By the Numbers</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">The largest GDPR fines to date, enforcement trends, and what triggers investigations.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
              {enforcementTrends.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.04}>
                  <div className="text-center p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="text-xl font-bold text-red-500">{s.stat}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{s.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Top Fines */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Top 8 largest fines</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {topFines.map((f, i) => (
                <FadeIn key={f.rank} delay={i * 0.03}>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0"><span className="text-red-500 text-xs font-bold">#{f.rank}</span></div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5"><h4 className="text-[13px] font-semibold text-neutral-900 dark:text-white">{f.company}</h4><span className="text-base font-bold text-red-500 ml-auto shrink-0">{f.amount}</span></div>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400 truncate">{f.reason}</p>
                      <p className="text-[10px] text-neutral-400">{f.country} · {f.year}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Triggers */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">What triggers investigations</h2>
              <div className="space-y-2 mb-10">
                {whatTriggers.map((t) => (
                  <div key={t} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><AlertTriangle size={14} className="text-red-500 shrink-0 mt-0.5" />{t}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/compliant-banner-anatomy" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Compliant Banner Anatomy</p></div>
                </a>
                <a href="/index-23/infographics/startup-checklist" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Startup Compliance Checklist</p></div>
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
