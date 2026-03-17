"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Layout, Monitor, Smartphone, Maximize, CornerDownRight, AlignVerticalJustifyEnd } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const layouts = [
  {
    icon: AlignVerticalJustifyEnd, name: "Bottom Bar", tag: "Most Popular",
    desc: "A horizontal banner fixed to the bottom of the viewport. Non-intrusive — visitors can continue browsing while it's visible. Best for most websites.",
    pros: ["Doesn't interrupt browsing flow", "High visibility without covering content", "Works well on mobile", "Best consent rates for default layouts"],
    config: "Dashboard → Banner Settings → Layout → Bottom Bar",
  },
  {
    icon: Layout, name: "Top Bar", tag: "",
    desc: "A horizontal banner fixed to the top of the viewport. Sits above the navigation. Grabs immediate attention but may push content down.",
    pros: ["Immediately visible on page load", "Works well for notification-style banners", "Clean look on desktop", "Can be set to push content or overlay"],
    config: "Dashboard → Banner Settings → Layout → Top Bar",
  },
  {
    icon: Maximize, name: "Center Modal", tag: "Highest Consent",
    desc: "A centered popup overlay with a dimmed background. Forces user interaction before they can use the site. Highest consent rates but most intrusive.",
    pros: ["Highest consent/opt-in rates", "Clear, focused consent experience", "Easy to show detailed cookie categories", "Best for GDPR strict compliance"],
    config: "Dashboard → Banner Settings → Layout → Center Modal",
  },
  {
    icon: CornerDownRight, name: "Corner Popup", tag: "",
    desc: "A compact popup in the bottom-left or bottom-right corner. Minimal and unobtrusive. Good for sites that want subtle cookie consent.",
    pros: ["Very unobtrusive", "Works well on desktop", "Compact design", "Good for sites with minimal cookie usage"],
    config: "Dashboard → Banner Settings → Layout → Corner Popup",
  },
  {
    icon: Monitor, name: "Full-Screen Overlay", tag: "",
    desc: "A full-screen takeover that requires consent before any content is shown. Maximum compliance but may impact user experience and bounce rate.",
    pros: ["Maximum compliance certainty", "No content visible without consent", "Clear consent categories layout", "Best for high-risk data processing"],
    config: "Dashboard → Banner Settings → Layout → Full-Screen",
  },
];

const mobileConsiderations = [
  "PrivacyCrumb automatically adapts banner layout for mobile screens",
  "Bottom Bar and Center Modal work best on mobile devices",
  "Corner Popup may be too small to read on phones — consider alternatives",
  "Full-Screen overlay is very effective on mobile but blocks the entire experience",
  "Touch-friendly buttons with minimum 44x44px tap targets are enforced automatically",
];

export default function BannerLayoutOptionsPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500">Banner Customization</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Banner Layout Options</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Choose from five banner layouts — bottom bar, top bar, center modal, corner popup, or full-screen overlay.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Layouts */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Available layouts</h2></FadeIn>
            <div className="space-y-4 mb-10">
              {layouts.map((l, i) => (
                <FadeIn key={l.name} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2.5 mb-2">
                      <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center"><l.icon size={16} className="text-purple-500" /></div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{l.name}</h3>
                      {l.tag && <span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{l.tag}</span>}
                    </div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{l.desc}</p>
                    <div className="grid grid-cols-2 gap-1 mb-3">
                      {l.pros.map((p) => (
                        <div key={p} className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400"><CheckCircle size={10} className="text-emerald-500 shrink-0" />{p}</div>
                      ))}
                    </div>
                    <p className="text-[11px] text-neutral-400 font-mono">{l.config}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Mobile */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2"><Smartphone size={16} className="text-coral" /> Mobile considerations</h2>
              <div className="space-y-2 mb-10">
                {mobileConsiderations.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{item}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/custom-css" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Styling with Custom CSS</p></div>
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
