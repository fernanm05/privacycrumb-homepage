"use client";
import { ArrowLeft, ArrowRight, BookOpen, Clock, CheckCircle, Copy, ExternalLink } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const steps = [
  { num: "1", title: "Create your free account", content: "Head to app.privacycrumb.com/register and sign up. No credit card required — you'll get instant access to your dashboard with 3 free domains and 5,000 monthly pageviews." },
  { num: "2", title: "Add your website", content: "In the dashboard, click 'Add Domain' and enter your website URL. PrivacyCrumb will validate the domain and prepare your unique script tag." },
  { num: "3", title: "Install the script", content: "Copy your unique script tag and paste it into your website's <head> section, before any other scripts. This ensures cookies are blocked before they load." },
  { num: "4", title: "Run your first scan", content: "Click 'Scan Now' in the dashboard. PrivacyCrumb will crawl your website, detect all cookies and trackers, and categorize them automatically." },
  { num: "5", title: "Customize your banner", content: "Choose a layout (bottom bar, modal, corner popup), set your colors and text, and configure cookie categories. Preview it live before publishing." },
  { num: "6", title: "Go live", content: "Toggle your banner to 'Active'. Your consent banner is now live, blocking non-essential cookies until visitors give consent. You're compliant!" },
];

export default function QuickStartGuidePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Getting Started</span>
                <span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Quick Start Guide</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Get PrivacyCrumb running on your website in under 5 minutes. This guide walks you through account creation, script installation, and your first cookie scan.</p></FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Intro */}
            <FadeIn>
              <div className="mb-10">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Before you begin</h2>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-4">To get started with PrivacyCrumb, you'll need:</p>
                <ul className="space-y-2">
                  {["A website you own or manage", "Access to your website's HTML or CMS", "About 5 minutes of your time"].map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-sm text-neutral-600 dark:text-neutral-400">
                      <CheckCircle size={14} className="text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Steps */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Step-by-step setup</h2>
            </FadeIn>
            <div className="space-y-4">
              {steps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.05}>
                  <div className="flex gap-4 p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                      <span className="text-coral text-sm font-bold">{s.num}</span>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{s.title}</h3>
                      <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Code Example */}
            <FadeIn>
              <div className="mt-10 mb-10">
                <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Example script tag</h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">Your unique script tag will look like this. Paste it in your website&apos;s &lt;head&gt; section:</p>
                <div className="relative rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-4 font-mono text-xs text-neutral-700 dark:text-neutral-300 overflow-x-auto">
                  <code>{`<script src="https://app.privacycrumb.com/policy.js?key=YOUR_SITE_KEY"></script>`}</code>
                </div>
              </div>
            </FadeIn>

            {/* Next Steps */}
            <FadeIn>
              <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900">
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-3">What&apos;s next?</h2>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    { title: "Adding the Script Tag", href: "/index-23/knowledge-base/adding-script-tag", desc: "Detailed platform-specific install guides" },
                    { title: "Dashboard Overview", href: "/index-23/knowledge-base/dashboard-overview", desc: "Learn your way around the dashboard" },
                    { title: "Your First Cookie Scan", href: "/index-23/knowledge-base/first-cookie-scan", desc: "Understand scan results & categories" },
                  ].map((link) => (
                    <a key={link.title} href={link.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-white dark:hover:bg-neutral-800 transition-colors group">
                      <ArrowRight size={14} className="text-coral shrink-0" />
                      <div>
                        <p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">{link.title}</p>
                        <p className="text-[11px] text-neutral-400">{link.desc}</p>
                      </div>
                    </a>
                  ))}
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
