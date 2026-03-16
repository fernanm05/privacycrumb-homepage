"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail, CheckCircle, Bell, Shield, BarChart3,
  FileText, BookOpen, Globe, Zap, ArrowRight, Clock, Users
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const pastIssues = [
  { title: "Google Consent Mode v2 — What You Need to Know", date: "Mar 10, 2025", tag: "Regulation Update", tagColor: "text-blue-500 bg-blue-500/10" },
  { title: "Third-Party Cookie Phase-Out: Your Action Plan", date: "Feb 24, 2025", tag: "Industry News", tagColor: "text-amber-500 bg-amber-500/10" },
  { title: "5 Banner Designs That Boost Consent Rates by 40%", date: "Feb 10, 2025", tag: "Best Practices", tagColor: "text-green-500 bg-green-500/10" },
  { title: "CCPA Updates: New CPRA Enforcement Begins", date: "Jan 27, 2025", tag: "Regulation Update", tagColor: "text-blue-500 bg-blue-500/10" },
  { title: "How PrivacyCrumb Scans 10M+ Cookies Daily", date: "Jan 13, 2025", tag: "Product Update", tagColor: "text-purple-500 bg-purple-500/10" },
  { title: "The Complete GDPR Audit Checklist for 2025", date: "Dec 16, 2024", tag: "Guide", tagColor: "text-coral bg-coral/10" },
];

const topics = [
  { icon: Shield, label: "Regulation Updates", desc: "GDPR, CCPA, and global law changes" },
  { icon: BarChart3, label: "Product Updates", desc: "New features and improvements" },
  { icon: BookOpen, label: "Guides & Tutorials", desc: "Step-by-step compliance guides" },
  { icon: Globe, label: "Industry News", desc: "Privacy trends and analysis" },
];

/* ====== PAGE ====== */
export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubscribed(true);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero + Subscribe */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Newsletter</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Stay ahead of{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">privacy changes</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-10">
                Join 5,000+ founders, developers, and compliance teams who get actionable privacy insights delivered every two weeks.
              </p>
            </FadeIn>

            {/* Subscribe form */}
            <FadeIn delay={0.3}>
              {!subscribed ? (
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
                  <div className="flex items-center gap-2 border border-neutral-200 dark:border-neutral-700 rounded-2xl bg-white dark:bg-neutral-900 p-1.5 pl-5 focus-within:border-coral/40 focus-within:ring-2 focus-within:ring-coral/10 transition-all">
                    <Mail size={16} className="text-neutral-400 flex-shrink-0" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="you@company.com"
                      className="flex-1 text-sm outline-none bg-transparent text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400"
                    />
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors flex-shrink-0"
                    >
                      Subscribe
                    </motion.button>
                  </div>
                  <p className="text-[11px] text-neutral-400 mt-3">
                    Free forever. No spam. Unsubscribe anytime.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="max-w-md mx-auto p-6 rounded-2xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                  >
                    <CheckCircle size={36} className="text-green-500 mx-auto mb-3" />
                  </motion.div>
                  <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-1">You&apos;re subscribed!</h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">Check your inbox for a welcome email. Your first issue arrives soon.</p>
                </motion.div>
              )}
            </FadeIn>
          </div>
        </section>

        {/* What you'll get */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6 text-center">What You&apos;ll Get</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {topics.map((t, i) => (
                <FadeIn key={t.label} delay={i * 0.08}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center hover:border-coral/30 hover:shadow-sm transition-all">
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-3">
                      <t.icon size={18} className="text-coral" />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{t.label}</h3>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{t.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Past issues */}
        <section className="py-14 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-6">Past Issues</h2>
            </FadeIn>
            <div className="space-y-2">
              {pastIssues.map((issue, i) => (
                <FadeIn key={issue.title} delay={i * 0.05}>
                  <motion.div
                    whileHover={{ x: 3 }}
                    className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 cursor-pointer hover:border-coral/30 hover:shadow-sm transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center flex-shrink-0">
                      <FileText size={16} className="text-coral" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors truncate">{issue.title}</h3>
                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-[10px] text-neutral-400">{issue.date}</span>
                        <span className={`text-[10px] font-medium px-1.5 py-0.5 rounded ${issue.tagColor}`}>{issue.tag}</span>
                      </div>
                    </div>
                    <ArrowRight size={14} className="text-neutral-300 dark:text-neutral-600 flex-shrink-0 group-hover:text-coral transition-colors" />
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Users, value: "5,000+", label: "Subscribers" },
              { icon: Clock, value: "Bi-Weekly", label: "Frequency" },
              { icon: Bell, value: "98%", label: "Open Rate" },
              { icon: Zap, value: "Free", label: "Forever" },
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

        {/* Final CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">Don&apos;t miss the next issue</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Subscribe today and get our latest compliance checklist as a welcome gift.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.button
                  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                >
                  Subscribe Now <Mail size={14} />
                </motion.button>
                <motion.a href="/index-23/knowledge-base" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  Browse Knowledge Base
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
