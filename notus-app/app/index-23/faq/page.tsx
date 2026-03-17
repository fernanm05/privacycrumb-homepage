"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Search, HelpCircle, DollarSign, Zap, Shield, Code, User } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const categoryMeta: Record<string, { icon: typeof HelpCircle; color: string }> = {
  General: { icon: HelpCircle, color: "text-blue-500 bg-blue-500/10" },
  Pricing: { icon: DollarSign, color: "text-emerald-500 bg-emerald-500/10" },
  Features: { icon: Zap, color: "text-amber-500 bg-amber-500/10" },
  Compliance: { icon: Shield, color: "text-purple-500 bg-purple-500/10" },
  Technical: { icon: Code, color: "text-cyan-500 bg-cyan-500/10" },
  Account: { icon: User, color: "text-coral bg-coral/10" },
};

type FaqItem = { q: string; a: string };

const faqsByCategory: Record<string, FaqItem[]> = {
  General: [
    { q: "What is PrivacyCrumb?", a: "PrivacyCrumb is a cookie consent management platform (CMP) that helps websites comply with global privacy regulations like GDPR, CCPA, CPRA, and more. We provide automated cookie scanning, customizable consent banners, consent logging, and geo-targeted compliance flows." },
    { q: "Who is PrivacyCrumb for?", a: "Website owners, developers, marketers, and agencies of all sizes — from single-site founders to enterprise teams managing hundreds of domains. If your website uses cookies or trackers, you need PrivacyCrumb." },
    { q: "How does PrivacyCrumb work?", a: "Add a single JavaScript snippet to your website. PrivacyCrumb automatically scans your site for cookies and trackers, categorizes them, and displays a customizable consent banner to your visitors." },
    { q: "Do I need technical knowledge?", a: "No. PrivacyCrumb is plug-and-play. You add one script tag and configure everything from our dashboard — no coding required. For developers, we also offer a full REST API and webhook support." },
    { q: "Which platforms are supported?", a: "PrivacyCrumb works with any website — WordPress, Shopify, Webflow, Wix, Squarespace, Next.js, custom HTML, and more. If it runs in a browser, PrivacyCrumb can manage its cookies." },
  ],
  Pricing: [
    { q: "Is there a free plan?", a: "Yes! Our free plan includes up to 3 domains and 5,000 pageviews per month with basic cookie scanning, a consent banner, and GDPR/CCPA compliance — no credit card required." },
    { q: "What are the paid plans?", a: "Starter ($9/mo) — 10K pageviews, 5 domains. Pro ($29/mo) — 100K pageviews, 20 domains. Enterprise ($79/mo) — unlimited pageviews and domains." },
    { q: "Are there any overage charges?", a: "No. We never charge overage fees. If you exceed your limit, we'll notify you and recommend upgrading — but you'll never see surprise charges." },
    { q: "Can I change or cancel anytime?", a: "Absolutely. Upgrade, downgrade, or cancel at any time from your dashboard. If you cancel, your account stays active until the end of your billing period." },
    { q: "Do you offer annual billing?", a: "Yes. Annual billing is available with a discount on all paid plans. Check the pricing page for details." },
  ],
  Features: [
    { q: "What is automated cookie scanning?", a: "PrivacyCrumb crawls your website to detect all cookies and trackers — first-party and third-party. It automatically categorizes them and keeps your cookie declaration up to date." },
    { q: "Can I customize the consent banner?", a: "Yes. Fully customize colors, text, position, layout, and behavior. On Pro+ plans, you can remove our branding and add your own logo." },
    { q: "What is geo-targeting?", a: "Geo-targeting detects a visitor's location and shows the appropriate consent flow — GDPR opt-in for EU, CCPA opt-out for California, etc." },
    { q: "Is multi-language supported?", a: "Yes. On Pro and Enterprise plans, your banner can display in any language — auto-detected from the visitor's browser." },
    { q: "What is consent logging?", a: "Every banner interaction is recorded with a timestamp, consent version, geographic region, and anonymous visitor ID. Logs are exportable for audits." },
    { q: "Do you offer a REST API?", a: "Yes. Manage domains, retrieve consent logs, update banners, and integrate PrivacyCrumb programmatically. Webhooks are also available for real-time events." },
  ],
  Compliance: [
    { q: "Which regulations are covered?", a: "GDPR (EU & UK), CCPA, CPRA, ePrivacy Directive, LGPD, POPIA, PIPEDA, FADP, PDPA, IAB TCF 2.2, and Google Consent Mode v2." },
    { q: "Is PrivacyCrumb a certified CMP?", a: "Yes. We're a Google-certified CMP and support IAB TCF 2.2, ensuring consent signals are recognized across the advertising ecosystem." },
    { q: "Does it support Google Consent Mode v2?", a: "Yes. Consent signals are automatically sent to Google tags (GA4, Google Ads, GTM) including the required ad_user_data and ad_personalization parameters." },
    { q: "How does cookie blocking work?", a: "Non-essential cookies are blocked from loading until the visitor provides consent. Strictly necessary cookies (session, security) are never blocked." },
    { q: "What if a new cookie is detected?", a: "New cookies found during scheduled scans are automatically categorized and added to your declaration. Users can be prompted to re-consent if needed." },
  ],
  Technical: [
    { q: "How do I install PrivacyCrumb?", a: "Copy the script tag from your dashboard and paste it in your site's <head>. For WordPress, use our plugin. For Shopify, add it to theme.liquid. Takes under 2 minutes." },
    { q: "Does it slow down my website?", a: "No. The script is under 30KB gzipped and loads asynchronously. It doesn't block rendering and has minimal impact on Core Web Vitals." },
    { q: "Does it work with SPAs?", a: "Yes. Works with React, Vue, Angular, Next.js, and similar frameworks. It detects route changes and maintains consent state across navigation." },
    { q: "Can I use it with Google Tag Manager?", a: "Yes. PrivacyCrumb integrates with GTM and fires consent signals before any tags execute — no manual consent template configuration needed." },
    { q: "Where is consent data stored?", a: "Securely on our cloud servers with encryption at rest and in transit. Data is retained according to your plan limits and regulatory requirements." },
  ],
  Account: [
    { q: "How do I create an account?", a: "Visit app.privacycrumb.com/register — free, no credit card required." },
    { q: "Can I add team members?", a: "Yes. Pro plans support multiple team members. Enterprise plans support unlimited team members with role-based access controls." },
    { q: "How do I delete my account?", a: "Delete from the Settings page in your dashboard. All data including consent logs will be permanently removed within 30 days." },
    { q: "What support is available?", a: "Free: email support. Pro: priority email with faster responses. Enterprise: dedicated account manager and phone support." },
  ],
};

const allCategories = Object.keys(faqsByCategory);

export default function FaqPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredFaqs = (cat: string) => {
    if (!searchQuery) return faqsByCategory[cat];
    return faqsByCategory[cat].filter(
      (f) => f.q.toLowerCase().includes(searchQuery.toLowerCase()) || f.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const totalResults = allCategories.reduce((sum, cat) => sum + getFilteredFaqs(cat).length, 0);

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><p className="text-coral text-sm font-medium mb-4 tracking-wide">Support</p></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">Frequently Asked{" "}<span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Questions</span></h1></FadeIn>
            <FadeIn delay={0.2}><p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">Everything you need to know about PrivacyCrumb. Can&apos;t find what you&apos;re looking for? Contact our support team.</p></FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative max-w-md mx-auto mt-8">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" size={16} />
                <input type="text" placeholder="Search questions..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-colors" />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[200px_1fr] gap-10 md:gap-14">
              {/* Sidebar */}
              <FadeIn>
                <nav className="hidden md:block sticky top-24">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">Categories</p>
                  <ul className="space-y-1">
                    {allCategories.map((cat) => {
                      const meta = categoryMeta[cat];
                      const count = getFilteredFaqs(cat).length;
                      return (
                        <li key={cat}>
                          <a href={`#faq-${cat.toLowerCase()}`} className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-neutral-100 dark:hover:bg-neutral-800 ${count === 0 ? "opacity-30" : "text-neutral-700 dark:text-neutral-300"}`}>
                            <div className={`w-6 h-6 rounded-md flex items-center justify-center ${meta.color}`}><meta.icon size={13} /></div>
                            <span className="flex-1">{cat}</span>
                            <span className="text-[11px] text-neutral-400">{count}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </FadeIn>

              {/* FAQ Sections */}
              <div className="space-y-10">
                {allCategories.map((cat) => {
                  const meta = categoryMeta[cat];
                  const items = getFilteredFaqs(cat);
                  if (items.length === 0) return null;
                  return (
                    <FadeIn key={cat}>
                      <div id={`faq-${cat.toLowerCase()}`} className="scroll-mt-24">
                        <div className="flex items-center gap-2.5 mb-4">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${meta.color}`}><meta.icon size={16} /></div>
                          <h2 className="text-base font-semibold text-neutral-900 dark:text-white">{cat}</h2>
                          <span className="text-[11px] text-neutral-400 ml-1">{items.length} questions</span>
                        </div>
                        <div className="space-y-2">
                          {items.map((f, i) => (
                            <details key={i} className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 transition-shadow hover:shadow-sm">
                              <summary className="px-5 py-3.5 text-[13px] font-medium text-neutral-900 dark:text-white cursor-pointer list-none flex items-center justify-between gap-3">
                                <span>{f.q}</span>
                                <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                              </summary>
                              <div className="px-5 pb-4 -mt-1">
                                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.a}</p>
                              </div>
                            </details>
                          ))}
                        </div>
                      </div>
                    </FadeIn>
                  );
                })}
                {totalResults === 0 && (
                  <FadeIn><div className="text-center py-16"><p className="text-neutral-400 dark:text-neutral-500 text-sm">No questions match your search.</p></div></FadeIn>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">Still have questions?</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8 leading-relaxed">Our support team is here to help. Reach out and we&apos;ll get back to you within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="mailto:support@privacycrumb.com" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Contact Support <ArrowRight size={14} /></motion.a>
                <motion.a href="https://app.privacycrumb.com/register" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Try Free</motion.a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
