"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const sections = [
  {
    id: "acceptance",
    title: "Acceptance of Terms",
    content: [
      "By accessing or using the PrivacyCrumb website, platform, or any associated services (collectively, the 'Service'), you agree to be bound by these Terms and Conditions ('Terms'). If you do not agree to all of these Terms, you may not use the Service.",
      "We reserve the right to update or modify these Terms at any time without prior notice. Your continued use of the Service after any changes constitutes acceptance of the new Terms. It is your responsibility to review these Terms periodically.",
    ],
  },
  {
    id: "description",
    title: "Description of Service",
    content: [
      "PrivacyCrumb provides a cloud-based cookie consent management platform ('CMP') that helps website owners comply with privacy regulations such as GDPR, CCPA, CPRA, ePrivacy Directive, and other applicable laws. Our Service includes cookie scanning, consent banner customization, consent logging, privacy policy generation, and related compliance tools.",
      "We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuance of the Service.",
    ],
  },
  {
    id: "accounts",
    title: "User Accounts",
    content: [
      "To access certain features of the Service, you must create an account. You agree to provide accurate, current, and complete information during registration and to update your information to keep it accurate and complete.",
      "You are responsible for safeguarding your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account or any other security breach.",
      "We reserve the right to suspend or terminate your account if any information provided proves to be inaccurate, not current, or incomplete, or if we reasonably believe your account has been compromised.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions and Billing",
    content: [
      "Some features of the Service require a paid subscription. By selecting a paid plan, you agree to pay the applicable fees as described on our Pricing page. All fees are quoted in US Dollars unless otherwise stated.",
      "Subscriptions automatically renew at the end of each billing period (monthly or annually) unless you cancel before the renewal date. You may cancel your subscription at any time through your account dashboard.",
      "We may change our pricing at any time. Price changes will take effect at the start of your next billing period. We will provide you with reasonable notice of any price changes.",
      "Refunds are handled on a case-by-case basis. If you are not satisfied with the Service within the first 14 days of a paid subscription, you may request a full refund by contacting our support team.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable Use",
    content: [
      "You agree to use the Service only for lawful purposes and in accordance with these Terms. You agree not to:",
      "• Use the Service in any way that violates any applicable laws or regulations",
      "• Attempt to gain unauthorized access to any part of the Service, other accounts, or computer systems",
      "• Use the Service to transmit any malicious code, viruses, or harmful data",
      "• Interfere with or disrupt the integrity or performance of the Service",
      "• Reverse engineer, decompile, or disassemble any aspect of the Service",
      "• Use the Service to collect or store personal data about other users without their consent",
      "• Resell, redistribute, or sublicense the Service without our prior written consent",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual Property",
    content: [
      "The Service and its original content, features, and functionality are owned by PrivacyCrumb and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.",
      "You retain ownership of any content you submit to the Service (such as website URLs, banner configurations, and custom text). By using the Service, you grant us a limited, non-exclusive license to use your content solely for the purpose of providing and improving the Service.",
      "Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of PrivacyCrumb. You must not use such marks without our prior written consent.",
    ],
  },
  {
    id: "data-privacy",
    title: "Data Privacy",
    content: [
      "Your privacy is important to us. Our collection and use of personal data is governed by our Privacy Policy, which is incorporated into these Terms by reference. By using the Service, you acknowledge that you have read and understood our Privacy Policy.",
      "We process personal data in accordance with applicable data protection laws, including the GDPR. We act as a data processor on your behalf when processing consent data collected through our platform on your websites.",
      "You are responsible for ensuring that your use of the Service complies with all applicable privacy laws in your jurisdiction, including obtaining any necessary consents from your website visitors.",
    ],
  },
  {
    id: "warranties",
    title: "Disclaimer of Warranties",
    content: [
      "THE SERVICE IS PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
      "We do not warrant that the Service will be uninterrupted, error-free, or completely secure. We do not guarantee that the Service will meet your specific requirements or that any errors will be corrected.",
      "While we strive to keep our platform updated with the latest privacy regulations, we do not provide legal advice and cannot guarantee full legal compliance. You should consult with a qualified legal professional for specific legal guidance.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of Liability",
    content: [
      "TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL PRIVACYCRUMB, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES.",
      "Our total liability for any claim arising out of or relating to these Terms or the Service shall not exceed the amount you paid us in the twelve (12) months preceding the claim.",
      "Some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages, so the above limitation may not apply to you.",
    ],
  },
  {
    id: "indemnification",
    title: "Indemnification",
    content: [
      "You agree to indemnify, defend, and hold harmless PrivacyCrumb and its officers, directors, employees, contractors, and agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees (including reasonable legal fees) arising out of or relating to your violation of these Terms or your use of the Service.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    content: [
      "We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason, including if you breach these Terms.",
      "Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including ownership provisions, warranty disclaimers, indemnification, and limitations of liability.",
      "You may export your consent data before termination. After termination, we will retain your data for a reasonable period to comply with legal obligations, after which it will be securely deleted.",
    ],
  },
  {
    id: "governing-law",
    title: "Governing Law",
    content: [
      "These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which PrivacyCrumb is incorporated, without regard to its conflict of law provisions.",
      "Any disputes arising from or relating to these Terms or the Service shall be resolved through binding arbitration in accordance with the applicable arbitration rules, unless you are located in a jurisdiction where arbitration agreements are not enforceable.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions about these Terms and Conditions, please contact us at:",
      "Email: legal@privacycrumb.com",
      "We will endeavour to respond to your request within 72 hours.",
    ],
  },
];

export default function TermsConditionsPage() {
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
                Terms &{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Conditions</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                Please read these terms carefully before using the PrivacyCrumb platform and services.
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
                          <p key={pi} className={`text-sm leading-relaxed ${p.startsWith("•") ? "pl-4 text-neutral-500 dark:text-neutral-500" : "text-neutral-600 dark:text-neutral-400"}`}>
                            {p}
                          </p>
                        ))}
                      </div>
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
