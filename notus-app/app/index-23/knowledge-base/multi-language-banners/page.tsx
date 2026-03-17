"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Globe, Languages, Settings, Zap } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const supportedLanguages = [
  "English", "Spanish", "French", "German", "Italian", "Portuguese", "Dutch", "Polish",
  "Swedish", "Danish", "Norwegian", "Finnish", "Czech", "Romanian", "Hungarian", "Greek",
  "Bulgarian", "Croatian", "Slovak", "Slovenian", "Lithuanian", "Latvian", "Estonian",
  "Japanese", "Chinese (Simplified)", "Chinese (Traditional)", "Korean", "Arabic", "Turkish",
  "Thai", "Vietnamese", "Indonesian", "Malay", "Hindi",
];

const setupSteps = [
  { num: "1", title: "Go to Banner Settings → Languages", content: "In your PrivacyCrumb dashboard, navigate to your domain's Banner Settings and open the Languages tab." },
  { num: "2", title: "Enable multi-language", content: "Toggle 'Multi-Language Support' on. PrivacyCrumb will auto-detect your visitors' browser language and show the banner in their preferred language." },
  { num: "3", title: "Select active languages", content: "Choose which languages to enable. PrivacyCrumb provides default translations for all common consent text — Accept, Reject, Manage Preferences, cookie category names, etc." },
  { num: "4", title: "Customize translations", content: "Click any language to edit its translations. Customize button text, banner title, description, category names, and cookie policy link text to match your brand voice." },
  { num: "5", title: "Set a fallback language", content: "Choose the language to show when a visitor's browser language isn't in your active language list. English is the default fallback." },
];

const detectionMethods = [
  { title: "Browser Language (Default)", desc: "Reads the visitor's browser Accept-Language header. Most accurate for general use. No additional setup needed.", tag: "Recommended" },
  { title: "Geo-Location Based", desc: "Uses the visitor's IP-based location to determine language. Shows French to visitors from France, German to visitors from Germany, etc.", tag: "Pro" },
  { title: "URL Parameter", desc: "Reads a language parameter from the URL (e.g., ?lang=fr). Useful for sites with explicit language switching.", tag: "Advanced" },
  { title: "HTML Lang Attribute", desc: "Reads the lang attribute from the HTML tag (e.g., <html lang=\"de\">). Works well for sites with server-side language routing.", tag: "Advanced" },
];

export default function MultiLanguageBannersPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500">Banner Customization</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Multi-Language Banners</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Set up consent banners in multiple languages with automatic detection based on visitor location.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Setup Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setting up multi-language</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {setupSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Detection Methods */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Language detection methods</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {detectionMethods.map((m, i) => (
                <FadeIn key={m.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{m.title}</h3><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{m.tag}</span></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{m.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Supported Languages */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2"><Languages size={16} className="text-coral" /> Supported languages ({supportedLanguages.length})</h2>
              <div className="flex flex-wrap gap-2 mb-10">
                {supportedLanguages.map((lang) => (
                  <span key={lang} className="text-[11px] px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{lang}</span>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/custom-css" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Styling with Custom CSS</p></div>
                </a>
                <a href="/index-23/knowledge-base/ab-testing" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">A/B Testing Consent Rates</p></div>
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
