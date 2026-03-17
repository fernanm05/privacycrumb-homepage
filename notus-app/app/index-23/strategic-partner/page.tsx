"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Briefcase, Globe, ArrowRight, CheckCircle,
  Shield, Zap, BarChart3, Building2, Star,
  Puzzle, HeartHandshake, Target, Layers, Lock, Code
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const benefits = [
  { icon: Puzzle, title: "Deep Product Integration", desc: "Embed PrivacyCrumb natively into your platform. Offer cookie consent as a built-in feature through our white-label API." },
  { icon: HeartHandshake, title: "Joint Go-to-Market", desc: "Co-develop marketing campaigns, webinars, and content. Reach new audiences together with shared brand power." },
  { icon: Target, title: "Shared Revenue Model", desc: "Custom revenue-sharing arrangements tailored to your partnership model — reseller, OEM, or co-sell." },
  { icon: Code, title: "API & SDK Access", desc: "Full access to our REST API and JavaScript SDK for deep integrations. Dedicated integration engineering support included." },
  { icon: Globe, title: "Global Compliance Coverage", desc: "Leverage our coverage of 120+ country regulations. Differentiate your platform with built-in privacy compliance." },
  { icon: Lock, title: "Enterprise-Grade Security", desc: "SOC 2 Type II certified, GDPR compliant, encrypted at rest and in transit. Your customers' data is always protected." },
];

const partnerTypes = [
  {
    icon: Layers,
    title: "Technology Partners",
    desc: "CMS platforms, website builders, e-commerce solutions, and marketing tools that want to offer native cookie consent.",
    examples: "WordPress hosting, Shopify apps, Webflow integrations, HubSpot marketplace",
  },
  {
    icon: Building2,
    title: "Reseller Partners",
    desc: "Managed service providers, hosting companies, and IT consultancies that want to resell PrivacyCrumb under their own brand.",
    examples: "Web hosting providers, managed IT services, digital transformation firms",
  },
  {
    icon: Shield,
    title: "Compliance Partners",
    desc: "Law firms, DPOs, and compliance consultancies that want to bundle PrivacyCrumb with their advisory services.",
    examples: "Privacy law firms, DPO-as-a-service providers, GRC platforms",
  },
];

const integrationHighlights = [
  { label: "REST API", desc: "Full programmatic access to all platform features" },
  { label: "JavaScript SDK", desc: "Client-side integration for custom consent flows" },
  { label: "Webhooks", desc: "Real-time event notifications for consent changes" },
  { label: "SSO / SAML", desc: "Single sign-on integration for enterprise customers" },
  { label: "White-Label", desc: "Fully brandable UI with your logo and colors" },
  { label: "Multi-Tenant", desc: "Manage thousands of sites from one API key" },
];

const testimonials = [
  { quote: "Integrating PrivacyCrumb into our hosting platform was seamless. Our customers now get cookie compliance out of the box — a huge differentiator.", name: "Marcus W.", role: "CTO, CloudHost Pro", rating: 5 },
  { quote: "The white-label API let us offer consent management as our own feature. Our clients don't even know it's powered by PrivacyCrumb.", name: "Nina R.", role: "VP Product, SiteBuilder.io", rating: 5 },
  { quote: "As a privacy consultancy, bundling PrivacyCrumb with our services increased our deal size by 40%. The partnership team is exceptional.", name: "Oliver K.", role: "Managing Partner, DataGuard Legal", rating: 5 },
];

export default function StrategicPartnerPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", company: "", role: "", partnerType: "", message: "", agreed: false });
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
                <Briefcase size={16} /> Strategic Partnerships
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Build the future of{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">privacy together</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Partner with PrivacyCrumb to embed world-class cookie consent into your platform. Deep integrations, shared revenue, and joint go-to-market.
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
                  Become a Partner <ArrowRight size={16} />
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Partnership Benefits" title="What makes this partnership valuable" subtitle="Deep integrations, shared growth, and enterprise-ready infrastructure." />
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

        {/* Partner Types */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Partner Types" title="Which partnership fits you?" subtitle="We work with technology companies, resellers, and compliance professionals." />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {partnerTypes.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex flex-col">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center mb-4">
                      <p.icon className="text-coral" size={20} />
                    </div>
                    <h3 className="text-sm font-semibold mb-2 text-neutral-900 dark:text-white">{p.title}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1">{p.desc}</p>
                    <p className="text-[11px] text-neutral-400 dark:text-neutral-600 mt-3 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                      <span className="font-medium text-neutral-500 dark:text-neutral-500">e.g.</span> {p.examples}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Integration Highlights */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Integration Capabilities" title="Built for deep integrations" subtitle="" />
            </FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
              {integrationHighlights.map((h, i) => (
                <FadeIn key={h.label} delay={i * 0.06}>
                  <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">{h.label}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400">{h.desc}</p>
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
              <SectionHeader label="Partner Stories" title="Trusted by leading platforms" subtitle="" />
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
                  <p className="text-coral text-sm font-medium mb-2 tracking-wide">Get Started</p>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white leading-tight">
                    Let&apos;s explore a partnership
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    Tell us about your company and what you&apos;re looking to achieve. Our partnerships team will reach out within 48 hours to schedule an intro call.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Custom revenue-sharing models",
                      "Dedicated integration engineering support",
                      "Joint marketing & co-sell opportunities",
                      "Access to partner API sandbox",
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
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Request received!</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Our partnerships team will reach out within 48 hours to schedule an intro call.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Full Name *</label>
                          <input required type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="Your name" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Work Email *</label>
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="you@company.com" />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Company *</label>
                          <input required type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="Your company" />
                        </div>
                        <div>
                          <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Your Role</label>
                          <input type="text" value={formData.role} onChange={(e) => setFormData({ ...formData, role: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="e.g. VP Partnerships" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Partnership Type *</label>
                        <select required value={formData.partnerType} onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all">
                          <option value="">Select type</option>
                          {["Technology Integration", "Reseller / OEM", "Compliance / Advisory", "Other"].map((t) => <option key={t} value={t}>{t}</option>)}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Tell us about your partnership idea</label>
                        <textarea rows={3} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400 resize-none" placeholder="How do you envision working together?" />
                      </div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input required type="checkbox" checked={formData.agreed} onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })} className="mt-0.5 accent-[#E8825C]" />
                        <span className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">I agree to PrivacyCrumb&apos;s <a href="/index-23/privacy-policy" className="text-neutral-500 dark:text-neutral-400 underline hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">privacy policy</a>.</span>
                      </label>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                      >
                        Submit Partnership Request <ArrowRight size={15} />
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
