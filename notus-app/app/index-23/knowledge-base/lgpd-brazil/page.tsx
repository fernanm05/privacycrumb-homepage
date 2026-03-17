"use client";
import { ArrowLeft, ArrowRight, Clock, CheckCircle, AlertTriangle, Globe, Shield, Users, FileText, Lock } from "lucide-react";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import FadeIn from "../../../components/FadeIn";
import ThemeProvider from "../../../components/ThemeProvider";

const keyPrinciples = [
  { icon: Shield, title: "10 Legal Bases", desc: "LGPD defines 10 legal bases for processing personal data, including consent, legitimate interest, compliance with legal obligation, and protection of credit. For cookies, consent is the primary basis." },
  { icon: Users, title: "Data Subject Rights", desc: "Brazilian residents have 9 rights: confirmation of processing, access, correction, anonymization, portability, deletion, information about sharing, information about consent denial consequences, and consent withdrawal." },
  { icon: Globe, title: "Extraterritorial Scope", desc: "LGPD applies to any organization that processes personal data of individuals in Brazil, regardless of where the organization is based — similar to GDPR's extraterritorial reach." },
  { icon: Lock, title: "Data Protection Officer", desc: "Organizations must appoint a Data Protection Officer (DPO / Encarregado) responsible for accepting complaints, communicating with the ANPD, and advising on data protection practices." },
  { icon: FileText, title: "Privacy Impact Assessments", desc: "The ANPD can require organizations to prepare a Data Protection Impact Assessment (DPIA / RIPD) for processing activities that pose high risk to data subjects." },
];

const complianceChecklist = [
  "Display a consent banner for Brazilian visitors before placing non-essential cookies",
  "Provide clear information about cookie purposes in Portuguese",
  "Allow users to opt in or out of specific cookie categories",
  "Maintain records of consent for audit purposes",
  "Appoint a DPO and provide their contact information",
  "Respond to data subject rights requests within 15 days",
  "Implement technical and administrative security measures",
  "Report data breaches to the ANPD within a reasonable timeframe",
];

export default function LgpdBrazilPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        <section className="pt-24 pb-10 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn><a href="/index-23/knowledge-base" className="inline-flex items-center gap-1.5 text-coral text-xs font-medium mb-6 hover:underline"><ArrowLeft size={12} /> Knowledge Base</a></FadeIn>
            <FadeIn delay={0.05}><div className="flex items-center gap-2 mb-3"><span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-green-500/10 text-green-500">Compliance Guides</span><span className="text-[10px] text-neutral-400 flex items-center gap-1"><Clock size={10} /> 5 min read</span></div></FadeIn>
            <FadeIn delay={0.1}><h1 className="text-[2rem] md:text-[2.75rem] font-semibold leading-[1.15] mb-4 tracking-tight text-neutral-900 dark:text-white">LGPD Brazil Compliance</h1></FadeIn>
            <FadeIn delay={0.15}><p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed max-w-xl">Understanding Brazil&apos;s Lei Geral de Proteção de Dados and how PrivacyCrumb helps you comply.</p></FadeIn>
          </div>
        </section>

        <section className="py-10 px-6">
          <div className="max-w-3xl mx-auto">
            <FadeIn><p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-8">The LGPD (Lei Geral de Proteção de Dados Pessoais, Law No. 13,709/2018) is Brazil&apos;s comprehensive data protection law. Effective since September 2020, it regulates the processing of personal data by individuals and organizations. It is enforced by the ANPD (Autoridade Nacional de Proteção de Dados).</p></FadeIn>

            {/* Key Principles */}
            <FadeIn><h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Key principles</h2></FadeIn>
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {keyPrinciples.map((p, i) => (
                <FadeIn key={p.title} delay={i * 0.04}>
                  <div className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900 h-full">
                    <div className="flex items-center gap-2 mb-2"><div className="w-7 h-7 rounded-lg bg-coral/10 flex items-center justify-center"><p.icon size={14} className="text-coral" /></div><h3 className="text-sm font-semibold text-neutral-900 dark:text-white">{p.title}</h3></div>
                    <p className="text-[12px] text-neutral-500 dark:text-neutral-400 leading-relaxed">{p.desc}</p>
                  </div>
                </FadeIn>
              ))}
            </div>

            {/* Compliance Checklist */}
            <FadeIn>
              <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Cookie compliance checklist for LGPD</h2>
              <div className="space-y-2 mb-10">
                {complianceChecklist.map((item) => (
                  <div key={item} className="flex items-start gap-3 p-3 rounded-xl border border-neutral-200/80 dark:border-neutral-800 bg-white dark:bg-neutral-900">
                    <CheckCircle size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-[13px] text-neutral-700 dark:text-neutral-300">{item}</span>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* Penalties */}
            <FadeIn>
              <div className="p-5 rounded-2xl border border-amber-200/50 dark:border-amber-900/30 bg-amber-50/50 dark:bg-amber-950/20 mb-10">
                <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-2 flex items-center gap-2"><AlertTriangle size={14} className="text-amber-500" /> Penalties</h3>
                <p className="text-[12px] text-neutral-600 dark:text-neutral-400 leading-relaxed">LGPD penalties range from warnings to fines of up to <strong>2% of revenue in Brazil</strong>, capped at <strong>R$50 million (~US$10 million) per violation</strong>. The ANPD can also order partial or total suspension of data processing activities.</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-neutral-200/80 dark:border-neutral-800">
                <a href="/index-23/knowledge-base/eprivacy-directive" className="flex-1 flex items-center gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group">
                  <ArrowLeft size={14} className="text-neutral-400 group-hover:text-coral" />
                  <div><p className="text-[10px] text-neutral-400">Previous</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">ePrivacy Directive</p></div>
                </a>
                <a href="/index-23/knowledge-base/iab-tcf-integration" className="flex-1 flex items-center justify-end gap-3 p-4 rounded-xl border border-neutral-200/80 dark:border-neutral-800 hover:border-coral/30 transition-colors group text-right">
                  <div><p className="text-[10px] text-neutral-400">Next</p><p className="text-sm font-medium text-neutral-900 dark:text-white group-hover:text-coral transition-colors">IAB TCF v2.2 Integration</p></div>
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
