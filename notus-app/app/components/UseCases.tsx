"use client";
import { motion } from "framer-motion";
import { Boxes, BarChart4, Truck, Phone, Database, Wallet } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const cases = [
  { Icon: Boxes, t: "DevOps" }, { Icon: BarChart4, t: "SalesOps" }, { Icon: Truck, t: "Supply Chain" },
  { Icon: Phone, t: "Customer Support" }, { Icon: Database, t: "DataOps" }, { Icon: Wallet, t: "FinOps" },
];

export default function UseCases() {
  return (
    <section className="py-20 bg-neutral-50/50 dark:bg-neutral-950 stripe-bg">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Use Cases" title="Across various Industries" subtitle="We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually" />
        <div className="grid md:grid-cols-3 gap-4">
          {cases.map((c, idx) => (
            <FadeIn key={c.t} delay={idx * 0.08}>
              <motion.div whileHover={{ y: -3 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-8 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm cursor-default transition-shadow hover:shadow-sm">
                <c.Icon size={24} className="text-coral mb-4" strokeWidth={1.5} />
                <h3 className="text-[15px] font-semibold mb-2 text-neutral-900 dark:text-white">{c.t}</h3>
                <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">Visually orchestrate autonomous agents without writing boilerplate code</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
