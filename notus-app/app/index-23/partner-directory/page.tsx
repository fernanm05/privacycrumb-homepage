"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Search, Globe, Building2, Layers, Shield, ArrowRight,
  ExternalLink, MapPin, Star, Filter
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn, { SectionHeader } from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

type Partner = {
  name: string;
  type: "agency" | "technology" | "compliance" | "reseller";
  tier: "Silver" | "Gold" | "Platinum";
  desc: string;
  location: string;
  specialties: string[];
  website: string;
};

const partners: Partner[] = [
  { name: "BrightWeb Agency", type: "agency", tier: "Platinum", desc: "Full-service digital agency specializing in privacy-first web development for enterprise clients across Europe.", location: "London, UK", specialties: ["GDPR", "WordPress", "Enterprise"], website: "#" },
  { name: "CloudHost Pro", type: "technology", tier: "Platinum", desc: "Leading managed WordPress hosting provider with native PrivacyCrumb integration for 50,000+ hosted sites.", location: "Berlin, Germany", specialties: ["Hosting", "WordPress", "API Integration"], website: "#" },
  { name: "DataGuard Legal", type: "compliance", tier: "Platinum", desc: "Privacy law firm and DPO-as-a-service provider. Bundles PrivacyCrumb with compliance advisory packages.", location: "Munich, Germany", specialties: ["GDPR", "CCPA", "DPO Services"], website: "#" },
  { name: "DigitalFirst Studio", type: "agency", tier: "Gold", desc: "Creative web studio building Shopify and custom e-commerce experiences with built-in privacy compliance.", location: "Amsterdam, Netherlands", specialties: ["E-commerce", "Shopify", "Branding"], website: "#" },
  { name: "SiteBuilder.io", type: "technology", tier: "Gold", desc: "No-code website builder with white-label PrivacyCrumb consent management built into every template.", location: "San Francisco, US", specialties: ["No-code", "White-label", "SaaS"], website: "#" },
  { name: "GrowthLab Digital", type: "agency", tier: "Gold", desc: "Performance marketing agency helping SaaS companies scale while maintaining full privacy compliance.", location: "Toronto, Canada", specialties: ["SaaS", "Marketing", "Analytics"], website: "#" },
  { name: "ComplianceHub", type: "compliance", tier: "Gold", desc: "GRC platform integrating PrivacyCrumb consent data into broader compliance management workflows.", location: "Dublin, Ireland", specialties: ["GRC", "Risk Management", "GDPR"], website: "#" },
  { name: "WebCraft Agency", type: "agency", tier: "Silver", desc: "Boutique web development agency serving SMBs across Scandinavia with accessible, compliant websites.", location: "Stockholm, Sweden", specialties: ["SMB", "Accessibility", "Nordic Markets"], website: "#" },
  { name: "HostEasy", type: "reseller", tier: "Silver", desc: "Shared hosting provider reselling PrivacyCrumb as an add-on service for small business website packages.", location: "Warsaw, Poland", specialties: ["Shared Hosting", "SMB", "Reseller"], website: "#" },
  { name: "PrivacyFirst Consulting", type: "compliance", tier: "Silver", desc: "Independent privacy consultancy helping startups and mid-market companies navigate EU and UK data protection.", location: "Paris, France", specialties: ["Startups", "UK GDPR", "CNIL"], website: "#" },
  { name: "Starter Digital", type: "agency", tier: "Silver", desc: "Freelance-friendly agency building fast, compliant WordPress and Webflow sites for creative professionals.", location: "Lisbon, Portugal", specialties: ["Webflow", "WordPress", "Freelance"], website: "#" },
  { name: "NetScale Solutions", type: "reseller", tier: "Gold", desc: "Managed IT services provider offering PrivacyCrumb as part of their enterprise website compliance suite.", location: "Chicago, US", specialties: ["Managed IT", "Enterprise", "Compliance Suite"], website: "#" },
];

const types = [
  { value: "all", label: "All Partners", icon: Globe },
  { value: "agency", label: "Agency", icon: Building2 },
  { value: "technology", label: "Technology", icon: Layers },
  { value: "compliance", label: "Compliance", icon: Shield },
  { value: "reseller", label: "Reseller", icon: Filter },
];

const tierColors: Record<string, string> = {
  Platinum: "bg-gradient-to-r from-neutral-700 to-neutral-500 text-white",
  Gold: "bg-gradient-to-r from-amber-500 to-amber-400 text-white",
  Silver: "bg-gradient-to-r from-neutral-400 to-neutral-300 text-white",
};

export default function PartnerDirectoryPage() {
  const [activeType, setActiveType] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = partners.filter((p) => {
    const matchType = activeType === "all" || p.type === activeType;
    const matchSearch = search === "" || p.name.toLowerCase().includes(search.toLowerCase()) || p.desc.toLowerCase().includes(search.toLowerCase()) || p.specialties.some((s) => s.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchSearch;
  });

  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">

        {/* Hero */}
        <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Partners</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Partner{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Directory</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                Find certified PrivacyCrumb partners — agencies, technology providers, compliance experts, and resellers worldwide.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Search + Filters + Grid */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">

            {/* Search Bar */}
            <FadeIn>
              <div className="relative mb-6">
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search partners by name, specialty, or keyword..."
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-sm text-neutral-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all placeholder:text-neutral-400"
                />
              </div>
            </FadeIn>

            {/* Type Filters */}
            <FadeIn delay={0.05}>
              <div className="flex flex-wrap gap-2 mb-8">
                {types.map((t) => (
                  <button
                    key={t.value}
                    onClick={() => setActiveType(t.value)}
                    className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${activeType === t.value ? "bg-neutral-900 dark:bg-white text-white dark:text-neutral-900" : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-700"}`}
                  >
                    <t.icon size={14} /> {t.label}
                  </button>
                ))}
              </div>
            </FadeIn>

            {/* Results Count */}
            <p className="text-xs text-neutral-400 dark:text-neutral-500 mb-4">{filtered.length} partner{filtered.length !== 1 ? "s" : ""} found</p>

            {/* Partner Cards */}
            {filtered.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-neutral-400 dark:text-neutral-500 text-sm">No partners match your search. Try a different keyword or filter.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-4">
                {filtered.map((p, i) => (
                  <FadeIn key={p.name} delay={i * 0.04}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full flex flex-col transition-shadow hover:shadow-md"
                    >
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-[15px] font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${tierColors[p.tier]}`}>{p.tier}</span>
                            <span className="text-[11px] text-neutral-400 dark:text-neutral-500 capitalize">{p.type}</span>
                          </div>
                        </div>
                        <a href={p.website} className="text-neutral-400 hover:text-coral transition-colors flex-shrink-0 mt-1">
                          <ExternalLink size={16} />
                        </a>
                      </div>
                      <p className="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed flex-1 mb-3">{p.desc}</p>
                      <div className="flex items-center gap-1.5 text-[11px] text-neutral-400 dark:text-neutral-500 mb-3">
                        <MapPin size={12} /> {p.location}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.specialties.map((s) => (
                          <span key={s} className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">{s}</span>
                        ))}
                      </div>
                    </motion.div>
                  </FadeIn>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 px-6 bg-neutral-50/50 dark:bg-neutral-950">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-900 dark:text-white">
                Become a partner
              </h2>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-md mx-auto mb-8">
                Join our growing network of certified partners. Whether you&apos;re an agency, technology company, or consultant — there&apos;s a program for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <motion.a href="/index-23/agency-partner" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-6 py-3 rounded-xl text-sm font-medium hover:bg-black dark:hover:bg-neutral-100 transition-colors">
                  Agency Partner <ArrowRight size={14} />
                </motion.a>
                <motion.a href="/index-23/affiliate-partner" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  Affiliate Partner
                </motion.a>
                <motion.a href="/index-23/strategic-partner" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center justify-center gap-2 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 px-6 py-3 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors">
                  Strategic Partner
                </motion.a>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>
      <Footer />
    </ThemeProvider>
  );
}
