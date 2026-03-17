"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, BookOpen, Shield, Code, Globe, Palette, CreditCard,
  BarChart3, Zap, Lock, FileText, ChevronRight, ArrowRight,
  Cookie, Scale, Eye, MonitorSmartphone, Settings, Bell
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

interface Article {
  title: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  slug?: string;
}

interface Category {
  icon: LucideIcon;
  title: string;
  desc: string;
  color: string;
  articles: Article[];
}

const categories: Category[] = [
  {
    icon: BookOpen, title: "Getting Started", desc: "Installation, setup, and your first steps", color: "text-blue-500",
    articles: [
      { title: "Quick Start Guide", excerpt: "Get PrivacyCrumb running on your website in under 5 minutes with our step-by-step installation guide.", readTime: "5 min", tags: ["Setup", "Beginner"], slug: "/index-23/knowledge-base/quick-start-guide" },
      { title: "Adding the Script Tag", excerpt: "Learn how to add the PrivacyCrumb script to your website's HTML, WordPress, Shopify, or any CMS.", readTime: "3 min", tags: ["Installation"], slug: "/index-23/knowledge-base/adding-script-tag" },
      { title: "Dashboard Overview", excerpt: "A complete tour of your PrivacyCrumb dashboard — settings, analytics, consent logs, and more.", readTime: "7 min", tags: ["Dashboard", "Beginner"], slug: "/index-23/knowledge-base/dashboard-overview" },
      { title: "Your First Cookie Scan", excerpt: "Run your first automated cookie scan and understand the results and categories.", readTime: "4 min", tags: ["Scanner"], slug: "/index-23/knowledge-base/first-cookie-scan" },
    ]
  },
  {
    icon: Shield, title: "Compliance Guides", desc: "GDPR, CCPA, and global regulation deep-dives", color: "text-green-500",
    articles: [
      { title: "GDPR Compliance Checklist", excerpt: "Everything you need to know about GDPR cookie consent — lawful basis, opt-in requirements, and penalties.", readTime: "10 min", tags: ["GDPR", "EU"], slug: "/index-23/knowledge-base/gdpr-compliance-checklist" },
      { title: "CCPA / CPRA Requirements", excerpt: "California privacy law requirements for cookie consent, opt-out mechanisms, and Do Not Sell compliance.", readTime: "8 min", tags: ["CCPA", "US"], slug: "/index-23/knowledge-base/ccpa-cpra-requirements" },
      { title: "ePrivacy Directive Explained", excerpt: "How the ePrivacy Directive affects cookie consent and what you need to do to stay compliant.", readTime: "6 min", tags: ["ePrivacy", "EU"], slug: "/index-23/knowledge-base/eprivacy-directive" },
      { title: "LGPD Brazil Compliance", excerpt: "Understanding Brazil's data protection law and how PrivacyCrumb helps you comply.", readTime: "5 min", tags: ["LGPD", "Brazil"], slug: "/index-23/knowledge-base/lgpd-brazil" },
      { title: "IAB TCF v2.2 Integration", excerpt: "Implement the IAB Transparency & Consent Framework with PrivacyCrumb for programmatic advertising.", readTime: "8 min", tags: ["IAB TCF", "Advertising"], slug: "/index-23/knowledge-base/iab-tcf-integration" },
    ]
  },
  {
    icon: Cookie, title: "Cookie Management", desc: "Scanning, blocking, and categorizing cookies", color: "text-amber-500",
    articles: [
      { title: "How Cookie Scanning Works", excerpt: "Deep dive into PrivacyCrumb's automated scanner — how it detects, classifies, and reports cookies.", readTime: "6 min", tags: ["Scanner"], slug: "/index-23/knowledge-base/how-cookie-scanning-works" },
      { title: "Cookie Categories Explained", excerpt: "Understanding the four cookie categories: Necessary, Functional, Analytics, and Marketing.", readTime: "4 min", tags: ["Categories"], slug: "/index-23/knowledge-base/cookie-categories" },
      { title: "Auto-Blocking Configuration", excerpt: "Set up automatic blocking of non-essential cookies before user consent is given.", readTime: "5 min", tags: ["Blocking"], slug: "/index-23/knowledge-base/auto-blocking" },
      { title: "Managing Third-Party Cookies", excerpt: "How to handle cookies set by third-party scripts like Google Analytics, Facebook Pixel, and HubSpot.", readTime: "7 min", tags: ["Third-Party"], slug: "/index-23/knowledge-base/third-party-cookies" },
    ]
  },
  {
    icon: Palette, title: "Banner Customization", desc: "Design, layout, and branding your consent banner", color: "text-purple-500",
    articles: [
      { title: "Banner Layout Options", excerpt: "Choose from bottom bar, top bar, center modal, corner popup, or full-screen overlay layouts.", readTime: "4 min", tags: ["Layout"], slug: "/index-23/knowledge-base/banner-layout-options" },
      { title: "Styling with Custom CSS", excerpt: "Use our custom CSS editor to achieve pixel-perfect banner designs that match your brand.", readTime: "6 min", tags: ["CSS", "Pro"], slug: "/index-23/knowledge-base/custom-css" },
      { title: "Multi-Language Banners", excerpt: "Set up consent banners in multiple languages with automatic detection based on visitor location.", readTime: "5 min", tags: ["i18n", "Languages"], slug: "/index-23/knowledge-base/multi-language-banners" },
      { title: "A/B Testing Consent Rates", excerpt: "Test different banner designs, copy, and positions to maximize consent rates.", readTime: "7 min", tags: ["Testing", "Pro"], slug: "/index-23/knowledge-base/ab-testing" },
    ]
  },
  {
    icon: Code, title: "Developer Reference", desc: "APIs, SDKs, and advanced integrations", color: "text-orange-500",
    articles: [
      { title: "JavaScript API Reference", excerpt: "Complete API documentation — check consent, listen for changes, and programmatically control the banner.", readTime: "10 min", tags: ["API"], slug: "/index-23/knowledge-base/js-api-reference" },
      { title: "Google Tag Manager Setup", excerpt: "Integrate PrivacyCrumb with GTM using consent-mode signals for compliant tag firing.", readTime: "6 min", tags: ["GTM"], slug: "/index-23/knowledge-base/gtm-setup" },
      { title: "Google Consent Mode v2", excerpt: "Implement Google Consent Mode v2 with PrivacyCrumb for privacy-compliant Google Ads and Analytics.", readTime: "8 min", tags: ["Google", "Consent Mode"], slug: "/index-23/knowledge-base/google-consent-mode-v2" },
      { title: "Single Page Application Guide", excerpt: "Configure PrivacyCrumb for React, Vue, Angular, and Next.js single page applications.", readTime: "5 min", tags: ["SPA", "React"], slug: "/index-23/knowledge-base/spa-guide" },
      { title: "Webhooks & Callbacks", excerpt: "Set up webhooks to receive real-time notifications when users update their consent preferences.", readTime: "6 min", tags: ["Webhooks", "API"], slug: "/index-23/knowledge-base/webhooks" },
    ]
  },
  {
    icon: Globe, title: "Geo-Targeting", desc: "Location-based rules and multi-region setup", color: "text-teal-500",
    articles: [
      { title: "Geo-Targeting Setup Guide", excerpt: "Configure location-based consent banners to show the right rules for each visitor's region.", readTime: "5 min", tags: ["Geo", "Setup"], slug: "/index-23/knowledge-base/geo-targeting-setup" },
      { title: "Custom Regional Rules", excerpt: "Create custom consent rules per country, state, or region with different banner content and blocking.", readTime: "7 min", tags: ["Rules", "Pro"], slug: "/index-23/knowledge-base/custom-regional-rules" },
      { title: "Fallback & Default Rules", excerpt: "Set up fallback rules for visitors whose location can't be determined.", readTime: "3 min", tags: ["Fallback"], slug: "/index-23/knowledge-base/fallback-rules" },
    ]
  },
  {
    icon: BarChart3, title: "Analytics & Reporting", desc: "Consent analytics, logs, and audit trails", color: "text-indigo-500",
    articles: [
      { title: "Consent Analytics Dashboard", excerpt: "Understanding your consent rates, opt-in vs opt-out trends, and visitor interaction metrics.", readTime: "5 min", tags: ["Analytics"], slug: "/index-23/knowledge-base/consent-analytics" },
      { title: "Consent Log & Audit Trail", excerpt: "How PrivacyCrumb records every consent action for regulatory audits and compliance proof.", readTime: "4 min", tags: ["Audit", "Logs"], slug: "/index-23/knowledge-base/consent-log" },
      { title: "Exporting Consent Data", excerpt: "Export consent records as CSV or JSON for external auditing and record-keeping.", readTime: "3 min", tags: ["Export"], slug: "/index-23/knowledge-base/exporting-data" },
    ]
  },
  {
    icon: CreditCard, title: "Account & Billing", desc: "Plans, invoices, and account management", color: "text-pink-500",
    articles: [
      { title: "Choosing the Right Plan", excerpt: "Compare Free, Starter, Pro, and Enterprise plans to find the best fit for your website.", readTime: "4 min", tags: ["Plans"], slug: "/index-23/knowledge-base/choosing-plan" },
      { title: "Managing Your Subscription", excerpt: "How to upgrade, downgrade, or cancel your PrivacyCrumb subscription.", readTime: "3 min", tags: ["Billing"], slug: "/index-23/knowledge-base/managing-subscription" },
      { title: "Multi-Site Management", excerpt: "Set up and manage multiple websites under a single PrivacyCrumb account.", readTime: "5 min", tags: ["Multi-Site", "Pro"], slug: "/index-23/knowledge-base/multi-site" },
    ]
  },
];

const totalArticles = categories.reduce((sum, c) => sum + c.articles.length, 0);

/* ====== PAGE ====== */
export default function KnowledgeBasePage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filtered = search.trim()
    ? categories.map(c => ({
        ...c,
        articles: c.articles.filter(a =>
          a.title.toLowerCase().includes(search.toLowerCase()) ||
          a.excerpt.toLowerCase().includes(search.toLowerCase()) ||
          a.tags.some(t => t.toLowerCase().includes(search.toLowerCase()))
        )
      })).filter(c => c.articles.length > 0)
    : selectedCategory
      ? categories.filter(c => c.title === selectedCategory)
      : categories;

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero + Search */}
        <section className="text-center pt-24 pb-14 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Knowledge Base</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Learn everything about{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">cookie compliance</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                {totalArticles} in-depth articles across {categories.length} categories to help you master privacy compliance.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative max-w-lg mx-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => { setSearch(e.target.value); setSelectedCategory(null); }}
                  placeholder="Search articles..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Category filter pills */}
        {!search.trim() && (
          <section className="pb-8 px-6">
            <div className="max-w-5xl mx-auto">
              <FadeIn>
                <div className="flex flex-wrap gap-2 justify-center">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                      !selectedCategory
                        ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                        : "border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-coral/30"
                    }`}
                  >
                    All ({totalArticles})
                  </button>
                  {categories.map(c => (
                    <button
                      key={c.title}
                      onClick={() => setSelectedCategory(selectedCategory === c.title ? null : c.title)}
                      className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                        selectedCategory === c.title
                          ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900"
                          : "border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 hover:border-coral/30"
                      }`}
                    >
                      <c.icon size={12} /> {c.title} ({c.articles.length})
                    </button>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Articles Grid */}
        <section className="py-10 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <Search size={32} className="text-neutral-300 dark:text-neutral-600 mx-auto mb-3" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">No articles found for &ldquo;{search}&rdquo;</p>
                <button onClick={() => setSearch("")} className="text-coral text-sm font-medium mt-2 hover:underline">Clear search</button>
              </div>
            ) : (
              <div className="space-y-10">
                {filtered.map((cat) => (
                  <FadeIn key={cat.title}>
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-8 rounded-lg bg-white dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 flex items-center justify-center">
                          <cat.icon size={16} className={cat.color} />
                        </div>
                        <div>
                          <h2 className="text-sm font-semibold text-neutral-900 dark:text-white">{cat.title}</h2>
                          <p className="text-[11px] text-neutral-400">{cat.desc}</p>
                        </div>
                        <span className="ml-auto text-[11px] text-neutral-400 bg-neutral-100 dark:bg-neutral-800 px-2 py-0.5 rounded-md">{cat.articles.length} articles</span>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3">
                        {cat.articles.map((article) => (
                          <motion.a
                            key={article.title}
                            href={article.slug || "#"}
                            whileHover={{ y: -2 }}
                            className="block p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer hover:border-coral/30 hover:shadow-sm transition-all group"
                          >
                            <div className="flex items-start justify-between gap-3 mb-2">
                              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white group-hover:text-coral transition-colors">{article.title}</h3>
                              <ChevronRight size={14} className="text-neutral-300 dark:text-neutral-600 flex-shrink-0 mt-0.5 group-hover:text-coral transition-colors" />
                            </div>
                            <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed mb-3">{article.excerpt}</p>
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-[10px] text-neutral-400">{article.readTime} read</span>
                              {article.tags.map(tag => (
                                <span key={tag} className="text-[10px] px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">{tag}</span>
                              ))}
                            </div>
                          </motion.a>
                        ))}
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Stats bar */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: FileText, value: `${totalArticles}`, label: "Articles" },
              { icon: BookOpen, value: `${categories.length}`, label: "Categories" },
              { icon: Zap, value: "Weekly", label: "Updated" },
              { icon: Lock, value: "Free", label: "Access" },
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
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Can&apos;t find what you&apos;re looking for?</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Our support team is happy to help with any questions.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="/index-23/contact"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                >
                  Contact Support <ArrowRight size={14} />
                </motion.a>
                <motion.a
                  href="/index-23/help-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  Help Center
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
