"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, Globe, Users, Settings, Shield, Layers, BarChart3 } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const features = [
  { icon: Globe, title: "Centralized Dashboard", desc: "View all your domains in one dashboard. Switch between sites instantly. See aggregate consent analytics across all properties." },
  { icon: Settings, title: "Per-Site Configuration", desc: "Each domain has its own banner design, cookie categories, blocking rules, and geo-targeting settings. Configurations are fully independent." },
  { icon: Shield, title: "Shared Compliance Settings", desc: "Set organization-level compliance policies and apply them to all sites. When regulations change, update once and push to all domains." },
  { icon: Users, title: "Team Access Controls", desc: "Invite team members with role-based access. Admins manage all sites; Editors can modify specific sites; Viewers can only see analytics." },
  { icon: Layers, title: "Template System", desc: "Create banner templates and apply them to multiple sites. Maintain brand consistency while allowing per-site overrides." },
  { icon: BarChart3, title: "Cross-Site Analytics", desc: "View aggregate consent rates, category acceptance, and regional breakdowns across all your domains in a single view." },
];

const setupSteps = [
  { num: "1", title: "Add a new domain", content: "Go to Account → Domains → '+ Add Domain'. Enter the domain name (e.g., example.com). Each subdomain requires a separate entry." },
  { num: "2", title: "Install the script", content: "Each domain gets a unique script tag with its own API key. Copy the script tag and add it to the domain's <head> section." },
  { num: "3", title: "Configure the banner", content: "Set up the consent banner for the new domain. You can start from scratch or clone settings from an existing domain." },
  { num: "4", title: "Run a cookie scan", content: "Trigger a scan for the new domain. PrivacyCrumb will detect all cookies and auto-categorize them." },
  { num: "5", title: "Assign team members (optional)", content: "If you have a team, assign members to the new domain with appropriate roles (Admin, Editor, Viewer)." },
];

const planLimits = [
  { plan: "Free", domains: "1 domain", note: "Single site only" },
  { plan: "Starter", domains: "3 domains", note: "Great for small businesses with a few properties" },
  { plan: "Pro", domains: "10 domains", note: "Best for agencies and growing businesses" },
  { plan: "Enterprise", domains: "Unlimited", note: "No domain limits" },
];

const tips = [
  "Use the template system to maintain consistent branding across all sites",
  "Clone an existing domain's configuration when adding a new site to save setup time",
  "Use team roles to give clients Viewer access to their own domain's analytics",
  "Set organization-level compliance defaults so new domains auto-inherit your rules",
  "Review the cross-site analytics monthly to identify sites with low consent rates",
];

export default function MultiSitePage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-500">Account & Billing</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span><span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">Pro</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Multi-Site Management</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Set up and manage multiple websites under a single PrivacyCrumb account.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Features */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Multi-site features</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((f, i) => (
                <FadeIn key={f.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-pink-500/10 flex items-center justify-center"><f.icon size={14} className="text-pink-500" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{f.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Setup Steps */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Adding a new domain</h2></FadeIn>
            <div className="space-y-3 mb-10">
              {setupSteps.map((s, i) => (
                <FadeIn key={s.num} delay={i * 0.04}>
                  <div className="flex gap-4 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-xs font-bold">{s.num}</span></div>
                    <div><h3 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-0.5">{s.title}</h3><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p></div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Plan Limits Table */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Domain limits by plan</h2>
              <div className="rounded-2xl border border-neutral-200/80 dark:border-neutral-800 overflow-hidden mb-10">
                <table className="w-full text-left text-[12px]">
                  <thead><tr className="bg-neutral-50 dark:bg-neutral-900"><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Plan</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Domains</th><th className="px-4 py-3 font-semibold text-neutral-900 dark:text-white">Note</th></tr></thead>
                  <tbody>
                    {planLimits.map((p, i) => (
                      <tr key={p.plan} className={`border-t border-neutral-200/80 dark:border-neutral-800 ${i % 2 === 0 ? "" : "bg-neutral-50/50 dark:bg-neutral-900/50"}`}>
                        <td className="px-4 py-3 font-medium text-neutral-900 dark:text-white">{p.plan}</td>
                        <td className="px-4 py-3 text-coral font-medium">{p.domains}</td>
                        <td className="px-4 py-3 text-neutral-500 dark:text-neutral-400">{p.note}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </FadeIn>

            {/* Tips */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-3">Tips</h2>
              <div className="space-y-2 mb-10">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-2.5 text-sm text-neutral-600 dark:text-neutral-400"><CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />{tip}</div>
                ))}
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/managing-subscription" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Managing Your Subscription</p></div>
                </a>
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
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
