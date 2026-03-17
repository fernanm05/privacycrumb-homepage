"use client";
import { ArrowLeft, ArrowRight, Clock, FileText, CheckCircle, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const elements = [
  { num: "1", title: "Clear Title", desc: "A concise heading like 'We use cookies' or 'Your Privacy Choices'. Must be prominent and immediately visible.", required: true },
  { num: "2", title: "Purpose Description", desc: "Brief explanation of WHY you use cookies. 1-2 sentences. Avoid legal jargon — use plain language accessible to everyone.", required: true },
  { num: "3", title: "Cookie Category List", desc: "Breakdown of cookie categories: Necessary, Functional, Analytics, Marketing. Each must have a description and be individually toggleable.", required: true },
  { num: "4", title: "Accept All Button", desc: "A clearly labeled button to accept all cookies. Should be visible without scrolling.", required: true },
  { num: "5", title: "Reject All Button", desc: "A button to reject all non-essential cookies. Must have EQUAL VISUAL PROMINENCE to Accept — same size, same contrast.", required: true },
  { num: "6", title: "Manage Preferences", desc: "A link or button to open granular cookie category settings. Can be in the banner or as a separate layer.", required: true },
  { num: "7", title: "Privacy Policy Link", desc: "A link to your full cookie policy / privacy policy. Must be accessible from the banner at all times.", required: true },
  { num: "8", title: "Third-Party Disclosure", desc: "List any third parties that set cookies (Google, Facebook, etc.). Required under GDPR transparency principle.", required: true },
  { num: "9", title: "Cookie Duration Info", desc: "Disclose how long cookies last. Can be in the detailed policy rather than the banner itself.", required: false },
  { num: "10", title: "Withdraw Consent Link", desc: "A persistent link (typically in the footer) allowing users to change their consent at any time.", required: true },
];

const commonMistakes = [
  "Making 'Reject' button smaller, less colorful, or harder to find than 'Accept'",
  "Using pre-ticked checkboxes for non-essential cookie categories",
  "Not offering granular category selection (only 'Accept All' or 'Reject All')",
  "Loading cookies before the user interacts with the banner",
  "Using vague language like 'by continuing to browse this site, you agree...'",
  "Not providing a way to withdraw consent after the initial choice",
  "Failing to list third-party cookies and their providers",
];

export default function CompliantBannerAnatomyPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500">Best Practices</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Anatomy of a Compliant Cookie Banner</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Dissecting every element of a legally compliant cookie banner — required buttons, text, and disclosures.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Elements */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-5">10 elements of a compliant banner</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {elements.map((e, i) => (
                <FadeIn key={e.num} delay={i * 0.03}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-8 h-8 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0"><span className="text-cyan-500 text-xs font-bold">{e.num}</span></div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white">{e.title}</h3>
                        <span className={`text-[9px] px-1.5 py-0.5 rounded-full font-medium ${e.required ? "bg-red-500/10 text-red-500" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-400"}`}>{e.required ? "Required" : "Recommended"}</span>
                      </div>
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{e.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Common Mistakes */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Common compliance mistakes</h2>
              <div className="p-5 rounded-2xl border border-red-200/50 dark:border-red-900/30 bg-red-50/30 dark:bg-red-950/10 mb-10">
                <div className="space-y-2">
                  {commonMistakes.map((m) => (
                    <div key={m} className="flex items-start gap-2 text-[12px] text-neutral-600 dark:text-neutral-400"><AlertTriangle size={10} className="text-red-500 shrink-0 mt-0.5" />{m}</div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/consent-mode-v2" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Consent Mode v2 Explained</p></div>
                </a>
                <a href="/index-23/infographics/gdpr-fines" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">GDPR Fines & Enforcement</p></div>
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
