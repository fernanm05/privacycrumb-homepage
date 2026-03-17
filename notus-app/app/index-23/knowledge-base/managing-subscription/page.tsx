"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, CreditCard, TrendingUp, TrendingDown, XCircle } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const actions = [
  {
    icon: TrendingUp, title: "Upgrading Your Plan", color: "text-emerald-500 bg-emerald-500/10",
    steps: [
      "Go to Account → Billing → Current Plan",
      "Click 'Change Plan' and select your new plan",
      "The upgrade takes effect immediately",
      "You're charged the prorated difference for the remaining billing period",
      "All new features are available instantly",
    ],
  },
  {
    icon: TrendingDown, title: "Downgrading Your Plan", color: "text-amber-500 bg-amber-500/10",
    steps: [
      "Go to Account → Billing → Current Plan",
      "Click 'Change Plan' and select a lower plan",
      "The downgrade takes effect at the end of your current billing period",
      "You keep access to current features until the period ends",
      "Review domain and pageview limits — excess domains will be paused",
    ],
  },
  {
    icon: XCircle, title: "Canceling Your Subscription", color: "text-red-500 bg-red-500/10",
    steps: [
      "Go to Account → Billing → Current Plan",
      "Click 'Cancel Subscription'",
      "Your plan remains active until the end of the current billing period",
      "After cancellation, your account reverts to the Free plan",
      "Your consent data and settings are retained for 90 days",
    ],
  },
];

const billingFaqs = [
  { q: "When am I charged?", a: "Billing is on the 1st of each month (monthly plans) or the anniversary of your signup (annual plans). You receive an invoice via email." },
  { q: "What payment methods are accepted?", a: "Visa, Mastercard, American Express, and PayPal. Enterprise plans can pay via invoice (bank transfer)." },
  { q: "Can I switch between monthly and annual?", a: "Yes. Switch to annual billing from Account → Billing to save 20%. The switch takes effect at your next billing date." },
  { q: "What happens if my payment fails?", a: "We retry the payment 3 times over 7 days. If all attempts fail, your account is downgraded to Free. Your settings are preserved for 30 days." },
  { q: "How do I get an invoice?", a: "Invoices are automatically emailed after each payment. You can also download past invoices from Account → Billing → Invoice History." },
  { q: "Is there a refund policy?", a: "We offer a 14-day money-back guarantee on all paid plans. Contact support@privacycrumb.com within 14 days of your first payment." },
];

export default function ManagingSubscriptionPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-500">Account & Billing</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 3 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Managing Your Subscription</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">How to upgrade, downgrade, or cancel your PrivacyCrumb subscription.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Actions */}
            <div className="space-y-4 mb-10">
              {actions.map((a, i) => (
                <FadeIn key={a.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${a.color}`}><a.icon size={16} /></div>
                      <h2 className="text-base font-semibold text-neutral-900 dark:text-white">{a.title}</h2>
                    </div>
                    <div className="space-y-2">
                      {a.steps.map((s, si) => (
                        <div key={s} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-md bg-coral/10 flex items-center justify-center shrink-0"><span className="text-coral text-[10px] font-bold">{si + 1}</span></div>
                          <span className="text-[12px] text-neutral-600 dark:text-neutral-400">{s}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Billing FAQs */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Billing FAQs</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {billingFaqs.map((f) => (
                <FadeIn key={f.q}>
                  <details className="group rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 overflow-hidden">
                    <summary className="px-4 py-3 cursor-pointer list-none flex items-center justify-between text-[13px] font-medium text-neutral-900 dark:text-white">
                      {f.q}
                      <span className="text-coral text-base shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                    </summary>
                    <div className="px-4 pb-3 -mt-1"><p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{f.a}</p></div>
                  </details>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/choosing-plan" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Choosing the Right Plan</p></div>
                </a>
                <a href="/index-23/knowledge-base/multi-site" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Multi-Site Management</p></div>
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
