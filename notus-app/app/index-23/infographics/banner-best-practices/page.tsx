"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, X, Palette } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const dos = [
  "Use clear, plain language — avoid legal jargon",
  "Give equal visual weight to Accept and Reject buttons",
  "Allow granular category selection (not just 'all or nothing')",
  "Include a link to your full cookie/privacy policy",
  "Show the banner on every page until consent is given",
  "Make the banner dismissible without forcing a choice",
  "Use contrasting colors for buttons so they're easy to find",
  "Test banner readability on mobile devices",
  "Provide a persistent 'Cookie Settings' link in the footer",
  "Remember consent preferences for returning visitors",
];

const donts = [
  "Don't use dark patterns — no tiny 'Reject' buttons",
  "Don't pre-tick consent checkboxes (GDPR violation)",
  "Don't use cookie walls that block site access",
  "Don't use confusing double negatives ('Don't not allow')",
  "Don't hide the Reject option behind 'Manage Preferences'",
  "Don't make cookie information impossible to find",
  "Don't auto-dismiss the banner and assume consent",
  "Don't use nudging colors (green for Accept, gray for Reject)",
  "Don't load non-essential cookies before consent is given",
  "Don't require scrolling to find the Reject button",
];

const layoutTips = [
  { layout: "Bottom Bar", tip: "Least intrusive. Good for content-heavy sites. Consent rates: 45-60%." },
  { layout: "Center Modal", tip: "Highest consent rates (65-85%). Slightly more intrusive but ensures visibility." },
  { layout: "Corner Popup", tip: "Subtle and non-blocking. Good for returning visitors. Consent rates: 40-55%." },
  { layout: "Full-Screen", tip: "Used for strict GDPR compliance. Highest interaction rate but lowest satisfaction." },
];

export default function BannerBestPracticesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-500">Best Practices</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Cookie Banner Best Practices</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Design dos and don&apos;ts for consent banners — layout, copy, colors, and accessibility guidelines.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {/* Dos */}
              <FadeIn>
                <div className="rounded-2xl border border-emerald-200/50 dark:border-emerald-900/30 bg-emerald-50/30 dark:bg-emerald-950/10 p-5">
                  <h2 className="text-base font-semibold text-emerald-600 dark:text-emerald-400 mb-4 flex items-center gap-2"><CheckCircle size={16} /> Do</h2>
                  <div className="space-y-2.5">
                    {dos.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-[12px] text-neutral-600 dark:text-neutral-400"><CheckCircle size={10} className="text-emerald-500 shrink-0 mt-0.5" />{d}</div>
                    ))}
                  </div>
                </div>
              </FadeIn>
              {/* Don'ts */}
              <FadeIn delay={0.05}>
                <div className="rounded-2xl border border-red-200/50 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 p-5">
                  <h2 className="text-base font-semibold text-red-600 dark:text-red-400 mb-4 flex items-center gap-2"><X size={16} /> Don&apos;t</h2>
                  <div className="space-y-2.5">
                    {donts.map((d) => (
                      <div key={d} className="flex items-start gap-2 text-[12px] text-neutral-600 dark:text-neutral-400"><X size={10} className="text-red-500 shrink-0 mt-0.5" />{d}</div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Layout Tips */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Layout recommendations</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {layoutTips.map((l, i) => (
                <FadeIn key={l.layout} delay={i * 0.04}>
                  <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{l.layout}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{l.tip}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/privacy-map" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Global Privacy Map</p></div>
                </a>
                <a href="/index-23/infographics/third-party-sunset" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Third-Party Cookie Sunset</p></div>
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
