"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Building2, Users, ArrowRight, CheckCircle,
  Globe, Lock, Shield, Star, Zap, BarChart3,
  Layers, Palette, Settings, MonitorSmartphone, TrendingUp, FileText
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

/* ====== DATA ====== */

const painPoints = [
  { icon: Users, title: "Managing Compliance for Dozens of Clients", desc: "Each client has a different tech stack, branding, and regional requirements. Manually setting up compliant banners for each one is unsustainable." },
  { icon: Globe, title: "Clients in Multiple Regions", desc: "Your clients serve visitors worldwide. You need to handle GDPR, CCPA, LGPD, and more — all with different consent rules." },
  { icon: Palette, title: "Every Client Wants Custom Branding", desc: "Cookie banners need to match each client's brand identity. Generic solutions make your agency look unprofessional." },
  { icon: Shield, title: "You're Liable for Client Compliance", desc: "When a client gets a privacy fine, they blame the agency. You need a reliable compliance solution you can trust." },
];

const solutions = [
  { icon: Layers, title: "Multi-Site Dashboard", desc: "Manage all client websites from a single dashboard. Add, configure, and monitor sites without switching accounts.", highlight: true },
  { icon: Palette, title: "White-Label Banners", desc: "Fully customizable banners for each client. Match their colors, fonts, layout, and tone — your agency's quality, their brand." },
  { icon: Globe, title: "Auto Geo-Targeting", desc: "Each client's banner automatically adapts to visitor location. GDPR for EU, CCPA for California — all automatic." },
  { icon: BarChart3, title: "Client Reporting", desc: "Share consent analytics with your clients. Consent rates, visitor breakdown, and compliance status — all exportable." },
  { icon: Settings, title: "Bulk Configuration", desc: "Apply templates across multiple client sites. Set up a new client in minutes, not hours." },
  { icon: MonitorSmartphone, title: "Platform Agnostic", desc: "Works with WordPress, Shopify, Webflow, custom sites — whatever your clients use." },
];

const testimonials = [
  { quote: "We manage 40+ client sites through PrivacyCrumb. What used to take us a full day of setup per client now takes 10 minutes.", name: "Chris D.", role: "Founder, Digital Agency", rating: 5 },
  { quote: "The white-label customization is incredible. Every client gets a banner that looks like we built it from scratch.", name: "Anna P.", role: "Creative Director, Web Studio", rating: 5 },
  { quote: "Client compliance used to keep me up at night. Now I just check the dashboard and everything's green. Peace of mind.", name: "Mike L.", role: "Agency Owner, MarketPro", rating: 5 },
];

const steps = [
  { step: "01", title: "Create your agency account", desc: "Sign up and get access to the multi-site dashboard. Add your first client in under a minute." },
  { step: "02", title: "Add client websites", desc: "Add each client's domain to your dashboard. Install the script tag on their site — one line of code." },
  { step: "03", title: "Customize per client", desc: "Use templates or the visual editor to match each client's brand. Set their region rules and blocking preferences." },
  { step: "04", title: "Monitor & report", desc: "Track compliance status, consent rates, and visitor data. Export reports to keep clients informed." },
];

const clientRanges = ["1–5", "6–15", "16–30", "31–50", "51–100", "100+"];

/* ====== PAGE ====== */
export default function AgencyPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", agencyName: "", website: "", clients: "", agreed: false });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email && formData.agencyName && formData.website && formData.clients && formData.agreed) {
      setSubmitted(true);
    }
  };

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
                <Building2 size={12} /> For Agencies
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                One dashboard.{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">All your clients.</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto mb-8">
                Manage cookie compliance for every client from a single dashboard. White-label banners, auto geo-targeting, and client reporting — built for agencies that scale.
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
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Managing client compliance doesn&apos;t scale</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Built for agencies that manage multiple sites</h3>
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
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">Onboard a new client in 10 minutes</h3>
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
              <h2 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2 text-center">Agency Approved</h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white text-center mb-10">What agencies are saying</h3>
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
              { icon: Building2, value: "500+", label: "Agencies" },
              { icon: Layers, value: "10k+", label: "Sites Managed" },
              { icon: TrendingUp, value: "10 min", label: "Client Onboard" },
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

        {/* Join Us — Application Form */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left — Steps */}
              <FadeIn>
                <div>
                  <h2 className="text-xl md:text-2xl font-semibold text-neutral-900 dark:text-white leading-tight mb-8">
                    Join us today &amp;<br />chart your growth
                  </h2>
                  <div className="space-y-0">
                    {[
                      { num: 1, title: "Apply", desc: "Submit your application. We will review it and send you an email invitation." },
                      { num: 2, title: "Onboard", desc: "Create an account on our agency platform. We will run an onboarding to help you." },
                      { num: 3, title: "Launch", desc: "Purchase your first licenses and get ready to deliver PrivacyCrumb to your clients!" },
                    ].map((item, i) => (
                      <div key={item.num} className="flex gap-3">
                        <div className="flex flex-col items-center">
                          <div className="w-7 h-7 rounded-full border-2 border-coral flex items-center justify-center flex-shrink-0 bg-white dark:bg-neutral-950">
                            <span className="text-coral text-[11px] font-bold">{item.num}</span>
                          </div>
                          {i < 2 && (
                            <div className="w-px flex-1 min-h-[32px] border-l-2 border-dashed border-coral/30 dark:border-coral/20 my-1" />
                          )}
                        </div>
                        <div className="pb-5">
                          <h4 className="text-sm font-semibold text-neutral-900 dark:text-white">{item.title}</h4>
                          <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 leading-relaxed">
                            {item.desc.split("We will").map((part, idx) =>
                              idx === 0 ? part : <span key={idx}><strong>We will</strong>{part}</span>
                            )}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>

              {/* Right — Form */}
              <FadeIn delay={0.15}>
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5 md:p-6 space-y-3">
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full name*</label>
                      <input type="text" required placeholder="e.g. Mark Ephraim" value={formData.fullName}
                        onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Business email*</label>
                      <input type="email" required placeholder="you@company.com" value={formData.email}
                        onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all" />
                      <p className="text-[10px] text-neutral-400 mt-1">Please use your official website, not a hosting or website builder email.</p>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Agency name*</label>
                      <input type="text" required placeholder="Your agency name" value={formData.agencyName}
                        onChange={e => setFormData(p => ({ ...p, agencyName: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Agency website URL*</label>
                      <input type="url" required placeholder="https://youragency.com" value={formData.website}
                        onChange={e => setFormData(p => ({ ...p, website: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Total number of your clients*</label>
                      <input type="number" min="1" required placeholder="e.g. 10" value={formData.clients}
                        onChange={e => setFormData(p => ({ ...p, clients: e.target.value }))}
                        className="w-full px-3 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none" />
                    </div>
                    <label className="flex items-start gap-2 cursor-pointer">
                      <input type="checkbox" checked={formData.agreed}
                        onChange={e => setFormData(p => ({ ...p, agreed: e.target.checked }))}
                        className="mt-0.5 rounded border-neutral-300 dark:border-neutral-600 accent-[#E8825C]" />
                      <span className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">
                        I agree to receive emails from PrivacyCrumb and accept the{" "}
                        <a href="/index-23/privacy-policy" className="underline hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">Privacy Policy</a>.
                      </span>
                    </label>
                    <motion.button type="submit" whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
                      className="w-full py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                      Submit
                    </motion.button>
                  </form>
                ) : (
                  <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    className="rounded-2xl border border-green-200 dark:border-green-900 bg-green-50 dark:bg-green-950/30 p-6 text-center">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200, delay: 0.1 }}>
                      <CheckCircle size={32} className="text-green-500 mx-auto mb-3" />
                    </motion.div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">Application submitted!</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">We&apos;ll review your application and send you an invitation within 24 hours.</p>
                  </motion.div>
                )}
              </FadeIn>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
