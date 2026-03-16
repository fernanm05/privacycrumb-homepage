"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Mail, MapPin, Clock, Send, Phone,
  MessageCircle, HelpCircle, FileText, ArrowRight,
  CheckCircle, Building, Globe
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    desc: "For general inquiries and support",
    value: "support@privacycrumb.com",
    href: "mailto:support@privacycrumb.com",
    color: "text-coral",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    desc: "Get instant help from our team",
    value: "Available Mon–Fri, 9am–5pm",
    href: "#",
    color: "text-blue-500",
  },
  {
    icon: Phone,
    title: "Phone",
    desc: "Speak with our sales team",
    value: "+1 (888) 555-CRUMB",
    href: "tel:+18885552786",
    color: "text-green-500",
  },
];

const offices = [
  { city: "San Francisco", country: "United States", timezone: "PST (UTC-8)" },
  { city: "London", country: "United Kingdom", timezone: "GMT (UTC+0)" },
  { city: "Singapore", country: "Singapore", timezone: "SGT (UTC+8)" },
];

const topics = [
  "General Inquiry",
  "Technical Support",
  "Sales & Pricing",
  "Partnership & Integration",
  "Bug Report",
  "Feature Request",
  "Enterprise",
  "Other",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", topic: "", message: ""
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-14 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Contact Us</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.25rem] md:text-[3rem] font-semibold leading-[1.1] mb-4 tracking-tight text-neutral-900 dark:text-white">
                Get in touch
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-md mx-auto">
                Have a question, feedback, or want to partner with us? We&apos;d love to hear from you.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-14 px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-4">
            {contactMethods.map((m, i) => (
              <FadeIn key={m.title} delay={i * 0.1}>
                <a href={m.href}>
                  <motion.div
                    whileHover={{ y: -3 }}
                    className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-center hover:border-coral/30 hover:shadow-sm transition-all h-full"
                  >
                    <div className="w-10 h-10 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex items-center justify-center mx-auto mb-3">
                      <m.icon size={18} className={m.color} />
                    </div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-0.5">{m.title}</h3>
                    <p className="text-[11px] text-neutral-400 mb-2">{m.desc}</p>
                    <p className="text-xs font-medium text-neutral-700 dark:text-neutral-300">{m.value}</p>
                  </motion.div>
                </a>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Contact Form + Info */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1.3fr_1fr] gap-6">
              {/* Form */}
              <FadeIn>
                <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl bg-white dark:bg-neutral-900 p-6 md:p-8">
                  {!submitted ? (
                    <>
                      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">Send us a message</h2>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-6">We typically respond within 2 hours during business hours.</p>

                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1.5">Name *</label>
                            <input
                              required
                              value={formData.name}
                              onChange={e => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                            />
                          </div>
                          <div>
                            <label className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1.5">Email *</label>
                            <input
                              required
                              type="email"
                              value={formData.email}
                              onChange={e => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1.5">Company</label>
                          <input
                            value={formData.company}
                            onChange={e => setFormData({ ...formData, company: e.target.value })}
                            placeholder="Acme Inc."
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all"
                          />
                        </div>
                        <div>
                          <label className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1.5">Topic *</label>
                          <select
                            required
                            value={formData.topic}
                            onChange={e => setFormData({ ...formData, topic: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all appearance-none"
                          >
                            <option value="">Select a topic...</option>
                            {topics.map(t => <option key={t} value={t}>{t}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400 uppercase tracking-wider block mb-1.5">Message *</label>
                          <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={e => setFormData({ ...formData, message: e.target.value })}
                            placeholder="Tell us how we can help..."
                            className="w-full px-4 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 text-sm text-neutral-800 dark:text-neutral-200 placeholder:text-neutral-400 outline-none focus:border-coral/50 focus:ring-2 focus:ring-coral/10 transition-all resize-none"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          whileHover={{ scale: 1.01 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                        >
                          Send Message <Send size={14} />
                        </motion.button>
                      </form>
                    </>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
                      >
                        <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Message Sent!</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                        Thank you for reaching out. We&apos;ll get back to you within 2 hours.
                      </p>
                      <button
                        onClick={() => { setSubmitted(false); setFormData({ name: "", email: "", company: "", topic: "", message: "" }); }}
                        className="text-coral text-sm font-medium hover:underline"
                      >
                        Send another message
                      </button>
                    </motion.div>
                  )}
                </div>
              </FadeIn>

              {/* Info sidebar */}
              <FadeIn delay={0.15}>
                <div className="space-y-4">
                  {/* Response time */}
                  <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Clock size={18} className="text-coral" />
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Response Times</h3>
                    </div>
                    <div className="space-y-2.5">
                      {[
                        { plan: "Enterprise", time: "< 1 hour" },
                        { plan: "Pro", time: "< 2 hours" },
                        { plan: "Starter", time: "< 4 hours" },
                        { plan: "Free", time: "< 24 hours" },
                      ].map(r => (
                        <div key={r.plan} className="flex justify-between items-center text-xs">
                          <span className="text-neutral-600 dark:text-neutral-400">{r.plan}</span>
                          <span className="font-medium text-neutral-900 dark:text-white bg-neutral-50 dark:bg-neutral-800 px-2 py-1 rounded-lg">{r.time}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Offices */}
                  <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Building size={18} className="text-coral" />
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Our Offices</h3>
                    </div>
                    <div className="space-y-3">
                      {offices.map(o => (
                        <div key={o.city} className="flex items-start gap-3">
                          <MapPin size={14} className="text-neutral-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <div className="text-xs font-medium text-neutral-800 dark:text-neutral-200">{o.city}, {o.country}</div>
                            <div className="text-[10px] text-neutral-400">{o.timezone}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links */}
                  <div className="border border-neutral-200/80 dark:border-neutral-800 rounded-2xl bg-white dark:bg-neutral-900 p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe size={18} className="text-coral" />
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">Quick Links</h3>
                    </div>
                    <div className="space-y-1.5">
                      {[
                        { icon: HelpCircle, label: "Help Center", href: "/index-23/help-center" },
                        { icon: FileText, label: "Documentation", href: "#" },
                        { icon: MessageCircle, label: "Community Forum", href: "#" },
                      ].map(link => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 hover:text-coral transition-colors py-1.5"
                        >
                          <link.icon size={13} />
                          {link.label}
                          <ArrowRight size={10} className="ml-auto" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ teaser */}
        <section className="py-14 px-6">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">Before you reach out</h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">Check our most common questions — your answer might already be here.</p>
              <div className="grid sm:grid-cols-2 gap-3 text-left">
                {[
                  { q: "How do I install PrivacyCrumb?", a: "Add a single script tag to your site's <head>. Copy it from Dashboard → Settings → Installation." },
                  { q: "Which regulations do you support?", a: "GDPR, CCPA/CPRA, LGPD, PIPEDA, POPIA, ePrivacy, and more. We auto-update when laws change." },
                  { q: "Can I try it for free?", a: "Yes! Our free plan includes up to 5,000 page views/month with full compliance features." },
                  { q: "How fast is your support?", a: "Pro users get responses in under 2 hours. Enterprise customers have a dedicated support channel." },
                ].map(faq => (
                  <div key={faq.q} className="p-4 rounded-xl border border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h4 className="text-xs font-semibold text-neutral-800 dark:text-neutral-200 mb-1">{faq.q}</h4>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
