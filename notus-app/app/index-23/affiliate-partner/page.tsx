"use client";
import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import {
  Link2, DollarSign, Users, ArrowRight, CheckCircle,
  Share2, BarChart3, Gift, Megaphone, Clock, Star,
  MousePointerClick, TrendingUp, Zap
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const benefits = [
  { icon: DollarSign, title: "25% Recurring Commission", desc: "Earn 25% on every payment for the lifetime of the customer. Not just the first month — every single renewal." },
  { icon: Clock, title: "90-Day Cookie Window", desc: "Your referral link stays active for 90 days. If someone clicks today and signs up three months later, you still earn." },
  { icon: BarChart3, title: "Real-Time Dashboard", desc: "Track clicks, conversions, earnings, and payouts in real-time from your personal affiliate dashboard." },
  { icon: Gift, title: "Exclusive Promotions", desc: "Get access to exclusive discount codes and promotions to share with your audience for higher conversion rates." },
  { icon: Share2, title: "Ready-Made Assets", desc: "Banners, email templates, social media posts, landing page copy — everything you need to start promoting instantly." },
  { icon: Zap, title: "Fast Monthly Payouts", desc: "Get paid on the 1st of every month via PayPal or bank transfer. No minimum threshold to start earning." },
];

const idealFor = [
  { icon: Megaphone, title: "Content Creators & Bloggers", desc: "Write about privacy, web development, or compliance? PrivacyCrumb is a natural fit for your audience." },
  { icon: Users, title: "Privacy & Legal Consultants", desc: "Recommend a tool you trust. Help your clients stay compliant while earning a commission." },
  { icon: MousePointerClick, title: "Web Developers & Freelancers", desc: "Already building websites? Add PrivacyCrumb to every project and earn passively on each one." },
  { icon: TrendingUp, title: "Marketing Professionals", desc: "Running a newsletter, YouTube channel, or podcast? Monetize your audience with a product that sells itself." },
];

const howItWorks = [
  { step: "01", title: "Sign up for free", desc: "Create your affiliate account in under a minute. No approval wait — start immediately." },
  { step: "02", title: "Share your link", desc: "Get your unique referral link and share it in blog posts, emails, social media, or wherever your audience is." },
  { step: "03", title: "Earn commissions", desc: "Every time someone signs up and subscribes through your link, you earn 25% recurring commission." },
];

const faqs = [
  { q: "How much can I earn?", a: "There's no cap on earnings. If you refer 50 customers on the Pro plan ($29/month), that's $362.50/month in passive income — and it grows as their plans renew." },
  { q: "When do I get paid?", a: "Commissions are paid on the 1st of each month for the previous month's earnings. You can choose PayPal or bank transfer." },
  { q: "Is there a minimum payout?", a: "No. Even if you earn $5, we'll pay it out. No minimum thresholds." },
  { q: "Do I need to be a customer?", a: "No, but we recommend trying the free plan so you can speak authentically about the product." },
  { q: "Can I use paid ads?", a: "Yes, you can use paid advertising to promote your affiliate link. However, you may not bid on PrivacyCrumb brand keywords." },
  { q: "How long does the cookie last?", a: "90 days. If someone clicks your link and signs up within 90 days, you get the commission." },
];

const testimonials = [
  { quote: "I added a PrivacyCrumb recommendation to my WordPress tutorial series. It now generates $800+ per month in affiliate income on autopilot.", name: "David R.", role: "Tech Blogger", rating: 5 },
  { quote: "As a privacy consultant, recommending PrivacyCrumb was a no-brainer. I earn commissions and my clients get a great tool. Win-win.", name: "Elena S.", role: "Privacy Consultant", rating: 5 },
  { quote: "The 90-day cookie window is insane. I've gotten commissions from links I shared months ago. Best affiliate program I've joined.", name: "Tom H.", role: "Web Developer & YouTuber", rating: 5 },
];

export default function AffiliatePartnerPage() {
  const [formData, setFormData] = useState({ fullName: "", email: "", website: "", channel: "", agreed: false });
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
                <Link2 size={16} /> Affiliate Program
              </span>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Earn{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">25% recurring</span>
                {" "}commission
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Share PrivacyCrumb with your audience and earn 25% on every payment — for the lifetime of each customer you refer.
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
                  Join the Program <ArrowRight size={16} />
                </motion.a>
              </div>
            </FadeIn>
            {/* Highlight Stats */}
            <FadeIn delay={0.4}>
              <div className="flex justify-center gap-8 mt-10">
                {[
                  { value: "25%", label: "Commission" },
                  { value: "90 days", label: "Cookie window" },
                  { value: "$0", label: "Min. payout" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="text-xl font-bold text-neutral-900 dark:text-white">{s.value}</div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">{s.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <SectionHeader label="Program Benefits" title="Why affiliates love PrivacyCrumb" subtitle="A program designed for creators, consultants, and developers who value recurring income." />
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

        {/* How It Works */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="How It Works" title="Start earning in 3 simple steps" subtitle="" />
            </FadeIn>
            <div className="grid md:grid-cols-3 gap-4 mt-2">
              {howItWorks.map((s, i) => (
                <FadeIn key={s.step} delay={i * 0.1}>
                  <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full text-center">
                    <div className="w-12 h-12 rounded-full bg-coral/10 flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-coral">{s.step}</span>
                    </div>
                    <h3 className="text-sm font-semibold mb-1.5 text-neutral-900 dark:text-white">{s.title}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Ideal For */}
        <section className="py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <SectionHeader label="Who It's For" title="Perfect for creators & professionals" subtitle="" />
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-4 mt-2">
              {idealFor.map((item, i) => (
                <FadeIn key={item.title} delay={i * 0.08}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex gap-4">
                    <div className="w-10 h-10 rounded-xl bg-coral/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="text-coral" size={20} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 text-neutral-900 dark:text-white">{item.title}</h3>
                      <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{item.desc}</p>
                    </div>
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
              <SectionHeader label="Affiliate Stories" title="What our affiliates say" subtitle="" />
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

        {/* FAQ */}
        <section className="py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <SectionHeader label="FAQ" title="Common questions" subtitle="" />
            </FadeIn>
            <div className="space-y-3 mt-2">
              {faqs.map((f, i) => (
                <FadeIn key={f.q} delay={i * 0.05}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1.5">{f.q}</h3>
                    <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950 scroll-mt-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-start">
              {/* Left */}
              <FadeIn>
                <div>
                  <p className="text-coral text-sm font-medium mb-2 tracking-wide">Join the Program</p>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white leading-tight">
                    Start earning today
                  </h2>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed mb-6">
                    Sign up in under a minute. Get your unique referral link instantly — no approval wait time.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Instant approval — start sharing right away",
                      "No cost to join, ever",
                      "25% recurring on all plans",
                      "Real-time tracking & monthly payouts",
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
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">You&apos;re in!</h3>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">Check your email for your affiliate dashboard login and unique referral link.</p>
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
                          <input required type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="you@example.com" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Website or Social Profile</label>
                        <input type="url" value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400" placeholder="https://yoursite.com" />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-neutral-700 dark:text-neutral-300 mb-1">Primary Promotion Channel *</label>
                        <select required value={formData.channel} onChange={(e) => setFormData({ ...formData, channel: e.target.value })} className="w-full px-3.5 py-2.5 rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all">
                          <option value="">Select channel</option>
                          {["Blog / Website", "YouTube", "Newsletter", "Social Media", "Podcast", "Consulting / Freelance", "Other"].map((ch) => <option key={ch} value={ch}>{ch}</option>)}
                        </select>
                      </div>
                      <label className="flex items-start gap-2 cursor-pointer">
                        <input required type="checkbox" checked={formData.agreed} onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })} className="mt-0.5 accent-[#E8825C]" />
                        <span className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">I agree to PrivacyCrumb&apos;s <a href="/index-23/privacy-policy" className="text-neutral-500 dark:text-neutral-400 underline hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors">privacy policy</a> and affiliate terms.</span>
                      </label>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors"
                      >
                        Join the Program <ArrowRight size={15} />
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
