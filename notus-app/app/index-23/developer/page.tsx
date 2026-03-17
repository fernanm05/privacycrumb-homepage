"use client";
import { motion } from "framer-motion";
import {
  Code, Terminal, Zap, ArrowRight, CheckCircle,
  Globe, Lock, Shield, Users, BarChart3, Star,
  GitBranch, Package, Cpu, FileCode, Layers, Webhook
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const devFeatures = [
  { icon: Terminal, title: "JavaScript API", desc: "Full programmatic control — check consent status, listen for changes, trigger banner display, and manage preferences via code.", tag: "API" },
  { icon: Webhook, title: "Webhooks & Callbacks", desc: "Receive real-time notifications when users update consent. Integrate with your backend, CRM, or data pipeline.", tag: "Events" },
  { icon: GitBranch, title: "Google Tag Manager", desc: "Native GTM integration with consent-mode signals. Control tag firing based on user preferences automatically.", tag: "GTM" },
  { icon: Layers, title: "Google Consent Mode v2", desc: "Full support for Google's Consent Mode v2 — consent signals, advanced data modeling, and privacy-safe analytics.", tag: "Google" },
  { icon: Package, title: "NPM Package", desc: "Install via npm for React, Vue, Angular, and Next.js projects. TypeScript support included.", tag: "Package" },
  { icon: Cpu, title: "SPA Support", desc: "Automatic route-change detection for single page applications. Zero config — works with React Router, Vue Router, and more.", tag: "SPA" },
];

const codeSnippets = [
  {
    title: "Check Consent Status",
    code: `// Check if user has given consent for analytics
if (PrivacyCrumb.hasConsent("analytics")) {
  gtag("config", "GA_MEASUREMENT_ID");
}`,
  },
  {
    title: "Listen for Changes",
    code: `// React to consent changes in real-time
PrivacyCrumb.on("consent:update", (prefs) => {
  console.log("Marketing:", prefs.marketing);
  console.log("Analytics:", prefs.analytics);
});`,
  },
  {
    title: "Programmatic Control",
    code: `// Show banner, set consent, or reset
PrivacyCrumb.show();
PrivacyCrumb.setConsent({ analytics: true });
PrivacyCrumb.reset();`,
  },
];

const integrations = [
  "React", "Next.js", "Vue", "Nuxt", "Angular", "Svelte",
  "WordPress", "Shopify", "Wix", "Webflow", "Squarespace", "GTM",
];

const testimonials = [
  { quote: "The JavaScript API is clean and well-documented. Had consent-aware analytics running in 20 minutes.", name: "Alex T.", role: "Senior Engineer, Fintech", rating: 5 },
  { quote: "Finally a cookie consent tool that doesn't fight with our SPA. It just works with Next.js.", name: "Dev R.", role: "Full-Stack Dev, SaaS", rating: 5 },
  { quote: "We replaced 400 lines of custom consent code with PrivacyCrumb's API. Reduced our compliance tech debt by 90%.", name: "Priya S.", role: "Lead Developer, E-commerce", rating: 5 },
];

/* ====== PAGE ====== */
export default function DeveloperPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeIn>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-coral/20 bg-coral/5 text-coral text-xs font-medium mb-6">
                <Code size={12} /> For Developers
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Built for devs.{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">By devs.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                A clean JavaScript API, npm package, webhook support, and full SPA compatibility. Cookie compliance that fits your stack — not the other way around.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Start Building <ArrowRight size={14} />
                </motion.a>
                <motion.a href="/index-23/knowledge-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  Read the Docs
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Code examples */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Code Examples</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Simple, powerful API</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {codeSnippets.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden h-full flex flex-col">
                    <div className="px-4 py-3 border-b border-neutral-100 dark:border-neutral-800 flex items-center gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                      </div>
                      <span className="text-[11px] text-neutral-400 ml-1">{s.title}</span>
                    </div>
                    <pre className="p-4 text-[11px] leading-relaxed text-neutral-600 dark:text-neutral-400 font-mono overflow-x-auto flex-1">
                      <code>{s.code}</code>
                    </pre>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Dev features */}
        <section className="py-14 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Developer Features</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Everything you need to integrate</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {devFeatures.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-coral/30 hover:shadow-sm transition-all h-full"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center">
                        <f.icon size={18} className="text-coral" />
                      </div>
                      <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-coral/10 text-coral">{f.tag}</span>
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{f.title}</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2">Works With Your Stack</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-8">Integrates with everything</h3>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-wrap justify-center gap-2">
                {integrations.map(name => (
                  <span key={name} className="px-4 py-2 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-xs font-medium text-neutral-700 dark:text-neutral-300">
                    {name}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Developer Love</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">What developers are saying</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex flex-col">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 italic flex-1">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-auto">
                      <div className="text-xs font-semibold text-neutral-900 dark:text-white">{t.name}</div>
                      <div className="text-[10px] text-neutral-400">{t.role}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileCode, value: "3 lines", label: "To Install" },
              { icon: Cpu, value: "<2kb", label: "Gzipped Size" },
              { icon: Globe, value: "12+", label: "Frameworks" },
              { icon: Zap, value: "99.9%", label: "Uptime" },
            ].map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.08}>
                <div className="text-center p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  <s.icon size={18} className="text-coral mx-auto mb-2" />
                  <div className="text-xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                  <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-8 md:p-10 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
                  Ready to integrate?
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto">
                  Get your API key in 30 seconds. Full docs, TypeScript types, and code examples included.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                    Get API Key <ArrowRight size={14} />
                  </motion.a>
                  <motion.a href="/index-23/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    Talk to Engineering
                  </motion.a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> Free tier available</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> TypeScript support</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> Full documentation</span>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
