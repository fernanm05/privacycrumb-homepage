"use client";
import { motion } from "framer-motion";
import { Shield, Globe, Heart, Code, Zap, Users, Lock, Eye, Scale, ArrowRight } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const stats = [
  { value: "10,000+", label: "Websites Protected" },
  { value: "50M+", label: "Consent Interactions" },
  { value: "120+", label: "Countries Served" },
  { value: "99.9%", label: "Uptime Guarantee" },
];

const values = [
  { Icon: Shield, title: "Privacy First", desc: "We believe privacy is a fundamental right. Every feature we build starts with the question: does this protect the user?" },
  { Icon: Eye, title: "Transparency", desc: "We practice what we preach. Our processes, pricing, and policies are open and honest — no hidden fees, no dark patterns." },
  { Icon: Heart, title: "Simplicity", desc: "Cookie compliance shouldn't require a legal degree. We make it simple for businesses of any size to stay compliant." },
  { Icon: Code, title: "Developer Friendly", desc: "Built by developers, for developers. Clean APIs, comprehensive docs, and integrations that just work." },
  { Icon: Globe, title: "Global Compliance", desc: "Privacy laws differ by region. We stay on top of every regulation so you don't have to — from GDPR to CCPA and beyond." },
  { Icon: Users, title: "Customer Obsessed", desc: "Your success is our success. We provide hands-on support and listen to feedback to constantly improve." },
];

const timeline = [
  { year: "2022", title: "The Spark", desc: "Frustrated by the complexity of cookie consent, our founders set out to build something better." },
  { year: "2023", title: "Launch & Growth", desc: "PrivacyCrumb went live — and quickly grew to protect thousands of websites across 50+ countries." },
  { year: "2024", title: "Enterprise Ready", desc: "Launched enterprise features, multi-site management, and advanced analytics for larger organizations." },
  { year: "2025", title: "Global Expansion", desc: "Expanded compliance coverage to 120+ countries with auto-updating regulation support." },
];

const team = [
  { name: "Alex Rivera", role: "CEO & Co-Founder", bio: "Former privacy counsel at a Fortune 500. Passionate about making compliance accessible." },
  { name: "Sarah Chen", role: "CTO & Co-Founder", bio: "Full-stack engineer with 12+ years building scalable SaaS platforms." },
  { name: "Marcus Williams", role: "Head of Compliance", bio: "CIPP/E certified. Previously led privacy programs at two leading DPAs." },
  { name: "Priya Patel", role: "Head of Product", bio: "UX-obsessed product leader. Believes great software should feel invisible." },
];

export default function AboutPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">About PrivacyCrumb</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-6 tracking-tight text-neutral-900 dark:text-white">
                Making cookie consent{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">simple for everyone</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                We&apos;re on a mission to make privacy compliance effortless — so businesses can focus on building great products, not deciphering legal jargon.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Stats */}
        <section className="pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((s, i) => (
                <FadeIn key={s.label} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="text-center p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white mb-1">{s.value}</div>
                    <div className="text-xs text-neutral-500 dark:text-neutral-400">{s.label}</div>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-coral text-sm font-medium mb-2 tracking-wide">Our Story</p>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                    Born from frustration, built with purpose
                  </h2>
                  <div className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    <p>
                      In 2022, our founders tried to add cookie consent to a simple portfolio site. The existing tools were either absurdly complex, outrageously expensive, or simply didn&apos;t work properly.
                    </p>
                    <p>
                      That frustration sparked a simple question: <em className="text-neutral-900 dark:text-white font-medium">&quot;Why does staying compliant have to be this hard?&quot;</em>
                    </p>
                    <p>
                      PrivacyCrumb was born with one goal — to make cookie compliance as easy as adding a single line of code. Today, we protect over 10,000 websites and handle millions of consent interactions every month.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="bg-neutral-100 dark:bg-neutral-800 rounded-2xl p-8 border border-neutral-200/80 dark:border-neutral-700">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center">
                        <Lock className="text-coral" size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-neutral-900 dark:text-white">Our Promise</div>
                        <div className="text-xs text-neutral-500 dark:text-neutral-400">To every website owner</div>
                      </div>
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Compliance shouldn't cost a fortune",
                        "Setup should take minutes, not days",
                        "Your data stays yours — always",
                        "We update when laws change, so you don't have to",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-coral mt-0.5 flex-shrink-0">
                            <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <SectionHeader label="Our Journey" title="From idea to 10,000+ websites" subtitle="" />
            </FadeIn>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-[22px] md:left-1/2 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800 -translate-x-1/2" />
              <div className="space-y-10">
                {timeline.map((t, i) => (
                  <FadeIn key={t.year} delay={i * 0.1}>
                    <div className={`flex items-start gap-6 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""} hidden md:block`}>
                        <div className="inline-block p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                          <div className="text-coral text-xs font-bold mb-1">{t.year}</div>
                          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{t.title}</h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                        </div>
                      </div>
                      {/* Dot */}
                      <div className="relative z-10 flex-shrink-0">
                        <motion.div
                          whileInView={{ scale: [0, 1.2, 1] }}
                          viewport={{ once: true }}
                          className="w-[14px] h-[14px] rounded-full bg-coral border-[3px] border-white dark:border-neutral-950 shadow-sm mt-1.5"
                        />
                      </div>
                      {/* Mobile card (always visible) & spacer */}
                      <div className="flex-1 md:hidden">
                        <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                          <div className="text-coral text-xs font-bold mb-1">{t.year}</div>
                          <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{t.title}</h3>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.desc}</p>
                        </div>
                      </div>
                      <div className="flex-1 hidden md:block" />
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Our Values" title="What drives us every day" subtitle="These six principles guide every decision we make — from the features we build to the partners we choose." />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4">
              {values.map((v, i) => (
                <FadeIn key={v.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <v.Icon className="text-coral" size={20} />
                    </div>
                    <h3 className="text-[15px] font-semibold mb-1.5 text-neutral-900 dark:text-white">{v.title}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{v.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Our Team" title="The people behind PrivacyCrumb" subtitle="A small, focused team obsessed with building the best cookie compliance platform on the planet." />
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {team.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center transition-shadow hover:shadow-md"
                  >
                    {/* Avatar */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-coral/20 to-coral/5 border border-coral/20 flex items-center justify-center mx-auto mb-3">
                      <span className="text-lg font-bold text-coral">{t.name.split(" ").map(n => n[0]).join("")}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">{t.name}</h3>
                    <p className="text-[11px] text-coral font-medium mb-2">{t.role}</p>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{t.bio}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Legal & Compliance */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-8 md:p-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <Scale className="text-coral" size={20} />
                    </div>
                    <h2 className="text-xl font-semibold mb-2 text-neutral-900 dark:text-white">Committed to Compliance</h2>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                      PrivacyCrumb is designed from the ground up to comply with the world&apos;s major privacy regulations. We continuously monitor regulatory changes and update our platform automatically.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["GDPR", "CCPA", "CPRA", "LGPD", "PIPEDA", "ePrivacy", "POPIA"].map(reg => (
                        <span key={reg} className="px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-xs font-semibold text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-neutral-700">
                          {reg}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { icon: Zap, label: "Auto-updating", desc: "Rules update when laws change" },
                      { icon: Globe, label: "120+ Countries", desc: "Global regulation coverage" },
                      { icon: Shield, label: "SOC 2 Type II", desc: "Enterprise-grade security" },
                      { icon: Lock, label: "Data Encrypted", desc: "At rest and in transit" },
                    ].map(c => (
                      <div key={c.label} className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-100 dark:border-neutral-700/50">
                        <c.icon size={16} className="text-coral mb-1.5" />
                        <div className="text-xs font-semibold text-neutral-900 dark:text-white">{c.label}</div>
                        <div className="text-[10px] text-neutral-500 dark:text-neutral-400">{c.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                Ready to simplify cookie compliance?
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">
                Join 10,000+ websites that trust PrivacyCrumb to keep them compliant. Start for free — no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a
                  href="https://app.privacycrumb.com/signup"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                >
                  Get Started Free <ArrowRight size={16} />
                </motion.a>
                <motion.a
                  href="/index-23/pricing"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-8 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  View Pricing
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
