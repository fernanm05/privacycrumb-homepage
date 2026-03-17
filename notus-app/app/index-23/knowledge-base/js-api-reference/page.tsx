"use client";
import { ArrowLeft, ArrowRight, Clock, Code, CheckCircle, Terminal } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const methods = [
  { name: "PrivacyCrumb.getConsent()", returns: "ConsentObject", desc: "Returns the current consent state for all categories.", example: `const consent = PrivacyCrumb.getConsent();\n// { necessary: true, functional: false, analytics: false, marketing: false }` },
  { name: "PrivacyCrumb.hasConsent(category)", returns: "boolean", desc: "Checks if a specific category has consent.", example: `if (PrivacyCrumb.hasConsent('analytics')) {\n  // Load Google Analytics\n  loadGA();\n}` },
  { name: "PrivacyCrumb.onConsentChange(callback)", returns: "void", desc: "Fires the callback whenever the user updates their consent preferences.", example: `PrivacyCrumb.onConsentChange(function(consent) {\n  console.log('Consent updated:', consent);\n  if (consent.analytics) loadGA();\n  if (consent.marketing) loadFBPixel();\n});` },
  { name: "PrivacyCrumb.showBanner()", returns: "void", desc: "Programmatically shows the consent banner. Useful for 're-open preferences' links.", example: `document.getElementById('cookie-settings')\n  .addEventListener('click', function() {\n    PrivacyCrumb.showBanner();\n  });` },
  { name: "PrivacyCrumb.hideBanner()", returns: "void", desc: "Programmatically hides the consent banner.", example: `PrivacyCrumb.hideBanner();` },
  { name: "PrivacyCrumb.acceptAll()", returns: "void", desc: "Accepts all cookie categories programmatically. Records consent.", example: `PrivacyCrumb.acceptAll();` },
  { name: "PrivacyCrumb.rejectAll()", returns: "void", desc: "Rejects all non-essential cookies programmatically. Records consent.", example: `PrivacyCrumb.rejectAll();` },
  { name: "PrivacyCrumb.setConsent(categories)", returns: "void", desc: "Sets consent for specific categories. Partial updates are supported.", example: `PrivacyCrumb.setConsent({\n  functional: true,\n  analytics: true,\n  marketing: false\n});` },
  { name: "PrivacyCrumb.getConsentId()", returns: "string", desc: "Returns the unique consent record ID for the current visitor.", example: `const id = PrivacyCrumb.getConsentId();\n// "pc_abc123def456"` },
  { name: "PrivacyCrumb.getConsentTimestamp()", returns: "string", desc: "Returns the ISO timestamp of when consent was last given or updated.", example: `const ts = PrivacyCrumb.getConsentTimestamp();\n// "2024-01-15T14:30:00.000Z"` },
];

const consentObject = `interface ConsentObject {
  necessary: boolean;   // Always true
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;    // ISO 8601
  consentId: string;    // Unique record ID
  version: string;      // Banner version
}`;

const events = [
  { name: "pc:consent:ready", desc: "Fired when PrivacyCrumb is initialized and consent state is available." },
  { name: "pc:consent:change", desc: "Fired when the user updates their consent preferences." },
  { name: "pc:banner:show", desc: "Fired when the consent banner is displayed." },
  { name: "pc:banner:hide", desc: "Fired when the consent banner is hidden." },
];

export default function JsApiReferencePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-500">Developer Reference</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 10 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">JavaScript API Reference</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Complete API documentation — check consent, listen for changes, and programmatically control the banner.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Consent Object */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">ConsentObject type</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10">{consentObject}</div>
            </FadeIn>

            {/* Methods */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Methods</h2></FadeIn>
            <div className="space-y-4 mb-10">
              {methods.map((m, i) => (
                <FadeIn key={m.name} delay={i * 0.03}>
                  <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <div className="px-5 py-3 border-b border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-800/30 flex items-center justify-between">
                      <code className="text-[12px] font-mono font-semibold text-coral">{m.name}</code>
                      <span className="text-[10px] text-neutral-400 font-mono">→ {m.returns}</span>
                    </div>
                    <div className="px-5 py-3">
                      <p className="text-[12px] text-neutral-600 dark:text-neutral-400 mb-2">{m.desc}</p>
                      <div className="rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200/80 dark:border-neutral-800 p-3 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre">{m.example}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Events */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Custom events</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-3">PrivacyCrumb dispatches custom events on the <code className="text-[11px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800">document</code> object:</p>
              <div className="space-y-2 mb-6">
                {events.map((e) => (
                  <div key={e.name} className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <code className="text-[11px] font-mono text-coral shrink-0 mt-0.5">{e.name}</code>
                    <span className="text-[12px] text-neutral-500 dark:text-neutral-400">{e.desc}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-[11px] text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10">{`document.addEventListener('pc:consent:change', function(e) {\n  console.log('New consent:', e.detail);\n});`}</div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/gtm-setup" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Google Tag Manager Setup</p></div>
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
