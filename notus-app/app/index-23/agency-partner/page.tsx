"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Handshake, BadgePercent, Users, ArrowRight, CheckCircle,
  Globe, Shield, Zap, BarChart3, Award, Heart, Rocket,
  Building2, TrendingUp, Star
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const benefits = [
  { icon: BadgePercent, title: "Generous Revenue Share", desc: "Earn up to 30% recurring commission on every client you bring to PrivacyCrumb. Passive income that grows with your portfolio." },
  { icon: Handshake, title: "Dedicated Partner Support", desc: "Get a dedicated partner manager, priority support, and direct access to our engineering team for custom integrations." },
  { icon: Award, title: "Co-Branded Materials", desc: "Receive co-branded marketing materials, case studies, and sales collateral to help you pitch compliance to your clients." },
  { icon: Rocket, title: "Early Access to Features", desc: "Be the first to test and deploy new features. Shape our product roadmap with direct input from your agency's needs." },
  { icon: Globe, title: "Multi-Region Expertise", desc: "We handle GDPR, CCPA, LGPD, PIPEDA, and 120+ regional regulations. You offer compliance as a service — we do the heavy lifting." },
  { icon: BarChart3, title: "Partner Dashboard", desc: "Track your referrals, commissions, client adoption, and performance — all from a dedicated partner analytics dashboard." },
];

const tiers = [
  {
    name: "Silver",
    minClients: "5+",
    commission: "15%",
    perks: ["Partner badge", "Co-branded landing page", "Quarterly business review", "Email support"],
  },
  {
    name: "Gold",
    minClients: "15+",
    commission: "20%",
    perks: ["All Silver perks", "Dedicated partner manager", "Priority support", "Custom onboarding for clients", "Marketing development funds"],
    featured: true,
  },
  {
    name: "Platinum",
    minClients: "30+",
    commission: "30%",
    perks: ["All Gold perks", "Custom API integration support", "Joint case studies & PR", "Annual partner retreat invite", "Exclusive beta access", "Revenue share on renewals"],
  },
];

const testimonials = [
  { quote: "Partnering with PrivacyCrumb added a new revenue stream for our agency. The 20% recurring commission really adds up across our client base.", name: "Sarah K.", role: "Managing Director, BrightWeb Agency", rating: 5 },
  { quote: "Our clients trust us more because we can offer compliance as a built-in service. PrivacyCrumb's partner program made that possible.", name: "James T.", role: "Founder, DigitalFirst Studio", rating: 5 },
  { quote: "The dedicated partner manager alone is worth it. They helped us close three enterprise deals in the first month.", name: "Laura M.", role: "Head of Partnerships, GrowthLab", rating: 5 },
];

const steps = [
  { step: "01", title: "Apply to the program", desc: "Fill out the partner application form below. We review applications within 48 hours." },
  { step: "02", title: "Get onboarded", desc: "Once approved, you'll receive access to the partner dashboard, sales materials, and your dedicated partner manager." },
  { step: "03", title: "Refer & earn", desc: "Start referring clients to PrivacyCrumb. Every new client you bring earns you a recurring commission." },
  { step: "04", title: "Grow together", desc: "Hit tier milestones to unlock higher commissions, more resources, and exclusive benefits." },
];

const clientRanges = ["1–5", "6–15", "16–30", "31–50", "51–100", "100+"];

export default function AgencyPartnerPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", agencyName: "", website: "", clients: "", agreed: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-16 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <span className="inline-flex items-center gap-1.5 text-coral text-sm font-medium mb-4 tracking-wide">
                <Handshake size={16} /> Partner Program
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Grow your agency with{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">PrivacyCrumb</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Earn recurring revenue, delight your clients with effortless compliance, and unlock exclusive resources as an official agency partner.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-3 justify-center mt-8">
                <motion.a
                  href="#apply"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-8 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                >
                  Apply Now <ArrowRight size={16} />
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Why Partner With Us" title="Benefits that grow your business" subtitle="Everything you need to offer privacy compliance as a service — and earn while doing it." />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {benefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.08}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full transition-shadow hover:shadow-md"
                  >
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <b.icon className="text-coral" size={20} />
                    </div>
                    <h3 className="text-[15px] font-semibold mb-1.5 text-neutral-900 dark:text-white">{b.title}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{b.desc}</p>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Partner Tiers" title="Choose the tier that fits your agency" subtitle="Grow your partnership and unlock more rewards as you bring on more clients." />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {tiers.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`p-6 rounded-2xl border h-full flex flex-col transition-shadow hover:shadow-md ${t.featured ? "border-coral bg-white dark:bg-neutral-900 shadow-[0_0_0_1px_theme(colors.coral)]" : "border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900"}`}
                  >
                    {t.featured && (
                      <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-white bg-coral px-2.5 py-1 rounded-full mb-4 self-start">Most Popular</span>
                    )}
                    <h3 className="text-lg font-bold text-neutral-900 dark:text-white">{t.name}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">{t.minClients} referred clients</p>
                    <div className="my-4">
                      <span className="text-3xl font-bold text-coral">{t.commission}</span>
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">recurring commission</span>
                    </div>
                    <ul className="space-y-2 flex-1">
                      {t.perks.map((p) => (
                        <li key={p} className="flex items-start gap-2 text-[13px] text-neutral-600 dark:text-neutral-400">
                          <CheckCircle size={14} className="text-coral mt-0.5 flex-shrink-0" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <motion.a
                      href="#apply"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`mt-6 inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-medium transition-colors ${t.featured ? "bg-coral text-white hover:bg-coral/90" : "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-black dark:hover:bg-neutral-100"}`}
                    >
                      Get Started <ArrowRight size={14} />
                    </motion.a>
                  </motion.div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="How It Works" title="From application to revenue in 4 steps" subtitle="" />
            </FadeIn>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 mt-2">
              {steps.map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.1}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <span className="text-2xl font-bold text-coral/30">{s.step}</span>
                    <h3 className="text-sm font-semibold mt-2 mb-1.5 text-neutral-900 dark:text-white">{s.title}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Partner Stories" title="What our partners say" subtitle="" />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {testimonials.map((t, i) => (
                <FadeIn key={t.name} delay={i * 0.1}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex flex-col">
                    <div className="flex gap-0.5 mb-3">
                      {Array.from({ length: t.rating }).map((_, si) => (
                        <Star key={si} size={13} className="text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                    <p className="text-[13px] text-neutral-600 dark:text-neutral-400 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                    <div className="mt-4 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">{t.name}</p>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{t.role}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 px-6 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
              {/* Left */}
              <FadeIn>
                <div>
                  <p className="text-coral text-sm font-medium mb-2 tracking-wide">Become a Partner</p>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white leading-tight">
                    Apply to the agency partner program
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    Fill out the form and our partnerships team will review your application within 48 hours. No commitments — just an intro conversation.
                  </p>
                  <div className="space-y-3">
                    {[
                      "No minimum client count to apply",
                      "Free to join — no partner fees",
                      "Cancel anytime, no lock-in",
                      "Commissions paid monthly via wire or PayPal",
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <CheckCircle size={15} className="text-coral mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-neutral-600 dark:text-neutral-400">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Right — Form */}
              <FadeIn delay={0.15}>
                <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-14 h-14 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="text-coral" size={28} />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Application submitted!</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">We&apos;ll review your application and get back to you within 48 hours.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name *</label>
                          <input required type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Email *</label>
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="you@agency.com" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Agency Name *</label>
                          <input required type="text" value={formData.agencyName} onChange={(e) => setFormData({ ...formData, agencyName: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="Your agency" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Website</label>
                          <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="https://youragency.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">How many clients do you manage? *</label>
                        <select required value={formData.clients} onChange={(e) => setFormData({ ...formData, clients: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all">
                          <option value="">Select range</option>
                          {clientRanges.map((r) => <option key={r} value={r}>{r} clients</option>)}
                        </select>
                      </div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input required type="checkbox" checked={formData.agreed} onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })} className="mt-0.5 accent-[#E8825C]" />
                        <span className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">I agree to PrivacyCrumb&apos;s <a href="/index-23/privacy-policy" className="text-neutral-500 dark:text-neutral-400 underline hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">privacy policy</a> and partner terms.</span>
                      </label>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                      >
                        Submit Application <ArrowRight size={15} />
                      </motion.button>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
