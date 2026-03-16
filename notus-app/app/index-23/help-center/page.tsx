"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, BookOpen, Settings, Shield, Code, CreditCard,
  Globe, Palette, BarChart3, HelpCircle, ChevronDown, ChevronRight,
  ArrowRight, Mail, MessageCircle, FileText, Zap, Users, Lock
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const categories: { icon: LucideIcon; title: string; desc: string; color: string; articles: { q: string; a: string }[] }[] = [
  {
    icon: BookOpen, title: "Getting Started", desc: "Setup guides and first steps", color: "text-blue-500",
    articles: [
      { q: "How do I install PrivacyCrumb on my website?", a: "Add a single script tag to your website's <head> section. Copy it from your dashboard under Settings → Installation. It works with any platform — WordPress, Shopify, Wix, custom HTML, and more." },
      { q: "How long does setup take?", a: "Most users are up and running in under 5 minutes. Just paste the script, configure your banner, and you're compliant." },
      { q: "Do I need technical skills to use PrivacyCrumb?", a: "Not at all. Our visual editor lets you customize everything without writing code. If you're a developer, we also offer a full JavaScript API." },
    ]
  },
  {
    icon: Shield, title: "Compliance & Privacy", desc: "GDPR, CCPA, and regulation guides", color: "text-green-500",
    articles: [
      { q: "Which privacy regulations does PrivacyCrumb support?", a: "We support GDPR (EU), CCPA/CPRA (California), LGPD (Brazil), PIPEDA (Canada), POPIA (South Africa), ePrivacy Directive, and many more. Our system auto-updates when laws change." },
      { q: "How does auto-blocking work?", a: "PrivacyCrumb automatically blocks non-essential cookies (analytics, marketing, etc.) before the user gives consent. Only strictly necessary cookies are allowed by default." },
      { q: "Does PrivacyCrumb keep consent logs?", a: "Yes. Every consent action is recorded with timestamps, IP addresses (anonymized), and user preferences. These logs are stored securely and available for audit." },
    ]
  },
  {
    icon: Palette, title: "Banner Customization", desc: "Design and styling your consent banner", color: "text-purple-500",
    articles: [
      { q: "Can I match the banner to my brand colors?", a: "Absolutely. Use our visual editor to customize colors, fonts, button styles, position, and layout. Preview changes in real-time before publishing." },
      { q: "What banner layouts are available?", a: "We offer bottom bar, top bar, center modal, corner popup, and full-screen overlay layouts. Each can be further customized." },
      { q: "Can I add custom CSS to the banner?", a: "Yes. Pro and Enterprise plans include a custom CSS editor for pixel-perfect control over your consent banner styling." },
    ]
  },
  {
    icon: Code, title: "Developer Guide", desc: "API docs and technical integration", color: "text-orange-500",
    articles: [
      { q: "Does PrivacyCrumb have a JavaScript API?", a: "Yes. Our API lets you programmatically check consent status, listen for consent changes, and trigger banner display. Full documentation is available in your dashboard." },
      { q: "How do I integrate with Google Tag Manager?", a: "PrivacyCrumb integrates natively with GTM. Enable the GTM integration in your dashboard, and we'll automatically fire consent-mode signals to control your tags." },
      { q: "Can I use PrivacyCrumb with a Single Page Application?", a: "Yes. Our script automatically detects route changes in SPAs (React, Vue, Angular, Next.js). No additional configuration needed." },
    ]
  },
  {
    icon: CreditCard, title: "Billing & Plans", desc: "Pricing, invoices, and subscriptions", color: "text-pink-500",
    articles: [
      { q: "What happens when I exceed my page view limit?", a: "We'll send you a notification at 80% and 100% usage. Your banner stays active — we never remove compliance protection. You can upgrade anytime." },
      { q: "Can I switch plans at any time?", a: "Yes. Upgrade or downgrade anytime from your dashboard. Changes take effect immediately and billing is prorated." },
      { q: "Do you offer refunds?", a: "We offer a 14-day money-back guarantee on all paid plans. Contact support within 14 days of your first payment for a full refund." },
    ]
  },
  {
    icon: Globe, title: "Geo-Targeting", desc: "Location-based banner rules", color: "text-teal-500",
    articles: [
      { q: "How does geo-targeting work?", a: "PrivacyCrumb detects your visitor's location automatically and shows the appropriate consent banner. EU visitors see GDPR-compliant banners, US visitors see CCPA-compliant ones, and so on." },
      { q: "Can I create custom rules per region?", a: "Yes. On Pro and Enterprise plans, you can create custom consent rules for any country or region — including banner language, required consent options, and blocking behavior." },
      { q: "What happens if location detection fails?", a: "If we can't determine a visitor's location, we default to the strictest compliance rules (GDPR) to ensure your site stays protected." },
    ]
  },
];

const popularArticles = [
  "How do I install PrivacyCrumb on my website?",
  "Which privacy regulations does PrivacyCrumb support?",
  "How does auto-blocking work?",
  "Can I match the banner to my brand colors?",
  "Does PrivacyCrumb have a JavaScript API?",
  "How does geo-targeting work?",
];

/* ====== FAQ ACCORDION ====== */
function ArticleAccordion({ article }: { article: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200">{article.q}</span>
        <ChevronDown size={16} className={`text-neutral-400 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden"
          >
            <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pb-4">{article.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ====== PAGE ====== */
export default function HelpCenterPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  const filteredCategories = search.trim()
    ? categories.map(cat => ({
        ...cat,
        articles: cat.articles.filter(a =>
          a.q.toLowerCase().includes(search.toLowerCase()) ||
          a.a.toLowerCase().includes(search.toLowerCase())
        )
      })).filter(cat => cat.articles.length > 0)
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
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Help Center</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                How can we help?
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                Search our knowledge base or browse by category to find answers.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="relative max-w-lg mx-auto">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search articles, topics, questions..."
                  className="w-full pl-11 pr-4 py-3.5 rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Popular Articles */}
        {!search.trim() && (
          <section className="pb-12 px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-4">Popular Articles</h2>
                <div className="grid md:grid-cols-2 gap-2">
                  {popularArticles.map((title) => (
                    <button
                      key={title}
                      onClick={() => {
                        setSearch(title.split(" ").slice(0, 4).join(" "));
                      }}
                      className="flex items-center gap-2 text-left px-4 py-3 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:border-coral/30 hover:shadow-sm transition-all text-sm text-neutral-700 dark:text-neutral-300"
                    >
                      <FileText size={14} className="text-coral flex-shrink-0" />
                      {title}
                    </button>
                  ))}
                </div>
              </FadeIn>
            </div>
          </section>
        )}

        {/* Categories Grid */}
        <section className="py-12 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            {!search.trim() && (
              <FadeIn>
                <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Browse by Category</h2>
              </FadeIn>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredCategories.map((cat, i) => (
                <FadeIn key={cat.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    onClick={() => setActiveCategory(activeCategory === i ? null : i)}
                    className={`p-5 rounded-2xl border bg-white dark:bg-neutral-900 cursor-pointer transition-all ${
                      activeCategory === i
                        ? "border-coral/40 shadow-md"
                        : "border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center">
                        <cat.icon size={18} className={cat.color} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{cat.title}</h3>
                        <p className="text-[11px] text-neutral-400">{cat.articles.length} articles</p>
                      </div>
                      <ChevronRight size={14} className={`text-neutral-400 transition-transform ${activeCategory === i ? "rotate-90" : ""}`} />
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{cat.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>

            {/* Expanded category articles */}
            <AnimatePresence>
              {activeCategory !== null && filteredCategories[activeCategory] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-4 flex items-center gap-2">
                      {(() => { const Icon = filteredCategories[activeCategory].icon; return <Icon size={16} className={filteredCategories[activeCategory].color} />; })()}
                      {filteredCategories[activeCategory].title}
                    </h3>
                    {filteredCategories[activeCategory].articles.map(article => (
                      <ArticleAccordion key={article.q} article={article} />
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Search results inline */}
            {search.trim() && filteredCategories.length > 0 && activeCategory === null && (
              <div className="mt-6 space-y-4">
                {filteredCategories.map(cat => (
                  <div key={cat.title} className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3 flex items-center gap-2">
                      <cat.icon size={16} className={cat.color} />
                      {cat.title}
                    </h3>
                    {cat.articles.map(article => (
                      <ArticleAccordion key={article.q} article={article} />
                    ))}
                  </div>
                ))}
              </div>
            )}

            {search.trim() && filteredCategories.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle size={32} className="text-neutral-300 dark:text-neutral-600 mx-auto mb-3" />
                <p className="text-sm text-neutral-500 dark:text-neutral-400">No articles found for &ldquo;{search}&rdquo;</p>
                <button onClick={() => setSearch("")} className="text-coral text-sm font-medium mt-2 hover:underline">Clear search</button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: FileText, value: "18+", label: "Help Articles" },
                { icon: Zap, value: "<2min", label: "Avg. Response" },
                { icon: Users, value: "10k+", label: "Users Helped" },
                { icon: Lock, value: "99.9%", label: "Issues Resolved" },
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
          </div>
        </section>

        {/* Contact Support CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-8 md:p-10 text-center">
                <h2 className="text-xl md:text-2xl font-semibold mb-3 text-neutral-900 dark:text-white">
                  Still need help?
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
                  Our support team is here to help. Reach out through any of these channels and we&apos;ll get back to you quickly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <a href="mailto:support@privacycrumb.com" className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-coral/30 hover:shadow-sm transition-all">
                    <Mail size={20} className="text-coral" />
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">Email Us</span>
                    <span className="text-[11px] text-neutral-400">support@privacycrumb.com</span>
                  </a>
                  <a href="/contact.html" className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-coral/30 hover:shadow-sm transition-all">
                    <MessageCircle size={20} className="text-coral" />
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">Live Chat</span>
                    <span className="text-[11px] text-neutral-400">Mon–Fri, 9am–5pm</span>
                  </a>
                  <a href="/faq.html" className="flex flex-col items-center gap-2 p-5 rounded-2xl border border-neutral-100 dark:border-neutral-800 hover:border-coral/30 hover:shadow-sm transition-all">
                    <HelpCircle size={20} className="text-coral" />
                    <span className="text-sm font-medium text-neutral-900 dark:text-white">FAQ</span>
                    <span className="text-[11px] text-neutral-400">Common questions</span>
                  </a>
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
