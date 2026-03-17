"use client";
import { ArrowLeft, ArrowRight, Clock, Globe, MapPin } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const regions = [
  { region: "European Union", law: "GDPR + ePrivacy Directive", year: "2018", model: "Opt-In", penalty: "Up to €20M or 4% global turnover", color: "text-blue-500 bg-blue-500/10", notes: "Strictest global standard. Requires explicit prior consent for non-essential cookies." },
  { region: "United Kingdom", law: "UK GDPR + PECR", year: "2021", model: "Opt-In", penalty: "Up to £17.5M or 4% turnover", color: "text-blue-400 bg-blue-400/10", notes: "Post-Brexit GDPR equivalent. ICO enforces cookie consent requirements." },
  { region: "California, USA", law: "CCPA / CPRA", year: "2020/2023", model: "Opt-Out", penalty: "$2,500-$7,500 per violation", color: "text-amber-500 bg-amber-500/10", notes: "'Do Not Sell or Share' link required. Must honor GPC browser signals." },
  { region: "Virginia, USA", law: "VCDPA", year: "2023", model: "Opt-Out", penalty: "$7,500 per violation", color: "text-amber-400 bg-amber-400/10", notes: "Consumer rights to opt out of targeted advertising and data sales." },
  { region: "Colorado, USA", law: "CPA", year: "2023", model: "Opt-Out", penalty: "$20,000 per violation", color: "text-amber-400 bg-amber-400/10", notes: "Universal opt-out mechanism required. Similar to CCPA in scope." },
  { region: "Brazil", law: "LGPD", year: "2020", model: "Consent-Based", penalty: "Up to 2% of revenue, max R$50M", color: "text-green-500 bg-green-500/10", notes: "Similar to GDPR. National Authority (ANPD) enforces compliance." },
  { region: "Canada", law: "PIPEDA / Bill C-27", year: "2000/2023", model: "Implied Consent", penalty: "Up to CAD$10M", color: "text-red-500 bg-red-500/10", notes: "Implied consent for most cookies. Proposed CPPA will strengthen requirements." },
  { region: "Australia", law: "Privacy Act 1988", year: "1988", model: "Notice-Based", penalty: "Up to AUD$50M", color: "text-teal-500 bg-teal-500/10", notes: "No specific cookie law yet, but Privacy Act reform underway." },
  { region: "Japan", law: "APPI", year: "2022 rev.", model: "Opt-Out", penalty: "Up to ¥100M", color: "text-pink-500 bg-pink-500/10", notes: "2022 amendments strengthened cookie/tracking requirements." },
  { region: "South Korea", law: "PIPA", year: "2011/2023", model: "Opt-In", penalty: "Up to 3% of revenue", color: "text-indigo-500 bg-indigo-500/10", notes: "One of Asia's strictest privacy laws. Explicit consent required." },
  { region: "South Africa", law: "POPIA", year: "2021", model: "Consent-Based", penalty: "Up to ZAR 10M or imprisonment", color: "text-orange-500 bg-orange-500/10", notes: "GDPR-style consent model. Information Regulator enforces." },
  { region: "India", law: "DPDP Act", year: "2023", model: "Consent-Based", penalty: "Up to ₹250 crore (~$30M)", color: "text-violet-500 bg-violet-500/10", notes: "New law. Rules still being finalized. Applies to digital personal data." },
];

export default function PrivacyMapPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-teal-500/10 text-teal-500">Regulations</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 6 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Global Privacy Regulations Map</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Privacy regulations by country — GDPR, CCPA, LGPD, PIPEDA, POPIA, and more.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <div className="space-y-3 mb-10">
              {regions.map((r, i) => (
                <FadeIn key={r.region} delay={i * 0.03}>
                  <div className="p-4 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-2">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${r.color}`}><MapPin size={14} /></div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white flex-1">{r.region}</h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 font-mono">{r.year}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mb-2 text-[11px]">
                      <div><span className="text-neutral-400">Law:</span> <span className="text-neutral-700 dark:text-neutral-300 font-medium">{r.law}</span></div>
                      <div><span className="text-neutral-400">Model:</span> <span className="text-coral font-medium">{r.model}</span></div>
                      <div><span className="text-neutral-400">Penalty:</span> <span className="text-red-500 font-medium">{r.penalty}</span></div>
                    </div>
                    <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{r.notes}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/consent-flow" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">The Cookie Consent Flow</p></div>
                </a>
                <a href="/index-23/infographics/banner-best-practices" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Banner Best Practices</p></div>
                  <ArrowRight size={14} className="text-neutral-400 group-hover:text-coral" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
