"use client";
import { ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle, Circle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const phases = [
  {
    title: "Phase 1: Foundation", color: "bg-blue-500",
    items: [
      { task: "Audit your current cookies", desc: "Run a cookie scan to identify every cookie on your site. Tools like PrivacyCrumb do this automatically." },
      { task: "Categorize all cookies", desc: "Sort into Necessary, Functional, Analytics, and Marketing. Remove any cookies you don't actually need." },
      { task: "Write a cookie policy", desc: "Create a clear, plain-language cookie policy listing each cookie, its purpose, provider, and duration." },
      { task: "Create a privacy policy", desc: "Ensure your privacy policy covers cookie usage, data processing, user rights, and contact information." },
    ],
  },
  {
    title: "Phase 2: Consent Setup", color: "bg-purple-500",
    items: [
      { task: "Install a consent management platform", desc: "Set up PrivacyCrumb or similar CMP. Add the script tag before any tracking scripts." },
      { task: "Configure cookie blocking", desc: "Block all non-essential cookies by default. Only load them after explicit user consent." },
      { task: "Design your consent banner", desc: "Create a clear, accessible banner with Accept All, Reject All, and Manage Preferences options." },
      { task: "Test on mobile devices", desc: "Verify the banner works on all screen sizes. Buttons must be tappable and text readable." },
    ],
  },
  {
    title: "Phase 3: Compliance & Monitoring", color: "bg-emerald-500",
    items: [
      { task: "Set up consent logging", desc: "Enable consent record storage. Every consent action must be logged with timestamp and consent ID." },
      { task: "Configure geo-targeting (if needed)", desc: "If you have international visitors, set up region-specific consent rules for GDPR, CCPA, etc." },
      { task: "Schedule regular cookie scans", desc: "Set up automated weekly or monthly scans to detect new cookies from third-party scripts." },
      { task: "Train your team", desc: "Ensure developers, marketers, and content managers understand cookie consent requirements." },
    ],
  },
  {
    title: "Phase 4: Maintain & Optimize", color: "bg-coral",
    items: [
      { task: "Review consent analytics monthly", desc: "Monitor consent rates, rejection rates, and banner interaction metrics. Optimize as needed." },
      { task: "Update for new regulations", desc: "Stay current with evolving privacy laws. Update consent flows when new regulations take effect." },
      { task: "Re-scan after site changes", desc: "Run a new cookie scan after adding third-party tools, plugins, or making significant site changes." },
      { task: "Document everything", desc: "Keep records of your compliance efforts for audits. Use consent logs and scan history as proof." },
    ],
  },
];

export default function StartupChecklistPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">Business</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Cookie Compliance Checklist for Startups</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">A visual step-by-step checklist to get your startup compliant with global cookie regulations.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-8 mb-10">
              {phases.map((phase, pi) => (
                <FadeIn key={phase.title} delay={pi * 0.05}>
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-8 h-8 rounded-xl ${phase.color} flex items-center justify-center`}><span className="text-white text-xs font-bold">{pi + 1}</span></div>
                      <h2 className="text-base font-semibold text-neutral-900 dark:text-white">{phase.title}</h2>
                    </div>
                    <div className="space-y-2 ml-11">
                      {phase.items.map((item) => (
                        <div key={item.task} className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                          <div className="flex items-start gap-2.5">
                            <Circle size={14} className="text-neutral-300 dark:text-neutral-600 shrink-0 mt-0.5" />
                            <div>
                              <h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{item.task}</h3>
                              <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/gdpr-fines" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">GDPR Fines & Enforcement</p></div>
                </a>
                <a href="/index-23/infographics" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Infographics</p></div>
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
