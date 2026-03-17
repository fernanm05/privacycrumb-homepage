"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Search, Globe, Cookie, Code, Layers, Zap, Eye } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const phases = [
  { num: "1", icon: Globe, title: "Page Crawling", content: "PrivacyCrumb opens each page of your website in a headless browser — just like a real visitor. It navigates through your site following internal links, visiting up to the configured max page limit." },
  { num: "2", icon: Search, title: "Cookie Detection", content: "On each page, the scanner checks for HTTP cookies (first-party and third-party), localStorage items, sessionStorage items, and IndexedDB entries. It captures each cookie's name, domain, path, and expiration." },
  { num: "3", icon: Code, title: "Script Analysis", content: "The scanner identifies third-party scripts that set cookies — Google Analytics, Facebook Pixel, HubSpot, Hotjar, etc. It maps which scripts are responsible for which cookies." },
  { num: "4", icon: Layers, title: "Auto-Categorization", content: "Each detected cookie is matched against PrivacyCrumb's database of 10,000+ known cookies. Recognized cookies are automatically categorized as Necessary, Functional, Analytics, or Marketing." },
  { num: "5", icon: Eye, title: "Report Generation", content: "A detailed scan report is generated showing every cookie found, its category, the page it was detected on, the script that set it, and whether it's first-party or third-party." },
];

const scanTypes = [
  { title: "Quick Scan", desc: "Scans your homepage and key landing pages. Fast results in under 30 seconds. Best for quick checks after code changes.", time: "~30s" },
  { title: "Standard Scan", desc: "Crawls up to 50 pages following internal links. Covers most typical websites. Runs in 1–2 minutes.", time: "1-2 min" },
  { title: "Deep Scan", desc: "Crawls up to 500 pages, including dynamically loaded content. Best for large sites with many templates and user flows.", time: "3-5 min" },
  { title: "Scheduled Scan", desc: "Automatically runs weekly or monthly to detect new cookies from code changes or third-party script updates. Email alerts on new findings.", time: "Auto" },
];

const detectionCapabilities = [
  "HTTP cookies (first-party and third-party)",
  "Secure and HttpOnly cookies",
  "Session cookies and persistent cookies",
  "localStorage and sessionStorage items",
  "IndexedDB databases",
  "Tracking pixels and web beacons",
  "Third-party script identification",
  "Cookie duration and expiration tracking",
];

export default function HowCookieScanningWorksPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Cookie Management</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">How Cookie Scanning Works</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Deep dive into PrivacyCrumb&apos;s automated scanner — how it detects, classifies, and reports cookies on your website.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Scanning Process */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">The scanning process</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {phases.map((p, i) => (
                <FadeIn key={p.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><p.icon size={16} className="text-coral" /></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">Step {p.num}: {p.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Scan Types */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Scan types</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {scanTypes.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center justify-between mb-2"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{s.title}</h3><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{s.time}</span></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Detection Capabilities */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">What we detect</h2>
              <div className="space-y-2 mb-10">
                {detectionCapabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0" />{item}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/cookie-categories" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Cookie Categories Explained</p></div>
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
