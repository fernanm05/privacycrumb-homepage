"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Globe, ExternalLink, BarChart3, Megaphone, Eye, Code } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const commonServices = [
  {
    name: "Google Analytics (GA4)", category: "Analytics", cookies: ["_ga", "_ga_*", "_gid"],
    desc: "The most popular web analytics tool. Sets cookies to distinguish unique visitors, track sessions, and measure campaign performance.",
    handling: "Auto-blocked by PrivacyCrumb. Loads only after the user consents to Analytics cookies. Works with Google Consent Mode v2 for conversion modeling even without cookies.",
  },
  {
    name: "Facebook Pixel", category: "Marketing", cookies: ["_fbp", "_fbc", "fr"],
    desc: "Tracks conversions, builds Custom Audiences, and measures ad performance. Sets first-party and third-party cookies.",
    handling: "Auto-blocked by PrivacyCrumb. The pixel only fires after the user consents to Marketing cookies. Use the tag-based blocking attribute for custom implementations.",
  },
  {
    name: "Google Tag Manager", category: "Functional", cookies: ["_dc_gtm_*"],
    desc: "A tag management system. GTM itself sets minimal cookies, but the tags it loads (GA, Ads, etc.) set their own cookies.",
    handling: "PrivacyCrumb integrates with GTM via Consent Mode. GTM loads, but individual tags are consent-gated based on their category.",
  },
  {
    name: "HubSpot", category: "Analytics / Marketing", cookies: ["__hssc", "__hssrc", "__hstc", "hubspotutk"],
    desc: "CRM and marketing platform. Sets analytics cookies for visitor tracking and marketing cookies for lead attribution.",
    handling: "Auto-blocked. HubSpot tracking code loads only after consent. Use the PrivacyCrumb API to conditionally initialize HubSpot.",
  },
  {
    name: "Hotjar", category: "Analytics", cookies: ["_hjid", "_hjSession_*", "_hjSessionUser_*"],
    desc: "Session recording and heatmap tool. Tracks mouse movements, clicks, and scrolling behavior.",
    handling: "Auto-blocked. Hotjar scripts are prevented from loading until Analytics consent is given.",
  },
  {
    name: "LinkedIn Insight Tag", category: "Marketing", cookies: ["li_fat_id", "lidc", "bcookie"],
    desc: "Tracks conversions and enables website retargeting for LinkedIn Ads.",
    handling: "Auto-blocked under Marketing category. The Insight Tag only loads after Marketing consent.",
  },
];

const bestPractices = [
  "Run a cookie scan after adding any new third-party script to catch new cookies immediately",
  "Use tag-based blocking (data-pc-category) for scripts that PrivacyCrumb can't auto-detect",
  "Test in an incognito window after setup — verify no third-party cookies appear before consent",
  "Review scan reports monthly for new cookies from third-party script updates",
  "Document the purpose of each third-party cookie in your cookie declaration",
  "Prefer first-party alternatives where possible (e.g., server-side analytics)",
  "Use Google Consent Mode v2 to maintain ad measurement while respecting consent",
];

export default function ThirdPartyCookiesPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-500">Cookie Management</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 7 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Managing Third-Party Cookies</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">How to handle cookies set by Google Analytics, Facebook Pixel, HubSpot, Hotjar, and other third-party scripts.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">Third-party cookies are set by external services embedded on your site — analytics, advertising, chat widgets, video players, and social media embeds. Under GDPR, you&apos;re responsible for all cookies on your site, including those set by third parties.</p></FadeIn>

            {/* Common Services */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Common third-party services</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {commonServices.map((s, i) => (
                <FadeIn key={s.name} delay={i * 0.04}>
                  <details className="group rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <summary className="px-5 py-4 cursor-pointer list-none flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2.5">
                        <Globe size={16} className="text-coral shrink-0" />
                        <div>
                          <span className="text-sm font-semibold text-neutral-900 dark:text-white">{s.name}</span>
                          <span className="text-[10px] ml-2 px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500">{s.category}</span>
                        </div>
                      </div>
                      <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-5 pb-5 -mt-1">
                      <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-2">{s.desc}</p>
                      <p className="text-[11px] font-mono text-neutral-400 mb-2">Cookies: {s.cookies.join(", ")}</p>
                      <div className="flex items-start gap-2 p-3 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200/50 dark:border-emerald-900/30">
                        <CheckCircle size={12} className="text-emerald-500 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-emerald-700 dark:text-emerald-400">{s.handling}</p>
                      </div>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>

            {/* Best Practices */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Best practices</h2>
              <div className="space-y-2 mb-10">
                {bestPractices.map((item) => (
                  <div key={item} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{item}</div>
                ))}
              </div>
            </FadeIn>

            {/* Warning */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-amber-500" /> Browser changes ahead</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">Chrome is phasing out third-party cookies. Firefox and Safari already block them by default. PrivacyCrumb will continue to protect your users regardless of browser-level changes — our blocking works at the script level, not just the cookie level.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/auto-blocking" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Auto-Blocking Configuration</p></div>
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
