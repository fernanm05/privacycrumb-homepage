"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, ArrowRight, Phone, ChevronDown } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

interface Feature {
  text: string;
  included: boolean;
}

interface Plan {
  name: string;
  sub: string;
  m: number;
  y: number;
  btn: string;
  btnIcon: React.ReactNode;
  btnCls: string;
  featured?: boolean;
  features: Feature[];
}

const plans: Plan[] = [
  {
    name: "Free", sub: "For personal sites and testing", m: 0, y: 0,
    btn: "Get Started Free", btnIcon: <ArrowRight size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "3 domains", included: true },
      { text: "5,000 pageviews/month", included: true },
      { text: "2 scans/month", included: true },
      { text: "Basic banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (30 days)", included: true },
      { text: "Multi-language support", included: false },
      { text: "Geo-targeting", included: false },
      { text: "Scheduled scans", included: false },
      { text: "Team members", included: false },
      { text: "Remove branding", included: false },
    ],
  },
  {
    name: "Starter", sub: "For small businesses", m: 9, y: 90,
    btn: "Select Plan", btnIcon: <ArrowRight size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "3 domains", included: true },
      { text: "50,000 pageviews/month", included: true },
      { text: "10 scans/month", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (90 days)", included: true },
      { text: "Multi-language (10 languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "Team members", included: false },
      { text: "Remove branding", included: false },
    ],
  },
  {
    name: "Pro", sub: "For growing businesses & agencies", m: 29, y: 290,
    btn: "Select Plan", btnIcon: <ArrowRight size={14} />,
    btnCls: "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100",
    featured: true,
    features: [
      { text: "10 domains", included: true },
      { text: "500,000 pageviews/month", included: true },
      { text: "Unlimited scans", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (1 year)", included: true },
      { text: "Multi-language (all languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "5 team members", included: true },
      { text: "Remove branding", included: true },
    ],
  },
  {
    name: "Enterprise", sub: "For large organizations", m: 79, y: 790,
    btn: "Contact Sales", btnIcon: <Phone size={14} />,
    btnCls: "border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800",
    features: [
      { text: "Unlimited domains", included: true },
      { text: "Unlimited pageviews", included: true },
      { text: "Unlimited scans", included: true },
      { text: "Advanced banner customization", included: true },
      { text: "Cookie blocking", included: true },
      { text: "Consent logging (unlimited)", included: true },
      { text: "Multi-language (all languages)", included: true },
      { text: "Geo-targeting", included: true },
      { text: "Scheduled scans", included: true },
      { text: "Unlimited team members", included: true },
      { text: "Remove branding", included: true },
    ],
  },
];

const faqs = [
  {
    q: "Can I change my plan later?",
    a: "Yes! You can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate the difference.",
  },
  {
    q: "What counts as a pageview?",
    a: "Each time a visitor loads a page on your site where the PrivacyCrumb banner is active, that counts as one pageview. Bots and crawlers are automatically excluded.",
  },
  {
    q: "Do you offer a free trial?",
    a: "Yes — all paid plans come with a 14-day free trial. No credit card required. You can explore all features before committing.",
  },
  {
    q: "What happens if I exceed my pageview limit?",
    a: "We won't cut off your banner. We'll notify you and give you the option to upgrade. Your site visitors will always see a compliant consent banner.",
  },
  {
    q: "Is there a discount for annual billing?",
    a: "Yes! Save 30% when you choose annual billing. The discount is applied automatically when you switch to yearly.",
  },
  {
    q: "Can I use PrivacyCrumb on client websites?",
    a: "Absolutely. Our Pro and Enterprise plans are designed for agencies. You can manage multiple client domains from a single dashboard.",
  },
];

function RollingDigit({ digit }: { digit: string }) {
  return (
    <span className="inline-block overflow-hidden h-[1em] relative">
      <AnimatePresence mode="wait">
        <motion.span key={digit} initial={{ y: "100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }}
          transition={{ duration: 0.3, ease: "easeInOut" }} className="block">
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

function RollingPrice({ price }: { price: number }) {
  const digits = String(price).split("");
  return (
    <span className="inline-flex text-4xl font-bold dark:text-white">
      <span>$</span>{digits.map((d, i) => <RollingDigit key={`${i}-${d}`} digit={d} />)}
    </span>
  );
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-neutral-100 dark:border-neutral-800">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left"
      >
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-200 pr-4">{q}</span>
        <ChevronDown size={16} className={`text-neutral-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
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
            <p className="text-sm text-neutral-500 dark:text-neutral-400 pb-5 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-4 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Simple, transparent pricing</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Plans for every{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">website</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto mb-8 leading-relaxed">
                Start free and scale as you grow. All plans include a 14-day free trial with no credit card required.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Pricing Cards — same design as homepage */}
        <section className="py-12 bg-neutral-50/50 dark:bg-neutral-950 stripe-bg px-6">
          <div className="max-w-6xl mx-auto">
            {/* Toggle */}
            <div className="flex justify-center mb-12">
              <div className="flex items-center gap-4">
                <div className="flex items-center bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-xl p-1 gap-1">
                  <button onClick={() => setYearly(false)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${!yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>Monthly</button>
                  <button onClick={() => setYearly(true)} className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${yearly ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "text-neutral-500 dark:text-neutral-400 hover:text-neutral-700"}`}>Yearly</button>
                </div>
                <span className="text-sm text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-coral"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
                  <span className="font-semibold">Save 30%</span>
                </span>
              </div>
            </div>

            {/* Cards grid — unified container */}
            <div className="grid md:grid-cols-4 gap-0 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl overflow-hidden bg-white dark:bg-neutral-900">
              {plans.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.1}>
                  <div className={`p-8 h-full relative ${i < 3 ? "border-r border-neutral-100 dark:border-neutral-800" : ""} ${p.featured ? "border-2 border-neutral-900 dark:border-white rounded-3xl -m-px z-10 bg-white dark:bg-neutral-900" : ""}`}>
                    <h3 className="text-lg font-bold mb-0.5 dark:text-white">{p.name}</h3>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-5">{p.sub}</p>
                    <div className="mb-5">
                      <RollingPrice price={yearly ? p.y : p.m} />
                      <span className="text-sm text-neutral-500 dark:text-neutral-400 ml-1">/ {yearly ? "year" : "month"}</span>
                    </div>
                    {p.featured && (
                      <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-coral bg-coral/10 px-2.5 py-1 rounded-full mb-5">Most Popular</span>
                    )}
                    <div className="flex flex-col gap-3.5 mb-8">
                      {p.features.map((f) => (
                        <div key={f.text} className={`flex items-start gap-2.5 text-sm ${f.included ? "text-neutral-600 dark:text-neutral-400" : "text-neutral-400 dark:text-neutral-600 line-through"}`}>
                          {f.included ? (
                            <Check size={16} className={`flex-shrink-0 mt-0.5 ${p.featured ? "text-coral" : "text-neutral-400 dark:text-neutral-500"}`} />
                          ) : (
                            <X size={16} className="flex-shrink-0 mt-0.5 text-neutral-300 dark:text-neutral-700" />
                          )}
                          {f.text}
                        </div>
                      ))}
                    </div>
                    <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                      className={`w-full py-3 rounded-xl text-sm font-medium transition-colors flex items-center justify-center gap-2 ${p.btnCls}`}>
                      {p.btn} {p.btnIcon}
                    </motion.button>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="px-6 py-24 bg-white dark:bg-neutral-950">
          <div className="max-w-2xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium text-center mb-2 tracking-wide">FAQs</p>
              <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10 text-neutral-900 dark:text-white">
                Frequently asked questions
              </h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="border-t border-neutral-100 dark:border-neutral-800">
                {faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
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
