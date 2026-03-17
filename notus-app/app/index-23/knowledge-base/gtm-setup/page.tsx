"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Settings, Code, AlertTriangle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const setupSteps = [
  { num: "1", title: "Install PrivacyCrumb script first", content: "Make sure the PrivacyCrumb script tag is in your <head> section BEFORE the GTM container snippet. This ensures consent signals are available when GTM initializes." },
  { num: "2", title: "Enable Consent Mode in GTM", content: "In GTM, go to Admin → Container Settings → Enable Consent Overview. This activates Google's consent-aware tag firing." },
  { num: "3", title: "Create consent-aware triggers", content: "For each tag, set the appropriate consent requirement. Google Analytics tags should require 'analytics_storage'. Google Ads tags should require 'ad_storage' and 'ad_user_data'." },
  { num: "4", title: "Set default consent state", content: "Add a Consent Initialization trigger that sets the default consent to 'denied' for all non-essential purposes. PrivacyCrumb will update these when the user consents." },
  { num: "5", title: "Verify tag firing", content: "Use GTM Preview mode to verify that tags only fire after consent is granted. Check the Consent tab in Preview to see consent states." },
];

const gtmSnippet = `<!-- GTM Container (after PrivacyCrumb script) -->
<script>
// Default consent — deny everything until user opts in
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted'
});
</script>

<!-- PrivacyCrumb automatically calls gtag('consent', 'update', {...})
     when the user makes their consent choices -->`;

const consentMapping = [
  { pcCategory: "functional", gcmSignal: "functionality_storage, personalization_storage" },
  { pcCategory: "analytics", gcmSignal: "analytics_storage" },
  { pcCategory: "marketing", gcmSignal: "ad_storage, ad_user_data, ad_personalization" },
];

const tips = [
  "Always place the PrivacyCrumb script BEFORE the GTM container snippet",
  "Use GTM's built-in consent features — don't build custom consent checks in tags",
  "Test with GTM Preview mode after setup to verify consent-aware firing",
  "Enable 'Consent Mode' in Google Analytics 4 settings for conversion modeling",
  "PrivacyCrumb automatically sends consent update signals — no custom code needed",
];

export default function GtmSetupPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Developer Reference</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Google Tag Manager Setup</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Integrate PrivacyCrumb with GTM using consent-mode signals for compliant tag firing.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setup steps</h2></FadeIn>
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

            {/* Code */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Default consent snippet</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10">{gtmSnippet}</div>
            </FadeIn>

            {/* Mapping Table */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Consent mapping</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-coral">PrivacyCrumb Category</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Google Consent Mode Signals</th></tr></thead>
                  <tbody>
                    {consentMapping.map((m) => (
                      <tr key={m.pcCategory} className="border-t border-neutral-200/80 dark:border-neutral-800">
                        <td className="px-4 py-3 font-mono text-neutral-700 dark:text-neutral-300">{m.pcCategory}</td>
                        <td className="px-4 py-3 font-mono text-neutral-500 dark:text-neutral-400">{m.gcmSignal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Tips */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Tips</h2>
              <div className="space-y-2 mb-10">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/js-api-reference" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">JavaScript API Reference</p></div>
                </a>
                <a href="/index-23/knowledge-base/google-consent-mode-v2" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Google Consent Mode v2</p></div>
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
