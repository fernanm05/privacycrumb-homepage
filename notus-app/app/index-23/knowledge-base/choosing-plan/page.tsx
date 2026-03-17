"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, X, Zap, Star, Crown } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const plans = [
  {
    name: "Free", price: "$0", tag: "", color: "text-neutral-500 bg-neutral-500/10",
    bestFor: "Personal blogs, small sites under 5,000 monthly pageviews",
    included: ["1 domain", "5,000 pageviews/month", "Basic cookie scanning", "Cookie consent banner", "Essential cookie categories", "Email support"],
    notIncluded: ["Custom CSS styling", "Geo-targeting", "A/B testing", "API access", "Priority support"],
  },
  {
    name: "Starter", price: "$9/mo", tag: "", color: "text-blue-500 bg-blue-500/10",
    bestFor: "Small businesses, portfolios, and growing websites",
    included: ["3 domains", "50,000 pageviews/month", "Automated weekly scans", "Customizable banner", "All cookie categories", "Multi-language support", "Consent analytics", "Email support"],
    notIncluded: ["Custom CSS", "Geo-targeting", "A/B testing", "API/webhooks", "Priority support"],
  },
  {
    name: "Pro", price: "$29/mo", tag: "Most Popular", color: "text-coral bg-coral/10",
    bestFor: "Growing businesses, e-commerce sites, and agencies",
    included: ["10 domains", "500,000 pageviews/month", "Daily automated scans", "Custom CSS styling", "Geo-targeting rules", "A/B testing", "Google Consent Mode v2", "Full API & webhook access", "Consent log & audit trail", "Priority email support"],
    notIncluded: ["Dedicated account manager", "Custom SLA", "SSO / SAML"],
  },
  {
    name: "Enterprise", price: "Custom", tag: "", color: "text-purple-500 bg-purple-500/10",
    bestFor: "Large organizations, agencies with 10+ clients, regulated industries",
    included: ["Unlimited domains", "Unlimited pageviews", "Real-time scanning", "Everything in Pro", "Dedicated account manager", "Custom SLA & uptime guarantee", "SSO / SAML authentication", "Custom integrations", "Phone support", "Compliance consulting"],
    notIncluded: [],
  },
];

const decisionHelpers = [
  { question: "How many domains do I have?", answer: "Free: 1, Starter: 3, Pro: 10, Enterprise: Unlimited. Each subdomain counts as a separate domain." },
  { question: "Will I exceed the pageview limit?", answer: "Check your analytics. If you're close to the limit, consider the next tier. Overage charges don't apply — your banner just stops showing for the rest of the month." },
  { question: "Do I need GDPR compliance?", answer: "If you have EU visitors, yes. The Free plan provides basic GDPR compliance. For geo-targeting (showing different banners per region), you need Pro." },
  { question: "Do I need API access?", answer: "If you need to programmatically control consent, export data via API, or receive webhooks, you need Pro or Enterprise." },
];

export default function ChoosingPlanPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-pink-500/10 text-pink-500">Account & Billing</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 4 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">Choosing the Right Plan</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Compare Free, Starter, Pro, and Enterprise plans to find the best fit for your website.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            {/* Plans */}
            <div className="space-y-4 mb-10">
              {plans.map((p, i) => (
                <FadeIn key={p.name} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <div className="flex items-center gap-2 mb-1">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${p.color}`}>{i === 0 ? <Zap size={14} /> : i === 1 ? <Star size={14} /> : i === 2 ? <Crown size={14} /> : <Crown size={14} />}</div>
                      <h3 className="text-base font-semibold text-neutral-900 dark:text-white">{p.name}</h3>
                      <span className="text-sm font-semibold text-coral ml-auto">{p.price}</span>
                      {p.tag && <span className="text-[10px] px-2 py-0.5 rounded-full bg-coral/10 text-coral font-medium">{p.tag}</span>}
                    </div>
                    <p className="text-[11px] text-neutral-400 mb-3">Best for: {p.bestFor}</p>
                    <div className="grid grid-cols-2 gap-x-6">
                      <div>
                        {p.included.map((item) => (
                          <div key={item} className="flex items-center gap-1.5 text-[11px] text-neutral-600 dark:text-neutral-400 mb-1"><CheckCircle size={10} className="text-emerald-500 shrink-0" />{item}</div>
                        ))}
                      </div>
                      {p.notIncluded.length > 0 && (
                        <div>
                          {p.notIncluded.map((item) => (
                            <div key={item} className="flex items-center gap-1.5 text-[11px] text-neutral-400 mb-1"><X size={10} className="text-neutral-300 dark:text-neutral-600 shrink-0" />{item}</div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Decision Helpers */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Common questions</h2></FadeIn>
            <div className="space-y-2 mb-10">
              {decisionHelpers.map((d) => (
                <FadeIn key={d.question}>
                  <div className="p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <h4 className="text-[13px] font-semibold text-neutral-900 dark:text-white mb-1">{d.question}</h4>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{d.answer}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Back to</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Knowledge Base</p></div>
                </a>
                <a href="/index-23/knowledge-base/managing-subscription" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">Managing Your Subscription</p></div>
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
