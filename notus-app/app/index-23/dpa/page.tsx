"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const sections = [
  {
    id: "introduction",
    title: "Introduction",
    content: [
      "This Data Processing Agreement ('DPA') forms part of the Terms and Conditions between PrivacyCrumb ('Processor', 'we', 'us') and you ('Controller', 'you') in relation to the processing of personal data by PrivacyCrumb on your behalf.",
      "This DPA applies where and only to the extent that PrivacyCrumb processes personal data on your behalf in the course of providing the cookie consent management services under your subscription agreement.",
      "The terms used in this DPA shall have the meanings set forth in this DPA. Capitalized terms not otherwise defined herein shall have the meanings given to them in the GDPR or, where applicable, other relevant data protection legislation.",
    ],
  },
  {
    id: "definitions",
    title: "Definitions",
    content: [
      "'Personal Data' means any information relating to an identified or identifiable natural person, as defined under Article 4(1) of the GDPR.",
      "'Processing' means any operation or set of operations performed on personal data, including collection, recording, organization, structuring, storage, adaptation, retrieval, consultation, use, disclosure, erasure, or destruction.",
      "'Data Subject' means the identified or identifiable natural person to whom the personal data relates — in this context, your website visitors whose consent data is collected through our platform.",
      "'Sub-processor' means any third party engaged by PrivacyCrumb to process personal data on behalf of the Controller.",
      "'Supervisory Authority' means an independent public authority responsible for monitoring the application of data protection law, as established by an EU Member State pursuant to Article 51 of the GDPR.",
    ],
  },
  {
    id: "scope",
    title: "Scope and Purpose of Processing",
    content: [
      "PrivacyCrumb processes personal data solely for the purpose of providing the cookie consent management services as described in our Terms and Conditions. The processing activities include:",
      "• Collecting and storing cookie consent preferences from your website visitors",
      "• Logging consent records with timestamps, consent status, and anonymized identifiers",
      "• Scanning your website for cookies and categorizing them",
      "• Generating compliance reports and analytics dashboards",
      "• Providing geo-targeting and language detection for consent banners",
      "The categories of personal data processed may include: IP addresses (anonymized), browser type, device information, consent preferences, timestamps, and geolocation data (country/region level only).",
    ],
  },
  {
    id: "obligations-processor",
    title: "Obligations of the Processor",
    content: [
      "PrivacyCrumb shall process personal data only on documented instructions from you, unless required to do so by applicable law. We shall inform you if we become aware that your instructions infringe applicable data protection law.",
      "We ensure that persons authorized to process personal data have committed themselves to confidentiality or are under an appropriate statutory obligation of confidentiality.",
      "We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:",
      "• Encryption of personal data in transit (TLS 1.2+) and at rest (AES-256)",
      "• Regular testing and evaluation of the effectiveness of security measures",
      "• Access controls and authentication mechanisms for all systems processing personal data",
      "• Incident detection and response procedures",
      "• Regular backups and disaster recovery capabilities",
      "We shall assist you in responding to requests from data subjects exercising their rights under the GDPR (access, rectification, erasure, restriction, portability, and objection).",
    ],
  },
  {
    id: "sub-processors",
    title: "Sub-processors",
    content: [
      "You provide general authorization to PrivacyCrumb to engage sub-processors for the processing of personal data. We will inform you of any intended changes concerning the addition or replacement of sub-processors, giving you the opportunity to object to such changes.",
      "We maintain a list of our current sub-processors, which is available upon request. Our sub-processors are contractually bound to the same data protection obligations as set out in this DPA.",
      "Current sub-processors include:",
    ],
    subprocessors: [
      { name: "Amazon Web Services (AWS)", location: "EU (Frankfurt)", purpose: "Cloud infrastructure and data hosting" },
      { name: "Cloudflare", location: "Global (EU primary)", purpose: "CDN, DDoS protection, and DNS" },
      { name: "Stripe", location: "US / EU", purpose: "Payment processing" },
      { name: "SendGrid", location: "US", purpose: "Transactional email delivery" },
    ],
  },
  {
    id: "international-transfers",
    title: "International Data Transfers",
    content: [
      "PrivacyCrumb shall not transfer personal data to a country outside the European Economic Area ('EEA') unless appropriate safeguards are in place as required by Article 46 of the GDPR.",
      "Where transfers to third countries are necessary, we ensure that such transfers are governed by Standard Contractual Clauses (SCCs) approved by the European Commission, or other approved transfer mechanisms such as an adequacy decision.",
      "We maintain records of all international data transfers and the safeguards applied to each transfer.",
    ],
  },
  {
    id: "data-breach",
    title: "Data Breach Notification",
    content: [
      "In the event of a personal data breach, PrivacyCrumb shall notify you without undue delay and in any event within 72 hours of becoming aware of the breach. The notification shall include:",
      "• A description of the nature of the breach, including the categories and approximate number of data subjects and records concerned",
      "• The name and contact details of our data protection officer or other contact point",
      "• A description of the likely consequences of the breach",
      "• A description of the measures taken or proposed to address the breach, including measures to mitigate its possible adverse effects",
      "We shall cooperate with you and take reasonable commercial steps to assist in the investigation, mitigation, and remediation of each such personal data breach.",
    ],
  },
  {
    id: "data-retention",
    title: "Data Retention and Deletion",
    content: [
      "PrivacyCrumb retains personal data only for as long as necessary to provide the cookie consent management services and to comply with applicable legal obligations.",
      "Consent records are retained for the duration specified in your subscription plan (30 days for Free, 90 days for Starter, 1 year for Pro, and unlimited for Enterprise plans).",
      "Upon termination of your subscription, we will delete or return all personal data processed on your behalf within 30 days, unless retention is required by applicable law. You may export your data before termination through your account dashboard.",
    ],
  },
  {
    id: "audit-rights",
    title: "Audit Rights",
    content: [
      "You have the right to audit PrivacyCrumb's compliance with this DPA. We shall make available to you all information necessary to demonstrate compliance with our obligations and allow for and contribute to audits, including inspections.",
      "Audits shall be conducted with reasonable prior notice (at least 30 days), during normal business hours, and shall not unreasonably interfere with our business operations. You shall bear your own costs of any audit.",
      "We also make available our SOC 2 Type II audit report, which is updated annually and available to customers upon request under NDA.",
    ],
  },
  {
    id: "dpia",
    title: "Data Protection Impact Assessment",
    content: [
      "PrivacyCrumb shall provide reasonable assistance to you with any data protection impact assessments and prior consultations with supervisory authorities that are required under Articles 35 and 36 of the GDPR, taking into account the nature of processing and the information available to us.",
    ],
  },
  {
    id: "liability",
    title: "Liability",
    content: [
      "Each party's liability under this DPA is subject to the exclusions and limitations of liability set out in the Terms and Conditions. In no event shall either party's aggregate liability arising out of or related to this DPA exceed the limitations set forth in the Terms and Conditions.",
    ],
  },
  {
    id: "term-termination",
    title: "Term and Termination",
    content: [
      "This DPA shall remain in effect for the duration of your subscription agreement with PrivacyCrumb. It shall automatically terminate upon the termination or expiry of your subscription.",
      "Sections relating to confidentiality, data deletion, audit rights, and liability shall survive termination of this DPA.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "For questions about this Data Processing Agreement or our data processing practices, please contact our Data Protection Officer:",
      "Email: dpo@privacycrumb.com",
      "We will endeavour to respond to your request within 72 hours.",
    ],
  },
];

export default function DPAPage() {
  return (
    <ThemeProvider>
      <Navbar />
      <main className="bg-white dark:bg-neutral-950 min-h-screen">
        {/* Hero */}
        <section className="text-center pt-24 pb-12 px-6 relative overflow-hidden grid-bg">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-neutral-950 to-transparent pointer-events-none z-[1]" />
          <div className="relative z-10 max-w-3xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-4 tracking-wide">Legal</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-[2.5rem] md:text-[3.25rem] font-semibold leading-[1.1] mb-5 tracking-tight text-neutral-900 dark:text-white">
                Data Processing{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Agreement</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                How PrivacyCrumb processes personal data on your behalf in compliance with the GDPR and other applicable data protection laws.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 px-6">
          <div className="max-w-5xl mx-auto">
            <FadeIn>
              <p className="text-coral text-sm font-medium mb-8">Last updated: 06 November 2025</p>
            </FadeIn>
            <div className="grid md:grid-cols-[220px_1fr] gap-10 md:gap-16">
              {/* Sidebar TOC */}
              <FadeIn>
                <nav className="hidden md:block sticky top-24">
                  <p className="text-[11px] uppercase tracking-wider text-neutral-400 dark:text-neutral-500 font-semibold mb-3">On this page</p>
                  <ul className="space-y-2 border-l border-neutral-200 dark:border-neutral-800">
                    {sections.map((s) => (
                      <li key={s.id}>
                        <a
                          href={`#${s.id}`}
                          className="block pl-4 text-[13px] text-neutral-500 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors leading-snug py-0.5"
                        >
                          {s.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </FadeIn>

              {/* Sections */}
              <div className="space-y-12">
                {sections.map((s, i) => (
                  <FadeIn key={s.id} delay={i * 0.05}>
                    <div id={s.id} className="scroll-mt-24">
                      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{s.title}</h2>
                      <div className="space-y-3">
                        {s.content.map((p, pi) => (
                          <p key={pi} className={`text-sm leading-relaxed ${p.startsWith("•") || p.startsWith("'") ? "pl-4 text-neutral-500 dark:text-neutral-500" : "text-neutral-600 dark:text-neutral-400"}`}>
                            {p}
                          </p>
                        ))}
                      </div>

                      {/* Sub-processor Table */}
                      {s.subprocessors && (
                        <div className="mt-5 overflow-x-auto">
                          <table className="w-full text-sm border border-neutral-200 dark:border-neutral-800 rounded-xl overflow-hidden">
                            <thead>
                              <tr className="bg-neutral-50 dark:bg-neutral-900">
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Sub-processor</th>
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Location</th>
                                <th className="text-left px-4 py-2.5 font-medium text-neutral-700 dark:text-neutral-300 border-b border-neutral-200 dark:border-neutral-800">Purpose</th>
                              </tr>
                            </thead>
                            <tbody>
                              {s.subprocessors.map((sp) => (
                                <tr key={sp.name} className="border-b border-neutral-100 dark:border-neutral-800/50 last:border-0">
                                  <td className="px-4 py-2.5 font-medium text-neutral-800 dark:text-neutral-200 whitespace-nowrap">{sp.name}</td>
                                  <td className="px-4 py-2.5 text-neutral-500 dark:text-neutral-500 whitespace-nowrap">{sp.location}</td>
                                  <td className="px-4 py-2.5 text-neutral-600 dark:text-neutral-400">{sp.purpose}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      )}
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </ThemeProvider>
  );
}
