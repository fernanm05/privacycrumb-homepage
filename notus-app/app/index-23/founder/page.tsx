"use client";
import { motion } from "framer-motion";
import {
  Rocket, Shield, Clock, Zap, CheckCircle, ArrowRight,
  BarChart3, Globe, Code, CreditCard, Lock, Users,
  TrendingUp, Star, BookOpen, MousePointer
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const painPoints = [
  { icon: Clock, title: "No Time to Figure Out Privacy Laws", desc: "You're shipping product, hiring, and fundraising. Learning GDPR, CCPA, and 20+ other regulations isn't on your sprint board." },
  { icon: Code, title: "Don't Want to Build It Yourself", desc: "Building a compliant cookie banner from scratch takes weeks of dev time you don't have — and requires ongoing maintenance." },
  { icon: CreditCard, title: "Budget-Conscious", desc: "Enterprise compliance tools cost $500+/month. As a founder, every dollar matters and goes toward growth." },
  { icon: Shield, title: "Worried About Fines", desc: "GDPR fines reach up to €20M or 4% of revenue. One compliance mistake could wipe out your runway." },
];

const solutions = [
  { icon: Zap, title: "5-Minute Setup", desc: "One script tag. That's it. Copy from your dashboard, paste into your site, and you're compliant in minutes — not months.", highlight: true },
  { icon: Globe, title: "Auto Geo-Targeting", desc: "PrivacyCrumb detects visitor locations and shows the right banner for each regulation. No configuration needed." },
  { icon: Lock, title: "Auto-Blocking", desc: "Non-essential cookies are blocked before consent. You're compliant by default, not by accident." },
  { icon: BarChart3, title: "Consent Analytics", desc: "See your consent rates, opt-in trends, and compliance status at a glance — right in your dashboard." },
  { icon: MousePointer, title: "No-Code Customization", desc: "Visual editor to match your brand. Change colors, layout, text — no developer required." },
  { icon: TrendingUp, title: "Scales With You", desc: "Start free, upgrade as you grow. From side project to Series A, PrivacyCrumb grows with your company." },
];

const testimonials = [
  { quote: "I set up PrivacyCrumb in 3 minutes and forgot about compliance. It just works.", name: "Sarah K.", role: "Founder, DataPulse", rating: 5 },
  { quote: "As a solo founder, I can't afford to spend time on cookie banners. PrivacyCrumb solved it instantly.", name: "James M.", role: "CEO, ShipFast.io", rating: 5 },
  { quote: "We went from 0 to GDPR-compliant before our EU launch. Couldn't have done it without PrivacyCrumb.", name: "Maria L.", role: "Co-founder, Metrica", rating: 5 },
];

const steps = [
  { step: "01", title: "Sign up for free", desc: "Create your account in 30 seconds. No credit card required." },
  { step: "02", title: "Add the script tag", desc: "Copy one line of code to your website's <head> section." },
  { step: "03", title: "Customize your banner", desc: "Use the visual editor to match your brand — colors, layout, text." },
  { step: "04", title: "Go live", desc: "Your visitors see a compliant banner. Cookies auto-blocked. You're done." },
];

/* ====== PAGE ====== */
export default function FounderPage() {
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
                <Rocket size={12} /> For Founders & Startups
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Ship fast.{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Stay compliant.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                Cookie compliance shouldn&apos;t slow you down. PrivacyCrumb gives founders GDPR, CCPA, and global compliance in 5 minutes — so you can focus on building.
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
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">The Problem</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Privacy compliance is a founder&apos;s headache</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4">
              {painPoints.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.08}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
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
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">PrivacyCrumb handles it all for you</h3>
            </FadeIn>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {solutions.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.06}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`p-5 rounded-2xl border bg-white dark:bg-neutral-900 transition-all ${
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
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Compliant in 4 simple steps</h3>
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
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Trusted by Founders</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">What founders are saying</h3>
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} size={12} className="text-amber-400 fill-amber-400" />
                      ))}
                    </div>
                    <p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed mb-4 italic">&ldquo;{t.quote}&rdquo;</p>
                    <div>
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
              { icon: Users, value: "10k+", label: "Startups Trust Us" },
              { icon: Clock, value: "5 min", label: "Setup Time" },
              { icon: Globe, value: "20+", label: "Regulations" },
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

        {/* Final CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-8 md:p-10 text-center">
                <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white mb-3">
                  Ready to ship without worrying about compliance?
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 max-w-md mx-auto">
                  Join 10,000+ founders who trust PrivacyCrumb to handle cookie compliance. Start free — no credit card required.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <motion.a href="https://app.privacycrumb.com/signup" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                    Get Started Free <ArrowRight size={14} />
                  </motion.a>
                  <motion.a href="/index-23/contact" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                    Talk to Us
                  </motion.a>
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-[11px] text-neutral-400">
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> Free plan available</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> No credit card</span>
                  <span className="flex items-center gap-1"><CheckCircle size={10} className="text-green-500" /> 5-min setup</span>
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
