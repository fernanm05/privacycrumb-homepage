"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertCircle, Cookie, Shield, BarChart3, Megaphone, Settings } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const cookieCategories = [
  { icon: Shield, name: "Strictly Necessary", color: "text-emerald-500 bg-emerald-500/10", desc: "Essential cookies that make the website function. Session cookies, CSRF tokens, consent preferences. These are never blocked and don't require consent.", examples: "pc_session, pc_csrf, pc_consent" },
  { icon: Settings, name: "Functional", color: "text-blue-500 bg-blue-500/10", desc: "Cookies that enable enhanced functionality and personalization — language preferences, theme settings, timezone detection. Blocked until user consents.", examples: "pc_lang, pc_theme, pc_timezone" },
  { icon: BarChart3, name: "Analytics", color: "text-amber-500 bg-amber-500/10", desc: "Cookies used to measure and analyze website traffic and user behavior. Google Analytics, heatmap tools, and similar services. Blocked until consent.", examples: "_ga, _ga_*, _gid, _hjid" },
  { icon: Megaphone, name: "Marketing", color: "text-red-500 bg-red-500/10", desc: "Cookies used for advertising, retargeting, and building user profiles. Facebook Pixel, Google Ads, and ad network cookies. Blocked until consent.", examples: "_fbp, _fbc, IDE, fr" },
];

const scanSteps = [
  { num: "1", title: "Navigate to your domain", content: "In the PrivacyCrumb dashboard, select the domain you want to scan from the Domains panel." },
  { num: "2", title: "Click 'Scan Now'", content: "Hit the 'Scan Now' button. PrivacyCrumb will begin crawling your website pages, checking for cookies, local storage items, and third-party scripts." },
  { num: "3", title: "Wait for results", content: "A typical scan takes 30 seconds to 2 minutes depending on the size of your site. You can navigate away — you'll be notified when it's complete." },
  { num: "4", title: "Review the scan report", content: "The report shows every cookie and tracker found, organized by category. Each entry includes the cookie name, domain, purpose, expiration, and type (first-party or third-party)." },
  { num: "5", title: "Verify categories", content: "PrivacyCrumb auto-categorizes most cookies accurately. Review the assignments and manually adjust any that need correction — for example, moving a misclassified analytics cookie." },
  { num: "6", title: "Publish your cookie declaration", content: "Once you've verified the categories, click 'Publish'. This updates the cookie declaration shown to visitors in the consent banner details panel." },
];

const troubleshooting = [
  { q: "The scan found 0 cookies", a: "This usually means the script tag isn't installed correctly, or the scanned pages don't set any cookies. Check your installation and ensure the script loads before other scripts." },
  { q: "Some cookies aren't categorized correctly", a: "PrivacyCrumb uses a database of known cookies for auto-categorization. Uncommon or custom cookies may need manual assignment. Click the cookie name to edit its category." },
  { q: "Third-party cookies aren't showing", a: "Some third-party cookies are only set after user interaction (e.g., playing a video, clicking a social button). Run a deep scan or manually add known third-party cookies." },
  { q: "The scan is taking too long", a: "Large sites with many pages may take longer. You can limit the scan depth in Settings → Scanner → Max Pages to speed things up." },
];

export default function FirstCookieScanPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Getting Started</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Your First Cookie Scan</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Run your first automated cookie scan, understand the results, and learn about cookie categories.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Cookie Categories */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Understanding cookie categories</h2></FadeIn>
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">PrivacyCrumb organizes cookies into four standard categories used by GDPR and most privacy regulations:</p></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {cookieCategories.map((c, i) => (
                <FadeIn key={c.name} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${c.color}`}><c.icon size={14} /></div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{c.name}</h3>
                    </div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">{c.desc}</p>
                    <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">Examples: {c.examples}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Running your first scan</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {scanSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Troubleshooting */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Troubleshooting</h2>
              <div className="space-y-2 mb-10">
                {troubleshooting.map((t, i) => (
                  <details key={i} className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <summary className="px-5 py-3 text-[13px] font-medium text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2"><AlertCircle size={14} className="text-amber-500 shrink-0" /><span>{t.q}</span></div>
                      <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-5 pb-4 -mt-1 pl-11"><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.a}</p></div>
                  </details>
                ))}
              </div>
            </FadeIn>

            {/* Navigation */}
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/dashboard-overview" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Dashboard Overview</p></div>
                </a>
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
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
