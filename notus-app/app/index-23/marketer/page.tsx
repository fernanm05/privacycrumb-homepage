"use client";
import { motion } from "framer-motion";
import {
  BarChart3, Target, Megaphone, ArrowRight, CheckCircle,
  Globe, Lock, Shield, Users, Star, TrendingUp,
  MousePointer, Eye, Palette, LineChart, PieChart, Zap
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const painPoints = [
  { icon: Target, title: "Losing Ad Data Without Consent", desc: "Without proper consent, Google Ads and Meta Pixel can't track conversions — wasting your ad spend and blinding your attribution." },
  { icon: LineChart, title: "Analytics Gaps Hurt Decisions", desc: "When visitors reject cookies, your analytics data disappears. You're making campaign decisions with incomplete data." },
  { icon: Megaphone, title: "Retargeting Audiences Shrinking", desc: "Privacy regulations are shrinking your retargeting pools. Without consent-first marketing, you lose access to high-intent audiences." },
  { icon: Shield, title: "Compliance Kills Campaign Speed", desc: "Waiting for legal to approve every new tracking pixel slows down your marketing. You need a system that handles compliance automatically." },
];

const solutions = [
  { icon: BarChart3, title: "Consent-Driven Analytics", desc: "See real consent rates, opt-in trends, and visitor behavior. Make data-driven decisions even with privacy regulations.", highlight: true },
  { icon: TrendingUp, title: "Maximize Consent Rates", desc: "Our banner designs are optimized for consent. A/B test layouts, copy, and timing to get the highest opt-in rates possible." },
  { icon: Eye, title: "Google Consent Mode v2", desc: "Maintain measurement with Google's advanced consent signals. Get modeled conversions even when users decline cookies." },
  { icon: MousePointer, title: "No-Code Banner Editor", desc: "Match your brand perfectly with our visual editor. Change colors, layout, fonts, and copy — no developer needed." },
  { icon: Globe, title: "Smart Geo-Targeting", desc: "Show the right banner for each region automatically. EU gets GDPR, California gets CCPA — all hands-free." },
  { icon: Palette, title: "A/B Test Banners", desc: "Test different banner designs, positions, and copy to find what drives the highest consent rates for your audience." },
];

const testimonials = [
  { quote: "Our consent rates went from 42% to 78% after switching to PrivacyCrumb. That's 36% more data for our campaigns.", name: "Lisa M.", role: "Head of Marketing, E-commerce", rating: 5 },
  { quote: "Google Consent Mode v2 integration was seamless. We recovered 60% of the conversion data we were losing.", name: "Tom H.", role: "Performance Marketer, SaaS", rating: 5 },
  { quote: "I can A/B test banners and customize everything without bothering our dev team. Game changer for marketing velocity.", name: "Rachel K.", role: "Marketing Director, Agency", rating: 5 },
];

const steps = [
  { step: "01", title: "Connect your tools", desc: "PrivacyCrumb integrates with Google Analytics, GTM, Meta Pixel, and 50+ marketing tools out of the box." },
  { step: "02", title: "Design your banner", desc: "Use our visual editor to create a banner that matches your brand and maximizes consent rates." },
  { step: "03", title: "Enable Consent Mode", desc: "Turn on Google Consent Mode v2 with one click. Start recovering modeled conversions immediately." },
  { step: "04", title: "Optimize & grow", desc: "Monitor consent analytics, A/B test banner variants, and continuously improve your data collection." },
];

/* ====== PAGE ====== */
export default function MarketerPage() {
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
                <Megaphone size={12} /> For Marketers
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                More data.{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">More conversions.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                Privacy compliance doesn&apos;t mean losing your marketing data. PrivacyCrumb maximizes consent rates and keeps your analytics, ads, and retargeting running.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Start Free <ArrowRight size={14} />
                </motion.a>
                <motion.a href="/index-23/pricing" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  See Pricing
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Pain points */}
        <section className="py-14 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">The Challenge</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Privacy regulations are eating your marketing data</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.08}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="w-9 h-9 rounded-xl bg-red-50 dark:bg-red-950/30 flex items-center justify-center mb-3">
                      <p.icon size={18} className="text-red-500" />
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{p.title}</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-14 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">The Solution</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Compliance that powers your marketing</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-2xl border bg-white dark:bg-neutral-900 transition-all h-full ${
                      s.highlight
                        ? "border-coral/30 shadow-sm"
                        : "border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 hover:shadow-sm"
                    }`}
                  >
                    <div className="w-9 h-9 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center mb-3">
                      <s.icon size={18} className="text-coral" />
                    </div>
                    <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{s.title}</h4>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">How It Works</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">From setup to optimization in 4 steps</h3>
            </FadeIn>
            <div className="space-y-3">
              {steps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.08}>
                  <div className="flex items-start gap-5 p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-coral text-sm font-bold">{s.step}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h4>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{s.desc}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-14 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Marketer Approved</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">What marketers are saying</h3>
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
              { icon: TrendingUp, value: "78%", label: "Avg. Consent Rate" },
              { icon: PieChart, value: "60%", label: "Data Recovered" },
              { icon: Users, value: "50+", label: "Tool Integrations" },
              { icon: Zap, value: "Free", label: "To Start" },
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
                  Ready to recover your marketing data?
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto">
                  Join thousands of marketers who use PrivacyCrumb to maximize consent rates and keep their campaigns running.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                    Get Started Free <ArrowRight size={14} />
                  </motion.a>
                  <motion.a href="/index-23/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    Talk to Sales
                  </motion.a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> Free plan available</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> No credit card</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> 50+ integrations</span>
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
