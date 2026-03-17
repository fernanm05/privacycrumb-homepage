"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const sections = [
  {
    id: "your-privacy",
    title: "Your Privacy",
    content: [
      "At PrivacyCrumb, we are committed to protecting your privacy as a customer and an online visitor to our website. We use the information we collect about you to maximize the cookie consent management services that we provide to you. We respect the privacy and confidentiality of the information provided by you and adhere to international privacy standards. Please read our privacy policy below carefully.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information We Collect from You",
    content: [
      "In the course of your visits to our website or use of our cookie consent management platform and SaaS services, we may obtain the following information about you: name, company name, email address, telephone number, credit card details, billing address, geographic location, IP address, platform usage data, support queries, feedback responses and social media handles (together 'Personal Data').",
      "Our cookie consent management services are not directed to persons under 18 and we do not knowingly collect Personal Data from anyone under 18. If we become aware that a child under 18 has provided us with Personal Data, we will delete that information as quickly as possible. If you are the parent or guardian of a child and you believe they have provided us with Personal Data without your consent, then please contact us.",
      "You can review, correct, update or delete your Personal Data by either logging into your PrivacyCrumb account dashboard and making the changes yourself or contacting our support team directly to do so.",
    ],
  },
  {
    id: "how-we-use",
    title: "How We Use Your Information",
    content: [
      "Personally Identifiable Information: We use the information we collect to deliver our cookie consent management and compliance services to you, including: communicating with you, providing technical support, notifying you of platform updates and new features, sharing useful privacy compliance content, measuring customer satisfaction, diagnosing system problems and providing you with a personalized experience.",
      "Marketing communications about our features and compliance updates are only sent to you if you have requested or subscribed to them. You can opt out of our marketing communications at any time by unsubscribing or emailing us and your request will be actioned immediately.",
      "Non-Personally Identifiable Information: We also use the information we collect in aggregated and anonymized forms to improve our platform and services, including: administering our website, producing usage reports and analytics, advertising our solutions and compliance tools, identifying user demands and assisting in meeting customer needs generally.",
      "Any information you choose to make publicly available, such as blog comments, testimonials and case studies on our website, will be available for others to see. If you subsequently remove this information, copies may remain viewable in cached and archived pages on other websites or if others have copied or saved the information.",
    ],
  },
  {
    id: "storage-security",
    title: "Storage and Security of Your Information",
    content: [
      "We will use all reasonable means to protect the confidentiality of your Personal Data while in our possession or control. All information we receive from you is stored and protected on our secure cloud servers from unauthorized use or access. Credit card information is encrypted before transmission and is not stored by us on our servers.",
      "To enable us to deliver our compliance services globally, we may transfer information that we collect about you, including Personal Data, across borders for storage and processing in different countries. If your Personal Data is transferred and processed internationally, it will only be transferred to countries that have adequate privacy protections.",
      "We retain your personal information for as long as needed to provide cookie consent management services to you and as otherwise necessary to comply with our legal obligations, resolve disputes and enforce our service agreements.",
      "In the event there is a breach of our security and your Personal Data is compromised, we will promptly notify you in compliance with the applicable law.",
    ],
  },
  {
    id: "cookies-pixels",
    title: "Cookies and Pixels",
    content: [
      "A cookie is a small file placed in your web browser that collects information about your web browsing behaviour. Use of cookies allows our platform to tailor its configuration to your needs and preferences. Cookies do not access information stored on your computer or any Personal Data (e.g. name, address, email address or telephone number). Most web browsers automatically accept cookies but you can choose to reject cookies by changing your browser settings. This may, however, prevent you from taking full advantage of our platform features.",
      "Our platform uses cookies to analyze website traffic, provide social media sharing and liking functionality and help us provide a better website visitor experience. In addition, cookies and pixels may be used to serve relevant ads to website visitors through third party services such as Google AdWords and Facebook Adverts. These ads may appear on this website or other websites you visit.",
    ],
  },
  {
    id: "third-parties",
    title: "Sharing Your Information with Third Parties",
    content: [
      "We may share your information with trusted third-party service providers who assist us in delivering our cookie consent management and compliance services, such as cloud hosting providers, payment processors, email service providers and analytics tools. These providers are bound by contractual obligations to protect your data and use it only for the purposes for which it was shared.",
      "We do not sell, trade, or otherwise transfer your Personal Data to outside parties for marketing purposes. We may disclose your information when we believe it is appropriate to comply with the law, enforce our site policies, or protect our or others' rights, property, or safety.",
    ],
  },
  {
    id: "your-rights",
    title: "Your Rights",
    content: [
      "Under applicable data protection laws, you have the following rights: the right to access your Personal Data, the right to correct inaccurate data, the right to delete your data ('right to be forgotten'), the right to restrict processing, the right to data portability, and the right to object to processing.",
      "To exercise any of these rights, please contact us at privacy@privacycrumb.com. We will respond to your request within 30 days in accordance with applicable laws.",
      "If you are located in the European Economic Area (EEA), you also have the right to lodge a complaint with your local data protection authority.",
    ],
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time. When we do, we will revise the 'Last updated' date at the top of this page. We encourage you to review this policy periodically to stay informed about how we are protecting your information.",
      "Your continued use of our services after any changes to this Privacy Policy constitutes your acceptance of those changes.",
    ],
  },
  {
    id: "contact",
    title: "Contact Us",
    content: [
      "If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:",
      "Email: privacy@privacycrumb.com",
      "We will endeavour to respond to your request within 72 hours.",
    ],
  },
];

export default function PrivacyPolicyPage() {
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
                Privacy{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Policy</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                How we collect, use, and protect your information when you use PrivacyCrumb.
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

              {/* Policy Sections */}
              <div className="space-y-12">
                {sections.map((s, i) => (
                  <FadeIn key={s.id} delay={i * 0.05}>
                    <div id={s.id} className="scroll-mt-24">
                      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{s.title}</h2>
                      <div className="space-y-3">
                        {s.content.map((p, pi) => (
                          <p key={pi} className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
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
