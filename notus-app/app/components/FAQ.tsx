"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const faqs = [
  { q: "What exactly does this platform do?", a: "Our platform provides a visual interface for building, testing, and deploying AI agent workflows. You can create complex multi-agent systems using a drag-and-drop builder, connect them to your existing tools, and monitor their performance in real-time." },
  { q: "How do I get started with creating my first workflow?", a: "Getting started is simple. Sign up for a free account, open the visual builder, and drag your first agent node onto the canvas. Connect it to a trigger and an action, then hit deploy. Our onboarding guide walks you through the entire process." },
  { q: "What tools and services can I integrate?", a: "We support 50+ integrations including Slack, GitHub, Notion, Linear, Jira, and more. You can also build custom connectors using our SDK to connect to any service with an API." },
  { q: "Is my data secure when using AI agents?", a: "Yes. We're SOC 2 Type II certified, GDPR compliant, and CCPA compliant. All data is encrypted at rest and in transit. We never train on your data, and you maintain full ownership of all outputs." },
  { q: "Can I test workflows before they go live?", a: "Absolutely. Our simulation environment lets you test workflows with sample data before deploying to production. You can step through each action, inspect intermediate results, and debug any issues." },
  { q: "What's the difference between automated and manual steps?", a: "Automated steps are executed by AI agents without human intervention. Manual steps pause the workflow and wait for human review or input before continuing. You can mix both in a single workflow." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="py-20" id="faq">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader label="FAQs" title="Frequently Asked Questions" subtitle="Find all your doubts and questions in one place. Still couldn't find what you're looking for?" />
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
