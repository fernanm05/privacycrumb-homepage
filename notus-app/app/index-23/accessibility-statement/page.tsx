"use client";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FadeIn from "../../components/FadeIn";
import ThemeProvider from "../../components/ThemeProvider";

const sections = [
  {
    id: "commitment",
    title: "Our Commitment",
    content: [
      "PrivacyCrumb is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to all users.",
      "We strive to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at the AA level. These guidelines explain how to make web content more accessible for people with disabilities and more user-friendly for everyone.",
    ],
  },
  {
    id: "measures",
    title: "Measures We Take",
    content: [
      "PrivacyCrumb takes the following measures to ensure accessibility of our website and platform:",
      "• Include accessibility as part of our mission statement and internal policies",
      "• Integrate accessibility into our procurement practices and development workflow",
      "• Provide continual accessibility training for our staff and development team",
      "• Assign clear accessibility goals and responsibilities across the organization",
      "• Employ formal accessibility quality assurance methods during development and testing",
      "• Conduct regular automated and manual accessibility audits",
    ],
  },
  {
    id: "conformance",
    title: "Conformance Status",
    content: [
      "The Web Content Accessibility Guidelines (WCAG) define requirements for designers and developers to improve accessibility for people with disabilities. WCAG defines three levels of conformance: Level A, Level AA, and Level AAA.",
      "PrivacyCrumb's website and platform are partially conformant with WCAG 2.1 Level AA. 'Partially conformant' means that some parts of the content do not fully conform to the accessibility standard. We are actively working to achieve full conformance.",
    ],
  },
  {
    id: "features",
    title: "Accessibility Features",
    content: [
      "Our website and platform include the following accessibility features:",
    ],
    features: [
      { category: "Navigation", items: ["Consistent navigation structure across all pages", "Skip-to-content links for keyboard users", "Descriptive page titles and heading hierarchy", "Breadcrumb navigation where applicable"] },
      { category: "Visual Design", items: ["Sufficient color contrast ratios (minimum 4.5:1 for text)", "Resizable text without loss of functionality up to 200%", "Dark mode support for reduced eye strain", "No content that flashes more than three times per second"] },
      { category: "Keyboard Support", items: ["All interactive elements are keyboard accessible", "Visible focus indicators on all focusable elements", "Logical tab order throughout all pages", "No keyboard traps"] },
      { category: "Screen Reader Support", items: ["Semantic HTML5 elements used throughout", "ARIA labels and roles where necessary", "Alt text provided for all meaningful images", "Form inputs have associated labels"] },
    ],
  },
  {
    id: "consent-banner",
    title: "Accessible Consent Banners",
    content: [
      "As a cookie consent management platform, we understand the importance of making consent banners accessible. Our consent banners are built with accessibility in mind:",
      "• Full keyboard navigation support — users can tab through all options and activate them with Enter or Space",
      "• Screen reader compatible — all buttons, toggles, and descriptions are properly labeled with ARIA attributes",
      "• High contrast mode support — banners adapt to the user's system contrast preferences",
      "• Focus management — focus is properly trapped within the consent modal when open and returned to the trigger element when closed",
      "• Responsive design — banners work across all screen sizes and orientations",
      "• Motion preferences — animations respect the user's prefers-reduced-motion setting",
    ],
  },
  {
    id: "known-limitations",
    title: "Known Limitations",
    content: [
      "Despite our best efforts, some areas of our website may not yet be fully accessible. We are aware of the following limitations and are actively working to resolve them:",
      "• Some older PDF documents may not be fully accessible — we are in the process of remediating these",
      "• Certain third-party integrations may not meet all accessibility standards — we work with our partners to improve their accessibility",
      "• Some complex data visualizations in analytics dashboards may require alternative text descriptions — we are adding these progressively",
      "We are committed to addressing these issues and welcome your feedback on areas where we can improve.",
    ],
  },
  {
    id: "technologies",
    title: "Technologies Used",
    content: [
      "Accessibility of PrivacyCrumb relies on the following technologies to work with the particular combination of web browser and any assistive technologies or plugins installed on your computer:",
      "• HTML5",
      "• CSS3",
      "• JavaScript",
      "• WAI-ARIA (Web Accessibility Initiative — Accessible Rich Internet Applications)",
      "• Next.js / React — with accessibility best practices",
      "These technologies are relied upon for conformance with the accessibility standards used.",
    ],
  },
  {
    id: "assessment",
    title: "Assessment Approach",
    content: [
      "PrivacyCrumb assessed the accessibility of our website and platform through the following approaches:",
      "• Self-evaluation using automated testing tools (axe-core, Lighthouse, WAVE)",
      "• Manual testing with keyboard-only navigation",
      "• Screen reader testing with NVDA, VoiceOver, and JAWS",
      "• Periodic third-party accessibility audits",
      "• User feedback and testing with people who have disabilities",
    ],
  },
  {
    id: "feedback",
    title: "Feedback and Contact",
    content: [
      "We welcome your feedback on the accessibility of our website and platform. If you encounter accessibility barriers or have suggestions for improvement, please let us know:",
      "Email: accessibility@privacycrumb.com",
      "We aim to respond to accessibility feedback within 5 business days and to resolve accessibility issues within 30 days where possible.",
      "If you are not satisfied with our response, you may escalate your complaint to your local equality or human rights body, or the relevant supervisory authority in your jurisdiction.",
    ],
  },
];

export default function AccessibilityStatementPage() {
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
                Accessibility{" "}
                <span className="bg-gradient-to-b from-[#F2A07A] to-coral bg-clip-text text-transparent">Statement</span>
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-neutral-500 dark:text-neutral-400 text-base max-w-lg mx-auto leading-relaxed">
                Our commitment to making PrivacyCrumb accessible and usable for everyone.
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

                      {/* Features Grid */}
                      {s.features && (
                        <div className="mt-6 grid sm:grid-cols-2 gap-4">
                          {s.features.map((f) => (
                            <div key={f.category} className="p-5 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900">
                              <h3 className="text-sm font-semibold text-neutral-900 dark:text-white mb-3">{f.category}</h3>
                              <ul className="space-y-1.5">
                                {f.items.map((item) => (
                                  <li key={item} className="flex items-start gap-2 text-[13px] text-neutral-600 dark:text-neutral-400">
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-coral mt-0.5 flex-shrink-0">
                                      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
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
