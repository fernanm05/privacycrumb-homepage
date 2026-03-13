"use client";
import { motion } from "framer-motion";
import { Rocket, RefreshCw, BarChart3, BrainCircuit, ShieldCheck, MonitorCog, Bell } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import FadeIn, { SectionHeader } from "./FadeIn";

const leftItems = [
  { Icon: Rocket, t: "Launch Faster" }, { Icon: RefreshCw, t: "Iterate Rapidly" }, { Icon: BarChart3, t: "Scale Smarter" },
];
const rightItems = [
  { Icon: BrainCircuit, t: "Reuse Intelligence" }, { Icon: ShieldCheck, t: "Prevent Breakdowns" }, { Icon: MonitorCog, t: "Automate More" },
];

function BenefitCard({ Icon, title, delay = 0 }: { Icon: LucideIcon; title: string; delay?: number }) {
  return (
    <FadeIn delay={delay}>
      <motion.div whileHover={{ y: -2 }} className="border border-neutral-200/80 dark:border-neutral-800 rounded-3xl p-7 bg-white dark:bg-neutral-900 transition-shadow hover:shadow-sm">
        <Icon size={22} className="text-coral mb-3" strokeWidth={1.5} />
        <h3 className="text-[15px] font-semibold mb-1.5 text-neutral-900 dark:text-white">{title}</h3>
        <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed">Visually orchestrate autonomous agents without writing boilerplate code</p>
      </motion.div>
    </FadeIn>
  );
}

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeader label="Benefits" title="Making Engineers 10x faster" subtitle="We empower developers and technical teams to create, simulate, and manage AI-driven workflows visually" />
        <div className="grid md:grid-cols-3 gap-4">
          <div className="flex flex-col gap-4">
            {leftItems.map((b, i) => <BenefitCard key={b.t} Icon={b.Icon} title={b.t} delay={i * 0.1} />)}
          </div>

          {/* ===== CENTER CARD: node diagram + dashboard with animations ===== */}
          <FadeIn delay={0.15}>
            <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 rounded-3xl flex flex-col min-h-[300px] md:min-h-full p-6 relative overflow-hidden">
              {/* Top: Node connection - ChatGPT + Notus + Slack */}
              <div className="flex items-center justify-center relative pt-4 pb-2">
                {/* ChatGPT icon */}
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-11 h-11 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.06-1.38"/><path d="M12 8v8M8 12c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4"/></svg>
                </motion.div>
                {/* Dashed line left */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  style={{ transformOrigin: "left" }}
                  className="w-6 border-t border-dashed border-neutral-300 dark:border-neutral-600"
                />
                {/* Notus icon - center */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5, type: "spring", stiffness: 200 }}
                  className="w-14 h-14 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-sm flex items-center justify-center dark:text-white"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M13 3a2 2 0 012 2v6h4a2 2 0 012 2v6a2 2 0 01-2 2h-6a2 2 0 01-2-2v-4H5a2 2 0 01-2-2V5a2 2 0 012-2h8zm0 2H5v8h6V7a2 2 0 012-2zm6 8h-4v6h6v-6h-2z"/></svg>
                </motion.div>
                {/* Dashed line right */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  style={{ transformOrigin: "left" }}
                  className="w-6 border-t border-dashed border-neutral-300 dark:border-neutral-600"
                />
                {/* Slack icon */}
                <motion.div
                  initial={{ opacity: 0, x: 20, scale: 0.8 }}
                  whileInView={{ opacity: 1, x: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="w-11 h-11 bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm flex items-center justify-center"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M14.5 2a2.5 2.5 0 000 5H17V4.5A2.5 2.5 0 0014.5 2z" fill="#E01E5A"/><path d="M2 14.5a2.5 2.5 0 005 0V12H4.5A2.5 2.5 0 002 14.5z" fill="#36C5F0"/><path d="M9.5 22a2.5 2.5 0 000-5H7v2.5A2.5 2.5 0 009.5 22z" fill="#2EB67D"/><path d="M22 9.5a2.5 2.5 0 00-5 0V12h2.5A2.5 2.5 0 0022 9.5z" fill="#ECB22E"/><rect x="7" y="7" width="5" height="5" fill="#36C5F0"/><rect x="12" y="7" width="5" height="5" fill="#2EB67D"/><rect x="7" y="12" width="5" height="5" fill="#E01E5A"/><rect x="12" y="12" width="5" height="5" fill="#ECB22E"/></svg>
                </motion.div>
              </div>

              {/* Vertical connecting line */}
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.8 }}
                style={{ transformOrigin: "top" }}
                className="w-px h-6 border-l border-dashed border-neutral-300 dark:border-neutral-600 mx-auto"
              />

              {/* Connected badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.9, type: "spring", stiffness: 300 }}
                className="flex justify-center my-2"
              >
                <span className="text-xs px-2.5 py-0.5 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded font-medium">Connected</span>
              </motion.div>

              {/* Bottom: Dashboard mockup - pushed to bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="bg-white dark:bg-neutral-800 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm p-4 w-full mt-auto"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-1">
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0 }} className="w-2 h-2 rounded-full bg-red-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }} className="w-2 h-2 rounded-full bg-amber-400" />
                    <motion.span animate={{ scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }} className="w-2 h-2 rounded-full bg-green-400" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.4 }}
                    className="flex items-center gap-1 text-[11px] text-neutral-400"
                  >
                    <Bell size={10} /> Meeting created
                  </motion.div>
                </div>
                <div className="font-semibold text-sm mb-3 dark:text-white">Dashboard</div>
                {["API Calls","Success Rate","Workflows"].map((label, i) => (
                  <div key={label} className="mb-2">
                    <div className="text-[11px] text-neutral-400 mb-1">{label}</div>
                    <div className="h-1.5 rounded-full bg-neutral-100 dark:bg-neutral-700 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${85 - i * 20}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 1.2 + i * 0.15, ease: "easeOut" }}
                        className="h-full rounded-full bg-neutral-300"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {rightItems.map((b, i) => <BenefitCard key={b.t} Icon={b.Icon} title={b.t} delay={i * 0.1 + 0.1} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
