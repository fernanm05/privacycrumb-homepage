"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const faqs = [
  { q: "What does PrivacyCrumb do?", a: "PrivacyCrumb is a cookie consent management platform that helps websites comply with privacy laws like GDPR, CCPA, and ePrivacy. It automatically scans your site for cookies, deploys customizable consent banners, and maintains audit-ready consent logs — all with a simple script install." },
  { q: "How do I get started?", a: "Getting started takes less than 5 minutes. Sign up for a free account, add your domain, and paste our lightweight script tag into your site's header. PrivacyCrumb will automatically scan your cookies and deploy a consent banner. No coding required." },
  { q: "What platforms does PrivacyCrumb support?", a: "PrivacyCrumb works with any website platform including WordPress, Shopify, Webflow, Squarespace, Next.js, and custom-built sites. We also integrate with Google Analytics, Google Tag Manager, HubSpot, and 50+ other tools." },
  { q: "Is PrivacyCrumb compliant with GDPR and CCPA?", a: "Yes. PrivacyCrumb is fully compliant with GDPR, CCPA, LGPD, PIPEDA, and other major privacy regulations. Our consent banners, cookie blocking, and logging are designed to meet the strictest requirements. We also auto-update when regulations change." },
  { q: "Can I customize the consent banner?", a: "Absolutely. You can fully customize the banner's colors, text, position, button styles, and behavior to match your brand. Our Pro and Enterprise plans also let you remove PrivacyCrumb branding entirely." },
  { q: "How does cookie blocking work?", a: "PrivacyCrumb blocks non-essential cookies (analytics, marketing, etc.) before the user gives consent. Once consent is granted for specific categories, those cookies are unblocked automatically. This ensures privacy-by-default compliance." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader label="FAQs" title="Frequently Asked Questions" subtitle="Everything you need to know about PrivacyCrumb and cookie compliance" />
        <div className="flex justify-center gap-3 mb-10">
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-7 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">Read Docs</motion.button>
          <motion.button whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
            className="border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-7 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">Contact Us</motion.button>
        </div>
        <div className="divide-y divide-neutral-100 dark:divide-neutral-800 border-t border-neutral-100 dark:border-neutral-800">
          {faqs.map((f, i) => (
            <FadeIn key={i} delay={i * 0.05}>
              <div className="py-5 cursor-pointer" onClick={() => setOpen(open === i ? null : i)}>
                <div className="flex justify-between items-center gap-4">
                  <span className="text-[15px] font-medium text-neutral-700 dark:text-neutral-200">{f.q}</span>
                  <motion.span animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.2 }}>
                    <ChevronDown size={18} className="text-neutral-400 flex-shrink-0" />
                  </motion.span>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed pt-3">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
