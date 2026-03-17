"use client";
import { ArrowLeft, ArrowRight, Clock, Shield, Settings, BarChart3, Megaphone, CheckCircle, AlertCircle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const categories = [
  {
    icon: Shield, name: "Strictly Necessary", color: "text-emerald-500 bg-emerald-500/10", borderColor: "border-emerald-200/50 dark:border-emerald-900/30",
    desc: "These cookies are essential for the website to function. Without them, the site would not work correctly. They cannot be disabled.",
    examples: [
      { name: "pc_consent", purpose: "Stores the user's cookie consent preferences", duration: "1 year", type: "First-party" },
      { name: "pc_session", purpose: "Maintains the user session state", duration: "Session", type: "First-party" },
      { name: "CSRF-Token", purpose: "Prevents cross-site request forgery attacks", duration: "Session", type: "First-party" },
    ],
    consent: "Not required — these are exempt under GDPR Article 6(1)(f) and ePrivacy Article 5(3).",
  },
  {
    icon: Settings, name: "Functional", color: "text-blue-500 bg-blue-500/10", borderColor: "border-blue-200/50 dark:border-blue-900/30",
    desc: "Functional cookies enable enhanced features and personalization. They remember user preferences to improve the experience.",
    examples: [
      { name: "lang_pref", purpose: "Stores the user's language preference", duration: "1 year", type: "First-party" },
      { name: "theme_mode", purpose: "Stores light/dark mode preference", duration: "1 year", type: "First-party" },
      { name: "timezone", purpose: "Stores the detected timezone for localized content", duration: "Session", type: "First-party" },
    ],
    consent: "Required — users must opt in before these cookies are set.",
  },
  {
    icon: BarChart3, name: "Analytics", color: "text-amber-500 bg-amber-500/10", borderColor: "border-amber-200/50 dark:border-amber-900/30",
    desc: "Analytics cookies measure website traffic, user behavior, and performance. They help website owners understand how visitors interact with their site.",
    examples: [
      { name: "_ga", purpose: "Google Analytics — distinguishes unique users", duration: "2 years", type: "Third-party (Google)" },
      { name: "_gid", purpose: "Google Analytics — distinguishes users (24h)", duration: "24 hours", type: "Third-party (Google)" },
      { name: "_hjid", purpose: "Hotjar — unique user identifier", duration: "1 year", type: "Third-party (Hotjar)" },
    ],
    consent: "Required — users must opt in before these cookies are set.",
  },
  {
    icon: Megaphone, name: "Marketing / Advertising", color: "text-red-500 bg-red-500/10", borderColor: "border-red-200/50 dark:border-red-900/30",
    desc: "Marketing cookies track visitors across websites to build profiles and display targeted, personalized advertisements.",
    examples: [
      { name: "_fbp", purpose: "Facebook Pixel — tracks conversions and builds audiences", duration: "3 months", type: "Third-party (Meta)" },
      { name: "IDE", purpose: "Google DoubleClick — ad targeting and retargeting", duration: "1 year", type: "Third-party (Google)" },
      { name: "fr", purpose: "Facebook — ad delivery and measurement", duration: "3 months", type: "Third-party (Meta)" },
    ],
    consent: "Required — users must opt in before these cookies are set. Most privacy regulations treat these as the highest-risk category.",
  },
];

export default function CookieCategoriesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Cookie Management</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Cookie Categories Explained</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Understanding the four standard cookie categories: Necessary, Functional, Analytics, and Marketing.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">PrivacyCrumb uses four standard categories recognized by GDPR, ePrivacy, and most global privacy regulations. Each category has different consent requirements and risk levels.</p></FadeIn>

            <div className="space-y-6 mb-10">
              {categories.map((cat, ci) => (
                <FadeIn key={cat.name} delay={ci * 0.05}>
                  <div className={`rounded-2xl border ${cat.borderColor} overflow-hidden`}>
                    <div className="p-5 bg-white dark:bg-neutral-900">
                      <div className="flex items-center gap-2.5 mb-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${cat.color}`}><cat.icon size={16} /></div>
                        <h2 className="text-base font-semibold text-neutral-900 dark:text-white">{cat.name}</h2>
                      </div>
                      <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">{cat.desc}</p>

                      {/* Example table */}
                      <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-3">
                        <table className="w-full text-left text-[11px]">
                          <thead><tr className="bg-neutral-50 dark:bg-neutral-800"><th className="px-3 py-2 font-semibold text-neutral-700 dark:text-neutral-300">Cookie</th><th className="px-3 py-2 font-semibold text-neutral-700 dark:text-neutral-300">Purpose</th><th className="px-3 py-2 font-semibold text-neutral-700 dark:text-neutral-300">Duration</th><th className="px-3 py-2 font-semibold text-neutral-700 dark:text-neutral-300">Type</th></tr></thead>
                          <tbody>
                            {cat.examples.map((e) => (
                              <tr key={e.name} className="border-t border-neutral-200/80 dark:border-neutral-800">
                                <td className="px-3 py-2 font-mono text-coral">{e.name}</td>
                                <td className="px-3 py-2 text-neutral-500 dark:text-neutral-400">{e.purpose}</td>
                                <td className="px-3 py-2 text-neutral-500 dark:text-neutral-400">{e.duration}</td>
                                <td className="px-3 py-2 text-neutral-500 dark:text-neutral-400">{e.type}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>

                      <div className="flex items-start gap-2 text-[12px]">
                        <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-neutral-500 dark:text-neutral-400"><strong className="text-neutral-900 dark:text-white">Consent:</strong> {cat.consent}</span>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/how-cookie-scanning-works" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">How Cookie Scanning Works</p></div>
                </a>
                <a href="/index-23/knowledge-base/auto-blocking" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Auto-Blocking Configuration</p></div>
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
