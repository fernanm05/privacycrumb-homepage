"use client";
import { ArrowLeft, ArrowRight, Clock, Zap, TrendingUp, Shield, DollarSign, Users, BarChart3 } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const costOfNonCompliance = [
  { item: "Average GDPR fine", value: "€1.8M", note: "Based on 2023 enforcement data" },
  { item: "Legal defense costs", value: "€50-500K", note: "Per investigation" },
  { item: "Reputation damage", value: "Priceless", note: "63% of consumers avoid non-compliant brands" },
  { item: "Lost customers", value: "15-30%", note: "After a public privacy violation" },
  { item: "Operational disruption", value: "Weeks-Months", note: "DPA investigations require significant resources" },
];

const roiBenefits = [
  { icon: Shield, title: "Avoid Fines", value: "99%", desc: "reduction in regulatory risk. Proper consent management is the #1 defense in DPA investigations." },
  { icon: Users, title: "Build Trust", value: "73%", desc: "of consumers say they trust companies more when given clear cookie choices." },
  { icon: TrendingUp, title: "Better Conversion", value: "+12%", desc: "average conversion rate increase for sites with transparent, well-designed consent banners." },
  { icon: BarChart3, title: "Data Quality", value: "2x", desc: "better data quality from consented users vs. undisclosed tracking." },
  { icon: DollarSign, title: "Ad Performance", value: "+18%", desc: "improvement in ad ROAS when using consented first-party data vs. third-party cookies." },
  { icon: Zap, title: "Faster Audits", value: "80%", desc: "reduction in audit preparation time with automated consent records and documentation." },
];

const investmentLevels = [
  { level: "Free tier", cost: "$0/month", suitable: "Personal blogs, hobby sites", roi: "Basic protection from simple GDPR violations" },
  { level: "Starter", cost: "$9/month", suitable: "Small businesses", roi: "Protects against fines 1,000x the subscription cost" },
  { level: "Pro", cost: "$29/month", suitable: "Growing businesses, e-commerce", roi: "Full geo-targeting + A/B testing = maximum consent rates" },
  { level: "Enterprise", cost: "Custom", suitable: "Large organizations", roi: "Dedicated compliance support + unlimited scale" },
];

export default function RoiCompliancePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/infographics" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Infographics</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-coral/10 text-coral">Business</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">ROI of Cookie Compliance</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">How investing in proper cookie consent can save you from fines, build trust, and improve conversion rates.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Cost of Non-Compliance */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Cost of non-compliance</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {costOfNonCompliance.map((c, i) => (
                <FadeIn key={c.item} delay={i * 0.03}>
                  <div className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="text-right shrink-0 w-24"><span className="text-base font-bold text-red-500">{c.value}</span></div>
                    <div className="flex-1 border-l border-neutral-200/80 dark:border-neutral-800 pl-4">
                      <h4 className="text-[13px] font-semibold text-neutral-900 dark:text-white">{c.item}</h4>
                      <p className="text-[11px] text-neutral-500 dark:text-neutral-400">{c.note}</p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* ROI Benefits */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">ROI of proper compliance</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {roiBenefits.map((b, i) => (
                <FadeIn key={b.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-1"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><b.icon size={14} className="text-coral" /></div><span className="text-lg font-bold text-coral">{b.value}</span></div>
                    <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-1">{b.title}</h3>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{b.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Investment Table */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Investment vs return</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Plan</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Cost</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Best For</th><th className="px-4 py-3 font-semibold text-coral">ROI</th></tr></thead>
                  <tbody>
                    {investmentLevels.map((l, i) => (
                      <tr key={l.level} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">{l.level}</td>
                        <td className="px-4 py-3 text-coral font-medium">{l.cost}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{l.suitable}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{l.roi}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/infographics/third-party-sunset" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Third-Party Cookie Sunset</p></div>
                </a>
                <a href="/index-23/infographics/consent-mode-v2" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Google Consent Mode v2</p></div>
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
