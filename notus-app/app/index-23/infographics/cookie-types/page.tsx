"use client";
import { ArrowLeft, ArrowRight, Clock, Cookie, CheckCircle, Shield, BarChart3, Megaphone, Settings } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const categories = [
  {
    icon: Shield, title: "Necessary Cookies", color: "text-emerald-500 bg-emerald-500/10",
    consent: "Not required — always active",
    desc: "Essential for the website to function. Without these, basic features like page navigation, security, and form submissions won't work.",
    examples: [
      { name: "session_id", purpose: "Maintains user session", duration: "Session" },
      { name: "csrf_token", purpose: "Prevents cross-site request forgery", duration: "Session" },
      { name: "cookie_consent", purpose: "Stores user's consent preferences", duration: "1 year" },
    ],
  },
  {
    icon: Settings, title: "Functional Cookies", color: "text-blue-500 bg-blue-500/10",
    consent: "Consent required",
    desc: "Enable enhanced features and personalization. The site works without them, but with reduced functionality.",
    examples: [
      { name: "language_pref", purpose: "Remembers language selection", duration: "1 year" },
      { name: "theme_mode", purpose: "Stores dark/light mode preference", duration: "6 months" },
      { name: "video_quality", purpose: "Remembers video playback settings", duration: "30 days" },
    ],
  },
  {
    icon: BarChart3, title: "Analytics Cookies", color: "text-purple-500 bg-purple-500/10",
    consent: "Consent required",
    desc: "Track how visitors use the website — page views, bounce rates, traffic sources. Data is typically aggregated and pseudonymized.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — distinguishes users", duration: "2 years" },
      { name: "_ga_XXXXX", purpose: "Google Analytics 4 — session state", duration: "2 years" },
      { name: "hubspot_utk", purpose: "HubSpot — tracks visitor identity", duration: "13 months" },
    ],
  },
  {
    icon: Megaphone, title: "Marketing Cookies", color: "text-red-500 bg-red-500/10",
    consent: "Consent required",
    desc: "Used for advertising, retargeting, and tracking across websites. These cookies follow users across the internet to serve targeted ads.",
    examples: [
      { name: "_fbp", purpose: "Facebook Pixel — ad targeting", duration: "3 months" },
      { name: "IDE", purpose: "Google DoubleClick — ad serving", duration: "13 months" },
      { name: "li_sugr", purpose: "LinkedIn — ad tracking", duration: "3 months" },
    ],
  },
];

export default function CookieTypesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Technical</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Cookie Types & Categories Explained</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Visual breakdown of Necessary, Functional, Analytics, and Marketing cookies — what they do and why they matter.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 mb-10">
              {categories.map((cat, i) => (
                <FadeIn key={cat.title} delay={i * 0.05}>
                  <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <div className="p-5 border-b border-neutral-200/80 dark:border-neutral-800">
                      <div className="flex items-center gap-2 mb-2">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color}`}><cat.icon size={16} /></div>
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">{cat.title}</h2>
                        <span className={`text-[10px] px-2 py-0.5 rounded-full font-medium ml-auto ${cat.consent === "Not required — always active" ? "bg-emerald-500/10 text-emerald-500" : "bg-amber-500/10 text-amber-500"}`}>{cat.consent}</span>
                      </div>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{cat.desc}</p>
                    </div>
                    <div className="p-4 bg-neutral-50/50 dark:bg-neutral-950/30">
                      <p className="text-[10px] font-semibold text-neutral-400 uppercase mb-2">Common examples</p>
                      <div className="space-y-1.5">
                        {cat.examples.map((e) => (
                          <div key={e.name} className="flex items-center gap-3 text-[11px]">
                            <code className="font-mono text-coral bg-coral/5 px-1.5 py-0.5 rounded shrink-0">{e.name}</code>
                            <span className="text-neutral-500 dark:text-neutral-400 flex-1">{e.purpose}</span>
                            <span className="text-neutral-400 shrink-0">{e.duration}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/gdpr-guide" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">GDPR Visual Guide</p></div>
                </a>
                <a href="/index-23/infographics/ccpa-vs-gdpr" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">CCPA vs GDPR</p></div>
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
