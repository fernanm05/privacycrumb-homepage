"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Shield, Settings, Code, Zap, Lock, ToggleRight } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const blockingModes = [
  { title: "Auto-Block (Recommended)", desc: "PrivacyCrumb automatically blocks all non-essential cookies before they load. Scripts in the Analytics and Marketing categories are prevented from executing until the user consents. This is the safest mode for GDPR compliance.", tag: "Default" },
  { title: "Tag-Based Blocking", desc: "Add a data-pc-category attribute to individual script tags. PrivacyCrumb will block scripts based on their assigned category. Useful when auto-detection doesn't catch a specific script.", tag: "Advanced" },
  { title: "Manual Blocking", desc: "Use the PrivacyCrumb JavaScript API to programmatically check consent state before executing code. Best for complex integrations where automatic blocking isn't sufficient.", tag: "Developer" },
];

const setupSteps = [
  { num: "1", title: "Navigate to Settings → Blocking", content: "In your PrivacyCrumb dashboard, go to your domain settings and open the Blocking tab." },
  { num: "2", title: "Choose your blocking mode", content: "Select Auto-Block for automatic protection, or Tag-Based/Manual for finer control. You can combine modes." },
  { num: "3", title: "Review blocked scripts", content: "After your next scan, PrivacyCrumb shows which scripts are being blocked. Verify that necessary scripts (login, payment, etc.) are not accidentally blocked." },
  { num: "4", title: "Whitelist essential scripts", content: "If a script is incorrectly blocked, add it to the 'Strictly Necessary' category or the whitelist. Session management, payment processors, and security scripts should always run." },
  { num: "5", title: "Test with banner", content: "Open your site in an incognito window. Verify that non-essential cookies only appear after you click 'Accept'. Use browser DevTools → Application → Cookies to verify." },
];

const codeExample = `<!-- Tag-based blocking example -->
<!-- This script will only load when the user consents to Analytics -->
<script
  type="text/plain"
  data-pc-category="analytics"
  data-pc-src="https://www.googletagmanager.com/gtag/js?id=G-XXXXX">
</script>

<!-- This script will only load when the user consents to Marketing -->
<script
  type="text/plain"
  data-pc-category="marketing"
  data-pc-src="https://connect.facebook.net/en_US/fbevents.js">
</script>`;

const apiExample = `// Manual blocking with the PrivacyCrumb API
window.PrivacyCrumb.onConsentChange(function(consent) {
  if (consent.analytics) {
    // User consented to analytics — load GA
    loadGoogleAnalytics();
  }
  if (consent.marketing) {
    // User consented to marketing — load Facebook Pixel
    loadFacebookPixel();
  }
});`;

export default function AutoBlockingPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Cookie Management</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Auto-Blocking Configuration</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Set up automatic blocking of non-essential cookies before user consent is given.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">Cookie blocking ensures non-essential cookies and scripts are <strong className="text-neutral-900 dark:text-white">prevented from loading</strong> until the user gives consent. This is a core requirement of GDPR — cookies must not be set before opt-in.</p></FadeIn>

            {/* Blocking Modes */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Blocking modes</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {blockingModes.map((m, i) => (
                <FadeIn key={m.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2"><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{m.title}</h3><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{m.tag}</span></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{m.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Setup Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Setting up auto-blocking</h2></FadeIn>
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

            {/* Code Examples */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Tag-based blocking example</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-xs text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-6">{codeExample}</div>
            </FadeIn>

            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">API-based blocking example</h2>
              <div className="rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-xs text-neutral-700 dark:text-neutral-300 overflow-x-auto whitespace-pre mb-10">{apiExample}</div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/cookie-categories" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Cookie Categories Explained</p></div>
                </a>
                <a href="/index-23/knowledge-base/third-party-cookies" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Managing Third-Party Cookies</p></div>
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
