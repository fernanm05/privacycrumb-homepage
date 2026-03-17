"use client";
import { ArrowLeft, ArrowRight, Clock, LayoutDashboard, BarChart3, Globe, Settings, FileText, Bell, Users, Shield } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const sections = [
  { icon: LayoutDashboard, title: "Home / Overview", content: "Your dashboard home shows a bird's-eye view of all your connected domains, total pageviews, consent rates, and recent activity. Use the quick-action cards to jump to scanning, banner settings, or consent logs." },
  { icon: Globe, title: "Domains", content: "The Domains panel lists every website connected to your account. For each domain you can view scan results, toggle the consent banner on/off, and access domain-specific settings. Add new domains with the '+ Add Domain' button." },
  { icon: BarChart3, title: "Analytics", content: "The Analytics tab provides charts and metrics for consent rates, opt-in vs opt-out percentages, visitor interactions by region, and banner impressions over time. Filter by date range and domain." },
  { icon: FileText, title: "Consent Logs", content: "The Consent Logs tab shows an audit-ready table of every consent event — timestamped with visitor ID, consent choices, banner version, and geographic region. Export as CSV or JSON." },
  { icon: Settings, title: "Banner Settings", content: "Configure your banner layout (bottom bar, modal, corner), colors, text, translations, cookie categories, and blocking behavior. Preview changes in real-time before publishing." },
  { icon: Shield, title: "Compliance", content: "The Compliance tab shows your current status for each regulation (GDPR, CCPA, etc.) with a checklist of requirements. Green checkmarks indicate you're compliant; yellow items need attention." },
  { icon: Bell, title: "Notifications", content: "Receive alerts for new cookies detected, scan completion, plan usage warnings, and compliance updates. Configure which notifications you want via email, dashboard, or both." },
  { icon: Users, title: "Team", content: "On Pro and Enterprise plans, invite team members and assign roles (Admin, Editor, Viewer). Manage permissions for who can edit banners, view logs, or manage billing." },
];

export default function DashboardOverviewPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-500">Getting Started</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 7 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Dashboard Overview</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">A complete tour of your PrivacyCrumb dashboard — every tab, feature, and setting explained.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">After logging in at <a href="https://app.privacycrumb.com" className="text-coral hover:underline">app.privacycrumb.com</a>, you&apos;ll land on your dashboard. Here&apos;s what each section does:</p>
            </FadeIn>

            {/* Sections Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-10">
              {sections.map((s, i) => (
                <FadeIn key={s.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-lg bg-coral/10 flex items-center justify-center"><s.icon className="text-coral" size={16} /></div>
                      <h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{s.title}</h3>
                    </div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{s.content}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Pro Tips */}
            <FadeIn>
              <div className="p-6 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900 mb-10">
                <h2 className="text-base font-semibold text-neutral-900 dark:text-white mb-3">Pro tips</h2>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li className="flex items-start gap-2"><span className="text-coral font-bold">→</span> Use keyboard shortcuts: press <code className="text-[11px] px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300">?</code> on any dashboard page to see available shortcuts.</li>
                  <li className="flex items-start gap-2"><span className="text-coral font-bold">→</span> Set up scheduled scans (weekly or monthly) so your cookie declaration stays automatically up to date.</li>
                  <li className="flex items-start gap-2"><span className="text-coral font-bold">→</span> Star your most-used domains to pin them to the top of the Domains list.</li>
                  <li className="flex items-start gap-2"><span className="text-coral font-bold">→</span> Use the search bar at the top of the dashboard to quickly find any setting or feature.</li>
                </ul>
              </div>
            </FadeIn>

            {/* Navigation */}
            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/adding-script-tag" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Adding the Script Tag</p></div>
                </a>
                <a href="/index-23/knowledge-base/first-cookie-scan" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Your First Cookie Scan</p></div>
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
