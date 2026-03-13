"use client";
import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const y = direction === "up" ? 30 : direction === "down" ? -30 : 0;
  const x = direction === "left" ? 30 : direction === "right" ? -30 : 0;

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
}

export function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-12">
      <FadeIn><p className="text-coral text-sm font-medium mb-3 tracking-wide">{label}</p></FadeIn>
      <FadeIn delay={0.1}><h2 className="text-3xl md:text-[42px] font-bold leading-tight mb-4 dark:text-white">{title}</h2></FadeIn>
      {subtitle && <FadeIn delay={0.2}><p className="text-gray-500 dark:text-neutral-400 text-base max-w-xl mx-auto leading-relaxed">{subtitle}</p></FadeIn>}
    </div>
  );
}
