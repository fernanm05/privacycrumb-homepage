"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Shield, BarChart3, Megaphone, Settings, Eye, Lock } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const parameters = [
  { name: "analytics_storage", desc: "Controls cookies for analytics purposes (e.g., Google Analytics). When denied, GA4 uses conversion modeling instead.", default: "denied" },
  { name: "ad_storage", desc: "Controls cookies for advertising purposes (e.g., Google Ads conversion tracking).", default: "denied" },
  { name: "ad_user_data", desc: "Controls whether user data is sent to Google for advertising purposes. Required for EEA compliance.", default: "denied" },
  { name: "ad_personalization", desc: "Controls personalized advertising and remarketing. When denied, remarketing lists are not updated.", default: "denied" },
  { name: "functionality_storage", desc: "Controls cookies for enhanced functionality like language preferences and video playback settings.", default: "denied" },
  { name: "personalization_storage", desc: "Controls cookies for personalization such as content recommendations.", default: "denied" },
  { name: "security_storage", desc: "Controls cookies needed for security features like authentication and fraud prevention.", default: "granted" },
];

const benefits = [
  { icon: BarChart3, title: "Conversion Modeling", desc: "GA4 uses machine learning to estimate conversions from users who denied analytics cookies. You retain ~70% of conversion data." },
  { icon: Megaphone, title: "Ad Measurement", desc: "Google Ads can still measure campaign performance through aggregated, privacy-safe reporting even without full cookie consent." },
  { icon: Shield, title: "Full Compliance", desc: "Consent Mode ensures no tracking happens without user consent, meeting GDPR and DMA requirements." },
  { icon: Eye, title: "Behavioral Modeling", desc: "GA4 fills in gaps in analytics data using behavioral modeling, maintaining report accuracy." },
];

const codeExample = `<!-- Consent Mode v2 with PrivacyCrumb -->
<!-- Step 1: Set defaults BEFORE GTM/GA loads -->
<script>
window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

// Default: deny all non-essential
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'functionality_storage': 'denied',
  'personalization_storage': 'denied',
  'security_storage': 'granted',
  'wait_for_update': 500  // Wait 500ms for CMP
});
</script>

<!-- Step 2: PrivacyCrumb script -->
<script src="https://app.privacycrumb.com/policy.js?key=YOUR_KEY"></script>

<!-- PrivacyCrumb automatically sends:
     gtag('consent', 'update', { ... })
     when the user makes consent choices -->`;

export default function GoogleConsentModeV2Page() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Developer Reference</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 8 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Google Consent Mode v2</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Implement Google Consent Mode v2 with PrivacyCrumb for privacy-compliant Google Ads and Analytics.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">Google Consent Mode v2 is Google&apos;s framework for adjusting Google tag behavior based on user consent. Required for EEA advertisers since March 2024. PrivacyCrumb integrates natively — no custom code needed.</p></FadeIn>

            {/* Parameters */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Consent parameters</h2></FadeIn>
            <FadeIn>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Parameter</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Description</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Default</th></tr></thead>
                  <tbody>
                    {parameters.map((p, i) => (
                      <tr key={p.name} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-mono text-coral whitespace-nowrap">{p.name}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{p.desc}</td>
                        <td className="px-4 py-3 font-mono text-neutral-500">{p.default}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Benefits */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Benefits</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {benefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><b.icon size={14} className="text-coral" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{b.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Code */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Implementation</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10">{codeExample}</div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/gtm-setup" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Google Tag Manager Setup</p></div>
                </a>
                <a href="/index-23/knowledge-base/spa-guide" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Single Page Application Guide</p></div>
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
